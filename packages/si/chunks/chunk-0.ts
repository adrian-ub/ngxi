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
  selector: 'svg[siActionsLineIcon],svg[si-actions-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path d="m9 7.5l8 4.5l-8 4.5z"></svg:path></svg:g>`,
})
export class SiActionsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddAlarmFillIcon],svg[si-add-alarm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 13a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-8-5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V9a1 1 0 0 1 1-1m5.293-5.707a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414m-10.586 0a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiAddAlarmFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddCircleFillIcon],svg[si-add-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 7a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAddCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddCircleLineIcon],svg[si-add-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12h8m-4 4V8m10 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiAddCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddAlarmLineIcon],svg[si-add-alarm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 13h8m-4 4V9m6-6l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path>`,
})
export class SiAddAlarmLineIcon {
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
  selector: 'svg[siAddFillIcon],svg[si-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"></svg:path>`,
})
export class SiAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddLineIcon],svg[si-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 12h12m-6 6V6"></svg:path>`,
})
export class SiAddLineIcon {
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
  selector: 'svg[siAddSquareFillIcon],svg[si-add-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M12 7a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAddSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddSquareLineIcon],svg[si-add-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12h8m-4 4V8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiAddSquareLineIcon {
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
  selector: 'svg[siAddToLibraryFillIcon],svg[si-add-to-library-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.4 2h11.2A2.4 2.4 0 0 1 22 4.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 15.6V4.4A2.4 2.4 0 0 1 8.4 2M14 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4 4a1 1 0 0 0-2 0v11.6C2 19.132 4.868 22 8.4 22H20a1 1 0 1 0 0-2H8.4A4.403 4.403 0 0 1 4 15.6z"></svg:path>`,
})
export class SiAddToLibraryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddToLibraryLineIcon],svg[si-add-to-library-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 22H8.4C5.42 22 3 19.58 3 16.6V5m11 10V7m4 4h-8M8.4 3h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"></svg:path>`,
})
export class SiAddToLibraryLineIcon {
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
  selector: 'svg[siAddToPlaylistFillIcon],svg[si-add-to-playlist-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm17.707 3.707a1 1 0 0 0-1.414-1.414L17 15.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0zM4 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiAddToPlaylistFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAddToPlaylistLineIcon],svg[si-add-to-playlist-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 11h12m-1 4l2 2l4-4M4 7h12M4 15h8"></svg:path>`,
})
export class SiAddToPlaylistLineIcon {
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
  selector: 'svg[siAlbumFillIcon],svg[si-album-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-6a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path>`,
})
export class SiAlbumFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlbumLineIcon],svg[si-album-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path><svg:path d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiAlbumLineIcon {
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
  selector: 'svg[siAlertFillIcon],svg[si-alert-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.517 17l7.058-11.783a1.667 1.667 0 0 1 2.85 0L20.483 17a1.667 1.667 0 0 1-1.425 2.5H4.942A1.666 1.666 0 0 1 3.517 17M12 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlertFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlertLineIcon],svg[si-alert-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 16h.008M12 10v3m-1.425-7.783L3.517 17a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L13.426 5.217a1.666 1.666 0 0 0-2.85 0"></svg:path>`,
})
export class SiAlertLineIcon {
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
  selector: 'svg[siAlignBottomDetailedFillIcon],svg[si-align-bottom-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 17h-1.8a1.6 1.6 0 0 1-1.6-1.6v-3.8a1.6 1.6 0 0 1 1.6-1.6h1.8a1.6 1.6 0 0 1 1.6 1.6v3.8a1.6 1.6 0 0 1-1.6 1.6m-9 0H6.6A1.6 1.6 0 0 1 5 15.4V3.6A1.6 1.6 0 0 1 6.6 2h1.8A1.6 1.6 0 0 1 10 3.6v11.8A1.6 1.6 0 0 1 8.4 17"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 21a1 1 0 0 0 1 1h20a1 1 0 1 0 0-2H2a1 1 0 0 0-1 1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignBottomDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignBottomDetailedLineIcon],svg[si-align-bottom-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20m-6.4-12h1.8a1.6 1.6 0 0 1 1.6 1.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6v-4.8a1.6 1.6 0 0 1 1.6-1.6m-9-8h1.8A1.6 1.6 0 0 1 10 3.6v12.8A1.6 1.6 0 0 1 8.4 18H6.6A1.6 1.6 0 0 1 5 16.4V3.6A1.6 1.6 0 0 1 6.6 2"></svg:path>`,
})
export class SiAlignBottomDetailedLineIcon {
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
  selector: 'svg[siAlignBottomSimpleFillIcon],svg[si-align-bottom-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 22a1 1 0 1 1 0-2h20a1 1 0 1 1 0 2zm8.6-5h2.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 13.4 2h-2.8A1.6 1.6 0 0 0 9 3.6v11.8a1.6 1.6 0 0 0 1.6 1.6" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignBottomSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignBottomSimpleLineIcon],svg[si-align-bottom-simple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20M10.6 2h2.8A1.6 1.6 0 0 1 15 3.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 16.4V3.6A1.6 1.6 0 0 1 10.6 2"></svg:path>`,
})
export class SiAlignBottomSimpleLineIcon {
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
  selector: 'svg[siAlignCenterFillIcon],svg[si-align-center-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm3 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-4 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m4 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiAlignCenterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignCenterLineIcon],svg[si-align-center-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 10h12M3 6h18M3 14h18M6 18h12"></svg:path>`,
})
export class SiAlignCenterLineIcon {
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
  selector: 'svg[siAlignHorizCenterDetailedFillIcon],svg[si-align-horiz-center-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1a1 1 0 0 1 1 1v3h6.4A1.6 1.6 0 0 1 21 6.6v1.8a1.6 1.6 0 0 1-1.6 1.6H13v4h2.4a1.6 1.6 0 0 1 1.6 1.6v1.8a1.6 1.6 0 0 1-1.6 1.6H13v3a1 1 0 1 1-2 0v-3H8.6A1.6 1.6 0 0 1 7 17.4v-1.8A1.6 1.6 0 0 1 8.6 14H11v-4H4.6A1.6 1.6 0 0 1 3 8.4V6.6A1.6 1.6 0 0 1 4.6 5H11V2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignHorizCenterDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignHorizCenterDetailedLineIcon],svg[si-align-horiz-center-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 2v3m0 5v4m0 5v3m4-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6H9.6A1.6 1.6 0 0 1 8 17.4v-1.8A1.6 1.6 0 0 1 9.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6m4-9v1.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 8.4V6.6A1.6 1.6 0 0 1 5.6 5h12.8A1.6 1.6 0 0 1 20 6.6"></svg:path>`,
})
export class SiAlignHorizCenterDetailedLineIcon {
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
  selector: 'svg[siAlignHorizCenterSimpleFillIcon],svg[si-align-horiz-center-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1a1 1 0 0 1 1 1v7h6.4a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6H13v7a1 1 0 1 1-2 0v-7H4.6A1.6 1.6 0 0 1 3 13.4v-2.8A1.6 1.6 0 0 1 4.6 9H11V2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignHorizCenterSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignHorizCenterSimpleLineIcon],svg[si-align-horiz-center-simple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 2v7m0 6v7m8-11.4v2.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 13.4v-2.8A1.6 1.6 0 0 1 5.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6"></svg:path>`,
})
export class SiAlignHorizCenterSimpleLineIcon {
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
  selector: 'svg[siAlignJustifyFillIcon],svg[si-align-justify-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiAlignJustifyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignJustifyLineIcon],svg[si-align-justify-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 10h18M3 6h18M3 14h18M3 18h18"></svg:path>`,
})
export class SiAlignJustifyLineIcon {
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
  selector: 'svg[siAlignLeftDetailedFillIcon],svg[si-align-left-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17.4v-1.8A1.6 1.6 0 0 1 8.6 14h3.8a1.6 1.6 0 0 1 1.6 1.6v1.8a1.6 1.6 0 0 1-1.6 1.6H8.6A1.6 1.6 0 0 1 7 17.4m0-9V6.6A1.6 1.6 0 0 1 8.6 5h11.8A1.6 1.6 0 0 1 22 6.6v1.8a1.6 1.6 0 0 1-1.6 1.6H8.6A1.6 1.6 0 0 1 7 8.4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3 1a1 1 0 0 0-1 1v20a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignLeftDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignLeftDetailedLineIcon],svg[si-align-left-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 2v20m12-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 17.4v-1.8A1.6 1.6 0 0 1 7.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6m8-9v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 8.4V6.6A1.6 1.6 0 0 1 7.6 5h12.8A1.6 1.6 0 0 1 22 6.6"></svg:path>`,
})
export class SiAlignLeftDetailedLineIcon {
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
  selector: 'svg[siAlignLeftFillIcon],svg[si-align-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiAlignLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignLeftLineIcon],svg[si-align-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 10h12M3 6h18M3 14h18M3 18h12"></svg:path>`,
})
export class SiAlignLeftLineIcon {
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
  selector: 'svg[siAlignLeftSimpleFillIcon],svg[si-align-left-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2a1 1 0 0 1 2 0v20a1 1 0 1 1-2 0zm5 8.6v2.8A1.6 1.6 0 0 0 8.6 15h11.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 20.4 9H8.6A1.6 1.6 0 0 0 7 10.6" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignLeftSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignLeftSimpleLineIcon],svg[si-align-left-simple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 2v20m20-11.4v2.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 13.4v-2.8A1.6 1.6 0 0 1 7.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6"></svg:path>`,
})
export class SiAlignLeftSimpleLineIcon {
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
  selector: 'svg[siAlignRightDetailedFillIcon],svg[si-align-right-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6h-3.8a1.6 1.6 0 0 0-1.6 1.6v1.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6m0-9V6.6A1.6 1.6 0 0 0 15.4 5H3.6A1.6 1.6 0 0 0 2 6.6v1.8A1.6 1.6 0 0 0 3.6 10h11.8A1.6 1.6 0 0 0 17 8.4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignRightDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignRightDetailedLineIcon],svg[si-align-right-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 2v20m-4-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-1.8a1.6 1.6 0 0 1 1.6-1.6h4.8a1.6 1.6 0 0 1 1.6 1.6m0-9v1.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 8.4V6.6A1.6 1.6 0 0 1 3.6 5h12.8A1.6 1.6 0 0 1 18 6.6"></svg:path>`,
})
export class SiAlignRightDetailedLineIcon {
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
  selector: 'svg[siAlignRightFillIcon],svg[si-align-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm6 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-7 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m7 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiAlignRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignRightLineIcon],svg[si-align-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 10h12M3 6h18M3 14h18M9 18h12"></svg:path>`,
})
export class SiAlignRightLineIcon {
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
  selector: 'svg[siAlignRightSimpleFillIcon],svg[si-align-right-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 2a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0zm-5 8.6v2.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 13.4v-2.8A1.6 1.6 0 0 1 3.6 9h11.8a1.6 1.6 0 0 1 1.6 1.6" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignRightSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignRightSimpleLineIcon],svg[si-align-right-simple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 22V2M2 13.4v-2.8A1.6 1.6 0 0 1 3.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 13.4"></svg:path>`,
})
export class SiAlignRightSimpleLineIcon {
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
  selector: 'svg[siAlignTopDetailedFillIcon],svg[si-align-top-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 7h-1.8A1.6 1.6 0 0 0 14 8.6v3.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6V8.6A1.6 1.6 0 0 0 17.4 7m-9 0H6.6A1.6 1.6 0 0 0 5 8.6v11.8A1.6 1.6 0 0 0 6.6 22h1.8a1.6 1.6 0 0 0 1.6-1.6V8.6A1.6 1.6 0 0 0 8.4 7"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 3a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignTopDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignTopDetailedLineIcon],svg[si-align-top-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 2h20m-6.4 4h1.8A1.6 1.6 0 0 1 19 7.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6V7.6A1.6 1.6 0 0 1 15.6 6m-9 0h1.8A1.6 1.6 0 0 1 10 7.6v12.8A1.6 1.6 0 0 1 8.4 22H6.6A1.6 1.6 0 0 1 5 20.4V7.6A1.6 1.6 0 0 1 6.6 6"></svg:path>`,
})
export class SiAlignTopDetailedLineIcon {
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
  selector: 'svg[siAlignTopSimpleFillIcon],svg[si-align-top-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2a1 1 0 0 0 0 2h20a1 1 0 1 0 0-2zm8.6 5h2.8A1.6 1.6 0 0 1 15 8.6v11.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 20.4V8.6A1.6 1.6 0 0 1 10.6 7" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignTopSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignTopSimpleLineIcon],svg[si-align-top-simple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 2h20M10.6 6h2.8A1.6 1.6 0 0 1 15 7.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 20.4V7.6A1.6 1.6 0 0 1 10.6 6"></svg:path>`,
})
export class SiAlignTopSimpleLineIcon {
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
  selector: 'svg[siAlignVertCenterDetailedFillIcon],svg[si-align-vert-center-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12a1 1 0 0 1 1-1h3V4.6A1.6 1.6 0 0 1 6.6 3h1.8A1.6 1.6 0 0 1 10 4.6V11h4V8.6A1.6 1.6 0 0 1 15.6 7h1.8A1.6 1.6 0 0 1 19 8.6V11h3a1 1 0 1 1 0 2h-3v2.4a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6V13h-4v6.4A1.6 1.6 0 0 1 8.4 21H6.6A1.6 1.6 0 0 1 5 19.4V13H2a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignVertCenterDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignVertCenterDetailedLineIcon],svg[si-align-vert-center-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12h3m14 0h3m-12 0h4m1.6-4h1.8A1.6 1.6 0 0 1 19 9.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6V9.6A1.6 1.6 0 0 1 15.6 8m-9-4h1.8A1.6 1.6 0 0 1 10 5.6v12.8A1.6 1.6 0 0 1 8.4 20H6.6A1.6 1.6 0 0 1 5 18.4V5.6A1.6 1.6 0 0 1 6.6 4"></svg:path>`,
})
export class SiAlignVertCenterDetailedLineIcon {
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
  selector: 'svg[siAlignVertCenterSimpleFillIcon],svg[si-align-vert-center-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12a1 1 0 0 1 1-1h7V4.6A1.6 1.6 0 0 1 10.6 3h2.8A1.6 1.6 0 0 1 15 4.6V11h7a1 1 0 1 1 0 2h-7v6.4a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 19.4V13H2a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignVertCenterSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAlignVertCenterSimpleLineIcon],svg[si-align-vert-center-simple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12h7m6 0h7M10.6 4h2.8A1.6 1.6 0 0 1 15 5.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 18.4V5.6A1.6 1.6 0 0 1 10.6 4"></svg:path>`,
})
export class SiAlignVertCenterSimpleLineIcon {
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
  selector: 'svg[siAppleFillIcon],svg[si-apple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.145 2.402c0 1.024-.44 2.048-1.062 2.786c-.66.818-1.802 1.426-2.71 1.426c-.104 0-.208-.014-.272-.026a2 2 0 0 1-.038-.362c0-1.038.532-2.062 1.102-2.71c.726-.842 1.93-1.478 2.942-1.516c.026.116.038.26.038.402m3.569 6.45l.05-.033c-1.349-1.933-3.397-1.985-3.967-1.985c-.872 0-1.653.31-2.309.57c-.475.188-.885.35-1.217.35c-.367 0-.787-.17-1.256-.358c-.592-.24-1.26-.51-1.998-.51C6.528 6.886 4 8.95 4 12.837c0 2.424.934 4.979 2.09 6.623C7.088 20.86 7.956 22 9.2 22c.59 0 1.023-.183 1.478-.376c.504-.214 1.036-.44 1.84-.44c.814 0 1.3.212 1.768.416c.437.19.857.374 1.513.374c1.36 0 2.254-1.23 3.11-2.462c.96-1.4 1.363-2.774 1.375-2.838c-.078-.026-2.685-1.077-2.685-4.045c0-2.39 1.777-3.555 2.115-3.777"></svg:path>`,
})
export class SiAppleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAppleLineIcon],svg[si-apple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.764 8.819c-.116.09-2.165 1.244-2.165 3.81c0 2.968 2.607 4.019 2.685 4.045c-.012.064-.414 1.438-1.374 2.838c-.857 1.232-1.75 2.462-3.11 2.462c-1.361 0-1.711-.79-3.281-.79c-1.53 0-2.074.816-3.318.816s-2.113-1.14-3.11-2.54C4.933 17.816 4 15.26 4 12.837c0-3.888 2.528-5.95 5.017-5.95c1.322 0 2.424.868 3.254.868c.79 0 2.022-.92 3.526-.92c.57 0 2.618.051 3.967 1.984Zm-4.68-3.63c.621-.739 1.061-1.763 1.061-2.787A2 2 0 0 0 16.107 2c-1.012.038-2.216.674-2.942 1.516c-.57.648-1.102 1.672-1.102 2.71c0 .156.026.312.038.362c.064.012.168.026.272.026c.908 0 2.05-.608 2.71-1.426Z"></svg:path>`,
})
export class SiAppleLineIcon {
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
  selector: 'svg[siArchiveAltFillIcon],svg[si-archive-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4.6A2.6 2.6 0 0 1 2.6 2h18.8A2.6 2.6 0 0 1 24 4.6v.8A2.6 2.6 0 0 1 21.4 8h-.486L20 18.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3.086 8H2.6A2.6 2.6 0 0 1 0 5.4zM2.6 4a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-.8a.6.6 0 0 0-.6-.6zm5.693 6.293a1 1 0 0 1 1.414 0L12 12.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 14l2.293 2.293a1 1 0 0 1-1.414 1.414L12 15.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 14l-2.293-2.293a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiArchiveAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArchiveAltLineIcon],svg[si-archive-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 7l-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7m12 10l-6-6m6 0l-6 6M2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3"></svg:path>`,
})
export class SiArchiveAltLineIcon {
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
  selector: 'svg[siArchiveFillIcon],svg[si-archive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4.6A2.6 2.6 0 0 1 2.6 2h18.8A2.6 2.6 0 0 1 24 4.6v.8A2.6 2.6 0 0 1 21.4 8h-.486L20 18.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3.086 8H2.6A2.6 2.6 0 0 1 0 5.4zM2.6 4a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-.8a.6.6 0 0 0-.6-.6zM15 9H9V7H7v2.2A1.8 1.8 0 0 0 8.8 11h6.4A1.8 1.8 0 0 0 17 9.2V7h-2z" clip-rule="evenodd"></svg:path>`,
})
export class SiArchiveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArchiveLineIcon],svg[si-archive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 7l-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7m13 0v2.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V7M2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3"></svg:path>`,
})
export class SiArchiveLineIcon {
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
  selector: 'svg[siArrowDownwardCircleFillIcon],svg[si-arrow-downward-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m14.707.707l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V8a1 1 0 1 1 2 0v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiArrowDownwardCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowDownwardCircleLineIcon],svg[si-arrow-downward-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 12l4 4m0 0l4-4m-4 4V8m10 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiArrowDownwardCircleLineIcon {
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
  selector: 'svg[siArrowDownwardFillIcon],svg[si-arrow-downward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6a1 1 0 1 0-2 0v9.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 15.586z"></svg:path>`,
})
export class SiArrowDownwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowDownwardLineIcon],svg[si-arrow-downward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 14l4 4m0 0l4-4m-4 4V6"></svg:path>`,
})
export class SiArrowDownwardLineIcon {
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
  selector: 'svg[siArrowDownwardSquareFillIcon],svg[si-arrow-downward-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21m5.893-4.293a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 13.586V8a1 1 0 1 0-2 0v5.586l-2.293-2.293a1 1 0 0 0-1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiArrowDownwardSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowDownwardSquareLineIcon],svg[si-arrow-downward-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 12l4 4m0 0l4-4m-4 4V8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiArrowDownwardSquareLineIcon {
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
  selector: 'svg[siArrowLeftCircleFillIcon],svg[si-arrow-left-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-.707-14.707l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 1 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiArrowLeftCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowLeftCircleLineIcon],svg[si-arrow-left-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m12 16l-4-4m0 0l4-4m-4 4h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiArrowLeftCircleLineIcon {
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
  selector: 'svg[siArrowLeftFillIcon],svg[si-arrow-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.707 8.707a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L8.414 13H18a1 1 0 1 0 0-2H8.414z"></svg:path>`,
})
export class SiArrowLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowLeftLineIcon],svg[si-arrow-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m10 16l-4-4m0 0l4-4m-4 4h12"></svg:path>`,
})
export class SiArrowLeftLineIcon {
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
  selector: 'svg[siArrowLeftSquareFillIcon],svg[si-arrow-left-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H5.4A2.4 2.4 0 0 0 3 5.4m4.293 5.893a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 1 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiArrowLeftSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowLeftSquareLineIcon],svg[si-arrow-left-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m12 16l-4-4m0 0l4-4m-4 4h8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiArrowLeftSquareLineIcon {
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
  selector: 'svg[siArrowRightCircleFillIcon],svg[si-arrow-right-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m.707-14.707l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L13.586 13H8a1 1 0 1 1 0-2h5.586l-2.293-2.293a1 1 0 0 1 1.414-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiArrowRightCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowRightCircleLineIcon],svg[si-arrow-right-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m12 16l4-4m0 0l-4-4m4 4H8m14 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiArrowRightCircleLineIcon {
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
  selector: 'svg[siArrowRightFillIcon],svg[si-arrow-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.707 7.293a1 1 0 1 0-1.414 1.414L15.586 11H6a1 1 0 1 0 0 2h9.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414z"></svg:path>`,
})
export class SiArrowRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowRightLineIcon],svg[si-arrow-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 16l4-4m0 0l-4-4m4 4H6"></svg:path>`,
})
export class SiArrowRightLineIcon {
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
  selector: 'svg[siArrowRightSquareFillIcon],svg[si-arrow-right-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3h13.2A2.4 2.4 0 0 1 21 5.4m-4.293 5.893a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L13.586 13H8a1 1 0 1 1 0-2h5.586l-2.293-2.293a1 1 0 0 1 1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiArrowRightSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowRightSquareLineIcon],svg[si-arrow-right-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m12 16l4-4m0 0l-4-4m4 4H8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiArrowRightSquareLineIcon {
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
  selector: 'svg[siArrowUpwardCircleFillIcon],svg[si-arrow-upward-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-14.707-.707l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 10.414V16a1 1 0 1 1-2 0v-5.586l-2.293 2.293a1 1 0 0 1-1.414-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiArrowUpwardCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowUpwardCircleLineIcon],svg[si-arrow-upward-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 12l4-4m0 0l4 4m-4-4v8m10-4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiArrowUpwardCircleLineIcon {
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
  selector: 'svg[siArrowUpwardFillIcon],svg[si-arrow-upward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.707 5.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 8.414V18a1 1 0 1 0 2 0V8.414l2.293 2.293a1 1 0 0 0 1.414-1.414z"></svg:path>`,
})
export class SiArrowUpwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowUpwardLineIcon],svg[si-arrow-upward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 10l4-4m0 0l4 4m-4-4v12"></svg:path>`,
})
export class SiArrowUpwardLineIcon {
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
  selector: 'svg[siArrowUpwardSquareFillIcon],svg[si-arrow-upward-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m5.893 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 10.414V16a1 1 0 1 1-2 0v-5.586l-2.293 2.293a1 1 0 0 1-1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiArrowUpwardSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArrowUpwardSquareLineIcon],svg[si-arrow-upward-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 12l4-4m0 0l4 4m-4-4v8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiArrowUpwardSquareLineIcon {
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
  selector: 'svg[siArticleFillIcon],svg[si-article-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.4 3h15.2A3.4 3.4 0 0 1 23 6.4v11.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 17.6V6.4A3.4 3.4 0 0 1 4.4 3M7 9a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiArticleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siArticleLineIcon],svg[si-article-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12h8m-8 3h4M8 9h8M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 17.6V6.4A2.4 2.4 0 0 1 4.4 4"></svg:path>`,
})
export class SiArticleLineIcon {
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
  selector: 'svg[siAssignmentFillIcon],svg[si-assignment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3a1 1 0 1 1 2 0h2a3 3 0 1 0-6 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8v1.2a.8.8 0 0 0 .8.8h6.4a.8.8 0 0 0 .8-.8zm-9 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class SiAssignmentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siAssignmentLineIcon],svg[si-assignment-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 14h10M7 11h10M7 17h6m3-14v2.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3m2 0a2 2 0 1 1 4 0M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiAssignmentLineIcon {
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
  selector: 'svg[siBallotFillIcon],svg[si-ballot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M8 7a2 2 0 1 0 0 4a2 2 0 0 0 0-4m5 1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0 6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-7 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path>`,
})
export class SiBallotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBallotLineIcon],svg[si-ballot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 15h5m-5-6h5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M9 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SiBallotLineIcon {
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
  selector: 'svg[siBarcodeFillIcon],svg[si-barcode-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.4 3A1.4 1.4 0 0 0 3 4.4V6a1 1 0 0 1-2 0V4.4A3.4 3.4 0 0 1 4.4 1H6a1 1 0 0 1 0 2zM17 2a1 1 0 0 1 1-1h1.6A3.4 3.4 0 0 1 23 4.4V6a1 1 0 1 1-2 0V4.4A1.4 1.4 0 0 0 19.6 3H18a1 1 0 0 1-1-1M2 17a1 1 0 0 1 1 1v1.6A1.4 1.4 0 0 0 4.4 21H6a1 1 0 1 1 0 2H4.4A3.4 3.4 0 0 1 1 19.6V18a1 1 0 0 1 1-1m20 0a1 1 0 0 1 1 1v1.6a3.4 3.4 0 0 1-3.4 3.4H18a1 1 0 1 1 0-2h1.6a1.4 1.4 0 0 0 1.4-1.4V18a1 1 0 0 1 1-1m-4-9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m-3 1a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-5-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M7 9a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"></svg:path>`,
})
export class SiBarcodeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBarcodeLineIcon],svg[si-barcode-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 22H4.4A2.4 2.4 0 0 1 2 19.6V18m16 4h1.6a2.4 2.4 0 0 0 2.4-2.4V18m0-12V4.4A2.4 2.4 0 0 0 19.6 2H18M6 2H4.4A2.4 2.4 0 0 0 2 4.4V6m16 3v6m-4-6v6m-4-6v6M6 9v6"></svg:path>`,
})
export class SiBarcodeLineIcon {
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
  selector: 'svg[siBarcodeScanAltFillIcon],svg[si-barcode-scan-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siBarcodeScanAltFill0)"><svg:path d="M3.4 2A1.4 1.4 0 0 0 2 3.4V5a1 1 0 0 1-2 0V3.4A3.4 3.4 0 0 1 3.4 0H5a1 1 0 0 1 0 2zM18 1a1 1 0 0 1 1-1h1.6A3.4 3.4 0 0 1 24 3.4V5a1 1 0 1 1-2 0V3.4A1.4 1.4 0 0 0 20.6 2H19a1 1 0 0 1-1-1M1 18a1 1 0 0 1 1 1v1.6A1.4 1.4 0 0 0 3.4 22H5a1 1 0 1 1 0 2H3.4A3.4 3.4 0 0 1 0 20.6V19a1 1 0 0 1 1-1m22 0a1 1 0 0 1 1 1v1.6a3.4 3.4 0 0 1-3.4 3.4H19a1 1 0 1 1 0-2h1.6a1.4 1.4 0 0 0 1.4-1.4V19a1 1 0 0 1 1-1M9.4 5H6.6A1.6 1.6 0 0 0 5 6.6v2.8A1.6 1.6 0 0 0 6.6 11h2.8A1.6 1.6 0 0 0 11 9.4V6.6A1.6 1.6 0 0 0 9.4 5m-2.8 8h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8A1.6 1.6 0 0 1 9.4 19H6.6A1.6 1.6 0 0 1 5 17.4v-2.8A1.6 1.6 0 0 1 6.6 13m10.8-8h-2.8A1.6 1.6 0 0 0 13 6.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 19 9.4V6.6A1.6 1.6 0 0 0 17.4 5m-2.8 8h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8a1.6 1.6 0 0 1-1.6-1.6v-2.8a1.6 1.6 0 0 1 1.6-1.6"></svg:path></svg:g><svg:defs><svg:clippath id="siBarcodeScanAltFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiBarcodeScanAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBarcodeScanAltLineIcon],svg[si-barcode-scan-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#siBarcodeScanAltLine0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 23H3.4A2.4 2.4 0 0 1 1 20.6V19m18 4h1.6a2.4 2.4 0 0 0 2.4-2.4V19m0-14V3.4A2.4 2.4 0 0 0 20.6 1H19M5 1H3.4A2.4 2.4 0 0 0 1 3.4V5m4.6-1h2.8A1.6 1.6 0 0 1 10 5.6v2.8A1.6 1.6 0 0 1 8.4 10H5.6A1.6 1.6 0 0 1 4 8.4V5.6A1.6 1.6 0 0 1 5.6 4m0 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8A1.6 1.6 0 0 1 8.4 20H5.6A1.6 1.6 0 0 1 4 18.4v-2.8A1.6 1.6 0 0 1 5.6 14m10-10h2.8A1.6 1.6 0 0 1 20 5.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 14 8.4V5.6A1.6 1.6 0 0 1 15.6 4m0 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8a1.6 1.6 0 0 1-1.6-1.6v-2.8a1.6 1.6 0 0 1 1.6-1.6"></svg:path></svg:g><svg:defs><svg:clippath id="siBarcodeScanAltLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiBarcodeScanAltLineIcon {
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
  selector: 'svg[siBarcodeScanFillIcon],svg[si-barcode-scan-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5.4A1.4 1.4 0 0 1 5.4 4H7a1 1 0 0 0 0-2H5.4A3.4 3.4 0 0 0 2 5.4V7a1 1 0 0 0 2 0zM17 2a1 1 0 1 0 0 2h1.6A1.4 1.4 0 0 1 20 5.4V7a1 1 0 1 0 2 0V5.4A3.4 3.4 0 0 0 18.6 2zM4 17a1 1 0 1 0-2 0v1.6A3.4 3.4 0 0 0 5.4 22H7a1 1 0 1 0 0-2H5.4A1.4 1.4 0 0 1 4 18.6zm18 0a1 1 0 1 0-2 0v1.6a1.4 1.4 0 0 1-1.4 1.4H17a1 1 0 1 0 0 2h1.6a3.4 3.4 0 0 0 3.4-3.4zM1 11a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiBarcodeScanFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBarcodeScanLineIcon],svg[si-barcode-scan-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 21H5.4A2.4 2.4 0 0 1 3 18.6V17m14 4h1.6a2.4 2.4 0 0 0 2.4-2.4V17m0-10V5.4A2.4 2.4 0 0 0 18.6 3H17M7 3H5.4A2.4 2.4 0 0 0 3 5.4V7m-2 5h22"></svg:path>`,
})
export class SiBarcodeScanLineIcon {
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
  selector: 'svg[siBookmarkFillIcon],svg[si-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 17.025c-.142 0-.341.072-.588.208a7 7 0 0 0-.835.56c-.614.464-1.317 1.085-1.983 1.706a62 62 0 0 0-2.455 2.43l-.04.041l-.013.014a.05.05 0 0 1-.055.012A.05.05 0 0 1 6 21.95V4.438A2.43 2.43 0 0 1 8.43 2h7.14A2.43 2.43 0 0 1 18 4.438V21.95a.05.05 0 0 1-.085.034h-.001l-.013-.014l-.04-.041l-.151-.158a67 67 0 0 0-2.304-2.272c-.666-.621-1.37-1.242-1.983-1.707a7 7 0 0 0-.835-.56c-.247-.135-.446-.207-.588-.207" clip-rule="evenodd"></svg:path>`,
})
export class SiBookmarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBookmarkLineIcon],svg[si-bookmark-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 17.025c-.142 0-.341.072-.588.208a7 7 0 0 0-.835.56c-.614.464-1.317 1.085-1.983 1.706a62 62 0 0 0-2.455 2.43l-.04.041l-.013.014a.05.05 0 0 1-.055.012A.05.05 0 0 1 6 21.95V4.438A2.43 2.43 0 0 1 8.43 2h7.14A2.43 2.43 0 0 1 18 4.438V21.95a.05.05 0 0 1-.085.034h-.001l-.013-.014l-.04-.041l-.151-.158a67 67 0 0 0-2.304-2.272c-.666-.621-1.37-1.242-1.983-1.707a7 7 0 0 0-.835-.56c-.247-.135-.446-.207-.588-.207Z" clip-rule="evenodd"></svg:path>`,
})
export class SiBookmarkLineIcon {
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
  selector: 'svg[siBriefcaseDetailedFillIcon],svg[si-briefcase-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4.8V7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7H16V4.8A1.8 1.8 0 0 0 14.2 3H9.8A1.8 1.8 0 0 0 8 4.8m2 .2v2h4V5zm.8 6.5a1.3 1.3 0 0 0-1.3 1.3v.2H3v2h6.5v.2a1.3 1.3 0 0 0 1.3 1.3h2.4a1.3 1.3 0 0 0 1.3-1.3V15H21v-2h-6.5v-.2a1.3 1.3 0 0 0-1.3-1.3z" clip-rule="evenodd"></svg:path>`,
})
export class SiBriefcaseDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBriefcaseDetailedLineIcon],svg[si-briefcase-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 14h8m4 0h8m-7-7V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V7M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7m6.4 5h2.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1-.8-.8v-2.4a.8.8 0 0 1 .8-.8"></svg:path>`,
})
export class SiBriefcaseDetailedLineIcon {
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
  selector: 'svg[siBriefcaseFillIcon],svg[si-briefcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7H16V4.8A1.8 1.8 0 0 0 14.2 3H9.8A1.8 1.8 0 0 0 8 4.8zm2 0V5h4v2zm0 1v12H8V8zm6 0v12h-2V8z" clip-rule="evenodd"></svg:path>`,
})
export class SiBriefcaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBriefcaseLineIcon],svg[si-briefcase-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 21V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V21M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7"></svg:path>`,
})
export class SiBriefcaseLineIcon {
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
  selector: 'svg[siBriefcaseMedicalFillIcon],svg[si-briefcase-medical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4.8V7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7H16V4.8A1.8 1.8 0 0 0 14.2 3H9.8A1.8 1.8 0 0 0 8 4.8m2 .2v2h4V5zm2 5a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiBriefcaseMedicalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBriefcaseMedicalLineIcon],svg[si-briefcase-medical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13.25a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zM11.25 17a.75.75 0 0 0 1.5 0zm1.5-6a.75.75 0 0 0-1.5 0zM4.4 7.75h15.2v-1.5H4.4zm15.2 0c.911 0 1.65.739 1.65 1.65h1.5a3.15 3.15 0 0 0-3.15-3.15zm1.65 1.65v9.2h1.5V9.4zm0 9.2a1.65 1.65 0 0 1-1.65 1.65v1.5a3.15 3.15 0 0 0 3.15-3.15zm-1.65 1.65H4.4v1.5h15.2zm-15.2 0a1.65 1.65 0 0 1-1.65-1.65h-1.5a3.15 3.15 0 0 0 3.15 3.15zM2.75 18.6V9.4h-1.5v9.2zm0-9.2c0-.911.739-1.65 1.65-1.65v-1.5A3.15 3.15 0 0 0 1.25 9.4zM9 14.75h6v-1.5H9zM12.75 17v-6h-1.5v6zM9.8 4.75h4.4v-1.5H9.8zm4.4 0a.05.05 0 0 1 .05.05h1.5a1.55 1.55 0 0 0-1.55-1.55zm.05.05V7h1.5V4.8zM9.75 7V4.8h-1.5V7zm0-2.2a.05.05 0 0 1 .05-.05v-1.5A1.55 1.55 0 0 0 8.25 4.8z"></svg:path>`,
})
export class SiBriefcaseMedicalLineIcon {
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
  selector: 'svg[siBriefcasesFillIcon],svg[si-briefcases-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 6V3.8A1.8 1.8 0 0 1 11.8 2h4.4A1.8 1.8 0 0 1 18 3.8V6h2.6A2.4 2.4 0 0 1 23 8.4v8.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V8.4A2.4 2.4 0 0 1 7.4 6zm2 0V4h4v2zm0 1v11h-2V7zm6 0v11h-2V7z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3 11a1 1 0 1 0-2 0v5.6C1 20.132 3.868 23 7.4 23H19a1 1 0 1 0 0-2H7.4A4.403 4.403 0 0 1 3 16.6z"></svg:path>`,
})
export class SiBriefcasesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siBriefcasesLineIcon],svg[si-briefcases-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19 22H7.4C4.42 22 2 19.58 2 16.6V11m15 8V3.8a.8.8 0 0 0-.8-.8h-4.4a.8.8 0 0 0-.8.8V19M7.4 6h13.2A2.4 2.4 0 0 1 23 8.4v8.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V8.4A2.4 2.4 0 0 1 7.4 6"></svg:path>`,
})
export class SiBriefcasesLineIcon {
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
  selector: 'svg[siCancelPhotoFillIcon],svg[si-cancel-photo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.4 2h11.2A2.4 2.4 0 0 1 22 4.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 15.6V4.4A2.4 2.4 0 0 1 8.4 2m3.479 4.464a1 1 0 1 0-1.415 1.415L12.587 10l-2.122 2.121a1 1 0 0 0 1.415 1.415L14 11.414l2.121 2.122a1 1 0 1 0 1.415-1.415L15.414 10l2.122-2.121a1 1 0 0 0-1.415-1.415l-2.12 2.122z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4 4a1 1 0 0 0-2 0v11.6C2 19.132 4.868 22 8.4 22H20a1 1 0 1 0 0-2H8.4A4.403 4.403 0 0 1 4 15.6z"></svg:path>`,
})
export class SiCancelPhotoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCancelPhotoLineIcon],svg[si-cancel-photo-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 22H8.4C5.42 22 3 19.58 3 16.6V5m13.828 8.828l-5.656-5.656m5.656 0l-5.656 5.656M8.4 3h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"></svg:path>`,
})
export class SiCancelPhotoLineIcon {
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
  selector: 'svg[siCancelPresentationFillIcon],svg[si-cancel-presentation-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4m13.55 3.05a1 1 0 0 1 0 1.414L13.414 12l3.536 3.536a1 1 0 0 1-1.414 1.414L12 13.414L8.464 16.95a1 1 0 0 1-1.414-1.414L10.586 12L7.05 8.464A1 1 0 1 1 8.464 7.05L12 10.586l3.536-3.536a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiCancelPresentationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCancelPresentationLineIcon],svg[si-cancel-presentation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path>`,
})
export class SiCancelPresentationLineIcon {
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
  selector: 'svg[siChatFillIcon],svg[si-chat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3"></svg:path>`,
})
export class SiChatFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChatLineIcon],svg[si-chat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3Z"></svg:path>`,
})
export class SiChatLineIcon {
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
  selector: 'svg[siChatTextFillIcon],svg[si-chat-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.475 16H19c1.663 0 3-1.338 3-3V6c0-1.662-1.337-3-3-3H5C3.338 3 2 4.338 2 6v7c0 1.662 1.338 3 3 3h2.513c.3 0 .587.137.774.375l2.925 3.65c.4.5 1.163.5 1.563 0l2.925-3.65a.99.99 0 0 1 .775-.375M7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiChatTextFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChatTextLineIcon],svg[si-chat-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 8h8m-8 3h8m3 5h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3"></svg:path>`,
})
export class SiChatTextLineIcon {
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
  selector: 'svg[siCheckAltFillIcon],svg[si-check-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.47 4.118a1 1 0 0 1 .412 1.353l-8 15a1 1 0 0 1-1.59.236l-6-6a1 1 0 1 1 1.415-1.414l5.046 5.046l7.365-13.81a1 1 0 0 1 1.353-.411" clip-rule="evenodd"></svg:path>`,
})
export class SiCheckAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCheckAltLineIcon],svg[si-check-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m5 14l6 6l8-15"></svg:path>`,
})
export class SiCheckAltLineIcon {
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
  selector: 'svg[siCheckCircleFillIcon],svg[si-check-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.186-2.419a1 1 0 1 0-1.628-1.162l-4.314 6.04l-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z" clip-rule="evenodd"></svg:path>`,
})
export class SiCheckCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCheckCircleLineIcon],svg[si-check-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 13l3 3l5-7m6 3c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiCheckCircleLineIcon {
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
  selector: 'svg[siCheckFillIcon],svg[si-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.633 6.226a1 1 0 0 1 .141 1.407l-9 11a1 1 0 0 1-1.481.074l-5-5a1 1 0 1 1 1.414-1.414l4.219 4.219l8.3-10.145a1 1 0 0 1 1.407-.141" clip-rule="evenodd"></svg:path>`,
})
export class SiCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCheckLineIcon],svg[si-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 13l5 5l9-11"></svg:path>`,
})
export class SiCheckLineIcon {
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
  selector: 'svg[siCheckSquareFillIcon],svg[si-check-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m11.414 6.581a1 1 0 1 0-1.628-1.162l-4.314 6.04l-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z" clip-rule="evenodd"></svg:path>`,
})
export class SiCheckSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCheckSquareLineIcon],svg[si-check-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 13l3 3l5-7M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiCheckSquareLineIcon {
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
  selector: 'svg[siChecklistAltFillIcon],svg[si-checklist-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.707 6.707a1 1 0 0 0-1.414-1.414L18 8.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0zM2 7a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zm20.707 6.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L18 16.586l3.293-3.293a1 1 0 0 1 1.414 0M2 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiChecklistAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChecklistAltLineIcon],svg[si-checklist-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16 8l2 2l4-4M2 8h10m4 8l2 2l4-4M2 16h10"></svg:path>`,
})
export class SiChecklistAltLineIcon {
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
  selector: 'svg[siChecklistFillIcon],svg[si-checklist-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.707 6.707a1 1 0 0 0-1.414-1.414L4 8.586L2.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0zM12 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-3.293 6.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L4 16.586l3.293-3.293a1 1 0 0 1 1.414 0M12 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiChecklistFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChecklistLineIcon],svg[si-checklist-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m2 8l2 2l4-4m4 2h10M2 16l2 2l4-4m4 2h10"></svg:path>`,
})
export class SiChecklistLineIcon {
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
  selector: 'svg[siChevronLeftAltFillIcon],svg[si-chevron-left-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.707 3.293a1 1 0 0 1 0 1.414L9.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiChevronLeftAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronLeftAltLineIcon],svg[si-chevron-left-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 20l-8-8l8-8"></svg:path>`,
})
export class SiChevronLeftAltLineIcon {
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
  selector: 'svg[siChevronLeftCircleFillIcon],svg[si-chevron-left-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-7.793-3.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.914 12z" clip-rule="evenodd"></svg:path>`,
})
export class SiChevronLeftCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronLeftCircleLineIcon],svg[si-chevron-left-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.5 16l-4-4l4-4m8.5 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiChevronLeftCircleLineIcon {
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
  selector: 'svg[siChevronLeftFillIcon],svg[si-chevron-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.707 7.293a1 1 0 0 1 0 1.414L11.414 12l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiChevronLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronLeftLineIcon],svg[si-chevron-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 16l-4-4l4-4"></svg:path>`,
})
export class SiChevronLeftLineIcon {
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
  selector: 'svg[siChevronLeftSquareFillIcon],svg[si-chevron-left-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m8.807 5.707a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.914 12z" clip-rule="evenodd"></svg:path>`,
})
export class SiChevronLeftSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronLeftSquareLineIcon],svg[si-chevron-left-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.5 16l-4-4l4-4M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiChevronLeftSquareLineIcon {
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
  selector: 'svg[siChevronRightAltFillIcon],svg[si-chevron-right-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.293 3.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L14.586 12L7.293 4.707a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiChevronRightAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronRightAltLineIcon],svg[si-chevron-right-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 20l8-8l-8-8"></svg:path>`,
})
export class SiChevronRightAltLineIcon {
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
  selector: 'svg[siChevronRightCircleFillIcon],svg[si-chevron-right-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M11.207 7.293a1 1 0 0 0-1.414 1.414L13.086 12l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiChevronRightCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronRightCircleLineIcon],svg[si-chevron-right-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.5 16l4-4l-4-4M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiChevronRightCircleLineIcon {
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
  selector: 'svg[siChevronRightFillIcon],svg[si-chevron-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 12L9.293 8.707a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiChevronRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronRightLineIcon],svg[si-chevron-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 16l4-4l-4-4"></svg:path>`,
})
export class SiChevronRightLineIcon {
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
  selector: 'svg[siChevronRightSquareFillIcon],svg[si-chevron-right-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m5.807 4.293a1 1 0 0 0-1.414 1.414L13.086 12l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiChevronRightSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siChevronRightSquareLineIcon],svg[si-chevron-right-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.5 16l4-4l-4-4M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiChevronRightSquareLineIcon {
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
  selector: 'svg[siClearAllFillIcon],svg[si-clear-all-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m-2 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"></svg:path>`,
})
export class SiClearAllFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClearAllLineIcon],svg[si-clear-all-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 12h12M4 16h12M8 8h12"></svg:path>`,
})
export class SiClearAllLineIcon {
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
  selector: 'svg[siClearDayFillIcon],svg[si-clear-day-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M1 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m18 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M7.047 16.953a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 1 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0m12.73-12.73a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 1 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0m-2.824 12.73a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 1 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414M4.223 4.223a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 0 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10"></svg:path>`,
})
export class SiClearDayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClearDayLineIcon],svg[si-clear-day-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 4a.75.75 0 0 0 1.5 0zm1.5-2a.75.75 0 0 0-1.5 0zm-1.5 20a.75.75 0 0 0 1.5 0zm1.5-2a.75.75 0 0 0-1.5 0zM4 12.75a.75.75 0 0 0 0-1.5zm-2-1.5a.75.75 0 0 0 0 1.5zm20 1.5a.75.75 0 0 0 0-1.5zm-2-1.5a.75.75 0 0 0 0 1.5zM6.87 18.19a.75.75 0 1 0-1.06-1.06zm-2.47.35a.75.75 0 1 0 1.06 1.06zm13.79-1.41a.75.75 0 1 0-1.06 1.06zm.35 2.47a.75.75 0 1 0 1.06-1.06zM5.46 4.4A.75.75 0 0 0 4.4 5.46zm.35 2.47a.75.75 0 0 0 1.06-1.06zM12.75 4V2h-1.5v2zm0 18v-2h-1.5v2zM4 11.25H2v1.5h2zm18 0h-2v1.5h2zM5.81 17.13L4.4 18.54l1.06 1.06l1.41-1.41zM18.54 4.4l-1.41 1.41l1.06 1.06l1.41-1.41zm-1.41 13.79l1.41 1.41l1.06-1.06l-1.41-1.41zM4.4 5.46l1.41 1.41l1.06-1.06L5.46 4.4zM15.25 12A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"></svg:path>`,
})
export class SiClearDayLineIcon {
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
  selector: 'svg[siClipboardAltFillIcon],svg[si-clipboard-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 0a3 3 0 0 0-3 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H15a3 3 0 0 0-3-3m-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class SiClipboardAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClipboardAltLineIcon],svg[si-clipboard-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 3a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10"></svg:path>`,
})
export class SiClipboardAltLineIcon {
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
  selector: 'svg[siClipboardCheckAltFillIcon],svg[si-clipboard-check-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 3a3 3 0 1 1 6 0h3.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3zm3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4.814 8.581a1 1 0 1 0-1.628-1.162l-4.314 6.04l-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z" clip-rule="evenodd"></svg:path>`,
})
export class SiClipboardCheckAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClipboardCheckAltLineIcon],svg[si-clipboard-check-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 3a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10M8 14l3 3l5-7"></svg:path>`,
})
export class SiClipboardCheckAltLineIcon {
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
  selector: 'svg[siClipboardCheckFillIcon],svg[si-clipboard-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1.8V3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H17V1.8A1.8 1.8 0 0 0 15.2 0H8.8A1.8 1.8 0 0 0 7 1.8m8 .2H9v2h6zm1.814 8.581a1 1 0 1 0-1.628-1.162l-4.314 6.04l-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z" clip-rule="evenodd"></svg:path>`,
})
export class SiClipboardCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClipboardCheckLineIcon],svg[si-clipboard-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8m0 11l3 3l5-7M8.8 1h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8"></svg:path>`,
})
export class SiClipboardCheckLineIcon {
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
  selector: 'svg[siClipboardFillIcon],svg[si-clipboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 3V1.8A1.8 1.8 0 0 1 8.8 0h6.4A1.8 1.8 0 0 1 17 1.8V3h1.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3zm2-1h6v2H9z" clip-rule="evenodd"></svg:path>`,
})
export class SiClipboardFillIcon {
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
  selector: 'svg[siClipboardFilledAltFillIcon],svg[si-clipboard-filled-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 0a3 3 0 0 0-3 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H15a3 3 0 0 0-3-3m-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-5 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiClipboardFilledAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClipboardFilledAltLineIcon],svg[si-clipboard-filled-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 3a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10M7 13h10M7 10h10M7 16h6"></svg:path>`,
})
export class SiClipboardFilledAltLineIcon {
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
  selector: 'svg[siClipboardFilledFillIcon],svg[si-clipboard-filled-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1.8V3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H17V1.8A1.8 1.8 0 0 0 15.2 0H8.8A1.8 1.8 0 0 0 7 1.8m8 .2H9v2h6zm-9 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiClipboardFilledFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClipboardFilledLineIcon],svg[si-clipboard-filled-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8M7 13h10M7 10h10M7 16h6M8.8 1h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8"></svg:path>`,
})
export class SiClipboardFilledLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClipboardLineIcon],svg[si-clipboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8m.8-2h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8"></svg:path>`,
})
export class SiClipboardLineIcon {
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
  selector: 'svg[siClockAltFillIcon],svg[si-clock-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-9-6a1 1 0 1 0-2 0v5.844c0 .55.375 1.03.909 1.164l3.848.962a1 1 0 1 0 .486-1.94L13 11.22z" clip-rule="evenodd"></svg:path>`,
})
export class SiClockAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClockAltLineIcon],svg[si-clock-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 6v5.844a.2.2 0 0 0 .152.194L16 13m6-1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiClockAltLineIcon {
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
  selector: 'svg[siClockFillIcon],svg[si-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-9-6a1 1 0 1 0-2 0v5H8a1 1 0 1 0 0 2h3.8a1.2 1.2 0 0 0 1.2-1.2z" clip-rule="evenodd"></svg:path>`,
})
export class SiClockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siClockLineIcon],svg[si-clock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 6v5.8a.2.2 0 0 1-.2.2H8m14 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiClockLineIcon {
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
  selector: 'svg[siCloseCircleFillIcon],svg[si-close-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.05-4.95a1 1 0 0 1 0 1.414L13.414 12l3.536 3.536a1 1 0 0 1-1.414 1.414L12 13.414L8.464 16.95a1 1 0 1 1-1.414-1.414L10.586 12L7.05 8.464A1 1 0 1 1 8.464 7.05L12 10.586l3.536-3.536a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiCloseCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCloseCircleLineIcon],svg[si-close-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiCloseCircleLineIcon {
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
  selector: 'svg[siCloseFillIcon],svg[si-close-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.95 8.464a1 1 0 0 0-1.414-1.414L12 10.586L8.464 7.05A1 1 0 1 0 7.05 8.464L10.586 12L7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 1 0 1.414-1.414L13.414 12z"></svg:path>`,
})
export class SiCloseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCloseLineIcon],svg[si-close-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757"></svg:path>`,
})
export class SiCloseLineIcon {
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
  selector: 'svg[siCloseSquareFillIcon],svg[si-close-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m11.55 4.05a1 1 0 0 1 0 1.414L13.414 12l3.536 3.536a1 1 0 0 1-1.414 1.414L12 13.414L8.464 16.95a1 1 0 1 1-1.414-1.414L10.586 12L7.05 8.464A1 1 0 1 1 8.464 7.05L12 10.586l3.536-3.536a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiCloseSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCloseSquareLineIcon],svg[si-close-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiCloseSquareLineIcon {
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
  selector: 'svg[siCloudFillIcon],svg[si-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4a5 5 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042q-.123.617-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82" clip-rule="evenodd"></svg:path>`,
})
export class SiCloudFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCloudLineIcon],svg[si-cloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4a5 5 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042q-.123.617-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82Z" clip-rule="evenodd"></svg:path>`,
})
export class SiCloudLineIcon {
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
  selector: 'svg[siCodeFillIcon],svg[si-code-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.707 6.707a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L3.414 12zm8-1.414a1 1 0 1 0-1.414 1.414L20.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414z"></svg:path>`,
})
export class SiCodeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCodeLineIcon],svg[si-code-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 6l-6 6l6 6m8 0l6-6l-6-6"></svg:path>`,
})
export class SiCodeLineIcon {
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
  selector: 'svg[siCodeMutedFillIcon],svg[si-code-muted-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.707 7.293a1 1 0 1 0-1.414 1.414L17.586 12l-3.293 3.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414zm-6 1.414a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L6.414 12z"></svg:path>`,
})
export class SiCodeMutedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCodeMutedLineIcon],svg[si-code-muted-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 8l-4 4l4 4m6 0l4-4l-4-4"></svg:path>`,
})
export class SiCodeMutedLineIcon {
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
  selector: 'svg[siColumnsFillIcon],svg[si-columns-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M13 20V4h-2v16z" clip-rule="evenodd"></svg:path>`,
})
export class SiColumnsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siColumnsLineIcon],svg[si-columns-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 21V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiColumnsLineIcon {
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
  selector: 'svg[siCopyAltFillIcon],svg[si-copy-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.4 3h7.2A2.4 2.4 0 0 1 15 5.4v7.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 12.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path><svg:path fill="currentColor" d="M18 10h.6c.778 0 1.4.622 1.4 1.4v7.2c0 .778-.622 1.4-1.4 1.4h-7.2c-.778 0-1.4-.622-1.4-1.4V18a1 1 0 1 0-2 0v.6c0 1.882 1.518 3.4 3.4 3.4h7.2c1.882 0 3.4-1.518 3.4-3.4v-7.2C22 9.518 20.482 8 18.6 8H18a1 1 0 1 0 0 2"></svg:path>`,
})
export class SiCopyAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCopyAltLineIcon],svg[si-copy-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 9h.6c1.33 0 2.4 1.07 2.4 2.4v7.2c0 1.33-1.07 2.4-2.4 2.4h-7.2C10.07 21 9 19.93 9 18.6V18M5.4 3h7.2A2.4 2.4 0 0 1 15 5.4v7.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 12.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiCopyAltLineIcon {
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
  selector: 'svg[siCopyFillIcon],svg[si-copy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5.4C4 4.622 4.622 4 5.4 4h7.2c.778 0 1.4.622 1.4 1.4V6a1 1 0 1 0 2 0v-.6C16 3.518 14.482 2 12.6 2H5.4A3.394 3.394 0 0 0 2 5.4v7.2C2 14.482 3.518 16 5.4 16H6a1 1 0 1 0 0-2h-.6c-.778 0-1.4-.622-1.4-1.4z"></svg:path><svg:path fill="currentColor" d="M9 11.4A2.4 2.4 0 0 1 11.4 9h7.2a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4h-7.2A2.4 2.4 0 0 1 9 18.6z"></svg:path>`,
})
export class SiCopyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCopyLineIcon],svg[si-copy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 15h-.6C4.07 15 3 13.93 3 12.6V5.4C3 4.07 4.07 3 5.4 3h7.2C13.93 3 15 4.07 15 5.4V6m-3.6 3h7.2a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4h-7.2A2.4 2.4 0 0 1 9 18.6v-7.2A2.4 2.4 0 0 1 11.4 9"></svg:path>`,
})
export class SiCopyLineIcon {
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
  selector: 'svg[siCopyrightAltFillIcon],svg[si-copyright-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-9.863-5c-1.303 0-2.436.493-3.227 1.431c-.773.92-1.14 2.17-1.14 3.566v.01c0 1.396.369 2.646 1.144 3.564c.792.937 1.925 1.429 3.229 1.429c2.012 0 3.713-1.162 4.07-3.124l-1.968-.358c-.151.833-.864 1.482-2.102 1.482c-.773 0-1.325-.275-1.701-.72c-.392-.464-.672-1.21-.672-2.272v-.01c0-1.066.28-1.814.67-2.278c.375-.445.925-.72 1.697-.72c1.174 0 1.96.706 2.104 1.631l1.977-.307C15.906 8.316 14.183 7 12.138 7" clip-rule="evenodd"></svg:path>`,
})
export class SiCopyrightAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCopyrightAltLineIcon],svg[si-copyright-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M15.23 13.697C14.974 15.095 13.767 16 12.142 16c-2.076 0-3.373-1.535-3.373-3.992v-.01C8.77 9.534 10.062 8 12.137 8c1.61 0 2.865 1.011 3.092 2.478M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10Z"></svg:path>`,
})
export class SiCopyrightAltLineIcon {
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
  selector: 'svg[siCopyrightFillIcon],svg[si-copyright-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-9.772-5C9.511 7 7.66 9.194 7.66 12s1.852 5 4.567 5c.975 0 1.851-.271 2.565-.8c.711-.528 1.205-1.27 1.488-2.124a1 1 0 1 0-1.9-.628c-.17.52-.444.896-.78 1.145c-.331.246-.779.407-1.373.407c-1.414 0-2.567-1.092-2.567-3s1.153-3 2.567-3c.594 0 1.042.161 1.374.407c.335.249.608.626.78 1.145a1 1 0 1 0 1.899-.628c-.283-.854-.777-1.596-1.488-2.123c-.714-.53-1.59-.801-2.565-.801" clip-rule="evenodd"></svg:path>`,
})
export class SiCopyrightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCopyrightLineIcon],svg[si-copyright-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15.33 10.238C14.876 8.865 13.795 8 12.227 8C10.164 8 8.66 9.643 8.66 12s1.503 4 3.567 4c1.568 0 2.65-.865 3.103-2.238M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10Z"></svg:path>`,
})
export class SiCopyrightLineIcon {
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
  selector: 'svg[siCreditCardDetailedAltFillIcon],svg[si-credit-card-detailed-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M2 8h20v3H2z" clip-rule="evenodd"></svg:path>`,
})
export class SiCreditCardDetailedAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCreditCardDetailedAltLineIcon],svg[si-credit-card-detailed-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 8h22M1 11h22M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path>`,
})
export class SiCreditCardDetailedAltLineIcon {
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
  selector: 'svg[siCreditCardDetailedFillIcon],svg[si-credit-card-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M22 8H2v3h20zm-6 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiCreditCardDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCreditCardDetailedLineIcon],svg[si-credit-card-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 8h22M1 11h22m-3 3h-3M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path>`,
})
export class SiCreditCardDetailedLineIcon {
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
  selector: 'svg[siCreditCardFillIcon],svg[si-credit-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M22 9H2v2h20z" clip-rule="evenodd"></svg:path>`,
})
export class SiCreditCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCreditCardLineIcon],svg[si-credit-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 10h22M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path>`,
})
export class SiCreditCardLineIcon {
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
  selector: 'svg[siCrosshairDetailedFillIcon],svg[si-crosshair-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a1 1 0 1 0-2 0v1h2zm-3 10a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13 3.055V5a1 1 0 1 1-2 0V3.055A9.004 9.004 0 0 0 3.055 11H5a1 1 0 1 1 0 2H3.055A9.004 9.004 0 0 0 11 20.945V19a1 1 0 1 1 2 0v1.945A9.004 9.004 0 0 0 20.945 13H19a1 1 0 1 1 0-2h1.945A9.004 9.004 0 0 0 13 3.055M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21 11v2h1a1 1 0 1 0 0-2zm-8 10h-2v1a1 1 0 1 0 2 0zM3 13v-2H2a1 1 0 1 0 0 2z"></svg:path>`,
})
export class SiCrosshairDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCrosshairDetailedLineIcon],svg[si-crosshair-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12h4m12 0h4M12 22v-4m0-12V2m8 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-5 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class SiCrosshairDetailedLineIcon {
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
  selector: 'svg[siCrosshairSimpleFillIcon],svg[si-crosshair-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12M13 2v4a1 1 0 1 1-2 0V2zM2 11h4a1 1 0 1 1 0 2H2zm16 0a1 1 0 1 0 0 2h4v-2zm-5 7a1 1 0 1 0-2 0v4h2z" clip-rule="evenodd"></svg:path>`,
})
export class SiCrosshairSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siCrosshairSimpleLineIcon],svg[si-crosshair-simple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10h-4m-6 10C6.477 22 2 17.523 2 12m10 10v-4M2 12C2 6.477 6.477 2 12 2M2 12h4m6-10v4"></svg:path>`,
})
export class SiCrosshairSimpleLineIcon {
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
  selector: 'svg[siDangerousFillIcon],svg[si-dangerous-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.91 3.23L3.23 7.913v-.01a.8.8 0 0 0-.23.57v7.054c0 .22.08.42.23.57L7.9 20.77c.15.15.36.23.57.23h7.06c.22 0 .42-.08.57-.23l4.67-4.673a.8.8 0 0 0 .23-.57V8.473c0-.22-.08-.42-.23-.57L16.1 3.23a.8.8 0 0 0-.57-.23H8.48c-.22 0-.42.08-.57.23m1.797 5.063a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586z" clip-rule="evenodd"></svg:path>`,
})
export class SiDangerousFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDangerousLineIcon],svg[si-dangerous-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m15 15l-3-3m0 0L9 9m3 3l3-3m-3 3l-3 3M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path>`,
})
export class SiDangerousLineIcon {
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
  selector: 'svg[siDashboardCustomizeFillIcon],svg[si-dashboard-customize-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.6A2.6 2.6 0 0 1 5.6 3h2.8A2.6 2.6 0 0 1 11 5.6v2.8A2.6 2.6 0 0 1 8.4 11H5.6A2.6 2.6 0 0 1 3 8.4zm0 10A2.6 2.6 0 0 1 5.6 13h2.8a2.6 2.6 0 0 1 2.6 2.6v2.8A2.6 2.6 0 0 1 8.4 21H5.6A2.6 2.6 0 0 1 3 18.4zm10-10A2.6 2.6 0 0 1 15.6 3h2.8A2.6 2.6 0 0 1 21 5.6v2.8a2.6 2.6 0 0 1-2.6 2.6h-2.8A2.6 2.6 0 0 1 13 8.4zm4 7.4a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"></svg:path>`,
})
export class SiDashboardCustomizeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDashboardCustomizeLineIcon],svg[si-dashboard-customize-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 17h6m-3 3v-6M5.6 4h2.8A1.6 1.6 0 0 1 10 5.6v2.8A1.6 1.6 0 0 1 8.4 10H5.6A1.6 1.6 0 0 1 4 8.4V5.6A1.6 1.6 0 0 1 5.6 4m0 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8A1.6 1.6 0 0 1 8.4 20H5.6A1.6 1.6 0 0 1 4 18.4v-2.8A1.6 1.6 0 0 1 5.6 14m10-10h2.8A1.6 1.6 0 0 1 20 5.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 14 8.4V5.6A1.6 1.6 0 0 1 15.6 4"></svg:path>`,
})
export class SiDashboardCustomizeLineIcon {
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
  selector: 'svg[siDashboardFillIcon],svg[si-dashboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.6 2A2.6 2.6 0 0 0 3 4.6v4.8A2.6 2.6 0 0 0 5.6 12h2.8A2.6 2.6 0 0 0 11 9.4V4.6A2.6 2.6 0 0 0 8.4 2zm0 12A2.6 2.6 0 0 0 3 16.6v2.8A2.6 2.6 0 0 0 5.6 22h2.8a2.6 2.6 0 0 0 2.6-2.6v-2.8A2.6 2.6 0 0 0 8.4 14zm10-12A2.6 2.6 0 0 0 13 4.6v2.8a2.6 2.6 0 0 0 2.6 2.6h2.8A2.6 2.6 0 0 0 21 7.4V4.6A2.6 2.6 0 0 0 18.4 2zm0 10a2.6 2.6 0 0 0-2.6 2.6v4.8a2.6 2.6 0 0 0 2.6 2.6h2.8a2.6 2.6 0 0 0 2.6-2.6v-4.8a2.6 2.6 0 0 0-2.6-2.6z"></svg:path>`,
})
export class SiDashboardFillIcon {
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
  selector: 'svg[siDashboardHorzFillIcon],svg[si-dashboard-horz-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M4 13v-2h16v2h-9v7H9v-7z" clip-rule="evenodd"></svg:path>`,
})
export class SiDashboardHorzFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDashboardHorzLineIcon],svg[si-dashboard-horz-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10 21v-9m-7 0h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiDashboardHorzLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDashboardLineIcon],svg[si-dashboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.4 3H5.6A1.6 1.6 0 0 0 4 4.6v4.8A1.6 1.6 0 0 0 5.6 11h2.8A1.6 1.6 0 0 0 10 9.4V4.6A1.6 1.6 0 0 0 8.4 3Zm0 12H5.6A1.6 1.6 0 0 0 4 16.6v2.8A1.6 1.6 0 0 0 5.6 21h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 15Zm10-12h-2.8A1.6 1.6 0 0 0 14 4.6v2.8A1.6 1.6 0 0 0 15.6 9h2.8A1.6 1.6 0 0 0 20 7.4V4.6A1.6 1.6 0 0 0 18.4 3Zm0 10h-2.8a1.6 1.6 0 0 0-1.6 1.6v4.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-4.8a1.6 1.6 0 0 0-1.6-1.6Z"></svg:path>`,
})
export class SiDashboardLineIcon {
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
  selector: 'svg[siDashboardVertFillIcon],svg[si-dashboard-vert-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M13 4v5h7v2h-7v9h-2V4z" clip-rule="evenodd"></svg:path>`,
})
export class SiDashboardVertFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDashboardVertLineIcon],svg[si-dashboard-vert-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 21V3m0 7h9M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiDashboardVertLineIcon {
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
  selector: 'svg[siDeleteAlarmFillIcon],svg[si-delete-alarm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.707 2.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m10.586 0a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a8 8 0 1 0 0-16a8 8 0 0 0 0 16m3.536-10.121a1 1 0 1 0-1.415-1.414L12 11.585l-2.121-2.12a1 1 0 0 0-1.415 1.414L10.586 13l-2.122 2.121a1 1 0 1 0 1.415 1.415L12 14.414l2.121 2.122a1 1 0 0 0 1.415-1.415l-2.122-2.12z" clip-rule="evenodd"></svg:path>`,
})
export class SiDeleteAlarmFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDeleteAlarmLineIcon],svg[si-delete-alarm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m9.172 15.828l5.656-5.656m0 5.656l-5.656-5.656M18 3l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path>`,
})
export class SiDeleteAlarmLineIcon {
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
  selector: 'svg[siDiamondsFourFillIcon],svg[si-diamonds-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siDiamondsFourFill0)"><svg:path d="M13.839 1.11a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.677l1.98 1.98a2.6 2.6 0 0 0 3.676 0l1.98-1.98a2.6 2.6 0 0 0 0-3.677zM6.768 8.182a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.676l1.98 1.98a2.6 2.6 0 0 0 3.677 0l1.98-1.98a2.6 2.6 0 0 0 0-3.676zm7.071 7.071a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.677l1.98 1.98a2.6 2.6 0 0 0 3.676 0l1.98-1.98a2.6 2.6 0 0 0 0-3.677zm7.071-7.071a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.676l1.98 1.98a2.6 2.6 0 0 0 3.677 0l1.98-1.98a2.6 2.6 0 0 0 0-3.676z"></svg:path></svg:g><svg:defs><svg:clippath id="siDiamondsFourFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiDiamondsFourFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDiamondsFourLineIcon],svg[si-diamonds-four-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" clip-path="url(#siDiamondsFourLine0)"><svg:path d="m3.798 8.889l-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Zm7.071-7.071l-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Zm0 14.142l-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Zm7.071-7.071l-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Z"></svg:path></svg:g><svg:defs><svg:clippath id="siDiamondsFourLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiDiamondsFourLineIcon {
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
  selector: 'svg[siDoubleArrowRightFillIcon],svg[si-double-arrow-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L15.586 12l-3.293-3.293a1 1 0 0 1 0-1.414"></svg:path><svg:path d="M6.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L9.586 12L6.293 8.707a1 1 0 0 1 0-1.414"></svg:path></svg:g>`,
})
export class SiDoubleArrowRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDoubleArrowRightLineIcon],svg[si-double-arrow-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13 16l4-4l-4-4m-6 8l4-4l-4-4"></svg:path>`,
})
export class SiDoubleArrowRightLineIcon {
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
  selector: 'svg[siDownLeftFillIcon],svg[si-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5a1 1 0 1 0-2 0v5.6a3.4 3.4 0 0 1-3.4 3.4H7.414l2.293-2.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L7.414 16H14.6a5.4 5.4 0 0 0 5.4-5.4z"></svg:path>`,
})
export class SiDownLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDownLeftLineIcon],svg[si-down-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 15h9.6a4.4 4.4 0 0 0 4.4-4.4V5M5 15l4 4m-4-4l4-4"></svg:path>`,
})
export class SiDownLeftLineIcon {
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
  selector: 'svg[siDownRightFillIcon],svg[si-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5a1 1 0 0 0-2 0v5.6A5.4 5.4 0 0 0 9.4 16h7.186l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L16.586 14H9.4A3.4 3.4 0 0 1 6 10.6z"></svg:path>`,
})
export class SiDownRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDownRightLineIcon],svg[si-down-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 15H9.4A4.4 4.4 0 0 1 5 10.6V5m14 10l-4 4m4-4l-4-4"></svg:path>`,
})
export class SiDownRightLineIcon {
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
  selector: 'svg[siDownTwoHeadedFillIcon],svg[si-down-two-headed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v8.586l1.293-1.293a1 1 0 0 1 1.414 1.414L13 15.414v2.172l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 17.586v-2.172l-2.707-2.707a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiDownTwoHeadedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDownTwoHeadedLineIcon],svg[si-down-two-headed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m0 0l-3-3m3 3l3-3m-6-5l3 3l3-3"></svg:path>`,
})
export class SiDownTwoHeadedLineIcon {
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
  selector: 'svg[siDownloadOfflineFillIcon],svg[si-download-offline-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m12-6a1 1 0 1 0-2 0v6.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 12.586zM7 18a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiDownloadOfflineFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDownloadOfflineLineIcon],svg[si-download-offline-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 11l4 4m0 0l4-4m-4 4V6m4 12H8m14-6c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiDownloadOfflineLineIcon {
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
  selector: 'svg[siDragHandleFillIcon],svg[si-drag-handle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiDragHandleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDragHandleLineIcon],svg[si-drag-handle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 10h16M4 14h16"></svg:path>`,
})
export class SiDragHandleLineIcon {
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
  selector: 'svg[siDragIndicatorAltFillIcon],svg[si-drag-indicator-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM9 9a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m7 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm-7 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M9 5a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiDragIndicatorAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDragIndicatorAltLineIcon],svg[si-drag-indicator-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10h1m-1 4h1m-1-8h1m-7 4h1m-1 4h1m5 4h1m-7 0h1M9 6h1"></svg:path>`,
})
export class SiDragIndicatorAltLineIcon {
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
  selector: 'svg[siDragIndicatorFillIcon],svg[si-drag-indicator-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-6-6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4M9 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class SiDragIndicatorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siDragIndicatorLineIcon],svg[si-drag-indicator-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-12a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-6 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM9 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path>`,
})
export class SiDragIndicatorLineIcon {
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
  selector: 'svg[siEditDetailedAltFillIcon],svg[si-edit-detailed-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.425 4.575a2.5 2.5 0 0 0-3.536 0l-1.06 1.061l3.535 3.536l1.06-1.061a2.5 2.5 0 0 0 0-3.536m-5.303 1.768l3.536 3.536l-8.839 8.838a.5.5 0 0 1-.255.137l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.536a.5.5 0 0 1 .137-.255z"></svg:path>`,
})
export class SiEditDetailedAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siEditDetailedAltLineIcon],svg[si-edit-detailed-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14.828 6.343l2.829 2.829m1.414-1.415L8.464 18.364l-3.535.707l.707-3.536L16.243 4.93a2 2 0 0 1 2.828 2.828Z"></svg:path>`,
})
export class SiEditDetailedAltLineIcon {
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
  selector: 'svg[siEditDetailedFillIcon],svg[si-edit-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.738 3.727a1.3 1.3 0 0 1 1.838 0l1.697 1.697a1.3 1.3 0 0 1 0 1.838l-1.909 1.91l-3.536-3.536zm-7.92 14.991a.5.5 0 0 1-.255.136l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.535a.5.5 0 0 1 .137-.256l8.838-8.839l3.536 3.536z"></svg:path>`,
})
export class SiEditDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siEditDetailedLineIcon],svg[si-edit-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14.828 6.343l2.829 2.829m.566-5.092l1.697 1.697a.8.8 0 0 1 0 1.132L8.464 18.364l-3.535.707l.707-3.536L17.091 4.08a.8.8 0 0 1 1.132 0"></svg:path>`,
})
export class SiEditDetailedLineIcon {
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
  selector: 'svg[siEditSimpleFillIcon],svg[si-edit-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.738 3.727a1.3 1.3 0 0 1 1.838 0l1.697 1.697a1.3 1.3 0 0 1 0 1.838L8.818 18.718a.5.5 0 0 1-.255.136l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.535a.5.5 0 0 1 .137-.256z"></svg:path>`,
})
export class SiEditSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siEditSimpleLineIcon],svg[si-edit-simple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.92 5.777L18.223 4.08a.8.8 0 0 0-1.132 0L5.636 15.536L4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132Z"></svg:path>`,
})
export class SiEditSimpleLineIcon {
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
  selector: 'svg[siEjectFillIcon],svg[si-eject-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.18 13.427A1 1 0 0 0 5 15h14a1 1 0 0 0 .82-1.573l-7-10a1 1 0 0 0-1.64 0zM4 19.2A1.8 1.8 0 0 0 5.8 21h12.4a1.8 1.8 0 0 0 1.8-1.8v-.4a1.8 1.8 0 0 0-1.8-1.8H5.8A1.8 1.8 0 0 0 4 18.8z"></svg:path>`,
})
export class SiEjectFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siEjectLineIcon],svg[si-eject-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m5 13l7-10l7 10zm0 4.8v2.4a.8.8 0 0 0 .8.8h12.4a.8.8 0 0 0 .8-.8v-2.4a.8.8 0 0 0-.8-.8H5.8a.8.8 0 0 0-.8.8Z"></svg:path>`,
})
export class SiEjectLineIcon {
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
  selector: 'svg[siEqualizerFillIcon],svg[si-equalizer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM2 7a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm8 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M2 15a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m9-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM1 20a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m9-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m0-12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"></svg:path>`,
})
export class SiEqualizerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siEqualizerLineIcon],svg[si-equalizer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12h4m4 0h4m4 0h4M2 16h4m4 0h4m4 0h4M2 20h4m4 0h4m4 0h4M2 8h4m12 0h4m-4-4h4"></svg:path>`,
})
export class SiEqualizerLineIcon {
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
  selector: 'svg[siErrorFillIcon],svg[si-error-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.91 3.23L3.23 7.913v-.01a.8.8 0 0 0-.23.57v7.054c0 .22.08.42.23.57L7.9 20.77c.15.15.36.23.57.23h7.06c.22 0 .42-.08.57-.23l4.67-4.673a.8.8 0 0 0 .23-.57V8.473c0-.22-.08-.42-.23-.57L16.1 3.23a.8.8 0 0 0-.57-.23H8.48c-.22 0-.42.08-.57.23M12 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiErrorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siErrorLineIcon],svg[si-error-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 16h.008M12 8v5M3.23 7.913L7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"></svg:path>`,
})
export class SiErrorLineIcon {
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
  selector: 'svg[siExpandLessAltFillIcon],svg[si-expand-less-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.293 7.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414L12 9.414l-7.293 7.293a1 1 0 0 1-1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiExpandLessAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandLessAltLineIcon],svg[si-expand-less-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 16l8-8l8 8"></svg:path>`,
})
export class SiExpandLessAltLineIcon {
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
  selector: 'svg[siExpandLessCircleFillIcon],svg[si-expand-less-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.293.793l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L12 10.914l3.293 3.293a1 1 0 0 0 1.414-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiExpandLessCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandLessCircleLineIcon],svg[si-expand-less-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 13.5l4-4l4 4m6-1.5c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiExpandLessCircleLineIcon {
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
  selector: 'svg[siExpandLessFillIcon],svg[si-expand-less-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.293 9.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiExpandLessFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandLessLineIcon],svg[si-expand-less-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 14l4-4l4 4"></svg:path>`,
})
export class SiExpandLessLineIcon {
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
  selector: 'svg[siExpandLessSquareFillIcon],svg[si-expand-less-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m7.307 5.793a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L12 10.914l3.293 3.293a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiExpandLessSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandLessSquareLineIcon],svg[si-expand-less-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 13.5l4-4l4 4M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiExpandLessSquareLineIcon {
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
  selector: 'svg[siExpandMoreAltFillIcon],svg[si-expand-more-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.293 7.293a1 1 0 0 1 1.414 0L12 14.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiExpandMoreAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandMoreAltLineIcon],svg[si-expand-more-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 8l8 8l8-8"></svg:path>`,
})
export class SiExpandMoreAltLineIcon {
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
  selector: 'svg[siExpandMoreCircleFillIcon],svg[si-expand-more-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.707 9.793a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L12 13.086z" clip-rule="evenodd"></svg:path>`,
})
export class SiExpandMoreCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandMoreCircleLineIcon],svg[si-expand-more-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 10.5l4 4l4-4m6 1.5c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiExpandMoreCircleLineIcon {
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
  selector: 'svg[siExpandMoreFillIcon],svg[si-expand-more-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.293 9.293a1 1 0 0 1 1.414 0L12 12.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiExpandMoreFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandMoreLineIcon],svg[si-expand-more-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 10l4 4l4-4"></svg:path>`,
})
export class SiExpandMoreLineIcon {
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
  selector: 'svg[siExpandMoreSquareFillIcon],svg[si-expand-more-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m3.307 6.793a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L12 13.086z" clip-rule="evenodd"></svg:path>`,
})
export class SiExpandMoreSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siExpandMoreSquareLineIcon],svg[si-expand-more-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 10.5l4 4l4-4M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiExpandMoreSquareLineIcon {
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
  selector: 'svg[siFactCheckFillIcon],svg[si-fact-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M4 9a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm10.707.707l4-4a1 1 0 0 0-1.414-1.414L15 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiFactCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFactCheckLineIcon],svg[si-fact-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 15h5m-5-3h5M5 9h5m3 3l2 2l4-4M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path>`,
})
export class SiFactCheckLineIcon {
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
  selector: 'svg[siFeaturedPlaylistFillIcon],svg[si-featured-playlist-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M5 9a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiFeaturedPlaylistFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFeaturedPlaylistLineIcon],svg[si-featured-playlist-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 9h8m-8 3h8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"></svg:path>`,
})
export class SiFeaturedPlaylistLineIcon {
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
  selector: 'svg[siFileDownloadFillIcon],svg[si-file-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1"></svg:path><svg:path fill="currentColor" d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4z"></svg:path>`,
})
export class SiFileDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFileDownloadLineIcon],svg[si-file-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 12l4 4m0 0l4-4m-4 4V4m7 13v.6c0 1.33-1.07 2.4-2.4 2.4H7.4C6.07 20 5 18.93 5 17.6V17"></svg:path>`,
})
export class SiFileDownloadLineIcon {
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
  selector: 'svg[siFileUploadFillIcon],svg[si-file-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 6.414V16a1 1 0 1 1-2 0V6.414L8.707 8.707a1 1 0 0 1-1.414-1.414z"></svg:path><svg:path fill="currentColor" d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4z"></svg:path>`,
})
export class SiFileUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFileUploadLineIcon],svg[si-file-upload-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 8l4-4m0 0l4 4m-4-4v12m7 1v.6c0 1.33-1.07 2.4-2.4 2.4H7.4C6.07 20 5 18.93 5 17.6V17"></svg:path>`,
})
export class SiFileUploadLineIcon {
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
  selector: 'svg[siFilterListAltFillIcon],svg[si-filter-list-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiFilterListAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFilterListAltLineIcon],svg[si-filter-list-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 10h12M8 14h8m-6 4h4M4 6h16"></svg:path>`,
})
export class SiFilterListAltLineIcon {
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
  selector: 'svg[siFilterListFillIcon],svg[si-filter-list-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m4 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiFilterListFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFilterListLineIcon],svg[si-filter-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 12h12M4 8h16M8 16h8"></svg:path>`,
})
export class SiFilterListLineIcon {
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
  selector: 'svg[siFilterNoneFillIcon],svg[si-filter-none-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.4 2h11.2A2.4 2.4 0 0 1 22 4.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 15.6V4.4A2.4 2.4 0 0 1 8.4 2"></svg:path><svg:path fill="currentColor" d="M4 4a1 1 0 0 0-2 0v11.6C2 19.132 4.868 22 8.4 22H20a1 1 0 1 0 0-2H8.4A4.403 4.403 0 0 1 4 15.6z"></svg:path>`,
})
export class SiFilterNoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFilterNoneLineIcon],svg[si-filter-none-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 22H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"></svg:path>`,
})
export class SiFilterNoneLineIcon {
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
  selector: 'svg[siFlareFillIcon],svg[si-flare-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siFlareFill0)"><svg:path d="M12 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M7.757 6.343a1 1 0 1 0-1.414 1.414l1.414 1.415a1 1 0 1 0 1.415-1.415zM1 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm15 1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m-4 4a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m2.828-1.172a1 1 0 0 1 1.415 0l1.414 1.415a1 1 0 1 1-1.414 1.414l-1.415-1.414a1 1 0 0 1 0-1.415m2.829-7.071a1 1 0 1 0-1.414-1.414l-1.415 1.414a1 1 0 0 0 1.415 1.415zm-8.485 8.486a1 1 0 1 0-1.415-1.415l-1.414 1.415a1 1 0 1 0 1.414 1.414zM12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path></svg:g><svg:defs><svg:clippath id="siFlareFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiFlareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFlareLineIcon],svg[si-flare-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#siFlareLine0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 12H1m22 0h-6m-5 5v6m3.536-7.464l1.414 1.414m-9.9-9.9l1.414 1.414m7.072 0L16.95 7.05m-9.9 9.9l1.414-1.414M12 1v6m2 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g><svg:defs><svg:clippath id="siFlareLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiFlareLineIcon {
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
  selector: 'svg[siFlowLineFillIcon],svg[si-flow-line-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 8.83a3.001 3.001 0 1 0-2 0v6.34a3.001 3.001 0 1 0 2 0zM12 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class SiFlowLineFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFlowLineLineIcon],svg[si-flow-line-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class SiFlowLineLineIcon {
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
  selector: 'svg[siFlowParallelFillIcon],svg[si-flow-parallel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 8.83a3.001 3.001 0 1 0-2 0v6.34a3.001 3.001 0 1 0 2 0zM7 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m9-1.83V8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0M16 18a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-13a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class SiFlowParallelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siFlowParallelLineIcon],svg[si-flow-parallel-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class SiFlowParallelLineIcon {
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
  selector: 'svg[siGlobeDetailedFillIcon],svg[si-globe-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.973 11a15 15 0 0 0-.323-2.321C13.802 8.889 12.914 9 12 9c-.907 0-1.787-.11-2.629-.316A15 15 0 0 0 9.033 11zm-5.94 2q.08 1.186.336 2.317A11 11 0 0 1 12 15c.9 0 1.773.108 2.609.312q.264-1.131.351-2.312zm4.992 4.229A9 9 0 0 0 12 17c-.709 0-1.398.082-2.059.236c.5 1.34 1.185 2.589 2.025 3.716a15 15 0 0 0 2.059-3.723"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 3c-.927 0-1.822.14-2.664.4A17 17 0 0 0 8.06 6.093a9 9 0 0 1-1.716-1.094a9 9 0 0 0-1.411 1.428A11 11 0 0 0 7.47 8.026c-.23.966-.38 1.96-.44 2.974H3.055a9 9 0 0 0 0 2h3.974q.091 1.528.44 2.974a11 11 0 0 0-2.537 1.598A9 9 0 0 0 6.342 19a9 9 0 0 1 1.715-1.093c.348.94.777 1.84 1.278 2.692A9 9 0 0 0 12 21a9 9 0 0 0 2.599-.38a17 17 0 0 0 1.313-2.727a9 9 0 0 1 1.744 1.108a9 9 0 0 0 1.411-1.428c-.77-.646-1.63-1.19-2.558-1.608c.237-.962.391-1.954.456-2.965h3.98a9 9 0 0 0 0-2h-3.969a17 17 0 0 0-.425-2.983c.913-.415 1.76-.952 2.518-1.589A9 9 0 0 0 17.657 5a9 9 0 0 1-1.685 1.08a17 17 0 0 0-1.243-2.659a9 9 0 0 0-2.664-.42a15 15 0 0 1 2.025 3.756a9 9 0 0 1-4.146.007A15 15 0 0 1 12.003 3z" clip-rule="evenodd"></svg:path>`,
})
export class SiGlobeDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlobeDetailedLineIcon],svg[si-globe-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.674 22.145a.75.75 0 1 0 1.193-.91zm1.393-.914a.75.75 0 1 0 1.186.918zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm-10 10h20v-1.5H2zm9.867 8.485A15.2 15.2 0 0 1 8.75 12h-1.5a16.7 16.7 0 0 0 3.424 10.145zM8.75 12a15.23 15.23 0 0 1 3.183-9.32l-1.186-.92A16.74 16.74 0 0 0 7.25 12zm3.383-9.325a15.2 15.2 0 0 1 3.117 9.235h1.5c0-3.81-1.278-7.329-3.423-10.145zm3.117 9.235a15.23 15.23 0 0 1-3.183 9.32l1.186.92a16.74 16.74 0 0 0 3.497-10.24zM12 16.75c2.59 0 4.92 1.062 6.605 2.776l1.07-1.052A10.73 10.73 0 0 0 12 15.25zm6.604-12.274A9.2 9.2 0 0 1 12 7.25v1.5c3.01 0 5.73-1.237 7.676-3.226zM12 7.25a9.23 9.23 0 0 1-6.605-2.776l-1.07 1.052A10.73 10.73 0 0 0 12 8.75zM5.396 19.525A9.2 9.2 0 0 1 12 16.75v-1.5c-3.01 0-5.73 1.237-7.676 3.226z"></svg:path>`,
})
export class SiGlobeDetailedLineIcon {
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
  selector: 'svg[siGridFillIcon],svg[si-grid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.6 2A2.6 2.6 0 0 0 2 4.6v3.8A2.6 2.6 0 0 0 4.6 11h3.8A2.6 2.6 0 0 0 11 8.4V4.6A2.6 2.6 0 0 0 8.4 2zm11 0A2.6 2.6 0 0 0 13 4.6v3.8a2.6 2.6 0 0 0 2.6 2.6h3.8A2.6 2.6 0 0 0 22 8.4V4.6A2.6 2.6 0 0 0 19.4 2zm-11 11A2.6 2.6 0 0 0 2 15.6v3.8A2.6 2.6 0 0 0 4.6 22h3.8a2.6 2.6 0 0 0 2.6-2.6v-3.8A2.6 2.6 0 0 0 8.4 13zm11 0a2.6 2.6 0 0 0-2.6 2.6v3.8a2.6 2.6 0 0 0 2.6 2.6h3.8a2.6 2.6 0 0 0 2.6-2.6v-3.8a2.6 2.6 0 0 0-2.6-2.6z"></svg:path>`,
})
export class SiGridFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGridLineIcon],svg[si-grid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3Zm11 0h-3.8A1.6 1.6 0 0 0 14 4.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8A1.6 1.6 0 0 0 21 8.4V4.6A1.6 1.6 0 0 0 19.4 3Zm-11 11H4.6A1.6 1.6 0 0 0 3 15.6v3.8A1.6 1.6 0 0 0 4.6 21h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8A1.6 1.6 0 0 0 8.4 14Zm11 0h-3.8a1.6 1.6 0 0 0-1.6 1.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8a1.6 1.6 0 0 0-1.6-1.6Z"></svg:path>`,
})
export class SiGridLineIcon {
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
  selector: 'svg[siGridOnFillIcon],svg[si-grid-on-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10v4h-4v-4z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M10 8V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4z" clip-rule="evenodd"></svg:path>`,
})
export class SiGridOnFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGridOnLineIcon],svg[si-grid-on-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 15h18M3 9h18M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"></svg:path>`,
})
export class SiGridOnLineIcon {
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
  selector: 'svg[siGridViewFillIcon],svg[si-grid-view-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.6 3A2.6 2.6 0 0 0 3 5.6v2.8A2.6 2.6 0 0 0 5.6 11h2.8A2.6 2.6 0 0 0 11 8.4V5.6A2.6 2.6 0 0 0 8.4 3zm0 10A2.6 2.6 0 0 0 3 15.6v2.8A2.6 2.6 0 0 0 5.6 21h2.8a2.6 2.6 0 0 0 2.6-2.6v-2.8A2.6 2.6 0 0 0 8.4 13zm10-10A2.6 2.6 0 0 0 13 5.6v2.8a2.6 2.6 0 0 0 2.6 2.6h2.8A2.6 2.6 0 0 0 21 8.4V5.6A2.6 2.6 0 0 0 18.4 3zm0 10a2.6 2.6 0 0 0-2.6 2.6v2.8a2.6 2.6 0 0 0 2.6 2.6h2.8a2.6 2.6 0 0 0 2.6-2.6v-2.8a2.6 2.6 0 0 0-2.6-2.6z"></svg:path>`,
})
export class SiGridViewFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGridViewLineIcon],svg[si-grid-view-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.4 4H5.6A1.6 1.6 0 0 0 4 5.6v2.8A1.6 1.6 0 0 0 5.6 10h2.8A1.6 1.6 0 0 0 10 8.4V5.6A1.6 1.6 0 0 0 8.4 4Zm0 10H5.6A1.6 1.6 0 0 0 4 15.6v2.8A1.6 1.6 0 0 0 5.6 20h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 14Zm10-10h-2.8A1.6 1.6 0 0 0 14 5.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 20 8.4V5.6A1.6 1.6 0 0 0 18.4 4Zm0 10h-2.8a1.6 1.6 0 0 0-1.6 1.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8a1.6 1.6 0 0 0-1.6-1.6Z"></svg:path>`,
})
export class SiGridViewLineIcon {
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
  selector: 'svg[siHammerAltFillIcon],svg[si-hammer-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.766 13.08l2.91 2.91a1.8 1.8 0 0 0 2.547 0l2.404-2.404a1.8 1.8 0 0 0 0-2.545L17.95 7.364a1 1 0 1 0 1.414-1.414L17.95 4.536a1 1 0 0 0-1.415 1.413l-3.677-3.676a1.8 1.8 0 0 0-2.545 0L7.909 4.677a1.8 1.8 0 0 0 0 2.546l2.91 2.91l-8.65 7.359l-.059.054a2.6 2.6 0 0 0 0 3.677l.566.566a2.6 2.6 0 0 0 3.732-.06zm-1.418-1.419l-.11-.11l-8.735 7.432a.6.6 0 0 0 .022.826l.565.566a.6.6 0 0 0 .827.02z" clip-rule="evenodd"></svg:path>`,
})
export class SiHammerAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siHammerAltLineIcon],svg[si-hammer-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m18.657 6.657l-1.414-1.414m-3.536 6.364l-8.061 9.475a1.6 1.6 0 0 1-2.263 0l-.565-.566a1.6 1.6 0 0 1 0-2.262l9.475-8.062m3.535 3.536l3.536-3.536m-9.192-2.12l3.535-3.536m-5.091.848L11.02 2.98a.8.8 0 0 1 1.131 0l8.769 8.768a.8.8 0 0 1 0 1.131l-2.405 2.405a.8.8 0 0 1-1.131 0L8.616 6.515a.8.8 0 0 1 0-1.13"></svg:path>`,
})
export class SiHammerAltLineIcon {
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
  selector: 'svg[siHammerFillIcon],svg[si-hammer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.377 4.72a7 7 0 0 0-1.62 1.209a1 1 0 1 1-1.414-1.414a9 9 0 0 1 12.728 0l5.94 5.94a2.6 2.6 0 0 1 0 3.676l-1.273 1.273a2.6 2.6 0 0 1-3.677 0L14.657 13L5.89 21.768a2.6 2.6 0 0 1-3.677 0l-.566-.566a2.6 2.6 0 0 1 0-3.677l8.769-8.768zm13.937 6.866l-2.121 2.121l.282.283a.6.6 0 0 0 .849 0l1.273-1.273a.6.6 0 0 0 0-.848zm-9.192 2.121l-1.415-1.414L3.06 18.94a.6.6 0 0 0 0 .848l.566.566a.6.6 0 0 0 .849 0z" clip-rule="evenodd"></svg:path>`,
})
export class SiHammerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siHammerLineIcon],svg[si-hammer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.657 11.586l.53-.53a.75.75 0 0 0-1.06 0zm-2.121 2.121l.53.53zm-9.617 7.354l-.53.53zm-.566-.566l.53-.53zm0-2.262l.53.53zm7.354-7.354l-.53-.53zm2.122-2.122l.53.53a.75.75 0 0 0 0-1.06zm9.475 2.405l.53-.53zm-3.536 3.535l-.53.53zm-2.404-9.475l.53-.53zM3.52 4.692a.75.75 0 0 0 1.06 1.06zm10.607 6.363l-2.122 2.122l1.06 1.06l2.122-2.121zm-2.122 2.122L4.651 20.53l1.061 1.06l7.354-7.354zM4.651 20.53a.85.85 0 0 1-1.202 0l-1.06 1.06a2.35 2.35 0 0 0 3.323 0zm-1.202 0l-.565-.566l-1.061 1.06l.566.566zm-.565-.566a.85.85 0 0 1 0-1.202l-1.061-1.06a2.35 2.35 0 0 0 0 3.323zm0-1.202l7.354-7.354l-1.061-1.06l-7.354 7.353zm7.354-7.354l2.12-2.121l-1.06-1.061l-2.121 2.121zm10.535.283a.85.85 0 0 1 0 1.202l1.061 1.06a2.35 2.35 0 0 0 0-3.323zm0 1.202l-1.272 1.273l1.06 1.06l1.273-1.272zm-1.272 1.273a.85.85 0 0 1-1.203 0l-1.06 1.06a2.35 2.35 0 0 0 3.323 0zm-4.667-8.415l4.95 4.95l1.06-1.06l-4.95-4.95zm4.95 4.95l.99.99l1.06-1.06l-.99-.99zm-1.485 3.465l-.99-.99l-1.061 1.06l.99.99zm-.99-.99l-2.122-2.122l-1.06 1.061l2.12 2.121zm0 1.06l3.535-3.535l-1.06-1.06l-3.536 3.535zm-4.95-6.01l-4.95-4.95l-1.06 1.06l4.95 4.95zm.707 4.95l-2.828-2.829l-1.061 1.061l2.828 2.828zM4.58 5.752a7.25 7.25 0 0 1 10.253 0l1.06-1.06a8.75 8.75 0 0 0-12.374 0z"></svg:path>`,
})
export class SiHammerLineIcon {
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
  selector: 'svg[siHeartAltFillIcon],svg[si-heart-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.519 2A6.452 6.452 0 0 0 2.98 13.104l.639.645l.863.857l.003.003l6.85 6.85a1 1 0 0 0 1.413 0l6.85-6.85l.002-.002l.858-.852l.65-.657l.002-.002a6.452 6.452 0 0 0-9.068-9.177A6.45 6.45 0 0 0 7.52 2"></svg:path>`,
})
export class SiHeartAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siHeartAltLineIcon],svg[si-heart-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16.55 3.084a5.452 5.452 0 0 1 3.852 9.307l-.648.654l-.86.854l-6.852 6.852L5.19 13.9l-.86-.854l-.648-.654a5.453 5.453 0 1 1 7.706-7.712l.654.654l.655-.654a5.45 5.45 0 0 1 3.852-1.595" clip-rule="evenodd"></svg:path>`,
})
export class SiHeartAltLineIcon {
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
  selector: 'svg[siHeartFillIcon],svg[si-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"></svg:path>`,
})
export class SiHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siHeartLineIcon],svg[si-heart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"></svg:path>`,
})
export class SiHeartLineIcon {
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
  selector: 'svg[siHomeDetailedFillIcon],svg[si-home-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#siHomeDetailedFill0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M21 19.588V8.884l1.451.952a1 1 0 1 0 1.098-1.672L19 5.179V3a1 1 0 1 0-2 0v.866l-3.73-2.448a2.2 2.2 0 0 0-2.58 0L.45 8.165a1 1 0 1 0 1.1 1.67L3 8.88v10.708A2.4 2.4 0 0 0 5.4 22h13.2a2.4 2.4 0 0 0 2.4-2.412M8 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m2 5v8H8v-8.2c0-.992.808-1.8 1.8-1.8h4.4c.992 0 1.8.808 1.8 1.8V21h-2v-8z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="siHomeDetailedFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiHomeDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siHomeDetailedLineIcon],svg[si-home-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m1 9l10.26-6.76a1.2 1.2 0 0 1 1.44 0L23 9m-2-1v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 22 3 20.93 3 19.6V8m15-5v2.5M15 8H9m.8 4h4.4c.44 0 .8.36.8.8V22H9v-9.2c0-.44.36-.8.8-.8"></svg:path>`,
})
export class SiHomeDetailedLineIcon {
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
  selector: 'svg[siHomeFillIcon],svg[si-home-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21.1 6.551l.03.024c.537.413.87 1.053.87 1.757v11.256A3.4 3.4 0 0 1 18.6 23H5.4A3.4 3.4 0 0 1 2 19.588V8.332c0-.704.333-1.344.87-1.757l.029-.023l7.79-5.132a2.195 2.195 0 0 1 2.581 0zM10 13v8H8v-8.2c0-.992.808-1.8 1.8-1.8h4.4c.992 0 1.8.808 1.8 1.8V21h-2v-8z" clip-rule="evenodd"></svg:path>`,
})
export class SiHomeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siHomeLineIcon],svg[si-home-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M18.6 22H5.4A2.4 2.4 0 0 1 3 19.588V8.332c0-.382.18-.734.48-.965l7.78-5.126a1.195 1.195 0 0 1 1.44 0l7.82 5.126c.3.231.48.583.48.965v11.256A2.4 2.4 0 0 1 18.6 22Z"></svg:path><svg:path d="M9.8 12h4.4c.44 0 .8.36.8.8V22H9v-9.2c0-.44.36-.8.8-.8Z"></svg:path></svg:g>`,
})
export class SiHomeLineIcon {
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
  selector: 'svg[siInfoFillIcon],svg[si-info-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M11 8a1 1 0 0 0 1 1h.008a1 1 0 1 0 0-2H12a1 1 0 0 0-1 1m1 9a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path>`,
})
export class SiInfoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siInfoLineIcon],svg[si-info-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 8h.008M12 16v-5m10 1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class SiInfoLineIcon {
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
  selector: 'svg[siInputFillIcon],svg[si-input-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.4 5A1.4 1.4 0 0 0 2 6.4V9a1 1 0 0 1-2 0V6.4A3.4 3.4 0 0 1 3.4 3h17.2A3.4 3.4 0 0 1 24 6.4v11.2a3.4 3.4 0 0 1-3.4 3.4H3.4A3.4 3.4 0 0 1 0 17.6V15a1 1 0 1 1 2 0v2.6A1.4 1.4 0 0 0 3.4 19h17.2a1.4 1.4 0 0 0 1.4-1.4V6.4A1.4 1.4 0 0 0 20.6 5z"></svg:path><svg:path fill="currentColor" d="M12.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 13H1a1 1 0 1 1 0-2h13.586l-2.293-2.293a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class SiInputFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siInputLineIcon],svg[si-input-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 9V6.4A2.4 2.4 0 0 1 3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V15m12 1l4-4m0 0l-4-4m4 4H1"></svg:path>`,
})
export class SiInputLineIcon {
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
  selector: 'svg[siInsightsFillIcon],svg[si-insights-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3a1 1 0 0 0-2 0v17.2A1.8 1.8 0 0 0 3.8 22H21a1 1 0 1 0 0-2H4zm17.707 4.707a1 1 0 0 0-1.414-1.414L14 12.586l-3.293-3.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L10 11.414l3.293 3.293a1 1 0 0 0 1.414 0z" clip-rule="evenodd"></svg:path>`,
})
export class SiInsightsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siInsightsLineIcon],svg[si-insights-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21H3.8a.8.8 0 0 1-.8-.8V3m3 11l4-4l4 4l7-7"></svg:path>`,
})
export class SiInsightsLineIcon {
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
  selector: 'svg[siInventoryFillIcon],svg[si-inventory-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4.6A2.6 2.6 0 0 1 2.6 2h18.8A2.6 2.6 0 0 1 24 4.6v.8A2.6 2.6 0 0 1 21.4 8H21v10.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V8h-.4A2.6 2.6 0 0 1 0 5.4zM2.6 4a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-.8a.6.6 0 0 0-.6-.6zM8 10a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class SiInventoryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siInventoryLineIcon],svg[si-inventory-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7m5 4h8M2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3"></svg:path>`,
})
export class SiInventoryLineIcon {
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
  selector: 'svg[siJsonAlt1FillIcon],svg[si-json-alt-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.816 3H7a1 1 0 0 1 0 2h-.18c-.825.005-1.12.101-1.23.182h-.001c-.022.016-.18.124-.18.828v3.893c0 .88-.45 1.526-.972 1.96c.523.428.971 1.07.971 1.955v4.172c0 .71.16.816.18.83c.11.08.404.175 1.231.18H7a1 1 0 1 1 0 2h-.189c-.797-.004-1.707-.062-2.394-.559c-.786-.568-1.009-1.476-1.009-2.451v-4.172c0-.142-.065-.312-.376-.507c-.321-.201-.763-.326-1.123-.359A1 1 0 0 1 1 11.956v-.166a1 1 0 0 1 .91-.996c.35-.031.79-.162 1.113-.371c.318-.205.385-.383.385-.52V6.01c0-.972.224-1.878 1.007-2.447c.687-.498 1.596-.559 2.396-.563zM16 4a1 1 0 0 1 1-1h.189c.8.004 1.71.065 2.396.563c.784.569 1.007 1.475 1.007 2.447v3.893c0 .137.067.315.385.52c.323.209.763.34 1.113.371a1 1 0 0 1 .91.996v.166a1 1 0 0 1-.91.996c-.359.033-.801.158-1.122.36c-.31.194-.376.364-.376.506v4.172c0 .975-.223 1.883-1.009 2.451c-.687.497-1.597.555-2.394.559H17a1 1 0 1 1 0-2h.18c.828-.005 1.121-.1 1.232-.18c.02-.014.18-.12.18-.83v-4.172c0-.884.448-1.527.971-1.956c-.521-.433-.971-1.08-.971-1.96V6.01c0-.704-.159-.812-.18-.827l-.002-.001c-.11-.08-.405-.177-1.23-.182H17a1 1 0 0 1-1-1M9 14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiJsonAlt1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siJsonAlt1LineIcon],svg[si-json-alt-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 20h-.184c-1.626-.009-2.408-.306-2.408-2.01v-4.172c0-1.215-1.45-1.774-2.408-1.862v-.166c.967-.087 2.408-.69 2.408-1.887V6.01c0-1.695.782-2.001 2.408-2.01H7m10 16h.184c1.626-.009 2.408-.306 2.408-2.01v-4.172c0-1.215 1.45-1.774 2.408-1.862v-.166c-.967-.087-2.408-.69-2.408-1.887V6.01c0-1.695-.782-2.001-2.408-2.01H17M9 16v-1m3 1v-1m3 1v-1"></svg:path>`,
})
export class SiJsonAlt1LineIcon {
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
  selector: 'svg[siJsonAlt2FillIcon],svg[si-json-alt-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14a1 1 0 0 1-1-1v-1c3.2-.4 4.13.3 4.195.7c.57.591.648 1.428.582 2.169l-.27 3.521c-.026.436.043.722.14.912c.114.212.273.365.503.476l.02.01c.252.128.587.212 1.04.212h.99a1 1 0 1 1 0 2h-.99c-.695 0-1.352-.129-1.938-.425a3.07 3.07 0 0 1-1.392-1.336l-.005-.01c-.31-.595-.407-1.27-.363-1.97v-.014l.27-3.535l.002-.016a1.8 1.8 0 0 0-.012-.533l-.018-.064a1 1 0 0 0-.097-.032A2.8 2.8 0 0 0 2.98 14z"></svg:path><svg:path fill="currentColor" d="M2 9.88a1 1 0 0 0-1 1v1c3.2.4 4.13-.3 4.195-.699c.57-.592.648-1.428.582-2.17l-.27-3.521c-.026-.435.043-.722.14-.912c.114-.211.273-.364.503-.475l.02-.01c.252-.129.587-.212 1.04-.212h.99a1 1 0 1 0 0-2h-.99c-.695 0-1.352.128-1.938.425A3.07 3.07 0 0 0 3.88 3.642l-.005.01c-.31.595-.407 1.27-.363 1.97v.013l.27 3.536l.002.015c.024.261.01.432-.012.534l-.018.064a1 1 0 0 1-.097.031a2.8 2.8 0 0 1-.677.066zm20 0a1 1 0 0 1 1 1v1c-3.2.4-4.13-.3-4.195-.699c-.57-.592-.648-1.428-.582-2.17l.27-3.521c.026-.435-.043-.722-.14-.912a1.07 1.07 0 0 0-.503-.475l-.02-.01c-.252-.129-.587-.212-1.04-.212h-.99a1 1 0 1 1 0-2h.99c.695 0 1.352.128 1.938.425a3.07 3.07 0 0 1 1.392 1.336l.005.01c.31.595.407 1.27.363 1.97v.013l-.27 3.536l-.002.015c-.024.261-.01.432.012.534q.01.043.018.064q.028.012.097.031c.138.037.356.066.677.066z"></svg:path><svg:path fill="currentColor" d="M22 14a1 1 0 0 0 1-1v-1c-3.2-.4-4.13.3-4.195.7c-.57.591-.648 1.428-.582 2.169l.27 3.521c.026.436-.043.722-.14.912a1.07 1.07 0 0 1-.503.476l-.02.01c-.252.128-.587.212-1.04.212h-.99a1 1 0 1 0 0 2h.99c.695 0 1.352-.129 1.938-.425a3.07 3.07 0 0 0 1.392-1.336l.005-.01c.31-.595.407-1.27.363-1.97v-.014l-.27-3.535l-.002-.016a1.8 1.8 0 0 1 .012-.533l.018-.064q.028-.013.097-.032A2.8 2.8 0 0 1 21.02 14z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9 14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiJsonAlt2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siJsonAlt2LineIcon],svg[si-json-alt-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.2 3h-.99q-.864 0-1.494.321q-.63.304-.954.911q-.306.59-.252 1.447l.27 3.535q.09.983-.306 1.393Q4.096 11 2.98 11H2v2h.98q1.116 0 1.494.393q.396.41.306 1.393l-.27 3.535q-.054.858.252 1.447q.324.607.954.91q.63.322 1.494.322h.99M16 3h.99q.864 0 1.494.321q.63.304.954.911q.306.59.252 1.447l-.27 3.535q-.09.983.306 1.393q.378.393 1.494.393h.98v2h-.98q-1.116 0-1.494.393q-.396.41-.306 1.393l.27 3.535q.054.858-.252 1.447a2.07 2.07 0 0 1-.954.91q-.63.322-1.494.322H16m-7-5v-1m3 1v-1m3 1v-1"></svg:path>`,
})
export class SiJsonAlt2LineIcon {
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
  selector: 'svg[siJsonAlt3FillIcon],svg[si-json-alt-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.835 3.97A1 1 0 0 1 6.865 5c-.41.012-.722.077-.955.17a.87.87 0 0 0-.398.29c-.051.085-.116.263-.116.606V9.23c0 .928-.25 1.782-.84 2.459l-.01.012q-.136.15-.288.281q.159.141.3.306c.592.666.838 1.515.838 2.436v3.231c0 .34.07.514.124.598l.012.019c.062.1.152.183.323.244l.033.013c.23.092.547.158.976.17a1 1 0 0 1-.057 2c-.591-.017-1.147-.11-1.646-.307a2.57 2.57 0 0 1-1.324-1.059c-.322-.5-.441-1.084-.441-1.678v-3.23c0-.568-.147-.9-.337-1.112l-.023-.026c-.18-.214-.53-.438-1.212-.56A1 1 0 0 1 1 12.044v-.132a1 1 0 0 1 .821-.984c.665-.12 1.032-.338 1.233-.558c.198-.231.342-.578.342-1.14V6.067c0-.605.118-1.204.447-1.71l.02-.028a2.86 2.86 0 0 1 1.304-1.015c.5-.2 1.053-.295 1.639-.313a1 1 0 0 1 1.029.97m8.33 0a1 1 0 0 1 1.03-.97c.585.018 1.138.113 1.638.313a2.86 2.86 0 0 1 1.324 1.043c.33.506.447 1.105.447 1.71V9.23c0 .56.144.908.343 1.139c.2.22.567.437 1.232.558a1 1 0 0 1 .821.984v.132a1 1 0 0 1-.824.984c-.682.122-1.033.346-1.212.56l-.023.026c-.19.211-.337.544-.337 1.111v3.231c0 .594-.12 1.179-.44 1.678a2.57 2.57 0 0 1-1.325 1.06c-.499.196-1.055.289-1.646.306a1 1 0 1 1-.057-2c.429-.012.746-.078.976-.17l.029-.011l.004-.002a.58.58 0 0 0 .323-.244l.012-.02c.055-.083.124-.257.124-.597v-3.23c0-.922.246-1.771.839-2.437q.14-.165.3-.306a3 3 0 0 1-.288-.281l-.011-.012c-.59-.677-.84-1.53-.84-2.46V6.067c0-.343-.065-.521-.116-.607a.87.87 0 0 0-.398-.289c-.233-.093-.544-.158-.955-.17a1 1 0 0 1-.97-1.03M10 10a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2.247 4.031a1 1 0 0 1 .72 1.218a23 23 0 0 1-.514 1.698a26 26 0 0 1-.683 1.785q-.346.888-.696 1.674a1 1 0 0 1-1.828-.812a38 38 0 0 0 .677-1.63q.35-.822.637-1.663q.287-.846.47-1.55a1 1 0 0 1 1.217-.72" clip-rule="evenodd"></svg:path>`,
})
export class SiJsonAlt3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siJsonAlt3LineIcon],svg[si-json-alt-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.998 15a22 22 0 0 1-.492 1.624q-.3.876-.662 1.73A39 39 0 0 1 10.16 20M6.835 4q-.747.022-1.297.242a1.86 1.86 0 0 0-.857.66q-.285.438-.285 1.164V9.23q0 1.12-.594 1.802q-.593.66-1.802.88v.131q1.23.22 1.802.901q.594.66.594 1.78v3.231q0 .704.285 1.143q.286.461.835.66q.55.219 1.32.241M17.164 4q.747.022 1.297.242q.55.219.857.66q.285.438.285 1.164V9.23q0 1.12.594 1.802q.593.66 1.802.88v.131q-1.23.22-1.802.901q-.594.66-.594 1.78v3.231q0 .704-.285 1.143q-.286.461-.835.66q-.55.219-1.32.241M13 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SiJsonAlt3LineIcon {
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
  selector: 'svg[siJsonAlt4FillIcon],svg[si-json-alt-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.816 3H7a1 1 0 0 1 0 2h-.18c-.825.005-1.12.101-1.23.182h-.001c-.022.016-.18.124-.18.828v3.893c0 .88-.45 1.526-.972 1.96c.523.428.971 1.07.971 1.955v4.172c0 .71.16.816.18.83c.11.08.404.175 1.231.18H7a1 1 0 1 1 0 2h-.189c-.797-.004-1.707-.062-2.394-.559c-.786-.568-1.009-1.476-1.009-2.451v-4.172c0-.142-.065-.312-.376-.507c-.321-.201-.763-.326-1.123-.359A1 1 0 0 1 1 11.956v-.166a1 1 0 0 1 .91-.996c.35-.031.79-.162 1.113-.371c.318-.205.385-.383.385-.52V6.01c0-.972.224-1.878 1.007-2.447c.687-.498 1.596-.559 2.396-.563zM16 4a1 1 0 0 1 1-1h.189c.8.004 1.71.065 2.396.563c.784.569 1.007 1.475 1.007 2.447v3.893c0 .137.067.315.385.52c.323.209.763.34 1.113.371a1 1 0 0 1 .91.996v.166a1 1 0 0 1-.91.996c-.359.033-.801.158-1.122.36c-.31.194-.376.364-.376.506v4.172c0 .975-.223 1.883-1.009 2.451c-.687.497-1.597.555-2.394.559H17a1 1 0 1 1 0-2h.18c.828-.005 1.121-.1 1.232-.18c.02-.014.18-.12.18-.83v-4.172c0-.884.448-1.527.971-1.956c-.521-.433-.971-1.08-.971-1.96V6.01c0-.704-.159-.812-.18-.827l-.002-.001c-.11-.08-.405-.177-1.23-.182H17a1 1 0 0 1-1-1m-6 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2.247 4.031a1 1 0 0 1 .72 1.218a23 23 0 0 1-.514 1.698a26 26 0 0 1-.683 1.785q-.346.888-.696 1.674a1 1 0 0 1-1.828-.812a38 38 0 0 0 .677-1.63q.35-.822.637-1.663q.287-.846.47-1.55a1 1 0 0 1 1.217-.72" clip-rule="evenodd"></svg:path>`,
})
export class SiJsonAlt4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siJsonAlt4LineIcon],svg[si-json-alt-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 20h-.184c-1.626-.009-2.408-.306-2.408-2.01v-4.172c0-1.215-1.45-1.774-2.408-1.862v-.166c.967-.087 2.408-.69 2.408-1.887V6.01c0-1.695.782-2.001 2.408-2.01H7m10 16h.184c1.626-.009 2.408-.306 2.408-2.01v-4.172c0-1.215 1.45-1.774 2.408-1.862v-.166c-.967-.087-2.408-.69-2.408-1.887V6.01c0-1.695-.782-2.001-2.408-2.01H17m-5.002 11a22 22 0 0 1-.492 1.624q-.3.876-.662 1.73A39 39 0 0 1 10.16 20M13 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SiJsonAlt4LineIcon {
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
  selector: 'svg[siJsonAlt5FillIcon],svg[si-json-alt-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2.247 4.031a1 1 0 0 1 .719 1.218a23 23 0 0 1-.514 1.698a27 27 0 0 1-.682 1.785q-.346.888-.696 1.674a1 1 0 1 1-1.828-.812a38 38 0 0 0 .666-1.603l.006-.014l.005-.013a25 25 0 0 0 .637-1.663q.288-.846.469-1.55a1 1 0 0 1 1.218-.72" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 14a1 1 0 0 1-1-1v-1c3.2-.4 4.13.3 4.195.7c.57.591.648 1.428.582 2.17l-.27 3.52c-.026.436.043.722.14.912c.114.212.273.365.503.476l.02.01c.252.128.587.212 1.04.212h.99a1 1 0 1 1 0 2h-.99c-.695 0-1.352-.129-1.938-.425a3.07 3.07 0 0 1-1.392-1.336l-.005-.01c-.31-.595-.407-1.27-.363-1.97v-.014l.27-3.535l.002-.016a1.8 1.8 0 0 0-.012-.533l-.018-.064a1 1 0 0 0-.097-.032A2.8 2.8 0 0 0 2.98 14z"></svg:path><svg:path fill="currentColor" d="M2 9.88a1 1 0 0 0-1 1v1c3.2.4 4.13-.3 4.195-.699c.57-.592.648-1.428.582-2.17l-.27-3.52c-.026-.436.043-.723.14-.913c.114-.211.273-.364.503-.475l.02-.01c.252-.128.587-.212 1.04-.212h.99a1 1 0 0 0 0-2h-.99c-.695 0-1.352.129-1.938.425A3.07 3.07 0 0 0 3.88 3.642l-.005.01c-.31.595-.407 1.27-.363 1.97v.013l.27 3.536l.002.015c.024.261.01.432-.012.534l-.018.064a1 1 0 0 1-.097.031a2.8 2.8 0 0 1-.677.066zm20 0a1 1 0 0 1 1 1v1c-3.2.4-4.13-.3-4.195-.699c-.57-.592-.648-1.428-.582-2.17l.27-3.52c.026-.436-.043-.723-.14-.913a1.07 1.07 0 0 0-.503-.475l-.02-.01c-.252-.128-.587-.212-1.04-.212h-.99a1 1 0 1 1 0-2h.99c.695 0 1.352.129 1.938.425a3.07 3.07 0 0 1 1.392 1.336l.005.01c.31.595.407 1.27.363 1.97v.013l-.27 3.536l-.002.015c-.024.261-.01.432.012.534q.01.043.018.064q.028.013.097.031c.138.037.356.066.677.066z"></svg:path><svg:path fill="currentColor" d="M22 14a1 1 0 0 0 1-1v-1c-3.2-.4-4.13.3-4.195.7c-.57.591-.648 1.428-.582 2.17l.27 3.52c.026.436-.043.722-.14.912a1.07 1.07 0 0 1-.503.476l-.02.01c-.252.128-.587.212-1.04.212h-.99a1 1 0 1 0 0 2h.99c.695 0 1.352-.129 1.938-.425a3.07 3.07 0 0 0 1.392-1.336l.005-.01c.31-.595.407-1.27.363-1.97v-.014l-.27-3.535l-.002-.016a1.8 1.8 0 0 1 .012-.533l.018-.064q.028-.013.097-.032A2.8 2.8 0 0 1 21.02 14z"></svg:path>`,
})
export class SiJsonAlt5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siJsonAlt5LineIcon],svg[si-json-alt-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11v-.75a.75.75 0 0 0-.75.75zm2.474-.393l-.54-.52zm.306-1.393l-.748.057l.001.012zM4.51 5.68l-.749.047l.001.01zm.252-1.447L4.1 3.88l-.004.008zm.954-.91l.326.675l.015-.007zM8.2 3.75a.75.75 0 0 0 0-1.5zM2 13h-.75c0 .414.336.75.75.75zm2.474.393l-.54.52zm.306 1.393l-.747-.069v.012zm-.27 3.535l-.748-.057v.01zm.252 1.447l-.666.345l.004.008zm.954.91l.34-.668l-.014-.007zM8.2 21.75a.75.75 0 0 0 0-1.5zM22.2 11h.75a.75.75 0 0 0-.75-.75zm-2.474-.393l.54-.52zm-.306-1.393l.747.069V9.27zm.27-3.535l.748.057v-.01zm-.252-1.447l.666-.346l-.004-.007zm-.954-.91l-.34.668l.014.007zM16 2.25a.75.75 0 0 0 0 1.5zM22.2 13v.75a.75.75 0 0 0 .75-.75zm-2.474.393l.54.52zm-.306 1.393l.748-.057l-.001-.012zm.27 3.535l.749-.047l-.001-.01zm-.252 1.447l.662.353l.004-.008zm-.954.91l-.326-.675l-.015.008zM16 20.25a.75.75 0 0 0 0 1.5zm-3.276-6.063a.75.75 0 0 0-1.453-.374zm-1.88 3.168l-.69-.294l-.005.01l-.004.011zm-1.37 1.34a.75.75 0 0 0 1.371.61zM2 11.75h.98v-1.5H2zm.98 0c.41 0 .79-.036 1.122-.123c.33-.087.66-.237.912-.5l-1.08-1.04c0-.001-.045.045-.213.09a3 3 0 0 1-.741.073zm2.034-.622c.496-.514.579-1.26.513-1.982l-1.494.137c.054.588-.067.77-.099.804zm.514-1.97l-.27-3.537l-1.496.115l.27 3.535zm-.27-3.527c-.03-.474.044-.812.17-1.053l-1.332-.691c-.282.544-.377 1.17-.335 1.839zm.166-1.046c.14-.262.339-.453.618-.588L5.39 2.646c-.56.27-.997.685-1.29 1.233zm.633-.595c.293-.15.67-.24 1.153-.24v-1.5c-.669 0-1.288.125-1.835.403zm1.153-.24h.99v-1.5h-.99zM2 13.75h.98v-1.5H2zm.98 0c.333 0 .575.03.74.074c.17.044.215.09.214.089l1.08-1.04c-.253-.263-.582-.413-.912-.5a4.5 4.5 0 0 0-1.122-.123zm.954.163c.032.034.153.216.1.804l1.493.137c.066-.721-.017-1.468-.513-1.982zm.098.816l-.27 3.535l1.496.114l.27-3.535zm-.27 3.545c-.043.669.052 1.295.334 1.84l1.332-.692c-.126-.241-.2-.579-.17-1.053zm.338 1.847c.293.548.73.963 1.29 1.233l.652-1.351a1.32 1.32 0 0 1-.618-.588zm1.275 1.226c.547.278 1.166.403 1.835.403v-1.5c-.483 0-.86-.09-1.153-.24zm1.835.403h.99v-1.5h-.99zM2.75 13v-2h-1.5v2zm19.45-2.75h-.98v1.5h.98zm-.98 0c-.333 0-.575-.03-.74-.074c-.17-.044-.215-.09-.213-.089l-1.081 1.04c.253.263.582.413.912.5a4.5 4.5 0 0 0 1.122.123zm-.954-.163c-.032-.034-.153-.216-.1-.804l-1.493-.137c-.066.721.018 1.468.513 1.982zm-.098-.816l.27-3.535l-1.496-.115l-.27 3.536zm.27-3.545c.043-.669-.052-1.295-.334-1.84l-1.332.692c.126.241.2.579.17 1.053zM20.1 3.879a2.82 2.82 0 0 0-1.29-1.233l-.652 1.351c.28.135.479.326.618.588zm-1.275-1.226c-.546-.278-1.166-.403-1.835-.403v1.5c.483 0 .86.09 1.153.24zM16.99 2.25H16v1.5h.99zm5.21 10h-.98v1.5h.98zm-.98 0c-.41 0-.79.036-1.122.123c-.33.087-.66.237-.912.5l1.08 1.04c0 .001.045-.045.213-.09c.166-.043.408-.073.741-.073zm-2.034.622c-.495.514-.579 1.26-.513 1.982l1.494-.137c-.054-.588.066-.77.099-.804zm-.514 1.97l.27 3.536l1.496-.114l-.27-3.535zm.27 3.527c.03.474-.044.812-.17 1.053l1.332.691c.282-.544.377-1.17.335-1.839zm-.166 1.046c-.14.262-.338.454-.618.588l.652 1.351c.56-.27.997-.685 1.29-1.233zm-.633.596c-.293.15-.67.239-1.153.239v1.5c.669 0 1.289-.125 1.835-.403zm-1.153.239H16v1.5h.99zM22.95 13v-2h-1.5v2zm-11.679.813q-.183.716-.475 1.569l1.42.484q.307-.899.508-1.68zm-.475 1.569a25 25 0 0 1-.643 1.68l1.38.586q.375-.879.683-1.782zm-.651 1.7a38 38 0 0 1-.67 1.613l1.37.61a40 40 0 0 0 .697-1.678zM12.25 9a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 13.75 9zm-.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75zM11.75 9a.25.25 0 0 1 .25-.25v-1.5A1.75 1.75 0 0 0 10.25 9zm.25-.25a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 12 7.25z"></svg:path>`,
})
export class SiJsonAlt5LineIcon {
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
  selector: 'svg[siJsonFillIcon],svg[si-json-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.835 3.97A1 1 0 0 1 6.865 5c-.41.012-.722.077-.955.17a.87.87 0 0 0-.398.29c-.051.085-.116.263-.116.606V9.23c0 .928-.25 1.782-.84 2.459l-.01.012q-.136.15-.288.281q.159.141.3.306c.592.666.838 1.515.838 2.436v3.231c0 .34.07.514.124.598l.012.019c.062.1.152.183.323.244l.033.013c.23.092.547.158.976.17a1 1 0 0 1-.057 2c-.591-.017-1.147-.11-1.646-.307a2.57 2.57 0 0 1-1.324-1.059c-.322-.5-.441-1.084-.441-1.678v-3.23c0-.568-.147-.9-.337-1.112l-.023-.026c-.18-.214-.53-.438-1.212-.56A1 1 0 0 1 1 12.044v-.132a1 1 0 0 1 .821-.984c.665-.12 1.032-.338 1.233-.558c.198-.231.342-.578.342-1.14V6.067c0-.605.118-1.204.447-1.71l.02-.028a2.86 2.86 0 0 1 1.304-1.015c.5-.2 1.053-.295 1.639-.313a1 1 0 0 1 1.029.97m8.33 0a1 1 0 0 1 1.03-.97c.585.018 1.138.113 1.638.313a2.86 2.86 0 0 1 1.324 1.043c.33.506.447 1.105.447 1.71V9.23c0 .56.144.908.343 1.139c.2.22.567.437 1.232.558a1 1 0 0 1 .821.984v.132a1 1 0 0 1-.824.984c-.682.122-1.033.346-1.212.56l-.023.026c-.19.211-.337.544-.337 1.111v3.231c0 .594-.12 1.179-.44 1.678a2.57 2.57 0 0 1-1.325 1.06c-.499.196-1.055.289-1.646.306a1 1 0 1 1-.057-2c.429-.012.746-.078.976-.17l.029-.011l.004-.002a.58.58 0 0 0 .323-.244l.012-.02c.055-.083.124-.257.124-.597v-3.23c0-.922.246-1.771.839-2.437q.14-.165.3-.306a3 3 0 0 1-.288-.281l-.011-.012c-.59-.677-.84-1.53-.84-2.46V6.067c0-.343-.065-.521-.116-.607a.87.87 0 0 0-.398-.289c-.233-.093-.544-.158-.955-.17a1 1 0 0 1-.97-1.03M9 14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiJsonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siJsonLineIcon],svg[si-json-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 16v-1m3 1v-1m3 1v-1M6.835 4q-.747.022-1.297.242a1.86 1.86 0 0 0-.857.66q-.285.438-.285 1.164V9.23q0 1.12-.594 1.802q-.593.66-1.802.88v.131q1.23.22 1.802.901q.594.66.594 1.78v3.231q0 .704.285 1.143q.286.461.835.66q.55.219 1.32.241M17.164 4q.747.022 1.297.242q.55.219.857.66q.285.438.285 1.164V9.23q0 1.12.594 1.802q.593.66 1.802.88v.131q-1.23.22-1.802.901q-.594.66-.594 1.78v3.231q0 .704-.285 1.143q-.286.461-.835.66q-.55.219-1.32.241"></svg:path>`,
})
export class SiJsonLineIcon {
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
  selector: 'svg[siKeypadFillIcon],svg[si-keypad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-7 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0M7 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m12 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m16-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class SiKeypadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siKeypadLineIcon],svg[si-keypad-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-7-7a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM5 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path>`,
})
export class SiKeypadLineIcon {
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
  selector: 'svg[siLeftDownFillIcon],svg[si-left-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.4A3.4 3.4 0 0 1 13.4 6H19a1 1 0 1 0 0-2h-5.6A5.4 5.4 0 0 0 8 9.4v7.186l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L10 16.586z"></svg:path>`,
})
export class SiLeftDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLeftDownLineIcon],svg[si-left-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V9.4A4.4 4.4 0 0 1 13.4 5H19M9 19l-4-4m4 4l4-4"></svg:path>`,
})
export class SiLeftDownLineIcon {
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
  selector: 'svg[siLeftRightFillIcon],svg[si-left-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.707 8.293a1 1 0 0 1 0 1.414L6.414 11h11.172l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 13H6.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiLeftRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLeftRightLineIcon],svg[si-left-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m16 0l-3-3m3 3l-3 3M4 12l3-3m-3 3l3 3"></svg:path>`,
})
export class SiLeftRightLineIcon {
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
  selector: 'svg[siLeftTwoHeadedFillIcon],svg[si-left-two-headed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.707 8.293a1 1 0 0 1 0 1.414L6.414 11h2.172l2.707-2.707a1 1 0 1 1 1.414 1.414L11.414 11H20a1 1 0 1 1 0 2h-8.586l1.293 1.293a1 1 0 0 1-1.414 1.414L8.586 13H6.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiLeftTwoHeadedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLeftTwoHeadedLineIcon],svg[si-left-two-headed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m0 0l3-3m-3 3l3 3m5-6l-3 3l3 3"></svg:path>`,
})
export class SiLeftTwoHeadedLineIcon {
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
  selector: 'svg[siLeftUpFillIcon],svg[si-left-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.707 4.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L8 7.414V14.6a5.4 5.4 0 0 0 5.4 5.4H19a1 1 0 1 0 0-2h-5.6a3.4 3.4 0 0 1-3.4-3.4V7.414l2.293 2.293a1 1 0 0 0 1.414-1.414z"></svg:path>`,
})
export class SiLeftUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLeftUpLineIcon],svg[si-left-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5v9.6a4.4 4.4 0 0 0 4.4 4.4H19M9 5L5 9m4-4l4 4"></svg:path>`,
})
export class SiLeftUpLineIcon {
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
  selector: 'svg[siLibraryBooksFillIcon],svg[si-library-books-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.6 2H8.4A2.4 2.4 0 0 0 6 4.4v11.2A2.4 2.4 0 0 0 8.4 18h11.2a2.4 2.4 0 0 0 2.4-2.4V4.4A2.4 2.4 0 0 0 19.6 2M9 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 2a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm-1 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4 4a1 1 0 0 0-2 0v11.6C2 19.132 4.868 22 8.4 22H20a1 1 0 1 0 0-2H8.4A4.403 4.403 0 0 1 4 15.6z"></svg:path>`,
})
export class SiLibraryBooksFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLibraryBooksLineIcon],svg[si-library-books-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10 11h8m-8 3h4m-4-6h8m2 14H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"></svg:path>`,
})
export class SiLibraryBooksLineIcon {
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
  selector: 'svg[siLightModeFillIcon],svg[si-light-mode-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siLightModeFill0)"><svg:path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414zM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm17 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m-.343 4.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414zm-9.9 1.414a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414zM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414zM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10"></svg:path></svg:g><svg:defs><svg:clippath id="siLightModeFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiLightModeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLightModeLineIcon],svg[si-light-mode-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#siLightModeLine0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 12H1m22 0h-4M7.05 7.05L4.222 4.222m15.556 15.556L16.95 16.95m-9.9 0l-2.828 2.828M19.778 4.222L16.95 7.05M12 19v4m0-22v4m4 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g><svg:defs><svg:clippath id="siLightModeLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiLightModeLineIcon {
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
  selector: 'svg[siLockAltFillIcon],svg[si-lock-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v4h2.4c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6H7zm8 0v4H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-5 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path>`,
})
export class SiLockAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLockAltLineIcon],svg[si-lock-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 11V7c0-2.21 1.79-4 4-4s4 1.79 4 4v4M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6m8.4 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SiLockAltLineIcon {
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
  selector: 'svg[siLockFillIcon],svg[si-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm8 0v3H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-3 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25" clip-rule="evenodd"></svg:path>`,
})
export class SiLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLockLineIcon],svg[si-lock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3m-4 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 0v3m-5.4-8h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path>`,
})
export class SiLockLineIcon {
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
  selector: 'svg[siLockMutedFillIcon],svg[si-lock-muted-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2a5 5 0 0 0-5 5v3h-.4c-.88 0-1.6.72-1.6 1.6v7C5 19.92 6.08 21 7.4 21h9.2c1.32 0 2.4-1.08 2.4-2.4v-7c0-.88-.72-1.6-1.6-1.6H17V7a5 5 0 0 0-5-5m3 8V7c0-1.658-1.342-3-3-3S9 5.342 9 7v3z" clip-rule="evenodd"></svg:path>`,
})
export class SiLockMutedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siLockMutedLineIcon],svg[si-lock-muted-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3m-9.4 0h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"></svg:path>`,
})
export class SiLockMutedLineIcon {
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
  selector: 'svg[siMailFillIcon],svg[si-mail-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.8 4H3.2C2.54 4 2 4.54 2 5.2v12.4C2 18.92 3.08 20 4.4 20h15.2c1.32 0 2.4-1.08 2.4-2.4V5.2c0-.66-.54-1.2-1.2-1.2M5.65 6.3a1 1 0 1 0-1.3 1.52l6.87 5.89a1.2 1.2 0 0 0 .78.285a1.2 1.2 0 0 0 .78-.286l6.87-5.89a1 1 0 1 0-1.3-1.518L12 11.744z" clip-rule="evenodd"></svg:path>`,
})
export class SiMailFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMailLineIcon],svg[si-mail-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 7.06l6.87 5.89c.07.06.19.06.26 0L19 7.06M3.2 4h17.6c.66 0 1.2.54 1.2 1.2v12.4c0 1.32-1.08 2.4-2.4 2.4H4.4C3.08 20 2 18.92 2 17.6V5.2C2 4.54 2.54 4 3.2 4"></svg:path>`,
})
export class SiMailLineIcon {
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
  selector: 'svg[siMemoryFillIcon],svg[si-memory-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2a1 1 0 0 1 1 1v2h2V3a1 1 0 1 1 2 0v2h1.6A2.4 2.4 0 0 1 19 7.4V9h2a1 1 0 1 1 0 2h-2v2h2a1 1 0 1 1 0 2h-2v1.6a2.4 2.4 0 0 1-2.4 2.4H15v2a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2H7.4A2.4 2.4 0 0 1 5 16.6V15H3a1 1 0 1 1 0-2h2v-2H3a1 1 0 1 1 0-2h2V7.4A2.4 2.4 0 0 1 7.4 5H9V3a1 1 0 0 1 1-1m3.4 7h-2.8A1.6 1.6 0 0 0 9 10.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 13.4 9" clip-rule="evenodd"></svg:path>`,
})
export class SiMemoryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMemoryLineIcon],svg[si-memory-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 5V3m-4 2V3m4 18v-2m-4 2v-2m11-5h-2m2-4h-2M5 14H3m2-4H3m4.4-5h9.2A2.4 2.4 0 0 1 19 7.4v9.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V7.4A2.4 2.4 0 0 1 7.4 5m3.2 4h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 13.4v-2.8A1.6 1.6 0 0 1 10.6 9"></svg:path>`,
})
export class SiMemoryLineIcon {
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
  selector: 'svg[siMicDetailedFillIcon],svg[si-mic-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 7a7 7 0 0 1 14 0v6a7 7 0 0 1-6 6.93V22h5a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h5v-2.07A7 7 0 0 1 5 13zm7-4a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-1 4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m-3 3a1 1 0 0 1 1-1h.1a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1m3 0a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4-1a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm0-3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zM9 6a1 1 0 0 0 0 2h.1a1 1 0 0 0 0-2zm3 6a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm2-2a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m-6 0a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiMicDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siMicDetailedLineIcon],svg[si-mic-detailed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 23h12m-6 0v-4m0 0a6 6 0 0 0 6-6V7A6 6 0 0 0 6 7v6a6 6 0 0 0 6 6m0-9h.1m2.9 0h.1M9 10h.1M12 7h.1M15 7h.1M9 7h.1m2.9 6h.1m-.1 3h.1M12 4h.1m2.9 9h.1M9 13h.1"></svg:path>`,
})
export class SiMicDetailedLineIcon {
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
