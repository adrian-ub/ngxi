import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siActionsDuotoneIcon],svg[si-actions-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5 0L9 7.5v9z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="m9 7.5l8 4.5l-8 4.5z"></svg:path></svg:g>`,
})
export class SiActionsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddAlarmDuotoneIcon],svg[si-add-alarm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 21a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 13h8m-4 4V9m6-6l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class SiAddAlarmDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddDuotoneIcon],svg[si-add-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 12h12m-6 6V6"></svg:path>`,
})
export class SiAddDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddSquareDuotoneIcon],svg[si-add-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12h8m-4 4V8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiAddSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddToLibraryDuotoneIcon],svg[si-add-to-library-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 22H8.4C5.42 22 3 19.58 3 16.6V5m11 10V7m4 4h-8M8.4 3h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"></svg:path></svg:g>`,
})
export class SiAddToLibraryDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddCircleDuotoneIcon],svg[si-add-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12h8m-4 4V8m10 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiAddCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddToPlaylistDuotoneIcon],svg[si-add-to-playlist-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 11h12m-1 4l2 2l4-4M4 7h12M4 15h8"></svg:path>`,
})
export class SiAddToPlaylistDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlbumDuotoneIcon],svg[si-album-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-6 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiAlbumDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlertDuotoneIcon],svg[si-alert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M10.575 5.217L3.517 17a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L13.426 5.217a1.666 1.666 0 0 0-2.85 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 16h.008M12 10v3m-1.425-7.783L3.517 17a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L13.426 5.217a1.666 1.666 0 0 0-2.85 0"></svg:path></svg:g>`,
})
export class SiAlertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignBottomDetailedDuotoneIcon],svg[si-align-bottom-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M17.4 10h-1.8a1.6 1.6 0 0 0-1.6 1.6v4.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6v-4.8a1.6 1.6 0 0 0-1.6-1.6m-9-8H6.6A1.6 1.6 0 0 0 5 3.6v12.8A1.6 1.6 0 0 0 6.6 18h1.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 8.4 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20m-6.4-12h1.8a1.6 1.6 0 0 1 1.6 1.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6v-4.8a1.6 1.6 0 0 1 1.6-1.6m-9-8h1.8A1.6 1.6 0 0 1 10 3.6v12.8A1.6 1.6 0 0 1 8.4 18H6.6A1.6 1.6 0 0 1 5 16.4V3.6A1.6 1.6 0 0 1 6.6 2"></svg:path></svg:g>`,
})
export class SiAlignBottomDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignBottomSimpleDuotoneIcon],svg[si-align-bottom-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M13.4 2h-2.8A1.6 1.6 0 0 0 9 3.6v12.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 13.4 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20M10.6 2h2.8A1.6 1.6 0 0 1 15 3.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 16.4V3.6A1.6 1.6 0 0 1 10.6 2"></svg:path></svg:g>`,
})
export class SiAlignBottomSimpleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignCenterDuotoneIcon],svg[si-align-center-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 10h12M3 6h18M3 14h18M6 18h12"></svg:path>`,
})
export class SiAlignCenterDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignHorizCenterDetailedDuotoneIcon],svg[si-align-horiz-center-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M16 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6H9.6A1.6 1.6 0 0 0 8 15.6v1.8A1.6 1.6 0 0 0 9.6 19h4.8a1.6 1.6 0 0 0 1.6-1.6m4-9V6.6A1.6 1.6 0 0 0 18.4 5H5.6A1.6 1.6 0 0 0 4 6.6v1.8A1.6 1.6 0 0 0 5.6 10h12.8A1.6 1.6 0 0 0 20 8.4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 2v3m0 5v4m0 5v3m4-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6H9.6A1.6 1.6 0 0 1 8 17.4v-1.8A1.6 1.6 0 0 1 9.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6m4-9v1.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 8.4V6.6A1.6 1.6 0 0 1 5.6 5h12.8A1.6 1.6 0 0 1 20 6.6"></svg:path></svg:g>`,
})
export class SiAlignHorizCenterDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignHorizCenterSimpleDuotoneIcon],svg[si-align-horiz-center-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20 13.4v-2.8A1.6 1.6 0 0 0 18.4 9H5.6A1.6 1.6 0 0 0 4 10.6v2.8A1.6 1.6 0 0 0 5.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 2v7m0 6v7m8-11.4v2.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 13.4v-2.8A1.6 1.6 0 0 1 5.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6"></svg:path></svg:g>`,
})
export class SiAlignHorizCenterSimpleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignJustifyDuotoneIcon],svg[si-align-justify-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 10h18M3 6h18M3 14h18M3 18h18"></svg:path>`,
})
export class SiAlignJustifyDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignLeftDetailedDuotoneIcon],svg[si-align-left-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M22 6.6v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 8.4V6.6A1.6 1.6 0 0 1 7.6 5h12.8A1.6 1.6 0 0 1 22 6.6m-8 9v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 17.4v-1.8A1.6 1.6 0 0 1 7.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 2v20m12-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 17.4v-1.8A1.6 1.6 0 0 1 7.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6m8-9v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 8.4V6.6A1.6 1.6 0 0 1 7.6 5h12.8A1.6 1.6 0 0 1 22 6.6"></svg:path></svg:g>`,
})
export class SiAlignLeftDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignLeftDuotoneIcon],svg[si-align-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 10h12M3 6h18M3 14h18M3 18h12"></svg:path>`,
})
export class SiAlignLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignLeftSimpleDuotoneIcon],svg[si-align-left-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M22 13.4v-2.8A1.6 1.6 0 0 0 20.4 9H7.6A1.6 1.6 0 0 0 6 10.6v2.8A1.6 1.6 0 0 0 7.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 2v20m20-11.4v2.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 13.4v-2.8A1.6 1.6 0 0 1 7.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6"></svg:path></svg:g>`,
})
export class SiAlignLeftSimpleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignRightDetailedDuotoneIcon],svg[si-align-right-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6h-4.8a1.6 1.6 0 0 0-1.6 1.6v1.8a1.6 1.6 0 0 0 1.6 1.6h4.8a1.6 1.6 0 0 0 1.6-1.6m0-9V6.6A1.6 1.6 0 0 0 16.4 5H3.6A1.6 1.6 0 0 0 2 6.6v1.8A1.6 1.6 0 0 0 3.6 10h12.8A1.6 1.6 0 0 0 18 8.4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 2v20m-4-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-1.8a1.6 1.6 0 0 1 1.6-1.6h4.8a1.6 1.6 0 0 1 1.6 1.6m0-9v1.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 8.4V6.6A1.6 1.6 0 0 1 3.6 5h12.8A1.6 1.6 0 0 1 18 6.6"></svg:path></svg:g>`,
})
export class SiAlignRightDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignRightDuotoneIcon],svg[si-align-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 10h12M3 6h18M3 14h18M9 18h12"></svg:path>`,
})
export class SiAlignRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignRightSimpleDuotoneIcon],svg[si-align-right-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M2 10.6v2.8A1.6 1.6 0 0 0 3.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 16.4 9H3.6A1.6 1.6 0 0 0 2 10.6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 22V2M2 13.4v-2.8A1.6 1.6 0 0 1 3.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 13.4"></svg:path></svg:g>`,
})
export class SiAlignRightSimpleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignTopDetailedDuotoneIcon],svg[si-align-top-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M17.4 6h-1.8A1.6 1.6 0 0 0 14 7.6v4.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6V7.6A1.6 1.6 0 0 0 17.4 6m-9 0H6.6A1.6 1.6 0 0 0 5 7.6v12.8A1.6 1.6 0 0 0 6.6 22h1.8a1.6 1.6 0 0 0 1.6-1.6V7.6A1.6 1.6 0 0 0 8.4 6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 2h20m-6.4 4h1.8A1.6 1.6 0 0 1 19 7.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6V7.6A1.6 1.6 0 0 1 15.6 6m-9 0h1.8A1.6 1.6 0 0 1 10 7.6v12.8A1.6 1.6 0 0 1 8.4 22H6.6A1.6 1.6 0 0 1 5 20.4V7.6A1.6 1.6 0 0 1 6.6 6"></svg:path></svg:g>`,
})
export class SiAlignTopDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignTopSimpleDuotoneIcon],svg[si-align-top-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M13.4 6h-2.8A1.6 1.6 0 0 0 9 7.6v12.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6V7.6A1.6 1.6 0 0 0 13.4 6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 2h20M10.6 6h2.8A1.6 1.6 0 0 1 15 7.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 20.4V7.6A1.6 1.6 0 0 1 10.6 6"></svg:path></svg:g>`,
})
export class SiAlignTopSimpleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignVertCenterDetailedDuotoneIcon],svg[si-align-vert-center-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M17.4 8h-1.8A1.6 1.6 0 0 0 14 9.6v4.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6V9.6A1.6 1.6 0 0 0 17.4 8m-9-4H6.6A1.6 1.6 0 0 0 5 5.6v12.8A1.6 1.6 0 0 0 6.6 20h1.8a1.6 1.6 0 0 0 1.6-1.6V5.6A1.6 1.6 0 0 0 8.4 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12h3m14 0h3m-12 0h4m1.6-4h1.8A1.6 1.6 0 0 1 19 9.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6V9.6A1.6 1.6 0 0 1 15.6 8m-9-4h1.8A1.6 1.6 0 0 1 10 5.6v12.8A1.6 1.6 0 0 1 8.4 20H6.6A1.6 1.6 0 0 1 5 18.4V5.6A1.6 1.6 0 0 1 6.6 4"></svg:path></svg:g>`,
})
export class SiAlignVertCenterDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignVertCenterSimpleDuotoneIcon],svg[si-align-vert-center-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M13.4 4h-2.8A1.6 1.6 0 0 0 9 5.6v12.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6V5.6A1.6 1.6 0 0 0 13.4 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12h7m6 0h7M10.6 4h2.8A1.6 1.6 0 0 1 15 5.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 18.4V5.6A1.6 1.6 0 0 1 10.6 4"></svg:path></svg:g>`,
})
export class SiAlignVertCenterSimpleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAppleDuotoneIcon],svg[si-apple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.764 8.819c-.116.09-2.165 1.244-2.165 3.81c0 2.968 2.607 4.019 2.685 4.045c-.012.064-.414 1.438-1.374 2.838c-.857 1.232-1.75 2.462-3.11 2.462c-1.361 0-1.711-.79-3.281-.79c-1.53 0-2.074.816-3.318.816s-2.113-1.14-3.11-2.54C4.933 17.816 4 15.26 4 12.837c0-3.888 2.528-5.95 5.017-5.95c1.322 0 2.424.868 3.254.868c.79 0 2.022-.92 3.526-.92c.57 0 2.618.051 3.967 1.984"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.764 8.819c-.116.09-2.165 1.244-2.165 3.81c0 2.968 2.607 4.019 2.685 4.045c-.012.064-.414 1.438-1.374 2.838c-.857 1.232-1.75 2.462-3.11 2.462c-1.361 0-1.711-.79-3.281-.79c-1.53 0-2.074.816-3.318.816s-2.113-1.14-3.11-2.54C4.933 17.816 4 15.26 4 12.837c0-3.888 2.528-5.95 5.017-5.95c1.322 0 2.424.868 3.254.868c.79 0 2.022-.92 3.526-.92c.57 0 2.618.051 3.967 1.984Zm-4.681-3.631c.622-.738 1.062-1.762 1.062-2.786A2 2 0 0 0 16.107 2c-1.012.038-2.216.674-2.942 1.516c-.57.648-1.102 1.672-1.102 2.71c0 .156.026.312.038.362c.064.012.168.026.272.026c.908 0 2.05-.608 2.71-1.426Z"></svg:path></svg:g>`,
})
export class SiAppleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArchiveAltDuotoneIcon],svg[si-archive-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m21 7l-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 7l-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7m12 10l-6-6m6 0l-6 6M2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3"></svg:path></svg:g>`,
})
export class SiArchiveAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArchiveDuotoneIcon],svg[si-archive-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M16.75 7h-9.5v2.2c0 .856.694 1.55 1.55 1.55h6.4a1.55 1.55 0 0 0 1.55-1.55z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 7l-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7zM2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3M16 9.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V7h8z"></svg:path></svg:g>`,
})
export class SiArchiveDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowDownwardCircleDuotoneIcon],svg[si-arrow-downward-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path fill="currentColor" d="M8.53 11.47a.75.75 0 0 0-1.06 1.06zM12 16l-.53.53a.75.75 0 0 0 1.06 0zm4.53-3.47a.75.75 0 1 0-1.06-1.06zM12.75 8a.75.75 0 0 0-1.5 0zm8.5 4A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm-4.53 9.78l4 4l1.06-1.06l-4-4zm5.06 4l4-4l-1.06-1.06l-4 4zm.22-.53V8h-1.5v8z"></svg:path>`,
})
export class SiArrowDownwardCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowDownwardDuotoneIcon],svg[si-arrow-downward-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 14l4 4m0 0l4-4m-4 4V6"></svg:path>`,
})
export class SiArrowDownwardDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowDownwardSquareDuotoneIcon],svg[si-arrow-downward-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 12l4 4m0 0l4-4m-4 4V8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiArrowDownwardSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowLeftCircleDuotoneIcon],svg[si-arrow-left-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 16l-4-4m0 0l4-4m-4 4h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiArrowLeftCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowLeftDuotoneIcon],svg[si-arrow-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m10 16l-4-4m0 0l4-4m-4 4h12"></svg:path>`,
})
export class SiArrowLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowLeftSquareDuotoneIcon],svg[si-arrow-left-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 16l-4-4m0 0l4-4m-4 4h8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiArrowLeftSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowRightCircleDuotoneIcon],svg[si-arrow-right-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m12 16l4-4m0 0l-4-4m4 4H8m14 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiArrowRightCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowRightDuotoneIcon],svg[si-arrow-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 16l4-4m0 0l-4-4m4 4H6"></svg:path>`,
})
export class SiArrowRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowRightSquareDuotoneIcon],svg[si-arrow-right-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m12 16l4-4m0 0l-4-4m4 4H8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiArrowRightSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowUpwardCircleDuotoneIcon],svg[si-arrow-upward-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 12l4-4m0 0l4 4m-4-4v8m10-4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiArrowUpwardCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowUpwardDuotoneIcon],svg[si-arrow-upward-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 10l4-4m0 0l4 4m-4-4v12"></svg:path>`,
})
export class SiArrowUpwardDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowUpwardSquareDuotoneIcon],svg[si-arrow-upward-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 12l4-4m0 0l4 4m-4-4v8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiArrowUpwardSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArticleDuotoneIcon],svg[si-article-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.6 4H4.4A2.4 2.4 0 0 0 2 6.4v11.2A2.4 2.4 0 0 0 4.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 19.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12h8m-8 3h4M8 9h8M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 17.6V6.4A2.4 2.4 0 0 1 4.4 4"></svg:path></svg:g>`,
})
export class SiArticleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAssignmentDuotoneIcon],svg[si-assignment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M16 5.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3h8z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 14h10M7 11h10M7 17h6M10 3a2 2 0 1 1 4 0M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3M16 5.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3h8z"></svg:path></svg:g>`,
})
export class SiAssignmentDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBallotDuotoneIcon],svg[si-ballot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 15h5m-5-6h5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3ZM9 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path></svg:g>`,
})
export class SiBallotDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBarcodeDuotoneIcon],svg[si-barcode-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 22H4.4A2.4 2.4 0 0 1 2 19.6V18m16 4h1.6a2.4 2.4 0 0 0 2.4-2.4V18m0-12V4.4A2.4 2.4 0 0 0 19.6 2H18M6 2H4.4A2.4 2.4 0 0 0 2 4.4V6m16 3v6m-4-6v6m-4-6v6M6 9v6"></svg:path>`,
})
export class SiBarcodeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBarcodeScanAltDuotoneIcon],svg[si-barcode-scan-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#siBarcodeScanAltDuotone0)"><svg:path fill="currentColor" fill-opacity=".16" d="M5.6 4h2.8A1.6 1.6 0 0 1 10 5.6v2.8A1.6 1.6 0 0 1 8.4 10H5.6A1.6 1.6 0 0 1 4 8.4V5.6A1.6 1.6 0 0 1 5.6 4m10 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8a1.6 1.6 0 0 1-1.6-1.6v-2.8a1.6 1.6 0 0 1 1.6-1.6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 23H3.4A2.4 2.4 0 0 1 1 20.6V19m18 4h1.6a2.4 2.4 0 0 0 2.4-2.4V19m0-14V3.4A2.4 2.4 0 0 0 20.6 1H19M5 1H3.4A2.4 2.4 0 0 0 1 3.4V5m4.6-1h2.8A1.6 1.6 0 0 1 10 5.6v2.8A1.6 1.6 0 0 1 8.4 10H5.6A1.6 1.6 0 0 1 4 8.4V5.6A1.6 1.6 0 0 1 5.6 4m0 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8A1.6 1.6 0 0 1 8.4 20H5.6A1.6 1.6 0 0 1 4 18.4v-2.8A1.6 1.6 0 0 1 5.6 14m10-10h2.8A1.6 1.6 0 0 1 20 5.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 14 8.4V5.6A1.6 1.6 0 0 1 15.6 4m0 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8a1.6 1.6 0 0 1-1.6-1.6v-2.8a1.6 1.6 0 0 1 1.6-1.6"></svg:path></svg:g><svg:defs><svg:clippath id="siBarcodeScanAltDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiBarcodeScanAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBarcodeScanDuotoneIcon],svg[si-barcode-scan-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 21H5.4A2.4 2.4 0 0 1 3 18.6V17m14 4h1.6a2.4 2.4 0 0 0 2.4-2.4V17m0-10V5.4A2.4 2.4 0 0 0 18.6 3H17M7 3H5.4A2.4 2.4 0 0 0 3 5.4V7m-2 5h22"></svg:path>`,
})
export class SiBarcodeScanDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBookmarkDuotoneIcon],svg[si-bookmark-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" clip-rule="evenodd"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M12 17.025c-.142 0-.341.072-.588.208a7 7 0 0 0-.835.56c-.614.464-1.317 1.085-1.983 1.706a62 62 0 0 0-2.455 2.43l-.04.041l-.013.014a.05.05 0 0 1-.055.012A.05.05 0 0 1 6 21.95V4.438A2.43 2.43 0 0 1 8.43 2h7.14A2.43 2.43 0 0 1 18 4.438V21.95a.05.05 0 0 1-.085.034h-.001l-.013-.014l-.04-.041l-.151-.158a67 67 0 0 0-2.304-2.272c-.666-.621-1.37-1.242-1.983-1.707a7 7 0 0 0-.835-.56c-.247-.135-.446-.207-.588-.207"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 17.025c-.142 0-.341.072-.588.208a7 7 0 0 0-.835.56c-.614.464-1.317 1.085-1.983 1.706a62 62 0 0 0-2.455 2.43l-.04.041l-.013.014a.05.05 0 0 1-.055.012A.05.05 0 0 1 6 21.95V4.438A2.43 2.43 0 0 1 8.43 2h7.14A2.43 2.43 0 0 1 18 4.438V21.95a.05.05 0 0 1-.085.034h-.001l-.013-.014l-.04-.041l-.151-.158a67 67 0 0 0-2.304-2.272c-.666-.621-1.37-1.242-1.983-1.707a7 7 0 0 0-.835-.56c-.247-.135-.446-.207-.588-.207Z"></svg:path></svg:g>`,
})
export class SiBookmarkDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBriefcaseDetailedDuotoneIcon],svg[si-briefcase-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7m6.4 5h2.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1-.8-.8v-2.4a.8.8 0 0 1 .8-.8" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 14h8m4 0h8m-7-7V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V7M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7m6.4 5h2.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1-.8-.8v-2.4a.8.8 0 0 1 .8-.8"></svg:path></svg:g>`,
})
export class SiBriefcaseDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBriefcaseDuotoneIcon],svg[si-briefcase-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.6 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 21V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V21M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7"></svg:path></svg:g>`,
})
export class SiBriefcaseDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBriefcaseMedicalDuotoneIcon],svg[si-briefcase-medical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="M19.6 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7"></svg:path><svg:path fill="currentColor" d="M9 13.25a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zM11.25 17a.75.75 0 0 0 1.5 0zm1.5-6a.75.75 0 0 0-1.5 0zM4.4 7.75h15.2v-1.5H4.4zm15.2 0c.911 0 1.65.739 1.65 1.65h1.5a3.15 3.15 0 0 0-3.15-3.15zm1.65 1.65v9.2h1.5V9.4zm0 9.2a1.65 1.65 0 0 1-1.65 1.65v1.5a3.15 3.15 0 0 0 3.15-3.15zm-1.65 1.65H4.4v1.5h15.2zm-15.2 0a1.65 1.65 0 0 1-1.65-1.65h-1.5a3.15 3.15 0 0 0 3.15 3.15zM2.75 18.6V9.4h-1.5v9.2zm0-9.2c0-.911.739-1.65 1.65-1.65v-1.5A3.15 3.15 0 0 0 1.25 9.4zM9 14.75h6v-1.5H9zM12.75 17v-6h-1.5v6zM9.8 4.75h4.4v-1.5H9.8zm4.4 0a.05.05 0 0 1 .05.05h1.5a1.55 1.55 0 0 0-1.55-1.55zm.05.05V7h1.5V4.8zM9.75 7V4.8h-1.5V7zm0-2.2a.05.05 0 0 1 .05-.05v-1.5A1.55 1.55 0 0 0 8.25 4.8z"></svg:path>`,
})
export class SiBriefcaseMedicalDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBriefcasesDuotoneIcon],svg[si-briefcases-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.6 6H7.4A2.4 2.4 0 0 0 5 8.4v8.2A2.4 2.4 0 0 0 7.4 19h13.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 20.6 6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19 22H7.4C4.42 22 2 19.58 2 16.6V11m15 8V3.8a.8.8 0 0 0-.8-.8h-4.4a.8.8 0 0 0-.8.8V19M7.4 6h13.2A2.4 2.4 0 0 1 23 8.4v8.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V8.4A2.4 2.4 0 0 1 7.4 6"></svg:path></svg:g>`,
})
export class SiBriefcasesDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCancelPhotoDuotoneIcon],svg[si-cancel-photo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 22H8.4C5.42 22 3 19.58 3 16.6V5m13.828 8.828l-5.656-5.656m5.656 0l-5.656 5.656M8.4 3h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"></svg:path></svg:g>`,
})
export class SiCancelPhotoDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCancelPresentationDuotoneIcon],svg[si-cancel-presentation-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"></svg:path></svg:g>`,
})
export class SiCancelPresentationDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChatDuotoneIcon],svg[si-chat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3Z"></svg:path></svg:g>`,
})
export class SiChatDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChatTextDuotoneIcon],svg[si-chat-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 8h8m-8 3h8m3 5h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3"></svg:path></svg:g>`,
})
export class SiChatTextDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCheckAltDuotoneIcon],svg[si-check-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m5 14l6 6l8-15"></svg:path>`,
})
export class SiCheckAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCheckCircleDuotoneIcon],svg[si-check-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 13l3 3l5-7m6 3c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiCheckCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCheckDuotoneIcon],svg[si-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 13l5 5l9-11"></svg:path>`,
})
export class SiCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCheckSquareDuotoneIcon],svg[si-check-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 13l3 3l5-7M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiCheckSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChecklistAltDuotoneIcon],svg[si-checklist-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16 8l2 2l4-4M2 8h10m4 8l2 2l4-4M2 16h10"></svg:path>`,
})
export class SiChecklistAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChecklistDuotoneIcon],svg[si-checklist-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m2 8l2 2l4-4m4 2h10M2 16l2 2l4-4m4 2h10"></svg:path>`,
})
export class SiChecklistDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronLeftAltDuotoneIcon],svg[si-chevron-left-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 20l-8-8l8-8"></svg:path>`,
})
export class SiChevronLeftAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronLeftCircleDuotoneIcon],svg[si-chevron-left-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" stroke-miterlimit="10" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m14 16l-4-4l4-4"></svg:path></svg:g>`,
})
export class SiChevronLeftCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronLeftDuotoneIcon],svg[si-chevron-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 16l-4-4l4-4"></svg:path>`,
})
export class SiChevronLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronLeftSquareDuotoneIcon],svg[si-chevron-left-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" stroke-miterlimit="10" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m14 16l-4-4l4-4"></svg:path></svg:g>`,
})
export class SiChevronLeftSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronRightAltDuotoneIcon],svg[si-chevron-right-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 20l8-8l-8-8"></svg:path>`,
})
export class SiChevronRightAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronRightCircleDuotoneIcon],svg[si-chevron-right-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" stroke-miterlimit="10" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10 16l4-4l-4-4"></svg:path></svg:g>`,
})
export class SiChevronRightCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronRightDuotoneIcon],svg[si-chevron-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 16l4-4l-4-4"></svg:path>`,
})
export class SiChevronRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronRightSquareDuotoneIcon],svg[si-chevron-right-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 16l4-4l-4-4"></svg:path></svg:g>`,
})
export class SiChevronRightSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClearAllDuotoneIcon],svg[si-clear-all-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 12h12M4 16h12M8 8h12"></svg:path>`,
})
export class SiClearAllDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClearDayDuotoneIcon],svg[si-clear-day-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 4V2m0 20v-2m-8-8H2m20 0h-2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41m0 11.32l1.41 1.41M4.93 4.93l1.41 1.41M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path></svg:g>`,
})
export class SiClearDayDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClipboardAltDuotoneIcon],svg[si-clipboard-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M14 3a2 2 0 1 1-4 0H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 3a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10"></svg:path></svg:g>`,
})
export class SiClipboardAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClipboardCheckAltDuotoneIcon],svg[si-clipboard-check-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M14 3a2 2 0 1 1-4 0H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 3h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10m4 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0M8 14l3 3l5-7"></svg:path></svg:g>`,
})
export class SiClipboardCheckAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClipboardCheckDuotoneIcon],svg[si-clipboard-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H16v1.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8m0 11l3 3l5-7M8.8 1h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8"></svg:path></svg:g>`,
})
export class SiClipboardCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClipboardDuotoneIcon],svg[si-clipboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H16v1.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8m.8-2h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8"></svg:path></svg:g>`,
})
export class SiClipboardDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClipboardFilledAltDuotoneIcon],svg[si-clipboard-filled-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M14 3a2 2 0 1 1-4 0H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 3h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10m4 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0M7 13h10M7 10h10M7 16h6"></svg:path></svg:g>`,
})
export class SiClipboardFilledAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClipboardFilledDuotoneIcon],svg[si-clipboard-filled-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H16v1.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8M7 13h10M7 10h10M7 16h6M8.8 1h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8"></svg:path></svg:g>`,
})
export class SiClipboardFilledDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClockAltDuotoneIcon],svg[si-clock-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 6v5.844a.2.2 0 0 0 .152.194L16 13m6-1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiClockAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClockDuotoneIcon],svg[si-clock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 6v5.8a.2.2 0 0 1-.2.2H8m14 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiClockDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCloseCircleDuotoneIcon],svg[si-close-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiCloseCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCloseDuotoneIcon],svg[si-close-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757"></svg:path>`,
})
export class SiCloseDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCloseSquareDuotoneIcon],svg[si-close-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiCloseSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCloudDuotoneIcon],svg[si-cloud-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" clip-rule="evenodd"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4a5 5 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042q-.123.617-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4a5 5 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042q-.123.617-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82Z"></svg:path></svg:g>`,
})
export class SiCloudDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCodeDuotoneIcon],svg[si-code-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 6l-6 6l6 6m8 0l6-6l-6-6"></svg:path>`,
})
export class SiCodeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCodeMutedDuotoneIcon],svg[si-code-muted-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 8l-4 4l4 4m6 0l4-4l-4-4"></svg:path>`,
})
export class SiCodeMutedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siColumnsDuotoneIcon],svg[si-columns-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 21V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiColumnsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCopyAltDuotoneIcon],svg[si-copy-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.6 3H5.4A2.4 2.4 0 0 0 3 5.4v7.2A2.4 2.4 0 0 0 5.4 15h7.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 12.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 9h.6c1.33 0 2.4 1.07 2.4 2.4v7.2c0 1.33-1.07 2.4-2.4 2.4h-7.2C10.07 21 9 19.93 9 18.6V18M5.4 3h7.2A2.4 2.4 0 0 1 15 5.4v7.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 12.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiCopyAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCopyDuotoneIcon],svg[si-copy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 9h-7.2A2.4 2.4 0 0 0 9 11.4v7.2a2.4 2.4 0 0 0 2.4 2.4h7.2a2.4 2.4 0 0 0 2.4-2.4v-7.2A2.4 2.4 0 0 0 18.6 9"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 15h-.6C4.07 15 3 13.93 3 12.6V5.4C3 4.07 4.07 3 5.4 3h7.2C13.93 3 15 4.07 15 5.4V6m-3.6 3h7.2a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4h-7.2A2.4 2.4 0 0 1 9 18.6v-7.2A2.4 2.4 0 0 1 11.4 9"></svg:path></svg:g>`,
})
export class SiCopyDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCopyrightAltDuotoneIcon],svg[si-copyright-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M15.23 13.697C14.974 15.095 13.767 16 12.142 16c-2.076 0-3.373-1.535-3.373-3.992v-.01C8.77 9.534 10.062 8 12.137 8c1.61 0 2.865 1.011 3.092 2.478M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10Z"></svg:path></svg:g>`,
})
export class SiCopyrightAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCopyrightDuotoneIcon],svg[si-copyright-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15.33 10.238C14.876 8.865 13.795 8 12.227 8C10.164 8 8.66 9.643 8.66 12s1.503 4 3.567 4c1.568 0 2.65-.865 3.103-2.238M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10Z"></svg:path></svg:g>`,
})
export class SiCopyrightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCreditCardDetailedAltDuotoneIcon],svg[si-credit-card-detailed-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4V8H1V6.4A2.4 2.4 0 0 1 3.4 4M1 11v6.6A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V11z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M23 8H1v3h22z"></svg:path></svg:g>`,
})
export class SiCreditCardDetailedAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCreditCardDetailedDuotoneIcon],svg[si-credit-card-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4V8H1V6.4A2.4 2.4 0 0 1 3.4 4M1 11v6.6A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V11z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 14h-3M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M1 8h22v3H1z"></svg:path></svg:g>`,
})
export class SiCreditCardDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCreditCardDuotoneIcon],svg[si-credit-card-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 10h22M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path></svg:g>`,
})
export class SiCreditCardDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCrosshairDetailedDuotoneIcon],svg[si-crosshair-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-5 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12h4m12 0h4M12 22v-4m0-12V2m8 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-5 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g>`,
})
export class SiCrosshairDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCrosshairSimpleDuotoneIcon],svg[si-crosshair-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10h-4m-6 10C6.477 22 2 17.523 2 12m10 10v-4M2 12C2 6.477 6.477 2 12 2M2 12h4m6-10v4"></svg:path></svg:g>`,
})
export class SiCrosshairSimpleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDangerousDuotoneIcon],svg[si-dangerous-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m15 15l-3-3m0 0L9 9m3 3l3-3m-3 3l-3 3M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path></svg:g>`,
})
export class SiDangerousDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDashboardCustomizeDuotoneIcon],svg[si-dashboard-customize-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8.4 14H5.6A1.6 1.6 0 0 0 4 15.6v2.8A1.6 1.6 0 0 0 5.6 20h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 14m10-10h-2.8A1.6 1.6 0 0 0 14 5.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 20 8.4V5.6A1.6 1.6 0 0 0 18.4 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 17h6m-3 3v-6M5.6 4h2.8A1.6 1.6 0 0 1 10 5.6v2.8A1.6 1.6 0 0 1 8.4 10H5.6A1.6 1.6 0 0 1 4 8.4V5.6A1.6 1.6 0 0 1 5.6 4m0 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8A1.6 1.6 0 0 1 8.4 20H5.6A1.6 1.6 0 0 1 4 18.4v-2.8A1.6 1.6 0 0 1 5.6 14m10-10h2.8A1.6 1.6 0 0 1 20 5.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 14 8.4V5.6A1.6 1.6 0 0 1 15.6 4"></svg:path></svg:g>`,
})
export class SiDashboardCustomizeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDashboardDuotoneIcon],svg[si-dashboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8.4 15H5.6A1.6 1.6 0 0 0 4 16.6v2.8A1.6 1.6 0 0 0 5.6 21h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 15m10-12h-2.8A1.6 1.6 0 0 0 14 4.6v2.8A1.6 1.6 0 0 0 15.6 9h2.8A1.6 1.6 0 0 0 20 7.4V4.6A1.6 1.6 0 0 0 18.4 3"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.4 3H5.6A1.6 1.6 0 0 0 4 4.6v4.8A1.6 1.6 0 0 0 5.6 11h2.8A1.6 1.6 0 0 0 10 9.4V4.6A1.6 1.6 0 0 0 8.4 3Zm0 12H5.6A1.6 1.6 0 0 0 4 16.6v2.8A1.6 1.6 0 0 0 5.6 21h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 15Zm10-12h-2.8A1.6 1.6 0 0 0 14 4.6v2.8A1.6 1.6 0 0 0 15.6 9h2.8A1.6 1.6 0 0 0 20 7.4V4.6A1.6 1.6 0 0 0 18.4 3Zm0 10h-2.8a1.6 1.6 0 0 0-1.6 1.6v4.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-4.8a1.6 1.6 0 0 0-1.6-1.6Z"></svg:path></svg:g>`,
})
export class SiDashboardDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDashboardHorzDuotoneIcon],svg[si-dashboard-horz-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10 21v-9m-7 0h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiDashboardHorzDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDashboardVertDuotoneIcon],svg[si-dashboard-vert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 21V3m0 7h9M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiDashboardVertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDeleteAlarmDuotoneIcon],svg[si-delete-alarm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 21a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="m9.172 15.828l5.656-5.656m0 5.656l-5.656-5.656M18 3l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path></svg:g>`,
})
export class SiDeleteAlarmDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDiamondsFourDuotoneIcon],svg[si-diamonds-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#siDiamondsFourDuotone0)"><svg:path fill="currentColor" fill-opacity=".16" d="m3.798 8.889l-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0m14.142 0l-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.263 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.263 0"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m3.798 8.889l-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Zm7.071-7.071l-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.263 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.263 0Zm0 14.142l-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.263 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.263 0Zm7.071-7.071l-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Z"></svg:path></svg:g><svg:defs><svg:clippath id="siDiamondsFourDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiDiamondsFourDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDoubleArrowRightDuotoneIcon],svg[si-double-arrow-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13 16l4-4l-4-4m-6 8l4-4l-4-4"></svg:path>`,
})
export class SiDoubleArrowRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDownLeftDuotoneIcon],svg[si-down-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 15h9.6a4.4 4.4 0 0 0 4.4-4.4V5M5 15l4 4m-4-4l4-4"></svg:path>`,
})
export class SiDownLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDownRightDuotoneIcon],svg[si-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 15H9.4A4.4 4.4 0 0 1 5 10.6V5m14 10l-4 4m4-4l-4-4"></svg:path>`,
})
export class SiDownRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDownTwoHeadedDuotoneIcon],svg[si-down-two-headed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m0 0l-3-3m3 3l3-3m-6-5l3 3l3-3"></svg:path>`,
})
export class SiDownTwoHeadedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDownloadOfflineDuotoneIcon],svg[si-download-offline-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 11l4 4m0 0l4-4m-4 4V6m4 12H8m14-6c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiDownloadOfflineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDragHandleDuotoneIcon],svg[si-drag-handle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 10h16M4 14h16"></svg:path>`,
})
export class SiDragHandleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDragIndicatorAltDuotoneIcon],svg[si-drag-indicator-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10h1m-1 4h1m-1-8h1m-7 4h1m-1 4h1m5 4h1m-7 0h1M9 6h1"></svg:path>`,
})
export class SiDragIndicatorAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDragIndicatorDuotoneIcon],svg[si-drag-indicator-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-12a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-6 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM9 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path>`,
})
export class SiDragIndicatorDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siEditDetailedAltDuotoneIcon],svg[si-edit-detailed-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m4.929 19.071l.707-3.536l9.192-9.192l2.829 2.829l-9.193 9.192z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.071 7.757L8.464 18.364l-3.535.707l.707-3.535L16.243 4.929m2.828 2.828a2 2 0 0 0-2.828-2.828m2.828 2.828l-1.414 1.415l-2.829-2.829l1.415-1.414"></svg:path></svg:g>`,
})
export class SiEditDetailedAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siEditDetailedDuotoneIcon],svg[si-edit-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m4.929 19.071l.707-3.535l9.192-9.193l2.829 2.829l-9.193 9.192z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14.828 6.343l2.829 2.829m.566-5.091l1.697 1.697a.8.8 0 0 1 0 1.13L8.464 18.365l-3.535.707l.707-3.535L17.091 4.08a.8.8 0 0 1 1.132 0"></svg:path></svg:g>`,
})
export class SiEditDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siEditSimpleDuotoneIcon],svg[si-edit-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.92 5.777L18.222 4.08a.8.8 0 0 0-1.13 0L5.635 15.536L4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.92 5.777L18.222 4.08a.8.8 0 0 0-1.13 0L5.635 15.536L4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132Z"></svg:path></svg:g>`,
})
export class SiEditSimpleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siEjectDuotoneIcon],svg[si-eject-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m5 13l7-10l7 10z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m5 13l7-10l7 10zm0 4.8v2.4a.8.8 0 0 0 .8.8h12.4a.8.8 0 0 0 .8-.8v-2.4a.8.8 0 0 0-.8-.8H5.8a.8.8 0 0 0-.8.8Z"></svg:path></svg:g>`,
})
export class SiEjectDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siEqualizerDuotoneIcon],svg[si-equalizer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12h4m4 0h4m4 0h4M2 16h4m4 0h4m4 0h4M2 20h4m4 0h4m4 0h4M2 8h4m12 0h4m-4-4h4"></svg:path>`,
})
export class SiEqualizerDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siErrorDuotoneIcon],svg[si-error-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 16h.008M12 8v5M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path></svg:g>`,
})
export class SiErrorDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandLessAltDuotoneIcon],svg[si-expand-less-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 16l8-8l8 8"></svg:path>`,
})
export class SiExpandLessAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandLessCircleDuotoneIcon],svg[si-expand-less-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" stroke-miterlimit="10" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 14l4-4l4 4"></svg:path></svg:g>`,
})
export class SiExpandLessCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandLessDuotoneIcon],svg[si-expand-less-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 14l4-4l4 4"></svg:path>`,
})
export class SiExpandLessDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandLessSquareDuotoneIcon],svg[si-expand-less-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" stroke-miterlimit="10" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 14l4-4l4 4"></svg:path></svg:g>`,
})
export class SiExpandLessSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandMoreAltDuotoneIcon],svg[si-expand-more-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 8l8 8l8-8"></svg:path>`,
})
export class SiExpandMoreAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandMoreCircleDuotoneIcon],svg[si-expand-more-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" stroke-miterlimit="10" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 10l4 4l4-4"></svg:path></svg:g>`,
})
export class SiExpandMoreCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandMoreDuotoneIcon],svg[si-expand-more-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 10l4 4l4-4"></svg:path>`,
})
export class SiExpandMoreDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandMoreSquareDuotoneIcon],svg[si-expand-more-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" stroke-miterlimit="10" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 10l4 4l4-4"></svg:path></svg:g>`,
})
export class SiExpandMoreSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFactCheckDuotoneIcon],svg[si-fact-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 15h5m-5-3h5M5 9h5m3 3l2 2l4-4M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path></svg:g>`,
})
export class SiFactCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFeaturedPlaylistDuotoneIcon],svg[si-featured-playlist-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 9h8m-8 3h8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"></svg:path></svg:g>`,
})
export class SiFeaturedPlaylistDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFileDownloadDuotoneIcon],svg[si-file-download-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.53 11.47a.75.75 0 0 0-1.06 1.06zM12 16l-.53.53a.75.75 0 0 0 1.06 0zm4.53-3.47a.75.75 0 1 0-1.06-1.06zM12.75 4a.75.75 0 0 0-1.5 0zm7 13a.75.75 0 0 0-1.5 0zm-14 0a.75.75 0 0 0-1.5 0zm1.72-4.47l4 4l1.06-1.06l-4-4zm5.06 4l4-4l-1.06-1.06l-4 4zm.22-.53V4h-1.5v12zm5.5 1v.6h1.5V17zm0 .6c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15zm-1.65 1.65H7.4v1.5h9.2zm-9.2 0c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15zM5.75 17.6V17h-1.5v.6z"></svg:path>`,
})
export class SiFileDownloadDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFileUploadDuotoneIcon],svg[si-file-upload-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.47 7.47a.75.75 0 0 0 1.06 1.06zM12 4l.53-.53a.75.75 0 0 0-1.06 0zm3.47 4.53a.75.75 0 1 0 1.06-1.06zM11.25 16a.75.75 0 0 0 1.5 0zm8.5 1a.75.75 0 0 0-1.5 0zm-14 0a.75.75 0 0 0-1.5 0zm2.78-8.47l4-4l-1.06-1.06l-4 4zm2.94-4l4 4l1.06-1.06l-4-4zM11.25 4v12h1.5V4zm7 13v.6h1.5V17zm0 .6c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15zm-1.65 1.65H7.4v1.5h9.2zm-9.2 0c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15zM5.75 17.6V17h-1.5v.6z"></svg:path>`,
})
export class SiFileUploadDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFilterListAltDuotoneIcon],svg[si-filter-list-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 10h12M8 14h8m-6 4h4M4 6h16"></svg:path>`,
})
export class SiFilterListAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFilterListDuotoneIcon],svg[si-filter-list-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 12h12M4 8h16M8 16h8"></svg:path>`,
})
export class SiFilterListDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFilterNoneDuotoneIcon],svg[si-filter-none-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 22H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"></svg:path></svg:g>`,
})
export class SiFilterNoneDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFlareDuotoneIcon],svg[si-flare-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#siFlareDuotone0)"><svg:path fill="currentColor" fill-opacity=".16" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 12H1m22 0h-6m-5 5v6m3.536-7.464l1.414 1.414m-9.9-9.9l1.414 1.414m7.072 0L16.95 7.05m-9.9 9.9l1.414-1.414M12 1v6m2 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path></svg:g><svg:defs><svg:clippath id="siFlareDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiFlareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFlowLineDuotoneIcon],svg[si-flow-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class SiFlowLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFlowParallelDuotoneIcon],svg[si-flow-parallel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M7 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class SiFlowParallelDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlobeDetailedDuotoneIcon],svg[si-globe-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path fill="currentColor" d="M10.674 22.145a.75.75 0 1 0 1.193-.91zm1.259-19.466a.75.75 0 1 0-1.186-.918zm1.394-.914a.75.75 0 0 0-1.194.91zm-1.26 19.466a.75.75 0 1 0 1.186.918zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm-.133 18.485A15.2 15.2 0 0 1 8.75 12h-1.5a16.7 16.7 0 0 0 3.424 10.145zM8.75 12a15.23 15.23 0 0 1 3.183-9.32l-1.186-.92A16.74 16.74 0 0 0 7.25 12zm3.383-9.325a15.2 15.2 0 0 1 3.117 9.235h1.5c0-3.81-1.278-7.329-3.423-10.145zm3.117 9.235a15.23 15.23 0 0 1-3.183 9.32l1.186.92a16.74 16.74 0 0 0 3.497-10.24zM12 16.75c2.59 0 4.92 1.062 6.605 2.776l1.07-1.052A10.73 10.73 0 0 0 12 15.25zm6.604-12.274A9.2 9.2 0 0 1 12 7.25v1.5c3.01 0 5.73-1.237 7.676-3.226zM12 7.25a9.23 9.23 0 0 1-6.605-2.776l-1.07 1.052A10.73 10.73 0 0 0 12 8.75zM5.396 19.525A9.2 9.2 0 0 1 12 16.75v-1.5c-3.01 0-5.73 1.237-7.676 3.226zM2 12.75h20v-1.5H2z"></svg:path>`,
})
export class SiGlobeDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGridDuotoneIcon],svg[si-grid-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3m11 11h-3.8a1.6 1.6 0 0 0-1.6 1.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8a1.6 1.6 0 0 0-1.6-1.6"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3Zm11 0h-3.8A1.6 1.6 0 0 0 14 4.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8A1.6 1.6 0 0 0 21 8.4V4.6A1.6 1.6 0 0 0 19.4 3Zm-11 11H4.6A1.6 1.6 0 0 0 3 15.6v3.8A1.6 1.6 0 0 0 4.6 21h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8A1.6 1.6 0 0 0 8.4 14Zm11 0h-3.8a1.6 1.6 0 0 0-1.6 1.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8a1.6 1.6 0 0 0-1.6-1.6Z"></svg:path></svg:g>`,
})
export class SiGridDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGridOnDuotoneIcon],svg[si-grid-on-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 15h18M3 9h18M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiGridOnDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGridViewDuotoneIcon],svg[si-grid-view-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8.4 4H5.6A1.6 1.6 0 0 0 4 5.6v2.8A1.6 1.6 0 0 0 5.6 10h2.8A1.6 1.6 0 0 0 10 8.4V5.6A1.6 1.6 0 0 0 8.4 4m10 10h-2.8a1.6 1.6 0 0 0-1.6 1.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8a1.6 1.6 0 0 0-1.6-1.6"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.4 4H5.6A1.6 1.6 0 0 0 4 5.6v2.8A1.6 1.6 0 0 0 5.6 10h2.8A1.6 1.6 0 0 0 10 8.4V5.6A1.6 1.6 0 0 0 8.4 4Zm0 10H5.6A1.6 1.6 0 0 0 4 15.6v2.8A1.6 1.6 0 0 0 5.6 20h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 14Zm10-10h-2.8A1.6 1.6 0 0 0 14 5.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 20 8.4V5.6A1.6 1.6 0 0 0 18.4 4Zm0 10h-2.8a1.6 1.6 0 0 0-1.6 1.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8a1.6 1.6 0 0 0-1.6-1.6Z"></svg:path></svg:g>`,
})
export class SiGridViewDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siHammerAltDuotoneIcon],svg[si-hammer-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m13.707 11.607l-8.061 9.475a1.6 1.6 0 0 1-2.263 0l-.565-.566a1.6 1.6 0 0 1 0-2.262l9.475-8.062l-2.121-2.12l3.535-3.536l5.657 5.656l-3.536 3.536z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m18.657 6.657l-1.414-1.414m-3.536 6.364l-8.06 9.475a1.6 1.6 0 0 1-2.264 0l-.565-.566a1.6 1.6 0 0 1 0-2.262l9.475-8.062m3.536 3.536l3.535-3.536m-9.192-2.12l3.535-3.536m-5.09.848L11.02 2.98a.8.8 0 0 1 1.132 0l8.768 8.768a.8.8 0 0 1 0 1.131l-2.404 2.405a.8.8 0 0 1-1.132 0L8.616 6.515a.8.8 0 0 1 0-1.13"></svg:path></svg:g>`,
})
export class SiHammerAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siHammerDuotoneIcon],svg[si-hammer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.657 11.586l.53-.53a.75.75 0 0 0-1.06 0zm-2.121 2.121l.53.53zm-9.617 7.354l-.53.53zm-.566-.566l.53-.53zm0-2.262l.53.53zm7.354-7.354l-.53-.53zm2.122-2.122l.53.53a.75.75 0 0 0 0-1.06zm9.475 2.405l.53-.53zm-3.536 3.535l-.53.53zm-2.404-9.475l.53-.53zM3.52 4.692a.75.75 0 0 0 1.06 1.06zm10.607 6.363l-2.122 2.122l1.061 1.06l2.121-2.121zm-2.122 2.122L4.651 20.53l1.061 1.06l7.354-7.354zM4.651 20.53a.85.85 0 0 1-1.202 0l-1.06 1.06a2.35 2.35 0 0 0 3.323 0zm-1.202 0l-.565-.566l-1.06 1.06l.565.566zm-.565-.566a.85.85 0 0 1 0-1.202l-1.06-1.06a2.35 2.35 0 0 0 0 3.323zm0-1.202l7.354-7.354l-1.061-1.06l-7.354 7.353zm7.354-7.354l2.121-2.121l-1.06-1.061l-2.122 2.121zm10.535.283a.85.85 0 0 1 0 1.202l1.061 1.06a2.35 2.35 0 0 0 0-3.323zm0 1.202l-1.272 1.273l1.06 1.06l1.273-1.272zm-1.272 1.273a.85.85 0 0 1-1.202 0l-1.061 1.06a2.35 2.35 0 0 0 3.323 0zm-4.667-8.415l4.95 4.95l1.06-1.06l-4.95-4.95zm4.95 4.95l.99.99l1.06-1.06l-.99-.99zm-1.485 3.465l-.99-.99l-1.06 1.06l.989.99zm-.99-.99l-2.122-2.122l-1.06 1.061l2.121 2.121zm0 1.06l3.535-3.535l-1.06-1.06l-3.536 3.535zm-4.95-6.01l-4.95-4.95l-1.06 1.06l4.95 4.95zm.707 4.95l-2.828-2.829l-1.061 1.061l2.828 2.828zM4.581 5.752a7.25 7.25 0 0 1 10.253 0l1.06-1.06a8.75 8.75 0 0 0-12.374 0z"></svg:path><svg:path fill="currentColor" fill-opacity=".16" d="M21.304 13.424a1.6 1.6 0 0 0 0-2.262l-.99-.99l-3.536 3.535l.99.99a1.6 1.6 0 0 0 2.263 0zM5.182 21.061l7.354-7.354l-2.829-2.828l-7.354 7.354a1.6 1.6 0 0 0 0 2.262l.566.566a1.6 1.6 0 0 0 2.263 0"></svg:path>`,
})
export class SiHammerDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siHeartAltDuotoneIcon],svg[si-heart-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" clip-rule="evenodd"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M16.55 3.084a5.452 5.452 0 0 1 3.852 9.307l-.648.654l-.86.854l-6.852 6.852L5.19 13.9l-.86-.854l-.648-.654a5.453 5.453 0 1 1 7.706-7.712l.654.654l.655-.654a5.45 5.45 0 0 1 3.852-1.595"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16.55 3.084a5.452 5.452 0 0 1 3.852 9.307l-.648.654l-.86.854l-6.852 6.852L5.19 13.9l-.86-.854l-.648-.654a5.453 5.453 0 1 1 7.706-7.712l.654.654l.655-.654a5.45 5.45 0 0 1 3.852-1.595"></svg:path></svg:g>`,
})
export class SiHeartAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siHeartDuotoneIcon],svg[si-heart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"></svg:path></svg:g>`,
})
export class SiHeartDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siHomeDetailedDuotoneIcon],svg[si-home-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="M15 22h3.6a2.4 2.4 0 0 0 2.4-2.412V8.332c0-.382-.18-.734-.48-.965L12.7 2.24a1.195 1.195 0 0 0-1.44 0L3.48 7.367c-.3.231-.48.583-.48.965v11.256A2.4 2.4 0 0 0 5.4 22H9v-9.2c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8z"></svg:path><svg:path fill="currentColor" d="M.587 8.374a.75.75 0 1 0 .826 1.252zM11.26 2.24l.413.626l.035-.024zm1.44 0l-.448.602l.037.025zm9.889 7.387a.75.75 0 1 0 .823-1.254zM21.75 8a.75.75 0 0 0-1.5 0zm-18 0a.75.75 0 0 0-1.5 0zM15 22v.75h.75V22zm-6 0h-.75v.75H9zm9.75-19a.75.75 0 0 0-1.5 0zm-1.5 2a.75.75 0 0 0 1.5 0zM15 8.75a.75.75 0 0 0 0-1.5zm-6-1.5a.75.75 0 0 0 0 1.5zM1.413 9.626l10.26-6.76l-.826-1.252l-10.26 6.76zm10.295-6.784a.45.45 0 0 1 .544 0l.896-1.204a1.95 1.95 0 0 0-2.336 0zm.58.025l10.3 6.76l.823-1.254l-10.3-6.76zM20.25 8v11.6h1.5V8zm0 11.6c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15zm-1.65 1.65H5.4v1.5h13.2zm-13.2 0c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15zM3.75 19.6V8h-1.5v11.6zm6.05-6.85h4.4v-1.5H9.8zm4.4 0q.017 0 .035.015a.05.05 0 0 1 .015.035h1.5c0-.854-.696-1.55-1.55-1.55zm.05.05V22h1.5v-9.2zm.75 8.45H9v1.5h6zM9.75 22v-9.2h-1.5V22zm0-9.2q0-.017.015-.035a.05.05 0 0 1 .035-.015v-1.5c-.854 0-1.55.696-1.55 1.55zm7.5-9.8v2h1.5V3zM15 7.25H9v1.5h6z"></svg:path>`,
})
export class SiHomeDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siHomeDuotoneIcon],svg[si-home-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M15 22h3.6a2.4 2.4 0 0 0 2.4-2.412V8.332c0-.382-.18-.734-.48-.965L12.7 2.24a1.195 1.195 0 0 0-1.44 0L3.48 7.367c-.3.231-.48.583-.48.965v11.256A2.4 2.4 0 0 0 5.4 22H9v-9.2c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8z"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M18.6 22H5.4A2.4 2.4 0 0 1 3 19.588V8.332c0-.382.18-.734.48-.965l7.78-5.126a1.195 1.195 0 0 1 1.44 0l7.82 5.126c.3.231.48.583.48.965v11.256A2.4 2.4 0 0 1 18.6 22Z"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M9.8 12h4.4c.44 0 .8.36.8.8V22H9v-9.2c0-.44.36-.8.8-.8Z"></svg:path></svg:g>`,
})
export class SiHomeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siInfoDuotoneIcon],svg[si-info-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 8h.008M12 16v-5m10 1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiInfoDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siInputDuotoneIcon],svg[si-input-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 9V6.4A2.4 2.4 0 0 1 3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V15m12 1l4-4m0 0l-4-4m4 4H1"></svg:path>`,
})
export class SiInputDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siInsightsDuotoneIcon],svg[si-insights-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21H3.8a.8.8 0 0 1-.8-.8V3m3 11l4-4l4 4l7-7"></svg:path>`,
})
export class SiInsightsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siInventoryDuotoneIcon],svg[si-inventory-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7m5 4h8M2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3"></svg:path></svg:g>`,
})
export class SiInventoryDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siJsonAlt1DuotoneIcon],svg[si-json-alt-1-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 20h-.184c-1.626-.009-2.408-.306-2.408-2.01v-4.172c0-1.215-1.45-1.774-2.408-1.862v-.166c.967-.087 2.408-.69 2.408-1.887V6.01c0-1.695.782-2.001 2.408-2.01H7m10 16h.184c1.626-.009 2.408-.306 2.408-2.01v-4.172c0-1.215 1.45-1.774 2.408-1.862v-.166c-.967-.087-2.408-.69-2.408-1.887V6.01c0-1.695-.782-2.001-2.408-2.01H17M9 16v-1m3 1v-1m3 1v-1"></svg:path>`,
})
export class SiJsonAlt1DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siJsonAlt2DuotoneIcon],svg[si-json-alt-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.2 3h-.99q-.864 0-1.494.321q-.63.304-.954.911q-.306.59-.252 1.447l.27 3.535q.09.983-.306 1.393Q4.096 11 2.98 11H2v2h.98q1.116 0 1.494.393q.396.41.306 1.393l-.27 3.535q-.054.858.252 1.447q.324.607.954.91q.63.322 1.494.322h.99M16 3h.99q.864 0 1.494.321q.63.304.954.911q.306.59.252 1.447l-.27 3.535q-.09.983.306 1.393q.378.393 1.494.393h.98v2h-.98q-1.116 0-1.494.393q-.396.41-.306 1.393l.27 3.535q.054.858-.252 1.447a2.07 2.07 0 0 1-.954.91q-.63.322-1.494.322H16m-7-5v-1m3 1v-1m3 1v-1"></svg:path>`,
})
export class SiJsonAlt2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siJsonAlt3DuotoneIcon],svg[si-json-alt-3-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.998 15a22 22 0 0 1-.492 1.624q-.3.876-.662 1.73A39 39 0 0 1 10.16 20M6.835 4q-.747.022-1.297.242a1.86 1.86 0 0 0-.857.66q-.285.438-.285 1.164V9.23q0 1.12-.594 1.802q-.593.66-1.802.88v.131q1.23.22 1.802.901q.594.66.594 1.78v3.231q0 .704.285 1.143q.286.461.835.66q.55.219 1.32.241M17.164 4q.747.022 1.297.242q.55.219.857.66q.285.438.285 1.164V9.23q0 1.12.594 1.802q.593.66 1.802.88v.131q-1.23.22-1.802.901q-.594.66-.594 1.78v3.231q0 .704-.285 1.143q-.286.461-.835.66q-.55.219-1.32.241M13 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SiJsonAlt3DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siJsonAlt4DuotoneIcon],svg[si-json-alt-4-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 20h-.184c-1.626-.009-2.408-.306-2.408-2.01v-4.172c0-1.215-1.45-1.774-2.408-1.862v-.166c.967-.087 2.408-.69 2.408-1.887V6.01c0-1.695.782-2.001 2.408-2.01H7m10 16h.184c1.626-.009 2.408-.306 2.408-2.01v-4.172c0-1.215 1.45-1.774 2.408-1.862v-.166c-.967-.087-2.408-.69-2.408-1.887V6.01c0-1.695-.782-2.001-2.408-2.01H17m-5.002 11a22 22 0 0 1-.492 1.624q-.3.876-.662 1.73A39 39 0 0 1 10.16 20M13 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SiJsonAlt4DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siJsonAlt5DuotoneIcon],svg[si-json-alt-5-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11v-.75a.75.75 0 0 0-.75.75zm2.474-.393l-.54-.52zm.306-1.393l-.748.057l.001.012zM4.51 5.68l-.749.047l.001.01zm.252-1.447L4.1 3.88l-.004.008zm.954-.91l.326.675l.015-.007zM8.2 3.75a.75.75 0 0 0 0-1.5zM2 13h-.75c0 .414.336.75.75.75zm2.474.393l-.54.52zm.306 1.393l-.747-.069v.012zm-.27 3.535l-.748-.057v.01zm.252 1.447l-.666.345l.004.008zm.954.91l.34-.668l-.014-.007zM8.2 21.75a.75.75 0 0 0 0-1.5zM22.2 11h.75a.75.75 0 0 0-.75-.75zm-2.474-.393l.54-.52zm-.306-1.393l.747.069V9.27zm.27-3.535l.748.057v-.01zm-.252-1.447l.666-.346l-.004-.007zm-.954-.91l-.34.668l.014.007zM16 2.25a.75.75 0 0 0 0 1.5zM22.2 13v.75a.75.75 0 0 0 .75-.75zm-2.474.393l.54.52zm-.306 1.393l.748-.057l-.001-.012zm.27 3.535l.749-.047l-.001-.01zm-.252 1.447l.662.353l.004-.008zm-.954.91l-.326-.675l-.015.008zM16 20.25a.75.75 0 0 0 0 1.5zm-3.276-6.063a.75.75 0 0 0-1.453-.374zm-1.88 3.168l-.69-.294l-.005.01l-.004.011zm-1.37 1.34a.75.75 0 0 0 1.371.61zM2 11.75h.98v-1.5H2zm.98 0c.41 0 .79-.036 1.122-.123c.33-.087.66-.237.912-.5l-1.08-1.04c0-.001-.045.045-.213.09a3 3 0 0 1-.741.073zm2.034-.622c.496-.514.579-1.26.513-1.982l-1.494.137c.054.588-.067.77-.099.804zm.514-1.97l-.27-3.537l-1.496.115l.27 3.535zm-.27-3.527c-.03-.474.044-.812.17-1.053l-1.332-.691c-.282.544-.377 1.17-.335 1.839zm.166-1.046c.14-.262.339-.453.618-.588L5.39 2.646c-.56.27-.997.685-1.29 1.233zm.633-.595c.293-.15.67-.24 1.153-.24v-1.5c-.669 0-1.288.125-1.835.403zm1.153-.24h.99v-1.5h-.99zM2 13.75h.98v-1.5H2zm.98 0c.333 0 .575.03.74.074c.17.044.215.09.214.089l1.08-1.04c-.253-.263-.582-.413-.912-.5a4.5 4.5 0 0 0-1.122-.123zm.954.163c.032.034.153.216.1.804l1.493.137c.066-.721-.017-1.468-.513-1.982zm.098.816l-.27 3.535l1.496.114l.27-3.535zm-.27 3.545c-.043.669.052 1.295.334 1.84l1.332-.692c-.126-.241-.2-.579-.17-1.053zm.338 1.847c.293.548.73.963 1.29 1.233l.652-1.351a1.32 1.32 0 0 1-.618-.588zm1.275 1.226c.547.278 1.166.403 1.835.403v-1.5c-.483 0-.86-.09-1.153-.24zm1.835.403h.99v-1.5h-.99zM2.75 13v-2h-1.5v2zm19.45-2.75h-.98v1.5h.98zm-.98 0c-.333 0-.575-.03-.74-.074c-.17-.044-.215-.09-.213-.089l-1.081 1.04c.253.263.582.413.912.5a4.5 4.5 0 0 0 1.122.123zm-.954-.163c-.032-.034-.153-.216-.1-.804l-1.493-.137c-.066.721.018 1.468.513 1.982zm-.098-.816l.27-3.535l-1.496-.115l-.27 3.536zm.27-3.545c.043-.669-.052-1.295-.334-1.84l-1.332.692c.126.241.2.579.17 1.053zM20.1 3.879a2.82 2.82 0 0 0-1.29-1.233l-.652 1.351c.28.135.479.326.618.588zm-1.275-1.226c-.546-.278-1.166-.403-1.835-.403v1.5c.483 0 .86.09 1.153.24zM16.99 2.25H16v1.5h.99zm5.21 10h-.98v1.5h.98zm-.98 0c-.41 0-.79.036-1.122.123c-.33.087-.66.237-.912.5l1.08 1.04c0 .001.045-.045.213-.09c.166-.043.408-.073.741-.073zm-2.034.622c-.495.514-.579 1.26-.513 1.982l1.494-.137c-.054-.588.066-.77.099-.804zm-.514 1.97l.27 3.536l1.496-.114l-.27-3.535zm.27 3.527c.03.474-.044.812-.17 1.053l1.332.691c.282-.544.377-1.17.335-1.839zm-.166 1.046c-.14.262-.338.454-.618.588l.652 1.351c.56-.27.997-.685 1.29-1.233zm-.633.596c-.293.15-.67.239-1.153.239v1.5c.669 0 1.289-.125 1.835-.403zm-1.153.239H16v1.5h.99zM22.95 13v-2h-1.5v2zm-11.679.813q-.183.716-.475 1.569l1.42.484q.307-.899.508-1.68zm-.475 1.569a25 25 0 0 1-.643 1.68l1.38.586q.375-.879.683-1.782zm-.651 1.7a38 38 0 0 1-.67 1.613l1.37.61a40 40 0 0 0 .697-1.678zM12.25 9a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 13.75 9zm-.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75zM11.75 9a.25.25 0 0 1 .25-.25v-1.5A1.75 1.75 0 0 0 10.25 9zm.25-.25a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 12 7.25z"></svg:path>`,
})
export class SiJsonAlt5DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siJsonDuotoneIcon],svg[si-json-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 16v-1m3 1v-1m3 1v-1M6.835 4q-.747.022-1.297.242a1.86 1.86 0 0 0-.857.66q-.285.438-.285 1.164V9.23q0 1.12-.594 1.802q-.593.66-1.802.88v.131q1.23.22 1.802.901q.594.66.594 1.78v3.231q0 .704.285 1.143q.286.461.835.66q.55.219 1.32.241M17.164 4q.747.022 1.297.242q.55.219.857.66q.285.438.285 1.164V9.23q0 1.12.594 1.802q.593.66 1.802.88v.131q-1.23.22-1.802.901q-.594.66-.594 1.78v3.231q0 .704-.285 1.143q-.286.461-.835.66q-.55.219-1.32.241"></svg:path>`,
})
export class SiJsonDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siKeypadDuotoneIcon],svg[si-keypad-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M5 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7-7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-7-7a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM5 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path></svg:g>`,
})
export class SiKeypadDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLeftDownDuotoneIcon],svg[si-left-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V9.4A4.4 4.4 0 0 1 13.4 5H19M9 19l-4-4m4 4l4-4"></svg:path>`,
})
export class SiLeftDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLeftRightDuotoneIcon],svg[si-left-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m16 0l-3-3m3 3l-3 3M4 12l3-3m-3 3l3 3"></svg:path>`,
})
export class SiLeftRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLeftTwoHeadedDuotoneIcon],svg[si-left-two-headed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m0 0l3-3m-3 3l3 3m5-6l-3 3l3 3"></svg:path>`,
})
export class SiLeftTwoHeadedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLeftUpDuotoneIcon],svg[si-left-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 5v9.6a4.4 4.4 0 0 0 4.4 4.4H19M9 5L5 9m4-4l4 4"></svg:path>`,
})
export class SiLeftUpDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLibraryBooksDuotoneIcon],svg[si-library-books-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10 11h8m-8 3h4m-4-6h8m2 14H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"></svg:path></svg:g>`,
})
export class SiLibraryBooksDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLightModeDuotoneIcon],svg[si-light-mode-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#siLightModeDuotone0)"><svg:path fill="currentColor" fill-opacity=".16" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 12H1m22 0h-4M7.05 7.05L4.222 4.222m15.556 15.556L16.95 16.95m-9.9 0l-2.828 2.828M19.778 4.222L16.95 7.05M12 19v4m0-22v4m4 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path></svg:g><svg:defs><svg:clippath id="siLightModeDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiLightModeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLockAltDuotoneIcon],svg[si-lock-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 11V7c0-2.21 1.79-4 4-4s4 1.79 4 4v4M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6m8.4 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SiLockAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLockDuotoneIcon],svg[si-lock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M6.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3m-4 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 0v3m-5.4-8h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path></svg:g>`,
})
export class SiLockDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLockMutedDuotoneIcon],svg[si-lock-muted-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" d="M6.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3m-9.4 0h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path></svg:g>`,
})
export class SiLockMutedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMailDuotoneIcon],svg[si-mail-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M3.2 4h17.6c.66 0 1.2.54 1.2 1.2v12.4c0 1.32-1.08 2.4-2.4 2.4H4.4C3.08 20 2 18.92 2 17.6V5.2C2 4.54 2.54 4 3.2 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 7.06l6.87 5.89c.07.06.19.06.26 0L19 7.06M3.2 4h17.6c.66 0 1.2.54 1.2 1.2v12.4c0 1.32-1.08 2.4-2.4 2.4H4.4C3.08 20 2 18.92 2 17.6V5.2C2 4.54 2.54 4 3.2 4"></svg:path></svg:g>`,
})
export class SiMailDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMemoryDuotoneIcon],svg[si-memory-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M7.4 5h9.2A2.4 2.4 0 0 1 19 7.4v9.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V7.4A2.4 2.4 0 0 1 7.4 5m3.2 4h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 13.4v-2.8A1.6 1.6 0 0 1 10.6 9" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 5V3m-4 2V3m4 18v-2m-4 2v-2m11-5h-2m2-4h-2M5 14H3m2-4H3m4.4-5h9.2A2.4 2.4 0 0 1 19 7.4v9.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V7.4A2.4 2.4 0 0 1 7.4 5m3.2 4h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 13.4v-2.8A1.6 1.6 0 0 1 10.6 9"></svg:path></svg:g>`,
})
export class SiMemoryDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMicDetailedDuotoneIcon],svg[si-mic-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 1a6 6 0 0 0-6 6v6a6 6 0 0 0 12 0V7a6 6 0 0 0-6-6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 23h12m-6 0v-4m0 0a6 6 0 0 0 6-6V7A6 6 0 0 0 6 7v6a6 6 0 0 0 6 6m0-9h.1m2.9 0h.1M9 10h.1M12 7h.1M15 7h.1M9 7h.1m2.9 6h.1m-.1 3h.1M12 4h.1m2.9 9h.1M9 13h.1"></svg:path></svg:g>`,
})
export class SiMicDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMicDuotoneIcon],svg[si-mic-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 17c-2.75 0-5-2.172-5-4.828V5.828C7 3.172 9.25 1 12 1s5 2.172 5 4.828v6.344C17 14.828 14.75 17 12 17"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 23v-3m0 0a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m-8 5c-2.75 0-5-2.172-5-4.828V5.828C7 3.172 9.25 1 12 1s5 2.172 5 4.828v6.344C17 14.828 14.75 17 12 17"></svg:path></svg:g>`,
})
export class SiMicDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoneyDuotoneIcon],svg[si-money-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.2 9H2.8a.8.8 0 0 0-.8.8v8.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V9.8a.8.8 0 0 0-.8-.8"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 9V6.8c0-.44.36-.8.8-.8h16.4c.44 0 .8.36.8.8v8.4c0 .44-.36.8-.8.8H20M2.8 9h16.4a.8.8 0 0 1 .8.8v8.4a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V9.8a.8.8 0 0 1 .8-.8Zm9.2 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path></svg:g>`,
})
export class SiMoneyDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoonDuotoneIcon],svg[si-moon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.4 10.4 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205c1.026-1.026 1.846-2.051 2.256-3.282c-3.896 1.436-8.409.82-11.486-2.256"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.4 10.4 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205c1.026-1.026 1.846-2.051 2.256-3.282c-3.896 1.436-8.409.82-11.486-2.256"></svg:path></svg:g>`,
})
export class SiMoonDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizCircleDuotoneIcon],svg[si-more-horiz-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreHorizCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizDuotoneIcon],svg[si-more-horiz-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-7 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m14 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-7 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm14 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreHorizDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizSquareDuotoneIcon],svg[si-more-horiz-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreHorizSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizCircleDuotoneIcon],svg[si-more-muted-horiz-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12v.1M8 12v.1m8-.1v.1m6-.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiMoreMutedHorizCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizDuotoneIcon],svg[si-more-muted-horiz-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12v1m-6-1v1m12-1v1"></svg:path>`,
})
export class SiMoreMutedHorizDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedHorizSquareDuotoneIcon],svg[si-more-muted-horiz-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 12v.1M8 12v.1m8-.1v.1M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"></svg:path></svg:g>`,
})
export class SiMoreMutedHorizSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertCircleDuotoneIcon],svg[si-more-muted-vert-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.95 12.05h.1m-.1 4h.1m-.1-8h.1M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiMoreMutedVertCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertDuotoneIcon],svg[si-more-muted-vert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12h1m-1 6h1M12 6h1"></svg:path>`,
})
export class SiMoreMutedVertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertSquareDuotoneIcon],svg[si-more-muted-vert-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.95 12.05h.1m-.1 4h.1m-.1-8h.1M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiMoreMutedVertSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreSquareHorizDuotoneIcon],svg[si-more-square-horiz-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533m7 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533m-14 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 6 12.467v-.934A.533.533 0 0 0 5.467 11"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm7 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm-14 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 6 12.467v-.934A.533.533 0 0 0 5.467 11Z"></svg:path></svg:g>`,
})
export class SiMoreSquareHorizDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreSquareVertDuotoneIcon],svg[si-more-square-vert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533m0 7h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533m0-14h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 13 5.467v-.934A.533.533 0 0 0 12.467 4"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0 7h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0-14h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 13 5.467v-.934A.533.533 0 0 0 12.467 4Z"></svg:path></svg:g>`,
})
export class SiMoreSquareVertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreVertCircleDuotoneIcon],svg[si-more-vert-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-10a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreVertCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreVertDuotoneIcon],svg[si-more-vert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-14a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-14a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreVertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoreVertSquareDuotoneIcon],svg[si-more-vert-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-10a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreVertSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMoveDuotoneIcon],svg[si-move-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m19 15l3-3m0 0l-3-3m3 3H2m0 0l3 3m-3-3l3-3m10-4l-3-3m0 0L9 5m3-3v20m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class SiMoveDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMovieDuotoneIcon],svg[si-movie-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="M23 9H1v9.6A2.4 2.4 0 0 0 3.4 21h17.2a2.4 2.4 0 0 0 2.4-2.4z"></svg:path><svg:path fill="currentColor" d="M14.289 8.763a.75.75 0 1 0 1.422.474zm3.423-5.526a.75.75 0 1 0-1.424-.474zM6.288 8.763a.75.75 0 1 0 1.424.474zm3.424-5.526a.75.75 0 1 0-1.424-.474zM3.4 3.75h17.2v-1.5H3.4zm17.2 0c.911 0 1.65.739 1.65 1.65h1.5a3.15 3.15 0 0 0-3.15-3.15zm1.65 1.65v13.2h1.5V5.4zm0 13.2a1.65 1.65 0 0 1-1.65 1.65v1.5a3.15 3.15 0 0 0 3.15-3.15zm-1.65 1.65H3.4v1.5h17.2zm-17.2 0a1.65 1.65 0 0 1-1.65-1.65H.25a3.15 3.15 0 0 0 3.15 3.15zM1.75 18.6V5.4H.25v13.2zm0-13.2c0-.911.739-1.65 1.65-1.65v-1.5A3.15 3.15 0 0 0 .25 5.4zM1 9.75h22v-1.5H1zm14.712-.513l2-6l-1.424-.474l-2 6zm-8 0l2-6l-1.424-.474l-2 6z"></svg:path>`,
})
export class SiMovieDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastCircleDuotoneIcon],svg[si-north-east-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 16l8-8m0 0v5m0-5h-5m11 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiNorthEastCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastDuotoneIcon],svg[si-north-east-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 16l8-8m0 0v5m0-5h-5"></svg:path>`,
})
export class SiNorthEastDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastEscapeAltDuotoneIcon],svg[si-north-east-escape-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m10 14l8-8m0 0v4m0-4h-4M9 9h-.6C7.07 9 6 10.07 6 11.4v4.2C6 16.93 7.07 18 8.4 18h4.2c1.33 0 2.4-1.07 2.4-2.4V15"></svg:path>`,
})
export class SiNorthEastEscapeAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastEscapeDuotoneIcon],svg[si-north-east-escape-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h-.6C7.07 7 6 8.07 6 9.4v6.2C6 16.93 7.07 18 8.4 18h6.2c1.33 0 2.4-1.07 2.4-2.4V15m-7-1l8-8m0 0h-4m4 0v4"></svg:path>`,
})
export class SiNorthEastEscapeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthEastSquareDuotoneIcon],svg[si-north-east-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 16l8-8m0 0v5m0-5h-5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiNorthEastSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestCircleDuotoneIcon],svg[si-north-west-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 16L8 8m0 0v5m0-5h5m9 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiNorthWestCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestDuotoneIcon],svg[si-north-west-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 16L8 8m0 0v5m0-5h5"></svg:path>`,
})
export class SiNorthWestDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestEscapeAltDuotoneIcon],svg[si-north-west-escape-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 14L6 6m0 0v4m0-4h4m5 3h.6c1.33 0 2.4 1.07 2.4 2.4v4.2c0 1.33-1.07 2.4-2.4 2.4h-4.2C10.07 18 9 16.93 9 15.6V15"></svg:path>`,
})
export class SiNorthWestEscapeAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestEscapeDuotoneIcon],svg[si-north-west-escape-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7h.6C16.93 7 18 8.07 18 9.4v6.2c0 1.33-1.07 2.4-2.4 2.4H9.4C8.07 18 7 16.93 7 15.6V15m7-1L6 6m0 0h4M6 6v4"></svg:path>`,
})
export class SiNorthWestEscapeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthWestSquareDuotoneIcon],svg[si-north-west-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 16L8 8m0 0v5m0-5h5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiNorthWestSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNortheastSouthwestDuotoneIcon],svg[si-northeast-southwest-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6L6 18M18 6v4m0-4h-4M6 18v-4m0 4h4"></svg:path>`,
})
export class SiNortheastSouthwestDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNorthwestSoutheastDuotoneIcon],svg[si-northwest-southeast-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 6l12 12M6 6v4m0-4h4m8 12v-4m0 4h-4"></svg:path>`,
})
export class SiNorthwestSoutheastDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNotificationsAltDuotoneIcon],svg[si-notifications-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M5 18a1 1 0 0 1-.894-1.447L6 12.764V10c0-3.728 2.55-6.86 6-7.748c3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 18a4 4 0 0 1-8 0m-3 0a1 1 0 0 1-.894-1.447L6 12.763V10c0-3.728 2.55-6.86 6-7.748c3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18z"></svg:path></svg:g>`,
})
export class SiNotificationsAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNotificationsDuotoneIcon],svg[si-notifications-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6m0 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 14H4m10 2a2 2 0 1 1-4 0"></svg:path></svg:g>`,
})
export class SiNotificationsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siNotificationsThickDuotoneIcon],svg[si-notifications-thick-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M3 18h18a1 1 0 0 0 .894-1.447L20 12.763V10a8 8 0 1 0-16 0v2.764l-1.894 3.789A1 1 0 0 0 3 18"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 18H3a1 1 0 0 1-.894-1.447L4 12.763V10a8 8 0 1 1 16 0v2.764l1.894 3.789A1 1 0 0 1 21 18h-5m-8 0h8m-8 0a4 4 0 0 0 8 0"></svg:path></svg:g>`,
})
export class SiNotificationsThickDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siOctagonCheckDuotoneIcon],svg[si-octagon-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 13l3 3l5-7M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path></svg:g>`,
})
export class SiOctagonCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siOctagonDuotoneIcon],svg[si-octagon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path></svg:g>`,
})
export class SiOctagonDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPauseDuotoneIcon],svg[si-pause-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.2 3h-4.4a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8m-12 0H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.2 3h-4.4a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Zm-12 0H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"></svg:path></svg:g>`,
})
export class SiPauseDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPausePresentationDuotoneIcon],svg[si-pause-presentation-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 16V8m-4 8V8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path></svg:g>`,
})
export class SiPausePresentationDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneAddCallDuotoneIcon],svg[si-phone-add-call-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path fill="currentColor" d="m7.18 10.27l-.44-.607l-.713.518l.625.62zm6.504 6.46l-.529.533l.571.567l.526-.61zm7.316.924l.748.052a.8.8 0 0 0-.038-.294zm-14.284-3l.516-.545l-.003-.002zM6.252 3l.242-.71l-.13-.044l-.139.004zM20 7.75a.75.75 0 0 0 0-1.5zm-6-1.5a.75.75 0 0 0 0 1.5zM17.75 4a.75.75 0 0 0-1.5 0zm-1.5 6a.75.75 0 0 0 1.5 0zm-9.598.801l6.503 6.462l1.058-1.064l-6.504-6.462zm7.6 6.42a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021c.586-.19 1.125-.178 1.624.129c.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38c-.97-.598-1.992-.564-2.873-.278c-.862.28-1.633.812-2.214 1.297c-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007v.01l-.01.067a2 2 0 0 1-.07.286a2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962c.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14c-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075c1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602c.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005l-.144.016a4 4 0 0 0-.465.098a4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855c.284.522.237 1.087-.05 1.706c-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001l.442.606c.44.607.441.607.441.606h.001l.002-.002l.005-.003l.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614c.521-.51 1.175-1.254 1.578-2.123c.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zM20 6.25h-6v1.5h6zM16.25 4v6h1.5V4z"></svg:path>`,
})
export class SiPhoneAddCallDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneCallbackDuotoneIcon],svg[si-phone-callback-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path fill="currentColor" d="m7.18 10.27l-.44-.607l-.713.518l.625.62zm6.504 6.46l-.529.533l.571.567l.526-.61zm7.316.924l.748.052a.8.8 0 0 0-.038-.294zm-14.284-3l.516-.545l-.003-.002zM6.252 3l.242-.71l-.13-.044l-.139.004zm8.67 2.586a.75.75 0 0 0-1.5 0zm-.75 4.242h-.75v.75h.75zm4.242.75a.75.75 0 0 0 0-1.5zm1.945-5.876a.75.75 0 0 0-1.06-1.06zm-13.707 6.1l6.503 6.46l1.058-1.063l-6.504-6.462zm7.6 6.419a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021c.586-.19 1.125-.178 1.624.129c.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38c-.97-.598-1.992-.564-2.873-.278c-.862.28-1.633.812-2.214 1.297c-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007v.01l-.01.067a2 2 0 0 1-.07.286a2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962c.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14c-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075c1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602c.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005l-.144.016a4 4 0 0 0-.465.098a4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855c.284.522.237 1.087-.05 1.706c-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001l.442.606c.44.607.441.607.441.606h.001l.002-.002l.005-.003l.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614c.521-.51 1.175-1.254 1.578-2.123c.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zm7.412 1.876v4.242h1.5V5.586zm.75 4.992h4.242v-1.5h-4.242zm.53-.22l5.657-5.656l-1.06-1.06l-5.658 5.656z"></svg:path>`,
})
export class SiPhoneCallbackDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneDuotoneIcon],svg[si-phone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"></svg:path></svg:g>`,
})
export class SiPhoneDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneEnabledDuotoneIcon],svg[si-phone-enabled-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m16.82 10.27l-6.504 6.46c-.697-.807-5.11-5.538-7.316.924c0 0 .232 3.346 4.994 3.346c3.367 0 6.851-4.038 9.29-6.346c2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16.82 10.27l-6.504 6.46c-.697-.807-5.11-5.538-7.316.924c0 0 .232 3.346 4.994 3.346c3.367 0 6.851-4.038 9.29-6.346c2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27Z"></svg:path></svg:g>`,
})
export class SiPhoneEnabledDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneForwardedDuotoneIcon],svg[si-phone-forwarded-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path fill="currentColor" d="m7.18 10.27l-.44-.607l-.713.518l.625.62zm6.504 6.46l-.529.533l.571.567l.526-.61zm7.316.924l.748.052a.8.8 0 0 0-.038-.294zm-14.284-3l.516-.545l-.003-.002zM6.252 3l.242-.71l-.13-.044l-.139.004zM17.47 9.47a.75.75 0 1 0 1.06 1.06zM21 7l.53.53l.53-.53l-.53-.53zm-2.47-3.53a.75.75 0 1 0-1.06 1.06zM13 6.25a.75.75 0 0 0 0 1.5zm-6.348 4.551l6.503 6.462l1.058-1.064l-6.504-6.462zm7.6 6.42a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021c.586-.19 1.125-.178 1.624.129c.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38c-.97-.598-1.992-.564-2.873-.278c-.862.28-1.633.812-2.214 1.297c-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007v.01l-.01.067a2 2 0 0 1-.07.286a2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962c.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14c-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075c1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602c.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005l-.144.016a4 4 0 0 0-.465.098a4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855c.284.522.237 1.087-.05 1.706c-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001l.442.606c.44.607.441.607.441.606h.001l.002-.002l.005-.003l.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614c.521-.51 1.175-1.254 1.578-2.123c.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zm12.52 6.82l3-3l-1.06-1.06l-3 3zm3-4.06l-3-3l-1.06 1.06l3 3zM21 6.25h-8v1.5h8z"></svg:path>`,
})
export class SiPhoneForwardedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhoneLockedDuotoneIcon],svg[si-phone-locked-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path fill="currentColor" d="m7.18 10.27l-.44-.607l-.713.518l.625.62zm6.504 6.46l-.529.533l.571.567l.526-.61zm7.316.924l.748.052a.8.8 0 0 0-.038-.294zm-14.284-3l.516-.545l-.003-.002zM6.252 3l.242-.71l-.13-.044l-.139.004zm8.498 3.5a.75.75 0 1 0 1.5 0zm4 0a.75.75 0 1 0 1.5 0zM6.652 10.801l6.503 6.462l1.058-1.064l-6.504-6.462zm7.6 6.42a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021c.586-.19 1.125-.178 1.624.129c.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38c-.97-.598-1.992-.564-2.873-.278c-.862.28-1.633.812-2.214 1.297c-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007v.01l-.01.067a2 2 0 0 1-.07.286a2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962c.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14c-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075c1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602c.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005l-.144.016a4 4 0 0 0-.465.098a4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855c.284.522.237 1.087-.05 1.706c-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001l.442.606c.44.607.441.607.441.606h.001l.002-.002l.005-.003l.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614c.521-.51 1.175-1.254 1.578-2.123c.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zm8.79 4.04h5.4v-1.5h-5.4zm5.4 0q.017 0 .035.015a.05.05 0 0 1 .015.035h1.5c0-.854-.696-1.55-1.55-1.55zm.05.05v2h1.5v-2zm0 2c0 .246-.204.45-.45.45v1.5c1.074 0 1.95-.876 1.95-1.95zm-.45.45h-4.6v1.5h4.6zm-4.6 0a.454.454 0 0 1-.45-.45h-1.5c0 1.074.876 1.95 1.95 1.95zm-.45-.45v-2h-1.5v2zm0-2q0-.017.015-.035a.05.05 0 0 1 .035-.015v-1.5c-.854 0-1.55.696-1.55 1.55zm2.75-5.55A2.75 2.75 0 0 0 14.75 5h1.5c0-.69.56-1.25 1.25-1.25zM14.75 5v1.5h1.5V5zm5.5 1.5V5h-1.5v1.5zm0-1.5a2.75 2.75 0 0 0-2.75-2.75v1.5c.69 0 1.25.56 1.25 1.25z"></svg:path>`,
})
export class SiPhoneLockedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPhonePausedDuotoneIcon],svg[si-phone-paused-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path fill="currentColor" d="m7.18 10.27l-.44-.607l-.713.518l.625.62zm6.504 6.46l-.529.533l.571.567l.526-.61zm7.316.924l.748.052a.8.8 0 0 0-.038-.294zm-14.284-3l.516-.545l-.003-.002zM6.252 3l.242-.71l-.13-.044l-.139.004zM19.25 9a.75.75 0 0 0 1.5 0zm1.5-6a.75.75 0 0 0-1.5 0zm-5.5 6a.75.75 0 0 0 1.5 0zm1.5-6a.75.75 0 0 0-1.5 0zM6.652 10.801l6.503 6.462l1.058-1.064l-6.504-6.462zm7.6 6.42a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021c.586-.19 1.125-.178 1.624.129c.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38c-.97-.598-1.992-.564-2.873-.278c-.862.28-1.633.812-2.214 1.297c-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007v.01l-.01.067a2 2 0 0 1-.07.286a2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962c.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14c-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075c1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602c.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005l-.144.016a4 4 0 0 0-.465.098a4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855c.284.522.237 1.087-.05 1.706c-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001l.442.606c.44.607.441.607.441.606h.001l.002-.002l.005-.003l.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614c.521-.51 1.175-1.254 1.578-2.123c.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zM20.75 9V3h-1.5v6zm-4 0V3h-1.5v6z"></svg:path>`,
})
export class SiPhonePausedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayDuotoneIcon],svg[si-play-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m5 3l16 9l-16 9z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="m5 3l16 9l-16 9z"></svg:path></svg:g>`,
})
export class SiPlayDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayForwardDuotoneIcon],svg[si-play-forward-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m4 5l10 7l-10 7z"></svg:path><svg:path fill="currentColor" d="m21 12l.43.614a.75.75 0 0 0 0-1.228zM11 5l.43-.614A.75.75 0 0 0 10.25 5zm0 14h-.75a.75.75 0 0 0 1.18.614zm.75-4.867a.75.75 0 0 0-1.5 0zM14 12l.43.614a.75.75 0 0 0 0-1.228zM4 5l.43-.614A.75.75 0 0 0 3.25 5zm0 14h-.75a.75.75 0 0 0 1.18.614zm17.43-7.614l-10-7l-.86 1.228l10 7zm-10 8.228l10-7l-.86-1.228l-10 7zM10.25 5v4.688h1.5V5zm0 9.133V19h1.5v-4.867zm4.18-2.747l-10-7l-.86 1.228l10 7zM3.25 5v14h1.5V5zm1.18 14.614l10-7l-.86-1.228l-10 7z"></svg:path>`,
})
export class SiPlayForwardDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayNextDuotoneIcon],svg[si-play-next-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m3 5l10 7l-10 7z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m3 5l10 7l-10 7zm17.2 0h-2.4a.8.8 0 0 0-.8.8v12.4a.8.8 0 0 0 .8.8h2.4a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8Z"></svg:path></svg:g>`,
})
export class SiPlayNextDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayPreviousDuotoneIcon],svg[si-play-previous-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m21 5l-10 7l10 7z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 5l-10 7l10 7zM3.8 5h2.4a.8.8 0 0 1 .8.8v12.4a.8.8 0 0 1-.8.8H3.8a.8.8 0 0 1-.8-.8V5.8a.8.8 0 0 1 .8-.8Z"></svg:path></svg:g>`,
})
export class SiPlayPreviousDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPlayRewindDuotoneIcon],svg[si-play-rewind-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m20 5l-10 7l10 7z"></svg:path><svg:path fill="currentColor" d="m3 12l-.43-.614a.75.75 0 0 0 0 1.228zm10-7h.75a.75.75 0 0 0-1.18-.614zm0 14l-.43.614A.75.75 0 0 0 13.75 19zm.75-4.867a.75.75 0 0 0-1.5 0zM10 12l-.43-.614a.75.75 0 0 0 0 1.228zm10-7h.75a.75.75 0 0 0-1.18-.614zm0 14l-.43.614A.75.75 0 0 0 20.75 19zM3.43 12.614l10-7l-.86-1.228l-10 7zm10 5.772l-10-7l-.86 1.228l10 7zM12.25 5v4.688h1.5V5zm0 9.133V19h1.5v-4.867zm-1.82-1.519l10-7l-.86-1.228l-10 7zM19.25 5v14h1.5V5zm1.18 13.386l-10-7l-.86 1.228l10 7z"></svg:path>`,
})
export class SiPlayRewindDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siProjectsAltDuotoneIcon],svg[si-projects-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 12V6m-5 8V6m10 10V6M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiProjectsAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siProjectsDuotoneIcon],svg[si-projects-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 21V3m-7 7h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiProjectsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siPullRequestDuotoneIcon],svg[si-pull-request-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0M6 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 16v-5.6A4.4 4.4 0 0 0 13.6 6H11m7 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4M11 6l2-2m-2 2l2 2m-7 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class SiPullRequestDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRecordDuotoneIcon],svg[si-record-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path></svg:g>`,
})
export class SiRecordDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveAlarmDuotoneIcon],svg[si-remove-alarm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 21a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 13h8m2-10l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class SiRemoveAlarmDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveCircleDuotoneIcon],svg[si-remove-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiRemoveCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveDuotoneIcon],svg[si-remove-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 12h12"></svg:path>`,
})
export class SiRemoveDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveFromLibraryDuotoneIcon],svg[si-remove-from-library-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10 11h8m2 11H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"></svg:path></svg:g>`,
})
export class SiRemoveFromLibraryDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRemoveSquareDuotoneIcon],svg[si-remove-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12h8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiRemoveSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siReorderAltDuotoneIcon],svg[si-reorder-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12h16M4 16h16M4 20h16M4 8h16M4 4h16"></svg:path>`,
})
export class SiReorderAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siReorderDuotoneIcon],svg[si-reorder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12h16M4 15h16M4 18h16M4 9h16M4 6h16"></svg:path>`,
})
export class SiReorderDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRightTwoHeadedDuotoneIcon],svg[si-right-two-headed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-3-3m3 3l-3 3m-5-6l3 3l-3 3"></svg:path>`,
})
export class SiRightTwoHeadedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siRupeeDuotoneIcon],svg[si-rupee-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 4h3.75c1.393 0 2.728.474 3.713 1.318S16 7.307 16 8.5s-.553 2.338-1.537 3.182c-.985.844-2.32 1.318-3.712 1.318H7l8.2 7M7 8.5h11M11 4h7"></svg:path>`,
})
export class SiRupeeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSearchAltDuotoneIcon],svg[si-search-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-7.5-7.5M15 9A6 6 0 1 1 3 9a6 6 0 0 1 12 0"></svg:path></svg:g>`,
})
export class SiSearchAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSearchDuotoneIcon],svg[si-search-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M11 19a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class SiSearchDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSegmentDuotoneIcon],svg[si-segment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 12h8M4 8h16m-8 8h8"></svg:path>`,
})
export class SiSegmentDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsAltDuotoneIcon],svg[si-settings-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siSettingsAltDuotone0)"><svg:path fill-opacity=".16" fill-rule="evenodd" d="M18.71 10h2.69c.88 0 1.6.72 1.6 1.6v.8c0 .88-.72 1.6-1.6 1.6h-2.69c-.14.47-.32.91-.55 1.33l1.9 1.9c.62.62.62 1.64 0 2.26l-.57.57c-.62.62-1.64.62-2.26 0l-1.9-1.9c-.42.23-.86.41-1.33.55v2.69c0 .88-.72 1.6-1.6 1.6h-.8c-.88 0-1.6-.72-1.6-1.6v-2.69a6.8 6.8 0 0 1-1.33-.55l-1.9 1.9c-.62.62-1.64.62-2.26 0l-.57-.57c-.62-.62-.62-1.64 0-2.26l1.9-1.9A6.8 6.8 0 0 1 5.29 14H2.6c-.88 0-1.6-.72-1.6-1.6v-.8c0-.88.72-1.6 1.6-1.6h2.69c.14-.47.32-.91.55-1.33l-1.9-1.9c-.62-.62-.62-1.64 0-2.26l.57-.57c.62-.62 1.64-.62 2.26 0l1.9 1.9c.42-.23.86-.41 1.33-.55V2.6c0-.88.72-1.6 1.6-1.6h.8c.88 0 1.6.72 1.6 1.6v2.69c.47.14.91.32 1.33.55l1.9-1.9c.62-.62 1.64-.62 2.26 0l.57.57c.62.62.62 1.64 0 2.26l-1.9 1.9c.23.42.41.86.55 1.33M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path><svg:path d="m18.71 10l-.719.214a.75.75 0 0 0 .719.536zm-.55-1.33l-.53-.53a.75.75 0 0 0-.128.89zm1.9-1.9l-.53-.53zm0-2.26l-.53.53zm-.57-.57l.53-.53zm-2.26 0l-.53-.53zm-1.9 1.9l-.36.658a.75.75 0 0 0 .89-.128zM14 5.29h-.75a.75.75 0 0 0 .536.719zm-4 0l.214.719a.75.75 0 0 0 .536-.719zm-1.33.55l-.53.53a.75.75 0 0 0 .89.128zM5.84 8.67l.658.36a.75.75 0 0 0-.128-.89zM5.29 10v.75a.75.75 0 0 0 .719-.536zm0 4l.719-.214a.75.75 0 0 0-.719-.536zm.55 1.33l.53.53a.75.75 0 0 0 .128-.89zm-1.9 1.9l-.53-.53zm0 2.26l-.53.53zm.57.57l.53-.53zm2.26 0l-.53-.53zm1.9-1.9l.36-.658a.75.75 0 0 0-.89.128zm1.33.55h.75a.75.75 0 0 0-.536-.719zm4 0l-.214-.719a.75.75 0 0 0-.536.719zm1.33-.55l.53-.53a.75.75 0 0 0-.89-.128zm2.83-2.83l-.658-.36a.75.75 0 0 0 .128.89zm.55-1.33v-.75a.75.75 0 0 0-.719.536zm2.69-4.75h-2.69v1.5h2.69zm-1.971.536a7.5 7.5 0 0 0-.611-1.476l-1.316.72c.203.37.363.76.49 1.184zM18.69 9.2l1.9-1.9l-1.06-1.06l-1.9 1.9zm1.9-1.9a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32l-.57-.57l-1.06 1.06l.57.57zm-.57-.57a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0l-1.9 1.9l1.06 1.06l1.9-1.9zm-1.01 1.772a7.5 7.5 0 0 0-1.476-.61l-.428 1.437a6 6 0 0 1 1.184.489zm-.94.108V2.6h-1.5v2.69zm0-2.69A2.355 2.355 0 0 0 12.4.25v1.5c.466 0 .85.384.85.85zM12.4.25h-.8v1.5h.8zm-.8 0A2.355 2.355 0 0 0 9.25 2.6h1.5c0-.466.384-.85.85-.85zM9.25 2.6v2.69h1.5V2.6zm.536 1.971a7.5 7.5 0 0 0-1.476.611l.72 1.316a6 6 0 0 1 1.184-.49zM9.2 5.31l-1.9-1.9l-1.06 1.06l1.9 1.9zm-1.9-1.9a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0l-.57.57l1.06 1.06l.57-.57zm-.57.57a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32l1.9 1.9l1.06-1.06l-1.9-1.9zm1.772 1.01a7.5 7.5 0 0 0-.61 1.476l1.437.428a6 6 0 0 1 .489-1.184zm.108.94H2.6v1.5h2.69zm-2.69 0A2.355 2.355 0 0 0 .25 11.6h1.5c0-.466.384-.85.85-.85zM.25 11.6v.8h1.5v-.8zm0 .8a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h2.69v-1.5H2.6zm1.971-.536a7.5 7.5 0 0 0 .611 1.476l1.316-.72a6 6 0 0 1-.49-1.184zm.739.586l-1.9 1.9l1.06 1.06l1.9-1.9zm-1.9 1.9a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32l.57.57l1.06-1.06l-.57-.57zm.57.57a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0l1.9-1.9l-1.06-1.06l-1.9 1.9zm1.01-1.772a7.5 7.5 0 0 0 1.476.61l.428-1.437a6 6 0 0 1-1.184-.489zm.94-.108v2.69h1.5v-2.69zm0 2.69a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h.8v-1.5h-.8zm.8 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-2.69h-1.5v2.69zm-.536-1.971a7.5 7.5 0 0 0 1.476-.611l-.72-1.316c-.37.203-.76.363-1.184.49zm.586-.739l1.9 1.9l1.06-1.06l-1.9-1.9zm1.9 1.9a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0l.57-.57l-1.06-1.06l-.57.57zm.57-.57a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32l-1.9-1.9l-1.06 1.06l1.9 1.9zm-1.772-1.01a7.5 7.5 0 0 0 .61-1.476l-1.437-.428a6 6 0 0 1-.489 1.184zm-.108-.94h2.69v-1.5h-2.69zm2.69 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-.8h-1.5v.8zm0-.8a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85zm-8.5.4A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsAltDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsApplicationsDuotoneIcon],svg[si-settings-applications-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siSettingsApplicationsDuotone0)"><svg:path fill-opacity=".16" fill-rule="evenodd" d="M16.75 10.5h1.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1.75c-.09.28-.2.55-.33.8l1.24 1.24c.59.58.59 1.53 0 2.12c-.58.59-1.53.59-2.12 0l-1.24-1.24c-.26.13-.52.24-.8.33v1.75c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-1.75c-.28-.09-.55-.2-.8-.33l-1.24 1.24c-.58.59-1.53.59-2.12 0a1.49 1.49 0 0 1 0-2.12l1.24-1.24c-.13-.26-.24-.52-.33-.8H5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h1.75c.09-.28.2-.55.33-.8L6.34 8.46c-.59-.58-.58-1.53 0-2.12a1.49 1.49 0 0 1 2.12 0L9.7 7.58c.26-.13.52-.24.8-.33V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1.75c.28.09.55.2.8.33l1.24-1.24c.58-.59 1.53-.58 2.12 0s.59 1.53 0 2.12L16.42 9.7c.13.26.24.52.33.8M12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path><svg:path d="m16.75 10.5l-.714.23c.1.31.388.52.714.52zm-.33-.8l-.53-.53a.75.75 0 0 0-.14.865zm-.88-3.36l.53.53l.005-.004zM14.3 7.58l-.346.665a.75.75 0 0 0 .876-.135zm-.8-.33h-.75c0 .326.21.614.52.714zm-3 0l.23.714a.75.75 0 0 0 .52-.714zm-.8.33l-.53.53a.75.75 0 0 0 .865.14zm-3.36.88l.53-.53l-.004-.005zM7.58 9.7l.665.346a.75.75 0 0 0-.135-.876zm-.33.8v.75a.75.75 0 0 0 .714-.52zm0 3l.714-.23a.75.75 0 0 0-.714-.52zm.33.8l.53.53a.75.75 0 0 0 .14-.865zm-1.24 3.36l.53-.53l-.004-.005zm2.12 0l-.53-.53l-.005.004zm1.24-1.24l.346-.665a.75.75 0 0 0-.876.135zm.8.33h.75a.75.75 0 0 0-.52-.714zm3 0l-.23-.714a.75.75 0 0 0-.52.714zm.8-.33l.53-.53a.75.75 0 0 0-.865-.14zm3.36 1.24l-.53-.53l-.005.004zm0-2.12l-.53.53l.004.005zm-1.24-1.24l-.665-.346a.75.75 0 0 0 .135.876zm.33-.8v-.75a.75.75 0 0 0-.714.52zM3.933 1.75h16.134V.25H3.933zm16.134 0c1.206 0 2.183.978 2.183 2.183h1.5A3.683 3.683 0 0 0 20.067.25zm2.183 2.183v16.134h1.5V3.933zm0 16.134a2.183 2.183 0 0 1-2.183 2.183v1.5a3.683 3.683 0 0 0 3.683-3.683zm-2.183 2.183H3.933v1.5h16.134zm-16.134 0a2.183 2.183 0 0 1-2.183-2.183H.25a3.683 3.683 0 0 0 3.683 3.683zM1.75 20.067V3.933H.25v16.134zm0-16.134c0-1.205.978-2.183 2.183-2.183V.25A3.683 3.683 0 0 0 .25 3.933zM18.5 9.75h-1.75v1.5h1.75zm-1.036.52a6.4 6.4 0 0 0-.373-.905l-1.342.67c.116.232.21.457.287.694zm-.514-.04l1.24-1.24l-1.06-1.06l-1.24 1.24zm1.24-1.24a2.24 2.24 0 0 0-.004-3.185l-1.052 1.07a.74.74 0 0 1-.004 1.055zm-.004-3.185c-.874-.858-2.299-.888-3.18.01l1.069 1.05a.75.75 0 0 1 1.06.01zm-3.176.005l-1.24 1.24l1.06 1.06l1.24-1.24zm-.364 1.105a6 6 0 0 0-.917-.379l-.458 1.428c.244.079.475.173.683.281zm-.396.335V5.5h-1.5v1.75zm0-1.75A2.25 2.25 0 0 0 12 3.25v1.5c.416 0 .75.334.75.75zM12 3.25A2.25 2.25 0 0 0 9.75 5.5h1.5c0-.416.334-.75.75-.75zM9.75 5.5v1.75h1.5V5.5zm.52 1.036a6.4 6.4 0 0 0-.905.373l.67 1.342a5 5 0 0 1 .694-.287zm-.04.514L8.99 5.81L7.93 6.87l1.24 1.24zM8.99 5.81a2.24 2.24 0 0 0-3.185.004l1.07 1.052a.74.74 0 0 1 1.055.004zm-3.185.004c-.858.874-.888 2.299.01 3.18l1.05-1.069a.75.75 0 0 1 .01-1.06zM5.81 8.99l1.24 1.24l1.06-1.06l-1.24-1.24zm1.105.364a6 6 0 0 0-.379.917l1.428.458c.079-.244.173-.475.281-.683zm.335.396H5.5v1.5h1.75zm-1.75 0A2.25 2.25 0 0 0 3.25 12h1.5c0-.416.334-.75.75-.75zM3.25 12a2.25 2.25 0 0 0 2.25 2.25v-1.5a.75.75 0 0 1-.75-.75zm2.25 2.25h1.75v-1.5H5.5zm1.036-.52c.103.322.229.617.373.905l1.342-.67a5 5 0 0 1-.287-.694zm.514.04l-1.24 1.24l1.06 1.06l1.24-1.24zm-1.24 1.24a2.24 2.24 0 0 0 .004 3.185l1.052-1.07a.74.74 0 0 1 .004-1.055zm0 3.18a2.24 2.24 0 0 0 3.185-.004l-1.07-1.052a.74.74 0 0 1-1.055-.004zm3.18 0l1.24-1.24l-1.06-1.06l-1.24 1.24zm.364-1.105c.292.152.601.278.917.379l.458-1.428a4.4 4.4 0 0 1-.683-.281zm.396-.335v1.75h1.5v-1.75zm0 1.75A2.25 2.25 0 0 0 12 20.75v-1.5a.75.75 0 0 1-.75-.75zM12 20.75a2.25 2.25 0 0 0 2.25-2.25h-1.5c0 .416-.334.75-.75.75zm2.25-2.25v-1.75h-1.5v1.75zm-.52-1.036c.322-.104.617-.229.905-.373l-.67-1.342a5 5 0 0 1-.694.287zm.04-.514l1.24 1.24l1.06-1.06l-1.24-1.24zm1.24 1.24a2.24 2.24 0 0 0 3.185-.004l-1.07-1.052a.74.74 0 0 1-1.055-.004zm3.18 0a2.24 2.24 0 0 0-.004-3.185l-1.052 1.07a.74.74 0 0 1-.004 1.055zm0-3.18l-1.24-1.24l-1.06 1.06l1.24 1.24zm-1.105-.364a6 6 0 0 0 .379-.917l-1.428-.458a4.4 4.4 0 0 1-.281.683zm-.335-.396h1.75v-1.5h-1.75zm1.75 0A2.25 2.25 0 0 0 20.75 12h-1.5c0 .416-.334.75-.75.75zM20.75 12a2.25 2.25 0 0 0-2.25-2.25v1.5c.416 0 .75.334.75.75zm-7.5 0c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 12zM12 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 14.75zM10.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 12zM12 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 9.25z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsApplicationsDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsApplicationsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsCuteDuotoneIcon],svg[si-settings-cute-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siSettingsCuteDuotone0)"><svg:path fill-opacity=".16" fill-rule="evenodd" d="M20 9c1.66 0 3 1.34 3 3s-1.34 3-3 3h-.76l.54.54a3 3 0 0 1 0 4.24a3 3 0 0 1-4.24 0l-.54-.54V20c0 1.66-1.34 3-3 3s-3-1.34-3-3v-.76l-.54.54a3 3 0 0 1-4.24 0a3 3 0 0 1 0-4.24l.54-.54H4c-1.66 0-3-1.34-3-3s1.34-3 3-3h.76l-.54-.54a3 3 0 0 1 0-4.24a3 3 0 0 1 4.24 0l.54.54V4c0-1.66 1.34-3 3-3s3 1.34 3 3v.76l.54-.54a3 3 0 0 1 4.24 0a3 3 0 0 1 0 4.24l-.54.54zm-4 3a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path><svg:path d="m19.24 9l-.53-.53a.75.75 0 0 0 .53 1.28zm.54-.54l.53.53zm-4.24-4.24l-.53-.53zm-.54.54h-.75a.75.75 0 0 0 1.28.53zm-6 0l-.53.53a.75.75 0 0 0 1.28-.53zm-.54-.54l.53-.53zM4.22 8.46l-.53.53zm.54.54v.75a.75.75 0 0 0 .53-1.28zm0 6l.53.53a.75.75 0 0 0-.53-1.28zm-.54.54l-.53-.53zm4.24 4.24l.53.53zm.54-.54h.75a.75.75 0 0 0-1.28-.53zm6 0l.53-.53a.75.75 0 0 0-1.28.53zm.54.54l-.53.53zm4.24-4.24l.53-.53zm-.54-.54v-.75a.75.75 0 0 0-.53 1.28zm4.51-3A3.746 3.746 0 0 0 20 8.25v1.5A2.246 2.246 0 0 1 22.25 12zM20 8.25h-.76v1.5H20zm-.23 1.28l.54-.54l-1.06-1.06l-.54.54zm.54-.54a3.75 3.75 0 0 0 0-5.3l-1.06 1.06a2.25 2.25 0 0 1 0 3.18zm0-5.3a3.75 3.75 0 0 0-5.3 0l1.06 1.06a2.25 2.25 0 0 1 3.18 0zm-5.3 0l-.54.54l1.06 1.06l.54-.54zm.74 1.07V4h-1.5v.76zm0-.76A3.746 3.746 0 0 0 12 .25v1.5A2.246 2.246 0 0 1 14.25 4zM12 .25A3.746 3.746 0 0 0 8.25 4h1.5A2.246 2.246 0 0 1 12 1.75zM8.25 4v.76h1.5V4zm1.28.23l-.54-.54l-1.06 1.06l.54.54zm-.54-.54a3.75 3.75 0 0 0-5.3 0l1.06 1.06a2.25 2.25 0 0 1 3.18 0zm-5.3 0a3.75 3.75 0 0 0 0 5.3l1.06-1.06a2.25 2.25 0 0 1 0-3.18zm0 5.3l.54.54l1.06-1.06l-.54-.54zm1.07-.74H4v1.5h.76zm-.76 0A3.746 3.746 0 0 0 .25 12h1.5A2.246 2.246 0 0 1 4 9.75zM.25 12A3.746 3.746 0 0 0 4 15.75v-1.5A2.246 2.246 0 0 1 1.75 12zM4 15.75h.76v-1.5H4zm.23-1.28l-.54.54l1.06 1.06l.54-.54zm-.54.54a3.75 3.75 0 0 0 0 5.3l1.06-1.06a2.25 2.25 0 0 1 0-3.18zm0 5.3a3.75 3.75 0 0 0 5.3 0l-1.06-1.06a2.25 2.25 0 0 1-3.18 0zm5.3 0l.54-.54l-1.06-1.06l-.54.54zm-.74-1.07V20h1.5v-.76zm0 .76A3.746 3.746 0 0 0 12 23.75v-1.5A2.246 2.246 0 0 1 9.75 20zM12 23.75A3.746 3.746 0 0 0 15.75 20h-1.5A2.246 2.246 0 0 1 12 22.25zM15.75 20v-.76h-1.5V20zm-1.28-.23l.54.54l1.06-1.06l-.54-.54zm.54.54a3.75 3.75 0 0 0 5.3 0l-1.06-1.06a2.25 2.25 0 0 1-3.18 0zm5.3 0a3.75 3.75 0 0 0 0-5.3l-1.06 1.06a2.25 2.25 0 0 1 0 3.18zm0-5.3l-.54-.54l-1.06 1.06l.54.54zm-1.07.74H20v-1.5h-.76zm.76 0A3.746 3.746 0 0 0 23.75 12h-1.5A2.246 2.246 0 0 1 20 14.25zM15.25 12A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsCuteDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsCuteDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsDuotoneIcon],svg[si-settings-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siSettingsDuotone0)"><svg:path fill-opacity=".16" fill-rule="evenodd" d="M18.71 10H21v-.02c1.1 0 2 .9 2 2s-.9 2-2 2h-2.29c-.07.23-.15.46-.24.68c-.1.22-.2.44-.31.65l1.62 1.62c.78.78.78 2.05 0 2.83s-2.05.78-2.83 0l-1.62-1.62c-.21.12-.43.22-.65.31s-.45.17-.68.24v2.29c0 1.1-.9 2-2 2s-2-.9-2-2v-2.29c-.23-.07-.46-.15-.68-.24c-.22-.1-.44-.2-.65-.31l-1.62 1.62c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83l1.62-1.62c-.12-.21-.22-.43-.31-.65s-.17-.45-.24-.68H3c-1.1 0-2-.9-2-2s.9-2 2-2h2.33a7.5 7.5 0 0 1 .54-1.32L4.25 7.04c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0L8.7 5.83c.21-.11.42-.21.64-.3h.01c.22-.09.44-.17.67-.24V3c0-1.1.9-2 2-2s2 .9 2 2v2.31c.23.07.45.15.67.24h.01c.22.09.43.19.64.3l1.62-1.62c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83l-1.62 1.62a7.5 7.5 0 0 1 .54 1.32M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path><svg:path d="M21 10v.75a.75.75 0 0 0 .75-.75zm-2.29 0l-.718.218a.75.75 0 0 0 .718.532zm-.54-1.32l-.53-.53a.75.75 0 0 0-.134.878zm1.62-1.62l.53.53zm-2.83-2.83l-.53-.53zm-1.62 1.62l-.348.664a.75.75 0 0 0 .878-.134zm-.64-.3l.284-.694A.8.8 0 0 0 14.7 4.8zm-.01 0l-.284.694a.8.8 0 0 0 .284.056zm-.67-.24h-.75c0 .33.216.621.532.718zm-4-.02l.218.718a.75.75 0 0 0 .532-.718zm-.67.24v.75a.8.8 0 0 0 .284-.056zm-.01 0v-.75a.8.8 0 0 0-.284.056zm-.64.3l-.53.53a.75.75 0 0 0 .878.134zM5.87 8.66l.664.348A.75.75 0 0 0 6.4 8.13zm-.54 1.32v.75a.75.75 0 0 0 .718-.532zm-.04 4l.718-.218a.75.75 0 0 0-.718-.532zm.55 1.33l.53.53a.75.75 0 0 0 .121-.902zm-1.62 1.62l-.53-.53zm2.83 2.83l.53.53zm1.62-1.62l.348-.664a.75.75 0 0 0-.878.134zm.65.31l-.31.683l.026.011zm.68.24h.75a.75.75 0 0 0-.532-.718zm4 0l-.218-.718a.75.75 0 0 0-.532.718zm1.33-.55l.53-.53a.75.75 0 0 0-.902-.121zm4.45-1.21l.53-.53zm-1.62-1.62l-.664-.348a.75.75 0 0 0 .134.878zm.31-.65l.683.31l.011-.026zm.24-.68v-.75a.75.75 0 0 0-.718.532zm2.29-4v-.75a.75.75 0 0 0-.75.75zm0-.73h-2.29v1.5H21zm-1.573.532a9 9 0 0 0-.263-.746l-1.388.568c.08.195.152.403.216.614zm-.263-.746a8 8 0 0 0-.33-.704l-1.328.696c.1.193.19.382.27.576zm-.464.174l1.62-1.62l-1.06-1.06l-1.62 1.62zm1.62-1.62a2.754 2.754 0 0 0 0-3.89l-1.06 1.06a1.254 1.254 0 0 1 0 1.77zm0-3.89a2.754 2.754 0 0 0-3.89 0l1.06 1.06a1.254 1.254 0 0 1 1.77 0zm-3.89 0l-1.62 1.62l1.06 1.06l1.62-1.62zm-.742 1.486a8 8 0 0 0-.704-.33l-.568 1.388c.194.08.383.17.576.27zm-.988.364V4.8h-.01v1.5h.01zm.274-.694a8 8 0 0 0-.736-.264l-.436 1.436c.204.062.402.134.604.216zm-.204.454V3h-1.5v2.31zm0-2.31A2.756 2.756 0 0 0 12.02.25v1.5c.686 0 1.25.564 1.25 1.25zM12.02.25A2.756 2.756 0 0 0 9.27 3h1.5c0-.686.564-1.25 1.25-1.25zM9.27 3v2.29h1.5V3zm.532 1.572a8 8 0 0 0-.736.264l.568 1.388c.202-.082.4-.154.604-.216zm-.452.958v-.75h-.01v1.5h.01zm-.294-.694c-.246.1-.477.21-.704.33l.696 1.328c.193-.1.382-.19.576-.27zm.174.464L7.61 3.68L6.55 4.74l1.62 1.62zM7.61 3.68a2.754 2.754 0 0 0-3.89 0l1.06 1.06a1.254 1.254 0 0 1 1.77 0zm-3.89 0a2.754 2.754 0 0 0 0 3.89l1.06-1.06a1.254 1.254 0 0 1 0-1.77zm0 3.89l1.62 1.62L6.4 8.13L4.78 6.51zm1.486.742c-.12.227-.23.458-.33.704l1.388.568c.08-.194.17-.383.27-.576zm-.33.704c-.1.245-.188.497-.264.746l1.436.436c.064-.211.136-.419.216-.614zm.454.214H3v1.5h2.33zM3 9.23a2.756 2.756 0 0 0-2.75 2.75h1.5c0-.686.564-1.25 1.25-1.25zM.25 11.98A2.756 2.756 0 0 0 3 14.73v-1.5c-.686 0-1.25-.564-1.25-1.25zM3 14.73h2.29v-1.5H3zm1.572-.532c.076.249.164.501.264.746l1.388-.568a7 7 0 0 1-.216-.614zm.264.746c.097.237.21.49.353.738l1.302-.744a5 5 0 0 1-.267-.562zm.474-.164L3.69 16.4l1.06 1.06l1.62-1.62zM3.69 16.4a2.754 2.754 0 0 0 0 3.89l1.06-1.06a1.254 1.254 0 0 1 0-1.77zm0 3.89a2.754 2.754 0 0 0 3.89 0l-1.06-1.06a1.254 1.254 0 0 1-1.77 0zm3.89 0l1.62-1.62l-1.06-1.06l-1.62 1.62zm.742-1.486c.232.122.471.23.688.329l.62-1.366a12 12 0 0 1-.612-.291zm.714.34c.245.1.497.188.746.264l.436-1.436a7 7 0 0 1-.614-.216zm.214-.454v2.29h1.5v-2.29zm0 2.29A2.756 2.756 0 0 0 12 23.73v-1.5c-.686 0-1.25-.564-1.25-1.25zM12 23.73a2.756 2.756 0 0 0 2.75-2.75h-1.5c0 .686-.564 1.25-1.25 1.25zm2.75-2.75v-2.29h-1.5v2.29zm-.532-1.573c.249-.075.501-.163.746-.263l-.568-1.388c-.195.08-.403.152-.614.216zm.746-.263c.237-.097.49-.21.738-.353l-.744-1.302a5 5 0 0 1-.562.267zm-.164-.474l1.62 1.62l1.06-1.06l-1.62-1.62zm1.62 1.62a2.754 2.754 0 0 0 3.89 0l-1.06-1.06a1.254 1.254 0 0 1-1.77 0zm3.89 0a2.754 2.754 0 0 0 0-3.89l-1.06 1.06a1.254 1.254 0 0 1 0 1.77zm0-3.89l-1.62-1.62l-1.06 1.06l1.62 1.62zm-1.486-.742c.122-.232.23-.471.329-.688l-1.366-.62a12 12 0 0 1-.291.612zm.34-.714c.1-.245.188-.497.263-.746l-1.434-.436a7 7 0 0 1-.217.614zm-.454-.214H21v-1.5h-2.29zm2.29 0a2.756 2.756 0 0 0 2.75-2.75h-1.5c0 .686-.564 1.25-1.25 1.25zm2.75-2.75A2.756 2.756 0 0 0 21 9.23v1.5c.686 0 1.25.564 1.25 1.25zm-3.5-2V10h1.5v-.02zm-5 2.02A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSettingsThickDuotoneIcon],svg[si-settings-thick-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M18.51 9.49h1.87c.88 0 1.6.72 1.6 1.6v1.8c0 .88-.72 1.6-1.6 1.6h-1.87q-.047.136-.106.269l-.034.081l1.32 1.32c.62.62.62 1.64 0 2.26l-1.27 1.27c-.62.62-1.64.62-2.26 0l-1.32-1.32q-.096.043-.2.08l-.15.06v1.87c0 .88-.72 1.6-1.6 1.6h-1.8c-.88 0-1.6-.72-1.6-1.6v-1.87q-.136-.047-.269-.106l-.081-.034l-1.32 1.32c-.62.62-1.64.62-2.26 0l-1.27-1.27c-.62-.62-.62-1.64 0-2.26l1.32-1.32q-.043-.096-.08-.2l-.06-.15H3.6c-.88 0-1.6-.72-1.6-1.6v-1.8c0-.88.72-1.6 1.6-1.6h1.87q.047-.136.106-.269l.034-.081l-1.32-1.32c-.62-.62-.62-1.64 0-2.26l1.27-1.27c.62-.62 1.64-.62 2.26 0l1.32 1.32q.096-.043.2-.08l.15-.06V3.6c0-.88.72-1.6 1.6-1.6h1.8c.88 0 1.6.72 1.6 1.6v1.87q.136.047.269.106l.081.034l1.32-1.32c.62-.62 1.64-.62 2.26 0l1.27 1.27c.62.62.62 1.64 0 2.26l-1.32 1.32q.043.096.08.2zM16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m18.51 9.49l-.692.288a.75.75 0 0 0 .692.462zm-.14-.35l-.53-.53a.75.75 0 0 0-.153.84zm1.32-1.32l-.53-.53zm0-2.26l-.53.53zm-1.27-1.27l.53-.53zm-2.26 0l-.53-.53zm-1.32 1.32l-.288.692a.75.75 0 0 0 .818-.162zm-.35-.14h-.75c0 .323.207.61.513.712zm-5 0l.288.692a.75.75 0 0 0 .462-.692zm-.35.14l-.53.53a.75.75 0 0 0 .84.153zM7.82 4.29l.53-.53zm-2.26 0l-.53-.53zM4.29 5.56l.53.53zm0 2.26l.53-.53zm1.32 1.32l.692.288a.75.75 0 0 0-.162-.818zm-.14.35v.75a.75.75 0 0 0 .712-.513zm0 5l.692-.289a.75.75 0 0 0-.692-.461zm.14.35l.53.53a.75.75 0 0 0 .153-.84zm-1.32 1.32l-.53-.53zm0 2.26l.53-.53zm1.27 1.27l-.53.53zm2.26 0l.53.53zm1.32-1.32l.288-.692a.75.75 0 0 0-.818.162zm.35.14h.75a.75.75 0 0 0-.513-.712zm5 0l-.289-.692a.75.75 0 0 0-.461.692zm.35-.14l.53-.53a.75.75 0 0 0-.84-.153zm1.32 1.32l-.53.53zm2.26 0l.53.53zm1.27-1.27l-.53-.53zm-1.32-3.58l-.692-.288a.75.75 0 0 0 .162.818zm.14-.35v-.75a.75.75 0 0 0-.712.513zm1.87-5.75h-1.87v1.5h1.87zm-1.178.462c-.02-.048-.037-.093-.062-.159a4 4 0 0 0-.087-.213l-1.366.62c.015.033.03.072.053.13c.02.051.047.126.078.198zm-.302.468l1.32-1.32l-1.06-1.06l-1.32 1.32zm1.32-1.32a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32l-1.27-1.27l-1.06 1.06l1.27 1.27zm-1.27-1.27a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0l-1.32 1.32l1.06 1.06l1.32-1.32zm-.502 1.158c-.091-.039-.246-.108-.4-.16l-.475 1.424c.085.028.15.059.299.12zm.112.552V3.6h-1.5v1.87zm0-1.87a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85zm-2.35-2.35h-1.8v1.5h1.8zm-1.8 0A2.355 2.355 0 0 0 8.74 3.6h1.5c0-.466.384-.85.85-.85zM8.74 3.6v1.87h1.5V3.6zm.462 1.178c-.048.02-.093.037-.159.062c-.06.022-.136.052-.213.087l.62 1.366c.033-.015.072-.03.13-.053c.051-.02.126-.047.198-.078zm.468.302L8.35 3.76L7.29 4.82l1.32 1.32zM8.35 3.76a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0L3.76 5.03l1.06 1.06l1.27-1.27zM3.76 5.03a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32l1.32 1.32l1.06-1.06l-1.32-1.32zm1.158.502c-.039.091-.108.246-.16.4l1.424.475c.028-.085.059-.15.12-.299zm.552-.112H3.6v1.5h1.87zm-1.87 0a2.355 2.355 0 0 0-2.35 2.35h1.5c0-.466.384-.85.85-.85zm-2.35 2.35v1.8h1.5v-1.8zm0 1.8a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h1.87v-1.5H3.6zm1.178-.462c.02.047.037.093.062.159c.022.06.052.136.087.213l1.366-.62a2 2 0 0 1-.053-.13c-.02-.051-.047-.126-.078-.199zm.302-.468l-1.32 1.32l1.06 1.06l1.32-1.32zm-1.32 1.32a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32l1.27 1.27l1.06-1.06l-1.27-1.27zm1.27 1.27a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0l1.32-1.32l-1.06-1.06l-1.32 1.32zm.502-1.158c.091.039.246.108.4.16l.475-1.424c-.085-.028-.15-.059-.299-.12zm-.112-.552v1.87h1.5v-1.87zm0 1.87a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h1.8v-1.5h-1.8zm1.8 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-1.87h-1.5v1.87zm-.462-1.178c.047-.02.093-.037.159-.062c.06-.023.136-.052.213-.087l-.62-1.366c-.033.015-.072.03-.13.053c-.051.02-.126.047-.199.078zm-.468-.302l1.32 1.32l1.06-1.06l-1.32-1.32zm1.32 1.32a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0l1.27-1.27l-1.06-1.06l-1.27 1.27zm1.27-1.27a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32l-1.32-1.32l-1.06 1.06l1.32 1.32zm-1.158-.502c.039-.091.108-.246.16-.4l-1.424-.475c-.028.085-.059.15-.12.299zm-.552.112h1.87v-1.5h-1.87zm1.87 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-1.8h-1.5v1.8zm0-1.8a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85zm-7.48.91A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"></svg:path>`,
})
export class SiSettingsThickDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldAlertDuotoneIcon],svg[si-shield-alert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 15h.008M12 7v5m-8-.748c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldAlertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldBadDuotoneIcon],svg[si-shield-bad-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.172 13.828L12 11m0 0l2.828-2.828M12 11l2.828 2.828M12 11L9.172 8.172M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldBadDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldDuotoneIcon],svg[si-shield-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"></svg:path></svg:g>`,
})
export class SiShieldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldHealthSafetyDuotoneIcon],svg[si-shield-health-safety-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 11h6m-3 3V8m-8 3.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldHealthSafetyDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldPoliceDuotoneIcon],svg[si-shield-police-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728m2.334-10.045l2.652-2.147c.063-.126.126-.252.126-.379c-.063-.126-.19-.252-.316-.252H13.4l-1.073-2.904c-.063-.127-.19-.253-.316-.253s-.252.126-.315.253l-1.01 2.904H7.34c-.126 0-.252.126-.315.252a.304.304 0 0 0 .126.38L9.74 11.87l-.821 3.157a.304.304 0 0 0 .126.379a.4.4 0 0 0 .379 0l2.652-1.894l2.588 1.894c.063.063.126.063.19.063c.063 0 .126 0 .189-.063a.304.304 0 0 0 .126-.379z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16.874 9.788l-2.652 2.147l.947 3.093a.304.304 0 0 1-.126.379c-.063.063-.126.063-.19.063c-.063 0-.126 0-.189-.063l-2.588-1.894l-2.652 1.894a.4.4 0 0 1-.379 0a.304.304 0 0 1-.126-.379l.82-3.157l-2.588-2.083a.304.304 0 0 1-.126-.379c.063-.126.19-.252.315-.252h3.347l1.01-2.904c.063-.127.19-.253.315-.253c.127 0 .253.126.316.253l1.073 2.904h3.283c.127 0 .253.126.316.252c0 .127-.063.253-.126.38Z"></svg:path></svg:g>`,
})
export class SiShieldPoliceDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldSecurityDuotoneIcon],svg[si-shield-security-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 11h16m-8 10V2m-8 9.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldSecurityDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldTipDuotoneIcon],svg[si-shield-tip-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.008 7H12m.008 8v-5M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldTipDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siShieldVerifiedDuotoneIcon],svg[si-shield-verified-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 12l3 3l5-7M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldVerifiedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignInAltDuotoneIcon],svg[si-sign-in-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m13 16l4-4m0 0l-4-4m4 4H3m10.6-9h5A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H13"></svg:path>`,
})
export class SiSignInAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignInDuotoneIcon],svg[si-sign-in-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 15l3-3m0 0l-3-3m3 3H3m7-4V5.4A2.4 2.4 0 0 1 12.4 3h6.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4h-6.2a2.4 2.4 0 0 1-2.4-2.4V16"></svg:path>`,
})
export class SiSignInDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignOutAltDuotoneIcon],svg[si-sign-out-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m17 16l4-4m0 0l-4-4m4 4H7m4 9H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3H11"></svg:path>`,
})
export class SiSignOutAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSignOutDuotoneIcon],svg[si-sign-out-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m18 15l3-3m0 0l-3-3m3 3H7m7 4v2.6a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3h6.2A2.4 2.4 0 0 1 14 5.4V8"></svg:path>`,
})
export class SiSignOutDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSortAltDuotoneIcon],svg[si-sort-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 10h12M4 6h16M4 14h8m-8 4h4"></svg:path>`,
})
export class SiSortAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSortDuotoneIcon],svg[si-sort-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12h12M4 8h16M4 16h8"></svg:path>`,
})
export class SiSortDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastCircleDuotoneIcon],svg[si-south-east-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 8l8 8m0 0v-5m0 5h-5m11-4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiSouthEastCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastDuotoneIcon],svg[si-south-east-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 8l8 8m0 0v-5m0 5h-5"></svg:path>`,
})
export class SiSouthEastDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastEscapeAltDuotoneIcon],svg[si-south-east-escape-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m10 10l8 8m0 0v-4m0 4h-4m-5-3h-.6C7.07 15 6 13.93 6 12.6V8.4C6 7.07 7.07 6 8.4 6h4.2C13.93 6 15 7.07 15 8.4V9"></svg:path>`,
})
export class SiSouthEastEscapeAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastEscapeDuotoneIcon],svg[si-south-east-escape-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17h-.6C7.07 17 6 15.93 6 14.6V8.4C6 7.07 7.07 6 8.4 6h6.2C15.93 6 17 7.07 17 8.4V9m-7 1l8 8m0 0h-4m4 0v-4"></svg:path>`,
})
export class SiSouthEastEscapeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthEastSquareDuotoneIcon],svg[si-south-east-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 8l8 8m0 0v-5m0 5h-5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiSouthEastSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestCircleDuotoneIcon],svg[si-south-west-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16 8l-8 8m0 0v-5m0 5h5m9-4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class SiSouthWestCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestDuotoneIcon],svg[si-south-west-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 8l-8 8m0 0v-5m0 5h5"></svg:path>`,
})
export class SiSouthWestDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestEscapeAltDuotoneIcon],svg[si-south-west-escape-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 10l-8 8m0 0v-4m0 4h4m5-3h.6c1.33 0 2.4-1.07 2.4-2.4V8.4C18 7.07 16.93 6 15.6 6h-4.2C10.07 6 9 7.07 9 8.4V9"></svg:path>`,
})
export class SiSouthWestEscapeAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestEscapeDuotoneIcon],svg[si-south-west-escape-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h.6c1.33 0 2.4-1.07 2.4-2.4V8.4C18 7.07 16.93 6 15.6 6H9.4C8.07 6 7 7.07 7 8.4V9m7 1l-8 8m0 0h4m-4 0v-4"></svg:path>`,
})
export class SiSouthWestEscapeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSouthWestSquareDuotoneIcon],svg[si-south-west-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16 8l-8 8m0 0v-5m0 5h5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiSouthWestSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSpinnerDuotoneIcon],svg[si-spinner-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 2v4.167m0 11.666V22m10-10h-4.166M6.167 12H2m17.209-7.208l-2.917 2.917m-8.584 8.583l-2.917 2.916m14.418 0l-2.917-2.916M7.708 7.709L4.791 4.792"></svg:path>`,
})
export class SiSpinnerDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSquareDuotoneIcon],svg[si-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path></svg:g>`,
})
export class SiSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStarAltDuotoneIcon],svg[si-star-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m21.748 10.576l-5.304 4.293l1.894 6.187c.127.253 0 .632-.252.758c-.127.126-.253.126-.38.126c-.125 0-.252 0-.378-.126l-5.177-3.788l-5.303 3.788a.8.8 0 0 1-.758 0c-.252-.126-.379-.505-.252-.758l1.641-6.313l-5.177-4.167c-.252-.126-.379-.505-.252-.757c.126-.253.378-.506.63-.506h6.693l2.02-5.808c.127-.252.38-.505.632-.505s.505.253.631.505l2.147 5.808h6.566c.252 0 .505.253.631.506c0 .252-.126.505-.253.757"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21.748 10.576l-5.304 4.293l1.894 6.187c.127.253 0 .632-.252.758c-.127.126-.253.126-.38.126c-.125 0-.252 0-.378-.126l-5.177-3.788l-5.303 3.788a.8.8 0 0 1-.758 0c-.252-.126-.379-.505-.252-.758l1.641-6.313l-5.177-4.167c-.252-.126-.379-.505-.252-.757c.126-.253.378-.506.63-.506h6.693l2.02-5.808c.127-.252.38-.505.632-.505s.505.253.631.505l2.147 5.808h6.566c.252 0 .505.253.631.506c0 .252-.126.505-.253.757Z"></svg:path></svg:g>`,
})
export class SiStarAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStarDuotoneIcon],svg[si-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m12 2l2.4 7.619l7.6-.005l-6.114 4.181l2.29 7.253L12 16.624l-6.181 4.424l2.29-7.253L2 9.615l7.595.004z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m12 2l2.4 7.619l7.6-.005l-6.114 4.181l2.29 7.253L12 16.624l-6.181 4.424l2.29-7.253L2 9.615l7.595.004z"></svg:path></svg:g>`,
})
export class SiStarDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStopCircleDuotoneIcon],svg[si-stop-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M9 9.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v4.4a.8.8 0 0 1-.8.8H9.8a.8.8 0 0 1-.8-.8z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.2 9H9.8a.8.8 0 0 0-.8.8v4.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V9.8a.8.8 0 0 0-.8-.8Z"></svg:path></svg:g>`,
})
export class SiStopCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siStopDuotoneIcon],svg[si-stop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.2 3H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.2 3H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"></svg:path></svg:g>`,
})
export class SiStopDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSunDuotoneIcon],svg[si-sun-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" clip-path="url(#siSunDuotone0)"><svg:path d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path stroke-linecap="round" d="M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556l-1.414-1.414M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"></svg:path></svg:g><svg:defs><svg:clippath id="siSunDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSunDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSunSetDuotoneIcon],svg[si-sun-set-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8.57 17.93A5.98 5.98 0 0 1 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.05-1.03 3.86-2.6 4.94"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 4V2M3 13H1m22 0h-2m-1.222-7.778l-1.414 1.414m-12.728 0L4.222 5.222M4 18h16M8 21h8m-7.43-3.07A5.98 5.98 0 0 1 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.05-1.03 3.86-2.6 4.94z"></svg:path></svg:g>`,
})
export class SiSunSetDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSunnySnowingDuotoneIcon],svg[si-sunny-snowing-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8 13c0-2.21 1.79-4 4-4s4 1.79 4 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13H1m22 0h-4M12 2v4M7.05 8.05L4.222 5.222m15.556 0L16.95 8.05M12 16h.1m3.9 0h.1m3.9 0h.1M8 16h.1m3.9 3h.1m-.1 3h.1m3.9-3h.1M8 19h.1M4 16h.1M8 13c0-2.21 1.79-4 4-4s4 1.79 4 4z"></svg:path></svg:g>`,
})
export class SiSunnySnowingDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSwapHorizDuotoneIcon],svg[si-swap-horiz-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 11L3 7m0 0l4-4M3 7h18m-4 14l4-4m0 0l-4-4m4 4H3"></svg:path>`,
})
export class SiSwapHorizDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siSwapVertDuotoneIcon],svg[si-swap-vert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m11 17l-4 4m0 0l-4-4m4 4V3m14 4l-4-4m0 0l-4 4m4-4v18"></svg:path>`,
})
export class SiSwapVertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTableColumnsDuotoneIcon],svg[si-table-columns-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiTableColumnsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTableDuotoneIcon],svg[si-table-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 15h18M3 9h18M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiTableDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTableRowsDuotoneIcon],svg[si-table-rows-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 15h18M3 9h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiTableRowsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTargetDuotoneIcon],svg[si-target-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-4 0a6 6 0 1 1-12 0a6 6 0 0 1 12 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path></svg:g>`,
})
export class SiTargetDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTerminalAltDuotoneIcon],svg[si-terminal-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m5 16l4-4l-4-4m6 8h8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path></svg:g>`,
})
export class SiTerminalAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTerminalDuotoneIcon],svg[si-terminal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m4 18l6-6l-6-6m8 12h8"></svg:path>`,
})
export class SiTerminalDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siToggleOffDuotoneIcon],svg[si-toggle-off-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m3 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path></svg:g>`,
})
export class SiToggleOffDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siToggleOnDuotoneIcon],svg[si-toggle-on-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m13 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path></svg:g>`,
})
export class SiToggleOnDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTrafficConeDuotoneIcon],svg[si-traffic-cone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M5 21L9.84 3.59c.1-.35.41-.59.77-.59h2.78c.36 0 .67.24.77.59L19 21"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 21L9.84 3.59c.1-.35.41-.59.77-.59h2.78c.36 0 .67.24.77.59L19 21M15.64 9.67c-1.18.22-2.4.33-3.64.33c-1.32 0-2.6-.13-3.85-.37m9.09 5.84c-1.69.35-3.44.53-5.24.53s-3.63-.19-5.36-.55M2 21h20"></svg:path></svg:g>`,
})
export class SiTrafficConeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siTwitterDuotoneIcon],svg[si-twitter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845c0-.193 0-.387-.009-.58A9.2 9.2 0 0 0 23 5.121a9.2 9.2 0 0 1-2.597.713a4.54 4.54 0 0 0 1.99-2.5a9 9 0 0 1-2.87 1.091A4.5 4.5 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.82 12.82 0 0 1-9.305-4.718a4.526 4.526 0 0 0 1.4 6.03a4.6 4.6 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428a4.4 4.4 0 0 1-1.189.159q-.435 0-.845-.08a4.51 4.51 0 0 0 4.217 3.135a9.05 9.05 0 0 1-5.608 1.936A9 9 0 0 1 1 18.873a12.84 12.84 0 0 0 6.91 2.016"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845c0-.193 0-.387-.009-.58A9.2 9.2 0 0 0 23 5.121a9.2 9.2 0 0 1-2.597.713a4.54 4.54 0 0 0 1.99-2.5a9 9 0 0 1-2.87 1.091A4.5 4.5 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.82 12.82 0 0 1-9.305-4.718a4.526 4.526 0 0 0 1.4 6.03a4.6 4.6 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428a4.4 4.4 0 0 1-1.189.159q-.435 0-.845-.08a4.51 4.51 0 0 0 4.217 3.135a9.05 9.05 0 0 1-5.608 1.936A9 9 0 0 1 1 18.873a12.84 12.84 0 0 0 6.91 2.016Z"></svg:path></svg:g>`,
})
export class SiTwitterDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnfoldMoreDuotoneIcon],svg[si-unfold-more-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 15l3 3l3-3M9 9l3-3l3 3"></svg:path>`,
})
export class SiUnfoldMoreDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnlockAltDuotoneIcon],svg[si-unlock-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" d="M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 7c0-2.21 1.79-4 4-4s4 1.79 4 4v4M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6m8.4 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SiUnlockAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnlockDuotoneIcon],svg[si-unlock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M6.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 10V7a4 4 0 0 1 7.874-1M12 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 0v3m-5.4-8h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path></svg:g>`,
})
export class SiUnlockDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUnlockMutedDuotoneIcon],svg[si-unlock-muted-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M4.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3M4.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path></svg:g>`,
})
export class SiUnlockMutedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUpDownDuotoneIcon],svg[si-up-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m0-16L9 7m3-3l3 3m-3 13l-3-3m3 3l3-3"></svg:path>`,
})
export class SiUpDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUpTwoHeadedDuotoneIcon],svg[si-up-two-headed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20V4m0 0L9 7m3-3l3 3m-6 5l3-3l3 3"></svg:path>`,
})
export class SiUpTwoHeadedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt2DuotoneIcon],svg[si-user-alt-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8 6a4 4 0 1 1 8 0v1a4 4 0 0 1-8 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 22c0-4.418-3.626-8-8.1-8h-1.8C6.626 14 3 17.582 3 22m9-11a4 4 0 0 1-4-4V6a4 4 0 1 1 8 0v1a4 4 0 0 1-4 4"></svg:path></svg:g>`,
})
export class SiUserAlt2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt3DuotoneIcon],svg[si-user-alt-3-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="7" r="4" fill="currentColor" fill-opacity=".16"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 21v-4.6a2.4 2.4 0 0 0-2.4-2.4H6.4A2.4 2.4 0 0 0 4 16.4V21M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g>`,
})
export class SiUserAlt3DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt4DuotoneIcon],svg[si-user-alt-4-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 13a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 13a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9m4-7a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g>`,
})
export class SiUserAlt4DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAlt5DuotoneIcon],svg[si-user-alt-5-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.4 22h-.02m0 0H3.6c-.88 0-1.6-.72-1.6-1.6v-3.65c0-.25 0-.38.12-.62c.38-.88 1.5-1.62 3.25-2.25M20.38 22c.88 0 1.6-.72 1.6-1.6v-3.65c0-.24 0-.5-.12-.62c-.37-.87-1.5-1.63-3.25-2.25M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"></svg:path></svg:g>`,
})
export class SiUserAlt5DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserAltDuotoneIcon],svg[si-user-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.4 22H3.6c-.88 0-1.6-.72-1.6-1.6v-4.65c0-.25 0-.38.12-.62c.38-.88 1.5-1.62 3.25-2.25c1.25 2.38 3.75 4 6.62 4s5.38-1.62 6.62-4c1.75.62 2.88 1.38 3.25 2.25c.12.12.12.38.12.62v4.65c0 .88-.72 1.6-1.6 1.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.4 22H3.6c-.88 0-1.6-.72-1.6-1.6v-4.65c0-.25 0-.38.12-.62c.38-.88 1.5-1.62 3.25-2.25c1.25 2.38 3.75 4 6.62 4s5.38-1.62 6.62-4c1.75.62 2.88 1.38 3.25 2.25c.12.12.12.38.12.62v4.65c0 .88-.72 1.6-1.6 1.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"></svg:path></svg:g>`,
})
export class SiUserAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siUserDuotoneIcon],svg[si-user-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623zM17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class SiUserDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siVerifiedDuotoneIcon],svg[si-verified-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M22 12c0-1.395-.858-2.605-2.137-3.259c.45-1.356.195-2.829-.79-3.814c-.985-.986-2.458-1.24-3.815-.79C14.615 2.859 13.396 2 12 2s-2.605.859-3.249 2.137c-1.366-.45-2.839-.196-3.824.79c-.986.985-1.23 2.458-.78 3.814C2.867 9.395 2 10.605 2 12s.868 2.605 2.146 3.258c-.448 1.357-.205 2.83.78 3.815c.986.985 2.46 1.23 3.815.79C9.395 21.142 10.605 22 12 22s2.615-.858 3.258-2.137c1.357.44 2.83.195 3.815-.79s1.24-2.458.79-3.815C21.142 14.606 22 13.396 22 12"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 13l3 3l5-7m6 3c0-1.395-.858-2.605-2.137-3.259c.45-1.356.195-2.829-.79-3.814c-.985-.986-2.458-1.24-3.815-.79C14.615 2.859 13.396 2 12 2s-2.605.859-3.249 2.137c-1.366-.45-2.839-.196-3.824.79c-.986.985-1.23 2.458-.78 3.814C2.867 9.395 2 10.605 2 12s.868 2.605 2.146 3.258c-.448 1.357-.205 2.83.78 3.815c.986.985 2.46 1.23 3.815.79C9.395 21.142 10.605 22 12 22s2.615-.858 3.258-2.137c1.357.44 2.83.195 3.815-.79s1.24-2.458.79-3.815C21.142 14.606 22 13.396 22 12"></svg:path></svg:g>`,
})
export class SiVerifiedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siVideoDuotoneIcon],svg[si-video-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M11.6 6H3.4A2.4 2.4 0 0 0 1 8.4v7.2A2.4 2.4 0 0 0 3.4 18h8.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 11.6 6"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M11.6 6H3.4A2.4 2.4 0 0 0 1 8.4v7.2A2.4 2.4 0 0 0 3.4 18h8.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 11.6 6ZM23 6l-6 6l6 6z"></svg:path></svg:g>`,
})
export class SiVideoDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siViewCompactDuotoneIcon],svg[si-view-compact-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.6 5H4.4A2.4 2.4 0 0 0 2 7.4v10.2A2.4 2.4 0 0 0 4.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V7.4A2.4 2.4 0 0 0 19.6 5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 20V5m5 15V5m5 15V5M2 10h20M2 15h20M4.4 5h15.2A2.4 2.4 0 0 1 22 7.4v10.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 17.6V7.4A2.4 2.4 0 0 1 4.4 5"></svg:path></svg:g>`,
})
export class SiViewCompactDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siViewStreamDuotoneIcon],svg[si-view-stream-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 12h22M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"></svg:path></svg:g>`,
})
export class SiViewStreamDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWalletAltDuotoneIcon],svg[si-wallet-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M4.4 6h13.2C18.925 6 20 7.164 20 8.6v9.8c0 1.436-1.075 2.6-2.4 2.6H4.4C3.075 21 2 19.836 2 18.4V8.6C2 7.164 3.075 6 4.4 6M17 13.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 3h12.6C20.58 3 23 5.42 23 8.4V17M4.4 6h13.2C18.925 6 20 7.164 20 8.6v9.8c0 1.436-1.075 2.6-2.4 2.6H4.4C3.075 21 2 19.836 2 18.4V8.6C2 7.164 3.075 6 4.4 6M17 13.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class SiWalletAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWalletDetailedDuotoneIcon],svg[si-wallet-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 7H4.2C3.54 7 3 7.54 3 8.2v10.4C3 19.92 4.08 21 5.4 21h13.2c1.32 0 2.4-1.08 2.4-2.4V17h-6.286C13.767 17 13 16.284 13 15.4v-2.8c0-.884.768-1.6 1.714-1.6H21V9.4C21 8.08 19.92 7 18.6 7"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8.5v-3m0 0C3 4.67 3.67 4 4.5 4l11.99-1C17.88 3 19 4.06 19 5.38V7H4.5C3.67 7 3 6.33 3 5.5M16 14h.01M4.2 7h14.4C19.92 7 21 8.08 21 9.4v9.2c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6V8.2C3 7.54 3.54 7 4.2 7m10.514 4H21v6h-6.286C13.767 17 13 16.284 13 15.4v-2.8c0-.884.768-1.6 1.714-1.6"></svg:path></svg:g>`,
})
export class SiWalletDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWalletDuotoneIcon],svg[si-wallet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V15h-4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4V6.4A2.4 2.4 0 0 0 18.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 9V6.4c0-1.325-.88-2.4-1.964-2.4H2.964C1.879 4 1 5.075 1 6.4v11.2c0 1.325.88 2.4 1.964 2.4h16.072C20.121 20 21 18.925 21 17.6V15m-1-3h.01M16.6 9h4.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-2.8A1.6 1.6 0 0 1 16.6 9"></svg:path></svg:g>`,
})
export class SiWalletDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWarningDuotoneIcon],svg[si-warning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 16h.008M12 8v5m10-1c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path></svg:g>`,
})
export class SiWarningDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWebcamDuotoneIcon],svg[si-webcam-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M20 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-6 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 0v4m-6 0h12m-4-12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class SiWebcamDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siWindowDuotoneIcon],svg[si-window-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 12h18m-9 9V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path></svg:g>`,
})
export class SiWindowDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siYoutubeDuotoneIcon],svg[si-youtube-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.595 4.463A2.77 2.77 0 0 1 22.54 6.42c.46 1.728.46 5.33.46 5.33s0 3.604-.46 5.33a2.77 2.77 0 0 1-1.945 1.958C18.88 19.5 12 19.5 12 19.5s-6.879 0-8.595-.462A2.77 2.77 0 0 1 1.46 17.08C1 15.353 1 11.75 1 11.75s0-3.602.46-5.33a2.77 2.77 0 0 1 1.945-1.957C5.12 4 12 4 12 4s6.88 0 8.595.463Z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.75 15.021V8.48l5.75 3.271z"></svg:path></svg:g>`,
})
export class SiYoutubeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siZoomInDuotoneIcon],svg[si-zoom-in-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M11 19a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m-9-6h6m-3 3V8m8 3a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class SiZoomInDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siZoomOutDuotoneIcon],svg[si-zoom-out-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M11 19a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m-9-6h6m5 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class SiZoomOutDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
