import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCoPresentIcon],svg[ic-sharp-co-present-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v10h2V5h18v16h2z"></svg:path><svg:circle cx="9" cy="10" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66"></svg:path>`,
})
export class IcSharpCoPresentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCo2Icon],svg[ic-sharp-co2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h-5v6h5zm-1.5 4.5h-2v-3h2zM8 13v2H3V9h5v2H6.5v-.5h-2v3h2V13zm10.5 2.5v1h3V18H17v-3.5h3v-1h-3V12h4.5v3.5z"></svg:path>`,
})
export class IcSharpCo2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCodeIcon],svg[ic-sharp-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6z"></svg:path>`,
})
export class IcSharpCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCodeOffIcon],svg[ic-sharp-code-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.17 12l-4.58-4.59L16 6l6 6l-3.59 3.59L17 14.17zM1.39 4.22l4.19 4.19L2 12l6 6l1.41-1.41L4.83 12L7 9.83l12.78 12.78l1.41-1.41L2.81 2.81z"></svg:path>`,
})
export class IcSharpCodeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCoffeeIcon],svg[ic-sharp-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 3H4v8c0 3.87 3.13 7 7 7s7-3.13 7-7v-1h.4c1.67 0 3.19-1.13 3.52-2.77A3.494 3.494 0 0 0 18.5 3M16 5v3H6V5zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M4 19h16v2H4z"></svg:path>`,
})
export class IcSharpCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCoffeeMakerIcon],svg[ic-sharp-coffee-maker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7V4h2V2H4v20h16v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v3z"></svg:path><svg:circle cx="13" cy="9" r="1" fill="currentColor"></svg:circle>`,
})
export class IcSharpCoffeeMakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCollectionsIcon],svg[ic-sharp-collections-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18V2H6v16zm-11-6l2.03 2.71L16 11l4 5H8zM2 6v16h16v-2H4V6z"></svg:path>`,
})
export class IcSharpCollectionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCollectionsBookmarkIcon],svg[ic-sharp-collections-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v16h16v-2H4zm18-4H6v16h16zm-2 10l-2.5-1.5L15 12V4h5z"></svg:path>`,
})
export class IcSharpCollectionsBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpColorLensIcon],svg[ic-sharp-color-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5c0-.39-.15-.74-.39-1.01c-.23-.26-.38-.61-.38-.99c0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5c0-4.42-4.03-8-9-8m-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9S8 9.67 8 10.5S7.33 12 6.5 12m3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8m5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8m3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcSharpColorLensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpColorizeIcon],svg[ic-sharp-colorize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.42 6.34l-3.75-3.75l-3.82 3.82l-1.94-1.91l-1.41 1.41l1.42 1.42L3 16.25V21h4.75l8.92-8.92l1.42 1.42l1.41-1.41l-1.92-1.92zM6.92 19L5 17.08l8.06-8.06l1.92 1.92z"></svg:path>`,
})
export class IcSharpColorizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCommentIcon],svg[ic-sharp-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.99 2H2v16h16l4 4zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"></svg:path>`,
})
export class IcSharpCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCommentBankIcon],svg[ic-sharp-comment-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20l4-4h16V2zm17 11l-2.5-1.5L14 13V5h5z"></svg:path>`,
})
export class IcSharpCommentBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCommentsDisabledIcon],svg[ic-sharp-comments-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.83 14H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83l-4-4H22v17.17zM2.1 2.1L.69 3.51L2 4.83V18h13.17l5.31 5.31l1.41-1.41zM6 9h.17l2 2H6zm0 5v-2h3.17l2 2z"></svg:path>`,
})
export class IcSharpCommentsDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCommitIcon],svg[ic-sharp-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.9 11a5 5 0 0 0-9.8 0H2v2h5.1a5 5 0 0 0 9.8 0H22v-2zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"></svg:path>`,
})
export class IcSharpCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCommuteIcon],svg[ic-sharp-commute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-1 1v1h1l2-2h2v-5H4V6h9v2h2V7c0-1.66-1.34-3-3-3M5 14c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66l-1.42 4.11v5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14zm-8.16.34h7.19l1.03 3h-9.25zM12 16c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m8 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpCommuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCompareIcon],svg[ic-sharp-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3H3v18h7v2h2V1h-2zm0 15H5l5-6zM21 3h-7v2h5v13l-5-6v9h7z"></svg:path>`,
})
export class IcSharpCompareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCompareArrowsIcon],svg[ic-sharp-compare-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.01 14H2v2h7.01v3L13 15l-3.99-4zm5.98-1v-3H22V8h-7.01V5L11 9z"></svg:path>`,
})
export class IcSharpCompareArrowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCompassCalibrationIcon],svg[ic-sharp-compass-calibration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="17" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 3C8.1 3 4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 10-.01l5-5C19.44 4.59 15.9 3 12 3"></svg:path>`,
})
export class IcSharpCompassCalibrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCompostIcon],svg[ic-sharp-compost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.87 11.81A2.5 2.5 0 0 1 15 8h1c1.51 0 2-1 2-1s.55 6-3 6c-.49 0-.94-.14-1.32-.38c-.24.64-.59 1.76-.76 2.96c1.26.22 2.28.89 2.77 1.77A6.5 6.5 0 0 0 18.5 12h3c0 5.24-4.26 9.5-9.5 9.5S2.5 17.24 2.5 12S6.76 2.5 12 2.5V0l4 4l-4 4V5.5c-3.58 0-6.5 2.92-6.5 6.5c0 2.21 1.11 4.17 2.81 5.35c.51-.92 1.63-1.62 2.98-1.8c-.09-.69-.26-1.42-.49-2.03c-.35.3-.8.48-1.3.48c-1.1 0-2-.9-2-2v-.99c0-.56-.19-1.09-.5-1.51c0 0 4.45-.23 4.5 2.5c0 .29-.06.56-.17.8c-.42-.32-.86-.6-1.33-.8c.58.43 1.37 1.37 2 2.6c.67-1.62 1.68-3.27 3-4.6c-.76.52-1.47 1.12-2.13 1.81"></svg:path>`,
})
export class IcSharpCompostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCompressIcon],svg[ic-sharp-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h16v2H4zm12-5h-3V1h-2v3H8l4 4zM8 19h3v3h2v-3h3l-4-4zm-4-7h16v2H4z"></svg:path>`,
})
export class IcSharpCompressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpComputerIcon],svg[ic-sharp-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 18l2-2V4H2v12l2 2H0v2h24v-2zM4 6h16v10H4z"></svg:path>`,
})
export class IcSharpComputerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpConfirmationNumberIcon],svg[ic-sharp-confirmation-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V4H2.01v6c1.1 0 1.99.9 1.99 2s-.89 2-2 2v6h20v-6c-1.1 0-2-.9-2-2s.9-2 2-2m-9 7.5h-2v-2h2zm0-4.5h-2v-2h2zm0-4.5h-2v-2h2z"></svg:path>`,
})
export class IcSharpConfirmationNumberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpConnectWithoutContactIcon],svg[ic-sharp-connect-without-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14H9a9 9 0 0 1 9-9v2c-3.87 0-7 3.13-7 7m7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3M7 4c0-1.11-.89-2-2-2s-2 .89-2 2s.89 2 2 2s2-.89 2-2m4.45.5h-2A2.99 2.99 0 0 1 6.5 7H2v4h6V8.74a4.97 4.97 0 0 0 3.45-4.24M19 17c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m-1.5 1a2.99 2.99 0 0 1-2.95-2.5h-2A4.97 4.97 0 0 0 16 19.74V22h6v-4z"></svg:path>`,
})
export class IcSharpConnectWithoutContactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpConnectedTvIcon],svg[ic-sharp-connected-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.57 16H10c0-2.76-2.24-5-5-5v1.43c1.97 0 3.57 1.6 3.57 3.57"></svg:path><svg:path fill="currentColor" d="M11.55 16H13c0-4.42-3.59-8-8-8v1.45c3.61 0 6.55 2.93 6.55 6.55M5 14v2h2c0-1.11-.89-2-2-2"></svg:path><svg:path fill="currentColor" d="M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z"></svg:path>`,
})
export class IcSharpConnectedTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpConnectingAirportsIcon],svg[ic-sharp-connecting-airports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.4 17l1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2l.6 2h-1l-.75-1zM5.75 7L5 6H4l.6 2l-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7z"></svg:path>`,
})
export class IcSharpConnectingAirportsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpConstructionIcon],svg[ic-sharp-construction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.783 15.172l2.121-2.121l5.996 5.996l-2.121 2.121zM17.5 10c1.93 0 3.5-1.57 3.5-3.5c0-.58-.16-1.12-.41-1.6l-2.7 2.7l-1.49-1.49l2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85l-1.78-1.78l.71-.71l-1.41-1.41L12 3.49a3 3 0 0 0-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71l3.54 3.54l.71-.71V9.15l1.41 1.41l.71-.71l1.78 1.78l-7.41 7.41l2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21"></svg:path>`,
})
export class IcSharpConstructionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContactEmergencyIcon],svg[ic-sharp-contact-emergency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.99 3H0v18h23.99zM9 8c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3M2.08 19c1.38-2.39 3.96-4 6.92-4s5.54 1.61 6.92 4zm18.89-9.15l-.75 1.3l-1.47-.85V12h-1.5v-1.7l-1.47.85l-.75-1.3L16.5 9l-1.47-.85l.75-1.3l1.47.85V6h1.5v1.7l1.47-.85l.75 1.3L19.5 9z"></svg:path>`,
})
export class IcSharpContactEmergencyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContactMailIcon],svg[ic-sharp-contact-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8V7l-3 2l-3-2v1l3 2zm3-5H0v18h23.99zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm8-6h-8V6h8z"></svg:path>`,
})
export class IcSharpContactMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContactPageIcon],svg[ic-sharp-contact-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H4v20h16V8zm-2 8c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m4 8H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 17.43z"></svg:path>`,
})
export class IcSharpContactPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContactPhoneIcon],svg[ic-sharp-contact-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.99 3H0v18h24zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm3.85-4h1.64L21 16l-1.99 1.99A7.5 7.5 0 0 1 16.28 14c-.18-.64-.28-1.31-.28-2s.1-1.36.28-2a7.47 7.47 0 0 1 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2"></svg:path>`,
})
export class IcSharpContactPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContactSupportIcon],svg[ic-sharp-contact-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2m1 14.5h-2v-2h2zm0-3.5h-2c0-3.25 3-3 3-5c0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5"></svg:path>`,
})
export class IcSharpContactSupportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContactlessIcon],svg[ic-sharp-contactless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M8.46 14.45l-1.36-.62c.28-.61.41-1.24.4-1.86a4.4 4.4 0 0 0-.4-1.8l1.36-.63c.35.75.53 1.56.54 2.4c.01.86-.17 1.7-.54 2.51m3.07 1.56l-1.3-.74c.52-.92.78-1.98.78-3.15c0-1.19-.27-2.33-.8-3.4l1.34-.67c.64 1.28.96 2.65.96 4.07c0 1.43-.33 2.74-.98 3.89m3.14 1.32l-1.35-.66c.78-1.6 1.18-3.18 1.18-4.69s-.4-3.07-1.18-4.64l1.34-.67c.9 1.78 1.34 3.56 1.34 5.31c0 1.74-.44 3.54-1.33 5.35"></svg:path>`,
})
export class IcSharpContactlessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContactsIcon],svg[ic-sharp-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 0H4v2h16zM4 24h16v-2H4zM22 4H2v16h20zM12 6.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9S10.76 6.75 12 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5z"></svg:path>`,
})
export class IcSharpContactsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContentCopyIcon],svg[ic-sharp-content-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H2v16h2V3h12zm5 4H6v18h15zm-2 16H8V7h11z"></svg:path>`,
})
export class IcSharpContentCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContentCutIcon],svg[ic-sharp-content-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.64 7.64c.23-.5.36-1.05.36-1.64c0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2s2 .89 2 2s-.9 2-2 2m0 12c-1.1 0-2-.89-2-2s.9-2 2-2s2 .89 2 2s-.9 2-2 2m6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5M19 3l-6 6l2 2l7-7V3z"></svg:path>`,
})
export class IcSharpContentCutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContentPasteIcon],svg[ic-sharp-content-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2h-6.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H3v20h18zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m7 18H5V4h2v3h10V4h2z"></svg:path>`,
})
export class IcSharpContentPasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContentPasteGoIcon],svg[ic-sharp-content-paste-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h2v3h10V5h2v6h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h7v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path><svg:path fill="currentColor" d="m18.01 13l-1.42 1.41l1.58 1.58H12v2h6.17l-1.58 1.59l1.42 1.41l3.99-4z"></svg:path>`,
})
export class IcSharpContentPasteGoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContentPasteOffIcon],svg[ic-sharp-content-paste-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.19 21.19L2.81 2.81L1.39 4.22L3 5.83V21h15.17l1.61 1.61zM5 19V7.83L16.17 19zM17 8V5h2v11.17l2 2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class IcSharpContentPasteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContentPasteSearchIcon],svg[ic-sharp-content-paste-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h2v3h10V5h2v5h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h7v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path><svg:path fill="currentColor" d="M20.3 18.9c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7l1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5"></svg:path>`,
})
export class IcSharpContentPasteSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpContrastIcon],svg[ic-sharp-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10m1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93z"></svg:path>`,
})
export class IcSharpContrastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpControlCameraIcon],svg[ic-sharp-control-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.54 8.46L2 12l3.54 3.54l1.76-1.77L5.54 12l1.76-1.77zm12.92 0l-1.76 1.77L18.46 12l-1.76 1.77l1.76 1.77L22 12zm-6.46 10l-1.77-1.76l-1.77 1.76L12 22l3.54-3.54l-1.77-1.76zM8.46 5.54l1.77 1.76L12 5.54l1.77 1.76l1.77-1.76L12 2z"></svg:path><svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle>`,
})
export class IcSharpControlCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpControlPointIcon],svg[ic-sharp-control-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"></svg:path>`,
})
export class IcSharpControlPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpControlPointDuplicateIcon],svg[ic-sharp-control-point-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16A6.99 6.99 0 0 1 2 12m13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9s9-4.04 9-9s-4.04-9-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7"></svg:path>`,
})
export class IcSharpControlPointDuplicateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCookieIcon],svg[ic-sharp-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22c-2.98 1-5.77-1.59-5.19-4.56C6.95.71 2 6.58 2 12c0 5.52 4.48 10 10 10c5.89 0 10.54-5.08 9.95-11.01M8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15m2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m4.5 6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCopyAllIcon],svg[ic-sharp-copy-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H7v16h13zm-2 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22H3v-2h2zm3.5 0h-2v-2h2zm7 0h-2v-2h2zM3 6h2v2H3z"></svg:path>`,
})
export class IcSharpCopyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCopyrightIcon],svg[ic-sharp-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23c.23.01.44.05.63.13c.2.09.38.21.52.36s.25.33.34.53s.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01s-.66-.5-1.08-.66s-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92s-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35s.72.69 1.2.91s1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63s.56-.58.74-.94s.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46s-.32.23-.52.3c-.19.07-.39.09-.6.1c-.36-.01-.66-.08-.89-.23c-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88s-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"></svg:path>`,
})
export class IcSharpCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCoronavirusIcon],svg[ic-sharp-coronavirus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 10.5v.75h-1.54a7 7 0 0 0-1.52-3.65l1.09-1.09l.01.01l.53.53l1.06-1.06l-2.12-2.12l-1.06 1.06l.52.52l-1.09 1.09a7 7 0 0 0-3.64-1.51V3.5h.76V2h-3v1.5h.74v1.54c-1.37.15-2.62.7-3.64 1.52L6.51 5.47l.01-.01l.53-.53l-1.06-1.06l-2.12 2.12l1.06 1.06l.52-.52l1.09 1.09a6.9 6.9 0 0 0-1.5 3.63H3.5v-.75H2v3h1.5v-.75h1.54c.15 1.37.69 2.61 1.5 3.63l-1.09 1.09l-.52-.52l-1.06 1.06l2.12 2.12l1.06-1.06l-.53-.53l-.01-.01l1.09-1.09c1.02.82 2.26 1.36 3.63 1.51v1.54h-.73V22h3v-1.5h-.76v-1.54c1.37-.14 2.62-.69 3.64-1.51l1.09 1.09l-.52.52l1.06 1.06L20.13 18l-1.06-1.06l-.53.53l-.01.01l-1.09-1.09a7.03 7.03 0 0 0 1.52-3.65h1.54v.75H22v-3h-1.5zM13.75 8c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-3.5 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M8.5 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m1.75 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M12 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m1.75 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m1.75-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpCoronavirusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCorporateFareIcon],svg[ic-sharp-corporate-fare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V3H2v18h20V7zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z"></svg:path>`,
})
export class IcSharpCorporateFareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCottageIcon],svg[ic-sharp-cottage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h7v-6h2v6h7v-9.38l1.79 1.36L23 11.4zm-2-2c0 1.66-1.34 3-3 3c-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3c.55 0 1-.45 1-1z"></svg:path>`,
})
export class IcSharpCottageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCountertopsIcon],svg[ic-sharp-countertops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2v-2zm-5 8h-2v-6h2z"></svg:path>`,
})
export class IcSharpCountertopsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCreateIcon],svg[ic-sharp-create-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM21.41 6.34l-3.75-3.75l-2.53 2.54l3.75 3.75z"></svg:path>`,
})
export class IcSharpCreateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCreateNewFolderIcon],svg[ic-sharp-create-new-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H12l-2-2H2v16h20zm-3 8h-3v3h-2v-3h-3v-2h3V9h2v3h3z"></svg:path>`,
})
export class IcSharpCreateNewFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCreditCardIcon],svg[ic-sharp-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2.01L2 20h20zm-2 14H4v-6h16zm0-10H4V6h16z"></svg:path>`,
})
export class IcSharpCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCreditCardOffIcon],svg[ic-sharp-credit-card-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.83 4H22v15.17L14.83 12H20V8h-9.17zm13.66 19.31L17.17 20H2V4.83L.69 3.51L2.1 2.1l19.8 19.8zM9.17 12l-4-4H4v4z"></svg:path>`,
})
export class IcSharpCreditCardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCreditScoreIcon],svg[ic-sharp-credit-score-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16h7v-2H4v-6h18V4zm18 4H4V6h16zm-5.07 11.17l-2.83-2.83l-1.41 1.41L14.93 22L22 14.93l-1.41-1.41z"></svg:path>`,
})
export class IcSharpCreditScoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCribIcon],svg[ic-sharp-crib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9h-8V4H8C5.79 4 4 5.79 4 8v8h4v2.93c-.61-.35-1.16-.78-1.65-1.27l-1.42 1.42C6.74 20.88 9.24 22 12 22s5.26-1.12 7.07-2.93l-1.42-1.42c-.49.49-1.05.92-1.65 1.27V16h4zm-6 10.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4z"></svg:path>`,
})
export class IcSharpCribIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCrisisAlertIcon],svg[ic-sharp-crisis-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2.5c0 1.06-.75 3.64-1.19 5.04a1.375 1.375 0 0 1-2.62 0C10.25 6.14 9.5 3.56 9.5 2.5a2.5 2.5 0 0 1 5 0M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m4.08-4.89c.18-.75.33-1.47.39-2.06A10 10 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-3.92 2.25-7.31 5.53-8.95c.07.59.21 1.32.39 2.06A8.03 8.03 0 0 0 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.93-1.58-5.49-3.92-6.89M18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2 .98-3.77 2.48-4.86c.23.81.65 2.07.65 2.07C8.43 9.93 8 10.92 8 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.08-.43-2.07-1.13-2.79c0 0 .41-1.22.65-2.07A6 6 0 0 1 18 12"></svg:path>`,
})
export class IcSharpCrisisAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCropIcon],svg[ic-sharp-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15h2V5H9v2h8zM7 17V1H5v4H1v2h4v12h12v4h2v-4h4v-2z"></svg:path>`,
})
export class IcSharpCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCrop169Icon],svg[ic-sharp-crop-16-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3v10h18zm-2 8H5V9h14z"></svg:path>`,
})
export class IcSharpCrop169Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCrop32Icon],svg[ic-sharp-crop-3-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6H3v12h18zm-2 10H5V8h14z"></svg:path>`,
})
export class IcSharpCrop32Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCrop54Icon],svg[ic-sharp-crop-5-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3v16h18zm-2 14H5V6h14z"></svg:path>`,
})
export class IcSharpCrop54Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCrop75Icon],svg[ic-sharp-crop-7-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5H3v14h18zm-2 12H5V7h14z"></svg:path>`,
})
export class IcSharpCrop75Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCropDinIcon],svg[ic-sharp-crop-din-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-2 16H5V5h14z"></svg:path>`,
})
export class IcSharpCropDinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCropFreeIcon],svg[ic-sharp-crop-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v6h2V5h4V3zm2 12H3v6h6v-2H5zm14 4h-4v2h6v-6h-2zm2-16h-6v2h4v4h2z"></svg:path>`,
})
export class IcSharpCropFreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCropLandscapeIcon],svg[ic-sharp-crop-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5H3v14h18zm-2 12H5V7h14z"></svg:path>`,
})
export class IcSharpCropLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCropOriginalIcon],svg[ic-sharp-crop-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-2 16H5V5h14zm-5.04-6.71l-2.75 3.54l-1.96-2.36L6.5 17h11z"></svg:path>`,
})
export class IcSharpCropOriginalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCropPortraitIcon],svg[ic-sharp-crop-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5v18h14zm-2 16H7V5h10z"></svg:path>`,
})
export class IcSharpCropPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCropRotateIcon],svg[ic-sharp-crop-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11c.23 0 .44-.02.66-.03L8.8 20.15zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81l1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11M16 14h2V6h-8v2h6zm-8 2V4H6v2H4v2h2v10h10v2h2v-2h2v-2z"></svg:path>`,
})
export class IcSharpCropRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCropSquareIcon],svg[ic-sharp-crop-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4v16h16zm-2 14H6V6h12z"></svg:path>`,
})
export class IcSharpCropSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCrueltyFreeIcon],svg[ic-sharp-cruelty-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.84 14.52c-.26-.19-.62-.63-.79-.84C17.24 12.01 19 8.87 19 5c0-1.95-.74-3-2-3c-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2C5.74 2 5 3.05 5 5c0 3.87 1.76 7.01 2.95 8.68c-.17.21-.53.65-.79.84c-.5.41-1.66 1.37-1.66 2.98c0 2.21 1.79 4 4 4c1.55 0 2.5-.56 2.5-.56s.95.56 2.5.56c2.21 0 4-1.79 4-4c0-1.61-1.16-2.57-1.66-2.98M9.35 12.2C8.34 10.7 7 8.12 7 5c0-.49.06-.8.12-.97c.94.31 3.24 2.71 3.38 7.64c-.47.12-.84.3-1.15.53m1.15 4.55c-.28 0-.5-.34-.5-.75s.22-.75.5-.75s.5.34.5.75s-.22.75-.5.75M12 19.5c-.55 0-1-.72-1-1s.45-.5 1-.5s1 .22 1 .5s-.45 1-1 1m1.5-2.75c-.28 0-.5-.34-.5-.75s.22-.75.5-.75s.5.34.5.75s-.22.75-.5.75m0-5.08c.14-4.93 2.44-7.33 3.38-7.64c.06.17.12.48.12.97c0 3.12-1.34 5.7-2.35 7.2c-.31-.23-.68-.41-1.15-.53"></svg:path>`,
})
export class IcSharpCrueltyFreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCssIcon],svg[ic-sharp-css-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 15v-2H11v.5h2v-1H9.5V9h5v2H13v-.5h-2v1h3.5V15zm6.5 0h5v-3.5h-3.5v-1h2v.5H21V9h-5v3.5h3.5v1h-2V13H16zm-8-4V9H3v6h5v-2H6.5v.5h-2v-3h2v.5z"></svg:path>`,
})
export class IcSharpCssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCurrencyBitcoinIcon],svg[ic-sharp-currency-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.06 11.57c.59-.69.94-1.59.94-2.57c0-1.86-1.27-3.43-3-3.87V3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4c0-1.45-.78-2.73-1.94-3.43M10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcSharpCurrencyBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCurrencyExchangeIcon],svg[ic-sharp-currency-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9c0-1.02 1.11-1.39 1.81-1.39c1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96c0 2.27 2.25 2.91 3.35 3.31c1.58.56 2.28 1.07 2.28 2.03c0 1.13-1.05 1.61-1.98 1.61c-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22c0-1.39-.61-2.61-3.01-3.44M3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4a9 9 0 0 0 9-9h2c0 6.08-4.92 11-11 11c-3.72 0-7.01-1.85-9-4.67zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3a9 9 0 0 0-9 9z"></svg:path>`,
})
export class IcSharpCurrencyExchangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCurrencyFrancIcon],svg[ic-sharp-currency-franc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z"></svg:path>`,
})
export class IcSharpCurrencyFrancIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCurrencyLiraIcon],svg[ic-sharp-currency-lira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.76V3h2v4.51L15 5v2.36l-4 2.51l.01 2.35L15 9.72v2.36l-4 2.51V19c2.76 0 5-2.24 5-5h2c0 3.87-3.13 7-7 7H9v-5.16l-3 1.88v-2.36l3-1.88v-2.36L6 13v-2.36z"></svg:path>`,
})
export class IcSharpCurrencyLiraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCurrencyPoundIcon],svg[ic-sharp-currency-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21c1.93 0 3.62-1.17 4-3l-1.75-.88C16 18.21 15.33 19 14 19H9.1c.83-1 1.5-2.34 1.5-4c0-.35-.03-.69-.08-1H14v-2H9.82C9 10.42 8 9.6 8 8a3.5 3.5 0 0 1 6.78-1.22L16.63 6c-.8-2.05-2.79-3.5-5.13-3.5C8.46 2.5 6 4.96 6 8c0 1.78.79 2.9 1.49 4H6v2h2.47c.08.31.13.64.13 1c0 2.7-2.6 4-2.6 4v2z"></svg:path>`,
})
export class IcSharpCurrencyPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCurrencyRubleIcon],svg[ic-sharp-currency-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3H7v9H5v2h2v2H5v2h2v3h2v-3h4v-2H9v-2h4.5c3.04 0 5.5-2.46 5.5-5.5S16.54 3 13.5 3m0 9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12"></svg:path>`,
})
export class IcSharpCurrencyRubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCurrencyRupeeIcon],svg[ic-sharp-currency-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7z"></svg:path>`,
})
export class IcSharpCurrencyRupeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCurrencyYenIcon],svg[ic-sharp-currency-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.92 11H18v2h-5v2h5v2h-5v4h-2v-4H6v-2h5v-2H6v-2h4.08L5 3h2.37L12 10.29L16.63 3H19z"></svg:path>`,
})
export class IcSharpCurrencyYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCurrencyYuanIcon],svg[ic-sharp-currency-yuan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.28 12H18v2h-5v7h-2v-7H6v-2h4.72L5 3h2.37L12 10.29L16.63 3H19z"></svg:path>`,
})
export class IcSharpCurrencyYuanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCurtainsIcon],svg[ic-sharp-curtains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h20v-2zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7c-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7"></svg:path>`,
})
export class IcSharpCurtainsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCurtainsClosedIcon],svg[ic-sharp-curtains-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h20v-2zM11 5h2v14h-2z"></svg:path>`,
})
export class IcSharpCurtainsClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCycloneIcon],svg[ic-sharp-cyclone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path><svg:path fill="currentColor" d="M22 7.47V5.35C20.05 4.77 16.56 4 12 4c-2.15 0-4.11.86-5.54 2.24c.13-.85.4-2.4 1.01-4.24H5.35C4.77 3.95 4 7.44 4 12c0 2.15.86 4.11 2.24 5.54c-.85-.14-2.4-.4-4.24-1.01v2.12C3.95 19.23 7.44 20 12 20c2.15 0 4.11-.86 5.54-2.24c-.14.85-.4 2.4-1.01 4.24h2.12c.58-1.95 1.35-5.44 1.35-10c0-2.15-.86-4.11-2.24-5.54c.85.13 2.4.4 4.24 1.01M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6"></svg:path>`,
})
export class IcSharpCycloneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDangerousIcon],svg[ic-sharp-dangerous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zm.51 11.83l-1.41 1.41L12 13.41l-2.83 2.83l-1.41-1.41L10.59 12L7.76 9.17l1.41-1.41L12 10.59l2.83-2.83l1.41 1.41L13.41 12z"></svg:path>`,
})
export class IcSharpDangerousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDarkModeIcon],svg[ic-sharp-dark-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1"></svg:path>`,
})
export class IcSharpDarkModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDashboardIcon],svg[ic-sharp-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"></svg:path>`,
})
export class IcSharpDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDashboardCustomizeIcon],svg[ic-sharp-dashboard-customize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm15 0h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class IcSharpDashboardCustomizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDataArrayIcon],svg[ic-sharp-data-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"></svg:path>`,
})
export class IcSharpDataArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDataExplorationIcon],svg[ic-sharp-data-exploration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 1.33.26 2.61.74 3.77L8 10.5l3.3 2.78L14.58 10H13V8h5v5h-2v-1.58L11.41 16l-3.29-2.79l-4.4 4.4A10 10 0 0 0 12 22h10V12c0-5.52-4.48-10-10-10m7.5 18.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpDataExplorationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDataObjectIcon],svg[ic-sharp-data-object-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10H2v4h2v6h6v-2H6v-5.5H4v-1h2V6h4V4H4zm16 0V4h-6v2h4v5.5h2v1h-2V18h-4v2h6v-6h2v-4z"></svg:path>`,
})
export class IcSharpDataObjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDataSaverOffIcon],svg[ic-sharp-data-saver-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92c0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07c0-5.18-3.95-9.45-9-9.95M12 19c-3.87 0-7-3.13-7-7c0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95c0 5.52 4.47 10 9.99 10c3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53A6.95 6.95 0 0 1 12 19"></svg:path>`,
})
export class IcSharpDataSaverOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDataSaverOnIcon],svg[ic-sharp-data-saver-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8v3H8v2h3v3h2v-3h3v-2h-3V8zm2-5.95v3.03c3.39.49 6 3.39 6 6.92c0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07c0-5.18-3.95-9.45-9-9.95M12 19c-3.87 0-7-3.13-7-7c0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95c0 5.52 4.47 10 9.99 10c3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53A6.95 6.95 0 0 1 12 19"></svg:path>`,
})
export class IcSharpDataSaverOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDataThresholdingIcon],svg[ic-sharp-data-thresholding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM10.67 8.17l2 2l3.67-3.67l1.41 1.41L12.67 13l-2-2l-3 3l-1.41-1.41zM5 16h1.72L5 17.72zm.84 3l3-3h1.83l-3 3zm3.96 0l3-3h1.62l-3 3zm3.73 0l3-3h1.62l-3 3zM19 19h-1.73L19 17.27z"></svg:path>`,
})
export class IcSharpDataThresholdingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDataUsageIcon],svg[ic-sharp-data-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92c0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07c0-5.18-3.95-9.45-9-9.95M12 19c-3.87 0-7-3.13-7-7c0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95c0 5.52 4.47 10 9.99 10c3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53A6.95 6.95 0 0 1 12 19"></svg:path>`,
})
export class IcSharpDataUsageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDatasetIcon],svg[ic-sharp-dataset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM11 17H7v-4h4zm0-6H7V7h4zm6 6h-4v-4h4zm0-6h-4V7h4z"></svg:path>`,
})
export class IcSharpDatasetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDatasetLinkedIcon],svg[ic-sharp-dataset-linked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.09 17H7v-4h3.69c.95-.63 2.09-1 3.31-1h6c.34 0 .67.04 1 .09V3H3v18h5.81C8.3 20.12 8 19.09 8 18c0-.34.04-.67.09-1M13 7h4v4h-4zM7 7h4v4H7z"></svg:path><svg:path fill="currentColor" d="M12 18c0-1.1.9-2 2-2h2v-2h-2c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2h-2c-1.1 0-2-.9-2-2m8-4h-2v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4"></svg:path><svg:path fill="currentColor" d="M14 17h6v2h-6z"></svg:path>`,
})
export class IcSharpDatasetLinkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDateRangeIcon],svg[ic-sharp-date-range-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm4-7h-3V2h-2v2H8V2H6v2H3v18h18zm-2 16H5V9h14z"></svg:path>`,
})
export class IcSharpDateRangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeblurIcon],svg[ic-sharp-deblur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v18a9 9 0 0 0 0-18"></svg:path><svg:circle cx="6" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="10" r=".5" fill="currentColor"></svg:circle><svg:circle cx="6" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="14" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="21" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="3" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="14" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="10" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="18" r="1" fill="currentColor"></svg:circle>`,
})
export class IcSharpDeblurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeckIcon],svg[ic-sharp-deck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9L12 2L2 9h9v13h2V9z"></svg:path><svg:path fill="currentColor" d="m4.14 12l-1.96.37l.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37l-1.96-.37z"></svg:path>`,
})
export class IcSharpDeckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDehazeIcon],svg[ic-sharp-dehaze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16v2h20v-2zm0-5v2h20v-2zm0-5v2h20V6z"></svg:path>`,
})
export class IcSharpDehazeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeleteIcon],svg[ic-sharp-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21h12V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></svg:path>`,
})
export class IcSharpDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeleteForeverIcon],svg[ic-sharp-delete-forever-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21h12V7H6zm2.46-9.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></svg:path>`,
})
export class IcSharpDeleteForeverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeleteOutlineIcon],svg[ic-sharp-delete-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21h12V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"></svg:path>`,
})
export class IcSharpDeleteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeleteSweepIcon],svg[ic-sharp-delete-sweep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 20h10V8H3zM14 5h-3l-1-1H6L5 5H2v2h12z"></svg:path>`,
})
export class IcSharpDeleteSweepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeliveryDiningIcon],svg[ic-sharp-delivery-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10.35V5h-5v2h3v2.65L13.52 14H10V9H2v7h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"></svg:path><svg:path fill="currentColor" d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpDeliveryDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDensityLargeIcon],svg[ic-sharp-density-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v2H3zm0 16h18v2H3z"></svg:path>`,
})
export class IcSharpDensityLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDensityMediumIcon],svg[ic-sharp-density-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3z"></svg:path>`,
})
export class IcSharpDensityMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDensitySmallIcon],svg[ic-sharp-density-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18v2H3zm0 18h18v2H3zm0-6h18v2H3zm0-6h18v2H3z"></svg:path>`,
})
export class IcSharpDensitySmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDepartureBoardIcon],svg[ic-sharp-departure-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.34 1.13c-2.94-.55-5.63.75-7.12 2.92c.01-.01.01-.02.02-.03C9.84 4 9.42 4 9 4c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V23h3v-2h8v2h3v-2.78c.61-.55 1-1.34 1-2.22v-3.08c3.72-.54 6.5-3.98 5.92-7.97c-.42-2.9-2.7-5.29-5.58-5.82M4.5 19c-.83 0-1.5-.67-1.5-1.5S3.67 16 4.5 16s1.5.67 1.5 1.5S5.33 19 4.5 19M3 13V8h6c0 1.96.81 3.73 2.11 5zm10.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2.5-6c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m.5-9H15v5l3.62 2.16l.75-1.23l-2.87-1.68z"></svg:path>`,
})
export class IcSharpDepartureBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDescriptionIcon],svg[ic-sharp-description-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H4v20h16V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"></svg:path>`,
})
export class IcSharpDescriptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeselectIcon],svg[ic-sharp-deselect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h2v-2H3zm4 8h2v-2H7zm6-18h-2v2h2zm6 0v2h2V3zM5 21v-2H3v2zm-2-4h2v-2H3zm8 4h2v-2h-2zm8-8h2v-2h-2zm0-4h2V7h-2zm-4-4h2V3h-2zM7.83 5L7 4.17V3h2v2zm12 12l-.83-.83V15h2v2zm1.36 4.19L2.81 2.81L1.39 4.22L4.17 7H3v2h2V7.83l2 2V17h7.17l2 2H15v2h2v-1.17l2.78 2.78zM9 15v-3.17L12.17 15zm6-2.83V9h-3.17l-2-2H17v7.17z"></svg:path>`,
})
export class IcSharpDeselectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDesignServicesIcon],svg[ic-sharp-design-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.79 17.06l-5.55-5.55l1.57-1.57l-3.75-3.75l-1.57 1.57l-5.55-5.55l-4.73 4.73l5.55 5.55L3 17.25V21h3.75l4.76-4.76l5.55 5.55zM9.18 11.07L5.04 6.94l1.9-1.9l1.27 1.27L7.02 7.5l1.41 1.41l1.19-1.19l1.45 1.45zm3.75 3.75l1.9-1.9l1.45 1.45l-1.19 1.19l1.41 1.41l1.19-1.19l1.27 1.27l-1.9 1.9zm2.203-9.697l2.538-2.539l3.748 3.748l-2.538 2.539z"></svg:path>`,
})
export class IcSharpDesignServicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeskIcon],svg[ic-sharp-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v12h2V8h10v10h2v-2h4v2h2V6zm18 2v2h-4V8zm-4 6v-2h4v2z"></svg:path>`,
})
export class IcSharpDeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDesktopAccessDisabledIcon],svg[ic-sharp-desktop-access-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.41 1.69L0 3.1l1 .99V18h9v2H8v2h8v-2h-2v-2h.9l6 6l1.41-1.41zM2.99 16V6.09L12.9 16zM4.55 2l2 2H21v12h-2.45l2 2h2.44V2z"></svg:path>`,
})
export class IcSharpDesktopAccessDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDesktopMacIcon],svg[ic-sharp-desktop-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h9l-2 3v1h8v-1l-2-3h9zm-2 12H3V4h18z"></svg:path>`,
})
export class IcSharpDesktopMacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDesktopWindowsIcon],svg[ic-sharp-desktop-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h9v2H8v2h8v-2h-2v-2h9zm-2 14H3V4h18z"></svg:path>`,
})
export class IcSharpDesktopWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDetailsIcon],svg[ic-sharp-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 21h20zm1 5.92L18.6 19H13zm-2 0V19H5.4z"></svg:path>`,
})
export class IcSharpDetailsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeveloperBoardIcon],svg[ic-sharp-developer-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-2V3H2v18h18v-4h2v-2h-2v-2h2v-2h-2V9zm-4 10H4V5h14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"></svg:path>`,
})
export class IcSharpDeveloperBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeveloperBoardOffIcon],svg[ic-sharp-developer-board-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.83 5H18v10.17L19.83 17H22v-2h-2v-2h2v-2h-2V9h2V7h-2V3H5.83zM12 9.17V7h4v3h-3.17zM9.83 7H11v1.17zm4 4H16v2.17zm4.34 10l2.31 2.31l1.41-1.41L2.1 2.1L.69 3.51L2 4.83V21zM4 19V6.83l2 2V12h3.17l1 1H6v4h5v-3.17l1 1V17h2.17l2 2z"></svg:path>`,
})
export class IcSharpDeveloperBoardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeveloperModeIcon],svg[ic-sharp-developer-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h10v2h2V1.01L5 1v6h2zm8.41 11.59L20 12l-4.59-4.59L14 8.83L17.17 12L14 15.17zM10 15.17L6.83 12L10 8.83L8.59 7.41L4 12l4.59 4.59zM17 19H7v-2H5v6h14v-6h-2z"></svg:path>`,
})
export class IcSharpDeveloperModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeviceHubIcon],svg[ic-sharp-device-hub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2l4 4.2V21h5v-5z"></svg:path>`,
})
export class IcSharpDeviceHubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeviceThermostatIcon],svg[ic-sharp-device-thermostat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4c0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4m-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1z"></svg:path>`,
})
export class IcSharpDeviceThermostatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDeviceUnknownIcon],svg[ic-sharp-device-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1H5v22h14zm-2 18H7V5h10zM12 6.72c-1.96 0-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75s1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45c0-1.96-1.54-3.47-3.5-3.47M11 16h2v2h-2z"></svg:path>`,
})
export class IcSharpDeviceUnknownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDevicesIcon],svg[ic-sharp-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h18V4H2v13H0v3h14v-3H4zm20 2h-8v12h8zm-2 9h-4v-7h4z"></svg:path>`,
})
export class IcSharpDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDevicesFoldIcon],svg[ic-sharp-devices-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3V-.03l-7 3V21h12V3zm3 16h-5.33L17 18V5h3zM2 3h2v2H2zm0 16h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm4-4h2v2H6zm0 16h2v2H6z"></svg:path>`,
})
export class IcSharpDevicesFoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDevicesOtherIcon],svg[ic-sharp-devices-other-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h18V4H1v16h6v-2H3zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M23 8h-8v12h8zm-2 10h-4v-8h4z"></svg:path>`,
})
export class IcSharpDevicesOtherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDialerSipIcon],svg[ic-sharp-dialer-sip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3h1v5h-1zm-1 2h-2V4h2V3h-3v3h2v1h-2v1h3zm3-2v5h1V6h2V3zm2 2h-1V4h1zm1 10.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"></svg:path>`,
})
export class IcSharpDialerSipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDialpadIcon],svg[ic-sharp-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M6 1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m12-8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m-6 8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class IcSharpDialpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDiamondIcon],svg[ic-sharp-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.16 3h-.32L9.21 8.25h5.58zm4.3 5.25h5.16L19 3h-5.16zm4.92 1.5h-8.63V20.1zM11.25 20.1V9.75H2.62zM7.54 8.25L10.16 3H5L2.38 8.25z"></svg:path>`,
})
export class IcSharpDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDifferenceIcon],svg[ic-sharp-difference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23H2V7h2v14h14zM15 1H6.01L6 19h15V7zm1.5 14h-6v-2h6zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2z"></svg:path>`,
})
export class IcSharpDifferenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDiningIcon],svg[ic-sharp-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zm-11 8.3c0 .93-.64 1.71-1.5 1.93V19H8v-6.77c-.86-.22-1.5-1-1.5-1.93V6h1v3h.75V6h1v3H10V6h1zm4.58 2.29l-.08.03V19H14v-6.38l-.08-.04c-.97-.47-1.67-1.7-1.67-3.18c0-1.88 1.13-3.4 2.5-3.4c1.38 0 2.5 1.53 2.5 3.41c0 1.48-.7 2.71-1.67 3.18"></svg:path>`,
})
export class IcSharpDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDinnerDiningIcon],svg[ic-sharp-dinner-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 19l2 2h16l2-2zm1-1h16.97c.29-3.26-2.28-6-5.48-6c-2.35 0-4.35 1.48-5.14 3.55c-.41-.23-.87-.38-1.35-.47V9h4V6.75h9v-1.5h-9V3H3v1.5h1v.75H3v1.5h1v.75H3V9h1v7.39c-.44.46-.78 1-1 1.61M8 7.5v-.75h2v.75zm2-2.25H8V4.5h2zM5.5 4.5h1v.75h-1zm0 2.25h1v.75h-1zM6.5 9v6.06c-.35.06-.68.17-1 .3V9z"></svg:path>`,
})
export class IcSharpDinnerDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsIcon],svg[ic-sharp-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.41 12L12 1.59L1.59 11.99L12 22.41zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5z"></svg:path>`,
})
export class IcSharpDirectionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsBikeIcon],svg[ic-sharp-directions-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2M5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5m0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5m5.8-10l2.4-2.4l.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L6.31 9.9L11 14v5h2v-6.2zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5m0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5"></svg:path>`,
})
export class IcSharpDirectionsBikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsBoatIcon],svg[ic-sharp-directions-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21c-1.39 0-2.78-.47-4-1.32c-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99a8.75 8.75 0 0 0 8 0c1.26.65 2.62.99 4 .99h2v-2zM3.95 19H4c1.6 0 3.02-.88 4-2c.98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l2.18-7.65l-2.23-.73V4h-5V1H9v3H4v6.62l-2.23.73zM6 6h12v3.97L12 8L6 9.97z"></svg:path>`,
})
export class IcSharpDirectionsBoatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsBoatFilledIcon],svg[ic-sharp-directions-boat-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21c-1.39 0-2.78-.47-4-1.32c-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99a8.75 8.75 0 0 0 8 0c1.26.65 2.62.99 4 .99h2v-2zM3.95 19H4c1.6 0 3.02-.88 4-2c.98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l2.18-7.65l-2.23-.73V4h-5V1H9v3H4v6.62l-2.23.73zM6 6h12v3.97L12 8L6 9.97z"></svg:path>`,
})
export class IcSharpDirectionsBoatFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsBusIcon],svg[ic-sharp-directions-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16c0 .88.39 1.67 1 2.22V21h3v-2h8v2h3v-2.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17m9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m1.5-6H6V6h12z"></svg:path>`,
})
export class IcSharpDirectionsBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsBusFilledIcon],svg[ic-sharp-directions-bus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44V21h3v-2h8v2h3v-3.06c.62-.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4M8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16m7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2.5-6H6V7h12z"></svg:path>`,
})
export class IcSharpDirectionsBusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsCarIcon],svg[ic-sharp-directions-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.58 5H5.43L3 12v9h3v-2h12v2h3v-9zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 11l1.5-4.5h11L19 11z"></svg:path>`,
})
export class IcSharpDirectionsCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsCarFilledIcon],svg[ic-sharp-directions-car-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.57 5H5.43L3 12v9h3v-2h12v2h3v-9zM7.5 16c-.83 0-1.5-.67-1.5-1.5S6.67 13 7.5 13s1.5.67 1.5 1.5S8.33 16 7.5 16m9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5.81 10l1.04-3h10.29l1.04 3z"></svg:path>`,
})
export class IcSharpDirectionsCarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsOffIcon],svg[ic-sharp-directions-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 7.5l3.5 3.5l-1.33 1.34l3.45 3.45L22.41 12L12.01 1.58l-3.8 3.8L13 10.17zM1.39 4.22l3.99 3.99L1.59 12l10.42 10.4l3.79-3.79l3.99 3.99l1.41-1.41L2.81 2.81zm8.6 8.6V15h-2v-4.18z"></svg:path>`,
})
export class IcSharpDirectionsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsRailwayIcon],svg[ic-sharp-directions-railway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m6-7H6V5h12z"></svg:path>`,
})
export class IcSharpDirectionsRailwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsRailwayFilledIcon],svg[ic-sharp-directions-railway-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4m0 14c-.83 0-1.5-.67-1.5-1.5S11.17 13 12 13s1.5.67 1.5 1.5S12.83 16 12 16m6-6H6V7h12z"></svg:path>`,
})
export class IcSharpDirectionsRailwayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsRunIcon],svg[ic-sharp-directions-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m-3.6 13.9l1-4.4l2.1 2v6h2v-7.5l-2.1-2l.6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1c-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7l-1.6 8.1l-4.9-1l-.4 2z"></svg:path>`,
})
export class IcSharpDirectionsRunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsSubwayIcon],svg[ic-sharp-directions-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4M7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17m3.5-6H6V6h5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m1.5-6h-5V6h5z"></svg:path>`,
})
export class IcSharpDirectionsSubwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsSubwayFilledIcon],svg[ic-sharp-directions-subway-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4M8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16m2.5-6H6V7h5zm4.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2.5-6h-5V7h5z"></svg:path>`,
})
export class IcSharpDirectionsSubwayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsTransitIcon],svg[ic-sharp-directions-transit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4M7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17m3.5-6H6V6h5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m1.5-6h-5V6h5z"></svg:path>`,
})
export class IcSharpDirectionsTransitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsTransitFilledIcon],svg[ic-sharp-directions-transit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4M8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16m2.5-6H6V7h5zm4.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2.5-6h-5V7h5z"></svg:path>`,
})
export class IcSharpDirectionsTransitFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsWalkIcon],svg[ic-sharp-directions-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2M9.8 8.9L7 23h2.1l1.8-8l2.1 2v6h2v-7.5l-2.1-2l.6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6a2.145 2.145 0 0 0-2.65-.84L6 8.3V13h2V9.6z"></svg:path>`,
})
export class IcSharpDirectionsWalkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDirtyLensIcon],svg[ic-sharp-dirty-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5h-5.17L15 3H9L7.17 5H2v16h20zm-5.34 11.58c-1.14 1.86-3-1.03-3.81.09c-.39.57-.09 1.49.13 2.33c0 .47-.38.85-.85.85s-.86-.38-.86-.85c.14-.98.42-2.05-.16-2.43c-.89-.59-1.27 2.06-2.8 1.35c-1.39-1.12 1.05-1.29.5-3.27c-.22-.79-2.28.36-2.4-1.24c-.08-1 1.49-.74 1.51-1.49c.03-.75-1.03-1.05-.25-1.91c.22-.24.71-.26.91-.19c.79.27 1.55 1.82 2.51 1.19c1.03-.66-1.88-2.35 0-2.86c1.64-.44 1.31 2.08 2.65 2.44c1.94.52 2.65-4.55 4.41-2.33c1.85 2.33-3.43 2.27-2.85 4.01c.34 1.01 2.15-1.2 2.76.53c.64 1.83-3.09.82-3.04 1.66c.06.83 2.41.55 1.64 2.12m1.48 1.43c-.47 0-.86-.38-.86-.86s.38-.86.86-.86c.47 0 .86.38.86.86s-.38.86-.86.86"></svg:path>`,
})
export class IcSharpDirtyLensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDisabledByDefaultIcon],svg[ic-sharp-disabled-by-default-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm14 12.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12z"></svg:path>`,
})
export class IcSharpDisabledByDefaultIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDisabledVisibleIcon],svg[ic-sharp-disabled-visible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.99 12.34c.01-.11.01-.23.01-.34c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.17 3.93 9.43 8.96 9.95a9.3 9.3 0 0 1-2.32-2.68A8.01 8.01 0 0 1 4 12c0-1.85.63-3.55 1.69-4.9l5.66 5.66c.56-.4 1.17-.73 1.82-1L7.1 5.69A7.9 7.9 0 0 1 12 4c4.24 0 7.7 3.29 7.98 7.45c.71.22 1.39.52 2.01.89M17 13c-3.18 0-5.9 1.87-7 4.5c1.1 2.63 3.82 4.5 7 4.5s5.9-1.87 7-4.5c-1.1-2.63-3.82-4.5-7-4.5m0 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m1.5-2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5"></svg:path>`,
})
export class IcSharpDisabledVisibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDiscFullIcon],svg[ic-sharp-disc-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16h2v-2h-2zm0-9v5h2V7zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m0 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcSharpDiscFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDiscordIcon],svg[ic-sharp-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"></svg:path>`,
})
export class IcSharpDiscordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDiscountIcon],svg[ic-sharp-discount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.79 21L3 11.21v2.83l9.79 9.79l9.04-9.04l-1.42-1.41z"></svg:path><svg:path fill="currentColor" d="m3 9.04l9.79 9.79l9.04-9.04L12.04 0H3zM7.25 3a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path>`,
})
export class IcSharpDiscountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDisplaySettingsIcon],svg[ic-sharp-display-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z"></svg:path><svg:path fill="currentColor" d="M6 8.25h8v1.5H6zm10.5 1.5H18v-1.5h-1.5V7H15v4h1.5zm-6.5 2.5h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z"></svg:path>`,
})
export class IcSharpDisplaySettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDiversity1Icon],svg[ic-sharp-diversity-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="14" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M1.22 17.58A2.01 2.01 0 0 0 0 19.43V21h4.5v-1.61c0-.83.23-1.61.63-2.29c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58"></svg:path><svg:circle cx="20" cy="14" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22.78 17.58A6.95 6.95 0 0 0 20 17c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V21H24v-1.57c0-.81-.48-1.53-1.22-1.85m-6.54-.93c-1.17-.52-2.61-.9-4.24-.9s-3.07.39-4.24.9A2.99 2.99 0 0 0 6 19.39V21h12v-1.61c0-1.18-.68-2.26-1.76-2.74M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3"></svg:path><svg:path fill="currentColor" d="M2.48 10.86C2.17 10.1 2 9.36 2 8.6C2 6.02 4.02 4 6.6 4c2.68 0 3.82 1.74 5.4 3.59C13.57 5.76 14.7 4 17.4 4C19.98 4 22 6.02 22 8.6c0 .76-.17 1.5-.48 2.26c.65.31 1.18.82 1.53 1.44c.6-1.2.95-2.42.95-3.7C24 4.9 21.1 2 17.4 2c-2.09 0-4.09.97-5.4 2.51C10.69 2.97 8.69 2 6.6 2C2.9 2 0 4.9 0 8.6c0 1.28.35 2.5.96 3.7c.35-.62.88-1.13 1.52-1.44"></svg:path>`,
})
export class IcSharpDiversity1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDiversity2Icon],svg[ic-sharp-diversity-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.1 15.9l1.42-1.42C8.79 12.05 7 10.41 7 8.85C7 7.8 7.8 7 8.85 7c1.11 0 1.54.65 2.68 2h.93c1.12-1.31 1.53-2 2.68-2c.87 0 1.55.54 1.77 1.32c.35-.04.68-.06 1-.06c.36 0 .7.03 1.03.08C18.7 6.43 17.13 5 15.15 5c-.12 0-.23.03-.35.04c.12-.33.2-.67.2-1.04c0-1.66-1.34-3-3-3S9 2.34 9 4c0 .37.08.71.2 1.04c-.12-.01-.23-.04-.35-.04C6.69 5 5 6.69 5 8.85c0 2.42 2.04 4.31 5.1 7.05"></svg:path><svg:path fill="currentColor" d="M22.5 16.24c-.32-.18-.66-.29-1-.35c.07-.1.15-.18.21-.28c1.08-1.87.46-4.18-1.41-5.26c-2.09-1.21-4.76-.39-8.65.9l.52 1.94c3.47-1.14 5.79-1.88 7.14-1.1c.91.53 1.2 1.61.68 2.53c-.56.96-1.33 1-3.07 1.32l-.47.81c.58 1.62.97 2.33.39 3.32c-.53.91-1.61 1.2-2.53.68c-.06-.03-.11-.09-.17-.13c-.3.67-.64 1.24-1.03 1.73c.07.04.13.09.2.14c1.87 1.08 4.18.46 5.26-1.41c.06-.1.09-.21.14-.32c.22.27.48.51.8.69c1.43.83 3.27.34 4.1-1.1s.32-3.29-1.11-4.11"></svg:path><svg:path fill="currentColor" d="M12.32 14.01c-.74 3.58-1.27 5.95-2.62 6.73c-.91.53-2 .24-2.53-.68c-.56-.96-.2-1.66.39-3.32l-.46-.81c-1.7-.31-2.5-.33-3.07-1.32c-.53-.91-.24-2 .68-2.53c.09-.05.19-.08.29-.11c-.35-.56-.64-1.17-.82-1.85c-.16.07-.32.14-.48.23c-1.87 1.08-2.49 3.39-1.41 5.26c.06.1.14.18.21.28c-.34.06-.68.17-1 .35c-1.43.83-1.93 2.66-1.1 4.1s2.66 1.93 4.1 1.1c.32-.18.58-.42.8-.69c.05.11.08.22.14.32c1.08 1.87 3.39 2.49 5.26 1.41c2.09-1.21 2.71-3.93 3.55-7.94z"></svg:path>`,
})
export class IcSharpDiversity2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDiversity3Icon],svg[ic-sharp-diversity-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.32 13.01c.96.02 1.85.5 2.45 1.34A3.96 3.96 0 0 0 12 16c1.29 0 2.5-.62 3.23-1.66c.6-.84 1.49-1.32 2.45-1.34c-.72-1.22-3.6-2-5.68-2c-2.07 0-4.96.78-5.68 2.01M4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3s1.34 3 3 3m16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3m-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3"></svg:path><svg:path fill="currentColor" d="M21 14h-3.27c-.77 0-1.35.45-1.68.92c-.04.06-1.36 2.08-4.05 2.08c-1.43 0-3.03-.64-4.05-2.08c-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcSharpDiversity3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDivideIcon],svg[ic-sharp-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11h14v2H5zm7.002-7a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4m0 12a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4"></svg:path>`,
})
export class IcSharpDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDnsIcon],svg[ic-sharp-dns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13H3v8h18zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M21 3H3v8h18zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcSharpDnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoDisturbIcon],svg[ic-sharp-do-disturb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.9 7.9 0 0 1 12 20m6.31-3.1L7.1 5.69A7.9 7.9 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9"></svg:path>`,
})
export class IcSharpDoDisturbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoDisturbAltIcon],svg[ic-sharp-do-disturb-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M4 12c0-4.4 3.6-8 8-8c1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12m8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8"></svg:path>`,
})
export class IcSharpDoDisturbAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoDisturbOffIcon],svg[ic-sharp-do-disturb-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11v2h-.88l4.33 4.33A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10a9.9 9.9 0 0 0-5.33 1.55L14.12 11zM2.41 2.13L1 3.54l2.78 2.78A9.9 9.9 0 0 0 2 12c0 5.52 4.48 10 10 10c2.11 0 4.07-.66 5.68-1.78L20.46 23l1.41-1.41zM7 13v-2h1.46l2 2z"></svg:path>`,
})
export class IcSharpDoDisturbOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoDisturbOnIcon],svg[ic-sharp-do-disturb-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5 11H7v-2h10z"></svg:path>`,
})
export class IcSharpDoDisturbOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoNotDisturbIcon],svg[ic-sharp-do-not-disturb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.9 7.9 0 0 1 12 20m6.31-3.1L7.1 5.69A7.9 7.9 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9"></svg:path>`,
})
export class IcSharpDoNotDisturbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoNotDisturbAltIcon],svg[ic-sharp-do-not-disturb-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M4 12c0-4.4 3.6-8 8-8c1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12m8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8"></svg:path>`,
})
export class IcSharpDoNotDisturbAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoNotDisturbOffIcon],svg[ic-sharp-do-not-disturb-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11v2h-1.17l4.51 4.51A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10c-2.04 0-3.93.61-5.51 1.66L13.83 11zM1.39 4.22l2.27 2.27A9.9 9.9 0 0 0 2 12c0 5.52 4.48 10 10 10c2.04 0 3.93-.61 5.51-1.66l2.27 2.27l1.41-1.41L2.81 2.81zM7 11h1.17l2 2H7z"></svg:path>`,
})
export class IcSharpDoNotDisturbOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoNotDisturbOnIcon],svg[ic-sharp-do-not-disturb-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5 11H7v-2h10z"></svg:path>`,
})
export class IcSharpDoNotDisturbOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoNotDisturbOnTotalSilenceIcon],svg[ic-sharp-do-not-disturb-on-total-silence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.6-6-6-6m3 7H9v-2h6z"></svg:path>`,
})
export class IcSharpDoNotDisturbOnTotalSilenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoNotStepIcon],svg[ic-sharp-do-not-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.39 4.22l8.24 8.24l-.69.72l-2.07-2.08c-.11.4-.26.78-.45 1.12l1.75 1.75l-.69.72l-1.63-1.63c-.24.29-.5.56-.77.8l1.63 1.63l-.7.72l-1.74-1.74c-1.44.96-2.93 1.35-3.27 1.45V20h9.5l3.33-3.33l5.94 5.94l1.41-1.41L2.81 2.81zm17.12 11.46l-1.41-1.41l4.48-4.48L23 11.2zm2.37-6.6l-4.48 4.48l-7.1-7.09L13.8 2z"></svg:path>`,
})
export class IcSharpDoNotStepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoNotTouchIcon],svg[ic-sharp-do-not-touch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 10.17l-2.5-2.5V1H13zM20 4h-2.5v7h-1V2H14v9.17l6 6zM9.5 3H7.01v1.18L9.5 6.67zm11.69 18.19L2.81 2.81L1.39 4.22L7 9.83v4.3l-3.32-1.9L2 13.88L9.68 22h9.54l.56.61z"></svg:path>`,
})
export class IcSharpDoNotTouchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDockIcon],svg[ic-sharp-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 23h8v-2H8zM18 1.01L6 1v18h12zM16 15H8V5h8z"></svg:path>`,
})
export class IcSharpDockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDocumentScannerIcon],svg[ic-sharp-document-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3H4v3H2V1h5zm15 3V1h-5v2h3v3zM7 21H4v-3H2v5h5zm13-3v3h-3v2h5v-5zM19 4v16H5V4zm-4 4H9v2h6zm0 3H9v2h6zm0 3H9v2h6z"></svg:path>`,
})
export class IcSharpDocumentScannerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDomainIcon],svg[ic-sharp-domain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z"></svg:path>`,
})
export class IcSharpDomainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDomainAddIcon],svg[ic-sharp-domain-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V3H2v18h14v-2h-4v-2h2v-2h-2v-2h2v-2h-2V9h8v6h2V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm14 12v2h-2v2h-2v-2h-2v-2h2v-2h2v2zm-6-8h-2v2h2zm0 4h-2v2h2z"></svg:path>`,
})
export class IcSharpDomainAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDomainDisabledIcon],svg[ic-sharp-domain-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.41 1.69L0 3.1l2 2V21h15.9l3 3l1.41-1.41zM6 19H4v-2h2zm0-4H4v-2h2zm-2-4V9h2v2zm6 8H8v-2h2zm-2-4v-2h2v2zm4 4v-2h1.9l2 2zM8 5h2v2h-.45L12 9.45V9h8v8.45l2 2V7H12V3H5.55L8 5.45zm8 6h2v2h-2z"></svg:path>`,
})
export class IcSharpDomainDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDomainVerificationIcon],svg[ic-sharp-domain-verification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.6 10.88l-1.42-1.42l-4.24 4.25l-2.12-2.13L7.4 13l3.54 3.54z"></svg:path><svg:path fill="currentColor" d="M3 4v16h18V4zm16 14H5V8h14z"></svg:path>`,
})
export class IcSharpDomainVerificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoneIcon],svg[ic-sharp-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19L21 7l-1.4-1.4z"></svg:path>`,
})
export class IcSharpDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoneAllIcon],svg[ic-sharp-done-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 7l-1.41-1.41l-6.34 6.34l1.41 1.41zm4.24-1.41L11.66 16.17L7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41L6 19l1.41-1.41L1.83 12z"></svg:path>`,
})
export class IcSharpDoneAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoneOutlineIcon],svg[ic-sharp-done-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6l1.4-1.4l4.2 4.2zm0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33z"></svg:path>`,
})
export class IcSharpDoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDonutLargeIcon],svg[ic-sharp-donut-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5.08A7 7 0 0 1 18.92 11h3.03c-.47-4.72-4.23-8.48-8.95-8.95zM18.92 13A7 7 0 0 1 13 18.92v3.03c4.72-.47 8.48-4.23 8.95-8.95zM11 18.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95s3.95 9.45 9 9.95z"></svg:path>`,
})
export class IcSharpDonutLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDonutSmallIcon],svg[ic-sharp-donut-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9.18c.85.3 1.51.97 1.82 1.82h7.13c-.47-4.72-4.23-8.48-8.95-8.95zm-2 5.64C9.84 14.4 9 13.3 9 12s.84-2.4 2-2.82V2.05c-5.05.5-9 4.76-9 9.95s3.95 9.45 9 9.95zM14.82 13c-.3.85-.97 1.51-1.82 1.82v7.13c4.72-.47 8.48-4.23 8.95-8.95z"></svg:path>`,
})
export class IcSharpDonutSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoorBackIcon],svg[ic-sharp-door-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V3H5v16H3v2h18v-2zm-8-6H9v-2h2z"></svg:path>`,
})
export class IcSharpDoorBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoorFrontIcon],svg[ic-sharp-door-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V3H5v16H3v2h18v-2zm-4-6h-2v-2h2z"></svg:path>`,
})
export class IcSharpDoorFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoorSlidingIcon],svg[ic-sharp-door-sliding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3h-7.25v16h-1.5V3H4v16H3v2h18v-2zm-10-6H8v-2h2zm6 0h-2v-2h2z"></svg:path>`,
})
export class IcSharpDoorSlidingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoorbellIcon],svg[ic-sharp-doorbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L4 9v12h16V9zm0 14.5c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1m4-1.5H8v-1h1v-2.34c0-1.54.82-2.82 2.25-3.16v-1h1.5v1c1.44.34 2.25 1.62 2.25 3.16V15h1z"></svg:path>`,
})
export class IcSharpDoorbellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDoubleArrowIcon],svg[ic-sharp-double-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"></svg:path><svg:path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"></svg:path>`,
})
export class IcSharpDoubleArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDownhillSkiingIcon],svg[ic-sharp-downhill-skiing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 4.5c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m-2.72 16.4l.76.27a5.93 5.93 0 0 0 4.34-.17L22 22.13c-1.05.55-2.24.87-3.5.87c-.86 0-1.68-.14-2.45-.41L2 17.47l.5-1.41l6.9 2.51l1.72-4.44l-3.57-3.73c-.89-.94-.67-2.47.45-3.12l3.48-2.01c1.1-.64 2.52-.1 2.91 1.11l.33 1.08a5.02 5.02 0 0 0 2.83 3.14l.52-1.6l1.43.46l-1.12 3.45A7.03 7.03 0 0 1 13 8.59l-2.53 1.45l3.03 3.46l-2.22 5.76l3.09 1.12l2.1-6.44c.46.18.94.31 1.44.41z"></svg:path>`,
})
export class IcSharpDownhillSkiingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDownloadIcon],svg[ic-sharp-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"></svg:path>`,
})
export class IcSharpDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDownloadDoneIcon],svg[ic-sharp-download-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18h14v2H5zm4.6-2.7L5 10.7l2-1.9l2.6 2.6L17 4l2 2z"></svg:path>`,
})
export class IcSharpDownloadDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDownloadForOfflineIcon],svg[ic-sharp-download-for-offline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2m-1 8V6h2v4h3l-4 4l-4-4zm6 7H7v-2h10z"></svg:path>`,
})
export class IcSharpDownloadForOfflineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDownloadingIcon],svg[ic-sharp-downloading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.32 4.26A9.95 9.95 0 0 0 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1a7.94 7.94 0 0 1 1.62 3.9m-1.62 5.9l1.43 1.43a10 10 0 0 0 2.21-5.32h-2.02a7.95 7.95 0 0 1-1.62 3.89M13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62M13 12V7h-2v5H7l5 5l5-5zm-2 7.93v2.02c-5.05-.5-9-4.76-9-9.95s3.95-9.45 9-9.95v2.02C7.05 4.56 4 7.92 4 12s3.05 7.44 7 7.93"></svg:path>`,
})
export class IcSharpDownloadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDraftsIcon],svg[ic-sharp-drafts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.99 6.86L12 1L2 6.86V20h20zM12 13L3.74 7.84L12 3l8.26 4.84z"></svg:path>`,
})
export class IcSharpDraftsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDragHandleIcon],svg[ic-sharp-drag-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9H4v2h16zM4 15h16v-2H4z"></svg:path>`,
})
export class IcSharpDragHandleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDragIndicatorIcon],svg[ic-sharp-drag-indicator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class IcSharpDragIndicatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDrawIcon],svg[ic-sharp-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.85 10.39l2.48-2.48l-4.24-4.24l-2.48 2.48zm-5.66-2.83L4 16.76V21h4.24l9.19-9.19zM19 17.5c0 2.19-2.54 3.5-5 3.5c-.48 0-1-.07-1-.07V18.9s.46.1 1 .1c1.54 0 3-.73 3-1.5c0-.47-.48-.87-1.23-1.2l1.48-1.48c1.07.63 1.75 1.47 1.75 2.68M4.58 13.35C3.61 12.79 3 12.06 3 11c0-1.8 1.89-2.63 3.56-3.36C7.59 7.18 9 6.56 9 6c0-.41-.78-1-2-1c-1.24 0-2 .61-2 1H3c0-1.65 1.7-3 4-3c2.24 0 4 1.32 4 3c0 1.87-1.93 2.72-3.64 3.47C6.42 9.88 5 10.5 5 11c0 .31.43.6 1.07.86z"></svg:path>`,
})
export class IcSharpDrawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDriveEtaIcon],svg[ic-sharp-drive-eta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 5.01L18.57 4H5.43L3 11v9h3v-2h12v2h3v-9zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 10l1.5-4.5h11L19 10z"></svg:path>`,
})
export class IcSharpDriveEtaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDriveFileMoveIcon],svg[ic-sharp-drive-file-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H12l-2-2H2v16h20zM12 17v-3H8v-2h4V9l4 4z"></svg:path>`,
})
export class IcSharpDriveFileMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDriveFileMoveRtlIcon],svg[ic-sharp-drive-file-move-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H12l-2-2H2v16h20zM12 17l-4-4l4-4v3h4v2h-4z"></svg:path>`,
})
export class IcSharpDriveFileMoveRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDriveFileRenameOutlineIcon],svg[ic-sharp-drive-file-rename-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 16l-4 4h10v-4zm-2.94-8.81L3 16.25V20h3.75l9.06-9.06zm1.072-1.067l2.539-2.539l3.747 3.748L16.88 9.87z"></svg:path>`,
})
export class IcSharpDriveFileRenameOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDriveFolderUploadIcon],svg[ic-sharp-drive-folder-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H12l-2-2H2v16h20zm-9 7v4h-2v-4H8l4.01-4L16 13z"></svg:path>`,
})
export class IcSharpDriveFolderUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDryIcon],svg[ic-sharp-dry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12.68V23h18v-2.5h-7v-1h9V17h-9v-1h10v-2.5H12v-1h8V10H8.86l1.88-3.3L9.12 5zm14.65-7.82l-.07-.07c-.57-.62-.82-1.41-.67-2.2L15 2h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71m4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L19 2h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71"></svg:path>`,
})
export class IcSharpDryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDryCleaningIcon],svg[ic-sharp-dry-cleaning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 12l-8-3.56V6h-1c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1h2c0-1.84-1.66-3.3-3.56-2.95c-1.18.22-2.15 1.17-2.38 2.35c-.3 1.56.6 2.94 1.94 3.42v.63l-8 3.56V16h4v6h10v-6h4zm-2 2h-2v-1H7v1H5v-.7l7-3.11l7 3.11z"></svg:path>`,
})
export class IcSharpDryCleaningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDuoIcon],svg[ic-sharp-duo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h-8C6.38 2 2 6.66 2 12.28C2 17.5 6.49 22 11.72 22C17.39 22 22 17.62 22 12V4c0-1.1-.9-2-2-2m-3 13l-3-2v2H7V9h7v2l3-2z"></svg:path>`,
})
export class IcSharpDuoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDvrIcon],svg[ic-sharp-dvr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v16h7v2h8v-2h7zm-2 14H3V5h18zm-2-9H8v2h11zm0 4H8v2h11zM7 8H5v2h2zm0 4H5v2h2z"></svg:path>`,
})
export class IcSharpDvrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDynamicFeedIcon],svg[ic-sharp-dynamic-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8H6v9h11v-2H8z"></svg:path><svg:path fill="currentColor" d="M22 3H10v10h12zm-2 8h-8V7h8zM4 12H2v9h11v-2H4z"></svg:path>`,
})
export class IcSharpDynamicFeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpDynamicFormIcon],svg[ic-sharp-dynamic-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20v-9h-2V4h7l-2 5h2zm-2-7v7H2v-7zm-8.75 2.75h-1.5v1.5h1.5zM13 4v7H2V4zM6.25 6.75h-1.5v1.5h1.5z"></svg:path>`,
})
export class IcSharpDynamicFormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEMobiledataIcon],svg[ic-sharp-e-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9z"></svg:path>`,
})
export class IcSharpEMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEarbudsIcon],svg[ic-sharp-earbuds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.2 3.01C4.44 2.89 3 4.42 3 6.19V16c0 2.76 2.24 5 5 5s5-2.24 5-5V8c0-1.66 1.34-3 3-3s3 1.34 3 3v7h-.83c-1.61 0-3.06 1.18-3.17 2.79A3 3 0 0 0 17.8 21c1.76.12 3.2-1.42 3.2-3.18V8c0-2.76-2.24-5-5-5s-5 2.24-5 5v8c0 1.66-1.34 3-3 3s-3-1.34-3-3V9h.83C7.44 9 8.89 7.82 9 6.21c.11-1.68-1.17-3.1-2.8-3.2"></svg:path><svg:path fill="currentColor" d="M6 3h3v6H6zm9 12h3v6h-3z"></svg:path>`,
})
export class IcSharpEarbudsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEarbudsBatteryIcon],svg[ic-sharp-earbuds-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7V6h-2v1h-2v11h6V7zM5.38 16.5c-1.04 0-1.88-.84-1.88-1.87V10H6V6H4c-1.1 0-2 .9-2 2v6.63C2 16.49 3.51 18 5.37 18s3.37-1.51 3.37-3.37V9.37c0-1.04.84-1.87 1.87-1.87c1.04 0 1.87.84 1.87 1.87V14H10v4h2c1.1 0 2-.9 2-2V9.37C14 7.51 12.49 6 10.63 6C8.76 6 7.25 7.51 7.25 9.37v5.25c0 1.04-.84 1.88-1.87 1.88"></svg:path>`,
})
export class IcSharpEarbudsBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEastIcon],svg[ic-sharp-east-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"></svg:path>`,
})
export class IcSharpEastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEcoIcon],svg[ic-sharp-eco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.05 8.05a7 7 0 0 0-.02 9.88c1.47-3.4 4.09-6.24 7.36-7.93A15.95 15.95 0 0 0 8 19.32c2.6 1.23 5.8.78 7.95-1.37C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05"></svg:path>`,
})
export class IcSharpEcoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEdgesensorHighIcon],svg[ic-sharp-edgesensor-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h2v7H3zm-3 3h2v7H0zm22-3h2v7h-2zm-3 3h2v7h-2zm-1-8H6v20h12zm-2 15H8V7h8z"></svg:path>`,
})
export class IcSharpEdgesensorHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEdgesensorLowIcon],svg[ic-sharp-edgesensor-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h2v7H2zm18 3h2v7h-2zM6 2v20h12V2zm10 15H8V7h8z"></svg:path>`,
})
export class IcSharpEdgesensorLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEditIcon],svg[ic-sharp-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM21.41 6.34l-3.75-3.75l-2.53 2.54l3.75 3.75z"></svg:path>`,
})
export class IcSharpEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEditAttributesIcon],svg[ic-sharp-edit-attributes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.63 7H6.37C3.96 7 2 9.24 2 12s1.96 5 4.37 5h11.26c2.41 0 4.37-2.24 4.37-5s-1.96-5-4.37-5M7.24 14.46l-2.57-2.57l.7-.7l1.87 1.87l3.52-3.52l.7.7z"></svg:path>`,
})
export class IcSharpEditAttributesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEditCalendarIcon],svg[ic-sharp-edit-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22H3V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h7zm10.13-5.01l1.41-1.41l-2.12-2.12l-1.41 1.41zm-.71.71l-5.3 5.3H14v-2.12l5.3-5.3z"></svg:path>`,
})
export class IcSharpEditCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEditLocationIcon],svg[ic-sharp-edit-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.11 1.77L19.78.1l2.12 2.12l-1.67 1.67zm-1 1l2.12 2.12L13.12 11H11V8.89zm-1.98-.13L9.5 8.27v4.24h4.24l5.62-5.62c.41.99.64 2.1.64 3.32c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8c0-4.98 3.8-8.2 8-8.2c1.09 0 2.16.22 3.13.63"></svg:path>`,
})
export class IcSharpEditLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEditLocationAltIcon],svg[ic-sharp-edit-location-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.95 13H9V8.05l5.61-5.61A8.2 8.2 0 0 0 12 2c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8c0-1.01-.16-1.94-.45-2.8zM11 11h2.12l6.16-6.16l-2.12-2.12L11 8.88zM19.29.59l-1.42 1.42l2.12 2.12l1.42-1.42z"></svg:path>`,
})
export class IcSharpEditLocationAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEditNoteIcon],svg[ic-sharp-edit-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13l1.41-1.41l2.12 2.12l-1.41 1.41zm-.71.71l-5.3 5.3V21h2.12l5.3-5.3z"></svg:path>`,
})
export class IcSharpEditNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEditNotificationsIcon],svg[ic-sharp-edit-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.58 6.25l1.77 1.77L14.37 13H12.6v-1.77zm3.27-.44l-1.06-1.06c-.2-.2-.51-.2-.71 0l-.85.85L20 7.37l.85-.85c.2-.2.2-.52 0-.71M18 12.2V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8V2h3v2.2c.82.21 1.57.59 2.21 1.09L10.6 10.4V15h4.6zM10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2"></svg:path>`,
})
export class IcSharpEditNotificationsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEditOffIcon],svg[ic-sharp-edit-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 6.33l-3.75-3.75l-2.53 2.54l3.75 3.75zM1.39 4.22l7.32 7.32L3 17.25V21h3.75l5.71-5.71l7.32 7.32l1.41-1.41L2.81 2.81zm16.42 5.72l-3.75-3.75l-2.52 2.52l3.75 3.75z"></svg:path>`,
})
export class IcSharpEditOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEditRoadIcon],svg[ic-sharp-edit-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h-2v7.9l2-2zM4 4h2v16H4zm6 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm12.56-3.41l-1.15-1.15a1.49 1.49 0 0 0-2.12 0L14 16.73V20h3.27l5.29-5.29c.59-.59.59-1.54 0-2.12m-5.98 5.86h-1.03v-1.03L19 13.97L20.03 15z"></svg:path>`,
})
export class IcSharpEditRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEggIcon],svg[ic-sharp-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11m1 15c-3 0-5-1.99-5-5v-1h2v1c0 2.92 2.42 3 3 3h1v2z"></svg:path>`,
})
export class IcSharpEggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEggAltIcon],svg[ic-sharp-egg-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9c-2-2-3.01-7-9.03-7C4.95 2 1.94 6 2 11.52S6.96 19 9.97 19c2.01 0 2.01 3 6.02 3C19 22 22 19 22 15.02C22 12 21.01 11 19 9m-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5"></svg:path>`,
})
export class IcSharpEggAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEjectIcon],svg[ic-sharp-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></svg:path>`,
})
export class IcSharpEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpElderlyIcon],svg[ic-sharp-elderly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m6.5 7V23h-1V12.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1h-1v-.69a6.02 6.02 0 0 1-3.51-2.52c-.31.87-.49 1.78-.49 2.71c0 .23.02.46.03.69L15 16.5V23h-2v-5l-1.78-2.54L11 19l-3 4l-1.6-1.2L9 18.33V13c0-1.15.18-2.29.5-3.39l-1.5.85V14H6V9.3l5.4-3.07v.01a2 2 0 0 1 1.94.03c.36.21.63.51.8.85l.79 1.67A3.99 3.99 0 0 0 18.5 11c.83 0 1.5.67 1.5 1.5"></svg:path>`,
})
export class IcSharpElderlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpElderlyWomanIcon],svg[ic-sharp-elderly-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 11c-1.56 0-2.92-.9-3.58-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6C8.72 6 6 16.69 6 19h2.5l-2.1 2.8L8 23l3-4h2v4h2v-4.03L13 13l.49-2.71A6.02 6.02 0 0 0 17 12.81v.69h1v-1c0-.28.22-.5.5-.5s.5.22.5.5V23h1V12.5c0-.83-.67-1.5-1.5-1.5m-6.9-8.09c-.06.19-.1.38-.1.59c0 1.1.9 2 2 2s2-.9 2-2s-.9-2-2-2c-.21 0-.4.04-.59.1c-.15-.35-.5-.6-.91-.6c-.55 0-1 .45-1 1c0 .41.25.76.6.91"></svg:path>`,
})
export class IcSharpElderlyWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpElectricBikeIcon],svg[ic-sharp-electric-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-.82L16 1h-4v2h2.6l1.46 4h-4.81l-.36-1H12V4H7v2h1.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 6.87 0 9.2 0 12s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99c2.8.13 5.25-2.19 5.25-5C24 9.2 21.8 7 19 7M7.82 13c-.4 1.17-1.49 2-2.82 2c-1.68 0-3-1.32-3-3s1.32-3 3-3c1.33 0 2.42.83 2.82 2H5v2zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2m4.9 4c-1.68 0-3-1.32-3-3c0-.93.41-1.73 1.05-2.28l.96 2.64l1.88-.68l-.97-2.67c.02 0 .05-.01.08-.01c1.68 0 3 1.32 3 3s-1.32 3-3 3m-8 5H7l6 3v-2h4l-6-3z"></svg:path>`,
})
export class IcSharpElectricBikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpElectricBoltIcon],svg[ic-sharp-electric-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2L2.5 13L13 14l-5 7l1 1l12.5-11L11 10l5-7z"></svg:path>`,
})
export class IcSharpElectricBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpElectricCarIcon],svg[ic-sharp-electric-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.58 1H5.43L3 8v9h3v-2h12v2h3V8zM6.5 12c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9S8 9.67 8 10.5S7.33 12 6.5 12m11 0c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 7l1.5-4.5h11L19 7zm2 13h4v-2l6 3h-4v2z"></svg:path>`,
})
export class IcSharpElectricCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpElectricMeterIcon],svg[ic-sharp-electric-meter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.96 0-9 4.04-9 9c0 3.91 2.51 7.24 6 8.47V22h2v-2.06a8.3 8.3 0 0 0 2 0V22h2v-2.53c3.49-1.24 6-4.57 6-8.47c0-4.96-4.04-9-9-9m2.25 12l-3 3l-1.5-1.5L11 14.25L9.75 13l3-3l1.5 1.5L13 12.75zM16 9H8V7h8z"></svg:path>`,
})
export class IcSharpElectricMeterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpElectricMopedIcon],svg[ic-sharp-electric-moped-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8.35V3h-5v2h3v2.65L13.52 12H10V7H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48zM7 15c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"></svg:path><svg:path fill="currentColor" d="M5 4h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M7 20h4v-2l6 3h-4v2z"></svg:path>`,
})
export class IcSharpElectricMopedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpElectricRickshawIcon],svg[ic-sharp-electric-rickshaw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.18V9l-5-6H1v12h2.18C3.6 16.16 4.7 17 6 17s2.4-.84 2.82-2h8.37c.48 1.34 1.86 2.25 3.42 1.94c1.16-.23 2.11-1.17 2.33-2.33c.31-1.56-.6-2.95-1.94-3.43M18.4 9H16V6.12zM3 5h4v4H3zm3 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3-2v-2h3V9H9V5h5v8zm11 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M7 20h4v-2l6 3h-4v2z"></svg:path>`,
})
export class IcSharpElectricRickshawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpElectricScooterIcon],svg[ic-sharp-electric-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74L17.49 1H12v2h3.89l1.4 6.25h-.01A6.01 6.01 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2M5 16c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path><svg:path fill="currentColor" d="M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-8 4H7l6 3v-2h4l-6-3z"></svg:path>`,
})
export class IcSharpElectricScooterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpElectricalServicesIcon],svg[ic-sharp-electrical-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13h3v2h-3zm-6-1v2h-2v4h2v2h5v-8z"></svg:path><svg:path fill="currentColor" d="M5 11h7V4H4v2h6v3H3v8h6v-2H5zm13 6h3v2h-3z"></svg:path>`,
})
export class IcSharpElectricalServicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpElevatorIcon],svg[ic-sharp-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM8.5 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m2.5 8h-1v4H7v-4H6V9.5h5zm4.5 3L13 13h5zM13 11l2.5-4l2.5 4z"></svg:path>`,
})
export class IcSharpElevatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmailIcon],svg[ic-sharp-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zm-2 4l-8 5l-8-5V6l8 5l8-5z"></svg:path>`,
})
export class IcSharpEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmergencyIcon],svg[ic-sharp-emergency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.79 9.23l-2-3.46L14 8.54V3h-4v5.54L5.21 5.77l-2 3.46L8 12l-4.79 2.77l2 3.46L10 15.46V21h4v-5.54l4.79 2.77l2-3.46L16 12z"></svg:path>`,
})
export class IcSharpEmergencyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmergencyRecordingIcon],svg[ic-sharp-emergency-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10.48V4H2v16h16v-6.48l4 3.98v-11zM12 12l3 1.73l-1 1.73l-3-1.73V17H9v-3.27l-3 1.73l-1-1.73L8 12l-3-1.73l1-1.73l3 1.73V7h2v3.27l3-1.73l1 1.73z"></svg:path>`,
})
export class IcSharpEmergencyRecordingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmergencyShareIcon],svg[ic-sharp-emergency-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9c-3.15 0-6 2.41-6 6.15q0 3.735 6 8.85q6-5.115 6-8.85C18 11.41 15.15 9 12 9m0 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M12 4c1.93 0 3.68.78 4.95 2.05l-1.41 1.41a5.02 5.02 0 0 0-7.08 0L7.05 6.05A6.98 6.98 0 0 1 12 4m7.78-.77l-1.41 1.41C16.74 3.01 14.49 2 12.01 2S7.27 3.01 5.64 4.63L4.22 3.22C6.22 1.23 8.97 0 12.01 0s5.78 1.23 7.77 3.23"></svg:path>`,
})
export class IcSharpEmergencyShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmojiEmotionsIcon],svg[ic-sharp-emoji-emotions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11S7 10.33 7 9.5S7.67 8 8.5 8M12 18c-2.28 0-4.22-1.66-5-4h10c-.78 2.34-2.72 4-5 4m3.5-7c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcSharpEmojiEmotionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmojiEventsIcon],svg[ic-sharp-emoji-events-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"></svg:path>`,
})
export class IcSharpEmojiEventsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmojiFlagsIcon],svg[ic-sharp-emoji-flags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 9l-1-2H7V5.72c.6-.34 1-.98 1-1.72c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V21h2v-4h5l1 2h7V9zm4 8h-4l-1-2H7V9h5l1 2h5z"></svg:path>`,
})
export class IcSharpEmojiFlagsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmojiFoodBeverageIcon],svg[ic-sharp-emoji-food-beverage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19h18v2H2zM20 3H9v2.4L11 7v5H6V7l2-1.6V3H4v14h14v-7h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2z"></svg:path>`,
})
export class IcSharpEmojiFoodBeverageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmojiNatureIcon],svg[ic-sharp-emoji-nature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.94 4.88A1.32 1.32 0 0 0 20.68 4H19.6l-.31-.97C19.15 2.43 18.61 2 18 2s-1.15.43-1.29 1.04L16.4 4h-1.07c-.57 0-1.08.35-1.26.88c-.19.56.04 1.17.56 1.48l.87.52l-.4 1.24c-.23.58-.04 1.25.45 1.62c.23.17.51.26.78.26c.31 0 .61-.11.86-.32l.81-.7l.81.7c.25.21.55.32.86.32c.27 0 .55-.09.78-.26c.5-.37.68-1.04.45-1.62l-.39-1.24l.87-.52c.51-.31.74-.92.56-1.48M18 7c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-4.51 3.51c-.43-.43-.94-.73-1.49-.93V8h-1v1.38c-.11-.01-.23-.03-.34-.03c-1.02 0-2.05.39-2.83 1.17c-.16.16-.3.34-.43.53L6 10.52a3.01 3.01 0 0 0-3.83 1.82c-.27.75-.23 1.57.12 2.29c.23.48.58.87 1 1.16c-.38 1.35-.06 2.85 1 3.91a3.98 3.98 0 0 0 3.91 1c.29.42.68.77 1.16 1q.63.3 1.29.3c.34 0 .68-.06 1.01-.17a3.007 3.007 0 0 0 1.82-3.85l-.52-1.37c.18-.13.36-.27.53-.43c.87-.87 1.24-2.04 1.14-3.17H16v-1h-1.59c-.19-.55-.49-1.06-.92-1.5m-8.82 3.78c-.25-.09-.45-.27-.57-.51s-.13-.51-.04-.76c.19-.52.76-.79 1.26-.61l3.16 1.19c-1.15.6-2.63 1.11-3.81.69m6.32 5.65c-.25.09-.52.08-.76-.04a1 1 0 0 1-.51-.57c-.42-1.18.09-2.65.7-3.8l1.18 3.13c.18.52-.09 1.1-.61 1.28m1.21-5.34l-.61-1.61c0-.01-.01-.02-.02-.03l-.06-.12a1 1 0 0 0-.07-.11l-.09-.09l-.09-.09c-.03-.03-.07-.05-.11-.07s-.07-.05-.12-.06c-.01 0-.02-.01-.03-.02l-1.6-.6a1.966 1.966 0 0 1 2.67.13c.73.73.77 1.88.13 2.67"></svg:path>`,
})
export class IcSharpEmojiNatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmojiObjectsIcon],svg[ic-sharp-emoji-objects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-.42 0-.85.04-1.28.11c-2.81.5-5.08 2.75-5.6 5.55c-.48 2.61.48 5.01 2.22 6.56c.43.38.66.91.66 1.47V21h2.28a1.98 1.98 0 0 0 3.44 0H16v-4.31c0-.55.22-1.09.64-1.46A6.96 6.96 0 0 0 19 10c0-3.87-3.13-7-7-7m2 16h-4v-1h4zm0-2h-4v-1h4zm-1.5-5.59V14h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62l.71.71z"></svg:path>`,
})
export class IcSharpEmojiObjectsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmojiPeopleIcon],svg[ic-sharp-emoji-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54C8.24 6.99 6 4.75 6 2H4c0 3.16 2.11 5.84 5 6.71V22h2v-6h2v6h2V10.05L18.95 14l1.41-1.41z"></svg:path>`,
})
export class IcSharpEmojiPeopleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmojiSymbolsIcon],svg[ic-sharp-emoji-symbols-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h8v2H3zm3 9h2V7h3V5H3v2h3zm6.404 9.182l7.778-7.778l1.414 1.414l-7.778 7.778z"></svg:path><svg:circle cx="14.5" cy="14.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="19.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15.5 11A2.5 2.5 0 0 0 18 8.5V4h3V2h-4v4.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5m-5.76 4.96l-1.41 1.41l-.71-.71l.35-.35a2.499 2.499 0 0 0-1.77-4.27a2.499 2.499 0 0 0-1.77 4.27l.35.35l-1.06 1.06c-.98.98-.98 2.56 0 3.54c.5.5 1.14.74 1.78.74s1.28-.24 1.77-.73l1.06-1.06l1.41 1.41l1.41-1.41l-1.41-1.41l1.41-1.41zM5.85 14.2c.12-.12.26-.15.35-.15s.23.03.35.15c.19.2.19.51 0 .71l-.35.35l-.35-.36a.5.5 0 0 1 0-.7m0 5.65c-.12.12-.26.15-.35.15s-.23-.03-.35-.15a.513.513 0 0 1 0-.71l1.06-1.06l.71.71z"></svg:path>`,
})
export class IcSharpEmojiSymbolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEmojiTransportationIcon],svg[ic-sharp-emoji-transportation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.57 10.66c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66L10 14.77l.01 5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V19h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14zm-8.16.34h7.19l1.03 3h-9.25zM12 17c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m8 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path><svg:path fill="currentColor" d="M14 9h1V3H7v5H2v13h1V9h5V4h6z"></svg:path><svg:path fill="currentColor" d="M5 11h2v2H5zm5-6h2v2h-2zM5 15h2v2H5zm0 4h2v2H5z"></svg:path>`,
})
export class IcSharpEmojiTransportationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEnergySavingsLeafIcon],svg[ic-sharp-energy-savings-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-4.8 0-9 3.86-9 9c0 2.12.74 4.07 1.97 5.61L3 19.59L4.41 21l1.97-1.97A9 9 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V3zm-1.5 14l-.5-.5l2.5-3.5l-5-.5l6-5.5l.5.5l-2.5 3.5l5 .5z"></svg:path>`,
})
export class IcSharpEnergySavingsLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEngineeringIcon],svg[ic-sharp-engineering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m4.75-7H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.75v1h9.5zM9 13c1.86 0 3.41-1.28 3.86-3H5.14c.45 1.72 2 3 3.86 3m12.98-6.77l.93-.83l-.75-1.3l-1.19.39c-.14-.11-.3-.2-.47-.27L20.25 3h-1.5l-.25 1.22q-.255.105-.48.27l-1.18-.39l-.75 1.3l.93.83c-.02.17-.02.35 0 .52l-.93.85l.75 1.3l1.2-.38c.13.1.28.18.43.25l.28 1.23h1.5l.27-1.22c.16-.07.3-.15.44-.25l1.19.38l.75-1.3l-.93-.85c.03-.19.02-.36.01-.53M19.5 7.75a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m-.1 3.04l-.85.28c-.1-.08-.21-.14-.33-.19l-.18-.88h-1.07l-.18.87c-.12.05-.24.12-.34.19l-.84-.28l-.54.93l.66.59c-.01.13-.01.25 0 .37l-.66.61l.54.93l.86-.27c.1.07.2.13.31.18l.18.88h1.07l.19-.87c.11-.05.22-.11.32-.18l.85.27l.54-.93l-.66-.61c.01-.13.01-.25 0-.37l.66-.59zm-1.9 2.6c-.49 0-.89-.4-.89-.89s.4-.89.89-.89s.89.4.89.89s-.4.89-.89.89"></svg:path>`,
})
export class IcSharpEngineeringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEnhancedEncryptionIcon],svg[ic-sharp-enhanced-encryption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-3V6.22c0-2.61-1.91-4.94-4.51-5.19A4.995 4.995 0 0 0 7 6v2H4v14h16zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3z"></svg:path>`,
})
export class IcSharpEnhancedEncryptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEqualizerIcon],svg[ic-sharp-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20h4V4h-4zm-6 0h4v-8H4zM16 9v11h4V9z"></svg:path>`,
})
export class IcSharpEqualizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEqualsIcon],svg[ic-sharp-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9.998H5v-2h14zm0 6H5v-2h14z"></svg:path>`,
})
export class IcSharpEqualsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpErrorIcon],svg[ic-sharp-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"></svg:path>`,
})
export class IcSharpErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpErrorOutlineIcon],svg[ic-sharp-error-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"></svg:path>`,
})
export class IcSharpErrorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEscalatorIcon],svg[ic-sharp-escalator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-2.5 6h-3.2l-5 9H5.5v-3h3.2l5-9h4.8z"></svg:path>`,
})
export class IcSharpEscalatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEscalatorWarningIcon],svg[ic-sharp-escalator-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m9 7.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5m-1.29 3.36l-.92 1.32L9.72 8c-.35-.62-1.01-1-1.73-1H3v8h1.5v7h5V11.61L12.03 16h2.2l.77-1.1V22h4v-5h1v-5h-4.15c-.66 0-1.27.32-1.64.86"></svg:path>`,
})
export class IcSharpEscalatorWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEuroIcon],svg[ic-sharp-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18.5A6.48 6.48 0 0 1 9.24 15H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24A6.49 6.49 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.96 8.96 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06a8.3 8.3 0 0 0 0 2H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6c2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57"></svg:path>`,
})
export class IcSharpEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEuroSymbolIcon],svg[ic-sharp-euro-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18.5A6.48 6.48 0 0 1 9.24 15H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24A6.49 6.49 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.96 8.96 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06a8.3 8.3 0 0 0 0 2H3v2h3.52c1.24 3.49 4.56 6 8.48 6c2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57"></svg:path>`,
})
export class IcSharpEuroSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEvStationIcon],svg[ic-sharp-ev-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.77 7.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11c-1.05.4-1.76 1.47-1.58 2.71c.16 1.1 1.1 1.99 2.2 2.11c.47.05.88-.03 1.27-.2v8.21h-2V12h-3V3H4v18h10v-7.5h1.5V21h5V9c0-.69-.28-1.32-.73-1.77M18 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M8 18v-4.5H6L10 6v5h2z"></svg:path>`,
})
export class IcSharpEvStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEventIcon],svg[ic-sharp-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13h-5v5h5zM16 2v2H8V2H6v2H3.01L3 22h18V4h-3V2zm3 18H5V9h14z"></svg:path>`,
})
export class IcSharpEventIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEventAvailableIcon],svg[ic-sharp-event-available-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.53 11.06L15.47 10l-4.88 4.88l-2.12-2.12l-1.06 1.06L10.59 17zM21 3h-3V1h-2v2H8V1H6v2H3v18h18zm-2 16H5V8h14z"></svg:path>`,
})
export class IcSharpEventAvailableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEventBusyIcon],svg[ic-sharp-event-busy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.31 17l2.44-2.44L14.19 17l1.06-1.06l-2.44-2.44l2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06l2.44 2.44l-2.44 2.44zM21 3h-3V1h-2v2H8V1H6v2H3.01L3 21h18zm-2 16H5V8h14z"></svg:path>`,
})
export class IcSharpEventBusyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEventNoteIcon],svg[ic-sharp-event-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10H7v2h10zm4-7h-3V1h-2v2H8V1H6v2H3v18h18zm-2 16H5V8h14zm-5-5H7v2h7z"></svg:path>`,
})
export class IcSharpEventNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEventRepeatIcon],svg[ic-sharp-event-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12V4h-3V2h-2v2H8V2H6v2H3v18h9v-2H5V10h14v2zm-5.36 8a3.504 3.504 0 0 0 6.86-1c0-1.93-1.57-3.5-3.5-3.5c-.95 0-1.82.38-2.45 1H18V18h-4v-4h1.5v1.43c.9-.88 2.14-1.43 3.5-1.43c2.76 0 5 2.24 5 5a5.002 5.002 0 0 1-9.9 1z"></svg:path>`,
})
export class IcSharpEventRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpEventSeatIcon],svg[ic-sharp-event-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h3v-3h10v3h3v-6H4zm15-11h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2z"></svg:path>`,
})
export class IcSharpEventSeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExitToAppIcon],svg[ic-sharp-exit-to-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67zM21 3H3v6h2V5h14v14H5v-4H3v6h18z"></svg:path>`,
})
export class IcSharpExitToAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExpandIcon],svg[ic-sharp-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4l-4 4h3v6H8l4 4l4-4h-3z"></svg:path>`,
})
export class IcSharpExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExpandCircleDownIcon],svg[ic-sharp-expand-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 13.5L7.5 11l1.42-1.41L12 12.67l3.08-3.08L16.5 11z"></svg:path>`,
})
export class IcSharpExpandCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExpandLessIcon],svg[ic-sharp-expand-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8l-6 6l1.41 1.41L12 10.83l4.59 4.58L18 14z"></svg:path>`,
})
export class IcSharpExpandLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExpandMoreIcon],svg[ic-sharp-expand-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6z"></svg:path>`,
})
export class IcSharpExpandMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExplicitIcon],svg[ic-sharp-explicit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-6 6h-4v2h4v2h-4v2h4v2H9V7h6z"></svg:path>`,
})
export class IcSharpExplicitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExploreIcon],svg[ic-sharp-explore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1s1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m2.19 12.19L6 18l3.81-8.19L18 6z"></svg:path>`,
})
export class IcSharpExploreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExploreOffIcon],svg[ic-sharp-explore-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 6l-2.91 6.26l5.25 5.25A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10c-2.04 0-3.93.61-5.51 1.66l5.25 5.25zM2.1 4.93l1.56 1.56A9.9 9.9 0 0 0 2 12c0 5.52 4.48 10 10 10c2.04 0 3.93-.61 5.51-1.66l1.56 1.56l1.41-1.41L3.51 3.51zm6.81 6.81l3.35 3.35L6 18z"></svg:path>`,
})
export class IcSharpExploreOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExposureIcon],svg[ic-sharp-exposure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM6 7h5v1.5H6zm13 12H5L19 5zm-4.5-3v2H16v-2h2v-1.5h-2v-2h-1.5v2h-2V16z"></svg:path>`,
})
export class IcSharpExposureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExposureNeg1Icon],svg[ic-sharp-exposure-neg-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11v2h8v-2zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3z"></svg:path>`,
})
export class IcSharpExposureNeg1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExposureNeg2Icon],svg[ic-sharp-exposure-neg-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18s.59-.78.82-1.17s.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46s-.44-.81-.78-1.11c-.34-.31-.77-.54-1.26-.71A5.7 5.7 0 0 0 16.47 5c-.69 0-1.31.11-1.85.32s-1 .51-1.36.88c-.37.37-.65.8-.84 1.3c-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87c.09-.29.23-.54.4-.75c.18-.21.41-.37.68-.49s.6-.18.96-.18q.465 0 .81.15c.345.15.43.25.59.43s.28.4.37.65c.08.25.13.52.13.81c0 .22-.03.43-.08.65c-.06.22-.15.45-.29.7s-.32.53-.56.83c-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71zM2 11v2h8v-2z"></svg:path>`,
})
export class IcSharpExposureNeg2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExposurePlus1Icon],svg[ic-sharp-exposure-plus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3z"></svg:path>`,
})
export class IcSharpExposurePlus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExposurePlus2Icon],svg[ic-sharp-exposure-plus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18s.59-.78.82-1.17s.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46s-.44-.81-.78-1.11c-.34-.31-.77-.54-1.26-.71A5.7 5.7 0 0 0 17.47 5c-.69 0-1.31.11-1.85.32s-1 .51-1.36.88c-.37.37-.65.8-.84 1.3c-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87c.09-.29.23-.54.4-.75c.18-.21.41-.37.68-.49s.6-.18.96-.18q.465 0 .81.15c.345.15.43.25.59.43s.28.4.37.65c.08.25.13.52.13.81c0 .22-.03.43-.08.65c-.06.22-.15.45-.29.7s-.32.53-.56.83c-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71zM8 7H6v4H2v2h4v4h2v-4h4v-2H8z"></svg:path>`,
})
export class IcSharpExposurePlus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExposureZeroIcon],svg[ic-sharp-exposure-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.14 12.5q0 1.5-.3 2.55c-.3 1.05-.48 1.27-.83 1.7c-.36.44-.79.75-1.3.95s-1.07.3-1.7.3c-.62 0-1.18-.1-1.69-.3s-.95-.51-1.31-.95s-.65-1.01-.85-1.7q-.3-1.05-.3-2.55v-2.04q0-1.5.3-2.55c.2-.7.48-1.26.84-1.69s.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29s.95.5 1.31.93s.64.99.84 1.69s.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62c-.09-.44-.22-.79-.4-1.06c-.17-.27-.39-.46-.64-.58c-.25-.13-.54-.19-.86-.19s-.61.06-.86.18s-.47.31-.64.58s-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62c.09.45.23.81.4 1.09s.39.48.64.61s.54.19.87.19s.62-.06.87-.19s.46-.33.63-.61s.3-.64.39-1.09s.13-.99.13-1.62v-2.66z"></svg:path>`,
})
export class IcSharpExposureZeroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExtensionIcon],svg[ic-sharp-extension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.36 11H19V5h-6V3.64c0-1.31-.94-2.5-2.24-2.63A2.5 2.5 0 0 0 8 3.5V5H2.01v5.8H3.4c1.31 0 2.5.88 2.75 2.16c.33 1.72-.98 3.24-2.65 3.24H2V22h5.8v-1.4c0-1.31.88-2.5 2.16-2.75c1.72-.33 3.24.98 3.24 2.65V22H19v-6h1.5a2.5 2.5 0 0 0 2.49-2.76c-.13-1.3-1.33-2.24-2.63-2.24"></svg:path>`,
})
export class IcSharpExtensionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpExtensionOffIcon],svg[ic-sharp-extension-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.78 22.61l-1.63-1.63c-.05 0-.1.02-.15.02h-3.8c0-2.71-2.16-3-2.7-3s-2.7.29-2.7 3H3v-5.8c2.71 0 3-2.16 3-2.7s-.3-2.7-2.99-2.7V6c0-.05.02-.09.02-.14L1.39 4.22L2.8 2.81l18.38 18.38zm.22-5.44V15a2.5 2.5 0 0 0 0-5V4h-6a2.5 2.5 0 0 0-5 0H6.83z"></svg:path>`,
})
export class IcSharpExtensionOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFaceIcon],svg[ic-sharp-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m6 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8c0-.29.02-.58.05-.86c2.36-1.05 4.23-2.98 5.21-5.37a9.97 9.97 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26c0 4.41-3.59 8-8 8"></svg:path>`,
})
export class IcSharpFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFace2Icon],svg[ic-sharp-face-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.97 13.52v-.04C23.21 12.38 24 10.78 24 9c0-3.31-2.69-6-6-6q-.39 0-.78.06a5.98 5.98 0 0 0-10.44 0Q6.39 3 6 3C2.69 3 0 5.69 0 9c0 1.78.79 3.38 2.02 4.48v.04A6 6 0 0 0 0 18c0 3.31 2.69 6 6 6c1.39 0 2.67-.48 3.69-1.28c.74.18 1.51.28 2.31.28s1.57-.1 2.31-.28c1.02.8 2.3 1.28 3.69 1.28c3.31 0 6-2.69 6-6c0-1.78-.79-3.38-2.03-4.48M12 21c-4.41 0-8-3.59-8-8c0-3.72 2.56-6.85 6-7.74v.05c0 3.34 2.72 6.06 6.06 6.06c1.26 0 2.45-.39 3.45-1.09c.31.86.49 1.77.49 2.72c0 4.41-3.59 8-8 8"></svg:path><svg:circle cx="9" cy="14" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="14" r="1.25" fill="currentColor"></svg:circle>`,
})
export class IcSharpFace2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFace3Icon],svg[ic-sharp-face-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22.91 11.96c-.54-5.93-5.75-10.41-11.8-9.92c-5.38.42-9.56 4.9-10.05 10.28L0 24h24zM4.54 9.13c.87.55 1.89.87 2.96.87c1.86 0 3.5-.93 4.5-2.35C13 9.07 14.64 10 16.5 10c1.07 0 2.09-.32 2.96-.87c.34.89.54 1.86.54 2.87c0 4.41-3.59 8-8 8s-8-3.59-8-8c0-1.01.2-1.98.54-2.87"></svg:path>`,
})
export class IcSharpFace3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFace4Icon],svg[ic-sharp-face-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.96 0-1.88.14-2.75.39A4.99 4.99 0 0 0 5 0C2.24 0 0 2.24 0 5c0 1.8.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8c0-.05.01-.1.01-.15c2.6-.98 4.68-2.99 5.74-5.55a9.94 9.94 0 0 0 9.92 3.46c.21.71.33 1.46.33 2.24c0 4.41-3.59 8-8 8"></svg:path><svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle>`,
})
export class IcSharpFace4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFace5Icon],svg[ic-sharp-face-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8c0-1.12.23-2.18.65-3.15a.495.495 0 0 0 .85-.35c0-.25-.19-.45-.43-.49c.15-.26.32-.51.49-.75c-.03.08-.06.15-.06.24c0 .28.22.5.5.5s.5-.22.5-.5S6.28 7 6 7c-.13 0-.25.05-.34.13c.52-.68 1.15-1.28 1.86-1.76A.495.495 0 0 0 8 6a.495.495 0 0 0 .1-.98c.16-.09.32-.17.49-.25c.09.14.24.23.41.23c.28 0 .5-.22.5-.5c0-.03-.01-.06-.02-.09c.39-.13.79-.23 1.21-.3c-.11.1-.19.23-.19.39c0 .28.22.5.5.5s.5-.22.5-.5a.51.51 0 0 0-.3-.46c.26-.03.53-.04.8-.04s.54.01.8.04c-.18.08-.3.25-.3.46c0 .28.22.5.5.5s.5-.22.5-.5c0-.16-.08-.29-.19-.38c.41.07.82.17 1.21.3c-.01.02-.02.05-.02.08c0 .28.22.5.5.5c.17 0 .32-.09.41-.23c.17.08.33.16.49.25A.495.495 0 0 0 16 6c.28 0 .5-.22.5-.5c0-.05-.01-.09-.03-.13c.71.48 1.34 1.08 1.86 1.76a.495.495 0 0 0-.83.37c0 .28.22.5.5.5s.5-.22.5-.5c0-.09-.03-.16-.07-.23c.18.24.34.49.49.75c-.23.03-.42.23-.42.48a.495.495 0 0 0 .85.35c.42.97.65 2.03.65 3.15c0 4.41-3.59 8-8 8"></svg:path><svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="12" cy="5.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="14" cy="5.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="5.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="17" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="9" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="7" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="11" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="13" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="15" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="14" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="8" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="9" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="7" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="11" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="13" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="15" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="17" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle>`,
})
export class IcSharpFace5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFace6Icon],svg[ic-sharp-face-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8h2.62l2-4h6.76l2 4H20c0 4.41-3.59 8-8 8"></svg:path><svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle>`,
})
export class IcSharpFace6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFaceRetouchingNaturalIcon],svg[ic-sharp-face-retouching-natural-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19.85 10.59C20.79 15.4 17.01 20 12 20c-4.41 0-8-3.59-8-8c0-.39 3.87-1.12 5.74-5.69c3.42 4.19 8.07 3.73 9.09 3.59l-1.48-3.25l-4.72-2.15l3.5-1.59C9.51-.14 2 4.77 2 12c0 5.52 4.48 10 10 10c7.21 0 12.12-7.45 9.1-14.13z"></svg:path><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20.6 5.6L19.5 8l-1.1-2.4L16 4.5l2.4-1.1L19.5 1l1.1 2.4L23 4.5z"></svg:path>`,
})
export class IcSharpFaceRetouchingNaturalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFaceRetouchingOffIcon],svg[ic-sharp-face-retouching-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17.5 10c.75 0 1.47-.09 2.17-.24c.21.71.33 1.46.33 2.24c0 1.22-.28 2.37-.77 3.4l1.49 1.49A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10c-1.78 0-3.44.47-4.89 1.28l5.33 5.33c1.49.88 3.21 1.39 5.06 1.39M1.89 3.72l2.19 2.19A9.96 9.96 0 0 0 2 12c0 5.52 4.48 10 10 10c2.29 0 4.4-.78 6.09-2.08l2.19 2.19l1.41-1.41L3.31 2.31zm14.77 14.77A7.9 7.9 0 0 1 12 20c-4.41 0-8-3.59-8-8c0-.05.01-.1 0-.14a9.95 9.95 0 0 0 3.64-2.39z"></svg:path>`,
})
export class IcSharpFaceRetouchingOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFacebookIcon],svg[ic-sharp-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></svg:path>`,
})
export class IcSharpFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFactCheckIcon],svg[ic-sharp-fact-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3v18h20V3zm8 14H5v-2h5zm0-4H5v-2h5zm0-4H5V7h5zm4.82 6L12 12.16l1.41-1.41l1.41 1.42L17.99 9l1.42 1.42z"></svg:path>`,
})
export class IcSharpFactCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFactoryIcon],svg[ic-sharp-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10v12H2V10l7-3v2l5-2v3zm-4.8-1.5L18 2h3l.8 6.5zM11 18h2v-4h-2zm-4 0h2v-4H7zm10-4h-2v4h2z"></svg:path>`,
})
export class IcSharpFactoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFamilyRestroomIcon],svg[ic-sharp-family-restroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m4 18v-6h2.5l-3-9h-3l-1.17 3.5H17V22zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5M5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m2 16v-7H9V7H2v8h1.5v7zm6.5 0v-4h1v-5.5h-5V18h1v4z"></svg:path>`,
})
export class IcSharpFamilyRestroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFastForwardIcon],svg[ic-sharp-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 18l8.5-6L4 6zm9-12v12l8.5-6z"></svg:path>`,
})
export class IcSharpFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFastRewindIcon],svg[ic-sharp-fast-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18V6l-8.5 6zm.5-6l8.5 6V6z"></svg:path>`,
})
export class IcSharpFastRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFastfoodIcon],svg[ic-sharp-fastfood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5V1h-2v4h-5l.23 2.31C14.9 8.16 18 10.77 18 15l.02 8h3.18L23 5zM1 21h15v2H1zM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01M1 17h15v2H1z"></svg:path>`,
})
export class IcSharpFastfoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFavoriteIcon],svg[ic-sharp-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"></svg:path>`,
})
export class IcSharpFavoriteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFavoriteBorderIcon],svg[ic-sharp-favorite-border-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3m-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05"></svg:path>`,
})
export class IcSharpFavoriteBorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFaxIcon],svg[ic-sharp-fax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9h-4V4H8v16h14zM10 6h6v3h-6zm4 11h-4v-5h4zm2 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M2 8h5v13H2z"></svg:path>`,
})
export class IcSharpFaxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFeaturedPlayListIcon],svg[ic-sharp-featured-play-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-11 8H3V9h9zm0-4H3V5h9z"></svg:path>`,
})
export class IcSharpFeaturedPlayListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFeaturedVideoIcon],svg[ic-sharp-featured-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-11 9H3V5h9z"></svg:path>`,
})
export class IcSharpFeaturedVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFeedIcon],svg[ic-sharp-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H3v18h18V8zM7 7h5v2H7zm10 10H7v-2h10zm0-4H7v-2h10zm-2-4V5l4 4z"></svg:path>`,
})
export class IcSharpFeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFeedbackIcon],svg[ic-sharp-feedback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2.01L2 22l4-4h16zm-9 12h-2v-2h2zm0-4h-2V6h2z"></svg:path>`,
})
export class IcSharpFeedbackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFemaleIcon],svg[ic-sharp-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 9.5C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5c0 2.7 1.94 4.93 4.5 5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4m-9 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5"></svg:path>`,
})
export class IcSharpFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFenceIcon],svg[ic-sharp-fence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12v-2h-2V7l-3-3l-2 2l-2-2l-2 2l-2-2l-3 3v3H3v2h2v2H3v2h2v4h14v-4h2v-2h-2v-2zm-5-5.17l1 1V10h-2V7.83l.41-.41zm-4 0l.59.59l.41.41V10h-2V7.83l.41-.41zM11 14v-2h2v2zm2 2v2h-2v-2zM7 7.83l1-1l.59.59l.41.41V10H7zM7 12h2v2H7zm0 4h2v2H7zm10 2h-2v-2h2zm0-4h-2v-2h2z"></svg:path>`,
})
export class IcSharpFenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFestivalIcon],svg[ic-sharp-festival-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11V9c-6-2-11-7-11-7S7 7 1 9v2c0 1.49.93 2.75 2.24 3.26C3.2 16.76 2.92 19.69 2 22h20c-.92-2.31-1.2-5.24-1.24-7.74A3.5 3.5 0 0 0 23 11M12 4.71c1.33 1.14 3.49 2.84 6.11 4.29H5.89C8.51 7.55 10.67 5.85 12 4.71M13 11h3c0 .83-.67 1.5-1.5 1.5S13 11.83 13 11m-3.5 1.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5M6 11c0 .83-.67 1.5-1.5 1.5S3 11.83 3 11zm-1.34 9c.39-1.86.54-3.82.57-5.58c.68-.15 1.29-.49 1.76-.98c.25.25.54.45.85.62c-.1 1.87-.26 4-.52 5.93H4.66zm4.69 0c.24-1.83.39-3.78.48-5.53c.84-.08 1.61-.45 2.17-1.02c.56.57 1.32.94 2.17 1.02c.1 1.75.24 3.7.48 5.53zm7.32 0c-.27-1.94-.43-4.07-.52-5.93c.31-.17.61-.37.85-.62c.47.48 1.08.83 1.76.98c.03 1.76.18 3.72.57 5.58h-2.66zm2.83-7.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcSharpFestivalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFiberDvrIcon],svg[ic-sharp-fiber-dvr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM23 3H1v18h22zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43l1-3.43h1.5zM21 12.9h-.9L21 15h-1.5l-.85-2H17.5v2H16V9h5z"></svg:path>`,
})
export class IcSharpFiberDvrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFiberManualRecordIcon],svg[ic-sharp-fiber-manual-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="8" fill="currentColor"></svg:circle>`,
})
export class IcSharpFiberManualRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFiberNewIcon],svg[ic-sharp-fiber-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4zm7 4.74h-6V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25z"></svg:path>`,
})
export class IcSharpFiberNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFiberPinIcon],svg[ic-sharp-fiber-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 10.5h2v1h-2zM22 4H2v16h20zM9 13H5.5v2H4V9h5zm3.5 2H11V9h1.5zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20z"></svg:path>`,
})
export class IcSharpFiberPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFiberSmartRecordIcon],svg[ic-sharp-fiber-smart-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="12" r="8" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 4.26v2.09a5.99 5.99 0 0 1 0 11.3v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74"></svg:path>`,
})
export class IcSharpFiberSmartRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFileCopyIcon],svg[ic-sharp-file-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H2v16h2V3h12zm-1 4l6 6v12H6V5zm-1 7h5.5L14 6.5z"></svg:path>`,
})
export class IcSharpFileCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFileDownloadIcon],svg[ic-sharp-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"></svg:path>`,
})
export class IcSharpFileDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFileDownloadDoneIcon],svg[ic-sharp-file-download-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.13 5.41L18.72 4l-9.19 9.19l-4.25-4.24l-1.41 1.41l5.66 5.66zM5 18h14v2H5z"></svg:path>`,
})
export class IcSharpFileDownloadDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFileDownloadOffIcon],svg[ic-sharp-file-download-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6.17V3h6v6h4l-3.59 3.59zm12.19 15.02L2.81 2.81L1.39 4.22L6.17 9H5l7 7l.59-.59L15.17 18H5v2h12.17l2.61 2.61z"></svg:path>`,
})
export class IcSharpFileDownloadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFileOpenIcon],svg[ic-sharp-file-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H4v20h11v-8h5V8zm-1 7V3.5L18.5 9zm4 12.66V16h5.66v2h-2.24l2.95 2.95l-1.41 1.41L19 19.41v2.24h-2z"></svg:path>`,
})
export class IcSharpFileOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilePresentIcon],svg[ic-sharp-file-present-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H4v20h16V8zm2 13c0 2.21-1.79 4-4 4s-4-1.79-4-4V9.5a2.5 2.5 0 0 1 5 0V15h-2V9.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V15c0 1.1.9 2 2 2s2-.9 2-2v-4h2zm-2-7V4l4 4z"></svg:path>`,
})
export class IcSharpFilePresentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFileUploadIcon],svg[ic-sharp-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10h4v6h6v-6h4l-7-7zm0 8v2h14v-2z"></svg:path>`,
})
export class IcSharpFileUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterIcon],svg[ic-sharp-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.96 10.29l-2.75 3.54l-1.96-2.36L8.5 15h11zM3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14z"></svg:path>`,
})
export class IcSharpFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilter1Icon],svg[ic-sharp-filter-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5H1v18h18v-2H3zm11 10h2V5h-4v2h2zm9-14H5v18h18zm-2 16H7V3h14z"></svg:path>`,
})
export class IcSharpFilter1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilter2Icon],svg[ic-sharp-filter-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zm-4-4h-4v-2h4V5h-6v2h4v2h-4v6h6z"></svg:path>`,
})
export class IcSharpFilter2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilter3Icon],svg[ic-sharp-filter-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 1H5v18h18zm-2 16H7V3h14zM3 5H1v18h18v-2H3zm14 10V5h-6v2h4v2h-2v2h2v2h-4v2z"></svg:path>`,
})
export class IcSharpFilter3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilter4Icon],svg[ic-sharp-filter-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5H1v18h18v-2H3zm12 10h2V5h-2v4h-2V5h-2v6h4zm8-14H5v18h18zm-2 16H7V3h14z"></svg:path>`,
})
export class IcSharpFilter4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilter5Icon],svg[ic-sharp-filter-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 1H5v18h18zm-2 16H7V3h14zM3 5H1v18h18v-2H3zm14 10V9h-4V7h4V5h-6v6h4v2h-4v2z"></svg:path>`,
})
export class IcSharpFilter5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilter6Icon],svg[ic-sharp-filter-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zm-10-2h6V9h-4V7h4V5h-6zm2-4h2v2h-2z"></svg:path>`,
})
export class IcSharpFilter6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilter7Icon],svg[ic-sharp-filter-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zm-8-2l4-8V5h-6v2h4l-4 8z"></svg:path>`,
})
export class IcSharpFilter7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilter8Icon],svg[ic-sharp-filter-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zm-8-2h2a2 2 0 0 0 2-2v-1.5c0-.83-.67-1.5-1.5-1.5c.83 0 1.5-.67 1.5-1.5V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5c0 .83.67 1.5 1.5 1.5c-.83 0-1.5.67-1.5 1.5V13a2 2 0 0 0 2 2m0-8h2v2h-2zm0 4h2v2h-2z"></svg:path>`,
})
export class IcSharpFilter8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilter9Icon],svg[ic-sharp-filter-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zM17 5h-6v6h4v2h-4v2h6zm-2 4h-2V7h2z"></svg:path>`,
})
export class IcSharpFilter9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilter9PlusIcon],svg[ic-sharp-filter-9-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5H1v18h18v-2H3zm11 9V6H9v5h3v1H9v2zm-3-5V8h1v1zm12-8H5v18h18zm-2 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14z"></svg:path>`,
})
export class IcSharpFilter9PlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterAltIcon],svg[ic-sharp-filter-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9z"></svg:path>`,
})
export class IcSharpFilterAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterAltOffIcon],svg[ic-sharp-filter-alt-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.05 4H6.83l7.97 7.97zM2.81 2.81L1.39 4.22L10 13v7h4v-3.17l5.78 5.78l1.41-1.42z"></svg:path>`,
})
export class IcSharpFilterAltOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterBAndWIcon],svg[ic-sharp-filter-b-and-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-2 16l-7-8v8H5l7-8V5h7z"></svg:path>`,
})
export class IcSharpFilterBAndWIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterCenterFocusIcon],svg[ic-sharp-filter-center-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15H3v6h6v-2H5zM5 5h4V3H3v6h2zm16-2h-6v2h4v4h2zm-2 16h-4v2h6v-6h-2zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"></svg:path>`,
})
export class IcSharpFilterCenterFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterDramaIcon],svg[ic-sharp-filter-drama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4a7.48 7.48 0 0 0-6.64 4.04A5.996 5.996 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3"></svg:path>`,
})
export class IcSharpFilterDramaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterFramesIcon],svg[ic-sharp-filter-frames-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4h-6l-4-4l-4 4H2v18h20zm-2 16H4V6h4.52l3.52-3.5L15.52 6H20zM18 8H6v10h12"></svg:path>`,
})
export class IcSharpFilterFramesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterHdrIcon],svg[ic-sharp-filter-hdr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z"></svg:path>`,
})
export class IcSharpFilterHdrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterListIcon],svg[ic-sharp-filter-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"></svg:path>`,
})
export class IcSharpFilterListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterListOffIcon],svg[ic-sharp-filter-list-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.83 8H21V6H8.83zm5 5H18v-2h-4.17zM14 16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h.17L1.39 4.22L2.8 2.81l18.38 18.38l-1.41 1.41z"></svg:path>`,
})
export class IcSharpFilterListOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterNoneIcon],svg[ic-sharp-filter-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14z"></svg:path>`,
})
export class IcSharpFilterNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterTiltShiftIcon],svg[ic-sharp-filter-tilt-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.94 7.94 0 0 1 11 4.07m7.32.19A9.95 9.95 0 0 0 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1a7.94 7.94 0 0 1 1.62 3.9M5.69 7.1L4.26 5.68A9.95 9.95 0 0 0 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9M4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.87 7.87 0 0 1 4.07 13M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3m3.31 4.9l1.43 1.43a10 10 0 0 0 2.21-5.32h-2.02a7.95 7.95 0 0 1-1.62 3.89M13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62m-7.32-.19A10 10 0 0 0 11 21.95v-2.02a7.94 7.94 0 0 1-3.9-1.62z"></svg:path>`,
})
export class IcSharpFilterTiltShiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterVintageIcon],svg[ic-sharp-filter-vintage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.7 12.4a6 6 0 0 0-.86-.4c.29-.11.58-.24.86-.4a6.01 6.01 0 0 0 3-5.19a6.01 6.01 0 0 0-6 0c-.28.16-.54.35-.78.54c.05-.31.08-.63.08-.95c0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95c-.24-.2-.5-.39-.78-.55a6.01 6.01 0 0 0-6 0a5.97 5.97 0 0 0 3 5.19c.28.16.57.29.86.4c-.29.11-.58.24-.86.4a6.01 6.01 0 0 0-3 5.19a6.01 6.01 0 0 0 6 0c.28-.16.54-.35.78-.54c-.05.32-.08.64-.08.96c0 2.22 1.21 4.15 3 5.19c1.79-1.04 3-2.97 3-5.19c0-.32-.03-.64-.08-.95q.36.3.78.54a6.01 6.01 0 0 0 6 0a6.01 6.01 0 0 0-3-5.19M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></svg:path>`,
})
export class IcSharpFilterVintageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFindInPageIcon],svg[ic-sharp-find-in-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19.59V8l-6-6H4v20l15.57-.02l-4.81-4.81c-.8.52-1.74.83-2.76.83c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5c0 1.02-.31 1.96-.83 2.75zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3"></svg:path>`,
})
export class IcSharpFindInPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFindReplaceIcon],svg[ic-sharp-find-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.98 6.98 0 0 0 11 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0 1 11 6m5.64 9.14A6.9 6.9 0 0 0 17.92 12H15.9a5 5 0 0 1-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.98 6.98 0 0 0 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49L21.49 20z"></svg:path>`,
})
export class IcSharpFindReplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFingerprintIcon],svg[ic-sharp-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41c-.24.13-.54.04-.68-.2a.506.506 0 0 1 .2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52c.25.13.34.43.21.67a.49.49 0 0 1-.44.28M3.5 9.72a.499.499 0 0 1-.41-.79c.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25a.5.5 0 0 1-.12.7c-.23.16-.54.11-.7-.12a9.4 9.4 0 0 0-3.39-2.94c-2.87-1.47-6.54-1.47-9.4.01c-1.36.7-2.5 1.7-3.4 2.96c-.08.14-.23.21-.39.21m6.25 12.07a.47.47 0 0 1-.35-.15c-.87-.87-1.34-1.43-2.01-2.64c-.69-1.23-1.05-2.73-1.05-4.34c0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39s-4.66 1.97-4.66 4.39c0 1.44.32 2.77.93 3.85c.64 1.15 1.08 1.64 1.85 2.42c.19.2.19.51 0 .71c-.11.1-.24.15-.37.15m7.17-1.85c-1.19 0-2.24-.3-3.1-.89c-1.49-1.01-2.38-2.65-2.38-4.39c0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56c.71.48 1.54.71 2.54.71c.24 0 .64-.03 1.04-.1c.27-.05.53.13.58.41c.05.27-.13.53-.41.58c-.57.11-1.07.12-1.21.12M14.91 22c-.04 0-.09-.01-.13-.02c-1.59-.44-2.63-1.03-3.72-2.1a7.3 7.3 0 0 1-2.17-5.22c0-1.62 1.38-2.94 3.08-2.94s3.08 1.32 3.08 2.94c0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83c-2.84 0-5.44 1.58-6.61 4.03c-.39.81-.59 1.76-.59 2.8c0 .78.07 2.01.67 3.61c.1.26-.03.55-.29.64c-.26.1-.55-.04-.64-.29a11.1 11.1 0 0 1-.73-3.96c0-1.2.23-2.29.68-3.24c1.33-2.79 4.28-4.6 7.51-4.6c4.55 0 8.25 3.51 8.25 7.83c0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51c.95.94 1.86 1.46 3.27 1.85c.27.07.42.35.35.61c-.05.23-.26.38-.47.38"></svg:path>`,
})
export class IcSharpFingerprintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFireExtinguisherIcon],svg[ic-sharp-fire-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19h10v3H7zm0-1h10v-5H7zM17 3v6l-3.15-.66c-.01 0-.01.01-.02.02c1.55.62 2.72 1.98 3.07 3.64H7.1c.34-1.66 1.52-3.02 3.07-3.64c-.33-.26-.6-.58-.8-.95L5 6.5v-1l4.37-.91C9.87 3.65 10.86 3 12 3c.7 0 1.34.25 1.85.66zm-4 3c-.03-.59-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1"></svg:path>`,
})
export class IcSharpFireExtinguisherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFireHydrantAltIcon],svg[ic-sharp-fire-hydrant-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h-3V8h2V6h-2.35a5.99 5.99 0 0 0-11.3 0H4v2h2v3H3v6h3v3H4v2h16v-2h-2v-3h3zm-9 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5"></svg:path><svg:circle cx="12" cy="14" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcSharpFireHydrantAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFireTruckIcon],svg[ic-sharp-fire-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 11l-2-6h-2V3h-3v2h-4v6H1v7h3c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h3zM7 19c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m10 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-3-8V7h5.56l1.33 4z"></svg:path><svg:path fill="currentColor" d="M11 8.5h-1v-2h1V5H1v1.5h1v2H1V10h10zm-5.75 0H3.5v-2h1.75zm3.25 0H6.75v-2H8.5z"></svg:path>`,
})
export class IcSharpFireTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFireplaceIcon],svg[ic-sharp-fireplace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20h20V2zm11.2 11.74c-.08-.46-.07-.85.08-1.28c.54 1.21 2.15 1.64 1.98 3.18c-.19 1.69-2.11 2.37-3.39 1.32c.76-.24 1.4-1.04 1.53-1.63c.12-.55-.11-1.04-.2-1.59M20 20h-2v-2h-2.02A4.98 4.98 0 0 0 17 15c0-1.89-1.09-2.85-1.85-3.37C12.2 9.61 13 7 13 7c-6.73 3.57-6.02 7.47-6 8c.03.96.49 2.07 1.23 3H6v2H4V4h16z"></svg:path>`,
})
export class IcSharpFireplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFirstPageIcon],svg[ic-sharp-first-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z"></svg:path>`,
})
export class IcSharpFirstPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFitScreenIcon],svg[ic-sharp-fit-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h5v5h-2V6h-3zM4 9V6h3V4H2v5zm16 6v3h-3v2h5v-5zM7 18H4v-3H2v5h5zM18 8H6v8h12z"></svg:path>`,
})
export class IcSharpFitScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFitbitIcon],svg[ic-sharp-fitbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.89 13.89c1.04 0 1.89-.85 1.89-1.89s-.85-1.89-1.89-1.89S18 10.96 18 12s.85 1.89 1.89 1.89m-4.24-.21c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68s-1.68.75-1.68 1.68s.75 1.68 1.68 1.68m0-4.26c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68s-1.68.75-1.68 1.68s.75 1.68 1.68 1.68m0 8.51c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68s-1.68.75-1.68 1.68c0 .92.75 1.68 1.68 1.68m-4.24-4.46c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47s-1.47.66-1.47 1.47s.65 1.47 1.47 1.47m0-4.26c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47s-1.47.66-1.47 1.47s.65 1.47 1.47 1.47m0 8.52c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47s-1.47.66-1.47 1.47c-.01.81.65 1.47 1.47 1.47m0 4.27c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47s-1.47.66-1.47 1.47c-.01.81.65 1.47 1.47 1.47m0-17.06c.81 0 1.47-.66 1.47-1.47S12.22 2 11.41 2s-1.47.66-1.47 1.47s.65 1.47 1.47 1.47m-4.25 8.32c.7 0 1.26-.57 1.26-1.26s-.57-1.26-1.26-1.26a1.261 1.261 0 0 0 0 2.52m0 4.25a1.261 1.261 0 0 0 0-2.52a1.261 1.261 0 0 0 0 2.52m0-8.49a1.261 1.261 0 0 0 0-2.52a1.261 1.261 0 0 0 0 2.52m-3.87 4.03a1.05 1.05 0 1 0 0-2.1a1.05 1.05 0 0 0 0 2.1"></svg:path>`,
})
export class IcSharpFitbitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFitnessCenterIcon],svg[ic-sharp-fitness-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22l1.43-1.43L16.29 22l2.14-2.14l1.43 1.43l1.43-1.43l-1.43-1.43L22 16.29z"></svg:path>`,
})
export class IcSharpFitnessCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlagIcon],svg[ic-sharp-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></svg:path>`,
})
export class IcSharpFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlagCircleIcon],svg[ic-sharp-flag-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m6 13h-5l-1-2H9.5v5H8V7h6l1 2h3z"></svg:path>`,
})
export class IcSharpFlagCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlakyIcon],svg[ic-sharp-flaky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.05 17.58l-.01.01l-2.4-2.4l1.06-1.06l1.35 1.35L16.54 13l1.06 1.06l-3.54 3.54zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M7.34 6.28l1.41 1.41l1.41-1.41l1.06 1.06l-1.41 1.41l1.41 1.41l-1.06 1.06l-1.41-1.41l-1.41 1.41l-1.06-1.06l1.41-1.41l-1.41-1.41zM12 20c-2.2 0-4.2-.9-5.7-2.3L17.7 6.3C19.1 7.8 20 9.8 20 12c0 4.4-3.6 8-8 8"></svg:path>`,
})
export class IcSharpFlakyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlareIcon],svg[ic-sharp-flare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11H1v2h6zm2.17-3.24L7.05 5.64L5.64 7.05l2.12 2.12zM13 1h-2v6h2zm5.36 6.05l-1.41-1.41l-2.12 2.12l1.41 1.41zM17 11v2h6v-2zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m2.83 7.24l2.12 2.12l1.41-1.41l-2.12-2.12zm-9.19.71l1.41 1.41l2.12-2.12l-1.41-1.41zM11 23h2v-6h-2z"></svg:path>`,
})
export class IcSharpFlareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlashAutoIcon],svg[ic-sharp-flash-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2v12h3v9l7-12H9l4-9zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9zm-2.15 5.65L18 4l1.15 3.65z"></svg:path>`,
})
export class IcSharpFlashAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlashOffIcon],svg[ic-sharp-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10h-3.61l2.28 2.28zm0-8H7v1.61l6.13 6.13zm-13.59.86L2 4.27l5 5V13h3v9l3.58-6.15L17.73 20l1.41-1.41z"></svg:path>`,
})
export class IcSharpFlashOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlashOnIcon],svg[ic-sharp-flash-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v11h3v9l7-12h-4l3-8z"></svg:path>`,
})
export class IcSharpFlashOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlashlightOffIcon],svg[ic-sharp-flashlight-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5V2H6v1.17L7.83 5zm-2 6l2-3V7H9.83L16 13.17zM2.81 2.81L1.39 4.22L8 10.83V22h8v-3.17l3.78 3.78l1.41-1.41z"></svg:path>`,
})
export class IcSharpFlashlightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlashlightOnIcon],svg[ic-sharp-flashlight-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v3H6zm0 5v1l2 3v11h8V11l2-3V7zm6 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcSharpFlashlightOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlatwareIcon],svg[ic-sharp-flatware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7.08c0 1.77-.84 3.25-2 3.82V21h-2V10.9c-1.16-.57-2-2.05-2-3.82C10.01 4.83 11.35 3 13 3c1.66 0 3 1.83 3 4.08M17 3v18h2v-8h2V7c0-1.76-1.24-4-4-4M8.28 3h-.72v4h-.84V3H5.28v4h-.84V3H3v8h2v10h2V11h2V3z"></svg:path>`,
})
export class IcSharpFlatwareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlightIcon],svg[ic-sharp-flight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1l3.5 1v-1.5L13 19v-5.5z"></svg:path>`,
})
export class IcSharpFlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlightClassIcon],svg[ic-sharp-flight-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h-6v9h6zM9.5 16H18v2H8L5 8V4h2v4zM8 19h10v2H8z"></svg:path>`,
})
export class IcSharpFlightClassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlightLandIcon],svg[ic-sharp-flight-land-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 19h19v2h-19zm16.84-3.15c.8.21 1.62-.26 1.84-1.06c.21-.8-.26-1.62-1.06-1.84l-5.31-1.42l-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32l-1.45-.39v5.17z"></svg:path>`,
})
export class IcSharpFlightLandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlightTakeoffIcon],svg[ic-sharp-flight-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43l-1.93.51l4.14 7.17l-4.97 1.33l-1.97-1.54l-1.45.39l1.82 3.16l.77 1.33L21 11.49c.81-.23 1.28-1.05 1.07-1.85"></svg:path>`,
})
export class IcSharpFlightTakeoffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlipIcon],svg[ic-sharp-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21h2v-2h-2zm4-12h2V7h-2zM3 3v18h6v-2H5V5h4V3zm16 0v2h2V3zm-8 20h2V1h-2zm8-6h2v-2h-2zM15 5h2V3h-2zm4 8h2v-2h-2zm0 8h2v-2h-2z"></svg:path>`,
})
export class IcSharpFlipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlipCameraAndroidIcon],svg[ic-sharp-flip-camera-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3"></svg:path><svg:path fill="currentColor" d="M8 10V8H5.09C6.47 5.61 9.05 4 12 4c3.72 0 6.85 2.56 7.74 6h2.06c-.93-4.56-4.96-8-9.8-8c-3.27 0-6.18 1.58-8 4.01V4H2v6zm8 4v2h2.91c-1.38 2.39-3.96 4-6.91 4c-3.72 0-6.85-2.56-7.74-6H2.2c.93 4.56 4.96 8 9.8 8c3.27 0 6.18-1.58 8-4.01V20h2v-6z"></svg:path>`,
})
export class IcSharpFlipCameraAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlipCameraIosIcon],svg[ic-sharp-flip-camera-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.83 5L15 3H9L7.17 5H2v16h20V5zM12 18c-2.76 0-5-2.24-5-5H5l2.5-2.5L10 13H8c0 2.21 1.79 4 4 4c.58 0 1.13-.13 1.62-.35l.74.74c-.71.37-1.5.61-2.36.61m4.5-2.5L14 13h2c0-2.21-1.79-4-4-4c-.58 0-1.13.13-1.62.35l-.74-.73C10.35 8.24 11.14 8 12 8c2.76 0 5 2.24 5 5h2z"></svg:path>`,
})
export class IcSharpFlipCameraIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlipToBackIcon],svg[ic-sharp-flip-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7H7v2h2zm0 4H7v2h2zm4 4h-2v2h2zm0-12h-2v2h2zM9 3H7v2h2zm12 0h-2v2h2zm0 12h-2v2h2zM9 15H7v2h2zm10-2h2v-2h-2zm0-4h2V7h-2zM5 7H3v14h14v-2H5zm10-2h2V3h-2zm0 12h2v-2h-2z"></svg:path>`,
})
export class IcSharpFlipToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlipToFrontIcon],svg[ic-sharp-flip-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm12 12h2v-2h-2zm6-18H7v14h14zm-2 12H9V5h10zm-8 6h2v-2h-2zm-4 0h2v-2H7zm-4 0h2v-2H3z"></svg:path>`,
})
export class IcSharpFlipToFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFloodIcon],svg[ic-sharp-flood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.67 19c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.1 1-3.34 1s-1.38-1-3.33-1s-2.1 1-3.34 1v2c1.95 0 2.11-1 3.34-1c1.24 0 1.38 1 3.33 1s2.1-1 3.34-1c1.22 0 1.4 1 3.33 1s2.1-1 3.33-1c1.22 0 1.4 1 3.33 1v-2c-1.24 0-1.38-1-3.33-1m-9.99-1.5c1.95 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.4.98 3.31 1v-2c-.63 0-1-.28-1.48-.55l-2.02-7.53l2.09.85l.74-1.86L9.78 2L2 11.61l1.57 1.23l1.39-1.78l.93 3.48c-.18-.02-.35-.05-.56-.05c-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1c1.19.01 1.42 1.01 3.33 1.01m5.36-7.32l1.42 5.31c-1.34.09-1.47-.99-3.47-.99c-.36 0-.65.04-.91.1l-.91-3.39z"></svg:path>`,
})
export class IcSharpFloodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlourescentIcon],svg[ic-sharp-flourescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9h14v6H5zm6-7h2v3h-2zm6.286 4.399l1.79-1.803l1.42 1.41l-1.79 1.802zM11 19h2v3h-2zm6.29-1.29l1.79 1.8l1.42-1.42l-1.8-1.79zM3.495 6.01l1.407-1.408L6.69 6.391L5.284 7.798zm-.003 12.066l1.803-1.79l1.409 1.42l-1.803 1.79z"></svg:path>`,
})
export class IcSharpFlourescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFluorescentIcon],svg[ic-sharp-fluorescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9h14v6H5zm6-7h2v3h-2zm6.286 4.399l1.79-1.803l1.42 1.41l-1.79 1.802zM11 19h2v3h-2zm6.29-1.29l1.79 1.8l1.42-1.42l-1.8-1.79zM3.495 6.01l1.407-1.408L6.69 6.391L5.284 7.798zm-.003 12.066l1.803-1.79l1.409 1.42l-1.803 1.79z"></svg:path>`,
})
export class IcSharpFluorescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFlutterDashIcon],svg[ic-sharp-flutter-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.07 11.7c.29-.39.81-.56 1.27-.37c.17.07.32.18.43.33c.22.28.25.59.22.85c-.05.33-.25.63-.54.79c0 0-4.87 2.95-5.07 2.69s3.69-4.29 3.69-4.29M22 10c0 2.5-1 3-1.5 3c-.23 0-.44-.1-.62-.26c-.48 3.32-2.36 5.31-5.33 5.99c.11.44.48.77.95.77h.58c.22 0 .41.15.48.36c.17.52.66 1.02 1.02 1.32c.25.21.24.59-.03.78c-.34.24-.9.49-1.79.53a.5.5 0 0 1-.45-.22c-.13-.2-.31-.56-.31-1.01c0-.3.04-.57.09-.8c-.78-.16-1.39-.78-1.55-1.56c-.49.06-1 .1-1.54.1c-.88 0-1.7-.09-2.45-.25c-.02.08-.05.16-.05.25c0 .55.45 1 1 1h.58c.22 0 .41.15.48.36c.17.52.66 1.02 1.02 1.32c.25.21.24.59-.03.78c-.34.24-.9.49-1.79.53a.5.5 0 0 1-.45-.22c-.13-.2-.31-.56-.31-1.01c0-.3.04-.57.09-.8c-.9-.19-1.59-1-1.59-1.96c0-.18.03-.36.08-.53c-2.46-.86-4.03-2.78-4.46-5.74c-.18.17-.38.27-.62.27C3 13 2 12.5 2 10c0-2.27 1.7-4.5 3-4.5c.43 0 .49.49.5.85a8 8 0 0 1 5.55-3.29c.2-.96 1.08-1.56 1.95-1.56v1s.33-.5 1-.5s1 .5 1 .5c-.49 0-.85.35-.96.77c1.82.48 3.39 1.59 4.46 3.08c.01-.36.07-.85.5-.85c1.3 0 3 2.23 3 4.5M5 11c0 .81.1 1.53.25 2.21c.18-.69.46-1.33.83-1.92a3.8 3.8 0 0 1-.34-1.54A3.766 3.766 0 0 1 9.5 6c.96 0 1.84.37 2.5.97c.66-.6 1.54-.97 2.5-.97c2.07 0 3.75 1.68 3.75 3.75c0 .55-.12 1.07-.34 1.54c.37.59.66 1.24.84 1.94c.15-.68.25-1.41.25-2.23c0-3.86-3.14-7-7-7s-7 3.14-7 7m12.98 4.29c0-.1.02-.19.02-.29c0-1.01-.26-1.95-.7-2.78c-.69.78-1.68 1.28-2.8 1.28c-.27 0-.54-.03-.79-.09c.14-.23.23-.49.27-.77c.01-.07.01-.13.02-.19c.17.03.33.05.5.05c1.52 0 2.75-1.23 2.75-2.75S16.02 7 14.5 7c-.67 0-1.32.25-1.83.72l-.67.6l-.67-.6C10.82 7.25 10.17 7 9.5 7C7.98 7 6.75 8.23 6.75 9.75c0 1.34.96 2.46 2.23 2.7l-.76.83c-.6-.22-1.12-.59-1.53-1.05A6 6 0 0 0 6 15c0 .08.01.15.01.24C7.13 17.06 9.14 18 12 18c2.88 0 4.88-.91 5.98-2.71M16 9.75c0 .97-.67 1.75-1.5 1.75S13 10.72 13 9.75S13.67 8 14.5 8s1.5.78 1.5 1.75m-.75-.87c0-.21-.17-.38-.38-.38s-.37.17-.37.38s.17.38.38.38s.37-.18.37-.38M11 9.75c0 .97-.67 1.75-1.5 1.75S8 10.72 8 9.75S8.67 8 9.5 8s1.5.78 1.5 1.75m-.75-.87c0-.21-.17-.38-.38-.38s-.37.17-.37.38s.17.38.38.38s.37-.18.37-.38"></svg:path>`,
})
export class IcSharpFlutterDashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFmdBadIcon],svg[ic-sharp-fmd-bad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2m1 13h-2v-2h2zm0-4h-2V6h2z"></svg:path>`,
})
export class IcSharpFmdBadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFmdGoodIcon],svg[ic-sharp-fmd-good-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2m0 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcSharpFmdGoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFolderIcon],svg[ic-sharp-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4H2v16h20V6H12z"></svg:path>`,
})
export class IcSharpFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFolderCopyIcon],svg[ic-sharp-folder-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H1v15h19v-2H3z"></svg:path><svg:path fill="currentColor" d="M23 4h-9l-2-2H5.01L5 17h18z"></svg:path>`,
})
export class IcSharpFolderCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFolderDeleteIcon],svg[ic-sharp-folder-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6v14H2V4h8l2 2zm-5.5 4V9h-2v1H12v1.5h1V17h5v-5.5h1V10zm0 5.5h-2v-4h2z"></svg:path>`,
})
export class IcSharpFolderDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFolderOffIcon],svg[ic-sharp-folder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l-2-2H6.83L22 19.17V6zM2.1 2.1L.69 3.51L2 4.83V20h15.17l3.32 3.31l1.41-1.41z"></svg:path>`,
})
export class IcSharpFolderOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFolderOpenIcon],svg[ic-sharp-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H12l-2-2H2v16h20zm-2 12H4V8h16z"></svg:path>`,
})
export class IcSharpFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFolderSharedIcon],svg[ic-sharp-folder-shared-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H12l-2-2H2v16h20zm-7 3c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2z"></svg:path>`,
})
export class IcSharpFolderSharedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFolderSpecialIcon],svg[ic-sharp-folder-special-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H12l-2-2H2v16h20zm-4.06 11L15 15.28L12.06 17l.78-3.33l-2.59-2.24l3.41-.29L15 8l1.34 3.14l3.41.29l-2.59 2.24z"></svg:path>`,
})
export class IcSharpFolderSpecialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFolderZipIcon],svg[ic-sharp-folder-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l-2-2H2v16h20V6zm6 6h-2v2h2v2h-2v2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2v2h2z"></svg:path>`,
})
export class IcSharpFolderZipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFollowTheSignsIcon],svg[ic-sharp-follow-the-signs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2M5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6q-.375 0-.75.15L2 8.3V13h2V9.65zM13 2v7h3.75v14h1.5V9H22V2zm5.01 6V6.25H14.5v-1.5h3.51V3l2.49 2.5z"></svg:path>`,
})
export class IcSharpFollowTheSignsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFontDownloadIcon],svg[ic-sharp-font-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.93 13.5h4.14L12 7.98zM22 2H2v20h20zm-6.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13z"></svg:path>`,
})
export class IcSharpFontDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFontDownloadOffIcon],svg[ic-sharp-font-download-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.58 9.75l-.87-.87l.23-.66h.1zm7.91 13.56L19.17 22H2V4.83L.69 3.51L2.1 2.1l19.8 19.8zm-8.39-8.38l-3.3-3.3L6.41 18h2.08l1.09-3.07zm-1.75-7.41L10.92 6h2.14l2.55 6.79L22 19.17V2H4.83z"></svg:path>`,
})
export class IcSharpFontDownloadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFoodBankIcon],svg[ic-sharp-food-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L4 9v12h16V9zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2z"></svg:path>`,
})
export class IcSharpFoodBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpForestIcon],svg[ic-sharp-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12L9 2L2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z"></svg:path><svg:path fill="currentColor" d="M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z"></svg:path>`,
})
export class IcSharpForestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpForkLeftIcon],svg[ic-sharp-fork-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.41 15.59L8 17l-4-4l4-4l1.41 1.41L7.83 12c1.51-.33 3.73.08 5.17 1.36V6.83l-1.59 1.59L10 7l4-4l4 4l-1.41 1.41L15 6.83V21h-2v-4c-.73-2.58-3.07-3.47-5.17-3z"></svg:path>`,
})
export class IcSharpForkLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpForkRightIcon],svg[ic-sharp-fork-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.59 15.59L16 17l4-4l-4-4l-1.41 1.41L16.17 12c-1.51-.33-3.73.08-5.17 1.36V6.83l1.59 1.59L14 7l-4-4l-4 4l1.41 1.41L9 6.83V21h2v-4c.73-2.58 3.07-3.47 5.17-3z"></svg:path>`,
})
export class IcSharpForkRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatAlignCenterIcon],svg[ic-sharp-format-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15v2h10v-2zm-4 6h18v-2H3zm0-8h18v-2H3zm4-6v2h10V7zM3 3v2h18V3z"></svg:path>`,
})
export class IcSharpFormatAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatAlignJustifyIcon],svg[ic-sharp-format-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h18v-2H3zm0-4h18v-2H3zm0-4h18v-2H3zm0-4h18V7H3zm0-6v2h18V3z"></svg:path>`,
})
export class IcSharpFormatAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatAlignLeftIcon],svg[ic-sharp-format-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15H3v2h12zm0-8H3v2h12zM3 13h18v-2H3zm0 8h18v-2H3zM3 3v2h18V3z"></svg:path>`,
})
export class IcSharpFormatAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatAlignRightIcon],svg[ic-sharp-format-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h18v-2H3zm6-4h12v-2H9zm-6-4h18v-2H3zm6-4h12V7H9zM3 3v2h18V3z"></svg:path>`,
})
export class IcSharpFormatAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatBoldIcon],svg[ic-sharp-format-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcSharpFormatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatClearIcon],svg[ic-sharp-format-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8V5H6.39l3 3h1.83l-.55 1.28l2.09 2.1L14.21 8zM3.41 4.86L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21l1.41-1.41z"></svg:path>`,
})
export class IcSharpFormatClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatColorFillIcon],svg[ic-sharp-format-color-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17.62L17.62 10l-10-10l-1.41 1.41l2.38 2.38L2.38 10zm0-12.41L14.79 10H5.21zM19 17c1.1 0 2-.9 2-2c0-1.33-2-3.5-2-3.5s-2 2.17-2 3.5c0 1.1.9 2 2 2M2 20h20v4H2z"></svg:path>`,
})
export class IcSharpFormatColorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatColorResetIcon],svg[ic-sharp-format-color-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14c0-3.98-6-10.8-6-10.8s-1.18 1.35-2.5 3.19l8.44 8.44c.03-.27.06-.55.06-.83M5.41 5.14L4 6.55l3.32 3.32C6.55 11.33 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.95-1.5l2.63 2.63L20 19.72z"></svg:path>`,
})
export class IcSharpFormatColorResetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatColorTextIcon],svg[ic-sharp-format-color-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20h20v4H2zm3.49-3h2.42l1.27-3.58h5.65L16.09 17h2.42L13.25 3h-2.5zm4.42-5.61l2.03-5.79h.12l2.03 5.79z"></svg:path>`,
})
export class IcSharpFormatColorTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatIndentDecreaseIcon],svg[ic-sharp-format-indent-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h10v-2H11zm-8-5l4 4V8zm0 9h18v-2H3zM3 3v2h18V3zm8 6h10V7H11zm0 4h10v-2H11z"></svg:path>`,
})
export class IcSharpFormatIndentDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatIndentIncreaseIcon],svg[ic-sharp-format-indent-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h18v-2H3zM3 8v8l4-4zm8 9h10v-2H11zM3 3v2h18V3zm8 6h10V7H11zm0 4h10v-2H11z"></svg:path>`,
})
export class IcSharpFormatIndentIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatItalicIcon],svg[ic-sharp-format-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"></svg:path>`,
})
export class IcSharpFormatItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatLineSpacingIcon],svg[ic-sharp-format-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7h2.5L5 3.5L1.5 7H4v10H1.5L5 20.5L8.5 17H6zm4-2v2h12V5zm0 14h12v-2H10zm0-6h12v-2H10z"></svg:path>`,
})
export class IcSharpFormatLineSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatListBulletedIcon],svg[ic-sharp-format-list-bulleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5S5.5 6.83 5.5 6S4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5s1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"></svg:path>`,
})
export class IcSharpFormatListBulletedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatListNumberedIcon],svg[ic-sharp-format-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2zm1-9h1V4H2v1h1zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2zm5-6v2h14V5zm0 14h14v-2H7zm0-6h14v-2H7z"></svg:path>`,
})
export class IcSharpFormatListNumberedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatListNumberedRtlIcon],svg[ic-sharp-format-list-numbered-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17h2v.5h-1v1h1v.5h-2v1h3v-4h-3zm1-9h1V4h-2v1h1zm-1 3h1.8L18 13.1v.9h3v-1h-1.8l1.8-2.1V10h-3zM2 5h14v2H2zm0 12h14v2H2zm0-6h14v2H2z"></svg:path>`,
})
export class IcSharpFormatListNumberedRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatOverlineIcon],svg[ic-sharp-format-overline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3v2H5V3zm-7 4c-3.87 0-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7s-3.13-7-7-7m0 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 9.5 12 9.5s4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5"></svg:path>`,
})
export class IcSharpFormatOverlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatPaintIcon],svg[ic-sharp-format-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4z"></svg:path>`,
})
export class IcSharpFormatPaintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatQuoteIcon],svg[ic-sharp-format-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17h3l2-4V7H4v6h3zm10 0h3l2-4V7h-6v6h3z"></svg:path>`,
})
export class IcSharpFormatQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatShapesIcon],svg[ic-sharp-format-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7zM3 3h2v2H3zm2 18H3v-2h2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2zm4 2h-2v-2h2zM19 5V3h2v2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63zm-3.04-1.26h2.61L12 8.91z"></svg:path>`,
})
export class IcSharpFormatShapesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatSizeIcon],svg[ic-sharp-format-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v3h5v12h3V7h5V4zm-6 8h3v7h3v-7h3V9H3z"></svg:path>`,
})
export class IcSharpFormatSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatStrikethroughIcon],svg[ic-sharp-format-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19h4v-3h-4zM5 4v3h5v3h4V7h5V4zM3 14h18v-2H3z"></svg:path>`,
})
export class IcSharpFormatStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatTextdirectionLToRIcon],svg[ic-sharp-format-textdirection-l-to-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4m12 8l-4-4v3H5v2h12v3z"></svg:path>`,
})
export class IcSharpFormatTextdirectionLToRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatTextdirectionRToLIcon],svg[ic-sharp-format-textdirection-r-to-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4m-2 7v-3l-4 4l4 4v-3h12v-2z"></svg:path>`,
})
export class IcSharpFormatTextdirectionRToLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatUnderlinedIcon],svg[ic-sharp-format-underlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6m-7 2v2h14v-2z"></svg:path>`,
})
export class IcSharpFormatUnderlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFortIcon],svg[ic-sharp-fort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v2h-2V3h-2v2h-2V3h-2v4l2 2v1H9V9l2-2V3H9v2H7V3H5v2H3V3H1v4l2 2v6l-2 2v4h9v-5h4v5h9v-4l-2-2V9l2-2V3z"></svg:path>`,
})
export class IcSharpFortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpForumIcon],svg[ic-sharp-forum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6h-3v9H6v3h12l4 4zm-5 7V2H2v15l4-4z"></svg:path>`,
})
export class IcSharpForumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpForwardIcon],svg[ic-sharp-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8V4l8 8l-8 8v-4H4V8z"></svg:path>`,
})
export class IcSharpForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpForward10Icon],svg[ic-sharp-forward-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6v4l5-5l-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8z"></svg:path><svg:path fill="currentColor" d="M10.9 16v-4.27h-.09l-1.77.63v.69l1.01-.31V16zm3.42-4.22c-.18-.07-.37-.1-.59-.1s-.41.03-.59.1s-.33.18-.45.33s-.23.34-.29.57s-.1.5-.1.82v.74c0 .32.04.6.11.82s.17.42.3.57s.28.26.46.33s.37.1.59.1s.41-.03.59-.1s.33-.18.45-.33s.22-.34.29-.57s.1-.5.1-.82v-.74c0-.32-.04-.6-.11-.82s-.17-.42-.3-.57s-.29-.26-.46-.33m.01 2.57c0 .19-.01.35-.04.48s-.06.24-.11.32s-.11.14-.19.17s-.16.05-.25.05s-.18-.02-.25-.05s-.14-.09-.19-.17s-.09-.19-.12-.32s-.04-.29-.04-.48v-.97c0-.19.01-.35.04-.48s.06-.23.12-.31s.11-.14.19-.17s.16-.05.25-.05s.18.02.25.05s.14.09.19.17s.09.18.12.31s.04.29.04.48v.97z"></svg:path>`,
})
export class IcSharpForward10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpForward30Icon],svg[ic-sharp-forward-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6v4l5-5l-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8zm-7.46 2.22c-.06.05-.12.09-.2.12s-.17.04-.27.04a.7.7 0 0 1-.45-.15c-.06-.05-.1-.1-.13-.17s-.05-.14-.05-.22h-.85c0 .21.04.39.12.55s.19.28.33.38s.29.18.46.23s.35.07.53.07c.21 0 .41-.03.6-.08s.34-.14.48-.24s.24-.24.32-.39s.12-.33.12-.53c0-.23-.06-.44-.18-.61s-.3-.3-.54-.39c.1-.05.2-.1.28-.17s.15-.14.2-.22s.1-.16.13-.25s.04-.18.04-.27c0-.2-.04-.37-.11-.53s-.17-.28-.3-.38s-.28-.18-.46-.23s-.37-.08-.59-.08c-.19 0-.38.03-.54.08s-.32.13-.44.23s-.23.22-.3.37s-.11.3-.11.48h.85a.46.46 0 0 1 .17-.35c.05-.04.11-.07.18-.1s.14-.03.22-.03c.1 0 .18.01.25.04s.13.06.18.11s.08.11.11.17s.04.14.04.22c0 .18-.05.32-.16.43s-.26.16-.48.16h-.43v.66h.45c.11 0 .2.01.29.04s.16.06.22.11s.11.12.14.2s.05.18.05.29c0 .09-.01.17-.04.24s-.08.11-.13.17m3.9-3.44c-.18-.07-.37-.1-.59-.1s-.41.03-.59.1s-.33.18-.45.33s-.23.34-.29.57s-.1.5-.1.82v.74c0 .32.04.6.11.82s.17.42.3.57s.28.26.46.33s.37.1.59.1s.41-.03.59-.1s.33-.18.45-.33s.22-.34.29-.57s.1-.5.1-.82v-.74c0-.32-.04-.6-.11-.82s-.17-.42-.3-.57s-.28-.26-.46-.33m.01 2.57c0 .19-.01.35-.04.48s-.06.24-.11.32s-.11.14-.19.17s-.16.05-.25.05s-.18-.02-.25-.05s-.14-.09-.19-.17s-.09-.19-.12-.32s-.04-.29-.04-.48v-.97c0-.19.01-.35.04-.48s.06-.23.12-.31s.11-.14.19-.17s.16-.05.25-.05s.18.02.25.05s.14.09.19.17s.09.18.12.31s.04.29.04.48v.97z"></svg:path>`,
})
export class IcSharpForward30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpForward5Icon],svg[ic-sharp-forward-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.95 13c0 3.31-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6v4l5-5l-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8zm-5.52 2.15c-.05.07-.11.13-.18.17s-.17.06-.27.06q-.255 0-.42-.15c-.165-.15-.17-.24-.19-.41h-.84c.01.2.05.37.13.53s.19.28.32.39s.29.19.46.24s.35.08.53.08c.24 0 .46-.04.64-.12s.33-.18.45-.31s.21-.28.27-.45s.09-.35.09-.54c0-.22-.03-.43-.09-.6s-.14-.33-.25-.45s-.25-.22-.41-.28s-.34-.1-.55-.1c-.07 0-.14.01-.2.02s-.13.02-.18.04s-.1.03-.15.05s-.08.04-.11.05l.11-.92h1.7v-.71H10.9l-.25 2.17l.67.17c.03-.03.06-.06.1-.09s.07-.05.12-.07s.1-.04.15-.05s.13-.02.2-.02c.12 0 .22.02.3.05s.16.09.21.15s.1.14.13.24s.04.19.04.31s-.01.22-.03.31s-.06.17-.11.24"></svg:path>`,
})
export class IcSharpForward5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpForwardToInboxIcon],svg[ic-sharp-forward-to-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h11v-2H4V8l8 5l8-5v5h2zm-10 7L4 6h16zm7 4l4 4l-4 4v-3h-4v-2h4z"></svg:path>`,
})
export class IcSharpForwardToInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFoundationIcon],svg[ic-sharp-foundation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12h3L12 3L2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2zM7 15v-4.81l4-3.6V15zm6 0V6.59l4 3.6V15z"></svg:path>`,
})
export class IcSharpFoundationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFreeBreakfastIcon],svg[ic-sharp-free-breakfast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4v14h14v-7h2a2 2 0 0 0 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2zM4 19h16v2H4z"></svg:path>`,
})
export class IcSharpFreeBreakfastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFreeCancellationIcon],svg[ic-sharp-free-cancellation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.21 20H5V10h14v4.38l2-2V4h-3V2h-2v2H8V2H6v2H3v18h10.21zm5.33 2.5L13 18.96l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41zM10.41 14L12 15.59L10.59 17L9 15.41L7.41 17L6 15.59L7.59 14L6 12.41L7.41 11L9 12.59L10.59 11L12 12.41z"></svg:path>`,
})
export class IcSharpFreeCancellationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFrontHandIcon],svg[ic-sharp-front-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 8v7H18c-1.65 0-3 1.35-3 3h-1c0-2.04 1.53-3.72 3.5-3.97V2H15v9h-1V0h-2.5v11h-1V1.5H8V12H7V4.5H4.5v11.25c0 4.56 3.69 8.25 8.25 8.25S21 20.31 21 15.75V8z"></svg:path>`,
})
export class IcSharpFrontHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFullscreenIcon],svg[ic-sharp-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"></svg:path>`,
})
export class IcSharpFullscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFullscreenExitIcon],svg[ic-sharp-fullscreen-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"></svg:path>`,
})
export class IcSharpFullscreenExitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpFunctionsIcon],svg[ic-sharp-functions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5l-5-5h7z"></svg:path>`,
})
export class IcSharpFunctionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGMobiledataIcon],svg[ic-sharp-g-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11v2h2v2H9V9h7V7H7v10h9v-6z"></svg:path>`,
})
export class IcSharpGMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGTranslateIcon],svg[ic-sharp-g-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2M7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06l-1.23 1.18l-.06-.05c-.29-.27-.78-.59-1.52-.59c-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61c0 2.35-1.61 4-3.92 4m6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7M21 20c0 .55-.45 1-1 1h-7l2-2l-.81-2.77l.92-.92L17.79 18l.73-.73l-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcSharpGTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGamepadIcon],svg[ic-sharp-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7.5V2H9v5.5l3 3zM7.5 9H2v6h5.5l3-3zM9 16.5V22h6v-5.5l-3-3zM16.5 9l-3 3l3 3H22V9z"></svg:path>`,
})
export class IcSharpGamepadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGamesIcon],svg[ic-sharp-games-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7.5V2H9v5.5l3 3zM7.5 9H2v6h5.5l3-3zM9 16.5V22h6v-5.5l-3-3zM16.5 9l-3 3l3 3H22V9z"></svg:path>`,
})
export class IcSharpGamesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGarageIcon],svg[ic-sharp-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="13" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m8.33 7.5l-.66 2h8.66l-.66-2z"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zm-3 16.5h-2v-2H7v2H5v-7.31L6.89 5.5H17.1l1.9 5.69z"></svg:path>`,
})
export class IcSharpGarageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGasMeterIcon],svg[ic-sharp-gas-meter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4h-5V2h-2v2h-2V2H9v2H4v18h16zm-8 14c-1.38 0-2.5-1.1-2.5-2.46c0-1.09.43-1.39 2.5-3.79c2.05 2.38 2.5 2.7 2.5 3.79C14.5 16.9 13.38 18 12 18m4-8H8V8h8z"></svg:path>`,
})
export class IcSharpGasMeterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGavelIcon],svg[ic-sharp-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h12v2H1zM5.24 8.07l2.83-2.83l14.14 14.14l-2.83 2.83zM12.32 1l5.66 5.66l-2.83 2.83l-5.66-5.66zM3.83 9.48l5.66 5.66l-2.83 2.83L1 12.31z"></svg:path>`,
})
export class IcSharpGavelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGeneratingTokensIcon],svg[ic-sharp-generating-tokens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m3 6.5h-2v5H8v-5H6V9h6zm8.25-6.75L23 5l-2.75 1.25L19 9l-1.25-2.75L15 5l2.75-1.25L19 1zm0 14L23 19l-2.75 1.25L19 23l-1.25-2.75L15 19l2.75-1.25L19 15z"></svg:path>`,
})
export class IcSharpGeneratingTokensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGestureIcon],svg[ic-sharp-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22c.5.2 0 1.03-.3 1.52c-.25.42-2.86 3.89-2.86 6.31c0 1.28.48 2.34 1.34 2.98c.75.56 1.74.73 2.64.46c1.07-.31 1.95-1.4 3.06-2.77c1.21-1.49 2.83-3.44 4.08-3.44c1.63 0 1.65 1.01 1.76 1.79c-3.78.64-5.38 3.67-5.38 5.37s1.44 3.09 3.21 3.09c1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2c-2.25 0-4.18 1.91-4.94 2.84c-.58.73-2.06 2.48-2.29 2.72c-.25.3-.68.84-1.11.84c-.45 0-.72-.83-.36-1.92c.35-1.09 1.4-2.86 1.85-3.52c.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3C5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93zm9.29 11.66c-.31 0-.74-.26-.74-.72c0-.6.73-2.2 2.87-2.76c-.3 2.69-1.43 3.48-2.13 3.48"></svg:path>`,
})
export class IcSharpGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGetAppIcon],svg[ic-sharp-get-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"></svg:path>`,
})
export class IcSharpGetAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGifIcon],svg[ic-sharp-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 9H13v6h-1.5zM10 9H5v6h5v-3H8.5v1.5h-2v-3H10zm9 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></svg:path>`,
})
export class IcSharpGifIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGifBoxIcon],svg[ic-sharp-gif-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM9.5 13v-1h1v2h-3v-4h3v1h-2v2zm3 1h-1v-4h1zm4-3h-2v.5H16v1h-1.5V14h-1v-4h3z"></svg:path>`,
})
export class IcSharpGifBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGirlIcon],svg[ic-sharp-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5c.97 0 1.75-.78 1.75-1.75S12.97 4 12 4s-1.75.78-1.75 1.75S11.03 7.5 12 7.5m2 8.5v4h-4v-4H8l2.38-6.38a1.733 1.733 0 0 1 3.24 0L16 16z"></svg:path>`,
})
export class IcSharpGirlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGiteIcon],svg[ic-sharp-gite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H9V4H7v2H6l-4 4v9h20v-9zM4 12h10v5H4zm16 5h-4v-6.17l2-2l2 2z"></svg:path>`,
})
export class IcSharpGiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGolfCourseIcon],svg[ic-sharp-golf-course-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="19.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73c0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98z"></svg:path>`,
})
export class IcSharpGolfCourseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGppBadIcon],svg[ic-sharp-gpp-bad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5zm3.5 12.09l-1.41 1.41L12 13.42L9.91 15.5L8.5 14.09L10.59 12L8.5 9.91L9.91 8.5L12 10.59l2.09-2.09l1.41 1.41L13.42 12z"></svg:path>`,
})
export class IcSharpGppBadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGppGoodIcon],svg[ic-sharp-gpp-good-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5zm-1.06 13.54L7.4 12l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41z"></svg:path>`,
})
export class IcSharpGppGoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGppMaybeIcon],svg[ic-sharp-gpp-maybe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5zm1 14h-2v-2h2zm0-4h-2V7h2z"></svg:path>`,
})
export class IcSharpGppMaybeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGpsFixedIcon],svg[ic-sharp-gps-fixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7"></svg:path>`,
})
export class IcSharpGpsFixedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGpsNotFixedIcon],svg[ic-sharp-gps-not-fixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.94 11A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7"></svg:path>`,
})
export class IcSharpGpsNotFixedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGpsOffIcon],svg[ic-sharp-gps-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.94 11A8.994 8.994 0 0 0 13 3.06V1h-2v2.06c-.98.11-1.91.38-2.77.78l1.53 1.53a6.995 6.995 0 0 1 8.87 8.87l1.53 1.53c.4-.86.67-1.79.78-2.77H23v-2zM3 4.27l2.04 2.04A9 9 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21l1.41-1.41L4.41 2.86zm13.27 13.27a6.995 6.995 0 0 1-9.81-9.81z"></svg:path>`,
})
export class IcSharpGpsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGradeIcon],svg[ic-sharp-grade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"></svg:path>`,
})
export class IcSharpGradeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGradientIcon],svg[ic-sharp-gradient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm14-6H3v18h18zM9 18H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14z"></svg:path>`,
})
export class IcSharpGradientIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGradingIcon],svg[ic-sharp-grading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7h16v2H4zm0 6h16v-2H4zm0 4h7v-2H4zm0 4h7v-2H4zm11.41-2.83L14 16.75l-1.41 1.41L15.41 21L20 16.42L18.58 15zM4 3v2h16V3z"></svg:path>`,
})
export class IcSharpGradingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGrainIcon],svg[ic-sharp-grain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M6 8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m12-8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m-4 8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m4-4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-4-4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-4-4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class IcSharpGrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGraphicEqIcon],svg[ic-sharp-graphic-eq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18h2V6H7zm4 4h2V2h-2zm-8-8h2v-4H3zm12 4h2V6h-2zm4-8v4h2v-4z"></svg:path>`,
})
export class IcSharpGraphicEqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGrassIcon],svg[ic-sharp-grass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20H2v-2h5.75A8.03 8.03 0 0 0 2 12.26c.64-.16 1.31-.26 2-.26c4.42 0 8 3.58 8 8m10-7.74c-.64-.16-1.31-.26-2-.26c-2.93 0-5.48 1.58-6.88 3.93a9.8 9.8 0 0 1 .87 4.07h8v-2h-5.75A8.06 8.06 0 0 1 22 12.26m-6.36-1.24a10.03 10.03 0 0 1 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3m-4.22-2.17A8.53 8.53 0 0 0 6.7 4C8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61c.43.24.83.52 1.22.82a9.9 9.9 0 0 1 1.24-3.29"></svg:path>`,
})
export class IcSharpGrassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGreaterThanIcon],svg[ic-sharp-greater-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"></svg:path>`,
})
export class IcSharpGreaterThanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGreaterThanEqualIcon],svg[ic-sharp-greater-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.5 15.5l8.25-5.5L6.5 4.5l1-1.5L18 10L7.5 17z"></svg:path><svg:path fill="currentColor" d="M18 20.998H6v-2h12z"></svg:path>`,
})
export class IcSharpGreaterThanEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGrid3x3Icon],svg[ic-sharp-grid-3x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4zm-6 4h-4v-4h4z"></svg:path>`,
})
export class IcSharpGrid3x3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGrid4x4Icon],svg[ic-sharp-grid-4x4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7zM7 7h4v4H7zm0 10v-4h4v4zm10 0h-4v-4h4zm0-6h-4V7h4z"></svg:path>`,
})
export class IcSharpGrid4x4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGridGoldenratioIcon],svg[ic-sharp-grid-goldenratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11V9h-7V2h-2v7h-2V2H9v7H2v2h7v2H2v2h7v7h2v-7h2v7h2v-7h7v-2h-7v-2zm-9 2h-2v-2h2z"></svg:path>`,
})
export class IcSharpGridGoldenratioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGridOffIcon],svg[ic-sharp-grid-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v.89l2 2V4h4v4h-2.89l2 2H14v.89l2 2V10h4v4h-2.89l2 2H20v.89l2 2V2H5.11l2 2zm8 0h4v4h-4zM1.41 1.14L0 2.55l2 2V22h17.45l2.01 2.01l1.41-1.41zM10 12.55L11.45 14H10zm-6-6L5.45 8H4zM8 20H4v-4h4zm0-6H4v-4h3.45l.55.55zm6 6h-4v-4h3.45l.55.55zm2 0v-1.45L17.45 20z"></svg:path>`,
})
export class IcSharpGridOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGridOnIcon],svg[ic-sharp-grid-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM8 20H4v-4h4zm0-6H4v-4h4zm0-6H4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4z"></svg:path>`,
})
export class IcSharpGridOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGridViewIcon],svg[ic-sharp-grid-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8v8H3zm0 10h8v8H3zM13 3h8v8h-8zm0 10h8v8h-8z"></svg:path>`,
})
export class IcSharpGridViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGroupIcon],svg[ic-sharp-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"></svg:path>`,
})
export class IcSharpGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGroupAddIcon],svg[ic-sharp-group-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95m4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17"></svg:path>`,
})
export class IcSharpGroupAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGroupOffIcon],svg[ic-sharp-group-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8c0-1.42-.5-2.73-1.33-3.76c.42-.14.86-.24 1.33-.24c2.21 0 4 1.79 4 4s-1.79 4-4 4h-.18l-.77-.77c.6-.94.95-2.05.95-3.23m7.83 12H23v-3c0-2.18-3.58-3.47-6.34-3.87c1.1.75 1.95 1.71 2.23 2.94zM7.24 4.41a3.996 3.996 0 0 1 5.35 5.35zM9.17 12H9c-2.21 0-4-1.79-4-4v-.17L.69 3.51L2.1 2.1l19.8 19.8l-1.41 1.41L17 19.83V20H1v-3c0-2.66 5.33-4 8-4c.37 0 .8.03 1.25.08z"></svg:path>`,
})
export class IcSharpGroupOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGroupRemoveIcon],svg[ic-sharp-group-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 9v2h-6V9zM8 4C5.79 4 4 5.79 4 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95m4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17"></svg:path>`,
})
export class IcSharpGroupRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGroupWorkIcon],svg[ic-sharp-group-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M8 17.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M9.5 8a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1-5 0m6.5 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class IcSharpGroupWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGroupsIcon],svg[ic-sharp-groups-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.75c1.63 0 3.07.39 4.24.9c1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73c1.17-.52 2.61-.91 4.24-.91M4 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V18H24zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3"></svg:path>`,
})
export class IcSharpGroupsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGroups2Icon],svg[ic-sharp-groups-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.27 12h3.46a1.5 1.5 0 0 0 1.48-1.75l-.3-1.79a2.951 2.951 0 0 0-5.82.01l-.3 1.79c-.15.91.55 1.74 1.48 1.74m-8.61-.89c-.13.26-.18.57-.1.88c.16.69.76 1.03 1.53 1h1.95c.83 0 1.51-.58 1.51-1.29c0-.14-.03-.27-.07-.4c-.01-.03-.01-.05.01-.08c.09-.16.14-.34.14-.53c0-.31-.14-.6-.36-.82c-.03-.03-.03-.06-.02-.1c.07-.2.07-.43.01-.65a1.12 1.12 0 0 0-.99-.74a.1.1 0 0 1-.07-.03C5.03 8.14 4.72 8 4.37 8c-.3 0-.57.1-.75.26c-.03.03-.06.03-.09.02a1.24 1.24 0 0 0-1.7 1.03q0 .03-.03.06c-.29.26-.46.65-.41 1.05c.03.22.12.43.25.6c.03.02.03.06.02.09m14.58 2.54c-1.17-.52-2.61-.9-4.24-.9s-3.07.39-4.24.9A2.99 2.99 0 0 0 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74m-15.02.93A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58m21.56 0A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85M22 11v-.5c0-1.1-.9-2-2-2h-2c-.42 0-.65.48-.39.81l.7.63c-.19.31-.31.67-.31 1.06c0 1.1.9 2 2 2s2-.9 2-2"></svg:path>`,
})
export class IcSharpGroups2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpGroups3Icon],svg[ic-sharp-groups-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.24 13.65c-1.17-.52-2.61-.9-4.24-.9s-3.07.39-4.24.9A2.99 2.99 0 0 0 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74m-15.02.93A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58m21.56 0A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85M12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3M1.497 11L4 8.497L6.503 11L4 13.503zM20 9l-2.5 4h5z"></svg:path>`,
})
export class IcSharpGroups3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHMobiledataIcon],svg[ic-sharp-h-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11H9V7H7v10h2v-4h6v4h2V7h-2z"></svg:path>`,
})
export class IcSharpHMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHPlusMobiledataIcon],svg[ic-sharp-h-plus-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11H6V7H4v10h2v-4h6v4h2V7h-2zm10 0h-2V9h-2v2h-2v2h2v2h2v-2h2z"></svg:path>`,
})
export class IcSharpHPlusMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHailIcon],svg[ic-sharp-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m5-4h2c0 2.7-.93 4.41-2.3 5.5c-.5.4-1.1.7-1.7.9V22h-2v-6h-2v6H9V10.1q-.45.15-.6.3C7.87 10.81 7 11.43 7 14H5c0-2.06.35-3.78 2.11-5.29C8.21 7.81 10 7 12 7s2.68-.46 3.48-1.06C15.96 5.55 17 4.76 17 2M4 16h3v6H4z"></svg:path>`,
})
export class IcSharpHailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHandshakeIcon],svg[ic-sharp-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.59 5.95l-7.05 7.04L.7 10.3l8.55-8.55L17.2 9.7l-1.42 1.42zm12.65 4.29l-8.49-8.49l-2.06 2.06l5.9 5.88l-2.83 2.83l-5.17-5.17l-6.27 6.27l1.42 1.41l5.32-5.32l.71.71l-5.32 5.32l1.42 1.41l5.32-5.32l.71.71l-5.32 5.32l1.41 1.41l5.32-5.32l.71.71L10.68 20l1.41 1.41z"></svg:path>`,
})
export class IcSharpHandshakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHandymanIcon],svg[ic-sharp-handyman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.37 12.87h-.99l-2.54 2.54v.99l6.01 6.01l3.54-3.54z"></svg:path><svg:path fill="currentColor" d="m17.34 10.19l1.41-1.41l2.12 2.12a3 3 0 0 0 0-4.24l-3.54-3.54l-1.41 1.41V1.71l-.7-.71l-3.54 3.54l.71.71h2.83l-1.41 1.41l1.06 1.06l-2.89 2.89l-4.13-4.13V5.06L4.83 2.04L2 4.87L5.03 7.9h1.41l4.13 4.13l-.85.85H7.6l-6.01 6.01l3.54 3.54l6.01-6.01V14.3l5.15-5.15z"></svg:path>`,
})
export class IcSharpHandymanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHardwareIcon],svg[ic-sharp-hardware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 3l-3 3V3H9C6.24 3 4 5.24 4 8h5v3h6V8l3 3h2V3zM9 13v8h6v-8z"></svg:path>`,
})
export class IcSharpHardwareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHdIcon],svg[ic-sharp-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM11 15H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4zm1.5 4.5h2v-3h-2z"></svg:path>`,
})
export class IcSharpHdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHdrAutoIcon],svg[ic-sharp-hdr-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.04 8.04h-.09l-1.6 4.55h3.29z"></svg:path><svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m3.21 15l-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11z"></svg:path>`,
})
export class IcSharpHdrAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHdrAutoSelectIcon],svg[ic-sharp-hdr-auto-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 18h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5H8v-3h2zm12-2v-2h-1.5v2h-2V20h2v2H22v-2h2v-1.5zM13 22h1.5v-2h1.1l.9 2H18l-.86-2H18v-4h-5zm1.5-4.5h2v1h-2zM11.97 5.3l-1.02 2.89h2.1L12.03 5.3z"></svg:path><svg:path fill="currentColor" d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m2.04 9l-.63-1.79h-2.83L9.96 11H8.74l2.63-7h1.25l2.63 7z"></svg:path>`,
})
export class IcSharpHdrAutoSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHdrEnhancedSelectIcon],svg[ic-sharp-hdr-enhanced-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m3 7h-2v2h-2V9H9V7h2V5h2v2h2zm-5 7H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5H8v-3h2zm8-4.5h-5v6h1.5v-2h1.1l.9 2H18l-.86-2H18zm-1.5 2.5h-2v-1h2zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zm18.5.5v-2h-1.5v2h-2V20h2v2H22v-2h2v-1.5z"></svg:path>`,
})
export class IcSharpHdrEnhancedSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHdrOffIcon],svg[ic-sharp-hdr-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 15v-2h1.1l.9 2H21l-.9-2.1h.9V9h-5v4.86L17.14 15zm0-4.5h2v1h-2zm-4.5 0v.36l1.5 1.5V10.5c0-.8-.7-1.5-1.5-1.5h-1.86l1.5 1.5zM2.51 2.49L1.45 3.55L6.9 9h-.4v2h-2V9H3v6h1.5v-2.5h2V15H8v-4.9l1.5 1.5V15h3.4l7.6 7.6l1.06-1.06z"></svg:path>`,
})
export class IcSharpHdrOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHdrOffSelectIcon],svg[ic-sharp-hdr-off-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20v-4h-5v6h1.5v-2h1.1l.9 2H18l-.86-2zm-1.5-1.5h-2v-1h2zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5H8v-3h2zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2zM10.98 4.15L9.42 2.59c5.1-2.42 10.41 2.89 7.99 7.99l-1.56-1.56c.81-2.96-1.91-5.68-4.87-4.87M6.34 2.34L4.93 3.76l1.66 1.66c-2.42 5.1 2.89 10.41 7.99 7.99l1.66 1.66l1.41-1.41zm1.81 4.64l4.87 4.87c-2.96.81-5.68-1.91-4.87-4.87"></svg:path>`,
})
export class IcSharpHdrOffSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHdrOnIcon],svg[ic-sharp-hdr-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12.9V9h-5v6h1.5v-2h1.1l.9 2H21l-.9-2.1zm-1.5-1.4h-2v-1h2zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5h-2v-3h2z"></svg:path>`,
})
export class IcSharpHdrOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHdrOnSelectIcon],svg[ic-sharp-hdr-on-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19.9V16h-5v6h1.5v-2h1.1l.9 2H18l-.9-2.1zm-1.5-1.4h-2v-1h2zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5H8v-3h2zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m0-2C8.69 2 6 4.69 6 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"></svg:path>`,
})
export class IcSharpHdrOnSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHdrPlusIcon],svg[ic-sharp-hdr-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 14.5h2v1h-2zm6-7H16v3h-1.5z"></svg:path><svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 15l-.86-.01L12 19h-1.5l-.9-2H8.5v2H7v-6h5zm0-5h-1.5V9.5h-2V12H7V6h1.5v2h2V6H12zm5.5 4H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5zm0-5.5c0 .8-.7 1.5-1.5 1.5h-3V6h3c.8 0 1.5.7 1.5 1.5z"></svg:path>`,
})
export class IcSharpHdrPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHdrStrongIcon],svg[ic-sharp-hdr-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcSharpHdrStrongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHdrWeakIcon],svg[ic-sharp-hdr-weak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m12-2c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></svg:path>`,
})
export class IcSharpHdrWeakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHeadphonesIcon],svg[ic-sharp-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9v9h6v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h6v-9a9 9 0 0 0-9-9"></svg:path>`,
})
export class IcSharpHeadphonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHeadphonesBatteryIcon],svg[ic-sharp-headphones-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7V6h-2v1h-2v11h6V7zM8 6c-3.31 0-6 2.69-6 6v6h4v-5H3.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H10v5h4v-6c0-3.31-2.69-6-6-6"></svg:path>`,
})
export class IcSharpHeadphonesBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHeadsetIcon],svg[ic-sharp-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.4 1.02C6.62 1.33 3 5.52 3 10.31V20h6v-8H5v-1.71C5 6.45 7.96 3.11 11.79 3A7 7 0 0 1 19 10v2h-4v8h6V10c0-5.17-4.36-9.32-9.6-8.98"></svg:path>`,
})
export class IcSharpHeadsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHeadsetMicIcon],svg[ic-sharp-headset-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.4 1.02C6.62 1.33 3 5.51 3 10.31V20h6v-8H5v-1.71C5 6.45 7.96 3.11 11.79 3A7 7 0 0 1 19 10v2h-4v8h4v1h-7v2h9V10c0-5.17-4.36-9.32-9.6-8.98"></svg:path>`,
})
export class IcSharpHeadsetMicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpHeadsetOffIcon],svg[ic-sharp-headset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c3.87 0 7 3.13 7 7v1h-4v.17l6 6V11a9 9 0 0 0-9-9c-2.02 0-3.88.67-5.38 1.8l1.43 1.43A6.9 6.9 0 0 1 12 4M2.1 2.1L.69 3.51l3.33 3.33A9 9 0 0 0 3 11v9h6v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h8.17l.31.31l1.41-1.41z"></svg:path>`,
})
export class IcSharpHeadsetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
