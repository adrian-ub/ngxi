import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundAirlineStopsIcon],svg[ic-round-airline-stops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1h1c-.47-4.21-3.89-7.55-8.12-7.96A.98.98 0 0 1 2 8.05c0-.59.52-1.06 1.11-1c3.92.39 7.26 2.82 8.89 6.25c1.13-2.43 2.99-4.25 4.78-5.52l-1.92-1.92c-.32-.32-.1-.86.35-.86h5.29c.28 0 .5.22.5.5v5.29c0 .45-.54.67-.85.35L18.21 9.2c-2.28 1.58-4.76 4.1-5.21 7.8h1c.55 0 1 .45 1 1"></svg:path>`,
})
export class IcRoundAirlineStopsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAirlinesIcon],svg[ic-round-airlines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.59 4h-5.01c-.99 0-1.91.49-2.47 1.3L2 20h17l2.56-13.63C21.79 5.14 20.84 4 19.59 4M14.5 14a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class IcRoundAirlinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAirplaneTicketIcon],svg[ic-round-airplane-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.19 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.81-2-1.81-2m-2.46 9.3l-8.49 2.26a.5.5 0 0 1-.56-.23l-1.12-1.95c-.18-.3-.01-.69.32-.78c.16-.04.34-.01.47.1l1.05.82l2.39-.64L9.9 9.6a.788.788 0 0 1 .47-1.15a.8.8 0 0 1 .74.18l3.69 3.44l2.44-.65a.967.967 0 0 1 1.18.68a.994.994 0 0 1-.69 1.2"></svg:path>`,
})
export class IcRoundAirplaneTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAirplanemodeActiveIcon],svg[ic-round-airplanemode-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.48 13.7L13.5 9V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9l-7.98 4.7c-.32.18-.52.53-.52.9c0 .7.67 1.2 1.34 1.01l7.16-2.1V19l-2.26 1.35c-.15.09-.24.26-.24.43v.58c0 .33.31.57.62.49l2.92-.73L12 21l.38.09l.42.11l1.9.48l.67.17c.32.08.62-.16.62-.49v-.58c0-.18-.09-.34-.24-.43L13.5 19v-5.5l7.16 2.1c.67.2 1.34-.3 1.34-1c0-.37-.2-.72-.52-.9"></svg:path>`,
})
export class IcRoundAirplanemodeActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAirplanemodeInactiveIcon],svg[ic-round-airplanemode-inactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14.6c0 .7-.67 1.2-1.34 1.01l-3.15-.93l-7.01-7.01V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V9l7.98 4.7c.32.18.52.53.52.9m-8.5-1.1L9.56 9.56L3.51 3.51A.996.996 0 1 0 2.1 4.92l5.67 5.67l-5.25 3.11c-.32.18-.52.53-.52.9c0 .7.67 1.2 1.34 1.01l7.16-2.1V19l-2.26 1.35c-.15.09-.24.26-.24.43v.58c0 .33.31.57.62.49l2.92-.73L12 21l.38.09l.42.11l1.9.48l.67.17c.32.08.62-.16.62-.49v-.58c0-.18-.09-.34-.24-.43L13.5 19v-2.67l5.57 5.57a.996.996 0 1 0 1.41-1.41z"></svg:path>`,
})
export class IcRoundAirplanemodeInactiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAirplayIcon],svg[ic-round-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.41 22h7.17c.89 0 1.34-1.08.71-1.71L12.7 16.7a.996.996 0 0 0-1.41 0L7.7 20.29c-.62.63-.18 1.71.71 1.71M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundAirplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAirportShuttleIcon],svg[ic-round-airport-shuttle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.41 10.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H3a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3c1.1 0 2-.9 2-2v-2.17c0-.53-.21-1.04-.59-1.42M3 10V8c0-.55.45-1 1-1h3v4H4c-.55 0-1-.45-1-1m3 7.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M13 11H9V7h4zm5 6.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M15 11V7h1l4 4z"></svg:path>`,
})
export class IcRoundAirportShuttleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAlarmIcon],svg[ic-round-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.87 15.25l-3.37-2V8.72c0-.4-.32-.72-.72-.72h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l3.65 2.19c.34.2.78.1.98-.24c.21-.35.1-.8-.25-1m5.31-10.24L18.1 2.45c-.42-.35-1.05-.3-1.41.13c-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13a1 1 0 0 0-.12-1.41M4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41a.99.99 0 0 0-1.4-.13L2.82 5.01a1 1 0 0 0-.12 1.41c.35.43.98.48 1.4.13M12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7"></svg:path>`,
})
export class IcRoundAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAlarmAddIcon],svg[ic-round-alarm-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.18 5.01L18.1 2.45c-.42-.35-1.05-.3-1.41.13c-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13a1 1 0 0 0-.12-1.41M4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41a.99.99 0 0 0-1.4-.13L2.82 5.01a1 1 0 0 0-.12 1.41c.35.43.98.48 1.4.13M12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7m3-8h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundAlarmAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAlarmOffIcon],svg[ic-round-alarm-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.04 6.29C10.66 6.11 11.32 6 12 6c3.86 0 7 3.14 7 7c0 .68-.11 1.34-.29 1.96l1.56 1.56c.47-1.08.73-2.27.73-3.52A9 9 0 0 0 8.47 4.72zm-6.33-3.5a.99.99 0 0 0-1.39 0l-.02.03a.97.97 0 0 0 0 1.39l.68.68l-.17.14c-.42.34-.47.96-.13 1.38l.03.03c.35.42.96.47 1.38.12l.31-.25l.8.8A8.96 8.96 0 0 0 3 13a9 9 0 0 0 9 9c2.25 0 4.31-.83 5.89-2.2l1.41 1.41c.38.38 1 .38 1.39 0l.03-.03c.38-.38.38-1 0-1.39zM12 20c-3.86 0-7-3.14-7-7c0-1.7.61-3.26 1.62-4.47l9.85 9.85A6.96 6.96 0 0 1 12 20m7.91-13.44c.42.35 1.03.29 1.38-.12l.03-.03a.98.98 0 0 0-.12-1.38l-3.1-2.59a.98.98 0 0 0-1.38.12l-.03.03a.98.98 0 0 0 .12 1.38zM7.43 3.68c.18-.34.15-.77-.11-1.09l-.03-.03c-.3-.36-.8-.43-1.2-.22z"></svg:path>`,
})
export class IcRoundAlarmOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAlarmOnIcon],svg[ic-round-alarm-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.94 10.11l-4.4 4.42l-1.6-1.6a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06L10 16.11c.29.29.77.29 1.06 0L16 11.17c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0m6.24-5.1L18.1 2.45c-.42-.35-1.05-.3-1.41.13c-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13a1 1 0 0 0-.12-1.41M4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41a.99.99 0 0 0-1.4-.13L2.82 5.01a1 1 0 0 0-.12 1.41c.35.43.98.48 1.4.13M12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7"></svg:path>`,
})
export class IcRoundAlarmOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAlbumIcon],svg[ic-round-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5m0-5.5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAlignHorizontalCenterIcon],svg[ic-round-align-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c.55 0 1 .45 1 1v4h6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H13v4h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H13v4c0 .55-.45 1-1 1s-1-.45-1-1v-4H7.5c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14H11v-4H4.5C3.67 10 3 9.33 3 8.5S3.67 7 4.5 7H11V3c0-.55.45-1 1-1"></svg:path>`,
})
export class IcRoundAlignHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAlignHorizontalLeftIcon],svg[ic-round-align-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1s1 .45 1 1v18c0 .55-.45 1-1 1M20.5 7h-13C6.67 7 6 7.67 6 8.5S6.67 10 7.5 10h13c.83 0 1.5-.67 1.5-1.5S21.33 7 20.5 7m-6 7h-7c-.83 0-1.5.67-1.5 1.5S6.67 17 7.5 17h7c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5"></svg:path>`,
})
export class IcRoundAlignHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAlignHorizontalRightIcon],svg[ic-round-align-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2c.55 0 1 .45 1 1v18c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1M3.5 10h13c.83 0 1.5-.67 1.5-1.5S17.33 7 16.5 7h-13C2.67 7 2 7.67 2 8.5S2.67 10 3.5 10m6 7h7c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5S8.67 17 9.5 17"></svg:path>`,
})
export class IcRoundAlignHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAlignVerticalBottomIcon],svg[ic-round-align-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 22H3c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1M8.5 2C7.67 2 7 2.67 7 3.5v13c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-13C10 2.67 9.33 2 8.5 2m7 6c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5"></svg:path>`,
})
export class IcRoundAlignVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAlignVerticalCenterIcon],svg[ic-round-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h-4V7.5c0-.83-.67-1.5-1.5-1.5S14 6.67 14 7.5V11h-4V4.5C10 3.67 9.33 3 8.5 3S7 3.67 7 4.5V11H2.84c-.55 0-1 .45-1 1s.45 1 1 1H7v6.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V13h4v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V13h4c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAlignVerticalTopIcon],svg[ic-round-align-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1M8.5 22c.83 0 1.5-.67 1.5-1.5v-13C10 6.67 9.33 6 8.5 6S7 6.67 7 7.5v13c0 .83.67 1.5 1.5 1.5m7-6c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5S14 6.67 14 7.5v7c0 .83.67 1.5 1.5 1.5"></svg:path>`,
})
export class IcRoundAlignVerticalTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAllInboxIcon],svg[ic-round-all-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 6h-3.14c-.47 0-.84.33-.97.78C14.53 11.04 13.35 12 12 12s-2.53-.96-2.89-2.22c-.13-.45-.5-.78-.97-.78H5V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-3.13 7H20c.55 0 1 .45 1 1v2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-2c0-.55.45-1 1-1h4.13c.47 0 .85.34.98.8a2.997 2.997 0 0 0 5.78 0c.13-.46.51-.8.98-.8"></svg:path>`,
})
export class IcRoundAllInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAllInclusiveIcon],svg[ic-round-all-inclusive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.22 6.86c-2-.6-4.06-.04-5.39 1.29L12 10.66L10.48 12h.01L7.8 14.39c-.81.81-1.95 1.15-3.12.92a3.35 3.35 0 0 1-2.57-2.49a3.39 3.39 0 0 1 3.29-4.2c.91 0 1.76.35 2.44 1.03l.47.41c.38.34.95.34 1.33 0c.45-.4.45-1.1 0-1.5l-.42-.36A5.37 5.37 0 0 0 5.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5l.01.01L13.52 12h-.01l2.69-2.39c.81-.81 1.95-1.15 3.12-.92c1.25.25 2.28 1.25 2.57 2.49a3.39 3.39 0 0 1-3.29 4.2c-.9 0-1.76-.35-2.44-1.03l-.48-.42a.995.995 0 0 0-1.33 0c-.45.4-.45 1.1 0 1.5l.42.37a5.4 5.4 0 0 0 3.82 1.57c3.27 0 5.86-2.9 5.33-6.25c-.3-1.99-1.77-3.69-3.7-4.26"></svg:path>`,
})
export class IcRoundAllInclusiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAllOutIcon],svg[ic-round-all-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.5V8l4-4H4.5c-.28 0-.5.22-.5.5M16 4l4 4V4.5c0-.28-.22-.5-.5-.5zm4 15.5V16l-4 4h3.5c.28 0 .5-.22.5-.5M4.5 20H8l-4-4v3.5c0 .28.22.5.5.5M19 12c0-3.87-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7m-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class IcRoundAllOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAltRouteIcon],svg[ic-round-alt-route-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.78 11.16l-1.42 1.42a7.3 7.3 0 0 1-1.79-2.94l1.94-.49c.32.89.77 1.5 1.27 2.01m.37-6.01l-2.8-2.8c-.2-.2-.51-.2-.71 0l-2.79 2.8a.5.5 0 0 0 .36.85h1.81c.02.81.08 1.54.19 2.17l1.94-.49C8.08 7.2 8.03 6.63 8.02 6H9.8a.5.5 0 0 0 .35-.85m10 0l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79c-.32.31-.1.85.35.85h1.78c-.1 3.68-1.28 4.75-2.54 5.88c-.5.44-1.01.92-1.45 1.55c-.34-.49-.73-.88-1.13-1.24L9.46 13.6c.93.85 1.54 1.54 1.54 3.4v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-2.02.71-2.66 1.79-3.63c1.38-1.24 3.08-2.78 3.2-7.37h1.8a.5.5 0 0 0 .36-.85"></svg:path>`,
})
export class IcRoundAltRouteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAlternateEmailIcon],svg[ic-round-alternate-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.72 2.03A9.99 9.99 0 0 0 2.03 12.72C2.39 18.01 7.01 22 12.31 22H16c.55 0 1-.45 1-1s-.45-1-1-1h-3.67c-3.73 0-7.15-2.42-8.08-6.03c-1.49-5.8 3.91-11.21 9.71-9.71C17.58 5.18 20 8.6 20 12.33v1.1c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.25c0-2.51-1.78-4.77-4.26-5.12a5.008 5.008 0 0 0-5.66 5.87a5 5 0 0 0 3.72 3.94c1.84.43 3.59-.16 4.74-1.33c.89 1.22 2.67 1.86 4.3 1.21c1.34-.53 2.16-1.9 2.16-3.34v-1.09c0-5.31-3.99-9.93-9.28-10.29M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"></svg:path>`,
})
export class IcRoundAlternateEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAmpStoriesIcon],svg[ic-round-amp-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4H8c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1M4 6c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1m16 0c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundAmpStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAnalyticsIcon],svg[ic-round-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8 17c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1m0-5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m4 5c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAnchorIcon],svg[ic-round-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9V7.82C14.16 7.4 15 6.3 15 5c0-1.65-1.35-3-3-3S9 3.35 9 5c0 1.3.84 2.4 2 2.82V9H9c-.55 0-1 .45-1 1s.45 1 1 1h2v8.92c-2.22-.33-4.59-1.68-5.55-3.37l1.14-1.14c.22-.22.19-.57-.05-.75L3.8 12.6a.5.5 0 0 0-.8.4v2c0 3.88 4.92 7 9 7s9-3.12 9-7v-2a.5.5 0 0 0-.8-.4l-2.74 2.05c-.24.18-.27.54-.05.75l1.14 1.14c-.96 1.69-3.33 3.04-5.55 3.37V11h2c.55 0 1-.45 1-1s-.45-1-1-1zm-1-5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class IcRoundAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAndroidIcon],svg[ic-round-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.46 11.46 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 0 0 1 18h22a10.78 10.78 0 0 0-5.4-8.52M7 15.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m10 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path>`,
})
export class IcRoundAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAnimationIcon],svg[ic-round-animation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2c-2.71 0-5.05 1.54-6.22 3.78a7.06 7.06 0 0 0-3 3A7.01 7.01 0 0 0 2 15c0 3.87 3.13 7 7 7c2.71 0 5.05-1.54 6.22-3.78a7.06 7.06 0 0 0 3-3A7.01 7.01 0 0 0 22 9c0-3.87-3.13-7-7-7M9 20a5.002 5.002 0 0 1-4-8c0 3.87 3.13 7 7 7c-.84.63-1.88 1-3 1m3-3a5.002 5.002 0 0 1-4-8c0 3.86 3.13 6.99 7 7c-.84.63-1.88 1-3 1m4.7-3.3c-.53.19-1.1.3-1.7.3c-2.76 0-5-2.24-5-5c0-.6.11-1.17.3-1.7c.53-.19 1.1-.3 1.7-.3c2.76 0 5 2.24 5 5c0 .6-.11 1.17-.3 1.7M19 12c0-3.86-3.13-6.99-7-7a5.002 5.002 0 0 1 7 7"></svg:path>`,
})
export class IcRoundAnimationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAnnouncementIcon],svg[ic-round-announcement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8 9c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1 4h-2v-2h2z"></svg:path>`,
})
export class IcRoundAnnouncementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAodIcon],svg[ic-round-aod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zm-8.25-8h6.5c.41 0 .75.34.75.75s-.34.75-.75.75h-6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75m1 3h4.5c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75"></svg:path>`,
})
export class IcRoundAodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundApartmentIcon],svg[ic-round-apartment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11V5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h5c.55 0 1-.45 1-1v-3h2v3c0 .55.45 1 1 1h5c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zM7 19H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm4 4H9v-2h2zm0-4H9V9h2zm0-4H9V5h2zm4 8h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2zm4 12h-2v-2h2zm0-4h-2v-2h2z"></svg:path>`,
})
export class IcRoundApartmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundApiIcon],svg[ic-round-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13c-.56.56-1.45.56-2 .01V13c-.55-.55-.55-1.44 0-1.99V11c.55-.55 1.44-.55 1.99 0H13c.55.55.55 1.45 0 2m-1-7l2.12 2.12l2.5-2.5l-3.2-3.2c-.78-.78-2.05-.78-2.83 0l-3.2 3.2l2.5 2.5zm-6 6l2.12-2.12l-2.5-2.5l-3.2 3.2c-.78.78-.78 2.05 0 2.83l3.2 3.2l2.5-2.5zm12 0l-2.12 2.12l2.5 2.5l3.2-3.2c.78-.78.78-2.05 0-2.83l-3.2-3.2l-2.5 2.5zm-6 6l-2.12-2.12l-2.5 2.5l3.2 3.2c.78.78 2.05.78 2.83 0l3.2-3.2l-2.5-2.5z"></svg:path>`,
})
export class IcRoundApiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAppBlockingIcon],svg[ic-round-app-blocking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m-2.5 4A2.5 2.5 0 0 1 18 9.5c.42 0 .8.11 1.15.29l-3.36 3.36c-.18-.35-.29-.73-.29-1.15m2.5 2.5c-.42 0-.8-.11-1.15-.29l3.36-3.36c.18.35.29.73.29 1.15a2.5 2.5 0 0 1-2.5 2.5"></svg:path><svg:path fill="currentColor" d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2z"></svg:path>`,
})
export class IcRoundAppBlockingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAppRegistrationIcon],svg[ic-round-app-registration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="6" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="6" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="6" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="18" cy="6" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M11 18.07v1.43c0 .28.22.5.5.5h1.4c.13 0 .26-.05.35-.15l5.83-5.83l-2.12-2.12l-5.81 5.81c-.1.1-.15.23-.15.36M12.03 14L14 12.03V12c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm8.82-2.44l-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06l2.12 2.12l1.06-1.06c.2-.2.2-.51 0-.71"></svg:path>`,
})
export class IcRoundAppRegistrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAppSettingsAltIcon],svg[ic-round-app-settings-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2zm4-6c0-.13-.02-.26-.04-.39l.64-.48c.2-.15.26-.44.13-.66l-.57-.96a.495.495 0 0 0-.62-.2l-.72.3c-.2-.15-.42-.29-.65-.39l-.1-.77a.505.505 0 0 0-.49-.44l-1.12-.02c-.26 0-.47.18-.5.44l-.1.79c-.24.1-.45.23-.65.39l-.72-.3c-.23-.1-.5-.01-.62.2l-.57.96c-.13.22-.08.5.13.66l.64.48c-.05.13-.07.26-.07.39s.02.25.04.37l-.64.49c-.2.15-.26.43-.13.65l.56.97c.13.22.39.31.63.21l.73-.31c.2.16.42.3.67.4l.1.77c.03.25.24.44.5.44h1.12c.25 0 .46-.19.5-.44l.1-.77c.24-.1.46-.24.67-.4l.73.31c.23.1.5.01.63-.21l.56-.97c.13-.22.07-.5-.13-.65l-.64-.49c-.02-.12 0-.24 0-.37m-3 1.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcRoundAppSettingsAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAppShortcutIcon],svg[ic-round-app-shortcut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2zm3.38-8.38l.4.87c.09.2.37.2.46 0l.4-.87l.87-.4c.2-.09.2-.37 0-.46l-.87-.4l-.4-.87c-.09-.2-.37-.2-.46 0l-.4.87l-.87.4c-.2.09-.2.37 0 .46z"></svg:path><svg:path fill="currentColor" d="m15.54 9l-.79 1.75l-1.75.79a.5.5 0 0 0 0 .91l1.75.79l.79 1.76a.5.5 0 0 0 .91 0l.79-1.75l1.76-.79a.5.5 0 0 0 0-.91l-1.75-.79L16.46 9a.508.508 0 0 0-.92 0m5.23 4.5l-.4.87l-.87.4c-.2.09-.2.37 0 .46l.87.4l.4.87c.09.2.37.2.46 0l.4-.87l.87-.4c.2-.09.2-.37 0-.46l-.87-.4l-.4-.87a.257.257 0 0 0-.46 0"></svg:path>`,
})
export class IcRoundAppShortcutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAppleIcon],svg[ic-round-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"></svg:path>`,
})
export class IcRoundAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundApprovalIcon],svg[ic-round-approval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2m13 2H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1M12 2C9.54 2 7.48 3.79 7.07 6.13c-.08.52.06 1.05.36 1.47l3.76 5.26a1 1 0 0 0 1.63 0l3.76-5.26c.3-.42.44-.95.35-1.47A5.016 5.016 0 0 0 12 2"></svg:path>`,
})
export class IcRoundApprovalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAppsIcon],svg[ic-round-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"></svg:path>`,
})
export class IcRoundAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAppsOutageIcon],svg[ic-round-apps-outage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m6 12c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m-6 0c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m0-6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m6 0c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m.07-10H12c-1.1 0-2 .9-2 2s.9 2 2 2c.22 0 .43-.04.63-.1A6.9 6.9 0 0 1 12 5c0-.34.02-.67.07-1M19 12a6.9 6.9 0 0 1-2.9-.63c-.06.2-.1.41-.1.63c0 1.1.9 2 2 2s2-.9 2-2v-.07c-.33.05-.66.07-1 .07m-1 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m1-20c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m.5 7.5c0 .28-.22.5-.5.5c-.27 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5M19 6c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5"></svg:path>`,
})
export class IcRoundAppsOutageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArchitectureIcon],svg[ic-round-architecture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.36 18.78L6.61 21l1.62-1.54l2.77-7.6c-.68-.17-1.28-.51-1.77-.98zm8.41-7.9c-.49.47-1.1.81-1.77.98l2.77 7.6L17.39 21l.26-2.22zm.17-2.28c.3-1.56-.6-2.94-1.94-3.42V4c0-.55-.45-1-1-1s-1 .45-1 1v1.18C9.84 5.6 9 6.7 9 8c0 1.84 1.66 3.3 3.56 2.95c1.18-.22 2.15-1.17 2.38-2.35M12 9c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundArchitectureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArchiveIcon],svg[ic-round-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27m-8.89 11.92L6.5 12H10v-2h4v2h3.5l-5.15 5.15c-.19.19-.51.19-.7 0M5.12 5l.81-1h12l.94 1z"></svg:path>`,
})
export class IcRoundArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAreaChartIcon],svg[ic-round-area-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 17l3.39-4.66c.33-.46.98-.55 1.42-.2L21 18.5v.5c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5.72c.22 0 .44.07.62.22zm-5-6c.44 0 .88.15 1.25.44l3.37 2.69l2.77-3.81c.66-.91 1.95-1.1 2.85-.4L21 15.97V8c0-.55-.45-1-1-1h-3l-4.18-3.34a1 1 0 0 0-1.44.2L7 10L3.6 7.45c-.18-.13-.39-.2-.6-.2z"></svg:path>`,
})
export class IcRoundAreaChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowBackIcon],svg[ic-round-arrow-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundArrowBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowBackIosIcon],svg[ic-round-arrow-back-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"></svg:path>`,
})
export class IcRoundArrowBackIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowBackIosNewIcon],svg[ic-round-arrow-back-ios-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.88 2.88a1.25 1.25 0 0 0-1.77 0L6.7 11.29a.996.996 0 0 0 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77"></svg:path>`,
})
export class IcRoundArrowBackIosNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowCircleDownIcon],svg[ic-round-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 10V9c0-.55-.45-1-1-1s-1 .45-1 1v3H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79a.5.5 0 0 0-.35-.85z"></svg:path>`,
})
export class IcRoundArrowCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowCircleLeftIcon],svg[ic-round-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2S2 6.48 2 12m10-2.79V11h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v1.79c0 .45-.54.67-.85.35l-2.79-2.79c-.2-.2-.2-.51 0-.71l2.79-2.79a.5.5 0 0 1 .85.36"></svg:path>`,
})
export class IcRoundArrowCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowCircleRightIcon],svg[ic-round-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10s10-4.48 10-10m-10 2.79V13H9c-.55 0-1-.45-1-1s.45-1 1-1h3V9.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36"></svg:path>`,
})
export class IcRoundArrowCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowCircleUpIcon],svg[ic-round-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10m-1-10v3c0 .55.45 1 1 1s1-.45 1-1v-3h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79a.5.5 0 0 0 .36.85z"></svg:path>`,
})
export class IcRoundArrowCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowDownwardIcon],svg[ic-round-arrow-downward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 1 0-1.41-1.41L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1"></svg:path>`,
})
export class IcRoundArrowDownwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowDropDownIcon],svg[ic-round-arrow-drop-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71"></svg:path>`,
})
export class IcRoundArrowDropDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowDropDownCircleIcon],svg[ic-round-arrow-drop-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-.35 12.65l-2.79-2.79c-.32-.32-.1-.86.35-.86h5.59c.45 0 .67.54.35.85l-2.79 2.79c-.2.2-.52.2-.71.01"></svg:path>`,
})
export class IcRoundArrowDropDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowDropUpIcon],svg[ic-round-arrow-drop-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.71 12.29L11.3 9.7a.996.996 0 0 1 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71"></svg:path>`,
})
export class IcRoundArrowDropUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowForwardIcon],svg[ic-round-arrow-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42s1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundArrowForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowForwardIosIcon],svg[ic-round-arrow-forward-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76"></svg:path>`,
})
export class IcRoundArrowForwardIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowLeftIcon],svg[ic-round-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.29 8.71L9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7"></svg:path>`,
})
export class IcRoundArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowOutwardIcon],svg[ic-round-arrow-outward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7c0 .55.45 1 1 1h7.59l-8.88 8.88a.996.996 0 1 0 1.41 1.41L16 9.41V17c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundArrowOutwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowRightIcon],svg[ic-round-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71"></svg:path>`,
})
export class IcRoundArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowRightAltIcon],svg[ic-round-arrow-right-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35z"></svg:path>`,
})
export class IcRoundArrowRightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArrowUpwardIcon],svg[ic-round-arrow-upward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0a.996.996 0 0 0 0-1.41l-6.59-6.59a.996.996 0 0 0-1.41 0l-6.6 6.58a.996.996 0 1 0 1.41 1.41L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1"></svg:path>`,
})
export class IcRoundArrowUpwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArtTrackIcon],svg[ic-round-art-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m0-6h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1m-6 10h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1m-3-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2m-2.1 5.2l-1.26-1.68a.508.508 0 0 0-.8-.01L6.5 14.26l-.85-1.03a.5.5 0 0 0-.78.01l-.74.95a.5.5 0 0 0 .39.81H9.5a.5.5 0 0 0 .4-.8"></svg:path>`,
})
export class IcRoundArtTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundArticleIcon],svg[ic-round-article-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 14H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1m3-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundArticleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAspectRatioIcon],svg[ic-round-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M7 9h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16.01H4c-.55 0-1-.45-1-1V5.99c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.02c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundAspectRatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAssessmentIcon],svg[ic-round-assessment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundAssessmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAssignmentIcon],svg[ic-round-assignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m1 14H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1m3-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundAssignmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAssignmentIndIcon],svg[ic-round-assignment-ind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1z"></svg:path>`,
})
export class IcRoundAssignmentIndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAssignmentLateIcon],svg[ic-round-assignment-late-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M12 13c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1 3c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1"></svg:path>`,
})
export class IcRoundAssignmentLateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAssignmentReturnIcon],svg[ic-round-assignment-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m4 12h-4v3l-4.65-4.65c-.2-.2-.2-.51 0-.71L12 8v3h4z"></svg:path>`,
})
export class IcRoundAssignmentReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAssignmentReturnedIcon],svg[ic-round-assignment-returned-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-.35 14.65L7 13h3V9h4v4h3l-4.65 4.65c-.19.19-.51.19-.7 0"></svg:path>`,
})
export class IcRoundAssignmentReturnedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAssignmentTurnedInIcon],svg[ic-round-assignment-turned-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M9.29 16.29L6.7 13.7a.996.996 0 1 1 1.41-1.41L10 14.17l5.88-5.88a.996.996 0 1 1 1.41 1.41l-6.59 6.59a.996.996 0 0 1-1.41 0"></svg:path>`,
})
export class IcRoundAssignmentTurnedInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAssistWalkerIcon],svg[ic-round-assist-walker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12.5" cy="4.5" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m19.77 17.72l-.64-6.37A1.49 1.49 0 0 0 17.64 10H16c-1.5-.02-2.86-.54-3.76-1.44l-2-1.98A1.95 1.95 0 0 0 8.83 6c-.51 0-1.02.2-1.41.59L4.08 9.91c-.53.68-.51 1.57-.21 2.13l1.43 2.8l-2.55 3.26a1 1 0 0 0 .17 1.4c.44.34 1.07.26 1.41-.17l2.56-3.29c.33-.42.47-.95.41-1.48l-.07-.53l.77.72V19c0 .55.45 1 1 1s1-.45 1-1v-4.29c0-.53-.21-1.04-.59-1.41l-1.53-1.53l2.36-2.36c.94.94 1.72 1.82 3.59 2.32l-.75 7.46c-.04.44.3.83.75.83c.38 0 .7-.29.75-.66l.33-2.84h3.18l.14 1.22c-.44.26-.73.74-.73 1.28c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.56-.29-1.04-.73-1.3M15.09 15l.41-3.5h2l.41 3.5z"></svg:path>`,
})
export class IcRoundAssistWalkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAssistantIcon],svg[ic-round-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l2.29 2.29c.39.39 1.02.39 1.41 0L15 20h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11z"></svg:path>`,
})
export class IcRoundAssistantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAssistantDirectionIcon],svg[ic-round-assistant-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 10H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1v-2h3.5v1.29c0 .45.54.67.85.35l2.29-2.29c.2-.2.2-.51 0-.71l-2.29-2.29a.5.5 0 0 0-.85.35zM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11s11-4.9 11-11S18.1 1 12 1m7.73 11.58l-7.19 7.22c-.35.27-.79.27-1.15 0L4.2 12.58a.93.93 0 0 1 0-1.16l7.19-7.22c.35-.27.79-.27 1.15 0l7.19 7.22c.36.27.36.8 0 1.16"></svg:path>`,
})
export class IcRoundAssistantDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAssistantPhotoIcon],svg[ic-round-assistant-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.4 6l-.24-1.2c-.09-.46-.5-.8-.98-.8H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5.6l.24 1.2c.09.47.5.8.98.8H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z"></svg:path>`,
})
export class IcRoundAssistantPhotoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAssuredWorkloadIcon],svg[ic-round-assured-workload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1m6 0c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1m9.32-11.34L12.9 1.45c-.56-.28-1.23-.28-1.79 0L2.68 5.66c-.42.21-.68.64-.68 1.1C2 7.45 2.55 8 3.24 8h17.53C21.45 8 22 7.45 22 6.76c0-.46-.26-.89-.68-1.1M2 20c0 .55.45 1 1 1h11.4c-.21-.64-.32-1.31-.36-2H3c-.55 0-1 .45-1 1m17-7.74V11c0-.55-.45-1-1-1s-1 .45-1 1v2.26zm.55 1.96l-3 1.5c-.34.17-.55.52-.55.9v1.93c0 2.52 1.71 4.88 4 5.45c2.29-.57 4-2.93 4-5.45v-1.93c0-.38-.21-.73-.55-.89l-3-1.5a.99.99 0 0 0-.9-.01m-.97 6.08l-.8-.8a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.44.44l1.88-1.85c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.23 2.21a.996.996 0 0 1-1.41 0"></svg:path>`,
})
export class IcRoundAssuredWorkloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAtmIcon],svg[ic-round-atm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9.75c0 .41.34.75.75.75h1.5v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1.5c.41 0 .75-.34.75-.75S13.66 9 13.25 9h-4.5c-.41 0-.75.34-.75.75M6 9H3c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75v-.75h2v.75c0 .41.34.75.75.75s.75-.34.75-.75V10c0-.55-.45-1-1-1m-.5 3h-2v-1.5h2zM21 9h-4.5c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1v2.75c0 .41.34.75.75.75s.75-.34.75-.75v-2.76h1v3.76c0 .41.34.75.75.75s.75-.34.75-.75V10c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundAtmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAttachEmailIcon],svg[ic-round-attach-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h11v-5c0-1.66 1.34-3 3-3zm-9.47.67c-.32.2-.74.2-1.06 0L3.4 6.25a.85.85 0 1 1 .9-1.44L11 9l6.7-4.19a.85.85 0 1 1 .9 1.44z"></svg:path><svg:path fill="currentColor" d="M22 14c-.55 0-1 .45-1 1v3c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V17c0 .55.45 1 1 1s1-.45 1-1v-3.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-3c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundAttachEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAttachFileIcon],svg[ic-round-attach-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 6.75v10.58c0 2.09-1.53 3.95-3.61 4.15A3.993 3.993 0 0 1 8.5 17.5V5.14c0-1.31.94-2.5 2.24-2.63A2.5 2.5 0 0 1 13.5 5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v8.61c0 1.31.94 2.5 2.24 2.63A2.5 2.5 0 0 0 15 15.5V5.17c0-2.09-1.53-3.95-3.61-4.15A4 4 0 0 0 7 5v12.27c0 2.87 2.1 5.44 4.96 5.71c3.29.3 6.04-2.26 6.04-5.48V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75"></svg:path>`,
})
export class IcRoundAttachFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAttachMoneyIcon],svg[ic-round-attach-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.42 0 2.13.54 2.39 1.4c.12.4.45.7.87.7h.3c.66 0 1.13-.65.9-1.27c-.42-1.18-1.4-2.16-2.96-2.54V4.5c0-.83-.67-1.5-1.5-1.5S10 3.67 10 4.5v.66c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79c-1.65 0-2.5-.59-2.83-1.43c-.15-.39-.49-.67-.9-.67h-.28c-.67 0-1.14.68-.89 1.3c.57 1.39 1.9 2.21 3.4 2.53v.67c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.65c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4"></svg:path>`,
})
export class IcRoundAttachMoneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAttachmentIcon],svg[ic-round-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 16H7.17c-2.09 0-3.95-1.53-4.15-3.61A4 4 0 0 1 7 8h12.36c1.31 0 2.5.94 2.63 2.24A2.5 2.5 0 0 1 19.5 13H9c-.55 0-1-.45-1-1s.45-1 1-1h8.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9.14c-1.31 0-2.5.94-2.63 2.24A2.5 2.5 0 0 0 9 14.5h10.33c2.09 0 3.95-1.53 4.15-3.61A3.993 3.993 0 0 0 19.5 6.5H7.23c-2.87 0-5.44 2.1-5.71 4.96A5.505 5.505 0 0 0 7 17.5h10.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"></svg:path>`,
})
export class IcRoundAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAttractionsIcon],svg[ic-round-attractions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.44 18.75c.37-.46.94-.75 1.57-.75s1.19.29 1.56.75c.39-.09.76-.21 1.12-.36l-1.42-3.18a3.52 3.52 0 0 1-2.56-.02l-1.43 3.19c.37.16.75.29 1.16.37M5.16 10a7.06 7.06 0 0 0 .08 4c.63.05 1.22.4 1.56.99c.33.57.35 1.23.11 1.79c.27.27.56.53.87.76l1.52-3.39c-.47-.58-.75-1.32-.75-2.13c0-1.89 1.55-3.41 3.46-3.41s3.46 1.53 3.46 3.41c0 .82-.29 1.57-.78 2.16l1.5 3.35c.32-.24.62-.5.9-.79c-.22-.55-.2-1.2.12-1.75c.33-.57.9-.92 1.52-.99a7.03 7.03 0 0 0 .09-4.02c-.64-.04-1.26-.39-1.6-1c-.36-.62-.35-1.36-.03-1.95c-.91-.98-2.1-1.71-3.44-2.05C13.4 5.6 12.74 6 12.01 6s-1.39-.41-1.74-1.01a7.05 7.05 0 0 0-3.44 2.03c.33.6.35 1.35-.02 1.98c-.36.62-.99.97-1.65 1m-1.3-.42c-.78-.6-1.02-1.7-.51-2.58s1.58-1.23 2.49-.85a8.53 8.53 0 0 1 4.18-2.42c.13-.98.97-1.73 1.99-1.73s1.85.75 1.98 1.73c1.63.39 3.07 1.24 4.18 2.42a1.99 1.99 0 0 1 2.49.85c.51.88.27 1.98-.51 2.58c.23.77.35 1.58.35 2.42s-.12 1.65-.35 2.42c.78.6 1.02 1.7.51 2.58s-1.58 1.23-2.49.85c-.4.43-.85.81-1.34 1.15l.81 1.8a.854.854 0 0 1-1.56.7l-.75-1.67c-.43.18-.88.33-1.34.44c-.13.98-.97 1.73-1.98 1.73s-1.85-.75-1.98-1.73c-.48-.12-.94-.27-1.38-.46l-.76 1.69c-.14.3-.44.5-.78.5H7.1a.845.845 0 0 1-.77-1.2l.82-1.83a8.7 8.7 0 0 1-1.3-1.12c-.92.38-1.99.03-2.5-.85s-.27-1.98.51-2.58c-.24-.77-.35-1.58-.35-2.42s.11-1.65.35-2.42"></svg:path>`,
})
export class IcRoundAttractionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAttributionIcon],svg[ic-round-attribution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.5c-.91 0-2.75.46-2.75 1.38V14c0 .28.22.5.5.5h1v3.25a1.25 1.25 0 0 0 2.5 0V14.5h1c.28 0 .5-.22.5-.5V9.88c0-.91-1.84-1.38-2.75-1.38M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"></svg:path><svg:circle cx="12" cy="6.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcRoundAttributionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAudioFileIcon],svg[ic-round-audio-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.41 7.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.42M15 13h-2v3.61c0 1.28-1 2.41-2.28 2.39a2.26 2.26 0 0 1-2.13-2.91c.21-.72.8-1.31 1.53-1.51c.7-.19 1.36-.05 1.88.29V12c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1m-1-4c-.55 0-1-.45-1-1V3.5L18.5 9z"></svg:path>`,
})
export class IcRoundAudioFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAudiotrackIcon],svg[ic-round-audiotrack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5v8.55c-.94-.54-2.1-.75-3.33-.32c-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 0 0 4.59 4.65c1.96-.31 3.35-2.11 3.35-4.1V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2"></svg:path>`,
})
export class IcRoundAudiotrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAutoAwesomeIcon],svg[ic-round-auto-awesome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.46 8l.79-1.75L22 5.46a.5.5 0 0 0 0-.91l-1.75-.79L19.46 2a.5.5 0 0 0-.91 0l-.79 1.75l-1.76.79a.5.5 0 0 0 0 .91l1.75.79l.79 1.76c.18.39.74.39.92 0M11.5 9.5L9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5L3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5l3.5-1.59c.78-.36.78-1.47 0-1.82zm7.04 6.5l-.79 1.75l-1.75.79a.5.5 0 0 0 0 .91l1.75.79l.79 1.76a.5.5 0 0 0 .91 0l.79-1.75l1.76-.79a.5.5 0 0 0 0-.91l-1.75-.79l-.79-1.76a.508.508 0 0 0-.92 0"></svg:path>`,
})
export class IcRoundAutoAwesomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAutoAwesomeMosaicIcon],svg[ic-round-auto-awesome-mosaic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2m16-2h-6v8h8V5c0-1.1-.9-2-2-2m-6 18h6c1.1 0 2-.9 2-2v-6h-8z"></svg:path>`,
})
export class IcRoundAutoAwesomeMosaicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAutoAwesomeMotionIcon],svg[ic-round-auto-awesome-motion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2H4c-1.1 0-2 .9-2 2v9c0 .55.45 1 1 1s1-.45 1-1V4h9c.55 0 1-.45 1-1s-.45-1-1-1m4 4H8c-1.1 0-2 .9-2 2v9c0 .55.45 1 1 1s1-.45 1-1V8h9c.55 0 1-.45 1-1s-.45-1-1-1m3 4h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundAutoAwesomeMotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAutoDeleteIcon],svg[ic-round-auto-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9c-.7 0-1.37.1-2 .29V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7m0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5M14 4c.55 0 1-.45 1-1s-.45-1-1-1h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H5.91c-.26 0-.52.11-.7.29L4.5 2H2c-.55 0-1 .45-1 1s.45 1 1 1z"></svg:path><svg:path fill="currentColor" d="M15.75 12c-.41 0-.75.34-.75.75v3.68c0 .36.19.68.5.86l2.52 1.47c.33.19.75.09.96-.22a.72.72 0 0 0-.24-1.02L16.5 16.2v-3.45c0-.41-.34-.75-.75-.75"></svg:path>`,
})
export class IcRoundAutoDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAutoFixHighIcon],svg[ic-round-auto-fix-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.45 6l.49-1.06L22 4.45a.5.5 0 0 0 0-.91l-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06l-1.05.49a.5.5 0 0 0 0 .91l1.06.49l.49 1.05c.17.39.73.39.9 0M8.95 6l.49-1.06l1.06-.49a.5.5 0 0 0 0-.91l-1.06-.48L8.95 2a.492.492 0 0 0-.9 0l-.49 1.06l-1.06.49a.5.5 0 0 0 0 .91l1.06.49L8.05 6c.17.39.73.39.9 0m10.6 7.5l-.49 1.06l-1.06.49a.5.5 0 0 0 0 .91l1.06.49l.49 1.06a.5.5 0 0 0 .91 0l.49-1.06l1.05-.5a.5.5 0 0 0 0-.91l-1.06-.49l-.49-1.06c-.17-.38-.73-.38-.9.01m-1.84-4.38l-2.83-2.83a.996.996 0 0 0-1.41 0L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0L17.7 10.53c.4-.38.4-1.02.01-1.41m-3.5 2.09L12.8 9.8l1.38-1.38l1.41 1.41z"></svg:path>`,
})
export class IcRoundAutoFixHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAutoFixNormalIcon],svg[ic-round-auto-fix-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.45 6l.49-1.06L22 4.45a.5.5 0 0 0 0-.91l-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06l-1.05.49a.5.5 0 0 0 0 .91l1.06.49l.49 1.05c.17.39.73.39.9 0m-2.74 3.12l-2.83-2.83a.996.996 0 0 0-1.41 0L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0L17.7 10.53c.4-.38.4-1.02.01-1.41m-3.5 2.09L12.8 9.8l1.38-1.38l1.41 1.41z"></svg:path>`,
})
export class IcRoundAutoFixNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAutoFixOffIcon],svg[ic-round-auto-fix-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 3.55l-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06l-1.05.49a.5.5 0 0 0 0 .91l1.06.49l.49 1.05a.5.5 0 0 0 .91 0l.49-1.06L22 4.45c.39-.17.39-.73 0-.9m-7.83 4.87l1.41 1.41l-1.46 1.46l1.41 1.41l2.17-2.17a.996.996 0 0 0 0-1.41l-2.83-2.83a.996.996 0 0 0-1.41 0l-2.17 2.17l1.41 1.41zM2.1 4.93l6.36 6.36l-6.17 6.17a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l6.17-6.17l6.36 6.36a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42"></svg:path>`,
})
export class IcRoundAutoFixOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAutoGraphIcon],svg[ic-round-auto-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.06 9.94L13 9.45a.5.5 0 0 1 0-.91l1.06-.49l.49-1.05a.5.5 0 0 1 .91 0l.49 1.06l1.05.49a.5.5 0 0 1 0 .91l-1.06.49l-.49 1.05a.5.5 0 0 1-.91 0zM4.45 13l.49-1.06L6 11.45a.5.5 0 0 0 0-.91l-1.06-.49L4.45 9a.492.492 0 0 0-.9 0l-.49 1.06l-1.06.49a.5.5 0 0 0 0 .91l1.06.49l.49 1.05c.17.39.73.39.9 0m4.51-5.01l.63-1.4l1.4-.63a.5.5 0 0 0 0-.91l-1.4-.63l-.63-1.4a.5.5 0 0 0-.91 0l-.63 1.4l-1.4.63a.5.5 0 0 0 0 .91l1.4.63l.63 1.4c.17.39.73.39.91 0m13.38.28a1 1 0 0 0-1.45.04l-6.39 7.18l-3.29-3.29a.996.996 0 0 0-1.41 0l-6.04 6.05c-.41.41-.41 1.09 0 1.5s1.09.41 1.5 0l5.25-5.26l3.25 3.25c.41.41 1.07.39 1.45-.04l7.17-8.07c.35-.39.33-.99-.04-1.36"></svg:path>`,
})
export class IcRoundAutoGraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAutoModeIcon],svg[ic-round-auto-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.06 2.83c-1.15-.77-2.46-1.32-3.86-1.61c-.62-.12-1.2.35-1.2.99c0 .46.31.88.76.97c1.17.23 2.26.7 3.21 1.34c.39.26.9.19 1.23-.14c.46-.45.39-1.2-.14-1.55M11 2.21c0-.64-.58-1.11-1.2-.99c-1.4.29-2.71.84-3.86 1.61c-.52.35-.59 1.1-.15 1.54c.33.33.84.4 1.23.14c.96-.64 2.04-1.1 3.21-1.34c.46-.08.77-.5.77-.96M4.38 5.79a1 1 0 0 0-1.54.15A10.7 10.7 0 0 0 1.23 9.8a1 1 0 0 0 .98 1.2c.46 0 .88-.31.97-.76c.23-1.17.7-2.26 1.34-3.22c.25-.38.18-.9-.14-1.23M21.79 11a1 1 0 0 0 .98-1.2c-.29-1.4-.84-2.7-1.61-3.86c-.35-.52-1.1-.6-1.54-.15c-.33.33-.4.84-.14 1.23c.64.96 1.1 2.05 1.34 3.22c.09.45.51.76.97.76M8 12.46l2.44 1.11l1.1 2.43a.5.5 0 0 0 .91 0l1.11-2.44l2.44-1.1a.5.5 0 0 0 0-.91l-2.44-1.11L12.46 8a.5.5 0 0 0-.91 0l-1.11 2.44L8 11.54c-.39.18-.39.74 0 .92"></svg:path><svg:path fill="currentColor" d="M12 21a8.96 8.96 0 0 1-7.46-4H6c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.7c1.99 2.84 5.27 4.7 9 4.7c4.45 0 8.27-2.64 10-6.43a1.01 1.01 0 0 0-.69-1.39c-.45-.1-.93.11-1.12.54C18.77 18.83 15.64 21 12 21"></svg:path>`,
})
export class IcRoundAutoModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAutoStoriesIcon],svg[ic-round-auto-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.15 1.35l-4 4q-.15.15-.15.36v8.17c0 .43.51.66.83.37l4-3.6a.48.48 0 0 0 .17-.37V1.71a.5.5 0 0 0-.85-.36m4.32 3.85c-.47-.24-.96-.44-1.47-.61v12.03c-1.14-.41-2.31-.62-3.5-.62c-1.9 0-3.78.54-5.5 1.58V5.48C10.38 4.55 8.51 4 6.5 4c-1.79 0-3.48.44-4.97 1.2c-.33.16-.53.51-.53.88v12.08c0 .76.81 1.23 1.48.87C3.69 18.4 5.05 18 6.5 18c2.07 0 3.98.82 5.5 2c1.52-1.18 3.43-2 5.5-2c1.45 0 2.81.4 4.02 1.04c.67.36 1.48-.11 1.48-.87V6.08c0-.37-.2-.72-.53-.88"></svg:path>`,
})
export class IcRoundAutoStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAutofpsSelectIcon],svg[ic-round-autofps-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.03 6.3h-.06l-1.02 2.89h2.1zM4 22c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1"></svg:path><svg:path fill="currentColor" d="M12 15c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6m0-10c.38 0 .71.23.85.59l2.12 5.65a.56.56 0 0 1-.53.76c-.24 0-.45-.15-.53-.38l-.49-1.41h-2.83l-.5 1.41a.564.564 0 1 1-1.06-.38l2.12-5.65c.14-.36.47-.59.85-.59M8 22c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1m4 0c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1m3-4v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundAutofpsSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAutorenewIcon],svg[ic-round-autorenew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 0 0-.85.36V4c-4.42 0-8 3.58-8 8c0 1.04.2 2.04.57 2.95c.27.67 1.13.85 1.64.34c.27-.27.38-.68.23-1.04C6.15 13.56 6 12.79 6 12c0-3.31 2.69-6 6-6m5.79 2.71c-.27.27-.38.69-.23 1.04c.28.7.44 1.46.44 2.25c0 3.31-2.69 6-6 6v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.35V20c4.42 0 8-3.58 8-8c0-1.04-.2-2.04-.57-2.95c-.27-.67-1.13-.85-1.64-.34"></svg:path>`,
})
export class IcRoundAutorenewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundAvTimerIcon],svg[ic-round-av-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="12" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 3c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-.92c3.31.48 5.87 3.25 6 6.66c.14 3.85-3.03 7.2-6.88 7.26A6.996 6.996 0 0 1 5 12c0-1.68.59-3.22 1.58-4.42l4.71 4.72a.996.996 0 1 0 1.41-1.41L7.26 5.46c-.38-.38-1-.39-1.4-.02A8.9 8.9 0 0 0 3 12c0 5.04 4.14 9.12 9.21 9c4.7-.11 8.63-4.01 8.78-8.71C21.16 7.19 17.07 3 12 3"></svg:path>`,
})
export class IcRoundAvTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBabyChangingStationIcon],svg[ic-round-baby-changing-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9c0 .55-.45 1-1 1h-1.58c-.28 0-.55-.06-.8-.17l-2.3-1.01L7 12.75V21c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8.67c0-.22.04-.44.11-.65l1.48-4.32A1.99 1.99 0 0 1 7.3 6.18l4.15 1.83L13 8c.55 0 1 .45 1 1M8 1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m2 18h10c.55 0 1-.45 1-1s-.45-1-1-1H10c-.55 0-1 .45-1 1s.45 1 1 1m9.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M13 12c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v1h-2z"></svg:path>`,
})
export class IcRoundBabyChangingStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBackHandIcon],svg[ic-round-back-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16c0 4.42-3.58 8-8 8c-3.26 0-6.19-1.99-7.4-5.02l-3.03-7.61a1 1 0 0 1 1.24-1.32l.79.26c.56.18 1.02.61 1.24 1.16l1.28 3.21c.08.2.26.32.46.32H8V3.25a1.25 1.25 0 0 1 2.5 0v8.25c0 .28.22.5.5.5s.5-.22.5-.5V1.25a1.25 1.25 0 0 1 2.5 0V11.5c0 .28.22.5.5.5s.5-.22.5-.5V2.75a1.25 1.25 0 0 1 2.5 0v8.75c0 .28.22.5.5.5s.5-.22.5-.5V5.75a1.25 1.25 0 0 1 2.5 0z"></svg:path>`,
})
export class IcRoundBackHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBackpackIcon],svg[ic-round-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V3.5C7 2.67 7.67 2 8.5 2s1.5.67 1.5 1.5V4h4v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.64c1.72.45 3 2 3 3.86M6 13c0 .55.45 1 1 1h9v1c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundBackpackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBackspaceIcon],svg[ic-round-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H7c-.69 0-1.23.35-1.59.88L.37 11.45c-.22.34-.22.77 0 1.11l5.04 7.56c.36.52.9.88 1.59.88h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-3.7 13.3a.996.996 0 0 1-1.41 0L14 13.41l-2.89 2.89a.996.996 0 1 1-1.41-1.41L12.59 12L9.7 9.11a.996.996 0 1 1 1.41-1.41L14 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L15.41 12l2.89 2.89c.38.38.38 1.02 0 1.41"></svg:path>`,
})
export class IcRoundBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBackupIcon],svg[ic-round-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11c0-3.87-3.13-7-7-7a6.99 6.99 0 0 0-6.74 5.15A5.49 5.49 0 0 0 1 14.5C1 17.54 3.46 20 6.5 20h12c2.49-.01 4.5-2.03 4.5-4.52c0-2.33-1.75-4.22-4-4.48m-6 2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9.21c-.45 0-.67-.54-.35-.85l2.79-2.79c.2-.2.51-.2.71 0l2.79 2.79a.5.5 0 0 1-.35.85z"></svg:path>`,
})
export class IcRoundBackupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBackupTableIcon],svg[ic-round-backup-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7v13h13c.55 0 1 .45 1 1s-.45 1-1 1H4c-1.1 0-2-.9-2-2V7c0-.55.45-1 1-1s1 .45 1 1"></svg:path><svg:path fill="currentColor" d="M6 4v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2m9 7h5v5h-5zm-7 0h5v5H8zm0-7h12v5H8z"></svg:path>`,
})
export class IcRoundBackupTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBadgeIcon],svg[ic-round-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12m3 6H6v-.43c0-.6.36-1.15.92-1.39c.64-.28 1.34-.43 2.08-.43s1.44.15 2.08.43c.55.24.92.78.92 1.39zm1-9h-2V4h2zm4.25 7.5h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75m0-3h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75"></svg:path>`,
})
export class IcRoundBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBakeryDiningIcon],svg[ic-round-bakery-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.77 8.55l-1.17-.47c-.62-.25-1.31.17-1.37.84L15.49 17H17l2.6-6.5c.31-.77-.06-1.65-.83-1.95M6.4 8.08l-1.17.47c-.77.3-1.14 1.18-.83 1.95L7 17h1.5l-.74-8.08a.993.993 0 0 0-1.36-.84M13.36 6h-2.71c-.89 0-1.58.76-1.5 1.64l.85 9.35h4l.85-9.36c.08-.87-.61-1.63-1.49-1.63M3.18 13.72l-1 1.93c-.19.36-.23.78-.12 1.19c.29 1.01 1.43 1.41 2.38.94l1.05-.52l-1.4-3.49a.5.5 0 0 0-.91-.05m18.64 1.93l-1-1.93a.503.503 0 0 0-.91.04l-1.4 3.49l1.05.52c.94.47 2.09.07 2.38-.94c.11-.4.07-.82-.12-1.18"></svg:path>`,
})
export class IcRoundBakeryDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBalanceIcon],svg[ic-round-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19V7.83c.85-.3 1.53-.98 1.83-1.83H18l-2.78 6.49c-.17.39-.23.84-.11 1.25c.39 1.3 1.76 2.26 3.39 2.26s3.01-.96 3.39-2.26c.12-.41.06-.86-.11-1.25L19 6h1c.55 0 1-.45 1-1s-.45-1-1-1h-5.17c-.41-1.17-1.52-2-2.83-2s-2.42.83-2.83 2H4c-.55 0-1 .45-1 1s.45 1 1 1h1l-2.78 6.49c-.17.39-.23.84-.11 1.25C2.49 15.04 3.87 16 5.5 16s3.01-.96 3.39-2.26c.12-.41.06-.86-.11-1.25L6 6h3.17c.3.85.98 1.53 1.83 1.83V19m0 0H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-8m7.37-6h-3.74l1.87-4.36zm-13 0H3.63L5.5 8.64zM12 6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundBalanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBalconyIcon],svg[ic-round-balcony-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14.27V10c0-4.42-3.58-8-8-8s-8 3.58-8 8v4.27c-.6.34-1 .99-1 1.73v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-.74-.4-1.39-1-1.73M7 20H5v-4h2zm4 0H9v-4h2zm0-6H6v-4c0-2.97 2.16-5.44 5-5.92zm2-9.92A6 6 0 0 1 18 10v4h-5zM15 20h-2v-4h2zm4 0h-2v-4h2zM8 11c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m8 0c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1"></svg:path>`,
})
export class IcRoundBalconyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBallotIcon],svg[ic-round-ballot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9.5h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1m0 7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1m5 4.5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2M7 11h3c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m0-4h3v3H7zm0 11h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m0-4h3v3H7z"></svg:path>`,
})
export class IcRoundBallotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBarChartIcon],svg[ic-round-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2v7c0 1.1.9 2 2 2m10-5v3c0 1.1.9 2 2 2s2-.9 2-2v-3c0-1.1-.9-2-2-2s-2 .9-2 2m-4 5c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2"></svg:path>`,
})
export class IcRoundBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBarcodeIcon],svg[ic-round-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6h1v12H2zm2 0h2v12H4zm4 0h1v12H8zm2 0h3v12h-3zm4 0h1v12h-1zm3 0h1v12h-1zm2 0h1v12h-1zm2 0h1v12h-1z"></svg:path>`,
})
export class IcRoundBarcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatchPredictionIcon],svg[ic-round-batch-prediction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-5 12.5c-.55 0-1-.45-1-1V19h2v.5c0 .55-.45 1-1 1m1-2.5h-2c0-1.5-2.5-3-2.5-5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 2-2.5 3.5-2.5 5m5-11.5H6C6 5.67 6.67 5 7.5 5h9c.83 0 1.5.67 1.5 1.5m-1-3H7C7 2.67 7.67 2 8.5 2h7c.83 0 1.5.67 1.5 1.5"></svg:path>`,
})
export class IcRoundBatchPredictionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBathroomIcon],svg[ic-round-bathroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 18c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-8-4c0-2.76 2.24-5 5-5s5 2.24 5 5c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1"></svg:path>`,
})
export class IcRoundBathroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBathtubIcon],svg[ic-round-bathtub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="7" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21 13h-1V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08c-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08c0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.25 2.25 0 0 0 5 12.25V13H3c-.55 0-1 .45-1 1v5c0 1.1.9 2 2 2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1c1.1 0 2-.9 2-2v-5c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundBathtubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery0BarIcon],svg[ic-round-battery-0-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h2c.55 0 1 .45 1 1m-2 1H9v14h6z"></svg:path>`,
})
export class IcRoundBattery0BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery1BarIcon],svg[ic-round-battery-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h2c.55 0 1 .45 1 1m-2 1H9v12h6z"></svg:path>`,
})
export class IcRoundBattery1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery2BarIcon],svg[ic-round-battery-2-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h2c.55 0 1 .45 1 1m-2 1H9v10h6z"></svg:path>`,
})
export class IcRoundBattery2BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery20Icon],svg[ic-round-battery-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17z"></svg:path><svg:path fill="currentColor" fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33V17h10z"></svg:path>`,
})
export class IcRoundBattery20Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery3BarIcon],svg[ic-round-battery-3-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h2c.55 0 1 .45 1 1m-2 1H9v8h6z"></svg:path>`,
})
export class IcRoundBattery3BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery30Icon],svg[ic-round-battery-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33V15h10z"></svg:path><svg:path fill="currentColor" d="M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15z"></svg:path>`,
})
export class IcRoundBattery30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery4BarIcon],svg[ic-round-battery-4-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h2c.55 0 1 .45 1 1m-2 1H9v6h6z"></svg:path>`,
})
export class IcRoundBattery4BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery5BarIcon],svg[ic-round-battery-5-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h2c.55 0 1 .45 1 1m-2 1H9v4h6z"></svg:path>`,
})
export class IcRoundBattery5BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery50Icon],svg[ic-round-battery-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33V13h10z"></svg:path><svg:path fill="currentColor" d="M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13z"></svg:path>`,
})
export class IcRoundBattery50Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery6BarIcon],svg[ic-round-battery-6-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h2c.55 0 1 .45 1 1m-2 1H9v2h6z"></svg:path>`,
})
export class IcRoundBattery6BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery60Icon],svg[ic-round-battery-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33V11h10z"></svg:path><svg:path fill="currentColor" d="M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11z"></svg:path>`,
})
export class IcRoundBattery60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery80Icon],svg[ic-round-battery-80-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33V9h10z"></svg:path><svg:path fill="currentColor" d="M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9z"></svg:path>`,
})
export class IcRoundBattery80Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBattery90Icon],svg[ic-round-battery-90-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33V8h10z"></svg:path><svg:path fill="currentColor" d="M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8z"></svg:path>`,
})
export class IcRoundBattery90Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryAlertIcon],svg[ic-round-battery-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4M13 18h-2v-2h2zm0-5c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1z"></svg:path>`,
})
export class IcRoundBatteryAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryCharging20Icon],svg[ic-round-battery-charging-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.94 18.24c-.24.45-.94.28-.94-.24v-1H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4z"></svg:path><svg:path fill="currentColor" fill-opacity=".3" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9.83a.5.5 0 0 1-.44-.74l2.67-5c.24-.45.94-.28.94.24v3.5h1.17c.38 0 .62.4.44.74L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4"></svg:path>`,
})
export class IcRoundBatteryCharging20Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryCharging30Icon],svg[ic-round-battery-charging-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v9.17h2.83a.5.5 0 0 1-.44-.74l2.67-5c.24-.45.94-.28.94.24v3.5h1.17c.38 0 .62.4.44.74l-.67 1.26H17V5.33C17 4.6 16.4 4 15.67 4"></svg:path><svg:path fill="currentColor" d="M11.94 18.24c-.24.45-.94.28-.94-.24v-3.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07z"></svg:path>`,
})
export class IcRoundBatteryCharging30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryCharging50Icon],svg[ic-round-battery-charging-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.94 18.24c-.24.45-.94.28-.94-.24v-3.5H9.83a.5.5 0 0 1-.44-.74l.14-.26H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z"></svg:path><svg:path fill="currentColor" fill-opacity=".3" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53l2.53-4.74c.24-.45.94-.28.94.24v3.5h1.17c.38 0 .62.4.44.74l-.14.26H17V5.33C17 4.6 16.4 4 15.67 4"></svg:path>`,
})
export class IcRoundBatteryCharging50Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryCharging60Icon],svg[ic-round-battery-charging-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33V11h3.87l1.19-2.24c.24-.45.94-.28.94.24v2h4V5.33C17 4.6 16.4 4 15.67 4"></svg:path><svg:path fill="currentColor" d="M13 12.5h1.17c.38 0 .62.4.44.74l-2.67 5c-.24.45-.94.28-.94-.24v-3.5H9.83a.5.5 0 0 1-.44-.74L10.87 11H7v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11h-4z"></svg:path>`,
})
export class IcRoundBatteryCharging60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryCharging80Icon],svg[ic-round-battery-charging-80-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33V9h4.93l.13-.24c.24-.45.94-.28.94.24h4V5.33C17 4.6 16.4 4 15.67 4"></svg:path><svg:path fill="currentColor" d="M13 12.5h1.17c.38 0 .62.4.44.74l-2.67 5c-.24.45-.94.28-.94-.24v-3.5H9.83a.5.5 0 0 1-.44-.74L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4z"></svg:path>`,
})
export class IcRoundBatteryCharging80Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryCharging90Icon],svg[ic-round-battery-charging-90-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33C17 4.6 16.4 4 15.67 4"></svg:path><svg:path fill="currentColor" d="M7 20.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7zm2.39-6.91l2.67-5c.24-.45.94-.28.94.24v3.5h1.17c.38 0 .62.4.44.74l-2.67 5c-.24.45-.94.28-.94-.24v-3.5H9.83c-.37 0-.62-.4-.44-.74"></svg:path>`,
})
export class IcRoundBatteryCharging90Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryChargingFullIcon],svg[ic-round-battery-charging-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4m-1.06 9.24l-2.67 5c-.24.45-.94.28-.94-.24v-3.5H9.83a.5.5 0 0 1-.44-.74l2.67-5c.24-.45.94-.28.94.24v3.5h1.17c.37 0 .62.4.44.74"></svg:path>`,
})
export class IcRoundBatteryChargingFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryFullIcon],svg[ic-round-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4"></svg:path>`,
})
export class IcRoundBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatterySaverIcon],svg[ic-round-battery-saver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h-2V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1m-2 10h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundBatterySaverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryStdIcon],svg[ic-round-battery-std-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4"></svg:path>`,
})
export class IcRoundBatteryStdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryUnknownIcon],svg[ic-round-battery-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4M13 18h-2v-2h2zm1.3-5.31s-.38.42-.67.71c-.14.14-.27.31-.39.47l-.09.15c-.08.12-.14.25-.19.37c-.09.22-.16.43-.16.61h-1.6c0-.42.12-.8.29-1.13c.06-.11.13-.21.2-.31c.03-.05.06-.11.1-.16c.11-.14.23-.28.34-.4l.93-.94A1.498 1.498 0 0 0 12 9.5c-.65 0-1.21.41-1.41.99a.75.75 0 0 1-.71.51c-.52 0-.88-.52-.71-1.01A3.005 3.005 0 0 1 12 8c1.66 0 3 1.34 3 3c0 .66-.27 1.26-.7 1.69"></svg:path>`,
})
export class IcRoundBatteryUnknownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBeachAccessIcon],svg[ic-round-beach-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.13 14.56l1.43-1.43l5.73 5.73c.39.39.39 1.03 0 1.43c-.39.39-1.03.39-1.43 0zm4.29-5.73l1.27-1.27c.89-.89.77-2.43-.31-3.08a10.1 10.1 0 0 0-12.4 1.47c3.93-1.3 8.31-.25 11.44 2.88M5.95 5.98c-3.36 3.37-3.85 8.51-1.48 12.4c.66 1.08 2.19 1.21 3.08.31l1.27-1.27C5.7 14.29 4.65 9.91 5.95 5.98m.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3"></svg:path>`,
})
export class IcRoundBeachAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBedIcon],svg[ic-round-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78c-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v5c0 .55.45 1 1 1s1-.45 1-1v-1h16v1c0 .55.45 1 1 1s1-.45 1-1v-5c0-.88-.39-1.67-1-2.22M14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1M5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"></svg:path>`,
})
export class IcRoundBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBedroomBabyIcon],svg[ic-round-bedroom-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8 15.99a9.83 9.83 0 0 1-6.4-2.35a.76.76 0 0 1-.04-1.11c.27-.27.71-.29 1.01-.04c.19.16.39.31.6.46L8 13.49V9.5l-1 .65c-.32.21-.73.16-.99-.12L6 10.01a.8.8 0 0 1-.03-1.08c.3-.33.65-.74.86-.98c.09-.11.07-.28-.04-.36c0 0-.81-.31-.79-.57c0-.11 3.36-.03 3.36-.03c.18 0 .34.1.43.25l1.44 2.5c.09.15.25.25.43.25h4.83c.28 0 .5.22.5.5s-.22.5-.5.5H16v2.5l.84 1.46c.2-.15.4-.3.6-.46c.3-.25.73-.23 1.01.04c.31.31.29.82-.04 1.11A9.88 9.88 0 0 1 12 17.99"></svg:path><svg:path fill="currentColor" d="M14.69 14.24a7.72 7.72 0 0 1-5.4 0l-.81 1.41l-.03.06c1.1.52 2.28.79 3.53.79s2.45-.28 3.55-.79l-.03-.06z"></svg:path>`,
})
export class IcRoundBedroomBabyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBedroomChildIcon],svg[ic-round-bedroom-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.5h6v2H9zm6.64 3.5H8.37a.87.87 0 0 0-.87.87h.01V14h9v-1.13a.87.87 0 0 0-.87-.87"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2.75 15c-.41 0-.75-.34-.75-.75v-.75h-9v.75c0 .41-.34.75-.75.75S6 16.66 6 16.25v-3.38c0-1 .62-1.85 1.5-2.2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v1.67c.88.35 1.5 1.2 1.5 2.2v3.38c0 .41-.34.75-.75.75"></svg:path>`,
})
export class IcRoundBedroomChildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBedroomParentIcon],svg[ic-round-bedroom-parent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 12h-9c-.55 0-1 .45-1 1v1h11v-1c0-.55-.45-1-1-1M7.25 8.5h4v2h-4zm5.5 0h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1.75 15c-.41 0-.75-.34-.75-.75v-.75h-11v.75c0 .41-.34.75-.75.75S5 16.66 5 16.25v-3.08c0-.66.25-1.26.65-1.72V9c0-1.1.9-2 2-2H11c.37 0 .72.12 1 .32c.28-.2.63-.32 1-.32h3.35c1.1 0 2 .9 2 2v2.45c.4.46.65 1.06.65 1.72v3.08c0 .41-.34.75-.75.75"></svg:path>`,
})
export class IcRoundBedroomParentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBedtimeIcon],svg[ic-round-bedtime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.65 3.46c.27-.71-.36-1.45-1.12-1.34c-5.52.8-9.47 6.07-8.34 11.88c.78 4.02 4.09 7.21 8.14 7.87c3.74.61 7.16-.87 9.32-3.44c.48-.57.19-1.48-.55-1.62c-6.02-1.15-9.68-7.54-7.45-13.35"></svg:path>`,
})
export class IcRoundBedtimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBedtimeOffIcon],svg[ic-round-bedtime-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.65 3.46c.27-.71-.36-1.45-1.12-1.34c-1.48.21-2.85.76-4.04 1.54l4.59 4.59c-.2-1.56-.04-3.2.57-4.79m-9.55.05a.996.996 0 0 0 0 1.41l1.56 1.56c-1.4 2.11-2.02 4.77-1.46 7.56c.79 3.94 3.99 7.07 7.94 7.78c2.74.49 5.3-.15 7.35-1.51l1.57 1.57a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0"></svg:path>`,
})
export class IcRoundBedtimeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBeenhereIcon],svg[ic-round-beenhere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66l7.57 5.04c.34.22.77.22 1.11 0l7.56-5.04c.53-.36.88-.97.88-1.66V3c0-1.1-.9-2-2-2m-.7 6.7l-7.59 7.59a.996.996 0 0 1-1.41 0L5.71 11.7a.996.996 0 1 1 1.41-1.41L10 13.17l6.88-6.88c.39-.39 1.02-.39 1.41 0s.4 1.02.01 1.41"></svg:path>`,
})
export class IcRoundBeenhereIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBentoIcon],svg[ic-round-bento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11V5h4c1.1 0 2 .9 2 2v4zm4 8c1.1 0 2-.9 2-2v-4h-6v6zM14 5v14H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm-4.5 7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5"></svg:path>`,
})
export class IcRoundBentoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBikeScooterIcon],svg[ic-round-bike-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14h.74L8.82 5.56A2.01 2.01 0 0 0 6.87 4H4c-.55 0-1 .45-1 1s.45 1 1 1h2.87l1.42 6.25h-.01A6.01 6.01 0 0 0 4.09 17H0v2h6v-1c0-2.21 1.79-4 4-4m8.75-6h-.56l-1.35-3.69A2 2 0 0 0 14.96 3H12c-.55 0-1 .45-1 1s.45 1 1 1h2.96l1.1 3H10.4l.46 2H15c-.43.58-.75 1.25-.9 2h-2.79l.46 2h2.33c.44 2.23 2.31 3.88 4.65 3.99c3.16.15 5.88-2.83 5.12-6.1C23.34 9.57 21.13 8 18.75 8m.13 8c-1.54-.06-2.84-1.37-2.88-2.92c-.02-.96.39-1.8 1.05-2.36l.62 1.7c.19.52.76.79 1.28.6s.79-.76.6-1.28l-.63-1.73l.01-.01A2.97 2.97 0 0 1 22 13c0 1.72-1.38 3.06-3.12 3"></svg:path><svg:path fill="currentColor" d="M10 15c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundBikeScooterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBiotechIcon],svg[ic-round-biotech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3c0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2z"></svg:path><svg:path fill="currentColor" d="M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.25.68c.19.52.76.79 1.28.6c.19.52.76.79 1.28.6s.79-.76.6-1.28c.52-.19.79-.76.6-1.28L14.1 3.54a1 1 0 0 0-1.28-.6a1 1 0 0 0-1.28-.6c-.52.19-.79.76-.6 1.28c-.52.19-.79.76-.6 1.28z"></svg:path><svg:circle cx="10.5" cy="8" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcRoundBiotechIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBlenderIcon],svg[ic-round-blender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.13 15.13l1.69-10.98c.1-.6-.37-1.15-.99-1.15H14c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87M5 9V5h1.31l.62 4zm7 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m2.29-5H9.72L8.33 5h7.34z"></svg:path>`,
})
export class IcRoundBlenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBlindIcon],svg[ic-round-blind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11.41" cy="3.5" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12.04 7.12c-.17-.35-.44-.65-.8-.85a1.98 1.98 0 0 0-1.93-.03v-.01l-4.39 2.5c-.62.35-1.01 1.01-1.01 1.73V13c0 .55.45 1 1 1s1-.45 1-1v-2.54l1.5-.85c-.32 1.1-.5 2.24-.5 3.39v5.33l-2 2.67c-.33.44-.24 1.07.2 1.4s1.07.24 1.4-.2l2.04-2.72c.23-.31.37-.69.4-1.08l.18-2.94L10.91 18v4c0 .55.45 1 1 1s1-.45 1-1v-4.87c0-.41-.13-.81-.36-1.15l-1.6-2.29v-.01c-.11-1.16.07-2.32.46-3.4c.75 1.14 1.88 1.98 3.2 2.41l5.7 9.87c.14.24.44.32.68.18s.32-.44.18-.68L15.92 13c.54 0 .98-.44.98-.98v-.05c0-.5-.37-.94-.87-.99c-.95-.1-2.37-.52-3.21-2.18"></svg:path>`,
})
export class IcRoundBlindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBlindsIcon],svg[ic-round-blinds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM16 9h2v2h-2zm-2 2H6V9h8zm4-4h-2V5h2zm-4-2v2H6V5zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6z"></svg:path>`,
})
export class IcRoundBlindsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBlindsClosedIcon],svg[ic-round-blinds-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h10.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H21c.55 0 1-.45 1-1s-.45-1-1-1zm-2-8h-2V9h2zm-4 0H6V9h8zm0 2v2H6v-2zm2 0h2v2h-2zm2-6h-2V5h2zm-4-2v2H6V5zM6 19v-2h8v2zm10 0v-2h2v2z"></svg:path>`,
})
export class IcRoundBlindsClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBlockIcon],svg[ic-round-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M4 12c0-4.42 3.58-8 8-8c1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.9 7.9 0 0 1 4 12m8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.9 7.9 0 0 1 20 12c0 4.42-3.58 8-8 8"></svg:path>`,
})
export class IcRoundBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBloodtypeIcon],svg[ic-round-bloodtype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.66 2.58c-.38-.33-.95-.33-1.33 0C6.45 6.88 4 10.62 4 13.8c0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.18-2.45-6.92-7.34-11.22M14 18h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m0-5h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundBloodtypeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBluetoothIcon],svg[ic-round-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 7l-4.29-4.29c-.63-.63-1.71-.19-1.71.7v6.18L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L11 14.41v6.18c0 .89 1.08 1.34 1.71.71L17 17a.996.996 0 0 0 0-1.41L13.41 12L17 8.42c.39-.39.39-1.03 0-1.42m-4-1.17l1.88 1.88L13 9.59zm1.88 10.46L13 18.17v-3.76z"></svg:path>`,
})
export class IcRoundBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBluetoothAudioIcon],svg[ic-round-bluetooth-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.98 10.28l-1.38 1.38c-.2.2-.2.51 0 .71l1.38 1.38c.28.28.75.15.85-.23c.11-.5.17-1 .17-1.52a6 6 0 0 0-.18-1.48a.5.5 0 0 0-.84-.24m4.12-2.5a.863.863 0 0 0-1.4-.24c-.26.26-.31.64-.17.98c.46 1.07.72 2.24.72 3.47c0 1.24-.26 2.42-.73 3.49a.84.84 0 0 0 .16.94a.84.84 0 0 0 1.35-.23c.63-1.3.98-2.76.98-4.3a10 10 0 0 0-.91-4.11M11.39 12l3.59-3.58c.39-.39.39-1.02 0-1.42l-4.29-4.29c-.63-.63-1.71-.18-1.71.71V9.6L5.09 5.7a.996.996 0 1 0-1.41 1.41L8.57 12l-4.89 4.89a.996.996 0 1 0 1.41 1.41l3.89-3.89v6.18c0 .89 1.08 1.34 1.71.71l4.3-4.3c.39-.39.39-1.02 0-1.42zm-.41-6.17l1.88 1.88l-1.88 1.88zm0 12.34v-3.76l1.88 1.88z"></svg:path>`,
})
export class IcRoundBluetoothAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBluetoothConnectedIcon],svg[ic-round-bluetooth-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13c.55-.55.55-1.44 0-1.99V11c-.55-.55-1.45-.55-2 0s-.55 1.45 0 2s1.45.55 2 0m14-2a1.41 1.41 0 0 0-2-.01V11c-.55.55-.55 1.44 0 1.99V13c.55.55 1.44.55 1.99 0H20c.55-.55.55-1.45 0-2m-3-4l-4.29-4.29c-.63-.63-1.71-.19-1.71.7v6.18L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L11 14.41v6.18c0 .89 1.08 1.34 1.71.71L17 17c.39-.39.39-1.02 0-1.42L13.41 12L17 8.42c.39-.39.39-1.03 0-1.42m-2.12 9.29L13 18.17v-3.76zM13 9.59V5.83l1.88 1.88z"></svg:path>`,
})
export class IcRoundBluetoothConnectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBluetoothDisabledIcon],svg[ic-round-bluetooth-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.29 17.89L6.11 4.7A.996.996 0 1 0 4.7 6.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L11 14.41v6.18c0 .89 1.08 1.34 1.71.71l3.59-3.59l1.59 1.59c.39.39 1.02.39 1.41 0c.38-.39.38-1.03-.01-1.41m-6.29.28v-3.76l1.88 1.88zm0-12.34l1.88 1.88l-1.47 1.47l1.41 1.41L17 8.42c.39-.39.39-1.02 0-1.42l-4.29-4.29c-.63-.63-1.71-.19-1.71.7v3.36l2 2z"></svg:path>`,
})
export class IcRoundBluetoothDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBluetoothDriveIcon],svg[ic-round-bluetooth-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.85 6l1.8-1.8c.2-.2.2-.51 0-.71L19.5 1.36c-.32-.31-.85-.09-.85.35v3.08L16.7 2.85a.5.5 0 0 0-.7 0c-.19.19-.19.51 0 .7L18.44 6L16 8.44c-.19.19-.19.5 0 .7s.51.2.7 0l1.95-1.95v3.09c0 .45.54.67.85.35l2.14-2.15c.2-.2.19-.51 0-.71zm-.2-3.09l.94.94l-.94.94zm0 6.17V7.2l.94.94z"></svg:path><svg:path fill="currentColor" d="M15 10H4.81l1.04-3H15V5H5.5c-.66 0-1.21.42-1.42 1.01L2 12v7.5c0 .83.67 1.5 1.5 1.5S5 20.33 5 19.5V19h12v.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V12h-3c-1.1 0-2-.9-2-2m-8.5 6c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16m9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcRoundBluetoothDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBluetoothSearchingIcon],svg[ic-round-bluetooth-searching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.98 10.28l-1.38 1.38c-.2.2-.2.51 0 .71l1.38 1.38c.28.28.75.15.85-.23c.11-.5.17-1 .17-1.52a6 6 0 0 0-.18-1.48a.5.5 0 0 0-.84-.24m4.12-2.5a.863.863 0 0 0-1.4-.24c-.26.26-.31.64-.17.98c.46 1.07.72 2.24.72 3.47c0 1.24-.26 2.42-.73 3.49a.84.84 0 0 0 .16.94a.84.84 0 0 0 1.35-.23c.63-1.3.98-2.76.98-4.3a10 10 0 0 0-.91-4.11M11.41 12L15 8.42c.39-.39.39-1.02 0-1.42l-4.29-4.29c-.63-.63-1.71-.19-1.71.7v6.18L5.11 5.7A.996.996 0 1 0 3.7 7.11L8.59 12L3.7 16.89a.996.996 0 1 0 1.41 1.41L9 14.41v6.18c0 .89 1.08 1.34 1.71.71L15 17c.39-.39.39-1.02 0-1.42zM11 5.83l1.88 1.88L11 9.59zm0 12.34v-3.76l1.88 1.88z"></svg:path>`,
})
export class IcRoundBluetoothSearchingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBlurCircularIcon],svg[ic-round-blur-circular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m3 7c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m-3-3c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5M14 9c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5m3 6c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m0-4c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m0-3.5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundBlurCircularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBlurLinearIcon],svg[ic-round-blur-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M9 13c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0-4c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1M4 21h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5S3.5 7.17 3.5 8S4.17 9.5 5 9.5m0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M9 17c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5M3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m14 4.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5m0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5M13 9c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0 4c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0 4c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundBlurLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBlurOffIcon],svg[ic-round-blur-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m13.8 11.48l.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28M14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5m-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5"></svg:path><svg:circle cx="18" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="18" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21 10.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5"></svg:path><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="18" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="18" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 20.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m7-7c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m-18 0c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5"></svg:path><svg:circle cx="10" cy="18" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m7 11c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5"></svg:path><svg:circle cx="6" cy="14" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M3.21 4.56a.996.996 0 0 0 0 1.41l3.07 3.07L6 9c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47c0 .83.67 1.5 1.5 1.5c.74 0 1.36-.54 1.47-1.25l2.81 2.81A.9.9 0 0 0 14 17c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1c0-.1-.03-.19-.06-.28l3.08 3.07c.39.39 1.02.39 1.41 0s.39-1.02 0-1.42L4.62 4.56a.996.996 0 0 0-1.41 0"></svg:path>`,
})
export class IcRoundBlurOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBlurOnIcon],svg[ic-round-blur-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0-8c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5M6 5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5M14 7c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5m-11 10c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m7 7c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5M10 7c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m8 .5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0-8c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0-4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5M14 17c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0 8.5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5"></svg:path>`,
})
export class IcRoundBlurOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBoltIcon],svg[ic-round-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.67 21c-.35 0-.62-.31-.57-.66L11 14H7.5c-.88 0-.33-.75-.31-.78c1.26-2.23 3.15-5.53 5.65-9.93a.577.577 0 0 1 1.07.37l-.9 6.34h3.51c.4 0 .62.19.4.66c-3.29 5.74-5.2 9.09-5.75 10.05c-.1.18-.29.29-.5.29"></svg:path>`,
})
export class IcRoundBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBookIcon],svg[ic-round-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 4h5v8l-2.5-1.5L6 12z"></svg:path>`,
})
export class IcRoundBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBookOnlineIcon],svg[ic-round-book-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7 6h10v12H7zm9 5V9.14C16 8.51 15.55 8 15 8H9c-.55 0-1 .51-1 1.14v1.96c.55 0 1 .45 1 1s-.45 1-1 1v1.76c0 .63.45 1.14 1 1.14h6c.55 0 1-.51 1-1.14V13c-.55 0-1-.45-1-1s.45-1 1-1m-4 3.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5m0-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5m0-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5"></svg:path>`,
})
export class IcRoundBookOnlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBookmarkIcon],svg[ic-round-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBookmarkAddIcon],svg[ic-round-bookmark-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6c0 .55-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V7h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V4c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1m-2 13.48c0 .72-.73 1.2-1.39.92L12 18l-5.61 2.4A.994.994 0 0 1 5 19.48V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9z"></svg:path>`,
})
export class IcRoundBookmarkAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBookmarkAddedIcon],svg[ic-round-bookmark-added-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9v8.58c0 .72-.73 1.2-1.39.92L12 18l-5.61 2.4A.994.994 0 0 1 5 19.48zm17.07-1.66c.39.39.39 1.02 0 1.41l-3.54 3.54a.996.996 0 0 1-1.41 0l-1.41-1.41a.996.996 0 1 1 1.41-1.41l.71.71l2.83-2.83c.39-.4 1.02-.4 1.41-.01"></svg:path>`,
})
export class IcRoundBookmarkAddedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBookmarkBorderIcon],svg[ic-round-bookmark-border-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V5c0-1.1-.9-2-2-2m0 15l-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundBookmarkBorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBookmarkRemoveIcon],svg[ic-round-bookmark-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1m-2 4.9A5.002 5.002 0 0 1 14 3H7c-1.1 0-2 .9-2 2v14.48c0 .72.73 1.2 1.39.92L12 18l5.61 2.4c.66.28 1.39-.2 1.39-.92z"></svg:path>`,
})
export class IcRoundBookmarkRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBookmarksIcon],svg[ic-round-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 18l2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2zM15 5H5c-1.1 0-2 .9-2 2v16l7-3l7 3V7c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundBookmarksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderAllIcon],svg[ic-round-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m8 14H6c-.55 0-1-.45-1-1v-5h5c.55 0 1 .45 1 1zm-1-8H5V6c0-.55.45-1 1-1h5v5c0 .55-.45 1-1 1m8 8h-5v-5c0-.55.45-1 1-1h5v5c0 .55-.45 1-1 1m1-8h-5c-.55 0-1-.45-1-1V5h5c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundBorderAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderBottomIcon],svg[ic-round-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11H7v2h2zm4 4h-2v2h2zM9 3H7v2h2zm4 8h-2v2h2zM5 3H3v2h2zm8 4h-2v2h2zm4 4h-2v2h2zm-4-8h-2v2h2zm4 0h-2v2h2zm2 10h2v-2h-2zm0 4h2v-2h-2zM5 7H3v2h2zm14-4v2h2V3zm0 6h2V7h-2zM5 11H3v2h2zM4 21h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m1-6H3v2h2z"></svg:path>`,
})
export class IcRoundBorderBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderClearIcon],svg[ic-round-border-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h2V3H7zm0 8h2v-2H7zm0 8h2v-2H7zm4-4h2v-2h-2zm0 4h2v-2h-2zm-8 0h2v-2H3zm0-4h2v-2H3zm0-4h2v-2H3zm0-4h2V7H3zm0-4h2V3H3zm8 8h2v-2h-2zm8 4h2v-2h-2zm0-4h2v-2h-2zm0 8h2v-2h-2zm0-12h2V7h-2zm-8 0h2V7h-2zm8-6v2h2V3zm-8 2h2V3h-2zm4 16h2v-2h-2zm0-8h2v-2h-2zm0-8h2V3h-2z"></svg:path>`,
})
export class IcRoundBorderClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderColorIcon],svg[ic-round-border-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 24H4c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2M13.06 5.19l3.75 3.75l-8.77 8.77c-.18.19-.44.29-.7.29H5c-.55 0-1-.45-1-1v-2.34c0-.27.11-.52.29-.71zm4.82 2.68l-3.75-3.75l1.83-1.83a.996.996 0 0 1 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"></svg:path>`,
})
export class IcRoundBorderColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderHorizontalIcon],svg[ic-round-border-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h2v-2H3zM5 7H3v2h2zM3 17h2v-2H3zm4 4h2v-2H7zM5 3H3v2h2zm4 0H7v2h2zm8 0h-2v2h2zm-4 4h-2v2h2zm0-4h-2v2h2zm6 14h2v-2h-2zm-8 4h2v-2h-2zm-7-8h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M19 3v2h2V3zm0 6h2V7h-2zm-8 8h2v-2h-2zm4 4h2v-2h-2zm4 0h2v-2h-2z"></svg:path>`,
})
export class IcRoundBorderHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderInnerIcon],svg[ic-round-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h2v-2H3zm4 0h2v-2H7zM5 7H3v2h2zM3 17h2v-2H3zM9 3H7v2h2zM5 3H3v2h2zm12 0h-2v2h2zm2 6h2V7h-2zm0-6v2h2V3zm-4 18h2v-2h-2zM12 3c-.55 0-1 .45-1 1v7H4c-.55 0-1 .45-1 1s.45 1 1 1h7v7c0 .55.45 1 1 1s1-.45 1-1v-7h7c.55 0 1-.45 1-1s-.45-1-1-1h-7V4c0-.55-.45-1-1-1m7 18h2v-2h-2zm0-4h2v-2h-2z"></svg:path>`,
})
export class IcRoundBorderInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderLeftIcon],svg[ic-round-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21h2v-2h-2zm0-4h2v-2h-2zm0-12h2V3h-2zm0 4h2V7h-2zm0 4h2v-2h-2zm-4 8h2v-2H7zM7 5h2V3H7zm0 8h2v-2H7zm-3 8c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1M19 9h2V7h-2zm-4 12h2v-2h-2zm4-4h2v-2h-2zm0-14v2h2V3zm0 10h2v-2h-2zm0 8h2v-2h-2zm-4-8h2v-2h-2zm0-8h2V3h-2z"></svg:path>`,
})
export class IcRoundBorderLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderOuterIcon],svg[ic-round-border-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h-2v2h2zm0 4h-2v2h2zm4 0h-2v2h2zM3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m15 14H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m-5-4h-2v2h2zm-4-4H7v2h2z"></svg:path>`,
})
export class IcRoundBorderOuterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderRightIcon],svg[ic-round-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21h2v-2H7zM3 5h2V3H3zm4 0h2V3H7zm0 8h2v-2H7zm-4 8h2v-2H3zm8 0h2v-2h-2zm-8-8h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm8 8h2v-2h-2zm4-4h2v-2h-2zm4-9v16c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1m-4 17h2v-2h-2zm0-16h2V3h-2zm-4 8h2v-2h-2zm0-8h2V3h-2zm0 4h2V7h-2z"></svg:path>`,
})
export class IcRoundBorderRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderStyleIcon],svg[ic-round-border-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21h2v-2h-2zm4 0h2v-2h-2zM7 21h2v-2H7zm4 0h2v-2h-2zm8-4h2v-2h-2zm0-4h2v-2h-2zM3 5v15c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2m16 4h2V7h-2z"></svg:path>`,
})
export class IcRoundBorderStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderTopIcon],svg[ic-round-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21h2v-2H7zm0-8h2v-2H7zm4 0h2v-2h-2zm0 8h2v-2h-2zm-8-4h2v-2H3zm0 4h2v-2H3zm0-8h2v-2H3zm0-4h2V7H3zm8 8h2v-2h-2zm8-8h2V7h-2zm0 4h2v-2h-2zM3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m16 13h2v-2h-2zm-4 4h2v-2h-2zM11 9h2V7h-2zm8 12h2v-2h-2zm-4-8h2v-2h-2z"></svg:path>`,
})
export class IcRoundBorderTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderVerticalIcon],svg[ic-round-border-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h2V7H3zm0-4h2V3H3zm4 16h2v-2H7zm0-8h2v-2H7zm-4 0h2v-2H3zm0 8h2v-2H3zm0-4h2v-2H3zM7 5h2V3H7zm12 12h2v-2h-2zm-7 4c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1m7 0h2v-2h-2zm0-8h2v-2h-2zm0-10v2h2V3zm0 6h2V7h-2zm-4-4h2V3h-2zm0 16h2v-2h-2zm0-8h2v-2h-2z"></svg:path>`,
})
export class IcRoundBorderVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBoyIcon],svg[ic-round-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5c.97 0 1.75-.78 1.75-1.75S12.97 4 12 4s-1.75.78-1.75 1.75S11.03 7.5 12 7.5M14 19c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-4c-.55 0-1-.45-1-1v-3.5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2V14c0 .55-.45 1-1 1z"></svg:path>`,
})
export class IcRoundBoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrandingWatermarkIcon],svg[ic-round-branding-watermark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16h-7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundBrandingWatermarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBreakfastDiningIcon],svg[ic-round-breakfast-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45c0-2.21-1.79-4-4-4m-2.29 10.7l-3 3c-.39.39-1.02.39-1.42 0l-3-3a.996.996 0 0 1 0-1.41l3-3a.996.996 0 0 1 1.41 0l3 3c.4.39.4 1.02.01 1.41"></svg:path>`,
})
export class IcRoundBreakfastDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrightness1Icon],svg[ic-round-brightness-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor"></svg:circle>`,
})
export class IcRoundBrightness1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrightness2Icon],svg[ic-round-brightness-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.43 2.3a9.92 9.92 0 0 0-6.63.64c-.35.16-.41.64-.1.86C8.3 5.6 10 8.6 10 12s-1.7 6.4-4.3 8.2c-.32.22-.26.7.09.86c1.28.6 2.71.94 4.21.94c6.05 0 10.85-5.38 9.87-11.6c-.61-3.92-3.59-7.16-7.44-8.1"></svg:path>`,
})
export class IcRoundBrightness2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrightness3Icon],svg[ic-round-brightness-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.93 2h-.14c-.83.02-1.09 1.12-.39 1.56A10 10 0 0 1 13.03 12c0 3.55-1.84 6.66-4.62 8.43c-.71.46-.43 1.55.41 1.57h.21c6.05 0 10.86-5.39 9.87-11.63c-.76-4.84-5.07-8.42-9.97-8.37"></svg:path>`,
})
export class IcRoundBrightness3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrightness4Icon],svg[ic-round-brightness-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.6 11.29L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.996.996 0 0 0-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6a.996.996 0 0 0 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69l2.6-2.6c.39-.39.39-1.03 0-1.42m-4.68 1.69a6 6 0 0 1-3.88 4.66c-1.21.43-2.41.45-3.5.18c-.41-.1-.48-.65-.13-.9C11.98 15.84 13 14.04 13 12s-1.02-3.84-2.58-4.92c-.35-.24-.29-.79.13-.9c1.09-.27 2.29-.25 3.5.18c2.02.72 3.54 2.54 3.88 4.66c.05.33.07.66.07.98c-.01.32-.03.65-.08.98"></svg:path>`,
})
export class IcRoundBrightness4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrightness5Icon],svg[ic-round-brightness-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 15.31l2.6-2.6a.996.996 0 0 0 0-1.41L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.996.996 0 0 0-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6a.996.996 0 0 0 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6"></svg:path>`,
})
export class IcRoundBrightness5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrightness6Icon],svg[ic-round-brightness-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 15.31l2.6-2.6a.996.996 0 0 0 0-1.41L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.996.996 0 0 0-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6a.996.996 0 0 0 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1zm-8 1.59V7.1c0-.61.55-1.11 1.15-.99C15.91 6.65 18 9.08 18 12s-2.09 5.35-4.85 5.89c-.6.12-1.15-.38-1.15-.99"></svg:path>`,
})
export class IcRoundBrightness6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrightness7Icon],svg[ic-round-brightness-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.996.996 0 0 0-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6a.996.996 0 0 0 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69l2.6-2.6a.996.996 0 0 0 0-1.41zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6m0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"></svg:path>`,
})
export class IcRoundBrightness7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrightnessAutoIcon],svg[ic-round-brightness-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.85 12.65h2.3L12 9zM20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69l1.9-1.9c.78-.78.78-2.05 0-2.83zm-5.91 6.71L13.6 14h-3.2l-.49 1.4c-.13.36-.46.6-.84.6a.888.888 0 0 1-.84-1.19l2.44-6.86c.2-.57.73-.95 1.33-.95s1.13.38 1.34.94l2.44 6.86a.888.888 0 0 1-.84 1.19a.87.87 0 0 1-.85-.59"></svg:path>`,
})
export class IcRoundBrightnessAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrightnessHighIcon],svg[ic-round-brightness-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69l1.9-1.9c.78-.78.78-2.05 0-2.83zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6m0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"></svg:path>`,
})
export class IcRoundBrightnessHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrightnessLowIcon],svg[ic-round-brightness-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 15.31l1.9-1.9c.78-.78.78-2.05 0-2.83L20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6"></svg:path>`,
})
export class IcRoundBrightnessLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrightnessMediumIcon],svg[ic-round-brightness-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 15.31l1.9-1.9c.78-.78.78-2.05 0-2.83L20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2zm-8 1.59V7.1c0-.61.55-1.11 1.15-.99C15.91 6.65 18 9.08 18 12s-2.09 5.35-4.85 5.89c-.6.12-1.15-.38-1.15-.99"></svg:path>`,
})
export class IcRoundBrightnessMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBroadcastOnHomeIcon],svg[ic-round-broadcast-on-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H5c-.55 0-1 .45-1 1s.45 1 1 1h15v2.59c.73.29 1.4.69 2 1.17zM8 9H3c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-9c0-.5-.5-1-1-1m-1 9H4v-7h3zm10.75-1.03c.3-.23.5-.57.5-.97a1.25 1.25 0 0 0-2.5 0c0 .4.2.75.5.97v4.28c0 .41.34.75.75.75s.75-.34.75-.75z"></svg:path><svg:path fill="currentColor" d="M17.54 13.56c.98.21 1.76 1.03 1.93 2.02c.11.64-.03 1.25-.34 1.74a.73.73 0 0 0 .12.91c.34.33.9.29 1.16-.12c.51-.82.73-1.83.53-2.9c-.3-1.56-1.56-2.83-3.12-3.13A4.01 4.01 0 0 0 13 16c0 .78.22 1.5.6 2.11c.25.41.83.46 1.16.12c.24-.24.29-.63.11-.92A2.44 2.44 0 0 1 14.5 16c0-1.55 1.43-2.78 3.04-2.44"></svg:path><svg:path fill="currentColor" d="M16.25 9.54c-2.94.33-5.32 2.68-5.69 5.61c-.23 1.82.29 3.51 1.3 4.82c.27.35.8.37 1.12.06c.27-.27.28-.7.05-1a5 5 0 0 1-.95-3.89a4.99 4.99 0 0 1 3.98-4.05C19.22 10.5 22 12.93 22 16c0 1.13-.38 2.18-1.02 3.02c-.23.3-.21.73.06 1c.31.31.84.3 1.11-.06A6.42 6.42 0 0 0 23.5 16c0-3.84-3.33-6.9-7.25-6.46"></svg:path>`,
})
export class IcRoundBroadcastOnHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBroadcastOnPersonalIcon],svg[ic-round-broadcast-on-personal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8c.7 0 1.38.1 2.02.27L12 3L4 9v12h6.76A7.998 7.998 0 0 1 17 8m0 6.75c-.69 0-1.25.56-1.25 1.25c0 .4.2.75.5.97V22h1.5v-5.03c.3-.23.5-.57.5-.97c0-.69-.56-1.25-1.25-1.25"></svg:path><svg:path fill="currentColor" d="M17 12c-2.21 0-4 1.79-4 4c0 1.1.45 2.1 1.17 2.83l1.06-1.06A2.5 2.5 0 1 1 19.5 16c0 .69-.28 1.31-.73 1.76l1.06 1.06C20.55 18.1 21 17.1 21 16c0-2.21-1.79-4-4-4"></svg:path><svg:path fill="currentColor" d="M17 9.5a6.5 6.5 0 0 0-6.5 6.5c0 1.79.73 3.42 1.9 4.6l1.06-1.06C12.56 18.63 12 17.38 12 16c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.37-.56 2.62-1.46 3.52l1.07 1.06A6.5 6.5 0 0 0 17 9.5"></svg:path>`,
})
export class IcRoundBroadcastOnPersonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrokenImageIcon],svg[ic-round-broken-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5v6.59l-2.29-2.3c-.39-.39-1.03-.39-1.42 0L14 12.59L10.71 9.3a.996.996 0 0 0-1.41 0L6 12.59L3 9.58V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l2.29 2.29c.39.39 1.02.39 1.41 0l3.3-3.3l3.29 3.29c.39.39 1.02.39 1.41 0z"></svg:path>`,
})
export class IcRoundBrokenImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrowseGalleryIcon],svg[ic-round-browse-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 9 3m2.09 12.5L8.59 13c-.38-.38-.59-.88-.59-1.41V8c0-.55.45-1 1-1s1 .45 1 1v3.59l2.5 2.5a.996.996 0 1 1-1.41 1.41"></svg:path><svg:path fill="currentColor" d="M17.99 5.08c0 .37.21.69.53.88a6.98 6.98 0 0 1 0 12.08c-.32.19-.53.51-.53.88c0 .77.84 1.25 1.51.86C22.18 18.22 24 15.32 24 12s-1.82-6.22-4.5-7.78c-.67-.39-1.51.09-1.51.86"></svg:path>`,
})
export class IcRoundBrowseGalleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrowserNotSupportedIcon],svg[ic-round-browser-not-supported-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6v10.5l1.95 1.95c.03-.15.05-.3.05-.45V6c0-1.1-.9-2-2-2H6.5l2 2zM3.86 3.95a.9.9 0 0 0-1.27 0a.9.9 0 0 0 0 1.27l.41.42V18c0 1.1.9 2 2 2h12.36l1.42 1.42a.9.9 0 0 0 1.27 0a.9.9 0 0 0 0-1.27zM5 18V7.64L15.36 18z"></svg:path>`,
})
export class IcRoundBrowserNotSupportedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrowserUpdatedIcon],svg[ic-round-browser-updated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3c.55 0 1 .45 1 1v6h1.59c.89 0 1.34 1.08.71 1.71l-2.59 2.59a.996.996 0 0 1-1.41 0l-2.59-2.59c-.63-.63-.19-1.71.7-1.71H14V4c0-.55.45-1 1-1M6 19.59c0 .78.63 1.41 1.41 1.41h9.17c.78 0 1.41-.63 1.41-1.41c0-.72-.44-1.03-1-1.59h3c1.1 0 2-.9 2-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H4V5h7c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3c-.55.55-1 .87-1 1.59"></svg:path>`,
})
export class IcRoundBrowserUpdatedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrunchDiningIcon],svg[ic-round-brunch-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h2V4h-2zm-3 14H3c-.55 0-1-.45-1-1v-1h14v1c0 .55-.45 1-1 1m3-6.11l-.4-.42a5.8 5.8 0 0 1-1.6-4V3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v8.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h1c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1zM7 16v-1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h4c.55 0 1 .45 1 1v1H2v-1c0-.55.45-1 1-1z"></svg:path>`,
})
export class IcRoundBrunchDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBrushIcon],svg[ic-round-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14c-1.66 0-3 1.34-3 3c0 1.31-1.16 2-2 2c.92 1.22 2.49 2 4 2c2.21 0 4-1.79 4-4c0-1.66-1.34-3-3-3m13.71-9.37l-1.34-1.34a.996.996 0 0 0-1.41 0L9 12.25L11.75 15l8.96-8.96a.996.996 0 0 0 0-1.41"></svg:path>`,
})
export class IcRoundBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBubbleChartIcon],svg[ic-round-bubble-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7.2" cy="14.4" r="3.2" fill="currentColor"></svg:circle><svg:circle cx="14.8" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="15.2" cy="8.8" r="4.8" fill="currentColor"></svg:circle>`,
})
export class IcRoundBubbleChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBugReportIcon],svg[ic-round-bug-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8h-1.81a6 6 0 0 0-1.82-1.96l.93-.93a.996.996 0 1 0-1.41-1.41l-1.47 1.47C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L9.11 3.7A.996.996 0 1 0 7.7 5.11l.92.93C7.88 6.55 7.26 7.22 6.81 8H5c-.55 0-1 .45-1 1s.45 1 1 1h1.09c-.05.33-.09.66-.09 1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .34.04.67.09 1H5c-.55 0-1 .45-1 1s.45 1 1 1h1.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H19c.55 0 1-.45 1-1s-.45-1-1-1h-1.09c.05-.33.09-.66.09-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.34-.04-.67-.09-1H19c.55 0 1-.45 1-1s-.45-1-1-1m-6 8h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1m0-4h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundBugReportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBuildIcon],svg[ic-round-build-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.09 2.91C10.08.9 7.07.49 4.65 1.67L8.28 5.3c.39.39.39 1.02 0 1.41L6.69 8.3c-.39.4-1.02.4-1.41 0L1.65 4.67C.48 7.1.89 10.09 2.9 12.1a6.51 6.51 0 0 0 6.89 1.48l7.96 7.96a2.613 2.613 0 0 0 3.71 0a2.613 2.613 0 0 0 0-3.71L13.54 9.9c.92-2.34.44-5.1-1.45-6.99"></svg:path>`,
})
export class IcRoundBuildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBuildCircleIcon],svg[ic-round-build-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.54 13.85l-.69.69a.996.996 0 0 1-1.41 0l-3.05-3.05c-1.22.43-2.64.17-3.62-.81a3.47 3.47 0 0 1-.59-4.1l2.35 2.35l1.41-1.41l-2.36-2.35c1.32-.71 2.99-.52 4.1.59c.98.98 1.24 2.4.81 3.62l3.05 3.05c.39.39.39 1.03 0 1.42"></svg:path>`,
})
export class IcRoundBuildCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBungalowIcon],svg[ic-round-bungalow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c.55 0 1 .45 1 1v4h3c.55 0 1-.45 1-1v-5.21l.57.92a1.003 1.003 0 0 0 1.7-1.06L12.85 4.36a1 1 0 0 0-1.7 0L4.73 14.65c-.29.47-.15 1.09.32 1.38s1.08.15 1.38-.32L7 14.8V20c0 .55.45 1 1 1h3v-4c0-.55.45-1 1-1m1-3c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1"></svg:path>`,
})
export class IcRoundBungalowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBurstModeIcon],svg[ic-round-burst-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1m4 0c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1m16 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1M11.64 16.19l1.47-1.86c.2-.25.57-.25.78-.01l1.4 1.68l2.1-2.71c.2-.26.59-.26.79 0l2.21 2.9c.25.33.02.8-.4.8h-7.96a.492.492 0 0 1-.39-.8"></svg:path>`,
})
export class IcRoundBurstModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBusAlertIcon],svg[ic-round-bus-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11V8h7.29c-.77-2.6.21-4.61.37-4.97C2.97 2.67 2 5.02 2 7v9.5c0 .95.38 1.81 1 2.44v1.56c0 .83.67 1.5 1.5 1.5S6 21.33 6 20.5V20h8v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-1.56c.62-.63 1-1.49 1-2.44V13c-1.91 0-3.63-.76-4.89-2zm2.5 6c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17m8.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5"></svg:path><svg:path fill="currentColor" d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m.5 5.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5zm0 2c0 .28-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5"></svg:path>`,
})
export class IcRoundBusAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBusinessIcon],svg[ic-round-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm9 12h-7v-2h2v-2h-2v-2h2v-2h-2V9h7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1m-1-8h-2v2h2zm0 4h-2v2h2z"></svg:path>`,
})
export class IcRoundBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundBusinessCenterIcon],svg[ic-round-business-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16h-2c-.55 0-1-.45-1-1H3.01v4c0 1.1.9 2 2 2H19c1.1 0 2-.9 2-2v-4h-7c0 .55-.45 1-1 1m7-9h-4c0-2.21-1.79-4-4-4S8 4.79 8 7H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M10 7c0-1.1.9-2 2-2s2 .9 2 2H9.99z"></svg:path>`,
})
export class IcRoundBusinessCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCabinIcon],svg[ic-round-cabin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.37 3.55C4.89 2.62 5.87 2 7 2c.38 0 .72-.22.89-.53c.15-.31.5-.47.84-.47c.74 0 1.26.8.9 1.45C9.11 3.38 8.13 4 7 4c-.38 0-.72.22-.89.53c-.15.31-.5.47-.84.47c-.74 0-1.26-.8-.9-1.45m18.02 8.64c-.34.44-.96.52-1.4.19l-.99-.76V20c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-8.38l-.99.76a.99.99 0 0 1-1.4-.19c-.33-.44-.25-1.07.19-1.4L4 9.11V7c0-.55.45-1 1-1s1 .45 1 1v.58l5.39-4.12c.36-.27.86-.27 1.21 0l9.6 7.33c.44.34.53.97.19 1.4M10.06 7h3.89L12 5.52zM6 10.1v.9h12v-.9L16.56 9H7.44zM6 13v2h12v-2zm12 6v-2H6v2z"></svg:path>`,
})
export class IcRoundCabinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCableIcon],svg[ic-round-cable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v6.91c0 1.04-.76 1.98-1.79 2.08c-1.2.12-2.21-.82-2.21-1.99V7.14c0-2.13-1.61-3.99-3.74-4.13A3.993 3.993 0 0 0 5 7v7H4c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H7V7.09c0-1.04.76-1.98 1.79-2.08C9.99 4.89 11 5.83 11 7v9.86c0 2.13 1.61 3.99 3.74 4.13C17.07 21.14 19 19.3 19 17v-7h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundCableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCachedIcon],svg[ic-round-cached-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.65 8.35l-2.79 2.79c-.32.32-.1.86.35.86H18c0 3.31-2.69 6-6 6c-.79 0-1.56-.15-2.25-.44c-.36-.15-.77-.04-1.04.23c-.51.51-.33 1.37.34 1.64c.91.37 1.91.57 2.95.57c4.42 0 8-3.58 8-8h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.19-.2-.51-.2-.7-.01M6 12c0-3.31 2.69-6 6-6c.79 0 1.56.15 2.25.44c.36.15.77.04 1.04-.23c.51-.51.33-1.37-.34-1.64C14.04 4.2 13.04 4 12 4c-4.42 0-8 3.58-8 8H2.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79a.5.5 0 0 0-.36-.85z"></svg:path>`,
})
export class IcRoundCachedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCakeIcon],svg[ic-round-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.68 5.88c.7-.24 1.22-.9 1.3-1.64c.05-.47-.05-.91-.28-1.27L12.42.75a.506.506 0 0 0-.87 0l-1.28 2.22c-.17.3-.27.65-.27 1.03c0 1.32 1.3 2.35 2.68 1.88m3.85 10.04l-1-1l-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07l-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-3.61c-.75.51-1.71.75-2.74.52c-.66-.14-1.25-.51-1.73-.99M18 9h-5V8c0-.55-.45-1-1-1s-1 .45-1 1v1H6c-1.66 0-3 1.34-3 3v1.46c0 .85.5 1.67 1.31 1.94c.73.24 1.52.06 2.03-.46l2.14-2.13l2.13 2.13c.76.76 2.01.76 2.77 0l2.14-2.13l2.13 2.13c.43.43 1.03.63 1.65.55c.99-.13 1.69-1.06 1.69-2.06v-1.42A2.983 2.983 0 0 0 18 9"></svg:path>`,
})
export class IcRoundCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCalculateIcon],svg[ic-round-calculate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5.44 3.53c.29-.29.77-.29 1.06 0l.88.88l.88-.88c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.88.88l.88.88c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.88-.87l-.88.88c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l.88-.88l-.88-.88c-.3-.3-.3-.78 0-1.07M7 7.72h3.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75M10.75 16H9.5v1.25c0 .41-.34.75-.75.75S8 17.66 8 17.25V16H6.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H8v-1.25c0-.41.34-.75.75-.75s.75.34.75.75v1.25h1.25c.41 0 .75.34.75.75s-.34.75-.75.75m6.5 1.25h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75m0-2.5h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75"></svg:path>`,
})
export class IcRoundCalculateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCalendarMonthIcon],svg[ic-round-calendar-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1m2 18H5V10h14zm-8-7c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m-4 4c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1"></svg:path>`,
})
export class IcRoundCalendarMonthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCalendarTodayIcon],svg[ic-round-calendar-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H7V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 18H5c-.55 0-1-.45-1-1V8h16v12c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundCalendarTodayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCalendarViewDayIcon],svg[ic-round-calendar-view-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2M4 3h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1m0 16h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class IcRoundCalendarViewDayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCalendarViewMonthIcon],svg[ic-round-calendar-view-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M8 11H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4zM8 18H4v-5h4zm6 0h-4v-5h4zm6 0h-4v-5h4z"></svg:path>`,
})
export class IcRoundCalendarViewMonthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCalendarViewWeekIcon],svg[ic-round-calendar-view-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 2h2.5v12H13zm-2 12H8.5V6H11zM4 6h2.5v12H4zm16 12h-2.5V6H20z"></svg:path>`,
})
export class IcRoundCalendarViewWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCallIcon],svg[ic-round-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"></svg:path>`,
})
export class IcRoundCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCallEndIcon],svg[ic-round-call-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.51 15.48l2-1.59c.48-.38.76-.96.76-1.57v-2.6c3.02-.98 6.29-.99 9.32 0v2.61c0 .61.28 1.19.76 1.57l1.99 1.58c.8.63 1.94.57 2.66-.15l1.22-1.22c.8-.8.8-2.13-.05-2.88c-6.41-5.66-16.07-5.66-22.48 0c-.85.75-.85 2.08-.05 2.88l1.22 1.22c.71.72 1.85.78 2.65.15"></svg:path>`,
})
export class IcRoundCallEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCallMadeIcon],svg[ic-round-call-made-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6c0 .56.45 1 1 1h5.59L4.7 17.89a.996.996 0 1 0 1.41 1.41L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundCallMadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCallMergeIcon],svg[ic-round-call-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.7 19.7a.996.996 0 0 0 0-1.41l-2.7-2.7L13.59 17l2.7 2.7c.39.39 1.03.39 1.41 0M8.71 8H11v5.59l-4.71 4.7A.996.996 0 1 0 7.7 19.7l5.3-5.3V8h2.29c.45 0 .67-.54.35-.85l-3.29-3.29c-.2-.2-.51-.2-.71 0L8.35 7.15a.5.5 0 0 0 .36.85"></svg:path>`,
})
export class IcRoundCallMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCallMissedIcon],svg[ic-round-call-missed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.89 7.7L12 14.59L6.41 9H10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-3.59l6.29 6.29c.39.39 1.02.39 1.41 0l7.59-7.59a.996.996 0 0 0 0-1.41c-.38-.38-1.02-.38-1.4 0"></svg:path>`,
})
export class IcRoundCallMissedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCallMissedOutgoingIcon],svg[ic-round-call-missed-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.7 9.11l7.59 7.59c.39.39 1.02.39 1.41 0l6.3-6.3V14c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1h3.59L12 14.59L5.11 7.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41"></svg:path>`,
})
export class IcRoundCallMissedOutgoingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCallReceivedIcon],svg[ic-round-call-received-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 4.71a.996.996 0 0 0-1.41 0L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8.41L19.3 6.11c.38-.38.38-1.02 0-1.4"></svg:path>`,
})
export class IcRoundCallReceivedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCallSplitIcon],svg[ic-round-call-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.85 4.85l1.44 1.44l-2.88 2.88l1.42 1.42l2.88-2.88l1.44 1.44a.5.5 0 0 0 .85-.36V4.5c0-.28-.22-.5-.5-.5h-4.29a.5.5 0 0 0-.36.85M8.79 4H4.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35L6.29 7.7L11 12.4V19c0 .55.45 1 1 1s1-.45 1-1v-7c0-.26-.11-.52-.29-.71l-5-5.01l1.44-1.44c.31-.3.09-.84-.36-.84"></svg:path>`,
})
export class IcRoundCallSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCallToActionIcon],svg[ic-round-call-to-action-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundCallToActionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCameraIcon],svg[ic-round-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.81 2.86c.17-.3 0-.7-.35-.74c-2.62-.37-5.3.28-7.44 1.86c-.19.15-.25.43-.12.65l3.01 5.22c.19.33.67.33.87 0zm7.49 5.47c-.98-2.47-2.92-4.46-5.35-5.5c-.23-.1-.5 0-.63.22l-3.01 5.21c-.19.32.05.74.44.74h8.08c.35 0 .6-.35.47-.67m.07 1.67h-6.2c-.38 0-.63.42-.43.75L19 18.14c.17.3.6.35.82.08c1.74-2.18 2.48-5.03 2.05-7.79a.5.5 0 0 0-.5-.43M4.18 5.79a10.1 10.1 0 0 0-2.05 7.79c.03.24.25.42.5.42h6.2c.38 0 .63-.42.43-.75L5 5.87c-.18-.3-.61-.35-.82-.08M2.7 15.67c.98 2.47 2.92 4.46 5.35 5.5c.23.1.5 0 .63-.22l3.01-5.21a.502.502 0 0 0-.43-.75H3.17c-.35.01-.6.36-.47.68m7.83 6.22c2.62.37 5.3-.28 7.44-1.86c.2-.15.26-.44.13-.66l-3.01-5.22a.506.506 0 0 0-.87 0l-4.04 6.99c-.17.3.01.7.35.75"></svg:path>`,
})
export class IcRoundCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCameraAltIcon],svg[ic-round-camera-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20 4h-3.17l-1.24-1.35A2 2 0 0 0 14.12 2H9.88c-.56 0-1.1.24-1.48.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class IcRoundCameraAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCameraEnhanceIcon],svg[ic-round-camera-enhance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-3.17l-1.24-1.35A2 2 0 0 0 14.12 3H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-9l-1.25 2.75L8 13l2.75 1.25L12 17l1.25-2.75L16 13l-2.75-1.25z"></svg:path>`,
})
export class IcRoundCameraEnhanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCameraFrontIcon],svg[ic-round-camera-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 12.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V3c0-.55.45-1 1-1h8c.55 0 1 .45 1 1zm-6.15 6.35a.5.5 0 0 0-.85.36V20H6c-.55 0-1 .45-1 1s.45 1 1 1h4v.79c0 .45.54.67.85.35l1.79-1.79c.2-.2.2-.51 0-.71zM18 20h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-1.99.9-1.99 2S10.9 8 12 8"></svg:path>`,
})
export class IcRoundCameraFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCameraIndoorIcon],svg[ic-round-camera-indoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.8 3.65l-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0m4.47 12.02L14 15v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1l1.27-.67c.33-.18.73.06.73.44v2.46c0 .38-.4.62-.73.44"></svg:path>`,
})
export class IcRoundCameraIndoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCameraOutdoorIcon],svg[ic-round-camera-outdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l1.27.67c.33.18.73-.06.73-.44v-2.46c0-.38-.4-.62-.73-.44L18 14zm-7.2-9.1l-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H6v-9l6-4.5l6 4.5v1h2v-1c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0"></svg:path>`,
})
export class IcRoundCameraOutdoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCameraRearIcon],svg[ic-round-camera-rear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.85 18.85a.5.5 0 0 0-.85.36V20H6c-.55 0-1 .45-1 1s.45 1 1 1h4v.79c0 .45.54.67.85.35l1.79-1.79c.2-.2.2-.51 0-.71zM18 20h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1M17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2s2 .9 2 2C14 5.1 13.1 6 12 6"></svg:path>`,
})
export class IcRoundCameraRearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCameraRollIcon],svg[ic-round-camera-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h6c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 13h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2z"></svg:path>`,
})
export class IcRoundCameraRollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCameraswitchIcon],svg[ic-round-cameraswitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7h-1l-1-1h-4L9 7H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-4 7c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path><svg:path fill="currentColor" d="M9.45.28c-.4.08-.55.56-.26.84l3.01 3.01c.32.31.85.09.85-.35V2.04c4.45.44 8.06 3.82 8.84 8.17c.08.46.5.78.97.78c.62 0 1.09-.57.98-1.18C22.61 2.89 15.79-1.12 9.45.28m2.35 19.59a.496.496 0 0 0-.85.35v1.74c-4.45-.44-8.06-3.82-8.84-8.17c-.08-.46-.5-.78-.97-.78c-.62 0-1.09.57-.98 1.18c1.24 6.92 8.06 10.93 14.4 9.53c.39-.09.55-.56.26-.85z"></svg:path>`,
})
export class IcRoundCameraswitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCampaignIcon],svg[ic-round-campaign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1m-1.41 4.82a.966.966 0 0 0 .2 1.37c.53.39 1.09.81 1.62 1.21c.44.33 1.06.24 1.38-.2c0-.01.01-.01.01-.02a.98.98 0 0 0-.2-1.38c-.53-.4-1.09-.82-1.61-1.21a.993.993 0 0 0-1.39.21c0 .01-.01.02-.01.02m3.22-12.01c0-.01-.01-.01-.01-.02a.98.98 0 0 0-1.38-.2c-.53.4-1.1.82-1.62 1.22c-.44.33-.52.95-.19 1.38c0 .01.01.01.01.02c.33.44.94.53 1.38.2c.53-.39 1.09-.82 1.62-1.22c.43-.32.51-.94.19-1.38M8 9H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h1l5 3V6zm7.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34"></svg:path>`,
})
export class IcRoundCampaignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCancelIcon],svg[ic-round-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41L9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12L7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41"></svg:path>`,
})
export class IcRoundCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCancelPresentationIcon],svg[ic-round-cancel-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1zm-5.71-9.3a.996.996 0 0 0-1.41 0L12 10.59L10.11 8.7a.996.996 0 1 0-1.41 1.41L10.59 12L8.7 13.89a.996.996 0 1 0 1.41 1.41L12 13.41l1.89 1.89a.996.996 0 1 0 1.41-1.41L13.41 12l1.89-1.89c.38-.38.38-1.02-.01-1.41"></svg:path>`,
})
export class IcRoundCancelPresentationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCancelScheduleSendIcon],svg[ic-round-cancel-schedule-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 9c-.42 0-.83.04-1.24.11L2.4 3.6a.993.993 0 0 0-1.39.91L1 9.2c0 .47.33.88.78.98L10 12l-8.22 1.83c-.45.1-.78.5-.78.97l.01 4.68c0 .72.73 1.2 1.39.92l6.68-2.86C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9m0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5s-2.47 5.5-5.5 5.5"></svg:path><svg:path fill="currentColor" d="M18.62 14.38c-.2-.2-.51-.2-.71 0l-1.41 1.41l-1.41-1.41c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.41 1.41l-1.41 1.41c-.2.2-.2.51 0 .71s.51.2.71 0l1.41-1.41l1.41 1.41c.2.2.51.2.71 0s.2-.51 0-.71l-1.41-1.41l1.41-1.41c.2-.2.2-.52 0-.71"></svg:path>`,
})
export class IcRoundCancelScheduleSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCandlestickChartIcon],svg[ic-round-candlestick-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4c-.55 0-1 .45-1 1v1H6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H9V5c0-.55-.45-1-1-1m10 4h-1V5c0-.55-.45-1-1-1s-1 .45-1 1v3h-1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h1v4c0 .55.45 1 1 1s1-.45 1-1v-4h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundCandlestickChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCarCrashIcon],svg[ic-round-car-crash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m0 6c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m.5 1.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5m1 11.5c.82 0 1.5-.67 1.5-1.5v-6.18c-1.05.51-2.16.69-3.09.68c.06.16.09.33.09.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.39.15-.74.39-1.01A7.03 7.03 0 0 1 11.68 9H5.81l1.04-3H11c0-.69.1-1.37.29-2H6.5c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.67 1.5 1.5 1.5S6 19.33 6 18.5V18h12v.5c0 .83.68 1.5 1.5 1.5m-12-5c-.83 0-1.5-.67-1.5-1.5S6.67 12 7.5 12s1.5.67 1.5 1.5S8.33 15 7.5 15"></svg:path>`,
})
export class IcRoundCarCrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCarRentalIcon],svg[ic-round-car-rental-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7c1.3 0 2.41-.84 2.83-2H16v1c0 .55.45 1 1 1s1-.45 1-1V5c.55 0 1-.45 1-1s-.45-1-1-1h-7.17A3.004 3.004 0 0 0 7.4 1.06c-1.17.23-2.12 1.19-2.35 2.36C4.7 5.32 6.15 7 8 7m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m8.39 6H7.61c-.43 0-.81.28-.95.68L5 14.69V21c0 .55.45 1 1 1s1-.45 1-1v-1h10v1c0 .55.45 1 1 1s1-.45 1-1v-6.31l-1.66-5.01c-.14-.4-.52-.68-.95-.68M9 17.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M7.67 13l.66-2h7.34l.66 2z"></svg:path>`,
})
export class IcRoundCarRentalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCarRepairIcon],svg[ic-round-car-repair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15v-1h10v1c0 .55.45 1 1 1s1-.45 1-1V8.69L17.44 4c-.05-.16-.12-.29-.19-.4c-.02-.02-.03-.04-.05-.07c-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06c-.07.11-.14.24-.19.4L5 8.69V15c0 .55.45 1 1 1s1-.45 1-1m2-3.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M8.33 5h7.34l.23.69l.43 1.31H7.67zM4 18.01c0 .54.45.99.99.99H11v2.01c0 .55.45.99.99.99H12c.55 0 .99-.45.99-.99V19H19c.55 0 .99-.45.99-.99c0-.55-.45-.99-.99-.99H4.99a.986.986 0 0 0-.99.99"></svg:path>`,
})
export class IcRoundCarRepairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCardGiftcardIcon],svg[ic-round-card-giftcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67l-.5-.68C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-5-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m11 15H4v-2h16zm0-5H4V9c0-.55.45-1 1-1h4.08L7.6 10.02a.995.995 0 0 0 .22 1.4c.44.32 1.07.22 1.39-.22L12 7.4l2.79 3.8c.32.44.95.54 1.39.22c.45-.32.55-.95.22-1.4L14.92 8H19c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundCardGiftcardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCardMembershipIcon],svg[ic-round-card-membership-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2l4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2m0 13H4v-2h16zm0-5H4V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundCardMembershipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCardTravelIcon],svg[ic-round-card-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M9 4h6v2H9zm11 15H4v-2h16zm0-5H4V9c0-.55.45-1 1-1h2v1c0 .55.45 1 1 1s1-.45 1-1V8h6v1c0 .55.45 1 1 1s1-.45 1-1V8h2c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundCardTravelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCarpenterIcon],svg[ic-round-carpenter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.73 14.23L7.71 2.21a.996.996 0 0 0-1.41 0L3.7 4.8a1 1 0 0 0-.11 1.28l7.65 10.98c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83m-5.66 5.65l-1.41-1.41l4.24-4.24l1.41 1.41z"></svg:path>`,
})
export class IcRoundCarpenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCasesIcon],svg[ic-round-cases-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 0h-4V3h4zM2 9c-.55 0-1 .45-1 1v10c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H3V10c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundCasesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCasinoIcon],svg[ic-round-casino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6S9 6.67 9 7.5S8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9"></svg:path>`,
})
export class IcRoundCasinoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCastIcon],svg[ic-round-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-5c-.55 0-1 .45-1 1s.45 1 1 1h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M2.14 14.09c-.6-.1-1.14.39-1.14 1c0 .49.36.9.85.98c2.08.36 3.72 2 4.08 4.08c.08.49.49.85.98.85c.61 0 1.09-.54 1-1.14a7 7 0 0 0-5.77-5.77M1 18v3h3c0-1.66-1.34-3-3-3m1.1-7.95c-.59-.05-1.1.41-1.1 1c0 .51.38.94.88.99c4.27.41 7.67 3.81 8.08 8.08c.05.5.48.87.99.87c.6 0 1.06-.52 1-1.11c-.53-5.19-4.66-9.31-9.85-9.83"></svg:path>`,
})
export class IcRoundCastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCastConnectedIcon],svg[ic-round-cast-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16V8c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v.63c3.96 1.28 7.09 4.41 8.37 8.37H18c.55 0 1-.45 1-1m2-13H3c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-5c-.55 0-1 .45-1 1s.45 1 1 1h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M1 18v3h3a2.99 2.99 0 0 0-3-3m1.14-3.91c-.6-.1-1.14.39-1.14 1c0 .49.36.9.85.98c2.08.36 3.72 2 4.08 4.08c.08.49.49.85.98.85c.61 0 1.09-.54 1-1.14a7 7 0 0 0-5.77-5.77m-.04-4.04c-.59-.05-1.1.41-1.1 1c0 .51.38.94.88.99c4.27.41 7.67 3.81 8.08 8.08c.05.5.48.87.99.87c.6 0 1.06-.52 1-1.11c-.53-5.19-4.66-9.31-9.85-9.83"></svg:path>`,
})
export class IcRoundCastConnectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCastForEducationIcon],svg[ic-round-cast-for-education-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.2 8.56l-4.22-2.3c-.3-.16-.66-.16-.96 0L9.8 8.56a.5.5 0 0 0 0 .88l4.22 2.3c.3.16.66.16.96 0l4.22-2.3c.34-.19.34-.69 0-.88M21 3H3c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-5c-.55 0-1 .45-1 1s.45 1 1 1h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6.98 9.74L11 11.09v1.41c0 .37.2.7.52.88l2.5 1.36c.3.16.66.16.96 0l2.5-1.36c.32-.18.52-.52.52-.88v-1.41l-3.02 1.65c-.3.16-.66.16-.96 0M1 18v3h3c0-1.66-1.34-3-3-3m1.14-3.91c-.6-.1-1.14.39-1.14 1c0 .49.36.9.85.98c2.08.36 3.72 2 4.08 4.08c.08.49.49.85.98.85c.61 0 1.09-.54 1-1.14a7 7 0 0 0-5.77-5.77m-.04-4.04c-.59-.05-1.1.41-1.1 1c0 .51.38.94.88.99c4.27.41 7.67 3.81 8.08 8.08c.05.5.48.87.99.87c.6 0 1.06-.52 1-1.11c-.53-5.19-4.66-9.31-9.85-9.83"></svg:path>`,
})
export class IcRoundCastForEducationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCastleIcon],svg[ic-round-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9c-.55 0-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7V4c0-.55-.45-1-1-1s-1 .45-1 1v7H3v-1c0-.55-.45-1-1-1s-1 .45-1 1v9c0 1.1.9 2 2 2h7v-3c0-1.1.9-2 2-2s2 .9 2 2v3h7c1.1 0 2-.9 2-2v-9c0-.55-.45-1-1-1m-11 3H9V9h2zm4 0h-2V9h2z"></svg:path>`,
})
export class IcRoundCastleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCatchingPokemonIcon],svg[ic-round-catching-pokemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 12a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 5 0m7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2s10 4.48 10 10m-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8"></svg:path>`,
})
export class IcRoundCatchingPokemonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCategoryIcon],svg[ic-round-category-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.15 3.4L7.43 9.48c-.41.66.07 1.52.85 1.52h7.43c.78 0 1.26-.86.85-1.52L12.85 3.4a.993.993 0 0 0-1.7 0"></svg:path><svg:circle cx="17.5" cy="17.5" r="4.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4 21.5h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1"></svg:path>`,
})
export class IcRoundCategoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCelebrationIcon],svg[ic-round-celebration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.99 21.29l9.04-3.23c1.38-.49 1.78-2.26.74-3.3l-4.53-4.53c-1.04-1.04-2.8-.64-3.3.74l-3.23 9.04c-.28.8.48 1.56 1.28 1.28M15.06 12l5.06-5.06a1.25 1.25 0 0 1 1.77 0l.06.06c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.06-.06a2.76 2.76 0 0 0-3.89 0L14 10.94c-.29.29-.29.77 0 1.06s.77.29 1.06 0m-5-5.12l-.06.06c-.29.29-.29.77 0 1.06s.77.29 1.06 0l.06-.06a2.76 2.76 0 0 0 0-3.89L11.07 4c-.3-.3-.78-.3-1.07 0c-.29.29-.29.77 0 1.06l.06.06c.48.48.48 1.28 0 1.76m7 5L16 12.94c-.29.29-.29.77 0 1.06s.77.29 1.06 0l1.06-1.06a1.25 1.25 0 0 1 1.77 0l1.08 1.08c.29.29.77.29 1.06 0s.29-.77 0-1.06l-1.08-1.08a2.76 2.76 0 0 0-3.89 0m-2-6L12 8.94c-.29.29-.29.77 0 1.06s.77.29 1.06 0l3.06-3.06a2.76 2.76 0 0 0 0-3.89l-1.06-1.06a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.06 1.06c.48.49.48 1.29 0 1.77"></svg:path>`,
})
export class IcRoundCelebrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCellTowerIcon],svg[ic-round-cell-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.9 14.1l.09-.09c.27-.27.32-.71.08-1.01C7.36 12.09 7 11.01 7 10c0-1.08.35-2.16 1.04-3.01c.25-.3.21-.75-.07-1.02L7.9 5.9c-.34-.34-.9-.3-1.2.08c-.91 1.18-1.4 2.6-1.4 4.02s.49 2.84 1.4 4.02c.3.38.86.42 1.2.08M18.51 3.49l-.08.08c-.3.3-.29.76-.03 1.08c1.26 1.53 1.9 3.48 1.9 5.35s-.63 3.81-1.9 5.35c-.28.33-.23.83.08 1.14c.35.35.93.31 1.24-.07C21.29 14.54 22 12.31 22 10c0-2.32-.79-4.55-2.31-6.43c-.3-.37-.85-.41-1.18-.08"></svg:path><svg:path fill="currentColor" d="m5.57 3.57l-.08-.08c-.33-.33-.88-.29-1.18.08C2.79 5.45 2 7.68 2 10s.79 4.55 2.31 6.43c.3.37.85.42 1.18.08l.08-.08c.3-.3.29-.76.03-1.08c-1.27-1.54-1.9-3.48-1.9-5.35s.63-3.81 1.9-5.35c.26-.32.27-.78-.03-1.08m10.5 10.5c.36.36.95.32 1.26-.09c.9-1.18 1.37-2.58 1.37-3.98c-.08-1.41-.51-2.83-1.4-4.01a.797.797 0 0 0-1.2-.09l-.08.08c-.27.27-.32.71-.08 1.01c.7.92 1.06 2 1.06 3.01c0 1.07-.34 2.13-1.01 2.98c-.26.32-.22.79.08 1.09M14.5 10c0-1.6-1.51-2.85-3.18-2.41c-.8.21-1.46.85-1.7 1.65c-.32 1.06.06 2.04.76 2.64l-2.96 8.87c-.21.62.25 1.25.9 1.25c.41 0 .77-.26.9-.65L9.67 20h4.67l.45 1.35a.949.949 0 1 0 1.8-.6l-2.96-8.87c.53-.46.87-1.12.87-1.88m-4.17 8L12 13l1.67 5z"></svg:path>`,
})
export class IcRoundCellTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCellWifiIcon],svg[ic-round-cell-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.29 7.68L7.7 20.29c-.63.63-.18 1.71.71 1.71H21c.55 0 1-.45 1-1V8.39c0-.89-1.08-1.34-1.71-.71M20 20h-2v-7.22l2-2zM9.61 10.68c-.28.17-.32.56-.09.79l.82.82c.39.39 1.02.39 1.41 0l.82-.82c.23-.23.18-.62-.09-.79c-.87-.54-1.99-.54-2.87 0M8.42 9.3a4.55 4.55 0 0 1 5.27 0c.36.26.85.22 1.16-.1c.39-.39.35-1.06-.1-1.38a6.4 6.4 0 0 0-7.4 0c-.45.32-.5.99-.1 1.38a.9.9 0 0 0 1.17.1"></svg:path><svg:path fill="currentColor" d="M16.26 6.69c.34.28.83.28 1.14-.03l.12-.12c.35-.35.31-.92-.08-1.24c-3.67-3.05-9.02-3.07-12.7-.06c-.43.35-.47.99-.08 1.37c.32.33.84.37 1.19.08c3.01-2.48 7.4-2.48 10.41 0"></svg:path>`,
})
export class IcRoundCellWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCenterFocusStrongIcon],svg[ic-round-center-focus-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m-8 7c-.55 0-1 .45-1 1v3c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1m1-9c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1zm14-3h-3c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1 .45 1 1v2c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2m0 15c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1z"></svg:path>`,
})
export class IcRoundCenterFocusStrongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCenterFocusWeakIcon],svg[ic-round-center-focus-weak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15c-.55 0-1 .45-1 1v3c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1m1-9c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1zm14-3h-3c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1 .45 1 1v2c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2m0 15c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcRoundCenterFocusWeakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChairIcon],svg[ic-round-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9c-1.1 0-2 .9-2 2v4H5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.1-.9-2-2-2"></svg:path><svg:path fill="currentColor" d="M7 11v2h10v-2c0-1.86 1.28-3.41 3-3.86V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v1.14c1.72.45 3 2 3 3.86"></svg:path>`,
})
export class IcRoundChairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChairAltIcon],svg[ic-round-chair-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H7c-1.1 0-2 .9-2 2v6c0 .55.45 1 1 1s1-.45 1-1v-2h10v2c0 .55.45 1 1 1s1-.45 1-1v-6c0-1.1-.9-2-2-2h-1v-2zM7 8V5h10v3zm10 8H7v-2h10zm-3-4h-4v-2h4z"></svg:path>`,
})
export class IcRoundChairAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChaletIcon],svg[ic-round-chalet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15c-.55 0-1 .45-1 1v4H6c-.55 0-1-.45-1-1v-3.67l-.38.38a.996.996 0 1 1-1.41-1.41L9.3 8.21a.996.996 0 0 1 1.41 0l6.09 6.09a.996.996 0 1 1-1.41 1.41l-.39-.38V19c0 .55-.45 1-1 1h-3v-4c0-.55-.45-1-1-1m7.5-7.5v.89l-1.08 1.08c-.18.18-.21.48-.05.69c.19.23.53.24.74.04l.39-.39v.69c0 .28.22.5.5.5s.5-.22.5-.5v-.69l.39.39c.21.21.55.19.74-.04c.17-.2.14-.5-.05-.69L18.5 8.39V7.5h.89l1.08 1.08c.18.18.48.21.69.05c.23-.19.24-.53.04-.74l-.39-.39h.69c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-.69l.39-.39c.21-.21.19-.55-.04-.74c-.2-.17-.5-.14-.69.05L19.39 6.5h-.89v-.89l1.08-1.08c.18-.18.21-.48.05-.69a.506.506 0 0 0-.74-.04l-.39.39V3.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.69l-.39-.39a.5.5 0 0 0-.74.04c-.17.2-.14.5.05.69l1.08 1.08v.89h-.89l-1.08-1.08a.53.53 0 0 0-.69-.05c-.23.19-.24.53-.04.74l.39.39h-.69c-.28 0-.5.22-.5.5s.22.5.5.5h.69l-.39.39c-.21.21-.19.55.04.74c.2.17.5.14.69-.05l1.08-1.08z"></svg:path>`,
})
export class IcRoundChaletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChangeCircleIcon],svg[ic-round-change-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m.91 16.15a.5.5 0 0 1-.85-.35V17H12c-1.28 0-2.56-.49-3.54-1.46a5 5 0 0 1-1.14-5.3c.19-.51.86-.64 1.24-.25c.22.22.27.54.17.82c-.46 1.24-.2 2.68.8 3.68c.7.7 1.62 1.03 2.54 1.01v-.94c0-.45.54-.67.85-.35l1.62 1.62c.2.2.2.51 0 .71zm2.53-4.13a.78.78 0 0 1-.17-.82c.46-1.24.2-2.68-.8-3.68c-.7-.7-1.62-1.04-2.53-1.02v.94c0 .45-.54.67-.85.35L9.46 8.18c-.2-.2-.2-.51 0-.71l1.62-1.62a.5.5 0 0 1 .85.35v.81c1.3-.02 2.61.45 3.6 1.45a5 5 0 0 1 1.14 5.3c-.19.52-.85.65-1.23.26"></svg:path>`,
})
export class IcRoundChangeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChangeHistoryIcon],svg[ic-round-change-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.77L18.39 18H5.61zm-.85-2.41l-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4a1 1 0 0 0 .85-1.53l-8.2-13.11a1 1 0 0 0-1.7 0"></svg:path>`,
})
export class IcRoundChangeHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChargingStationIcon],svg[ic-round-charging-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 17H7V6h10zm-4.5-7V9.12c0-.53-.71-.7-.95-.22l-1.69 3.38c-.16.33.08.72.45.72h1.19v1.88c0 .53.71.7.95.22l1.69-3.38a.502.502 0 0 0-.45-.72z"></svg:path>`,
})
export class IcRoundChargingStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChatIcon],svg[ic-round-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M7 9h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1m6 5H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m4-6H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChatBubbleIcon],svg[ic-round-chat-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundChatBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChatBubbleOutlineIcon],svg[ic-round-chat-bubble-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4v12H5.17L4 17.17V4zm0-2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundChatBubbleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCheckIcon],svg[ic-round-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"></svg:path>`,
})
export class IcRoundCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCheckBoxIcon],svg[ic-round-check-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.29 13.29a.996.996 0 0 1-1.41 0L5.71 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41z"></svg:path>`,
})
export class IcRoundCheckBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCheckBoxOutlineBlankIcon],svg[ic-round-check-box-outline-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundCheckBoxOutlineBlankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCheckCircleIcon],svg[ic-round-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M9.29 16.29L5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0"></svg:path>`,
})
export class IcRoundCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCheckCircleOutlineIcon],svg[ic-round-check-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0"></svg:path>`,
})
export class IcRoundCheckCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChecklistIcon],svg[ic-round-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1m-9 8c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1M10.47 4.63c.39.39.39 1.02 0 1.41l-4.23 4.25c-.39.39-1.02.39-1.42 0L2.7 8.16a.996.996 0 1 1 1.41-1.41l1.42 1.42l3.54-3.54c.38-.38 1.02-.38 1.4 0m.01 8.01c.39.39.39 1.02 0 1.41L6.25 18.3c-.39.39-1.02.39-1.42 0L2.7 16.16a.996.996 0 1 1 1.41-1.41l1.42 1.42l3.54-3.54c.38-.38 1.02-.38 1.41.01"></svg:path>`,
})
export class IcRoundChecklistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChecklistRtlIcon],svg[ic-round-checklist-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1m0 8c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1m6.05-5.71a.996.996 0 0 1-1.41 0l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41l3.54-3.54a.996.996 0 1 1 1.41 1.41zm0 8a.996.996 0 0 1-1.41 0l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41l3.54-3.54a.996.996 0 1 1 1.41 1.41z"></svg:path>`,
})
export class IcRoundChecklistRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCheckroomIcon],svg[ic-round-checkroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.6 18.2L13 11.75v-.91a3.496 3.496 0 0 0-.18-6.75c-1.76-.4-3.37.53-4.02 1.98c-.3.67.18 1.43.91 1.43c.39 0 .75-.22.9-.57A1.5 1.5 0 0 1 12 6c.83 0 1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5c-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8M6 18l6-4.5l6 4.5z"></svg:path>`,
})
export class IcRoundCheckroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChevronLeftIcon],svg[ic-round-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"></svg:path>`,
})
export class IcRoundChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChevronRightIcon],svg[ic-round-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"></svg:path>`,
})
export class IcRoundChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChildCareIcon],svg[ic-round-child-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14.5" cy="10.5" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="9.5" cy="10.5" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16.1 14H7.9c-.19 0-.32.2-.23.37C8.5 15.94 10.13 17 12 17s3.5-1.06 4.33-2.63a.262.262 0 0 0-.23-.37m6.84-2.66a4.01 4.01 0 0 0-2.81-3.17a9.1 9.1 0 0 0-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91a3.99 3.99 0 0 0-2.81 3.17Q1 11.655 1 12t.06.66a4.01 4.01 0 0 0 2.81 3.17a9 9 0 0 0 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89a4 4 0 0 0 2.8-3.17q.06-.315.06-.66t-.06-.66M19 14c-.1 0-.19-.02-.29-.03c-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86c-.1.01-.19.03-.29.03c-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03c.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86c.1-.01.19-.03.29-.03c1.1 0 2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcRoundChildCareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChildFriendlyIcon],svg[ic-round-child-friendly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3.08V10h8a8 8 0 0 0-6.86-7.92c-.6-.09-1.14.39-1.14 1m6.32 12.81A7.95 7.95 0 0 0 21 11H6.44l-.68-1.43a.99.99 0 0 0-.9-.57H3c-.55 0-1 .45-1 1s.45 1 1 1h1.22s1.89 4.07 2.12 4.42a3.505 3.505 0 0 0-1.74 3.94c.3 1.26 1.34 2.27 2.6 2.55c2.1.46 3.98-.96 4.25-2.91h2.08a3.5 3.5 0 0 0 4.22 2.92a3.49 3.49 0 0 0 2.63-2.53c.35-1.39-.14-2.68-1.06-3.5M8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20m9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20"></svg:path>`,
})
export class IcRoundChildFriendlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChromeReaderModeIcon],svg[ic-round-chrome-reader-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14c0 .55-.45 1-1 1h-8V6h8c.55 0 1 .45 1 1zm-1.75-8.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 2.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 2.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"></svg:path>`,
})
export class IcRoundChromeReaderModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundChurchIcon],svg[ic-round-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12.22v-1.99a2 2 0 0 0-1.11-1.79L13 6.5V5h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1.5L7.11 8.45A2 2 0 0 0 6 10.24v1.99l-2.81 1.25C2.47 13.79 2 14.51 2 15.3V20c0 1.1.9 2 2 2h6v-2.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 19v3h6c1.1 0 2-.9 2-2v-4.7c0-.79-.47-1.51-1.19-1.83zm-6 1.28c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcRoundChurchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCircleIcon],svg[ic-round-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"></svg:path>`,
})
export class IcRoundCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCircleNotificationsIcon],svg[ic-round-circle-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 16.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5m4-2.5H8c-.55 0-1-.45-1-1s.45-1 1-1v-3c0-1.86 1.28-3.41 3-3.86V6.5c0-.55.45-1 1-1s1 .45 1 1v.64c1.72.45 3 2 3 3.86v3c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundCircleNotificationsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundClassIcon],svg[ic-round-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 4h5v8l-2.5-1.5L6 12z"></svg:path>`,
})
export class IcRoundClassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCleanHandsIcon],svg[ic-round-clean-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.99 7l1.37-.63l.63-1.37l.63 1.37l1.37.63l-1.37.63L16.99 9l-.63-1.37zM20 14c1.1 0 2-.9 2-2c0-.78-.99-2.44-1.58-3.36a.496.496 0 0 0-.84 0C18.99 9.56 18 11.22 18 12c0 1.1.9 2 2 2M9.24 9.5L15 11.65V11a5 5 0 0 0-4-4.9V4h2c.35 0 .68.06 1 .18c.37.13.78.05 1.05-.22c.51-.51.34-1.39-.33-1.64C14.19 2.11 13.61 2 13 2H8.5c-.55 0-1 .45-1 1s.45 1 1 1H9v2.11c-1.78.37-3.2 1.68-3.75 3.39zM3 11c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2m16.99 6h-6.83a1 1 0 0 1-.33-.06l-1.47-.51a.49.49 0 0 1-.3-.63c.09-.26.38-.4.64-.3l1.12.43c.11.04.24.07.36.07h2.63c.65 0 1.18-.53 1.18-1.18c0-.49-.31-.93-.77-1.11L9.3 11.13c-.22-.09-.46-.13-.7-.13H7v9.02l6.37 1.81c.41.12.85.1 1.25-.05L22 19c0-1.11-.9-2-2.01-2"></svg:path>`,
})
export class IcRoundCleanHandsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCleaningServicesIcon],svg[ic-round-cleaning-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11h-1V4c0-1.66-1.34-3-3-3S9 2.34 9 4v7H8c-2.76 0-5 2.24-5 5v5c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-2.76-2.24-5-5-5m3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3z"></svg:path>`,
})
export class IcRoundCleaningServicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundClearIcon],svg[ic-round-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"></svg:path>`,
})
export class IcRoundClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundClearAllIcon],svg[ic-round-clear-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1m-2 4h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m3-9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundClearAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCloseIcon],svg[ic-round-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"></svg:path>`,
})
export class IcRoundCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCloseFullscreenIcon],svg[ic-round-close-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.29 4.12L16.7 8.71l1.59 1.59c.63.63.18 1.71-.71 1.71H13c-.55 0-1-.45-1-1v-4.6c0-.89 1.08-1.34 1.71-.71l1.59 1.59l4.59-4.59a.996.996 0 0 1 1.41 0c.38.4.38 1.03-.01 1.42M4.12 21.29l4.59-4.59l1.59 1.59c.63.63 1.71.18 1.71-.71V13c0-.55-.45-1-1-1h-4.6c-.89 0-1.34 1.08-.71 1.71l1.59 1.59l-4.59 4.59a.996.996 0 0 0 0 1.41c.4.38 1.03.38 1.42-.01"></svg:path>`,
})
export class IcRoundCloseFullscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundClosedCaptionIcon],svg[ic-round-closed-caption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 6.5c0 .28-.22.5-.5.5H10c-.28 0-.5-.22-.5-.5h-2v3h2c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v.5c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm7 0c0 .28-.22.5-.5.5H17c-.28 0-.5-.22-.5-.5h-2v3h2c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v.5c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundClosedCaptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundClosedCaptionDisabledIcon],svg[ic-round-closed-caption-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.83 4H19c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16l-3.38-3.38c.24-.19.4-.46.4-.78v-.5c0-.28-.22-.5-.5-.5H17c-.28 0-.5.22-.5.5h-.17l-1.83-1.83V10.5h2c0 .28.22.5.5.5h.5c.28 0 .5-.22.5-.5V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v.17zm13.66 17.9a.996.996 0 0 1-1.41 0l-1.9-1.9H5a2 2 0 0 1-2-2V6c0-.05.02-.1.02-.15l-.92-.92a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41M11 13.83l-.83-.83H10c-.28 0-.5.22-.5.5h-2v-3h.17L6.4 9.22c-.24.19-.4.46-.4.78v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></svg:path>`,
})
export class IcRoundClosedCaptionDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundClosedCaptionOffIcon],svg[ic-round-closed-caption-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 6.5c0 .28-.22.5-.5.5H10c-.28 0-.5-.22-.5-.5h-2v3h2c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v.5c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm7 0c0 .28-.22.5-.5.5H17c-.28 0-.5-.22-.5-.5h-2v3h2c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v.5c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundClosedCaptionOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCloudIcon],svg[ic-round-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96"></svg:path>`,
})
export class IcRoundCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCloudCircleIcon],svg[ic-round-cloud-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3h.14c.44-1.73 1.99-3 3.86-3c2.21 0 4 1.79 4 4h.5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class IcRoundCloudCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCloudDoneIcon],svg[ic-round-cloud-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96m-8.64 6.25a.996.996 0 0 1-1.41 0L7.2 14.2a.996.996 0 1 1 1.41-1.41L10 14.18l4.48-4.48a.996.996 0 1 1 1.41 1.41z"></svg:path>`,
})
export class IcRoundCloudDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCloudDownloadIcon],svg[ic-round-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4z"></svg:path>`,
})
export class IcRoundCloudDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCloudOffIcon],svg[ic-round-cloud-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 15c0-2.64-2.05-4.78-4.65-4.96A7.49 7.49 0 0 0 12 4c-1.33 0-2.57.36-3.65.97l1.49 1.49C10.51 6.17 11.23 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19a2.996 2.996 0 0 1 1.79 5.4l1.41 1.41c1.09-.92 1.8-2.27 1.8-3.81M3.71 4.56a.996.996 0 0 0 0 1.41l2.06 2.06h-.42a5.99 5.99 0 0 0-5.29 6.79C.46 17.84 3.19 20 6.22 20h11.51l1.29 1.29a.996.996 0 1 0 1.41-1.41L5.12 4.56a.996.996 0 0 0-1.41 0M6 18c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73l8 8z"></svg:path>`,
})
export class IcRoundCloudOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCloudQueueIcon],svg[ic-round-cloud-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3"></svg:path>`,
})
export class IcRoundCloudQueueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCloudSyncIcon],svg[ic-round-cloud-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 17.48a2.5 2.5 0 0 1-2.5 2.5L15 20c-1.66 0-3-1.34-3-3c0-1.6 1.26-2.9 2.84-2.98A3.5 3.5 0 0 1 18 12c1.76 0 3.2 1.3 3.45 2.99c.02 0 .03-.01.05-.01a2.5 2.5 0 0 1 2.5 2.5M10 15c0-.55-.45-1-1-1s-1 .45-1 1v1.44c-1.22-1.1-2-2.67-2-4.44c0-2.38 1.39-4.43 3.4-5.4c.37-.18.6-.56.6-.97c0-.71-.73-1.18-1.37-.88C5.89 6.03 4 8.79 4 12c0 2.4 1.06 4.54 2.73 6H5c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1zm9-9c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7.56c.98.89 1.68 2.08 1.92 3.44h2.02a7.98 7.98 0 0 0-2.66-5z"></svg:path>`,
})
export class IcRoundCloudSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCloudUploadIcon],svg[ic-round-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13z"></svg:path>`,
})
export class IcRoundCloudUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCoPresentIcon],svg[ic-round-co-present-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path><svg:circle cx="9" cy="10" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66"></svg:path>`,
})
export class IcRoundCoPresentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCo2Icon],svg[ic-round-co2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-.5 4.5h-2v-3h2zm7 2h-2v1h2.25c.41 0 .75.34.75.75s-.34.75-.75.75H18c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2v-1h-2.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1M8 14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v.25c0 .41-.34.75-.75.75a.76.76 0 0 1-.71-.5H4.5v3h2.04c.1-.29.38-.5.71-.5c.41 0 .75.34.75.75z"></svg:path>`,
})
export class IcRoundCo2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCodeIcon],svg[ic-round-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.7 15.9L4.8 12l3.9-3.9a.984.984 0 0 0 0-1.4a.984.984 0 0 0-1.4 0l-4.59 4.59a.996.996 0 0 0 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0a.984.984 0 0 0 0-1.4m6.6 0l3.9-3.9l-3.9-3.9a.984.984 0 0 1 0-1.4a.984.984 0 0 1 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6a.984.984 0 0 1-1.4 0a.984.984 0 0 1 0-1.4"></svg:path>`,
})
export class IcRoundCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCodeOffIcon],svg[ic-round-code-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.17 12l-3.88-3.88a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41l-2.88 2.88L17 14.17zM2.1 4.93l3.49 3.49l-2.88 2.88a.996.996 0 0 0 0 1.41L7.3 17.3a.996.996 0 1 0 1.41-1.41L4.83 12L7 9.83L19.07 21.9a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42"></svg:path>`,
})
export class IcRoundCodeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCoffeeIcon],svg[ic-round-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29c3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3M16 5v3H6V5zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M5 19h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class IcRoundCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCoffeeMakerIcon],svg[ic-round-coffee-maker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6V4h1c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1h-3.03A4.97 4.97 0 0 0 18 16v-3c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v3c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1"></svg:path><svg:circle cx="13" cy="9" r="1" fill="currentColor"></svg:circle>`,
})
export class IcRoundCoffeeMakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCollectionsIcon],svg[ic-round-collections-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-10.6-3.47l1.63 2.18l2.58-3.22a.5.5 0 0 1 .78 0l2.96 3.7c.26.33.03.81-.39.81H9a.5.5 0 0 1-.4-.8l2-2.67c.2-.26.6-.26.8 0M2 7v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1s-1 .45-1 1"></svg:path>`,
})
export class IcRoundCollectionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCollectionsBookmarkIcon],svg[ic-round-collections-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1m3-18H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 10l-2.5-1.5L15 12V4h5z"></svg:path>`,
})
export class IcRoundCollectionsBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundColorLensIcon],svg[ic-round-color-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5c0-.39-.15-.74-.39-1.01c-.23-.26-.38-.61-.38-.99c0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5c0-4.42-4.03-8-9-8m-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9S8 9.67 8 10.5S7.33 12 6.5 12m3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8m5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8m3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcRoundColorLensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundColorizeIcon],svg[ic-round-colorize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-3.12 3.12l-1.23-1.21c-.39-.39-1.02-.38-1.41 0a.996.996 0 0 0 0 1.41l.72.72l-8.77 8.77q-.15.15-.15.36v4.04c0 .28.22.5.5.5h4.04c.13 0 .26-.05.35-.15l8.77-8.77l.72.72a.996.996 0 1 0 1.41-1.41l-1.22-1.22l3.12-3.12a.99.99 0 0 0 .02-1.42M6.92 19L5 17.08l8.06-8.06l1.92 1.92z"></svg:path>`,
})
export class IcRoundColorizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCommentIcon],svg[ic-round-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM17 14H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCommentBankIcon],svg[ic-round-comment-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1.76 9.55L16.5 10.5l-1.74 1.05c-.33.2-.76-.04-.76-.43V4h5v7.12a.5.5 0 0 1-.76.43"></svg:path>`,
})
export class IcRoundCommentBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCommentsDisabledIcon],svg[ic-round-comments-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.39 2.81a.996.996 0 0 0 0 1.41l.61.61V16c0 1.1.9 2 2 2h11.17l4.61 4.61a.996.996 0 1 0 1.41-1.41L2.81 2.81c-.39-.39-1.03-.39-1.42 0m4.99 6.4L8.17 11H7a1.003 1.003 0 0 1-.62-1.79M7 14c-.55 0-1-.45-1-1s.45-1 1-1h2.17l2 2zm7.83-2l-1-1H17c.55 0 1-.45 1-1s-.45-1-1-1h-5.17l-1-1H17c.55 0 1-.45 1-1s-.45-1-1-1H8.83l-4-4H20c1.1 0 2 .9 2 2v15.17L16.83 14H17c.55 0 1-.45 1-1s-.45-1-1-1z"></svg:path>`,
})
export class IcRoundCommentsDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCommitIcon],svg[ic-round-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13c.55 0 1-.45 1-1s-.45-1-1-1h-4.1a5 5 0 0 0-9.8 0H3c-.55 0-1 .45-1 1s.45 1 1 1h4.1a5 5 0 0 0 9.8 0zm-9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"></svg:path>`,
})
export class IcRoundCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCommuteIcon],svg[ic-round-commute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-.77.77c-.28.28-.28.72 0 1s.72.28 1 0L7 18h2v-5H4.5c-.28 0-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5V8h2V7c0-1.66-1.34-3-3-3M5 14c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66l-1.42 4.11v5.24c0 .55.45.99 1 .99s1-.45 1-1v-1h8v1a1 1 0 0 0 2 .01L22 13.77zm-7.8.34h6.48c.21 0 .4.14.47.34l.69 2a.5.5 0 0 1-.47.66h-7.85a.5.5 0 0 1-.47-.66l.69-2c.05-.2.24-.34.46-.34M12 16c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m8 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundCommuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCompareIcon],svg[ic-round-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 15H5l5-6zm9-15h-5v2h4c.55 0 1 .45 1 1v12l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundCompareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCompareArrowsIcon],svg[ic-round-compare-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.01 14H3c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35zm5.98-2.21V10H21c.55 0 1-.45 1-1s-.45-1-1-1h-6.01V6.21c0-.45-.54-.67-.85-.35l-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79a.5.5 0 0 0 .85-.36"></svg:path>`,
})
export class IcRoundCompareArrowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCompassCalibrationIcon],svg[ic-round-compass-calibration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="17" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 3C8.49 3 5.28 4.29 2.8 6.41a1.01 1.01 0 0 0-.06 1.48l3.6 3.6c.36.36.92.39 1.32.08c1.2-.94 2.71-1.5 4.34-1.5c1.64 0 3.14.56 4.34 1.49c.4.31.96.28 1.31-.08l3.6-3.6c.42-.42.38-1.1-.07-1.48C18.72 4.28 15.51 3 12 3"></svg:path>`,
})
export class IcRoundCompassCalibrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCompostIcon],svg[ic-round-compost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.73 21.5c-4.95-.14-9.08-4.27-9.22-9.22C2.35 6.91 6.67 2.5 12 2.5V1.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36V5.5c-3.58 0-6.5 2.92-6.5 6.5c0 2.21 1.11 4.17 2.81 5.35c.51-.92 1.63-1.62 2.98-1.8c-.09-.69-.26-1.42-.49-2.03c-.33.28-.75.46-1.22.48c-1.14.05-2.08-.99-2.08-2.13v-.86c0-.29-.05-.57-.14-.83a.49.49 0 0 1 .5-.66c1.3.09 3.6.52 3.64 2.48c0 .29-.06.56-.17.8c-.42-.32-.86-.6-1.33-.8c.58.43 1.37 1.37 2 2.6c.67-1.62 1.68-3.27 3-4.6c-.76.52-1.47 1.12-2.13 1.81c-.26-.42-.4-.93-.36-1.47C12.59 9 13.79 8 15.13 8H16c.56 0 .97-.14 1.28-.31a.5.5 0 0 1 .75.44C17.99 9.87 17.56 13 15 13c-.49 0-.94-.14-1.32-.38c-.24.64-.59 1.76-.76 2.96c1.26.22 2.28.89 2.77 1.77a6.51 6.51 0 0 0 2.79-4.87c.02-.26.23-.48.5-.48h1.82c.47 0 .71.24.69.52c-.28 5.09-4.58 9.12-9.76 8.98"></svg:path>`,
})
export class IcRoundCompostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCompressIcon],svg[ic-round-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1m10.79-6H13V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9.21a.5.5 0 0 0-.36.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.32-.31.1-.85-.35-.85M9.21 19H11v2c0 .55.45 1 1 1s1-.45 1-1v-2h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79a.5.5 0 0 0 .36.85M5 14h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundCompressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundComputerIcon],svg[ic-round-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1zM5 6h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1"></svg:path>`,
})
export class IcRoundComputerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundConfirmationNumberIcon],svg[ic-round-confirmation-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.54V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v2.54c0 .69.33 1.37.94 1.69C3.58 10.58 4 11.24 4 12s-.43 1.43-1.06 1.76c-.6.33-.94 1.01-.94 1.7V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2.54c0-.69-.34-1.37-.94-1.7c-.63-.34-1.06-1-1.06-1.76s.43-1.42 1.06-1.76c.6-.33.94-1.01.94-1.7m-9 8.96h-2v-2h2zm0-4.5h-2v-2h2zm0-4.5h-2v-2h2z"></svg:path>`,
})
export class IcRoundConfirmationNumberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundConnectWithoutContactIcon],svg[ic-round-connect-without-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4c0-1.11-.89-2-2-2s-2 .89-2 2s.89 2 2 2s2-.89 2-2m3.19.5c-.41 0-.76.25-.92.63A2.97 2.97 0 0 1 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74a4.96 4.96 0 0 0 3.12-2.91c.26-.64-.24-1.33-.93-1.33M19 17c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m1.5 1h-3c-1.26 0-2.33-.77-2.77-1.87a.99.99 0 0 0-.92-.63c-.69 0-1.19.69-.94 1.33a4.98 4.98 0 0 0 3.12 2.91V22h6v-2.5c.01-.83-.66-1.5-1.49-1.5m-3.25-6.91s0-.01.01 0a3.02 3.02 0 0 0-2.17 2.17v-.01c-.11.43-.51.75-.98.75c-.55 0-1-.45-1-1c0-.05.02-.14.02-.14a4.99 4.99 0 0 1 3.75-3.73c.04 0 .08-.01.12-.01c.55 0 1 .45 1 1c0 .46-.32.86-.75.97M18 6.06c0 .51-.37.92-.86.99c-3.19.39-5.7 2.91-6.09 6.1A1.002 1.002 0 0 1 9.06 13v-.09c.5-4.12 3.79-7.38 7.92-7.85h.01c.56 0 1.01.45 1.01 1"></svg:path>`,
})
export class IcRoundConnectWithoutContactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundConnectedTvIcon],svg[ic-round-connected-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2m0 14H4V5h16zM7 15.97A2.007 2.007 0 0 0 5.03 14H5v2h2zm-1.38-3.42c1.44.26 2.58 1.4 2.83 2.84c.06.36.37.61.73.61c.46 0 .82-.41.75-.86a5 5 0 0 0-4.06-4.06a.746.746 0 0 0-.87.74c0 .37.26.67.62.73m.02-3.02c3.07.3 5.52 2.75 5.83 5.82c.04.37.37.65.74.65c.45 0 .79-.4.75-.85a8 8 0 0 0-7.11-7.1a.756.756 0 0 0-.85.74c0 .37.27.71.64.74"></svg:path>`,
})
export class IcRoundConnectedTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundConnectingAirportsIcon],svg[ic-round-connecting-airports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.93 10.6c.39 0 .66.37.55.74L15.4 15h2.85l.59-.78c.1-.14.26-.22.43-.22c.36 0 .62.35.52.7L19.4 16l.39 1.3c.1.35-.16.7-.52.7c-.17 0-.33-.08-.43-.22l-.59-.78H15.4l1.08 3.66c.11.37-.17.74-.55.74c-.2 0-.39-.11-.5-.28L13 17h-2.97c-.53 0-1-.4-1.03-.93c-.04-.59.43-1.07 1-1.07h3l2.43-4.12c.11-.17.3-.28.5-.28m-7.86-8c-.39 0-.66.37-.55.74L8.6 7H5.75l-.59-.78A.53.53 0 0 0 4.73 6c-.36 0-.62.35-.52.7L4.6 8l-.39 1.3c-.1.35.16.7.52.7c.17 0 .33-.08.43-.22L5.75 9H8.6l-1.08 3.66c-.11.37.17.74.55.74c.2 0 .39-.11.5-.28L11 9h2.97c.53 0 1-.4 1.03-.93c.04-.59-.43-1.07-1-1.07h-3L8.57 2.88a.6.6 0 0 0-.5-.28"></svg:path>`,
})
export class IcRoundConnectingAirportsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundConstructionIcon],svg[ic-round-construction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.99 17.99l-4.94-4.94l-2.12 2.12l4.94 4.94c.59.59 1.54.59 2.12 0s.58-1.54 0-2.12M17.65 10c1.93 0 3.5-1.57 3.5-3.5c0-.58-.16-1.12-.41-1.6l-2.7 2.7l-1.49-1.49l2.7-2.7c-.48-.25-1.02-.41-1.6-.41c-1.93 0-3.5 1.57-3.5 3.5c0 .41.08.8.21 1.16l-1.85 1.85l-1.78-1.78a.996.996 0 0 0 0-1.41l-.71-.71l2.12-2.12a3 3 0 0 0-4.24 0L5.08 6.32a.996.996 0 0 0 0 1.41l.71.71H3.25c-.19 0-.37.07-.5.21a.7.7 0 0 0 0 1l2.54 2.54a.7.7 0 0 0 1 0c.13-.13.21-.31.21-.5V9.15l.7.7c.39.39 1.02.39 1.41 0l1.78 1.78l-6.35 6.35a1.49 1.49 0 0 0 0 2.12c.59.59 1.54.59 2.12 0L16.48 9.79c.37.13.76.21 1.17.21"></svg:path>`,
})
export class IcRoundConstructionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContactEmergencyIcon],svg[ic-round-contact-emergency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M9 8c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3M2.08 19c1.38-2.39 3.96-4 6.92-4s5.54 1.61 6.92 4zm18.52-8.5c-.21.36-.67.48-1.02.27l-.82-.48v.95c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.94l-.82.48a.746.746 0 0 1-.75-1.29L16.5 9l-.82-.48a.74.74 0 0 1-.27-1.02c.21-.36.67-.48 1.02-.27l.82.48v-.96c0-.41.34-.75.75-.75s.75.34.75.75v.95l.82-.48a.746.746 0 0 1 .75 1.29L19.5 9l.82.48c.36.2.49.66.28 1.02"></svg:path>`,
})
export class IcRoundContactEmergencyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContactMailIcon],svg[ic-round-contact-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8V7l-3 2l-3-2v1l2.72 1.82a.5.5 0 0 0 .55 0zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm7.5-6h-7c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v5c0 .28-.22.5-.5.5"></svg:path>`,
})
export class IcRoundContactMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContactPageIcon],svg[ic-round-contact-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.17 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59M12 10c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m4 8H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 17.43z"></svg:path>`,
})
export class IcRoundContactPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContactPhoneIcon],svg[ic-round-contact-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm3.85-4h1.39c.16 0 .3.07.4.2l1.1 1.45c.15.2.13.48-.05.65l-1.36 1.36c-.18.18-.48.2-.67.04a7.56 7.56 0 0 1-2.38-3.71a7.25 7.25 0 0 1 0-3.99a7.5 7.5 0 0 1 2.38-3.71c.2-.17.49-.14.67.04l1.36 1.36c.18.18.2.46.05.65l-1.1 1.45a.48.48 0 0 1-.4.2h-1.39c-.22.63-.35 1.3-.35 2s.13 1.38.35 2.01"></svg:path>`,
})
export class IcRoundContactPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContactSupportIcon],svg[ic-round-contact-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2m1 14.5h-2v-2h2zm.4-4.78c-.01.01-.02.03-.03.05c-.05.08-.1.16-.14.24c-.02.03-.03.07-.04.11c-.03.07-.06.14-.08.21c-.07.21-.1.43-.1.68H10.5c0-.51.08-.94.2-1.3c0-.01 0-.02.01-.03c.01-.04.04-.06.05-.1c.06-.16.13-.3.22-.44c.03-.05.07-.1.1-.15c.03-.04.05-.09.08-.12l.01.01c.84-1.1 2.21-1.44 2.32-2.68c.09-.98-.61-1.93-1.57-2.13c-1.04-.22-1.98.39-2.3 1.28c-.14.36-.47.65-.88.65h-.2c-.6 0-1.04-.59-.87-1.17a4 4 0 0 1 4.43-2.79c1.69.25 3.04 1.64 3.33 3.33c.44 2.44-1.63 3.03-2.53 4.35"></svg:path>`,
})
export class IcRoundContactSupportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContactlessIcon],svg[ic-round-contactless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M8.75 13.68c-.13.43-.62.63-1.02.45a.75.75 0 0 1-.4-.9c.12-.41.18-.83.17-1.24s-.06-.8-.17-1.18c-.1-.36.06-.75.4-.9c.42-.19.91.04 1.04.49c.15.51.22 1.03.23 1.57a6 6 0 0 1-.25 1.71m3.14 1.59c-.17.41-.67.57-1.06.35a.755.755 0 0 1-.32-.94c.33-.77.49-1.63.49-2.56c0-.96-.18-1.89-.53-2.78c-.14-.36.02-.76.36-.94c.39-.2.87-.02 1.03.39c.42 1.06.63 2.18.63 3.33c.02 1.13-.19 2.19-.6 3.15M15 16.6a.748.748 0 0 1-1.39-.56c.59-1.39.89-2.75.89-4.06s-.3-2.65-.88-4.01c-.16-.36.01-.78.36-.95c.39-.2.85-.02 1.02.38c.66 1.54 1 3.08 1 4.58s-.34 3.06-1 4.62"></svg:path>`,
})
export class IcRoundContactlessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContactsIcon],svg[ic-round-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 0H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1M5 24h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9S10.76 6.75 12 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5z"></svg:path>`,
})
export class IcRoundContactsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContentCopyIcon],svg[ic-round-content-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"></svg:path>`,
})
export class IcRoundContentCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContentCutIcon],svg[ic-round-content-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.64 7.64c.29-.62.42-1.33.34-2.09c-.19-1.73-1.54-3.2-3.26-3.49a4.008 4.008 0 0 0-4.66 4.65c.3 1.72 1.76 3.07 3.49 3.26c.76.08 1.46-.05 2.09-.34L10 12l-2.36 2.36c-.62-.29-1.33-.42-2.09-.34c-1.73.19-3.2 1.54-3.49 3.26a4.002 4.002 0 0 0 4.65 4.65c1.72-.3 3.07-1.76 3.26-3.49c.08-.76-.05-1.46-.34-2.09L12 14l7.59 7.59c.89.89 2.41.26 2.41-1v-.01c0-.37-.15-.73-.41-1zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2s2 .89 2 2s-.9 2-2 2m0 12c-1.1 0-2-.89-2-2s.9-2 2-2s2 .89 2 2s-.9 2-2 2m6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5m7.59-10.09L13 9l2 2l6.59-6.59c.26-.26.41-.62.41-1V3.4c0-1.25-1.52-1.88-2.41-.99"></svg:path>`,
})
export class IcRoundContentCutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContentPasteIcon],svg[ic-round-content-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m6 18H6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h1v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V4h1c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundContentPasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContentPasteGoIcon],svg[ic-round-content-paste-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h2v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path><svg:path fill="currentColor" d="m21.29 16.29l-2.58-2.58a.996.996 0 1 0-1.41 1.41l.87.88H13c-.55 0-1 .45-1 1s.45 1 1 1h5.17l-.87.88a.996.996 0 1 0 1.41 1.41l2.58-2.58c.39-.4.39-1.03 0-1.42"></svg:path>`,
})
export class IcRoundContentPasteGoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContentPasteOffIcon],svg[ic-round-content-paste-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.49 20.49L3.51 3.51A.996.996 0 1 0 2.1 4.92l.9.91V19c0 1.1.9 2 2 2h13.17l.9.9c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41M5 19V7.83L16.17 19zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class IcRoundContentPasteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContentPasteSearchIcon],svg[ic-round-content-paste-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h2v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path><svg:path fill="currentColor" d="m22.3 20.9l-2-2c.58-1.01.95-2.23.51-3.65c-.53-1.72-2.04-3.05-3.84-3.22a4.498 4.498 0 0 0-4.95 4.95c.18 1.79 1.5 3.31 3.22 3.84c1.43.44 2.64.07 3.65-.51l2 2c.39.39 1.01.39 1.4 0s.4-1.02.01-1.41M16.5 19c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5"></svg:path>`,
})
export class IcRoundContentPasteSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundContrastIcon],svg[ic-round-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10m1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93z"></svg:path>`,
})
export class IcRoundContrastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundControlCameraIcon],svg[ic-round-control-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.65 9.35L2.7 11.3a.996.996 0 0 0 0 1.41l1.95 1.95c.49.49 1.28.49 1.77 0c.48-.49.48-1.27 0-1.76l-.88-.9l.88-.89c.48-.49.48-1.27 0-1.76s-1.28-.49-1.77 0m12.93 0c-.48.49-.48 1.27 0 1.76l.88.89l-.88.89c-.48.49-.48 1.27 0 1.76c.49.49 1.28.49 1.77 0l1.95-1.95a.996.996 0 0 0 0-1.41l-1.95-1.95c-.49-.48-1.29-.48-1.77.01M12 18.46l-.89-.88c-.49-.48-1.27-.48-1.76 0a1.25 1.25 0 0 0 0 1.77l1.95 1.95c.39.39 1.02.39 1.41 0l1.95-1.95c.49-.49.49-1.28 0-1.77c-.49-.48-1.27-.48-1.76 0zM9.35 6.42c.49.48 1.27.48 1.76 0l.89-.88l.89.88c.49.48 1.27.48 1.76 0c.49-.49.49-1.28 0-1.77L12.7 2.7a.996.996 0 0 0-1.41 0L9.35 4.65a1.25 1.25 0 0 0 0 1.77"></svg:path><svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle>`,
})
export class IcRoundControlCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundControlPointIcon],svg[ic-round-control-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m0-5C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"></svg:path>`,
})
export class IcRoundControlPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundControlPointDuplicateIcon],svg[ic-round-control-point-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V9c0-.55-.45-1-1-1M2 12c0-2.58 1.4-4.83 3.48-6.04c.32-.19.53-.51.53-.88c0-.77-.84-1.25-1.51-.86C1.82 5.78 0 8.68 0 12s1.82 6.22 4.5 7.78c.67.39 1.51-.09 1.51-.86c0-.37-.21-.69-.53-.88A6.98 6.98 0 0 1 2 12m13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9s9-4.04 9-9s-4.04-9-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7"></svg:path>`,
})
export class IcRoundControlPointDuplicateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCookieIcon],svg[ic-round-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.27 10.9c-1.21-.33-2.31-1.46-2.29-2.89c.01-.56-.4-1.02-.96-1.01C15.83 7.03 14 5.22 14 3.02c0-.49-.35-.9-.84-.96C6.53 1.22 2 6.81 2 12c0 5.52 4.48 10 10 10c5.61 0 10.11-4.62 10-10.18a.97.97 0 0 0-.73-.92M8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15m2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m4.5 6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCopyAllIcon],svg[ic-round-copy-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22c-1.1 0-2-.9-2-2h2zm3.5 0h-2v-2h2zm5 0v-2h2c0 1.1-.9 2-2 2M5 6v2H3c0-1.1.9-2 2-2"></svg:path>`,
})
export class IcRoundCopyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCopyrightIcon],svg[ic-round-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23c.23.01.44.05.63.13c.2.09.38.21.52.36s.25.33.34.53s.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01s-.66-.5-1.08-.66s-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92s-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35s.72.69 1.2.91s1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63s.56-.58.74-.94s.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46s-.32.23-.52.3c-.19.07-.39.09-.6.1c-.36-.01-.66-.08-.89-.23c-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88s-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"></svg:path>`,
})
export class IcRoundCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCoronavirusIcon],svg[ic-round-coronavirus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 10.5c-.41 0-.75.34-.75.75h-1.54a7 7 0 0 0-1.52-3.65l1.09-1.09l.01.01c.29.29.77.29 1.06 0s.29-.77 0-1.06L18.54 4.4a.754.754 0 0 0-1.06 0c-.29.29-.29.76-.01 1.05l-1.09 1.09a7 7 0 0 0-3.64-1.51V3.5h.01c.41 0 .75-.34.75-.75S13.16 2 12.75 2h-1.5c-.41 0-.75.34-.75.75s.33.74.74.75v1.55c-1.37.14-2.62.69-3.64 1.51L6.51 5.47l.01-.01c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0L4.4 5.46c-.29.29-.29.77 0 1.06s.76.29 1.05.01l1.09 1.09a6.9 6.9 0 0 0-1.5 3.63H3.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5c0 .41.34.75.75.75s.75-.34.75-.75h1.54c.15 1.37.69 2.61 1.5 3.63l-1.09 1.09a.74.74 0 0 0-1.05.01c-.29.29-.29.77 0 1.06l1.06 1.06c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.01-.01l1.09-1.09c1.02.82 2.26 1.36 3.63 1.51v1.55c-.41.01-.74.34-.74.75s.34.75.75.75h1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.01v-1.54c1.37-.14 2.62-.69 3.64-1.51l1.09 1.09c-.29.29-.28.76.01 1.05s.77.29 1.06 0l1.06-1.06c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-.01.01l-1.09-1.09a7.03 7.03 0 0 0 1.52-3.65h1.54c0 .41.34.75.75.75s.75-.34.75-.75v-1.5c.01-.4-.33-.74-.74-.74M13.75 8c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M12 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-1.75-5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M8.5 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m1.75 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3.5 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m.75-4c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1"></svg:path>`,
})
export class IcRoundCoronavirusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCorporateFareIcon],svg[ic-round-corporate-fare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z"></svg:path>`,
})
export class IcRoundCorporateFareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCottageIcon],svg[ic-round-cottage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.39 12.19a.99.99 0 0 0-.19-1.4l-9.6-7.33c-.36-.27-.86-.27-1.21 0L6 7.58V7c0-.55-.45-1-1-1s-1 .45-1 1v2.11l-2.21 1.68c-.44.33-.52.96-.19 1.4c.34.44.96.52 1.4.19l1-.76V20c0 .55.45 1 1 1h6v-5c0-.55.45-1 1-1s1 .45 1 1v5h6c.55 0 1-.45 1-1v-8.38l.99.76c.44.34 1.07.25 1.4-.19M5.27 5c-.74 0-1.26-.8-.9-1.45C4.89 2.62 5.87 2 7 2c.38 0 .72-.22.89-.53c.15-.31.5-.47.84-.47c.74 0 1.26.8.9 1.45C9.11 3.38 8.13 4 7 4c-.38 0-.72.22-.89.53c-.15.31-.5.47-.84.47"></svg:path>`,
})
export class IcRoundCottageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCountertopsIcon],svg[ic-round-countertops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10V7.17c0-1.62-1.22-3.08-2.84-3.17c-1.21-.06-2.27.59-2.8 1.57c-.35.65.17 1.43.91 1.43h.01c.34 0 .68-.16.84-.46c.16-.32.5-.54.88-.54c.55 0 1 .45 1 1v3H8c1.1 0 2-.9 2-2V5c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v3c0 1.1.9 2 2 2H3c-.55 0-1 .45-1 1s.45 1 1 1h1v7c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-7h1c.55 0 1-.45 1-1s-.45-1-1-1zm-5 8h-2v-6h2z"></svg:path>`,
})
export class IcRoundCountertopsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCreateIcon],svg[ic-round-create-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1q-.15.15-.15.36M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"></svg:path>`,
})
export class IcRoundCreateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCreateNewFolderIcon],svg[ic-round-create-new-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-2 8h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundCreateNewFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCreditCardIcon],svg[ic-round-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m-1 14H5c-.55 0-1-.45-1-1v-5h16v5c0 .55-.45 1-1 1m1-10H4V6h16z"></svg:path>`,
})
export class IcRoundCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCreditCardOffIcon],svg[ic-round-credit-card-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.19 21.19L2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l.84.84c-.14.28-.22.6-.22.94L2 18c0 1.11.89 2 2 2h13.17l2.61 2.61c.39.39 1.02.39 1.41 0s.39-1.03 0-1.42M4 12V8h1.17l4 4zm2.83-8H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L14.83 12H20V8h-9.17z"></svg:path>`,
})
export class IcRoundCreditCardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCreditScoreIcon],svg[ic-round-credit-score-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h4c.55 0 1-.45 1-1s-.45-1-1-1H4v-6h18V6c0-1.1-.9-2-2-2m0 4H4V6h16zm-5.07 11.17l-2.12-2.12a.996.996 0 1 0-1.41 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l5.66-5.66a.996.996 0 1 0-1.41-1.41z"></svg:path>`,
})
export class IcRoundCreditScoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCribIcon],svg[ic-round-crib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.32 18.32a.97.97 0 0 0-1.31-.08c-.32.25-.65.48-1 .69V16h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-6V6c0-1.1-.9-2-2-2H8C5.79 4 4 5.79 4 8v6c0 1.1.9 2 2 2h2v2.93c-.35-.2-.69-.43-1-.69c-.39-.32-.96-.27-1.31.08c-.42.42-.39 1.12.08 1.5A9.95 9.95 0 0 0 12 22c2.36 0 4.53-.82 6.24-2.18c.47-.38.5-1.08.08-1.5M14 19.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4z"></svg:path>`,
})
export class IcRoundCribIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCrisisAlertIcon],svg[ic-round-crisis-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2.5c0 1.5-1.5 6-1.5 6h-2S9.5 4 9.5 2.5a2.5 2.5 0 0 1 5 0M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m4.08-4.89c.18-.75.33-1.47.39-2.06A10 10 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-3.92 2.25-7.31 5.53-8.95c.07.59.21 1.32.39 2.06A8.03 8.03 0 0 0 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.93-1.58-5.49-3.92-6.89M18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2 .98-3.77 2.48-4.86c.23.81.65 2.07.65 2.07C8.43 9.93 8 10.92 8 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.08-.43-2.07-1.13-2.79c0 0 .41-1.22.65-2.07A6 6 0 0 1 18 12"></svg:path>`,
})
export class IcRoundCrisisAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCropIcon],svg[ic-round-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h7c.55 0 1 .45 1 1zm-9 2c-.55 0-1-.45-1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v3H2c-.55 0-1 .45-1 1s.45 1 1 1h3v10c0 1.1.9 2 2 2h10v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1z"></svg:path>`,
})
export class IcRoundCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCrop169Icon],svg[ic-round-crop-16-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8H5V9h14z"></svg:path>`,
})
export class IcRoundCrop169Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCrop32Icon],svg[ic-round-crop-3-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H5V8h14z"></svg:path>`,
})
export class IcRoundCrop32Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCrop54Icon],svg[ic-round-crop-5-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H5V6h14z"></svg:path>`,
})
export class IcRoundCrop54Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCrop75Icon],svg[ic-round-crop-7-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 12H5V7h14z"></svg:path>`,
})
export class IcRoundCrop75Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCropDinIcon],svg[ic-round-crop-din-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundCropDinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCropFreeIcon],svg[ic-round-crop-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v3c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2m1 10c-.55 0-1 .45-1 1v3c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1m15 3c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1zm0-15h-3c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1 .45 1 1v2c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundCropFreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCropLandscapeIcon],svg[ic-round-crop-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-1 12H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundCropLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCropOriginalIcon],svg[ic-round-crop-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m-4.44-6.19l-2.35 3.02l-1.56-1.88a.5.5 0 0 0-.78.01l-1.74 2.23a.5.5 0 0 0 .39.81h8.98a.5.5 0 0 0 .4-.8l-2.55-3.39a.498.498 0 0 0-.79 0"></svg:path>`,
})
export class IcRoundCropOriginalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCropPortraitIcon],svg[ic-round-crop-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundCropPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCropRotateIcon],svg[ic-round-crop-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9v5h2V8c0-1.1-.9-2-2-2h-6v2h5c.55 0 1 .45 1 1m3 7H9c-.55 0-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v8c0 1.1.9 2 2 2h8v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1M17.66 1.4A11.8 11.8 0 0 0 11.39.04l3.81 3.81l1.33-1.33c3.09 1.46 5.34 4.37 5.89 7.86c.06.41.44.69.86.62c.41-.06.69-.45.62-.86c-.6-3.8-2.96-7-6.24-8.74M7.47 21.49a10.5 10.5 0 0 1-5.89-7.86a.737.737 0 0 0-.86-.62c-.41.06-.69.45-.62.86c.6 3.81 2.96 7.01 6.24 8.75c1.67.89 3.83 1.51 6.27 1.36L8.8 20.16z"></svg:path>`,
})
export class IcRoundCropRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCropSquareIcon],svg[ic-round-crop-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-1 14H7c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundCropSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCrueltyFreeIcon],svg[ic-round-cruelty-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.84 14.52c-.26-.19-.62-.63-.79-.84C17.24 12.01 19 8.87 19 5c0-1.95-.74-3-2-3c-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2C5.74 2 5 3.05 5 5c0 3.87 1.76 7.01 2.95 8.68c-.17.21-.53.65-.79.84c-.5.41-1.66 1.37-1.66 2.98c0 2.21 1.79 4 4 4c1.55 0 2.5-.56 2.5-.56s.95.56 2.5.56c2.21 0 4-1.79 4-4c0-1.61-1.16-2.57-1.66-2.98M9.35 12.2C8.34 10.7 7 8.12 7 5c0-.49.06-.8.12-.97c.94.31 3.24 2.71 3.38 7.64c-.47.12-.84.3-1.15.53m1.15 4.55c-.28 0-.5-.34-.5-.75s.22-.75.5-.75s.5.34.5.75s-.22.75-.5.75M12 19.5c-.55 0-1-.72-1-1s.45-.5 1-.5s1 .22 1 .5s-.45 1-1 1m1.5-2.75c-.28 0-.5-.34-.5-.75s.22-.75.5-.75s.5.34.5.75s-.22.75-.5.75m0-5.08c.14-4.93 2.44-7.33 3.38-7.64c.06.17.12.48.12.97c0 3.12-1.34 5.7-2.35 7.2c-.31-.23-.68-.41-1.15-.53"></svg:path>`,
})
export class IcRoundCrueltyFreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCssIcon],svg[ic-round-css-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10.25c0 .41-.34.75-.75.75a.76.76 0 0 1-.71-.5H4.5v3h2.04c.1-.29.38-.5.71-.5c.41 0 .75.34.75.75V14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm5.04.25c.1.29.38.5.71.5c.41 0 .75-.34.75-.75V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H13v1h-2.04a.75.75 0 0 0-.71-.5c-.41 0-.75.34-.75.75V14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H11v-1zm6.5 0c.1.29.38.5.71.5c.41 0 .75-.34.75-.75V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2.04a.75.75 0 0 0-.71-.5c-.41 0-.75.34-.75.75V14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1h-2.5v-1z"></svg:path>`,
})
export class IcRoundCssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCurrencyBitcoinIcon],svg[ic-round-currency-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2m0-13c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v10H7c-.55 0-1 .45-1 1s.45 1 1 1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1c2.21 0 4-1.79 4-4c0-1.45-.78-2.73-1.94-3.43c.59-.69.94-1.59.94-2.57c0-1.86-1.27-3.43-3-3.87z"></svg:path>`,
})
export class IcRoundCurrencyBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCurrencyExchangeIcon],svg[ic-round-currency-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c5.7 0 10.39-4.34 10.95-9.9c.06-.59-.41-1.1-1-1.1c-.51 0-.94.38-.99.88C20.52 17.44 16.67 21 12 21c-3.12 0-5.87-1.59-7.48-4H6c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.67C4.99 21.15 8.28 23 12 23m0-22C6.3 1 1.61 5.34 1.05 10.9c-.05.59.41 1.1 1 1.1c.51 0 .94-.38.99-.88C3.48 6.56 7.33 3 12 3c3.12 0 5.87 1.59 7.48 4H18c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1.67A11 11 0 0 0 12 1m-.88 4.88c0-.49.4-.88.88-.88s.88.39.88.88v.37c1.07.19 1.75.76 2.16 1.3c.34.44.16 1.08-.36 1.3c-.36.15-.78.03-1.02-.28c-.28-.38-.78-.77-1.6-.77c-.7 0-1.81.37-1.81 1.39c0 .95.86 1.31 2.64 1.9c2.4.83 3.01 2.05 3.01 3.45c0 2.62-2.5 3.13-3.02 3.22v.37c0 .48-.39.88-.88.88s-.88-.39-.88-.88v-.42c-.63-.15-1.93-.61-2.69-2.1c-.23-.44.03-1.02.49-1.2c.41-.16.9-.01 1.11.38c.32.61.95 1.37 2.12 1.37c.93 0 1.98-.48 1.98-1.61c0-.96-.7-1.46-2.28-2.03c-1.1-.39-3.35-1.03-3.35-3.31c0-.1.01-2.4 2.62-2.96z"></svg:path>`,
})
export class IcRoundCurrencyExchangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCurrencyFrancIcon],svg[ic-round-currency-franc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v12H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1s1-.45 1-1v-2h3c.55 0 1-.45 1-1s-.45-1-1-1H9v-3h7c.55 0 1-.45 1-1s-.45-1-1-1H9V5h8c.55 0 1-.45 1-1"></svg:path>`,
})
export class IcRoundCurrencyFrancIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCurrencyLiraIcon],svg[ic-round-currency-lira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 15.84l-1.47.92A.998.998 0 0 1 6 15.91c0-.34.18-.66.47-.85L9 13.48v-2.36l-1.47.92A.998.998 0 0 1 6 11.19c0-.34.18-.66.47-.85L9 8.76V4c0-.55.45-1 1-1s1 .45 1 1v3.51l2.47-1.55a.998.998 0 0 1 1.53.85c0 .34-.18.66-.47.85L11 9.87l.01 2.35l2.46-1.54a.998.998 0 0 1 1.53.85c0 .34-.18.66-.47.85L11 14.59V19c2.47 0 4.52-1.79 4.93-4.15c.08-.49.49-.85.98-.85c.61 0 1.09.54 1 1.14A7 7 0 0 1 11 21h-1c-.55 0-1-.45-1-1z"></svg:path>`,
})
export class IcRoundCurrencyLiraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCurrencyPoundIcon],svg[ic-round-currency-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.21 17.61c-.47-.24-1.03-.05-1.31.4c-.36.6-.97.99-1.9.99H9.1c.83-1 1.5-2.34 1.5-4c0-.35-.03-.69-.08-1H13c.55 0 1-.45 1-1s-.45-1-1-1H9.82C9 10.42 8 9.6 8 8c0-1.93 1.57-3.5 3.5-3.5c1.2 0 2.26.61 2.89 1.53c.27.4.77.59 1.22.4c.6-.25.8-.99.43-1.53A5.497 5.497 0 0 0 6 8c0 1.78.79 2.9 1.49 4H7c-.55 0-1 .45-1 1s.45 1 1 1h1.47c.08.31.13.64.13 1c0 1.9-1.29 3.11-2.06 3.66c-.34.24-.54.63-.54 1.05c0 .71.58 1.29 1.29 1.29H14c1.55 0 2.95-.76 3.63-2c.28-.51.09-1.14-.42-1.39"></svg:path>`,
})
export class IcRoundCurrencyPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCurrencyRubleIcon],svg[ic-round-currency-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21c.55 0 1-.45 1-1v-2h3c.55 0 1-.45 1-1s-.45-1-1-1H9v-2h4.5c3.22 0 5.79-2.76 5.47-6.04C18.7 5.1 16.14 3 13.26 3H8c-.55 0-1 .45-1 1v8H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1m5.5-9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12"></svg:path>`,
})
export class IcRoundCurrencyRubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCurrencyRupeeIcon],svg[ic-round-currency-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 14h-.73l5.1 5.31c.61.64.16 1.69-.72 1.69c-.27 0-.53-.11-.72-.31L7.4 14.41c-.26-.26-.4-.62-.4-.98c0-.79.64-1.43 1.43-1.43h2.07c1.76 0 3.22-1.3 3.46-3H7c-.55 0-1-.45-1-1s.45-1 1-1h6.66c-.56-1.18-1.76-2-3.16-2H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1h-2.26c.48.58.84 1.26 1.05 2H17c.55 0 1 .45 1 1s-.45 1-1 1h-1.02c-.26 2.8-2.62 5-5.48 5"></svg:path>`,
})
export class IcRoundCurrencyRupeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCurrencyYenIcon],svg[ic-round-currency-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.82 3c.34 0 .66.17.84.46L12 10.29l4.34-6.83c.18-.29.5-.46.84-.46c.79 0 1.27.87.84 1.54L13.92 11H17c.55 0 1 .45 1 1s-.45 1-1 1h-4v2h4c.55 0 1 .45 1 1s-.45 1-1 1h-4v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H7c-.55 0-1-.45-1-1s.45-1 1-1h4v-2H7c-.55 0-1-.45-1-1s.45-1 1-1h3.08l-4.1-6.46A.998.998 0 0 1 6.82 3"></svg:path>`,
})
export class IcRoundCurrencyYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCurrencyYuanIcon],svg[ic-round-currency-yuan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21c-.55 0-1-.45-1-1v-6H7c-.55 0-1-.45-1-1s.45-1 1-1h3.72L5.98 4.54A.998.998 0 0 1 6.82 3c.34 0 .66.17.84.46L12 10.29l4.34-6.83c.18-.29.5-.46.84-.46c.79 0 1.27.87.84 1.54L13.28 12H17c.55 0 1 .45 1 1s-.45 1-1 1h-4v6c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundCurrencyYuanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCurtainsIcon],svg[ic-round-curtains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7c-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7"></svg:path>`,
})
export class IcRoundCurtainsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCurtainsClosedIcon],svg[ic-round-curtains-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM11 5h2v14h-2z"></svg:path>`,
})
export class IcRoundCurtainsClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundCycloneIcon],svg[ic-round-cyclone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path><svg:path fill="currentColor" d="M22 6.11c0-.46-.3-.86-.74-.97C19.23 4.6 16.03 4 12 4c-2.15 0-4.11.86-5.54 2.24c.1-.65.28-1.69.62-2.96c.17-.64-.3-1.28-.97-1.28c-.45 0-.85.3-.97.74C4.6 4.77 4 7.97 4 12c0 2.15.86 4.11 2.24 5.54c-.65-.1-1.69-.28-2.96-.62c-.64-.17-1.28.3-1.28.97c0 .46.3.86.74.97C4.77 19.4 7.97 20 12 20c2.15 0 4.11-.86 5.54-2.24c-.1.65-.28 1.69-.62 2.96c-.17.64.3 1.28.97 1.28c.46 0 .86-.3.97-.74C19.4 19.23 20 16.03 20 12c0-2.15-.86-4.11-2.24-5.54c.65.1 1.69.28 2.96.62c.64.17 1.28-.3 1.28-.97M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6"></svg:path>`,
})
export class IcRoundCycloneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDangerousIcon],svg[ic-round-dangerous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.9 3H9.1c-.53 0-1.04.21-1.42.59l-4.1 4.1C3.21 8.06 3 8.57 3 9.1v5.8c0 .53.21 1.04.59 1.41l4.1 4.1c.37.38.88.59 1.41.59h5.8c.53 0 1.04-.21 1.41-.59l4.1-4.1c.38-.37.59-.88.59-1.41V9.1c0-.53-.21-1.04-.59-1.41l-4.1-4.1c-.37-.38-.88-.59-1.41-.59m.64 12.54a.996.996 0 0 1-1.41 0L12 13.41l-2.12 2.12a.996.996 0 1 1-1.41-1.41L10.59 12L8.46 9.88a.996.996 0 1 1 1.41-1.41L12 10.59l2.12-2.12a.996.996 0 1 1 1.41 1.41L13.41 12l2.12 2.12c.4.39.4 1.03.01 1.42"></svg:path>`,
})
export class IcRoundDangerousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDarkModeIcon],svg[ic-round-dark-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56"></svg:path>`,
})
export class IcRoundDarkModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDashboardIcon],svg[ic-round-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1m0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1M13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDashboardCustomizeIcon],svg[ic-round-dashboard-customize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1m10 0h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1M4 13h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1m13 0c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-2c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundDashboardCustomizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDataArrayIcon],svg[ic-round-data-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5c0 .55.45 1 1 1h2v12h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1M6 20h2c.55 0 1-.45 1-1s-.45-1-1-1H6V6h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2"></svg:path>`,
})
export class IcRoundDataArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDataExplorationIcon],svg[ic-round-data-exploration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 1.33.26 2.61.74 3.77l4.61-4.62a1 1 0 0 1 1.35-.06l2.6 2.19L14.58 10H14c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-.58l-3.94 3.93a.99.99 0 0 1-1.35.05l-2.59-2.19l-4.4 4.4A10 10 0 0 0 12 22h8c1.1 0 2-.9 2-2zm-2.5 8.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundDataExplorationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDataObjectIcon],svg[ic-round-data-object-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7v2c0 .55-.45 1-1 1s-1 .45-1 1v2c0 .55.45 1 1 1s1 .45 1 1v2c0 1.66 1.34 3 3 3h2c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1-.45-1-1v-2c0-1.3-.84-2.42-2-2.83v-.34C5.16 11.42 6 10.3 6 9V7c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H7C5.34 4 4 5.34 4 7m17 3c-.55 0-1-.45-1-1V7c0-1.66-1.34-3-3-3h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1 .45 1 1v2c0 1.3.84 2.42 2 2.83v.34c-1.16.41-2 1.52-2 2.83v2c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.66 0 3-1.34 3-3v-2c0-.55.45-1 1-1s1-.45 1-1v-2c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundDataObjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDataSaverOffIcon],svg[ic-round-data-saver-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92c0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07c0-5.18-3.95-9.45-9-9.95M12 19c-3.87 0-7-3.13-7-7c0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95c0 5.52 4.47 10 9.99 10c3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53A6.95 6.95 0 0 1 12 19"></svg:path>`,
})
export class IcRoundDataSaverOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDataSaverOnIcon],svg[ic-round-data-saver-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V9c0-.55-.45-1-1-1s-1 .45-1 1zm1 8c-3.87 0-7-3.13-7-7c0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95c0 5.52 4.47 10 9.99 10c3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53A6.95 6.95 0 0 1 12 19m1-16.95v3.03c3.39.49 6 3.39 6 6.92c0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07c0-5.18-3.95-9.45-9-9.95"></svg:path>`,
})
export class IcRoundDataSaverOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDataThresholdingIcon],svg[ic-round-data-thresholding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7.62 5.88l1.29 1.29l2.96-2.96a.996.996 0 1 1 1.41 1.41l-3.67 3.67a.996.996 0 0 1-1.41 0L10.67 11l-2.3 2.3a.996.996 0 1 1-1.41-1.41l3-3a.98.98 0 0 1 1.42-.01M5 16h1.72L5 17.72zm.84 3l3-3h1.83l-3 3zm3.96 0l3-3h1.62l-3 3zm3.73 0l3-3h1.62l-3 3zM19 19h-1.73L19 17.27z"></svg:path>`,
})
export class IcRoundDataThresholdingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDataUsageIcon],svg[ic-round-data-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3.87v.02c0 .67.45 1.23 1.08 1.43C16.93 6.21 19 8.86 19 12c0 .52-.06 1.01-.17 1.49c-.14.64.12 1.3.69 1.64l.01.01c.86.5 1.98.05 2.21-.91c.17-.72.26-1.47.26-2.23c0-4.5-2.98-8.32-7.08-9.57c-.95-.29-1.92.44-1.92 1.44m-2.06 15.05c-2.99-.43-5.42-2.86-5.86-5.84a6.996 6.996 0 0 1 4.83-7.76c.64-.19 1.09-.76 1.09-1.43v-.02c0-1-.97-1.73-1.93-1.44a10.02 10.02 0 0 0-6.98 10.96c.59 4.38 4.13 7.92 8.51 8.51c3.14.42 6.04-.61 8.13-2.53c.74-.68.61-1.89-.26-2.39c-.58-.34-1.3-.23-1.8.22c-1.47 1.34-3.51 2.05-5.73 1.72"></svg:path>`,
})
export class IcRoundDataUsageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDatasetIcon],svg[ic-round-dataset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8 14H7v-4h4zm0-6H7V7h4zm6 6h-4v-4h4zm0-6h-4V7h4z"></svg:path>`,
})
export class IcRoundDatasetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDatasetLinkedIcon],svg[ic-round-dataset-linked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.09 17H7v-4h3.69c.95-.63 2.09-1 3.31-1h6c.34 0 .67.04 1 .09V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h3.81C8.3 20.12 8 19.09 8 18c0-.34.04-.67.09-1M13 7h4v4h-4zM7 7h4v4H7z"></svg:path><svg:path fill="currentColor" d="M12.03 17.66c.16-.98 1.09-1.66 2.08-1.66H15c.55 0 1-.45 1-1s-.45-1-1-1h-.83c-2.09 0-3.95 1.53-4.15 3.61A4 4 0 0 0 14 22h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-1.21 0-2.18-1.09-1.97-2.34m7.8-3.66H19c-.55 0-1 .45-1 1s.45 1 1 1h.89c1 0 1.92.68 2.08 1.66c.21 1.25-.76 2.34-1.97 2.34h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c2.34 0 4.21-2.01 3.98-4.39c-.2-2.08-2.06-3.61-4.15-3.61"></svg:path><svg:path fill="currentColor" d="M15 19h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundDatasetLinkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDateRangeIcon],svg[ic-round-date-range-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class IcRoundDateRangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeblurIcon],svg[ic-round-deblur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v18a9 9 0 0 0 0-18"></svg:path><svg:circle cx="6" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="10" r=".5" fill="currentColor"></svg:circle><svg:circle cx="6" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="14" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="21" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="3" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="14" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="10" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="18" r="1" fill="currentColor"></svg:circle>`,
})
export class IcRoundDeblurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeckIcon],svg[ic-round-deck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.41 9c.49 0 .69-.63.29-.91L13.15 2.8a2 2 0 0 0-2.29 0L3.3 8.09c-.4.28-.2.91.29.91H11v12c0 .55.45 1 1 1s1-.45 1-1V9z"></svg:path><svg:path fill="currentColor" d="M8 16H4.9l-.57-3.02a1.003 1.003 0 0 0-1.97.37L3 16.74V21c0 .55.45 1 1 1h.01c.55 0 1-.44 1-.99L5.02 18H7v3c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1m12.84-3.82c-.54-.1-1.06.26-1.17.8L19.1 16H16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-3h1.98l.02 3.01c0 .55.45.99 1 .99s1-.45 1-1v-4.26l.64-3.39c.1-.54-.26-1.07-.8-1.17"></svg:path>`,
})
export class IcRoundDeckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDehazeIcon],svg[ic-round-dehaze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1m0-5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1m0-5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundDehazeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeleteIcon],svg[ic-round-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeleteForeverIcon],svg[ic-round-delete-forever-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm3.17-6.41a.996.996 0 1 1 1.41-1.41L12 12.59l1.41-1.41a.996.996 0 1 1 1.41 1.41L13.41 14l1.41 1.41a.996.996 0 1 1-1.41 1.41L12 15.41l-1.41 1.41a.996.996 0 1 1-1.41-1.41L10.59 14zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundDeleteForeverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeleteOutlineIcon],svg[ic-round-delete-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM9 9h6c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1m6.5-5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"></svg:path>`,
})
export class IcRoundDeleteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeleteSweepIcon],svg[ic-round-delete-sweep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1m0-8h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1m0 4h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1M3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3zM13 5h-2l-.71-.71c-.18-.18-.44-.29-.7-.29H6.41c-.26 0-.52.11-.7.29L5 5H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundDeleteSweepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeliveryDiningIcon],svg[ic-round-delivery-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2.65L13.52 14H10v-4c0-.55-.45-1-1-1H6c-2.21 0-4 1.79-4 4v2c0 .55.45 1 1 1h1c0 1.66 1.34 3 3 3s3-1.34 3-3h3.52c.61 0 1.18-.28 1.56-.75l3.48-4.35c.29-.36.44-.8.44-1.25zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"></svg:path><svg:path fill="currentColor" d="M6 6h3c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1m13 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundDeliveryDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDensityLargeIcon],svg[ic-round-density-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m16 14H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundDensityLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDensityMediumIcon],svg[ic-round-density-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m16 14H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1m0-8H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundDensityMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDensitySmallIcon],svg[ic-round-density-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m1 19h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-6h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-6h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundDensitySmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDepartureBoardIcon],svg[ic-round-departure-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.34 1.13c-2.94-.55-5.63.75-7.12 2.92c.01-.01.01-.02.02-.03C9.84 4 9.42 4 9 4c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22v1.28c0 .83.67 1.5 1.5 1.5S5 22.33 5 21.5V21h8v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-1.28c.61-.55 1-1.34 1-2.22v-3.08c3.72-.54 6.5-3.98 5.92-7.97c-.42-2.9-2.7-5.29-5.58-5.82M4.5 19c-.83 0-1.5-.67-1.5-1.5S3.67 16 4.5 16s1.5.67 1.5 1.5S5.33 19 4.5 19M3 13V8h6c0 1.96.81 3.73 2.11 5zm10.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2.5-6c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m-.25-9c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l2.52 1.51c.34.2.78.09.98-.24a.71.71 0 0 0-.25-.99L16.5 8.25v-3.5c0-.41-.34-.75-.75-.75"></svg:path>`,
})
export class IcRoundDepartureBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDescriptionIcon],svg[ic-round-description-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.59 2.59c-.38-.38-.89-.59-1.42-.59H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41zM15 18H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m0-4H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m-2-6V3.5L18.5 9H14c-.55 0-1-.45-1-1"></svg:path>`,
})
export class IcRoundDescriptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeselectIcon],svg[ic-round-deselect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h2v-2H3zm4 8h2v-2H7zm6-18h-2v2h2zm6 0v2h2c0-1.1-.9-2-2-2M5 21v-2H3c0 1.1.9 2 2 2m-2-4h2v-2H3zm8 4h2v-2h-2zm8-8h2v-2h-2zm0-4h2V7h-2zm-4-4h2V3h-2zM7.83 5L7 4.17V3h2v2zm12 12l-.83-.83V15h2v2zM9 15v-3.17L12.17 15zM2.1 3.51a.996.996 0 0 0 0 1.41L4.17 7H3v2h2V7.83l2 2V16c0 .55.45 1 1 1h6.17l2 2H15v2h2v-1.17l2.07 2.07a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0M17 8c0-.55-.45-1-1-1H9.83l2 2H15v3.17l2 2z"></svg:path>`,
})
export class IcRoundDeselectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDesignServicesIcon],svg[ic-round-design-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.24 11.51l1.57-1.57l-3.75-3.75l-1.57 1.57l-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13l-4.6 4.61q-.15.15-.15.36v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15l4.62-4.62l4.13 4.13c1.32 1.32 2.76.07 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31l-.47.49a.996.996 0 1 0 1.41 1.41l.48-.48l1.45 1.45zm7.88 7.89l-4.13-4.13l1.9-1.9l1.45 1.45l-.48.48a.996.996 0 1 0 1.41 1.41l.48-.48l1.27 1.27zm3.65-11.92a.996.996 0 0 0 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83l3.75 3.75z"></svg:path>`,
})
export class IcRoundDesignServicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeskIcon],svg[ic-round-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v10c0 .55.45 1 1 1s1-.45 1-1V8h10v9c0 .55.45 1 1 1s1-.45 1-1v-1h4v1c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1m18 1v2h-4V8zm-4 6v-2h4v2z"></svg:path>`,
})
export class IcRoundDeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDesktopAccessDisabledIcon],svg[ic-round-desktop-access-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.31 2a.996.996 0 0 0 0 1.41l.69.68V16c0 1.1.9 2 2 2h7v2H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h.9l5.29 5.29a.996.996 0 1 0 1.41-1.41L1.72 2A.996.996 0 0 0 .31 2m2.68 13V6.09L12.9 16H3.99c-.55 0-1-.45-1-1M4.55 2l2 2H20c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-1.45l2 2h.44c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></svg:path>`,
})
export class IcRoundDesktopAccessDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDesktopMacIcon],svg[ic-round-desktop-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-1.63 2.45c-.44.66.03 1.55.83 1.55h5.6c.8 0 1.28-.89.83-1.55L14 18h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 12H3V5c0-.55.45-1 1-1h16c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundDesktopMacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDesktopWindowsIcon],svg[ic-round-desktop-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1 14H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundDesktopWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDetailsIcon],svg[ic-round-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.13 4.57l-8.3 14.94c-.37.67.11 1.49.87 1.49h16.6c.76 0 1.24-.82.87-1.49l-8.3-14.94a.997.997 0 0 0-1.74 0M13 8.92L18.6 19H13zm-2 0V19H5.4z"></svg:path>`,
})
export class IcRoundDetailsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeveloperBoardIcon],svg[ic-round-developer-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8c0-.55-.45-1-1-1h-1V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V9h1c.55 0 1-.45 1-1m-5 11H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1M6.5 13h4c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5m6-6h3c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5m-6 0h4c.28 0 .5.22.5.5v4c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5m6 4h3c.28 0 .5.22.5.5v5c0 .28-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5"></svg:path>`,
})
export class IcRoundDeveloperBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeveloperBoardOffIcon],svg[ic-round-developer-board-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.83 5H18v10.17L19.83 17H21c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V5c0-1.1-.9-2-2-2H5.83zM15 10h-2c-.06 0-.13-.01-.19-.02l-.79-.79C12.01 9.13 12 9.06 12 9V8c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1m-4-2v.17L9.83 7H10c.55 0 1 .45 1 1m5 4v1.17L13.83 11H15c.55 0 1 .45 1 1M1.39 2.81a.996.996 0 0 0 0 1.41l.61.61V19c0 1.1.9 2 2 2h14c.06 0 .11 0 .16-.01l1.61 1.61a.996.996 0 1 0 1.41-1.41L2.81 2.81c-.39-.39-1.03-.39-1.42 0M4 19V6.83l2 2V11c0 .55.45 1 1 1h2.17l1.02 1.02c-.06-.01-.13-.02-.19-.02H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2c0-.06-.01-.13-.02-.19L12 14.83V16c0 .55.45 1 1 1h1.18l2 2z"></svg:path>`,
})
export class IcRoundDeveloperBoardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeveloperModeIcon],svg[ic-round-developer-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h10v1c0 .55.45 1 1 1s1-.45 1-1V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1zm9.12 10.88l3.17-3.17a.996.996 0 0 0 0-1.41l-3.17-3.17c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41L17.17 12l-2.47 2.47a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.42 0m-6.83-1.42L6.83 12l2.46-2.46a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0L4.7 11.3a.996.996 0 0 0 0 1.41l3.17 3.17c.39.39 1.03.39 1.42 0c.4-.39.39-1.03 0-1.42M17 19H7v-1c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1z"></svg:path>`,
})
export class IcRoundDeveloperModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeviceHubIcon],svg[ic-round-device-hub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 16l-4-4V8.82c1.35-.49 2.26-1.89 1.93-3.46a3.01 3.01 0 0 0-2.42-2.32A3 3 0 0 0 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H4c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2.05l4-4.2l4 4.2V20c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z"></svg:path>`,
})
export class IcRoundDeviceHubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeviceThermostatIcon],svg[ic-round-device-thermostat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4c0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4m-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1z"></svg:path>`,
})
export class IcRoundDeviceThermostatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDeviceUnknownIcon],svg[ic-round-device-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 18H7V5h10zm-6-3h2v2h-2zm-1.48-5.81h.13c.33 0 .59-.23.7-.54c.24-.69.91-1.21 1.66-1.21c.93 0 1.75.82 1.75 1.75c0 1.32-1.49 1.55-2.23 2.82h-.01c-.08.14-.14.29-.2.45c-.01.02-.02.03-.02.05c-.01.02-.01.04-.01.05c-.1.31-.16.66-.16 1.08h1.76c0-.25.04-.47.12-.67c.54-1.47 2.77-1.86 2.48-4.18c-.19-1.55-1.43-2.84-2.98-3.04c-1.77-.23-3.29.78-3.81 2.3c-.2.56.23 1.14.82 1.14"></svg:path>`,
})
export class IcRoundDeviceUnknownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDevicesIcon],svg[ic-round-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11h-.5c-.83 0-1.5.67-1.5 1.5S.67 20 1.5 20H14v-3H4zm19 1h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z"></svg:path>`,
})
export class IcRoundDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDevicesFoldIcon],svg[ic-round-devices-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3h-3c0-1.43-1.47-2.4-2.79-1.84l-3 1.29C10.48 2.76 10 3.49 10 4.29V19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16h-5.33l1.12-.48c.73-.32 1.21-1.04 1.21-1.84V5h3zM2 3h2v2H2zm0 16h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm4-4h2v2H6zm0 16h2v2H6z"></svg:path>`,
})
export class IcRoundDevicesFoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDevicesOtherIcon],svg[ic-round-devices-other-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1zm9 5h-2c-.55 0-1 .45-1 1v.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V13c0-.55-.45-1-1-1m-1 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1m-1 10h-4v-8h4z"></svg:path>`,
})
export class IcRoundDevicesOtherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDialerSipIcon],svg[ic-round-dialer-sip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 8c.28 0 .5-.22.5-.5v-4c0-.28-.22-.5-.5-.5s-.5.22-.5.5v4c0 .28.22.5.5.5m-4-1c-.28 0-.5.22-.5.5s.22.5.5.5h1.95c.3 0 .55-.25.55-.55v-1.9c0-.3-.25-.55-.55-.55H13V4h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.95c-.3 0-.55.25-.55.55v1.89c0 .31.25.56.55.56H14v1zm7.95-4h-1.89c-.31 0-.56.25-.56.55V7.5c0 .28.22.5.5.5s.5-.22.5-.5V6h1.45c.3 0 .55-.25.55-.55v-1.9c0-.3-.25-.55-.55-.55M20 5h-1V4h1zm-.79 10.27l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84A15.05 15.05 0 0 1 6.6 10.8l1.85-1.85c.43-.43.64-1.04.57-1.64l-.29-2.52a2 2 0 0 0-1.98-1.78H5.02c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1-.76-1.86-1.77-1.97"></svg:path>`,
})
export class IcRoundDialerSipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDialpadIcon],svg[ic-round-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M6 1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m12-8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m-6 8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class IcRoundDialpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDiamondIcon],svg[ic-round-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.16 3h-.32L9.21 8.25h5.58zm4.3 5.25h5.16l-2.07-4.14A2 2 0 0 0 17.76 3h-3.93zm4.92 1.5h-8.63V20.1zM11.25 20.1V9.75H2.62zM7.54 8.25L10.16 3H6.24a2 2 0 0 0-1.79 1.11L2.38 8.25z"></svg:path>`,
})
export class IcRoundDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDifferenceIcon],svg[ic-round-difference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7c.55 0 1 .45 1 1v13h13c.55 0 1 .45 1 1s-.45 1-1 1H4c-1.1 0-2-.9-2-2V8c0-.55.45-1 1-1m12.59-5.41c-.38-.38-.89-.59-1.42-.59H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41zM15.5 15h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m0-6h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V9h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V6c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundDifferenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDiningIcon],svg[ic-round-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-9 8.3c0 .93-.64 1.71-1.5 1.93v6.02c0 .41-.34.75-.75.75S8 18.66 8 18.25v-6.02c-.86-.22-1.5-1-1.5-1.93V6.5c0-.28.22-.5.5-.5s.5.22.5.5V9h.75V6.5c0-.28.22-.5.5-.5s.5.22.5.5V9H10V6.5c0-.28.23-.5.5-.5c.28 0 .5.22.5.5zm4.58 2.29l-.08.03v5.63c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.63l-.08-.04c-.97-.47-1.67-1.7-1.67-3.18c0-1.88 1.13-3.4 2.5-3.4c1.38 0 2.5 1.53 2.5 3.41c0 1.48-.7 2.71-1.67 3.18"></svg:path>`,
})
export class IcRoundDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDinnerDiningIcon],svg[ic-round-dinner-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.85 19.85l1 1q.15.15.36.15H19.8c.13 0 .26-.05.35-.15l1-1a.5.5 0 0 0-.35-.85H3.21a.5.5 0 0 0-.36.85M3 18h16.97c.29-3.26-2.28-6-5.48-6c-2.35 0-4.35 1.48-5.14 3.55c-.41-.23-.87-.38-1.35-.47V9h1.75C10.99 9 12 7.99 12 6.75h8.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H12C12 4.01 10.99 3 9.75 3h-6c-.41 0-.75.34-.75.75s.34.75.75.75H4v.75h-.25c-.41 0-.75.34-.75.75s.34.75.75.75H4v.75h-.25c-.41 0-.75.34-.75.75s.34.75.75.75H4v7.39c-.44.46-.78 1-1 1.61M8 4.5h2v.75H8zm0 2.25h2v.75H8zM5.5 4.5h1v.75h-1zm0 2.25h1v.75h-1zM5.5 9h1v6.06c-.35.06-.68.17-1 .3z"></svg:path>`,
})
export class IcRoundDinnerDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsIcon],svg[ic-round-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.71 11.29l-9-9a.996.996 0 0 0-1.41 0l-9 9a.996.996 0 0 0 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 0 0 0-1.41M14 14.5V12h-4v2c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1h5V7.5l3.15 3.15c.2.2.2.51 0 .71z"></svg:path>`,
})
export class IcRoundDirectionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsBikeIcon],svg[ic-round-directions-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2M5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5m0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5m5.8-10l2.4-2.4l.8.8c1.06 1.06 2.38 1.78 3.96 2.02c.6.09 1.14-.39 1.14-1c0-.49-.37-.91-.85-.99c-1.11-.18-2.02-.71-2.75-1.43l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4c0 .6.2 1.1.6 1.4L11 14v4c0 .55.45 1 1 1s1-.45 1-1v-4.4c0-.52-.2-1.01-.55-1.38zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5m0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5"></svg:path>`,
})
export class IcRoundDirectionsBikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsBoatIcon],svg[ic-round-directions-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21c-1.19 0-2.38-.35-3.47-.98c-.33-.19-.73-.19-1.07 0a6.83 6.83 0 0 1-6.93 0c-.33-.19-.73-.19-1.07 0c-1.08.63-2.27.98-3.46.98H3c-.55 0-1 .45-1 1s.45 1 1 1h1c1.38 0 2.74-.35 4-.99a8.75 8.75 0 0 0 8 0c1.26.65 2.62.99 4 .99h1c.55 0 1-.45 1-1s-.45-1-1-1zM3.95 19H4c1.27 0 2.42-.55 3.33-1.33c.39-.34.95-.34 1.34 0C9.58 18.45 10.73 19 12 19s2.42-.55 3.33-1.33c.39-.34.95-.34 1.34 0c.91.78 2.06 1.33 3.33 1.33h.05l1.9-6.68c.11-.37.04-1.06-.66-1.28L20 10.62V6c0-1.1-.9-2-2-2h-3V2c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.63.19-.81.84-.66 1.28zM6 6h12v3.97L12.62 8.2c-.41-.13-.84-.13-1.25 0L6 9.97z"></svg:path>`,
})
export class IcRoundDirectionsBoatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsBoatFilledIcon],svg[ic-round-directions-boat-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21c-1.19 0-2.38-.35-3.47-.98c-.33-.19-.73-.19-1.07 0a6.83 6.83 0 0 1-6.93 0c-.33-.19-.73-.19-1.07 0c-1.08.63-2.27.98-3.46.98H3c-.55 0-1 .45-1 1s.45 1 1 1h1c1.38 0 2.74-.35 4-.99a8.75 8.75 0 0 0 8 0c1.26.65 2.62.99 4 .99h1c.55 0 1-.45 1-1s-.45-1-1-1zM3.95 19H4c1.27 0 2.42-.55 3.33-1.33c.39-.34.95-.34 1.34 0C9.58 18.45 10.73 19 12 19s2.42-.55 3.33-1.33c.39-.34.95-.34 1.34 0c.91.78 2.06 1.33 3.33 1.33h.05l1.9-6.68c.11-.37.04-1.06-.66-1.28L20 10.62V6c0-1.1-.9-2-2-2h-3V2c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.63.19-.81.84-.66 1.28zM6 6h12v3.97L12.62 8.2c-.41-.13-.84-.13-1.25 0L6 9.97z"></svg:path>`,
})
export class IcRoundDirectionsBoatFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsBusIcon],svg[ic-round-directions-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16c0 .88.39 1.67 1 2.22v1.28c0 .83.67 1.5 1.5 1.5S8 20.33 8 19.5V19h8v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-1.28c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17m9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m1.5-6H6V6h12z"></svg:path>`,
})
export class IcRoundDirectionsBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsBusFilledIcon],svg[ic-round-directions-bus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44v1.56c0 .83.67 1.5 1.5 1.5S8 20.33 8 19.5V19h8v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-1.56c.62-.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4M8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16m7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2.5-6H6V7h12z"></svg:path>`,
})
export class IcRoundDirectionsBusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsCarIcon],svg[ic-round-directions-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.67 1.5 1.5 1.5S6 20.33 6 19.5V19h12v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-7.16c0-.22-.04-.45-.11-.66zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 11l1.27-3.82c.14-.4.52-.68.95-.68h9.56c.43 0 .81.28.95.68L19 11z"></svg:path>`,
})
export class IcRoundDirectionsCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsCarFilledIcon],svg[ic-round-directions-car-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v7.5c0 .83.67 1.5 1.5 1.5S6 20.33 6 19.5V19h12v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5V12zM7.5 16c-.83 0-1.5-.67-1.5-1.5S6.67 13 7.5 13s1.5.67 1.5 1.5S8.33 16 7.5 16m9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5.81 10l1.04-3h10.29l1.04 3z"></svg:path>`,
})
export class IcRoundDirectionsCarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsOffIcon],svg[ic-round-directions-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.71 11.29l-9-9a.996.996 0 0 0-1.41 0L8.21 5.38L13 10.17V7.5l3.15 3.15c.2.2.2.51 0 .71l-.98.98l3.45 3.45l3.09-3.09c.38-.38.38-1.01 0-1.41M6.79 6.79L3.51 3.51A.996.996 0 1 0 2.1 4.92L5.38 8.2l-3.09 3.09a.996.996 0 0 0 0 1.41l9 9c.39.39 1.02.39 1.41 0l3.09-3.09l3.28 3.28a.996.996 0 1 0 1.41-1.41zM9.99 14c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.05.02-.1.03-.15l1.97 1.97z"></svg:path>`,
})
export class IcRoundDirectionsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsRailwayIcon],svg[ic-round-directions-railway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m6-7H6V5h12zM4 15.5C4 17.43 5.57 19 7.5 19l-1.14 1.15c-.32.31-.1.85.35.85h10.58c.45 0 .67-.54.35-.85L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m6-7H6V5h12z"></svg:path>`,
})
export class IcRoundDirectionsRailwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsRailwayFilledIcon],svg[ic-round-directions-railway-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19l-1.21.81A.649.649 0 0 0 6.65 21h10.7a.649.649 0 0 0 .36-1.19L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4m0 14c-.83 0-1.5-.67-1.5-1.5S11.17 13 12 13s1.5.67 1.5 1.5S12.83 16 12 16m6-6H6V7h12z"></svg:path>`,
})
export class IcRoundDirectionsRailwayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsRunIcon],svg[ic-round-directions-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m-3.17 12l.57-2.5l2.1 2v5c0 .55.45 1 1 1s1-.45 1-1v-5.64c0-.55-.22-1.07-.62-1.45l-1.48-1.41l.6-3a7.32 7.32 0 0 0 4.36 2.41c.6.09 1.14-.39 1.14-1c0-.49-.36-.9-.85-.98c-1.52-.25-2.78-1.15-3.45-2.33l-1-1.6c-.4-.6-1-1-1.7-1c-.3 0-.5.1-.8.1L7.21 7.76a2.01 2.01 0 0 0-1.22 1.85v2.37c0 .55.45 1 1 1s1-.45 1-1v-2.4l1.8-.7l-1.6 8.1l-3.92-.8c-.54-.11-1.07.24-1.18.78V17c-.11.54.24 1.07.78 1.18l4.11.82a2 2 0 0 0 2.34-1.52"></svg:path>`,
})
export class IcRoundDirectionsRunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsSubwayIcon],svg[ic-round-directions-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19l-1.15 1.15a.5.5 0 0 0 .36.85H17.3c.45 0 .67-.54.35-.85L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4M7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17m3.5-6H6V6h5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m1.5-6h-5V6h5z"></svg:path>`,
})
export class IcRoundDirectionsSubwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsSubwayFilledIcon],svg[ic-round-directions-subway-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19l-1.21.81A.649.649 0 0 0 6.65 21h10.7a.649.649 0 0 0 .36-1.19L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4M8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16m2.5-6H6V7h5zm4.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2.5-6h-5V7h5z"></svg:path>`,
})
export class IcRoundDirectionsSubwayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsTransitIcon],svg[ic-round-directions-transit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19l-1.15 1.15a.5.5 0 0 0 .36.85H17.3c.45 0 .67-.54.35-.85L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4M7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17m3.5-6H6V6h5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m1.5-6h-5V6h5z"></svg:path>`,
})
export class IcRoundDirectionsTransitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsTransitFilledIcon],svg[ic-round-directions-transit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19l-1.21.81A.649.649 0 0 0 6.65 21h10.7a.649.649 0 0 0 .36-1.19L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4M8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16m2.5-6H6V7h5zm4.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2.5-6h-5V7h5z"></svg:path>`,
})
export class IcRoundDirectionsTransitFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirectionsWalkIcon],svg[ic-round-directions-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2M9.8 8.9L7.24 21.81c-.13.61.35 1.19.98 1.19h.08c.47 0 .87-.32.98-.78L10.9 15l2.1 2v5c0 .55.45 1 1 1s1-.45 1-1v-5.64c0-.55-.22-1.07-.62-1.45L12.9 13.5l.6-3a7.32 7.32 0 0 0 4.36 2.41c.6.09 1.14-.39 1.14-1c0-.49-.36-.9-.85-.98c-1.52-.25-2.78-1.15-3.45-2.33l-1-1.6a2.145 2.145 0 0 0-2.65-.84L7.22 7.78A2.01 2.01 0 0 0 6 9.63V12c0 .55.45 1 1 1s1-.45 1-1V9.6z"></svg:path>`,
})
export class IcRoundDirectionsWalkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDirtyLensIcon],svg[ic-round-dirty-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-3.17l-1.24-1.35A2 2 0 0 0 14.12 3H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-3.34 11.58c-1.14 1.86-3-1.03-3.81.09c-.39.57-.09 1.49.13 2.33c0 .47-.38.85-.85.85s-.86-.38-.86-.85c.14-.98.42-2.05-.16-2.43c-.89-.59-1.27 2.06-2.8 1.35c-1.39-1.12 1.05-1.29.5-3.27c-.22-.79-2.28.36-2.4-1.24c-.08-1 1.49-.74 1.51-1.49c.03-.75-1.03-1.05-.25-1.91c.22-.24.71-.26.91-.19c.79.27 1.55 1.82 2.51 1.19c1.03-.66-1.88-2.35 0-2.86c1.64-.44 1.31 2.08 2.65 2.44c1.94.52 2.65-4.55 4.41-2.33c1.85 2.33-3.43 2.27-2.85 4.01c.34 1.01 2.15-1.2 2.76.53c.64 1.83-3.09.82-3.04 1.66c.06.83 2.41.55 1.64 2.12m1.48 1.43c-.47 0-.86-.38-.86-.86s.38-.86.86-.86c.47 0 .86.38.86.86s-.38.86-.86.86"></svg:path>`,
})
export class IcRoundDirtyLensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDisabledByDefaultIcon],svg[ic-round-disabled-by-default-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m13.3 11.29a.996.996 0 0 1-1.41 0L12 13.41L9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12L7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.88a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.88c.38.39.38 1.03 0 1.41"></svg:path>`,
})
export class IcRoundDisabledByDefaultIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDisabledVisibleIcon],svg[ic-round-disabled-visible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.99 12.34c.01-.11.01-.23.01-.34c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.17 3.93 9.43 8.96 9.95a9.3 9.3 0 0 1-2.32-2.68A8.01 8.01 0 0 1 4 12c0-1.85.63-3.55 1.69-4.9l5.66 5.66c.56-.4 1.17-.73 1.82-1L7.1 5.69A7.9 7.9 0 0 1 12 4c4.24 0 7.7 3.29 7.98 7.45c.71.22 1.39.52 2.01.89M17 13c-3.18 0-5.9 1.87-7 4.5c1.1 2.63 3.82 4.5 7 4.5s5.9-1.87 7-4.5c-1.1-2.63-3.82-4.5-7-4.5m0 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m1.5-2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5"></svg:path>`,
})
export class IcRoundDisabledVisibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDiscFullIcon],svg[ic-round-disc-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16h2v-2h-2zm0-8v3c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1M10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m0 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcRoundDiscFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDiscordIcon],svg[ic-round-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"></svg:path>`,
})
export class IcRoundDiscordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDiscountIcon],svg[ic-round-discount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83z"></svg:path><svg:path fill="currentColor" d="M11.38 17.41c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.63.58A2.04 2.04 0 0 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41zM7.25 3a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path>`,
})
export class IcRoundDiscountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDisplaySettingsIcon],svg[ic-round-display-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 14H4V5h16z"></svg:path><svg:path fill="currentColor" d="M6 8.25h8v1.5H6zm10.5 1.5H18v-1.5h-1.5V7H15v4h1.5zm-6.5 2.5h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z"></svg:path>`,
})
export class IcRoundDisplaySettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDiversity1Icon],svg[ic-round-diversity-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="14" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M1.22 17.58A2.01 2.01 0 0 0 0 19.43V20c0 .55.45 1 1 1h3.5v-1.61c0-.83.23-1.61.63-2.29c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58"></svg:path><svg:circle cx="20" cy="14" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22.78 17.58A6.95 6.95 0 0 0 20 17c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V21H23c.55 0 1-.45 1-1v-.57c0-.81-.48-1.53-1.22-1.85m-6.54-.93c-1.17-.52-2.61-.9-4.24-.9s-3.07.39-4.24.9A2.99 2.99 0 0 0 6 19.39V20c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-.61c0-1.18-.68-2.26-1.76-2.74M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3"></svg:path><svg:path fill="currentColor" d="M2.48 10.86C2.17 10.1 2 9.36 2 8.6C2 6.02 4.02 4 6.6 4c2.68 0 3.82 1.74 5.4 3.59C13.57 5.76 14.7 4 17.4 4C19.98 4 22 6.02 22 8.6c0 .76-.17 1.5-.48 2.26c.65.31 1.18.82 1.53 1.44c.6-1.2.95-2.42.95-3.7C24 4.9 21.1 2 17.4 2c-2.09 0-4.09.97-5.4 2.51C10.69 2.97 8.69 2 6.6 2C2.9 2 0 4.9 0 8.6c0 1.28.35 2.5.96 3.7c.35-.62.88-1.13 1.52-1.44"></svg:path>`,
})
export class IcRoundDiversity1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDiversity2Icon],svg[ic-round-diversity-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.77 15.23a1 1 0 0 0-.04-1.45C8.17 11.47 6.65 9.9 7.07 8.33C7.29 7.52 8.01 7 8.85 7c1.11 0 1.54.65 2.68 2h.93c1.12-1.31 1.53-2 2.68-2c.87 0 1.55.54 1.77 1.32c.35-.04.68-.06 1-.06c.36 0 .7.03 1.03.08C18.7 6.43 17.13 5 15.15 5c-.12 0-.23.03-.35.04c.26-.71.31-1.53-.18-2.43c-.43-.81-1.22-1.43-2.12-1.57C10.62.74 9 2.18 9 4c0 .37.08.71.2 1.04c-.12-.01-.23-.04-.35-.04C6.69 5 5 6.69 5 8.85c0 2.23 1.73 4.01 4.4 6.41c.39.36 1 .34 1.37-.03"></svg:path><svg:path fill="currentColor" d="M23.52 17.25c-.54-.87-1.27-1.23-2.01-1.36c.07-.1.15-.18.21-.28c1.08-1.87.46-4.18-1.41-5.26c-1.93-1.11-4.34-.5-7.75.6c-.51.16-.79.7-.66 1.21c.15.55.73.87 1.28.69c3.28-1.06 5.4-1.6 6.55-.45c.59.59.68 1.48.26 2.21c-.56.96-1.33 1-3.07 1.32l-.47.81c.58 1.62.97 2.33.39 3.32c-.53.91-1.61 1.2-2.53.68c-.06-.03-.11-.09-.17-.13c-.3.67-.64 1.24-1.03 1.73v.01c1.9 1.24 4.34.64 5.46-1.29c.06-.1.09-.21.14-.32c.22.27.48.51.8.69c1.58.91 3.64.23 4.31-1.55c.32-.86.18-1.85-.3-2.63"></svg:path><svg:path fill="currentColor" d="M12.1 15.04c-.72 3.38-1.32 5.48-2.89 5.9c-.81.22-1.62-.15-2.04-.88c-.56-.96-.2-1.66.39-3.32l-.46-.81c-1.7-.31-2.5-.33-3.07-1.32c-.53-.91-.24-2 .68-2.53c.09-.05.19-.08.29-.11c-.27-.42-.5-.87-.67-1.37c-.24-.11-.36-.16-.6-.26a3.816 3.816 0 0 0-1.43 5.27c.06.1.14.18.21.28c-.75.13-1.48.49-2.01 1.36c-.48.78-.62 1.77-.3 2.63a3 3 0 0 0 4.31 1.55c.32-.18.58-.42.8-.69c.05.11.08.22.14.32c1.08 1.87 3.39 2.49 5.26 1.41c1.93-1.11 2.61-3.51 3.36-7.01a.996.996 0 0 0-.72-1.17a1 1 0 0 0-1.25.75"></svg:path>`,
})
export class IcRoundDiversity2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDiversity3Icon],svg[ic-round-diversity-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.32 13.01c.96.02 1.85.5 2.45 1.34A3.96 3.96 0 0 0 12 16c1.29 0 2.5-.62 3.23-1.66c.6-.84 1.49-1.32 2.45-1.34c-.72-1.22-3.6-2-5.68-2c-2.07 0-4.96.78-5.68 2.01M4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3s1.34 3 3 3m16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3m-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3"></svg:path><svg:path fill="currentColor" d="M21 14h-3.27c-.77 0-1.35.45-1.68.92c-.04.06-1.36 2.08-4.05 2.08c-1.43 0-3.03-.64-4.05-2.08c-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-1.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V19c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundDiversity3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDivideIcon],svg[ic-round-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m6.002-7a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4m0 12a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4"></svg:path>`,
})
export class IcRoundDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDnsIcon],svg[ic-round-dns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M7 19c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcRoundDnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoDisturbIcon],svg[ic-round-do-disturb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.9 7.9 0 0 1 12 20m6.31-3.1L7.1 5.69A7.9 7.9 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9"></svg:path>`,
})
export class IcRoundDoDisturbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoDisturbAltIcon],svg[ic-round-do-disturb-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M4 12c0-4.4 3.6-8 8-8c1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12m8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8"></svg:path>`,
})
export class IcRoundDoDisturbAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoDisturbOffIcon],svg[ic-round-do-disturb-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11v2h-.88l4.33 4.33A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10a9.9 9.9 0 0 0-5.33 1.55L14.12 11zm4.17 9.88L3.12 2.83a.996.996 0 1 0-1.41 1.41l2.07 2.07A10 10 0 0 0 2 12c0 5.52 4.48 10 10 10c2.11 0 4.07-.66 5.68-1.78l2.07 2.07c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41M7 13v-2h1.46l2 2z"></svg:path>`,
})
export class IcRoundDoDisturbOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoDisturbOnIcon],svg[ic-round-do-disturb-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundDoDisturbOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoNotDisturbIcon],svg[ic-round-do-not-disturb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.9 7.9 0 0 1 12 20m6.31-3.1L7.1 5.69A7.9 7.9 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9"></svg:path>`,
})
export class IcRoundDoNotDisturbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoNotDisturbAltIcon],svg[ic-round-do-not-disturb-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M4 12c0-4.4 3.6-8 8-8c1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12m8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8"></svg:path>`,
})
export class IcRoundDoNotDisturbAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoNotDisturbOffIcon],svg[ic-round-do-not-disturb-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11v2h-1.17l4.51 4.51A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10c-2.04 0-3.93.61-5.51 1.66L13.83 11zM2.1 4.93l1.56 1.56c-1.37 2.07-2 4.68-1.48 7.45c.75 3.95 3.92 7.13 7.88 7.88c2.77.52 5.38-.1 7.45-1.48l1.56 1.56a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42M7 11h1.17l2 2H7z"></svg:path>`,
})
export class IcRoundDoNotDisturbOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoNotDisturbOnIcon],svg[ic-round-do-not-disturb-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundDoNotDisturbOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoNotDisturbOnTotalSilenceIcon],svg[ic-round-do-not-disturb-on-total-silence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.6-6-6-6m2 7h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundDoNotDisturbOnTotalSilenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoNotStepIcon],svg[ic-round-do-not-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.1 3.51a.996.996 0 0 0 0 1.41l7.19 7.19c.18.2.18.5-.01.7a.485.485 0 0 1-.7 0L6.87 11.1c-.11.4-.26.78-.45 1.12l1.4 1.4c.2.2.2.51 0 .71a.485.485 0 0 1-.7 0l-1.27-1.27c-.24.29-.5.56-.77.8l1.28 1.28c.2.2.2.51 0 .71c-.1.1-.23.15-.36.15s-.26-.05-.35-.15l-1.38-1.38c-.71.47-1.43.81-2.02 1.04A1.99 1.99 0 0 0 1 17.37V18c0 1.1.9 2 2 2h6.67c.53 0 1.04-.21 1.41-.59l2.74-2.74l5.23 5.23a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0m16.41 12.17l-1.41-1.41l4.48-4.48c.78.78.78 2.05 0 2.83zm2.37-6.6l-4.48 4.48l-7.1-7.09l3.09-3.07a2 2 0 0 1 2.82 0z"></svg:path>`,
})
export class IcRoundDoNotStepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoNotTouchIcon],svg[ic-round-do-not-touch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 10.17l-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0zm7-4.85c0-.65-.47-1.25-1.12-1.32c-.75-.08-1.38.51-1.38 1.24v5.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V3.31c0-.65-.47-1.25-1.12-1.32c-.75-.06-1.38.53-1.38 1.26v7.92l6 6zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67zM17 22c.62 0 1.18-.19 1.65-.52l-.02-.02l.44.44a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92l4.92 4.92L7 9.83v4.3l-2.6-1.48c-.17-.09-.34-.14-.54-.14c-.26 0-.5.09-.7.26L2 13.88l6.8 7.18c.57.6 1.35.94 2.18.94z"></svg:path>`,
})
export class IcRoundDoNotTouchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDockIcon],svg[ic-round-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 23h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1m7-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M16 15H8V5h8z"></svg:path>`,
})
export class IcRoundDockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDocumentScannerIcon],svg[ic-round-document-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1H4v2c0 .55-.45 1-1 1m14-4c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1M3 18c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H4v-2c0-.55-.45-1-1-1m14 4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1m2-4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2zM9 9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1m0 3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1m0 3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundDocumentScannerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDomainIcon],svg[ic-round-domain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm9 12h-7v-2h2v-2h-2v-2h2v-2h-2V9h7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1m-1-8h-2v2h2zm0 4h-2v2h2z"></svg:path>`,
})
export class IcRoundDomainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDomainAddIcon],svg[ic-round-domain-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm6 12h-4v-2h2v-2h-2v-2h2v-2h-2V9h8v6h2V8c0-.55-.45-1-1-1h-9V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h13zm2-8h-2v2h2zm0 4h-2v2h2zm6 5c0 .55-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1"></svg:path>`,
})
export class IcRoundDomainAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDomainDisabledIcon],svg[ic-round-domain-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.71 2.39a.996.996 0 0 0 0 1.41L2 5.1V19c0 1.1.9 2 2 2h13.9l2.29 2.29a.996.996 0 1 0 1.41-1.41L2.12 2.39a.996.996 0 0 0-1.41 0M6 19H4v-2h2zm0-4H4v-2h2zm-2-4V9h2v2zm6 8H8v-2h2zm-2-4v-2h2v2zm4 4v-2h1.9l2 2zM8 5h2v2h-.45L12 9.45V9h7c.55 0 1 .45 1 1v7.45l2 2V9c0-1.1-.9-2-2-2h-8V5c0-1.1-.9-2-2-2H5.55L8 5.45zm8 6h2v2h-2z"></svg:path>`,
})
export class IcRoundDomainDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDomainVerificationIcon],svg[ic-round-domain-verification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.23 15.83c.39.39 1.02.39 1.41 0l4.24-4.24c.39-.39.39-1.02 0-1.42a.996.996 0 0 0-1.41 0l-3.54 3.53l-1.41-1.41c-.39-.39-1.02-.39-1.42 0s-.39 1.02 0 1.41z"></svg:path><svg:path fill="currentColor" d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m0 13c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V8h14z"></svg:path>`,
})
export class IcRoundDomainVerificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoneIcon],svg[ic-round-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 16.2l-3.5-3.5a.984.984 0 0 0-1.4 0a.984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4a.984.984 0 0 0-1.4 0z"></svg:path>`,
})
export class IcRoundDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoneAllIcon],svg[ic-round-done-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.3 6.3a.996.996 0 0 0-1.41 0l-5.64 5.64l1.41 1.41L17.3 7.7c.38-.38.38-1.02 0-1.4m4.24-.01l-9.88 9.88l-3.48-3.47a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L22.95 7.71a.996.996 0 0 0 0-1.41h-.01a.975.975 0 0 0-1.4-.01M1.12 14.12L5.3 18.3c.39.39 1.02.39 1.41 0l.7-.7l-4.88-4.9a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42"></svg:path>`,
})
export class IcRoundDoneAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoneOutlineIcon],svg[ic-round-done-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.47 5.63c.39.39.39 1.01 0 1.4L9.13 18.37a.984.984 0 0 1-1.4 0l-4.2-4.2a.984.984 0 0 1 0-1.4a.984.984 0 0 1 1.4 0l3.5 3.5L19.07 5.63a.984.984 0 0 1 1.4 0m-2.11-2.12l-9.93 9.93l-2.79-2.79c-.78-.78-2.05-.78-2.83 0l-1.4 1.4c-.78.78-.78 2.05 0 2.83l5.6 5.6c.78.78 2.05.78 2.83 0L22.59 7.74c.78-.78.78-2.05 0-2.83l-1.4-1.4c-.79-.78-2.05-.78-2.83 0"></svg:path>`,
})
export class IcRoundDoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDonutLargeIcon],svg[ic-round-donut-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.07 5.32C16.26 6 18 7.74 18.68 9.93c.19.63.76 1.07 1.41 1.07h.04c1 0 1.72-.96 1.43-1.91c-.97-3.18-3.48-5.69-6.66-6.66c-.94-.29-1.9.43-1.9 1.43v.04c0 .66.44 1.23 1.07 1.42m4.61 8.75a7.01 7.01 0 0 1-4.61 4.61c-.63.19-1.07.76-1.07 1.41v.04c0 1 .96 1.72 1.91 1.43c3.18-.97 5.69-3.48 6.66-6.66c.29-.95-.43-1.91-1.42-1.91h-.05c-.66.01-1.23.45-1.42 1.08M11 20.11c0-.67-.45-1.24-1.09-1.44C7.07 17.78 5 15.13 5 12s2.07-5.78 4.91-6.67c.64-.2 1.09-.77 1.09-1.44v-.01c0-1-.97-1.74-1.93-1.44C4.98 3.69 2 7.5 2 12s2.98 8.31 7.07 9.56c.96.3 1.93-.44 1.93-1.45"></svg:path>`,
})
export class IcRoundDonutLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDonutSmallIcon],svg[ic-round-donut-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.18v17.64c0 .64-.59 1.12-1.21.98C5.32 20.8 2 16.79 2 12s3.32-8.8 7.79-9.8a.998.998 0 0 1 1.21.98m2.03 0v6.81c0 .55.45 1 1 1h6.79c.64 0 1.12-.59.98-1.22c-.85-3.76-3.8-6.72-7.55-7.57c-.63-.14-1.22.34-1.22.98m0 10.83v6.81c0 .64.59 1.12 1.22.98c3.76-.85 6.71-3.82 7.56-7.58c.14-.62-.35-1.22-.98-1.22h-6.79c-.56.01-1.01.46-1.01 1.01"></svg:path>`,
})
export class IcRoundDonutSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoorBackIcon],svg[ic-round-door-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19h-1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1m-10-6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundDoorBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoorFrontIcon],svg[ic-round-door-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19h-1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1m-6-6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundDoorFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoorSlidingIcon],svg[ic-round-door-sliding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V5c0-1.1-.9-2-2-2h-5.25v16h-1.5V3H6c-1.1 0-2 .9-2 2v14c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1M9 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundDoorSlidingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
