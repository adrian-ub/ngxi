import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTableRestaurantIcon],svg[ic-sharp-table-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.33 11l-2-7H3.67l-2 7H5.2L4 20h2l.67-5h10.67l.66 5h2l-1.2-9zm-15.4 2l.27-2h9.6l.27 2z"></svg:path>`,
})
export class IcSharpTableRestaurantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTableRowsIcon],svg[ic-sharp-table-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8H3V4h18zm0 2H3v4h18zm0 6H3v4h18z"></svg:path>`,
})
export class IcSharpTableRowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTableViewIcon],svg[ic-sharp-table-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H7v14h14zm-2 2v2H9V9zm-6 6v-2h2v2zm2 2v2h-2v-2zm-4-2H9v-2h2zm6-2h2v2h-2zm-8 4h2v2H9zm8 2v-2h2v2zM6 17H3V3h14v3h-2V5H5v10h1z"></svg:path>`,
})
export class IcSharpTableViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTabletIcon],svg[ic-sharp-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4H1v16h21.99zm-4 14H5V6h14z"></svg:path>`,
})
export class IcSharpTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTabletAndroidIcon],svg[ic-sharp-tablet-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 0H3v24h18zm-7 22h-4v-1h4zm5.25-3H4.75V3h14.5z"></svg:path>`,
})
export class IcSharpTabletAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTabletMacIcon],svg[ic-sharp-tablet-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 0H2v24h19zm-9.5 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m7.5-4H4V3h15z"></svg:path>`,
})
export class IcSharpTabletMacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTagIcon],svg[ic-sharp-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4zm-6 4h-4v-4h4z"></svg:path>`,
})
export class IcSharpTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTagFacesIcon],svg[ic-sharp-tag-faces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.01 2C6.49 2 2.02 6.48 2.02 12s4.47 10 9.99 10c5.53 0 10.01-4.48 10.01-10S17.54 2 12.01 2m.01 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.35 8 15.52 8s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.35 8 8.52 8s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.91c.8 2.04 2.78 3.5 5.11 3.5"></svg:path>`,
})
export class IcSharpTagFacesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTakeoutDiningIcon],svg[ic-sharp-takeout-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 7.46l-1.41-1.41L19 7.63l.03-.56L14.98 3H9.02L4.97 7.07l.03.5l-1.59-1.56L2 7.44L4.66 10h14.69zM5.93 20h12.14l.63-8.45H5.3z"></svg:path>`,
})
export class IcSharpTakeoutDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTapAndPlayIcon],svg[ic-sharp-tap-and-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0 4v3h3c0-1.66-1.34-3-3-3m0-8v2a9 9 0 0 1 9 9h2c0-6.08-4.92-11-11-11M5 1v9.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H19V1z"></svg:path>`,
})
export class IcSharpTapAndPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTapasIcon],svg[ic-sharp-tapas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V1h-8v9c0 1.86 1.28 3.41 3 3.86V21h-2v2h6v-2h-2v-7.14c1.72-.45 3-2 3-3.86m-2-7v3h-4V3zM10 9H8V8h2a2.5 2.5 0 0 0 0-5H8V1H6v2H4a2.5 2.5 0 0 0 0 5h2v1H4a2.5 2.5 0 0 0 0 5h2v9h2v-9h2a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class IcSharpTapasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTaskIcon],svg[ic-sharp-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H4v20h16V8zm-3.06 16L7.4 14.46l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41zM13 9V3.5L18.5 9z"></svg:path>`,
})
export class IcSharpTaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTaskAltIcon],svg[ic-sharp-task-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.18L10.59 16.6l-4.24-4.24l1.41-1.41l2.83 2.83l10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44A9.9 9.9 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z"></svg:path>`,
})
export class IcSharpTaskAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTaxiAlertIcon],svg[ic-sharp-taxi-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13c-1.91 0-3.63-.76-4.89-2h-8.3l1.04-3h5.44C11.1 7.37 11 6.7 11 6s.1-1.37.29-2H8v2H4.43L2 13v9h3v-2h12v2h3v-9l-.09-.27c-.61.17-1.25.27-1.91.27M6.5 17c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17m9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path><svg:path fill="currentColor" d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m.5 8h-1V8h1zm0-2h-1V3h1z"></svg:path>`,
})
export class IcSharpTaxiAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTelegramIcon],svg[ic-sharp-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"></svg:path>`,
})
export class IcSharpTelegramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTempleBuddhistIcon],svg[ic-sharp-temple-buddhist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9.02c0 1.09-.89 1.98-1.98 1.98H4.98C3.89 11 3 10.11 3 9.02H1c0 1.86 1.28 3.4 3 3.84V22h6v-5h4v5h6v-9.14c.55-.14 3-1.04 3-3.86z"></svg:path><svg:path fill="currentColor" d="M6 8.86V10h12V8.86c.55-.14 3-1.04 3-3.86l-2 .02C19 6.11 18.11 7 17.02 7H6.98C5.89 7 5 6.11 5 5.02H3c0 1.85 1.28 3.4 3 3.84"></svg:path><svg:path fill="currentColor" d="M12 1L8.25 6h7.5z"></svg:path>`,
})
export class IcSharpTempleBuddhistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTempleHinduIcon],svg[ic-sharp-temple-hindu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.6 11h10.8l-.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zm-4.1-5L15 3V1h-2v2h-2.03V1h-2v2.12L8.1 6z"></svg:path>`,
})
export class IcSharpTempleHinduIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTerminalIcon],svg[ic-sharp-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16h20V4zm18 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z"></svg:path>`,
})
export class IcSharpTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTerrainIcon],svg[ic-sharp-terrain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z"></svg:path>`,
})
export class IcSharpTerrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextDecreaseIcon],svg[ic-sharp-text-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5zm4.42-5.61L7.44 7.6h.12l2.03 5.79zM23 11v2h-8v-2z"></svg:path>`,
})
export class IcSharpTextDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextFieldsIcon],svg[ic-sharp-text-fields-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 4v3h5v12h3V7h5V4zm19 5h-9v3h3v7h3v-7h3z"></svg:path>`,
})
export class IcSharpTextFieldsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextFormatIcon],svg[ic-sharp-text-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17v2h14v-2zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1zM12 5.98L13.87 11h-3.74z"></svg:path>`,
})
export class IcSharpTextFormatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextIncreaseIcon],svg[ic-sharp-text-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5zm4.42-5.61L7.44 7.6h.12l2.03 5.79zM20 11h3v2h-3v3h-2v-3h-3v-2h3V8h2z"></svg:path>`,
})
export class IcSharpTextIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextRotateUpIcon],svg[ic-sharp-text-rotate-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 4l-3 3h2v13h2V7h2zm-6.2 11.5v-5l2.2-.9V7.5L3 12.25v1.5l11 4.75v-2.1zM4.98 13L10 11.13v3.74z"></svg:path>`,
})
export class IcSharpTextRotateUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextRotateVerticalIcon],svg[ic-sharp-text-rotate-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 5h-1.5L9.5 16h2.1l.9-2.2h5l.9 2.2h2.1zm-2.62 7L15 6.98L16.87 12zM6 20l3-3H7V4H5v13H3z"></svg:path>`,
})
export class IcSharpTextRotateVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextRotationAngledownIcon],svg[ic-sharp-text-rotation-angledown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21v-4.24l-1.41 1.41l-9.2-9.19l-1.41 1.41l9.19 9.19L10.76 21zM11.25 8.48l3.54 3.54l-.92 2.19l1.48 1.48l4.42-11.14l-1.06-1.05L7.57 7.92L9.06 9.4zm6.59-3.05l-2.23 4.87l-2.64-2.64z"></svg:path>`,
})
export class IcSharpTextRotationAngledownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextRotationAngleupIcon],svg[ic-sharp-text-rotation-angleup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.76 9l1.41 1.41l-9.19 9.19l1.41 1.41l9.19-9.19L21 13.24V9zm-8.28 3.75l3.54-3.54l2.19.92l1.48-1.48L4.56 4.23L3.5 5.29l4.42 11.14l1.48-1.48zm-.82-1.72L5.43 6.16l4.87 2.23z"></svg:path>`,
})
export class IcSharpTextRotationAngleupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextRotationDownIcon],svg[ic-sharp-text-rotation-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 20l3-3H7V4H5v13H3zm6.2-11.5v5l-2.2.9v2.1l11-4.75v-1.5L10 5.5v2.1zm6.82 2.5L14 12.87V9.13z"></svg:path>`,
})
export class IcSharpTextRotationDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextRotationNoneIcon],svg[ic-sharp-text-rotation-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18l-3-3v2H5v2h13v2zM9.5 11.8h5l.9 2.2h2.1L12.75 3h-1.5L6.5 14h2.1zM12 4.98L13.87 10h-3.74z"></svg:path>`,
})
export class IcSharpTextRotationNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextSnippetIcon],svg[ic-sharp-text-snippet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 9l-6-6H3v18h18zM7 7h7v2H7zm10 10H7v-2h10zm0-4H7v-2h10z"></svg:path>`,
})
export class IcSharpTextSnippetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextsmsIcon],svg[ic-sharp-textsms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2.01L2 22l4-4h16zM9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z"></svg:path>`,
})
export class IcSharpTextsmsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTextureIcon],svg[ic-sharp-texture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.66 3L3.07 19.59V21h1.41L21.07 4.42V3zm-7.71 0l-8.88 8.88v2.83L14.78 3zM3.07 3v4l4-4zm18 18v-4l-4 4zm-8.88 0l8.88-8.88V9.29L9.36 21z"></svg:path>`,
})
export class IcSharpTextureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTheaterComedyIcon],svg[ic-sharp-theater-comedy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v5.5h3.5v3.31C14.55 9.8 15.64 9 16.99 9c1.38 0 2.5.84 2.5 1.88H14.5v3.56c.76.36 1.61.56 2.5.56c3.31 0 6-2.69 6-6V2zm4 5.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m4 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path><svg:path fill="currentColor" d="M1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1zm6 1.88c-1.38 0-2.5-.84-2.5-1.88h5c0 1.04-1.12 1.88-2.5 1.88m2-5.38c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-4 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class IcSharpTheaterComedyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTheatersIcon],svg[ic-sharp-theaters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3zM8 17H6v-2h2zm0-4H6v-2h2zm0-4H6V7h2zm10 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V7h2z"></svg:path>`,
})
export class IcSharpTheatersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpThermostatIcon],svg[ic-sharp-thermostat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4c0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4m-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2z"></svg:path>`,
})
export class IcSharpThermostatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpThermostatAutoIcon],svg[ic-sharp-thermostat-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12V6c0-1.66-1.34-3-3-3S5 4.34 5 6v6c-1.21.91-2 2.37-2 4c0 1.12.38 2.14 1 2.97V19h.02c.91 1.21 2.35 2 3.98 2s3.06-.79 3.98-2H12v-.03c.62-.83 1-1.85 1-2.97c0-1.63-.79-3.09-2-4m-6 4c0-.94.45-1.84 1.2-2.4L7 13V6c0-.55.45-1 1-1s1 .45 1 1v7l.8.6c.75.57 1.2 1.46 1.2 2.4zM18.62 4h-1.61l-3.38 9h1.56l.81-2.3h3.63l.8 2.3H22zm-2.15 5.39l1.31-3.72h.08l1.31 3.72z"></svg:path>`,
})
export class IcSharpThermostatAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpThumbDownIcon],svg[ic-sharp-thumb-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.83 23L17 15.82V3H4.69L1 11.6V16h8.31l-1.12 5.38zM19 3h4v12h-4z"></svg:path>`,
})
export class IcSharpThumbDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpThumbDownAltIcon],svg[ic-sharp-thumb-down-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11.6V16h8.31l-1.12 5.38L9.83 23L17 15.82V3H4.69zM19 3h4v12h-4z"></svg:path>`,
})
export class IcSharpThumbDownAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpThumbDownOffAltIcon],svg[ic-sharp-thumb-down-off-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h4v12h-4zM1 11.6V16h8.31l-1.12 5.38L9.83 23L17 15.82V3H4.69zM15 5v9.99l-4.34 4.35l.61-2.93l.5-2.41H3v-1.99L6.01 5z"></svg:path>`,
})
export class IcSharpThumbDownOffAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpThumbUpIcon],svg[ic-sharp-thumb-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.17 1L7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38zM1 9h4v12H1z"></svg:path>`,
})
export class IcSharpThumbUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpThumbUpAltIcon],svg[ic-sharp-thumb-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.17 1L7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38zM1 9h4v12H1z"></svg:path>`,
})
export class IcSharpThumbUpAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpThumbUpOffAltIcon],svg[ic-sharp-thumb-up-off-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.17 1L7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38zM1 9h4v12H1z"></svg:path>`,
})
export class IcSharpThumbUpOffAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpThumbsUpDownIcon],svg[ic-sharp-thumbs-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5H5.82l.78-3.78L5.38 0L0 5.38V14h9.24L12 7.54zm2.76 5L12 16.46V19h6.18l-.78 3.78L18.62 24L24 18.62V10z"></svg:path>`,
})
export class IcSharpThumbsUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpThunderstormIcon],svg[ic-sharp-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.92 7.02C17.45 4.18 14.97 2 12 2C9.82 2 7.83 3.18 6.78 5.06C4.09 5.41 2 7.74 2 10.5C2 13.53 4.47 16 7.5 16h10c2.48 0 4.5-2.02 4.5-4.5a4.5 4.5 0 0 0-4.08-4.48M14.8 17l-2.9 3.32l2 1L11.55 24h2.65l2.9-3.32l-2-1L17.45 17zm-6 0l-2.9 3.32l2 1L5.55 24H8.2l2.9-3.32l-2-1L11.45 17z"></svg:path>`,
})
export class IcSharpThunderstormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTiktokIcon],svg[ic-sharp-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></svg:path>`,
})
export class IcSharpTiktokIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTimeToLeaveIcon],svg[ic-sharp-time-to-leave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.57 4H5.43L3 11v9h3v-2h12v2h3v-9zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 10l1.5-4.5h11L19 10z"></svg:path>`,
})
export class IcSharpTimeToLeaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTimelapseIcon],svg[ic-sharp-timelapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.24 7.76A5.97 5.97 0 0 0 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0a5.99 5.99 0 0 0-.01-8.48M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"></svg:path>`,
})
export class IcSharpTimelapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTimelineIcon],svg[ic-sharp-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.51-.07l-3.56 3.55c.05.16.07.34.07.52c0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0 1 19 8c0-1.1.9-2 2-2s2 .9 2 2m0 0c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.51-.07l-3.56 3.55c.05.16.07.34.07.52c0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0 1 19 8c0-1.1.9-2 2-2s2 .9 2 2"></svg:path>`,
})
export class IcSharpTimelineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTimerIcon],svg[ic-sharp-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H9v2h6zm-4 13h2V8h-2zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.96 8.96 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7"></svg:path>`,
})
export class IcSharpTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTimer10Icon],svg[ic-sharp-timer-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M-.01 7.72V9.4l3-1V18h2V6h-.25zm23.78 6.65c-.14-.28-.35-.53-.63-.74s-.61-.39-1.01-.53s-.85-.27-1.35-.38a7 7 0 0 1-.87-.23c-.23-.08-.41-.16-.55-.25s-.23-.19-.28-.3a.98.98 0 0 1 .01-.8c.06-.13.15-.25.27-.34q.18-.15.45-.24c.27-.09.4-.09.64-.09c.25 0 .47.04.66.11s.35.17.48.29s.22.26.29.42c.06.16.1.32.1.49h1.95A2.52 2.52 0 0 0 23 9.81c-.3-.25-.66-.44-1.09-.59S20.99 9 20.45 9c-.51 0-.98.07-1.39.21s-.77.33-1.06.57s-.51.52-.67.84s-.23.65-.23 1.01s.08.69.23.96c.15.28.36.52.64.73c.27.21.6.38.98.53c.38.14.81.26 1.27.36c.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34s.07.25.07.39c0 .32-.13.57-.4.77s-.66.29-1.17.29c-.22 0-.43-.02-.64-.08c-.21-.05-.4-.13-.56-.24a1.33 1.33 0 0 1-.59-1.11h-1.89q0 .54.24 1.05c.24.51.39.65.7.93c.31.27.69.49 1.15.66s.98.25 1.58.25c.53 0 1.01-.06 1.44-.19q.645-.195 1.11-.54c.31-.23.54-.51.71-.83s.25-.67.25-1.06c-.02-.4-.09-.74-.24-1.02m-9.96-7.32c-.34-.4-.75-.7-1.23-.88c-.47-.18-1.01-.27-1.59-.27s-1.11.09-1.59.27s-.89.47-1.23.88s-.6.93-.79 1.59c-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39c.19.66.45 1.19.8 1.6c.34.41.75.71 1.23.89s1.01.28 1.59.28c.59 0 1.12-.09 1.59-.28c.48-.18.88-.48 1.22-.89s.6-.94.78-1.6c.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39q-.27-.99-.78-1.59m-.92 6.17q0 .9-.12 1.53c-.12.63-.2.76-.36 1.02s-.36.45-.59.57s-.51.18-.82.18c-.3 0-.58-.06-.82-.18s-.44-.31-.6-.57s-.29-.6-.38-1.02s-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52s.21-.74.38-1c.16-.25.36-.43.6-.55c.24-.11.51-.17.81-.17c.31 0 .58.06.81.17c.24.11.44.29.6.55c.16.25.29.58.37.99s.13.92.13 1.52v2.51z"></svg:path>`,
})
export class IcSharpTimer10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTimer10SelectIcon],svg[ic-sharp-timer-10-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8v8h-3V8zm3-3H7v14h9zM1 8h2v11h3V5H1zm22 3h-6v5h4v1h-4v2h6v-5h-4v-1h4z"></svg:path>`,
})
export class IcSharpTimer10SelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTimer3Icon],svg[ic-sharp-timer-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.61 12.97c-.16-.24-.36-.46-.62-.65a3.4 3.4 0 0 0-.93-.48c.3-.14.57-.3.8-.5s.42-.41.57-.64s.27-.46.34-.71c.08-.24.11-.49.11-.73c0-.55-.09-1.04-.28-1.46c-.18-.42-.44-.77-.78-1.06c-.33-.28-.73-.5-1.2-.64c-.45-.13-.97-.2-1.53-.2c-.55 0-1.06.08-1.52.24q-.705.255-1.2.69c-.33.29-.6.63-.78 1.03c-.2.39-.29.83-.29 1.29h1.98c0-.26.05-.49.14-.69s.22-.38.38-.52c.17-.14.36-.25.58-.33s.46-.12.73-.12c.61 0 1.06.16 1.36.47s.44.75.44 1.32c0 .27-.04.52-.12.74s-.21.41-.38.57s-.38.28-.63.37s-.55.13-.89.13H6.72v1.57H7.9c.34 0 .64.04.91.11c.27.08.5.19.69.35s.34.36.44.61c.1.24.16.54.16.87c0 .62-.18 1.09-.53 1.42s-.84.49-1.45.49c-.29 0-.56-.04-.8-.13c-.24-.08-.44-.2-.61-.36s-.3-.34-.39-.56s-.14-.46-.14-.72H4.19c0 .55.11 1.03.32 1.45s.5.77.86 1.05s.77.49 1.24.63s.96.21 1.48.21c.57 0 1.09-.08 1.58-.23s.91-.38 1.26-.68c.36-.3.64-.66.84-1.1c.2-.43.3-.93.3-1.48c0-.29-.04-.58-.11-.86c-.08-.25-.19-.51-.35-.76m9.26 1.4c-.14-.28-.35-.53-.63-.74s-.61-.39-1.01-.53s-.85-.27-1.35-.38a7 7 0 0 1-.87-.23c-.23-.08-.41-.16-.55-.25s-.23-.19-.28-.3s-.08-.24-.08-.39s.03-.28.09-.41s.15-.25.27-.34q.18-.15.45-.24c.27-.09.4-.09.64-.09c.25 0 .47.04.66.11s.35.17.48.29s.22.26.29.42c.06.16.1.32.1.49h1.95a2.52 2.52 0 0 0-.93-1.97c-.3-.25-.66-.44-1.09-.59S18.09 9 17.55 9c-.51 0-.98.07-1.39.21s-.77.33-1.06.57s-.51.52-.67.84s-.23.65-.23 1.01s.08.68.23.96s.37.52.64.73s.6.38.98.53c.38.14.81.26 1.27.36c.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34s.07.25.07.39c0 .32-.13.57-.4.77s-.66.29-1.17.29c-.22 0-.43-.02-.64-.08c-.21-.05-.4-.13-.56-.24a1.33 1.33 0 0 1-.59-1.11h-1.89q0 .54.24 1.05c.24.51.39.65.7.93c.31.27.69.49 1.15.66s.98.25 1.58.25c.53 0 1.01-.06 1.44-.19q.645-.195 1.11-.54c.31-.23.54-.51.71-.83s.25-.67.25-1.06c-.02-.4-.09-.74-.24-1.02"></svg:path>`,
})
export class IcSharpTimer3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTimer3SelectIcon],svg[ic-sharp-timer-3-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11v2h-4v1h4v5h-6v-2h4v-1h-4v-5zM4 5v3h6v2.5H4v3h6V16H4v3h9V5z"></svg:path>`,
})
export class IcSharpTimer3SelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTimerOffIcon],svg[ic-sharp-timer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1h6v2H9zm4 7v2.17l6.98 6.98a8.96 8.96 0 0 0-.95-9.76l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42a8.96 8.96 0 0 0-9.77-.96L10.83 8zM2.81 2.81L1.39 4.22l3.4 3.4a8.994 8.994 0 0 0 12.59 12.59l2.4 2.4l1.41-1.41z"></svg:path>`,
})
export class IcSharpTimerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTipsAndUpdatesIcon],svg[ic-sharp-tips-and-updates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m-2-1h8v-2H5zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5m4.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94z"></svg:path>`,
})
export class IcSharpTipsAndUpdatesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTireRepairIcon],svg[ic-sharp-tire-repair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7a1.003 1.003 0 0 0 1.71.71c.4-.4 1.04-2.46 1.04-2.46s-2.06.64-2.46 1.04c-.18.18-.29.43-.29.71"></svg:path><svg:path fill="currentColor" d="M19 2c-2.76 0-5 2.24-5 5c0 2.05 1.23 3.81 3 4.58V13h1v6h-2v-6h-4V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4h2v6h6v-8h1v-1.42c1.77-.77 3-2.53 3-4.58c0-2.76-2.24-5-5-5M6 19.5l-2-2v-2.83l2 2zm0-5l-2-2V9.67l2 2zm0-5l-2-2V4.67l2 2zm4 8l-2 2v-2.83l2-2zm0-5l-2 2v-2.83l2-2zm0-5l-2 2V6.67l2-2zm9 2.5c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"></svg:path>`,
})
export class IcSharpTireRepairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTitleIcon],svg[ic-sharp-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v3h5.5v12h3V7H19V4z"></svg:path>`,
})
export class IcSharpTitleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTocIcon],svg[ic-sharp-toc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h14V7H3zm0 4h14v-2H3zm0 4h14v-2H3zm16 0h2v-2h-2zm0-10v2h2V7zm0 6h2v-2h-2zM3 9h14V7H3zm0 4h14v-2H3zm0 4h14v-2H3zm16 0h2v-2h-2zm0-10v2h2V7zm0 6h2v-2h-2z"></svg:path>`,
})
export class IcSharpTocIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTodayIcon],svg[ic-sharp-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3h-3V1h-2v2H8V1H6v2H3v18h18zm-2 16H5V8h14zM7 10h5v5H7z"></svg:path>`,
})
export class IcSharpTodayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpToggleOffIcon],svg[ic-sharp-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5M7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"></svg:path>`,
})
export class IcSharpToggleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpToggleOnIcon],svg[ic-sharp-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"></svg:path>`,
})
export class IcSharpToggleOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTokenIcon],svg[ic-sharp-token-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.97 6.43L12 2L4.03 6.43L9.1 9.24C9.83 8.48 10.86 8 12 8s2.17.48 2.9 1.24zM10 12c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m1 9.44L3 17V8.14l5.13 2.85c-.09.32-.13.66-.13 1.01c0 1.86 1.27 3.43 3 3.87zm2 0v-5.57c1.73-.44 3-2.01 3-3.87c0-.35-.04-.69-.13-1.01L21 8.14V17z"></svg:path>`,
})
export class IcSharpTokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTollIcon],svg[ic-sharp-toll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6M3 12a5.99 5.99 0 0 1 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09A5.99 5.99 0 0 1 3 12"></svg:path>`,
})
export class IcSharpTollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTonalityIcon],svg[ic-sharp-tonality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93zm2-15.86c1.03.13 2 .45 2.87.93H13zM13 7h5.24c.25.31.48.65.68 1H13zm0 3h6.74c.08.33.15.66.19 1H13zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93M18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1m1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1"></svg:path>`,
})
export class IcSharpTonalityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTopicIcon],svg[ic-sharp-topic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l-2-2H2v16h20V6zm2 10H6v-2h8zm4-4H6v-2h12z"></svg:path>`,
})
export class IcSharpTopicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTornadoIcon],svg[ic-sharp-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.11 8L23 3H1l2.89 5zM7.95 15L12 22l4.05-7zm11-5H5.05l1.74 3h10.42z"></svg:path>`,
})
export class IcSharpTornadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTouchAppIcon],svg[ic-sharp-touch-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 9.24V5.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74c0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 1.56.79 2.93 2 3.74m5.08 2.26h-1.08v-6c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v10.74l-4.04-.85L4 16.62L9.38 22h8.67l1.07-7.62z"></svg:path>`,
})
export class IcSharpTouchAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTourIcon],svg[ic-sharp-tour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H7V2H5v20h2v-8h14l-2-5zm-6 5c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2"></svg:path>`,
})
export class IcSharpTourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpToysIcon],svg[ic-sharp-toys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.72 10l-2-6H7.28L5.81 8.4L4.41 7l1-1L4 4.59L.59 8L2 9.41l1-1L4.59 10H2v8h2.18A3 3 0 0 0 7 20c1.3 0 2.4-.84 2.82-2h4.37c.41 1.16 1.51 2 2.82 2a3 3 0 0 0 2.82-2H22v-8zM7 18c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m4-8H7.41l-.02-.02L8.72 6H11zm2 0V6h2.28l1.33 4zm4 8c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpToysIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTrackChangesIcon],svg[ic-sharp-track-changes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.07 4.93l-1.41 1.41A8 8 0 0 1 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72c0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07"></svg:path>`,
})
export class IcSharpTrackChangesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTrafficIcon],svg[ic-sharp-traffic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V3H7v2H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V21h10v-2.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86m-8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 19m0-5a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14m0-5a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 1 1 0 4"></svg:path>`,
})
export class IcSharpTrafficIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTrainIcon],svg[ic-sharp-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2l2-2h4l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4M7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17m3.5-7H6V6h5zm5.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m1.5-7h-5V6h5z"></svg:path>`,
})
export class IcSharpTrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTramIcon],svg[ic-sharp-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 5l.75-1.5H17V2H7v1.5h4.75L11 5c-3.13.09-6 .73-6 3.5V17c0 1.5 1.11 2.73 2.55 2.95L6 21.5v.5h2l2-2h4l2 2h2v-.5l-1.55-1.55C17.89 19.73 19 18.5 19 17V8.5c0-2.77-2.87-3.41-6-3.5m-1 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m5-4.5H7V9h10z"></svg:path>`,
})
export class IcSharpTramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTranscribeIcon],svg[ic-sharp-transcribe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.93 16l1.63-1.63c-2.77-3.02-2.77-7.56 0-10.74L17.93 2c-3.9 3.89-3.91 9.95 0 14m4.99-5.05a3.32 3.32 0 0 1 0-3.89l-1.68-1.69c-2.02 2.02-2.02 5.07 0 7.27zM9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m6.39 2.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66"></svg:path>`,
})
export class IcSharpTranscribeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTransferWithinAStationIcon],svg[ic-sharp-transfer-within-a-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5L19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2M5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6q-.375 0-.75.15L2 8.3V13h2V9.65z"></svg:path>`,
})
export class IcSharpTransferWithinAStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTransformIcon],svg[ic-sharp-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18v-2H8V4h2L7 1L4 4h2v2H2v2h4v10h10v2h-2l3 3l3-3h-2v-2zM10 8h6v6h2V6h-8z"></svg:path>`,
})
export class IcSharpTransformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTransgenderIcon],svg[ic-sharp-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8c1.93 0 3.5 1.57 3.5 3.5S13.93 15 12 15s-3.5-1.57-3.5-3.5S10.07 8 12 8m4.53.38l3.97-3.96V7h2V1h-6v2h2.58l-3.97 3.97C14.23 6.36 13.16 6 12 6s-2.23.36-3.11.97l-.65-.65l1.41-1.41l-1.41-1.42L6.82 4.9L4.92 3H7.5V1h-6v6h2V4.42l1.91 1.9l-1.42 1.42L5.4 9.15l1.41-1.41l.65.65c-.6.88-.96 1.95-.96 3.11a5.5 5.5 0 0 0 4.5 5.41V19H9v2h2v2h2v-2h2v-2h-2v-2.09a5.5 5.5 0 0 0 3.53-8.53"></svg:path>`,
})
export class IcSharpTransgenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTransitEnterexitIcon],svg[ic-sharp-transit-enterexit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18H6V8h3v4.77L15.98 6L18 8.03L11.15 15H16z"></svg:path>`,
})
export class IcSharpTransitEnterexitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTranslateIcon],svg[ic-sharp-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.87 15.07l-2.54-2.51l.03-.03A17.5 17.5 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7l1.62-4.33L19.12 17z"></svg:path>`,
})
export class IcSharpTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTravelExploreIcon],svg[ic-sharp-travel-explore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 16.9c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2l1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07A8 8 0 0 0 15 4.59V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8"></svg:path>`,
})
export class IcSharpTravelExploreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTrendingDownIcon],svg[ic-sharp-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 18l2.29-2.29l-4.88-4.88l-4 4L2 7.41L3.41 6l6 6l4-4l6.3 6.29L22 12v6z"></svg:path>`,
})
export class IcSharpTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTrendingFlatIcon],svg[ic-sharp-trending-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 12l-4-4v3H3v2h15v3z"></svg:path>`,
})
export class IcSharpTrendingFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTrendingUpIcon],svg[ic-sharp-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 6l2.29 2.29l-4.88 4.88l-4-4L2 16.59L3.41 18l6-6l4 4l6.3-6.29L22 12V6z"></svg:path>`,
})
export class IcSharpTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTripOriginIcon],svg[ic-sharp-trip-origin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12m10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6"></svg:path>`,
})
export class IcSharpTripOriginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTroubleshootIcon],svg[ic-sharp-troubleshoot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 20.59l-4.69-4.69A7.9 7.9 0 0 0 19 11c0-4.42-3.58-8-8-8c-4.08 0-7.44 3.05-7.93 7h2.02C5.57 7.17 8.03 5 11 5c3.31 0 6 2.69 6 6s-2.69 6-6 6c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69L20.59 22z"></svg:path><svg:path fill="currentColor" d="M8.43 9.69L9.65 15h1.64l1.26-3.78l.95 2.28h2V12h-1l-1.25-3h-1.54l-1.12 3.37L9.35 7H7.7l-1.25 4H1v1.5h6.55z"></svg:path>`,
})
export class IcSharpTroubleshootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTryIcon],svg[ic-sharp-try-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20l4-4h16zm-8.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10z"></svg:path>`,
})
export class IcSharpTryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTsunamiIcon],svg[ic-sharp-tsunami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.67 17.63c-3.8 2.8-6.12.4-6.67 0c-.66.49-2.92 2.76-6.67 0C3.43 19.03 2.65 19 2 19v2c1.16 0 2.3-.32 3.33-.93a6.54 6.54 0 0 0 6.67 0a6.54 6.54 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5-.02-3.33-1.37m.66-5.63H22v-2h-2.67C17.5 10 16 8.5 16 6.67c0-1.02.38-1.74 1.09-3.34c-1.37-.21-2-.33-3.09-.33C7.36 3 2.15 8.03 2.01 14.5l-.01 2c1.16 0 2.3-.32 3.33-.93a6.54 6.54 0 0 0 6.67 0a6.54 6.54 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5-.02-3.33-1.37c-3.8 2.8-6.12.4-6.67 0c-.9.67-.54.41-.91.63c-.7-.94-1.09-2.06-1.09-3.26c0-2.58 1.77-4.74 4.21-5.33c-.13.51-.21 1.02-.21 1.5C14 9.61 16.39 12 19.33 12"></svg:path>`,
})
export class IcSharpTsunamiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTtyIcon],svg[ic-sharp-tty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15v6c-3.28 0-6.35-.89-9-2.43A18 18 0 0 1 4.43 12A17.85 17.85 0 0 1 2 3h6l1 5l-2.9 2.9c1.43 2.5 3.5 4.57 6 6L15 14zm-6-9h2V4h-2zm-1 3h2V7h-2zm-2-3h2V4h-2zm7 1h-2v2h2zm1-3h-2v2h2zm2 3h-2v2h2zm1-3h-2v2h2zm-8 8h2v-2h-2zm-3 0h2v-2h-2zm8-2h-2v2h2zm3 0h-2v2h2z"></svg:path>`,
})
export class IcSharpTtyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTuneIcon],svg[ic-sharp-tune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"></svg:path>`,
})
export class IcSharpTuneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTungstenIcon],svg[ic-sharp-tungsten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19h2v3h-2zm-9-8h3v2H2zm17 0h3v2h-3zm-3.106 6.801l1.407-1.407l2.122 2.122l-1.408 1.407zm-11.31.708l2.121-2.122l1.408 1.407l-2.122 2.122zM15 8.02V3H9v5.02c-1.21.92-2 2.35-2 3.98c0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.06-2-3.98M11 5h2v2.1c-.32-.06-.66-.1-1-.1s-.68.04-1 .1z"></svg:path>`,
})
export class IcSharpTungstenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTurnLeftIcon],svg[ic-sharp-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.83 11l1.58 1.59L7 14l-4-4l4-4l1.41 1.41L6.83 9H17v11h-2v-9z"></svg:path>`,
})
export class IcSharpTurnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTurnRightIcon],svg[ic-sharp-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.17 11l-1.58 1.59L17 14l4-4l-4-4l-1.41 1.41L17.17 9H7v11h2v-9z"></svg:path>`,
})
export class IcSharpTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTurnSharpLeftIcon],svg[ic-sharp-turn-sharp-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6.83L4.41 8.41L3 7l4-4l4 4l-1.41 1.41L8 6.83V13h10v8h-2v-6H6z"></svg:path>`,
})
export class IcSharpTurnSharpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTurnSharpRightIcon],svg[ic-sharp-turn-sharp-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 6.83l1.59 1.58L21 7l-4-4l-4 4l1.41 1.41L16 6.83V13H6v8h2v-6h10z"></svg:path>`,
})
export class IcSharpTurnSharpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTurnSlightLeftIcon],svg[ic-sharp-turn-slight-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-8.41L9.41 6z"></svg:path>`,
})
export class IcSharpTurnSlightLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTurnSlightRightIcon],svg[ic-sharp-turn-slight-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-8.41L14.59 6z"></svg:path>`,
})
export class IcSharpTurnSlightRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTurnedInIcon],svg[ic-sharp-turned-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5v18l7-3l7 3z"></svg:path>`,
})
export class IcSharpTurnedInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTurnedInNotIcon],svg[ic-sharp-turned-in-not-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5.01L5 21l7-3l7 3zm-2 15l-5-2.18L7 18V5h10z"></svg:path>`,
})
export class IcSharpTurnedInNotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTvIcon],svg[ic-sharp-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v16h7v2h8v-2h6.99zm-2 14H3V5h18z"></svg:path>`,
})
export class IcSharpTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTvOffIcon],svg[ic-sharp-tv-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7v10.88l2 2V5h-9.58l3.29-3.3L16 1l-4 4l-4-4l-.7.7L10.58 5H8.12l2 2zM2.41 2.13l-.14.14L1 3.54l1.53 1.53H1V21h17.46l1.99 1.99l1.26-1.26l.15-.15zM3 19V7h1.46l12 12z"></svg:path>`,
})
export class IcSharpTvOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTwoWheelerIcon],svg[ic-sharp-two-wheeler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.17 11H4zm9.24-6H9v2h3.59l2 2H11l-4 2l-2-2H0v2h4c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4l2 2h3l3.49-6.1l1.01 1.01c-.91.73-1.5 1.84-1.5 3.09c0 2.21 1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4c-.18 0-.36.03-.53.05L17.41 9H20V6l-3.72 1.86zM20 17c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M4 17c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcSharpTwoWheelerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpTypeSpecimenIcon],svg[ic-sharp-type-specimen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v16h16v-2H4z"></svg:path><svg:path fill="currentColor" d="M22 2H6v16h16zm-5.37 12.5l-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9z"></svg:path><svg:path fill="currentColor" d="m13.96 7.17l-1.31 3.72h2.69l-1.3-3.72z"></svg:path>`,
})
export class IcSharpTypeSpecimenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUTurnLeftIcon],svg[ic-sharp-u-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9v12h-2V9c0-2.21-1.79-4-4-4S8 6.79 8 9v4.17l1.59-1.59L11 13l-4 4l-4-4l1.41-1.41L6 13.17V9c0-3.31 2.69-6 6-6s6 2.69 6 6"></svg:path>`,
})
export class IcSharpUTurnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUTurnRightIcon],svg[ic-sharp-u-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9v12h2V9c0-2.21 1.79-4 4-4s4 1.79 4 4v4.17l-1.59-1.59L13 13l4 4l4-4l-1.41-1.41L18 13.17V9c0-3.31-2.69-6-6-6S6 5.69 6 9"></svg:path>`,
})
export class IcSharpUTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUmbrellaIcon],svg[ic-sharp-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 6.92L13 5.77V3.4c0-.26.22-.48.5-.48s.5.21.5.48V4h2v-.6C16 2.07 14.88 1 13.5 1S11 2.07 11 3.4v2.37L9.5 6.92L6 6.07l5.05 15.25c.15.45.55.68.95.68s.8-.23.95-.69L18 6.07zM13.28 8.5l.76.58l.92-.23L13 14.8V8.29zm-3.32.59l.76-.58l.28-.22v6.51L9.03 8.86z"></svg:path>`,
})
export class IcSharpUmbrellaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUnarchiveIcon],svg[ic-sharp-unarchive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.71 3H5.29L3 5.79V21h18V5.79zM14 15v2h-4v-2H6.5L12 9.5l5.5 5.5zM5.12 5l.81-1h12l.94 1z"></svg:path>`,
})
export class IcSharpUnarchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUndoIcon],svg[ic-sharp-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8"></svg:path>`,
})
export class IcSharpUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUnfoldLessIcon],svg[ic-sharp-unfold-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.41 18.59L8.83 20L12 16.83L15.17 20l1.41-1.41L12 14zm9.18-13.18L15.17 4L12 7.17L8.83 4L7.41 5.41L12 10z"></svg:path>`,
})
export class IcSharpUnfoldLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUnfoldLessDoubleIcon],svg[ic-sharp-unfold-less-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.58 1.41L15.16 0l-3.17 3.17L8.82 0L7.41 1.41L11.99 6z"></svg:path><svg:path fill="currentColor" d="M16.58 6.41L15.16 5l-3.17 3.17L8.82 5L7.41 6.41L11.99 11zM7.42 17.59L8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z"></svg:path><svg:path fill="currentColor" d="M7.42 22.59L8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z"></svg:path>`,
})
export class IcSharpUnfoldLessDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUnfoldMoreIcon],svg[ic-sharp-unfold-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.83L15.17 9l1.41-1.41L12 3L7.41 7.59L8.83 9zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15z"></svg:path>`,
})
export class IcSharpUnfoldMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUnfoldMoreDoubleIcon],svg[ic-sharp-unfold-more-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.83L15.17 11l1.41-1.41L12 5L7.41 9.59L8.83 11zm0-5L15.17 6l1.41-1.41L12 0L7.41 4.59L8.83 6zm0 18.34L8.83 18l-1.41 1.41L12 24l4.59-4.59L15.17 18zm0-5L8.83 13l-1.41 1.41L12 19l4.59-4.59L15.17 13z"></svg:path>`,
})
export class IcSharpUnfoldMoreDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUnpublishedIcon],svg[ic-sharp-unpublished-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.19 21.19L2.81 2.81L1.39 4.22l2.27 2.27A9.9 9.9 0 0 0 2 12c0 5.52 4.48 10 10 10c2.04 0 3.93-.61 5.51-1.66l2.27 2.27zm-10.6-4.59l-4.24-4.24l1.41-1.41l2.83 2.83l.18-.18l1.41 1.41zm3-5.84l-7.1-7.1A9.9 9.9 0 0 1 12 2c5.52 0 10 4.48 10 10c0 2.04-.61 3.93-1.66 5.51L15 12.17l2.65-2.65l-1.41-1.41z"></svg:path>`,
})
export class IcSharpUnpublishedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUnsubscribeIcon],svg[ic-sharp-unsubscribe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5m2 4h-4v-1h4zm-6.95 0c-.02-.17-.05-.33-.05-.5c0-2.76 2.24-5 5-5c.92 0 1.75.26 2.49.69V3H3v14zM12 10.5L5 7V5l7 3.5L19 5v2z"></svg:path>`,
})
export class IcSharpUnsubscribeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUpcomingIcon],svg[ic-sharp-upcoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.16 7.26l-1.41-1.41l-3.56 3.55l1.41 1.41s3.45-3.52 3.56-3.55M11 3h2v5h-2zm-4.6 7.81L7.81 9.4L4.26 5.84L2.84 7.26c.11.03 3.56 3.55 3.56 3.55M22 12h-7c0 1.66-1.34 3-3 3s-3-1.34-3-3H2v9h20z"></svg:path>`,
})
export class IcSharpUpcomingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUpdateIcon],svg[ic-sharp-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8v5l4.25 2.52l.77-1.28l-3.52-2.09V8zm10 2V3l-2.64 2.64A8.94 8.94 0 0 0 12 3a9 9 0 1 0 9 9h-2c0 3.86-3.14 7-7 7s-7-3.14-7-7s3.14-7 7-7c1.93 0 3.68.79 4.95 2.05L14 10z"></svg:path>`,
})
export class IcSharpUpdateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUpdateDisabledIcon],svg[ic-sharp-update-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.67 5.84L7.22 4.39A8.86 8.86 0 0 1 12 3c2.74 0 5.19 1.23 6.84 3.16L21 4v6h-6l2.41-2.41C16.12 6.02 14.18 5 12 5c-1.2 0-2.34.31-3.33.84M13 7h-2v1.17l2 2zm6.78 15.61l-3-3A8.97 8.97 0 0 1 12 21a9 9 0 0 1-9-9c0-1.76.51-3.4 1.39-4.78l-3-3L2.8 2.81l18.38 18.38zm-4.46-4.46L5.84 8.67A7.06 7.06 0 0 0 5 12c0 3.86 3.14 7 7 7c1.2 0 2.34-.31 3.32-.85M20.94 13h-2.02c-.12.83-.39 1.61-.77 2.32l1.47 1.47c.7-1.12 1.17-2.41 1.32-3.79"></svg:path>`,
})
export class IcSharpUpdateDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUpgradeIcon],svg[ic-sharp-upgrade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18v2H8v-2zM11 7.99V16h2V7.99h3L12 4L8 7.99z"></svg:path>`,
})
export class IcSharpUpgradeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUploadIcon],svg[ic-sharp-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h6v-6h4l-7-7l-7 7h4zm-4 2h14v2H5z"></svg:path>`,
})
export class IcSharpUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUploadFileIcon],svg[ic-sharp-upload-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H4v20h16V8zm-1 13v4h-2v-4H8l4.01-4L16 15zm0-6V3.5L18.5 9z"></svg:path>`,
})
export class IcSharpUploadFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUsbIcon],svg[ic-sharp-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7v4h1v2h-3V5h2l-3-4l-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93c0-1.21-.99-2.2-2.2-2.2S4.8 7.79 4.8 9c0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95a2.2 2.2 0 0 0 4.4 0c0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7z"></svg:path>`,
})
export class IcSharpUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpUsbOffIcon],svg[ic-sharp-usb-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8h4v4h-1v2c0 .34-.08.66-.23.94L16 13.17V12h-1zm-4 .17l2 2V6h2l-3-4l-3 4h2zM13 16v2.28c.6.34 1 .98 1 1.72c0 1.1-.9 2-2 2s-2-.9-2-2c0-.74.4-1.37 1-1.72V16H8c-1.11 0-2-.89-2-2v-2.28c-.6-.34-1-.98-1-1.72c0-.59.26-1.13.68-1.49L1.39 4.22L2.8 2.81l18.38 18.38l-1.41 1.41l-6.6-6.6zm-2-2v-.17l-2.51-2.51c-.14.16-.31.29-.49.4V14z"></svg:path>`,
})
export class IcSharpUsbOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVaccinesIcon],svg[ic-sharp-vaccines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5H8V4h1.5V2h-5v2H6v1.5H2v2h1V17h3v4l2 1.5V17h3V7.5h1zM9 9H6.5v1.5H9V12H6.5v1.5H9V15H5V7.5h4zm10.5 1.5V10h1V8h-7l-.01 2h1.01v.5c0 .5-1.5 1.16-1.5 3V22h8v-8.5c0-1.84-1.5-2.5-1.5-3m-3 0V10h1v.5c0 1.6 1.5 2 1.5 3v.5h-4v-.5c0-1 1.5-1.4 1.5-3M15 20v-1.5h4V20z"></svg:path>`,
})
export class IcSharpVaccinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVapeFreeIcon],svg[ic-sharp-vape-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16.5h1c1.33 0 2.71-.18 4-.5v3c-1.29-.32-2.67-.5-4-.5H2zM16.17 19H8v-3h5.17L1.39 4.22L2.8 2.81l18.38 18.38l-1.41 1.41zm2.66-3H22v3h-.17zM11 17.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5m11-4.74V15h-1.5v-2.23c0-2.24-1.76-4.07-4-4.07V7.2c1.02 0 1.85-.83 1.85-1.85S17.52 3.5 16.5 3.5V2c1.85 0 3.35 1.5 3.35 3.35c0 .93-.38 1.77-1 2.38c1.87.89 3.15 2.81 3.15 5.03M11.15 8.32V8.3c0-1.85 1.5-3.35 3.35-3.35v1.5c-1.02 0-1.85.73-1.85 1.75s.83 2 1.85 2h1.53c1.87 0 3.47 1.35 3.47 3.16V15H18v-1.3c0-1.31-.92-2.05-1.97-2.05h-1.55z"></svg:path>`,
})
export class IcSharpVapeFreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVapingRoomsIcon],svg[ic-sharp-vaping-rooms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16.5h1c1.33 0 2.71-.18 4-.5v3c-1.29-.32-2.67-.5-4-.5H2zm20-.5v3H8v-3zm-11 1.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5m11-4.74V15h-1.5v-2.23c0-2.24-1.76-4.07-4-4.07V7.2c1.02 0 1.85-.83 1.85-1.85S17.52 3.5 16.5 3.5V2c1.85 0 3.35 1.5 3.35 3.35c0 .93-.38 1.77-1 2.38c1.87.89 3.15 2.81 3.15 5.03m-2.5.6V15H18v-1.3c0-1.31-.92-2.05-1.97-2.05H14.5a3.35 3.35 0 0 1 0-6.7v1.5c-1.02 0-1.85.73-1.85 1.75s.83 2 1.85 2h1.53c1.87 0 3.47 1.35 3.47 3.16"></svg:path>`,
})
export class IcSharpVapingRoomsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVerifiedIcon],svg[ic-sharp-verified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-2.44-2.79l.34-3.69l-3.61-.82l-1.89-3.2L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5l.34 3.7L1 12l2.44 2.79l-.34 3.7l3.61.82L8.6 22.5l3.4-1.47l3.4 1.46l1.89-3.19l3.61-.82l-.34-3.69zm-12.91 4.72l-3.8-3.81l1.48-1.48l2.32 2.33l5.85-5.87l1.48 1.48z"></svg:path>`,
})
export class IcSharpVerifiedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVerifiedUserIcon],svg[ic-sharp-verified-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm-2 16l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z"></svg:path>`,
})
export class IcSharpVerifiedUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVerticalAlignBottomIcon],svg[ic-sharp-vertical-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13h-3V3h-2v10H8l4 4zM4 19v2h16v-2z"></svg:path>`,
})
export class IcSharpVerticalAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVerticalAlignCenterIcon],svg[ic-sharp-vertical-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19h3v4h2v-4h3l-4-4zm8-14h-3V1h-2v4H8l4 4zM4 11v2h16v-2z"></svg:path>`,
})
export class IcSharpVerticalAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVerticalAlignTopIcon],svg[ic-sharp-vertical-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11h3v10h2V11h3l-4-4zM4 3v2h16V3z"></svg:path>`,
})
export class IcSharpVerticalAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVerticalDistributeIcon],svg[ic-sharp-vertical-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v2H2V2zM7 10.5v3h10v-3zM2 20v2h20v-2z"></svg:path>`,
})
export class IcSharpVerticalDistributeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVerticalShadesIcon],svg[ic-sharp-vertical-shades-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h20v-2zm-10 0V5h4v14z"></svg:path>`,
})
export class IcSharpVerticalShadesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVerticalShadesClosedIcon],svg[ic-sharp-vertical-shades-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h20v-2zM13 5h1.5v14H13zm-2 14H9.5V5H11zM6 5h1.5v14H6zm10.5 14V5H18v14z"></svg:path>`,
})
export class IcSharpVerticalShadesClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVerticalSplitIcon],svg[ic-sharp-vertical-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h8v-2H3zm0 4h8v-2H3zm0-8h8V9H3zm0-6v2h8V5zm10 0h8v14h-8z"></svg:path>`,
})
export class IcSharpVerticalSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVibrationIcon],svg[ic-sharp-vibration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 15h2V9H0zm3 2h2V7H3zm19-8v6h2V9zm-3 8h2V7h-2zM18 3H6v18h12zm-2 16H8V5h8z"></svg:path>`,
})
export class IcSharpVibrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideoCallIcon],svg[ic-sharp-video-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.5V6H3v12h14v-4.5l4 4v-11zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3z"></svg:path>`,
})
export class IcSharpVideoCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideoCameraBackIcon],svg[ic-sharp-video-camera-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10.48V4H2v16h16v-6.48l4 3.98v-11zM5 16l2.38-3.17L9 15l2.62-3.5L15 16z"></svg:path>`,
})
export class IcSharpVideoCameraBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideoCameraFrontIcon],svg[ic-sharp-video-camera-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10.48V4H2v16h16v-6.48l4 3.98v-11zM10 8c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m4 8H6v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 14 15.43z"></svg:path>`,
})
export class IcSharpVideoCameraFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideoChatIcon],svg[ic-sharp-video-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20l4-4h16V2zm15 11l-2-1.99V14H7V6h8v2.99L17 7z"></svg:path>`,
})
export class IcSharpVideoChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideoFileIcon],svg[ic-sharp-video-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H4v20h16V8zm-1 7V3.5L18.5 9zm1 5l2-1.06v4.12L14 16v2H8v-6h6z"></svg:path>`,
})
export class IcSharpVideoFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideoLabelIcon],svg[ic-sharp-video-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-2 13H3V5h18z"></svg:path>`,
})
export class IcSharpVideoLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideoLibraryIcon],svg[ic-sharp-video-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v16h16v-2H4zm18-4H6v16h16zM12 14.5v-9l6 4.5z"></svg:path>`,
})
export class IcSharpVideoLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideoSettingsIcon],svg[ic-sharp-video-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h18v5h2V4H1v16h11v-2H3z"></svg:path><svg:path fill="currentColor" d="M15 12L9 8v8zm7.72 5.57l1.23-.98l-1.25-2.17l-1.47.58a3.4 3.4 0 0 0-.75-.42L20.25 13h-2.5l-.24 1.58c-.26.11-.51.26-.74.42l-1.48-.58l-1.25 2.17l1.24.99c-.03.29-.04.58-.01.86l-1.23.98l1.25 2.17l1.48-.59q.345.255.75.42l.23 1.58h2.5l.24-1.58c.26-.11.51-.26.74-.42l1.48.58l1.25-2.17l-1.24-.99c.03-.28.03-.57 0-.85M19 19.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcSharpVideoSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideoStableIcon],svg[ic-sharp-video-stable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16h20V4zm2 14V6h2.95l-2.33 8.73L16.82 18zm16 0h-2.95l2.34-8.73L7.18 6H20z"></svg:path>`,
})
export class IcSharpVideoStableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideocamIcon],svg[ic-sharp-videocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.5V6H3v12h14v-4.5l4 4v-11z"></svg:path>`,
})
export class IcSharpVideocamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideocamOffIcon],svg[ic-sharp-videocam-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.61V6.5l-4 4V6h-6.61zM3.41 1.86L2 3.27L4.73 6H3v12h13.73l3 3l1.41-1.41z"></svg:path>`,
})
export class IcSharpVideocamOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideogameAssetIcon],svg[ic-sharp-videogame-asset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6H1v12h22zm-12 7H8v3H6v-3H3v-2h3V8h2v3h3zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcSharpVideogameAssetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVideogameAssetOffIcon],svg[ic-sharp-videogame-asset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.83 18H22V6H8.83zM17.5 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m3.69 12.19L2.81 2.81L1.39 4.22L3.17 6H2v12h13.17l4.61 4.61zM9 13v2H7v-2H5v-2h2V9.83L10.17 13z"></svg:path>`,
})
export class IcSharpVideogameAssetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewAgendaIcon],svg[ic-sharp-view-agenda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h18v8H3zM3 3h18v8H3z"></svg:path>`,
})
export class IcSharpViewAgendaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewArrayIcon],svg[ic-sharp-view-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5h-3v14h3zm-4 0H7v14h10zM6 5H3v14h3z"></svg:path>`,
})
export class IcSharpViewArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewCarouselIcon],svg[ic-sharp-view-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h4v10H2zm5 12h10V5H7zM18 7h4v10h-4z"></svg:path>`,
})
export class IcSharpViewCarouselIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewColumnIcon],svg[ic-sharp-view-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.67 5v14H9.33V5zm1 14H21V5h-5.33zm-7.34 0V5H3v14z"></svg:path>`,
})
export class IcSharpViewColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewComfyIcon],svg[ic-sharp-view-comfy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v7h20V4zm8 16h12v-7H10zm-8 0h6v-7H2z"></svg:path>`,
})
export class IcSharpViewComfyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewComfyAltIcon],svg[ic-sharp-view-comfy-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16h20V4zm9 13H7v-4h4zm0-6H7V7h4zm6 6h-4v-4h4zm0-6h-4V7h4z"></svg:path>`,
})
export class IcSharpViewComfyAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewCompactIcon],svg[ic-sharp-view-compact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h2.5v-2.5H4zm0-4.75h2.5v-2.5H4zM4 8.5h2.5V6H4zM17.5 6v2.5H20V6zM13 8.5h2.5V6H13zm4.5 9.5H20v-2.5h-2.5zm0-4.75H20v-2.5h-2.5zM8.5 18H11v-2.5H8.5zm4.5 0h2.5v-2.5H13zM8.5 8.5H11V6H8.5zm4.5 4.75h2.5v-2.5H13zm-4.5 0H11v-2.5H8.5z"></svg:path>`,
})
export class IcSharpViewCompactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewCompactAltIcon],svg[ic-sharp-view-compact-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zM11.5 16.5h-4v-4h4zm0-5h-4v-4h4zm5 5h-4v-4h4zm0-5h-4v-4h4z"></svg:path>`,
})
export class IcSharpViewCompactAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewCozyIcon],svg[ic-sharp-view-cozy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zM11.25 16.75h-4v-4h4zm0-5.5h-4v-4h4zm5.5 5.5h-4v-4h4zm0-5.5h-4v-4h4z"></svg:path>`,
})
export class IcSharpViewCozyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewDayIcon],svg[ic-sharp-view-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21h19v-3H2zM21 8H2v8h19zM2 3v3h19V3z"></svg:path>`,
})
export class IcSharpViewDayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewHeadlineIcon],svg[ic-sharp-view-headline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15h16v-2H4zm0 4h16v-2H4zm0-8h16V9H4zm0-6v2h16V5z"></svg:path>`,
})
export class IcSharpViewHeadlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewInArIcon],svg[ic-sharp-view-in-ar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 1v2h3v3h2V1zm3 20h-3v2h5v-5h-2zM3 3h3V1H1v5h2zm0 15H1v5h5v-2H3zM19 7.97l-7-4.03l-7 4.03v8.06l7 4.03l7-4.03zm-8 9.2l-4-2.3v-4.63l4 2.33zm1-6.33L8.04 8.53L12 6.25l3.96 2.28zm5 4.03l-4 2.3v-4.6l4-2.33z"></svg:path>`,
})
export class IcSharpViewInArIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewKanbanIcon],svg[ic-sharp-view-kanban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM9 17H7V7h2zm4-5h-2V7h2zm4 3h-2V7h2z"></svg:path>`,
})
export class IcSharpViewKanbanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewListIcon],svg[ic-sharp-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14h4v-4H3zm0 5h4v-4H3zM3 9h4V5H3zm5 5h13v-4H8zm0 5h13v-4H8zM8 5v4h13V5z"></svg:path>`,
})
export class IcSharpViewListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewModuleIcon],svg[ic-sharp-view-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.67 5v6.5H9.33V5zm1 6.5H21V5h-5.33zm-1 7.5v-6.5H9.33V19zm1-6.5V19H21v-6.5zm-7.34 0H3V19h5.33zm0-1V5H3v6.5z"></svg:path>`,
})
export class IcSharpViewModuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewQuiltIcon],svg[ic-sharp-view-quilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5v6.5H9.33V5zm-6.33 14v-6.5H9.33V19zm1-6.5V19H21v-6.5zM8.33 19V5H3v14z"></svg:path>`,
})
export class IcSharpViewQuiltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewSidebarIcon],svg[ic-sharp-view-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20H2V4h14zm2-12h4V4h-4zm0 12h4v-4h-4zm0-6h4v-4h-4z"></svg:path>`,
})
export class IcSharpViewSidebarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewStreamIcon],svg[ic-sharp-view-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-6h18v6zM3 5v6h18V5z"></svg:path>`,
})
export class IcSharpViewStreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewTimelineIcon],svg[ic-sharp-view-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-9 14H6v-2h6zm3-4H9v-2h6zm3-4h-6V7h6z"></svg:path>`,
})
export class IcSharpViewTimelineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpViewWeekIcon],svg[ic-sharp-view-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.33 20H2V4h5.33zM22 20V4h-5.33v16zm-7.33 0V4H9.33v16z"></svg:path>`,
})
export class IcSharpViewWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVignetteIcon],svg[ic-sharp-vignette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zM12 18c-4.42 0-8-2.69-8-6s3.58-6 8-6s8 2.69 8 6s-3.58 6-8 6"></svg:path>`,
})
export class IcSharpVignetteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVillaIcon],svg[ic-sharp-villa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21H3V8l13-5v7H7zm12-11c-1.1 0-2 .9-2 2H9v9h5v-5h2v5h5v-9c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcSharpVillaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVisibilityIcon],svg[ic-sharp-visibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"></svg:path>`,
})
export class IcSharpVisibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVisibilityOffIcon],svg[ic-sharp-visibility-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.5c2.76 0 5 2.24 5 5c0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24M3.42 2.45L2.01 3.87l2.68 2.68A11.74 11.74 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l3.43 3.43l1.41-1.41zM12 16.5c-2.76 0-5-2.24-5-5c0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57c0 1.66 1.34 3 3 3c.2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5m2.97-5.33a2.97 2.97 0 0 0-2.64-2.64z"></svg:path>`,
})
export class IcSharpVisibilityOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVoiceChatIcon],svg[ic-sharp-voice-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2.01L2 22l4-4h16zm-4 12l-4-3.2V14H6V6h8v3.2L18 6z"></svg:path>`,
})
export class IcSharpVoiceChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVoiceOverOffIcon],svg[ic-sharp-voice-over-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.76 5.36l-1.68 1.69c.8 1.13.83 2.58.09 3.74l1.7 1.7c1.9-2.02 1.87-4.98-.11-7.13M20.07 2l-1.63 1.63c2.72 2.97 2.76 7.39.14 10.56l1.64 1.64c3.74-3.89 3.71-9.84-.15-13.83M9.43 5.04l3.53 3.53a3.98 3.98 0 0 0-3.53-3.53M4.41 2.86L3 4.27l2.62 2.62C5.23 7.5 5 8.22 5 9c0 2.21 1.79 4 4 4c.78 0 1.5-.23 2.11-.62l4.4 4.4C13.74 15.6 10.78 15 9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-.37-.11-.7-.29-1.02L19.73 21l1.41-1.41z"></svg:path>`,
})
export class IcSharpVoiceOverOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVoicemailIcon],svg[ic-sharp-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5S2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6m-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8S9 9.57 9 11.5S7.43 15 5.5 15m13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8S22 9.57 22 11.5S20.43 15 18.5 15"></svg:path>`,
})
export class IcSharpVoicemailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVolcanoIcon],svg[ic-sharp-volcano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-7l-2 5H6l-4 9h20zm-5-7h2v4h-2zm3.121 4.468L18.95 2.64l1.414 1.414l-2.829 2.828zM7.64 4.05l1.414-1.414l2.828 2.828l-1.414 1.415z"></svg:path>`,
})
export class IcSharpVolcanoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVolumeDownIcon],svg[ic-sharp-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 12A4.5 4.5 0 0 0 16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02M5 9v6h4l5 5V4L9 9z"></svg:path>`,
})
export class IcSharpVolumeDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVolumeMuteIcon],svg[ic-sharp-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9v6h4l5 5V4l-5 5z"></svg:path>`,
})
export class IcSharpVolumeMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVolumeOffIcon],svg[ic-sharp-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.34 2.93L2.93 4.34L7.29 8.7L7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06a8.94 8.94 0 0 0 3.61-1.75l2.05 2.05l1.41-1.41zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71m-7-8l-1.88 1.88L12 7.76zm4.5 8A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24"></svg:path>`,
})
export class IcSharpVolumeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVolumeUpIcon],svg[ic-sharp-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9v6h4l5 5V4L7 9zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77"></svg:path>`,
})
export class IcSharpVolumeUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVolunteerActivismIcon],svg[ic-sharp-volunteer-activism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h4v11H1zm15-7.75C16.65 2.49 17.66 2 18.7 2C20.55 2 22 3.45 22 5.3c0 2.27-2.91 4.9-6 7.7c-3.09-2.81-6-5.44-6-7.7C10 3.45 11.45 2 13.3 2c1.04 0 2.05.49 2.7 1.25M22 17h-9l-2.09-.73l.33-.95L13 16h4v-2l-8.03-3H7v9.02L14 22l8-3z"></svg:path>`,
})
export class IcSharpVolunteerActivismIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVpnKeyIcon],svg[ic-sharp-vpn-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.65 10A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcSharpVpnKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVpnKeyOffIcon],svg[ic-sharp-vpn-key-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.83 18H21v-4h2v-4H12.83zm-1.05 4.61l1.41-1.41L2.81 2.81L1.39 4.22l2.59 2.59A6.01 6.01 0 0 0 1 12c0 3.31 2.69 6 6 6c2.21 0 4.15-1.2 5.18-2.99zM8.99 11.82c.01.06.01.12.01.18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2c.06 0 .12 0 .18.01z"></svg:path>`,
})
export class IcSharpVpnKeyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVpnLockIcon],svg[ic-sharp-vpn-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c0 2.08-.8 3.97-2.1 5.39V17H14v-4H7v-2h3V8h4V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10s10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03c.04.33.08.66.08 1m-9 7.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L8 16v3h2zM22 4v-.36c0-1.31-.94-2.5-2.24-2.63A2.5 2.5 0 0 0 17 3.5V4h-1v6h7V4zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></svg:path>`,
})
export class IcSharpVpnLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpVrpanoIcon],svg[ic-sharp-vrpano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5c-5.25 0-9.01-1.54-10-1.92V20.4c2.16-.76 5.21-1.9 10-1.9c4.78 0 7.91 1.17 10 1.9V3.6c-2.09.73-5.23 1.9-10 1.9m0 9.5c-2.34 0-4.52.15-6.52.41l3.69-4.42l2 2.4L14 10l4.51 5.4c-1.99-.25-4.21-.4-6.51-.4"></svg:path>`,
})
export class IcSharpVrpanoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWalletIcon],svg[ic-sharp-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zm-6.25 10.09L4 11.22V10h16v.53zM4 6h16v2H4z"></svg:path>`,
})
export class IcSharpWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWallpaperIcon],svg[ic-sharp-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h7V2H2v9h2zm6 9l-4 5h12l-3-4l-2.03 2.71zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5M22 2h-9v2h7v7h2zm-2 18h-7v2h9v-9h-2zM4 13H2v9h9v-2H4z"></svg:path>`,
})
export class IcSharpWallpaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWarehouseIcon],svg[ic-sharp-warehouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 21V7L12 3L2 7v14h5v-9h10v9zm-11-2H9v2h2zm2-3h-2v2h2zm2 3h-2v2h2z"></svg:path>`,
})
export class IcSharpWarehouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWarningIcon],svg[ic-sharp-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"></svg:path>`,
})
export class IcSharpWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWarningAmberIcon],svg[ic-sharp-warning-amber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.99L19.53 19H4.47zM12 2L1 21h22zm1 14h-2v2h2zm0-6h-2v4h2z"></svg:path>`,
})
export class IcSharpWarningAmberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWashIcon],svg[ic-sharp-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.12 5L1 12.68V23h18v-2.5h-7v-1h9V17h-9v-1h10v-2.5H12v-1h8V10H8.86l1.88-3.3zm4.38 4c.83 0 1.5-.67 1.5-1.5c0-.84-1.5-2.5-1.5-2.5S12 6.66 12 7.5c0 .83.67 1.5 1.5 1.5m5-8S16 3.83 16 5.5a2.5 2.5 0 0 0 5 0C21 3.83 18.5 1 18.5 1"></svg:path>`,
})
export class IcSharpWashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWatchIcon],svg[ic-sharp-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73A7.98 7.98 0 0 0 20 12M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6"></svg:path>`,
})
export class IcSharpWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWatchLaterIcon],svg[ic-sharp-watch-later-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"></svg:path>`,
})
export class IcSharpWatchLaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWatchOffIcon],svg[ic-sharp-watch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5c0 .64-.13 1.25-.35 1.82l1.5 1.5a6.96 6.96 0 0 0-1.79-8.79L15 2H9l-.96 3.21l2.14 2.14C10.75 7.13 11.36 7 12 7M2.81 2.81L1.39 4.22l4.46 4.46a6.96 6.96 0 0 0 1.79 8.79L9 22h6l.96-3.21l3.82 3.82l1.41-1.41zM12 17c-2.76 0-5-2.24-5-5c0-.64.13-1.25.35-1.82l6.47 6.47c-.57.22-1.18.35-1.82.35"></svg:path>`,
})
export class IcSharpWatchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWaterIcon],svg[ic-sharp-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.98 14H22zM5.35 13c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.4.98 3.31 1v-2c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1m13.32 2c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.1 1-3.34 1s-1.38-1-3.33-1s-2.1 1-3.34 1v2c1.95 0 2.11-1 3.34-1c1.24 0 1.38 1 3.33 1s2.1-1 3.34-1c1.19 0 1.42 1 3.33 1c1.94 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1v-2c-1.24 0-1.38-1-3.33-1M5.35 9c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.4.98 3.31 1V8c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1C3.38 7 3.24 8 2 8v2c1.9 0 2.17-1 3.35-1"></svg:path>`,
})
export class IcSharpWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWaterDamageIcon],svg[ic-sharp-water-damage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm0 13c-1.1 0-2-.9-2-2s2-4 2-4s2 2.9 2 4s-.9 2-2 2"></svg:path>`,
})
export class IcSharpWaterDamageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWaterDropIcon],svg[ic-sharp-water-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-5.33 4.55-8 8.48-8 11.8c0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8m1 16.91c-.32.06-.65.09-1 .09c-2.69 0-4.88-1.94-5-5h1.5c.08 2.07 1.5 3.5 3.5 3.5c.35 0 .69-.04 1-.13z"></svg:path>`,
})
export class IcSharpWaterDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWaterfallChartIcon],svg[ic-sharp-waterfall-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h3v16h-3zM3 13h3v7H3zm11-9h3v3h-3zm-4 1h3v4h-3zm-3 5h3v4H7z"></svg:path>`,
})
export class IcSharpWaterfallChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWavesIcon],svg[ic-sharp-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16.99c-1.35 0-2.2.42-2.95.8c-.65.33-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8c.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.6-.8-2.95-.8m0-4.45c-1.35 0-2.2.43-2.95.8c-.65.32-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.6-.8-2.95-.8m2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8c.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58M17 8.09c-1.35 0-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.6-.8-2.95-.8"></svg:path>`,
})
export class IcSharpWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWavingHandIcon],svg[ic-sharp-waving-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7zm7.9-3.57L3.42 8.91C.2 12.13.2 17.35 3.42 20.58s8.44 3.22 11.67 0l7.95-7.95l-1.77-1.77l-5.3 5.3l-.71-.71l7.42-7.42l-1.77-1.77l-6.72 6.72l-.71-.71l7.78-7.78l-1.76-1.76l-7.78 7.78l-.7-.71l6.36-6.36l-1.77-1.77l-8.51 8.51a4 4 0 0 1-.33 5.28l-.71-.71a3 3 0 0 0 0-4.24l-.35-.35l4.95-4.95z"></svg:path>`,
})
export class IcSharpWavingHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWbAutoIcon],svg[ic-sharp-wb-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.85 12.65h2.3L8 9zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9zm-11.7 9l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9z"></svg:path>`,
})
export class IcSharpWbAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWbCloudyIcon],svg[ic-sharp-wb-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.37 10.04C18.68 6.59 15.65 4 12.01 4c-2.89 0-5.4 1.64-6.65 4.04A5.994 5.994 0 0 0 .01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.64-4.96"></svg:path>`,
})
export class IcSharpWbCloudyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWbIncandescentIcon],svg[ic-sharp-wb-incandescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.55 19.09l1.41 1.41l1.79-1.8l-1.41-1.41zM11 23h2v-2.95h-2zM4 11.05H1v2h3zm11-4.19V2.05H9v4.81C7.21 7.9 6 9.83 6 12.05c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19m5 4.19v2h3v-2zm-2.76 7.66l1.79 1.8l1.41-1.41l-1.8-1.79z"></svg:path>`,
})
export class IcSharpWbIncandescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWbIridescentIcon],svg[ic-sharp-wb-iridescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15h14V9.05H5zm6-14v3h2V1zm8.04 2.6l-1.79 1.79l1.41 1.41l1.8-1.79zM13 23v-2.95h-2V23zm7.45-3.91l-1.8-1.79l-1.41 1.41l1.79 1.8zM3.55 5.01L5.34 6.8l1.41-1.41L4.96 3.6zM4.96 20.5l1.79-1.8l-1.41-1.41l-1.79 1.79z"></svg:path>`,
})
export class IcSharpWbIridescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWbShadeIcon],svg[ic-sharp-wb-shade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12v2.5l5.5 5.5H22zm0 8h3l-3-3zM8 4l-6 6h2v10h8V10h2zm1 10H7v-4h2z"></svg:path>`,
})
export class IcSharpWbShadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWbSunnyIcon],svg[ic-sharp-wb-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91l-1.41-1.41l-1.79 1.79l1.41 1.41zm-3.21 13.7l1.79 1.8l1.41-1.41l-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91l1.41 1.41l1.79-1.8l-1.41-1.41z"></svg:path>`,
})
export class IcSharpWbSunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWbTwilightIcon],svg[ic-sharp-wb-twilight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.955 8.662l2.12-2.122l1.416 1.414l-2.121 2.122zM2 18h20v2H2zm9-14h2v3h-2zM3.543 7.925L4.957 6.51l2.121 2.12l-1.414 1.415zM5 16h14c0-3.87-3.13-7-7-7s-7 3.13-7 7"></svg:path>`,
})
export class IcSharpWbTwilightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWcIcon],svg[ic-sharp-wc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 22v-7.5H4V7h7v7.5H9.5V22zM18 22v-6h3l-3-9h-3l-3 9h3v6zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m9 0c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2"></svg:path>`,
})
export class IcSharpWcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWebIcon],svg[ic-sharp-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zM4 9h10.5v3.5H4zm0 5.5h10.5V18H4zM20 18h-3.5V9H20z"></svg:path>`,
})
export class IcSharpWebIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWebAssetIcon],svg[ic-sharp-web-asset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v16h18V4zm16 14H5V8h14z"></svg:path>`,
})
export class IcSharpWebAssetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWebAssetOffIcon],svg[ic-sharp-web-asset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.83 4H22v15.17l-2-2V8h-9.17zm13.66 19.31L17.17 20H2V4.83L.69 3.51L2.1 2.1l19.8 19.8zM15.17 18l-10-10H4v10z"></svg:path>`,
})
export class IcSharpWebAssetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWebStoriesIcon],svg[ic-sharp-web-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h2v16h-2zM2 2v20h13V2zm19 16h1.5V6H21z"></svg:path>`,
})
export class IcSharpWebStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWebhookIcon],svg[ic-sharp-webhook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15h5.88c.27-.31.67-.5 1.12-.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.44 0-.84-.19-1.12-.5H11.9A5 5 0 1 1 6 11.1v2.07c-1.16.41-2 1.53-2 2.83c0 1.65 1.35 3 3 3s3-1.35 3-3zm2.5-11c1.65 0 3 1.35 3 3h2c0-2.76-2.24-5-5-5a5.002 5.002 0 0 0-3.45 8.62l-2.35 3.9c-.68.14-1.2.75-1.2 1.48c0 .83.67 1.5 1.5 1.5a1.498 1.498 0 0 0 1.43-1.95l3.38-5.63A3 3 0 0 1 9.5 7c0-1.65 1.35-3 3-3m4.5 9c-.64 0-1.23.2-1.72.54l-3.05-5.07C11.53 8.35 11 7.74 11 7c0-.83.67-1.5 1.5-1.5S14 6.17 14 7c0 .15-.02.29-.06.43l2.19 3.65c.28-.05.57-.08.87-.08c2.76 0 5 2.24 5 5s-2.24 5-5 5a5 5 0 0 1-4.33-2.5h2.67c.48.32 1.05.5 1.66.5c1.65 0 3-1.35 3-3s-1.35-3-3-3"></svg:path>`,
})
export class IcSharpWebhookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWechatIcon],svg[ic-sharp-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43c0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47c-.09-.39-.14-.79-.14-1.21c-.01-3.54 3.44-6.43 7.69-6.43M12 5.89a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M6.87 7.82a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"></svg:path><svg:path fill="currentColor" d="M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14s2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03m-8.34-.32a.96.96 0 1 1 .96-.96c.01.53-.43.96-.96.96m3.85 0a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"></svg:path>`,
})
export class IcSharpWechatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWeekendIcon],svg[ic-sharp-weekend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9.03V14h12V9.03h2V5H4v4.03zM19 15H5v-4.97H1V19h22v-8.97h-4z"></svg:path>`,
})
export class IcSharpWeekendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWestIcon],svg[ic-sharp-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7z"></svg:path>`,
})
export class IcSharpWestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWhatsappIcon],svg[ic-sharp-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></svg:path>`,
})
export class IcSharpWhatsappIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWhatshotIcon],svg[ic-sharp-whatshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73c-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14c0-1.62 1.05-2.76 2.81-3.12c1.77-.36 3.6-1.21 4.62-2.58c.39 1.29.59 2.65.59 4.04c0 2.65-2.15 4.8-4.8 4.8"></svg:path>`,
})
export class IcSharpWhatshotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWheelchairPickupIcon],svg[ic-sharp-wheelchair-pickup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m5.5 6.95V7H3v8h2v7h3.5v-.11c-1.24-1.26-2-2.99-2-4.89c0-2.58 1.41-4.84 3.5-6.05M16.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3c0-1.11.61-2.06 1.5-2.58v-2.16c-2.02.64-3.5 2.51-3.5 4.74c0 2.76 2.24 5 5 5s5-2.24 5-5zm3.04-3H15V8h-2v8h5.46l2.47 3.71l1.66-1.11z"></svg:path>`,
})
export class IcSharpWheelchairPickupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWhereToVoteIcon],svg[ic-sharp-where-to-vote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m-1.53 12l-3.48-3.48L8.4 9.1l2.07 2.07l5.13-5.14l1.41 1.42z"></svg:path>`,
})
export class IcSharpWhereToVoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWidgetsIcon],svg[ic-sharp-widgets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13v8h8v-8zM3 21h8v-8H3zM3 3v8h8V3zm13.66-1.31L11 7.34L16.66 13l5.66-5.66z"></svg:path>`,
})
export class IcSharpWidgetsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWidthFullIcon],svg[ic-sharp-width-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zM4 6h1v12H4zm16 12h-1V6h1z"></svg:path>`,
})
export class IcSharpWidthFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWidthNormalIcon],svg[ic-sharp-width-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zM4 6h4v12H4zm16 12h-4V6h4z"></svg:path>`,
})
export class IcSharpWidthNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWidthWideIcon],svg[ic-sharp-width-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zM4 6h2v12H4zm16 12h-2V6h2z"></svg:path>`,
})
export class IcSharpWidthWideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiIcon],svg[ic-sharp-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9m8 8l3 3l3-3a4.237 4.237 0 0 0-6 0m-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13"></svg:path>`,
})
export class IcSharpWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifi1BarIcon],svg[ic-sharp-wifi-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.53 17.46L12 21l-3.53-3.54c.9-.9 2.15-1.46 3.53-1.46s2.63.56 3.53 1.46"></svg:path>`,
})
export class IcSharpWifi1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifi2BarIcon],svg[ic-sharp-wifi-2-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c3.03 0 5.78 1.23 7.76 3.22l-2.12 2.12A7.97 7.97 0 0 0 12 13c-2.2 0-4.2.9-5.64 2.35l-2.12-2.12C6.22 11.23 8.97 10 12 10m0 6c-1.38 0-2.63.56-3.53 1.46L12 21l3.53-3.54A4.98 4.98 0 0 0 12 16"></svg:path>`,
})
export class IcSharpWifi2BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiCallingIcon],svg[ic-sharp-wifi-calling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.21 17.37a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61z"></svg:path><svg:path fill="currentColor" d="M22 4.95C21.79 4.78 19.67 3 16.5 3c-3.18 0-5.29 1.78-5.5 1.95L16.5 12z"></svg:path>`,
})
export class IcSharpWifiCallingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiCalling3Icon],svg[ic-sharp-wifi-calling-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.49 3c-2.21 0-4.21.9-5.66 2.34l1.06 1.06a6.47 6.47 0 0 1 9.18 0l1.06-1.06A7.93 7.93 0 0 0 16.49 3"></svg:path><svg:path fill="currentColor" d="M20.03 7.46a5.02 5.02 0 0 0-7.08 0l1.06 1.06c.63-.63 1.51-1.03 2.47-1.03s1.84.39 2.47 1.03zm-4.95 2.13L16.49 11l1.41-1.41c-.36-.37-.86-.59-1.41-.59s-1.05.22-1.41.59"></svg:path><svg:path fill="currentColor" d="m21 15l-5-1l-2.9 2.9c-2.5-1.43-4.57-3.5-6-6L10 8L9 3H3c0 3.28.89 6.35 2.43 9c1.58 2.73 3.85 4.99 6.57 6.57C14.65 20.1 17.72 21 21 21z"></svg:path>`,
})
export class IcSharpWifiCalling3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiChannelIcon],svg[ic-sharp-wifi-channel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-2.51 0-3.77 5.61-4.4 10.57C10.79 10.66 9.61 8 8 8C4.43 8 3 21 3 21h2.01c.61-5.27 2-9.82 2.99-10.87c.98 1.05 2.38 5.61 2.99 10.87H13c.5-2.53 2-6 3-6s2.5 3.53 3 6h2s-.5-18-5-18m0 10c-.99 0-1.82.62-2.5 1.5c.57-4.77 1.54-8.62 2.5-9.44c.97.81 1.91 4.67 2.49 9.43C17.81 13.62 16.98 13 16 13"></svg:path>`,
})
export class IcSharpWifiChannelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiFindIcon],svg[ic-sharp-wifi-find-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14c0-3.36 2.64-6 6-6c2.2 0 4.08 1.13 5.13 2.86L24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98L12 21l1.86-1.87C12.14 18.09 11 16.2 11 14"></svg:path><svg:path fill="currentColor" d="M21 14c0-2.24-1.76-4-4-4s-4 1.76-4 4s1.76 4 4 4c.75 0 1.44-.21 2.03-.56L21.59 20L23 18.59l-2.56-2.56c.35-.59.56-1.28.56-2.03m-6 0c0-1.12.88-2 2-2s2 .88 2 2s-.88 2-2 2s-2-.88-2-2"></svg:path>`,
})
export class IcSharpWifiFindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiLockIcon],svg[ic-sharp-wifi-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.98 11L24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98l6.35 6.36L12 21l3.05-3.05V15c0-.45.09-.88.23-1.29c.54-1.57 2.01-2.71 3.77-2.71z"></svg:path><svg:path fill="currentColor" d="M22 15.11c0-1-.68-1.92-1.66-2.08c-.12-.02-.24-.02-.36-.02h-.01c-1.09.02-1.97.9-1.97 1.99v1h-1v5h6v-5h-1zM21 16h-2v-1c0-.55.45-1 1-1s1 .45 1 1z"></svg:path>`,
})
export class IcSharpWifiLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiOffIcon],svg[ic-sharp-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 11l2-2c-3.73-3.73-8.87-5.15-13.7-4.31l2.58 2.58c3.3-.02 6.61 1.22 9.12 3.73M9 17l3 3l3-3a4.237 4.237 0 0 0-6 0m10-4a9.9 9.9 0 0 0-3.72-2.33l3.02 3.02zM3.41 1.64L2 3.05L5.05 6.1C3.59 6.83 2.22 7.79 1 9l2 2c1.23-1.23 2.65-2.16 4.17-2.78l2.24 2.24A9.8 9.8 0 0 0 5 13l2 2a7 7 0 0 1 4.89-2.06l7.08 7.08l1.41-1.41z"></svg:path>`,
})
export class IcSharpWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiPasswordIcon],svg[ic-sharp-wifi-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 8.98l-2.12 2.13C19.35 8.57 15.85 7 12 7s-7.35 1.57-9.88 4.11L0 8.98C3.07 5.9 7.31 4 12 4s8.93 1.9 12 4.98M4.24 13.22l2.12 2.12A7.97 7.97 0 0 1 12 13c2.2 0 4.2.9 5.64 2.35l2.12-2.12C17.78 11.23 15.03 10 12 10s-5.78 1.23-7.76 3.22M24 19v5h-6v-5h1v-1c0-1.1.9-2 2-2s2 .9 2 2v1zm-2-1c0-.55-.45-1-1-1s-1 .45-1 1v1h2zm-10-2c-1.38 0-2.63.56-3.53 1.46L12 21l3.53-3.54A4.98 4.98 0 0 0 12 16"></svg:path>`,
})
export class IcSharpWifiPasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiProtectedSetupIcon],svg[ic-sharp-wifi-protected-setup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.71 5.29L19 3h-8v8l2.3-2.3c1.97 1.46 3.25 3.78 3.25 6.42c0 1.31-.32 2.54-.88 3.63c2.33-1.52 3.88-4.14 3.88-7.13c0-2.52-1.11-4.77-2.84-6.33"></svg:path><svg:path fill="currentColor" d="M7.46 8.88c0-1.31.32-2.54.88-3.63a8.48 8.48 0 0 0-3.88 7.13c0 2.52 1.1 4.77 2.84 6.33L5 21h8v-8l-2.3 2.3c-1.96-1.46-3.24-3.78-3.24-6.42"></svg:path>`,
})
export class IcSharpWifiProtectedSetupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiTetheringIcon],svg[ic-sharp-wifi-tethering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19M12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65c0-5.52-4.48-10-10-10"></svg:path>`,
})
export class IcSharpWifiTetheringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiTetheringErrorIcon],svg[ic-sharp-wifi-tethering-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c-3.31 0-6 2.69-6 6c0 1.66.68 3.15 1.76 4.24l1.42-1.42A3.93 3.93 0 0 1 8 13c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.11-.45 2.1-1.18 2.82l1.42 1.42A6 6 0 0 0 18 13c0-3.31-2.69-6-6-6m0-4C6.48 3 2 7.48 2 13c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42A7.94 7.94 0 0 1 4 13c0-4.42 3.58-8 8-8c2.53 0 4.78 1.17 6.24 3h2.42C18.93 5.01 15.7 3 12 3m0 8c-1.1 0-2 .9-2 2c0 .55.23 1.05.59 1.41s.86.59 1.41.59s1.05-.23 1.41-.59s.59-.86.59-1.41c0-1.1-.9-2-2-2m8-1h2v6h-2zm0 8h2v2h-2z"></svg:path>`,
})
export class IcSharpWifiTetheringErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiTetheringErrorRoundedIcon],svg[ic-sharp-wifi-tethering-error-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c-3.31 0-6 2.69-6 6c0 1.66.68 3.15 1.76 4.24l1.42-1.42A3.93 3.93 0 0 1 8 13c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.11-.45 2.1-1.18 2.82l1.42 1.42A6 6 0 0 0 18 13c0-3.31-2.69-6-6-6m0-4C6.48 3 2 7.48 2 13c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42A7.94 7.94 0 0 1 4 13c0-4.42 3.58-8 8-8c2.53 0 4.78 1.17 6.24 3h2.42C18.93 5.01 15.7 3 12 3m0 8c-1.1 0-2 .9-2 2c0 .55.23 1.05.59 1.41s.86.59 1.41.59s1.05-.23 1.41-.59s.59-.86.59-1.41c0-1.1-.9-2-2-2m8-1h2v6h-2zm0 8h2v2h-2z"></svg:path>`,
})
export class IcSharpWifiTetheringErrorRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWifiTetheringOffIcon],svg[ic-sharp-wifi-tethering-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.81 2.81L1.39 4.22l2.69 2.69A9.96 9.96 0 0 0 2 13c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42a7.96 7.96 0 0 1-.84-10.31l1.43 1.43a6 6 0 0 0 .82 7.47l1.42-1.42A3.93 3.93 0 0 1 8 13c0-.63.15-1.23.41-1.76l1.61 1.61c0 .05-.02.1-.02.15c0 .55.23 1.05.59 1.41s.86.59 1.41.59c.05 0 .1-.01.16-.02l7.62 7.62l1.41-1.41zM17.7 14.87c.19-.59.3-1.22.3-1.87c0-3.31-2.69-6-6-6c-.65 0-1.28.1-1.87.3l1.71 1.71C11.89 9 11.95 9 12 9c2.21 0 4 1.79 4 4c0 .05 0 .11-.01.16zM12 5c4.42 0 8 3.58 8 8c0 1.22-.27 2.37-.77 3.4l1.49 1.49A9.95 9.95 0 0 0 22 13c0-5.52-4.48-10-10-10c-1.78 0-3.44.46-4.89 1.28l1.48 1.48C9.63 5.27 10.78 5 12 5"></svg:path>`,
})
export class IcSharpWifiTetheringOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWindPowerIcon],svg[ic-sharp-wind-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3zm12.32-6.91l5.42-9.04L17.32 1L12 5.97v4.74a2.485 2.485 0 0 1 3.32 1.38M10.5 13c0-.82.4-1.54 1.01-2H1v4l7 2l3.44-2.06A2.48 2.48 0 0 1 10.5 13m9.67 10L23 20.17l-3.54-6.36l-3.98-1c0 .06.02.12.02.19a2.5 2.5 0 0 1-2.5 2.5c-.36 0-.69-.08-1-.21V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.17z"></svg:path><svg:circle cx="13" cy="13" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcSharpWindPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWindowIcon],svg[ic-sharp-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z"></svg:path>`,
})
export class IcSharpWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWineBarIcon],svg[ic-sharp-wine-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3zm10 5H8V5h8z"></svg:path>`,
})
export class IcSharpWineBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWomanIcon],svg[ic-sharp-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.41 7h-2.82L7 16h3v6h4v-6h3z"></svg:path><svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle>`,
})
export class IcSharpWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWoman2Icon],svg[ic-sharp-woman-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.41 7h-2.82L7 16h3.5v6h3v-6H17z"></svg:path><svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle>`,
})
export class IcSharpWoman2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWooCommerceIcon],svg[ic-sharp-woo-commerce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.14 7H3.86C2.83 7 1.99 7.84 2 8.86v6.21c0 1.03.83 1.86 1.86 1.86h7.71l3.52 1.96l-.8-1.96h5.84c1.03 0 1.86-.83 1.86-1.86V8.86C22 7.83 21.17 7 20.14 7M3.51 8.44c-.23.02-.4.1-.51.25c-.12.15-.16.34-.13.55c.48 3.07.93 5.13 1.35 6.21c.16.39.35.58.57.56c.34-.02.75-.5 1.23-1.42c.25-.52.65-1.31 1.18-2.35c.44 1.55 1.05 2.71 1.81 3.48c.21.22.43.32.65.3a.51.51 0 0 0 .43-.29c.08-.16.11-.34.1-.54c-.05-.74.02-1.78.23-3.12c.21-1.37.47-2.36.79-2.95a.69.69 0 0 0-.17-.86a.72.72 0 0 0-.52-.16c-.24.02-.42.13-.54.36q-.765 1.38-1.08 4.5c-.31-.78-.57-1.71-.78-2.8c-.09-.49-.31-.72-.67-.69c-.24.02-.45.18-.61.49l-1.79 3.41c-.29-1.19-.57-2.63-.83-4.34c-.05-.43-.29-.62-.71-.59m15.76.59c.58.12 1.01.43 1.31.95c.26.44.39.97.39 1.61c0 .84-.21 1.61-.64 2.31q-.735 1.23-1.92 1.23c-.14 0-.29-.02-.44-.05a1.88 1.88 0 0 1-1.31-.95q-.39-.675-.39-1.62c0-.84.21-1.61.64-2.31q.75-1.23 1.92-1.23c.14.01.28.03.44.06m-.34 4.42c.3-.27.51-.67.62-1.21c.03-.19.06-.39.06-.61c0-.24-.05-.49-.15-.74c-.12-.32-.29-.49-.48-.53c-.29-.06-.58.11-.85.51a2.6 2.6 0 0 0-.49 1.57c0 .24.05.49.15.74c.12.32.29.49.48.53c.2.04.42-.05.66-.26m-3.48-3.47c-.29-.52-.74-.83-1.31-.95c-.15-.03-.3-.05-.44-.05q-1.17 0-1.92 1.23a4.3 4.3 0 0 0-.64 2.31q0 .945.39 1.62c.29.52.73.83 1.31.95c.16.03.3.05.44.05q1.185 0 1.92-1.23c.43-.7.64-1.47.64-2.31c0-.65-.13-1.18-.39-1.62m-1.03 2.26c-.11.54-.32.94-.62 1.21c-.24.21-.46.3-.66.26s-.36-.21-.48-.53c-.1-.25-.15-.51-.15-.74c0-.2.02-.41.06-.6c.07-.34.21-.66.43-.97c.27-.4.56-.56.85-.51c.2.04.36.21.48.53c.1.25.15.51.15.74c0 .22-.02.42-.06.61"></svg:path>`,
})
export class IcSharpWooCommerceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWordpressIcon],svg[ic-sharp-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2M3.01 12c0-1.3.28-2.54.78-3.66l4.29 11.75c-3-1.46-5.07-4.53-5.07-8.09M12 20.99c-.88 0-1.73-.13-2.54-.37l2.7-7.84l2.76 7.57c.02.04.04.09.06.12c-.93.34-1.93.52-2.98.52m1.24-13.21c.54-.03 1.03-.09 1.03-.09c.48-.06.43-.77-.06-.74c0 0-1.46.11-2.4.11c-.88 0-2.37-.11-2.37-.11c-.48-.02-.54.72-.05.75c0 0 .46.06.94.09l1.4 3.84l-1.97 5.9l-3.27-9.75c.54-.02 1.03-.08 1.03-.08c.48-.06.43-.77-.06-.74c0 0-1.46.11-2.4.11c-.17 0-.37 0-.58-.01C6.1 4.62 8.86 3.01 12 3.01c2.34 0 4.47.89 6.07 2.36c-.04 0-.08-.01-.12-.01c-.88 0-1.51.77-1.51 1.6c0 .74.43 1.37.88 2.11c.34.6.74 1.37.74 2.48c0 .77-.3 1.66-.68 2.91l-.9 3zm6.65-.09a8.99 8.99 0 0 1-3.37 12.08l2.75-7.94c.51-1.28.68-2.31.68-3.22c0-.33-.02-.64-.06-.92"></svg:path>`,
})
export class IcSharpWordpressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWorkIcon],svg[ic-sharp-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20zm-8 0h-4V4h4z"></svg:path>`,
})
export class IcSharpWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWorkHistoryIcon],svg[ic-sharp-work-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.66 11.13c2-.37 3.88.11 5.34 1.13V6h-6V2H8v4H2v15h9.68a7 7 0 0 1-.52-4.51c.59-2.7 2.78-4.86 5.5-5.36M10 4h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85z"></svg:path>`,
})
export class IcSharpWorkHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWorkOffIcon],svg[ic-sharp-work-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h4v2h-3.6L22 17.6V6h-6V4c0-1.1-.9-2-2-2h-4c-.98 0-1.79.71-1.96 1.64L10 5.6zM3.4 1.84L1.99 3.25L4.74 6H2.01L2 21h17.74l2 2l1.41-1.41z"></svg:path>`,
})
export class IcSharpWorkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWorkOutlineIcon],svg[ic-sharp-work-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6V4h-4v2zM4 8v11h16V8zm18-2v15H2.01V6H8V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2z"></svg:path>`,
})
export class IcSharpWorkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWorkspacePremiumIcon],svg[ic-sharp-workspace-premium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.68 13.69L12 11.93l2.31 1.76l-.88-2.85L15.75 9h-2.84L12 6.19L11.09 9H8.25l2.31 1.84zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2l6 2v-7.72A7.96 7.96 0 0 0 20 10m-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6"></svg:path>`,
})
export class IcSharpWorkspacePremiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWorkspacesIcon],svg[ic-sharp-workspaces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m6-10C9.8 3 8 4.8 8 7s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m6 10c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4"></svg:path>`,
})
export class IcSharpWorkspacesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWrapTextIcon],svg[ic-sharp-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h6v-2H4zM20 5H4v2h16zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4"></svg:path>`,
})
export class IcSharpWrapTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWrongLocationIcon],svg[ic-sharp-wrong-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10V3.26c-.65-.17-1.32-.26-2-.26c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8c0-.41-.04-.81-.09-1.2zm-2 3c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path><svg:path fill="currentColor" d="m22.54 2.88l-1.42-1.42L19 3.59l-2.12-2.13l-1.42 1.42L17.59 5l-2.13 2.12l1.42 1.42L19 6.41l2.12 2.13l1.42-1.42L20.41 5z"></svg:path>`,
})
export class IcSharpWrongLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpWysiwygIcon],svg[ic-sharp-wysiwyg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12H7v-2h10zm-4 2H7v2h6zm8 7H3V3h18zM19 7H5v12h14z"></svg:path>`,
})
export class IcSharpWysiwygIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpYardIcon],svg[ic-sharp-yard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM8 8.22a1.562 1.562 0 0 1 2.45-1.28l-.01-.12c0-.86.7-1.56 1.56-1.56s1.56.7 1.56 1.56l-.01.12A1.562 1.562 0 0 1 16 8.22c0 .62-.37 1.16-.89 1.4c.52.25.89.79.89 1.41c0 .86-.7 1.56-1.56 1.56c-.33 0-.64-.11-.89-.28l.01.12c0 .86-.7 1.56-1.56 1.56s-1.56-.7-1.56-1.56l.01-.12A1.562 1.562 0 0 1 8 11.03c0-.62.37-1.16.89-1.4C8.37 9.38 8 8.84 8 8.22M12 19c-3.31 0-6-2.69-6-6c3.31 0 6 2.69 6 6c0-3.31 2.69-6 6-6c0 3.31-2.69 6-6 6"></svg:path><svg:circle cx="12" cy="9.62" r="1.56" fill="currentColor"></svg:circle>`,
})
export class IcSharpYardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpYoutubeSearchedForIcon],svg[ic-sharp-youtube-searched-for-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.01 14h-.8l-.27-.27a6.45 6.45 0 0 0 1.57-4.23c0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4l4.16-4H6.51a4.5 4.5 0 0 1 9 0a4.507 4.507 0 0 1-6.32 4.12L7.71 15.1a6.47 6.47 0 0 0 7.52-.67l.27.27v.79l5.01 4.99L22 19z"></svg:path>`,
})
export class IcSharpYoutubeSearchedForIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpZoomInIcon],svg[ic-sharp-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14m.5-7H9v2H7v1h2v2h1v-2h2V9h-2z"></svg:path>`,
})
export class IcSharpZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpZoomInMapIcon],svg[ic-sharp-zoom-in-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9V3H7v2.59L3.91 2.5L2.5 3.91L5.59 7H3v2zm12 0V7h-2.59l3.09-3.09l-1.41-1.41L17 5.59V3h-2v6zM3 15v2h2.59L2.5 20.09l1.41 1.41L7 18.41V21h2v-6zm12 0v6h2v-2.59l3.09 3.09l1.41-1.41L18.41 17H21v-2z"></svg:path>`,
})
export class IcSharpZoomInMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpZoomOutIcon],svg[ic-sharp-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14M7 9h5v1H7z"></svg:path>`,
})
export class IcSharpZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpZoomOutMapIcon],svg[ic-sharp-zoom-out-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 3l2.3 2.3l-2.89 2.87l1.42 1.42L18.7 6.7L21 9V3zM3 9l2.3-2.3l2.87 2.89l1.42-1.42L6.7 5.3L9 3H3zm6 12l-2.3-2.3l2.89-2.87l-1.42-1.42L5.3 17.3L3 15v6zm12-6l-2.3 2.3l-2.87-2.89l-1.42 1.42l2.89 2.87L15 21h6z"></svg:path>`,
})
export class IcSharpZoomOutMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone10kIcon],svg[ic-twotone-10k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10.5h1.5v3H10zm9 4.5V9l-2.25 3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 9h2.5v6H6v-4.5H5V19h14v-4h-1.75l-1.75-2.25V15H14V9h1.5v2.25L17.25 9H19V5H5zm3.5 1c0-.55.45-1 1-1H12c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H9.5c-.55 0-1-.45-1-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 6v10H5v-8.5h1V15h1.5V9H5V5h14z"></svg:path><svg:path fill="currentColor" d="M15.5 11.25V9H14v6h1.5v-2.25L17.25 15H19l-2.25-3L19 9h-1.75zM9.5 15H12c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H9.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-4.5h1.5v3H10z"></svg:path>`,
})
export class IcTwotone10kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone10mpIcon],svg[ic-twotone-10mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 7H15v3h-1.5zm1.5 7h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-6-7c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H13c-.55 0-1-.45-1-1zm-5-1h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M13 11.5h2.5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-4.5H15v3h-1.5zm-6 7h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm1-2.5H10v-6H7V7h1.5zm5 7H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path>`,
})
export class IcTwotone10mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone11mpIcon],svg[ic-twotone-11mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-5-8h3v6h-1.5V7H13zm-5 0h3v6H9.5V7H8zm-2 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M9.5 11.5H11v-6H8V7h1.5zm5 0H16v-6h-3V7h1.5z"></svg:path>`,
})
export class IcTwotone11mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone123Icon],svg[ic-twotone-123-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15H5.5v-4.5H4V9h3zm6.5-1.5h-3v-1h2c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1H9v1.5h3v1h-2c-.55 0-1 .45-1 1V15h4.5zm6 .5v-4c0-.55-.45-1-1-1H15v1.5h3v1h-2v1h2v1h-3V15h3.5c.55 0 1-.45 1-1"></svg:path>`,
})
export class IcTwotone123Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone12mpIcon],svg[ic-twotone-12mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1M12 9c0-.55.45-1 1-1h2V7h-3V5.5h3.5c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1h-2v1h3v1.5H12zM7 5.5h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M8.5 11.5H10v-6H7V7h1.5zm8-1.5h-3V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H12V7h3v1h-2c-.55 0-1 .45-1 1v2.5h4.5z"></svg:path>`,
})
export class IcTwotone12mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone13mpIcon],svg[ic-twotone-13mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="icTwotone13mp0" fill="currentColor" d="M8.5 11.5H10v-6H7V7h1.5z"></svg:path></svg:defs><svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1M12 10h3V9h-2V8h2V7h-3V5.5h3.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H12zM7 5.5h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:use href="#icTwotone13mp0"></svg:use><svg:use href="#icTwotone13mp0" opacity=".3"></svg:use><svg:path fill="currentColor" d="M16.5 10.5v-4c0-.55-.45-1-1-1H12V7h3v1h-2v1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1"></svg:path><svg:path fill="currentColor" d="M16.5 10.5v-4c0-.55-.45-1-1-1H12V7h3v1h-2v1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path>`,
})
export class IcTwotone13mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone14mpIcon],svg[ic-twotone-14mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-6-8h1.5v3H15v-3h1.5v3h1V10h-1v1.5H15V10h-3zm-5 0h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1zm3 3H15V14h1.5z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M8.5 11.5H10v-6H7V7h1.5zm6.5 0h1.5V10h1V8.5h-1v-3H15v3h-1.5v-3H12V10h3z"></svg:path>`,
})
export class IcTwotone14mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone15mpIcon],svg[ic-twotone-15mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1M12 10h3V9h-3V5.5h4.5V7h-3v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H12zM7 5.5h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M8.5 11.5H10v-6H7V7h1.5zm8-1V9c0-.55-.45-1-1-1h-2V7h3V5.5H12V9h3v1h-3v1.5h3.5c.55 0 1-.45 1-1"></svg:path>`,
})
export class IcTwotone15mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone16mpIcon],svg[ic-twotone-16mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-6-7c0-.55.45-1 1-1h3.5V7h-3v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H13c-.55 0-1-.45-1-1zm-5-1h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M13.5 9H15v1.5h-1.5zm1.5 5h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M13 11.5h2.5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-2V7h3V5.5H13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-2.5H15v1.5h-1.5zm-5 2.5H10v-6H7V7h1.5z"></svg:path>`,
})
export class IcTwotone16mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone17mpIcon],svg[ic-twotone-17mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-6-8h3.5c.67 0 1.15.65.96 1.29L15 11.5h-1.75L14.62 7H12zm-5 0h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M8.5 11.5H10v-6H7V7h1.5zm4.75 0H15l1.46-4.71c.19-.64-.29-1.29-.96-1.29H12V7h2.62z"></svg:path>`,
})
export class IcTwotone17mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone18UpRatingIcon],svg[ic-twotone-18-up-rating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10h1.5v1.5H13zm0 2.5h1.5V14H13z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm6.5-9c0-.55.45-1 1-1H15c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1zM7 9h3v6H8.5v-4.5H7z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M8.5 15H10V9H7v1.5h1.5z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M12.5 15H15c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-5h1.5v1.5H13zm0 2.5h1.5V14H13z"></svg:path>`,
})
export class IcTwotone18UpRatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone18mpIcon],svg[ic-twotone-18mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 6.5H15V8h-1.5zm0 2.5H15v1.5h-1.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-6-7c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H13c-.55 0-1-.45-1-1zm-5-1h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M8.5 11.5H10v-6H7V7h1.5zm4.5 0h2.5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-5H15V8h-1.5zm0 2.5H15v1.5h-1.5z"></svg:path>`,
})
export class IcTwotone18mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone19mpIcon],svg[ic-twotone-19mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1M12 10h3V9h-2c-.55 0-1-.45-1-1V6.5c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H12zM7 5.5h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M13.5 6.5H15V8h-1.5zM15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M16.5 10.5v-4c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1V8c0 .55.45 1 1 1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1M15 8h-1.5V6.5H15zm-6.5 3.5H10v-6H7V7h1.5z"></svg:path>`,
})
export class IcTwotone19mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone1kIcon],svg[ic-twotone-1k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm7-10h1.5v2.25L15.25 9H17l-2.25 3L17 15h-1.75l-1.75-2.25V15H12zM7 9h3v6H8.5v-4.5H7z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M8.5 15H10V9H7v1.5h1.5zm5-2.25L15.25 15H17l-2.25-3L17 9h-1.75l-1.75 2.25V9H12v6h1.5z"></svg:path>`,
})
export class IcTwotone1kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone1kPlusIcon],svg[ic-twotone-1k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm5.5-10H12v2.25L13.75 9h1.75l-2.25 3l2.25 3h-1.75L12 12.75V15h-1.5zM6 9h3v6H7.5v-4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z"></svg:path><svg:path fill="currentColor" d="M7.5 15H9V9H6v1.5h1.5zm4.5-2.25L13.75 15h1.75l-2.25-3l2.25-3h-1.75L12 11.25V9h-1.5v6H12z"></svg:path>`,
})
export class IcTwotone1kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone1xMobiledataIcon],svg[ic-twotone-1x-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7h4v10H6V9H4zm11.83 4.72L18.66 7h-2.33l-1.66 2.77L13 7h-2.33l2.83 4.72L10.33 17h2.33l2-3.34l2 3.34H19z"></svg:path>`,
})
export class IcTwotone1xMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone20mpIcon],svg[ic-twotone-20mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-5-7c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H14c-.55 0-1-.45-1-1zM6.5 9c0-.55.45-1 1-1h2V7h-3V5.5H10c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1H8v1h3v1.5H6.5zM6 13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M14.5 7H16v3h-1.5zm.5 7h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1zm3 3H15V14h1.5z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M14 11.5h2.5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H14c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-4.5H16v3h-1.5zM11 10H8V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H6.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H11z"></svg:path>`,
})
export class IcTwotone20mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone21mpIcon],svg[ic-twotone-21mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm8-13.5h3v6h-1.5V7H13zm.5 7H17c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5h-1.5zM7.5 9c0-.55.45-1 1-1h2V7h-3V5.5H11c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1H9v1h3v1.5H7.5zM6 13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M14.5 11.5H16v-6h-3V7h1.5zM12 10H9V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H7.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H12zm-4.5 4h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm7.5 3h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6H15zm0-3h1.5v1.5H15z"></svg:path>`,
})
export class IcTwotone21mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone22mpIcon],svg[ic-twotone-22mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1M13 9c0-.55.45-1 1-1h2V7h-3V5.5h3.5c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1h-2v1h3v1.5H13zM6.5 9c0-.55.45-1 1-1h2V7h-3V5.5H10c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1H8v1h3v1.5H6.5zM6 13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1zm3 3H15V14h1.5z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M11 10H8V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H6.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H11zm6.5 0h-3V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H13V7h3v1h-2c-.55 0-1 .45-1 1v2.5h4.5z"></svg:path>`,
})
export class IcTwotone22mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone23mpIcon],svg[ic-twotone-23mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1M13 10h3V9h-2V8h2V7h-3V5.5h3.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H13zM6.5 9c0-.55.45-1 1-1h2V7h-3V5.5H10c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1H8v1h3v1.5H6.5zM6 13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1zm3 3H15V14h1.5z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M11 10H8V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H6.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H11zm6.5.5v-4c0-.55-.45-1-1-1H13V7h3v1h-2v1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1"></svg:path>`,
})
export class IcTwotone23mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone24mpIcon],svg[ic-twotone-24mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm13-3c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1zM13 5.5h1.5v3H16v-3h1.5v3h1V10h-1v1.5H16V10h-3zM6.5 9c0-.55.45-1 1-1h2V7h-3V5.5H10c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1H8v1h3v1.5H6.5zM6 13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm9.5-1.5h-3.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1m-.5 3H15V14h1.5z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M11 10H8V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H6.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H11zm5 1.5h1.5V10h1V8.5h-1v-3H16v3h-1.5v-3H13V10h3z"></svg:path>`,
})
export class IcTwotone24mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone2kIcon],svg[ic-twotone-2k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13zm-6.5 3.5c0-.55.45-1 1-1h2v-1h-3V9H10c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H8v1h3V15H6.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M11 13.5H8v-1h2c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1H6.5v1.5h3v1h-2c-.55 0-1 .45-1 1V15H11zm3.5-.75L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z"></svg:path>`,
})
export class IcTwotone2kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone2kPlusIcon],svg[ic-twotone-2k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm6-10h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75l-1.75-2.25V15H11zm-5 3.5c0-.55.45-1 1-1h1.5v-1H6V9h3c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H7.5v1H10V15H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z"></svg:path><svg:path fill="currentColor" d="M10 13.5H7.5v-1H9c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1H6v1.5h2.5v1H7c-.55 0-1 .45-1 1V15h4zm2.5-.75L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z"></svg:path>`,
})
export class IcTwotone2kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone2mpIcon],svg[ic-twotone-2mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1M10 9c0-.55.45-1 1-1h2V7h-3V5.5h3.5c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1h-2v1h3v1.5H10zm-4 4.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M14.5 10h-3V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H10V7h3v1h-2c-.55 0-1 .45-1 1v2.5h4.5z"></svg:path>`,
})
export class IcTwotone2mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone30fpsIcon],svg[ic-twotone-30fps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v3h6v2.5H3v3h5V16H2v3h6c1.66 0 3-1.34 3-3v-1.9A2.1 2.1 0 0 0 8.9 12A2.1 2.1 0 0 0 11 9.9V8c0-1.66-1.34-3-3-3zm17 3v8h-4V8zm0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3"></svg:path>`,
})
export class IcTwotone30fpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone30fpsSelectIcon],svg[ic-twotone-30fps-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v2h5v2H5v2h4v2H4v2h5c1.1 0 2-.9 2-2v-1.5c0-.83-.17-1.5-1-1.5c.83 0 1-.67 1-1.5V6c0-1.1-.9-2-2-2zm14 0c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2h-3v6h3zM5 22H3v-5h2zm4 0H7v-5h2zm4 0h-2v-5h2zm8 0h-6v-5h6z"></svg:path>`,
})
export class IcTwotone30fpsSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone360Icon],svg[ic-twotone-360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16.77V20l4-4l-4-4v2.73c-3.15-.56-5-1.9-5-2.73c0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58c0-2.76-4.48-5-10-5S2 9.24 2 12c0 2.24 2.94 4.13 7 4.77"></svg:path>`,
})
export class IcTwotone360Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone3dRotationIcon],svg[ic-twotone-3d-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.53 21.48A10.49 10.49 0 0 1 1.56 13H.06c.51 6.16 5.66 11 11.95 11l.66-.03l-3.81-3.81zm.89-6.52c-.19 0-.37-.03-.52-.08a1.1 1.1 0 0 1-.4-.24c-.11-.1-.2-.22-.26-.37c-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95s.33.5.56.69c.24.18.51.32.82.41q.45.15.96.15c.37 0 .72-.05 1.03-.15c.32-.1.6-.25.83-.44s.42-.43.55-.72s.2-.61.2-.97c0-.19-.02-.38-.07-.56a1.7 1.7 0 0 0-.23-.51c-.1-.16-.24-.3-.4-.43c-.17-.13-.37-.23-.61-.31a2.1 2.1 0 0 0 .89-.75c.1-.15.17-.3.22-.46s.07-.32.07-.48q0-.54-.18-.96c-.18-.42-.29-.51-.51-.69c-.2-.19-.47-.33-.77-.43C9.11 8.05 8.77 8 8.4 8c-.36 0-.69.05-1 .16c-.3.11-.57.26-.79.45c-.21.19-.38.41-.51.67c-.12.26-.18.54-.18.85h1.3q0-.255.09-.45c.09-.195.14-.25.25-.34s.23-.17.38-.22s.3-.08.48-.08c.4 0 .7.1.89.31c.19.2.29.49.29.86c0 .18-.03.34-.08.49s-.14.27-.25.37s-.25.18-.41.24s-.36.09-.58.09h-.77v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4s.1.35.1.57c0 .41-.12.72-.35.93c-.23.23-.55.33-.95.33m8.55-5.92c-.32-.33-.7-.59-1.14-.77Q15.17 8 14.36 8H12v8h2.3c.55 0 1.06-.09 1.51-.27s.84-.43 1.16-.76s.57-.73.74-1.19c.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57s-.42-.87-.74-1.2m-.39 3.16c0 .42-.05.79-.14 1.13c-.1.33-.24.62-.43.85s-.43.41-.71.53q-.435.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69c.38.46.57 1.12.57 1.99zM12.01 0l-.66.03l3.81 3.81l1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.45 4.84 18.3 0 12.01 0"></svg:path>`,
})
export class IcTwotone3dRotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone3gMobiledataIcon],svg[ic-twotone-3g-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h5v2H4v2h4v2H3v2h5c1.1 0 2-.9 2-2v-1.5c0-.83-.67-1.5-1.5-1.5c.83 0 1.5-.67 1.5-1.5V9c0-1.1-.9-2-2-2zm18 4v4c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2h-7v6h5v-2h-2.5v-2z"></svg:path>`,
})
export class IcTwotone3gMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone3kIcon],svg[ic-twotone-3k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13zm-6.5 4.5h3v-1h-2v-1h2v-1h-3V9H10c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H6.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M11 14v-4c0-.55-.45-1-1-1H6.5v1.5h3v1h-2v1h2v1h-3V15H10c.55 0 1-.45 1-1m3.5-1.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z"></svg:path>`,
})
export class IcTwotone3kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone3kPlusIcon],svg[ic-twotone-3k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm6-10h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75l-1.75-2.25V15H11zm-5.5 4.5h3v-1h-2v-1h2v-1h-3V9H9c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H5.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z"></svg:path><svg:path fill="currentColor" d="M10 14v-4c0-.55-.45-1-1-1H5.5v1.5h3v1h-2v1h2v1h-3V15H9c.55 0 1-.45 1-1m2.5-1.25L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z"></svg:path>`,
})
export class IcTwotone3kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone3mpIcon],svg[ic-twotone-3mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1M10 10h3V9h-2V8h2V7h-3V5.5h3.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H10zm-4 3.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M14.5 10.5v-4c0-.55-.45-1-1-1H10V7h3v1h-2v1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1"></svg:path>`,
})
export class IcTwotone3mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone3pIcon],svg[ic-twotone-3p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v13.17L5.17 16H20V4zm8 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m4 8H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 13.43z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 2H4.01c-1.1 0-2 .9-2 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zm-8-6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 8 13.43V14h8z"></svg:path>`,
})
export class IcTwotone3pIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone4gMobiledataIcon],svg[ic-twotone-4g-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7H7v5H5V7H3v7h4v3h2v-3h2v-2H9zm8 4v2h2v2h-5V9h7c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4z"></svg:path>`,
})
export class IcTwotone4gMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone4gPlusMobiledataIcon],svg[ic-twotone-4g-plus-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11v2h2v2h-4V9h6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7z"></svg:path>`,
})
export class IcTwotone4gPlusMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone4kIcon],svg[ic-twotone-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5H5v14h14zm-7 8.51h-1V15H9.5v-1.5h-3V9H8v3h1.5V9H11v3h1zM18.2 15h-1.7l-2-3v3H13V9h1.5v3l2-3h1.7l-2 3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 21h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2M5 5h14v14H5zm6 4H9.5v3H8V9H6.5v4.5h3V15H11v-1.49h1V12h-1zm5.5 0l-2 3l2 3h1.7l-2-3l2-3zM13 9v6h1.5V9z"></svg:path>`,
})
export class IcTwotone4kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone4kPlusIcon],svg[ic-twotone-4k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm6.5-10H13v2.25L14.75 9h1.75l-2.25 3l2.25 3h-1.75L13 12.75V15h-1.5zm-6 0H7v3h1.5V9H10v3h1v1.5h-1V15H8.5v-1.5h-3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z"></svg:path><svg:path fill="currentColor" d="M8.5 15H10v-1.5h1V12h-1V9H8.5v3H7V9H5.5v4.5h3zm4.5-2.25L14.75 15h1.75l-2.25-3l2.25-3h-1.75L13 11.25V9h-1.5v6H13z"></svg:path>`,
})
export class IcTwotone4kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone4mpIcon],svg[ic-twotone-4mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-8.5-8H11v3h1.5v-3H14v3h1V10h-1v1.5h-1.5V10h-3zm-3.5 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M12.5 11.5H14V10h1V8.5h-1v-3h-1.5v3H11v-3H9.5V10h3z"></svg:path>`,
})
export class IcTwotone4mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone5gIcon],svg[ic-twotone-5g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 13H19v2h-5V9h7c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4h-4.5zM3 13h5v2H3v2h5c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H5V9h5V7H3z"></svg:path>`,
})
export class IcTwotone5gIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone5kIcon],svg[ic-twotone-5k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13zm-6.5 4.5h3v-1h-3V9H11v1.5H8v1h2c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H6.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M11 14v-1.5c0-.55-.45-1-1-1H8v-1h3V9H6.5v3.5h3v1h-3V15H10c.55 0 1-.45 1-1m3.5-1.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z"></svg:path>`,
})
export class IcTwotone5kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone5kPlusIcon],svg[ic-twotone-5k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm6-10h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75l-1.75-2.25V15H11zm-5 4.5h2.5v-1H6V9h4v1.5H7.5v1H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z"></svg:path><svg:path fill="currentColor" d="M10 14v-1.5c0-.55-.45-1-1-1H7.5v-1H10V9H6v3.5h2.5v1H6V15h3c.55 0 1-.45 1-1m2.5-1.25L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z"></svg:path>`,
})
export class IcTwotone5kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone5mpIcon],svg[ic-twotone-5mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1M10 10h3V9h-3V5.5h4.5V7h-3v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H10zm-4 3.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M14.5 10.5V9c0-.55-.45-1-1-1h-2V7h3V5.5H10V9h3v1h-3v1.5h3.5c.55 0 1-.45 1-1"></svg:path>`,
})
export class IcTwotone5mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone6FtApartIcon],svg[ic-twotone-6-ft-apart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 9.43V10h8zM18 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 9.43V10h8zM19 17v-2.01L5 15v2l-3-3l3-3v2.01L19 13v-2l3 3zm-9 2v-1H7.5c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5V20c0-.28-.22-.5-.5-.5H8V19zm-1 1.5v.5H8v-.5zm8.5-1.5h-1v3h-1v-3h-1v-1h3zm-5 0v.5h1v1h-1V22h-1v-4H14v1z"></svg:path>`,
})
export class IcTwotone6FtApartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone60fpsIcon],svg[ic-twotone-60fps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8v8h-4V8zm0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3m-9 3V5H5C3.34 5 2 6.34 2 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3v-3c0-1.66-1.34-3-3-3H5V8zm-2 5v3H5v-3z"></svg:path>`,
})
export class IcTwotone60fpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone60fpsSelectIcon],svg[ic-twotone-60fps-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6v6h-3V6zm0-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 2V4H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H6V6zm-2 4v2H6v-2zM5 22H3v-5h2zm4 0H7v-5h2zm4 0h-2v-5h2zm8 0h-6v-5h6z"></svg:path>`,
})
export class IcTwotone60fpsSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone6kIcon],svg[ic-twotone-6k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12.5h1.5V14H8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13zm-6.5 1c0-.55.45-1 1-1H11v1.5H8v1h2c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7.5c-.55 0-1-.45-1-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M14.5 12.75L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5zM7.5 15H10c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H8v-1h3V9H7.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-2.5h1.5V14H8z"></svg:path>`,
})
export class IcTwotone6kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone6kPlusIcon],svg[ic-twotone-6k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 12.5h1V14h-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm6-10h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75l-1.75-2.25V15H11zm-5 1c0-.55.45-1 1-1h3v1.5H7.5v1H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z"></svg:path><svg:path fill="currentColor" d="M12.5 12.75L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5zM7 15h2c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H7.5v-1H10V9H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-2.5h1V14h-1z"></svg:path>`,
})
export class IcTwotone6kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone6mpIcon],svg[ic-twotone-6mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15zm-3.5-5H13v1.5h-1.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-8-7c0-.55.45-1 1-1h3.5V7h-3v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H11c-.55 0-1-.45-1-1zm-4 7c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M11 11.5h2.5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-2V7h3V5.5H11c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-2.5H13v1.5h-1.5z"></svg:path>`,
})
export class IcTwotone6mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone7kIcon],svg[ic-twotone-7k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13zM6.5 9H10c.67 0 1.15.65.96 1.29L9.5 15H7.75l1.38-4.5H6.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M7.75 15H9.5l1.46-4.71C11.15 9.65 10.67 9 10 9H6.5v1.5h2.63zm6.75-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z"></svg:path>`,
})
export class IcTwotone7kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone7kPlusIcon],svg[ic-twotone-7k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm6-10h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75l-1.75-2.25V15H11zM5.5 9H9c.67 0 1.15.65.96 1.29L8.5 15H6.75l1.38-4.5H5.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z"></svg:path><svg:path fill="currentColor" d="M6.75 15H8.5l1.46-4.71C10.15 9.65 9.67 9 9 9H5.5v1.5h2.63zm5.75-2.25L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z"></svg:path>`,
})
export class IcTwotone7kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone7mpIcon],svg[ic-twotone-7mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-8-8h3.5c.67 0 1.15.65.96 1.29L13 11.5h-1.75L12.62 7H10zm-4 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M11.25 11.5H13l1.46-4.71c.19-.64-.29-1.29-.96-1.29H10V7h2.62z"></svg:path>`,
})
export class IcTwotone7mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone8kIcon],svg[ic-twotone-8k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10h1.5v1.5H8zm0 2.5h1.5V14H8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13zm-6.5 1c0-.55.45-1 1-1H10c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H7.5c-.55 0-1-.45-1-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 15H10c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H7.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-5h1.5v1.5H8zm0 2.5h1.5V14H8z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M14.5 12.75L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z"></svg:path>`,
})
export class IcTwotone8kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone8kPlusIcon],svg[ic-twotone-8k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 12.5h1V14h-1zm0-2.5h1v1.5h-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm6-10h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75l-1.75-2.25V15H11zm-5 1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7 15h2c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-5h1v1.5h-1zm0 2.5h1V14h-1z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z"></svg:path><svg:path fill="currentColor" d="M12.5 12.75L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z"></svg:path>`,
})
export class IcTwotone8kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone8mpIcon],svg[ic-twotone-8mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15zm-3.5-7.5H13V8h-1.5zm0 2.5H13v1.5h-1.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-8-7c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H11c-.55 0-1-.45-1-1zm-4 7c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M11 11.5h2.5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H11c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-5H13V8h-1.5zm0 2.5H13v1.5h-1.5z"></svg:path>`,
})
export class IcTwotone8mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone9kIcon],svg[ic-twotone-9k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13zm-6.5 4.5h3v-1h-2c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1H10c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H6.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M8 10h1.5v1.5H8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M11 14v-4c0-.55-.45-1-1-1H7.5c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2v1h-3V15H10c.55 0 1-.45 1-1m-1.5-2.5H8V10h1.5z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M14.5 12.75L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z"></svg:path>`,
})
export class IcTwotone9kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone9kPlusIcon],svg[ic-twotone-9k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 10h1v1.5h-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm6-10h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75l-1.75-2.25V15H11zm-5 4.5h2.5v-1H7c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M10 14v-4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h1.5v1H6V15h3c.55 0 1-.45 1-1m-1.5-2.5h-1V10h1z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z"></svg:path><svg:path fill="currentColor" d="M12.5 12.75L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z"></svg:path>`,
})
export class IcTwotone9kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotone9mpIcon],svg[ic-twotone-9mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15zm-3.5-7.5H13V8h-1.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1M10 10h3V9h-2c-.55 0-1-.45-1-1V6.5c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H10zm-4 3.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M14.5 10.5v-4c0-.55-.45-1-1-1H11c-.55 0-1 .45-1 1V8c0 .55.45 1 1 1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1M13 8h-1.5V6.5H13z"></svg:path>`,
})
export class IcTwotone9mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAbcIcon],svg[ic-twotone-abc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h-1.5v-.5h-2v3h2V13H21v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zM8 10v5H6.5v-1.5h-2V15H3v-5c0-.55.45-1 1-1h3c.55 0 1 .45 1 1m-1.5.5h-2V12h2zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-4V9h4c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M11 10.5v.75h2v-.75zm2 2.25h-2v.75h2z"></svg:path>`,
})
export class IcTwotoneAbcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAcUnitIcon],svg[ic-twotone-ac-unit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h-4.17l3.24-3.24l-1.41-1.42L15 11h-2V9l4.66-4.66l-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93L6.34 4.34L11 9v2H9L4.34 6.34L2.93 7.76L6.17 11H2v2h4.17l-3.24 3.24l1.41 1.42L9 13h2v2l-4.66 4.66l1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24l1.42-1.41L13 15v-2h2l4.66 4.66l1.41-1.42L17.83 13H22z"></svg:path>`,
})
export class IcTwotoneAcUnitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccessAlarmIcon],svg[ic-twotone-access-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7s-3.13-7-7-7m3.75 10.85L11 14V8h1.5v5.25l4 2.37z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18m0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7m.5-12H11v6l4.75 2.85l.75-1.23l-4-2.37zM22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53z"></svg:path>`,
})
export class IcTwotoneAccessAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccessAlarmsIcon],svg[ic-twotone-access-alarms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-3.9 0-7 3.1-7 7s3.1 7 7 7s7-3.1 7-7s-3.1-7-7-7m3.7 10.9L11 14V8h1.5v5.3l4 2.4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m22 5.7l-4.6-3.9l-1.3 1.5l4.6 3.9zM12.5 8H11v6l4.7 2.9l.8-1.2l-4-2.4zM12 4c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9m0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7M7.9 3.4L6.6 1.9L2 5.7l1.3 1.5z"></svg:path>`,
})
export class IcTwotoneAccessAlarmsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccessTimeIcon],svg[ic-twotone-access-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m4.25 12.15L11 13V7h1.5v5.25l4.5 2.67z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"></svg:path>`,
})
export class IcTwotoneAccessTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccessTimeFilledIcon],svg[ic-twotone-access-time-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m3.3 14.71L11 12.41V7h2v4.59l3.71 3.71z"></svg:path>`,
})
export class IcTwotoneAccessTimeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccessibilityIcon],svg[ic-twotone-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m9 7h-6v13h-2v-6h-2v6H9V9H3V7h18z"></svg:path>`,
})
export class IcTwotoneAccessibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccessibilityNewIcon],svg[ic-twotone-accessibility-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2"></svg:path>`,
})
export class IcTwotoneAccessibilityNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccessibleIcon],svg[ic-twotone-accessible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45c-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95m-6.17 5c-.41 1.16-1.52 2-2.83 2c-1.66 0-3-1.34-3-3c0-1.31.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9z"></svg:path>`,
})
export class IcTwotoneAccessibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccessibleForwardIcon],svg[ic-twotone-accessible-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="4.54" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 17h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5m3-3.5h-1.86l1.67-3.67C18.42 8.5 17.44 7 15.96 7h-5.2c-.81 0-1.54.47-1.87 1.2L8.22 10l1.92.53l.65-1.53H13l-1.83 4.1c-.6 1.33.39 2.9 1.85 2.9H18v5h2v-5.5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcTwotoneAccessibleForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccountBalanceIcon],svg[ic-twotone-account-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.29 6l5.21-2.74L16.71 6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M6.5 10h-2v7h2zm6 0h-2v7h2zm8.5 9H2v2h19zm-2.5-9h-2v7h2zm-7-9L2 6v2h19V6zM6.29 6l5.21-2.74L16.71 6z"></svg:path>`,
})
export class IcTwotoneAccountBalanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccountBalanceWalletIcon],svg[ic-twotone-account-balance-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6V5H5v14h14v-2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M21 7.28V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9c0-.74-.41-1.38-1-1.72M20 9v6h-7V9zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2z"></svg:path><svg:circle cx="16" cy="12" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneAccountBalanceWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccountBoxIcon],svg[ic-twotone-account-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17.86C6.8 16.09 9.27 15 12 15s5.2 1.09 7 2.86V5H5zM12 6c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 16H7v-.24C8.42 17.62 10.16 17 12 17s3.58.62 5 1.76zm2-1.14C17.2 16.09 14.73 15 12 15s-5.2 1.09-7 2.86V5h14z"></svg:path><svg:path fill="currentColor" d="M12 13c1.93 0 3.5-1.57 3.5-3.5S13.93 6 12 6S8.5 7.57 8.5 9.5S10.07 13 12 13m0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8"></svg:path>`,
})
export class IcTwotoneAccountBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccountCircleIcon],svg[ic-twotone-account-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.42 0-8 3.58-8 8c0 1.95.7 3.73 1.86 5.12a9.95 9.95 0 0 1 12.28 0A7.96 7.96 0 0 0 20 12c0-4.42-3.58-8-8-8m0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5m6.14-2.88a9.95 9.95 0 0 0-12.28 0A7.96 7.96 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12"></svg:path><svg:path fill="currentColor" d="M12 5.93c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcTwotoneAccountCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAccountTreeIcon],svg[ic-twotone-account-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3zM7 9H4V5h3zm10 6h3v4h-3zm0-10h3v4h-3z"></svg:path><svg:path fill="currentColor" d="M7 5v4H4V5zm13 0v4h-3V5zm0 10v4h-3v-4z" opacity=".3"></svg:path>`,
})
export class IcTwotoneAccountTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAdUnitsIcon],svg[ic-twotone-ad-units-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h10v1H7zm0 17h10v1H7z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7 4V3h10v1zm0 14V6h10v12zm0 3v-1h10v1z"></svg:path><svg:path fill="currentColor" d="M16 7H8v2h8z"></svg:path>`,
})
export class IcTwotoneAdUnitsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAdbIcon],svg[ic-twotone-adb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5zM16.12 4.37l2.1-2.1l-.82-.83l-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83l2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63M9 9c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcTwotoneAdbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddIcon],svg[ic-twotone-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></svg:path>`,
})
export class IcTwotoneAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddAPhotoIcon],svg[ic-twotone-add-a-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7v3H5v10h16V8h-4.05l-1.83-2H9v1zm7 2c2.76 0 5 2.24 5 5s-2.24 5-5 5s-5-2.24-5-5s2.24-5 5-5" opacity=".3"></svg:path><svg:path fill="currentColor" d="M21 6h-3.17L16 4H9v2h6.12l1.83 2H21v12H5V10H3v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 14c0 2.76 2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5s-5 2.24-5 5m5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3M5 9V6h3V4H5V1H3v3H0v2h3v3z"></svg:path>`,
})
export class IcTwotoneAddAPhotoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddAlarmIcon],svg[ic-twotone-add-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7s-3.13-7-7-7m4 8h-3v3h-2v-3H8v-2h3V9h2v3h3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18m0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7m1-11h-2v3H8v2h3v3h2v-3h3v-2h-3zm9-3.28l-4.6-3.86l-1.29 1.53l4.6 3.86zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53z"></svg:path>`,
})
export class IcTwotoneAddAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddAlertIcon],svg[ic-twotone-add-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-2.76 0-5 2.24-5 5v7h10v-7c0-2.76-2.24-5-5-5m4 7h-3v3h-2v-3H8v-2h3V8h2v3h3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99m7-6v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1zm-2 1H7v-7c0-2.76 2.24-5 5-5s5 2.24 5 5zm-4-7V8h-2v3H8v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class IcTwotoneAddAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddBoxIcon],svg[ic-twotone-add-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm2-8h4V7h2v4h4v2h-4v4h-2v-4H7z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z"></svg:path>`,
})
export class IcTwotoneAddBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddBusinessIcon],svg[ic-twotone-add-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.36 9H3.64l-.6 3h12.92z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zm-5.96-6l.6-3h11.72l.6 3z"></svg:path><svg:path fill="currentColor" d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class IcTwotoneAddBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddCardIcon],svg[ic-twotone-add-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h10v-2H4v-6h18V6c0-1.11-.89-2-2-2m0 4H4V6h16zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></svg:path>`,
})
export class IcTwotoneAddCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddChartIcon],svg[ic-twotone-add-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h2v10h-2zm4 6h2v4h-2z"></svg:path><svg:path fill="currentColor" d="M19 19H5V5h9V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2z"></svg:path><svg:path fill="currentColor" d="M7 10h2v7H7zm12-5V3h-2v2h-2v2h2v2h2V7h2V5z"></svg:path>`,
})
export class IcTwotoneAddChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddCircleIcon],svg[ic-twotone-add-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m5 9h-4v4h-2v-4H7v-2h4V7h2v4h4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"></svg:path>`,
})
export class IcTwotoneAddCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddCircleOutlineIcon],svg[ic-twotone-add-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"></svg:path>`,
})
export class IcTwotoneAddCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddCommentIcon],svg[ic-twotone-add-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m0 15.17L18.83 16H4V4h16zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z"></svg:path><svg:path fill="currentColor" d="M4 4v12h14.83L20 17.17V4zm13 7h-4v4h-2v-4H7V9h4V5h2v4h4z" opacity=".3"></svg:path>`,
})
export class IcTwotoneAddCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddHomeIcon],svg[ic-twotone-add-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5L6 10v9h5.08c-.62-4.3 2.72-8 6.92-8v-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M6 19v-9l6-4.5l6 4.5v1c.7 0 1.37.1 2 .29V9l-8-6l-8 6v12h7.68c-.3-.62-.5-1.29-.6-2z"></svg:path><svg:path fill="currentColor" d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z"></svg:path>`,
})
export class IcTwotoneAddHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddHomeWorkIcon],svg[ic-twotone-add-home-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5v1.4l5 3.57v1.11c.33-.05.66-.08 1-.08c1.08 0 2.09.25 3 .68V5zm7 4h-2V7h2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 5h9v6.68c.75.36 1.43.84 2 1.42V3H10v1.97l2 1.43z"></svg:path><svg:path fill="currentColor" d="M17 7h2v2h-2zM8 6l-7 5v10h6v-5h2v5h2.68c-.43-.91-.68-1.92-.68-3v-4H5v5H3v-6.97l5-3.57l5 3.57v1.08c.57-.59 1.25-1.07 2-1.42V11z"></svg:path><svg:path fill="currentColor" d="m8 8.46l-5 3.57V19h2v-5h6v4c0-1.91.76-3.63 2-4.89v-1.08z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z"></svg:path>`,
})
export class IcTwotoneAddHomeWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddIcCallIcon],svg[ic-twotone-add-ic-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17.41c-.88-.07-1.75-.22-2.6-.45l-1.2 1.2c1.21.41 2.48.67 3.8.76zM6.54 4.95h-1.5c.09 1.32.34 2.58.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 20.95c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1c-1.25 0-2.45-.2-3.57-.57c-.1-.03-.21-.05-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1a11.4 11.4 0 0 1-.57-3.57c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17m-3.6-3.99c.85.24 1.72.39 2.6.45v1.5c-1.32-.09-2.6-.35-3.8-.76zM5.03 4.95h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79m10.97 6h2v-3h3v-2h-3v-3h-2v3h-3v2h3z"></svg:path>`,
})
export class IcTwotoneAddIcCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddLinkIcon],svg[ic-twotone-add-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11h8v2H8zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class IcTwotoneAddLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddLocationIcon],svg[ic-twotone-add-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 10.2c0 2.57-2.1 5.79-6.16 9.51l-.34.3l-.34-.31C7.6 15.99 5.5 12.77 5.5 10.2c0-3.84 2.82-6.7 6.5-6.7s6.5 2.85 6.5 6.7" opacity=".3"></svg:path><svg:path fill="currentColor" d="M13 6v3h3v2h-3v3h-2v-3H8V9h3V6zm5 4.2C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.8 6-9.14M12 2c4.2 0 8 3.22 8 8.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2"></svg:path>`,
})
export class IcTwotoneAddLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddLocationAltIcon],svg[ic-twotone-add-location-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M14 4.8V7h3v3h1.41q.09.585.09 1.2c0 2.57-2.1 5.79-6.16 9.51l-.34.3l-.34-.31C7.6 16.99 5.5 13.77 5.5 11.2c0-3.84 2.82-6.7 6.5-6.7c.7 0 1.37.1 2 .3"></svg:path><svg:path fill="currentColor" d="M20 1v3h3v2h-3v3h-2V6h-3V4h3V1zm-8 12c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m2-9.75v2.08c-.62-.22-1.3-.33-2-.33c-3.35 0-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.79 6-9.14c0-.41-.03-.81-.1-1.2h2.02c.05.39.08.79.08 1.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 6.22 7.8 3 12 3c.68 0 1.35.08 2 .25"></svg:path>`,
})
export class IcTwotoneAddLocationAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddModeratorIcon],svg[ic-twotone-add-moderator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.14L6 6.39v4.7c0 3.33 1.76 6.44 4.33 8.04c-1.56-4.89 2.5-9.8 7.67-9.05V6.39z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M10.33 19.13C7.76 17.53 6 14.42 6 11.09v-4.7l6-2.25l6 2.25v3.69c.71.1 1.38.31 2 .6V5l-8-3l-8 3v6.09c0 5.05 3.41 9.76 8 10.91c.03-.01.05-.02.08-.02c-.79-.79-1.4-1.76-1.75-2.85"></svg:path><svg:path fill="currentColor" d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m3 5.5h-2.5V20h-1v-2.5H14v-1h2.5V14h1v2.5H20z"></svg:path>`,
})
export class IcTwotoneAddModeratorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddPhotoAlternateIcon],svg[ic-twotone-add-photo-alternate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.21 16.83l-1.96-2.36L5.5 18h11l-3.54-4.71z"></svg:path><svg:path fill="currentColor" d="M16.5 18h-11l2.75-3.53l1.96 2.36l2.75-3.54zM17 7h-3V6H4v14h14V10h-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 4V1h-2v3h-3v2h3v2.99h2V6h3V4zm-2 16H4V6h10V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10h-2z"></svg:path>`,
})
export class IcTwotoneAddPhotoAlternateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddReactionIcon],svg[ic-twotone-add-reaction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.41 9H18V7h-2V5.08A8 8 0 0 0 12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8c0-1.06-.21-2.07-.59-3M15.5 8c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11S7 10.33 7 9.5S7.67 8 8.5 8m3.5 9.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7 9.5C7 8.67 7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11S7 10.33 7 9.5m5 8c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5m3.5-6.5c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8S14 8.67 14 9.5s.67 1.5 1.5 1.5M22 1h-2v2h-2v2h2v2h2V5h2V3h-2zm-2 11c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8c1.46 0 2.82.4 4 1.08V2.84A9.9 9.9 0 0 0 11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12c0-1.05-.17-2.05-.47-3H19.4c.38.93.6 1.94.6 3"></svg:path>`,
})
export class IcTwotoneAddReactionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddRoadIcon],svg[ic-twotone-add-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2zM18 4h2v9h-2zM4 4h2v16H4zm7 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2z"></svg:path>`,
})
export class IcTwotoneAddRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddShoppingCartIcon],svg[ic-twotone-add-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.41 4l-3.86 7H8.53L4.27 2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7z"></svg:path>`,
})
export class IcTwotoneAddShoppingCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddTaskIcon],svg[ic-twotone-add-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.18L10.59 16.6l-4.24-4.24l1.41-1.41l2.83 2.83l10-10zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45A10 10 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72m7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2z"></svg:path>`,
})
export class IcTwotoneAddTaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddToDriveIcon],svg[ic-twotone-add-to-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11c.17 0 .33.01.49.02L15 3H9l5.68 9.84A6 6 0 0 1 19 11M8.15 4.52L2 15.5L5 21l6.33-10.97zM13.2 15.5H9.9L6.73 21h7.81A5.93 5.93 0 0 1 13 17c0-.52.07-1.02.2-1.5m6.8.5v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class IcTwotoneAddToDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddToHomeScreenIcon],svg[ic-twotone-add-to-home-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 1.01L8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M10 15h2V8H5v2h3.59L3 15.59L4.41 17L10 11.41z"></svg:path>`,
})
export class IcTwotoneAddToHomeScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddToPhotosIcon],svg[ic-twotone-add-to-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H8v12h12zm-1 7h-4v4h-2v-4H9V9h4V5h2v4h4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2m4-4h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M8 4h12v12H8zm7 1h-2v4H9v2h4v4h2v-4h4V9h-4z"></svg:path>`,
})
export class IcTwotoneAddToPhotosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddToQueueIcon],svg[ic-twotone-add-to-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17h18V5H3zm5-7h3V7h2v3h3v2h-3v3h-2v-3H8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3zM21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 14H3V5h18z"></svg:path>`,
})
export class IcTwotoneAddToQueueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddchartIcon],svg[ic-twotone-addchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5v2h-3v3h-2V7h-3V5h3V2h2v3zm-3 14H5V5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2zm-4-6v4h2v-4zm-4 4h2V9h-2zm-2 0v-6H7v6z"></svg:path>`,
})
export class IcTwotoneAddchartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAdfScannerIcon],svg[ic-twotone-adf-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6h8v6H8zm11 8H5c-.55 0-1 .45-1 1v3h16v-3c0-.55-.45-1-1-1m-1 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3M8 6h8v6H8zm12 12H4v-3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z"></svg:path><svg:circle cx="18" cy="16" r="1" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneAdfScannerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAdjustIcon],svg[ic-twotone-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0-7C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"></svg:path>`,
})
export class IcTwotoneAdjustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAdminPanelSettingsIcon],svg[ic-twotone-admin-panel-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 7.58l-5.5-2.4L5 7.58v3.6c0 3.5 2.33 6.74 5.5 7.74c.25-.08.49-.2.73-.3c-.15-.51-.23-1.06-.23-1.62c0-2.97 2.16-5.43 5-5.91z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12s-1.12-.51-1.12-1.12s.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17c.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17" opacity=".3"></svg:path><svg:circle cx="17" cy="15.5" r="1.12" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M18 11.09V6.27L10.5 3L3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82c.55-.13 1.08-.32 1.6-.55A5.97 5.97 0 0 0 17 23c3.31 0 6-2.69 6-6c0-2.97-2.16-5.43-5-5.91M11 17c0 .56.08 1.11.23 1.62c-.24.11-.48.22-.73.3c-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4l5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91m6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></svg:path><svg:path fill="currentColor" d="M17 17.5c-.73 0-2.19.36-2.24 1.08c.5.71 1.32 1.17 2.24 1.17s1.74-.46 2.24-1.17c-.05-.72-1.51-1.08-2.24-1.08"></svg:path>`,
})
export class IcTwotoneAdminPanelSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAdobeIcon],svg[ic-twotone-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.97 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h13.97c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m-1.59 13.98c-.03.01-.07.02-.1.02h-2.26a.49.49 0 0 1-.46-.3l-2.46-5.74c-.02-.06-.08-.09-.13-.07a.12.12 0 0 0-.07.07l-1.53 3.65c-.03.07 0 .14.07.17c.02.01.03.01.05.01h1.68c.1 0 .2.06.24.16l.74 1.64c.07.15-.01.33-.16.4c-.06 0-.1.01-.14.01H6.73c-.15 0-.28-.13-.28-.28c0-.04.01-.07.02-.11l3.9-9.28c.08-.2.28-.33.49-.33h2.25c.22 0 .41.13.49.33l3.92 9.28c.07.14.01.31-.14.37"></svg:path>`,
})
export class IcTwotoneAdobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAdsClickIcon],svg[ic-twotone-ads-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.71 17.99A5.993 5.993 0 0 1 6 12c0-3.31 2.69-6 6-6c3.22 0 5.84 2.53 5.99 5.71l-2.1-.63a3.999 3.999 0 1 0-4.81 4.81zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10m-3.77 4.26L22 15l-10-3l3 10l1.26-3.77l4.27 4.27l1.98-1.98z"></svg:path>`,
})
export class IcTwotoneAdsClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAgricultureIcon],svg[ic-twotone-agriculture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h5c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path><svg:path fill="currentColor" d="M22 14.06V8c0-1.1-.9-2-2-2h-6.29l-1.06-1.06l1.41-1.41l-.71-.71l-3.53 3.53l.71.71l1.41-1.41L13 6.71V9c0 1.1-.9 2-2 2H8.96c-.22-.16-.45-.3-.69-.43l-.4.89l-.46-.21l.4-.9C7.26 10.13 6.64 10 6 10c-.53 0-1.04.11-1.52.26l.34.91l-.47.18l-.35-.93a4.92 4.92 0 0 0-2.43 2.31l.89.4l-.21.46l-.9-.4C1.13 13.74 1 14.36 1 15c0 .53.11 1.04.26 1.52l.91-.34l.18.47l-.93.35a4.92 4.92 0 0 0 2.31 2.43l.4-.89l.46.21l-.4.9c.55.22 1.17.35 1.81.35c.53 0 1.04-.11 1.52-.26l-.34-.91l.47-.18l.35.93a4.92 4.92 0 0 0 2.43-2.31l-.89-.4l.21-.46l.9.4c.1-.26.18-.54.24-.82h5.16c-.02.17-.05.34-.05.51c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.95-.38-1.81-1-2.44M6 18c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m4.87-4c-.04-.18-.08-.35-.13-.52l-.91.34l-.18-.47l.93-.35H11c2.21 0 4-1.79 4-4V8h5v5.05c-.16-.02-.33-.05-.5-.05c-.95 0-1.81.38-2.44 1zm8.63 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path><svg:path fill="currentColor" d="M20 13.05V8h-5v1c0 2.21-1.79 4-4 4h-.42c.14.32.25.65.32 1h6.16c.63-.62 1.49-1 2.44-1c.17 0 .34.03.5.05" opacity=".3"></svg:path>`,
})
export class IcTwotoneAgricultureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirIcon],svg[ic-twotone-air-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3M19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5m-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11"></svg:path>`,
})
export class IcTwotoneAirIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirlineSeatFlatIcon],svg[ic-twotone-airline-seat-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11a1 1 0 0 0 .71-.3c.39-.4.39-1.02-.01-1.41C5.51 9.11 5.26 9 5 9a1 1 0 0 0-.71.3c-.39.4-.39 1.02.01 1.41c.19.18.44.29.7.29m13-2h-7v2h9c0-1.1-.9-2-2-2" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 13a3 3 0 0 0 2.1-5.14C6.51 7.29 5.75 7 5 7a3 3 0 0 0-2.1 5.14c.59.57 1.35.86 2.1.86m-.71-3.7a1 1 0 0 1 1.41-.02c.4.39.4 1.01.02 1.41c-.2.2-.45.31-.72.31c-.26 0-.51-.1-.7-.28c-.4-.4-.4-1.02-.01-1.42M18 7H9v6h13v-2c0-2.21-1.79-4-4-4m-7 4V9h7c1.1 0 2 .9 2 2zm-9 5h6v2h8v-2h6v-2H2z"></svg:path>`,
})
export class IcTwotoneAirlineSeatFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirlineSeatFlatAngledIcon],svg[ic-twotone-airline-seat-flat-angled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 16.64l-4-1.45V17h4zM6 8.5c.15 0 .3-.03.44-.1c.49-.24.7-.84.46-1.34A.98.98 0 0 0 6 6.5a1 1 0 0 0-.9 1.43c.2.42.59.57.9.57m13.16 2.52l-6.69-2.41l-.7 1.91l8.59 3.11l.01-.02c.19-.51.17-1.05-.06-1.53a2 2 0 0 0-1.15-1.06" opacity=".3"></svg:path><svg:path fill="currentColor" d="M1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89l-19.02-6.86zm8.5 3.05l4 1.44V17h-4zm9.84-6.05l-8.56-3.09l-2.08 5.66l12.36 4.47l.69-1.89a4 4 0 0 0-2.41-5.15m.53 4.46l-.01.02l-8.59-3.11l.7-1.91l6.69 2.41c.52.19.93.56 1.15 1.05c.23.49.25 1.04.06 1.54M6 10.5a3.01 3.01 0 0 0 2.71-4.3A3.01 3.01 0 0 0 6 4.5c-.44 0-.88.1-1.3.3a2.99 2.99 0 0 0-1.4 4c.51 1.07 1.58 1.7 2.7 1.7m-.94-3.34c.05-.14.18-.4.51-.56a.99.99 0 0 1 1.33.46c.24.5.02 1.1-.47 1.34a.98.98 0 0 1-1.32-.46a1 1 0 0 1-.05-.78"></svg:path>`,
})
export class IcTwotoneAirlineSeatFlatAngledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirlineSeatIndividualSuiteIcon],svg[ic-twotone-airline-seat-individual-suite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="11" r="1" fill="currentColor" opacity=".3"></svg:circle><svg:path fill="currentColor" d="M19 9h-6v6h8v-4c0-1.1-.9-2-2-2" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V7H1v10h22v-6c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z"></svg:path>`,
})
export class IcTwotoneAirlineSeatIndividualSuiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirlineSeatLegroomExtraIcon],svg[ic-twotone-airline-seat-legroom-extra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3m18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5l-3.41-6.98A2.02 2.02 0 0 0 14.51 9H11V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7l3.72-1.7c.77-.36 1.1-1.3.7-2.06"></svg:path>`,
})
export class IcTwotoneAirlineSeatLegroomExtraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirlineSeatLegroomNormalIcon],svg[ic-twotone-airline-seat-legroom-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12V3H3v9c0 2.76 2.24 5 5 5h6v-2H8c-1.66 0-3-1.34-3-3m15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v7h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5"></svg:path>`,
})
export class IcTwotoneAirlineSeatLegroomNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirlineSeatLegroomReducedIcon],svg[ic-twotone-airline-seat-legroom-reduced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.97 19.2c.18.96-.55 1.8-1.47 1.8H14v-3l1-4H9c-1.65 0-3-1.35-3-3V3h6v6h5c1.1 0 2 .9 2 2l-2 7h1.44c.73 0 1.39.49 1.53 1.2M5 12V3H3v9c0 2.76 2.24 5 5 5h4v-2H8c-1.66 0-3-1.34-3-3"></svg:path>`,
})
export class IcTwotoneAirlineSeatLegroomReducedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirlineSeatReclineExtraIcon],svg[ic-twotone-airline-seat-recline-extra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79c.63-.9 1.88-1.12 2.79-.49c.9.64 1.12 1.88.49 2.79c-.64.9-1.88 1.12-2.79.49M16 19H8.93c-1.48 0-2.74-1.08-2.96-2.54L4 7H2l1.99 9.76A5.01 5.01 0 0 0 8.94 21H16zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38a2.2 2.2 0 0 0-.99-.06h-.02a2.27 2.27 0 0 0-1.84 2.61l1.35 5.92A3.01 3.01 0 0 0 9.83 18h6.85l3.82 3l1.5-1.5z"></svg:path>`,
})
export class IcTwotoneAirlineSeatReclineExtraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirlineSeatReclineNormalIcon],svg[ic-twotone-airline-seat-recline-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.59 5.41c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0s.78 2.05 0 2.83c-.79.79-2.05.79-2.83 0M6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3m14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5c-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5z"></svg:path>`,
})
export class IcTwotoneAirlineSeatReclineNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirlineStopsIcon],svg[ic-twotone-airline-stops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.21 9.21C15.93 10.78 13.45 13.3 13 17h2v2H9v-2h2c-.5-4.5-4.37-8-9-8V7c4.39 0 8.22 2.55 10 6.3c1.13-2.43 2.99-4.25 4.78-5.52L14 5h7v7z"></svg:path>`,
})
export class IcTwotoneAirlineStopsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirlinesIcon],svg[ic-twotone-airlines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.05 6L5.8 18h11.54l2.25-12zm.45 8a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17.34 18H5.8l8.25-12h5.54zM13 4L2 20h17l3-16zm1.5 5a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class IcTwotoneAirlinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirplaneTicketIcon],svg[ic-twotone-airplane-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.01 8.54C5.2 9.23 6 10.52 6 12c0 1.47-.81 2.77-2 3.46V18h16V6H4zm4.13 3.99l1.26.99l2.39-.64l-2.4-4.16l1.4-.38l4.01 3.74l2.44-.65a.967.967 0 0 1 1.18.68a.99.99 0 0 1-.69 1.19l-8.86 2.36l-1.66-2.88z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20.19 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.81-2-1.81-2M20 18H4v-2.54c1.19-.69 2-1.99 2-3.46c0-1.48-.8-2.77-1.99-3.46L4 6h16z"></svg:path><svg:path fill="currentColor" d="M17.73 13.3c.52-.15.82-.68.69-1.19a.967.967 0 0 0-1.18-.68l-2.44.65l-4.01-3.74l-1.4.38l2.4 4.16l-2.39.64l-1.26-.99l-.93.25l1.66 2.88z"></svg:path>`,
})
export class IcTwotoneAirplaneTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirplanemodeActiveIcon],svg[ic-twotone-airplanemode-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1l4 1v-1.5L13.5 19v-5.5z"></svg:path>`,
})
export class IcTwotoneAirplanemodeActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirplanemodeInactiveIcon],svg[ic-twotone-airplanemode-inactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7.67V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V9l8.5 5v2l-4.49-1.32zm9.28 14.94l1.41-1.41l-7.69-7.7l-3.94-3.94l-6.75-6.75l-1.42 1.41l6.38 6.38L2 14v2l8.5-2.5V19L8 20.5V22l4-1l4 1v-1.5L13.5 19v-2.67z"></svg:path>`,
})
export class IcTwotoneAirplanemodeInactiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirplayIcon],svg[ic-twotone-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22h12l-6-6z"></svg:path><svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcTwotoneAirplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAirportShuttleIcon],svg[ic-twotone-airport-shuttle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1h7.56c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H21v-2H3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 5H3a2 2 0 0 0-2 2v9h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zm-2 2h1l3 3h-4zM9 7h4v3H9zM3 7h4v3H3zm3 10.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m12 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M21 14h-.78c-.55-.61-1.34-1-2.22-1s-1.67.39-2.22 1H8.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3v-2h18z"></svg:path>`,
})
export class IcTwotoneAirportShuttleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAlarmIcon],svg[ic-twotone-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-3.86 0-7 3.14-7 7s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7m3.75 10.85L11 14V8h1.5v5.25l4 2.37z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12.5 8H11v6l4.75 2.85l.75-1.23l-4-2.37zm4.837-6.19l4.607 3.845l-1.28 1.535l-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7"></svg:path>`,
})
export class IcTwotoneAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAlarmAddIcon],svg[ic-twotone-alarm-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-3.86 0-7 3.14-7 7s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7m4 8h-3v3h-2v-3H8v-2h3V9h2v3h3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m17.337 1.81l4.607 3.845l-1.28 1.535l-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7m1-11h-2v3H8v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class IcTwotoneAlarmAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAlarmOffIcon],svg[ic-twotone-alarm-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.04 6.29C10.66 6.11 11.32 6 12 6c3.86 0 7 3.14 7 7c0 .68-.11 1.34-.29 1.96l1.56 1.56c.47-1.08.73-2.27.73-3.52A9 9 0 0 0 8.47 4.72zm7.297-4.48l4.607 3.845l-1.28 1.535l-4.61-3.843zm1.903 16.51l-1.43-1.43l-9.7-9.7l-1.43-1.43l-.74-.74L4.52 3.6l-1.5-1.5l-1.41 1.41l1.37 1.37l-.92.77l1.28 1.54l1.06-.88l.8.8A8.96 8.96 0 0 0 3 13a9 9 0 0 0 9 9c2.25 0 4.31-.83 5.89-2.2l2.1 2.1l1.41-1.41zM12 20c-3.86 0-7-3.14-7-7c0-1.7.61-3.26 1.62-4.47l9.85 9.85A6.96 6.96 0 0 1 12 20M7.48 3.73l.46-.38l-1.28-1.54l-.6.5z"></svg:path>`,
})
export class IcTwotoneAlarmOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAlarmOnIcon],svg[ic-twotone-alarm-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-3.86 0-7 3.14-7 7s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7m-1.47 10.64l-3.18-3.18l1.06-1.06l2.13 2.13l4.93-4.95l1.06 1.06z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M10.54 14.53L8.41 12.4l-1.06 1.06l3.18 3.18l6-6l-1.06-1.06zm6.797-12.72l4.607 3.845l-1.28 1.535l-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7"></svg:path>`,
})
export class IcTwotoneAlarmOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAlbumIcon],svg[ic-twotone-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m0 12.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5m0 5.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcTwotoneAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAlignHorizontalCenterIcon],svg[ic-twotone-align-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z"></svg:path>`,
})
export class IcTwotoneAlignHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAlignHorizontalLeftIcon],svg[ic-twotone-align-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22H2V2h2zM22 7H6v3h16zm-6 7H6v3h10z"></svg:path>`,
})
export class IcTwotoneAlignHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAlignHorizontalRightIcon],svg[ic-twotone-align-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h2v20h-2zM2 10h16V7H2zm6 7h10v-3H8z"></svg:path>`,
})
export class IcTwotoneAlignHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAlignVerticalBottomIcon],svg[ic-twotone-align-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2v-2h20zM10 2H7v16h3zm7 6h-3v10h3z"></svg:path>`,
})
export class IcTwotoneAlignVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAlignVerticalCenterIcon],svg[ic-twotone-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h-5V6h-3v5h-4V3H7v8H1.84v2H7v8h3v-8h4v5h3v-5h5z"></svg:path>`,
})
export class IcTwotoneAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAlignVerticalTopIcon],svg[ic-twotone-align-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v2H2V2zM7 22h3V6H7zm7-6h3V6h-3z"></svg:path>`,
})
export class IcTwotoneAlignVerticalTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAllInboxIcon],svg[ic-twotone-all-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 10h3.13c.21.78.67 1.47 1.27 2H5zm14 2h-4.4c.6-.53 1.06-1.22 1.27-2H19zm0-4h-5v1c0 1.07-.93 2-2 2s-2-.93-2-2V8H5V5h14zm-5 7v1c0 .47-.19.9-.48 1.25c-.37.45-.92.75-1.52.75s-1.15-.3-1.52-.75c-.29-.35-.48-.78-.48-1.25v-1H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4zm-9 2h3.13c.02.09.06.17.09.25c.24.68.65 1.28 1.18 1.75H5zm14 2h-4.4c.54-.47.95-1.07 1.18-1.75c.03-.08.07-.16.09-.25H19z"></svg:path><svg:path fill="currentColor" d="M8.13 10H5v2h4.4c-.6-.53-1.06-1.22-1.27-2m6.47 2H19v-2h-3.13c-.21.78-.67 1.47-1.27 2m-6.38 5.25c-.03-.08-.06-.16-.09-.25H5v2h4.4c-.53-.47-.94-1.07-1.18-1.75m7.65-.25c-.02.09-.06.17-.09.25c-.23.68-.64 1.28-1.18 1.75H19v-2z" opacity=".3"></svg:path>`,
})
export class IcTwotoneAllInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAllInclusiveIcon],svg[ic-twotone-all-inclusive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L7.8 14.39c-.64.64-1.49.99-2.4.99c-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1l1.51-1.34L9.22 8.2A5.37 5.37 0 0 0 5.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l7.03-6.24c.64-.64 1.49-.99 2.4-.99c1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01l-1.51 1.34l1.27 1.12a5.4 5.4 0 0 0 3.82 1.57c2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37"></svg:path>`,
})
export class IcTwotoneAllInclusiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAllOutIcon],svg[ic-twotone-all-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="5" fill="currentColor" opacity=".3"></svg:circle><svg:path fill="currentColor" d="M4 4v4l4-4zm12 0l4 4V4zm4 16v-4l-4 4zM4 20h4l-4-4zm15-8c0-3.87-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7m-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class IcTwotoneAllOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAltRouteIcon],svg[ic-twotone-alt-route-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.78 11.16l-1.42 1.42a7.3 7.3 0 0 1-1.79-2.94l1.94-.49c.32.89.77 1.5 1.27 2.01M11 6L7 2L3 6h3.02c.02.81.08 1.54.19 2.17l1.94-.49C8.08 7.2 8.03 6.63 8.02 6zm10 0l-4-4l-4 4h2.99c-.1 3.68-1.28 4.75-2.54 5.88c-.5.44-1.01.92-1.45 1.55c-.34-.49-.73-.88-1.13-1.24L9.46 13.6c.93.85 1.54 1.54 1.54 3.4v5h2v-5c0-2.02.71-2.66 1.79-3.63c1.38-1.24 3.08-2.78 3.2-7.37z"></svg:path>`,
})
export class IcTwotoneAltRouteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAlternateEmailIcon],svg[ic-twotone-alternate-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.95h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10s-10 4.48-10 10s4.48 10 10 10m0-7c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"></svg:path>`,
})
export class IcTwotoneAlternateEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAmpStoriesIcon],svg[ic-twotone-amp-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h6v11H9z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7 19h10V4H7zM9 6h6v11H9zM3 6h2v11H3zm16 0h2v11h-2z"></svg:path>`,
})
export class IcTwotoneAmpStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAnalyticsIcon],svg[ic-twotone-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h14v14H5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M7 12h2v5H7zm8-5h2v10h-2zm-4 7h2v3h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class IcTwotoneAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAnchorIcon],svg[ic-twotone-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 15l1.55 1.55c-.96 1.69-3.33 3.04-5.55 3.37V11h3V9h-3V7.82C14.16 7.4 15 6.3 15 5c0-1.65-1.35-3-3-3S9 3.35 9 5c0 1.3.84 2.4 2 2.82V9H8v2h3v8.92c-2.22-.33-4.59-1.68-5.55-3.37L7 15l-4-3v3c0 3.88 4.92 7 9 7s9-3.12 9-7v-3zM12 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class IcTwotoneAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAndroidIcon],svg[ic-twotone-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.46 11.46 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 0 0 1 18h22a10.78 10.78 0 0 0-5.4-8.52M7 15.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m10 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path>`,
})
export class IcTwotoneAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAnimationIcon],svg[ic-twotone-animation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12a5.002 5.002 0 0 0 7 7c-3.87 0-7-3.13-7-7m10-8c-1.13 0-2.16.37-3 1c3.87.01 7 3.14 7 7a5.002 5.002 0 0 0-4-8" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 7c-.6 0-1.17.11-1.7.3c-.19.53-.3 1.1-.3 1.7c0 2.76 2.24 5 5 5c.6 0 1.17-.11 1.7-.3c.19-.53.3-1.1.3-1.7c0-2.76-2.24-5-5-5" opacity=".3"></svg:path><svg:path fill="currentColor" d="M8 9a5.002 5.002 0 0 0 7 7c-3.87-.01-7-3.14-7-7" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15 2c-2.71 0-5.05 1.54-6.22 3.78a7.06 7.06 0 0 0-3 3A7.01 7.01 0 0 0 2 15c0 3.87 3.13 7 7 7c2.71 0 5.05-1.54 6.22-3.78a7.06 7.06 0 0 0 3-3A7.01 7.01 0 0 0 22 9c0-3.87-3.13-7-7-7M9 20a5.002 5.002 0 0 1-4-8c0 3.87 3.13 7 7 7c-.84.63-1.88 1-3 1m3-3a5.002 5.002 0 0 1-4-8c0 3.86 3.13 6.99 7 7c-.84.63-1.88 1-3 1m4.7-3.3c-.53.19-1.1.3-1.7.3c-2.76 0-5-2.24-5-5c0-.6.11-1.17.3-1.7c.53-.19 1.1-.3 1.7-.3c2.76 0 5 2.24 5 5c0 .6-.11 1.17-.3 1.7M19 12c0-3.86-3.13-6.99-7-7a5.002 5.002 0 0 1 7 7"></svg:path>`,
})
export class IcTwotoneAnimationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAnnouncementIcon],svg[ic-twotone-announcement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v13.17l.59-.59l.58-.58H20V4zm9 11h-2v-2h2zm0-4h-2V5h2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17l-.59.59l-.58.58V4h16zM11 5h2v6h-2zm0 8h2v2h-2z"></svg:path>`,
})
export class IcTwotoneAnnouncementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAodIcon],svg[ic-twotone-aod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-9 6h8v1.5H8zm1 3h6v1.5H9z"></svg:path><svg:path fill="currentColor" d="M7 21h10v-1H7zM7 3v1h10V3z" opacity=".3"></svg:path>`,
})
export class IcTwotoneAodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneApartmentIcon],svg[ic-twotone-apartment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11V3H7v4H3v14h8v-4h2v4h8V11zM7 19H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm4 4H9v-2h2zm0-4H9V9h2zm0-4H9V5h2zm4 8h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2zm4 12h-2v-2h2zm0-4h-2v-2h2z"></svg:path>`,
})
export class IcTwotoneApartmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneApiIcon],svg[ic-twotone-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 12l-2 2l-2-2l2-2zm-2-6l2.12 2.12l2.5-2.5L12 1L7.38 5.62l2.5 2.5zm-6 6l2.12-2.12l-2.5-2.5L1 12l4.62 4.62l2.5-2.5zm12 0l-2.12 2.12l2.5 2.5L23 12l-4.62-4.62l-2.5 2.5zm-6 6l-2.12-2.12l-2.5 2.5L12 23l4.62-4.62l-2.5-2.5z"></svg:path>`,
})
export class IcTwotoneApiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAppBlockingIcon],svg[ic-twotone-app-blocking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m-2.5 4A2.5 2.5 0 0 1 18 9.5c.42 0 .8.11 1.15.29l-3.36 3.36c-.18-.35-.29-.73-.29-1.15m2.5 2.5c-.42 0-.8-.11-1.15-.29l3.36-3.36c.18.35.29.73.29 1.15a2.5 2.5 0 0 1-2.5 2.5"></svg:path><svg:path fill="currentColor" d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2zM7 3h10v1H7zm10 18H7v-1h10z"></svg:path><svg:path fill="currentColor" d="M7 3h10v1H7zm0 17h10v1H7z" opacity=".3"></svg:path>`,
})
export class IcTwotoneAppBlockingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAppRegistrationIcon],svg[ic-twotone-app-registration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm12 0h4v4h-4zm-5 13.86V20h2.1l5.98-5.97l-2.12-2.12zm3-5.83V10h-4v4h2.03zm6.85-.47l-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06l2.12 2.12l1.06-1.06c.2-.2.2-.51 0-.71"></svg:path>`,
})
export class IcTwotoneAppRegistrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAppSettingsAltIcon],svg[ic-twotone-app-settings-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.81 12.74l-.82-.63v-.22l.8-.63c.16-.12.2-.34.1-.51l-.85-1.48a.4.4 0 0 0-.35-.2q-.075 0-.15.03l-.95.38c-.08-.05-.11-.07-.19-.11l-.15-1.01a.41.41 0 0 0-.4-.36h-1.71c-.2 0-.37.15-.4.34l-.14 1.01c-.03.02-.07.03-.1.05l-.09.06l-.95-.38a.4.4 0 0 0-.5.17l-.85 1.48c-.1.17-.06.39.1.51l.8.63v.23l-.8.63a.39.39 0 0 0-.1.51l.85 1.48c.07.13.21.2.35.2q.075 0 .15-.03l.95-.37c.08.05.12.07.2.11l.15 1.01c.03.2.2.34.4.34h1.71c.2 0 .37-.15.4-.34l.15-1.01c.03-.02.07-.03.1-.05l.09-.06l.95.38a.4.4 0 0 0 .5-.17l.85-1.48a.39.39 0 0 0-.1-.51M18 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2zM7 3h10v1H7zm10 18H7v-1h10z"></svg:path><svg:path fill="currentColor" d="M7 3h10v1H7zm0 17h10v1H7z" opacity=".3"></svg:path>`,
})
export class IcTwotoneAppSettingsAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAppShortcutIcon],svg[ic-twotone-app-shortcut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20h10v1H7zM7 3h10v1H7z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2zM7 3h10v1H7zm10 18H7v-1h10zm3.38-11.38L21 11l.62-1.38L23 9l-1.38-.62L21 7l-.62 1.38L19 9z"></svg:path><svg:path fill="currentColor" d="m16 8l-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zm5 5l-.62 1.38L19 15l1.38.62L21 17l.62-1.38L23 15l-1.38-.62z"></svg:path>`,
})
export class IcTwotoneAppShortcutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAppleIcon],svg[ic-twotone-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"></svg:path>`,
})
export class IcTwotoneAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneApprovalIcon],svg[ic-twotone-approval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h12v2H6zm6-12c-1.66 0-3 1.34-3 3l3 4l3-4c0-1.66-1.34-3-3-3" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 2C9.24 2 7 4.24 7 7l5 7l5-7c0-2.76-2.24-5-5-5m0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3zm6 3H6c-1.1 0-2 .9-2 2v6h16v-6c0-1.1-.9-2-2-2m0 4H6v-2h12z"></svg:path>`,
})
export class IcTwotoneApprovalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAppsIcon],svg[ic-twotone-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"></svg:path>`,
})
export class IcTwotoneAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAppsOutageIcon],svg[ic-twotone-apps-outage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6 6h4v-4h-4zm3-20c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m.5 8h-1V7h1zm0-2h-1V2h1zM16 14h4v-2.07c-.33.05-.66.07-1 .07c-1.07 0-2.09-.24-3-.68zM10 4v4h2.68c-.44-.91-.68-1.93-.68-3c0-.34.02-.67.07-1z"></svg:path>`,
})
export class IcTwotoneAppsOutageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArchitectureIcon],svg[ic-twotone-architecture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.36 18.78L6.61 21l1.62-1.54l2.77-7.6c-.68-.17-1.28-.51-1.77-.98zm8.41-7.9c-.49.47-1.1.81-1.77.98l2.77 7.6L17.39 21l.26-2.22zM15 8c0-1.3-.84-2.4-2-2.82V3h-2v2.18C9.84 5.6 9 6.7 9 8c0 1.66 1.34 3 3 3s3-1.34 3-3m-3 1c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcTwotoneArchitectureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArchiveIcon],svg[ic-twotone-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V8H5zm5.55-6v-3h2.91v3H16l-4 4l-4-4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M6.24 5h11.52l.81.97H5.44zM19 19H5V8h14z"></svg:path>`,
})
export class IcTwotoneArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAreaChartIcon],svg[ic-twotone-area-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 16.95l-7-5.45L8 17l-3-2.4V11l2.44 1.83l4.96-6.95L16.3 9H19z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m17 7l-5-4l-5 7l-4-3v13h18V7zm2 9.95l-7-5.45L8 17l-3-2.4V11l2.44 1.83l4.96-6.95L16.3 9H19z"></svg:path>`,
})
export class IcTwotoneAreaChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowBackIcon],svg[ic-twotone-arrow-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"></svg:path>`,
})
export class IcTwotoneArrowBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowBackIosIcon],svg[ic-twotone-arrow-back-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z"></svg:path>`,
})
export class IcTwotoneArrowBackIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowBackIosNewIcon],svg[ic-twotone-arrow-back-ios-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"></svg:path>`,
})
export class IcTwotoneArrowBackIosNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowCircleDownIcon],svg[ic-twotone-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m0 12l-4-4h3V8h2v4h3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 10V8h-2v4H8l4 4l4-4z"></svg:path>`,
})
export class IcTwotoneArrowCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowCircleLeftIcon],svg[ic-twotone-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12c0 4.41-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8m-8 1h4v-2h-4V8l-4 4l4 4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 12c0 4.41-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8m2 0c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10s10-4.48 10-10m-10 1h4v-2h-4V8l-4 4l4 4z"></svg:path>`,
})
export class IcTwotoneArrowCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowCircleRightIcon],svg[ic-twotone-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12c0-4.41 3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8m8-1H8v2h4v3l4-4l-4-4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M4 12c0-4.41 3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8m-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2S2 6.48 2 12m10-1H8v2h4v3l4-4l-4-4z"></svg:path>`,
})
export class IcTwotoneArrowCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowCircleUpIcon],svg[ic-twotone-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-1-8v4h2v-4h3l-4-4l-4 4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10m-1-10v4h2v-4h3l-4-4l-4 4z"></svg:path>`,
})
export class IcTwotoneArrowCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowDownwardIcon],svg[ic-twotone-arrow-downward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"></svg:path>`,
})
export class IcTwotoneArrowDownwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowDropDownIcon],svg[ic-twotone-arrow-drop-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 10l5 5l5-5z"></svg:path>`,
})
export class IcTwotoneArrowDropDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowDropDownCircleIcon],svg[ic-twotone-arrow-drop-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m0 11l-4-4h8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-5l4-4H8z"></svg:path>`,
})
export class IcTwotoneArrowDropDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowDropUpIcon],svg[ic-twotone-arrow-drop-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 14l5-5l5 5z"></svg:path>`,
})
export class IcTwotoneArrowDropUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowForwardIcon],svg[ic-twotone-arrow-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></svg:path>`,
})
export class IcTwotoneArrowForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowForwardIosIcon],svg[ic-twotone-arrow-forward-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"></svg:path>`,
})
export class IcTwotoneArrowForwardIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowLeftIcon],svg[ic-twotone-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 7l-5 5l5 5z"></svg:path>`,
})
export class IcTwotoneArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowOutwardIcon],svg[ic-twotone-arrow-outward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"></svg:path>`,
})
export class IcTwotoneArrowOutwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowRightIcon],svg[ic-twotone-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 17l5-5l-5-5z"></svg:path>`,
})
export class IcTwotoneArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowRightAltIcon],svg[ic-twotone-arrow-right-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></svg:path>`,
})
export class IcTwotoneArrowRightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArrowUpwardIcon],svg[ic-twotone-arrow-upward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"></svg:path>`,
})
export class IcTwotoneArrowUpwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArtTrackIcon],svg[ic-twotone-art-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7h8v2h-8zm0 4h8v2h-8zm0 4h8v2h-8zM4 17h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2m1.25-4.25l1.25 1.51L8.25 12l2.25 3h-7z"></svg:path>`,
})
export class IcTwotoneArtTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneArticleIcon],svg[ic-twotone-article-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zm9 12H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-2-6H7v-2h10zm0-4H7V7h10zm-3 8H7v-2h7z"></svg:path>`,
})
export class IcTwotoneArticleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAspectRatioIcon],svg[ic-twotone-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19.01h18V4.99H3zM14 15h3v-3h2v5h-5zM5 7h5v2H7v3H5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18zM7 9h3V7H5v5h2zm12 3h-2v3h-3v2h5z"></svg:path>`,
})
export class IcTwotoneAspectRatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAssessmentIcon],svg[ic-twotone-assessment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zm4 12H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"></svg:path>`,
})
export class IcTwotoneAssessmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAssignmentIcon],svg[ic-twotone-assignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zm9 12H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.01 2.01 0 0 0-1.44 1.19c-.1.24-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55c.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M19 19H5V5h14z"></svg:path>`,
})
export class IcTwotoneAssignmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAssignmentIndIcon],svg[ic-twotone-assignment-ind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5H5v14h14zm-7 1c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3m6 12H6v-1.53c0-2.5 3.97-3.58 6-3.58s6 1.08 6 3.58z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20.66 3.88c-.14-.21-.33-.4-.54-.54c-.11-.07-.22-.13-.34-.18c-.24-.1-.5-.16-.78-.16h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c.28 0 .54-.06.78-.16c.12-.05.23-.11.34-.18c.21-.14.4-.33.54-.54c.21-.32.34-.71.34-1.12V5c0-.41-.13-.8-.34-1.12M12 2.75c.22 0 .41.1.55.25c.12.13.2.31.2.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5c.14-.15.33-.25.55-.25M19 19H5V5h14zm-7-7c1.65 0 3-1.35 3-3s-1.35-3-3-3s-3 1.35-3 3s1.35 3 3 3m0-2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0 2.88c-2.03 0-6 1.08-6 3.58V18h12v-1.53c0-2.51-3.97-3.59-6-3.59M8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12z"></svg:path>`,
})
export class IcTwotoneAssignmentIndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAssignmentLateIcon],svg[ic-twotone-assignment-late-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zm8 12h-2v-2h2zm0-4h-2V7h2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm8-4h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.01 2.01 0 0 0-1.44 1.19c-.1.24-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55c.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M19 19H5V5h14z"></svg:path>`,
})
export class IcTwotoneAssignmentLateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAssignmentReturnIcon],svg[ic-twotone-assignment-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zm11 9h-4v3l-5-5l5-5v3h4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m12 7l-5 5l5 5v-3h4v-4h-4zm7-4h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.01 2.01 0 0 0-1.44 1.19c-.1.24-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55c.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M19 19H5V5h14z"></svg:path>`,
})
export class IcTwotoneAssignmentReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAssignmentReturnedIcon],svg[ic-twotone-assignment-returned-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm5-7V8h4v4h3l-5 5l-5-5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 12h-3V8h-4v4H7l5 5zm2-9h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.01 2.01 0 0 0-1.44 1.19c-.1.24-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55c.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M19 19H5V5h14z"></svg:path>`,
})
export class IcTwotoneAssignmentReturnedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAssignmentTurnedInIcon],svg[ic-twotone-assignment-turned-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm2.41-7.41L10 14.17l6.59-6.59L18 9l-8 8l-4-4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.01 2.01 0 0 0-1.44 1.19c-.1.24-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55c.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M19 19H5V5h14z"></svg:path>`,
})
export class IcTwotoneAssignmentTurnedInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAssistWalkerIcon],svg[ic-twotone-assist-walker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12.5" cy="4.5" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m19.77 17.72l-.64-6.37A1.49 1.49 0 0 0 17.64 10H16c-1.5-.02-2.86-.54-3.76-1.44l-2-1.98A1.95 1.95 0 0 0 8.83 6c-.51 0-1.02.2-1.41.59L4.08 9.91c-.53.68-.51 1.57-.21 2.13l1.43 2.8l-3.15 4.05l1.57 1.24L7.4 15.4l-.17-1.36l.77.71V20h2v-6.12l-2.12-2.12l2.36-2.36c.94.94 1.72 1.82 3.59 2.32L13 20h1.5l.41-3.5h3.18l.14 1.22c-.44.26-.73.74-.73 1.28c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.54-.29-1.02-.73-1.28M15.09 15l.41-3.5h2l.41 3.5z"></svg:path>`,
})
export class IcTwotoneAssistWalkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAssistantIcon],svg[ic-twotone-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.83 18l.59.59L12 20.17l1.59-1.59l.58-.58H19V4H5v14zm.29-8.88L12 5l1.88 4.12L18 11l-4.12 1.88L12 17l-1.88-4.12L6 11z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 20h4l3 3l3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 4h14v14h-4.83l-.59.59L12 20.17l-1.59-1.59l-.58-.58H5zm7 13l1.88-4.12L18 11l-4.12-1.88L12 5l-1.88 4.12L6 11l4.12 1.88z"></svg:path>`,
})
export class IcTwotoneAssistantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAssistantDirectionIcon],svg[ic-twotone-assistant-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-4.99 0-9 4.01-9 9s4.01 9 9 9s9-4.01 9-9s-4.01-9-9-9m.54 16.8c-.35.27-.79.27-1.15 0L4.2 12.58a.93.93 0 0 1 0-1.16l7.19-7.22c.35-.27.79-.27 1.15 0l7.19 7.22c.36.27.36.8 0 1.16z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11s11-4.9 11-11S18.1 1 12 1m0 20c-4.99 0-9-4.01-9-9s4.01-9 9-9s9 4.01 9 9s-4.01 9-9 9"></svg:path><svg:path fill="currentColor" d="M19.73 11.42L12.54 4.2c-.36-.27-.8-.27-1.15 0L4.2 11.42c-.27.36-.27.8 0 1.16l7.19 7.22c.36.27.8.27 1.15 0l7.19-7.22c.36-.36.36-.89 0-1.16M13.5 14.5V12H10v3H8v-4c0-.6.4-1 1-1h4.5V7.5L17 11z"></svg:path>`,
})
export class IcTwotoneAssistantDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAssistantPhotoIcon],svg[ic-twotone-assistant-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.24 12l.4 2H18V8h-5.24l-.4-2H7v6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7z"></svg:path>`,
})
export class IcTwotoneAssistantPhotoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAssuredWorkloadIcon],svg[ic-twotone-assured-workload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.47 6h11.06L12 3.24z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 10h2v7H5zm6 0h2v7h-2zm11-4L12 1L2 6v2h20zM6.47 6L12 3.24L17.53 6zM2 19v2h12.4c-.21-.64-.32-1.31-.36-2zm17-6.74V10h-2v3.26zM20 14l-4 2v2.55c0 2.52 1.71 4.88 4 5.45c2.29-.57 4-2.93 4-5.45V16zm-.72 7l-2.03-2.03l1.06-1.06l.97.97l2.41-2.38l1.06 1.06z"></svg:path>`,
})
export class IcTwotoneAssuredWorkloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAtmIcon],svg[ic-twotone-atm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 13.5h2V15H7v-5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v5h1.5zm0-3h2V12h-2zm13.5 0h1V14h1.5v-3.51h1V15H22v-5c0-.55-.45-1-1-1h-4.5c-.55 0-1 .45-1 1v5H17zM10.25 15h1.5v-4.5H14V9H8v1.5h2.25z"></svg:path>`,
})
export class IcTwotoneAtmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAttachEmailIcon],svg[ic-twotone-attach-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 6l8 5l8-5v3h2V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h10v-2H3zm16-2l-8 5l-8-5z"></svg:path><svg:path fill="currentColor" d="M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4z"></svg:path>`,
})
export class IcTwotoneAttachEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAttachFileIcon],svg[ic-twotone-attach-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 23c3.04 0 5.5-2.46 5.5-5.5V6h-1.5v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5"></svg:path>`,
})
export class IcTwotoneAttachFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAttachMoneyIcon],svg[ic-twotone-attach-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 17.1c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4s-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79"></svg:path>`,
})
export class IcTwotoneAttachMoneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAttachmentIcon],svg[ic-twotone-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 16H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h12.5a2.5 2.5 0 0 1 0 5H9c-.55 0-1-.45-1-1s.45-1 1-1h9.5V9.5H9a2.5 2.5 0 0 0 0 5h10.5c2.21 0 4-1.79 4-4s-1.79-4-4-4H7c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5h11.5z"></svg:path>`,
})
export class IcTwotoneAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAttractionsIcon],svg[ic-twotone-attractions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11.98" cy="12.02" r="1.5" fill="currentColor" opacity=".3"></svg:circle><svg:path fill="currentColor" d="M20.15 14.42c.23-.77.35-1.58.35-2.42s-.12-1.65-.35-2.42c.78-.6 1.02-1.7.51-2.58a1.994 1.994 0 0 0-2.49-.85a8.53 8.53 0 0 0-4.18-2.42C13.85 2.75 13.01 2 12 2s-1.85.75-1.98 1.73a8.56 8.56 0 0 0-4.19 2.42c-.91-.38-1.98-.03-2.49.85s-.27 1.98.51 2.58c-.23.77-.35 1.58-.35 2.42s.12 1.65.35 2.42c-.78.6-1.02 1.7-.51 2.58s1.58 1.23 2.49.85c.4.42.83.79 1.3 1.12L5.78 22h1.88l.98-2.19c.44.19.9.34 1.38.46c.13.98.97 1.73 1.98 1.73s1.85-.75 1.98-1.73c.46-.11.91-.26 1.34-.44L16.3 22h1.88l-1.34-3c.48-.34.93-.72 1.34-1.15c.91.38 1.99.03 2.49-.85s.26-1.98-.52-2.58m-6.59 4.33c-.37-.46-.93-.75-1.56-.75s-1.2.29-1.57.75c-.4-.09-.79-.21-1.16-.37l1.43-3.19a3.52 3.52 0 0 0 2.56.02l1.42 3.18c-.36.15-.73.27-1.12.36m-3.08-6.73c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m8.23 1.99c-.61.07-1.18.41-1.52.99c-.32.56-.34 1.2-.12 1.75c-.28.29-.58.55-.9.79l-1.5-3.35c.49-.59.78-1.34.78-2.16c0-1.89-1.55-3.41-3.46-3.41s-3.46 1.53-3.46 3.41c0 .8.28 1.54.75 2.13l-1.52 3.39c-.31-.23-.6-.48-.87-.76c.26-.56.24-1.22-.09-1.79c-.34-.59-.93-.94-1.56-.99c-.22-.68-.33-1.4-.33-2.15c0-.64.09-1.26.25-1.85c.66-.03 1.3-.38 1.65-1c.37-.63.35-1.38.01-1.98c.92-.98 2.11-1.69 3.45-2.03c.34.59.99 1 1.73 1s1.39-.4 1.73-1c1.34.34 2.53 1.07 3.44 2.05c-.32.59-.33 1.33.03 1.95c.35.6.96.95 1.6 1c.16.59.25 1.21.25 1.86c0 .75-.12 1.47-.34 2.15"></svg:path>`,
})
export class IcTwotoneAttractionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAttributionIcon],svg[ic-twotone-attribution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m0 1c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5m2.75 9.5h-1.5V19h-2.5v-4.5h-1.5V9.88c0-.92 1.84-1.38 2.75-1.38s2.75.47 2.75 1.38z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m0-11.5c-.91 0-2.75.46-2.75 1.38v4.62h1.5V19h2.5v-4.5h1.5V9.88c0-.91-1.84-1.38-2.75-1.38"></svg:path><svg:circle cx="12" cy="6.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneAttributionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAudioFileIcon],svg[ic-twotone-audio-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4H6v16h12V9h-5zm3 7v2h-3v3.75c0 1.24-1.01 2.25-2.25 2.25S8.5 17.99 8.5 16.75s1.01-2.25 2.25-2.25c.46 0 .89.14 1.25.38V11z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"></svg:path><svg:path fill="currentColor" d="M12 14.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2h-4z"></svg:path>`,
})
export class IcTwotoneAudioFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAudiotrackIcon],svg[ic-twotone-audiotrack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="17" r="2" fill="currentColor" opacity=".3"></svg:circle><svg:path fill="currentColor" d="M10 21c2.21 0 4-1.79 4-4V7h4V3h-6v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></svg:path>`,
})
export class IcTwotoneAudiotrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutoAwesomeIcon],svg[ic-twotone-auto-awesome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.99 11.01L9 8.83l-.99 2.18l-2.18.99l2.18.99l.99 2.18l.99-2.18l2.18-.99z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm0 6l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25zm-7.5-5.5L9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12zm-1.51 3.49L9 15.17l-.99-2.18L5.83 12l2.18-.99L9 8.83l.99 2.18l2.18.99z"></svg:path>`,
})
export class IcTwotoneAutoAwesomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutoAwesomeMosaicIcon],svg[ic-twotone-auto-awesome-mosaic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h4v14H5zm10 10h4v4h-4zm0-10h4v4h-4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2m6 14H5V5h4zM19 3h-6v8h8V5c0-1.1-.9-2-2-2m0 6h-4V5h4zm-6 12h6c1.1 0 2-.9 2-2v-6h-8zm2-6h4v4h-4z"></svg:path>`,
})
export class IcTwotoneAutoAwesomeMosaicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutoAwesomeMotionIcon],svg[ic-twotone-auto-awesome-motion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h8v8h-8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M14 2H4c-1.1 0-2 .9-2 2v10h2V4h10zm6 8h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2m0 10h-8v-8h8z"></svg:path><svg:path fill="currentColor" d="M18 6H8c-1.1 0-2 .9-2 2v10h2V8h10z"></svg:path>`,
})
export class IcTwotoneAutoAwesomeMotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutoDeleteIcon],svg[ic-twotone-auto-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7H4v10h5.08c-.05-.33-.08-.66-.08-1c0-2.38 1.19-4.47 3-5.74z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7m-7 7c0 .34.03.67.08 1H4V7h8v3.26c-1.81 1.27-3 3.36-3 5.74m7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path><svg:path fill="currentColor" d="M16.5 12H15v5l3.6 2.1l.8-1.2l-2.9-1.7z"></svg:path>`,
})
export class IcTwotoneAutoDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutoFixHighIcon],svg[ic-twotone-auto-fix-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.415 18.167l7.17-7.17l1.414 1.414l-7.17 7.17z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zM8.5 7l.94-2.06L11.5 4l-2.06-.94L8.5 1l-.94 2.06L5.5 4l2.06.94zM20 12.5l-.94 2.06l-2.06.94l2.06.94l.94 2.06l.94-2.06L23 15.5l-2.06-.94zm-2.29-3.38l-2.83-2.83c-.2-.19-.45-.29-.71-.29s-.51.1-.71.29L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42M5.83 19.59l-1.41-1.41L11.59 11L13 12.41zM14.41 11L13 9.59l1.17-1.17l1.41 1.41z"></svg:path>`,
})
export class IcTwotoneAutoFixHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutoFixNormalIcon],svg[ic-twotone-auto-fix-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.415 18.167l7.17-7.17l1.414 1.414l-7.17 7.17z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-2.29 2.12l-2.83-2.83c-.2-.19-.45-.29-.71-.29s-.51.1-.71.29L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42M5.83 19.59l-1.41-1.41L11.59 11L13 12.41zM14.41 11L13 9.59l1.17-1.17l1.41 1.41z"></svg:path>`,
})
export class IcTwotoneAutoFixNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutoFixOffIcon],svg[ic-twotone-auto-fix-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.417 18.174l5.466-5.466l1.414 1.414l-5.466 5.466z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-5.83 1.42l1.41 1.41l-1.46 1.46l1.41 1.41l2.17-2.17a.996.996 0 0 0 0-1.41l-2.83-2.83a.98.98 0 0 0-.7-.29c-.26 0-.51.1-.71.29l-2.17 2.17l1.41 1.41zM2.81 2.81L1.39 4.22l7.07 7.07l-6.17 6.17a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l6.17-6.17l7.07 7.07l1.41-1.41zm3.02 16.78l-1.41-1.41l5.46-5.46l1.41 1.41z"></svg:path>`,
})
export class IcTwotoneAutoFixOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutoGraphIcon],svg[ic-twotone-auto-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.06 9.94L12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94zm4.5-5l1.09-2.41L12 5.5L9.59 4.41L8.5 2L7.41 4.41L5 5.5l2.41 1.09zm-4 11.5l6-6.01l4 4L23 8.93l-1.41-1.41l-7.09 7.97l-4-4L3 19z"></svg:path>`,
})
export class IcTwotoneAutoGraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutoModeIcon],svg[ic-twotone-auto-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.03 3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73.19 3.31.88 4.61 1.92zM11 3.06V1.05c-2.29.2-4.36 1.12-6.03 2.51l1.42 1.42A8.93 8.93 0 0 1 11 3.06M4.98 6.39L3.56 4.97C2.17 6.64 1.26 8.71 1.05 11h2.01c.19-1.73.88-3.31 1.92-4.61M20.94 11h2.01c-.21-2.29-1.12-4.36-2.51-6.03l-1.42 1.42A8.93 8.93 0 0 1 20.94 11M7 12l3.44 1.56L12 17l1.56-3.44L17 12l-3.44-1.56L12 7l-1.56 3.44z"></svg:path><svg:path fill="currentColor" d="M12 21a8.96 8.96 0 0 1-7.46-4H7v-2H1v6h2v-2.7c1.99 2.84 5.27 4.7 9 4.7c4.87 0 9-3.17 10.44-7.56l-1.96-.45C19.25 18.48 15.92 21 12 21"></svg:path>`,
})
export class IcTwotoneAutoModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutoStoriesIcon],svg[ic-twotone-auto-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.71v9.91c1.14-.41 2.31-.62 3.5-.62s2.36.21 3.5.62v-9.9C8.89 6.25 7.7 6 6.5 6c-1.22 0-2.39.24-3.5.71" opacity=".3"></svg:path><svg:path fill="currentColor" d="m19 .5l-5 5V15l5-4.5z"></svg:path><svg:path fill="currentColor" d="M22.47 5.2c-.47-.24-.96-.44-1.47-.61v12.03c-1.14-.41-2.31-.62-3.5-.62c-1.9 0-3.78.54-5.5 1.58V5.48C10.38 4.55 8.51 4 6.5 4c-1.79 0-3.48.44-4.97 1.2c-.33.16-.53.51-.53.88v12.08c0 .58.47.99 1 .99q.24 0 .48-.12C3.69 18.4 5.05 18 6.5 18c2.07 0 3.98.82 5.5 2c1.52-1.18 3.43-2 5.5-2c1.45 0 2.81.4 4.02 1.04q.24.12.48.12c.52 0 1-.41 1-.99V6.08c0-.37-.2-.72-.53-.88M10 16.62C8.86 16.21 7.69 16 6.5 16s-2.36.21-3.5.62V6.71C4.11 6.24 5.28 6 6.5 6c1.2 0 2.39.25 3.5.72z"></svg:path>`,
})
export class IcTwotoneAutoStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutofpsSelectIcon],svg[ic-twotone-autofps-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.03 6.3h-.06l-1.02 2.89h2.1zM3 17h2v5H3z"></svg:path><svg:path fill="currentColor" d="M12 15c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6m-.63-10h1.25l2.63 7h-1.21l-.63-1.79h-2.83L9.96 12H8.74zM7 17h2v5H7zm4 0h2v5h-2zm4 0h6v5h-6z"></svg:path>`,
})
export class IcTwotoneAutofpsSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutorenewIcon],svg[ic-twotone-autorenew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6v3l4-4l-4-4v3c-4.42 0-8 3.58-8 8c0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.9 5.9 0 0 1 6 12c0-3.31 2.69-6 6-6m6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8c0 3.31-2.69 6-6 6v-3l-4 4l4 4v-3c4.42 0 8-3.58 8-8c0-1.57-.46-3.03-1.24-4.26"></svg:path>`,
})
export class IcTwotoneAutorenewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAvTimerIcon],svg[ic-twotone-av-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 0 0 0-18h-1v4h2V5.08c3.39.49 6 3.39 6 6.92c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41l-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9"></svg:path><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="12" r="1" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneAvTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBabyChangingStationIcon],svg[ic-twotone-baby-changing-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8v2h-3L8.31 8.82L7 12.75V22H3V12l1.58-4.63A2.003 2.003 0 0 1 7.3 6.18l4.15 1.83zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m1 18h12v-2H9zm10.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M13 12c0-.55-.45-1-1-1H9v2h2v1c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3h-2v2h-2z"></svg:path>`,
})
export class IcTwotoneBabyChangingStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBackHandIcon],svg[ic-twotone-back-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16c0 3.31-2.69 6-6 6c-2.61 0-4.95-1.59-5.91-4.01l-2.6-6.54l.53.14c.46.12.83.46 1 .9L7 15h2V4.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V4c0-.28.22-.5.5-.5s.5.22.5.5v8h2V7c0-.28.22-.5.5-.5s.5.22.5.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M21 7a2.5 2.5 0 0 0-3-2.45V4a2.5 2.5 0 0 0-3.17-2.41A2.51 2.51 0 0 0 12.5 0c-1.23 0-2.25.89-2.46 2.06A2.5 2.5 0 0 0 7 4.5v5.89c-.34-.31-.76-.54-1.22-.66l-.77-.21c-.83-.23-1.7.09-2.19.83c-.38.57-.4 1.31-.15 1.95l2.56 6.43A8.35 8.35 0 0 0 13 24c4.42 0 8-3.58 8-8zm-2 9c0 3.31-2.69 6-6 6c-2.61 0-4.95-1.59-5.91-4.01l-2.6-6.54l.53.14c.46.12.83.46 1 .9L7 15h2V4.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V4c0-.28.22-.5.5-.5s.5.22.5.5v8h2V7c0-.28.22-.5.5-.5s.5.22.5.5z"></svg:path>`,
})
export class IcTwotoneBackHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBackpackIcon],svg[ic-twotone-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zM7.5 12v2h7v2h2v-4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 4.14V2h-3v2h-4V2H7v2.14c-1.72.45-3 2-3 3.86v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.86-1.28-3.41-3-3.86M18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zM7.5 12v2h7v2h2v-4z"></svg:path>`,
})
export class IcTwotoneBackpackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBackspaceIcon],svg[ic-twotone-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.06 5L2.4 12l4.67 7H22V5zq.015 0 0 0M9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12L19 15.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H7.07L2.4 12l4.66-7H22zm-11.59-2L14 13.41L17.59 17L19 15.59L15.41 12L19 8.41L17.59 7L14 10.59L10.41 7L9 8.41L12.59 12L9 15.59z"></svg:path>`,
})
export class IcTwotoneBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBackupIcon],svg[ic-twotone-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.21 12.04l-1.53-.11l-.3-1.5A5.484 5.484 0 0 0 12 6C9.94 6 8.08 7.14 7.12 8.96l-.5.95l-1.07.11A3.99 3.99 0 0 0 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3c0-1.55-1.22-2.86-2.79-2.96m-5.76.96v3h-2.91v-3H8l4-4l4 4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.47 5.47 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3M8 13h2.55v3h2.9v-3H16l-4-4z"></svg:path>`,
})
export class IcTwotoneBackupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBackupTableIcon],svg[ic-twotone-backup-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11h5v5h-5zm-7 0h5v5H4zm0-7h12v5H4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 6v14H6v2h14c1.1 0 2-.9 2-2V6z"></svg:path><svg:path fill="currentColor" d="M18 16V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2M4 4h12v5H4zm5 12H4v-5h5zm2-5h5v5h-5z"></svg:path>`,
})
export class IcTwotoneBackupTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBadgeIcon],svg[ic-twotone-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13.5h4V12h-4zm0 3h4V15h-4zM20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-9-3h2v5h-2zm9 16H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5zM9 15c.83 0 1.5-.67 1.5-1.5S9.83 12 9 12s-1.5.67-1.5 1.5S8.17 15 9 15m2.08 1.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39"></svg:path><svg:path fill="currentColor" d="M13 11h-2c-1.1 0-2-.9-2-2H4v11h16V9h-5c0 1.1-.9 2-2 2m-4 1c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12m3 6H6v-.43c0-.6.36-1.15.92-1.39c.64-.28 1.34-.43 2.08-.43s1.44.15 2.08.43c.55.24.92.78.92 1.39zm6-1.5h-4V15h4zm0-3h-4V12h4z" opacity=".3"></svg:path>`,
})
export class IcTwotoneBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBakeryDiningIcon],svg[ic-twotone-bakery-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.6 8.67l-2.01.8c-.22.09-.34.31-.31.54l2.4 5.98h1.23l-.62-6.9a.503.503 0 0 0-.69-.42M3.07 16.1c-.27.53.29 1.09.82.83l1.68-.84l-1.08-2.71zm10.29-9.11h-2.71a.5.5 0 0 0-.5.54l.77 8.45h2.17l.77-8.45a.505.505 0 0 0-.5-.54m5.05 2.48l-2.01-.8a.5.5 0 0 0-.68.42l-.62 6.9h1.23l2.4-5.98c.02-.23-.1-.45-.32-.54m1.11 3.92l-1.08 2.7l1.68.84c.52.26 1.09-.3.82-.83z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20.5 10.94c.13-.32.1-.23.15-.39c.3-1.21-.34-2.47-1.5-2.93l-2.01-.8c-.46-.18-.95-.21-1.41-.12c-.11-.33-.29-.63-.52-.89c-.48-.52-1.15-.81-1.85-.81h-2.71c-.71 0-1.38.29-1.85.81c-.24.26-.42.56-.53.88c-.46-.09-.95-.06-1.41.12l-2.01.8c-1.16.46-1.8 1.72-1.5 2.93l.15.38C1.1 15.55 1 15.55 1 16.38c0 .91.46 1.74 1.24 2.22c1.42.88 2.49.14 4-.61h11.53c1.52.76 1.86 1.01 2.63 1.01c1 0 2.61-.77 2.61-2.61c-.01-.85-.13-.88-2.51-5.45M3.88 16.93c-.53.26-1.09-.3-.82-.83l1.41-2.72l1.08 2.71zm3.8-.94l-2.4-5.98c-.03-.23.09-.45.31-.54l2.01-.8c.31-.12.65.08.68.42l.62 6.9zm5.41 0h-2.17l-.77-8.45a.5.5 0 0 1 .5-.54h2.71a.5.5 0 0 1 .5.54zm3.23 0h-1.23l.62-6.9c.03-.33.37-.54.68-.42l2.01.8c.22.09.34.31.31.54zm3.8.94l-1.68-.84l1.08-2.7l1.41 2.71c.28.53-.29 1.09-.81.83"></svg:path>`,
})
export class IcTwotoneBakeryDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBalanceIcon],svg[ic-twotone-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="5" r="1" fill="currentColor" opacity=".3"></svg:circle><svg:path fill="currentColor" d="M13 7.83c.85-.3 1.53-.98 1.83-1.83H18l-3 7c0 1.66 1.57 3 3.5 3s3.5-1.34 3.5-3l-3-7h2V4h-6.17c-.41-1.17-1.52-2-2.83-2s-2.42.83-2.83 2H3v2h2l-3 7c0 1.66 1.57 3 3.5 3S9 14.66 9 13L6 6h3.17c.3.85.98 1.53 1.83 1.83V19H2v2h20v-2h-9zM20.37 13h-3.74l1.87-4.36zm-13 0H3.63L5.5 8.64zM12 6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcTwotoneBalanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBalconyIcon],svg[ic-twotone-balcony-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16H5v4h2zm4 0H9v4h2zm-5-6v4h5V4.08C8.16 4.56 6 7.03 6 10m4 2H8v-2h2zm3-7.92V14h5v-4c0-2.97-2.16-5.44-5-5.92M16 12h-2v-2h2zm-1 4h-2v4h2zm4 0h-2v4h2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M10 10v2H8v-2zm6 2v-2h-2v2zm5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4zM7 16H5v4h2zm4 0H9v4h2zm0-11.92C8.16 4.56 6 7.03 6 10v4h5zM13 14h5v-4c0-2.97-2.16-5.44-5-5.92zm2 2h-2v4h2zm4 0h-2v4h2z"></svg:path>`,
})
export class IcTwotoneBalconyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBallotIcon],svg[ic-twotone-ballot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14h3v3H7zm0-7h3v3H7zM5 19h14V5H5zm8-11.5h5v2h-5zm0 7h5v2h-5zM6 6h5v5H6zm0 7h5v5H6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M13 7.5h5v2h-5zm0 7h5v2h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM11 6H6v5h5zm-1 4H7V7h3zm1 3H6v5h5zm-1 4H7v-3h3z"></svg:path>`,
})
export class IcTwotoneBallotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBarChartIcon],svg[ic-twotone-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"></svg:path>`,
})
export class IcTwotoneBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBarcodeIcon],svg[ic-twotone-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6h1v12H2zm2 0h2v12H4zm4 0h1v12H8zm2 0h3v12h-3zm4 0h1v12h-1zm3 0h1v12h-1zm2 0h1v12h-1zm2 0h1v12h-1z"></svg:path>`,
})
export class IcTwotoneBarcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBatchPredictionIcon],svg[ic-twotone-batch-prediction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20.5h-2V19h2zm0-2.5h-2c0-1.5-2.5-3-2.5-5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 2-2.5 3.5-2.5 5" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 8H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-4 12.5h-2V19h2zm0-2.5h-2c0-1.5-2.5-3-2.5-5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 2-2.5 3.5-2.5 5m5-11.5H6C6 5.67 6.67 5 7.5 5h9c.83 0 1.5.67 1.5 1.5m-1-3H7C7 2.67 7.67 2 8.5 2h7c.83 0 1.5.67 1.5 1.5"></svg:path>`,
})
export class IcTwotoneBatchPredictionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBathroomIcon],svg[ic-twotone-bathroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h16V4H4zm5-2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-8-4c0-2.76 2.24-5 5-5s5 2.24 5 5v1H7z" opacity=".3"></svg:path><svg:circle cx="15" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="17" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H4V4h16z"></svg:path><svg:path fill="currentColor" d="M17 11c0-2.76-2.24-5-5-5s-5 2.24-5 5v1h10zm-8.46-.5c.24-1.69 1.7-3 3.46-3s3.22 1.31 3.47 3z"></svg:path><svg:circle cx="9" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneBathroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBathtubIcon],svg[ic-twotone-bathtub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15h16v4H4z" opacity=".3"></svg:path><svg:circle cx="7" cy="7" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08c-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08c0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.25 2.25 0 0 0 5 12.25V13H2v6c0 1.1.9 2 2 2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1c1.1 0 2-.9 2-2v-6zm0 6H4v-4h16z"></svg:path>`,
})
export class IcTwotoneBathtubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBattery0BarIcon],svg[ic-twotone-battery-0-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h6v14H9z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1m-2 1H9v14h6z"></svg:path>`,
})
export class IcTwotoneBattery0BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBattery1BarIcon],svg[ic-twotone-battery-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h6v12H9z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1m-2 1H9v12h6z"></svg:path>`,
})
export class IcTwotoneBattery1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBattery2BarIcon],svg[ic-twotone-battery-2-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h6v10H9z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1m-2 1H9v10h6z"></svg:path>`,
})
export class IcTwotoneBattery2BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBattery20Icon],svg[ic-twotone-battery-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17z"></svg:path><svg:path fill="currentColor" fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10z"></svg:path>`,
})
export class IcTwotoneBattery20Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBattery3BarIcon],svg[ic-twotone-battery-3-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h6v8H9z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1m-2 1H9v8h6z"></svg:path>`,
})
export class IcTwotoneBattery3BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBattery30Icon],svg[ic-twotone-battery-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10z"></svg:path><svg:path fill="currentColor" d="M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15z"></svg:path>`,
})
export class IcTwotoneBattery30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBattery4BarIcon],svg[ic-twotone-battery-4-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h6v6H9z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1m-2 1H9v6h6z"></svg:path>`,
})
export class IcTwotoneBattery4BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBattery5BarIcon],svg[ic-twotone-battery-5-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h6v4H9z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1m-2 1H9v4h6z"></svg:path>`,
})
export class IcTwotoneBattery5BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBattery50Icon],svg[ic-twotone-battery-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V13h10z"></svg:path><svg:path fill="currentColor" d="M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13z"></svg:path>`,
})
export class IcTwotoneBattery50Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
