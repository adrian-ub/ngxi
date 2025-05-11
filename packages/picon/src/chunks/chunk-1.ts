import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMusicIcon],svg[picon-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5c-5 0-2 6 1 1V2h2L6 0H5"></svg:path>`,
})
export class PiconMusicIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconMuteIcon],svg[picon-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V3h2l2-2v6L2 5m3-3h1l2 3H7m0-3h1L6 5H5"></svg:path>`,
})
export class PiconMuteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNaIcon],svg[picon-na-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6V5h2v1M4 7l2-6l2 6H7L6 3L5 7M0 7V1h1l2 4V1h1v6H3L1 3v4"></svg:path>`,
})
export class PiconNaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNasIcon],svg[picon-nas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1c1-1 5-1 6 0c-1 1.5-5 1.5-6 0m0 1q3 2 6 0v1Q4 5 1 3m0 1q3 2 6 0v1Q4 7 1 5M0 8V7h4V6l1-1v2h3v1"></svg:path>`,
})
export class PiconNasIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNavigationIcon],svg[picon-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m6-2L1 4h3v3"></svg:path>`,
})
export class PiconNavigationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNetflixIcon],svg[picon-netflix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h2l4 8l-2-.5m-2 0L1 8V1l2 4m4 2L5 3V0h2"></svg:path>`,
})
export class PiconNetflixIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNetworkIcon],svg[picon-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3V0h4v3M0 8V6h3v2m2 0V6h3v2M0 4v1h8V4M1 4v3h1V4m4 0v3h1V4M3 1v3h2V1"></svg:path>`,
})
export class PiconNetworkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNewspaperIcon],svg[picon-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6H4v1h3m0-3H3v1h4m0-4H6v2h1M5 1H3v2h2M2 7V0h6v7L7 8H1L0 7V1h2L1 2v5"></svg:path>`,
})
export class PiconNewspaperIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNextIcon],svg[picon-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8V0H5v8m0-4L1 0v8"></svg:path>`,
})
export class PiconNextIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNfcIcon],svg[picon-nfc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8q2-4 0-8q4 4 0 8M4 7q2-3 0-6q4 3 0 6M1 6q-2-2 0-4l2 2V2q2 2 0 4L1 4"></svg:path>`,
})
export class PiconNfcIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNinjaIcon],svg[picon-ninja-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5C-1-.5 9-.5 5 5M1 8q3-6 6 0M2 2.5q2 1.5 4 0M3 8L0 3h1l3 5"></svg:path>`,
})
export class PiconNinjaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNoentryIcon],svg[picon-noentry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8c-5 0-5-8 0-8s5 8 0 8m0-7C0 1 0 7 4 7s4-6 0-6M1 6l5-5l1 1l-5 5"></svg:path>`,
})
export class PiconNoentryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNorthIcon],svg[picon-north-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 5l2-2l2 2"></svg:path>`,
})
export class PiconNorthIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNotIcon],svg[picon-not-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 7l6-6v1L2 7"></svg:path>`,
})
export class PiconNotIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNotesIcon],svg[picon-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6C6 9 3 4 7 4V1.5L3 3v4c-2 3-5-2-1-2V2l6-2"></svg:path>`,
})
export class PiconNotesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNswitchIcon],svg[picon-nswitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H0V0h3m2 8V2h3v6M1 1v1h1V1m5 5H6v1h1"></svg:path>`,
})
export class PiconNswitchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconNumberedIcon],svg[picon-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v1h4V3M3 1v1h4V1M3 5v1h4V5M2 6H1l.5-.5L1 5h1m0-4h-.5v1H2M1 3l1 1H1l1-1"></svg:path>`,
})
export class PiconNumberedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconOakIcon],svg[picon-oak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8H3V5C-8-1 16-1 5 5"></svg:path>`,
})
export class PiconOakIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconOctopusIcon],svg[picon-octopus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v1h1V1M1 1v1h1V1m5 2q2 8-1 2q0 6-2 0q-2 6-2 0q-3 6-1-2c-5-4 11-4 6 0"></svg:path>`,
})
export class PiconOctopusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconOffIcon],svg[picon-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4c0-2 3-2 3 0S1 6 1 4m4.5 2c3 0 3-4 0-4h-3c-3 0-3 4 0 4"></svg:path>`,
})
export class PiconOffIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconOfficeIcon],svg[picon-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8h7V0H0m1 6V5h5v1M1 2V1h5v1M3 8V6h1v2m1-2V1H4v5M3 6V1H2v5M1 4V3h5v1"></svg:path>`,
})
export class PiconOfficeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconOilIcon],svg[picon-oil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h3v1H4v1h4v1H6L5 6H1V4H0V2h1l1 1h1V2H2m5 4l1-1v3L7 7"></svg:path>`,
})
export class PiconOilIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconOillampIcon],svg[picon-oillamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h5L6 0H5m1 5h1V4H6m0-1c3 0 3 3 0 3l2 2H2l2-2l-4-3"></svg:path>`,
})
export class PiconOillampIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconOkIcon],svg[picon-ok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8L0 6V3l2-3l1 1l-1 3l2-1l2 1l-1 1l-1-1l-1 2l2 1V5l1 1v1L5 8"></svg:path>`,
})
export class PiconOkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconOnIcon],svg[picon-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c0-2 3-2 3 0S4 6 4 4m1.5 2c3 0 3-4 0-4h-3c-3 0-3 4 0 4"></svg:path>`,
})
export class PiconOnIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconOptionsIcon],svg[picon-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 6l1 1l-1 1l-1-1m1-4l1 1l-1 1l-1-1m2-3L4 2L3 1l1-1"></svg:path>`,
})
export class PiconOptionsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconOrIcon],svg[picon-or-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6V0h6v2h2v6H2V6M1 1v4h2v2h4V3H5V1"></svg:path>`,
})
export class PiconOrIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconOutboxIcon],svg[picon-outbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 4l2-2l2 2M2 1L1 6h1l1 1h2l1-1h1L6 1M0 8V5l1-5h6l1 5v3"></svg:path>`,
})
export class PiconOutboxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconOvenIcon],svg[picon-oven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h8v8H0m1-1h6V2H1m1 1h4v1H2M1 1l1 1l1-1l-1-1m1 1l1 1l1-1l-1-1m1 1l1 1l1-1l-1-1"></svg:path>`,
})
export class PiconOvenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPackageIcon],svg[picon-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4h3v2h2V4h3v4H0m2-8h1.5L3 3H0m4.5-3H6l2 3H5"></svg:path>`,
})
export class PiconPackageIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPagebreakIcon],svg[picon-pagebreak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3V0h6v3M2 0v2h4V0M0 5V4h2v1m1 0V4h2v1m1 0V4h2v1M1 8V6h6v2M2 7v1h4V7"></svg:path>`,
})
export class PiconPagebreakIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPaintbrushIcon],svg[picon-paintbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8c3-7 8-2 3 0m2-4l2-4l1 1l-2 4"></svg:path>`,
})
export class PiconPaintbrushIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPaletteIcon],svg[picon-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3C8-2-6 2 3 7c9 0-2-3 3-4M2 2h1v1H2M1 4h1v1H1m3-4h1v1H4"></svg:path>`,
})
export class PiconPaletteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPanoramaIcon],svg[picon-panorama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1q4 2 8 0v6Q4 5 0 7m5-5L3 4L2 3L1 5h6"></svg:path>`,
})
export class PiconPanoramaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPantyIcon],svg[picon-panty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v1q3 1 3 3h2q0-2 3-3V2"></svg:path>`,
})
export class PiconPantyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPauseIcon],svg[picon-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V0H1v8m4 0V0h2v8"></svg:path>`,
})
export class PiconPauseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPawnIcon],svg[picon-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2q0-4 1 0M4 2q0-4 1 0M0 5q0-4 1 0m2 3c-5-5 8-9 3 0M2 2q0-4 1 0"></svg:path>`,
})
export class PiconPawnIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPaycheckIcon],svg[picon-paycheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h8v5H0m3-4H1v1l1 1H1v1h2V4L2 3h1m1 0h3V2H4"></svg:path>`,
})
export class PiconPaycheckIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPaypalIcon],svg[picon-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2q0 4-4 4v2H3V5q5 0 4-4M0 7V0h5q3 4-3 4v3"></svg:path>`,
})
export class PiconPaypalIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPcIcon],svg[picon-pc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8L7 6H1L0 8m6-4V1H2v3M1 5V0h6v5"></svg:path>`,
})
export class PiconPcIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPenIcon],svg[picon-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8H0V6m7-3L5 1l1-1l2 2M3 7L1 5l3-3l2 2"></svg:path>`,
})
export class PiconPenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPerlIcon],svg[picon-perl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4L6 8V4L5 8V4H4L3 8V4Q2 4 2 2q-3 0 0-1l1-1v3q2-4 5 1"></svg:path>`,
})
export class PiconPerlIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPhoneIcon],svg[picon-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7V1H5v.5H3V1H2v6m0 1L1 7V1l1-1h4l1 1v6L6 8"></svg:path>`,
})
export class PiconPhoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPhpIcon],svg[picon-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V1h1v2h1v2L4 4m3-1v2H6V1h2v2M1 3v2H0V1h2v2"></svg:path>`,
})
export class PiconPhpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPiIcon],svg[picon-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 2l1-1h7v1H6v3c0 1 1 2 2 0c0 3-3 3-3 0V2H3v5H2V2"></svg:path>`,
})
export class PiconPiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPianoIcon],svg[picon-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6V3c0-4 5-4 5 0c1 2 3 0 3 3H7v1.5H1V6m1 1h4V6H2"></svg:path>`,
})
export class PiconPianoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPickerIcon],svg[picon-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2L3 4.5l.5.5L6 3M1 8H0V7l5-6V0h3v3H7"></svg:path>`,
})
export class PiconPickerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPictureIcon],svg[picon-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3H2V2h1m0 3l3-3l1 4H1l1-2m6 3V1H0v6"></svg:path>`,
})
export class PiconPictureIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPicturesIcon],svg[picon-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 4l1-2l1 3H1l1-2m5 4V2h1v6H1V7m5-1V1H0v5"></svg:path>`,
})
export class PiconPicturesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPieIcon],svg[picon-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 4l3-3c1 1 2 7-3 7s-5-8 0-8"></svg:path>`,
})
export class PiconPieIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPigIcon],svg[picon-pig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5v1h1m2 1Q6 5 6 8H5Q3 6 1 8H0V5q0-3 4-3l2-2Q5 3 8 3"></svg:path>`,
})
export class PiconPigIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPiggyIcon],svg[picon-piggy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0C0 3 6 3 3 0m1 4H1v1h3m2-2H5v1h1m2 1Q6 4 6 8H5Q3 6 1 8H0V5q0-2 4-2l2-2q0 2 2 2"></svg:path>`,
})
export class PiconPiggyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPillIcon],svg[picon-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2c4-4 7-1 3 3L5 6c-4 4-7 1-3-3m3 2c4-4 2-6-2-2"></svg:path>`,
})
export class PiconPillIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPillsIcon],svg[picon-pills-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v.5h2V6M1 0v2h6V0M2 4v.5h2V4m2 4H2V2.5h4"></svg:path>`,
})
export class PiconPillsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPinIcon],svg[picon-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5L4 8V5H0q4-2 1-5h6Q4 3 8 5"></svg:path>`,
})
export class PiconPinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPineIcon],svg[picon-pine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8H3V6H0l3-2H0l3-2H1l3-2l3 2H5l3 2H5l3 2H5"></svg:path>`,
})
export class PiconPineIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPistonIcon],svg[picon-piston-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3l3-3l3 3l-3 3V5l2-2l-2-2l-2 2m0 3v1L1 8L0 7l1-2h1l3-3l1 1M1 6v1h1V6"></svg:path>`,
})
export class PiconPistonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPizzaIcon],svg[picon-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v1h1V5M0 8L4.5.5q2.5.5 3 3M4 1q3 0 3 3l1-.5Q8 0 4.5 0M4 3v1h1V3"></svg:path>`,
})
export class PiconPizzaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPlayIcon],svg[picon-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4L2 0v8"></svg:path>`,
})
export class PiconPlayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPlaylistIcon],svg[picon-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V7h6V3h1v5M0 6V0h6v6M2 1v4l2.5-2"></svg:path>`,
})
export class PiconPlaylistIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPlaystationIcon],svg[picon-playstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v1q-4 0 0-3v1L1 6m4 1l1-1H5V5q4 0 0 3M4 8L3 7V0q5 0 2 4V2L4 1"></svg:path>`,
})
export class PiconPlaystationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPlaystoreIcon],svg[picon-playstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5L5.5 4L7 3l1 1M6 5L0 8l5-3.5m0-1L0 0l6 3M0 8V0l4 4"></svg:path>`,
})
export class PiconPlaystoreIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPluginIcon],svg[picon-plugin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V6c2.5 0 2.5-2 0-2V2h2C2-.5 4-.5 4 2h2v2c2.5 0 2.5 2 0 2v2"></svg:path>`,
})
export class PiconPluginIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPlungerIcon],svg[picon-plunger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7C0 3 8 3 7 7M3 6V0h2v6M0 8V7h8v1"></svg:path>`,
})
export class PiconPlungerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPlusIcon],svg[picon-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5V4h5v1M3 7V2h1v5"></svg:path>`,
})
export class PiconPlusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPlus1Icon],svg[picon-plus1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1L5 3V2l2-2h1v8H7M5 5H0V4h5M2 7V2h1v5"></svg:path>`,
})
export class PiconPlus1Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPodiumIcon],svg[picon-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6V3h2V1h4v2h2v3M4.5 4V2H3l1 1v1"></svg:path>`,
})
export class PiconPodiumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPokeballIcon],svg[picon-pokeball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5.25 8-5.25 8 0S0 9.25 0 4m1 0c0 4 6 4 6 0H6Q4 1 2 4m1 0l1-1l1 1l-1 1"></svg:path>`,
})
export class PiconPokeballIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPostIcon],svg[picon-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1V0h1v1M3 8V5h1v3M1 4V2h5l1 1l-1 1"></svg:path>`,
})
export class PiconPostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPowerIcon],svg[picon-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1c3 0 3 7-2 7s-5-7-2-7v1C0 2 0 7 4 7s4-5 2-5M3 0h2v4H3"></svg:path>`,
})
export class PiconPowerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPrayIcon],svg[picon-pray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v2H2V0m0 8l1-1h3v-.5H2V2l1 1h2V1h1v3H4L3 5h3l1 1v2"></svg:path>`,
})
export class PiconPrayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPresentationIcon],svg[picon-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6V2Q0 2 0 0h8q0 2-1 2v4M4 6C2 8 6 8 4 6"></svg:path>`,
})
export class PiconPresentationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPressureIcon],svg[picon-pressure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h2v3H3m0 1h2v1H3M2 1c-4 7 8 7 4 0l1-1q3 4-1 8L5 7L4 8L3 7L2 8q-4-4-1-8"></svg:path>`,
})
export class PiconPressureIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPreviousIcon],svg[picon-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V0H1v8m2-4l4-4v8"></svg:path>`,
})
export class PiconPreviousIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPrinterIcon],svg[picon-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1v1h2V1M2 7V5h1v1h2V5h1v2m1-2V4H1v1H0V2h2V0h4v2h2v3"></svg:path>`,
})
export class PiconPrinterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconProfileIcon],svg[picon-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8c-5.5 0-5.5-8 0-8s5.5 8 0 8m3-3Q4 3 1 5c0 3 6 3 6 0M4 0L2 2l2 2l2-2"></svg:path>`,
})
export class PiconProfileIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconProposalIcon],svg[picon-proposal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6H3v2H0V7h2V2h5v1H4v2h2v3H5M3 2L2 1l1-1l1 1"></svg:path>`,
})
export class PiconProposalIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconProtectIcon],svg[picon-protect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1l1 1v3l1 1V4l1 1v3H2L0 6m8-5v5L6 8H5V5l1-1v2l1-1V2M2 2l2-2l2 2l-2 2"></svg:path>`,
})
export class PiconProtectIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPspIcon],svg[picon-psp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c2.5 0 2.5 4 0 4H2C-.5 6-.5 2 2 2m0 3.5h4v-3H2M2 4L1 3L0 4l1 1m6 0l1-1l-1-1l-1 1"></svg:path>`,
})
export class PiconPspIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPuppyIcon],svg[picon-puppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5L4 7L3 5l1-1m1-1V2h1v1M3 3H2V2h1m4 1L5 0h3M3 7h2l2-4l-2 5H3L1 3m0 0L0 0h3"></svg:path>`,
})
export class PiconPuppyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPyramidIcon],svg[picon-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 6l4-6l4 6l-4 2m0-7v6l3-1"></svg:path>`,
})
export class PiconPyramidIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconPythonIcon],svg[picon-python-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l1 1v2H4v1h2L5 7H3V4h4M2 1l1-1h3v3H2v3L1 5V2h4V1"></svg:path>`,
})
export class PiconPythonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconQrcodeIcon],svg[picon-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v3h5V0M0 3v5h3V3M0 5V0h5v5m2 2V4H4v3m3-6v1H6V1M2 2V1H1v1m0 5V6h1v1"></svg:path>`,
})
export class PiconQrcodeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconQuadcopterIcon],svg[picon-quadcopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2L6 4v1l1 3H6L5 5L4 6L3 5L2 8H1l1-3V4L1 2h1v1h4V2m2 0H5V1h3M3 2H0V1h3"></svg:path>`,
})
export class PiconQuadcopterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconQuestionIcon],svg[picon-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h5v1H4v1h3V1H1m3 5h1v1H4"></svg:path>`,
})
export class PiconQuestionIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconQuietIcon],svg[picon-quiet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6q2-2 0-4M0 5V3h2l2-2v6L2 5"></svg:path>`,
})
export class PiconQuietIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRabbitIcon],svg[picon-rabbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8H5q1-3-2-3q2 1 1 3H0q0-5 4-5q0-1-3-1q3-2 4-1c4 0 4 4 0 3m1-1h1V2H6"></svg:path>`,
})
export class PiconRabbitIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRadioIcon],svg[picon-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h1l6-3h1L2 3h6v5H0m1-3h6V4H1m3 4l1.5-1.5L4 5L2.5 6.5"></svg:path>`,
})
export class PiconRadioIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRadioactifIcon],svg[picon-radioactif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V3h2v2M2 8l2-4l2 4m2-4H4l2-4M4 4H0l2-4"></svg:path>`,
})
export class PiconRadioactifIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRainIcon],svg[picon-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5C0 5-1 2 2 2c0-3 4-2 4-1c3 1 2 4 0 4M1 6h1v2H1m2-3h1v2H3m2-1h1v2H5"></svg:path>`,
})
export class PiconRainIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRainbowIcon],svg[picon-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7c0-8 8-8 8 0H5c1-3-3-3-2 0m4 0C7 .5 1 .5 1 7h1c0-5 4-5 4 0"></svg:path>`,
})
export class PiconRainbowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRamIcon],svg[picon-ram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5V4H4v1H0V4q2-1 0-2V1h8v1Q6 3 8 4v1"></svg:path>`,
})
export class PiconRamIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRatIcon],svg[picon-rat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2c0-4 5 0 2 1c2 6-8 6-6 0c-3-1 2-5 2-1m0 2Q2 2 2 4m4 0q0-2-1 0M3 7h2V6H3"></svg:path>`,
})
export class PiconRatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRazorIcon],svg[picon-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3V1h8v2L3 8L2 7l5-5H4L3 3"></svg:path>`,
})
export class PiconRazorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconReadIcon],svg[picon-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v5l3-1V1M1 1v5l2 1V2m5 5L3.5 8L0 7V0l3.5 1L8 0"></svg:path>`,
})
export class PiconReadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconReceiveIcon],svg[picon-receive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 5l2-2q5 0 1 1q-2 1 2 1q6-4 0 2H0"></svg:path>`,
})
export class PiconReceiveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRecycleIcon],svg[picon-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6h6L4 1M0 6l3.5-6h1L8 6v1H0m4-3l3-3v3M3 5L0 2h3m2 3v3L3 6.5"></svg:path>`,
})
export class PiconRecycleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRedditIcon],svg[picon-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1c3 3 2-2 1 0H4v2c-5 0-5 5 0 5s5-5 0-5M2 5c1-2 2 2 0 0c-1-3.5-4 0 0 1m4 0c4.5-1 0-4.5 0-1c-2 2-1-2 0 0"></svg:path>`,
})
export class PiconRedditIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRedhatIcon],svg[picon-redhat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5C6 9-1 3 1 3q4 3 6 1m-.5 0Q5 5 2 3l.5-2Q4 2 4 1l2 1"></svg:path>`,
})
export class PiconRedhatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRefreshIcon],svg[picon-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 3l1 2H7c0 4-6 4-6 1h1c0 2 4 2 4-1H5m2-3c0-3-6-3-6 1H0l1 2l2-2H2c0-3 4-3 4-1"></svg:path>`,
})
export class PiconRefreshIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconReloadIcon],svg[picon-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0v4H4l2-2c-6-5-7 9 0 4l1 1c-9 5-9-11 0-6"></svg:path>`,
})
export class PiconReloadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRepeatIcon],svg[picon-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h4V4H6v2H3V5L1 6.5L3 8m4-6.5L5 0v1H1v3h1V2h3v1"></svg:path>`,
})
export class PiconRepeatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRepeat1Icon],svg[picon-repeat1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h4V4H6v2H3V5L1 6.5L3 8m0-4h1v1h1V3H4m3-1.5L5 0v1H1v3h1V2h3v1"></svg:path>`,
})
export class PiconRepeat1Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRevertIcon],svg[picon-revert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4V2h1v3H2l1-1M1 2c0-3 7-3 7 2S1 9 1 6h1c0 2 5 2 5-2S2 0 2 2h1L1.5 4L0 2"></svg:path>`,
})
export class PiconRevertIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRevolverIcon],svg[picon-revolver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 5l1-1V3L0 2h8v1H5v1L3 5v2H0m3-3h1V3H3"></svg:path>`,
})
export class PiconRevolverIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRewindIcon],svg[picon-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 4l4-4v8"></svg:path>`,
})
export class PiconRewindIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRfidIcon],svg[picon-rfid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h2V2H4v1H3M1 1v6h6V1M2 6V2h4v4"></svg:path>`,
})
export class PiconRfidIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRiceIcon],svg[picon-rice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3c0-4 6-4 6 0c-1-3-5-3-6 0m1 5l1-1Q0 6 0 3h8q0 3-3 4l1 1"></svg:path>`,
})
export class PiconRiceIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRightIcon],svg[picon-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 2l2 2l-2 2l1 1l3-3l-3-3"></svg:path>`,
})
export class PiconRightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRightdoubleIcon],svg[picon-rightdouble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 2l2 2l-2 2l1 1l3-3l-3-3m3 1l2 2l-2 2l1 1l3-3l-3-3"></svg:path>`,
})
export class PiconRightdoubleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRightmostIcon],svg[picon-rightmost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v6h1V1M2 2l2 2l-2 2l1 1l3-3l-3-3"></svg:path>`,
})
export class PiconRightmostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRightwardIcon],svg[picon-rightward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H0v4h4v2l4-4l-4-4"></svg:path>`,
})
export class PiconRightwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRiseIcon],svg[picon-rise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 5l3-3l1 1l1.5-1.5L4 0h4v4L6.5 2.5L4 5L3 4L1 6"></svg:path>`,
})
export class PiconRiseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRjIcon],svg[picon-rj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h2l1-2h2l1 2h2v6H0m1.5-1H2V5h-.5m3 2H5V5h-.5M6 7h.5V5H6M3 7h.5V5H3"></svg:path>`,
})
export class PiconRjIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRoadIcon],svg[picon-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l2-8h3l2 8M4 3V1H3v2m1 4V5H3v2"></svg:path>`,
})
export class PiconRoadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRoadworkIcon],svg[picon-roadwork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7V1h1v6M1 7V1h1v6M0 4V2h8v2"></svg:path>`,
})
export class PiconRoadworkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRobotIcon],svg[picon-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V4H2v1m4 0V4H5v1M0 7c0-7 8-7 8 0M4 4L1 0h1l2 3l2-3h1"></svg:path>`,
})
export class PiconRobotIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRocketIcon],svg[picon-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4L1 7l3-2m2-3H5v1h1M3 6L0 8l2-3H0l1-2h1l2-2l4-1l-1 4l-2 2v1L3 8"></svg:path>`,
})
export class PiconRocketIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRollIcon],svg[picon-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c0-4 3-4 3 0S5 7 5 3m0-3C3 0 5 8 3 8H0c1 0 0-8 1-8m5 4h1V2H6"></svg:path>`,
})
export class PiconRollIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRollerIcon],svg[picon-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2V1h2v4H4v3H2V4h5V2M0 3V0h6v3"></svg:path>`,
})
export class PiconRollerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRollerbladeIcon],svg[picon-rollerblade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 6l2 2l2-2l2 2l1-1l-1-1l-2 2l-2-2l-2 2l-1-1m1-7h3v2q4 0 3 3H1"></svg:path>`,
})
export class PiconRollerbladeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRostrumIcon],svg[picon-rostrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8L1 2l1-2h1L2 2h5L6 0h1l1 2l-1 6M4 2V0h1v2"></svg:path>`,
})
export class PiconRostrumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRouterIcon],svg[picon-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3c1-3-4-3-3 0c-4-4 7-4 3 0M6 6H5v1h1M4 6H3v1h1M2 6H1v1h1M0 8V5h5V2h1v3h2v3"></svg:path>`,
})
export class PiconRouterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRssIcon],svg[picon-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0q8 0 8 8H7q0-7-7-7m0 2q4 0 5 5H4Q3 4 0 4m0 4V6h2v2"></svg:path>`,
})
export class PiconRssIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRtlIcon],svg[picon-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v1H3V6m5-2v1H1V4m7-2v1H4V2m4-2v1H2V0"></svg:path>`,
})
export class PiconRtlIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRubyIcon],svg[picon-ruby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1L1 3h1m3-2v2h2M2 3l2 3l1-3M4 7L0 3l2-2h4l2 2"></svg:path>`,
})
export class PiconRubyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRugbyIcon],svg[picon-rugby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7q0-7 7-7l1 1q0 7-7 7m5-7Q1 1 1 6m1 1q5 0 5-5"></svg:path>`,
})
export class PiconRugbyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconRunIcon],svg[picon-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3L4 5h2v3H5V6H3v1H0V6h2l1-3H2v1H1V2h4l1-1l-1-1l-1 1l2 2h2v1H5"></svg:path>`,
})
export class PiconRunIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSadIcon],svg[picon-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h2l1 1H2m3-2V2h1v2M0 8h8V0H0m2 4V2h1v2M1 7V1h6v6"></svg:path>`,
})
export class PiconSadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSafeIcon],svg[picon-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v1H1V7H0V0h7v7H6v1H5V7M4 3c4-2-5-2-1 0v2h1"></svg:path>`,
})
export class PiconSafeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSatelliteIcon],svg[picon-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 5l4-4l1 1l-4 4v2L0 5m2-3l4 4l1-1l-4-4M1 2l2-2l5 5l-2 2"></svg:path>`,
})
export class PiconSatelliteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSawIcon],svg[picon-saw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2l6 6l-2 2V6L4 7V5L2 6V4L0 5m1-4v2h1V1"></svg:path>`,
})
export class PiconSawIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSaxIcon],svg[picon-sax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5L4 4h2m1 0L5 3h2M3 6h2l1-1l1 3H5L1 7V6l4-4l-1-1V0l3 2"></svg:path>`,
})
export class PiconSaxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconScaleIcon],svg[picon-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0c0 3-8 3-8 0m3 4V2h2v2M0 8c0-6 8-6 8 0M7 7c0-4-6-4-6 0m2 0L2 5l3 2"></svg:path>`,
})
export class PiconScaleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconScanIcon],svg[picon-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v1H0V4m3-4v1H1v2H0V0m5 1V0h3v3H7V1m0 5v1H5v1h3V6M1 6v1h2v1H0V6"></svg:path>`,
})
export class PiconScanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconScannerIcon],svg[picon-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V7H0V5h8v2H7v1m1-3L0 1V0l8 4M2 5L1 6l1 1l1-1"></svg:path>`,
})
export class PiconScannerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconScooterIcon],svg[picon-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8L5 7l1-1l1 1M3 1H0V0h3M2 8L1 7l1-1l1 1M1 6V1h1v4h5v1"></svg:path>`,
})
export class PiconScooterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconScreenIcon],svg[picon-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2H1v3m1 2l1-1H0V1h8v5H5l1 1"></svg:path>`,
})
export class PiconScreenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconScrewIcon],svg[picon-screw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v1l2-2M3 4v1l2-2M3 2v1l2-2m0 6L4 8L3 7V1L1 0h6L5 1"></svg:path>`,
})
export class PiconScrewIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconScriptIcon],svg[picon-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V2H1v2H0V0h7v5H3v2h1V6h4v2"></svg:path>`,
})
export class PiconScriptIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSdIcon],svg[picon-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6V1h2l1 1v3L6 6M5 2v3h1V2M1 6L0 5h2L0 2l1-1h1l1 1H1l2 3l-1 1"></svg:path>`,
})
export class PiconSdIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSdcardIcon],svg[picon-sdcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v2h1V1M2 2v2h1V2m1-1v2h1V1M1 8V2l2-2h5v8"></svg:path>`,
})
export class PiconSdcardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSeatIcon],svg[picon-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 6l2 2H2l2-2H2L1 0h2l1 2h2v1H4v1h3v2"></svg:path>`,
})
export class PiconSeatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSeatbeltIcon],svg[picon-seatbelt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 1l1-1l1 1l-1 1m4-2v1L1 8H0m4-3h5v1H3m3 2c2-8-6-8-4 0m1-1h2v1H3"></svg:path>`,
})
export class PiconSeatbeltIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSelectboxIcon],svg[picon-selectbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3V0h8v3M4 1l1.5 2L7 1M2 5V4h4v1M2 7V6h4v1M1 3v5h6V3"></svg:path>`,
})
export class PiconSelectboxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSemicolonIcon],svg[picon-semicolon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3V2h1v1m0 4H3l1-1V5h1"></svg:path>`,
})
export class PiconSemicolonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSendIcon],svg[picon-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 0l8 3.5L0 7l1-3q5-.5 0-1"></svg:path>`,
})
export class PiconSendIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconServerIcon],svg[picon-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V6h8v2M5 7l1 1l1-1l-1-1M5 1l1 1l1-1l-1-1M5 4l1 1l1-1l-1-1M0 5V3h8v2M0 2V0h8v2"></svg:path>`,
})
export class PiconServerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconServingIcon],svg[picon-serving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h7v.5H1M2 3c0-3 5-3 5 0M4 0h1v1H4M2 5h1l1 1l3-1h1L5 7v1H3V7"></svg:path>`,
})
export class PiconServingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSewingIcon],svg[picon-sewing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V5h5V2H3v1H1V0h6v1h1v2H7v4"></svg:path>`,
})
export class PiconSewingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShakeIcon],svg[picon-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 4l1-1l-2-2H2L0 0v4l1 1l2-2m5 2v1L6 8H5M0 5v2l4 1l4-4V0L6 1L3 0l3 3l-2 2l-1-1l-2 2"></svg:path>`,
})
export class PiconShakeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSharkIcon],svg[picon-shark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 7l1-3l-1-3l2 2c4 1 0-5 4 0q5 2-4 2"></svg:path>`,
})
export class PiconSharkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShaverIcon],svg[picon-shaver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3V0h8v3H5v5H3V3M1 1v1h6V1"></svg:path>`,
})
export class PiconShaverIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShieldIcon],svg[picon-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v3q2 0 3-3M4 4V1L1 2v2m3-4l4 2c0 8-8 8-8 0"></svg:path>`,
})
export class PiconShieldIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShipIcon],svg[picon-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 6l1-2H3V2H1v2H0l1 2"></svg:path>`,
})
export class PiconShipIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShoeIcon],svg[picon-shoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6H1L0 3l1-2l4 3l3 1l-1 1H4L2 4"></svg:path>`,
})
export class PiconShoeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShopIcon],svg[picon-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1.5V1h4v.5M2 5v2h2V5M1 8V5H0l2-3h4l2 3H7v3H6V5H5v3"></svg:path>`,
})
export class PiconShopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShoppingIcon],svg[picon-shopping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2V0h4v2H5V1H3v1m2 1v1h1V3M2 3v1h1V3M1 8L0 7V2h8v5L7 8"></svg:path>`,
})
export class PiconShoppingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShovelIcon],svg[picon-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4L1 0L0 1l4 4l3 2M3 6l3-3l2 2v3H5"></svg:path>`,
})
export class PiconShovelIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShowerIcon],svg[picon-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v1h4V6M4 4v1h4V4m0 4H7V4h1M6 8H5V3h1M1 8V1l2 1h2L3 5V2L2 3v5"></svg:path>`,
})
export class PiconShowerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShrimpIcon],svg[picon-shrimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0q0 3-4 3C1 3 1 7 4 7l3-1l1 2H4c-5 0-5-7 0-8m1 2h1V1H5m1 1l2 2l-1-2.5L6 5"></svg:path>`,
})
export class PiconShrimpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShrineIcon],svg[picon-shrine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2L4 4l-.5-2M5 7V2h1v6M2 8V2h1v5M1 4V3h6v1M1 2L0 0l4 1l4-1l-1 2"></svg:path>`,
})
export class PiconShrineIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShrinkIcon],svg[picon-shrink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3H5V0h1v2h2M2 8V6H0V5h3v3"></svg:path>`,
})
export class PiconShrinkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShuffleIcon],svg[picon-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1H0v1h2.5M8 5.5L6 4v1H4.5L4 6h2v1m2-5.5L6 0v1H4L2 5H0v1h3l2-4h1v1"></svg:path>`,
})
export class PiconShuffleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconShutterIcon],svg[picon-shutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0q2 0 2 2L5 4m0 1l3-2v2M4 5l4 1q0 2-2 2M3 5l2 3H3M2 8Q0 8 0 6l3-2M0 3h3L0 5m0-3q0-2 2-2l2 3M3 0h2v3"></svg:path>`,
})
export class PiconShutterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSidelistIcon],svg[picon-sidelist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0h3v8H5M0 0h4v2H0m0 1h4v2H0m0 1h4v2H0"></svg:path>`,
})
export class PiconSidelistIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSidenavIcon],svg[picon-sidenav-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h5v8H3M0 0h2v2H0m0 1h2v2H0m0 1h2v2H0"></svg:path>`,
})
export class PiconSidenavIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSilverwareIcon],svg[picon-silverware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8V5Q4 1 8 0v8M3 3V0H2v3H1V0H0v4l2 1v3h1V5l2-1V0H4v3"></svg:path>`,
})
export class PiconSilverwareIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSimIcon],svg[picon-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V0h4l3 3v5M3 3h3v3H3M2 5h5V4H2m0 3h1V2H2m4 5h1V2H6M4 7h1V2H4"></svg:path>`,
})
export class PiconSimIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSinkIcon],svg[picon-sink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 8l1-3Q0 5 0 2h8q0 3-3 3l1 3M3 2V0h1v2m2 0V1h1v1M1 2V1h1v1"></svg:path>`,
})
export class PiconSinkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSizeIcon],svg[picon-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7V5H4V4h3v1H6v2M2 2H0V1h5v1H3v5H2"></svg:path>`,
})
export class PiconSizeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSkateIcon],svg[picon-skate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4L3 6H2l1-3H1V2h6v1H5l1 3H5M4 2L3 1l1-1l1 1M0 6.5h8L7 7Q6 9 5 7H3Q2 9 1 7"></svg:path>`,
})
export class PiconSkateIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSkiIcon],svg[picon-ski-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8L0 5V4l6 3h2v1M5 7L4 6l1-1l-4-2V2h5l2 2l-5-1l4 2M6 2V0h2v2"></svg:path>`,
})
export class PiconSkiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSkullIcon],svg[picon-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4H5v2h2M1 4v2h2V4m5 3H6v1H2V7H0V3q0-3 4-3t4 3"></svg:path>`,
})
export class PiconSkullIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSlashIcon],svg[picon-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h2V1h1v2H4v4H3"></svg:path>`,
})
export class PiconSlashIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSmartwatchIcon],svg[picon-smartwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6V2H2v4m3 1v1H3V7H2L1 6V2l1-1h1V0h2v1h1l1 1v4L6 7"></svg:path>`,
})
export class PiconSmartwatchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSmookingIcon],svg[picon-smooking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3Q2 3 4 0v2q3 0 1 2m2 0q0-3-2-3V0q3 0 3 4m0 3V5H7v2M0 7V5h6v2"></svg:path>`,
})
export class PiconSmookingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSnookerIcon],svg[picon-snooker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m5-3H2v5h3M4 5L3 2h1L3 5"></svg:path>`,
})
export class PiconSnookerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSnowboardIcon],svg[picon-snowboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6L4 5H1L0 4h3l2-2l2 1l-2 1l2 2l-2 2l-1-1m0 1L0 5V4l6 4m2-4L3 1l1-1l4 3M6 2V0h2v2"></svg:path>`,
})
export class PiconSnowboardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSofaIcon],svg[picon-sofa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V4h1v1M0 5V4h1v1m0 3V6h6v2H6V7H2v1m4-3H2V2l1-1h2l1 1"></svg:path>`,
})
export class PiconSofaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSoupIcon],svg[picon-soup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1H0l2 3h1m0-3H2l2 3h1m3 0c0 5-8 5-8 0"></svg:path>`,
})
export class PiconSoupIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSouthIcon],svg[picon-south-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3l2 2l2-2"></svg:path>`,
})
export class PiconSouthIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSpeakerIcon],svg[picon-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c0-3 4-3 4 0S2 8 2 5M1 8h6V0H1m2 2V1h2v1M3 5l1-1l1 1l-1 1"></svg:path>`,
})
export class PiconSpeakerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSpellcheckIcon],svg[picon-spellcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7h6V6H6v2H5V6H4v2H3V6H2v2H1m1-3V0h4v5H5V3H3v2m0-4v1h2V1"></svg:path>`,
})
export class PiconSpellcheckIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSphereIcon],svg[picon-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m4-3Q1 1 1 4q1-2 3-2"></svg:path>`,
})
export class PiconSphereIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSpinnerIcon],svg[picon-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5.25 8-5.25 8 0S0 9.25 0 4c1 5 7 4 7 0S1 0 1 4"></svg:path>`,
})
export class PiconSpinnerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSpinner2Icon],svg[picon-spinner2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2.5C1-1 8-1 8 4S1 9 0 5.5L1 5c0 3 6 3 6-1S1 0 1 3"></svg:path>`,
})
export class PiconSpinner2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSplitIcon],svg[picon-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h2v2l2 2l1-1v3H5l1-1l-2-2l-2 2l1 1H0V3l1 1l2-2"></svg:path>`,
})
export class PiconSplitIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSprayIcon],svg[picon-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3v1h1V3m0-2H5v1h3M7 1H6v2h1M3 1h5v5M1 2V0h2v2M0 8V4l1-1h2l1 1v4"></svg:path>`,
})
export class PiconSprayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconStackIcon],svg[picon-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 0l4 2l-4 2l-4-2m0 1l4 2l4-2v1L4 6L0 4m0 1l4 2l4-2v1L4 8L0 6"></svg:path>`,
})
export class PiconStackIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconStackedIcon],svg[picon-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V6h8v2M0 5V3h8v2M0 2V0h8v2"></svg:path>`,
})
export class PiconStackedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconStackoverflowIcon],svg[picon-stackoverflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h2l2 2v1M2 3V2l4 1v1M2 6V5h4v1M0 8V4h1v3h6V4h1v4"></svg:path>`,
})
export class PiconStackoverflowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconStampIcon],svg[picon-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4h3V2q-4-1 1-2q5 1 1 2v2h3v2H0m1 1h6v1H1"></svg:path>`,
})
export class PiconStampIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconStarIcon],svg[picon-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h8L4 5M1 7l3-7l3 7l-3-2"></svg:path>`,
})
export class PiconStarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSteadycamIcon],svg[picon-steadycam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 4l2-1v4L6 6M0 7V1h5v1H1v1h4v4M1 5h3V4H1"></svg:path>`,
})
export class PiconSteadycamIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSteamIcon],svg[picon-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v1h1V4m2-3L5 2l1 1l1-1M2 7L0 5V3l2 2l2-3l2-2l2 2l-2 2"></svg:path>`,
})
export class PiconSteamIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconStopIcon],svg[picon-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8V0H0v8"></svg:path>`,
})
export class PiconStopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconStraightenIcon],svg[picon-straighten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 3l5-1l1 3l-5 1M0 1h8v1H0m0 4h8v1H0"></svg:path>`,
})
export class PiconStraightenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconStrollerIcon],svg[picon-stroller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 3l1-3H2c-6 6 6 8 6 3M3 8L2 7l1-1l1 1m2 1L5 7l1-1l1 1"></svg:path>`,
})
export class PiconStrollerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconStudentIcon],svg[picon-student-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h1v4m1-1V4h4v2M0 3l4-2l4 2l-4 2"></svg:path>`,
})
export class PiconStudentIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconStyloIcon],svg[picon-stylo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 7.5L0 8l.5-1.5M7 2L6 1l1-1l1 1M2 7L1 6l4.5-4.5l1 1"></svg:path>`,
})
export class PiconStyloIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSublimtextIcon],svg[picon-sublimtext-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 2l6-2v2L4 3l3 1v2L1 8V6l3-1l-3-1"></svg:path>`,
})
export class PiconSublimtextIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSubtitleIcon],svg[picon-subtitle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V0h8v8M5 5V4H1v1m6 2V6H3v1m4-2V4H6v1M2 7V6H1v1"></svg:path>`,
})
export class PiconSubtitleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSunIcon],svg[picon-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 3l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1m1-3l3 2l3-2l-2 3l2 3l-3-2l-3 2l2-3"></svg:path>`,
})
export class PiconSunIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSunglassesIcon],svg[picon-sunglasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2Q7 8 4 3Q1 8 0 2"></svg:path>`,
})
export class PiconSunglassesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSunriseIcon],svg[picon-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 2l2-2l2 2M0 8V7h8v1M0 6l2-1l-1-2l2 1l1-1l1 1l2-1l-1 2l2 1"></svg:path>`,
})
export class PiconSunriseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSunsetIcon],svg[picon-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 0l2 2l2-2M0 8V7h8v1M0 6l2-1l-1-2l2 1l1-1l1 1l2-1l-1 2l2 1"></svg:path>`,
})
export class PiconSunsetIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSwiftIcon],svg[picon-swift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l2-3l-1-2l3-3l-2 3l1 1l5-4l-4 5l1 1l3-2l-3 3l-2-1"></svg:path>`,
})
export class PiconSwiftIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSwimIcon],svg[picon-swim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4V2h2v2M3 4L1 5l2-5h4v1H4M0 8V7l2-1l2 1l2-1l2 1v1M2 5L0 6V5l2-1l2 1l2-1l2 1v1L6 5L4 6"></svg:path>`,
})
export class PiconSwimIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSwitchIcon],svg[picon-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5v1H6v2L3 5.5L6 3v2M2 2H0v1h2v2l3-2.5L2 0"></svg:path>`,
})
export class PiconSwitchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconSwordIcon],svg[picon-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8L0 7l2-2l-2-2h1l2 1l3-3l2-1l-1 2l-3 3l1 2v1L3 6"></svg:path>`,
})
export class PiconSwordIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTabIcon],svg[picon-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V5l1-2h3l1 2h3v3"></svg:path>`,
})
export class PiconTabIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTabletennisIcon],svg[picon-tabletennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 2l1 1l1-1l-1-1m7 2C8-.5 3-.5 3 3s5 3.5 5 0M2 7l1.5-1.5l-1-1L1 6"></svg:path>`,
})
export class PiconTabletennisIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTaekwondoIcon],svg[picon-taekwondo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V5L1 4v1h1v1H0V4l3-3l2-1v1L3 2l1 1l3-3v1.5l-3 3V8M0 1c1-2 3 0 1 1"></svg:path>`,
})
export class PiconTaekwondoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTagIcon],svg[picon-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3V0h1v3M2 8V6h1v2m5-6L4 6H1V4l4-4M2 4v1h1V4"></svg:path>`,
})
export class PiconTagIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTakeoffIcon],svg[picon-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7h8v1M1 5L0 3h1l1 1l2-1l-2-2h1l2 1l2-1h1v1L2 5"></svg:path>`,
})
export class PiconTakeoffIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTakeoutIcon],svg[picon-takeout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8L1 4L0 1V0l2 2l1-2h2l1 2l2-2v1L7 4L6 8M2 2L1 3.5h6L6 2"></svg:path>`,
})
export class PiconTakeoutIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTaxiIcon],svg[picon-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5L5 6h2V5M1 5v1h2L2 5m0-3L1 4h6L6 2M0 8V3l1-2h1.5L3 0h2l.5 1H7l1 2v5H6V7H2v1"></svg:path>`,
})
export class PiconTaxiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTeaIcon],svg[picon-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v2L1 3l1 1l1.5-1l-1-1V0M5 2v1h1V2M0 8V7h7v1M0 6V0h5v1c3 0 3 3 0 3v2"></svg:path>`,
})
export class PiconTeaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTelIcon],svg[picon-tel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H6v5h2V6H7M2 1H1v6h1m1-7H0v1h3m2 4H4v1h1v1H3V2h2v1H4v1h1"></svg:path>`,
})
export class PiconTelIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTelescopeIcon],svg[picon-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 0l3 3l-7 3.5L0 5m4.5-1L7 8H6L5 6v2H4V6L3 8H2"></svg:path>`,
})
export class PiconTelescopeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTemperatureIcon],svg[picon-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h1l1 1H4v1l1 1H4v1c3 2.5-4 2.5-1 0M0 6l3 1l3-1l2 1v1L6 7L3 8L0 7"></svg:path>`,
})
export class PiconTemperatureIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTennisIcon],svg[picon-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2L0 1l1-1l1 1M1 8L0 7l2-2C3-5 14 4 3 6m1-1c6-2 1-7-1-1"></svg:path>`,
})
export class PiconTennisIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTestIcon],svg[picon-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1L0 5V1m0 6h8V3M7 8L3 0h4M1 0v8h4M2 6V5h1v1m3-3V2H5v1"></svg:path>`,
})
export class PiconTestIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTetrisIcon],svg[picon-tetris-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V6h4V4h2v4M0 4V2h2V0h4v2H4v2"></svg:path>`,
})
export class PiconTetrisIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconThermometerIcon],svg[picon-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v1h1V1M4 4C0 8 9 8 5 4V1H4m2 3c4 5-7 5-3 0V0h4v3H6"></svg:path>`,
})
export class PiconThermometerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconThrowIcon],svg[picon-throw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 1l1-1l1 1l-1 1M2 3l3-1h2l1 2.5H6L5 3m1 2h2v4L7 6L6 9M0 4l1 3h2l1-3l-1 4H1m1-4h1v1H2"></svg:path>`,
})
export class PiconThrowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconThumbdownIcon],svg[picon-thumbdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V1h1v4m3 0l1 3H4L2 5V1q6-1 5 4"></svg:path>`,
})
export class PiconThumbdownIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconThumbupIcon],svg[picon-thumbup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V3h1v4m1-4l1-3h1v3h3q1 5-5 4"></svg:path>`,
})
export class PiconThumbupIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconThunderboltIcon],svg[picon-thunderbolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 0l4 4H2l4 4"></svg:path>`,
})
export class PiconThunderboltIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconThundercloudIcon],svg[picon-thundercloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5C0 5-1 2 2 2c0-3 4-2 4-1c3 1 2 4 0 4M4 4v4l1-2H3"></svg:path>`,
})
export class PiconThundercloudIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTicketIcon],svg[picon-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h1V4H3m0 2v1h1V6M3 2v1h1V2m4 1l-1 .5v1L8 5v2H0V5l1-.5v-1L0 3V1h8"></svg:path>`,
})
export class PiconTicketIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTieIcon],svg[picon-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1V0h2v1M4 8L2 6l1-4h2l1 4"></svg:path>`,
})
export class PiconTieIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTileIcon],svg[picon-tile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7V4h3v3M0 7V4h3v3m1-4V0h3v3M0 3V0h3v3"></svg:path>`,
})
export class PiconTileIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTimerIcon],svg[picon-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5c0-5 8-5 8 0c0 4-8 4-8 0m2-5h4v1H2m5 0h1v1H7M0 1h1v1H0m4 3h3L5 4L4 1"></svg:path>`,
})
export class PiconTimerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTimesIcon],svg[picon-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1l1-1l7 7l-1 1M1 8L0 7l7-7l1 1"></svg:path>`,
})
export class PiconTimesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTmIcon],svg[picon-tm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4V1h1l1 1l1-1h1v3H7V2L6 3L5 2v2M1 4V2H0V1h3v1H2v2"></svg:path>`,
})
export class PiconTmIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconToastIcon],svg[picon-toast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V4q-3-4 3-4t3 4v4"></svg:path>`,
})
export class PiconToastIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTodoIcon],svg[picon-todo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h6L5 1H1v6h6V5l1-1v4H0m2-6l2 2l4-4v2L4 6L2 4"></svg:path>`,
})
export class PiconTodoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconToiletIcon],svg[picon-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6V1h2v3h4q0 2-2 2l1 2H2V6"></svg:path>`,
})
export class PiconToiletIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconToolboxIcon],svg[picon-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h8v1H0m3-3h2v1H3m0 3h2v1H3M0 7h8V2H6V0H2v2H0"></svg:path>`,
})
export class PiconToolboxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTorchIcon],svg[picon-torch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h5l2-1h1v4H7L5 5H0m3-2L2 4l1 1l1-1"></svg:path>`,
})
export class PiconTorchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTornadoIcon],svg[picon-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4L1 3h4l1 1M4 6L3 5h4v1M0 2V1h7L6 2M3 8l1-1h2L5 8"></svg:path>`,
})
export class PiconTornadoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTouchIcon],svg[picon-touch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h1l2 2V0h1v3l4 2l-1 3H3"></svg:path>`,
})
export class PiconTouchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTrafficIcon],svg[picon-traffic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 8l1-1l-1-1l-1 1m2-3L4 3L3 4l1 1m1-4L4 0L3 1l1 1M2 8L0 5h2L0 2h2L0 0h8L6 2h2L6 5h2L6 8"></svg:path>`,
})
export class PiconTrafficIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTrainIcon],svg[picon-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v1h1V3M2 3v1h1V3M2 1v1h4V1M3 5L0 8V7l2-2l-1-1V1l1-1h4l1 1v3L6 5l2 2v1L5 5"></svg:path>`,
})
export class PiconTrainIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTramIcon],svg[picon-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6v1h1V6M3 1v1h2V1M1 6v1h1V6M1 0v1h6V0M1 3v2h6V3M1 8L0 7V3l1-1h6l1 1v4L7 8"></svg:path>`,
})
export class PiconTramIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTranslateIcon],svg[picon-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0q0 4-4 4V3q3 0 3-2H0V0m7 4H5v1h2M4 8V5c0-3 4-3 4 0v3H7V6H5v2"></svg:path>`,
})
export class PiconTranslateIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTransportIcon],svg[picon-transport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v6h8V1M5 6V3l2 1.5M1 6V2h6v4"></svg:path>`,
})
export class PiconTransportIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTrashIcon],svg[picon-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v3h1V4M2 4v3h1V4M0 2V1h2V0h4v1h2v1M7 8H1V3h6"></svg:path>`,
})
export class PiconTrashIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTreeIcon],svg[picon-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8H1V2l1 2h2L2 5v2h2m0 1V6h2v2M4 5V3h2v2M0 2V0h2v2"></svg:path>`,
})
export class PiconTreeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTrolleyIcon],svg[picon-trolley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 6l1 1l-1 1l-1-1M2 7l1-1l1 1l-1 1M0 1V0h2l1 3h3l1-2h1L7 4H3v1h4l1 1H1l1-2l-1-3"></svg:path>`,
})
export class PiconTrolleyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTrophyIcon],svg[picon-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4q2-2 0-2M2 2Q0 2 2 4m3 3h2v1H1V7h2V6q-5-5-1-5V0h4v1q4 0-1 5"></svg:path>`,
})
export class PiconTrophyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTruckIcon],svg[picon-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4V0h4v4m3 2L6 8H5L4 6H3L2 8H1L0 6V5h5V1h1l2 2v3"></svg:path>`,
})
export class PiconTruckIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTrueIcon],svg[picon-true-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m4-2L2 4l2 2l2-2"></svg:path>`,
})
export class PiconTrueIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTshirtIcon],svg[picon-tshirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V3H0V1h2l2 1l2-1h2v2H6v5"></svg:path>`,
})
export class PiconTshirtIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTtyIcon],svg[picon-tty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V5h1v3m1 0V5h1v3M1 6V5h1v2h5V5h1v1M1 4c0-4 7-4 7 0H6V3H3v1"></svg:path>`,
})
export class PiconTtyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTubeIcon],svg[picon-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1v4h2V1m1 0v5c0 3-4 3-4 0V1H1V0h6v1"></svg:path>`,
})
export class PiconTubeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTuningIcon],svg[picon-tuning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h1v4q1.5 2 3 0V0h1v4c0 3-5 3-5 0m2 1h1v3H4"></svg:path>`,
})
export class PiconTuningIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTurtleIcon],svg[picon-turtle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6Q1 8 0 6c0-5 5-5 5 0Q4 8 3 6m3-3h1V2H6M5 5c-2-8 7-2 1-1"></svg:path>`,
})
export class PiconTurtleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTvIcon],svg[picon-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0h1L4 2L2 0h1l1 1m3 4V2H1v3m1 2l1-1H0V1h8v5H5l1 1"></svg:path>`,
})
export class PiconTvIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTwitchIcon],svg[picon-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4V2h1v2M3 4V2h1v2M2 1v4h1v1l1-1h2l1-1V1m1 4L6 7H3L2 8V7H0V2l2-2h6"></svg:path>`,
})
export class PiconTwitchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconTwitterIcon],svg[picon-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2L4 3l3-3l-.5 1.5M2 6Q0 5 0 1l3 2q0-5 4-.5Q8 8 0 8"></svg:path>`,
})
export class PiconTwitterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUfoIcon],svg[picon-ufo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4c0 3-8 3-8 0l1.5-1C2 0 6 0 6.5 3M2 4q2 1 4 0c0-3-4-3-4 0M1 4v1h1m4 0h1V4M4.5 5L4 4.5l-.5.5l.5.5"></svg:path>`,
})
export class PiconUfoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUmbrellaIcon],svg[picon-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v4Q4 9 2 7h2V3H0q4-5 8 0"></svg:path>`,
})
export class PiconUmbrellaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUndergroundIcon],svg[picon-underground-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v1h1V5M2 5v1h1V5M2 2v2h4V2M2 7L1 6V2l1-1h4l1 1v4L6 7M0 8h8V3c0-4-8-4-8 0"></svg:path>`,
})
export class PiconUndergroundIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUnderlineIcon],svg[picon-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7V6h4v1M3 5L2 4V1h1v3h2V1h1v3L5 5"></svg:path>`,
})
export class PiconUnderlineIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUnicornIcon],svg[picon-unicorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 1l4 4q0 3-4 0l1 3H0q0-6 3-6m0 2h1V3H3m5-3L6 3L5 2"></svg:path>`,
})
export class PiconUnicornIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUnindentIcon],svg[picon-unindent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v1H0V6m8-2v1H3V4m-3-.5L2 5V2m6 0v1H3V2m5-2v1H0V0"></svg:path>`,
})
export class PiconUnindentIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUnlockIcon],svg[picon-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0v1H6v2H5V0M1 8V3h6v5"></svg:path>`,
})
export class PiconUnlockIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUpIcon],svg[picon-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 5l2-2l2 2l1-1l-3-3l-3 3"></svg:path>`,
})
export class PiconUpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUpdateIcon],svg[picon-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 0l1 1h2v2l1 1l-1 1v2H5L4 8L3 7H1V5L0 4l1-1V1h2m2 3V2H3v2H2l2 2l2-2"></svg:path>`,
})
export class PiconUpdateIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUpdoubleIcon],svg[picon-updouble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 7l2-2l2 2l1-1l-3-3l-3 3m1-2l2-2l2 2l1-1l-3-3l-3 3"></svg:path>`,
})
export class PiconUpdoubleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUpdownIcon],svg[picon-updown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5V1H5v4H3l2.5 3L8 5M2 3v4h1V3h2L2.5 0L0 3"></svg:path>`,
})
export class PiconUpdownIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUploadIcon],svg[picon-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7v1h6V7M3 3v3h2V3h2L4 0L1 3"></svg:path>`,
})
export class PiconUploadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUpmostIcon],svg[picon-upmost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 6l2-2l2 2l1-1l-3-3l-3 3m0-3h6V1H1"></svg:path>`,
})
export class PiconUpmostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUprightIcon],svg[picon-upright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3H0v5h2V5h2v2l4-3l-4-3"></svg:path>`,
})
export class PiconUprightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUpwardIcon],svg[picon-upward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v3h2V4h2L4 1L1 4"></svg:path>`,
})
export class PiconUpwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconUsbIcon],svg[picon-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8c-4-1-4-6 0-7m.5 1H8v5H3.5M5 4h1V3H5m0 3h1V5H5"></svg:path>`,
})
export class PiconUsbIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconVestIcon],svg[picon-vest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v2h1V4M2 4v2h1V4M1 8V3l1-1V0h1v1h2V0h1v2l1 1v5"></svg:path>`,
})
export class PiconVestIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconViIcon],svg[picon-vi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4V3h1v1M7 8V5h1v3M3 1v3l3-3H5V0h3v1L2 8H1V1H0V0h4v1"></svg:path>`,
})
export class PiconViIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconVikingIcon],svg[picon-viking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7C0 1 8 1 7 7M1 6q-2-3 0-5q0 2 2 3m2 0q2-1 2-3q2 2 0 5"></svg:path>`,
})
export class PiconVikingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconVirusIcon],svg[picon-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2V0l2 2M2 2H0l2-2m0 8L0 6h2C0 3 3 0 6 2c2 3-1 6-4 4m3 0l1 2H4m2-4l2-1v2M5 5l1-1l-1-1l-1 1"></svg:path>`,
})
export class PiconVirusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconVkIcon],svg[picon-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V2h1.5v2L6 2h2L6 5l2 2H6.5l-2-1.5V7H2L0 2h1.5"></svg:path>`,
})
export class PiconVkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconVolleyIcon],svg[picon-volley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2L6 1l1-1l1 1M4 3L3 2l1-1l1 1M1 2l1-2h1L2 2l1 1h5v1H5L4 6v2H2l1-1V6L2 7H0V6h2l1-2"></svg:path>`,
})
export class PiconVolleyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconVolumeIcon],svg[picon-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5V3h2l2-2v6L3 5"></svg:path>`,
})
export class PiconVolumeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconVoteIcon],svg[picon-vote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7l2-2h4l2 2v1M3 0v3h3L4 2M1 2l2-2l3 3l-2 2M2 6L1 7h6L6 6"></svg:path>`,
})
export class PiconVoteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconVrIcon],svg[picon-vr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h8v1Q7 8 4 4Q1 8 0 3m1 0l1-3h4l1 3l-1-2H2"></svg:path>`,
})
export class PiconVrIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconVscodeIcon],svg[picon-vscode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2L0 7V6l6-6l2 1v6L6 8L0 2V1l6 5"></svg:path>`,
})
export class PiconVscodeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconVueIcon],svg[picon-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 0l4 8l4-8M1 0h1l2 4l2-4h1L4 6M3 0h2L4 2"></svg:path>`,
})
export class PiconVueIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWalkIcon],svg[picon-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3L3 5l1 1v2H3V6L2 5L1 8H0l2-5H1v2H0V3l2-1h2l1 1h1v1H5M4 0l1 1l-1 1l-1-1"></svg:path>`,
})
export class PiconWalkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWallIcon],svg[picon-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3H2v2h1m3 1H5v2h1m0-8H5v2h1M0 2v1h8V2M0 5v1h8V5M0 8V0h8v8"></svg:path>`,
})
export class PiconWallIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWalletIcon],svg[picon-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7V1h6v1h1v4H7v1M5 3v2h2V3"></svg:path>`,
})
export class PiconWalletIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWarningIcon],svg[picon-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6V5H3v1m1-2V2H3v2M0 7V6l3-6h1l3 6v1"></svg:path>`,
})
export class PiconWarningIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWaspIcon],svg[picon-wasp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3L5 8H3L0 3l2-1l1-1l-1-1h1l1 1l1-1h1L5 1l1 1M2 2v1h4V2M2 4v1h4V4M2 6l1 1h2l1-1"></svg:path>`,
})
export class PiconWaspIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWaterIcon],svg[picon-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6Q6 4 4 6Q2 4 0 6V5q2-2 4 0q2-2 4 0m0 3Q6 6 4 8Q2 6 0 8V7q2-2 4 0q2-2 4 0"></svg:path>`,
})
export class PiconWaterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWaveIcon],svg[picon-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8c6-2 4-6 1-4c4-6 6-1 7 4"></svg:path>`,
})
export class PiconWaveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWeightIcon],svg[picon-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3q0-3 3-3h2q3 0 3 3v2q0 3-3 3H3Q0 8 0 5m2-3h1l1-1v1h2V1H2"></svg:path>`,
})
export class PiconWeightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWestIcon],svg[picon-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 4l2 2V2"></svg:path>`,
})
export class PiconWestIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWhaleIcon],svg[picon-whale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4V3h1v1M2 2L1 3L0 2v2l2 2c9 3 7-9 0-1"></svg:path>`,
})
export class PiconWhaleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWhatsappIcon],svg[picon-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7q5 1 5-3T4 0q-5 0-3 6L0 8m7-2Q1 7 2 1h2v2H3l2 2V4h2"></svg:path>`,
})
export class PiconWhatsappIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWheelchairIcon],svg[picon-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5V2h3v1H5v1h2v3H6V5M4 1l1-1l1 1l-1 1M3.5 4C0 3 2 10 4.5 6M5 7c-5 4-5-5-2-4"></svg:path>`,
})
export class PiconWheelchairIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWhistleIcon],svg[picon-whistle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4c2 3-4 4-4 0M0 4V3h1l1-1h2v1h1V2h3v1L5 4"></svg:path>`,
})
export class PiconWhistleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWidthIcon],svg[picon-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3V1L0 4l3 3V5h2v2l3-3l-3-3"></svg:path>`,
})
export class PiconWidthIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWifi0Icon],svg[picon-wifi0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3Q4-1 0 3l4 4m0-1L1 3q3-3 6 0"></svg:path>`,
})
export class PiconWifi0Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWifi1Icon],svg[picon-wifi1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3Q4-1 0 3l4 4M3 5L1 3q3-3 6 0L5 5"></svg:path>`,
})
export class PiconWifi1Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWifi2Icon],svg[picon-wifi2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3Q4-1 0 3l4 4M2 4L1 3q3-3 6 0L6 4"></svg:path>`,
})
export class PiconWifi2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWifi3Icon],svg[picon-wifi3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3Q4-1 0 3l4 4M1 3q3-3 6 0"></svg:path>`,
})
export class PiconWifi3Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWifi4Icon],svg[picon-wifi4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3Q4-1 0 3l4 4"></svg:path>`,
})
export class PiconWifi4Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWikipediaIcon],svg[picon-wikipedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 6l2-4h1L5 7L2 2h1m0 4l2-4h1L3 7L0 2h1"></svg:path>`,
})
export class PiconWikipediaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWindIcon],svg[picon-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 4l1-1h4V2H4l1-1l1 1v1L5 4M1 8l1-1h5V6H6l1-1l1 1v1L7 8"></svg:path>`,
})
export class PiconWindIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWindowIcon],svg[picon-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h8v8H0m3.5-1h1V1h-1M1 7h6V1H1m0 2.5v1h6v-1"></svg:path>`,
})
export class PiconWindowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWindowedIcon],svg[picon-windowed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5v1H6v2H5V5M0 6V5h3v3H2V6m0-6v2H0v1h3V0m3 0v2h2v1H5V0"></svg:path>`,
})
export class PiconWindowedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWindowsIcon],svg[picon-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3V1l4-1v3M4 4v2l4 1V4M1 4v1l2 1V4M1 3V2l2-1v2"></svg:path>`,
})
export class PiconWindowsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWindsocketIcon],svg[picon-windsocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1l2-1v8H1V2M3 .5L5 1v4l-2 .5m3-4L8 2v2l-2 .5"></svg:path>`,
})
export class PiconWindsocketIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWomanIcon],svg[picon-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2L2 3C1 7 7 7 6 3m1 4H1V3c0-4 6-4 6 0"></svg:path>`,
})
export class PiconWomanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWorkstationIcon],svg[picon-workstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l1 1l-1 1l-1-1m1 5L6 6H1L0 8m8-3V0H6v5M4 4V1H1v3M0 5V0h5v5"></svg:path>`,
})
export class PiconWorkstationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconWrenchIcon],svg[picon-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 3l4 4l-1 1l-4-4H1L0 2l2 1l1-1l-1-2l2 1"></svg:path>`,
})
export class PiconWrenchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconXboxIcon],svg[picon-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 4l3 4l-4-3l-4 3l3-4l-3-4l4 2l4-2"></svg:path>`,
})
export class PiconXboxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconXorIcon],svg[picon-xor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6V0h6v2h2v6H2V6M1 1v4h1V2h3V1M3 6v1h4V3H6v3"></svg:path>`,
})
export class PiconXorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconYahooIcon],svg[picon-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6V5h1v1M6 4l1-4h1L7 4M4 2h2L3 8H1l1-2l-2-4h1.5L3 5"></svg:path>`,
})
export class PiconYahooIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconYinyangIcon],svg[picon-yinyang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5.5 8-5.5 8 0S0 9.5 0 4m7 0c0-4-6-4-6 0c3-4 3 4 6 0M2 5h1V4H2m3-1h1v1H5"></svg:path>`,
})
export class PiconYinyangIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconYoutubeIcon],svg[picon-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3.5L3 2v3M0 4c0-3 0-3 4-3s4 0 4 2.5S8 6 4 6S0 6 0 3.5"></svg:path>`,
})
export class PiconYoutubeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[piconZipIcon],svg[picon-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2v1h2V2M3 0v1h2V0M4 0v4H3V0m0 5v2h2V5M2 8V4h4v4"></svg:path>`,
})
export class PiconZipIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
