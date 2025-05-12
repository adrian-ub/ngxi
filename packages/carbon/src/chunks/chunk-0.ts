import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbon3dCursorIcon],svg[carbon-3d-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 4H4v9.01h2V6h7V4z" fill="currentColor"></svg:path><svg:path d="M29.49 13.12l-9-5a1 1 0 0 0-1 0l-9 5A1 1 0 0 0 10 14v10a1 1 0 0 0 .52.87l9 5A1 1 0 0 0 20 30a1.05 1.05 0 0 0 .49-.13l9-5A1 1 0 0 0 30 24V14a1 1 0 0 0-.51-.88zM19 27.3l-7-3.89v-7.72l7 3.89zm1-9.45L13.06 14L20 10.14L26.94 14zm8 5.56l-7 3.89v-7.72l7-3.89z" fill="currentColor"></svg:path>`,
})
export class Carbon3dCursorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbon3dCursorAltIcon],svg[carbon-3d-cursor-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4z" fill="currentColor"></svg:path><svg:path d="M15 7h2v7h-2z" fill="currentColor"></svg:path><svg:path d="M7 15h7v2H7z" fill="currentColor"></svg:path><svg:path d="M15 18h2v7h-2z" fill="currentColor"></svg:path><svg:path d="M18 15h7v2h-7z" fill="currentColor"></svg:path>`,
})
export class Carbon3dCursorAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbon3dCurveAutoColonIcon],svg[carbon-3d-curve-auto-colon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.5 8h10.6a5 5 0 1 0 0-2H9.5a5.5 5.5 0 0 0 0 11h11a3.5 3.5 0 0 1 0 7h-8.6a5 5 0 1 0 0 2h8.6a5.5 5.5 0 0 0 0-11h-11a3.5 3.5 0 0 1 0-7zM25 4a3 3 0 1 1-3 3a3 3 0 0 1 3-3zM7 28a3 3 0 1 1 3-3a3 3 0 0 1-3 3z" fill="currentColor"></svg:path>`,
})
export class Carbon3dCurveAutoColonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbon3dCurveAutoVesselsIcon],svg[carbon-3d-curve-auto-vessels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17 11a3 3 0 0 1 3-3h.1a5 5 0 1 0 0-2H20a5 5 0 0 0-5 5v1h-2a3 3 0 0 1-3-3V7a5 5 0 0 0-5-5H4v2h1a3 3 0 0 1 3 3v2a5 5 0 0 0 5 5h2v7a3 3 0 0 1-3 3h-.1a5 5 0 1 0 0 2h.1a5 5 0 0 0 5-5h2.5a2.5 2.5 0 0 1 2.5 2.5a4.51 4.51 0 0 0 4.5 4.5H28v-2h-1.5a2.5 2.5 0 0 1-2.5-2.5a4.51 4.51 0 0 0-4.5-4.5H17zm8-7a3 3 0 1 1-3 3a3 3 0 0 1 3-3zM7 28a3 3 0 1 1 3-3a3 3 0 0 1-3 3z" fill="currentColor"></svg:path>`,
})
export class Carbon3dCurveAutoVesselsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbon3dCurveManualIcon],svg[carbon-3d-curve-manual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 21a3 3 0 0 1-3 3h-.1a5 5 0 1 0 0 2h.1a5 5 0 0 0 5-5zm-8 7a3 3 0 1 1 3-3a3 3 0 0 1-3 3z" fill="currentColor"></svg:path><svg:path d="M15 13h2v6h-2z" fill="currentColor"></svg:path><svg:path d="M25 2a5 5 0 0 0-4.9 4H20a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3h.1A5 5 0 1 0 25 2zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3z" fill="currentColor"></svg:path>`,
})
export class Carbon3dCurveManualIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbon3dIcaIcon],svg[carbon-3d-ica-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 14h-5a2 2 0 0 1-2-2V4a2 2 0 0 1 .59-1.42A3.57 3.57 0 0 1 10 2h5v2h-5v8h5z" fill="currentColor"></svg:path><svg:path d="M4 6h2v8H4z" fill="currentColor"></svg:path><svg:path d="M4 2h2v2H4z" fill="currentColor"></svg:path><svg:path d="M27.45 19.11l-6-3a1 1 0 0 0-.9 0l-6 3A1 1 0 0 0 14 20v7a1 1 0 0 0 .55.89l6 3a1 1 0 0 0 .9 0l6-3A1 1 0 0 0 28 27v-7a1 1 0 0 0-.55-.89zm-6.45-1L24.76 20L21 21.88L17.24 20zm-5 3.5l4 2v4.76l-4-2zm6 6.76v-4.75l4-2v4.76z" fill="currentColor"></svg:path><svg:path d="M23 2h-4a2 2 0 0 0-2 2v10h2v-4h4v4h2V4a2 2 0 0 0-2-2zm-4 6V4h4v4z" fill="currentColor"></svg:path>`,
})
export class Carbon3dIcaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbon3dMprToggleIcon],svg[carbon-3d-mpr-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 2H2v9h2V4h7V2z" fill="currentColor"></svg:path><svg:path d="M2 21v9h9v-2H4v-7H2z" fill="currentColor"></svg:path><svg:path d="M30 11V2h-9v2h7v7h2z" fill="currentColor"></svg:path><svg:path d="M21 30h9v-9h-2v7h-7v2z" fill="currentColor"></svg:path><svg:path d="M25.49 10.13l-9-5a1 1 0 0 0-1 0l-9 5A1 1 0 0 0 6 11v10a1 1 0 0 0 .51.87l9 5a1 1 0 0 0 1 0l9-5A1 1 0 0 0 26 21V11a1 1 0 0 0-.51-.87zM16 7.14L22.94 11L16 14.86L9.06 11zM8 12.7l7 3.89v7.71l-7-3.89zm9 11.6v-7.71l7-3.89v7.71z" fill="currentColor"></svg:path>`,
})
export class Carbon3dMprToggleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbon3dPrintMeshIcon],svg[carbon-3d-print-mesh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M29.976 15.783l-2-9a1 1 0 0 0-.421-.615l-6-4A1 1 0 0 0 21 2H11a1 1 0 0 0-.555.168l-6 4a1 1 0 0 0-.421.615l-2 9a1.002 1.002 0 0 0 .018.504l3 10a1 1 0 0 0 .67.671l10 3h.006a.979.979 0 0 0 .564 0h.005l10-3a1 1 0 0 0 .671-.67l3-10a1.002 1.002 0 0 0 .018-.505zm-19.05.833l-3.91-7.819l7.282 2.648zM16 12.497L19.589 18H12.41zM19.382 20L16 26.764L12.618 20zm-1.68-8.555l7.281-2.648l-3.91 7.82zm.488-2.305l3.096-4.747l3.515 2.343zM16 8.836L12.846 4h6.308zm-2.19.304L7.2 6.736l3.514-2.343zm-4.844 8.03l-4.802-1.801l1.201-5.402zm5.104 10.207l-6.502-1.95l3.128-4.798zm7.233-6.748l3.129 4.797l-6.502 1.951zm5.332-10.662l1.2 5.402l-4.802 1.8zM4.537 17.645l4.595 1.722l-2.793 4.283zm21.124 6.005l-2.793-4.283l4.595-1.722z" fill="currentColor"></svg:path>`,
})
export class Carbon3dPrintMeshIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbon3dSoftwareIcon],svg[carbon-3d-software-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.49 13.115l-9-5a1 1 0 0 0-1 0l-9 5A1.008 1.008 0 0 0 2 14v9.995a1 1 0 0 0 .52.87l9 5A1.004 1.004 0 0 0 12 30a1.056 1.056 0 0 0 .49-.135l9-5A.992.992 0 0 0 22 24V14a1.008 1.008 0 0 0-.51-.885zM11 27.295l-7-3.89v-7.72l7 3.89zm1-9.45L5.06 14L12 10.135l6.94 3.86zm8 5.56l-7 3.89v-7.72l7-3.89z" fill="currentColor"></svg:path><svg:path d="M30 6h-4V2h-2v4h-4v2h4v4h2V8h4V6z" fill="currentColor"></svg:path>`,
})
export class Carbon3dSoftwareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbon3rdPartyConnectedIcon],svg[carbon-3rd-party-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M26 22a3.86 3.86 0 0 0-2 .57l-3.09-3.1a6 6 0 0 0 0-6.94L24 9.43a3.86 3.86 0 0 0 2 .57a4 4 0 1 0-4-4a3.86 3.86 0 0 0 .57 2l-3.1 3.09a6 6 0 0 0-6.94 0L9.43 8A3.86 3.86 0 0 0 10 6a4 4 0 1 0-4 4a3.86 3.86 0 0 0 2-.57l3.09 3.1a6 6 0 0 0 0 6.94L8 22.57A3.86 3.86 0 0 0 6 22a4 4 0 1 0 4 4a3.86 3.86 0 0 0-.57-2l3.1-3.09a6 6 0 0 0 6.94 0l3.1 3.09a3.86 3.86 0 0 0-.57 2a4 4 0 1 0 4-4zm-10-2a4 4 0 1 1 4-4a4 4 0 0 1-4 4z" fill="currentColor"></svg:path>`,
})
export class Carbon3rdPartyConnectedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbon4kIcon],svg[carbon-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.03v4h-2v-4H8v6h4v4h2v-10zm12.19 0H22l-3 4.39v-4.39h-2v10h2V18.3l.91-1.33L22 21.03h2.19l-2.99-5.62z"></svg:path><svg:path fill="currentColor" d="M28 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M4 8v16h24V8Z"></svg:path>`,
})
export class Carbon4kIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbon4kFilledIcon],svg[carbon-4k-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M14 21h-2v-4H8v-6h2v4h2v-4h2Zm10.19 0H22l-2.09-4.06l-.91 1.33V21h-2V11h2v4.39L22 11h2.19l-3 4.38Z"></svg:path>`,
})
export class Carbon4kFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAcceptActionUsageIcon],svg[carbon-accept-action-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.002 11.032L8 11l6.998 5l-6.995 5H23a1 1 0 0 0 1-1v-7.968a1 1 0 0 0-.998-1"></svg:path><svg:path fill="currentColor" d="M21 30H11c-4.963 0-9-4.037-9-9V11c0-4.963 4.037-9 9-9h10c4.963 0 9 4.037 9 9v10c0 4.963-4.037 9-9 9M11 4c-3.86 0-7 3.14-7 7v10c0 3.86 3.14 7 7 7h10c3.86 0 7-3.14 7-7V11c0-3.86-3.14-7-7-7z"></svg:path>`,
})
export class CarbonAcceptActionUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAccessibilityIcon],svg[carbon-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.55 26.11l-3.05 1.52L23.66 21H15a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0v4h7v-2h-5v-2a4 4 0 0 0-8 0v1a9 9 0 1 0 8.77 11h-2.06A7 7 0 1 1 11 16v3a4 4 0 0 0 4 4h7.34l3.16 7.37l4.95-2.48zM15.5 8A3.5 3.5 0 1 1 19 4.5A3.5 3.5 0 0 1 15.5 8m0-5A1.5 1.5 0 1 0 17 4.5A1.5 1.5 0 0 0 15.5 3"></svg:path>`,
})
export class CarbonAccessibilityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAccessibilityAltIcon],svg[carbon-accessibility-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 14v-2H9v2h5v2.734l-3.868 6.77l1.736.992L15.58 18h.84l3.712 6.496l1.736-.992L18 16.734V14z"></svg:path><svg:circle cx="16" cy="9" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonAccessibilityAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAccessibilityColorIcon],svg[carbon-accessibility-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M16 24a10.655 10.655 0 0 1-9.97-7.758L5.97 16l.06-.242A10.655 10.655 0 0 1 16 8a10.655 10.655 0 0 1 9.97 7.758l.06.242l-.06.242A10.655 10.655 0 0 1 16 24m-7.965-8A8.6 8.6 0 0 0 16 22a8.6 8.6 0 0 0 7.965-6A8.6 8.6 0 0 0 16 10a8.6 8.6 0 0 0-7.965 6"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonAccessibilityColorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAccessibilityColorFilledIcon],svg[carbon-accessibility-color-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10a8.6 8.6 0 0 0-7.965 6A8.6 8.6 0 0 0 16 22a8.6 8.6 0 0 0 7.965-6A8.6 8.6 0 0 0 16 10m0 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 22a10.65 10.65 0 0 1-9.97-7.758L5.97 16l.06-.242A10.65 10.65 0 0 1 16 8a10.65 10.65 0 0 1 9.97 7.758l.06.242l-.06.242A10.65 10.65 0 0 1 16 24"></svg:path><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="none" d="M16 20a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:path fill="none" d="M16 24a10.655 10.655 0 0 1-9.97-7.758L5.97 16l.06-.242A10.655 10.655 0 0 1 16 8a10.655 10.655 0 0 1 9.97 7.758l.06.242l-.06.242A10.655 10.655 0 0 1 16 24m-7.965-8A8.6 8.6 0 0 0 16 22a8.6 8.6 0 0 0 7.965-6A8.6 8.6 0 0 0 16 10a8.6 8.6 0 0 0-7.965 6"></svg:path>`,
})
export class CarbonAccessibilityColorFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAccountIcon],svg[carbon-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14h11v2H8Zm0 5h13v2H8Z"></svg:path><svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v2H4V6ZM4 26V10h24v16Z"></svg:path>`,
})
export class CarbonAccountIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAccumulationIceIcon],svg[carbon-accumulation-ice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v8l1 2l1-2V8zm-4 0v10l1 2l1-2V8z"></svg:path><svg:path fill="currentColor" d="M28 4a2 2 0 0 0-2 2v20H6v-4h4v-2H6v-4h4v-2H6v-4h8v4l1 2l1-2V8H6V6a2 2 0 0 0-2-2H2v2h2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6h2V4Z"></svg:path>`,
})
export class CarbonAccumulationIceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAccumulationPrecipitationIcon],svg[carbon-accumulation-precipitation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm4-8a3.9 3.9 0 0 1-4-3.777a3.9 3.9 0 0 1 .653-2.064l2.517-3.745a1.038 1.038 0 0 1 1.66 0l2.485 3.696A3.97 3.97 0 0 1 24 8.223A3.9 3.9 0 0 1 20 12m0-7.237l-1.656 2.463a1.9 1.9 0 0 0-.344.997A1.9 1.9 0 0 0 20 10a1.9 1.9 0 0 0 2-1.777a2 2 0 0 0-.375-1.047z"></svg:path><svg:path fill="currentColor" d="M28 4a2 2 0 0 0-2 2v20H6V10h2v8l1 2l1-2v-8h2v4l1 2l1-2V8H6V6a2 2 0 0 0-2-2H2v2h2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6h2V4Z"></svg:path>`,
})
export class CarbonAccumulationPrecipitationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAccumulationRainIcon],svg[carbon-accumulation-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4a2 2 0 0 0-2 2v2h-2a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 20 5a.99.99 0 0 0-.947.679A3.44 3.44 0 0 1 16 8a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 12 5a.97.97 0 0 0-.947.679A3.44 3.44 0 0 1 8 8H6V6a2 2 0 0 0-2-2H2v2h2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6h2V4ZM6 26v-4h4v-2H6v-4h4v-2H6v-4h2a4.93 4.93 0 0 0 4-1.987a5.02 5.02 0 0 0 8 0A4.93 4.93 0 0 0 24 10h2v16Z"></svg:path>`,
})
export class CarbonAccumulationRainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAccumulationSnowIcon],svg[carbon-accumulation-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm2 12h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm4-12h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M28 4a2 2 0 0 0-2 2v20H6v-4h4v-2H6v-4h4v-2H6v-4h4V8H6V6a2 2 0 0 0-2-2H2v2h2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6h2V4Z"></svg:path>`,
})
export class CarbonAccumulationSnowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonActionDefinitionIcon],svg[carbon-action-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.98 17.492c0-2.873 1.497-4.68 4.147-4.68c1.806 0 2.994.86 3.527 2.271l-1.807.81c-.206-.758-.774-1.308-1.72-1.308c-1.222 0-1.841.86-1.841 2.116v1.634c0 1.256.619 2.1 1.84 2.1c1.05 0 1.566-.603 1.893-1.412l1.686.81c-.585 1.582-1.84 2.373-3.579 2.373c-2.65 0-4.146-1.823-4.146-4.714M14.623 22l-.963-3.063H9.392L8.446 22H6.14l4.026-12.01h2.822L16.98 22zm-3.063-9.945h-.086l-1.53 4.938h3.165z"></svg:path><svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 28h24V4H4z"></svg:path>`,
})
export class CarbonActionDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonActionUsageIcon],svg[carbon-action-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.98 17.492c0-2.873 1.497-4.68 4.147-4.68c1.806 0 2.994.86 3.527 2.271l-1.807.809c-.206-.757-.774-1.308-1.72-1.308c-1.222 0-1.841.86-1.841 2.117v1.634c0 1.256.619 2.1 1.84 2.1c1.05 0 1.566-.603 1.893-1.412l1.686.809c-.585 1.583-1.84 2.374-3.579 2.374c-2.65 0-4.146-1.823-4.146-4.714M14.623 22l-.963-3.063H9.392L8.446 22H6.14l4.026-12.01h2.822L16.98 22zm-3.063-9.945h-.086l-1.53 4.938h3.165z"></svg:path><svg:path fill="currentColor" d="M21 30H11c-4.963 0-9-4.037-9-9V11c0-4.963 4.037-9 9-9h10c4.963 0 9 4.037 9 9v10c0 4.963-4.037 9-9 9M11 4c-3.86 0-7 3.14-7 7v10c0 3.86 3.14 7 7 7h10c3.86 0 7-3.14 7-7V11c0-3.86-3.14-7-7-7z"></svg:path>`,
})
export class CarbonActionUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonActivityIcon],svg[carbon-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 29a1 1 0 0 1-.92-.62L6.33 17H2v-2h5a1 1 0 0 1 .92.62L12 25.28l8.06-21.63A1 1 0 0 1 21 3a1 1 0 0 1 .93.68L25.72 15H30v2h-5a1 1 0 0 1-.95-.68L21 7l-8.06 21.35A1 1 0 0 1 12 29"></svg:path>`,
})
export class CarbonActivityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAddIcon],svg[carbon-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"></svg:path>`,
})
export class CarbonAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAddAltIcon],svg[carbon-add-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16S9.4 4 16 4m0-2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2"></svg:path><svg:path fill="currentColor" d="M24 15h-7V8h-2v7H8v2h7v7h2v-7h7z"></svg:path>`,
})
export class CarbonAddAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAddCommentIcon],svg[carbon-add-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"></svg:path><svg:path fill="currentColor" d="M17 9h-2v4h-4v2h4v4h2v-4h4v-2h-4z"></svg:path>`,
})
export class CarbonAddCommentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAddFilledIcon],svg[carbon-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2A14.173 14.173 0 0 0 2 16a14.173 14.173 0 0 0 14 14a14.173 14.173 0 0 0 14-14A14.173 14.173 0 0 0 16 2m8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"></svg:path><svg:path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7z"></svg:path>`,
})
export class CarbonAddFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAddLargeIcon],svg[carbon-add-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15V5h-2v10H5v2h10v10h2V17h10v-2z"></svg:path>`,
})
export class CarbonAddLargeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAgricultureAnalyticsIcon],svg[carbon-agriculture-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.251 21.37l2.194 1.462A1 1 0 0 0 27.8 22.6l3-4l-1.6-1.2l-2.433 3.244l-2.212-1.476a1 1 0 0 0-1.369.25L20 23.879V16h-2v10a2 2 0 0 0 2 2h10v-2h-9.057zM2 21h14v2H2zm0 5h14v2H2zm9-10v-5h1a4.005 4.005 0 0 0 4-4V4h-3a3.98 3.98 0 0 0-2.747 1.107A6 6 0 0 0 5 2H2v3a6.007 6.007 0 0 0 6 6h1v5H2v2h14v-2zm2-10h1v1a2 2 0 0 1-2 2h-1V8a2 2 0 0 1 2-2M8 9a4.005 4.005 0 0 1-4-4V4h1a4.005 4.005 0 0 1 4 4v1z"></svg:path>`,
})
export class CarbonAgricultureAnalyticsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiIcon],svg[carbon-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h3v10h-3v2h8v-2h-3V11h3V9h-8zm-4-2H9c-1.103 0-2 .897-2 2v12h2v-5h4v5h2V11c0-1.103-.897-2-2-2m-4 7v-5h4v5z"></svg:path>`,
})
export class CarbonAiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiBusinessImpactAssessmentIcon],svg[carbon-ai-business-impact-assessment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 23h2v8h-2zm4-2h2v10h-2zm-8 6h2v4h-2zm-2-7v-2h1v-7h-1V9h4v2h-1v7h1v2zm-3.5 0h2L13 9h-3L6.503 20h2l.601-2h4.778zm-4.794-4l1.628-5.411l.256-.003L13.264 16z"></svg:path><svg:path fill="currentColor" d="M17 30H0V0h30v17h-2V2H2v26h15z"></svg:path>`,
})
export class CarbonAiBusinessImpactAssessmentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiFinancialSustainabilityCheckIcon],svg[carbon-ai-financial-sustainability-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 23.414l-4.707-4.707l1.414-1.414L16 20.586L27.293 9.293l1.414 1.414zM12.707 8.707l-1.414-1.414L7 11.586L4.414 9l4.293-4.293l-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l7 7l1.414-1.414L8.414 13z"></svg:path><svg:path fill="currentColor" d="M16 30C8.28 30 2 23.72 2 16h2c0 6.617 5.383 12 12 12s12-5.383 12-12h2c0 7.72-6.28 14-14 14m8.308-22.66A11.94 11.94 0 0 0 16 4c-.936 0-1.868.108-2.77.321l-.46-1.946A14 14 0 0 1 16 2a13.93 13.93 0 0 1 9.692 3.898z"></svg:path>`,
})
export class CarbonAiFinancialSustainabilityCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiGenerateIcon],svg[carbon-ai-generate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22v-2h1v-7h-1v-2h4v2h-1v7h1v2zm-3.5 0h2L14 11h-3L7.503 22h2l.601-2h4.778zm-4.794-4l1.628-5.411l.256-.003L14.264 18zM32 4h-4V0h-2v4h-4v2h4v4h2V6h4zm-2 8h2v2h-2zM18 0h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M32 32H0V0h14v2H2v28h28V18h2z"></svg:path>`,
})
export class CarbonAiGenerateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiGovernanceLifecycleIcon],svg[carbon-ai-governance-lifecycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 23l-2.139-1.013A5.02 5.02 0 0 1 11 17.467V11h10v6.468a5.02 5.02 0 0 1-2.861 4.52zm-3-10v4.468a3.01 3.01 0 0 0 1.717 2.71l1.283.608l1.283-.607A3.01 3.01 0 0 0 19 17.468V13zm-8.88 4.656A2 2 0 1 0 1 16c0 .789.46 1.464 1.124 1.79a13.95 13.95 0 0 0 9.569 11.535l.614-1.904a11.95 11.95 0 0 1-8.186-9.765m25.205 2.652l-1.904-.616a11.95 11.95 0 0 1-9.765 8.187A2 2 0 1 0 16 31c.789 0 1.464-.46 1.79-1.124a13.95 13.95 0 0 0 11.535-9.568m.551-6.098a13.95 13.95 0 0 0-9.569-11.535l-.614 1.904a11.95 11.95 0 0 1 8.186 9.765A2 2 0 1 0 31 16a1.99 1.99 0 0 0-1.123-1.79M16 1c-.789 0-1.464.46-1.79 1.124a13.95 13.95 0 0 0-11.535 9.568l1.904.616a11.95 11.95 0 0 1 9.765-8.187A2 2 0 1 0 16 1"></svg:path>`,
})
export class CarbonAiGovernanceLifecycleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiGovernanceTrackedIcon],svg[carbon-ai-governance-tracked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 27.59L20.41 25L19 26.41l4 4l8-8L29.59 21zM16 23l-2.139-1.013A5.02 5.02 0 0 1 11 17.467V11h10v6.468a5.02 5.02 0 0 1-2.861 4.52zm-3-10v4.468a3.01 3.01 0 0 0 1.717 2.71l1.283.608l1.283-.607A3.01 3.01 0 0 0 19 17.468V13zm-8.88 4.656A2 2 0 1 0 1 16c0 .789.46 1.464 1.124 1.79a13.95 13.95 0 0 0 9.569 11.535l.614-1.904a11.95 11.95 0 0 1-8.186-9.765m25.756-3.446a13.95 13.95 0 0 0-9.569-11.535l-.614 1.904a11.95 11.95 0 0 1 8.186 9.765A2 2 0 1 0 31 16a1.99 1.99 0 0 0-1.123-1.79M16 1c-.789 0-1.464.46-1.79 1.124a13.95 13.95 0 0 0-11.535 9.568l1.904.616a11.95 11.95 0 0 1 9.765-8.187A2 2 0 1 0 16 1"></svg:path>`,
})
export class CarbonAiGovernanceTrackedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiGovernanceUntrackedIcon],svg[carbon-ai-governance-untracked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.41 26L31 22.41L29.59 21L26 24.59L22.41 21L21 22.41L24.59 26L21 29.59L22.41 31L26 27.41L29.59 31L31 29.59zM16 23l-2.139-1.013A5.02 5.02 0 0 1 11 17.467V11h10v6.468a5.02 5.02 0 0 1-2.861 4.52zm-3-10v4.468a3.01 3.01 0 0 0 1.717 2.71l1.283.608l1.283-.607A3.01 3.01 0 0 0 19 17.468V13zm-8.88 4.656A2 2 0 1 0 1 16c0 .789.46 1.464 1.124 1.79a13.95 13.95 0 0 0 9.569 11.535l.614-1.904a11.95 11.95 0 0 1-8.186-9.765m25.756-3.446a13.95 13.95 0 0 0-9.569-11.535l-.614 1.904a11.95 11.95 0 0 1 8.186 9.765A2 2 0 1 0 31 16a1.99 1.99 0 0 0-1.123-1.79M16 1c-.789 0-1.464.46-1.79 1.124a13.95 13.95 0 0 0-11.535 9.568l1.904.616a11.95 11.95 0 0 1 9.765-8.187A2 2 0 1 0 16 1"></svg:path>`,
})
export class CarbonAiGovernanceUntrackedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiLabelIcon],svg[carbon-ai-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21v-2h1v-7h-1v-2h4v2h-1v7h1v2zm-3.5 0h2L14 10h-3L7.503 21h2l.601-2h4.778zm-4.794-4l1.628-5.411l.256-.003L14.264 17z"></svg:path><svg:path fill="currentColor" d="M32 32H0V0h32zM2 30h28V2H2z"></svg:path>`,
})
export class CarbonAiLabelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiLaunchIcon],svg[carbon-ai-launch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 19l-1.414 1.414L17.172 24H4V11H2v13a2 2 0 0 0 2 2h13.172l-3.586 3.586L15 31l6-6zm9-1v-2h2V4h-2V2h6v2h-2v12h2v2z"></svg:path><svg:path fill="currentColor" d="M21 18h2L17.5 2l-3 .009L9 18h2l1.333-4h7.334zm-8-6l3-9l3 9z"></svg:path>`,
})
export class CarbonAiLaunchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiRecommendIcon],svg[carbon-ai-recommend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20v-2h1v-7h-1V9h4v2h-1v7h1v2zm-3.5 0h2L13 9h-3L6.503 20h2l.601-2h4.778zm-4.794-4l1.628-5.411l.256-.003L13.264 16zm16.511 5l-1.787 3.621l-3.996.58l2.892 2.82L22.643 32l3.574-1.879L29.791 32l-.683-3.98L32 25.202l-3.996-.581z"></svg:path><svg:path fill="currentColor" d="M17 30H0V0h30v17h-2V2H2v26h15z"></svg:path>`,
})
export class CarbonAiRecommendIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiResultsIcon],svg[carbon-ai-results-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 8a5.99 5.99 0 0 0 9.471 4.885L28.586 16L30 14.586l-3.115-3.115A5.997 5.997 0 1 0 16 8zm2 0a4 4 0 1 1 4 4a4.005 4.005 0 0 1-4-4z" fill="currentColor"></svg:path><svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.005 8.005 0 0 1 6-7.737L13.614 2.3A10.009 10.009 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z" fill="currentColor"></svg:path><svg:path d="M23.05 16a9.6 9.6 0 0 1-1.872 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386a10.966 10.966 0 0 0 2.369-2.833z" fill="currentColor"></svg:path>`,
})
export class CarbonAiResultsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiResultsHighIcon],svg[carbon-ai-results-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M23.049 16a9.614 9.614 0 0 1-1.871 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.989 9.989 0 0 0 25.282 16z" fill="currentColor"></svg:path><svg:path d="M16 4a7.928 7.928 0 0 1 3.69.91l.896-1.79A9.99 9.99 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.186-3.86A7.185 7.185 0 0 1 8 12a8.01 8.01 0 0 1 8-8z" fill="currentColor"></svg:path><svg:path d="M29 14H19a1 1 0 0 1-.894-1.447l5-10a1 1 0 0 1 1.788 0l5 10A1 1 0 0 1 29 14zm-8.382-2h6.764L24 5.236z" fill="currentColor"></svg:path>`,
})
export class CarbonAiResultsHighIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiResultsLowIcon],svg[carbon-ai-results-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.01 8.01 0 0 1 8-8V2A10.011 10.011 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z" fill="currentColor"></svg:path><svg:path d="M24 14a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6zm0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4z" fill="currentColor"></svg:path><svg:path d="M23.04 16a9.486 9.486 0 0 1-1.862 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.984 9.984 0 0 0 25.275 16z" fill="currentColor"></svg:path>`,
})
export class CarbonAiResultsLowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiResultsMediumIcon],svg[carbon-ai-results-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.01 8.01 0 0 1 8-8V2A10.011 10.011 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z" fill="currentColor"></svg:path><svg:path d="M28 14h-8a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h8a2.002 2.002 0 0 1 2 2v8a2.002 2.002 0 0 1-2 2zM20 4v8h8V4z" fill="currentColor"></svg:path><svg:path d="M23.04 16a9.486 9.486 0 0 1-1.862 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.984 9.984 0 0 0 25.275 16z" fill="currentColor"></svg:path>`,
})
export class CarbonAiResultsMediumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiResultsUrgentIcon],svg[carbon-ai-results-urgent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.01 8.01 0 0 1 8-8V2A10.011 10.011 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z" fill="currentColor"></svg:path><svg:path d="M20 2h2v7h-2z" fill="currentColor"></svg:path><svg:path d="M21 11a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 21 11z" fill="currentColor"></svg:path><svg:path d="M26 2h2v7h-2z" fill="currentColor"></svg:path><svg:path d="M27 11a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 27 11z" fill="currentColor"></svg:path><svg:path d="M23.04 16a9.486 9.486 0 0 1-1.862 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.984 9.984 0 0 0 25.275 16z" fill="currentColor"></svg:path>`,
})
export class CarbonAiResultsUrgentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiResultsVeryHighIcon],svg[carbon-ai-results-very-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M24 2h2v7h-2z" fill="currentColor"></svg:path><svg:path d="M25 11a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 25 11z" fill="currentColor"></svg:path><svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M23.049 16a9.614 9.614 0 0 1-1.871 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.989 9.989 0 0 0 25.282 16z" fill="currentColor"></svg:path><svg:path d="M16 4a7.94 7.94 0 0 1 4 1.083V2.84A9.989 9.989 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.186-3.86A7.185 7.185 0 0 1 8 12a8.01 8.01 0 0 1 8-8z" fill="currentColor"></svg:path>`,
})
export class CarbonAiResultsVeryHighIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiStatusIcon],svg[carbon-ai-status-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M23.04 16a9.486 9.486 0 0 1-1.862 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.984 9.984 0 0 0 25.275 16z" fill="currentColor"></svg:path><svg:path d="M20 14a1 1 0 0 1-.894-.553L17.381 10H14V8h4a1 1 0 0 1 .894.553L20 10.763l3.106-6.21a1.042 1.042 0 0 1 1.788 0L26.619 8H30v2h-4a1 1 0 0 1-.894-.553L24 7.237l-3.106 6.21A1 1 0 0 1 20 14z" fill="currentColor"></svg:path><svg:path d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.01 8.01 0 0 1 8-8V2A10.011 10.011 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z" fill="currentColor"></svg:path>`,
})
export class CarbonAiStatusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiStatusCompleteIcon],svg[carbon-ai-status-complete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.01 8.01 0 0 1 8-8V2A10.011 10.011 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z" fill="currentColor"></svg:path><svg:path d="M21 9.59L17.41 6L16 7.41l5 5l9-9L28.59 2L21 9.59z" fill="currentColor"></svg:path><svg:path d="M23.8 14a7.28 7.28 0 0 1-2.622 4.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.143 9.143 0 0 0 25.84 14z" fill="currentColor"></svg:path>`,
})
export class CarbonAiStatusCompleteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiStatusFailedIcon],svg[carbon-ai-status-failed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.01 8.01 0 0 1 8-8V2A10.011 10.011 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z" fill="currentColor"></svg:path><svg:path d="M23.8 14a7.28 7.28 0 0 1-2.622 4.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.143 9.143 0 0 0 25.84 14z" fill="currentColor"></svg:path><svg:path d="M30 3.41L28.59 2L25 5.59L21.41 2L20 3.41L23.59 7L20 10.59L21.41 12L25 8.41L28.59 12L30 10.59L26.41 7L30 3.41z" fill="currentColor"></svg:path>`,
})
export class CarbonAiStatusFailedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiStatusInProgressIcon],svg[carbon-ai-status-in-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.01 8.01 0 0 1 8-8V2A10.011 10.011 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z" fill="currentColor"></svg:path><svg:path d="M21.178 18.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.193 9.193 0 0 0 26 12h-2a7.203 7.203 0 0 1-2.822 6.143z" fill="currentColor"></svg:path><svg:circle cx="18.5" cy="7.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="28.5" cy="7.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="23.5" cy="7.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class CarbonAiStatusInProgressIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiStatusQueuedIcon],svg[carbon-ai-status-queued-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.01 8.01 0 0 1 8-8V2A10.011 10.011 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z" fill="currentColor"></svg:path><svg:path d="M21.178 18.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.193 9.193 0 0 0 26 12h-2a7.203 7.203 0 0 1-2.822 6.143z" fill="currentColor"></svg:path><svg:path fill="currentColor" d="M18 6h10v2H18z"></svg:path>`,
})
export class CarbonAiStatusQueuedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAiStatusRejectedIcon],svg[carbon-ai-status-rejected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.01 8.01 0 0 1 8-8V2A10.011 10.011 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z" fill="currentColor"></svg:path><svg:path d="M23.04 16a9.486 9.486 0 0 1-1.862 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.984 9.984 0 0 0 25.275 16z" fill="currentColor"></svg:path><svg:path d="M30 8a6 6 0 1 0-6 6a6.007 6.007 0 0 0 6-6zm-2 0a3.952 3.952 0 0 1-.567 2.019l-5.452-5.452A3.953 3.953 0 0 1 24 4a4.005 4.005 0 0 1 4 4zm-8 0a3.952 3.952 0 0 1 .567-2.019l5.452 5.452A3.953 3.953 0 0 1 24 12a4.005 4.005 0 0 1-4-4z" fill="currentColor"></svg:path>`,
})
export class CarbonAiStatusRejectedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAirlineDigitalGateIcon],svg[carbon-airline-digital-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23h-2v-2a3.003 3.003 0 0 0-3-3H9a3.003 3.003 0 0 0-3 3v2H4v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM11 6a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5M2 26h28v2H2zm29.966-14.259a1 1 0 0 0-1.225-.707l-3.086.826L24 7l-1 .268l1.458 5.448l-2.766.74L20 11.206l-1 .268l.934 3.488a1 1 0 0 0 1.224.708l10.1-2.704a1 1 0 0 0 .708-1.225"></svg:path>`,
})
export class CarbonAirlineDigitalGateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAirlineManageGatesIcon],svg[carbon-airline-manage-gates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23h-2v-2a3.003 3.003 0 0 0-3-3H9a3.003 3.003 0 0 0-3 3v2H4v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM11 6a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5M2 26h28v2H2zM22 4v2h4.586L20 12.586L21.414 14L28 7.414V12h2V4z"></svg:path>`,
})
export class CarbonAirlineManageGatesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAirlinePassengerCareIcon],svg[carbon-airline-passenger-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23h-2v-2a3.003 3.003 0 0 0-3-3H9a3.003 3.003 0 0 0-3 3v2H4v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM11 6a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5M2 26h28v2H2zM27.303 8a2.66 2.66 0 0 0-1.908.806L25 9.21l-.395-.405a2.66 2.66 0 0 0-3.816 0a2.8 2.8 0 0 0 0 3.896L25 17l4.21-4.298a2.8 2.8 0 0 0 0-3.896A2.66 2.66 0 0 0 27.304 8"></svg:path>`,
})
export class CarbonAirlinePassengerCareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAirlineRapidBoardIcon],svg[carbon-airline-rapid-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23h-2v-2a3.003 3.003 0 0 0-3-3H9a3.003 3.003 0 0 0-3 3v2H4v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM11 6a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5M2 26h28v2H2zM30 8h-2V6h-2V4h4zM19 4h4v2h-2v2h-2zm9 9h2v2h-2zm-2-2h2v2h-2zm-7 0h2v2h2v2h-4z"></svg:path>`,
})
export class CarbonAirlineRapidBoardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAirplayIcon],svg[carbon-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.996 30H9.004a1.002 1.002 0 0 1-.821-1.577l6.998-9.996a1 1 0 0 1 1.638 0l6.998 9.996a1.002 1.002 0 0 1-.82 1.577M10.92 28h10.16L16 20.744Z"></svg:path><svg:path fill="currentColor" d="M28 24h-4v-2h4V6H4v16h4v2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonAirplayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAirplayFilledIcon],svg[carbon-airplay-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.996 30H9.004a1.002 1.002 0 0 1-.821-1.577l6.998-9.996a1 1 0 0 1 1.638 0l6.998 9.996a1.002 1.002 0 0 1-.82 1.577"></svg:path><svg:path fill="currentColor" d="M28 24h-4v-2h4V6H4v16h4v2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonAirplayFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAirport01Icon],svg[carbon-airport-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m17 14.5l6 2.5v-2l-6-3V9a1 1 0 0 0-2 0v3l-6 3v2l6-2.5V20l-3 2v1l4-1l4 1v-1l-3-2Z"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonAirport01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAirport02Icon],svg[carbon-airport-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17h-3.586L16 13h-2l2.586 4H10.72L9.5 15H8l1.057 3.305a1 1 0 0 0 .952.695H23a1 1 0 0 0 0-2"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonAirport02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAirportLocationIcon],svg[carbon-airport-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15h-6.07A8.01 8.01 0 0 0 17 8.07V2h-2v6.07A8.01 8.01 0 0 0 8.07 15H2v2h6.07A8.01 8.01 0 0 0 15 23.93V30h2v-6.07A8.01 8.01 0 0 0 23.93 17H30Zm-14 7a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6"></svg:path>`,
})
export class CarbonAirportLocationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlarmIcon],svg[carbon-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 28a11 11 0 1 1 11-11a11 11 0 0 1-11 11m0-20a9 9 0 1 0 9 9a9 9 0 0 0-9-9"></svg:path><svg:path fill="currentColor" d="M18.59 21L15 17.41V11h2v5.58l3 3.01zM4 7.592l3.582-3.589l1.416 1.413l-3.582 3.589zm19-2.184l1.415-1.413l3.581 3.589l-1.415 1.413z"></svg:path>`,
})
export class CarbonAlarmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlarmAddIcon],svg[carbon-alarm-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 28a11 11 0 1 1 11-11a11 11 0 0 1-11 11m0-20a9 9 0 1 0 9 9a9 9 0 0 0-9-9M4 7.592l3.582-3.589l1.416 1.413l-3.582 3.589zm19-2.184l1.415-1.413l3.581 3.589l-1.415 1.413z"></svg:path><svg:path fill="currentColor" d="M21 16h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></svg:path>`,
})
export class CarbonAlarmAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlarmSubtractIcon],svg[carbon-alarm-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 28a11 11 0 1 1 11-11a11 11 0 0 1-11 11m0-20a9 9 0 1 0 9 9a9 9 0 0 0-9-9M4 7.592l3.582-3.589l1.416 1.413l-3.582 3.589zm19-2.184l1.415-1.413l3.581 3.589l-1.415 1.413z"></svg:path><svg:path fill="currentColor" d="M11 16h10v2H11z"></svg:path>`,
})
export class CarbonAlarmSubtractIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignBoxBottomCenterIcon],svg[carbon-align-box-bottom-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M6 4v24h20V4Z"></svg:path><svg:path fill="currentColor" d="M22 20H10v-2h12zm-2 5h-8v-2h8z"></svg:path>`,
})
export class CarbonAlignBoxBottomCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignBoxBottomLeftIcon],svg[carbon-align-box-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M6 4v24h20V4Z"></svg:path><svg:path fill="currentColor" d="M9 18h11v2H9zm0 5h7v2H9z"></svg:path>`,
})
export class CarbonAlignBoxBottomLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignBoxBottomRightIcon],svg[carbon-align-box-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M6 4v24h20V4Z"></svg:path><svg:path fill="currentColor" d="M23 20H12v-2h11zm0 5h-7v-2h7z"></svg:path>`,
})
export class CarbonAlignBoxBottomRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignBoxMiddleCenterIcon],svg[carbon-align-box-middle-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M6 4v24h20V4Z"></svg:path><svg:path fill="currentColor" d="M22 15H10v-2h12zm-2 5h-8v-2h8z"></svg:path>`,
})
export class CarbonAlignBoxMiddleCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignBoxMiddleLeftIcon],svg[carbon-align-box-middle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M6 4v24h20V4Z"></svg:path><svg:path fill="currentColor" d="M9 13h11v2H9zm0 5h7v2H9z"></svg:path>`,
})
export class CarbonAlignBoxMiddleLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignBoxMiddleRightIcon],svg[carbon-align-box-middle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M6 4v24h20V4Z"></svg:path><svg:path fill="currentColor" d="M23 15H12v-2h11zm0 5h-7v-2h7z"></svg:path>`,
})
export class CarbonAlignBoxMiddleRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignBoxTopCenterIcon],svg[carbon-align-box-top-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M6 4v24h20V4Z"></svg:path><svg:path fill="currentColor" d="M22 9H10V7h12zm-2 5h-8v-2h8z"></svg:path>`,
})
export class CarbonAlignBoxTopCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignBoxTopLeftIcon],svg[carbon-align-box-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M6 4v24h20V4Z"></svg:path><svg:path fill="currentColor" d="M9 7h11v2H9zm0 5h7v2H9z"></svg:path>`,
})
export class CarbonAlignBoxTopLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignBoxTopRightIcon],svg[carbon-align-box-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M6 4v24h20V4Z"></svg:path><svg:path fill="currentColor" d="M23 9H12V7h11zm0 5h-7v-2h7z"></svg:path>`,
})
export class CarbonAlignBoxTopRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignHorizontalCenterIcon],svg[carbon-align-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 18h-7v-4h3a2.003 2.003 0 0 0 2-2V8a2.003 2.003 0 0 0-2-2h-3V2h-2v4h-3a2.003 2.003 0 0 0-2 2v4a2.003 2.003 0 0 0 2 2h3v4H8a2.003 2.003 0 0 0-2 2v4a2.003 2.003 0 0 0 2 2h7v4h2v-4h7a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2M12 8h8v4h-8Zm12 16H8v-4h16Z"></svg:path>`,
})
export class CarbonAlignHorizontalCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignHorizontalLeftIcon],svg[carbon-align-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 26H11a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-6.001L11 20v4h15zM18 14h-7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-6.001L11 8v4h7zM4 2h2v28H4z"></svg:path>`,
})
export class CarbonAlignHorizontalLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignHorizontalRightIcon],svg[carbon-align-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 24v-4a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2m2 0h15v-4l-15-.001zm6-12V8a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2m2 0h7V8l-7-.001zm14 18h-2V2h2z"></svg:path>`,
})
export class CarbonAlignHorizontalRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignVerticalBottomIcon],svg[carbon-align-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 26h28v2H2zm22-3h-4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m-4-9v7h4.001L24 14zm-8 9H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2M8 6v15h4.001L12 6z"></svg:path>`,
})
export class CarbonAlignVerticalBottomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignVerticalCenterIcon],svg[carbon-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15h-4v-3a2.003 2.003 0 0 0-2-2h-4a2.003 2.003 0 0 0-2 2v3h-4V8a2.003 2.003 0 0 0-2-2H8a2.003 2.003 0 0 0-2 2v7H2v2h4v7a2.003 2.003 0 0 0 2 2h4a2.003 2.003 0 0 0 2-2v-7h4v3a2.003 2.003 0 0 0 2 2h4a2.003 2.003 0 0 0 2-2v-3h4ZM8 24V8h4l.001 16Zm12-4v-8h4l.001 8Z"></svg:path>`,
})
export class CarbonAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAlignVerticalTopIcon],svg[carbon-align-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 20h-4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m-4-9v7h4.001L24 11zm-8 17H8a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2M8 11v15h4.001L12 11zM2 4h28v2H2z"></svg:path>`,
})
export class CarbonAlignVerticalTopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAnalyticsIcon],svg[carbon-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4Z"></svg:path><svg:path fill="currentColor" d="M30 9h-7v2h3.59L19 18.59l-4.29-4.3a1 1 0 0 0-1.42 0L6 21.59L7.41 23L14 16.41l4.29 4.3a1 1 0 0 0 1.42 0l8.29-8.3V16h2Z"></svg:path>`,
})
export class CarbonAnalyticsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAnalyticsCustomIcon],svg[carbon-analytics-custom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.707 19.293l-3-3a1 1 0 0 0-1.414 0L16 25.586V30h4.414l9.293-9.293a1 1 0 0 0 0-1.414M19.586 28H18v-1.586l5-5L24.586 23zM26 21.586L24.414 20L26 18.414L27.586 20zM30 4h-7v2h3.586L19 13.586l-4.293-4.293a1 1 0 0 0-1.414 0L6 16.586L7.414 18L14 11.414l4.293 4.293a1 1 0 0 0 1.414 0L28 7.414V11h2z"></svg:path><svg:path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h8v-2H4Z"></svg:path>`,
})
export class CarbonAnalyticsCustomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAnalyticsReferenceIcon],svg[carbon-analytics-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zM30 4h-7v2h3.586L19 13.586l-4.293-4.293a1 1 0 0 0-1.414 0L8 14.586L9.414 16L14 11.414l4.293 4.293a1 1 0 0 0 1.414 0L28 7.414V11h2zM16 28h14v2H16zM2 2h2v14H2z"></svg:path>`,
})
export class CarbonAnalyticsReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAnchorIcon],svg[carbon-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 28.086L7.085 23.5L8.5 24.915L3.914 29.5zm7-7l4.585-4.586l1.415 1.415l-4.586 4.585zm7-7L21.085 9.5l1.415 1.415l-4.586 4.585zm7-7L28.085 2.5L29.5 3.915L24.914 8.5z"></svg:path>`,
})
export class CarbonAnchorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAngleIcon],svg[carbon-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9 24a3.51 3.51 0 0 0-.88-1.86l9.53-16.58l-1.73-1l-9.57 16.56A3.06 3.06 0 0 0 5.5 21a3.5 3.5 0 1 0 3.15 5H28v-2zm-3.5 2A1.5 1.5 0 1 1 7 24.5A1.5 1.5 0 0 1 5.5 26z" fill="currentColor"></svg:path><svg:path d="M22 21h2a13 13 0 0 0-5.42-10.56l-1.16 1.62A11 11 0 0 1 22 21z" fill="currentColor"></svg:path>`,
})
export class CarbonAngleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAnnotationVisibilityIcon],svg[carbon-annotation-visibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 22H4V6h24z" fill="currentColor"></svg:path><svg:path d="M21 20h-8a3.51 3.51 0 0 0-.88-1.86l3.8-6.64l-1.74-1l-3.78 6.62a3.35 3.35 0 0 0-.9-.12a3.5 3.5 0 1 0 3.15 5H21zM9.5 22a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 9.5 22z" fill="currentColor"></svg:path><svg:path d="M19 8h7v2h-7z" fill="currentColor"></svg:path><svg:path d="M19 12h4v2h-4z" fill="currentColor"></svg:path>`,
})
export class CarbonAnnotationVisibilityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonApertureIcon],svg[carbon-aperture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m11.84 12.14L22 17.52V5.62a12 12 0 0 1 5.84 8.52M12 18.68v-5.36L16 11l4 2.31v5.36L16 21Zm8-14V11l-9.66-5.58A11.9 11.9 0 0 1 20 4.7Zm-11.52 2L14 9.85L4 15.62a12 12 0 0 1 4.48-8.96ZM4.16 17.85L10 14.47v11.91a12 12 0 0 1-5.84-8.53M12 27.3V21l9.67 5.58A11.9 11.9 0 0 1 16 28a12 12 0 0 1-4-.7m11.52-2L18 22.14l10-5.77a12 12 0 0 1-4.48 8.97Z"></svg:path>`,
})
export class CarbonApertureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonApiIcon],svg[carbon-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 22a3.86 3.86 0 0 0-2 .57l-3.09-3.1a6 6 0 0 0 0-6.94L24 9.43a3.86 3.86 0 0 0 2 .57a4 4 0 1 0-4-4a3.86 3.86 0 0 0 .57 2l-3.1 3.09a6 6 0 0 0-6.94 0L9.43 8A3.86 3.86 0 0 0 10 6a4 4 0 1 0-4 4a3.86 3.86 0 0 0 2-.57l3.09 3.1a6 6 0 0 0 0 6.94L8 22.57A3.86 3.86 0 0 0 6 22a4 4 0 1 0 4 4a3.86 3.86 0 0 0-.57-2l3.1-3.09a6 6 0 0 0 6.94 0l3.1 3.09a3.86 3.86 0 0 0-.57 2a4 4 0 1 0 4-4m0-18a2 2 0 1 1-2 2a2 2 0 0 1 2-2M4 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2m2 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2m10-8a4 4 0 1 1 4-4a4 4 0 0 1-4 4m10 8a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonApiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonApi1Icon],svg[carbon-api-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9H4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5zm18-5h3v10h-3v2h8v-2h-3V11h3V9h-8zm-8 12h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4zm0-7h4v-5h-4z"></svg:path>`,
})
export class CarbonApi1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonApiKeyIcon],svg[carbon-api-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 26c-.178 0-.347.03-.511.074l-1.056-1.055c.352-.595.567-1.28.567-2.019s-.215-1.424-.567-2.019l1.055-1.055c.165.043.334.074.512.074a2 2 0 1 0-2-2c0 .178.03.347.074.512l-1.055 1.055C24.424 19.215 23.739 19 23 19s-1.424.215-2.019.567l-1.055-1.055c.043-.165.074-.334.074-.512a2 2 0 1 0-2 2c.178 0 .347-.03.512-.074l1.055 1.055C19.215 21.576 19 22.261 19 23s.215 1.424.567 2.019l-1.055 1.055A2 2 0 0 0 18 26a2 2 0 1 0 2 2c0-.178-.03-.347-.074-.512l1.055-1.055c.595.352 1.28.567 2.019.567s1.424-.215 2.019-.567l1.055 1.055A2 2 0 0 0 26 28a2 2 0 1 0 2-2m-7-3c0-1.102.897-2 2-2s2 .898 2 2s-.897 2-2 2s-2-.897-2-2"></svg:path><svg:circle cx="22" cy="10" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21 2c-4.963 0-9 4.037-9 9c0 .779.099 1.547.294 2.291L2 23.586V30h6.414l7-7l-2.707-2.707l-1.414 1.414L12.586 23l-1.59 1.59l-1.287-1.295l-1.418 1.41l1.29 1.299L7.587 28H4v-3.586l9.712-9.712l.856-.867l-.199-.585A7.008 7.008 0 0 1 21 4c3.86 0 7.001 3.14 7.001 7h2c0-4.963-4.037-9-9-9Z"></svg:path>`,
})
export class CarbonApiKeyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAppIcon],svg[carbon-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-6v14h2v-4h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-4 8v-6h4v6zm-6-8h-6v14h2v-4h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-4 8v-6h4v6zm-6-8H3v2h5v2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8a2 2 0 0 0-2-2m0 8H4v-2h4z"></svg:path>`,
})
export class CarbonAppIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAppConnectivityIcon],svg[carbon-app-connectivity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2H9a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6H8v-4h4a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H9V6h9v6a2 2 0 0 0 2 2m0 14v-4h8v4Zm8-8v2h-8v-2ZM4 20v-4h8v4Zm8-6H4v-2h8Zm8-2V8h8v4Zm8-8v2h-8V4Z"></svg:path>`,
})
export class CarbonAppConnectivityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAppleIcon],svg[carbon-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.779 8a11.5 11.5 0 0 0-3.055.534a15 15 0 0 1-1.822.413A6.005 6.005 0 0 0 11 4v2a3.99 3.99 0 0 1 3.827 2.9a20 20 0 0 1-1.617-.365A13 13 0 0 0 10.032 8C6.31 8 4 11.065 4 16c0 7.51 4.068 11.999 8 12h.002a7.2 7.2 0 0 0 2.49-.59A5 5 0 0 1 16 27a5 5 0 0 1 1.511.41A7.2 7.2 0 0 0 20 28c3.93-.001 8-4.49 8-12c0-3.69-1.63-8-6.221-8M20 26a5.5 5.5 0 0 1-1.79-.464A6.4 6.4 0 0 0 16 25a6.4 6.4 0 0 0-2.206.536A5.5 5.5 0 0 1 12 26h.002C9.052 25.999 6 22.259 6 16c0-1.804.393-6 4.032-6a11.2 11.2 0 0 1 2.68.473a13 13 0 0 0 3.05.527h.491a11.8 11.8 0 0 0 2.996-.536a10 10 0 0 1 2.53-.464C25.796 10 26 14.998 26 16c0 6.259-3.052 9.999-6 10"></svg:path><svg:path fill="currentColor" d="M18 7h-1V6a2 2 0 0 1 2-2h1v1a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonAppleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAppleDashIcon],svg[carbon-apple-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.083 11.671L5.408 10.58C4.5 11.967 4.015 13.809 4 15.905l2 .014c.012-1.712.386-3.18 1.082-4.248m-.998 6.145l-1.99.194c.188 1.938.659 3.674 1.398 5.159l1.79-.891c-.63-1.266-1.033-2.768-1.198-4.461m2.153 5.98l-1.569 1.24c1.333 1.687 3.097 2.758 4.84 2.938l.206-1.99c-1.191-.123-2.491-.94-3.477-2.188M16 25c-.733 0-1.478.271-2.199.533q-.27.1-.547.194l.643 1.894q.296-.1.588-.209C15.042 27.21 15.619 27 16 27c.38 0 .957.21 1.515.412q.27.1.546.195l.648-1.892q-.256-.089-.51-.182c-.721-.262-1.466-.533-2.2-.533zm4.255.988l.185 1.992c1.746-.164 3.518-1.223 4.862-2.908l-1.563-1.247c-.992 1.243-2.295 2.052-3.484 2.163M24.7 22.31l1.787.898c.745-1.483 1.221-3.218 1.414-5.156l-1.99-.199c-.169 1.694-.576 3.194-1.21 4.458M28 15.95c-.008-2.094-.485-3.936-1.382-5.33l-1.682 1.08c.69 1.073 1.058 2.544 1.064 4.256zM20 4h-1a2 2 0 0 0-2 2v1h1a2 2 0 0 0 2-2z"></svg:path><svg:path fill="currentColor" d="m23.813 10.53l1.103-1.667A5.2 5.2 0 0 0 22 8c-1.415 0-2.417.288-3.301.542c-.577.166-1.137.32-1.798.4C16.399 6.138 13.947 4 11 4v2c1.822 0 3.346 1.232 3.827 2.901a13 13 0 0 1-1.526-.359C12.417 8.288 11.416 8 10 8c-1.07 0-2.05.29-2.916.863l1.103 1.668A3.23 3.23 0 0 1 10 10c1.134 0 1.918.226 2.749.464c.917.264 1.865.536 3.25.536s2.335-.273 3.252-.536C20.081 10.226 20.866 10 22 10c.67 0 1.28.179 1.812.53"></svg:path>`,
})
export class CarbonAppleDashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonApplicationIcon],svg[carbon-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2M6 6v10h10V6zm20 6v4h-4v-4zm0-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m0 12v4h-4v-4zm0-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m-10 2v4h-4v-4zm0-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonApplicationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonApplicationMobileIcon],svg[carbon-application-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 7h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4z"></svg:path><svg:circle cx="14.5" cy="24.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21 30H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13v2H8v24h13v-8h2v8a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonApplicationMobileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonApplicationVirtualIcon],svg[carbon-application-virtual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19h4v4h-4zm-6 0h4v4h-4zm6 6h4v4h-4zm-6 0h4v4h-4z"></svg:path><svg:path fill="currentColor" d="M24.5 25H24v-2h.5a5.496 5.496 0 0 0 .377-10.98l-.836-.056l-.09-.834a7.998 7.998 0 0 0-15.902 0l-.09.834l-.836.057A5.496 5.496 0 0 0 7.5 23H8v2h-.5a7.496 7.496 0 0 1-1.322-14.876a10 10 0 0 1 19.644 0A7.496 7.496 0 0 1 24.5 25"></svg:path>`,
})
export class CarbonApplicationVirtualIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonApplicationWebIcon],svg[carbon-application-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4z"></svg:path><svg:path fill="currentColor" d="M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z"></svg:path>`,
})
export class CarbonApplicationWebIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAppsIcon],svg[carbon-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"></svg:path>`,
})
export class CarbonAppsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArchiveIcon],svg[carbon-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M6 2v26a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2Zm18 26H8V16h16Zm0-14H8v-4h16ZM8 8V4h16v4Z"></svg:path>`,
})
export class CarbonArchiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAreaIcon],svg[carbon-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 22.142V9.858A3.992 3.992 0 1 0 22.142 5H9.858A3.992 3.992 0 1 0 5 9.858v12.284A3.992 3.992 0 1 0 9.858 27h12.284A3.992 3.992 0 1 0 27 22.142M26 4a2 2 0 1 1-2 2a2 2 0 0 1 2-2M4 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2m2 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2m16.142-3H9.858A4 4 0 0 0 7 22.142V9.858A4 4 0 0 0 9.858 7h12.284A4 4 0 0 0 25 9.858v12.284A3.99 3.99 0 0 0 22.142 25M26 28a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2"></svg:path>`,
})
export class CarbonAreaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAreaCustomIcon],svg[carbon-area-custom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 6a3.992 3.992 0 0 0-7.977-.224L9.586 8.263A3.99 3.99 0 1 0 5 13.858v8.284A3.992 3.992 0 1 0 9.858 27h8.284a3.991 3.991 0 1 0 5.595-4.586l2.487-12.437A3.995 3.995 0 0 0 30 6m-4-2a2 2 0 1 1-2 2a2 2 0 0 1 2-2M4 10a2 2 0 1 1 2 2a2 2 0 0 1-2-2m2 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2m12.142-3H9.858A4 4 0 0 0 7 22.142v-8.284a3.99 3.99 0 0 0 2.977-3.634l12.437-2.487a4 4 0 0 0 1.849 1.85l-2.487 12.436A3.99 3.99 0 0 0 18.142 25M22 28a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonAreaCustomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArithmeticMeanIcon],svg[carbon-arithmetic-mean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 9h-2l-6 8.571L10 9H8l7 10l-7 10h2l6-8.571L22 29h2l-7-10zM8 3h16v2H8z"></svg:path>`,
})
export class CarbonArithmeticMeanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArithmeticMedianIcon],svg[carbon-arithmetic-median-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 9h-2l-6 8.571L10 9H8l7 10l-7 10h2l6-8.571L22 29h2l-7-10zm-4-2c-1.777 0-3.231-.873-4.514-1.642C14.322 4.659 13.223 4 12 4c-1.398 0-2.449.863-3.293 1.707L7.293 4.293C8.36 3.225 9.86 2 12 2c1.777 0 3.231.872 4.514 1.642C17.678 4.34 18.777 5 20 5c1.398 0 2.449-.863 3.293-1.707l1.414 1.414C23.64 5.774 22.14 7 20 7"></svg:path>`,
})
export class CarbonArithmeticMedianIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrangeIcon],svg[carbon-arrange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 29H2v-2h28zm-3-10H5v2h22zm-3-8H8v2h16zm-3-8H11v2h10z"></svg:path>`,
})
export class CarbonArrangeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrangeHorizontalIcon],svg[carbon-arrange-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h28v2H2zm11 18H5c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2m-8-8v6h8v-6zm22 8h-8c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2m-8-8v6h8v-6zM2 27h28v2H2z"></svg:path>`,
})
export class CarbonArrangeHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrangeVerticalIcon],svg[carbon-arrange-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 2h2v28h-2zm-7 13h-8c-1.103 0-2-.897-2-2V7c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2m-8-8v6h8V7zm0 10h8c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2h-8c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2m8 8v-6h-8v6zM3 2h2v28H3z"></svg:path>`,
})
export class CarbonArrangeVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrayIcon],svg[carbon-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v22c0 1.1.9 2 2 2h4v-2H6V5h4V3H6c-1.1 0-2 .9-2 2m22-2h-4v2h4v22h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class CarbonArrayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrayBooleansIcon],svg[carbon-array-booleans-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h4v2H4v4H2V4a2 2 0 0 1 2-2m24 0h-4v2h4v4h2V4a2 2 0 0 0-2-2M4 28v-4H2v4a2 2 0 0 0 2 2h4v-2zm24-4v4h-4v2h4a2 2 0 0 0 2-2v-4zm-12-8a6 6 0 1 0-12 0a6 6 0 0 0 12 0m6-4c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m0-2a6 6 0 1 1 0 12a6 6 0 0 1 0-12"></svg:path>`,
})
export class CarbonArrayBooleansIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrayDatesIcon],svg[carbon-array-dates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8h-2V6h-2v2h-6V6h-2v2H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 22v-7h14v7zm14-9H9v-3h2v1h2v-1h6v1h2v-1h2zM4 2h4v2H4v4H2V4a2 2 0 0 1 2-2m26 2v4h-2V4h-4V2h4a2 2 0 0 1 2 2M8 28v2H4a2 2 0 0 1-2-2v-4h2v4zm22-4v4a2 2 0 0 1-2 2h-4v-2h4v-4z"></svg:path>`,
})
export class CarbonArrayDatesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrayNumbersIcon],svg[carbon-array-numbers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v2H5v-2h2v-5H5v-2h2v-1h2v8zm8 0h-4v-2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2h-4v2h4v2h-2c-1.103 0-2 .897-2 2v4h6zm6-8h-4v2h4v2h-3v2h3v2h-4v2h4c1.103 0 2-.897 2-2v-6c0-1.103-.897-2-2-2M2 4v4h2V4h4V2H4a2 2 0 0 0-2 2m26-2h-4v2h4v4h2V4a2 2 0 0 0-2-2M4 28v-4H2v4a2 2 0 0 0 2 2h4v-2zm24-4v4h-4v2h4a2 2 0 0 0 2-2v-4z"></svg:path>`,
})
export class CarbonArrayNumbersIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrayObjectsIcon],svg[carbon-array-objects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7h3v2h-3v4c0 1.2-.542 2.266-1.382 3c.84.734 1.382 1.8 1.382 3v4h3v2h-3c-1.103 0-2-.897-2-2v-4c0-1.102-.897-2-2-2v-2c1.103 0 2-.897 2-2V9c0-1.102.897-2 2-2m14 6V9c0-1.102-.897-2-2-2h-3v2h3v4c0 1.2.543 2.266 1.382 3A3.98 3.98 0 0 0 22 19v4h-3v2h3c1.103 0 2-.897 2-2v-4c0-1.102.897-2 2-2v-2c-1.103 0-2-.897-2-2M2 4v4h2V4h4V2H4a2 2 0 0 0-2 2m26-2h-4v2h4v4h2V4a2 2 0 0 0-2-2M4 28v-4H2v4a2 2 0 0 0 2 2h4v-2zm24-4v4h-4v2h4a2 2 0 0 0 2-2v-4z"></svg:path>`,
})
export class CarbonArrayObjectsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrayStringsIcon],svg[carbon-array-strings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 28h4v2H4a2 2 0 0 1-2-2v-4h2zm7-15v8H6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3v-2H5v-2h4c1.103 0 2 .897 2 2m-2 4H6v2h3zM4 4h4V2H4a2 2 0 0 0-2 2v4h2zm24-2h-4v2h4v4h2V4a2 2 0 0 0-2-2m0 26h-4v2h4a2 2 0 0 0 2-2v-4h-2zm0-7v-2h-4v-6h4v-2h-4c-1.102 0-2 .897-2 2v6c0 1.103.898 2 2 2zm-8-8v6c0 1.103-.897 2-2 2h-5V8h2v3h3c1.103 0 2 .897 2 2m-2 0h-3v6h3z"></svg:path>`,
})
export class CarbonArrayStringsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrivalIcon],svg[carbon-arrival-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h28v2H2zM17.21 5.23l1.39.38l1 11.29l5.87 1.57A2 2 0 0 1 27 20.62a1.88 1.88 0 0 1-1.37 1.52a2 2 0 0 1-1 0l-18.7-5a1.89 1.89 0 0 1-1.33-2.3l1.75-6.5l1.44.38l.61 5.18l6 1.62zm-1-2.2a1 1 0 0 0-.68.69L13 13.07l-2.81-.75l-.5-4.53A1 1 0 0 0 9 7l-3.13-.86a.94.94 0 0 0-.5 0a1 1 0 0 0-.68.68l-2 7.49a3.87 3.87 0 0 0 2.74 4.74l18.71 5A3.87 3.87 0 0 0 29 21a4 4 0 0 0-3-4.42l-4.52-1.21l-.95-10.66a1 1 0 0 0-.72-.85L16.73 3a1.06 1.06 0 0 0-.5 0z"></svg:path>`,
})
export class CarbonArrivalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrowAnnotationIcon],svg[carbon-arrow-annotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.71 12.29L7.42 6H14V4H4v9.99l2 .02v-6.6l6.29 6.29l1.42-1.41z" fill="currentColor"></svg:path><svg:path d="M28 10H18v2h10v16H12V18h-2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2z" fill="currentColor"></svg:path><svg:path d="M19 25h2v-7h3v-2h-8v2h3v7z" fill="currentColor"></svg:path>`,
})
export class CarbonArrowAnnotationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrowDownIcon],svg[carbon-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.59 16.59L17 24.17V4h-2v20.17l-7.59-7.58L6 18l10 10l10-10z"></svg:path>`,
})
export class CarbonArrowDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrowDownLeftIcon],svg[carbon-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 26v-2H9.41L26 7.41L24.59 6L8 22.59V10H6v16z"></svg:path>`,
})
export class CarbonArrowDownLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrowDownRightIcon],svg[carbon-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 26v-2h12.59L6 7.41L7.41 6L24 22.59V10h2v16z"></svg:path>`,
})
export class CarbonArrowDownRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrowLeftIcon],svg[carbon-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16z"></svg:path>`,
})
export class CarbonArrowLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrowRightIcon],svg[carbon-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"></svg:path>`,
})
export class CarbonArrowRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrowShiftDownIcon],svg[carbon-arrow-shift-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v10h5a1 1 0 0 1 .707 1.707l-12 12a1 1 0 0 1-1.414 0l-12-12A1 1 0 0 1 4 16h5V6a2 2 0 0 1 2-2h10a2.003 2.003 0 0 1 2 2m-7 21.586L25.586 18H21V6H11v12H6.414Z"></svg:path>`,
})
export class CarbonArrowShiftDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrowUpIcon],svg[carbon-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4L6 14l1.41 1.41L15 7.83V28h2V7.83l7.59 7.58L26 14z"></svg:path>`,
})
export class CarbonArrowUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrowUpLeftIcon],svg[carbon-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6v2H9.41L26 24.59L24.59 26L8 9.41V22H6V6z"></svg:path>`,
})
export class CarbonArrowUpLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrowUpRightIcon],svg[carbon-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z"></svg:path>`,
})
export class CarbonArrowUpRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrowsHorizontalIcon],svg[carbon-arrows-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.41 26.59L7.83 23H28v-2H7.83l3.58-3.59L10 16l-6 6l6 6zM28 10l-6-6l-1.41 1.41L24.17 9H4v2h20.17l-3.58 3.59L22 16z"></svg:path>`,
})
export class CarbonArrowsHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonArrowsVerticalIcon],svg[carbon-arrows-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z"></svg:path>`,
})
export class CarbonArrowsVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAsleepIcon],svg[carbon-asleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.503 5.414a15.076 15.076 0 0 0 11.593 18.194a11.1 11.1 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1 1 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.07 13.07 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3"></svg:path>`,
})
export class CarbonAsleepIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAsleepFilledIcon],svg[carbon-asleep-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.98 3a1 1 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.07 13.07 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3"></svg:path>`,
})
export class CarbonAsleepFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAssemblyIcon],svg[carbon-assembly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 25.4l-8-4.7v-9.4l8-4.7l8 4.7v9.4zm-6-5.8l6 3.5l6-3.5v-7.1L16 9l-6 3.5z"></svg:path><svg:path fill="currentColor" d="M27 8.2L17 2.3c-.3-.2-.6-.3-1-.3s-.7.1-1 .3L5 8.2c-.6.4-1 1-1 1.7v12.2c0 .7.4 1.4 1 1.7l10 5.9c.3.2.7.3 1 .3s.7-.1 1-.3l10-5.9c.6-.4 1-1 1-1.7V9.9c0-.7-.4-1.4-1-1.7m-1 13.9L16 28L6 22.1V9.9L16 4l10 5.9z"></svg:path>`,
})
export class CarbonAssemblyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAssemblyClusterIcon],svg[carbon-assembly-cluster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.3 4.9l-4.5-2.7c-.3-.1-.5-.2-.8-.2s-.5.1-.7.2l-4.5 2.7c-.5.3-.8.8-.8 1.3v5.6c0 .5.3 1 .7 1.3l4.5 2.7c.2.1.5.2.7.2s.5-.1.7-.2l4.5-2.7c.4-.3.7-.7.7-1.3V6.2c.2-.5-.1-1-.5-1.3M20 11.5l-4 2.4l-4-2.4v-5l4-2.4l4 2.4zm9.3 7.4l-4.5-2.7c-.3-.1-.5-.2-.8-.2s-.5.1-.7.2l-4.5 2.7c-.4.3-.7.7-.7 1.3v5.6c0 .5.3 1 .7 1.3l4.5 2.7c.2.1.5.2.7.2s.5-.1.7-.2l4.5-2.7c.4-.3.7-.7.7-1.3v-5.6c.1-.5-.2-1-.6-1.3M28 25.5l-4 2.4l-4-2.4v-5l4-2.4l4 2.4zm-14.7-6.6l-4.5-2.7c-.3-.1-.5-.2-.8-.2s-.5.1-.7.2l-4.5 2.7c-.5.3-.8.8-.8 1.3v5.6c0 .5.3 1 .7 1.3l4.5 2.7c.3.1.5.2.8.2s.5-.1.7-.2l4.5-2.7c.4-.3.7-.7.7-1.3v-5.6c.1-.5-.2-1-.6-1.3M12 25.5l-4 2.4l-4-2.4v-5l4-2.4l4 2.4z"></svg:path>`,
})
export class CarbonAssemblyClusterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAssemblyReferenceIcon],svg[carbon-assembly-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.438 6.145l3.013-1.78l1.018 1.721l-3.013 1.78zM6 12H4V9.9c0-.7.4-1.4 1-1.7l1.5-.9l1 1.7l-1.5.9zm-2 2h2v4H4zm2.5 10.7L5 23.8c-.6-.4-1-1-1-1.7V20h2v2.1l1.5.9zm1.932 1.128l1.017-1.722l3.013 1.78l-1.017 1.723zM17.5 27.1L16 28l-1.5-.9l-1 1.7l1.5.9c.3.2.7.3 1 .3c.4 0 .7-.1 1-.3l1.5-.9zm2.022-1.193l3.013-1.781l1.018 1.722l-3.014 1.78zM25.2 24.9l-1-1.7l1.8-1V20h2v2.1c0 .7-.4 1.4-1 1.7zM26 14h2v4h-2zm2-2h-2V9.9l-1.8-1l1-1.7l1.8 1c.6.4 1 1 1 1.7zm-8.548-5.96l1.017-1.721l3.013 1.78l-1.017 1.722zM17.5 4.9L16 4l-1.5.9l-1-1.7l1.5-.9c.3-.2.6-.3 1-.3s.7.1 1 .3l1.5.9z"></svg:path>`,
})
export class CarbonAssemblyReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAssetIcon],svg[carbon-asset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 24a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M30 6a4.004 4.004 0 0 0-4-4a3.95 3.95 0 0 0-1.854.477l-16.389 8.48a9.992 9.992 0 1 0 13.309 13.236l8.49-16.4A3.95 3.95 0 0 0 30 6m-4-2a2 2 0 1 1-2 2a2 2 0 0 1 2-2m-3.98 1.808c-.004.065-.02.126-.02.192a4.004 4.004 0 0 0 4 4c.065 0 .125-.016.188-.019l-4.332 8.362a10.02 10.02 0 0 0-8.215-8.196ZM12 28a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8"></svg:path>`,
})
export class CarbonAssetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAssetConfirmIcon],svg[carbon-asset-confirm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 27.18l-2.59-2.59L17 26l4 4l7-7l-1.41-1.41zM12 24a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M26 2a3.86 3.86 0 0 0-1.85.48L7.76 10.96A9.99 9.99 0 0 0 12 30a9.4 9.4 0 0 0 2-.21v-2.04a8.2 8.2 0 0 1-2 .25a8 8 0 1 1 8-8a8 8 0 0 1-.06 1h2.78l6.84-13.21A3.973 3.973 0 0 0 26 2m-4.14 16.34a10.02 10.02 0 0 0-8.22-8.19l8.38-4.34c0 .06-.02.12-.02.19a4 4 0 0 0 4 4c.06 0 .12-.02.19-.02ZM26 8a2 2 0 1 1 2-2a2.006 2.006 0 0 1-2 2"></svg:path>`,
})
export class CarbonAssetConfirmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAssetDigitalTwinIcon],svg[carbon-asset-digital-twin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="25" cy="7" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 23a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:circle cx="12" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="17.909" cy="5.705" r="1" fill="currentColor"></svg:circle><svg:circle cx="9.787" cy="9.907" r="1" fill="currentColor"></svg:circle><svg:circle cx="12.495" cy="8.506" r="1" fill="currentColor"></svg:circle><svg:circle cx="15.201" cy="7.105" r="1" fill="currentColor"></svg:circle><svg:circle cx="4.696" cy="13.187" r="1" fill="currentColor"></svg:circle><svg:circle cx="2.133" cy="21.631" r="1" fill="currentColor"></svg:circle><svg:circle cx="3.079" cy="24.516" r="1" fill="currentColor"></svg:circle><svg:circle cx="4.848" cy="26.982" r="1" fill="currentColor"></svg:circle><svg:circle cx="7.272" cy="28.81" r="1" fill="currentColor"></svg:circle><svg:circle cx="2.098" cy="18.596" r="1" fill="currentColor"></svg:circle><svg:circle cx="2.979" cy="15.691" r="1" fill="currentColor"></svg:circle><svg:circle cx="7.081" cy="11.308" r="1" fill="currentColor"></svg:circle><svg:circle cx="20.616" cy="4.304" r="1" fill="currentColor"></svg:circle><svg:circle cx="23.323" cy="2.903" r="1" fill="currentColor"></svg:circle><svg:circle cx="28.988" cy="8.89" r="1" fill="currentColor"></svg:circle><svg:circle cx="27.587" cy="11.596" r="1" fill="currentColor"></svg:circle><svg:circle cx="26.186" cy="14.303" r="1" fill="currentColor"></svg:circle><svg:circle cx="24.784" cy="17.01" r="1" fill="currentColor"></svg:circle><svg:circle cx="23.383" cy="19.717" r="1" fill="currentColor"></svg:circle><svg:circle cx="21.982" cy="22.424" r="1" fill="currentColor"></svg:circle><svg:circle cx="18.637" cy="27.464" r="1" fill="currentColor"></svg:circle><svg:circle cx="16.092" cy="29.122" r="1" fill="currentColor"></svg:circle><svg:circle cx="13.166" cy="29.932" r="1" fill="currentColor"></svg:circle><svg:circle cx="10.133" cy="29.825" r="1" fill="currentColor"></svg:circle><svg:circle cx="20.572" cy="25.125" r="1" fill="currentColor"></svg:circle><svg:circle cx="28.893" cy="3.24" r="1" fill="currentColor"></svg:circle><svg:circle cx="26.188" cy="2.004" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="26" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="20" r="1" fill="currentColor"></svg:circle><svg:circle cx="18" cy="20" r="1" fill="currentColor"></svg:circle><svg:circle cx="6.804" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="17.196" cy="23" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="25.196" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="14.804" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="14.804" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="25.196" r="1" fill="currentColor"></svg:circle><svg:circle cx="6.804" cy="23" r="1" fill="currentColor"></svg:circle><svg:circle cx="17.196" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="30" cy="6.026" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonAssetDigitalTwinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAssetMovementIcon],svg[carbon-asset-movement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h14.2l-2.6 2.6L25 17l5-5l-5-5l-1.4 1.4l2.6 2.6H12zm16 6H14.8l2.6-2.6L16 15l-5 5l5 5l1.4-1.4l-2.6-2.6H28zM22 7V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2v3H4V4h16v3z"></svg:path>`,
})
export class CarbonAssetMovementIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAssetViewIcon],svg[carbon-asset-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22" cy="24" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24zM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m-10-4a4 4 0 1 1 2.981-6.667l-1.49 1.334A2 2 0 1 0 12 22z"></svg:path><svg:path fill="currentColor" d="M26 2a3.86 3.86 0 0 0-1.85.48L7.76 10.96A9.99 9.99 0 0 0 12 30v-2a8 8 0 1 1 5.63-13.68l1.4-1.4a10 10 0 0 0-5.39-2.77l8.38-4.34c0 .06-.02.12-.02.19a4 4 0 0 0 4 4c.06 0 .12-.02.19-.02L23.07 16h2.24l4.25-8.21A3.973 3.973 0 0 0 26 2m0 6a2 2 0 1 1 2-2a2.006 2.006 0 0 1-2 2"></svg:path>`,
})
export class CarbonAssetViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAsteriskIcon],svg[carbon-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28.316 13.949l-.632-1.898L17 15.612V4h-2v11.612L4.316 12.051l-.632 1.898l10.684 3.561L7.2 27.066l1.6 1.201l7.2-9.6l7.2 9.6l1.6-1.201l-7.168-9.556z"></svg:path>`,
})
export class CarbonAsteriskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAsyncIcon],svg[carbon-async-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.216 4H26V2h-7v6h2V5.096A11.96 11.96 0 0 1 28 16c0 6.617-5.383 12-12 12v2c7.72 0 14-6.28 14-14c0-5.009-2.632-9.512-6.784-12"></svg:path><svg:path fill="currentColor" d="M16 20a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M15 9h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M16 4V2C8.28 2 2 8.28 2 16c0 4.977 2.607 9.494 6.784 12H6v2h7v-6h-2v2.903A11.97 11.97 0 0 1 4 16C4 9.383 9.383 4 16 4"></svg:path>`,
})
export class CarbonAsyncIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAtIcon],svg[carbon-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3A12.92 12.92 0 0 0 3 16v1a13 13 0 0 0 13 13h7v-2h-7A11 11 0 0 1 5 17v-1A10.94 10.94 0 0 1 16 5a10.64 10.64 0 0 1 11 11c0 3.59-1.4 5-3.66 5c-1.58 0-2.34-1.29-2.34-3v-8h-2v1.94A3.84 3.84 0 0 0 15.5 10a5.48 5.48 0 0 0-5.5 5.44v2.12A5.48 5.48 0 0 0 15.5 23a4.28 4.28 0 0 0 4-2.46A4.35 4.35 0 0 0 23.41 23c3.07 0 5.59-2 5.59-7A12.72 12.72 0 0 0 16 3m3 14.56a3.5 3.5 0 0 1-7 0v-2.12a3.5 3.5 0 0 1 7 0Z"></svg:path>`,
})
export class CarbonAtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAttachmentIcon],svg[carbon-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28.1 18.9l-15-15c-2.5-2.6-6.6-2.6-9.2-.1s-2.6 6.7 0 9.2l.1.1L6.8 16l1.4-1.4l-2.9-2.9c-1.7-1.7-1.7-4.6 0-6.3s4.6-1.8 6.3-.1l.1.1l14.9 14.9c1.8 1.7 1.8 4.6.1 6.3c-1.7 1.8-4.6 1.8-6.3.1l-.1-.1l-7.4-7.4c-1-1-.9-2.6 0-3.5c1-.9 2.5-.9 3.5 0l4.1 4.1l1.4-1.4l-4.2-4.2c-1.8-1.7-4.6-1.6-6.3.2c-1.6 1.7-1.6 4.4 0 6.2l7.5 7.5c2.5 2.6 6.6 2.6 9.2.1s2.6-6.7 0-9.3c0 .1 0 0 0 0"></svg:path>`,
})
export class CarbonAttachmentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAudioConsoleIcon],svg[carbon-audio-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 14.005h-1v-12h-2v12h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v10h2v-10h1a2.003 2.003 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 4h-4v-2h4zm-10-12h-1v-4h-2v4h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v18h2v-18h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 4h-4v-2h4zm-10 10H7v-18H5v18H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v4h2v-4h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 4H4v-2h4z"></svg:path>`,
})
export class CarbonAudioConsoleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAugmentedRealityIcon],svg[carbon-augmented-reality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.447 9.106l-6-3a1 1 0 0 0-.894 0l-6 3A1 1 0 0 0 14 10v7a1 1 0 0 0 .553.895l6 3a1 1 0 0 0 .894 0l6-3A1 1 0 0 0 28 17v-7a1 1 0 0 0-.553-.895M21 8.118L24.764 10L21 11.882L17.236 10Zm-5 3.5l4 2v4.764l-4-2Zm6 6.764v-4.764l4-2v4.764Z"></svg:path><svg:circle cx="13.5" cy="24.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20 30H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13v2H7v24h13v-4h2v4a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonAugmentedRealityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAutoScrollIcon],svg[carbon-auto-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 16a4 4 0 1 0 4-4a4 4 0 0 0-4 4zm6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2z" fill="currentColor"></svg:path><svg:path d="M16 27.17l-5.6-5.59L9 23l7 7l7-7l-1.41-1.41L16 27.17z" fill="currentColor"></svg:path><svg:path d="M16 4.83l5.58 5.57L23 9l-7-7l-7 7l1.41 1.41L16 4.83z" fill="currentColor"></svg:path>`,
})
export class CarbonAutoScrollIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAutomaticIcon],svg[carbon-automatic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 16h-4a2 2 0 0 0-2 2v12h2v-5h4v5h2V18a2 2 0 0 0-2-2m-4 7v-5h4v5zm-6 4a10.99 10.99 0 0 1-9.216-5H12v-2H4v8h2v-3.685A13.02 13.02 0 0 0 16 29zm4-17h5.216A10.997 10.997 0 0 0 5 16H3a13.005 13.005 0 0 1 23-8.315V4h2v8h-8z"></svg:path>`,
})
export class CarbonAutomaticIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAutoscalingIcon],svg[carbon-autoscaling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 28H12v-2h10V10H6v10H4V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M28 22h-2v-2h2V4H12v2h-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M10 14v2h4.586L3 27.586L4.414 29L16 17.414V22h2v-8z"></svg:path>`,
})
export class CarbonAutoscalingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAvroIcon],svg[carbon-avro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11H3c-1.1 0-2 .9-2 2v8h2v-4h2v4h2v-8c0-1.1-.9-2-2-2m0 4H3v-2h2zm16-4h-4v10h2v-4h.4l1.6 4h2l-1.6-4c.9-.2 1.6-1 1.6-2v-2c0-1.1-.9-2-2-2m0 4h-2v-2h2zm-9 3l-1-7H9l2 10h2l2-10h-2zm17-7h-2c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m0 8h-2v-6h2z"></svg:path>`,
})
export class CarbonAvroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonAwakeIcon],svg[carbon-awake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2v4.96h-2zm6.687 6.89l3.507-3.506l1.414 1.414l-3.507 3.507zM25.04 15H30v2h-4.96zm-3.347 8.104l1.414-1.414l3.507 3.507L25.2 26.61zM15 25.04h2V30h-2zm-9.604.162l3.508-3.507l1.414 1.414l-3.507 3.507zM2 15h4.96v2H2zm3.39-8.197l1.415-1.414l3.507 3.507l-1.414 1.414zM16 12a4 4 0 1 1-4 4a4 4 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6"></svg:path>`,
})
export class CarbonAwakeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBadgeIcon],svg[carbon-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 2l1.593 3L28 5.414l-2.5 2.253L26 11l-3-1.875L20 11l.5-3.333L18 5.414L21.5 5z"></svg:path><svg:path fill="currentColor" d="m22.717 13.249l-1.938-.498a6.994 6.994 0 1 1-5.028-8.531l.499-1.937A8.99 8.99 0 0 0 8 17.69V30l6-4l6 4V17.708a8.96 8.96 0 0 0 2.717-4.459M18 26.263l-4-2.667l-4 2.667V19.05a8.92 8.92 0 0 0 8 .006Z"></svg:path>`,
})
export class CarbonBadgeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBaggageClaimIcon],svg[carbon-baggage-claim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6" cy="26" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 18h-3v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h-3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-9-2h4v2h-4Zm9 12H14v-8h14Z"></svg:path><svg:path fill="currentColor" d="M10 6h4v6h2V6h4v6h2V6h4v6h2V6.005A2.005 2.005 0 0 0 25.995 4H4.005A2.005 2.005 0 0 0 2 6.005v13.99A2.005 2.005 0 0 0 4.005 22H10ZM8 20H4V6h4Z"></svg:path>`,
})
export class CarbonBaggageClaimIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBarIcon],svg[carbon-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 11H15a1 1 0 0 0-1 1v4a6.005 6.005 0 0 0 5 5.91V28h-3v2h8v-2h-3v-6.09A6.005 6.005 0 0 0 26 16v-4a1 1 0 0 0-1-1m-1 5a4 4 0 0 1-8 0v-3h8Z"></svg:path><svg:path fill="currentColor" d="M15 1h-5a1 1 0 0 0-1 1v7.37A6.09 6.09 0 0 0 6 15v14a1 1 0 0 0 1 1h5v-2H8V15c0-3.187 2.231-4.02 2.316-4.051L11 10.72V3h3v5h2V2a1 1 0 0 0-1-1"></svg:path>`,
})
export class CarbonBarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBarcodeIcon],svg[carbon-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h2v22H2zm10 0h2v20h-2zM6 6h4v20H6zm10 0h4v20h-4zm6 0h4v20h-4zm6 0h2v22h-2z"></svg:path>`,
})
export class CarbonBarcodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBareMetalServerIcon],svg[carbon-bare-metal-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 10H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 4v4h20V4Z"></svg:path><svg:circle cx="9" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 20H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 14v4h20v-4Z"></svg:path><svg:circle cx="9" cy="26" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 24v4h20v-4Z"></svg:path>`,
})
export class CarbonBareMetalServerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBareMetalServer01Icon],svg[carbon-bare-metal-server-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 28v-6h-2v6H5v2h22v-2z"></svg:path><svg:circle cx="9" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 20H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 14v4h20v-4Z"></svg:path>`,
})
export class CarbonBareMetalServer01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBareMetalServer02Icon],svg[carbon-bare-metal-server-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 28v-6h-2v6H5v2h22v-2z"></svg:path><svg:circle cx="9" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 20H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 14v4h20v-4Z"></svg:path><svg:circle cx="9" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 10H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 4v4h20V4Z"></svg:path>`,
})
export class CarbonBareMetalServer02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBarrierIcon],svg[carbon-barrier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs></svg:defs><svg:path d="M15 5h2v4h-2z" fill="currentColor"></svg:path><svg:path d="M15 11h2v4h-2z" fill="currentColor"></svg:path><svg:path d="M15 17h2v4h-2z" fill="currentColor"></svg:path><svg:path d="M15 23h2v4h-2z" fill="currentColor"></svg:path>`,
})
export class CarbonBarrierIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBasketballIcon],svg[carbon-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m11.95 13h-5.91a14.4 14.4 0 0 1 2.738-7.153A11.94 11.94 0 0 1 27.95 15M17 15V4.05a11.9 11.9 0 0 1 6.287 2.438A16.27 16.27 0 0 0 20.04 15Zm-2 0h-3.04a16.27 16.27 0 0 0-3.247-8.512A11.9 11.9 0 0 1 15 4.051Zm0 2v10.95a11.9 11.9 0 0 1-6.287-2.438A16.27 16.27 0 0 0 11.96 17Zm2 0h3.04a16.27 16.27 0 0 0 3.248 8.512A11.9 11.9 0 0 1 17 27.949ZM7.22 7.847A14.4 14.4 0 0 1 9.96 15H4.051a11.94 11.94 0 0 1 3.17-7.153M4.05 17h5.91a14.4 14.4 0 0 1-2.738 7.153A11.94 11.94 0 0 1 4.05 17m20.73 7.153A14.4 14.4 0 0 1 22.04 17h5.908a11.94 11.94 0 0 1-3.17 7.153"></svg:path>`,
})
export class CarbonBasketballIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBastionHostIcon],svg[carbon-bastion-host-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.527 2.709A2 2 0 0 0 26 2h-2.69a1.5 1.5 0 0 0-1.343.83L21.382 4H20v-.5A1.5 1.5 0 0 0 18.5 2h-5A1.5 1.5 0 0 0 12 3.5V4h-1.382l-.585-1.17A1.5 1.5 0 0 0 8.69 2H6a2 2 0 0 0-1.972 2.333L4.732 8.5A3 3 0 0 0 7.69 11H8v12a3.003 3.003 0 0 0-3 3v4h22v-4a3.003 3.003 0 0 0-3-3V11h.31a3 3 0 0 0 2.958-2.5l.704-4.167a2 2 0 0 0-.445-1.624M25 26v2H7v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1m-3-3H10V11h12Zm3.296-14.833A1 1 0 0 1 24.31 9H7.69a1 1 0 0 1-.986-.833L6 4h2.382l1 2H14V4h4v2h4.617l1.001-2H26Z"></svg:path>`,
})
export class CarbonBastionHostIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBatIcon],svg[carbon-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.91 6.584A1 1 0 0 0 31 6c-4.768 0-8.26.889-11 2.844V3h-2v3h-4V3h-2v5.844C9.26 6.889 5.768 6 1 6a1 1 0 0 0-.756 1.654C1.945 9.622 3 11.704 3 16a1 1 0 0 0 1 1c2.768 0 6 1.31 6 5a1.004 1.004 0 0 0 .934.998c.416.03 4.066.39 4.066 4.002a1 1 0 0 0 2 0c0-3.613 3.65-3.973 4.062-4.002A1 1 0 0 0 22 22c0-3.69 3.232-5 6-5a1 1 0 0 0 1-1c0-4.296 1.055-6.378 2.756-8.346a1 1 0 0 0 .153-1.07m-4.894 8.46c-3.385.308-6.553 2.229-6.97 6.079A6.55 6.55 0 0 0 16 23.609a6.55 6.55 0 0 0-4.046-2.486c-.417-3.85-3.585-5.77-6.97-6.079a13.2 13.2 0 0 0-1.939-6.98c4.132.273 7.033 1.428 9.248 3.643A1 1 0 0 0 14 11V8h4v3a1 1 0 0 0 1.707.707c2.215-2.215 5.116-3.37 9.248-3.642a13.2 13.2 0 0 0-1.939 6.98Z"></svg:path>`,
})
export class CarbonBatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBatchJobIcon],svg[carbon-batch-job-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 26v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 26 20.101V18h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 20.101 24H18v2h2.101c.13.637.384 1.229.732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V32h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 29.899 26zm-7 2c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3m-5-11h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2m-8-2h8V4h-8z"></svg:path><svg:path fill="currentColor" d="M17 21H8a2 2 0 0 1-2-2V7h2v12h9z"></svg:path><svg:path fill="currentColor" d="M13 25H4c-1.103 0-2-.897-2-2V11h2v12h9z"></svg:path>`,
})
export class CarbonBatchJobIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBatchJobStepIcon],svg[carbon-batch-job-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 20v4h-4v4h-4v2h6v-4h4v-4h4v-2zM8 4h8v6c0 1.103.897 2 2 2h6v4h2v-6a1 1 0 0 0-.293-.707l-7-7A1 1 0 0 0 18 2H8c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h4v-2H8zm15.586 6H18V4.414z"></svg:path>`,
})
export class CarbonBatchJobStepIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBatteryChargingIcon],svg[carbon-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 11h-1v-1a2 2 0 0 0-2-2h-4v2h4v3h3v6h-3v3h-5v2h5a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2M11 22H6V10h6V8H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5z"></svg:path><svg:path fill="currentColor" d="m14.81 23.58l-1.62-1.16L17.06 17H9.37l6.85-8.62l1.56 1.24L13.51 15h7.43z"></svg:path>`,
})
export class CarbonBatteryChargingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBatteryEmptyIcon],svg[carbon-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 24H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v6a2.003 2.003 0 0 1-2 2h-1v1a2.003 2.003 0 0 1-2 2M6 10v12h18v-3h3v-6h-3v-3Z"></svg:path>`,
})
export class CarbonBatteryEmptyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBatteryErrorIcon],svg[carbon-battery-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 11h-1v-1c0-1.1-.9-2-2-2h-7v2h7v3h3v6h-3v3H6v-5H4v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-1h1c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2M9 15c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6M9 5c2.21 0 4 1.79 4 4c0 .71-.2 1.41-.57 2.02L6.98 5.57A4 4 0 0 1 9 5M5.57 6.98l5.45 5.45A4 4 0 0 1 9 13c-2.21 0-4-1.79-4-4c0-.71.2-1.41.57-2.02"></svg:path>`,
})
export class CarbonBatteryErrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBatteryFullIcon],svg[carbon-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 24H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-2 2M6 10v12h18v-3h3v-6h-3v-3Z"></svg:path><svg:path fill="currentColor" d="M22 12v8H8v-8z"></svg:path>`,
})
export class CarbonBatteryFullIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBatteryHalfIcon],svg[carbon-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 24H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-2 2M6 10v12h18v-3h3v-6h-3v-3Z"></svg:path><svg:path fill="currentColor" d="M16 12v8H8v-8z"></svg:path>`,
})
export class CarbonBatteryHalfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBatteryLowIcon],svg[carbon-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 24H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v6a2.003 2.003 0 0 1-2 2h-1v1a2.003 2.003 0 0 1-2 2M6 10v12h18v-3h3v-6h-3v-3Z"></svg:path><svg:path fill="currentColor" d="M10 12v8H8v-8z"></svg:path>`,
})
export class CarbonBatteryLowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBatteryQuarterIcon],svg[carbon-battery-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 24H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v6a2.003 2.003 0 0 1-2 2h-1v1a2.003 2.003 0 0 1-2 2M6 10v12h18v-3h3v-6h-3v-3Z"></svg:path><svg:path fill="currentColor" d="M12 12v8H8v-8z"></svg:path>`,
})
export class CarbonBatteryQuarterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBatteryWarningIcon],svg[carbon-battery-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 11h-1v-1c0-1.1-.9-2-2-2H14v2h10v3h3v6h-3v3H6v-5H4v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-1h1c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m-13 3c0-.13-.03-.27-.08-.39L8.89 3.55A1 1 0 0 0 8 3c-.38 0-.73.21-.89.55l-5 10a.99.99 0 0 0 .45 1.34c.14.07.29.11.45.11h10c.55 0 1-.45 1-1zm-9.38-1L8 6.24L11.38 13z"></svg:path>`,
})
export class CarbonBatteryWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBeeIcon],svg[carbon-bee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6m-4.25 7.87h8.5v4.25h-8.5zM16 28.25A4.27 4.27 0 0 1 11.75 24v-.13h8.5V24A4.27 4.27 0 0 1 16 28.25m4.25-12.13h-8.5V16a4.25 4.25 0 0 1 8.5 0zm10.41 3.09L24 13v9.1a4 4 0 0 0 8 0a3.83 3.83 0 0 0-1.34-2.89M28 24.35a2.25 2.25 0 0 1-2.25-2.25V17l3.72 3.47A2.05 2.05 0 0 1 30.2 22a2.25 2.25 0 0 1-2.2 2.35M0 22.1a4 4 0 0 0 8 0V13l-6.66 6.21A3.88 3.88 0 0 0 0 22.1m2.48-1.56L6.25 17v5.1a2.25 2.25 0 0 1-4.5 0a2.05 2.05 0 0 1 .73-1.56M15 5.5A3.5 3.5 0 1 0 11.5 9A3.5 3.5 0 0 0 15 5.5m-5.25 0a1.75 1.75 0 1 1 1.75 1.75A1.77 1.77 0 0 1 9.75 5.5M20.5 2A3.5 3.5 0 1 0 24 5.5A3.5 3.5 0 0 0 20.5 2m0 5.25a1.75 1.75 0 1 1 1.75-1.75a1.77 1.77 0 0 1-1.75 1.75"></svg:path>`,
})
export class CarbonBeeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBeeBatIcon],svg[carbon-bee-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13" cy="8" r="2" fill="currentColor"></svg:circle><svg:circle cx="19" cy="8" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M31.808 8.665a.875.875 0 0 0-.808-.54h-2c-4.21 0-7.721 2.002-9.165 4.901a4.82 4.82 0 0 0-7.67 0C10.721 10.127 7.21 8.125 3 8.125H1a.875.875 0 0 0-.618 1.494l.101.101a5.39 5.39 0 0 1 1.678 6.031A.875.875 0 0 0 3 16.875a2.9 2.9 0 0 1 2.159.727c.978.981.971 2.887.966 4.148V22a.875.875 0 0 0 .875.875h4.125V23a4.875 4.875 0 0 0 9.75 0v-.125H25a.875.875 0 0 0 .875-.875v-.25c-.005-1.26-.011-3.166.967-4.148A2.9 2.9 0 0 1 29 16.875a.875.875 0 0 0 .839-1.124a5.39 5.39 0 0 1 1.676-6.03l.104-.102a.875.875 0 0 0 .19-.954M16 12.875A3.13 3.13 0 0 1 19.125 16v.125h-6.25V16A3.13 3.13 0 0 1 16 12.875m-3.125 5h6.25v3.25h-6.25Zm-5 3.25c-.019-1.459-.185-3.462-1.477-4.759a4.2 4.2 0 0 0-2.31-1.152a6.66 6.66 0 0 0-1.136-5.339H3c4.556 0 8.125 2.69 8.125 6.125v5.125ZM19.124 23a3.125 3.125 0 0 1-6.25 0v-.125h6.25Zm8.787-7.786a4.2 4.2 0 0 0-2.31 1.152c-1.292 1.297-1.458 3.3-1.476 4.759h-3.251V16c0-3.435 3.569-6.125 8.125-6.125h.048a6.66 6.66 0 0 0-1.136 5.34"></svg:path>`,
})
export class CarbonBeeBatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBetaIcon],svg[carbon-beta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.717 13.77A5.92 5.92 0 0 0 23 9c0-3.533-2.878-6-7-6a6.627 6.627 0 0 0-7 7v21h2v-5.88a8.13 8.13 0 0 0 6 2.48a7.383 7.383 0 0 0 7.653-7.6a6.64 6.64 0 0 0-3.936-6.23M17 25.6a5.68 5.68 0 0 1-6-5.6V10a4.686 4.686 0 0 1 5-5c3.037 0 5 1.57 5 4a3.873 3.873 0 0 1-4 4v2c3.434 0 5.653 1.963 5.653 5A5.39 5.39 0 0 1 17 25.6"></svg:path>`,
})
export class CarbonBetaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBicycleIcon],svg[carbon-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 16c-.088 0-.173.01-.26.013L24.237 9H28V7h-5a1 1 0 0 0-.978 1.21L22.62 11H12.387l-1-3H14V6H7v2h2.28l1.041 3.123l-2.57 5.14A6 6 0 1 0 11.91 23h2.61a2 2 0 0 0 1.562-.75l7.058-8.824l.644 3.004A5.99 5.99 0 1 0 26 16M6 26a4 4 0 1 1 .836-7.91l-1.73 3.463l.009.004A1 1 0 0 0 5 22a.993.993 0 0 0 1.885.443l.01.004L8.618 19A3.984 3.984 0 0 1 6 26m5.91-5a6 6 0 0 0-2.373-3.836l1.678-3.358L13.613 21Zm3.458-1.06L13.054 13h7.865ZM26 26a3.988 3.988 0 0 1-1.786-7.56l.808 3.77l.02-.004A.986.986 0 0 0 26 23a1 1 0 0 0 1-1a1 1 0 0 0-.041-.206l.02-.004l-.81-3.773A3.993 3.993 0 0 1 26 26"></svg:path>`,
})
export class CarbonBicycleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBinding01Icon],svg[carbon-binding-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10h24v2H4zm0 10h24v2H4z"></svg:path>`,
})
export class CarbonBinding01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBinding02Icon],svg[carbon-binding-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25 8l-1.628 1.162L28.542 16l-5.156 6.838L25.014 24L31 16z"></svg:path><svg:path fill="currentColor" d="m20 8l-1.628 1.162L23.542 16l-5.156 6.838L20.014 24L26 16zM8.628 9.162L7 8l-6 8l5.986 8l1.628-1.162L3.458 16z"></svg:path><svg:path fill="currentColor" d="m12 8l-6 8l5.986 8l1.628-1.162L8.458 16l5.17-6.838z"></svg:path>`,
})
export class CarbonBinding02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBinocularsIcon],svg[carbon-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8V5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v3a2 2 0 0 0-2 2v2h-4v-2a2 2 0 0 0-2-2V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3a2 2 0 0 0-2 2v12a2 2 0 0 0 1 1.72V27a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3.28A2 2 0 0 0 14 22v-2h4v2a2 2 0 0 0 1 1.72V27a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3.28A2 2 0 0 0 30 22V10a2 2 0 0 0-2-2M11 26H5v-2h6Zm1-4H4V10h2V6h4v4h2Zm2-4v-4h4v4Zm13 8h-6v-2h6Zm1-4h-8V10h2V6h4v4h2Z"></svg:path>`,
})
export class CarbonBinocularsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBlandAltmanPlotIcon],svg[carbon-bland-altman-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m7-4c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m7 4c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m6-6v-2H4V2H2v26c0 1.1.9 2 2 2h26v-2H4V16zM10 8c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m7 0c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m11-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></svg:path>`,
})
export class CarbonBlandAltmanPlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBlochSphereIcon],svg[carbon-bloch-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.87 7.84l-1.74-1L16 14a2 2 0 1 0 2 2a2 2 0 0 0-.27-1z" fill="currentColor"></svg:path><svg:path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 2a12 12 0 0 1 11.17 7.65a25.69 25.69 0 0 0-3.69-1.5l-1 1.77a22.7 22.7 0 0 1 5.41 2.39a11.05 11.05 0 0 1 0 3.38A22.92 22.92 0 0 1 16 21a22.92 22.92 0 0 1-11.87-3.31a11.05 11.05 0 0 1 0-3.38A22.8 22.8 0 0 1 15 11V9a25 25 0 0 0-10.17 2.6A12 12 0 0 1 16 4zm0 24a12 12 0 0 1-11.17-7.65A24.88 24.88 0 0 0 16 23a24.88 24.88 0 0 0 11.17-2.65A12 12 0 0 1 16 28z" fill="currentColor"></svg:path>`,
})
export class CarbonBlochSphereIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBlockStorageIcon],svg[carbon-block-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12v-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9h-2v9H4V12"></svg:path><svg:path fill="currentColor" d="M22 12h-8V4h8zM12 4v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2m2 14v4h-4v-4zm-6 0v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m20-1v2h-2v-2zm-4-1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1"></svg:path>`,
})
export class CarbonBlockStorageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBlockStorageAltIcon],svg[carbon-block-storage-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 20h-2v2h2v6H4v-6h2v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 20H8v-7h7zm-5-2h3v-3h-3zm14 2h-7v-7h7zm-5-2h3v-3h-3zm-4-7H8V4h7zm-5-2h3V6h-3zm14 2h-7V4h7zm-5-2h3V6h-3z"></svg:path>`,
})
export class CarbonBlockStorageAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBlockchainIcon],svg[carbon-blockchain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 24H4V8h2ZM28 8h-2v16h2Zm-4-2V4H8v2Zm0 22v-2H8v2Z"></svg:path>`,
})
export class CarbonBlockchainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBlogIcon],svg[carbon-blog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 24h10v2H4zm0-6h10v2H4zm22-4H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M6 6v6h20V6zm20 22h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-6-8v6h6v-6z"></svg:path>`,
})
export class CarbonBlogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBluetoothIcon],svg[carbon-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30a1.1 1.1 0 0 1-.42-.09A1 1 0 0 1 15 29V18.41L8.41 25L7 23.59L14.59 16L7 8.41L8.41 7L15 13.59V3a1 1 0 0 1 .58-.91a1 1 0 0 1 1.07.15l7 6A1 1 0 0 1 24 9a1 1 0 0 1-.29.75L17.41 16l6.3 6.29A1 1 0 0 1 24 23a1 1 0 0 1-.35.72l-7 6A1 1 0 0 1 16 30m1-11.59v8.42l4.53-3.89Zm0-13.24v8.42l4.53-4.53Z"></svg:path>`,
})
export class CarbonBluetoothIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBluetoothOffIcon],svg[carbon-bluetooth-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 26.59L5.41 4L4 5.41L14.59 16L7 23.59L8.41 25L15 18.41V29a1 1 0 0 0 .58.91A1.1 1.1 0 0 0 16 30a1 1 0 0 0 .65-.24l6.3-5.4L26.59 28zm-11 .24v-8.42l4.53 4.53zm0-14.08V5.17l4.53 3.89l-4.11 4.11l1.41 1.41l4.88-4.87A1 1 0 0 0 24 9a1 1 0 0 0-.35-.72l-7-6a1 1 0 0 0-1.07-.15A1 1 0 0 0 15 3v7.75z"></svg:path>`,
})
export class CarbonBluetoothOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBookIcon],svg[carbon-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7zM6 10h7v2H6zm0 5h7v2H6zm0 5h7v2H6z"></svg:path><svg:path fill="currentColor" d="M28 5H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h11v18H4Zm13 18V7h11v18Z"></svg:path>`,
})
export class CarbonBookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBookmarkIcon],svg[carbon-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4v22.75l-7.1-3.59l-.9-.45l-.9.45L8 26.75V4zm0-2H8a2 2 0 0 0-2 2v26l10-5l10 5V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonBookmarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBookmarkAddIcon],svg[carbon-bookmark-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 16v10.752l-7.096-3.59l-.904-.457l-.9.456L8 26.748V4h10V2H8a2 2 0 0 0-2 2v26l10-5.054L26 30V16Z"></svg:path><svg:path fill="currentColor" d="M26 6V2h-2v4h-4v2h4v4h2V8h4V6z"></svg:path>`,
})
export class CarbonBookmarkAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBookmarkFilledIcon],svg[carbon-bookmark-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 2H8a2 2 0 0 0-2 2v26l10-5.054L26 30V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonBookmarkFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBooleanIcon],svg[carbon-boolean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 23a7 7 0 1 1 7-7a7.01 7.01 0 0 1-7 7m0-12a5 5 0 1 0 5 5a5.006 5.006 0 0 0-5-5"></svg:path><svg:circle cx="9" cy="16" r="7" fill="currentColor"></svg:circle>`,
})
export class CarbonBooleanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBootIcon],svg[carbon-boot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 17h-6a1 1 0 0 1-1-1V4a2.003 2.003 0 0 0-2-2H5a2.003 2.003 0 0 0-2 2v24a2.003 2.003 0 0 0 2 2h22a2.003 2.003 0 0 0 2-2v-6a5.006 5.006 0 0 0-5-5m3 5v2h-4v-5h1a3.003 3.003 0 0 1 3 3M15 4v2h-4v2h4v2h-4v2h4v2h-4v2h4a3.003 3.003 0 0 0 3 3h3v5h-6.838l-3-1H5V4Zm10 24v-1h-2v1h-2v-1h-2v1h-2v-1h-2v1h-2v-1h-2v1H5v-3h5.838l3 1H27v2Z"></svg:path>`,
})
export class CarbonBootIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBootVolumeIcon],svg[carbon-boot-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 22v-2h-3v-2h-2v2h-1v2h1v6c0 1.103.898 2 2 2h3v-2h-3v-6zm-9 8h-3c-1.102 0-2-.897-2-2v-6c0-1.103.898-2 2-2h3c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2m-3-8v6h3v-6zm-6 8h-3c-1.102 0-2-.897-2-2v-6c0-1.103.898-2 2-2h3c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2m-3-8v6h3v-6zm-6-2H2v-4H0v14h5c1.103 0 2-.897 2-2v-6c0-1.103-.897-2-2-2m-3 8v-6h3v6zm2-14V5h7.586l4 4H28v7h2V9a2 2 0 0 0-2-2H16.414L13 3.586A2 2 0 0 0 11.586 3H4a2 2 0 0 0-2 2v9z"></svg:path>`,
})
export class CarbonBootVolumeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBootVolumeAltIcon],svg[carbon-boot-volume-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30h-7c-1.103 0-2-.897-2-2v-2h2v2h7v-7h-2v-2h2c1.103 0 2 .897 2 2v7c0 1.103-.897 2-2 2"></svg:path><svg:path fill="currentColor" d="M12 24h2v-6.586L22.582 26L24 24.586L15.414 16H22v-2H12z"></svg:path><svg:path fill="currentColor" d="M8 27H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.586A2 2 0 0 1 13 3.586L16.414 7H28a2 2 0 0 1 2 2v7h-2V9H15.586l-4-4H4v20h4z"></svg:path>`,
})
export class CarbonBootVolumeAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBorderBottomIcon],svg[carbon-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 29H3v-2h26zm0-4h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V7h2zm0-4h-2V3h2zm-4 0h-2V3h2zm-4 0h-2V3h2zm-4 0h-2V3h2zM9 5H7V3h2zm4 0h-2V3h2zM5 25H3v-2h2zm0-4H3v-2h2zm0-4H3v-2h2zm0-4H3v-2h2zm0-4H3V7h2zm0-4H3V3h2zm3 5h10v2H8zm0 5h6v2H8z"></svg:path>`,
})
export class CarbonBorderBottomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBorderFullIcon],svg[carbon-border-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10h10v2H8zm0 5h6v2H8z"></svg:path><svg:path fill="currentColor" d="M29 29H3V3h26ZM5 27h22V5H5Z"></svg:path>`,
})
export class CarbonBorderFullIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBorderLeftIcon],svg[carbon-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 29V3h2v26zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-8V7h2v2zm0 4v-2h2v2zM7 5V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zM8 10h10v2H8zm0 5h6v2H8z"></svg:path>`,
})
export class CarbonBorderLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBorderNoneIcon],svg[carbon-border-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM3 7h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zM27 3h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zM7 27h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm8 0h2v2h-2zm-4 0h2v2h-2zm8-20h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM8 10h10v2H8zm0 5h6v2H8z"></svg:path>`,
})
export class CarbonBorderNoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBorderRightIcon],svg[carbon-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 3v26h-2V3zm-4 0v2h-2V3zm-4 0v2h-2V3zm-4 0v2h-2V3zm-4 0v2h-2V3zM9 3v2H7V3zM5 3v2H3V3zm0 4v2H3V7zm0 4v2H3v-2zm0 4v2H3v-2zm0 8v2H3v-2zm0-4v2H3v-2zm20 8v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2H7v-2zm-4 0v2H3v-2zm3-17h10v2H8zm0 5h6v2H8z"></svg:path>`,
})
export class CarbonBorderRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBorderTopIcon],svg[carbon-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h26v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm8 0h2v2h-2zm-4 0h2v2h-2zm8-20h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM8 10h10v2H8zm0 5h6v2H8z"></svg:path>`,
})
export class CarbonBorderTopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBotIcon],svg[carbon-bot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10h2v2h-2zm-6 0h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M26 20h-5v-2h1a2 2 0 0 0 2-2v-4h2v-2h-2V8a2 2 0 0 0-2-2h-2V2h-2v4h-4V2h-2v4h-2a2 2 0 0 0-2 2v2H6v2h2v4a2 2 0 0 0 2 2h1v2H6a2 2 0 0 0-2 2v8h2v-8h20v8h2v-8a2 2 0 0 0-2-2M10 8h12v8H10Zm3 10h6v2h-6Z"></svg:path>`,
})
export class CarbonBotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBottles01Icon],svg[carbon-bottles-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 9.37V3a1 1 0 0 0-1-1h-3v2h2v6.72s3 .507 3 4.28v13h-3v2h4a1 1 0 0 0 1-1V15c0-3.452-1.933-5.024-3-5.63m-7 0V3a1 1 0 0 0-1-1h-3v2h2v6.72s3 .507 3 4.28v13h-3v2h4a1 1 0 0 0 1-1V15c0-3.452-1.933-5.024-3-5.63m-7 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6.37c-1.067.606-3 2.178-3 5.63v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V15c0-3.452-1.933-5.024-3-5.63M13 28H5V15c0-3.772 3-4.28 3-4.28V4h2v6.72s3 .508 3 4.28z"></svg:path>`,
})
export class CarbonBottles01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBottles01DashIcon],svg[carbon-bottles-01-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 9.37V3a1 1 0 0 0-1-1h-3v2h2v6.72s3 .507 3 4.28v13h-3v2h4a1 1 0 0 0 1-1V15c0-3.452-1.933-5.024-3-5.63m-7 0V3a1 1 0 0 0-1-1h-3v2h2v6.72s3 .507 3 4.28v13h-3v2h4a1 1 0 0 0 1-1V15c0-3.452-1.933-5.024-3-5.63M13 28h-3v2h4a1 1 0 0 0 1-1v-4h-2zm-8-3H3v4a1 1 0 0 0 1 1h4v-2H5zm8-7h2v5h-2zM3 18h2v5H3zm9-8.63V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6.37c-1.067.606-3 2.178-3 5.63v1h2v-1c0-3.772 3-4.28 3-4.28V4h2v6.72s3 .508 3 4.28v1h2v-1c0-3.452-1.933-5.024-3-5.63"></svg:path>`,
})
export class CarbonBottles01DashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBottles02Icon],svg[carbon-bottles-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 9.051V6a1 1 0 0 0-1-1h-3v2h2v3.02s2 1.124 2 3.48V25h-4v2h5a1 1 0 0 0 1-1V13.5a5.93 5.93 0 0 0-2-4.449m-8 0V6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3.051A5.93 5.93 0 0 0 6 13.5V26a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13.5a5.93 5.93 0 0 0-2-4.449M16 25H8V13.5c0-2.356 2-3.48 2-3.48V7h4v3.02s2 1.124 2 3.48z"></svg:path>`,
})
export class CarbonBottles02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBottles02DashIcon],svg[carbon-bottles-02-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 9.051V6a1 1 0 0 0-1-1h-3v2h2v3.02s2 1.124 2 3.48V25h-4v2h5a1 1 0 0 0 1-1V13.5a5.93 5.93 0 0 0-2-4.449M16 25h-3v2h4a1 1 0 0 0 1-1v-4h-2zm-8-3H6v4a1 1 0 0 0 1 1h4v-2H8zm8-6h2v4h-2zM6 16h2v4H6zm10-6.949V6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3.051A5.93 5.93 0 0 0 6 13.5v.5h2v-.5c0-2.356 2-3.48 2-3.48V7h4v3.02s2 1.124 2 3.48v.5h2v-.5a5.93 5.93 0 0 0-2-4.449"></svg:path>`,
})
export class CarbonBottles02DashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBottlesContainerIcon],svg[carbon-bottles-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10V8a1 1 0 0 0-1-1h-3v2h2v1.969s2 1.124 2 3.48V23h-4v2h5a1 1 0 0 0 1-1v-9.55A5.93 5.93 0 0 0 23 10m-8 0V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2a5.93 5.93 0 0 0-2 4.449V24a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-9.551A5.93 5.93 0 0 0 15 10m0 13H9v-8.551c0-2.356 2-3.48 2-3.48v-1.97h2v1.97s2 1.124 2 3.48z"></svg:path><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 26H4V4h24z"></svg:path>`,
})
export class CarbonBottlesContainerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBottomPanelCloseIcon],svg[carbon-bottom-panel-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 16v6H4v-6zm0-14v12H4V6h11v6.17l-3.59-3.58L10 10l6 6l6-6l-1.41-1.41L17 12.17V6z"></svg:path>`,
})
export class CarbonBottomPanelCloseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBottomPanelCloseFilledIcon],svg[carbon-bottom-panel-close-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v12H4V6h11v6.17l-3.59-3.58L10 10l6 6l6-6l-1.41-1.41L17 12.17V6z"></svg:path>`,
})
export class CarbonBottomPanelCloseFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBottomPanelOpenIcon],svg[carbon-bottom-panel-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 16v6H4v-6zm0-14v12H17v-6.17l3.59 3.58L22 14l-6-6l-6 6l1.41 1.41L15 11.83V18H4V6z"></svg:path>`,
})
export class CarbonBottomPanelOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBottomPanelOpenFilledIcon],svg[carbon-bottom-panel-open-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v12H17v-6.17l3.59 3.58L22 14l-6-6l-6 6l1.41 1.41L15 11.83V18H4V6z"></svg:path>`,
})
export class CarbonBottomPanelOpenFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBoxIcon],svg[carbon-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21h-8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2m-8-4v2h8v-2Z"></svg:path><svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-2 24H6V12h20Zm2-18H4V6h24z"></svg:path>`,
})
export class CarbonBoxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBoxExtraLargeIcon],svg[carbon-box-extra-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V9h2v17h20V9h2v17a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M19 21V9h-2v14h7v-2zM16 9h-2l-2 6l-2-6H8l2.752 7L8 23h2l2-6l2 6h2l-2.755-7zM4 4h24v2H4z"></svg:path>`,
})
export class CarbonBoxExtraLargeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBoxLargeIcon],svg[carbon-box-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V9h2v17h20V9h2v17a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M14 21V9h-2v14h8v-2zM4 4h24v2H4z"></svg:path>`,
})
export class CarbonBoxLargeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBoxMediumIcon],svg[carbon-box-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V9h2v17h20V9h2v17a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="m18 9l-1.515 5L16 15.977L15.535 14L14 9h-2v14h2v-8l-.158-1.996l.579 1.996L16 19.626L17.579 15l.58-2L18 15v8h2V9zM4 4h24v2H4z"></svg:path>`,
})
export class CarbonBoxMediumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBoxPlotIcon],svg[carbon-box-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6V4H12v2h4v2h-4v12h4v2h-4v2h10v-2h-4v-2h4V8h-4V6Zm-8 12v-3h6v3Zm6-5h-6v-3h6Z"></svg:path><svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path>`,
})
export class CarbonBoxPlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBoxSmallIcon],svg[carbon-box-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V9h2v17h20V9h2v17a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M18 23h-6v-2h6v-4h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 4h24v2H4z"></svg:path>`,
})
export class CarbonBoxSmallIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBranchIcon],svg[carbon-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6c0 1.859 1.28 3.41 3 3.858V14c0 1.654-1.346 3-3 3h-8c-1.13 0-2.162.391-3 1.026V9.858c1.72-.447 3-2 3-3.858c0-2.206-1.794-4-4-4S4 3.794 4 6c0 1.859 1.28 3.41 3 3.858v12.284c-1.72.447-3 2-3 3.858c0 2.206 1.794 4 4 4s4-1.794 4-4c0-1.858-1.28-3.41-3-3.858V22c0-1.654 1.346-3 3-3h8c2.757 0 5-2.243 5-5V9.858c1.72-.447 3-2 3-3.858c0-2.206-1.794-4-4-4s-4 1.794-4 4M6 6c0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2s-2-.897-2-2m4 20c0 1.103-.897 2-2 2s-2-.897-2-2s.897-2 2-2s2 .897 2 2M26 6c0 1.103-.897 2-2 2s-2-.897-2-2s.898-2 2-2s2 .898 2 2"></svg:path>`,
})
export class CarbonBranchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBreakingChangeIcon],svg[carbon-breaking-change-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 25a6 6 0 1 0-6 6a6.007 6.007 0 0 0 6-6m-2 0a3.95 3.95 0 0 1-.567 2.019l-5.452-5.452A3.95 3.95 0 0 1 25 21a4.005 4.005 0 0 1 4 4m-8 0a3.95 3.95 0 0 1 .567-2.019l5.452 5.452A3.95 3.95 0 0 1 25 29a4.005 4.005 0 0 1-4-4m-1.41-9L17 18.59L18.42 20l4-4l-4-4L17 13.41zm-9.18 0L13 13.41L11.58 12l-4 4l4 4L13 18.59z"></svg:path><svg:path fill="currentColor" d="M4 9h22v7h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h12v-2H4Zm0-5h22v3H4Z"></svg:path>`,
})
export class CarbonBreakingChangeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBrightnessContrastIcon],svg[carbon-brightness-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2v3h-2zm12 13h3v2h-3zM15 27h2v3h-2zM2 15h3v2H2zm3.45-8.117L6.864 5.47l2.122 2.12L7.57 9.004zM23 7.581l2.12-2.121l1.414 1.414l-2.121 2.122zm.002 16.835l1.414-1.414l2.122 2.122l-1.414 1.414zM5.47 25.13L7.59 23L9 24.42l-2.12 2.12zM16 8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0 14a6 6 0 0 1 0-12z"></svg:path>`,
})
export class CarbonBrightnessContrastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBringForwardIcon],svg[carbon-bring-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15h-2v-3a2 2 0 0 1 2-2h3v2h-3zm3 15h-3a2 2 0 0 1-2-2v-3h2v3h3zm3-2h4v2h-4zm10 2h-3v-2h3v-3h2v3a2 2 0 0 1-2 2M10 18h2v4h-2zm18 0h2v4h-2zm2-3h-2v-3h-3v-2h3a2 2 0 0 1 2 2zm-12-5h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M8 22H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4h-2V4H4v16h4Z"></svg:path>`,
})
export class CarbonBringForwardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBringToFrontIcon],svg[carbon-bring-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M4 20L3.998 4H20v6h-8a2 2 0 0 0-2 2v8Z"></svg:path>`,
})
export class CarbonBringToFrontIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBrushFreehandIcon],svg[carbon-brush-freehand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28.828 3.172a4.094 4.094 0 0 0-5.656 0L4.05 22.292A6.954 6.954 0 0 0 2 27.242V30h2.756a6.952 6.952 0 0 0 4.95-2.05L28.828 8.829a3.999 3.999 0 0 0 0-5.657zM10.91 18.26l2.829 2.829l-2.122 2.121l-2.828-2.828zm-2.619 8.276A4.966 4.966 0 0 1 4.756 28H4v-.759a4.967 4.967 0 0 1 1.464-3.535l1.91-1.91l2.829 2.828zM27.415 7.414l-12.261 12.26l-2.829-2.828l12.262-12.26a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828z" fill="currentColor"></svg:path><svg:path d="M6.5 15a3.5 3.5 0 0 1-2.475-5.974l3.5-3.5a1.502 1.502 0 0 0 0-2.121a1.537 1.537 0 0 0-2.121 0L3.415 5.394L2 3.98l1.99-1.988a3.585 3.585 0 0 1 4.95 0a3.504 3.504 0 0 1 0 4.949L5.439 10.44a1.502 1.502 0 0 0 0 2.121a1.537 1.537 0 0 0 2.122 0l4.024-4.024L13 9.95l-4.025 4.024A3.475 3.475 0 0 1 6.5 15z" fill="currentColor"></svg:path>`,
})
export class CarbonBrushFreehandIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBrushPolygonIcon],svg[carbon-brush-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28.828 3.172a4.094 4.094 0 0 0-5.656 0L4.05 22.292A6.954 6.954 0 0 0 2 27.242V30h2.756a6.952 6.952 0 0 0 4.95-2.05L28.828 8.829a3.999 3.999 0 0 0 0-5.657zM10.91 18.26l2.829 2.829l-2.122 2.121l-2.828-2.828zm-2.619 8.276A4.966 4.966 0 0 1 4.756 28H4v-.759a4.967 4.967 0 0 1 1.464-3.535l1.91-1.91l2.829 2.828zM27.415 7.414l-12.261 12.26l-2.829-2.828l12.262-12.26a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828z" fill="currentColor"></svg:path><svg:path d="M14 2a2.995 2.995 0 0 0-2.816 2H7.816A2.993 2.993 0 1 0 4 7.815v3.37a3 3 0 1 0 2 0v-3.37A2.996 2.996 0 0 0 7.816 6h3.368A2.995 2.995 0 1 0 14 2zM5 15a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm0-9a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm9 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1z" fill="currentColor"></svg:path>`,
})
export class CarbonBrushPolygonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBuildImageIcon],svg[carbon-build-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 25v-2h-2.1c-.1-.6-.4-1.2-.7-1.8l1.5-1.5l-1.4-1.4l-1.5 1.5c-.5-.3-1.1-.6-1.8-.7V17h-2v2.1c-.6.1-1.2.4-1.8.7l-1.5-1.5l-1.4 1.4l1.5 1.5c-.3.5-.6 1.1-.7 1.8H16v2h2.1c.1.6.4 1.2.7 1.8l-1.5 1.5l1.4 1.4l1.5-1.5c.5.3 1.1.6 1.8.7V31h2v-2.1c.6-.1 1.2-.4 1.8-.7l1.5 1.5l1.4-1.4l-1.5-1.5c.3-.5.6-1.1.7-1.8zm-7 2c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3M21.485 7.126l-9-5a1 1 0 0 0-.97 0l-9 5A1 1 0 0 0 2 8v10a1 1 0 0 0 .514.874l9 5A1 1 0 0 0 13 23v-9.412L20 9.7V14h2V8a1 1 0 0 0-.515-.874M12 4.144L18.941 8L12 11.856L5.06 8zM4 17.411V9.7l7 3.89v7.71z"></svg:path>`,
})
export class CarbonBuildImageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBuildRunIcon],svg[carbon-build-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 24l-6 6l-1.4-1.4l3.6-3.6H17v-2h9.2l-3.6-3.6L24 18zM21.485 7.126l-9-5a1 1 0 0 0-.97 0l-9 5A1 1 0 0 0 2 8v10a1 1 0 0 0 .514.874l9 5A1 1 0 0 0 13 23v-9.412L20 9.7V14h2V8a1 1 0 0 0-.515-.874M12 4.144L18.941 8L12 11.856L5.06 8zM4 17.411V9.7l7 3.89v7.71z"></svg:path>`,
})
export class CarbonBuildRunIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBuildToolIcon],svg[carbon-build-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 14h-1V7c0-1.1-.9-2-2-2h-6v2h6v7h-1c-1.1 0-2 .9-2 2v9H9.9c-.4-1.4-1.5-2.5-2.9-2.9V7h6.2l-2.6 2.6L12 11l5-5l-5-5l-1.4 1.4L13.2 5H7c-1.1 0-2 .9-2 2v15.1c-1.7.4-3 2-3 3.9c0 2.2 1.8 4 4 4c1.9 0 3.4-1.3 3.9-3H22v1c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2M6 28c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m18 0V16h4v12z"></svg:path>`,
})
export class CarbonBuildToolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBuildingIcon],svg[carbon-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H16a2 2 0 0 0-2 2v10H4a2 2 0 0 0-2 2v14h28V4a2 2 0 0 0-2-2M9 28v-7h4v7Zm19 0H15v-8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v8H4V16h12V4h12Z"></svg:path><svg:path fill="currentColor" d="M18 8h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2z"></svg:path>`,
})
export class CarbonBuildingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBuildingInsights1Icon],svg[carbon-building-insights-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H16a2 2 0 0 0-2 2v10H4a2 2 0 0 0-2 2v14h28V4a2 2 0 0 0-2-2M9 28v-7h4v7Zm19 0H15v-8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v8H4V16h12V4h12Z"></svg:path><svg:path fill="currentColor" d="M18 8h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2zM9 12H7a5.006 5.006 0 0 1 5-5v2a3.003 3.003 0 0 0-3 3m-5 0H2A10.01 10.01 0 0 1 12 2v2a8.01 8.01 0 0 0-8 8"></svg:path>`,
})
export class CarbonBuildingInsights1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBuildingInsights2Icon],svg[carbon-building-insights-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H16a2 2 0 0 0-2 2v10H4a2 2 0 0 0-2 2v14h28V4a2 2 0 0 0-2-2M9 28v-7h4v7Zm19 0H15v-8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v8H4V16h12V4h12Z"></svg:path><svg:path fill="currentColor" d="M18 8h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2zM5.5 12a3.5 3.5 0 0 1 0-7h.627A4.006 4.006 0 0 1 10 2h2v2h-2a2 2 0 0 0-2 2v1H5.5a1.5 1.5 0 0 0 0 3H12v2z"></svg:path>`,
})
export class CarbonBuildingInsights2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBuildingInsights3Icon],svg[carbon-building-insights-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H16a2 2 0 0 0-2 2v10H4a2 2 0 0 0-2 2v14h28V4a2 2 0 0 0-2-2M9 28v-7h4v7Zm19 0H15v-8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v8H4V16h12V4h12Z"></svg:path><svg:path fill="currentColor" d="M18 8h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2zM2 10h5v2H2zm8-8h2v5h-2zM4 5.414L5.414 4L9 7.585L7.585 9z"></svg:path>`,
})
export class CarbonBuildingInsights3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBullhornIcon],svg[carbon-bullhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 6v2.17l-20.36 3.7a2 2 0 0 0-1.64 2v4.34a2 2 0 0 0 1.64 2l2.36.35V24a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.26l6 1.09V26h2V6Zm-8 18h-8v-3.07l8 1.45ZM6 18.17v-4.34l20-3.63v11.6Z"></svg:path>`,
})
export class CarbonBullhornIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBuoyIcon],svg[carbon-buoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22a3.44 3.44 0 0 1-3.051-2.316a1 1 0 0 0-1.896-.005A3.44 3.44 0 0 1 20 22a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 16 19a.99.99 0 0 0-.947.679A3.44 3.44 0 0 1 12 22a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 8 19a.97.97 0 0 0-.947.679A3.44 3.44 0 0 1 4 22H2v2h2a4.93 4.93 0 0 0 4-1.987a5.6 5.6 0 0 0 1 .99a7 7 0 0 0 14 0a5.6 5.6 0 0 0 1-.99A4.93 4.93 0 0 0 28 24h2v-2Zm-12 6a5 5 0 0 1-4.907-4.085A5 5 0 0 0 12 24a4.93 4.93 0 0 0 4-1.987A4.93 4.93 0 0 0 20 24a5 5 0 0 0 .908-.085A5 5 0 0 1 16 28"></svg:path><svg:path fill="currentColor" d="M20.07 7.835A2.01 2.01 0 0 0 18.077 6H17V2h-2v4h-1.082a1.995 1.995 0 0 0-1.986 1.772L10.28 19h2.022l.734-5h5.921l.735 5h2.021ZM13.33 12l.588-4l4.167.063l.578 3.937Z"></svg:path>`,
})
export class CarbonBuoyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBusIcon],svg[carbon-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 11h2v4h-2zM3 11h2v4H3zm17 9h2v2h-2zm-10 0h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M21 4H11a5.006 5.006 0 0 0-5 5v14a2 2 0 0 0 2 2v3h2v-3h12v3h2v-3a2.003 2.003 0 0 0 2-2V9a5.006 5.006 0 0 0-5-5m3 6v6H8v-6ZM11 6h10a2.995 2.995 0 0 1 2.816 2H8.184A2.995 2.995 0 0 1 11 6M8 23v-5h16.001l.001 5Z"></svg:path>`,
})
export class CarbonBusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBusinessMetricsIcon],svg[carbon-business-metrics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 30a1 1 0 0 1-.894-.553L19.382 26H16v-2h4a1 1 0 0 1 .895.553L22 26.763l3.106-6.21c.184-.369.539-.553.894-.553s.71.184.894.553L28.618 24H32v2h-4a1 1 0 0 1-.894-.553L26 23.237l-3.105 6.21A1 1 0 0 1 22 30m1.414-20L22 8.586L17.285 13.3A3 3 0 0 0 16 13c-1.654 0-3 1.346-3 3s1.346 3 3 3s3-1.346 3-3c0-.462-.113-.894-.3-1.285zM16 17c-.551 0-1-.449-1-1s.449-1 1-1s1 .449 1 1s-.449 1-1 1m10-1a9.9 9.9 0 0 0-1.14-4.618l-1.495 1.496c.408.96.635 2.015.635 3.122zM16 8c1.107 0 2.162.227 3.122.635l1.496-1.496A9.9 9.9 0 0 0 16 6C10.486 6 6 10.486 6 16h2c0-4.411 3.589-8 8-8"></svg:path><svg:path fill="currentColor" d="M7.51 24.49A11.96 11.96 0 0 1 4 16C4 9.37 9.37 4 16 4c6.62 0 11.99 5.38 12 12h2c0-7.73-6.27-14-14-14S2 8.27 2 16c0 3.87 1.57 7.37 4.1 9.9z"></svg:path>`,
})
export class CarbonBusinessMetricsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonBusinessProcessesIcon],svg[carbon-business-processes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 31h-.028a1 1 0 0 1-.912-.658l-3.136-8.625l-2.005 4.677A1 1 0 0 1 16 27h-4v-2h3.34l2.74-6.394c.163-.377.549-.616.948-.606a1 1 0 0 1 .912.658l3.136 8.626l2.005-4.678A1 1 0 0 1 26 22h4v2h-3.34l-2.74 6.394A1 1 0 0 1 23 31"></svg:path><svg:path fill="currentColor" d="M9 25H4V10h24v9h2v-9c0-1.103-.897-2-2-2h-6V4c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2h5zm3-21h8v4h-8z"></svg:path>`,
})
export class CarbonBusinessProcessesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonButtonCenteredIcon],svg[carbon-button-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15h14v2H9z"></svg:path><svg:path fill="currentColor" d="M28 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M4 12v8h24v-8Z"></svg:path>`,
})
export class CarbonButtonCenteredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonButtonFlushLeftIcon],svg[carbon-button-flush-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15h14v2H6z"></svg:path><svg:path fill="currentColor" d="M28 22H4c-1.103 0-2-.897-2-2v-8c0-1.103.897-2 2-2h24c1.103 0 2 .897 2 2v8c0 1.103-.897 2-2 2M4 12v8h24v-8z"></svg:path>`,
})
export class CarbonButtonFlushLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCabinCareIcon],svg[carbon-cabin-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.302 2a2.66 2.66 0 0 0-1.908.806l-.393.405l-.397-.405a2.66 2.66 0 0 0-3.816 0a2.8 2.8 0 0 0 0 3.896L25.001 11l4.209-4.298a2.8 2.8 0 0 0 0-3.896A2.66 2.66 0 0 0 27.302 2m-3.48 16h-8.739L11.864 5.965a4 4 0 0 0-7.727 2.07l4.408 16.482A2 2 0 0 0 10.477 26H19v2H4v2h15a2 2 0 0 0 2-2v-2h3a4.005 4.005 0 0 0 3.98-4.4a4.12 4.12 0 0 0-4.158-3.6M24 24H10.478L6.068 7.518a2 2 0 1 1 3.864-1.035L13.547 20H24a2 2 0 0 1 0 4"></svg:path>`,
})
export class CarbonCabinCareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCabinCareAlertIcon],svg[carbon-cabin-care-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 2h2v7h-2z"></svg:path><svg:rect width="3" height="3" x="23.5" y="11" fill="currentColor" rx="1.5"></svg:rect><svg:path fill="currentColor" d="M23.822 18h-8.739L11.864 5.965a4 4 0 0 0-7.727 2.07l4.408 16.482A2 2 0 0 0 10.477 26H19v2H4v2h15a2 2 0 0 0 2-2v-2h3a4.005 4.005 0 0 0 3.98-4.4a4.12 4.12 0 0 0-4.158-3.6M24 24H10.478L6.067 7.518a2 2 0 1 1 3.864-1.035L13.547 20H24a2 2 0 0 1 0 4"></svg:path>`,
})
export class CarbonCabinCareAlertIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCabinCareAltIcon],svg[carbon-cabin-care-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 25v-2h-9.232l-.8-3H27v-2h-7.565l-2.47-9.258l-1.93.516l3.8 14.257A2.004 2.004 0 0 0 20.77 25H22v3H10v-3h6v-2H6.768l-.8-3H13v-2H5.435l-2.47-9.258l-1.93.516l3.8 14.257A2.004 2.004 0 0 0 6.77 25H8v3H2v2h28v-2h-6v-3zM27.303 2a2.66 2.66 0 0 0-1.908.806L25 3.21l-.395-.405a2.66 2.66 0 0 0-3.816 0a2.8 2.8 0 0 0 0 3.896L25 11l4.21-4.298a2.8 2.8 0 0 0 0-3.896A2.66 2.66 0 0 0 27.304 2"></svg:path>`,
})
export class CarbonCabinCareAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCadIcon],svg[carbon-cad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5zm12 7h-4V9h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4m-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2zm-14 2H4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2H4v10h6z"></svg:path>`,
})
export class CarbonCadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCafeIcon],svg[carbon-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h28v2H2zm22.5-17H8a2 2 0 0 0-2 2v8a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-1h.5a4.5 4.5 0 0 0 0-9M22 21a3.003 3.003 0 0 1-3 3h-8a3.003 3.003 0 0 1-3-3v-8h14zm2.5-3H24v-5h.5a2.5 2.5 0 0 1 0 5M19 9h-2v-.146a1.99 1.99 0 0 0-1.105-1.789L13.21 5.724A3.98 3.98 0 0 1 11 2.146V1h2v1.146a1.99 1.99 0 0 0 1.106 1.789l2.683 1.341A3.98 3.98 0 0 1 19 8.854z"></svg:path>`,
})
export class CarbonCafeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCalculationIcon],svg[carbon-calculation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8h-4V4H8v4H4v2h4v4h2v-4h4zM4 19h10v2H4zm0 5h10v2H4zM18 8h10v2H18zm6.41 14L28 18.41L26.59 17L23 20.59L19.41 17L18 18.41L21.59 22L18 25.59L19.41 27L23 23.41L26.59 27L28 25.59z"></svg:path>`,
})
export class CarbonCalculationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCalculationAltIcon],svg[carbon-calculation-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13h6v2h-6zm-6 8h-2v-2H9v2H7v2h2v2h2v-2h2zM7 9h6v2H7zm12 8h6v2h-6z"></svg:path><svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M15 5v10H5V5ZM5 17h10v10H5Zm12 10V5h10v22Z"></svg:path>`,
})
export class CarbonCalculationAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCalculatorIcon],svg[carbon-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4v24H6V4zm0-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M9 23h2v2H9zm12 0h2v2h-2zM9 18h2v2H9zm12 0h2v2h-2zM9 13h2v2H9zm6 10h2v2h-2zm0-5h2v2h-2zm0-5h2v2h-2zm6 0h2v2h-2zM9 7h14v3H9z"></svg:path>`,
})
export class CarbonCalculatorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCalculatorCheckIcon],svg[carbon-calculator-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 26.59L21.41 24L20 25.41l4 4l7-7L29.59 21zM15 23h2v2h-2zm-6 0h2v2H9zm12-5h2v2h-2zm-6 0h2v2h-2zm-6 0h2v2H9zm12-5h2v2h-2zm-6 0h2v2h-2zm-6 0h2v2H9zm0-6h14v3H9z"></svg:path><svg:path fill="currentColor" d="M17 30H6.005A2.007 2.007 0 0 1 4 27.995V3.996A2 2 0 0 1 5.996 2h20.008A2 2 0 0 1 28 3.996V18h-2V4H6v24h11Z"></svg:path>`,
})
export class CarbonCalculatorCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCalendarIcon],svg[carbon-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 22H6V12h20zm0-16H6V6h4v2h2V6h8v2h2V6h4z"></svg:path>`,
})
export class CarbonCalendarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCalendarAddIcon],svg[carbon-calendar-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 22h-6v-6h-2v6h-6v2h6v6h2v-6h6z"></svg:path><svg:path fill="currentColor" d="M28 6c0-1.1-.9-2-2-2h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h8v-2H6V6h4v2h2V6h8v2h2V6h4v8h2z"></svg:path>`,
})
export class CarbonCalendarAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCalendarAddAltIcon],svg[carbon-calendar-add-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 21h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></svg:path><svg:path fill="currentColor" d="M22 30c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8m0-14c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6"></svg:path><svg:path fill="currentColor" d="M28 6c0-1.1-.9-2-2-2h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h6v-2H6V6h4v2h2V6h8v2h2V6h4v6h2z"></svg:path>`,
})
export class CarbonCalendarAddAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCalendarHeatMapIcon],svg[carbon-calendar-heat-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4h-4V2h-2v2h-8V2h-2v2H6a2.003 2.003 0 0 0-2 2v20a2.003 2.003 0 0 0 2 2h20a2.003 2.003 0 0 0 2-2V6a2.003 2.003 0 0 0-2-2M6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z"></svg:path>`,
})
export class CarbonCalendarHeatMapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCalendarSettingsIcon],svg[carbon-calendar-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23v-2h-2.09a5.96 5.96 0 0 0-1.024-2.47l1.478-1.48l-1.414-1.414l-1.479 1.479A5.96 5.96 0 0 0 23 16.09V14h-2v2.09a5.96 5.96 0 0 0-2.47 1.024l-1.48-1.478l-1.414 1.414l1.479 1.479A6 6 0 0 0 16.09 21H14v2h2.09a6 6 0 0 0 1.024 2.47l-1.478 1.48l1.414 1.414l1.479-1.479A5.96 5.96 0 0 0 21 27.91V30h2v-2.09a5.96 5.96 0 0 0 2.47-1.024l1.48 1.478l1.414-1.414l-1.479-1.479A5.96 5.96 0 0 0 27.91 23Zm-8 3a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="M28 6a2 2 0 0 0-2-2h-4V2h-2v2h-8V2h-2v2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4v-2H6V6h4v2h2V6h8v2h2V6h4v6h2Z"></svg:path>`,
})
export class CarbonCalendarSettingsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCalendarToolsIcon],svg[carbon-calendar-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.981 24.433A3.96 3.96 0 0 0 26 25a4.005 4.005 0 0 0 4-4a4 4 0 0 0-.15-1.023l-2.436 2.437a2 2 0 1 1-2.828-2.828l2.437-2.437A4 4 0 0 0 26 17a4.005 4.005 0 0 0-4 4a3.95 3.95 0 0 0 .567 2.02L17 28.585L18.414 30Z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M26 4h-4V2h-2v2h-8V2h-2v2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h8v-2H6V6h4v2h2V6h8v2h2V6h4v8h2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonCalendarToolsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCalibrateIcon],svg[carbon-calibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.83 21.17L25 17.37l.67-.67a1 1 0 0 0 0-1.41l-6-6a1 1 0 0 0-1.41 0l-.79.79l-6.76-6.79a1 1 0 0 0-1.41 0l-4 4l-.12.15l-4 6a1 1 0 0 0 .12 1.26l3 3a1 1 0 0 0 1.42 0L10 13.41l2.09 2.09l-4.8 4.79a1 1 0 0 0 0 1.41l2 2a1 1 0 0 0 .71.3a1 1 0 0 0 .52-.15l4.33-2.6l2.44 2.45a1 1 0 0 0 1.41 0l.67-.7l3.79 3.83a4 4 0 0 0 5.66-5.66ZM10 10.58l-5 5l-1.71-1.71l3.49-5.24L10 5.41l6.09 6.09l-2.59 2.58Zm8 11l-2.84-2.84l-5 3l-.74-.74L19 11.41L23.59 16Zm9.42 3.83a2 2 0 0 1-2.83 0l-3.8-3.79l2.83-2.83l3.8 3.79a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class CarbonCalibrateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCallsIcon],svg[carbon-calls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 14c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2m0-2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-11-1l-1.414 1.414L16.172 15H7.816A2.995 2.995 0 0 0 5 13c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.995 2.995 0 0 0 2.816-2h8.356l-2.586 2.586L15 21l5-5zM5 17a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2"></svg:path>`,
})
export class CarbonCallsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCallsAllIcon],svg[carbon-calls-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 12a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2m-11 3v2h2.586l-2.3 2.3A2.96 2.96 0 0 0 14 25c-1.654 0-3 1.346-3 3s1.346 3 3 3s3-1.346 3-3c0-.462-.114-.894-.3-1.285l2.3-2.301V27h2v-6zm-1 8a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m-2.586-17.586L10 12.83L12.172 15H7.816A2.995 2.995 0 0 0 5 13c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.995 2.995 0 0 0 2.816-2h4.356L10 19.171l1.414 1.415L16 16zM5 17a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2M19 5v2.586l-2.3-2.3c.187-.392.3-.824.3-1.286c0-1.654-1.346-3-3-3s-3 1.346-3 3s1.346 3 3 3a2.96 2.96 0 0 0 1.285-.3L17.586 9H15v2h6V5zm-6-1c0-.551.449-1 1-1s1 .449 1 1s-.448 1-1 1s-1-.449-1-1"></svg:path>`,
})
export class CarbonCallsAllIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCallsIncomingIcon],svg[carbon-calls-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 12a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2m-11 2l-1.414 1.414L16.172 24H7.816A2.995 2.995 0 0 0 5 22c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.995 2.995 0 0 0 2.816-2h8.356l-2.586 2.586L15 30l5-5zM5 26a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2M15 4l-1.414 1.414L16.172 8H7.816A2.995 2.995 0 0 0 5 6C3.346 6 2 7.346 2 9s1.346 3 3 3a2.995 2.995 0 0 0 2.816-2h8.356l-2.586 2.586L15 14l5-5zM5 10a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2"></svg:path>`,
})
export class CarbonCallsIncomingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCameraIcon],svg[carbon-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 26H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6.46l1.71-2.55A1 1 0 0 1 12 4h8a1 1 0 0 1 .83.45L22.54 7H29a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1M4 24h24V9h-6a1 1 0 0 1-.83-.45L19.46 6h-6.92l-1.71 2.55A1 1 0 0 1 10 9H4Z"></svg:path><svg:path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a6 6 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4"></svg:path>`,
})
export class CarbonCameraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCameraActionIcon],svg[carbon-camera-action-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23a6 6 0 1 1 6-6a6 6 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M29 27H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1M4 25h24V7H4Z"></svg:path><svg:path fill="currentColor" d="M19 9h7v2h-7z"></svg:path><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonCameraActionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCampsiteIcon],svg[carbon-campsite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.562 26L17.17 8.928l2.366-3.888L17.828 4L16 7.005L14.17 4l-1.708 1.04l2.367 3.888L4.438 26H2v2h28v-2ZM16 10.85L25.22 26H17v-8h-2v8H6.78Z"></svg:path>`,
})
export class CarbonCampsiteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCarIcon],svg[carbon-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.338 15.934l-7.732-2.779l-3.232-4.058A2.99 2.99 0 0 0 16.054 8H8.058a3 3 0 0 0-2.48 1.312l-2.712 3.983A5 5 0 0 0 2 16.107V24a1 1 0 0 0 1 1h2.142a3.98 3.98 0 0 0 7.716 0h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7.125a1 1 0 0 0-.662-.941M9 26a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m14 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m5-3h-1.142a3.98 3.98 0 0 0-7.716 0h-6.284a3.98 3.98 0 0 0-7.716 0H4v-6.893a3 3 0 0 1 .52-1.688l2.711-3.981A1 1 0 0 1 8.058 10h7.996a1 1 0 0 1 .764.355l3.4 4.268a1 1 0 0 0 .444.318L28 17.578Z"></svg:path>`,
})
export class CarbonCarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCarFrontIcon],svg[carbon-car-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19h6v2h-6z"></svg:path><svg:path fill="currentColor" d="m25.44 14l-1.27-4.55A2.01 2.01 0 0 0 22.246 8H9.754a2.01 2.01 0 0 0-1.923 1.45L6.531 14H4v2h2v7a2.003 2.003 0 0 0 2 2v3h2v-3h12v3h2v-3a2.003 2.003 0 0 0 2-2v-7h2v-2ZM9.755 10h12.492l1.428 5H8.326ZM24 21v2H8v-2h2v-2H8v-2h16v2h-2v2Z"></svg:path>`,
})
export class CarbonCarFrontIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCarbonIcon],svg[carbon-carbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 30.815a1 1 0 0 1-.493-.13l-8.5-4.815A1 1 0 0 1 4 25V15a1 1 0 0 1 .507-.87l8.5-4.815a1 1 0 0 1 .986 0l8.5 4.815A1 1 0 0 1 23 15v10a1 1 0 0 1-.507.87l-8.5 4.815a1 1 0 0 1-.493.13M6 24.417l7.5 4.249l7.5-4.249v-8.834l-7.5-4.248L6 15.583Z"></svg:path><svg:path fill="currentColor" d="M28 17h-2V7.583l-7.5-4.248l-8.007 4.535l-.986-1.74l8.5-4.815a1 1 0 0 1 .986 0l8.5 4.815A1 1 0 0 1 28 7Z"></svg:path>`,
})
export class CarbonCarbonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCarbonAccountingIcon],svg[carbon-carbon-accounting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 26h-6v-4a2 2 0 0 1 2-2h2v-2h-4v-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4zm-10-4h-4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2m-4-12v10h4V10zm-4 12H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h6v2H5v10h6z"></svg:path>`,
})
export class CarbonCarbonAccountingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCarbonForAemIcon],svg[carbon-carbon-for-aem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="28.5" cy="24.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="23.5" cy="27.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="18.5" cy="24.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="18.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="23.5" cy="16.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="28.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h9v-2H4V10h24v4h2V4a2 2 0 0 0-2-2m0 6H4V4h24z"></svg:path>`,
})
export class CarbonCarbonForAemIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCarbonForIbmDotcomIcon],svg[carbon-carbon-for-ibm-dotcom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.509 17.689l-6-3.55a1 1 0 0 0-1.018.001l-6 3.55a1 1 0 0 0-.491.86v6.9c0 .354.187.681.491.86l6 3.55a.99.99 0 0 0 1.018 0l6-3.55a1 1 0 0 0 .491-.86v-6.9a1 1 0 0 0-.491-.861M28 24.88l-5 2.958l-5-2.958v-5.76l5-2.958l5 2.958z"></svg:path><svg:circle cx="6" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 2H4c-1.103 0-2 .897-2 2v20c0 1.103.897 2 2 2h9v-2H4V10h24v4h2V4c0-1.103-.897-2-2-2M4 8V4h24v4z"></svg:path>`,
})
export class CarbonCarbonForIbmDotcomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCarbonForIbmProductIcon],svg[carbon-carbon-for-ibm-product-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.509 12.689l-6-3.55a1 1 0 0 0-1.018.001l-6 3.55a1 1 0 0 0-.491.86v6.9c0 .354.187.681.491.86l6 3.55a.99.99 0 0 0 1.018 0l6-3.55a1 1 0 0 0 .491-.86v-6.9a1 1 0 0 0-.491-.861M21 19.88l-5 2.958l-5-2.958v-5.76l5-2.958l5 2.958z"></svg:path><svg:path fill="currentColor" d="M6 20.184V11.07l6.2-3.664l-1.017-1.722l-6.692 3.955A1 1 0 0 0 4 10.5v9.684A3 3 0 0 0 2 23c0 1.654 1.346 3 3 3s3-1.346 3-3a3 3 0 0 0-2-2.816M5 24a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m22-4c-1.654 0-3 1.346-3 3c0 .353.072.687.185 1.002L16 28.838l-6.404-3.784l-1.017 1.722l6.912 4.084a1 1 0 0 0 1.018.001l8.96-5.295c.45.269.97.434 1.531.434c1.654 0 3-1.346 3-3s-1.346-3-3-3m0 4a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2M16 7c.731 0 1.392-.273 1.913-.708L26 11.071V18h2v-7.5a1 1 0 0 0-.491-.861l-8.567-5.062q.056-.28.058-.577c0-1.654-1.346-3-3-3s-3 1.346-3 3s1.346 3 3 3m0-4a1.001 1.001 0 1 1-1 1c0-.552.449-1 1-1"></svg:path>`,
})
export class CarbonCarbonForIbmProductIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCarbonForMobileIcon],svg[carbon-carbon-for-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 14h-2V8.074l-5.504-3.21l1.008-1.728l6 3.5A1 1 0 0 1 32 7.5zm-12 8a1 1 0 0 1-.504-.136l-6-3.5A1 1 0 0 1 13 17.5v-7a1 1 0 0 1 .496-.864l6-3.5a1 1 0 0 1 1.008 0l6 3.5A1 1 0 0 1 27 10.5v7a1 1 0 0 1-.496.864l-6 3.5A1 1 0 0 1 20 22m-5-5.074l5 2.916l5-2.916v-5.852l-5-2.916l-5 2.916z"></svg:path><svg:circle cx="12.5" cy="24.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19 30H6c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h13v2H6v24h13v-4h2v4c0 1.103-.897 2-2 2"></svg:path>`,
})
export class CarbonCarbonForMobileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCarbonForSalesforceIcon],svg[carbon-carbon-for-salesforce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.51 17.69l-6-3.55c-.16-.09-.33-.14-.51-.14s-.35.05-.51.14l-6 3.55c-.3.18-.49.51-.49.86v6.9c0 .35.19.68.49.86l6 3.55c.16.09.33.14.51.14s.35-.05.51-.14l6-3.55c.3-.18.49-.51.49-.86v-6.9c0-.35-.19-.68-.49-.86M28 24.88l-5 2.96l-5-2.96v-5.76l5-2.96l5 2.96z"></svg:path><svg:path fill="currentColor" d="M23.4 4.47c-.65 0-1.28.09-1.88.27a5.59 5.59 0 0 0-4.4-2.17c-1.17 0-2.28.36-3.22 1.03A6.06 6.06 0 0 0 9.81 2H9.8c-1.62 0-3.14.63-4.29 1.78a5.97 5.97 0 0 0-1.53 5.88a5.38 5.38 0 0 0-1.97 4.18c0 2.97 2.39 5.39 5.34 5.39h.28a5.69 5.69 0 0 0 4.99 2.98c.47 0 .94-.06 1.38-.17v-2.11c-.43.18-.9.28-1.38.28c-1.53 0-2.92-.97-3.44-2.4l-.3-.81l-.84.17c-.23.05-.46.07-.69.07c-1.84 0-3.34-1.53-3.34-3.4c0-1.2.64-2.33 1.68-2.94l.77-.45l-.36-.82c-.23-.51-.34-1.05-.34-1.61c0-1.07.41-2.07 1.17-2.83C7.7 4.42 8.72 4 9.8 4c1.25 0 2.46.6 3.22 1.59l.6.79l1.2-.96c.65-.55 1.46-.85 2.3-.85c1.29 0 2.49.72 3.14 1.87l.45.8l.83-.38c.58-.26 1.21-.39 1.86-.39c2.54 0 4.6 2.09 4.6 4.65a4.6 4.6 0 0 1-.98 2.83l1.75 1.01a6.6 6.6 0 0 0 1.22-3.84c0-3.67-2.96-6.65-6.6-6.65z"></svg:path>`,
})
export class CarbonCarbonForSalesforceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCarbonUiBuilderIcon],svg[carbon-carbon-ui-builder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 28h6v2h-6z"></svg:path><svg:circle cx="21" cy="29" r="1" fill="currentColor"></svg:circle><svg:circle cx="29" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 26h-6v-2h6zm-2-6h6v2h-6z"></svg:path><svg:circle cx="21" cy="21" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m21.493 14.13l-8.5-4.815a1 1 0 0 0-.986 0l-8.5 4.815A1 1 0 0 0 3 15v10a1 1 0 0 0 .507.87l8.5 4.815l.986-1.74L5 24.417v-8.834l7.5-4.248l7.5 4.248V18h2v-3a1 1 0 0 0-.507-.87"></svg:path><svg:path fill="currentColor" d="M25 15h2V7a1 1 0 0 0-.507-.87l-8.5-4.815a1 1 0 0 0-.986 0l-8.5 4.815l.986 1.74L17.5 3.334L25 7.583z"></svg:path>`,
})
export class CarbonCarbonUiBuilderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCaretDownIcon],svg[carbon-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 12l-8 10l-8-10z"></svg:path>`,
})
export class CarbonCaretDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCaretLeftIcon],svg[carbon-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 24l-10-8l10-8z"></svg:path>`,
})
export class CarbonCaretLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCaretRightIcon],svg[carbon-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8l10 8l-10 8z"></svg:path>`,
})
export class CarbonCaretRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCaretSortIcon],svg[carbon-caret-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 24l-8 8l-8-8zM8 8l8-8l8 8z"></svg:path>`,
})
export class CarbonCaretSortIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCaretSortDownIcon],svg[carbon-caret-sort-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 24l-8 8l-8-8z"></svg:path>`,
})
export class CarbonCaretSortDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCaretSortUpIcon],svg[carbon-caret-sort-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 8l8-8l8 8z"></svg:path>`,
})
export class CarbonCaretSortUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCaretUpIcon],svg[carbon-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 20l8-10l8 10z"></svg:path>`,
})
export class CarbonCaretUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCarouselHorizontalIcon],svg[carbon-carousel-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 26H10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M10 8v16h12V8zM4 24H0v-2h4V10H0V8h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2m28 0h-4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4v2h-4v12h4z"></svg:path>`,
})
export class CarbonCarouselHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCarouselVerticalIcon],svg[carbon-carousel-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 10v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2M8 22h16V10H8zm16 6v4h-2v-4H10v4H8v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m0-28v4a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V0h2v4h12V0z"></svg:path>`,
})
export class CarbonCarouselVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCatalogIcon],svg[carbon-catalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 2H8a2 2 0 0 0-2 2v4H4v2h2v5H4v2h2v5H4v2h2v4a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 26H8v-4h2v-2H8v-5h2v-2H8v-5h2V8H8V4h18Z"></svg:path><svg:path fill="currentColor" d="M14 8h8v2h-8zm0 7h8v2h-8zm0 7h8v2h-8z"></svg:path>`,
})
export class CarbonCatalogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCatalogPublishIcon],svg[carbon-catalog-publish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 20l1.4 1.4l-2.6 2.6H28v2h-9.2l2.6 2.6L20 30l-5-5zm-6-5h8v2h-8zm0-7h8v2h-8z"></svg:path><svg:path fill="currentColor" d="M13 28H8v-4h2v-2H8v-5h2v-2H8v-5h2V8H8V4h18v16h2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v4H4v2h2v5H4v2h2v5H4v2h2v4c0 1.1.9 2 2 2h5z"></svg:path>`,
})
export class CarbonCatalogPublishIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCategoriesIcon],svg[carbon-categories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.76 6l.45.89L7.76 8H12v5H4V6zm.62-2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9l-.72-1.45a1 1 0 0 0-.9-.55m15.38 2l.45.89l.55 1.11H28v5h-8V6zm.62-2H19a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4l-.72-1.45a1 1 0 0 0-.9-.55M6.76 19l.45.89l.55 1.11H12v5H4v-7zm.62-2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H9l-.72-1.45a1 1 0 0 0-.9-.55m15.38 2l.45.89l.55 1.11H28v5h-8v-7zm.62-2H19a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-4l-.72-1.45a1 1 0 0 0-.9-.55"></svg:path>`,
})
export class CarbonCategoriesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCategoryIcon],svg[carbon-category-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 22.141V18a2 2 0 0 0-2-2h-8v-4h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4H7a2 2 0 0 0-2 2v4.142a4 4 0 1 0 2 0V18h8v4.142a4 4 0 1 0 2 0V18h8v4.141a4 4 0 1 0 2 0M13 4h6l.001 6H13ZM8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m10 0a2 2 0 1 1-2-2a2.003 2.003 0 0 1 2 2m8 2a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonCategoryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCategoryAddIcon],svg[carbon-category-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 6l-1.41 1.41L17.17 11l-3.58 3.59L15 16l5-5z"></svg:path><svg:path fill="currentColor" d="M28 24H17v-4h6a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6v4H4a2 2 0 0 0-2 2v4h2v-4h11v4h2v-4h11v4h2v-4a2 2 0 0 0-2-2M9 4h14l.002 14H9Z"></svg:path>`,
})
export class CarbonCategoryAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCategoryAndIcon],svg[carbon-category-and-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 30v-4h11v4h2v-4h11v4h2v-4a2 2 0 0 0-2-2H17v-5h-2v5H4a2 2 0 0 0-2 2v4zm16.695-16.014A10.1 10.1 0 0 0 21.946 10H23V8h-3v1a9.3 9.3 0 0 1-.664 3.27L16.65 8.883a5.13 5.13 0 0 0 2.144-2.37a3.25 3.25 0 0 0-.189-2.702a3.38 3.38 0 0 0-2.239-1.706a3.47 3.47 0 0 0-4.222 2.119c-.505 1.552.44 3.116 1.261 4.108a4.73 4.73 0 0 0-2.346 4.828A4.45 4.45 0 0 0 15.427 17h.006a5.78 5.78 0 0 0 3.971-1.423L20.532 17h2.552zM14.047 4.84A1.32 1.32 0 0 1 15.414 4a2.4 2.4 0 0 1 .521.058a1.4 1.4 0 0 1 .912.702a1.25 1.25 0 0 1 .079 1.042a3.7 3.7 0 0 1-1.682 1.593c-.66-.713-1.435-1.822-1.197-2.554M15.432 15h-.004a2.44 2.44 0 0 1-2.392-2.15a2.826 2.826 0 0 1 1.81-3.026l3.312 4.179a3.9 3.9 0 0 1-2.726.997"></svg:path>`,
})
export class CarbonCategoryAndIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCategoryNewIcon],svg[carbon-category-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10h-4V6h-2v4h-4v2h4v4h2v-4h4z"></svg:path><svg:path fill="currentColor" d="M28 24H17v-4h6a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6v4H4a2 2 0 0 0-2 2v4h2v-4h11v4h2v-4h11v4h2v-4a2 2 0 0 0-2-2M9 4h14l.002 14H9Z"></svg:path>`,
})
export class CarbonCategoryNewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCategoryNewEachIcon],svg[carbon-category-new-each-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 10h-5v2h5v6h-7v2h3v2.142a4 4 0 1 0 2 0V20h2a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-1 16a2 2 0 1 1-2-2a2.003 2.003 0 0 1 2 2M19 6h-5v2h5v6h-7v2h3v6.142a4 4 0 1 0 2 0V16h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-1 20a2 2 0 1 1-2-2a2.003 2.003 0 0 1 2 2M9 2H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v10.142a4 4 0 1 0 2 0V12h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2M3 10V4h6l.002 6z"></svg:path>`,
})
export class CarbonCategoryNewEachIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCcxIcon],svg[carbon-ccx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 23H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2H5v6h5z" fill="currentColor"></svg:path><svg:path d="M19 23h-5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2h-5v6h5z" fill="currentColor"></svg:path><svg:path d="M29 9h-2l-2 6l-2-6h-2l2.75 7L21 23h2l2-6l2 6h2l-2.75-7L29 9z" fill="currentColor"></svg:path>`,
})
export class CarbonCcxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCdArchiveIcon],svg[carbon-cd-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 28a12 12 0 1 1 12-12a12 12 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10 10 0 0 0 16 6z" fill="currentColor"></svg:path><svg:path d="M16 22a6 6 0 1 1 6-6a6 6 0 0 1-6 6zm0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4z" fill="currentColor"></svg:path><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonCdArchiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCdCreateArchiveIcon],svg[carbon-cd-create-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14 20a6 6 0 1 1 6-6a6 6 0 0 1-6 6zm0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4z" fill="currentColor"></svg:path><svg:circle cx="14" cy="14" r="2" fill="currentColor"></svg:circle><svg:path d="M17 23.54A10 10 0 1 1 24 14c0 .34 0 .67-.05 1h2c0-.33.05-.66.05-1a12 12 0 1 0-12 12a12.33 12.33 0 0 0 3-.39z" fill="currentColor"></svg:path><svg:path d="M25 30l-2.14-1A5 5 0 0 1 20 24.47V18h10v6.47A5 5 0 0 1 27.14 29zm-3-10v4.47a3 3 0 0 0 1.72 2.71l1.28.61l1.28-.61A3 3 0 0 0 28 24.47V20z" fill="currentColor"></svg:path>`,
})
export class CarbonCdCreateArchiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCdCreateExchangeIcon],svg[carbon-cd-create-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14" cy="14" r="2" fill="currentColor"></svg:circle><svg:path d="M14 2a12 12 0 0 0 0 24v-2a10 10 0 1 1 10-10a8.27 8.27 0 0 1 0 1h2c0-.33.05-.66.05-1A12 12 0 0 0 14 2z" fill="currentColor"></svg:path><svg:path d="M17 24h9.17l-2.59 2.59L25 28l5-5l-5-5l-1.42 1.42L26.17 22H17v2z" fill="currentColor"></svg:path><svg:path d="M14 20a6 6 0 1 1 6-6a6 6 0 0 1-6 6zm0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4z" fill="currentColor"></svg:path>`,
})
export class CarbonCdCreateExchangeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCdaIcon],svg[carbon-cda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 9h-4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5zm-8 7h-4V9h4a4.004 4.004 0 0 1 4 4v6a4.004 4.004 0 0 1-4 4m-2-2h2a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2zm-4 2H4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2H4v10h6z"></svg:path>`,
})
export class CarbonCdaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCellTowerIcon],svg[carbon-cell-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 11v5h-8v-5h-2v5H7v-5H5v12h2v-5h3v12h2V18h3v5h2v-5h3v12h2V18h3v5h2V11zm-9-5c-1.7 0-3.2.7-4.2 1.8l1.4 1.4C13.9 8.4 14.9 8 16 8s2.1.4 2.8 1.2l1.4-1.4C19.2 6.7 17.7 6 16 6"></svg:path><svg:path fill="currentColor" d="m8.9 4.9l1.4 1.4C11.8 4.9 13.8 4 16 4s4.2.9 5.7 2.3l1.4-1.4C21.3 3.1 18.8 2 16 2s-5.3 1.1-7.1 2.9"></svg:path>`,
})
export class CarbonCellTowerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCenterCircleIcon],svg[carbon-center-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15h-2.05A12.01 12.01 0 0 0 17 4.05V2h-2v2.05A12.01 12.01 0 0 0 4.05 15H2v2h2.05A12.01 12.01 0 0 0 15 27.95V30h2v-2.05A12.01 12.01 0 0 0 27.95 17H30ZM17 25.95V22h-2v3.95A10.02 10.02 0 0 1 6.05 17H10v-2H6.05A10.02 10.02 0 0 1 15 6.05V10h2V6.05A10.02 10.02 0 0 1 25.95 15H22v2h3.95A10.02 10.02 0 0 1 17 25.95"></svg:path>`,
})
export class CarbonCenterCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCenterSquareIcon],svg[carbon-center-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H4V4h8v2H6zm22 0h-2V6h-6V4h8zM12 28H4v-8h2v6h6zm16 0h-8v-2h6v-6h2zM15 10h2v4h-2zm-5 5h4v2h-4zm8 0h4v2h-4zm-3 3h2v4h-2z"></svg:path>`,
})
export class CarbonCenterSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCenterToFitIcon],svg[carbon-center-to-fit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H2v6h2V4h4zm16 0h6v6h-2V4h-4zM8 30H2v-6h2v4h4zm16 0h6v-6h-2v4h-4zm0-6H8a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M8 10v12h16V10z"></svg:path>`,
})
export class CarbonCenterToFitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCertificateIcon],svg[carbon-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 17l1.912 3.703l4.088.594L27 24l.771 4L24 25.75L20.229 28L21 24l-3-2.703l4.2-.594zM6 16h6v2H6zm0-4h10v2H6zm0-4h10v2H6z"></svg:path><svg:path fill="currentColor" d="M16 26H4V6h24v10h2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h12Z"></svg:path>`,
})
export class CarbonCertificateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCertificateCheckIcon],svg[carbon-certificate-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h6v2H6zm0-4h10v2H6zm0-4h10v2H6z"></svg:path><svg:path fill="currentColor" d="M14 26H4V6h24v10h2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10Z"></svg:path><svg:path fill="currentColor" d="M22 25.59L19.41 23L18 24.41l4 4l8-8L28.59 19z"></svg:path>`,
})
export class CarbonCertificateCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChangeCatalogIcon],svg[carbon-change-catalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 24v2h2.46A5.94 5.94 0 0 1 22 28a6.007 6.007 0 0 1-6-6h-2a7.984 7.984 0 0 0 14 5.265V30h2v-6zm-2-10a8.04 8.04 0 0 0-6 2.735V14h-2v6h6v-2h-2.46A5.94 5.94 0 0 1 22 16a6.007 6.007 0 0 1 6 6h2a8.01 8.01 0 0 0-8-8"></svg:path><svg:path fill="currentColor" d="M12 28H6v-4h2v-2H6v-5h2v-2H6v-5h2V8H6V4h18v8h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4H2v2h2v5H2v2h2v5H2v2h2v4a2 2 0 0 0 2 2h6Z"></svg:path>`,
})
export class CarbonChangeCatalogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChannelsIcon],svg[carbon-channels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15V7.8l3.6 3.6L15 10L9 4l-6 6l1.4 1.4L8 7.8v12.34c-1.72.45-3 2-3 3.86c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.86-1.28-3.41-3-3.86zm1 9c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m16.6-3.4L24 24.2V11.86c1.72-.45 3-2 3-3.86c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 1.86 1.28 3.41 3 3.86V24.2l-3.6-3.6L17 22l6 6l6-6zM21 8c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2"></svg:path>`,
})
export class CarbonChannelsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterDecimalIcon],svg[carbon-character-decimal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M24 23h-4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2.003 2.003 0 0 1-2 2m-4-12v10h4V11zm-9 4h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M14 23h-4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2.003 2.003 0 0 1-2 2m-4-12v10h4V11zM4 21h2v2H4z"></svg:path>`,
})
export class CarbonCharacterDecimalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterFractionIcon],svg[carbon-character-fraction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30h-8v-6a2 2 0 0 1 2-2h4v-4h-6v-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4h6ZM7 23.586L22.586 8L24 9.414L8.414 25zM4.5 15.5v-1h3v-11h-3v-1h4v12h3v1z"></svg:path><svg:path fill="currentColor" d="M8 3v12zm1-1H4v2h3v10H4v2h8v-2H9z"></svg:path>`,
})
export class CarbonCharacterFractionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterIntegerIcon],svg[carbon-character-integer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 22.5v-1h3v-11h-3v-1h4v12h3v1z"></svg:path><svg:path fill="currentColor" d="M23 10v12zm1-1h-5v2h3v10h-3v2h8v-2h-3zM5 21h10v2H5zm10-8h-4V9H9v4H5v2h4v4h2v-4h4z"></svg:path>`,
})
export class CarbonCharacterIntegerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterLowerCaseIcon],svg[carbon-character-lower-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 23h-5a2.003 2.003 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2h-5v6h5zM18 13h-4V9h-2v14h6a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-4 8v-6h4v6zm-6-8H3v2h5v2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8a2 2 0 0 0-2-2m0 8H4v-2h4z"></svg:path>`,
})
export class CarbonCharacterLowerCaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterNegativeNumberIcon],svg[carbon-character-negative-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 22.5v-1h3v-11h-3v-1h4v12h3v1z"></svg:path><svg:path fill="currentColor" d="M23 10v12zm1-1h-5v2h3v10h-3v2h8v-2h-3zM5 15h10v2H5z"></svg:path>`,
})
export class CarbonCharacterNegativeNumberIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterPatternsIcon],svg[carbon-character-patterns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 26v-8.172l-3.586 3.586L1 20l6-6l6 6l-1.414 1.414L8 17.828V26h10v2H8a2 2 0 0 1-2-2m24-4v-2h-8v2h5.5L22 28v2h8v-2h-5.493zM26 6v8.172l3.586-3.586L31 12l-6 6l-6-6l1.414-1.414L24 14.172V6H14V4h10a2 2 0 0 1 2 2M8 2H3v2h5v2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6V4a2 2 0 0 0-2-2m0 8H4V8h4z"></svg:path>`,
})
export class CarbonCharacterPatternsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterSentenceCaseIcon],svg[carbon-character-sentence-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 23h-5a2.003 2.003 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2h-5v6h5zM18 13h-4V9h-2v14h6a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-4 8v-6h4v6zM8 9H4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5z"></svg:path>`,
})
export class CarbonCharacterSentenceCaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterUpperCaseIcon],svg[carbon-character-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23h-6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2h-6v10h6zM20 12a3.003 3.003 0 0 0-3-3h-5v14h5a3.003 3.003 0 0 0 3-3v-2a2.98 2.98 0 0 0-.78-2a2.98 2.98 0 0 0 .78-2zm-6-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3zm4 9a1 1 0 0 1-1 1h-3v-4h3a1 1 0 0 1 1 1zM8 9H4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5z"></svg:path>`,
})
export class CarbonCharacterUpperCaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterWholeNumberIcon],svg[carbon-character-whole-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 9h-6v2h6v4h-4v2h4v4h-6v2h6a2.003 2.003 0 0 0 2-2V11a2 2 0 0 0-2-2m-8 14h-8v-6a2 2 0 0 1 2-2h4v-4h-6V9h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4h6zm-17.5-.5v-1h3v-11h-3v-1h4v12h3v1z"></svg:path><svg:path fill="currentColor" d="M6 10v12zm1-1H2v2h3v10H2v2h8v-2H7z"></svg:path>`,
})
export class CarbonCharacterWholeNumberIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChargingStationIcon],svg[carbon-charging-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.857 21.514l-1.714-1.028L12.234 17h-5l3.909-6.514l1.714 1.028L10.766 15h5z"></svg:path><svg:path fill="currentColor" d="M30 7h-1V4h-2v3h-1v6h1v11.5a1.5 1.5 0 0 1-3 0V16a1 1 0 0 0-1-1h-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v21H2v2h19v-2h-2v-9h3v7.5a3.5 3.5 0 0 0 7 0V13h1ZM17 26H6V6h11Z"></svg:path>`,
})
export class CarbonChargingStationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChargingStationFilledIcon],svg[carbon-charging-station-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 7V4h-2v3h-1v6h1v11.5a1.5 1.5 0 0 1-3 0V16a1 1 0 0 0-1-1h-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v21H2v2h19v-2h-2v-9h3v7.5a3.5 3.5 0 0 0 7 0V13h1V7ZM11.857 21.515l-1.714-1.03L12.233 17h-5l3.91-6.515l1.714 1.03L10.767 15h5Z"></svg:path><svg:path fill="none" d="m11.857 21.514l-1.714-1.028L12.234 17h-5l3.909-6.514l1.714 1.028L10.766 15h5z"></svg:path>`,
})
export class CarbonChargingStationFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChart3dIcon],svg[carbon-chart-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 23v3.586l-5-5V15a1 1 0 0 0-.553-.894L17 11.381V5.828l2.586 2.586L21 7l-5-5l-5 5l1.414 1.414L15 5.828v5.554l-5.447 2.723A1 1 0 0 0 9 15v6.586l-5 5V23H2v7h7v-2H5.414l4.783-4.783l5.356 2.678a1 1 0 0 0 .894 0l5.356-2.678L26.586 28H23v2h7v-7Zm-13 .382l-4-2v-4.764l4 2Zm1-6.5L12.236 15L16 13.118L19.764 15Zm5 4.5l-4 2v-4.764l4-2Z"></svg:path>`,
})
export class CarbonChart3dIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartAreaIcon],svg[carbon-chart-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.476 8.015l-7.029-3.804a2.01 2.01 0 0 0-2.115.205L4 10.001V2H2v26a2 2 0 0 0 2 2h26V5.735ZM28 20.21l-7.62 1.802l-7.029-2.884a1.99 1.99 0 0 0-2.022.37L4 25.836V21.38l8.375-9.4l7.019 5.62a2.02 2.02 0 0 0 2.046.212l6.56-3.21ZM12.524 5.985l7.03 3.804a2 2 0 0 0 1.34.16L28 8.265v4.113l-7.381 3.642L13.6 10.4a1.99 1.99 0 0 0-2.688.264L4 18.384v-5.87ZM4.55 28l8.069-7.011l7.029 2.884a2 2 0 0 0 1.147.077L28 22.26V28Z"></svg:path>`,
})
export class CarbonChartAreaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartAreaSmoothIcon],svg[carbon-chart-area-smooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 6.614l-1.315.437A21 21 0 0 1 23 8c-1.734 0-3.322-.907-5.004-1.868C16.162 5.084 14.266 4 12 4C9.123 4 5.915 6.206 4 7.772V2H2v26a2.003 2.003 0 0 0 2 2h26ZM4 20.294C5.874 17.376 9.56 13 12 13c1.638 0 2.96 1.102 4.36 2.269C17.897 16.549 19.638 18 22 18a9.47 9.47 0 0 0 6-2.529v4.956A13 13 0 0 1 22 22a13.9 13.9 0 0 1-4.684-.949A15.7 15.7 0 0 0 12 20c-2.927 0-6.068 2.959-8 5.158ZM12 6c1.734 0 3.323.907 5.004 1.868C18.838 8.916 20.734 10 23 10a21.4 21.4 0 0 0 5-.678v3.321c-.683.803-3.084 3.357-6 3.357c-1.638 0-2.96-1.102-4.36-2.269C16.103 12.451 14.362 11 12 11c-2.936 0-6.063 3.34-8 5.845v-6.421C5.546 8.966 9.259 6 12 6M4.249 28C5.862 25.909 9.41 22 12 22a13.9 13.9 0 0 1 4.684.949A15.7 15.7 0 0 0 22 24a14.7 14.7 0 0 0 6-1.34V28Z"></svg:path>`,
})
export class CarbonChartAreaSmoothIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartAreaStepperIcon],svg[carbon-chart-area-stepper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V6H10v6H4V2H2v26a2.003 2.003 0 0 0 2 2h26V10Zm-10 4V8h8v4h8v10h-6v-6H12v6H4v-8ZM4 28v-4h10v-6h6v6h8v4Z"></svg:path>`,
})
export class CarbonChartAreaStepperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartAverageIcon],svg[carbon-chart-average-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 24c-3.6 0-5.03-4.176-6.413-8.214C15.277 11.958 13.92 8 11 8a3.44 3.44 0 0 0-3.053 2.322L6.05 9.684C6.101 9.534 7.321 6 11 6c4.35 0 6.012 4.855 7.48 9.138C19.689 18.667 20.83 22 23 22a3.44 3.44 0 0 0 3.053-2.321l1.896.637C27.899 20.466 26.679 24 23 24"></svg:path><svg:path fill="currentColor" d="M4 28V17h2v-2H4V2H2v26a2 2 0 0 0 2 2h26v-2Z"></svg:path><svg:path fill="currentColor" d="M8 15h2v2H8zm4 0h2v2h-2zm8 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class CarbonChartAverageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartBarIcon],svg[carbon-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4v-3h22v-8H4v-4h14V5H4Zm20 17v4H4v-4ZM16 7v4H4V7Z"></svg:path>`,
})
export class CarbonChartBarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartBarFloatingIcon],svg[carbon-chart-bar-floating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 24H14v-8h14zm-12-2h10v-4H16zm10-10H8V4h18zm-16-2h14V6H10z"></svg:path><svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path>`,
})
export class CarbonChartBarFloatingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartBarOverlayIcon],svg[carbon-chart-bar-overlay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 28v-2h22V16H4v-2h14V4H4V2H2v26a2 2 0 0 0 2 2h26v-2Zm20-10v6H4v-2h16v-2H4v-2ZM16 6v6H4v-2h8V8H4V6Z"></svg:path>`,
})
export class CarbonChartBarOverlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartBarStackedIcon],svg[carbon-chart-bar-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 28v-3h22v-8H4v-4h14V5H4V2H2v26a2 2 0 0 0 2 2h26v-2Zm20-5H14v-4h10Zm-8-12h-6V7h6Z"></svg:path>`,
})
export class CarbonChartBarStackedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartBarTargetIcon],svg[carbon-chart-bar-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 17h2v8h-2zM20 5h2v8h-2z"></svg:path><svg:path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4v-3h22v-8H4v-4h14V5H4Zm20 17v4H4v-4ZM16 7v4H4V7Z"></svg:path>`,
})
export class CarbonChartBarTargetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartBubbleIcon],svg[carbon-chart-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path><svg:path fill="currentColor" d="M10 16a2 2 0 1 1-2 2a2 2 0 0 1 2-2m0-2a4 4 0 1 0 4 4a4 4 0 0 0-4-4m11-8a4 4 0 1 1-4 4a4 4 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6m3.5 17a1.5 1.5 0 1 1-1.5 1.5a1.5 1.5 0 0 1 1.5-1.5m0-2a3.5 3.5 0 1 0 3.5 3.5a3.5 3.5 0 0 0-3.5-3.5"></svg:path>`,
})
export class CarbonChartBubbleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartBubblePackedIcon],svg[carbon-chart-bubble-packed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.532 17.172A8.99 8.99 0 1 0 13.607 5.88a5.997 5.997 0 1 0-8.556 7.342a6.997 6.997 0 1 0 7.994 11.484A5.998 5.998 0 0 0 25 24c0-.122-.011-.24-.018-.36a3.487 3.487 0 1 0 2.55-6.468M21 4a7 7 0 1 1-7 7a7.01 7.01 0 0 1 7-7M8 4a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m11 24a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path>`,
})
export class CarbonChartBubblePackedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartBulletIcon],svg[carbon-chart-bullet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 22H16v-1h-2v1H2v6h12v1h2v-1h14zM4 26v-2h10v2zm24 0H16v-2h12zm2-13h-6v-1h-2v1H2v6h20v1h2v-1h6zM4 17v-2h18v2zm24 0h-4v-2h4zm2-13H10V3H8v1H2v6h6v1h2v-1h20zM4 8V6h4v2zm24 0H10V6h18z"></svg:path>`,
})
export class CarbonChartBulletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartCandlestickIcon],svg[carbon-chart-candlestick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 10h-2V6h-2v4h-2v12h2v4h2v-4h2zm-2 10h-2v-8h2zM14 8h-2V4h-2v4H8v10h2v4h2v-4h2zm-2 8h-2v-6h2z"></svg:path><svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path>`,
})
export class CarbonChartCandlestickIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartClusterBarIcon],svg[carbon-chart-cluster-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path><svg:path fill="currentColor" d="M10 16h2v10h-2zm-3 6h2v4H7zM26 8h2v18h-2zm-3 6h2v12h-2zm-6 12h-2V12h2zm3 0h-2v-8h2z"></svg:path>`,
})
export class CarbonChartClusterBarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartColumnIcon],svg[carbon-chart-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28V6h-8v22h-4V14H7v14H4V2H2v26a2 2 0 0 0 2 2h26v-2Zm-14 0H9V16h4Zm12 0h-4V8h4Z"></svg:path>`,
})
export class CarbonChartColumnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartColumnFloatingIcon],svg[carbon-chart-column-floating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22h-8V4h8zm-6-2h4V6h-4zm-6 4H8V10h8zm-6-2h4V12h-4z"></svg:path><svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path>`,
})
export class CarbonChartColumnFloatingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartColumnTargetIcon],svg[carbon-chart-column-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28V6h-8v22h-4V14H7v14H4V2H2v26a2 2 0 0 0 2 2h26v-2zm-14 0H9V16h4zm12 0h-4V8h4zM19 2h8v2h-8z"></svg:path><svg:path fill="currentColor" d="M7 10h8v2H7z"></svg:path>`,
})
export class CarbonChartColumnTargetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartComboIcon],svg[carbon-chart-combo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28V16h-8v12h-4V12H7v16H4V2H2v26a2 2 0 0 0 2 2h26v-2Zm-14 0H9V14h4Zm12 0h-4V18h4Z"></svg:path><svg:path fill="currentColor" d="M22.786 14a2 2 0 0 1-1.18-.386L11.205 5.987L8.242 10L6.637 8.806l2.982-4a2 2 0 0 1 2.749-.446L22.789 12l3.605-4.86L28 8.33l-3.604 4.862a2 2 0 0 1-1.61.808"></svg:path>`,
})
export class CarbonChartComboIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartComboStackedIcon],svg[carbon-chart-combo-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28V16h-8v12h-4V12H7v16H4V2H2v26a2 2 0 0 0 2 2h26v-2ZM13 14v6H9v-6Zm12 4v6h-4v-6Z"></svg:path><svg:path fill="currentColor" d="M22.786 14a2 2 0 0 1-1.18-.386L11.205 5.987L8.242 10L6.637 8.806l2.982-4a2 2 0 0 1 2.749-.446L22.789 12l3.605-4.86L28 8.33l-3.604 4.862a2 2 0 0 1-1.61.808"></svg:path>`,
})
export class CarbonChartComboStackedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartCustomIcon],svg[carbon-chart-custom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.707 19.293l-3-3a1 1 0 0 0-1.414 0L16 25.586V30h4.414l9.293-9.293a1 1 0 0 0 0-1.414M19.586 28H18v-1.586l5-5L24.586 23ZM26 21.586L24.414 20L26 18.414L27.586 20ZM18 18v-4h2v4zm-4 0v-6h2v6zm-4 0V8h2v10z"></svg:path><svg:path fill="currentColor" d="M12 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10h-2V4H6v24h6Z"></svg:path>`,
})
export class CarbonChartCustomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartDualYAxisIcon],svg[carbon-chart-dual-y-axis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2v5.722l-7.532 6.952l-8.086-8.086a1.997 1.997 0 0 0-2.731-.09L4 11.442V2H2v26c0 1.103.897 2 2 2h24c1.103 0 2-.897 2-2V2zm0 8.444v11.762l-6.116-6.116zM10.968 8.002l8.03 8.03L15.783 19l-3.414-3.415a2 2 0 0 0-2.732-.09L4 20.425V14.1zM4 28v-4.916l6.955-6.085l3.414 3.414a1.99 1.99 0 0 0 2.77.056l3.274-3.022L28 25.034V28z"></svg:path>`,
})
export class CarbonChartDualYAxisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartErrorBarIcon],svg[carbon-chart-error-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 28V12h-4V8h2V6h-6v2h2v4h-4v16H4V2H2v26a2 2 0 0 0 2 2h26v-2Zm-8-14h2v4h-2Zm6 14h-6v-8h6Zm0-10h-2v-4h2Z"></svg:path>`,
})
export class CarbonChartErrorBarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartErrorBarAltIcon],svg[carbon-chart-error-bar-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10V8H8v2h2v4.184a2.983 2.983 0 0 0 0 5.632V24H8v2h6v-2h-2v-4.184a2.983 2.983 0 0 0 0-5.632V10zm12-4V4h-6v2h2v2.184a2.983 2.983 0 0 0 0 5.632V18h-2v2h6v-2h-2v-4.184a2.983 2.983 0 0 0 0-5.632V6z"></svg:path><svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path>`,
})
export class CarbonChartErrorBarAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartEvaluationIcon],svg[carbon-chart-evaluation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25.586 8l3-3L30 6.411l-3 3.001zM16 20.5l-5-4.961l1.59-1.57l3.41 3.38L23.41 10L25 11.579z"></svg:path><svg:path fill="currentColor" d="M4 28v-2.587L10.414 19L9 17.585l-5 5V2H2v26a2 2 0 0 0 2 2h26v-2Z"></svg:path>`,
})
export class CarbonChartEvaluationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartHighLowIcon],svg[carbon-chart-high-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8h-3V6h-2v14H7v2h3v2h2V10h3zm12 2h-3V6h-2v12h-3v2h3v4h2V12h3z"></svg:path><svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path>`,
})
export class CarbonChartHighLowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartHistogramIcon],svg[carbon-chart-histogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16c2.973 0 4.232-2.251 5.345-4.237C12.475 9.744 13.45 8 16 8s3.526 1.744 4.655 3.763C21.768 13.749 23.027 16 26 16h4v-2h-4c-1.713 0-2.483-1.22-3.6-3.214C21.209 8.654 19.724 6 16 6s-5.207 2.654-6.4 4.786C8.482 12.779 7.712 14 6 14H4V2H2v26a2 2 0 0 0 2 2h26v-2h-2v-6h-2v6h-4v-8h-2v8h-4V16h-2v12h-4v-8H8v8H4V16Z"></svg:path>`,
})
export class CarbonChartHistogramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartLineIcon],svg[carbon-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.67 28l6.39-12l7.3 6.49a2 2 0 0 0 1.7.47a2 2 0 0 0 1.42-1.07L27 10.9l-1.82-.9l-5.49 11l-7.3-6.49a2 2 0 0 0-1.68-.51a2 2 0 0 0-1.42 1L4 25V2H2v26a2 2 0 0 0 2 2h26v-2Z"></svg:path>`,
})
export class CarbonChartLineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartLineDataIcon],svg[carbon-chart-line-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.06 17.88A4.3 4.3 0 0 0 11 18a4 4 0 0 0 2.23-.68l3.22 2.87a3.88 3.88 0 0 0-.2 3.17A4 4 0 1 0 22.62 19l2.54-5.09a3.78 3.78 0 0 0 2.91-.53a4 4 0 1 0-4.69-.38l-2.54 5.09A4 4 0 0 0 20 18a4 4 0 0 0-2.23.68l-3.22-2.87a3.88 3.88 0 0 0 .2-3.17a4 4 0 1 0-6.45 4.29L4 25V2H2v26a2 2 0 0 0 2 2h26v-2H4.67ZM26 8a2 2 0 1 1-2 2a2 2 0 0 1 2-2m-4 14a2 2 0 1 1-2-2a2 2 0 0 1 2 2M11 12a2 2 0 1 1-2 2a2 2 0 0 1 2-2"></svg:path>`,
})
export class CarbonChartLineDataIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartLineSmoothIcon],svg[carbon-chart-line-smooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15c1.485 0 2.554 1.497 3.686 3.081C17.998 19.918 19.486 22 22 22c5.67 0 7.78-10.79 8-12l-1.968-.358C27.55 12.282 25.394 20 22 20c-1.485 0-2.554-1.497-3.686-3.081C17.002 15.082 15.514 13 13 13c-4.186 0-7.445 7.404-9 11.762V2H2v26a2.003 2.003 0 0 0 2 2h26v-2H5.044c1.51-5.143 4.92-13 7.956-13"></svg:path>`,
})
export class CarbonChartLineSmoothIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartLogisticRegressionIcon],svg[carbon-chart-logistic-regression-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="20" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="14" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="8" cy="6" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M8.234 24a8.99 8.99 0 0 0 8.538-6.154l2.353-7.06A6.99 6.99 0 0 1 25.766 6H30V4h-4.234a8.99 8.99 0 0 0-8.538 6.154l-2.353 7.06A6.99 6.99 0 0 1 8.234 22H4V2H2v26c0 1.103.897 2 2 2h26v-2H4v-4z"></svg:path>`,
})
export class CarbonChartLogisticRegressionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartMarimekkoIcon],svg[carbon-chart-marimekko-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 3H5a2.003 2.003 0 0 0-2 2v22a2.003 2.003 0 0 0 2 2h22a2.003 2.003 0 0 0 2-2V5a2.003 2.003 0 0 0-2-2m0 7h-6V5h6Zm-8-2h-6V5h6Zm0 2v8h-6v-8Zm-8 12H5V12h6Zm2-2h6v7h-6Zm8-8h6v4h-6ZM11 5v5H5V5ZM5 24h6v3H5Zm16 3v-9h6v9Z"></svg:path>`,
})
export class CarbonChartMarimekkoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartMaximumIcon],svg[carbon-chart-maximum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6h2v2H8zm4 0h2v2h-2zm8 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path><svg:path fill="currentColor" d="m27.989 28l-.027-.163C26.51 19.074 24.066 9.089 18 8.089V6h-2v2.085c-6.084.978-8.533 10.978-9.986 19.752L5.987 28H4V8h2V6H4V2H2v26a2 2 0 0 0 2 2h26v-2ZM8.015 28c2.024-12.108 4.96-18 8.973-18s6.949 5.892 8.972 18Z"></svg:path>`,
})
export class CarbonChartMaximumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartMedianIcon],svg[carbon-chart-median-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 24v-2h2v2z"></svg:path><svg:path fill="currentColor" d="M18 28v-2h-2v2H4V2H2v26a2 2 0 0 0 2 2h26v-2Z"></svg:path><svg:path fill="currentColor" d="M26.053 19.679A3.44 3.44 0 0 1 23 22c-2.17 0-3.311-3.333-4.52-6.862c-.356-1.039-.724-2.11-1.138-3.138H18v-2h-1.578c-1.21-2.285-2.84-4-5.422-4c-3.678 0-4.898 3.533-4.949 3.684l1.896.637A3.44 3.44 0 0 1 11 8c2.92 0 4.276 3.958 5.587 7.786c.255.742.51 1.49.782 2.214H16v2h2.202c1.083 2.289 2.496 4 4.798 4c3.678 0 4.898-3.533 4.949-3.684ZM16 8V6h2v2zm0-4V2h2v2z"></svg:path>`,
})
export class CarbonChartMedianIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartMinimumIcon],svg[carbon-chart-minimum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 28v-2h2v-2H4V2H2v26a2 2 0 0 0 2 2h26v-2Z"></svg:path><svg:path fill="currentColor" d="M8 24h2v2H8zm4 0h2v2h-2zm8 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M27.946 4.328L25.973 4C23.949 16.108 21.013 22 17 22s-6.949-5.892-8.973-18l-1.973.328C7.51 13.057 9.964 22.93 16 23.913V26h2v-2.087c6.037-.983 8.49-10.856 9.946-19.585"></svg:path>`,
})
export class CarbonChartMinimumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartMultiLineIcon],svg[carbon-chart-multi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.586 28l7.178-5.998l7.994 1.938a2.02 2.02 0 0 0 1.314-.12L28 20.58l-.848-1.812l-6.916 3.229l-7.994-1.938a2 2 0 0 0-1.74.384L4 25.882V20.49l7.764-6.488l7.994 1.938a2.02 2.02 0 0 0 1.314-.12L28 12.58l-.847-1.812l-6.918 3.229l-7.994-1.938a2 2 0 0 0-1.74.384L4 17.882V12.49l7.764-6.488l7.994 1.938a2.02 2.02 0 0 0 1.314-.12L28 4.585l-.846-1.812l-6.918 3.224l-7.994-1.938a2 2 0 0 0-1.74.384L4 9.882V2H2v26a2 2 0 0 0 2 2h26v-2Z"></svg:path>`,
})
export class CarbonChartMultiLineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartMultitypeIcon],svg[carbon-chart-multitype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22h2v8h-2zm-4-4h2v12h-2zm-4 8h2v4h-2zM9 16a7 7 0 1 0 7 7a7.01 7.01 0 0 0-7-7m4.899 6H10v-3.899A5.01 5.01 0 0 1 13.899 22M9 28a5 5 0 0 1-1-9.899V22a2 2 0 0 0 2 2h3.899A5.01 5.01 0 0 1 9 28m13.535-16l4-6H30V4h-4.535l-4 6H18V2h-2v12a2 2 0 0 0 2 2h12v-2H18v-2z"></svg:path><svg:circle cx="11" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="5" r="1" fill="currentColor"></svg:circle><svg:circle cx="5" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="13" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonChartMultitypeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartNetworkIcon],svg[carbon-chart-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4.1a5 5 0 0 0-3.9 3.9H14v-2a2 2 0 0 0-2-2h-2v-4.1a5 5 0 1 0-2 0V18H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h4.1a5 5 0 1 0 5.9-5.9V14ZM6 9a3 3 0 1 1 3 3a3 3 0 0 1-3-3m6 17H6v-6h6Zm14-3a3 3 0 1 1-3-3a3 3 0 0 1 3 3M20 6h6v6h-6Z"></svg:path>`,
})
export class CarbonChartNetworkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartParallelIcon],svg[carbon-chart-parallel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2v3.307l-6 2.25V2h-2v5.523l-8-3.2V2h-2v2.446l-6 3.75V2H2v28h2v-2.382l6-3V30h2v-5.656l8 2.4V30h2v-3.446l6-3.75V30h2V2Zm0 5.443V12.5L22 17V9.693Zm-8 2.234v7.557l-8-4.8V6.477ZM10 6.804v5.742l-6 5.25v-7.242ZM4 25.382v-4.928l6-5.25v7.178Zm8-3.126v-7.49l8 4.8v5.09Zm10 1.94V19.5l6-4.5v5.446Z"></svg:path>`,
})
export class CarbonChartParallelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartPieIcon],svg[carbon-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a12 12 0 1 0 12 12A12 12 0 0 0 16 4m10 11h-9V6.05A10 10 0 0 1 26 15M15.42 26A10 10 0 0 1 15 6.05v9a2 2 0 0 0 2 2h9A10 10 0 0 1 15.42 26"></svg:path>`,
})
export class CarbonChartPieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartPlanningWaterfallIcon],svg[carbon-chart-planning-waterfall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7h-2V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v12h-2V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v10H3v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V17h2v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5h2v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V17h4zM7 26H5v-9h2zm8-5h-2v-4h2zm2-6V4h2v11zm10 0h-2V9h2z"></svg:path>`,
})
export class CarbonChartPlanningWaterfallIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartPointIcon],svg[carbon-chart-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path><svg:circle cx="9" cy="6" r="3" fill="currentColor"></svg:circle><svg:circle cx="9" cy="22" r="3" fill="currentColor"></svg:circle><svg:circle cx="18" cy="14" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M9 17a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:circle cx="27" cy="6" r="3" fill="currentColor"></svg:circle><svg:circle cx="27" cy="22" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M27 17a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-9 13a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-14a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class CarbonChartPointIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartPopulationIcon],svg[carbon-chart-population-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 22H17v-2h9v-6h-9v-2h5V6h-5V2h-2v4h-5v6h5v2H6v6h9v2H2v6h13v2h2v-2h13ZM20 8v2h-3V8Zm-8 2V8h3v2Zm12 6v2h-7v-2ZM8 18v-2h7v2Zm-4 8v-2h11v2Zm24 0H17v-2h11Z"></svg:path>`,
})
export class CarbonChartPopulationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartRadarIcon],svg[carbon-chart-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2L2 13l6 17h16l6-17Zm2.582 19.265l-5.986 1.33l-1.423-7.824l4.91-4.21l5.442 4.082Zm.198 2.005L21.326 28H10.674l1.79-3.327Zm-9.19-9.776l-3.85-.889L15 5.329v3.528ZM17 8.75V5.33l9.26 7.275l-3.15.727ZM4.614 14.398l4.654 1.074l1.484 8.164l-1.738 3.228Zm18.372 12.466l-2.577-4.785l3.007-6.765l3.97-.916Z"></svg:path>`,
})
export class CarbonChartRadarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartRadialIcon],svg[carbon-chart-radial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30A14.016 14.016 0 0 1 2 16h2A12 12 0 1 0 16 4V2a14 14 0 0 1 0 28"></svg:path><svg:path fill="currentColor" d="M16 26A10.01 10.01 0 0 1 6 16h2a8 8 0 1 0 8-8V6a10 10 0 0 1 0 20"></svg:path><svg:path fill="currentColor" d="M16 22a6.007 6.007 0 0 1-6-6h2a4 4 0 1 0 4-4v-2a6 6 0 0 1 0 12"></svg:path>`,
})
export class CarbonChartRadialIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartRelationshipIcon],svg[carbon-chart-relationship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 6a3.996 3.996 0 0 0-3.858 3H17.93A7.996 7.996 0 1 0 9 17.93v4.212a4 4 0 1 0 2 0v-4.211a7.95 7.95 0 0 0 3.898-1.62l3.669 3.67A3.95 3.95 0 0 0 18 22a4 4 0 1 0 4-4a3.95 3.95 0 0 0-2.019.567l-3.67-3.67A7.95 7.95 0 0 0 17.932 11h4.211A3.993 3.993 0 1 0 26 6M12 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m-2-10a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m14 6a2 2 0 1 1-2-2a2 2 0 0 1 2 2m2-10a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonChartRelationshipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartRingIcon],svg[carbon-chart-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m11.95 13.001h-6.04a5.983 5.983 0 0 0-9.38-3.885l-4.27-4.27A11.978 11.978 0 0 1 27.95 15ZM16 20a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4M4 16a11.94 11.94 0 0 1 2.846-7.74l4.27 4.27A5.984 5.984 0 0 0 15 21.91v6.04A12.01 12.01 0 0 1 4 16m13 11.95v-6.04A6.01 6.01 0 0 0 21.91 17h6.04A12.01 12.01 0 0 1 17 27.95"></svg:path>`,
})
export class CarbonChartRingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartRiverIcon],svg[carbon-chart-river-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.433 20.017l8.037 4.68a1.96 1.96 0 0 0 1.051.301a2.2 2.2 0 0 0 .489-.055l7.253-1.977A1 1 0 0 0 30 22V7.996a1 1 0 0 0-1.26-.966l-7.237 1.953l-8.037-4.68a1.99 1.99 0 0 0-1.865-.135L4 7.473V2H2v26a2 2 0 0 0 2 2h26v-2H4v-4.342ZM28 21.234l-6.497 1.75l-8.037-4.68a2 2 0 0 0-1.865-.135L4 21.475v-4.818l8.433-3.641l8.037 4.68a1.96 1.96 0 0 0 1.05.302a2.2 2.2 0 0 0 .49-.056L28 16.31ZM12.433 6.016l8.037 4.68a2 2 0 0 0 1.54.245L28 9.308v4.926l-6.497 1.75l-8.037-4.68a1.99 1.99 0 0 0-1.865-.136L4 14.474V9.656Z"></svg:path>`,
})
export class CarbonChartRiverIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartRoseIcon],svg[carbon-chart-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 17A15.017 15.017 0 0 0 15 2h-1v6.06A9.01 9.01 0 0 0 6.06 16H4v1a11.01 11.01 0 0 0 10 10.95V30h1a13.01 13.01 0 0 0 12.95-12H30ZM16 4.038A13.02 13.02 0 0 1 27.962 16H16Zm-2 6.042V16H8.08A7 7 0 0 1 14 10.08M6.055 18H14v7.939A9.01 9.01 0 0 1 6.055 18M16 27.955V18h9.955A11.02 11.02 0 0 1 16 27.955"></svg:path>`,
})
export class CarbonChartRoseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartScatterIcon],svg[carbon-chart-scatter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path><svg:circle cx="10" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="14" cy="15" r="2" fill="currentColor"></svg:circle><svg:circle cx="22" cy="15" r="2" fill="currentColor"></svg:circle><svg:circle cx="26" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="14" cy="8" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonChartScatterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartSpiralIcon],svg[carbon-chart-spiral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a13.92 13.92 0 0 0-8.675 3.033A2 2 0 0 0 7 5a2 2 0 0 0-2 2a2 2 0 0 0 .033.325A13.986 13.986 0 1 0 16 2m0 26A11.977 11.977 0 0 1 6.359 8.886a1.83 1.83 0 0 0 1.153.04l1.463 1.463a8.986 8.986 0 0 0 11.831 13.207a1.992 1.992 0 0 0 2.79-2.79a8.93 8.93 0 0 0 0-9.612a1.992 1.992 0 0 0-2.79-2.79a8.945 8.945 0 0 0-10.417.571L8.926 7.512a1.83 1.83 0 0 0-.04-1.153A11.993 11.993 0 1 1 16 28m0-14a2 2 0 1 1-2 2a2.003 2.003 0 0 1 2-2m3.433-.019l2.055-2.055a2 2 0 0 0 .227.045a6.96 6.96 0 0 1 0 8.058a2 2 0 0 0-.227.045l-2.055-2.055a3.88 3.88 0 0 0 0-4.038m.596-3.696a2 2 0 0 0 .045.227l-2.055 2.055a3.88 3.88 0 0 0-4.038 0L11.816 10.4a6.95 6.95 0 0 1 8.213-.116m-7.462 3.696A3.95 3.95 0 0 0 12 16a4.005 4.005 0 0 0 4 4a3.95 3.95 0 0 0 2.019-.567l2.055 2.055a2 2 0 0 0-.045.227a6.988 6.988 0 0 1-9.627-9.9Z"></svg:path>`,
})
export class CarbonChartSpiralIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartStackedIcon],svg[carbon-chart-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28V6h-8v22h-4V14H8v14H4V2H2v26a2 2 0 0 0 2 2h26v-2ZM22 8h4v10h-4Zm-12 8h4v6h-4Z"></svg:path>`,
})
export class CarbonChartStackedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartStepperIcon],svg[carbon-chart-stepper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22v-8h8V6h8V4H20v8h-8v8H4V2H2v26a2.003 2.003 0 0 0 2 2h26v-2H4v-6Z"></svg:path>`,
})
export class CarbonChartStepperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartSunburstIcon],svg[carbon-chart-sunburst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a1 1 0 0 0-1 1v7.09a6 6 0 0 0-2.46 1.043L7.838 6.431a1.455 1.455 0 0 0-2.087.024a14.05 14.05 0 0 0 4.054 22.142a11 11 0 0 0 1.899.768a14.1 14.1 0 0 0 13.844-3.132a1.434 1.434 0 0 0 .028-2.064l-4.699-4.699A6 6 0 0 0 21.91 17H29a1 1 0 0 0 1-1A14.016 14.016 0 0 0 16 2m0 10a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4M6.83 8.251l4.296 4.296a5.91 5.91 0 0 0-.011 6.924l-4.277 4.277A12.02 12.02 0 0 1 6.83 8.251m1.423 16.91l4.276-4.276A5.96 5.96 0 0 0 15 21.91v6.042a11.88 11.88 0 0 1-6.747-2.79ZM17 27.956V21.91a6 6 0 0 0 2.46-1.027l4.283 4.282A11.9 11.9 0 0 1 17 27.956M21.91 15A6.01 6.01 0 0 0 17 10.09V4.041A12.02 12.02 0 0 1 27.959 15Z"></svg:path>`,
})
export class CarbonChartSunburstIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartTSneIcon],svg[carbon-chart-t-sne-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="20" r="2" fill="currentColor"></svg:circle><svg:circle cx="10" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="10" cy="14" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="4" r="2" fill="currentColor"></svg:circle><svg:circle cx="22" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="20" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="26" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="20" cy="26" r="2" fill="currentColor"></svg:circle><svg:circle cx="22" cy="20" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="4" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="16" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonChartTSneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartTreemapIcon],svg[carbon-chart-treemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 12h-5V4h5ZM16 4h5v10h-5Zm-2 0v16H4V4ZM4 22h10v6H4Zm12 6V16h12v12Z"></svg:path>`,
})
export class CarbonChartTreemapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartVennDiagramIcon],svg[carbon-chart-venn-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a9.9 9.9 0 0 0-4 .84A9.9 9.9 0 0 0 12 6a10 10 0 0 0 0 20a9.9 9.9 0 0 0 4-.84a9.9 9.9 0 0 0 4 .84a10 10 0 0 0 0-20m-8 18a8 8 0 0 1 0-16a8 8 0 0 1 1.76.2a10 10 0 0 0 0 15.6A8 8 0 0 1 12 24m8-8a8 8 0 0 1-4 6.92a8 8 0 0 1 0-13.84A8 8 0 0 1 20 16m0 8a8 8 0 0 1-1.76-.2a10 10 0 0 0 0-15.6A8 8 0 0 1 20 8a8 8 0 0 1 0 16"></svg:path>`,
})
export class CarbonChartVennDiagramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartViolinPlotIcon],svg[carbon-chart-violin-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path><svg:path fill="currentColor" d="M14.86 7.823L13 4.723V2h-2v2.723l-1.86 3.1A8 8 0 0 0 8 11.94v.122a8 8 0 0 0 1.14 4.116l1.86 3.1V26h2v-6.723l1.86-3.1A8 8 0 0 0 16 12.06v-.122a8 8 0 0 0-1.14-4.116M12 6.943l1.145 1.91A6 6 0 0 1 13.919 11H10.08a6 6 0 0 1 .774-2.148zm0 10.114l-1.145-1.91A6 6 0 0 1 10.081 13h3.838a6 6 0 0 1-.774 2.148zm15.86-5.234L26 8.723V2h-2v6.723l-1.86 3.1A8 8 0 0 0 21 15.94v.122a8 8 0 0 0 1.14 4.116l1.86 3.1V26h2v-2.723l1.86-3.1A8 8 0 0 0 29 16.06v-.122a8 8 0 0 0-1.14-4.116m-2.86-.88l1.145 1.909A6 6 0 0 1 26.919 15h-3.837a6 6 0 0 1 .773-2.148zm0 10.113l-1.145-1.908A6 6 0 0 1 23.081 17h3.837a6 6 0 0 1-.773 2.148z"></svg:path>`,
})
export class CarbonChartViolinPlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartWaterfallIcon],svg[carbon-chart-waterfall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28V18h-2v10h-4V4h-2v24H10V14H8v14H4V2H2v26a2 2 0 0 0 2 2h26v-2Z"></svg:path><svg:path fill="currentColor" d="M14 4h2v14h-2z"></svg:path>`,
})
export class CarbonChartWaterfallIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChartWinLossIcon],svg[carbon-chart-win-loss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15H16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9H2v2h14v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-9h2ZM6 6h8v9H6Zm20 20h-8v-9h8Z"></svg:path>`,
})
export class CarbonChartWinLossIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChatIcon],svg[carbon-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"></svg:path><svg:path fill="currentColor" d="M8 10h16v2H8zm0 6h10v2H8z"></svg:path>`,
})
export class CarbonChatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChatBotIcon],svg[carbon-chat-bot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19a6.99 6.99 0 0 1-5.833-3.129l1.666-1.107a5 5 0 0 0 8.334 0l1.666 1.107A6.99 6.99 0 0 1 16 19m4-11a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2m-8 0a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V6a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v14a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4h-4.835Z"></svg:path>`,
})
export class CarbonChatBotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChatLaunchIcon],svg[carbon-chat-launch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v2h4.586L20 12.586L21.414 14L28 7.414V12h2V4zm6 12v4a1.997 1.997 0 0 1-2 2h-6l-4 7l1.736 1l3.429-6H26a4 4 0 0 0 4-4v-4zM4 20V8a1.997 1.997 0 0 1 2-2h12V4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h9v-2H6a1.997 1.997 0 0 1-2-2"></svg:path>`,
})
export class CarbonChatLaunchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChatOffIcon],svg[carbon-chat-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8v13h2V8a4 4 0 0 0-4-4H8.243l2 2H26a1.997 1.997 0 0 1 2 2m2 20.586L3.414 2L2 3.414l1.504 1.504A3.92 3.92 0 0 0 2 8v12a4 4 0 0 0 4 4h6v-2H6a1.997 1.997 0 0 1-2-2V8a1.98 1.98 0 0 1 .92-1.666L20.585 22H17l-4 7l1.736 1l3.429-6h4.42l6 6z"></svg:path>`,
})
export class CarbonChatOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChatOperationalIcon],svg[carbon-chat-operational-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.586 10.414L19.166 14l-3.582 3.587L17 19l5-5l-5-5z"></svg:path><svg:path fill="currentColor" d="M20.586 10.414L24.166 14l-3.582 3.587L22 19l5-5l-5-5zM10 9l1.593 3l3.407.414l-2.5 2.253L13 18l-3-1.875L7 18l.5-3.333L5 12.414L8.5 12z"></svg:path><svg:path fill="currentColor" d="M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V8a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v12a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.835Z"></svg:path>`,
})
export class CarbonChatOperationalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckboxIcon],svg[carbon-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"></svg:path>`,
})
export class CarbonCheckboxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckboxCheckedIcon],svg[carbon-checkbox-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"></svg:path><svg:path fill="currentColor" d="m14 21.5l-5-4.96L10.59 15L14 18.35L21.41 11L23 12.58z"></svg:path>`,
})
export class CarbonCheckboxCheckedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckboxCheckedFilledIcon],svg[carbon-checkbox-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M14 21.5l-5-4.957L10.59 15L14 18.346L21.409 11L23 12.577Z"></svg:path><svg:path fill="none" d="m14 21.5l-5-4.957L10.59 15L14 18.346L21.409 11L23 12.577Z"></svg:path>`,
})
export class CarbonCheckboxCheckedFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckboxIndeterminateIcon],svg[carbon-checkbox-indeterminate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14h12v4H10z"></svg:path><svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"></svg:path>`,
})
export class CarbonCheckboxIndeterminateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckboxIndeterminateFilledIcon],svg[carbon-checkbox-indeterminate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-4 14H10v-4h12Z"></svg:path><svg:path fill="none" d="M22 18H10v-4h12Z"></svg:path>`,
})
export class CarbonCheckboxIndeterminateFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckboxUndeterminateFilledIcon],svg[carbon-checkbox-undeterminate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-4 14H10v-4h12Z"></svg:path>`,
})
export class CarbonCheckboxUndeterminateFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckmarkIcon],svg[carbon-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9z"></svg:path>`,
})
export class CarbonCheckmarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckmarkFilledIcon],svg[carbon-checkmark-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"></svg:path><svg:path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z"></svg:path>`,
})
export class CarbonCheckmarkFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckmarkFilledErrorIcon],svg[carbon-checkmark-filled-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24a6 6 0 1 0-6 6a6.007 6.007 0 0 0 6-6m-2 0a3.95 3.95 0 0 1-.567 2.019l-5.452-5.452A3.95 3.95 0 0 1 24 20a4.005 4.005 0 0 1 4 4m-8 0a3.95 3.95 0 0 1 .567-2.019l5.452 5.452A3.95 3.95 0 0 1 24 28a4.005 4.005 0 0 1-4-4"></svg:path><svg:path fill="currentColor" d="M14 2a12 12 0 1 0 2 23.82V24a8 8 0 0 1 8-8h1.82A11.935 11.935 0 0 0 14 2m-2 16.59l-4-4L9.59 13L12 15.41L17.41 10L19 11.59Z"></svg:path><svg:path fill="none" d="m12 18.591l-4-4L9.591 13L12 15.409L17.409 10L19 11.591z"></svg:path>`,
})
export class CarbonCheckmarkFilledErrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckmarkFilledWarningIcon],svg[carbon-checkmark-filled-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a12 12 0 1 0 3.393 23.506l3.924-7.85A2.99 2.99 0 0 1 24 16h1.82A11.935 11.935 0 0 0 14 2m-2 16.59l-4-4L9.59 13L12 15.41L17.41 10L19 11.59Z"></svg:path><svg:path fill="currentColor" d="M27.38 28h-6.762L24 21.236ZM24 18a1 1 0 0 0-.895.553l-5 10A1 1 0 0 0 19 30h10a1 1 0 0 0 .921-1.39l-5.026-10.057A1 1 0 0 0 24 18"></svg:path><svg:path fill="none" d="m12 18.591l-4-4L9.591 13L12 15.409L17.409 10L19 11.591z"></svg:path>`,
})
export class CarbonCheckmarkFilledWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckmarkOutlineIcon],svg[carbon-checkmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class CarbonCheckmarkOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckmarkOutlineErrorIcon],svg[carbon-checkmark-outline-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 24a10 10 0 1 1 10-10h2a12 12 0 1 0-12 12Z"></svg:path><svg:path fill="currentColor" d="M12 15.59L9.41 13L8 14.41l4 4l7-7L17.59 10zM30 24a6 6 0 1 0-6 6a6.007 6.007 0 0 0 6-6m-2 0a3.95 3.95 0 0 1-.567 2.019l-5.452-5.452A3.95 3.95 0 0 1 24 20a4.005 4.005 0 0 1 4 4m-8 0a3.95 3.95 0 0 1 .567-2.019l5.452 5.452A3.95 3.95 0 0 1 24 28a4.005 4.005 0 0 1-4-4"></svg:path>`,
})
export class CarbonCheckmarkOutlineErrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCheckmarkOutlineWarningIcon],svg[carbon-checkmark-outline-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 24a10 10 0 1 1 10-10h2a12 12 0 1 0-12 12Z"></svg:path><svg:path fill="currentColor" d="M12 15.59L9.41 13L8 14.41l4 4l7-7L17.59 10zM27.38 28h-6.762L24 21.236zM24 18a1 1 0 0 0-.895.553l-5 10A1 1 0 0 0 19 30h10a1 1 0 0 0 .921-1.39l-5.026-10.057A1 1 0 0 0 24 18"></svg:path>`,
})
export class CarbonCheckmarkOutlineWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChemistryIcon],svg[carbon-chemistry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.231 23.618L20 13.675V4h2V2H10v2h2v9.675l-7.231 9.943A4.018 4.018 0 0 0 8.019 30H23.98a4.018 4.018 0 0 0 3.25-6.382M14 14.325V4h4v10.325L20.673 18h-9.346ZM23.981 28H8.02a2.02 2.02 0 0 1-1.633-3.206L9.873 20h12.254l3.487 4.794A2.02 2.02 0 0 1 23.981 28"></svg:path>`,
})
export class CarbonChemistryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChemistryReferenceIcon],svg[carbon-chemistry-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8z"></svg:path><svg:path fill="currentColor" d="M20 13.67V4h2V2H10v2h2v9.67L9.58 17h2.477L14 14.33V4h4v10.33l7.61 10.46a2.013 2.013 0 0 1-.44 2.82a2.04 2.04 0 0 1-1.19.39H15v2h8.98a4.015 4.015 0 0 0 3.25-6.38Z"></svg:path>`,
})
export class CarbonChemistryReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChevronDownIcon],svg[carbon-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"></svg:path>`,
})
export class CarbonChevronDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChevronDownOutlineIcon],svg[carbon-chevron-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.414 12.586L16 19.17l6.586-6.585L24 14l-8 8l-8-8z"></svg:path><svg:path fill="currentColor" d="M30 16c0 7.72-6.28 14-14 14S2 23.72 2 16S8.28 2 16 2s14 6.28 14 14M4 16c0 6.617 5.383 12 12 12s12-5.383 12-12S22.617 4 16 4S4 9.383 4 16"></svg:path>`,
})
export class CarbonChevronDownOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChevronLeftIcon],svg[carbon-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z"></svg:path>`,
})
export class CarbonChevronLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChevronMiniIcon],svg[carbon-chevron-mini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 19v12H19z"></svg:path>`,
})
export class CarbonChevronMiniIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChevronRightIcon],svg[carbon-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"></svg:path>`,
})
export class CarbonChevronRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChevronSortIcon],svg[carbon-chevron-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 28l-7-7l1.41-1.41L16 25.17l5.59-5.58L23 21zm0-24l7 7l-1.41 1.41L16 6.83l-5.59 5.58L9 11z"></svg:path>`,
})
export class CarbonChevronSortIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChevronSortDownIcon],svg[carbon-chevron-sort-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 28l-7-7l1.4-1.4l5.6 5.6l5.6-5.6L23 21z"></svg:path>`,
})
export class CarbonChevronSortDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChevronSortUpIcon],svg[carbon-chevron-sort-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4l7 7l-1.4 1.4L16 6.8l-5.6 5.6L9 11z"></svg:path>`,
})
export class CarbonChevronSortUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChevronUpIcon],svg[carbon-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z"></svg:path>`,
})
export class CarbonChevronUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChevronUpOutlineIcon],svg[carbon-chevron-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.414 19.414L16 12.83l6.586 6.585L24 18l-8-8l-8 8z"></svg:path><svg:path fill="currentColor" d="M30 16c0 7.72-6.28 14-14 14S2 23.72 2 16S8.28 2 16 2s14 6.28 14 14M4 16c0 6.617 5.383 12 12 12s12-5.383 12-12S22.617 4 16 4S4 9.383 4 16"></svg:path>`,
})
export class CarbonChevronUpOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChipIcon],svg[carbon-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11v10h10V11Zm8 8h-6v-6h6Z"></svg:path><svg:path fill="currentColor" d="M30 13v-2h-4V8a2 2 0 0 0-2-2h-3V2h-2v4h-6V2h-2v4H8a2 2 0 0 0-2 2v3H2v2h4v6H2v2h4v3a2 2 0 0 0 2 2h3v4h2v-4h6v4h2v-4h3a2 2 0 0 0 2-2v-3h4v-2h-4v-6Zm-6 11H8V8h16Z"></svg:path>`,
})
export class CarbonChipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChoicesIcon],svg[carbon-choices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 13V4h-9v2h5.586L16 14.586L7.414 6H13V4H4v9h2V7.414l9 9V26H4v2h24v-2H17v-9.586l9-9V13z"></svg:path>`,
})
export class CarbonChoicesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChooseItemIcon],svg[carbon-choose-item-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6h2v20h-2zM17 6l-1.43 1.393L23.15 15H2v2h21.15l-7.58 7.573L17 26l10-10z"></svg:path>`,
})
export class CarbonChooseItemIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonChoroplethMapIcon],svg[carbon-choropleth-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.243 4.03l-8-2a1 1 0 0 0-.615.042l-9.7 3.88L3.243 4.03A1 1 0 0 0 2 5v22a1 1 0 0 0 .757.97l8 2A1 1 0 0 0 11 30a1 1 0 0 0 .372-.072l9.7-3.88l7.686 1.922A1 1 0 0 0 30 27V5a1 1 0 0 0-.757-.97M28 11h-6V4.28l6 1.5Zm-18 8H4v-6h6Zm2-8V7.677l8-3.2V11Zm8 2v6h-8v-6Zm-8 8h8v3.323l-8 3.2Zm10-8h6v6h-6ZM10 7.78V11H4V6.28ZM4 21h6v6.72l-6-1.5Zm18 3.219V21h6v4.72Z"></svg:path>`,
})
export class CarbonChoroplethMapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsCmasIcon],svg[carbon-cics-cmas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.334 30H26v-2h4v-2h-2a2 2 0 0 1-2-2v-2.334A1.67 1.67 0 0 1 27.666 20H32v2h-4v2h2a2 2 0 0 1 2 2v2.334A1.67 1.67 0 0 1 30.334 30m-8-10h-2.667A1.667 1.667 0 0 0 18 21.666V30h2v-4h2v4h2v-8.333A1.667 1.667 0 0 0 22.334 20M20 24v-2h2v2zm-7.5 0L11 20H9v10h2v-7l1.5 4l1.5-4v7h2V20h-2zM1 22v6.5A1.473 1.473 0 0 0 2.5 30H7v-2H3v-6h4v-2H3a2.006 2.006 0 0 0-2 2M13 8h-2v3H8v2h3v3h2v-3h3v-2h-3z"></svg:path><svg:path fill="currentColor" d="M6 6h20v12h2V6a2.006 2.006 0 0 0-2-2H6a2.006 2.006 0 0 0-2 2v12h2Z"></svg:path>`,
})
export class CarbonCicsCmasIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsDb2ConnectionIcon],svg[carbon-cics-db2-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 30c-1.93 0-3.5-1.57-3.5-3.5c0-.935.364-1.813 1.024-2.474l1.415 1.414a1.502 1.502 0 0 0 2.122 2.12l5-5a1.502 1.502 0 0 0-2.123-2.12l-1.415-1.413A3.48 3.48 0 0 1 27.5 18c1.93 0 3.5 1.57 3.5 3.5c0 .935-.364 1.814-1.025 2.475l-5 5A3.48 3.48 0 0 1 22.5 30"></svg:path><svg:path fill="currentColor" d="M16.5 31c-1.93 0-3.5-1.57-3.5-3.5c0-.935.364-1.814 1.025-2.475l5-5A3.48 3.48 0 0 1 21.5 19c1.93 0 3.5 1.57 3.5 3.5c0 .935-.364 1.813-1.024 2.474L22.56 23.56a1.502 1.502 0 0 0-2.122-2.12l-5 5a1.502 1.502 0 0 0 2.123 2.12l1.415 1.413A3.48 3.48 0 0 1 16.5 31M16 2C10.702 2 5 3.252 5 6v18c0 1.68 2.134 2.798 5 3.415v-2.046C8.006 24.896 7.055 24.226 7 24v-3.572c1.494.749 3.674 1.215 6 1.43V19.86c-3.878-.377-5.877-1.422-6-1.86v-3.572C9.128 15.495 12.643 16 16 16c5.298 0 11-1.252 11-4V6c0-2.748-5.702-4-11-4M6.999 6.015C7.15 5.46 10.149 4 16 4c5.798 0 8.795 1.434 8.997 2c-.202.566-3.2 2-8.997 2c-5.85 0-8.85-1.46-9.001-1.985M25 11.987c-.16.557-3.159 2.013-9 2.013c-5.85 0-8.85-1.46-9-2V8.428C9.128 9.495 12.643 10 16 10s6.872-.505 9-1.572z"></svg:path>`,
})
export class CarbonCicsDb2ConnectionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsExplorerIcon],svg[carbon-cics-explorer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 16l-4.6-1.4l2.3-4.3l-4.3 2.3L16 8l-1.4 4.6l-4.3-2.3l2.3 4.3L8 16l4.6 1.4l-2.3 4.3l4.3-2.3L16 24l1.4-4.6l4.3 2.3l-2.3-4.3z"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonCicsExplorerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsProgramIcon],svg[carbon-cics-program-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.17 19l-2.59 2.59L19 23l4-4l-4-4l-1.42 1.41zm-8.34 0l2.59-2.59L13 15l-4 4l4 4l1.42-1.41z"></svg:path><svg:circle cx="9" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="8" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 4H4c-1.103 0-2 .898-2 2v20c0 1.103.897 2 2 2h24c1.103 0 2-.897 2-2V6c0-1.102-.897-2-2-2m0 2v4H4V6zM4 26V12h24v14z"></svg:path>`,
})
export class CarbonCicsProgramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsRegionIcon],svg[carbon-cics-region-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 18l-2.5.7V16h-2v2.7l-2.5-.7l-.5 1.9l2.4.7L17 23l1.7 1l1.3-2.2l1.3 2.2l1.7-1l-1.4-2.4l2.4-.7zM16 13v-2h-3V8h-2v3H8v2h3v3h2v-3z"></svg:path><svg:path fill="currentColor" d="M26 4H6a2.006 2.006 0 0 0-2 2v20a2.006 2.006 0 0 0 2 2h20a2.006 2.006 0 0 0 2-2V6a2.006 2.006 0 0 0-2-2M6 26V6h20v20Z"></svg:path>`,
})
export class CarbonCicsRegionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsRegionAltIcon],svg[carbon-cics-region-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 13v-2h-4c-1.103 0-2 .898-2 2v2c0 1.103.897 2 2 2h2v2h-4v2h4c1.103 0 2-.897 2-2v-2c0-1.102-.897-2-2-2h-2v-2zm-14 0v6c0 1.103.897 2 2 2h4v-2h-4v-6h4v-2h-4c-1.103 0-2 .898-2 2m-8 0h2v6H9v2h6v-2h-2v-6h2v-2H9zm-8 0v6c0 1.103.897 2 2 2h4v-2H3v-6h4v-2H3c-1.103 0-2 .898-2 2"></svg:path>`,
})
export class CarbonCicsRegionAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsRegionRoutingIcon],svg[carbon-cics-region-routing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v2h4.6L20 10.6l1.4 1.4L28 5.4V10h2V2zm-3 14v2.7l-2.5-.7l-.5 1.9l2.4.7L17 23l1.7 1l1.3-2.2l1.3 2.2l1.7-1l-1.4-2.4l2.4-.7l-.5-1.9l-2.5.7V16zm-6 0v-3h3v-2h-3V8h-2v3H8v2h3v3z"></svg:path><svg:path fill="currentColor" d="M26 26H6V6h13V4H6a2.006 2.006 0 0 0-2 2v20a2.006 2.006 0 0 0 2 2h20a2.006 2.006 0 0 0 2-2V13h-2Z"></svg:path>`,
})
export class CarbonCicsRegionRoutingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsRegionTargetIcon],svg[carbon-cics-region-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 7h2v3h-2zm3-3h3v2h-3zm-3-4h2v3h-2zm-4 4h3v2h-3zm-3 12v2.7l-2.5-.7l-.5 1.9l2.4.7L17 23l1.7 1l1.3-2.2l1.3 2.2l1.7-1l-1.4-2.4l2.4-.7l-.5-1.9l-2.5.7V16zm-6 0v-3h3v-2h-3V8h-2v3H8v2h3v3z"></svg:path><svg:path fill="currentColor" d="M26 26H6V6h13V4H6a2.006 2.006 0 0 0-2 2v20a2.006 2.006 0 0 0 2 2h20a2.006 2.006 0 0 0 2-2V13h-2Z"></svg:path>`,
})
export class CarbonCicsRegionTargetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsSitIcon],svg[carbon-cics-sit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 22l7 5l-7 5z"></svg:path><svg:path fill="currentColor" d="M26 3H6C4.346 3 3 4.346 3 6v20c0 1.654 1.346 3 3 3h11v-9h12V6c0-1.654-1.346-3-3-3M6 5h20a1 1 0 0 1 1 1v3H5V6a1 1 0 0 1 1-1m9 6v7H5v-7zm0 16H6a1 1 0 0 1-1-1v-6h10zm2-9v-7h10v7z"></svg:path>`,
})
export class CarbonCicsSitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsSitOverridesIcon],svg[carbon-cics-sit-overrides-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m31.707 20.293l-3-3a1 1 0 0 0-1.414 0L18 26.586V31h4.414l9.293-9.293a1 1 0 0 0 0-1.414m-7.414 6L21.586 29H20v-1.586l2.707-2.707L25 22.414L26.586 24zM28 22.586L26.414 21L28 19.414L29.586 21zM20 20v-2h-4v-7h10v2h2V6c0-1.654-1.346-3-3-3H5C3.346 3 2 4.346 2 6v20c0 1.654 1.346 3 3 3h11v-9zm-6-2H4v-7h10zM5 5h20a1 1 0 0 1 1 1v3H4V6a1 1 0 0 1 1-1m9 22H5a1 1 0 0 1-1-1v-6h10z"></svg:path>`,
})
export class CarbonCicsSitOverridesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsSystemGroupIcon],svg[carbon-cics-system-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2h-5v2h5v24h-5v2h5a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2M14 17H8a.945.945 0 0 0-1 1v6a.945.945 0 0 0 1 1h6a.945.945 0 0 0 1-1v-6a.945.945 0 0 0-1-1m-1 6H9v-4h4z"></svg:path><svg:path fill="currentColor" d="M25 24v-6a.945.945 0 0 0-1-1h-6a.945.945 0 0 0-1 1v6a.945.945 0 0 0 1 1h6a1 1 0 0 0 1-1m-2-1h-4v-4h4zM14 7H8a.945.945 0 0 0-1 1v6a.945.945 0 0 0 1 1h6a.945.945 0 0 0 1-1V8a.945.945 0 0 0-1-1m-1 6H9V9h4zm5 2h6a.945.945 0 0 0 1-1V8a.945.945 0 0 0-1-1h-6a.945.945 0 0 0-1 1v6a1 1 0 0 0 1 1m1-6h4v4h-4z"></svg:path><svg:path fill="currentColor" d="M4 4h5V2H4a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h5v-2H4Z"></svg:path>`,
})
export class CarbonCicsSystemGroupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsTransactionServerZosIcon],svg[carbon-cics-transaction-server-zos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="28" cy="10" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M18 29h-7v-2h7c4.963 0 9-4.037 9-9v-4h2v4c0 6.065-4.935 11-11 11"></svg:path><svg:path fill="currentColor" d="M16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5m0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3s3-1.346 3-3s-1.346-3-3-3"></svg:path><svg:circle cx="4" cy="22" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M5 18H3v-4C3 7.935 7.935 3 14 3h7v2h-7c-4.963 0-9 4.037-9 9z"></svg:path>`,
})
export class CarbonCicsTransactionServerZosIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsWuiRegionIcon],svg[carbon-cics-wui-region-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h2v6h-2v2h6v-2h-2v-6h2v-2h-6zm-4 6h-2v-8h-2v8.6a1.453 1.453 0 0 0 1.5 1.4h3a1.453 1.453 0 0 0 1.5-1.4V20h-2zm-7.8-8l-.2 8.5L9 22H7l-1 6.5l-.2-8.5H4l.72 10H7l1-6.5L9 30h2.28L12 20zm5.8-9h-3V8h-2v3H8v2h3v3h2v-3h3z"></svg:path><svg:path fill="currentColor" d="M26 4H6a2.006 2.006 0 0 0-2 2v12h2V6h20v12h2V6a2.006 2.006 0 0 0-2-2"></svg:path>`,
})
export class CarbonCicsWuiRegionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCicsplexIcon],svg[carbon-cicsplex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18.6V17H6v1.6a7.383 7.383 0 0 0 7.4 7.4H15v-2h-1.6A5.38 5.38 0 0 1 8 18.6m20-.6h-8a2.006 2.006 0 0 0-2 2v8a2.006 2.006 0 0 0 2 2h8a2.006 2.006 0 0 0 2-2v-8a2.006 2.006 0 0 0-2-2m-8 10v-8h8v8zm4-14.6V15h2v-1.6A7.383 7.383 0 0 0 18.6 6H17v2h1.6a5.38 5.38 0 0 1 5.4 5.4M12 2H4a2.006 2.006 0 0 0-2 2v8a2.006 2.006 0 0 0 2 2h8a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2M4 12V4h8v8z"></svg:path>`,
})
export class CarbonCicsplexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCircleDashIcon],svg[carbon-circle-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.7 4.7a14.7 14.7 0 0 0-3 3.1L6.3 9a13.3 13.3 0 0 1 2.6-2.7zm-3.1 7.6l-1.9-.6A12.5 12.5 0 0 0 2 16h2a11.5 11.5 0 0 1 .6-3.7m-1.9 8.1a14.4 14.4 0 0 0 2 3.9l1.6-1.2a12.9 12.9 0 0 1-1.7-3.3zm5.1 6.9a14.4 14.4 0 0 0 3.9 2l.6-1.9A12.9 12.9 0 0 1 9 25.7zm3.9-24.6l.6 1.9A11.5 11.5 0 0 1 16 4V2a12.5 12.5 0 0 0-4.3.7m12.5 24.6a15.2 15.2 0 0 0 3.1-3.1L25.7 23a11.5 11.5 0 0 1-2.7 2.7zm3.2-7.6l1.9.6A15.5 15.5 0 0 0 30 16h-2a11.5 11.5 0 0 1-.6 3.7m1.8-8.1a14.4 14.4 0 0 0-2-3.9l-1.6 1.2a12.9 12.9 0 0 1 1.7 3.3zm-5.1-7a14.4 14.4 0 0 0-3.9-2l-.6 1.9a12.9 12.9 0 0 1 3.3 1.7zm-3.8 24.7l-.6-1.9a11.5 11.5 0 0 1-3.7.6v2a21.4 21.4 0 0 0 4.3-.7"></svg:path>`,
})
export class CarbonCircleDashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCircleFilledIcon],svg[carbon-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="10" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonCircleFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCircleMeasurementIcon],svg[carbon-circle-measurement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z" fill="currentColor"></svg:path><svg:path d="M21 12.41V16h2V9h-7v2h3.59L11 19.59V16H9v7h7v-2h-3.59z" fill="currentColor"></svg:path>`,
})
export class CarbonCircleMeasurementIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCircleOutlineIcon],svg[carbon-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2m0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12s-5.373 12-12 12"></svg:path>`,
})
export class CarbonCircleOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCirclePackingIcon],svg[carbon-circle-packing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m7.5 7a3.5 3.5 0 1 1-3.5 3.5A3.504 3.504 0 0 1 23.5 9m.435-1.978A6 6 0 0 0 23.5 7a5.48 5.48 0 0 0-4.132 1.878A8.01 8.01 0 0 0 13.8 4.211a11.86 11.86 0 0 1 10.134 2.811M16 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m-4-10a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m-8-2a12 12 0 0 1 .211-2.199a7.99 7.99 0 0 0 7.346 6.176a5.96 5.96 0 0 0-.89 6.757A12 12 0 0 1 4 16m17.333 10.734a5.983 5.983 0 0 0-4.179-8.62a8 8 0 0 0 1.913-2.368a5.488 5.488 0 0 0 8.917-.068c.003.108.016.214.016.322a12 12 0 0 1-6.667 10.734"></svg:path>`,
})
export class CarbonCirclePackingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCircleSolidIcon],svg[carbon-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="14" fill="currentColor"></svg:circle>`,
})
export class CarbonCircleSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCircuitComposerIcon],svg[carbon-circuit-composer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18 9v6h-4V9h-2v14h2v-6h4v6h2V9h-2z" fill="currentColor"></svg:path><svg:path d="M30 15h-4V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v9H2v2h4v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9h4zM8 26V6h16v20z" fill="currentColor"></svg:path>`,
})
export class CarbonCircuitComposerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonClassificationIcon],svg[carbon-classification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15" cy="19" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m27.7 9.3l-7-7A.9.9 0 0 0 20 2H10a2.006 2.006 0 0 0-2 2v10H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.91.91 0 0 0-.3-.7M20 4.4l5.6 5.6H20ZM6 16h9.597L19 19l-3.393 3H6Zm20 12H10v-4h5.609a2 2 0 0 0 1.313-.493l3.384-2.991a2.002 2.002 0 0 0 .01-3.023l-3.404-3.009A2 2 0 0 0 15.61 14H10V4h8v6a2.006 2.006 0 0 0 2 2h6Z"></svg:path>`,
})
export class CarbonClassificationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonClassifierLanguageIcon],svg[carbon-classifier-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 10V2h-8v8h3v4h-2v2h7v-2h-3v-4zm-6-6h4v4h-4zm-4 19.41L18.59 22L16 24.59L13.41 22L12 23.41L14.59 26L12 28.59L13.41 30L16 27.41L18.59 30L20 28.59L17.41 26zM20 14h-8v2h3v5h2v-5h3zM7 9.86a4 4 0 1 0-2 0V14H2v2h7v-2H7zM4 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2"></svg:path>`,
})
export class CarbonClassifierLanguageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCleanIcon],svg[carbon-clean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 20h-6v-2h6zm4 8h-6v-2h6zm-2-4h-6v-2h6z"></svg:path><svg:path fill="currentColor" d="M17.003 20a4.9 4.9 0 0 0-2.404-4.173L22 3l-1.73-1l-7.577 13.126a5.7 5.7 0 0 0-5.243 1.503C3.706 20.24 3.996 28.682 4.01 29.04a1 1 0 0 0 1 .96h14.991a1 1 0 0 0 .6-1.8c-3.54-2.656-3.598-8.146-3.598-8.2m-5.073-3.003A3.11 3.11 0 0 1 15.004 20c0 .038.002.208.017.469l-5.9-2.624a3.8 3.8 0 0 1 2.809-.848M15.45 28A5.2 5.2 0 0 1 14 25h-2a6.5 6.5 0 0 0 .968 3h-2.223A16.6 16.6 0 0 1 10 24H8a17.3 17.3 0 0 0 .665 4H6c.031-1.836.29-5.892 1.803-8.553l7.533 3.35A13 13 0 0 0 17.596 28Z"></svg:path>`,
})
export class CarbonCleanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloseIcon],svg[carbon-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586z"></svg:path>`,
})
export class CarbonCloseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloseFilledIcon],svg[carbon-close-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"></svg:path>`,
})
export class CarbonCloseFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloseLargeIcon],svg[carbon-close-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586z"></svg:path>`,
})
export class CarbonCloseLargeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloseOutlineIcon],svg[carbon-close-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"></svg:path><svg:path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"></svg:path>`,
})
export class CarbonCloseOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonClosedCaptionIcon],svg[carbon-closed-caption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21h-5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2h-5v6h5zm10 0h-5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2h-5v6h5z"></svg:path><svg:path fill="currentColor" d="M28 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M4 8v16h24V8Z"></svg:path>`,
})
export class CarbonClosedCaptionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonClosedCaptionAltIcon],svg[carbon-closed-caption-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17h6v2h-6zm-8 0h6v2h-6zm-5 0h3v2H6zm16-4h4v2h-4zm-9 0h7v2h-7zm-7 0h5v2H6z"></svg:path><svg:path fill="currentColor" d="M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V8a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v12a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.835Z"></svg:path>`,
})
export class CarbonClosedCaptionAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonClosedCaptionFilledIcon],svg[carbon-closed-caption-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-13 7h-5v6h5v2h-5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5Zm10 0h-5v6h5v2h-5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5Z"></svg:path>`,
})
export class CarbonClosedCaptionFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudIcon],svg[carbon-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7a7.7 7.7 0 0 1 1.51.15a8 8 0 0 1 6.35 6.34l.26 1.35l1.35.24a5.5 5.5 0 0 1-1 10.92H7.5a5.5 5.5 0 0 1-1-10.92l1.34-.24l.26-1.35A8 8 0 0 1 16 7m0-2a10 10 0 0 0-9.83 8.12A7.5 7.5 0 0 0 7.49 28h17a7.5 7.5 0 0 0 1.32-14.88a10 10 0 0 0-7.94-7.94A10.3 10.3 0 0 0 16 5"></svg:path>`,
})
export class CarbonCloudIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudAlertingIcon],svg[carbon-cloud-alerting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 17v5H4V6h11V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-5ZM18 28h-4v-4h4Z"></svg:path><svg:path fill="currentColor" d="M29 14H17a1 1 0 0 1-.857-1.514l6-10a1 1 0 0 1 1.715 0l6 10A1 1 0 0 1 29 14m-10.234-2h8.468L23 4.944Z"></svg:path>`,
})
export class CarbonCloudAlertingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudAppIcon],svg[carbon-cloud-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.829 13.116A10.02 10.02 0 0 0 16 5v2a8.02 8.02 0 0 1 7.865 6.493l.259 1.346l1.349.245A5.502 5.502 0 0 1 24.508 26H16v2h8.508a7.502 7.502 0 0 0 1.32-14.884M8 24h6v2H8zm-4 0h2v2H4zm2-4h8v2H6zm-4 0h2v2H2zm6-4h6v2H8zm-4 0h2v2H4zm6-4h4v2h-4zm-4 0h2v2H6zm6-4h2v2h-2z"></svg:path>`,
})
export class CarbonCloudAppIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudAuditingIcon],svg[carbon-cloud-auditing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z"></svg:path><svg:path fill="currentColor" d="m21 15l-5-4.96l1.59-1.57L21 11.85l7.41-7.35L30 6.08z"></svg:path>`,
})
export class CarbonCloudAuditingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudCeilingIcon],svg[carbon-cloud-ceiling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h9v2H2zm19 0h9v2h-9zm-4-1.833v-8.335l2.586 2.582L21 19l-5-5l-5 5l1.413 1.415L15 17.832v8.335l-2.587-2.583L11 25l5 5l5-5l-1.414-1.414z"></svg:path><svg:path fill="currentColor" d="M23 16h-2v-2h2a3 3 0 0 0 0-6a3 3 0 0 1-.215.026l-.804.058l-.227-.774a5.993 5.993 0 0 0-11.175-.865l-.284.599l-.842-.046A3.5 3.5 0 0 0 9.5 14H11v2H9.5a5.5 5.5 0 0 1-.43-10.983a7.99 7.99 0 0 1 14.35 1A5 5 0 0 1 23 16"></svg:path>`,
})
export class CarbonCloudCeilingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudDataOpsIcon],svg[carbon-cloud-data-ops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 18h2v10h-2zm-4-4h2v14h-2zm-4 8h2v6h-2zm2.175-12l1.585-1.266a9.95 9.95 0 0 0-5.87-3.552a10.003 10.003 0 0 0-11.72 7.933A7.505 7.505 0 0 0 .054 21.41A7.684 7.684 0 0 0 7.77 28H16v-2H7.695a5.63 5.63 0 0 1-5.603-4.486a5.506 5.506 0 0 1 4.434-6.43l1.349-.245l.214-1.11a8.21 8.21 0 0 1 6.742-6.642a8 8 0 0 1 3.014.13A7.8 7.8 0 0 1 22.175 10"></svg:path>`,
})
export class CarbonCloudDataOpsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudDownloadIcon],svg[carbon-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22"></svg:path><svg:path fill="currentColor" d="M17 26.17V14h-2v12.17l-2.59-2.58L11 25l5 5l5-5l-1.41-1.41z"></svg:path>`,
})
export class CarbonCloudDownloadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudFoundry1Icon],svg[carbon-cloud-foundry-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7a7.7 7.7 0 0 1 1.51.15a8 8 0 0 1 6.35 6.34l.26 1.35l1.35.24a5.5 5.5 0 0 1-1 10.92H7.5a5.5 5.5 0 0 1-1-10.92l1.34-.24l.26-1.35A8 8 0 0 1 16 7m0-2a10 10 0 0 0-9.83 8.12A7.5 7.5 0 0 0 7.49 28h17a7.5 7.5 0 0 0 1.32-14.88a10 10 0 0 0-7.94-7.94A10.3 10.3 0 0 0 16 5"></svg:path><svg:path fill="currentColor" d="M14 24h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v2h-3v3h3zm7-9v-2h-2a2 2 0 0 0-2 2v2h-1v2h1v5h2v-5h2v-2h-2v-2z"></svg:path>`,
})
export class CarbonCloudFoundry1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudFoundry2Icon],svg[carbon-cloud-foundry-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 11V9h-8v14h2v-6h5v-2h-5v-4zM15 23H9a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2H9v10h6z"></svg:path>`,
})
export class CarbonCloudFoundry2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudLoggingIcon],svg[carbon-cloud-logging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 16v6H4V6h11V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6zM18 28h-4v-4h4zm0-24h12v2H18z"></svg:path><svg:path fill="currentColor" d="M18 8h12v2H18zm0 4h6v2h-6z"></svg:path>`,
})
export class CarbonCloudLoggingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudMonitoringIcon],svg[carbon-cloud-monitoring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 16v6H4V6h7V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z"></svg:path><svg:path fill="currentColor" d="M18 18h-.01a1 1 0 0 1-.951-.725L15.246 11H11V9h5a1 1 0 0 1 .962.725l1.074 3.76l3.009-9.78A1.01 1.01 0 0 1 22 3a.98.98 0 0 1 .949.684L24.72 9H30v2h-6a1 1 0 0 1-.949-.684l-1.013-3.04l-3.082 10.018A1 1 0 0 1 18 18"></svg:path>`,
})
export class CarbonCloudMonitoringIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudOfflineIcon],svg[carbon-cloud-offline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.8 12.136a8.9 8.9 0 0 0-.979-2.543L30 3.414L28.587 2L2 28.587L3.414 30l5-5H23.5a6.497 6.497 0 0 0 1.3-12.864M23.5 23H10.414l11.928-11.928a6.9 6.9 0 0 1 .6 2.071l.099.812l.815.064A4.498 4.498 0 0 1 23.5 23m-19.204.449l1.432-1.431a4.477 4.477 0 0 1 2.416-7.999l.816-.064l.099-.812a6.987 6.987 0 0 1 10.63-5.086l1.443-1.443A8.986 8.986 0 0 0 7.2 12.136A6.49 6.49 0 0 0 4.296 23.45"></svg:path>`,
})
export class CarbonCloudOfflineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudRegistryIcon],svg[carbon-cloud-registry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2m-5-7h-.001L23 28h5v-5zm-7 0h-5a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h-2v-5H11v10h5z"></svg:path><svg:path fill="currentColor" d="M16 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v12h-2V4H4v24h12Z"></svg:path>`,
})
export class CarbonCloudRegistryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudSatelliteIcon],svg[carbon-cloud-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="20" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 20a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2"></svg:path><svg:circle cx="23" cy="12" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 31a1 1 0 0 1-.504-.136l-12-7A1 1 0 0 1 3 23V9a1 1 0 0 1 .496-.864l12-7a1 1 0 0 1 1.008 0l12 7l-1.008 1.728L16 3.158L5 9.574v12.852l11 6.417l11-6.417V15h2v8a1 1 0 0 1-.496.864l-12 7A1 1 0 0 1 16 31"></svg:path>`,
})
export class CarbonCloudSatelliteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudSatelliteConfigIcon],svg[carbon-cloud-satellite-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 26v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 26 20.101V18h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 20.101 24H18v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V32h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 29.899 26Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path><svg:circle cx="7" cy="20" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 20a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2"></svg:path><svg:circle cx="21" cy="12" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13.02 28.272L3 22.426V9.574l11-6.416l11.496 6.706l1.008-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7A1 1 0 0 0 1 9v14a1 1 0 0 0 .496.864L12.013 30Z"></svg:path>`,
})
export class CarbonCloudSatelliteConfigIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudSatelliteLinkIcon],svg[carbon-cloud-satellite-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30.976 24.975l-5.001 5.001a3.501 3.501 0 0 1-4.951-4.95l1.414 1.414a1.5 1.5 0 0 0 2.122 2.122l5.002-5.002a1.5 1.5 0 0 0-2.122-2.122l-1.415-1.414a3.501 3.501 0 0 1 4.952 4.95Z"></svg:path><svg:path fill="currentColor" d="m20.025 21.024l-5.001 5.001a3.501 3.501 0 0 0 4.95 4.951l-1.414-1.414a1.5 1.5 0 0 1-2.122-2.122l5.002-5.002a1.5 1.5 0 0 1 2.122 2.122l1.414 1.415a3.501 3.501 0 0 0-4.95-4.952Z"></svg:path><svg:circle cx="7" cy="20" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 20a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2"></svg:path><svg:circle cx="21" cy="12" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M11.308 27.273L3 22.426V9.574l11-6.416l11.496 6.706l1.008-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7A1 1 0 0 0 1 9v14a1 1 0 0 0 .496.864L10.3 29Z"></svg:path>`,
})
export class CarbonCloudSatelliteLinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudSatelliteServicesIcon],svg[carbon-cloud-satellite-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 26a2.97 2.97 0 0 0-1.855.66L25 25.423v-1.606a3 3 0 1 0-2 0v1.606l-2.145 1.239A2.97 2.97 0 0 0 19 26a3.02 3.02 0 1 0 2.925 2.353L24 27.155l2.075 1.198A2.998 2.998 0 1 0 29 26m-10 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m5-10a1 1 0 1 1-1 1a1 1 0 0 1 1-1m5 10a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:circle cx="7" cy="20" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 20a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2"></svg:path><svg:circle cx="21" cy="12" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13.02 28.272L3 22.426V9.574l11-6.416l11.496 6.706l1.008-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7A1 1 0 0 0 1 9v14a1 1 0 0 0 .496.864L12.013 30Z"></svg:path>`,
})
export class CarbonCloudSatelliteServicesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudServiceManagementIcon],svg[carbon-cloud-service-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 17v5H4V6h10V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-5ZM18 28h-4v-4h4Z"></svg:path><svg:path fill="currentColor" d="M30 10V8h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 4.101V2h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 8H16v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V16h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 10Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonCloudServiceManagementIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudServicesIcon],svg[carbon-cloud-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.822 10.124a10 10 0 0 0-19.644 0A7.496 7.496 0 0 0 7.5 25H8v-2h-.5a5.496 5.496 0 0 1-.377-10.98l.836-.057l.09-.833a7.998 7.998 0 0 1 15.902 0l.09.833l.836.058A5.496 5.496 0 0 1 24.5 23H24v2h.5a7.496 7.496 0 0 0 1.322-14.876"></svg:path><svg:path fill="currentColor" d="M23 22v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 17 16.101V14h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 11.101 20H9v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V28h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 20.899 22Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonCloudServicesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudUploadIcon],svg[carbon-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 18l1.41 1.41L15 16.83V29h2V16.83l2.59 2.58L21 18l-5-5z"></svg:path><svg:path fill="currentColor" d="M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22"></svg:path>`,
})
export class CarbonCloudUploadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCloudyIcon],svg[carbon-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15.5a6.53 6.53 0 0 0-5.199-6.363a8.994 8.994 0 0 0-17.6 0A6.53 6.53 0 0 0 2 15.5a6.45 6.45 0 0 0 1.688 4.35A5.983 5.983 0 0 0 8 30h11a5.976 5.976 0 0 0 5.61-8.102A6.505 6.505 0 0 0 30 15.501M19 28H8a3.993 3.993 0 0 1-.673-7.93l.663-.112l.146-.656a5.496 5.496 0 0 1 10.73 0l.145.656l.663.113A3.993 3.993 0 0 1 19 28m4.5-8h-.055a5.96 5.96 0 0 0-2.796-1.756a7.495 7.495 0 0 0-14.299 0a6 6 0 0 0-1.031.407A4.45 4.45 0 0 1 4 15.5a4.517 4.517 0 0 1 4.144-4.481l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.498 4.498 0 0 1 23.5 20"></svg:path>`,
})
export class CarbonCloudyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCobbAngleIcon],svg[carbon-cobb-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 17v-2a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zm-10-2h8v2h-8z" fill="currentColor"></svg:path><svg:path d="M23.42 24.48A2 2 0 0 0 21 23.06l-7.73 2.07a2 2 0 0 0-1.42 2.44l.52 1.93a2 2 0 0 0 1.9 1.5a3 3 0 0 0 .52-.07l7.73-2.07a2 2 0 0 0 1.41-2.45zM14.27 29l-.51-1.94L21.48 25l.52 1.92z" fill="currentColor"></svg:path><svg:path d="M13.24 6.86L21 8.93a2.24 2.24 0 0 0 .51.07a2 2 0 0 0 1.94-1.48L24 5.58a2 2 0 0 0-1.41-2.45l-7.8-2.07a2 2 0 0 0-2.45 1.41l-.52 1.93a2 2 0 0 0 1.42 2.44zm1-3.86L22 5.07L21.48 7l-7.72-2.07z" fill="currentColor"></svg:path><svg:path d="M14 21h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M14 9h2v2h-2z" fill="currentColor"></svg:path>`,
})
export class CarbonCobbAngleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCodeIcon],svg[carbon-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23zm11.42 9.484L17.64 6l1.932.517L14.352 26z"></svg:path>`,
})
export class CarbonCodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCodeBlockIcon],svg[carbon-code-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h8v2H2zm4 6h24v2H6zm0 6h24v2H6zM2 27h8v2H2zm4-6h16v2H6z"></svg:path>`,
})
export class CarbonCodeBlockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCodeHideIcon],svg[carbon-code-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.713 13.471l1.863-6.953L17.645 6l-1.565 5.838zm6.494 6.494l1.414 1.414L31 16l-7-7l-1.414 1.414L28.172 16zM30 28.586L3.414 2L2 3.414l5.793 5.793L1 16l7 7l1.414-1.414L3.828 16l5.379-5.379l5.677 5.677l-2.461 9.184l1.932.518l2.162-8.069L28.586 30z"></svg:path>`,
})
export class CarbonCodeHideIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCodeReferenceIcon],svg[carbon-code-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm26-10l-6-6l-1.414 1.414L27.172 10l-4.586 4.586L24 16zm-16.08 7.484l4.15-15.483l1.932.517l-4.15 15.484zM4 10l6-6l1.414 1.414L6.828 10l4.586 4.586L10 16z"></svg:path>`,
})
export class CarbonCodeReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCodeSigningServiceIcon],svg[carbon-code-signing-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="25" cy="20" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19.414 30H15v-4.414l5.034-5.034A5 5 0 0 1 20 20a5 5 0 1 1 4.448 4.966zM17 28h1.586l5.206-5.206l.54.124a3.035 3.035 0 1 0-2.25-2.25l.124.54L17 26.414zM6 8h2v8H6zM2 8h2v8H2zm16 0h2v6h-2zm-4 8h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-2-2h2v-4h-2zM2 18h2v8H2zm12 0h2v4h-2zm-4 8H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-2-2h2v-4H8zM2 2h2v4H2zm12 0h2v4h-2zm4 0h2v4h-2zm-8 4H8a2 2 0 0 1-2-2V2h2v2h2V2h2v2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonCodeSigningServiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCognitiveIcon],svg[carbon-cognitive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 13A11 11 0 0 0 19 2h-8a9 9 0 0 0-9 9v3a5 5 0 0 0 5 5h1.1a5 5 0 0 0 4.9 4h1.38l4 7l1.73-1l-4-6.89A2 2 0 0 0 14.38 21H13a3 3 0 0 1 0-6h1v-2h-1a5 5 0 0 0-4.9 4H7a3 3 0 0 1-3-3v-2h2a3 3 0 0 0 3-3V8H7v1a1 1 0 0 1-1 1H4.08A7 7 0 0 1 11 4h6v2a1 1 0 0 1-1 1h-2v2h2a3 3 0 0 0 3-3V4a9 9 0 0 1 8.05 5H26a3 3 0 0 0-3 3v1h2v-1a1 1 0 0 1 1-1h1.77a8.8 8.8 0 0 1 .23 2v1a5 5 0 0 1-5 5h-3v2h3a7 7 0 0 0 3-.68V21a3 3 0 0 1-3 3h-1v2h1a5 5 0 0 0 5-5v-2.11A7 7 0 0 0 30 14Z"></svg:path>`,
})
export class CarbonCognitiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCollaborateIcon],svg[carbon-collaborate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21v-1H4v1a7 7 0 0 0 7 7h3v-2h-3a5 5 0 0 1-5-5m18-10v1h2v-1a7 7 0 0 0-7-7h-3v2h3a5 5 0 0 1 5 5m-13 0H5a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-3-1a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2m19 21h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-7-5a4 4 0 1 0 4-4a4 4 0 0 0-4 4m6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2"></svg:path>`,
})
export class CarbonCollaborateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCollapseAllIcon],svg[carbon-collapse-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15h-2V7H13V5h15a2 2 0 0 1 2 2Z"></svg:path><svg:path fill="currentColor" d="M25 20h-2v-8H8v-2h15a2 2 0 0 1 2 2Z"></svg:path><svg:path fill="currentColor" d="M18 27H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M4 17v8h14.001L18 17Z"></svg:path>`,
})
export class CarbonCollapseAllIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCollapseCategoriesIcon],svg[carbon-collapse-categories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 25h14v2H14zm-6.83 1l-2.58 2.58L6 30l4-4l-4-4l-1.42 1.41zM14 15h14v2H14zm-6.83 1l-2.58 2.58L6 20l4-4l-4-4l-1.42 1.41zM14 5h14v2H14zM7.17 6L4.59 8.58L6 10l4-4l-4-4l-1.42 1.41z"></svg:path>`,
})
export class CarbonCollapseCategoriesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonColorPaletteIcon],svg[carbon-color-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="9" r="2" fill="currentColor"></svg:circle><svg:circle cx="22" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="23" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="19" cy="23" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16.54 2A14 14 0 0 0 2 16a4.82 4.82 0 0 0 6.09 4.65l1.12-.31a3 3 0 0 1 3.79 2.9V27a3 3 0 0 0 3 3a14 14 0 0 0 14-14.54A14.05 14.05 0 0 0 16.54 2m8.11 22.31A11.93 11.93 0 0 1 16 28a1 1 0 0 1-1-1v-3.76a5 5 0 0 0-5-5a5 5 0 0 0-1.33.18l-1.12.31A2.82 2.82 0 0 1 4 16A12 12 0 0 1 16.47 4A12.18 12.18 0 0 1 28 15.53a11.9 11.9 0 0 1-3.35 8.79Z"></svg:path>`,
})
export class CarbonColorPaletteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonColorSwitchIcon],svg[carbon-color-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4H6a2.003 2.003 0 0 0-2 2v20a2.003 2.003 0 0 0 2 2h20a2.003 2.003 0 0 0 2-2V6a2.003 2.003 0 0 0-2-2M6 26L26 6v20Z"></svg:path>`,
})
export class CarbonColorSwitchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonColumnIcon],svg[carbon-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4h2v24h-2zm-6 2v20h-4V6zm0-2h-4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 4h2v24H6z"></svg:path>`,
})
export class CarbonColumnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonColumnDeleteIcon],svg[carbon-column-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 3.41L28.59 2L25 5.59L21.41 2L20 3.41L23.59 7L20 10.59L21.41 12L25 8.41L28.59 12L30 10.59L26.41 7z"></svg:path><svg:path fill="currentColor" d="M24 14v14h-6V6h-2v22a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V14zM10 30H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2M4 8v20h6V8z"></svg:path>`,
})
export class CarbonColumnDeleteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonColumnDependencyIcon],svg[carbon-column-dependency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 10V2h-8v3h-5a2 2 0 0 0-2 2v8h-5v-3H2v8h8v-3h5v8a2 2 0 0 0 2 2h5v3h8v-8h-8v3h-5v-8h5v3h8v-8h-8v3h-5V7h5v3ZM8 18H4v-4h4Zm16 6h4v4h-4Zm0-10h4v4h-4Zm0-10h4v4h-4Z"></svg:path>`,
})
export class CarbonColumnDependencyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonColumnInsertIcon],svg[carbon-column-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30h-6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2m-6-20v18h6V10zm-6-1l5.586-5.586L20.172 2L16 6.172L11.828 2l-1.414 1.414zm-6 21H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2M4 10v18h6V10z"></svg:path>`,
})
export class CarbonColumnInsertIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCommitIcon],svg[carbon-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15h-8.09a5.993 5.993 0 0 0-11.82 0H2v2h8.09a5.993 5.993 0 0 0 11.82 0H30Zm-14 5a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path>`,
})
export class CarbonCommitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCommunicationUnifiedIcon],svg[carbon-communication-unified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 17H18a2.003 2.003 0 0 0-2 2v6a2.003 2.003 0 0 0 2 2h4v-2h-4v-6h10v6h-2.535l-2.594 3.89L24.535 30l2-3H28a2.003 2.003 0 0 0 2-2v-6a2.003 2.003 0 0 0-2-2M8.667 24.109l.861-.862a.83.83 0 0 1 .899-.184l1.05.42a.83.83 0 0 1 .523.773v1.908a.833.833 0 0 1-.879.834c-7.354-.457-8.84-6.686-9.115-9.072A.832.832 0 0 1 2.834 17h1.874a.83.83 0 0 1 .774.524l.42 1.05a.83.83 0 0 1-.184.898l-.862.861a4.53 4.53 0 0 0 3.81 3.776M21 9h7v2h-7zm0-4h9v2h-9zm-4 1l-3 2.2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.8l3 2.2zM4 12V6h8v6z"></svg:path>`,
})
export class CarbonCommunicationUnifiedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCompareIcon],svg[carbon-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H18V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M4 15h6.17l-2.58 2.59L9 19l5-5l-5-5l-1.41 1.41L10.17 13H4V4h12v20H4Zm12 13v-2a2 2 0 0 0 2-2V8h10v9h-6.17l2.58-2.59L23 13l-5 5l5 5l1.41-1.41L21.83 19H28v9Z"></svg:path>`,
})
export class CarbonCompareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCompassIcon],svg[carbon-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path><svg:path fill="currentColor" d="M23 10.41L21.59 9l-4.3 4.3a3 3 0 0 0-4 4L9 21.59L10.41 23l4.3-4.3a3 3 0 0 0 4-4ZM17 16a1 1 0 1 1-1-1a1 1 0 0 1 1 1"></svg:path><svg:circle cx="16" cy="7.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class CarbonCompassIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonComposerEditIcon],svg[carbon-composer-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M25.82 10H30V8h-4.18a3 3 0 0 0-5.64 0H13V5H5v3H2v2h3v3h8v-3h7.18A3 3 0 0 0 22 11.82v7.32A4 4 0 0 0 19.14 22H2v2h17.14a4 4 0 0 0 7.72 0H30v-2h-3.14A4 4 0 0 0 24 19.14v-7.32A3 3 0 0 0 25.82 10zM11 11H7V7h4zm14 12a2 2 0 1 1-2-2a2 2 0 0 1 2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonComposerEditIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConceptIcon],svg[carbon-concept-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.885 19.471a5.96 5.96 0 0 0 0-6.942L23 10.414l1.293 1.293a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414L21.586 9l-2.115 2.115a5.96 5.96 0 0 0-6.942 0L10 8.585V2H2v8h6.586l2.529 2.529a5.96 5.96 0 0 0 0 6.942L9 21.586l-1.293-1.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414L10.414 23l2.115-2.115a5.96 5.96 0 0 0 6.942 0L22 23.415V30h8v-8h-6.586ZM25 4.414L27.586 7L25 9.586L22.414 7ZM7 27.586L4.414 25L7 22.414L9.586 25ZM8 8H4V4h4Zm4 8a4 4 0 1 1 4 4a4.005 4.005 0 0 1-4-4m12 8h4v4h-4Z"></svg:path>`,
})
export class CarbonConceptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConditionPointIcon],svg[carbon-condition-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 16l8-8l8 8l-8 8z"></svg:path><svg:path fill="currentColor" d="M29.39 14.527L17.474 2.609a2.085 2.085 0 0 0-2.946 0L2.609 14.527a2.085 2.085 0 0 0 0 2.946l11.918 11.918a2.085 2.085 0 0 0 2.946 0l11.918-11.918a2.085 2.085 0 0 0 0-2.946M16 28.036L3.965 16L16 3.964L28.036 16Z"></svg:path>`,
})
export class CarbonConditionPointIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConditionWaitPointIcon],svg[carbon-condition-wait-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 16l8-8l8 8l-8 8z"></svg:path><svg:path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12.014 12.014 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path>`,
})
export class CarbonConditionWaitPointIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConnectIcon],svg[carbon-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 16.01a7 7 0 0 0-4.18 1.39l-4.22-4.22A6.86 6.86 0 0 0 16 9.01a7 7 0 1 0-2.81 5.59l4.21 4.22a7 7 0 1 0 5.6-2.81m-19-7a5 5 0 1 1 5 5a5 5 0 0 1-5-5"></svg:path>`,
})
export class CarbonConnectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConnectRecursiveIcon],svg[carbon-connect-recursive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 7H13.828l3.586-3.586L16 2l-6 6l6 6l1.414-1.414L13.828 9H28v11H11.899A5.01 5.01 0 0 0 8 16.101V2H6v14.101A5 5 0 0 0 6 25.9V30h2v-4.101A5.01 5.01 0 0 0 11.899 22H28a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M7 24a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonConnectRecursiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConnectReferenceIcon],svg[carbon-connect-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8z"></svg:path><svg:path fill="currentColor" d="M23 16c-1.57 0-3.012.516-4.181 1.392L14.6 13.175A6.92 6.92 0 0 0 16 9c0-3.86-3.14-7-7-7S2 5.14 2 9s3.14 7 7 7c1.57 0 3.018-.535 4.187-1.411l4.218 4.217A7 7 0 0 0 16 23c0 3.86 3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7M4 9c0-2.757 2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5s-5-2.243-5-5"></svg:path>`,
})
export class CarbonConnectReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConnectSourceIcon],svg[carbon-connect-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 10l-1.414 1.414L26.172 15H11.899A5.01 5.01 0 0 0 8 11.101V2H6v9.101A5 5 0 0 0 6 20.9V30h2v-9.101A5.01 5.01 0 0 0 11.899 17h14.273l-3.586 3.586L24 22l6-6ZM7 19a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonConnectSourceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConnectTargetIcon],svg[carbon-connect-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2h2v28h-2zm-8 8l-1.414 1.414L22.172 15H11.899a5 5 0 1 0 0 2h10.273l-3.586 3.586L20 22l6-6zM7 19a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonConnectTargetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConnectionFlowUsageIcon],svg[carbon-connection-flow-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 16l-1.414 1.414L25.172 22H15V5a2 2 0 0 0-2-2H3v2h10v17a2 2 0 0 0 2 2h10.172l-4.586 4.586L22 30l7-7z"></svg:path>`,
})
export class CarbonConnectionFlowUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConnectionReceiveIcon],svg[carbon-connection-receive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8h2v4H8zm0 6h2v4H8zm6-6h2v4h-2zm0 6h2v4h-2zm-6 6h2v4H8zm6 0h2v4h-2zm16-6h-8.17l2.58 2.59L23 18l-5-5l5-5l1.41 1.41L21.83 12H30z"></svg:path><svg:path fill="currentColor" d="M28 20v8h-6v-8h-2v8H4V4h16v2h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v26h28V20Z"></svg:path>`,
})
export class CarbonConnectionReceiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConnectionSendIcon],svg[carbon-connection-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8h2v4H8zm0 6h2v4H8zm6-6h2v4h-2zm0 6h2v4h-2zm-6 6h2v4H8zm6 0h2v4h-2zm4-6h8.17l-2.58 2.59L25 18l5-5l-5-5l-1.41 1.41L26.17 12H18z"></svg:path><svg:path fill="currentColor" d="M28 20v8h-6v-8h-2v8H4V4h16v2h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v26h28V20Z"></svg:path>`,
})
export class CarbonConnectionSendIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConnectionSignalIcon],svg[carbon-connection-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h2v18h-2zm-3.67 6.22a7 7 0 0 1 0-10.44l1.34 1.49a5 5 0 0 0 0 7.46zm9.34 0l-1.34-1.49a5 5 0 0 0 0-7.46l1.34-1.49a7 7 0 0 1 0 10.44"></svg:path><svg:path fill="currentColor" d="M8.4 21.8a11 11 0 0 1 0-17.6l1.2 1.6a9 9 0 0 0 0 14.4zm15.2 0l-1.2-1.6a9 9 0 0 0 0-14.4l1.2-1.6a11 11 0 0 1 0 17.6"></svg:path>`,
})
export class CarbonConnectionSignalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConnectionSignalOffIcon],svg[carbon-connection-signal-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 13a8.9 8.9 0 0 1-2.525 6.234l1.413 1.413A10.98 10.98 0 0 0 23.601 4.2l-1.202 1.6A8.93 8.93 0 0 1 26 13"></svg:path><svg:path fill="currentColor" d="M21 13a5 5 0 0 1-.902 2.856l1.427 1.428a6.983 6.983 0 0 0-.858-9.501l-1.334 1.49A5 5 0 0 1 21 13m9 15.586L3.414 2L2 3.414l3.71 3.71A10.98 10.98 0 0 0 8.4 21.801l1.2-1.6A8.97 8.97 0 0 1 7.172 8.585l2.197 2.197a6.97 6.97 0 0 0 1.964 7.435l1.334-1.49A5 5 0 0 1 11 13a5 5 0 0 1 .04-.546l3.96 3.96V30h2V18.414L28.586 30z"></svg:path>`,
})
export class CarbonConnectionSignalOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConnectionTwoWayIcon],svg[carbon-connection-two-way-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8h2v4H8zm0 6h2v4H8zm6-6h2v4h-2zm0 6h2v4h-2zm-6 6h2v4H8zm6 0h2v4h-2zm16 2h-8.17l2.58 2.59L23 26l-5-5l5-5l1.41 1.41L21.83 20H30zM19 12h8.17l-2.58 2.59L26 16l5-5l-5-5l-1.41 1.41L27.17 10H19z"></svg:path><svg:path fill="currentColor" d="M28 26v2H4V4h16v2h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v26h28v-4Z"></svg:path>`,
})
export class CarbonConnectionTwoWayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConnectionUsageIcon],svg[carbon-connection-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 26V6a2 2 0 0 0-2-2H4v2h11v20a2 2 0 0 0 2 2h11v-2z"></svg:path>`,
})
export class CarbonConnectionUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConstraintIcon],svg[carbon-constraint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 13V5h-4V3h4c1.103 0 2 .898 2 2v8c0 1.523.88 2 2 2v2c-1.12 0-2 .45-2 2v8c0 1.103-.897 2-2 2h-4v-2h4v-8c0-1.684.88-2.564 2-2.858v-.268c-1.12-.294-2-1.19-2-2.874m-15-1h8v8h-8zm-7 1V5h4V3H5c-1.103 0-2 .898-2 2v8c0 1.523-.88 2-2 2v2c1.12 0 2 .45 2 2v8c0 1.103.897 2 2 2h4v-2H5v-8c0-1.684-.88-2.564-2-2.858v-.268c1.12-.294 2-1.19 2-2.874"></svg:path>`,
})
export class CarbonConstraintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConstructionIcon],svg[carbon-construction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.34 16.06a1 1 0 0 0-1.108.3l-3.772 4.526l-5.435-.988l-3.602-8.952A3.01 3.01 0 0 0 12.612 9h-4.06a3 3 0 0 0-1.543.428L2 12.434v6.4l5 .91V30h2v-9.893l3.565.648L14 24.2V30h2v-6.2l-1.091-2.618l8.081 1.469l-4.758 5.709A1 1 0 0 0 19 30h10a1 1 0 0 0 1-1V17a1 1 0 0 0-.66-.94M4 17.166v-3.6l3-1.8v5.945zm5 .909V11h3.614a1.01 1.01 0 0 1 .945.67l3.14 7.805zM28 28h-6.865L28 19.762zM12.5 8A3.5 3.5 0 1 1 16 4.5A3.504 3.504 0 0 1 12.5 8m0-5A1.5 1.5 0 1 0 14 4.5A1.5 1.5 0 0 0 12.5 3"></svg:path>`,
})
export class CarbonConstructionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContainerEngineIcon],svg[carbon-container-engine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23" cy="23" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m25.79 18.854l-8.99-6.238A2.97 2.97 0 0 0 15 12c-1.654 0-3 1.346-3 3c0 .655.217 1.257.575 1.752l6.341 9.115A4.99 4.99 0 0 0 23 28c2.757 0 5-2.243 5-5a5 5 0 0 0-2.21-4.146m-7.52 2.598l-2.483-3.57a2.99 2.99 0 0 0 2.094-2.093l3.57 2.481a4.99 4.99 0 0 0-3.181 3.182M15 14a1.001 1.001 0 0 1 0 2a1 1 0 0 1 0-2m8 12c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3"></svg:path><svg:path fill="currentColor" d="M16 28H6c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v10h-2V6H6v20h10z"></svg:path>`,
})
export class CarbonContainerEngineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContainerImageIcon],svg[carbon-container-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10h12v2H10zm0 5h12v2H10zm0 5h12v2H10z"></svg:path><svg:path fill="currentColor" d="M26 28H6c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v20c0 1.103-.897 2-2 2M6 6v20h20V6z"></svg:path>`,
})
export class CarbonContainerImageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContainerImagePullIcon],svg[carbon-container-image-pull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23H20c-1.103 0-2-.897-2-2V11c0-1.103.897-2 2-2h10c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2M20 11v10h10V11zM5 11l-5 5l5 5l1.419-1.409L3.847 17H14v-2H3.794l2.625-2.591z"></svg:path>`,
})
export class CarbonContainerImagePullIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContainerImagePushIcon],svg[carbon-container-image-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23H20c-1.103 0-2-.897-2-2V11c0-1.103.897-2 2-2h10c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2M20 11v10h10V11zM9 11l5 5l-5 5l-1.419-1.409L10.153 17H0v-2h10.206l-2.625-2.591z"></svg:path>`,
})
export class CarbonContainerImagePushIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContainerImagePushPullIcon],svg[carbon-container-image-push-pull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23H20c-1.103 0-2-.897-2-2V11c0-1.103.897-2 2-2h10c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2M20 11v10h10V11zM9 5l5 5l-5 5l-1.419-1.409L10.153 11H0V9h10.206L7.581 6.409zM5 27l-5-5l5-5l1.419 1.409L3.847 21H14v2H3.794l2.625 2.591z"></svg:path>`,
})
export class CarbonContainerImagePushPullIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContainerRegistryIcon],svg[carbon-container-registry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13V6H8v16h16v-9Zm-7-5h5v5h-5Zm0 7h5v5h-5Zm12 5h-5v-5h5Z"></svg:path><svg:path fill="currentColor" d="M28 11h-9V2h9zm-7-2h5V4h-5zm7 11h-2v2h2v6H4v-6h2v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonContainerRegistryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContainerRuntimeIcon],svg[carbon-container-runtime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24v-2h-2.1c-.1-.6-.4-1.2-.7-1.8l1.5-1.5l-1.4-1.4l-1.5 1.5c-.5-.3-1.1-.6-1.8-.7V16h-2v2.1c-.6.1-1.2.4-1.8.7l-1.5-1.5l-1.4 1.4l1.5 1.5c-.3.5-.6 1.1-.7 1.8H16v2h2.1c.1.6.4 1.2.7 1.8l-1.5 1.5l1.4 1.4l1.5-1.5c.5.3 1.1.6 1.8.7V30h2v-2.1c.6-.1 1.2-.4 1.8-.7l1.5 1.5l1.4-1.4l-1.5-1.5c.3-.5.6-1.1.7-1.8zm-7 2c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3"></svg:path><svg:path fill="currentColor" d="M14 28H6c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v8h-2V6H6v20h8z"></svg:path>`,
})
export class CarbonContainerRuntimeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContainerRuntimeMonitorIcon],svg[carbon-container-runtime-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22" cy="23" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M29.777 22.479A8.64 8.64 0 0 0 22 17a8.64 8.64 0 0 0-7.777 5.479L14 23l.223.522A8.64 8.64 0 0 0 22 29a8.64 8.64 0 0 0 7.777-5.478L30 23zM22 27a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path><svg:path fill="currentColor" d="M12 28H6c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v10h-2V6H6v20h6z"></svg:path>`,
})
export class CarbonContainerRuntimeMonitorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContainerServicesIcon],svg[carbon-container-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 22v-5a2 2 0 0 0-2-2h-8v-5h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v5H7a2 2 0 0 0-2 2v5H2v8h8v-8H7v-5h8v5h-3v8h8v-8h-3v-5h8v5h-3v8h8v-8ZM12 4h8v4h-8ZM8 28H4v-4h4Zm10 0h-4v-4h4Zm10 0h-4v-4h4Z"></svg:path>`,
})
export class CarbonContainerServicesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
