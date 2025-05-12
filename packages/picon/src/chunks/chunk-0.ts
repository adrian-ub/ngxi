import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[picon2gIcon],svg[picon-2g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2V1h3v3H1v1h2v1H0V3h2V2m6 0H5v3h2V4H6V3h2v3H4V1h4"></svg:path>`,
})
export class Picon2gIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[picon3gIcon],svg[picon-3g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2V1h3v5H0V5h2V4H0V3h2V2m6 0H5v3h2V4H6V3h2v3H4V1h4"></svg:path>`,
})
export class Picon3gIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[picon4gIcon],svg[picon-4g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H5v3h2V4H6V3h2v3H4V1h4M2 4H0V1h1v2h1V2h1v4H2"></svg:path>`,
})
export class Picon4gIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[picon4chanIcon],svg[picon-4chan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3V1l3-1l-1 2l1 1M6 7L5 8V5h2l1 3M2 7L0 8l1-3h2v3M0 3l1-1l-1-2l3 1v2"></svg:path>`,
})
export class Picon4chanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[picon4kIcon],svg[picon-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6V1h1v2h2V1H6v5h1V4H5v2M0 4V1h1v2h1V1h1v5H2V4"></svg:path>`,
})
export class Picon4kIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[picon8kIcon],svg[picon-8k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6V1h1v2h2V1H6v5h1V4H5v2M1 2v1h1V2M1 4v1h1V4M0 6V1h3v5"></svg:path>`,
})
export class Picon8kIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAbacusIcon],svg[picon-abacus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h1v1h6V0h1v8H7V7H1v1H0m2-3h1v3H2M1 6h6V2H1m4-2h1v3H5M3 0h1v3H3"></svg:path>`,
})
export class PiconAbacusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[picon5gIcon],svg[picon-5g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H5v3h2V4H6V3h2v3H4V1h4M2 4H0V1h3v1H1v1h2v3H0V5h2"></svg:path>`,
})
export class Picon5gIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAcornIcon],svg[picon-acorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3q0 4-3.5 5Q0 7 0 3m0-2h3V0h1v1h3v1H0"></svg:path>`,
})
export class PiconAcornIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAdIcon],svg[picon-ad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6V5h1v1h1C3 .5 0 .5 0 6m4 0c4 0 4-4 0-4m1 1h1v2H5M1 3h1v1H1"></svg:path>`,
})
export class PiconAdIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAddressIcon],svg[picon-address-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7V1h5v6M0 0v8h7V6l1-1l-1-1l1-1l-1-1l1-1l-1-1M3 3L2 4l1 1.5h1L5 4L4 3m1 0L4 5H3L2 3l1-1h2"></svg:path>`,
})
export class PiconAddressIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAflatIcon],svg[picon-aflat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7q-3 0-1-1c-4-7 10-7 6 0q2 1-1 1M3 2q1 2 2 0m1 1Q4 4 6 5M5 6Q4 4 3 6M2 5q2-1 0-2"></svg:path>`,
})
export class PiconAflatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAddIcon],svg[picon-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6H2V4h6M4 8V2h2v6"></svg:path>`,
})
export class PiconAddIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAfricaIcon],svg[picon-africa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m4 3h1l2-4H6L5 1H3q-4 2 0 3m4 2V5L6 7m0-6H5l1 1.5L7 2"></svg:path>`,
})
export class PiconAfricaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAirconditionerIcon],svg[picon-airconditioner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h8v4H0m1-1h6V2H1m2 2v2c0 4-5 1-2 0v1h1V5m4 0L5 6c0 4 5 1 2 0v1H6"></svg:path>`,
})
export class PiconAirconditionerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAirbagIcon],svg[picon-airbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4C-.5 4-.5 0 2 0s2.5 4 0 4m0 3L1 8L0 7l2-2l2 2m2 1L3 5h1l3 3M5 5V3q1-2 2 0v4M6 2L5 1l1-1l1 1"></svg:path>`,
})
export class PiconAirbagIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAircraftIcon],svg[picon-aircraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 1l4-1v1L2 0m6 2q0 2-2 2H2Q0 4 0 2m2 5h4L5 8H3m0-4V1h2v3L4 8"></svg:path>`,
})
export class PiconAircraftIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAirhornIcon],svg[picon-airhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V4l1-1V1h2v2l1 1v4M1 2q6 0 7-2v5Q7 3 1 3"></svg:path>`,
})
export class PiconAirhornIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAirplayIcon],svg[picon-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h8v5H5L4 5L3 6H0m2 2l2-2l2 2M1 2v3h6V2"></svg:path>`,
})
export class PiconAirplayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAirportIcon],svg[picon-airport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v2H2L0 6V5h2l5-5q1 0 1 1M0 2l1-1l5 1l1 5l-1 1l-2-4"></svg:path>`,
})
export class PiconAirportIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAlarmIcon],svg[picon-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4c0-4 6-4 6 0S1 8 1 4m7-1.5Q8 0 5.5 0M0 2.5Q0 0 2.5 0M4 4l3 3l-1 1l-2-2l-2 2l-1-1"></svg:path>`,
})
export class PiconAlarmIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAlbumIcon],svg[picon-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4c0-4 6-4 6 0S1 8 1 4m3 1l1-1l-1-1l-1 1m5 4V0H0v8"></svg:path>`,
})
export class PiconAlbumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAlbumsIcon],svg[picon-albums-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6c0-2 6-2 6 0S1 8 1 6m4 0l-1-.5L3 6l1 .5M8 8V4H0v4m2-8h4l1 1H1m0 1h6l1 1H0"></svg:path>`,
})
export class PiconAlbumsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAlertIcon],svg[picon-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1H3v4h2M3 6v1h2V6M0 2l2-2h4l2 2v4L6 8H2L0 6"></svg:path>`,
})
export class PiconAlertIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAlienIcon],svg[picon-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8C-8-3 16-3 5 8M1 2q0 2 2 2q0-2-2-2m4 2q2 0 2-2q-2 0-2 2"></svg:path>`,
})
export class PiconAlienIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAliexpressIcon],svg[picon-aliexpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 7l1-1l1 1l-1 1M2 7l1-1l1 1l-1 1m4-3L6 6H2L0 0h1.5L2 1h5v3H4L3 3h3V2H2l1 3"></svg:path>`,
})
export class PiconAliexpressIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAlipayIcon],svg[picon-alipay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4V3h6v1C3 12-3 5 3 5l5 1v1L3 6c-4 0 1 3 3-2M1 2V1h6v1M3 0h1v3H3"></svg:path>`,
})
export class PiconAlipayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAmazonIcon],svg[picon-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v1h2m0-3H2V0h4v5H2V2h3m1 3q4 1 0 3l1-2M0 6q3 2 6 0q-2 4-6 1"></svg:path>`,
})
export class PiconAmazonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAmbulanceIcon],svg[picon-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h5l3 3v3H7Q6 9 5 7H3Q2 9 1 7H0m7-3L5 2v2M3 2H2v1H1v1h1v1h1V4h1V3H3"></svg:path>`,
})
export class PiconAmbulanceIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAmericaIcon],svg[picon-america-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m4 0V3h1l1-2H2l3 4v2.5L7 4"></svg:path>`,
})
export class PiconAmericaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAmericanfootballIcon],svg[picon-americanfootball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0v2L6 0M0 8V6l2 2M.5 5Q1 1 5 .5L7.5 3Q7 7 3 7.5M2 4l1 1l2-2l-1-1"></svg:path>`,
})
export class PiconAmericanfootballIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAmmoIcon],svg[picon-ammo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6.5v-4h2v4m1 0v-4h2v4m1 0v-4h2v4M0 2q1-4 2 0m1 0q1-4 2 0m1 0q1-4 2 0M0 8V7h2v1m1 0V7h2v1m1 0V7h2v1"></svg:path>`,
})
export class PiconAmmoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAmpIcon],svg[picon-amp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h8v6H0m1-4h6V3H1m0 4h6V6H1m1 1h1V5H2m3 2h1V5H5M1 2q3-4 6 0H6Q4 0 2 2"></svg:path>`,
})
export class PiconAmpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAmpersandIcon],svg[picon-ampersand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1H1v2h6v1H1v2h4V2h1v4h1v1H2V0h3"></svg:path>`,
})
export class PiconAmpersandIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAnaglyphIcon],svg[picon-anaglyph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v1h2V3M1 3v1h2V3m2 2L4 4L3 5H0V2h8v3"></svg:path>`,
})
export class PiconAnaglyphIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAnchorIcon],svg[picon-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8Q0 8 0 4h2L1 5q0 2 2 2V3Q1 1 4 0q3 1 1 3v4q2 0 2-2L6 4h2q0 4-3 4M3 1v1h2V1"></svg:path>`,
})
export class PiconAnchorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAndIcon],svg[picon-and-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6V0h6v2h2v6H2V6m1-3v2h2V3"></svg:path>`,
})
export class PiconAndIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAndroidIcon],svg[picon-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2C2-.5 6-.5 6 2m1 4V3h1v3M2 8V3h4v5H5V6H3v2M0 6V3h1v3"></svg:path>`,
})
export class PiconAndroidIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAngleIcon],svg[picon-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 7l7-7h1L2 6h6v1M0 2q6 0 6 6H5c0-4-1-5-5-5"></svg:path>`,
})
export class PiconAngleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAngryIcon],svg[picon-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0Q4 2 1 0q3 4 6 0m1 1Q6 4 8 7Q4 4 8 1M7 8Q4 4 1 8q3-2 6 0M0 7q2-3 0-6q4 3 0 6"></svg:path>`,
})
export class PiconAngryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAngularIcon],svg[picon-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 6l3 2l3-2l1-4l-4-2l-4 2m4 1l.5 1h-1M4 1l2 5H5V5H3v1H2"></svg:path>`,
})
export class PiconAngularIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAntennaIcon],svg[picon-antenna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6Q1 7 2 0M0 8l3-3l3 3M5 3c4-1 1-4 0 0"></svg:path>`,
})
export class PiconAntennaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAnvilIcon],svg[picon-anvil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7V6q4-1 1-3V1h6v2Q5 4 8 6v1M1.5 1.5V3Q1 3 0 1.5"></svg:path>`,
})
export class PiconAnvilIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconApartIcon],svg[picon-apart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v1H3v1L0 2.5L3 1v1m2 3H2v1h3v1l3-1.5L5 4"></svg:path>`,
})
export class PiconApartIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAppIcon],svg[picon-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6v2h2V6M3 6v2h2V6M0 6v2h2V6M0 3v2h2V3m1 0v2h2V3m1 0v2h2V3M6 0v2h2V0M3 0v2h2V0M0 0v2h2V0"></svg:path>`,
})
export class PiconAppIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAppleIcon],svg[picon-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2q0-2 2-2q0 2-2 2M3 8Q1 7 1 4q1-3 3-1.5Q6 1 7 3Q5 5 7 6Q6 9 4 7.5"></svg:path>`,
})
export class PiconAppleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconApplicationIcon],svg[picon-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2V1h1v1m1 0V1h1v1M1 7V3h6v4m1 1V0H0v8"></svg:path>`,
})
export class PiconApplicationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconArcheryIcon],svg[picon-archery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V4h8L6 5M1 0c7 0 7 8 0 8m1-1c5 0 5-6 0-6z"></svg:path>`,
})
export class PiconArcheryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconArchiveIcon],svg[picon-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V2h6v6M3 3v1h2V3M0 1V0h8v1"></svg:path>`,
})
export class PiconArchiveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconArchlinuxIcon],svg[picon-archlinux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l2.5-5L4 2H3l1-2l2.5 5L6 6h1l1 2l-3-1Q4 2 3 7"></svg:path>`,
})
export class PiconArchlinuxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconArmchairIcon],svg[picon-armchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V4h1v4m6 0V4h1v4M1 3c-2-4 8-4 6 0H6v2H2V3m0 5V6h4v2"></svg:path>`,
})
export class PiconArmchairIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAscIcon],svg[picon-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 8L0 6h1V0h1v6h1m0-5V0h1v1M3 3V2h3v1M3 5V4h5v1"></svg:path>`,
})
export class PiconAscIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAsiaIcon],svg[picon-asia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m7-2C5 0 0 1 1 4l1 2l1-2l1 2l.5-1Q6 5 6 3l1 1M5 7.5L6 7L4 6"></svg:path>`,
})
export class PiconAsiaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAtIcon],svg[picon-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2H1v4h6v1H2V1h4v3H5V3H3v2"></svg:path>`,
})
export class PiconAtIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAtmIcon],svg[picon-atm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4H0V1h8v3H7V2H1m1 6V3h4v5M4 7l1-1l-1-1h1L4 4L3 5l1 1H3"></svg:path>`,
})
export class PiconAtmIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAtomIcon],svg[picon-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 4l1-1l1 1l-1 1M3 5q-6-8 2-2q-6-4-2 2q6 4 2-2q6 8-2 2m2 0q-8 6-2-2q-4 6 2 2q4-6-2-2q8-6 2 2"></svg:path>`,
})
export class PiconAtomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAttachmentIcon],svg[picon-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1v4h1V2h1v4H3V0h5v8H1V2h1v5h5V1"></svg:path>`,
})
export class PiconAttachmentIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAustraliaIcon],svg[picon-australia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m6 2.5L7 6V5M2 5q2-.5 3 1q2-1 0-3v1L4 3l-2 .5M4 2l2 1V2"></svg:path>`,
})
export class PiconAustraliaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAwdIcon],svg[picon-awd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h1V2h3l2 2h2v3H7L6 8L5 7H3L2 8L1 7V6H0m5-2L4 3v1M2 4h1V3H2"></svg:path>`,
})
export class PiconAwdIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconAxeIcon],svg[picon-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h1v7H3M2 2h3l1-1q2 2 0 4L5 4H2"></svg:path>`,
})
export class PiconAxeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBabyIcon],svg[picon-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2c3-3-5-3-2 0M0 1h1q3 4 6 0h1L6 3v1H2V3m0 2l1 1H2l1 2H2L0 6m5 0l1-1l2 1l-2 2H5l1-2"></svg:path>`,
})
export class PiconBabyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBabyroomIcon],svg[picon-babyroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7h8v1M2 6V4H1V3h2v1h2V2h1v4m0-1l1-1l1 1l-1 1"></svg:path>`,
})
export class PiconBabyroomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBackIcon],svg[picon-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h4v6H4l1-2h1V4H4v2L0 3l4-3"></svg:path>`,
})
export class PiconBackIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBacklightIcon],svg[picon-backlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5V3h2v2M3 5V3h2v2M3 2V0h1v1M0 4V3h2L1 4M0 1V0l2 2H1"></svg:path>`,
})
export class PiconBacklightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBackpackIcon],svg[picon-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V4c0-4 6-4 6 0v4M2 5v1h3v1h1V5M3 2H2V0h1m2 2V0h1v2"></svg:path>`,
})
export class PiconBackpackIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBadgeIcon],svg[picon-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1q1-2 2 0q3-1 2 2q2 1 0 2q1 3-2 2q-1 2-2 0q-3 1-2-2q-2-1 0-2q-1-3 2-2"></svg:path>`,
})
export class PiconBadgeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBadmintonIcon],svg[picon-badminton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3C1-1 7-1 6 3M2 4h4l1 4l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1"></svg:path>`,
})
export class PiconBadmintonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBaguetteIcon],svg[picon-baguette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6q-5 4-3-1q3 .5 1-1q4 .5 1-1q3 .5 1-1q6-3 2 2"></svg:path>`,
})
export class PiconBaguetteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBalanceIcon],svg[picon-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4H6L5 3h3M4.5 7l2 1h-5l2-1L4 1M2 4H1L0 3h3"></svg:path>`,
})
export class PiconBalanceIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBallIcon],svg[picon-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8q1-3 4-4q-4 0-4 4c-5.5 0-5-8 0-8Q3 3 0 4q4 0 4-4c5.5 0 5 8 0 8"></svg:path>`,
})
export class PiconBallIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBallotIcon],svg[picon-ballot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v6h6V1M0 8V0h8v8"></svg:path>`,
})
export class PiconBallotIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBandaidIcon],svg[picon-bandaid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h1V6M2 5H1v1m3-4L2 4l2 2l2-2m1-2L6 3h1M5 1v1l1-1M3 8H2L0 6V5l5-5h1l2 2v1"></svg:path>`,
})
export class PiconBandaidIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBankIcon],svg[picon-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h7v1H0m3-2V3h1v3m1 0V3h1v3M1 6V3h1v3M0 2l3-2h1l3 2"></svg:path>`,
})
export class PiconBankIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBarcodeIcon],svg[picon-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7V2h1v5M2 7V2h1v5m1 0V2h2v5M0 7V2h1v5"></svg:path>`,
})
export class PiconBarcodeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBarrelIcon],svg[picon-barrel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7V1h4v6M1 1V.5h6V1M1 7v-.5h6V7M1.5 4v-.5h5V4"></svg:path>`,
})
export class PiconBarrelIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBarsIcon],svg[picon-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8V0h2v8M3 8V5h2v3M0 8V3h2v5"></svg:path>`,
})
export class PiconBarsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBasketIcon],svg[picon-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7L0 3h1l2-3h1L2 3h4L4 0h1l2 3h1L7 7"></svg:path>`,
})
export class PiconBasketIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBatIcon],svg[picon-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1q1 1 2 0v2q1 0 1-1h2Q6 4 7 6Q5 5 4 7Q3 5 1 6q1-2-1-4h2q0 1 1 1"></svg:path>`,
})
export class PiconBatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBathIcon],svg[picon-bath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3V1h2M0 6V1h2L1 2v3h7v1L7 8L6 7H2L1 8"></svg:path>`,
})
export class PiconBathIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBathroomIcon],svg[picon-bathroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H3v3H1V5H0V2h4m0 4l1-4h2l1 4H7v2H5V6m0-5l1-1l1 1l-1 1M1 1l1-1l1 1l-1 1"></svg:path>`,
})
export class PiconBathroomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBatteryIcon],svg[picon-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconBatteryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBattery0Icon],svg[picon-battery0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7V2H3v5M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconBattery0Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBattery1Icon],svg[picon-battery1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6V2H3v4M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconBattery1Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBattery2Icon],svg[picon-battery2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5V2H3v3M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconBattery2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBattery3Icon],svg[picon-battery3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4V2H3v2M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconBattery3Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBattery4Icon],svg[picon-battery4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3V2H3v1M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconBattery4Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBattery5Icon],svg[picon-battery5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconBattery5Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBattleaxeIcon],svg[picon-battleaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h1v7H3m2-6l1-1q2 2 0 4L5 4H2L1 5q-2-2 0-4l1 1"></svg:path>`,
})
export class PiconBattleaxeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBeachIcon],svg[picon-beach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1C3-2-2 3 1 7m3.5-3.5L8 7H7L4 4M3 5L2 6Q0 4 1 2m1-1q2-1 4 1L5 3"></svg:path>`,
})
export class PiconBeachIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBeanIcon],svg[picon-bean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0C0 0 0 8 4 8s4-8 0-8m0 0C2 5 7 3 4 8c2-5-3-3 0-8"></svg:path>`,
})
export class PiconBeanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBedIcon],svg[picon-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4L1 3l1-1l1 1M0 7V1h1v3h2V2h3q2 0 2 5L7 6H1"></svg:path>`,
})
export class PiconBedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBedbunkIcon],svg[picon-bedbunk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6L1 5l1-1l1 1M0 8V0h1v2h2V0h5v8L7 7H1m1-7l1 1l-1 1l-1-1m0 5h2V4h4V3H1"></svg:path>`,
})
export class PiconBedbunkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBeeIcon],svg[picon-bee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1c2-3 6 1 3 3q1 6-3 3c-2 3-6-1-3-3q-3-4 3-3m0 5q3 3 2-2M4 2q-5-1-2 2"></svg:path>`,
})
export class PiconBeeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBeerIcon],svg[picon-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v5h1V2m1 0v5h1V2m1 1v2h1V3M0 8l1-2V0h1q2 3 3 0h1v2c3-1 3 5 0 4l1 2"></svg:path>`,
})
export class PiconBeerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBellIcon],svg[picon-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 6l1-1c0-5 4-5 4 0l1 1M3 7h2v1H3"></svg:path>`,
})
export class PiconBellIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBeltIcon],svg[picon-belt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v4h1V2M1 7V1l2 1v4M0 5V3h1v2m6 0v3L4 7V1l3-1v3h1v2"></svg:path>`,
})
export class PiconBeltIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBikeIcon],svg[picon-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6L2 4l2-2l1 1h2v1H4l1 1v3H4m1-8l1 1l-1 1l-1-1M0 6.5L1.5 5L3 6.5L1.5 8m5-3L8 6.5L6.5 8L5 6.5"></svg:path>`,
})
export class PiconBikeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBillIcon],svg[picon-bill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4c0-2 6-2 6 0S1 6 1 4m7 2V2H0v4m4-1h1V3H3l1 1"></svg:path>`,
})
export class PiconBillIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBinocularIcon],svg[picon-binocular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1.5h2V0H5M1 1.5h2V0H1m2.5 4h1V2h-1M8 7V4L7 2H5v2l1 3M2 7l1-3V2H1L0 4v3"></svg:path>`,
})
export class PiconBinocularIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBirdIcon],svg[picon-bird-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2H5v1h1m1 0q1 3-3 3v2H3V6H0c5-2 3-7 8-4"></svg:path>`,
})
export class PiconBirdIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBirthdayIcon],svg[picon-birthday-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 5v.5h7V5M0 5q0-2 2-2V1h1v2h2V1h1v2q2 0 2 2v3H0"></svg:path>`,
})
export class PiconBirthdayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBitcoinIcon],svg[picon-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v1H3V0m1 7v1H3V7M2 0v8H1V0m5 7H0V6h5V4H2V3h3V2H0V1h6"></svg:path>`,
})
export class PiconBitcoinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBlameIcon],svg[picon-blame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3V0h1v3M1 8V6h1v2m1-5v3H0V3m6-3v4h2V0M6 6v2h2V6M1 4v1h1V4"></svg:path>`,
})
export class PiconBlameIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBluetoothIcon],svg[picon-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5.5L1 2h1l6 3.5L5 8H4V0h1l3 2.5L2 6H1l6-3.5L5 1v6"></svg:path>`,
})
export class PiconBluetoothIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBoardIcon],svg[picon-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8V3h4v5M0 8V5h3v3m1-6V0h4v2M0 4V0h3v4"></svg:path>`,
})
export class PiconBoardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBoatIcon],svg[picon-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 3l3-3v3m1 1V0l4 4M0 5l1 3h4l3-3M2 7L0 8V7l2-1l2 1l2-1l2 1v1L6 7L4 8"></svg:path>`,
})
export class PiconBoatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBoldIcon],svg[picon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 4l2-2H3v4h2M1 0q10 0 4 4q6 4-4 4"></svg:path>`,
})
export class PiconBoldIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBoltIcon],svg[picon-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6C1.5 6 1.5 2 4 2s2.5 4 0 4M2.5 0L0 2.5v3L2.5 8h3L8 5.5v-3L5.5 0"></svg:path>`,
})
export class PiconBoltIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBoneIcon],svg[picon-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5q-4 3-2-1q-2-4 2-1h2q4-3 2 1q2 4-2 1"></svg:path>`,
})
export class PiconBoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBookIcon],svg[picon-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v1h4V6m.5 1H7v1H3Q1 8 1 6V2q0-2 2-2h4v6h-.5"></svg:path>`,
})
export class PiconBookIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBookmarkIcon],svg[picon-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6L1 8V1h6v7"></svg:path>`,
})
export class PiconBookmarkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBoomerangIcon],svg[picon-boomerang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-7-1-7-3 2-2c1 9-1 9-2 2M4 3L3 1H2m3 3l2 2V5"></svg:path>`,
})
export class PiconBoomerangIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBootIcon],svg[picon-boot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h5l-.5 2Q8 4 8 6.5H0M0 7h8v1H0m0-8h5v1H0"></svg:path>`,
})
export class PiconBootIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBottleIcon],svg[picon-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V3l1.5-1V0h1v2L6 3v5M5 4H3v2h2"></svg:path>`,
})
export class PiconBottleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBowlingIcon],svg[picon-bowling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6c0-2.5 4-2.5 4 0S4 8.5 4 6M1 8q-2-2 0-5h1q2 3 0 5M1 2.5Q0 1 1 0h1q1 1 0 2.5"></svg:path>`,
})
export class PiconBowlingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBoxerIcon],svg[picon-boxer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v5h4V4l1 3h3V2"></svg:path>`,
})
export class PiconBoxerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBoxesIcon],svg[picon-boxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h1v1h1V5h1v3H0m4-3h1v1h1V5h1v3H4M2 1h1v1h1V1h1v3H2"></svg:path>`,
})
export class PiconBoxesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBoyIcon],svg[picon-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6L2 5h4M5 4V3h1v1M2 4V3h1v1M2 2c-4 7 8 7 4 0m1 0c4 8-10 8-6-1l7-1"></svg:path>`,
})
export class PiconBoyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBraIcon],svg[picon-bra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4c5 6-11 6-6 0V1q3 9 6 0"></svg:path>`,
})
export class PiconBraIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBranchIcon],svg[picon-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2v4h1V2M1 1v6h1V1m3 2V0h3v3M3 5v3H0V5m0-2V0h3v3m3-1h1V1H6m0 2h1L3 7V6"></svg:path>`,
})
export class PiconBranchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBreakIcon],svg[picon-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7q-2-3 0-6l1 1Q0 4 2 6m5-5q2 3 0 6L6 6q2-2 0-4M3 1h2v3H3m0 1h2v2H3"></svg:path>`,
})
export class PiconBreakIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBridgeIcon],svg[picon-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7c0-4-4-4-4 0H0V2h8v5"></svg:path>`,
})
export class PiconBridgeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBriefcaseIcon],svg[picon-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h2v1H3M0 7h8V2H6V0H2v2H0"></svg:path>`,
})
export class PiconBriefcaseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBrightnessIcon],svg[picon-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l2-3l-2-1l2-1l-2-3l4 2l4-2l-2 3l2 1l-2 1l2 3l-4-2m0 0c3 1 3-5 0-4"></svg:path>`,
})
export class PiconBrightnessIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBroadcastIcon],svg[picon-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2l2 5H5V6H3v2H1m4-4H3v1h2M4 0l1 1l-1 1l-1-1M2 0q-4 1 0 3q-2-2 0-3m4 0q4 1 0 3q2-2 0-3"></svg:path>`,
})
export class PiconBroadcastIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBroomIcon],svg[picon-broom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4H4l3-4h1M5 5L4 8V6L3 7L0 6l3-2"></svg:path>`,
})
export class PiconBroomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBrushIcon],svg[picon-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4v4h1V7l2 1h1V5l1 3h1V4M0 3V2h3V0h2v2h3v1"></svg:path>`,
})
export class PiconBrushIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBucketIcon],svg[picon-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h6L6 8H2M0 4c0-5.33 8-5.33 8 0H7c0-4-6-4-6 0"></svg:path>`,
})
export class PiconBucketIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBugIcon],svg[picon-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V4h8v1M0 8V6h8v2L7 7H1m7-7v3H0V0l1 2h6M3 8C1 8 1 0 4 0s3 8 1 8"></svg:path>`,
})
export class PiconBugIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBullIcon],svg[picon-bull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v1h1V3M3 3H2v1h1m1 3L1 5l1-4l2-1l2 1l1 4m0-3l1-2v3H0V0l1 2"></svg:path>`,
})
export class PiconBullIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBulldozerIcon],svg[picon-bulldozer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8q-2-1 0-2h3q2 1 0 2m2 0q0-9 1-1q2 1-1 1M0 5.5V0h3l1 3h1v2.5M3 3L2 1H1v2"></svg:path>`,
})
export class PiconBulldozerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBurgerIcon],svg[picon-burger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V4h8v1M0 3c0-4 8-4 8 0M0 6c0 3 8 3 8 0"></svg:path>`,
})
export class PiconBurgerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBurnIcon],svg[picon-burn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8Q0 6 4 0q4 6 1 8m0-1q1-1-1-4q-2 3-1 4"></svg:path>`,
})
export class PiconBurnIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBusIcon],svg[picon-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v1h1V5M1 5v1h1V5M1 2v2h6V2m0 6H6V7H2v1H1L0 7V1l2-1h4l2 1v6"></svg:path>`,
})
export class PiconBusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBusinessIcon],svg[picon-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-4-5.5 6-5.5 2 0M3 5h2v3l1-3l2 1v2H0V6l2-1l1 3"></svg:path>`,
})
export class PiconBusinessIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconBustIcon],svg[picon-bust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5C-1-.5 9-.5 5 5M1 8q3-4 6 0"></svg:path>`,
})
export class PiconBustIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconButterflyIcon],svg[picon-butterfly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c0-9 9 0 0 0c0 9 7 0 0 0c0 9-7 0 0 0c-9 0 0-9 0 0"></svg:path>`,
})
export class PiconButterflyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCablecarIcon],svg[picon-cablecar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1v2h2V1M0 1v1l8-1V0M4 4v2h1V4M1 4v2h6V4M0 8V3h8v5"></svg:path>`,
})
export class PiconCablecarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCactusIcon],svg[picon-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7L0 6V2h2v3h1m2-2h1V1h2v3L5 5M3 8V0h2v8"></svg:path>`,
})
export class PiconCactusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCakeIcon],svg[picon-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4v1h7V4M1 6v1h7V6M0 8V3l2-2l6 2v5"></svg:path>`,
})
export class PiconCakeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCalcIcon],svg[picon-calc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7V4h1v3M2 7V4h1v3M1 6V5h3v1M1 3V1h5v2M1 7V4h5v3M0 0v8h7V0"></svg:path>`,
})
export class PiconCalcIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCalendarIcon],svg[picon-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v4h6V3M0 8V1h2V0h1v1h2V0h1v1h2v7"></svg:path>`,
})
export class PiconCalendarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCallIcon],svg[picon-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h3v3H1l4 4V5h3v3H5Q1 7 0 3"></svg:path>`,
})
export class PiconCallIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCamcorderIcon],svg[picon-camcorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V1h5v6m0-2V3l3-2v6"></svg:path>`,
})
export class PiconCamcorderIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCameraIcon],svg[picon-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6c2 0 2-3 0-3S2 6 4 6M0 7V2h2V1h4v1h2v5"></svg:path>`,
})
export class PiconCameraIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCamerarollIcon],svg[picon-cameraroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V1h1V0h2v1h1v1h4v6M4 3v1h1V3m1 0v1h1V3M6 6v1h1V6M4 6v1h1V6"></svg:path>`,
})
export class PiconCamerarollIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCampingIcon],svg[picon-camping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 2l1-1h1L5 3l3 4v1H0V7l3-4l-1-2h1m1 3L2 7h4"></svg:path>`,
})
export class PiconCampingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCampingcarIcon],svg[picon-campingcar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h8v2H6l2 2v3H7L6 8L5 7H3L2 8L1 7H0m7-3L5 2v2M2 2H1v1h1"></svg:path>`,
})
export class PiconCampingcarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCandleIcon],svg[picon-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4v4H2m3-4q2-2-1-4q-3 2-1 4m1 0Q2 3 4 1q2 2 0 3M3 4q0 5 1 0"></svg:path>`,
})
export class PiconCandleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCandyIcon],svg[picon-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 2l2 1l1-1h2l1 1l2-1v4L6 5L5 6H3L2 5L0 6"></svg:path>`,
})
export class PiconCandyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCarIcon],svg[picon-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5Q3 6 7 6M1 6q4 0 0-1m6-1c0-3-6-3-6 0m1 3q-2 3-2-3c0-4 8-4 8 0q0 6-2 3"></svg:path>`,
})
export class PiconCarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCarouselIcon],svg[picon-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V0h4v8M0 7V1h1v6m6 0V1h1v6"></svg:path>`,
})
export class PiconCarouselIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCarrotIcon],svg[picon-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2q-9 11 2 2M5 3h3L6 2L5 0M1.5 5.5L2 7L1 6m3-1L3 4l2 1"></svg:path>`,
})
export class PiconCarrotIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCartIcon],svg[picon-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 6l1 1l-1 1l-1-1M2 7l1-1l1 1l-1 1M0 1V0h2l1 1h5L6 4H3v1h4l1 1H1l1-2l-1-3"></svg:path>`,
})
export class PiconCartIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCashierIcon],svg[picon-cashier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3L4 5L3 3H1V0h6v3M2 1v1h4V1M0 8l1-4h6l1 4M1 6.5V7h6v-.5"></svg:path>`,
})
export class PiconCashierIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCassetteIcon],svg[picon-cassette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.5L1 7l1-1h4l1 1l-1-1.5M2 3v1h1V3m3 0H5v1h1M0 7V1h8v6M1 5h6V2H1"></svg:path>`,
})
export class PiconCassetteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCastIcon],svg[picon-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7q1-2-1-1V5q3-1 2 2M1 2v1q3 0 3 3h3V2M3 7q1-4-3-3V1h8v6"></svg:path>`,
})
export class PiconCastIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCatIcon],svg[picon-cat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v1h1V3M2 3v1h1V3m5 2c0 4-8 4-8 0V0l2 2h4l2-2"></svg:path>`,
})
export class PiconCatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCctvIcon],svg[picon-cctv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4L1 1l7-1v3m0 2v1H5V3h1v2M0 4V2h1v2"></svg:path>`,
})
export class PiconCctvIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCelciusIcon],svg[picon-celcius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1H1v1h1m1 1H0V0h3m4 7H4V2h3l1 1H5v3h3"></svg:path>`,
})
export class PiconCelciusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCenterIcon],svg[picon-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6v1H1V6m7-2v1H0V4m6-2v1H2V2m5-2v1H1V0"></svg:path>`,
})
export class PiconCenterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCertifiedIcon],svg[picon-certified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1v3h3V1m0 7L3.5 6L2 8V5L1 4V1l1-1h3l1 1v3L5 5"></svg:path>`,
})
export class PiconCertifiedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChainIcon],svg[picon-chain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v1h4V4M5 6h2V3H5l1-1h1l1 1v3L7 7H4M1 7L0 6V3l1-1h3L3 3H1v3h2L2 7"></svg:path>`,
})
export class PiconChainIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChalkIcon],svg[picon-chalk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h8v6H0m1-1h3V5h2v1h1V2H1"></svg:path>`,
})
export class PiconChalkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChampagneIcon],svg[picon-champagne-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8h4L4.5 7L4 0l-.5 7M2 0c0 7 4 7 4 0"></svg:path>`,
})
export class PiconChampagneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChargeIcon],svg[picon-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h2v1H1m3-1h1V3h1v1h1v1H6v1H5V5H4M0 7h8V2H7V1H5v1H3V1H1v1H0"></svg:path>`,
})
export class PiconChargeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChargerIcon],svg[picon-charger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h5v8H0m4-7L0 4h2m0 0L0 7l4-3m2-3v1h1V1h1L7 3v3H3l3-1V3L5 1"></svg:path>`,
})
export class PiconChargerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChargingIcon],svg[picon-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4H4V1L3 5h1v3M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconChargingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChartIcon],svg[picon-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6H6V3h1M5 6H4V1h1M3 6H2V4h1M0 8V0h1v7h7v1"></svg:path>`,
})
export class PiconChartIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChatIcon],svg[picon-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6L0 8V2h3V0h5v6L6 4H5v2M1 5h3V3H1m3 0h3V1H4"></svg:path>`,
})
export class PiconChatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChatbotIcon],svg[picon-chatbot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6H0V1h2V0h1v1h2V0h1v1h2v7M2 4v1h4V4M2 3h1V2H2m3 1h1V2H5"></svg:path>`,
})
export class PiconChatbotIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCheckIcon],svg[picon-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7L0 4l1-1l2 2l4-4l1 1"></svg:path>`,
})
export class PiconCheckIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCheckedIcon],svg[picon-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5L1 3v2l2 2l4-4V1M0 8V0h8v8"></svg:path>`,
})
export class PiconCheckedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChecklistIcon],svg[picon-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v1h4V5M4 1v1h4V1M1 1v1h1V1M1 5v1h1V5M0 7V4h3v3M0 3V0h3v3"></svg:path>`,
})
export class PiconChecklistIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCheckoutIcon],svg[picon-checkout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3V0h1v3M1 8V6h1v2m1-5v3H0V3m4 1v1h2v2l2-2.5L6 2v2M1 4v1h1V4"></svg:path>`,
})
export class PiconCheckoutIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCheeseIcon],svg[picon-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h8v3H0m0-4l5-3q3 0 3 3M2 8l1-1l-1-1l-1 1m4 0l1-1l-1-1l-1 1"></svg:path>`,
})
export class PiconCheeseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChefIcon],svg[picon-chef-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5C0 5 0 2 2 2q2-2 4 0c2 0 2 3 0 3v3H2"></svg:path>`,
})
export class PiconChefIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChessIcon],svg[picon-chess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 3l1 3v2H4V3l1-2l3 2M2 5l1 3H0l1-3l-1-2h1V0h1v3h1M0 2V1h3v1"></svg:path>`,
})
export class PiconChessIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChickIcon],svg[picon-chick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 3l1-1c0-3 3-2 3 0l4 1c0 5-8 4-7 0m2-1Q2.5.5 2 2m1 6V6h2v2L4 6"></svg:path>`,
})
export class PiconChickIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChiliIcon],svg[picon-chili-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2q1 4 6 5q-8 1-7-4m1-3v1L1 2"></svg:path>`,
})
export class PiconChiliIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChipIcon],svg[picon-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1l1-1h6l1 1M0 3V2h2v1M0 5V4h2v1M1 7L0 6h8L7 7M3 5V2h5v1H5v2m1 0V4h2v1"></svg:path>`,
})
export class PiconChipIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChromeIcon],svg[picon-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m8-2Q3 1 2 3L1 1q0 5 3 5L3 8q4-2 3-5M3 5V3h2v2"></svg:path>`,
})
export class PiconChromeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconChurchIcon],svg[picon-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8V6H3v2m4 0H0V5l3-2V0h1v3l3 2M2 2V1h3v1"></svg:path>`,
})
export class PiconChurchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCircleIcon],svg[picon-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5.25 8-5.25 8 0S0 9.25 0 4m7 0c0-4-6-4-6 0s6 4 6 0"></svg:path>`,
})
export class PiconCircleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCliIcon],svg[picon-cli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v1h3V5M1 1l2 2.5L1 6h1l2-2.5L2 1M0 7V0h8v7"></svg:path>`,
})
export class PiconCliIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconClimbIcon],svg[picon-climb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1l3-1l-1 3m6-3v2L2 8H0V6h2V4h2V2h2V0"></svg:path>`,
})
export class PiconClimbIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconClipboardIcon],svg[picon-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5v1h3V5M1 3v1h5V3M3 0L2 2h4L5 0M0 8V1h8v7"></svg:path>`,
})
export class PiconClipboardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconClockIcon],svg[picon-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h4L5 3L4 0c5 0 5 8 0 8s-5-8 0-8"></svg:path>`,
})
export class PiconClockIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCloudIcon],svg[picon-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5C0 5-1 2 2 2c0-3 4-2 4-1c3 1 2 4 0 4"></svg:path>`,
})
export class PiconCloudIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCloverIcon],svg[picon-clover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3q1-5 2.5-1.5Q10 3 5 4q5 0 1.5 2.5Q5 10 4 5q-1 5-2.5 1.5Q-2 5 3 4q-5-1-1.5-2.5Q3-2 4 3"></svg:path>`,
})
export class PiconCloverIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCocktailIcon],svg[picon-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8H1l1-1V5L0 2h5L3 5v2m3-5.5H4C6-2 9 3 5 3"></svg:path>`,
})
export class PiconCocktailIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCodeIcon],svg[picon-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6H5l2-2l-2-2h1l2 2M3 6H2L0 4l2-2h1L1 4"></svg:path>`,
})
export class PiconCodeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCoffeeIcon],svg[picon-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v1h1V2M0 8V7h7v1M1 6V1h4c3 0 3 3 0 3v2"></svg:path>`,
})
export class PiconCoffeeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCogIcon],svg[picon-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0q0 3 2 1l1 2Q5 4 8 5L7 7Q5 5 5 8H3q0-3-2-1L0 5q3-1 0-2l1-2q2 2 2-1m0 5h2V3H3"></svg:path>`,
})
export class PiconCogIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCollumnIcon],svg[picon-collumn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V0h2v8M0 8V0h2v8m4 0V0h2v8"></svg:path>`,
})
export class PiconCollumnIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconColonIcon],svg[picon-colon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3V2h1v1m0 3H4V5h1"></svg:path>`,
})
export class PiconColonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconColorsIcon],svg[picon-colors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h8v3H0m5-8h3v4H5m1 3h1V6H6M2 4L0 2l2-2l2 2v2"></svg:path>`,
})
export class PiconColorsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCommaIcon],svg[picon-comma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7H3l1-1V5h1"></svg:path>`,
})
export class PiconCommaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCommitIcon],svg[picon-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v1h1V4m0 2v2H2V6H1V3h1V0h1v3h1v3"></svg:path>`,
})
export class PiconCommitIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCompassIcon],svg[picon-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l3-6h2l3 6l-4-5m3 0l1-1v3L7 4H6V3M3 1V0h2v1"></svg:path>`,
})
export class PiconCompassIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconConeIcon],svg[picon-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h8v1H0m2.5-5h3L6 5H2m1.5-5h1L5 2H3M1.5 6h5L7 7H1"></svg:path>`,
})
export class PiconConeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconConfigIcon],svg[picon-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8V0h2v8M1 8V0h2v8m1-1V5h4v2M0 4V2h4v2"></svg:path>`,
})
export class PiconConfigIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconConnectedIcon],svg[picon-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V3h8v2M4.5 1q4.5 3 0 6M4 7q-5-3 0-6"></svg:path>`,
})
export class PiconConnectedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconConstructionIcon],svg[picon-construction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h1q0-3 1-4l1 3V1h2v3l1-3q1 1 1 4h1v1H0"></svg:path>`,
})
export class PiconConstructionIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconContainerIcon],svg[picon-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h8v6H0m2-5v4h.5V2M4 2v4h.5V2M6 2v4h.5V2"></svg:path>`,
})
export class PiconContainerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconContrastIcon],svg[picon-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1c4 0 4 6 0 6v1c5 0 5-8 0-8s-5 8 0 8"></svg:path>`,
})
export class PiconContrastIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCookieIcon],svg[picon-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2Q5 5 8 4q0 4-4 4c-5 0-5-8 0-8Q3 3 6 2M2 3h1V2H2m1 5h1V6H3m2-1h1V4H5"></svg:path>`,
})
export class PiconCookieIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCouchIcon],svg[picon-couch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5q-2-2 1-1v1.5h4V4q3-1 1 1v2H1m1.5-3L1 3q0-1 2-1h2q2 0 2 1L5.5 4v1h-3"></svg:path>`,
})
export class PiconCouchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCouponIcon],svg[picon-coupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h1l3-4H5m0 3v1h1V5M2 2v1h1V2m5 1l-1 .5v1L8 5v2H0V5l1-.5v-1L0 3V1h8"></svg:path>`,
})
export class PiconCouponIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCowIcon],svg[picon-cow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6v2H0V2h3v1l3 3v2H5V6m0-1V3H4V0l1 2h2l1-2v3H7v2"></svg:path>`,
})
export class PiconCowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCowboyIcon],svg[picon-cowboy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3q4 2 8 0L6 5Q4 6 2 5m2-3q2-3 2 1q-2 1-4 0q0-4 2-1"></svg:path>`,
})
export class PiconCowboyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCppIcon],svg[picon-cpp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v4l4 2l4-2V2L4 0M3 5h3v1H2V2h4v1H3"></svg:path>`,
})
export class PiconCppIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCpuIcon],svg[picon-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V6l8-1v1M0 5V4l8-1v1M6 0l1 8H6L5 0M4 0l1 8H4L3 0M2 0l1 8H2L1 0M0 3V2l8-1v1M7 7H1V1h6"></svg:path>`,
})
export class PiconCpuIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCrateIcon],svg[picon-crate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V1h1v5h6V1h1v7M1 5V3h6v2"></svg:path>`,
})
export class PiconCrateIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCreditIcon],svg[picon-credit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h8v6H0m0-4h8V2H0m1 4h2V5H1"></svg:path>`,
})
export class PiconCreditIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCroissantIcon],svg[picon-croissant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5L2 2h4m2 4L5 5l2-2M0 6l1-3l2 2"></svg:path>`,
})
export class PiconCroissantIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCropIcon],svg[picon-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2V0h1v2h3v3h2v1H6v2H5V6H2V4h1v1h2V3H0V2"></svg:path>`,
})
export class PiconCropIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCrossedIcon],svg[picon-crossed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3L2 1L1 2l2 2l-2 2l1 1l2-2l2 2l1-1l-2-2l2-2l-1-1M0 8V0h8v8"></svg:path>`,
})
export class PiconCrossedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCrownIcon],svg[picon-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6L0 1l2 2h1l1-2l1 2h1l2-2l-1 5"></svg:path>`,
})
export class PiconCrownIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCrystalballIcon],svg[picon-crystalball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6C0 6 0 0 4 0s4 6 0 6M0 7l3-2h2l3 2M3 4q0-2 2-2q-2 0-2-2q0 2-2 2q2 0 2 2"></svg:path>`,
})
export class PiconCrystalballIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCsIcon],svg[picon-cs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V4h5v1M3 3V2h5v1M6 6V1h1v5M1 6h2l1 1H0V0h4L3 1H1m4 5H4V1h1"></svg:path>`,
})
export class PiconCsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCssIcon],svg[picon-css-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 7l3 1l3-1l1-7H0m1.5 3H5l.5-1H1V1h6L6 6H2V5h3V4H1.5"></svg:path>`,
})
export class PiconCssIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCubeIcon],svg[picon-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 0l4 2v4L4 8L0 6V2m4 5.5l3.5-1.75V2L4 3.5"></svg:path>`,
})
export class PiconCubeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCurlingIcon],svg[picon-curling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6c0-3 8-3 8 0S0 9 0 6m0 0v.5h8V6M2 3V2h3v2L4 3"></svg:path>`,
})
export class PiconCurlingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCursorIcon],svg[picon-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V0l5 5H3l1 2l-1 1l-1.5-2.5"></svg:path>`,
})
export class PiconCursorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCurveIcon],svg[picon-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8V6h2v2M0 2V0h2v2m0-1c8 1-2 4 3 5l1 1c-8-2 2-4-3-5"></svg:path>`,
})
export class PiconCurveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconCutIcon],svg[picon-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8H0V0h4M3 7V5H1v2m2-4V1H1v2m4 1l3 3l-1 1l-4-4l4-4l1 1"></svg:path>`,
})
export class PiconCutIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDashedIcon],svg[picon-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v2h6V3M0 8V0h8v8"></svg:path>`,
})
export class PiconDashedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDatabaseIcon],svg[picon-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2c0-2 6-2 6 0S1 4 1 2m0 2q3 2 6 0v1Q4 7 1 5m0 1q3 2 6 0v1Q4 9 1 7"></svg:path>`,
})
export class PiconDatabaseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDebianIcon],svg[picon-debian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8q-7-4-2-8q5-1 4 4q-4 2-2-2q-2 1-1 2q2 1 2-2q-3-3-4 2"></svg:path>`,
})
export class PiconDebianIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDescIcon],svg[picon-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 8L0 6h1V0h1v6h1m0 0V5h1v1M3 4V3h3v1M3 2V1h5v1"></svg:path>`,
})
export class PiconDescIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDescentIcon],svg[picon-descent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 2l2-2l1 3m0 3v2H6L0 2V0h2v2h2v2h2v2"></svg:path>`,
})
export class PiconDescentIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDesktopIcon],svg[picon-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V3h8v5M1 2V0h3v2M1 4v4h4V4m2 3V4H6v3"></svg:path>`,
})
export class PiconDesktopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDevicesIcon],svg[picon-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h1V0h6v2H6V1H2v4h1v1H0m4-3h4v5H4m1-1h2V4H5"></svg:path>`,
})
export class PiconDevicesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDiceIcon],svg[picon-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v3h1V4M4 5v1h3V5M4 4v3h3V4M0 6V.5l2 2V8m.5-6l-2-2H6l2 2M2.5 8V2.5H8V8"></svg:path>`,
})
export class PiconDiceIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDice1Icon],svg[picon-dice1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h1v1H3M0 7h7V0H0"></svg:path>`,
})
export class PiconDice1Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDice2Icon],svg[picon-dice2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5h1v1H1m4-5h1v1H5M0 7h7V0H0"></svg:path>`,
})
export class PiconDice2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDice3Icon],svg[picon-dice3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5h1v1H1m2-3h1v1H3m2-3h1v1H5M0 7h7V0H0"></svg:path>`,
})
export class PiconDice3Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDice4Icon],svg[picon-dice4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5h1v1H1m4-1h1v1H5m0-5h1v1H5M1 1h1v1H1M0 7h7V0H0"></svg:path>`,
})
export class PiconDice4Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDice5Icon],svg[picon-dice5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5h1v1H1m4-1h1v1H5M3 3h1v1H3m2-3h1v1H5M1 1h1v1H1M0 7h7V0H0"></svg:path>`,
})
export class PiconDice5Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDice6Icon],svg[picon-dice6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h1v1H2m2-1h1v1H4M2 3h1v1H2m2-1h1v1H4m0-3h1v1H4M2 1h1v1H2M0 7h7V0H0"></svg:path>`,
})
export class PiconDice6Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDiffIcon],svg[picon-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3V2h5v1M3 5V0h1v5M1 7V6h5v1"></svg:path>`,
})
export class PiconDiffIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDiggingIcon],svg[picon-digging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 4l2 4H4M3 1l1-1l1 1l-1 1M1 3l3 2v3H3V6L2 5L1 8H0m0-7l5 4V4L0 0"></svg:path>`,
})
export class PiconDiggingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDirectionIcon],svg[picon-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v3h1V4h1v1l2-1l-2-2M0 4l4-4l4 4l-4 4"></svg:path>`,
})
export class PiconDirectionIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDiscIcon],svg[picon-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m2 0l2 2l2-2l-2-2m0 3L3 4l1-1l1 1"></svg:path>`,
})
export class PiconDiscIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDisconnectedIcon],svg[picon-disconnected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6V5h2v1M2 3V2h2v1m2-2q4 3 0 6M2 7q-4-3 0-6"></svg:path>`,
})
export class PiconDisconnectedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDockerIcon],svg[picon-docker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5c1 3-8 5-7-1h6l2-2v3M4 3.5V2h2v1.5M2 2V.5h2V2M0 3.5V2h2v1.5M2 5v1h1V5"></svg:path>`,
})
export class PiconDockerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDogIcon],svg[picon-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V2l1 1h4V0l1 1h2v2H7v5H6L5 5H2L1 8"></svg:path>`,
})
export class PiconDogIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDollarIcon],svg[picon-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V0h1v8m1 0V0h1v8M1 4V1h6v1H0v1h6v4H0V6h7V4"></svg:path>`,
})
export class PiconDollarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDollyIcon],svg[picon-dolly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 7l4-2V4L4 6L2 2H0v1h2m1 0l2-1l1 2l-2 1m1 2L4 6L3 7l1 1"></svg:path>`,
})
export class PiconDollyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDoorIcon],svg[picon-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5V4H4v1M0 8V7h1V0h5v7h1v1"></svg:path>`,
})
export class PiconDoorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDotIcon],svg[picon-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5V4h1v1m1-4V0h1v1M2 3V2h1v1M0 8V0h1v7h7v1"></svg:path>`,
})
export class PiconDotIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDownIcon],svg[picon-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3l2 2l2-2l1 1l-3 3l-3-3"></svg:path>`,
})
export class PiconDownIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDowndoubleIcon],svg[picon-downdouble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 0l2 2l2-2l1 1l-3 3l-3-3m1 3l2 2l2-2l1 1l-3 3l-3-3"></svg:path>`,
})
export class PiconDowndoubleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDownloadIcon],svg[picon-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7v1H1V7m2-3V1h2v3h2L4 7L1 4"></svg:path>`,
})
export class PiconDownloadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDownmostIcon],svg[picon-downmost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6h6v1H1m1-5l2 2l2-2l1 1l-3 3l-3-3"></svg:path>`,
})
export class PiconDownmostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDownrightIcon],svg[picon-downright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4H2V0H0v6h4v2l4-3l-4-3"></svg:path>`,
})
export class PiconDownrightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDownwardIcon],svg[picon-downward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4V1h2v3h2L4 7L1 4"></svg:path>`,
})
export class PiconDownwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDressIcon],svg[picon-dress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8q3-4 1-6L1 3L0 2q1-2 3-2q1 2 2 0q2 0 3 2L7 3L6 2Q4 4 7 8"></svg:path>`,
})
export class PiconDressIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDrinkIcon],svg[picon-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8H3L2 2h5M1 1V0h3v2H3V1"></svg:path>`,
})
export class PiconDrinkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDriveIcon],svg[picon-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 3l2-3h4l2 3v5H0m1-5h6L6 1H2M1 7h6V4H1m1 1h1v1H2"></svg:path>`,
})
export class PiconDriveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDropletIcon],svg[picon-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1c7 8-7 8 0 0M3 4v1h1V3"></svg:path>`,
})
export class PiconDropletIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDrumsIcon],svg[picon-drums-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0H0l3 3h1m4-3H7L4 3h1m3 0c0-3-8-3-8 0v3c0 3 8 3 8 0M2 4Q0 3 2 2h4q2 1 0 2"></svg:path>`,
})
export class PiconDrumsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDryIcon],svg[picon-dry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 1l2 2l2-2M2 7L0 8V7l2-1l2 1l2-1l2 1v1L6 7L4 8M2 5L0 6V5l2-1l2 1l2-1l2 1v1L6 5L4 6"></svg:path>`,
})
export class PiconDryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconDuckIcon],svg[picon-duck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h1V0M3 8V6L0 3h4Q1 0 5 0l2 2H5q4 4-1 4v1l2 1"></svg:path>`,
})
export class PiconDuckIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEastIcon],svg[picon-east-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4L3 6V2"></svg:path>`,
})
export class PiconEastIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEatinIcon],svg[picon-eatin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3V2h4v1M1 5v2H0V1h1v3h2v3H2V5m3 2V4h2V1h1v6H7V5H6v2"></svg:path>`,
})
export class PiconEatinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEjectIcon],svg[picon-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V5h8v2M0 4l4-4l4 4"></svg:path>`,
})
export class PiconEjectIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconElbowIcon],svg[picon-elbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8V6h2v2M0 2V0h2v2m1 0L2 1h3v5l1 1H4V2"></svg:path>`,
})
export class PiconElbowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconElectricbassIcon],svg[picon-electricbass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V5l3 3m3-5l2 1l-1 1M6 6L5 7L4 5M3 1l1-1l1 2M1 3l1-1l1 2M1 5l5-5l2 2l-5 5"></svg:path>`,
})
export class PiconElectricbassIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconElectricguitarIcon],svg[picon-electricguitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V5l2 2m4-6l1-1v1M4 2l1-1v1M2 3l1-1v1M0 4l1-1v1m0 1l7-4v2L6 4L5 6H2"></svg:path>`,
})
export class PiconElectricguitarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconElevatorIcon],svg[picon-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 5l1.5 2L8 5M5 3l1.5-2L8 3M0 0v8h5V0M2 1h1v1H2m0 5V5H1V3h3v2H3v2"></svg:path>`,
})
export class PiconElevatorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEllipsisIcon],svg[picon-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h2v2H6M3 3h2v2H3M0 5V3h2v2"></svg:path>`,
})
export class PiconEllipsisIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEngineIcon],svg[picon-engine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h4v1H5v1h1v1h1V3h1v3H7V5H6v2H4L3 6H2V5H1v1H0V2h1v1h2V2H2"></svg:path>`,
})
export class PiconEngineIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEnlargeIcon],svg[picon-enlarge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1v1H2v2H1V1m5 3v2H4v1h3V4"></svg:path>`,
})
export class PiconEnlargeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEnterIcon],svg[picon-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5V4H3v1M0 8V7h1V0h6v7h1v1H6V1H5v7"></svg:path>`,
})
export class PiconEnterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEnvelopeIcon],svg[picon-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 2l3 2l3-2l-3 1m3 2V2H1v3M0 6V1h8v5"></svg:path>`,
})
export class PiconEnvelopeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEqualsIcon],svg[picon-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h6v1H1m0 2h6v1H1"></svg:path>`,
})
export class PiconEqualsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEraserIcon],svg[picon-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 5l2 2l2-1.5l-2-2M0 5l5-4l3 3l-5 4"></svg:path>`,
})
export class PiconEraserIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEscalatorIcon],svg[picon-escalator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4V1h1v2M2 8H0V6h2l4-4h2v2H6"></svg:path>`,
})
export class PiconEscalatorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEthereumIcon],svg[picon-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.5L4 6l3-1.5L4 8M1 4l3-4l3 4l-3 1.5"></svg:path>`,
})
export class PiconEthereumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEuropeIcon],svg[picon-europe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m2-2l1 2H1l1 2l2-2l1 2V4l2 1v1H1c4 4 9-1 5-5M2 1l1 .5v-1"></svg:path>`,
})
export class PiconEuropeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEvenIcon],svg[picon-even-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 6L6 2L4.5 6m-1 0L2 2L.5 6M7 7H5L4 6l2-4l2 4M3 7H1L0 6l2-4l2 4M0 2l3-1h2l3 1"></svg:path>`,
})
export class PiconEvenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconExitIcon],svg[picon-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3L3 5h1v3H3V6H2v1H0V6h1l1-3H1L0 4V2h4l1-1l-1-1l-1 1l2 2h1v1H5m2-3H6L5 0h3v8H7"></svg:path>`,
})
export class PiconExitIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconExternalIcon],svg[picon-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v6h6V5h1v3H0V0h3v1m4 1L3 6L2 5l4-4H4V0h4v4H7"></svg:path>`,
})
export class PiconExternalIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconEyeIcon],svg[picon-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2M4 2C1 2 1 6 4 6s3-4 0-4m4 2c0 4-8 4-8 0s8-4 8 0"></svg:path>`,
})
export class PiconEyeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFacebookIcon],svg[picon-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v8h8V0M4 8V4H3V3h1V2l1-1h2v1H5v1h2l-.5 1H5v4"></svg:path>`,
})
export class PiconFacebookIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFactoryIcon],svg[picon-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2v4l3-3v3l3-3v7H0"></svg:path>`,
})
export class PiconFactoryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFalseIcon],svg[picon-false-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4"></svg:path>`,
})
export class PiconFalseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFanIcon],svg[picon-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L2 2.5L4 4m0 0l2 1.5L4 8m0-4l1.5-2L8 4M0 4l2.5 2L4 4"></svg:path>`,
})
export class PiconFanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFandomIcon],svg[picon-fandom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V3L3 7l1 1M1 3v2l1.5 1.5l1-1M6 1L4.5 2.5l1 1L7 2M2 1L1 2l3 3l1-1M0 5V2l2-2l2 2l2-2l2 2v3L4 9"></svg:path>`,
})
export class PiconFandomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFareneightIcon],svg[picon-fareneight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1H1v1h1m1 1H0V0h3m4 5H5v2H4V2h4L7 3H5v1h2"></svg:path>`,
})
export class PiconFareneightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFastforwardIcon],svg[picon-fastforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4L4 0v8m0-4L0 0v8"></svg:path>`,
})
export class PiconFastforwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFastrewindIcon],svg[picon-fastrewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 4l4-4v8M0 4l4-4v8"></svg:path>`,
})
export class PiconFastrewindIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFaucetIcon],svg[picon-faucet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h3l1-1l1 1h2v3H5V5H0m2-4h4v1H2"></svg:path>`,
})
export class PiconFaucetIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFeatherIcon],svg[picon-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l7-7l-7 6m1 0c1-9 13-7 2-1h1"></svg:path>`,
})
export class PiconFeatherIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFeatherpenIcon],svg[picon-featherpen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l2-7l4-1l2 2l-1 4M3 3v1L0 8l4-3h1V3"></svg:path>`,
})
export class PiconFeatherpenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFeederIcon],svg[picon-feeder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3c0-3-6-3-6 0m0 1h6v4H1m5-5Q4-3 2 3"></svg:path>`,
})
export class PiconFeederIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFemaleIcon],svg[picon-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 8C-1 8-1 3 2.5 3s3.5 5 0 5M1 5.5c0 2 3 2 3 0s-3-2-3 0M3 4l4-4l1 1l-4 4m0-5l4 4l-1 1l-4-4"></svg:path>`,
})
export class PiconFemaleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFenceIcon],svg[picon-fence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V2l1-2l1 2v6m2 0V2l1-2l1 2v6M0 4V3h8v1M0 7V6h8v1"></svg:path>`,
})
export class PiconFenceIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFileIcon],svg[picon-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v2h2M1 8V0h4l2 2v6"></svg:path>`,
})
export class PiconFileIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFilesIcon],svg[picon-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v1h6V2H7v5M3 0v2h2M1 6V0h3l2 2v4"></svg:path>`,
})
export class PiconFilesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFillerIcon],svg[picon-filler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0H5v4h1M1 4v4H0V4l4-2h1M4 8L2 4l4-2l2 4"></svg:path>`,
})
export class PiconFillerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFilmIcon],svg[picon-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V1h8v7M1 3h6v3H1m0-1h6V4H1m0 3h1V2H1m5 5h1V2H6"></svg:path>`,
})
export class PiconFilmIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFilterIcon],svg[picon-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1l3 3v3l2-1V4l3-3"></svg:path>`,
})
export class PiconFilterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFingerprintIcon],svg[picon-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6C1 0 7 1 7 5H6c0-3-4-3-3 1m3 2V6h1v2M0 4c-1-5 8-5 8-2H7c0-2-7-2-6 2m0 1c0 3 4 3 3-1h1c1 5-5 5-5 1"></svg:path>`,
})
export class PiconFingerprintIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFirefoxIcon],svg[picon-firefox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h1l1-1v2h1L3 3l2 1C0 4 8 9 6 2l1 1l-1-3c8 10-12 11-4 0"></svg:path>`,
})
export class PiconFirefoxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFishIcon],svg[picon-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6c10-12 10 8 0-4m6 1v1l1-1"></svg:path>`,
})
export class PiconFishIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFistIcon],svg[picon-fist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V6c-3-1-3-5 2-4l1 1H2v1h5L6 6v2m0-5V0l1 1v2M2 1V0h1v1m1 0V0h1v2M0 1V0h1v1"></svg:path>`,
})
export class PiconFistIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFitnessIcon],svg[picon-fitness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6V1h2v5M1 6V1h2v5M0 4V3h8v1"></svg:path>`,
})
export class PiconFitnessIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFixIcon],svg[picon-fix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8L0 6l6-6c-9-1 3 11 2 2"></svg:path>`,
})
export class PiconFixIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFlagIcon],svg[picon-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V0c6 0 0 1 6 1v5c-6 0-.5-1-5-1v3"></svg:path>`,
})
export class PiconFlagIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFlameIcon],svg[picon-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5L2 4C0 9 9 8 5 2m1-2c5 14-12 7-3 0v3"></svg:path>`,
})
export class PiconFlameIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFlaskIcon],svg[picon-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7l2-4V1H1V0h2v3L2 5h4L5 3V0h2v1H6v2l2 4v1"></svg:path>`,
})
export class PiconFlaskIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFlightIcon],svg[picon-flight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3V2h1l1 1h2L3 1h1l2 2h2v1H1"></svg:path>`,
})
export class PiconFlightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFloodIcon],svg[picon-flood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3l2-2l2 2M2 7L0 8V7l2-1l2 1l2-1l2 1v1L6 7L4 8M2 5L0 6V5l2-1l2 1l2-1l2 1v1L6 5L4 6"></svg:path>`,
})
export class PiconFloodIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFloppyIcon],svg[picon-floppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3V1h1v2M3 .5V3h4V.5M1 4v3.5h6V4M0 8V0h8v8"></svg:path>`,
})
export class PiconFloppyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFlushIcon],svg[picon-flush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v2H0V6m6-3v2H2V3m6-3v2H4V0"></svg:path>`,
})
export class PiconFlushIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFolderIcon],svg[picon-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V1h3l1 1h4v5"></svg:path>`,
})
export class PiconFolderIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFolder2Icon],svg[picon-folder2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3L0 7l2-3h5l.5-1M0 7V1h3l1 1h4L6 7"></svg:path>`,
})
export class PiconFolder2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFoldersIcon],svg[picon-folders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V7h5V4h1v4M0 6V1h3l1 1h2v4"></svg:path>`,
})
export class PiconFoldersIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFootballIcon],svg[picon-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8q2.5-4 .5-3Q1 7 4 3L0 2q12-.5 6 2L4 8M2 7L1 8L0 7l1-1m4-5q2 2 1-1"></svg:path>`,
})
export class PiconFootballIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconForbiddenIcon],svg[picon-forbidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m2-1v2h4V3"></svg:path>`,
})
export class PiconForbiddenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconForestIcon],svg[picon-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8H5V3L4 2l1-2l2 2H6l2 2H6l2 2H6M3 8H2V6H0l2-2H0l2-2H1l1.5-2L4 2H3l2 2H3l2 2H3"></svg:path>`,
})
export class PiconForestIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFortIcon],svg[picon-fort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V6c0-2 2-2 2 0v2h3V1H6v2H5V1H3v2H2V1H0v7"></svg:path>`,
})
export class PiconFortIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconForumIcon],svg[picon-forum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6V5h5V1h1v6L7 6M0 5V0h6v4H1"></svg:path>`,
})
export class PiconForumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconForwardIcon],svg[picon-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H0v6h4L3 6H2V4h2v2l4-3l-4-3"></svg:path>`,
})
export class PiconForwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFoxIcon],svg[picon-fox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5Q5 6 4 8Q3 6 0 5l1-2l-1-3l3 2h2l3-2l-1 3M2 3l1 1V3m2 0v1l1-1M1 5q2 1 3 2q1-1 3-2M4 6l1-1l-1-1l-1 1"></svg:path>`,
})
export class PiconFoxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFragileIcon],svg[picon-fragile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0H3v2h1l1 2V1H4m1 4v2l2 1H1l2-1V5L1 3V0h6v3"></svg:path>`,
})
export class PiconFragileIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFridgeIcon],svg[picon-fridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2V1h1v1M2 6V4h1v2M1 3.5V8h6V3.5M1 0v3h6V0"></svg:path>`,
})
export class PiconFridgeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFrostyIcon],svg[picon-frosty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h4v2H2M0 2h8v1H0m4 4L3 5l1-1l1 1M1 3C0 9 8 9 7 3M2 3h1v1H2m3-1h1v1H5"></svg:path>`,
})
export class PiconFrostyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFuelIcon],svg[picon-fuel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 1l2 2v5H6V6Q3 6 4 2H1V1m4 1Q4 5 6 5M1.5 3C4 7-1 7 1.5 3"></svg:path>`,
})
export class PiconFuelIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFullscreenIcon],svg[picon-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v1H1v2H0V0m5 1V0h3v3H7V1m0 4v2H5v1h3V5M1 5v2h2v1H0V5"></svg:path>`,
})
export class PiconFullscreenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconFunctionIcon],svg[picon-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h2v1H2v7H0V7h1M0 3h3v1H0m4 3l3-3v1L4 8m0-4l3 3v1L4 5"></svg:path>`,
})
export class PiconFunctionIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGamepadIcon],svg[picon-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5c4 6 4-7-1-3c-5-4-5 9-1 3M2 5L1 4l1-1l1 1m3 1L5 4l1-1l1 1"></svg:path>`,
})
export class PiconGamepadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGamesaveIcon],svg[picon-gamesave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 2l1.5-1L6 2M1 0v6q0 2 2 2h3q2 0 2-2V0"></svg:path>`,
})
export class PiconGamesaveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGasIcon],svg[picon-gas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h5v7l1 1H0l1-1m1-4h3V1H2m4 4h1V3L6 2V1h2v5H6"></svg:path>`,
})
export class PiconGasIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGdriveIcon],svg[picon-gdrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3L1 7L0 5l2-4m5 4L6 7H2l1-2m0-5h2l2 4H5"></svg:path>`,
})
export class PiconGdriveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGenieIcon],svg[picon-genie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8c0-4-4-1-3-4.5L2 4C1 8 8 6 8 8M1 4c-3-3 9-3 5 0M4 2C1-1 7-1 4 2"></svg:path>`,
})
export class PiconGenieIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGentlemanIcon],svg[picon-gentleman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L3 1l1 1l1-1M3 8V5H2V2h4v3H5v3"></svg:path>`,
})
export class PiconGentlemanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGeometricIcon],svg[picon-geometric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V0l8 8M1 7h5L1 2m2 0c3-3 7 1 4 4m0-1c1-3-2-4-3-3"></svg:path>`,
})
export class PiconGeometricIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGhostIcon],svg[picon-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v1h1V2M3 2H2v1h1m5 5L6 7L4 8L2 7L0 8C-1-3 9-3 8 8"></svg:path>`,
})
export class PiconGhostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGifIcon],svg[picon-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h3v1H1v3h1V4h1v3H0m4-5h1v5H4m2-5h2v1H7v1h1v1H7v2H6"></svg:path>`,
})
export class PiconGifIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGirlIcon],svg[picon-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6L2 5h4M5 4V3h1v1M2 4V3h1v1M2 2c-4 7 8 7 4 0m1-2c5 11-11 11-6 0m3 1L2 0L1 2m3-1l3 1l-1-2"></svg:path>`,
})
export class PiconGirlIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGitIcon],svg[picon-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8L0 4l2-2l1 1v3h1V4l1 1l1-1l-3-3l1-1l4 4"></svg:path>`,
})
export class PiconGitIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGithubIcon],svg[picon-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 8C9 8 9 0 4 0s-5 8-1 8L1 6V5l2 1l.5-1Q1 4 2 2V1l1 .5h2L6 1v1q1 2-1.5 3l1 1"></svg:path>`,
})
export class PiconGithubIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGitlabIcon],svg[picon-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8L0 4l1-4zl3-8l1 4M.5 3L4 8l3.5-5"></svg:path>`,
})
export class PiconGitlabIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGlassIcon],svg[picon-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 1l1 2h4l1-2M2 8L0 0h8L6 8"></svg:path>`,
})
export class PiconGlassIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGolfIcon],svg[picon-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7h1v1m2 0h3l1-2H2M0 1.5L4 0h1v7H4V3"></svg:path>`,
})
export class PiconGolfIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGolferIcon],svg[picon-golfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7l1-1l1-2H0V0h7v.5H0L1 3h2l1 1l-1 2l1 2H3L2 6L1 7v1m6 0V7h1v1M4 3L3 2l1-1l1 1"></svg:path>`,
})
export class PiconGolferIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGondolaIcon],svg[picon-gondola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1v4H3V1M1 0v1h6V0M1 3v2h6V3M1 8L0 7V3l1-1h6l1 1v4L7 8"></svg:path>`,
})
export class PiconGondolaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGoogleIcon],svg[picon-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 1.75C4 0 1 1.5 1 4c0 4 6 4 6 0h1c0 5.5-8 5.5-8 0c0-4 5-5 7-3M4 4h3v1H4"></svg:path>`,
})
export class PiconGoogleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGpsIcon],svg[picon-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V3h1l2-2V0h2v1l2 2h1v2H7L5 7v1H3V7L1 5m3 1c2.5 0 2.5-4 0-4S1.5 6 4 6m0-1L3 4l1-1l1 1"></svg:path>`,
})
export class PiconGpsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGraphIcon],svg[picon-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V0h1v7h7v1M0 5l3-3l2 2l3-3v1L5 5L3 3L0 6"></svg:path>`,
})
export class PiconGraphIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGroceryIcon],svg[picon-grocery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0c6 10-10 11-4 0h1v2h2V0"></svg:path>`,
})
export class PiconGroceryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGroupIcon],svg[picon-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v2H5V6L4 4l1-1V1L4 0h3l1 1v2L7 4M1 4L0 3V1l1-1h2l1 1v2L3 4l1 2v2H0V6"></svg:path>`,
})
export class PiconGroupIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGsm0Icon],svg[picon-gsm0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h5V2M0 8l8-8v8"></svg:path>`,
})
export class PiconGsm0Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGsm1Icon],svg[picon-gsm1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v2h3V2M0 8l8-8v8"></svg:path>`,
})
export class PiconGsm1Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGsm2Icon],svg[picon-gsm2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v3h2V2M0 8l8-8v8"></svg:path>`,
})
export class PiconGsm2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGsm3Icon],svg[picon-gsm3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v4h1V2M0 8l8-8v8"></svg:path>`,
})
export class PiconGsm3Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGsm4Icon],svg[picon-gsm4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l8-8v8"></svg:path>`,
})
export class PiconGsm4Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGuiIcon],svg[picon-gui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H6v4h1M1 4v2h4V4M1 2v1h4V2M0 7V0h8v7"></svg:path>`,
})
export class PiconGuiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGuitarIcon],svg[picon-guitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v1h1V4m3-2L5 4q2 1-1 2c-1 5-7-1-2-2q1-3 2-1l2-2V0h2v2"></svg:path>`,
})
export class PiconGuitarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGunIcon],svg[picon-gun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h7v1H4v1L2 5v2H0m2-3h1V3H2"></svg:path>`,
})
export class PiconGunIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconGyrophareIcon],svg[picon-gyrophare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7h8v1M5 5V3L4 2v4M1 6l1-4h4l1 4"></svg:path>`,
})
export class PiconGyrophareIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHammerIcon],svg[picon-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7L7 8L2 3v2L0 3l2-1q1-2 5-1q-4 0-3 2"></svg:path>`,
})
export class PiconHammerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHandbagIcon],svg[picon-handbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4V0h4v4H5V1H3v3M1 3v4h6V3M0 8V2h8v6"></svg:path>`,
})
export class PiconHandbagIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHandleIcon],svg[picon-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v2h2V3M1 0v2h2V0m2 0v2h2V0M5 3v2h2V3M5 6v2h2V6M1 6v2h2V6"></svg:path>`,
})
export class PiconHandleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHandle2Icon],svg[picon-handle2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v2h2V6M3 3v2h2V3m1-3v2h2V0M6 3v2h2V3M6 6v2h2V6M0 6v2h2V6"></svg:path>`,
})
export class PiconHandle2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHappyIcon],svg[picon-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h4L5 6H3m2-2V2h1v2M0 8h8V0H0m2 4V2h1v2M1 7V1h6v6"></svg:path>`,
})
export class PiconHappyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHashIcon],svg[picon-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6V5h6v1M1 3V2h6v1M5 7V1h1v6M2 7V1h1v6"></svg:path>`,
})
export class PiconHashIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHaskellIcon],svg[picon-haskell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4.5H6.5L6 4h2m0-1H5l.5.5H8M2 6l2-2l-2-2h1l4 4H6L4.5 4.5L3 6M0 6l2-2l-2-2h1l2 2l-2 2"></svg:path>`,
})
export class PiconHaskellIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHdIcon],svg[picon-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6V1h2l1 1v3L6 6M5 2v3h1V2M0 6V1h1v2h1V1h1v5H2V4H1v2"></svg:path>`,
})
export class PiconHdIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHeadIcon],svg[picon-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8H3V7Q1 7 1 5H0l1-2V2c3-5 10 1 5 4"></svg:path>`,
})
export class PiconHeadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHeaderIcon],svg[picon-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6V5H0v1m8 2V7H0v1m7-5V1H1v2M0 4V0h8v4"></svg:path>`,
})
export class PiconHeaderIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHeadphoneIcon],svg[picon-headphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v3H0C-2-3 10-3 8 8H5V5h2c1-5-7-5-6 0"></svg:path>`,
})
export class PiconHeadphoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHeadsetIcon],svg[picon-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v2H0V4c0-5.5 8-5.5 8 0v4H4V7h3V6H5V4h2c0-4-6-4-6 0"></svg:path>`,
})
export class PiconHeadsetIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHeartIcon],svg[picon-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 8l2-2c4-4-1-6-2-3c-1-3-6-1-2 3"></svg:path>`,
})
export class PiconHeartIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHeartbrokenIcon],svg[picon-heartbroken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8V5H3l1.5-3H6L5 4h1zl2-2c4-4-1-6-2-3c-1-3-6-1-2 3"></svg:path>`,
})
export class PiconHeartbrokenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHeavierIcon],svg[picon-heavier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4L6 1L4.5 4m-1 3L2 2L.5 7M7 5H5L4 4l2-4l2 4M3 8H1L0 7l2-6l2 6M0 2l4-2h4"></svg:path>`,
})
export class PiconHeavierIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHeightIcon],svg[picon-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V3H1l3-3l3 3H5v2h2L4 8L1 5"></svg:path>`,
})
export class PiconHeightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHelicopterIcon],svg[picon-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1v1h1V1m0 4h2q0-2-2-2m1-1q2 0 2 4H3L2 4H0V1l1 1m1 6L1 7h7L7 8M2 1L1 0h7L7 1"></svg:path>`,
})
export class PiconHelicopterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHibernateIcon],svg[picon-hibernate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0c5 0 5 8 0 8s-5-8 0-8v1C0 1 0 7 4 7s4-6 0-6M3 2h2v4H3"></svg:path>`,
})
export class PiconHibernateIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHierarchyIcon],svg[picon-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8H6V6h2M2 8H0V6h2m3-4H3V0h2m2 5H6V4H2v1H1V3h6"></svg:path>`,
})
export class PiconHierarchyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHighlightIcon],svg[picon-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7v1h7V7M3 6H1V4l4-4l2 2"></svg:path>`,
})
export class PiconHighlightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHighlighterIcon],svg[picon-highlighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7L2 5l1-2l3 3M3 7L2 8H0l2-2m4.5-.5l-3-3L6 0h2v4"></svg:path>`,
})
export class PiconHighlighterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHikingIcon],svg[picon-hiking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3L3 5l1 1v2H3V6L2 5L1 8H0l2-6h2l1-1l-1-1l-1 1l2 2h1v1H5m2-2L6 8H5l1-6M0 2h1v2H0"></svg:path>`,
})
export class PiconHikingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHockeyIcon],svg[picon-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7v1h2V7M7 1L4 8H0V6h3l3-6"></svg:path>`,
})
export class PiconHockeyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHornIcon],svg[picon-horn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6c-4 1-4-5 0-4q3 3 5 0v4Q6 3 3 6"></svg:path>`,
})
export class PiconHornIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHorseIcon],svg[picon-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3q1-3 2-3l2 1v1H6q2 2 0 3v3H5V5L3 6v2H2V6L1 4v1L0 6q0-3 2-3"></svg:path>`,
})
export class PiconHorseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHospitalIcon],svg[picon-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6V5h1V4h2v1h1v1H5v1H3V6M0 3l4-2l4 2V2L4 0L0 2m0 6h8V4L4 2L0 4"></svg:path>`,
})
export class PiconHospitalIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHotelIcon],svg[picon-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6h8v1H0m1-2C0 1 8 1 7 5M4 0l1 1l-1 1l-1-1"></svg:path>`,
})
export class PiconHotelIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHourglass0Icon],svg[picon-hourglass0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v1h4V6L4 4m0 0l2-2V1H2v1M1 8V6l2-2l-2-2V0h6v2L5 4l2 2v2"></svg:path>`,
})
export class PiconHourglass0Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHourglass1Icon],svg[picon-hourglass1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v1h4V6L4 4M1 8V6l2-2l-2-2V0h6v2L5 4l2 2v2"></svg:path>`,
})
export class PiconHourglass1Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHourglass2Icon],svg[picon-hourglass2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v1h4V6L4 4m2-2V1H2v1M1 8V6l2-2l-2-2V0h6v2L5 4l2 2v2"></svg:path>`,
})
export class PiconHourglass2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHourglass3Icon],svg[picon-hourglass3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h4L4 4m2-2V1H2v1M1 8V6l2-2l-2-2V0h6v2L5 4l2 2v2"></svg:path>`,
})
export class PiconHourglass3Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHourglass4Icon],svg[picon-hourglass4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h2L4 4m1-1l1-1V1H2v1l1 1M1 8V6l2-2l-2-2V0h6v2L5 4l2 2v2"></svg:path>`,
})
export class PiconHourglass4Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHourglass5Icon],svg[picon-hourglass5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 4l2-2V1H2v1M1 8V6l2-2l-2-2V0h6v2L5 4l2 2v2"></svg:path>`,
})
export class PiconHourglass5Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHourglass6Icon],svg[picon-hourglass6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4L3 1L1 3m0 1L0 3l3-3l1 1l.5 2.5L7 4l1 1l-3 3l-1-1l-.5-2.5"></svg:path>`,
})
export class PiconHourglass6Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHourglass7Icon],svg[picon-hourglass7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2H1v4h1l2-2m0 1L2 7H0V1h2l2 2l2-2h2v6H6"></svg:path>`,
})
export class PiconHourglass7Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHourglass8Icon],svg[picon-hourglass8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4L1 5l2 2m1 0L3 8L0 5l1-1l2.5-.5L4 1l1-1l3 3l-1 1l-2.5.5"></svg:path>`,
})
export class PiconHourglass8Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHouseIcon],svg[picon-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8h2V5h2v3h2V4h1L4 0L0 4h1"></svg:path>`,
})
export class PiconHouseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconHtmlIcon],svg[picon-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 7l3 1l3-1l1-7H0m1 1h6v1H2.5L3 3h3.5L6 6H2V5h3V4H2"></svg:path>`,
})
export class PiconHtmlIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconIcecreamIcon],svg[picon-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4Q9 3 6 2c1-2-5-2-4 0q-3 1 .5 2L4 8M3 4h2L4 7"></svg:path>`,
})
export class PiconIcecreamIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconIciclesIcon],svg[picon-icicles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1q0 13-2 1H5q-.5 5-1 0H3q-.5 10-1 0H1Q0 8 0 1"></svg:path>`,
})
export class PiconIciclesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconInboxIcon],svg[picon-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1L1 6h1l1 1h2l1-1h1L6 1M0 8V5l1-5h6l1 5v3"></svg:path>`,
})
export class PiconInboxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconIncognitoIcon],svg[picon-incognito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8L1 7V4l1 1h1l1-1l1 1h1l1-1v3m1-3H0l2-2V1h4v1"></svg:path>`,
})
export class PiconIncognitoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconIndentIcon],svg[picon-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v1H0V6m8-2v1H3V4m-1-.5L0 5V2m8 0v1H3V2m5-2v1H0V0"></svg:path>`,
})
export class PiconIndentIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconInfinityIcon],svg[picon-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c7-1 4 7 0 3c-4-5-4 1-1 0l1 1c-7 1-4-7 0-3c4 5 4-1 1 0"></svg:path>`,
})
export class PiconInfinityIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconInfoIcon],svg[picon-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m3-1v4h2V3M3 1v1h2V1"></svg:path>`,
})
export class PiconInfoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconInstagramIcon],svg[picon-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 2l1-1l1 1l-1 1M0 8V0h8v8M1 1v6h6V1M2 4l2 2l2-2l-2-2m0 3L3 4l1-1l1 1"></svg:path>`,
})
export class PiconInstagramIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconIpphoneIcon],svg[picon-ipphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8H3V0h5M7 3V1H4v2m0 1v1h3V4M4 6v1h3V6M0 8V2h2v6m3-1V4h1v3"></svg:path>`,
})
export class PiconIpphoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconItalicIcon],svg[picon-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2V1h5v1H5L4 6h2v1H1V6h2l1-4"></svg:path>`,
})
export class PiconItalicIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconJackhammerIcon],svg[picon-jackhammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2V1h8v1M3.5 8L3 7l.5-1V4L2 3V0h4v3L4.5 4v2L5 7l-.5 1"></svg:path>`,
})
export class PiconJackhammerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconJavaIcon],svg[picon-java-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3Q1 0 5 0Q2 1 4 3m3 0q2 0 0 3V4q-9 0-5-2q-3 2 5 1M5 6Q0 7 2 4Q1 6 6 5M5 8q-7 0-4-2q-1 2 7 1M5 3q0-2 2-2q-3 0-2 2"></svg:path>`,
})
export class PiconJavaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconJeanIcon],svg[picon-jean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V0h6v8H5c0-8-2-8-2 0"></svg:path>`,
})
export class PiconJeanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconJerricanIcon],svg[picon-jerrican-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h4l1 1l1-1h2v1H7L6 3l1 1v4H0m1-5h3L3 2H1"></svg:path>`,
})
export class PiconJerricanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconJewelryIcon],svg[picon-jewelry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-4 4 6 4 2 0m0-1c7 7-9 7-2 0m1 1L2 1l2-1l2 1"></svg:path>`,
})
export class PiconJewelryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconJoinIcon],svg[picon-join-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 0l3 3H5v1l3 3v1H6V7L4 5L2 7v1H0V7l3-3V3H1"></svg:path>`,
})
export class PiconJoinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconJsIcon],svg[picon-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 7l3 1l3-1l1-7H0m3 1v5H1.5L1 4l1 1V1m2 0h3v1H5v1h1.5L6 6H4V5h1V4H4"></svg:path>`,
})
export class PiconJsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconJsonIcon],svg[picon-json-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1C1 1 3 4 1 4c2 0 0 3 2 3v1C0 8 3 5 0 4c3-1 0-4 3-4m2 0c3 0 0 3 3 4c-3 1 0 4-3 4V7c2 0 0-3 2-3c-2 0 0-3-2-3"></svg:path>`,
})
export class PiconJsonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconJujutsuIcon],svg[picon-jujutsu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0v3L0 8h3l1-2l1 2h3L7 3V0M1 3V2h6v1M5 2L3 6L2 5l2-3m0 0l2 2v2L4 3"></svg:path>`,
})
export class PiconJujutsuIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconJumpIcon],svg[picon-jump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h2L2 2l4-2l2 2v1L6 1L4 2l2 3v1H3v2H2M1 0l1 1l-1 1l-1-1"></svg:path>`,
})
export class PiconJumpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconJustifyIcon],svg[picon-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v1H0V6m8-2v1H0V4m8-2v1H0V2m8-2v1H0V0"></svg:path>`,
})
export class PiconJustifyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconKaabaIcon],svg[picon-kaaba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L0 1.5L4 3l4-1.5m-8 0l4-1l4 1V7L4 8L0 7m7-2H6v2h1"></svg:path>`,
})
export class PiconKaabaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconKartIcon],svg[picon-kart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h1V4h1l1 2h4L6 3L5 4h1l2 2v1Q7 9 6 7H3Q2 9 1 7H0"></svg:path>`,
})
export class PiconKartIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconKeyIcon],svg[picon-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2H1v1h1m2 1c-5 7-5-8 0-1h4v3L6 5V4"></svg:path>`,
})
export class PiconKeyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconKeyboardIcon],svg[picon-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1v1h1V1m3 0v1h1V1M4 1v1h1V1m0 2v1h1V3M3 3v1h1V3M1 3v1h1V3m0 2v1h4V5"></svg:path>`,
})
export class PiconKeyboardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconKittenIcon],svg[picon-kitten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V4H2v1m2 2l1-1H3m2-1h1V4H5m3 1c0 4-8 4-8 0V0l3 2h2l3-2"></svg:path>`,
})
export class PiconKittenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconKotlinIcon],svg[picon-kotlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 8l3-3l3 3M0 5V1h4M0 8V6l5-5h2"></svg:path>`,
})
export class PiconKotlinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLabIcon],svg[picon-lab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8L0 7l3-5l-2-2h6L5 2l3 5l-1 1"></svg:path>`,
})
export class PiconLabIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLabelIcon],svg[picon-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h2V1H1m3 7L0 4V0h4l4 4"></svg:path>`,
})
export class PiconLabelIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLadderIcon],svg[picon-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8V7H2v1m4-4V3H2v1m4 2V5H2v1m4-4V0H2v2M1 8V0h6v8"></svg:path>`,
})
export class PiconLadderIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLadyIcon],svg[picon-lady-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L3 1l1 1l1-1M3 8V6H2l1-3l-1 2H1l2-3h2l2 3H6L5 3l1 3H5v2"></svg:path>`,
})
export class PiconLadyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLampIcon],svg[picon-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6V4h1v2M2 8l1-1V4h2v3l1 1M0 4l2-4h4l2 4"></svg:path>`,
})
export class PiconLampIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLandingIcon],svg[picon-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h8v1H0m0-6l1-2l1 1v1l2 1l1-2l1 1v2l2 1v1H7L1 3"></svg:path>`,
})
export class PiconLandingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLandscapeIcon],svg[picon-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3H2V2h1m0 3l3-3l2 4H0l2-2"></svg:path>`,
})
export class PiconLandscapeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLatexIcon],svg[picon-latex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8H4l1.5-3L4 2h1l1 2l1-2h1L6.5 5L8 8H7L6 6M2 5V1H0V0h5v1H3v4m0 1v1H0V2h1v4"></svg:path>`,
})
export class PiconLatexIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLaudryIcon],svg[picon-laudry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4c0-4-6-4-6 0s6 4 6 0M0 0h8v8H0m2-3c0 2 5 1 4-1"></svg:path>`,
})
export class PiconLaudryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLeafIcon],svg[picon-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7q0-7 8-7q0 8-7 8l5-6"></svg:path>`,
})
export class PiconLeafIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLeftIcon],svg[picon-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2L3 4l2 2l-1 1l-3-3l3-3"></svg:path>`,
})
export class PiconLeftIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLeftdoubleIcon],svg[picon-leftdouble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2L6 4l2 2l-1 1l-3-3l3-3M4 2L2 4l2 2l-1 1l-3-3l3-3"></svg:path>`,
})
export class PiconLeftdoubleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLeftmostIcon],svg[picon-leftmost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v6h1V1m4 1L4 4l2 2l-1 1l-3-3l3-3"></svg:path>`,
})
export class PiconLeftmostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLeftwardIcon],svg[picon-leftward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h4v4H4v2L0 4l4-4"></svg:path>`,
})
export class PiconLeftwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLegoIcon],svg[picon-lego-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h4L5 6H3m2-2V3h1v1M0 6q0 2 2 2h4q2 0 2-2V3q0-2-2.5-2V0h-3v1Q0 1 0 3m2 1V3h1v1"></svg:path>`,
})
export class PiconLegoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLetterIcon],svg[picon-letter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5L2 4V2h4v2m2-1L4 1L0 3v4h8"></svg:path>`,
})
export class PiconLetterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLifterIcon],svg[picon-lifter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h2l1 4H1m2-5H0v8l1-1l1 1h2l1-3m0 3V1h1v6h1l1 1"></svg:path>`,
})
export class PiconLifterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLigatureIcon],svg[picon-ligature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7h3v1M0 4V3h6v4H5V4M1 7V2C1-.5 6-.5 6 2H5C5 .5 2 .5 2 2v5m5 0v1H4V7"></svg:path>`,
})
export class PiconLigatureIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLightbulbIcon],svg[picon-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8c1-4-4-6 1-8c5 2 0 4 1 8M3 6v1h2V6"></svg:path>`,
})
export class PiconLightbulbIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLighterIcon],svg[picon-lighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4L0 2l1-1l2 2m0 5V3h2v1h1v4M4 3c3-4-3-4 0 0c-1-3 1-3 0 0"></svg:path>`,
})
export class PiconLighterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLinkedinIcon],svg[picon-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V2h2v1q2-2 3 0v5H6V4L5 5v3M0 8V3h2v5M0 1l1-1l1 1l-1 1"></svg:path>`,
})
export class PiconLinkedinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLinuxIcon],svg[picon-linux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3L3 2h2M2 7V6h4v1M3 4h2v4q3 0 1-4l2 1l-2-3c0-3-4-3-4 0L0 5l2-1Q0 8 3 8"></svg:path>`,
})
export class PiconLinuxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconListIcon],svg[picon-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V6h5v2M3 5V3h5v2M0 8V6h2v2M0 5V3h2v2M0 2V0h2v2m1 0V0h5v2"></svg:path>`,
})
export class PiconListIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconList2Icon],svg[picon-list2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v1h4V3M3 1v1h4V1M3 5v1h4V5M1 5v1h1V5M1 3v1h1V3M1 1v1h1V1"></svg:path>`,
})
export class PiconList2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLocalisationIcon],svg[picon-localisation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V3h2v2M2 2v4h4V2M0 4l4-4l4 4l-4 4"></svg:path>`,
})
export class PiconLocalisationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLockIcon],svg[picon-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3V0h4v3H5V1H3v2M1 8V3h6v5"></svg:path>`,
})
export class PiconLockIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLogIcon],svg[picon-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3V0h1v3M1 8V6h1v2m1-5v3H0V3m4 2v1h4V5M4 3v1h4V3M4 7v1h4V7M1 4v1h1V4"></svg:path>`,
})
export class PiconLogIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLoginIcon],svg[picon-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h5v8H3l1-1h3V1H4M0 3h2V1l3 3l-3 3V5H0"></svg:path>`,
})
export class PiconLoginIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLogoutIcon],svg[picon-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0H0v8h4L3 7H1V1h2m0 2h2V1l3 3l-3 3V5H3"></svg:path>`,
})
export class PiconLogoutIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLoopIcon],svg[picon-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 3L8 5H7v2H1V6h5V5H5M0 3h1V1h6v1H2v1h1L1.5 5"></svg:path>`,
})
export class PiconLoopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLouderIcon],svg[picon-louder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6q2-2 0-4m1 6q2-4 0-8q4 4 0 8M0 5V3h2l2-2v6L2 5"></svg:path>`,
})
export class PiconLouderIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLtrIcon],svg[picon-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6v1H0V6m7-2v1H0V4m4-2v1H0V2m6-2v1H0V0"></svg:path>`,
})
export class PiconLtrIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLuaIcon],svg[picon-lua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c3.5 3.5-2 8-5 5c-3-4 2-8 5-5H4v2h2V0h2v2"></svg:path>`,
})
export class PiconLuaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconLuggageIcon],svg[picon-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h1v3H6M1 3h1v3H1m1 2h1V1h2v7h1V0H2M0 7h8V2H0"></svg:path>`,
})
export class PiconLuggageIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMagicIcon],svg[picon-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2v.5h1v-1M0 3V2l8-2v1M2 8V5L1 4h6L6 5v3"></svg:path>`,
})
export class PiconMagicIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMagnetIcon],svg[picon-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1V0h2v1M0 1V0h2v1m5 4c0 4-7 4-7 0V2h2v2c0 2.5 3 2.5 3 0V2h2"></svg:path>`,
})
export class PiconMagnetIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMagnifierIcon],svg[picon-magnifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5C2 7-1.5 4 1 1c3-2.5 6 1 4 3l3 3l-1 1M1.5 1.5C0 3 2 6 4 4S3 0 1.5 1.5"></svg:path>`,
})
export class PiconMagnifierIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMailIcon],svg[picon-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 3l4-2l4 2l-4 2m4 2V3L4 4L0 3v4"></svg:path>`,
})
export class PiconMailIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMakiIcon],svg[picon-maki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.5L2 4l2-.5L6 4M2 3Q0 4 2 5h4q2-1 0-2m2 4Q4 9 0 7V3q4-2 8 0"></svg:path>`,
})
export class PiconMakiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMaleIcon],svg[picon-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 8C-1 8-1 3 2.5 3s3.5 5 0 5M1 5.5c0 2 3 2 3 0s-3-2-3 0M3 4l3-3H4V0h4v4H7V2L4 5"></svg:path>`,
})
export class PiconMaleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconManIcon],svg[picon-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2c-4 8 8 8 4 0M3 7C-7-2 15-2 5 7m0-4h1v1H5M2 3h1v1H2m1 1.5h2V6H3"></svg:path>`,
})
export class PiconManIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMapIcon],svg[picon-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7V3L3 1v4M0 8V2l3-2l3 2l2-2v6L6 8L3 6"></svg:path>`,
})
export class PiconMapIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMarkdownIcon],svg[picon-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3V1h1v2h1L6.5 6L5 3M0 6V1h1l1.5 1L4 1h1v5H4V3L2.5 4L1 3v3"></svg:path>`,
})
export class PiconMarkdownIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMarkerIcon],svg[picon-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3c1-4-7-4-6 0l3 5M3 3l1-1l1 1l-1 1"></svg:path>`,
})
export class PiconMarkerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMatrixIcon],svg[picon-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H2V2h4v4H5V3L4 6L3 3m5-3v8H6V7h1V1H6V0M1 1v6h1v1H0V0h2v1"></svg:path>`,
})
export class PiconMatrixIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMedicalIcon],svg[picon-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h2v1H3m0 3H2V4h1V3h2v1h1v1H5v1H3M0 7h8V2H6V0H2v2H0"></svg:path>`,
})
export class PiconMedicalIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMedicationIcon],svg[picon-medication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h4v1H2M1 4q0-2 2-2h2q2 0 2 2v4H1m2-3H2v1h1v1h2V6h1V5H5V4H3"></svg:path>`,
})
export class PiconMedicationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMeditationIcon],svg[picon-meditation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 1l1-1l1 1l-1 1M2 2h4v1l2 2v1L6 4v2l2 1v1H3V7l2-1l-3 1v1H0V7l2-1V4L0 6V5l2-2"></svg:path>`,
})
export class PiconMeditationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMediumIcon],svg[picon-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6C-.5 6-.5 2 2 2s2.5 4 0 4m3.5 0C4 6 4 2 5.5 2s1.5 4 0 4m2 0C7 6 7 2 7.5 2s.5 4 0 4"></svg:path>`,
})
export class PiconMediumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMegaphoneIcon],svg[picon-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3l6-3v7L5 5Q2 7 2 4L0 6V1m3 3v1h1V4"></svg:path>`,
})
export class PiconMegaphoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMenuIcon],svg[picon-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1V0h8v1M0 7V6h8v1M0 4V3h8v1"></svg:path>`,
})
export class PiconMenuIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMergeIcon],svg[picon-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c4 4-5 4-1 0V3c-4-4 5-4 1 0M1 6v1h1V6m4 0v1h1V6M1 1v1h1V1m0 2L1 2l6 3c4 4-5 4-1 0"></svg:path>`,
})
export class PiconMergeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMessageIcon],svg[picon-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6H0V1h8v7"></svg:path>`,
})
export class PiconMessageIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMessengerIcon],svg[picon-messenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7q5 1 5-3q0-3-4-3q-5 1-3 5L0 8m3-4L1 5l2-2l2 1l2-1l-2 2"></svg:path>`,
})
export class PiconMessengerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMetronomeIcon],svg[picon-metronome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8H1l2-8h2M4 7l3-7H6L3 7"></svg:path>`,
})
export class PiconMetronomeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMicrophoneIcon],svg[picon-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V1h2v4M1 6V4l1-1v3h4V3l1 1v2L5 7v1H3V7"></svg:path>`,
})
export class PiconMicrophoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMicroscopeIcon],svg[picon-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6V5h4v1M4 3V0H2v3m1-1c4 0 4 5 0 5v1c5 0 5-7 0-7"></svg:path>`,
})
export class PiconMicroscopeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMicrowaveIcon],svg[picon-microwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h8v6H7v1H6V7H2v1H1V7H0m1-1h4V2H1m6 0H6v1h1M6 5h1V4H6"></svg:path>`,
})
export class PiconMicrowaveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMilkIcon],svg[picon-milk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h4v1H5q0 2 3 2v1H7v4H1V4H0V3q3 0 3-2H2"></svg:path>`,
})
export class PiconMilkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMonitorIcon],svg[picon-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4V3h1v1M1 4V3h1v1m1 1v1h1V5m1 0q0 2-1.5 2Q0 6 5 2M1 7h6l1-2c0-7-8-7-8 0m3-4h1v1H3"></svg:path>`,
})
export class PiconMonitorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMoonIcon],svg[picon-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8c-6 0-6-8 0-8c-3 0-3 8 0 8"></svg:path>`,
})
export class PiconMoonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMouseIcon],svg[picon-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3c0-4 6-4 6 0v2c0 4-6 4-6 0m3-4Q2 2 4 4"></svg:path>`,
})
export class PiconMouseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMoveIcon],svg[picon-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5V3h5v2M5 2v4h1V2M2 2v4h1V2m1 6L0 4l4-4l4 4"></svg:path>`,
})
export class PiconMoveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMovieIcon],svg[picon-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4V2l8-2v2M0 8V4h8v4"></svg:path>`,
})
export class PiconMovieIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMrIcon],svg[picon-mr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7H5V4h3M6 4V2H5v1L3 1.5L5 0v1h2v3M1 8V3h1v5m1-5H0V0h3m3 5v1h1V5M1 1v1h1V1"></svg:path>`,
})
export class PiconMrIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMsofficeIcon],svg[picon-msoffice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 6l6 1V1.5l-4 1V5zV2l6-2l2 1v6L6 8"></svg:path>`,
})
export class PiconMsofficeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMuaythaiIcon],svg[picon-muaythai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7V5L1 3l1-1h4V0l1 1v2H5v1h2v3L6 6V5H4v3m0-6c2-1 0-3-1-1m0 2H2l1 1"></svg:path>`,
})
export class PiconMuaythaiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMuffinIcon],svg[picon-muffin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3.5L0 2l2-2l3 1l2-1l1 2l-1 1.5M2 8L1 4h6L6 8"></svg:path>`,
})
export class PiconMuffinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMugIcon],svg[picon-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v1h1V2M0 8V7h7v1M0 6V0h5v1c3 0 3 3 0 3v2"></svg:path>`,
})
export class PiconMugIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMushroomIcon],svg[picon-mushroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-4 3-4-4 1-4s5 7 1 4l1 4H2"></svg:path>`,
})
export class PiconMushroomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
