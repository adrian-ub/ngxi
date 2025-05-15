import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHvacIcon],svg[mdi-hvac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.58 14c-.28-.45-.47-.97-.52-1.5h7.88c-.05.53-.24 1.05-.47 1.5zM12 16c-1.03 0-1.92-.39-2.62-1h5.25c-.71.61-1.6 1-2.63 1m0-8c1.03 0 1.92.39 2.63 1H9.38c.7-.61 1.59-1 2.62-1m-3.42 2h6.84c.28.45.47.97.52 1.5H8.06c.05-.53.24-1.05.52-1.5M3 3v18h18V3zm9 15c-3.33 0-6-2.67-6-6s2.67-6 6-6s6 2.67 6 6s-2.67 6-6 6"></svg:path>`,
})
export class MdiHvacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHvacOffIcon],svg[mdi-hvac-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L3 4.89V21h16.11l1.73 1.73zM12 18c-3.33 0-6-2.67-6-6c0-1.18.34-2.27.92-3.19l1.51 1.51c-.19.37-.33.77-.37 1.18h1.55l1 1H8.06c.05.53.24 1.05.52 1.5h3.53l1 1H9.38c.7.61 1.59 1 2.62 1c.63 0 1.19-.16 1.7-.41l1.49 1.49c-.92.58-2.01.92-3.19.92m0-10c1.03 0 1.92.39 2.63 1H12.2l-.93-.93c.23-.04.48-.07.73-.07M9.67 6.47L6.2 3H21v14.8l-3.47-3.47c.3-.71.47-1.5.47-2.33c0-3.33-2.67-6-6-6c-.83 0-1.62.17-2.33.47m6.27 5.03H14.7L13.2 10h2.22c.28.45.47.97.52 1.5"></svg:path>`,
})
export class MdiHvacOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHydraulicOilLevelIcon],svg[mdi-hydraulic-oil-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18c-1.66 0-3-1.34-3-3c0-2 3-5.37 3-5.37S18 13 18 15c0 1.66-1.34 3-3 3m5-14v16H10V4H8v16c0 1.11.89 2 2 2h10c1.11 0 2-.89 2-2V4zM2 19l5-5l-5-5zM16 6V2h-2v4h-3v2h8V6z"></svg:path>`,
})
export class MdiHydraulicOilLevelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHydraulicOilTemperatureIcon],svg[mdi-hydraulic-oil-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18c-1.66 0-3-1.34-3-3c0-2 3-5.37 3-5.37S12 13 12 15c0 1.66-1.34 3-3 3m5-14v16H4V4H2v16c0 1.11.89 2 2 2h10c1.11 0 2-.89 2-2V4zm-4 2V2H8v4H5v2h8V6zm11 11.5v-12c0-.83-.67-1.5-1.5-1.5S18 4.67 18 5.5v12a2.5 2.5 0 1 0 4 2c0-.79-.37-1.5-1-2M20 13h-1V6h1z"></svg:path>`,
})
export class MdiHydraulicOilTemperatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHydroPowerIcon],svg[mdi-hydro-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.12 3.55a2 2 0 0 0-1.92 1.4l-.8 2.55a3 3 0 0 0-1.07.24L11.5 5.77l-1.33-1.48a2 2 0 0 0-.12 2.83l1.81 1.97a3 3 0 0 0-.22.51a3 3 0 0 0-.11.53l-2.61.58l-1.96.44a2 2 0 0 0 2.39 1.52l2.61-.59a3 3 0 0 0 .74.81l-.8 2.55l-.6 1.91a2 2 0 0 0 2.5-1.31l.81-2.54a3 3 0 0 0 1.07-.24l1.82 1.97l1.33 1.47a2 2 0 0 0 .13-2.82l-1.81-1.97a3 3 0 0 0 .21-.51a3 3 0 0 0 .14-.54l2.59-.58l1.95-.43a2 2 0 0 0-2.38-1.52l-2.61.58a3 3 0 0 0-.74-.8l.8-2.56l.6-1.9a2 2 0 0 0-.59-.1M14.56 9a1.5 1.5 0 0 1 .39.07a1.5 1.5 0 0 1 .98 1.88a1.5 1.5 0 0 1-1.88.98a1.5 1.5 0 0 1-.98-1.88A1.5 1.5 0 0 1 14.55 9M8 13.67C6.78 14.53 5.39 15 4 15H2v2h2c1.37 0 2.74-.35 4-1c.77.4 1.58.66 2.41.81l.53-1.67l.09-.26c-1.06-.15-2.1-.56-3.03-1.21M20.45 15c.05.7-.12 1.41-.54 2H22v-2zM8 17.67C6.78 18.53 5.39 19 4 19H2v2h2c1.37 0 2.74-.35 4-1c2.5 1.3 5.5 1.3 8 0c1.26.65 2.62 1 4 1h2v-2h-2c-1.39 0-2.78-.47-4-1.33c-2.44 1.71-5.56 1.71-8 0"></svg:path>`,
})
export class MdiHydroPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHydrogenStationIcon],svg[mdi-hydrogen-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a2 2 0 0 0-2 2v16h10v-7.5h1.5v5a2.5 2.5 0 0 0 5 0V9c0-.69-.28-1.32-.73-1.77l.01-.01l-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14a2 2 0 0 0-2-2h-1V5a2 2 0 0 0-2-2zm0 4h2v4h2V7h2v10h-2v-4H8v4H6zm12 1c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class MdiHydrogenStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIceCreamIcon],svg[mdi-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 6.05C17.25 3.22 14.89 1 12 1S6.75 3.22 6.5 6.05C5.09 6.28 4 7.5 4 9c0 1.66 1.34 3 3 3l5 10l5-10c1.66 0 3-1.34 3-3c0-1.5-1.09-2.72-2.5-2.95M12 17.53l-3.11-6.22c.06-.05.11-.1.19-.15a5.5 5.5 0 0 0 5.84 0c.08.05.13.1.19.15z"></svg:path>`,
})
export class MdiIceCreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIceCreamOffIcon],svg[mdi-ice-cream-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l3.84 3.84C4.37 7.38 4 8.14 4 9c0 1.66 1.34 3 3 3l5 10l2.7-5.41l6.14 6.14zM12 17.53l-3.11-6.22c.06-.05.11-.1.19-.15c.13.08.27.14.42.21l3.71 3.73zM7.15 3.95C8.07 2.2 9.89 1 12 1c2.89 0 5.25 2.22 5.5 5.05C18.91 6.28 20 7.5 20 9c0 1.66-1.34 3-3 3l-.6 1.2z"></svg:path>`,
})
export class MdiIceCreamOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIcePopIcon],svg[mdi-ice-pop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.15 14.96l-8.2 3.69l-4.1-9a3.6 3.6 0 0 0 2.3-3.29c-.01-1.36-.79-2.6-2-3.21c.39-.35.85-.65 1.3-.9c2.26-1 4.92-.02 6 2.21m-.3 13.9l1.6 3.5l2.7-1.21l-1.6-3.5"></svg:path>`,
})
export class MdiIcePopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIdCardIcon],svg[mdi-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 2h16v4H4zm0 6h4v2H4zm6 0h10v2H10zm-6 4h10v2H4zm12 0h4v2h-4z"></svg:path>`,
})
export class MdiIdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIdentifierIcon],svg[mdi-identifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7v2H9v6h1v2H6v-2h1V9H6V7zm6 0a2 2 0 0 1 2 2v6c0 1.11-.89 2-2 2h-4V7m4 2h-2v6h2z"></svg:path>`,
})
export class MdiIdentifierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIdeogramCjkIcon],svg[mdi-ideogram-cjk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4v2H4v4h2V8h12v2h2V6h-7V4m-5 6v2h5.59l-2 2H4v2h7v2h-1v2h3v-4h7v-2h-5.79L16 12.21V10Z"></svg:path>`,
})
export class MdiIdeogramCjkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIdeogramCjkVariantIcon],svg[mdi-ideogram-cjk-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4v2H4v2h11.36c-.23.87-.73 1.77-1.48 2.69c-.53.66-1.17 1.31-1.88 1.98c-.71-.67-1.35-1.32-1.88-1.98c-.47-.57-.82-1.14-1.09-1.69H6.85c.36 1.05.97 2.03 1.71 2.95c.57.71 1.23 1.39 1.94 2.05l-5.14 4.23l1.28 1.54L12 15.34l5.36 4.43l1.28-1.54L13.5 14c.71-.66 1.37-1.34 1.94-2.05c.97-1.21 1.72-2.52 1.96-3.95H20V6h-7V4Z"></svg:path>`,
})
export class MdiIdeogramCjkVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageIcon],svg[mdi-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 13.5l2.5 3l3.5-4.5l4.5 6H5m16 1V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"></svg:path>`,
})
export class MdiImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageAlbumIcon],svg[mdi-image-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 19l3-3.86l2.14 2.58l3-3.86L18 19zM6 4h5v8l-2.5-1.5L6 12M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiImageAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageAreaIcon],svg[mdi-image-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.11.89-2 2-2zM5 16h14l-4.5-6l-3.5 4.5l-2.5-3z"></svg:path>`,
})
export class MdiImageAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageAreaCloseIcon],svg[mdi-image-area-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23l-4-4h8zm8-20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5 14h14l-4.5-6l-3.5 4.5l-2.5-3z"></svg:path>`,
})
export class MdiImageAreaCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageAutoAdjustIcon],svg[mdi-image-auto-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10v9H5V5h9V3H5c-1.08 0-2 .9-2 2v14c0 1.1.92 2 2 2h14c1.12 0 2-.9 2-2v-9zm-2 0l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z"></svg:path>`,
})
export class MdiImageAutoAdjustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageBrokenIcon],svg[mdi-image-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v6h-2v2h-2v2h-2v2h-2v2h-2v2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 12v4a2 2 0 0 1-2 2h-4v-2h2v-2h2v-2zm-2-6.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H11v-1h2v-2h2v-2h2V9h2z"></svg:path>`,
})
export class MdiImageBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageBrokenVariantIcon],svg[mdi-image-broken-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5v6.59l-3-3.01l-4 4.01l-4-4l-4 4l-3-3.01V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-3 6.42l3 3.01V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.58l3 2.99l4-4l4 4"></svg:path>`,
})
export class MdiImageBrokenVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageCheckIcon],svg[mdi-image-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 21c-.32-.77-.5-1.61-.5-2.5c0-.17 0-.33.03-.5H5l3.5-4.5l2.5 3l3.5-4.5l.69.92c.97-.58 2.1-.92 3.31-.92c.89 0 1.73.18 2.5.5V5c0-.53-.21-1.04-.59-1.41C20.04 3.21 19.53 3 19 3H5c-1.1 0-2 .9-2 2v14c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59zm5.25 1L15 19l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41z"></svg:path>`,
})
export class MdiImageCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageCheckOutlineIcon],svg[mdi-image-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.18 17c.36-1.5 1.25-2.84 2.5-3.75l-.72-.96l-2.75 3.54l-1.96-2.36L6.5 17zM5 5v14h7.03c.06.7.21 1.38.47 2H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.1.9-2 2-2h14c.53 0 1.04.21 1.41.59c.38.37.59.88.59 1.41v7.5c-.62-.26-1.3-.41-2-.47V5zm12.75 17L15 19l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41z"></svg:path>`,
})
export class MdiImageCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageEditIcon],svg[mdi-image-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.7 14.3l-1 1l-2-2l1-1c.1-.1.2-.2.4-.2c.1 0 .3.1.4.2l1.3 1.3c.1.2.1.5-.1.7M13 19.9V22h2.1l6.1-6.1l-2-2zM21 5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-1.9l1.1-1.1H5l3.5-4.5l2.5 3l3.5-4.5l1.6 2.1l4.9-5z"></svg:path>`,
})
export class MdiImageEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageEditOutlineIcon],svg[mdi-image-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.7 14.3l-1 1l-2-2l1-1c.1-.1.2-.2.4-.2c.1 0 .3.1.4.2l1.3 1.3c.1.2.1.5-.1.7M13 19.9V22h2.1l6.1-6.1l-2-2zm-1.79-4.07l-1.96-2.36L6.5 17h6.62l2.54-2.45l-1.7-2.26zM11 19.9v-.85l.05-.05H5V5h14v6.31l2-1.93V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h6z"></svg:path>`,
})
export class MdiImageEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterBlackWhiteIcon],svg[mdi-image-filter-black-white-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 19l-7-8v8H5l7-8V5h7m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiImageFilterBlackWhiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterCenterFocusIcon],svg[mdi-image-filter-center-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m7 10h-4v2h4a2 2 0 0 0 2-2v-4h-2m0-12h-4v2h4v4h2V5a2 2 0 0 0-2-2M5 5h4V3H5a2 2 0 0 0-2 2v4h2m0 6H3v4a2 2 0 0 0 2 2h4v-2H5z"></svg:path>`,
})
export class MdiImageFilterCenterFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterCenterFocusStrongIcon],svg[mdi-image-filter-center-focus-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8c-3.56 0-5.35 4.31-2.83 6.83S16 15.56 16 12c0-2.21-1.79-4-4-4m-7 7H3v4c0 1.1.9 2 2 2h4v-2H5M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2m14-6h-4v2h4v4h2V5c0-1.1-.9-2-2-2m0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2"></svg:path>`,
})
export class MdiImageFilterCenterFocusStrongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterCenterFocusStrongOutlineIcon],svg[mdi-image-filter-center-focus-strong-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12c0-4.45-5.38-6.69-8.54-3.54C5.31 11.61 7.55 17 12 17c2.76 0 5-2.24 5-5m-5 3c-2.67 0-4-3.23-2.12-5.12C11.77 8 15 9.33 15 12c0 1.66-1.34 3-3 3m-7 0H3v4c0 1.1.9 2 2 2h4v-2H5M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2m14-6h-4v2h4v4h2V5c0-1.1-.9-2-2-2m0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2"></svg:path>`,
})
export class MdiImageFilterCenterFocusStrongOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterCenterFocusWeakIcon],svg[mdi-image-filter-center-focus-weak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15H3v4a2 2 0 0 0 2 2h4v-2H5M5 5h4V3H5a2 2 0 0 0-2 2v4h2m14-6h-4v2h4v4h2V5a2 2 0 0 0-2-2m0 16h-4v2h4a2 2 0 0 0 2-2v-4h-2m-7-7a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 6a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiImageFilterCenterFocusWeakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterDramaIcon],svg[mdi-image-filter-drama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 20h12q1.88 0 3.19-1.31T23 15.5q0-1.7-1.21-3.1T19 11q0-2.95-2-4.97Q14.95 4 12 4Q9.88 4 8.29 5.08Q6.7 6.15 6.25 8q2.55.45 4.15 2.19T12 14.5h-2q0-1.82-1.34-3.16Q7.33 10 5.5 10t-3.16 1.34Q1 12.68 1 14.5q0 2.3 1.6 3.9T6.5 20"></svg:path>`,
})
export class MdiImageFilterDramaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterDramaOutlineIcon],svg[mdi-image-filter-drama-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 20q-2.3 0-3.9-1.6T1 14.5q0-1.95 1.21-3.44q1.22-1.49 3.04-1.91q.63-2.25 2.48-3.7Q9.57 4 12 4q3 0 5 2.06q2 2.07 2 4.94q1.88.2 2.94 1.55T23 15.5q0 1.85-1.31 3.18Q20.38 20 18.5 20m-12-2h12q1.05 0 1.77-.73q.73-.72.73-1.77t-.73-1.77Q19.55 13 18.5 13H17v-2q0-2.07-1.46-3.54Q14.08 6 12 6q-1.57 0-2.8.86q-1.2.87-1.8 2.21q1.95.33 3.28 1.84Q12 12.43 12 14.5h-2q0-1.45-1-2.47Q7.95 11 6.5 11t-2.47 1.03Q3 13.05 3 14.5T4.03 17q1.02 1 2.47 1"></svg:path>`,
})
export class MdiImageFilterDramaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterFramesIcon],svg[mdi-image-filter-frames-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8H6v10h12m2 2H4V6h4.5l3.54-3.5L15.5 6H20m0-2h-4l-4-4l-4 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiImageFilterFramesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterHdrIcon],svg[mdi-image-filter-hdr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z"></svg:path>`,
})
export class MdiImageFilterHdrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterHdrOutlineIcon],svg[mdi-image-filter-hdr-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18H1l7.25-9.67l2 2.67L14 6zm-11.5-5.33L14 16h5l-5-6.67zM5 16h6.5l-3.25-4.33z"></svg:path>`,
})
export class MdiImageFilterHdrOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterNoneIcon],svg[mdi-image-filter-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3z"></svg:path>`,
})
export class MdiImageFilterNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterTiltShiftIcon],svg[mdi-image-filter-tilt-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.68 19.74A10 10 0 0 0 11 21.95v-2.02a7.94 7.94 0 0 1-3.9-1.62m5.9 1.62v2.02c2-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62m5.31-3.03l1.43 1.43c1.21-1.48 2.01-3.33 2.21-5.33h-2.02a7.94 7.94 0 0 1-1.62 3.9M15 12a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3M4.07 13H2.05c.2 2 1 3.84 2.21 5.32l1.43-1.43A7.87 7.87 0 0 1 4.07 13m1.62-5.9L4.26 5.68A10 10 0 0 0 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9M19.93 11h2.02c-.2-2-1-3.84-2.21-5.32L18.31 7.1a7.94 7.94 0 0 1 1.62 3.9m-1.61-6.74A10 10 0 0 0 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62M11 4.07V2.05c-2 .2-3.84 1-5.32 2.21L7.1 5.69A7.94 7.94 0 0 1 11 4.07"></svg:path>`,
})
export class MdiImageFilterTiltShiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterVintageIcon],svg[mdi-image-filter-vintage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4m6.7-3.6a6 6 0 0 0-.86-.4c.29-.11.58-.24.86-.4c1.92-1.1 2.99-3.1 3-5.19a6.01 6.01 0 0 0-6 0c-.28.16-.54.35-.78.54c.05-.31.08-.63.08-.95c0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95c-.24-.2-.5-.39-.78-.55a6.01 6.01 0 0 0-6 0c0 2.07 1.07 4.1 3 5.19c.28.16.57.29.86.41c-.29.1-.58.23-.86.39a6 6 0 0 0-3 5.19a6.01 6.01 0 0 0 6 0c.28-.16.54-.35.78-.54c-.05.32-.08.64-.08.96c0 2.22 1.21 4.15 3 5.19c1.79-1.04 3-2.97 3-5.19c0-.32-.03-.64-.08-.95q.36.3.78.54a6.01 6.01 0 0 0 6 0c-.01-2.09-1.08-4.09-3-5.19"></svg:path>`,
})
export class MdiImageFilterVintageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageFrameIcon],svg[mdi-image-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14.29L6.5 19h10.96l-2.71-3.54l-1.97 2.34zM5 21V7h13.96v14zm7-18.6l2.61 2.63H9.37zM5 5.03c-.5 0-1 .19-1.39.58C3.2 6 3 6.46 3 7v14c0 .5.2 1 .61 1.39C4 22.8 4.5 23 5 23h13.96c.54 0 1-.2 1.41-.61c.4-.39.63-.89.63-1.39V7c0-.54-.23-1-.63-1.39c-.41-.39-.87-.58-1.41-.58H16L12 1L7.96 5.03z"></svg:path>`,
})
export class MdiImageFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageLockIcon],svg[mdi-image-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 16v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zM5 3c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h8.03c-.03-.1-.03-.2-.03-.3V18H5l3.5-4.5l2.5 3l3.5-4.5l.27.37C15.61 10.89 17.27 10 19 10c.69 0 1.37.16 2 .42V5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiImageLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageLockOutlineIcon],svg[mdi-image-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 16v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zM5 3c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h8.03c-.03-.1-.03-.2-.03-.3V19H5V5h14v5c.69 0 1.37.16 2 .42V5a2 2 0 0 0-2-2zm8.96 9.29l-2.75 3.54l-1.96-2.36L6.5 17H13c.08-.86.46-1.54.96-2.04c.07-.07.17-.11.24-.17v-.29c0-.55.1-1.06.27-1.53z"></svg:path>`,
})
export class MdiImageLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageMarkerIcon],svg[mdi-image-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.55 18c.42 1.08 1.04 2.12 1.64 3H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v5.63c-.75-.4-1.61-.63-2.5-.63c-2.21 0-4.17 1.39-5.03 3.33L11 16.5l-2.5-3L5 18zM22 15.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiImageMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageMarkerOutlineIcon],svg[mdi-image-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19c.36.72.78 1.4 1.19 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v5.63c-.61-.33-1.29-.54-2-.6V5H5v14zm-.04-6.71l-2.75 3.54l-1.96-2.36L6.5 17h6.72c-.13-.5-.22-1-.22-1.5c0-1.15.38-2.24 1-3.13zM22 15.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiImageMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageMinusIcon],svg[mdi-image-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18v2h8v-2zm-1.7 3H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v8.3c-.6-.2-1.3-.3-2-.3c-1.1 0-2.2.3-3.1.9L14.5 12L11 16.5l-2.5-3L5 18h8.1c-.1.3-.1.7-.1 1c0 .7.1 1.4.3 2"></svg:path>`,
})
export class MdiImageMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageMinusOutlineIcon],svg[mdi-image-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.4 14.21c-.93.7-1.65 1.67-2.05 2.79H6.5l2.75-3.53l1.96 2.36l2.75-3.54zM5 19V5h14v8c.7 0 1.37.13 2 .35V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h8.35c-.22-.63-.35-1.3-.35-2zm10-1v2h8v-2z"></svg:path>`,
})
export class MdiImageMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageMoveIcon],svg[mdi-image-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h4V0l5 5l-5 5V7h-4zm6 8.94V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.06c-.06.33-.06.67-.06 1a8 8 0 0 0 8 8c.33 0 .67 0 1-.06M19 18l-4.5-6l-3.5 4.5l-2.5-3L5 18z"></svg:path>`,
})
export class MdiImageMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageMultipleIcon],svg[mdi-image-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-11-4l2.03 2.71L16 11l4 5H8M2 6v14a2 2 0 0 0 2 2h14v-2H4V6"></svg:path>`,
})
export class MdiImageMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageMultipleOutlineIcon],svg[mdi-image-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3m12.96-10.71l-2.75 3.54l-1.96-2.36L8.5 15h11z"></svg:path>`,
})
export class MdiImageMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageOffIcon],svg[mdi-image-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17.2L6.8 3H19c1.1 0 2 .9 2 2zm-.3 4.8l-1-1H5c-1.1 0-2-.9-2-2V4.3l-1-1L3.3 2L22 20.7zm-3.9-4l-3.9-3.9l-1.9 2.4l-2.5-3L5 18z"></svg:path>`,
})
export class MdiImageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageOffOutlineIcon],svg[mdi-image-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20.7L3.3 2L2 3.3l1 1V19c0 1.1.9 2 2 2h14.7l1 1zM5 19V6.3l7.6 7.6l-1.5 1.9L9 13.1L6 17h9.7l2 2zM8.8 5l-2-2H19c1.1 0 2 .9 2 2v12.2l-2-2V5z"></svg:path>`,
})
export class MdiImageOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageOutlineIcon],svg[mdi-image-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5.04 9.29l-2.75 3.54l-1.96-2.36L6.5 17h11z"></svg:path>`,
})
export class MdiImageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImagePlusIcon],svg[mdi-image-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3zm-4.7 6H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v8.3c-.6-.2-1.3-.3-2-.3c-1.1 0-2.2.3-3.1.9L14.5 12L11 16.5l-2.5-3L5 18h8.1c-.1.3-.1.7-.1 1c0 .7.1 1.4.3 2"></svg:path>`,
})
export class MdiImagePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImagePlusOutlineIcon],svg[mdi-image-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .7.13 1.37.35 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v8.35c-.63-.22-1.3-.35-2-.35V5H5v14zm.96-6.71l-2.75 3.54l-1.96-2.36L6.5 17h6.85c.4-1.12 1.12-2.09 2.05-2.79zM20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiImagePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageRefreshIcon],svg[mdi-image-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.5c0 .89.18 1.73.5 2.5H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v7.5c-.77-.32-1.61-.5-2.5-.5c-1.21 0-2.34.34-3.31.92L14.5 12L11 16.5l-2.5-3L5 18h7.03c-.03.17-.03.33-.03.5m10 0v-4l-1.17 1.17A4 4 0 0 0 18 14.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5z"></svg:path>`,
})
export class MdiImageRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageRefreshOutlineIcon],svg[mdi-image-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.68 13.25a6.5 6.5 0 0 0-2.5 3.75H6.5l2.75-3.53l1.96 2.36l2.75-3.54zM5 19V5h14v7.03c.7.06 1.38.21 2 .47V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h7.5c-.26-.62-.41-1.3-.47-2zm17-.5v-4l-1.17 1.17A4 4 0 0 0 18 14.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5z"></svg:path>`,
})
export class MdiImageRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageRemoveIcon],svg[mdi-image-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.3 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v8.3c-.6-.2-1.3-.3-2-.3c-1.1 0-2.2.3-3.1.9L14.5 12L11 16.5l-2.5-3L5 18h8.1c-.1.3-.1.7-.1 1c0 .7.1 1.4.3 2m7.1-2l2.1 2.1l-1.4 1.4l-2.1-2.1l-2.1 2.1l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4z"></svg:path>`,
})
export class MdiImageRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageRemoveOutlineIcon],svg[mdi-image-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .7.13 1.37.35 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v8.35c-.63-.22-1.3-.35-2-.35V5H5v14zm-1.79-3.17l-1.96-2.36L6.5 17h6.85c.4-1.12 1.12-2.09 2.05-2.79l-1.44-1.92zm11.33 1.05l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiImageRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageSearchIcon],svg[mdi-image-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 2C18 2 20 4 20 6.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 13.39l-3.12-3.07c-.69.43-1.51.68-2.38.68C13 11 11 9 11 6.5S13 2 15.5 2m0 2A2.5 2.5 0 0 0 13 6.5A2.5 2.5 0 0 0 15.5 9A2.5 2.5 0 0 0 18 6.5A2.5 2.5 0 0 0 15.5 4m-8 10.5L4 19h14l-4.5-6l-3.5 4.5zM20 20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.5c-.32.77-.5 1.61-.5 2.5a6.5 6.5 0 0 0 6.5 6.5c.68 0 1.34-.11 1.96-.3L20 15.24z"></svg:path>`,
})
export class MdiImageSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageSearchOutlineIcon],svg[mdi-image-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 9c.7 0 1.29-.24 1.77-.73c.49-.48.73-1.07.73-1.77c0-.67-.24-1.27-.73-1.77c-.48-.5-1.07-.73-1.77-.73c-.67 0-1.27.23-1.77.73S13 5.83 13 6.5c0 .7.23 1.29.73 1.77c.5.49 1.1.73 1.77.73m3.81-.09l3.1 3.09L21 13.41l-3.14-3.1c-.78.47-1.58.69-2.39.69c-1.25 0-2.31-.42-3.17-1.3c-.85-.87-1.3-1.93-1.3-3.2c0-1.23.45-2.3 1.33-3.17C13.2 2.45 14.27 2 15.5 2c1.27 0 2.33.45 3.2 1.33c.88.87 1.3 1.94 1.3 3.17c0 .83-.22 1.63-.69 2.41M16.5 18h-11l2.75-3.5l1.97 2.33l2.72-3.52zm1.5-5l2 2v5c0 .55-.19 1-.59 1.4c-.41.39-.88.6-1.41.6H4c-.55 0-1-.21-1.4-.6c-.39-.4-.6-.85-.6-1.4V6c0-.53.21-1 .6-1.41C3 4.19 3.45 4 4 4h5.5c-.3.64-.47 1.31-.5 2H4v14h14z"></svg:path>`,
})
export class MdiImageSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageSizeSelectActualIcon],svg[mdi-image-size-select-actual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3C2 3 1 4 1 5v14a2 2 0 0 0 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2M5 17l3.5-4.5l2.5 3l3.5-4.5l4.5 6z"></svg:path>`,
})
export class MdiImageSizeSelectActualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageSizeSelectLargeIcon],svg[mdi-image-size-select-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15h2v2h-2zm0-4h2v2h-2zm2 8h-2v2c1 0 2-1 2-2M13 3h2v2h-2zm8 4h2v2h-2zm0-4v2h2c0-1-1-2-2-2M1 7h2v2H1zm16-4h2v2h-2zm0 16h2v2h-2zM3 3C2 3 1 4 1 5h2zm6 0h2v2H9zM5 3h2v2H5zm-4 8v8a2 2 0 0 0 2 2h12V11zm2 8l2.5-3.21l1.79 2.15l2.5-3.22L13 19z"></svg:path>`,
})
export class MdiImageSizeSelectLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageSizeSelectSmallIcon],svg[mdi-image-size-select-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 15h-2v2h2zm0-4h-2v2h2zm0 8h-2v2c1 0 2-1 2-2M15 3h-2v2h2zm8 4h-2v2h2zm-2-4v2h2c0-1-1-2-2-2M3 21h8v-6H1v4a2 2 0 0 0 2 2M3 7H1v2h2zm12 12h-2v2h2zm4-16h-2v2h2zm0 16h-2v2h2zM3 3C2 3 1 4 1 5h2zm0 8H1v2h2zm8-8H9v2h2zM7 3H5v2h2z"></svg:path>`,
})
export class MdiImageSizeSelectSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageSyncIcon],svg[mdi-image-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 13.5L5 18h8.03c.08 1.1.44 2.12 1 3H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v6.18c-.5-.11-1-.18-1.5-.18c-1.72 0-3.27.67-4.43 1.76L14.5 12L11 16.5zM19 20a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5zm0-6.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4"></svg:path>`,
})
export class MdiImageSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageSyncOutlineIcon],svg[mdi-image-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.18 19c.17.72.46 1.39.85 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v6.18c-.5-.11-1-.18-1.5-.18c-.17 0-.33 0-.5.03V5H5v14zm-1.97-3.17l-1.96-2.36L6.5 17h6.53c.11-1.46.7-2.78 1.61-3.81l-.68-.9zM19 13.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5z"></svg:path>`,
})
export class MdiImageSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImageTextIcon],svg[mdi-image-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13h-8v-2h8zm0-6h-8v2h8zm-8 10h8v-2h-8zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2m-1.5 6l-2.2-3l-1.8 2.3l-1.2-1.5L3.5 15z"></svg:path>`,
})
export class MdiImageTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiImportIcon],svg[mdi-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 12l-4-4v3H2v2h8v3m10 2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3h2V6h12v12H6v-3H4v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></svg:path>`,
})
export class MdiImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInboxIcon],svg[mdi-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15h-4a3 3 0 0 1-3 3a3 3 0 0 1-3-3H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInboxArrowDownIcon],svg[mdi-inbox-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10h-2V7h-4v3H8l4 4m7 1h-4a3 3 0 0 1-3 3a3 3 0 0 1-3-3H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiInboxArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInboxArrowDownOutlineIcon],svg[mdi-inbox-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 19v-2h3.13a4.13 4.13 0 0 0 1.27 2m9.6 0h-4.4a4.13 4.13 0 0 0 1.27-2H19m0-2h-5v1a2 2 0 0 1-4 0v-1H5V5h14m-3 5h-2V7h-4v3H8l4 4"></svg:path>`,
})
export class MdiInboxArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInboxArrowUpIcon],svg[mdi-inbox-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14h-4v-3H8l4-4l4 4h-2zm-9 1V5h14v10h-4a3 3 0 0 1-3 3a3 3 0 0 1-3-3zM19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiInboxArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInboxArrowUpOutlineIcon],svg[mdi-inbox-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 19v-2h3.13a4.13 4.13 0 0 0 1.27 2m9.6 0h-4.4a4.13 4.13 0 0 0 1.27-2H19m0-2h-5v1a2 2 0 0 1-4 0v-1H5V5h14M8 11h2v3h4v-3h2l-4-4"></svg:path>`,
})
export class MdiInboxArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInboxFullIcon],svg[mdi-inbox-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15V5H5v10h4c0 1.66 1.34 3 3 3s3-1.34 3-3zm0-12c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM7 13v-2h10v2zm0-4V7h10v2z"></svg:path>`,
})
export class MdiInboxFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInboxFullOutlineIcon],svg[mdi-inbox-full-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zM5 19h4.4a4.13 4.13 0 0 1-1.27-2H5zm14 0v-2h-3.13c-.22.78-.66 1.47-1.27 2zm0-4V5H5v10h5v1c0 2.67 4 2.67 4 0v-1zM7 7h10v2H7zm10 4v2H7v-2z"></svg:path>`,
})
export class MdiInboxFullOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInboxMultipleIcon],svg[mdi-inbox-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8V5H5v3h4a3 3 0 0 0 3 3a3 3 0 0 0 3-3zm0-5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 15h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path>`,
})
export class MdiInboxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInboxMultipleOutlineIcon],svg[mdi-inbox-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5 10v2h4.4c-.6-.53-1.06-1.22-1.27-2zm14 2v-2h-3.13c-.21.78-.67 1.47-1.27 2zm0-4V5H5v3h5v1c0 1.07.93 2 2 2s2-.93 2-2V8zm2 11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4h7v1c0 1.07.93 2 2 2s2-.93 2-2v-1h7zM5 17v2h4.4c-.6-.53-1.06-1.22-1.27-2zm14 2v-2h-3.13c-.21.78-.67 1.47-1.27 2z"></svg:path>`,
})
export class MdiInboxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInboxOutlineIcon],svg[mdi-inbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 19v-2h3.13a4.13 4.13 0 0 0 1.27 2m9.6 0h-4.4a4.13 4.13 0 0 0 1.27-2H19m0-2h-5v1a2 2 0 0 1-4 0v-1H5V5h14Z"></svg:path>`,
})
export class MdiInboxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInboxRemoveIcon],svg[mdi-inbox-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15h-4c0 1.7-1.3 3-3 3s-3-1.3-3-3H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.9 3.5l1.4 1.4l-2.1 2.1l2.1 2.1l-1.4 1.4l-2.1-2.1l-2.1 2.1l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4L12 8.6z"></svg:path>`,
})
export class MdiInboxRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInboxRemoveOutlineIcon],svg[mdi-inbox-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 19v-2h3.1c.2.8.7 1.5 1.3 2m9.6 0h-4.4c.6-.5 1.1-1.2 1.3-2H19m0-2h-5v1c0 1.1-.9 2-2 2s-2-.9-2-2v-1H5V5h14zm-4.9-8.5l1.4 1.4l-2.1 2.1l2.1 2.1l-1.4 1.4l-2.1-2.1l-2.1 2.1l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4L12 8.6z"></svg:path>`,
})
export class MdiInboxRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIncognitoIcon],svg[mdi-incognito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.06 13c-1.86 0-3.42 1.33-3.82 3.1c-.95-.41-1.82-.3-2.48-.01C10.35 14.31 8.79 13 6.94 13C4.77 13 3 14.79 3 17s1.77 4 3.94 4c2.06 0 3.74-1.62 3.9-3.68c.34-.24 1.23-.69 2.32.02c.18 2.05 1.84 3.66 3.9 3.66c2.17 0 3.94-1.79 3.94-4s-1.77-4-3.94-4M6.94 19.86c-1.56 0-2.81-1.28-2.81-2.86s1.26-2.86 2.81-2.86c1.56 0 2.81 1.28 2.81 2.86s-1.25 2.86-2.81 2.86m10.12 0c-1.56 0-2.81-1.28-2.81-2.86s1.25-2.86 2.81-2.86s2.82 1.28 2.82 2.86s-1.27 2.86-2.82 2.86M22 10.5H2V12h20zm-6.47-7.87c-.22-.49-.78-.75-1.31-.58L12 2.79l-2.23-.74l-.05-.01c-.53-.15-1.09.13-1.29.64L6 9h12l-2.44-6.32z"></svg:path>`,
})
export class MdiIncognitoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIncognitoCircleIcon],svg[mdi-incognito-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m2.92 10.81c-1.08 0-1.97.75-2.21 1.75c-.54-.23-1.05-.17-1.42-.01c-.24-1-1.14-1.74-2.21-1.74c-1.25 0-2.26 1.01-2.26 2.26s1.01 2.26 2.26 2.26c1.2 0 2.16-.91 2.25-2.08c.2-.13.71-.39 1.34.01a2.258 2.258 0 0 0 4.51-.19c0-1.25-1.01-2.26-2.26-2.26m-5.84.64c.92 0 1.62.73 1.62 1.62s-.7 1.62-1.62 1.62c-.89 0-1.62-.73-1.62-1.62s.73-1.62 1.62-1.62m5.84 0c.89 0 1.62.73 1.62 1.62s-.73 1.62-1.62 1.62c-.92 0-1.62-.73-1.62-1.62s.7-1.62 1.62-1.62m2.91-1.95H6.17v.67h11.66zm-3.68-4.61a.67.67 0 0 0-.8-.36L12 7l-1.35-.47l-.04-.03a.67.67 0 0 0-.77.42l-1.48 3.91h7.28l-1.48-3.91z"></svg:path>`,
})
export class MdiIncognitoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIncognitoCircleOffIcon],svg[mdi-incognito-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l2.95 2.95A9.9 9.9 0 0 0 2 12c0 5.5 4.5 10 10 10c2.28 0 4.37-.77 6.05-2.06l2.79 2.79zM8.94 10.83h-.58l.14-.42zm-2.77.67h3.44l.67.67H6.17zm8.75 5.83c-1.19 0-2.15-.91-2.25-2.07c-.63-.4-1.14-.14-1.34-.01a2.243 2.243 0 0 1-2.25 2.08c-1.25 0-2.26-1.01-2.26-2.26s1.01-2.26 2.26-2.26c1.07 0 1.97.74 2.21 1.74c.36-.15.84-.21 1.36-.01l.66.66c.06.8.69 1.41 1.47 1.47l.6.6c-.15.03-.3.06-.46.06M9.94 6.74L6.72 3.5C8.25 2.56 10.06 2 12 2c5.5 0 10 4.5 10 10c0 1.94-.56 3.75-1.5 5.28l-5.13-5.11h2.46v-.67H14.7l-.67-.67h1.61l-1.48-3.91l-.01-.03a.67.67 0 0 0-.8-.36L12 7l-1.35-.47l-.04-.03a.71.71 0 0 0-.67.24m.76 8.33c0 .89-.7 1.62-1.62 1.62c-.89 0-1.62-.73-1.62-1.62s.73-1.62 1.62-1.62c.92 0 1.62.73 1.62 1.62"></svg:path>`,
})
export class MdiIncognitoCircleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIncognitoOffIcon],svg[mdi-incognito-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l5.2 5.2L6 9h1.11l1.5 1.5H2V12h8.11l3.39 3.37c-.12.24-.2.48-.26.73c-.95-.41-1.83-.3-2.48-.01C10.35 14.31 8.79 13 6.94 13C4.77 13 3 14.79 3 17s1.77 4 3.94 4c2.06 0 3.74-1.62 3.9-3.68c.34-.24 1.23-.69 2.32.02c.18 2.05 1.84 3.66 3.9 3.66c.6 0 1.16-.14 1.66-.39l2.12 2.12zm-15.17-1.6c-1.56 0-2.81-1.28-2.81-2.86s1.26-2.86 2.81-2.86c1.56 0 2.81 1.28 2.81 2.86s-1.25 2.86-2.81 2.86m10.12 0c-1.56 0-2.81-1.28-2.81-2.86c0-.26.04-.5.11-.75l3.48 3.48c-.25.08-.5.13-.78.13M22 12h-6.8l-1.5-1.5H22zm-4.94 1c2.17 0 3.94 1.79 3.94 4c0 .25-.03.5-.07.73l-1.09-1.09a2.825 2.825 0 0 0-2.46-2.47l-1.09-1.08c.25-.06.51-.09.77-.09M12.2 9L7.72 4.5l.71-1.82c.2-.51.76-.79 1.29-.64l.05.01l2.23.74l2.22-.74c.53-.17 1.1.09 1.32.58l.02.05L18 9z"></svg:path>`,
})
export class MdiIncognitoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIndentIcon],svg[mdi-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 3h20v3H2V3zm7 5h13v3H9V8zm0 5h13v3H9v-3zm-7 5h20v3H2v-3zM3 8l4 4l-4 4H2V8h1z" fill="currentColor"></svg:path>`,
})
export class MdiIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInductionIcon],svg[mdi-induction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2c-2.25 0-4.25.61-5.81 1.33C15.79 2.61 14 2 12 2s-3.79.61-5.19 1.33C5.25 2.61 3.25 2 1 2v2c1.36 0 2.61.27 3.71.64c-.68.51-1.08.9-1.12.95C3.21 5.96 3 6.47 3 7v11c0 2.21 1.79 4 4 4s4-1.79 4-4V7c0-.58-.25-1.12-.68-1.5c-.06-.05-.52-.45-1.32-.96c.92-.32 1.92-.54 3-.54s2.08.22 3 .54c-.8.51-1.26.91-1.32.96c-.43.38-.68.92-.68 1.5v11c0 2.21 1.79 4 4 4s4-1.79 4-4V7c0-.53-.21-1.04-.59-1.41c-.04-.05-.44-.44-1.12-.95C20.39 4.27 21.64 4 23 4zM9 7v11c0 1.11-.89 2-2 2s-2-.89-2-2V7s.7-.69 1.87-1.42C8.2 6.31 9 7 9 7m10 0v11c0 1.11-.89 2-2 2s-2-.89-2-2V7s.8-.69 2.13-1.42C18.3 6.31 19 7 19 7"></svg:path>`,
})
export class MdiInductionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInfinityIcon],svg[mdi-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.6 6.62C21.58 6.62 24 9 24 12c0 2.96-2.42 5.37-5.4 5.37c-1.45 0-2.8-.56-3.82-1.57L12 13.34l-2.83 2.51c-.97.97-2.33 1.53-3.77 1.53C2.42 17.38 0 14.96 0 12s2.42-5.38 5.4-5.38c1.44 0 2.8.56 3.82 1.58L12 10.66l2.83-2.51c.97-.97 2.33-1.53 3.77-1.53M7.8 14.39L10.5 12L7.84 9.65c-.68-.68-1.53-1.03-2.44-1.03C3.53 8.62 2 10.13 2 12s1.53 3.38 3.4 3.38c.91 0 1.76-.35 2.4-.99m8.4-4.78L13.5 12l2.66 2.35c.68.68 1.54 1.03 2.44 1.03c1.87 0 3.4-1.51 3.4-3.38s-1.53-3.38-3.4-3.38c-.91 0-1.76.35-2.4.99"></svg:path>`,
})
export class MdiInfinityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationIcon],svg[mdi-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiInformationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationBoxIcon],svg[mdi-information-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m8 6V7h-2v2zm0 8v-6h-2v6z"></svg:path>`,
})
export class MdiInformationBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationBoxOutlineIcon],svg[mdi-information-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h-2V7h2zm0 8h-2v-6h2zM5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m14 16V5H5v14z"></svg:path>`,
})
export class MdiInformationBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationOffIcon],svg[mdi-information-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l3 3C2.8 7.6 2 9.7 2 12c0 5.5 4.5 10 10 10c2.3 0 4.4-.8 6-2.1l2.8 2.8zM13 17h-2v-4.1l2 2zm-2-9.2L6.7 3.5C8.3 2.6 10.1 2 12 2c5.5 0 10 4.5 10 10c0 1.9-.6 3.7-1.5 5.3L12.2 9h.8V7h-2z"></svg:path>`,
})
export class MdiInformationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationOffOutlineIcon],svg[mdi-information-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l3 3C2.8 7.6 2 9.7 2 12c0 5.5 4.5 10 10 10c2.3 0 4.4-.8 6-2.1l2.8 2.8zM12 20c-4.4 0-8-3.6-8-8c0-1.7.6-3.3 1.5-4.6l5.5 5.5V17h2v-2.1l3.6 3.6c-1.3.9-2.9 1.5-4.6 1.5M8.2 5L6.7 3.5C8.3 2.6 10.1 2 12 2c5.5 0 10 4.5 10 10c0 1.9-.6 3.7-1.5 5.3L19 15.8c.6-1.1 1-2.4 1-3.8c0-4.4-3.6-8-8-8c-1.4 0-2.7.4-3.8 1M11 7h2v2h-2z"></svg:path>`,
})
export class MdiInformationOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationOutlineIcon],svg[mdi-information-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></svg:path>`,
})
export class MdiInformationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationSlabBoxIcon],svg[mdi-information-slab-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m6 6h2V7h-2zm3 8v-2h-1v-4h-3v2h1v2h-1v2z"></svg:path>`,
})
export class MdiInformationSlabBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationSlabBoxOutlineIcon],svg[mdi-information-slab-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2V7h-2zm3 8v-2h-1v-4h-3v2h1v2h-1v2zM5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m14 16V5H5v14z"></svg:path>`,
})
export class MdiInformationSlabBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationSlabCircleIcon],svg[mdi-information-slab-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2S2 6.5 2 12s4.5 10 10 10M11 7h2v2h-2zm3 10h-4v-2h1v-2h-1v-2h3v4h1z"></svg:path>`,
})
export class MdiInformationSlabCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationSlabCircleOutlineIcon],svg[mdi-information-slab-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7v2h2V7zm3 10v-2h-1v-4h-3v2h1v2h-1v2zm8-5c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"></svg:path>`,
})
export class MdiInformationSlabCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationSlabSymbolIcon],svg[mdi-information-slab-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h-2V7h2zm1 6v2h-4v-2h1v-2h-1v-2h3v4z"></svg:path>`,
})
export class MdiInformationSlabSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationSymbolIcon],svg[mdi-information-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2V7h-2zm0 8h2v-6h-2z"></svg:path>`,
})
export class MdiInformationSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationVariantIcon],svg[mdi-information-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 4A1.5 1.5 0 0 0 12 5.5A1.5 1.5 0 0 0 13.5 7A1.5 1.5 0 0 0 15 5.5A1.5 1.5 0 0 0 13.5 4m-.36 4.77c-1.19.1-4.44 2.69-4.44 2.69c-.2.15-.14.14.02.42c.16.27.14.29.33.16c.2-.13.53-.34 1.08-.68c2.12-1.36.34 1.78-.57 7.07c-.36 2.62 2 1.27 2.61.87c.6-.39 2.21-1.5 2.37-1.61c.22-.15.06-.27-.11-.52c-.12-.17-.24-.05-.24-.05c-.65.43-1.84 1.33-2 .76c-.19-.57 1.03-4.48 1.7-7.17c.11-.64.41-2.04-.75-1.94"></svg:path>`,
})
export class MdiInformationVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationVariantBoxIcon],svg[mdi-information-variant-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m7.3 4.29c-.19.21-.3.45-.3.71c0 .27.11.5.3.71c.2.19.44.29.7.29c.27 0 .5-.1.71-.29c.19-.21.29-.44.29-.71c0-.26-.1-.5-.29-.71C13.5 7.11 13.27 7 13 7c-.26 0-.5.11-.7.29m-2.5 4.68c-.1.09-.1.1-.03.2l.05.08l.03.06c.07.13.08.13.19.05c.13-.09.35-.23.72-.45c.92-.59.74.09.33 1.59c-.22.83-.5 1.89-.71 3.12c-.24 1.75 1.33.85 1.74.58c.38-.24 1.32-.9 1.54-1.05l.04-.02c.12-.09.07-.13-.02-.27l-.06-.08c-.08-.11-.16-.03-.16-.03l-.16.11c-.45.3-1.07.73-1.17.39c-.09-.25.28-1.61.66-3c.17-.61.34-1.25.47-1.78l.02-.06c.07-.44.22-1.29-.51-1.23c-.8.07-2.97 1.79-2.97 1.79"></svg:path>`,
})
export class MdiInformationVariantBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationVariantBoxOutlineIcon],svg[mdi-information-variant-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m14 16V5H5v14z"></svg:path>`,
})
export class MdiInformationVariantBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationVariantCircleIcon],svg[mdi-information-variant-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2S2 6.5 2 12s4.5 10 10 10m.3-14.71c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2"></svg:path>`,
})
export class MdiInformationVariantCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInformationVariantCircleOutlineIcon],svg[mdi-information-variant-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"></svg:path>`,
})
export class MdiInformationVariantCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInstagramIcon],svg[mdi-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiInstagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInstapaperIcon],svg[mdi-instapaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 5a1 1 0 0 0-1-1H8V2h8v2h-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1v2H8v-2h1a1 1 0 0 0 1-1V5z" fill="currentColor"></svg:path>`,
})
export class MdiInstapaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInstrumentTriangleIcon],svg[mdi-instrument-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2h-1v4.2c-.1.1-.2.1-.3.3L2.1 20.7c-.3.6.1 1.3.8 1.3H16v-2H4.8L11 9.2l5.7 10l1.7-1l-6.6-11.8l-.3-.3zM21 6h-1v12l-.5 4h2l-.5-4z"></svg:path>`,
})
export class MdiInstrumentTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIntegratedCircuitChipIcon],svg[mdi-integrated-circuit-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h10c1.11 0 2 .89 2 2v2h-3.41L16 10.59v4l-2 2V20h-4v-3.41l-2-2V9.41l2-2zm8 7.41V14h4v-4h-2.59zM6.59 8L8 6.59V4H4c-1.11 0-2 .89-2 2v2zM6 14v-4H2v4zm2 3.41L6.59 16H2v2c0 1.11.89 2 2 2h4zM17.41 16L16 17.41V20h4c1.11 0 2-.89 2-2v-2z"></svg:path>`,
})
export class MdiIntegratedCircuitChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvertColorsIcon],svg[mdi-invert-colors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.58c-1.6 0-3.11-.62-4.24-1.75A5.95 5.95 0 0 1 6 13.58c0-1.58.62-3.11 1.76-4.24L12 5.1m5.66 2.83L12 2.27L6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58c2.05 0 4.1-.78 5.66-2.34c3.12-3.12 3.12-8.19 0-11.31"></svg:path>`,
})
export class MdiInvertColorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvertColorsOffIcon],svg[mdi-invert-colors-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.65 20.87L18.3 18.5L12 12.23L8.44 8.66L7 7.25L4.27 4.5L3 5.77l2.78 2.78a8.005 8.005 0 0 0 .56 10.69A7.98 7.98 0 0 0 12 21.58c1.79 0 3.57-.58 5.03-1.78l2.7 2.7L21 21.23zM12 19.59c-1.6 0-3.11-.62-4.24-1.76A5.95 5.95 0 0 1 6 13.59C6 12.27 6.43 11 7.21 10L12 14.77zM12 5.1v4.58l7.25 7.26a7.99 7.99 0 0 0-1.6-9.01L12 2.27l-3.7 3.7l1.41 1.41z"></svg:path>`,
})
export class MdiInvertColorsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceIcon],svg[mdi-invoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 22l-3-2l-3 2l-3-2l-3 2l-3-2l-3 2V3h18z"></svg:path>`,
})
export class MdiInvoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceArrowLeftIcon],svg[mdi-invoice-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.34A6.005 6.005 0 0 0 13 19c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2l-3 2V3h18zM18 18v-2l-3 3l3 3v-2h4v-2z"></svg:path>`,
})
export class MdiInvoiceArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceArrowLeftOutlineIcon],svg[mdi-invoice-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.34c-.63-.22-1.3-.34-2-.34V5H5v13.26l1-.66l3 2l3-2l1.04.69c-.04.21-.04.47-.04.71c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2l-3 2V3h18zM18 18v-2l-3 3l3 3v-2h4v-2z"></svg:path>`,
})
export class MdiInvoiceArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceArrowRightIcon],svg[mdi-invoice-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.34A6.005 6.005 0 0 0 13 19c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2l-3 2V3h18zM19 22v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiInvoiceArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceArrowRightOutlineIcon],svg[mdi-invoice-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.34c-.63-.22-1.3-.34-2-.34V5H5v13.26l1-.66l3 2l3-2l1.04.69c-.04.21-.04.47-.04.71c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2l-3 2V3h18zM19 22v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiInvoiceArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceCheckIcon],svg[mdi-invoice-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.37.12 2 .34V3H3v19l3-2l3 2l3-2l1.3.86c-.2-.58-.3-1.21-.3-1.86c0-3.31 2.69-6 6-6m-3.5 6l2.75 3L23 17.23l-1.16-1.41l-3.59 3.59l-1.59-1.59z"></svg:path>`,
})
export class MdiInvoiceCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceCheckOutlineIcon],svg[mdi-invoice-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.37.12 2 .34V3H3v19l3-2l3 2l3-2l1.3.86c-.2-.58-.3-1.21-.3-1.86c0-.24 0-.5.04-.71L12 17.6l-3 2l-3-2l-1 .66V5h14zm-3.5 6l2.75 3L23 17.23l-1.16-1.41l-3.59 3.59l-1.59-1.59z"></svg:path>`,
})
export class MdiInvoiceCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceClockIcon],svg[mdi-invoice-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13v3.69l3.19 1.84l.75-1.3l-2.44-1.41V13zm-6 9l1.87-1.24A6.95 6.95 0 0 0 16 23c3.87 0 7-3.13 7-7c0-1.91-.76-3.64-2-4.9V3H3v19l3-2zm7-1c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class MdiInvoiceClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceClockOutlineIcon],svg[mdi-invoice-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16.69V13h1.5v2.82l2.44 1.41l-.75 1.3zm-4.13 4.07L9 22l-3-2l-3 2V3h18v8.1c1.24 1.26 2 2.99 2 4.9c0 3.87-3.13 7-7 7a6.95 6.95 0 0 1-5.13-2.24m-1.14-1.65C9.26 18.17 9 17.12 9 16c0-3.87 3.13-7 7-7c1.07 0 2.09.24 3 .67V5H5v13.26l1-.66l3 2zM16 21c2.76 0 5-2.24 5-5s-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5"></svg:path>`,
})
export class MdiInvoiceClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceEditIcon],svg[mdi-invoice-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.86 21.43L9 22l-3-2l-3 2V3h18v7.2c-.9-.38-2-.2-2.76.55l-8.38 8.38zm2-1.47L18 13.83l2.03 2.04L13.9 22h-2.04zm8.53-7.81a.24.24 0 0 0-.08-.06a.5.5 0 0 0-.62.04l-.02.02l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72z"></svg:path>`,
})
export class MdiInvoiceEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceEditOutlineIcon],svg[mdi-invoice-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.86 21.43L9 22l-3-2l-3 2V3h18v7.2c-.63-.27-1.36-.27-2 .02V5H5v13.26l1-.66l3 2l.86-.6zm2-1.47L18 13.83l2.03 2.04L13.9 22h-2.04zm8.87-4.79l.98-.98c.2-.19.2-.52 0-.72l-1.32-1.32a.24.24 0 0 0-.08-.06a.5.5 0 0 0-.62.04l-.02.02l-.98.98z"></svg:path>`,
})
export class MdiInvoiceEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceExportOutlineIcon],svg[mdi-invoice-export-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 22l-3-2l-3 2l-3-2l-3 2l-3-2l-3 2V3h18v6.67l-2-2V5H5v13.26l1-.66l3 2l3-2l3 2l3-2l1 .66v-1.93l2-2zm-.5-10l-5-5l-1.42 1.41L16.67 11H7v2h9.67l-2.59 2.58L15.5 17z"></svg:path>`,
})
export class MdiInvoiceExportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceFastIcon],svg[mdi-invoice-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5H7v16l2.5-1.68L12 21l2.5-1.68L17 21l2.5-1.68L22 21zM2 8c0-.6.4-1 1-1h2v2H3c-.6 0-1-.4-1-1m-1 4c0-.6.4-1 1-1h3v2H2c-.6 0-1-.4-1-1m-1 4c0-.6.4-1 1-1h4v2H1c-.6 0-1-.4-1-1"></svg:path>`,
})
export class MdiInvoiceFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceFastOutlineIcon],svg[mdi-invoice-fast-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 19.32L22 21V5H7v16l2.5-1.68L12 21l2.5-1.68L17 21zM20 7v9.57l-3 2.02l-2.5-1.69l-2.5 1.69l-3-2.02V7zM2 8c0-.6.4-1 1-1h2v2H3c-.6 0-1-.4-1-1m0 3c-.6 0-1 .4-1 1s.4 1 1 1h3v-2zm-2 5c0-.6.4-1 1-1h4v2H1c-.6 0-1-.4-1-1"></svg:path>`,
})
export class MdiInvoiceFastOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceImportIcon],svg[mdi-invoice-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 20l3 2V3H3v8h9.67l-2.59-2.59L11.5 7l5 5l-5 5l-1.42-1.42L12.67 13H3v9l3-2l3 2l3-2l3 2z"></svg:path>`,
})
export class MdiInvoiceImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceImportOutlineIcon],svg[mdi-invoice-import-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 20l3 2V3H3v6h2V5h14v13.26l-1-.66l-3 2l-3-2l-3 2l-3-2l-1 .66V15H3v7l3-2l3 2l3-2l3 2zm-6.5-3l-1.42-1.42L12.67 13H3v-2h9.67l-2.59-2.59L11.5 7l5 5z"></svg:path>`,
})
export class MdiInvoiceImportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceListIcon],svg[mdi-invoice-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V3h18v19l-3-2l-3 2l-3-2l-3 2l-3-2zM17 9V7h-2v2zm-4 0V7H7v2zm0 2H7v2h6zm2 2h2v-2h-2z"></svg:path>`,
})
export class MdiInvoiceListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceListOutlineIcon],svg[mdi-invoice-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7v2h-2V7zm-4 0v2H7V7zm0 4H7v2h6zm2 0v2h2v-2zm6 11l-3-2l-3 2l-3-2l-3 2l-3-2l-3 2V3h18zm-2-3.74V5H5v13.26l1-.66l3 2l3-2l3 2l3-2z"></svg:path>`,
})
export class MdiInvoiceListOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceMinusIcon],svg[mdi-invoice-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V3h18v10.34A6.005 6.005 0 0 0 13 19c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2zm12-4v2h8v-2z"></svg:path>`,
})
export class MdiInvoiceMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceMinusOutlineIcon],svg[mdi-invoice-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.34c-.63-.22-1.3-.34-2-.34V5H5v13.26l1-.66l3 2l3-2l1.04.69c-.04.21-.04.47-.04.71c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2l-3 2V3h18zM15 18v2h8v-2z"></svg:path>`,
})
export class MdiInvoiceMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceMultipleIcon],svg[mdi-invoice-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H2v15h2V4h13zm4 20l-2.5-1.68L16 22l-2.5-1.68L11 22l-2.5-1.68L6 22V6h15z"></svg:path>`,
})
export class MdiInvoiceMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceMultipleOutlineIcon],svg[mdi-invoice-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v15h2V4h13V2zm16.5 18.32L21 22V6H6v16l2.5-1.68L11 22l2.5-1.68L16 22zM19 8v9.57l-3 2.02l-2.5-1.69l-2.5 1.69l-3-2.02V8z"></svg:path>`,
})
export class MdiInvoiceMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceOutlineIcon],svg[mdi-invoice-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 22l-3-2l-3 2l-3-2l-3 2l-3-2l-3 2V3h18zm-2-3.74V5H5v13.26l1-.66l3 2l3-2l3 2l3-2z"></svg:path>`,
})
export class MdiInvoiceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoicePlusIcon],svg[mdi-invoice-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V3h18v10.34A6.005 6.005 0 0 0 13 19c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2zm15-7v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiInvoicePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoicePlusOutlineIcon],svg[mdi-invoice-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.34c-.63-.22-1.3-.34-2-.34V5H5v13.26l1-.66l3 2l3-2l1.04.69c-.04.21-.04.47-.04.71c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2l-3 2V3h18zM18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiInvoicePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceRemoveIcon],svg[mdi-invoice-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.37.12 2 .34V3H3v19l3-2l3 2l3-2l1.3.86c-.2-.58-.3-1.21-.3-1.86c0-3.31 2.69-6 6-6m0 4.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1l-1.4-1.4z"></svg:path>`,
})
export class MdiInvoiceRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceRemoveOutlineIcon],svg[mdi-invoice-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.37.12 2 .34V3H3v19l3-2l3 2l3-2l1.3.86c-.2-.58-.3-1.21-.3-1.86c0-.24 0-.5.04-.71L12 17.6l-3 2l-3-2l-1 .66V5h14zm0 4.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1l-1.4-1.4z"></svg:path>`,
})
export class MdiInvoiceRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceSendIcon],svg[mdi-invoice-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V3h18v11.26l-9-4.5V20l-3 2l-3-2zm21-4l-10 5v-4l4-1l-4-1v-4z"></svg:path>`,
})
export class MdiInvoiceSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceSendOutlineIcon],svg[mdi-invoice-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 18l-10-5v4l4 1l-4 1v4zm-5-4.74l2 1V3H3v19l3-2l3 2l3-2v-2.4l-3 2l-3-2l-1 .66V5h14z"></svg:path>`,
})
export class MdiInvoiceSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextIcon],svg[mdi-invoice-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v19l3-2l3 2l3-2l3 2l3-2l3 2V3zm14 4v2H7V7zm-2 4v2H7v-2z"></svg:path>`,
})
export class MdiInvoiceTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextArrowLeftIcon],svg[mdi-invoice-text-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V3h18v10.34A6.005 6.005 0 0 0 13 19c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2zM17 9V7H7v2zm-2 4v-2H7v2zm3 5v-2l-3 3l3 3v-2h4v-2z"></svg:path>`,
})
export class MdiInvoiceTextArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextArrowLeftOutlineIcon],svg[mdi-invoice-text-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.3 20.86L12 20l-3 2l-3-2l-3 2V3h18v10.34c-.63-.22-1.3-.34-2-.34V5H5v13.26l1-.66l3 2l3-2l1.04.69c-.04.21-.04.47-.04.71c0 .65.1 1.28.3 1.86M17 7v2H7V7zm-2 4v2H7v-2zm3 7v-2l-3 3l3 3v-2h4v-2z"></svg:path>`,
})
export class MdiInvoiceTextArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextArrowRightIcon],svg[mdi-invoice-text-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V3h18v10.34A6.005 6.005 0 0 0 13 19c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2zM17 9V7H7v2zm-2 4v-2H7v2zm4 9v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiInvoiceTextArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextArrowRightOutlineIcon],svg[mdi-invoice-text-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.3 20.86L12 20l-3 2l-3-2l-3 2V3h18v10.34c-.63-.22-1.3-.34-2-.34V5H5v13.26l1-.66l3 2l3-2l1.04.69c-.04.21-.04.47-.04.71c0 .65.1 1.28.3 1.86M17 7v2H7V7zm-2 4v2H7v-2zm4 11v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiInvoiceTextArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextCheckIcon],svg[mdi-invoice-text-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v19l3-2l3 2l3-2l1.3.86c-.2-.58-.3-1.21-.3-1.86a6.005 6.005 0 0 1 8-5.66V3zm14 4v2H7V7zm-2 4v2H7v-2zm.5 8l2.75 3L23 17.23l-1.16-1.41l-3.59 3.59l-1.59-1.59z"></svg:path>`,
})
export class MdiInvoiceTextCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextCheckOutlineIcon],svg[mdi-invoice-text-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l1.3.86c-.2-.58-.3-1.21-.3-1.86c0-.24 0-.5.04-.71L12 17.6l-3 2l-3-2l-1 .66V5h14v8c.7 0 1.37.12 2 .34V3H3v19l3-2l3 2zm5-11V7H7v2zm-2 4v-2H7v2zm.5 6l2.75 3L23 17.23l-1.16-1.41l-3.59 3.59l-1.59-1.59z"></svg:path>`,
})
export class MdiInvoiceTextCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextClockIcon],svg[mdi-invoice-text-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16.69V13h1.5v2.82l2.44 1.41l-.75 1.3zM3 22V3h18v8.1c1.24 1.26 2 2.99 2 4.9c0 3.87-3.13 7-7 7a6.95 6.95 0 0 1-5.13-2.24L9 22l-3-2zm6.67-9c.36-.75.83-1.43 1.43-2H7v2zM17 9V7H7v2zm-1 12c2.76 0 5-2.24 5-5s-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5"></svg:path>`,
})
export class MdiInvoiceTextClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextClockOutlineIcon],svg[mdi-invoice-text-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V7h10zm-2 4v3.69l3.19 1.84l.75-1.3l-2.44-1.41V13zm-6 9l1.87-1.24A6.95 6.95 0 0 0 16 23c3.87 0 7-3.13 7-7c0-1.91-.76-3.64-2-4.9V3H3v19l3-2zm0-2.4l-3-2l-1 .66V5h14v4.67c-.91-.43-1.93-.67-3-.67c-1.91 0-3.64.76-4.9 2H7v2h2.67c-.43.91-.67 1.93-.67 3c0 1.12.26 2.17.73 3.11zm7 1.4c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class MdiInvoiceTextClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextEditIcon],svg[mdi-invoice-text-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.86 21.43L9 22l-3-2l-3 2V3h18v7.2c-.9-.38-2-.2-2.76.55l-8.38 8.38zM17 7H7v2h10zm-2 4H7v2h8zm-3.14 8.96V22h2.04l6.13-6.13L18 13.83zm9.85-6.49l-1.32-1.32a.24.24 0 0 0-.08-.06a.5.5 0 0 0-.62.04l-.02.02l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"></svg:path>`,
})
export class MdiInvoiceTextEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextEditOutlineIcon],svg[mdi-invoice-text-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.86 21.43L9 22l-3-2l-3 2V3h18v7.2c-.63-.27-1.36-.27-2 .02V5H5v13.26l1-.66l3 2l.86-.6zm2-1.47L18 13.83l2.03 2.04L13.9 22h-2.04zm9.85-5.77l-.98.98l-2.04-2.04l.98-.98l.01-.01l.01-.01c.17-.16.43-.17.62-.04c.03.01.06.04.08.06l1.32 1.32c.2.2.2.53 0 .72M17 9V7H7v2zm-2 4v-2H7v2z"></svg:path>`,
})
export class MdiInvoiceTextEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextFastIcon],svg[mdi-invoice-text-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h15v16l-2.5-1.68L17 21l-2.5-1.68L12 21l-2.5-1.68L7 21zm11 4h-7v2h7zm-7 4v2h5v-2zM3 7c-.6 0-1 .4-1 1s.4 1 1 1h2V7zm-2 5c0-.6.4-1 1-1h3v2H2c-.6 0-1-.4-1-1m0 3c-.6 0-1 .4-1 1s.4 1 1 1h4v-2z"></svg:path>`,
})
export class MdiInvoiceTextFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextFastOutlineIcon],svg[mdi-invoice-text-fast-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-7v2h7zm-7 4h5v2h-5zm11 8l-2.5-1.68L17 21l-2.5-1.68L12 21l-2.5-1.68L7 21V5h15zm-2-4.43V7H9v9.57l3 2.02l2.5-1.69l2.5 1.69zM3 7c-.6 0-1 .4-1 1s.4 1 1 1h2V7zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h3v-2zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h4v-2z"></svg:path>`,
})
export class MdiInvoiceTextFastOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextMinusIcon],svg[mdi-invoice-text-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v19l3-2l3 2l3-2l1.3.86c-.2-.58-.3-1.21-.3-1.86a6.005 6.005 0 0 1 8-5.66V3zm14 4v2H7V7zm-2 4v2H7v-2zm0 7v2h8v-2z"></svg:path>`,
})
export class MdiInvoiceTextMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextMinusOutlineIcon],svg[mdi-invoice-text-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.34c-.63-.22-1.3-.34-2-.34V5H5v13.26l1-.66l3 2l3-2l1.04.69c-.04.21-.04.47-.04.71c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2l-3 2V3h18zM17 9V7H7v2zm-2 4v-2H7v2zm0 5v2h8v-2z"></svg:path>`,
})
export class MdiInvoiceTextMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextMultipleIcon],svg[mdi-invoice-text-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H2v15h2V4h13zm4 20l-2.5-1.68L16 22l-2.5-1.68L11 22l-2.5-1.68L6 22V6h15zM10 10v2h7v-2zm5 4h-5v2h5z"></svg:path>`,
})
export class MdiInvoiceTextMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextMultipleOutlineIcon],svg[mdi-invoice-text-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v15h2V4h13V2zm8 8h7v2h-7zm5 4h-5v2h5zm3.5 6.32L21 22V6H6v16l2.5-1.68L11 22l2.5-1.68L16 22zM19 8v9.57l-3 2.02l-2.5-1.69l-2.5 1.69l-3-2.02V8z"></svg:path>`,
})
export class MdiInvoiceTextMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextOutlineIcon],svg[mdi-invoice-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7v2H7V7zm-2 4v2H7v-2zm3 9l3 2V3H3v19l3-2l3 2l3-2l3 2zm1-15v13.26l-1-.66l-3 2l-3-2l-3 2l-3-2l-1 .66V5z"></svg:path>`,
})
export class MdiInvoiceTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextPlusIcon],svg[mdi-invoice-text-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v19l3-2l3 2l3-2l1.3.86c-.2-.58-.3-1.21-.3-1.86a6.005 6.005 0 0 1 8-5.66V3zm14 4v2H7V7zm-2 4v2H7v-2zm3 4v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiInvoiceTextPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextPlusOutlineIcon],svg[mdi-invoice-text-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.34c-.63-.22-1.3-.34-2-.34V5H5v13.26l1-.66l3 2l3-2l1.04.69c-.04.21-.04.47-.04.71c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2l-3 2V3h18zM17 9V7H7v2zm-2 4v-2H7v2zm3 2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiInvoiceTextPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextRemoveIcon],svg[mdi-invoice-text-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v19l3-2l3 2l3-2l1.3.86c-.2-.58-.3-1.21-.3-1.86a6.005 6.005 0 0 1 8-5.66V3zm14 4v2H7V7zm-2 4v2H7v-2zm4 6.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1l-1.4-1.4z"></svg:path>`,
})
export class MdiInvoiceTextRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextRemoveOutlineIcon],svg[mdi-invoice-text-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l1.3.86c-.2-.58-.3-1.21-.3-1.86c0-.24 0-.5.04-.71L12 17.6l-3 2l-3-2l-1 .66V5h14v8c.7 0 1.37.12 2 .34V3H3v19l3-2l3 2zm5-11V7H7v2zm-2 4v-2H7v2zm4 4.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1l-1.4-1.4z"></svg:path>`,
})
export class MdiInvoiceTextRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextSendIcon],svg[mdi-invoice-text-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v19l3-2l3 2l3-2v-7H7v-2h7.47L21 14.26V3zm14 6H7V7h10zm-3 14v-4l4-1l-4-1v-4l10 5z"></svg:path>`,
})
export class MdiInvoiceTextSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextSendOutlineIcon],svg[mdi-invoice-text-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 18l-10 5v-4l4-1l-4-1v-4zm-3-3.74l-2-1V5H5v13.26l1-.66l3 2l3-2V20l-3 2l-3-2l-3 2V3h18zM17 7v2H7V7zm-5 6v-2H7v2z"></svg:path>`,
})
export class MdiInvoiceTextSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIobrokerIcon],svg[mdi-iobroker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.5 0-1 .04-1.5.11v2.74a7.6 7.6 0 0 1 3 0V2.12Q12.75 2 12 2m-2.18.25C5.4 3.25 2.11 7.24 2.11 12c0 5.5 4.42 10 9.89 10s9.89-4.5 9.89-10c0-4.76-3.29-8.75-7.7-9.75v2.78c2.98.93 5.15 3.7 5.15 6.97c0 4-3.29 7.3-7.34 7.3c-4.04 0-7.33-3.3-7.33-7.3c0-3.27 2.17-6.04 5.15-6.97m2.18.42c-.5 0-1 .05-1.5.17v12.65c.5.11 1 .17 1.5.17s1-.05 1.5-.17V5.62c-.5-.12-1-.17-1.5-.17"></svg:path>`,
})
export class MdiIobrokerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIpIcon],svg[mdi-ip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11h-2V9h2zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm7 2H8v10h2zm2 10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4z"></svg:path>`,
})
export class MdiIpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIpNetworkIcon],svg[mdi-ip-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h-2V7h2zm7 11v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v2h1a1 1 0 0 1 1 1zM9 5H7v10h2zm2 10h2v-4h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4z"></svg:path>`,
})
export class MdiIpNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIpNetworkOutlineIcon],svg[mdi-ip-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2zm-8-5V5h10v10zm3-9H8v8h2zm4 0h-3v8h2v-2h1a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 4h-1V8h1z"></svg:path>`,
})
export class MdiIpNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIpOutlineIcon],svg[mdi-ip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 7H7v10h2zm6 0h-4v10h2v-4h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 4h-2V9h2z"></svg:path>`,
})
export class MdiIpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIpodIcon],svg[mdi-ipod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 2h10v6H7zm5 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiIpodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIronIcon],svg[mdi-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6c-1.66 0-3 1.34-3 3v4c0 .55-.45 1-1 1v-4c0-1.66-1.34-3-3-3h-4c-1.66 0-3 1.34-3 3h2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1H6c-2.21 0-4 1.79-4 4v3h15v-2c1.66 0 3-1.34 3-3V9c0-.55.45-1 1-1h1V6z"></svg:path>`,
})
export class MdiIronIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIronBoardIcon],svg[mdi-iron-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6h-3V4.8c0-1.12.56-2.17 1.5-2.8c.94.63 1.5 1.68 1.5 2.8zm-3.72 7.63L19.59 19c.79.06 1.41.7 1.41 1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-.24l-4-5.03l-4 5.03v.24c0 .83-.67 1.5-1.5 1.5S7 21.33 7 20.5c0-.8.63-1.44 1.41-1.5l4.31-5.37L9 9H3V7h18v2h-2zM14 12l2.42-3h-4.84z"></svg:path>`,
})
export class MdiIronBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIronOutlineIcon],svg[mdi-iron-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6c-1.66 0-3 1.34-3 3v4c0 .55-.45 1-1 1v-4c0-1.66-1.34-3-3-3h-4c-1.66 0-3 1.34-3 3h2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1H6c-2.21 0-4 1.79-4 4v3h15v-2c1.66 0 3-1.34 3-3V9c0-.55.45-1 1-1h1V6zm-6 10H4v-1c0-1.1.9-2 2-2h9z"></svg:path>`,
})
export class MdiIronOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIslandIcon],svg[mdi-island-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20c-1.39 0-2.78-.47-4-1.33c-2.44 1.71-5.56 1.71-8 0C6.78 19.53 5.39 20 4 20H2v2h2c1.37 0 2.74-.35 4-1c2.5 1.3 5.5 1.3 8 0c1.26.65 2.62 1 4 1h2v-2zm.78-1H20c-1.18 0-2.36-.4-3.42-1.15l-.58-.4l-.58.4c-1.03.72-2.21 1.1-3.42 1.1c-1.23 0-2.41-.38-3.44-1.1l-.56-.4l-.57.4C6.36 18.6 5.18 19 4 19h-.78c.53-1.46 2.36-4 8.78-4c2 0 3 .24 3 .24c.68-1.37 1.83-4.47 1-8.42l1.06.71c.33 1.43.94 4.22-.26 8.12c2.63.85 3.62 2.35 3.98 3.35M22 7.59c-.79-1.09-2-1.88-3.42-2.06c.12.14.23.3.34.47a5.03 5.03 0 0 1-.45 5.95c.59-1.45.53-3.16-.39-4.59c-.08-.08-.12-.16-.18-.25c-.4-.58-.94-1.05-1.52-1.39c-2.03.65-3.5 2.55-3.5 4.78c0 .53.08 1.03.22 1.5c-.6-.83-.94-1.83-.94-2.93c0-1.66.8-3.12 2.04-4.04c-1.04-.08-2.11.15-3.06.75c-.44.27-.82.6-1.14.98c.39-.94 1.05-1.76 2-2.36a4.85 4.85 0 0 1 3.39-.71a5.2 5.2 0 0 0-1.06-1.09c-.41-.31-.86-.55-1.33-.72c1 .03 2.04.36 2.91 1.01c.44.33.79.73 1.09 1.16c.06 0 .12-.01.19-.01A5.03 5.03 0 0 1 22 7.59"></svg:path>`,
})
export class MdiIslandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIslandVariantIcon],svg[mdi-island-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15.26V13h-4l4-4h-3l3-3h-2l3-3l3 3h-2l3 3h-3l4 4h-4v2.76c2.13.71 3.68 1.91 4 3.24c-1.7-.13-3.38-.46-5-1c-1.21.61-2.63 1-4 1c-1.29 0-2.83-.42-4-1c-1.63.54-3.28.87-5 1c.54-2.23 4.4-4 9-4c1.05 0 2.06.09 3 .26M8 19s-3 1-6 1v2c3 0 6-1 6-1s2 1 4 1s4-1 4-1s3 1 6 1v-2c-3 0-6-1-6-1s-2 1-4 1s-4-1-4-1"></svg:path>`,
})
export class MdiIslandVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiItunesIcon],svg[mdi-itunes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7.85 17.07c-.82.1-4.35.6-3.79 3.19c.63 3.04 5.81 2.33 5.77-1.26c-.02-2.43 0-9.8 0-9.8s-.07-.67.6-.81l7.76-1.6s.64-.14.64.5v6.91s.07.63-.71.8c-.78.12-4.21.4-3.93 3c.31 3.07 5.81 2.65 5.81-.93V2.61s.04-.99-1.1-.74L9.5 3.78s-.84.18-.84.99v11.34s0 .85-.81.96z" fill="currentColor"></svg:path>`,
})
export class MdiItunesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiIvBagIcon],svg[mdi-iv-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1h-4C5 1 5 3 5 3v12s0 2 5 2v2h1v1c0 1.21.8 3 3 3h4v-2h-4c-.81 0-1-.55-1-1v-1h1v-2c5 0 5-2 5-2V3s0-2-5-2m3 11h-3v-1h3zm0-7h-3v1h3v2h-3v1h3v1H7V3.5c.3-.18 1.13-.5 3-.5h4c1.88 0 2.7.32 3 .5z"></svg:path>`,
})
export class MdiIvBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiJabberIcon],svg[mdi-jabber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.23 5.72C4.61 5.55 5 3.19 5 3.17c0 .02 7.58-3.88 11.7 2.56c4.1 6.42-.84 9.13-2.73 10.33c-1.89 1.21-1.24 3.66-1.24 4.07c0 .4-.57.84-.73.28c-.12-.57-.75-3.86 1.33-5.25c3.8-2.55 4.57-5.06 2.67-8.74C14.2 3 8.28 3.41 7.03 4.08s-1.17 1.81-1.8 1.64m4.1 6.91l-.22-.47c.12-1.88-1.48-1.77-1.03 1.17c.13.83-.61.47-.63.4c-.56-2.29-.03-3.51 1.1-3.28c1.07.23.98 1.38.98 1.38c.03-.05 1.47-1.66 1.97-.91c1.08 1.58-.97 3.55-1.09 3.71c-.13.15-.27.42-.49.21c-.22-.2-.2-.34-.03-.57c2.88-4.27-.3-2.05-.56-1.64m-2.83 2.7v-.02s1.5 2.82 4.11 1.77c.39-.16.56.06.59.19c.07.26-.07.37-.34.46c-3 .99-4.97-1.1-5.23-1.6c-.24-.45-.13-.75.12-.91s.75.11.75.11M6 17.5s1.67 2 4.8 1.5c.29-.06.4.13.45.38s-.03.46-.33.56c-.29.09-3.84.56-5.79-2.22c-.13-.16.17-.36.34-.36s.56.14.53.14m-.05 1.89c1.58 2.11 4.38 2.16 5.33 1.49c.22-.15.42.17.28.31c-1.92 1.97-5.89-.19-6.29-.86c-.18-.28-.14-.67.04-.88c.19-.2.62-.07.64-.06"></svg:path>`,
})
export class MdiJabberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiJeepneyIcon],svg[mdi-jeepney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13V7h1V4H4v3h1v6H2c0 .93.5 1.71 1.5 1.93V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h11v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5.07c1-.23 1.5-1 1.5-1.93zM8 15a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 8 12a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 8 15m8 0a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 16 12a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 16 15m1.5-4.5c-1.58-.32-3.47-.5-5.5-.5s-4 .18-5.5.5V7h11z"></svg:path>`,
})
export class MdiJeepneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiJellyfishIcon],svg[mdi-jellyfish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 14.5a.898.898 0 0 0-1 1c0 .67-1 .67-1 0v-2.3l1.7-.5c.72-.34 1.21-1.02 1.3-1.8C20.5 5.5 16.7 2 12 2s-8.5 3.5-8.5 8.9c.06.8.56 1.5 1.3 1.8l1.7.5v2.3a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.898.898 0 0 0-1-1a.898.898 0 0 0-1 1A2.394 2.394 0 0 0 6 18c1.41.06 2.56-1.09 2.5-2.5v-1.8h1v5.7c0 .67-1 .67-1 0a.898.898 0 0 0-1-1a.898.898 0 0 0-1 1A2.4 2.4 0 0 0 9 22c1.41.06 2.56-1.09 2.5-2.5V14h1v5.5A2.394 2.394 0 0 0 15 22c1.41.06 2.56-1.09 2.5-2.5c0-1.33-2-1.33-2 0c0 .67-1 .67-1 0v-5.7h1v1.8c0 1.36 1.13 2.46 2.5 2.4c1.41.06 2.56-1.09 2.5-2.5a.898.898 0 0 0-1-1m-8.9-9.8A5.57 5.57 0 0 0 7 7.3c-.17.2-.5.27-.7.1a.507.507 0 0 1-.1-.7a6.9 6.9 0 0 1 4.2-3c.27-.02.51.15.6.4c.06.27-.12.55-.4.6"></svg:path>`,
})
export class MdiJellyfishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiJellyfishOutlineIcon],svg[mdi-jellyfish-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c3.8 0 6.5 2.8 6.5 6.8a18.3 18.3 0 0 1-13 0C5.5 6.8 8.2 4 12 4m0-2c-4.7 0-8.5 3.5-8.5 8.9c.06.8.56 1.5 1.3 1.8l1.7.5v2.3a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.898.898 0 0 0-1-1a.898.898 0 0 0-1 1A2.405 2.405 0 0 0 5.9 18H6c1.41.06 2.56-1.09 2.5-2.5v-1.8h1v5.7c0 .67-1 .67-1 0a.898.898 0 0 0-1-1a.898.898 0 0 0-1 1c-.11 1.4 1 2.6 2.4 2.6H9c1.41.06 2.56-1.09 2.5-2.5V14h1v5.5A2.394 2.394 0 0 0 15 22h.1c1.37 0 2.46-1.14 2.4-2.5c0-1.33-2-1.33-2 0c0 .67-1 .67-1 0v-5.7h1v1.8c0 1.36 1.13 2.46 2.5 2.4h.1c1.37 0 2.46-1.14 2.4-2.5c0-1.33-2-1.33-2 0c0 .67-1 .67-1 0v-2.3l1.7-.5c.72-.34 1.21-1.02 1.3-1.8C20.5 5.5 16.7 2 12 2m0 4.2c-1.47.4-2.76 1.33-3.6 2.6c-.4.53-1.2-.07-.8-.6a7.47 7.47 0 0 1 4.2-3a.5.5 0 0 1 .6.4c.1.3-.1.5-.4.6"></svg:path>`,
})
export class MdiJellyfishOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiJiraIcon],svg[mdi-jira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.53 2c0 2.4 1.97 4.35 4.35 4.35h1.78v1.7c0 2.4 1.94 4.34 4.34 4.35V2.84a.84.84 0 0 0-.84-.84zM6.77 6.8a4.36 4.36 0 0 0 4.34 4.34h1.8v1.72a4.36 4.36 0 0 0 4.34 4.34V7.63a.84.84 0 0 0-.83-.83zM2 11.6c0 2.4 1.95 4.34 4.35 4.34h1.78v1.72c.01 2.39 1.95 4.34 4.34 4.34v-9.57a.84.84 0 0 0-.84-.84z"></svg:path>`,
})
export class MdiJiraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiJqueryIcon],svg[mdi-jquery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.88 10.41a5.005 5.005 0 0 1-7.04-.62c-1.78-2.12-1.5-5.29.61-7.04l.51-.38A5.024 5.024 0 0 0 16.8 9c1.63 1.94 4.45 2.32 6.54.97zM21.1 14.5a7.48 7.48 0 0 1-10.56-.92c-2.67-3.17-2.25-7.9.92-10.58l.92-.64a7.494 7.494 0 0 0-.12 9.78c2.42 2.86 6.54 3.49 9.65 1.58zm-1.13 4.88c-4.44 3.73-11.07 3.15-14.8-1.3C1.45 13.64 2.03 7 6.47 3.29l1.11-.79c-3.51 3.8-3.73 9.73-.3 13.82c3.43 4.08 9.31 4.9 13.68 2.11z"></svg:path>`,
})
export class MdiJqueryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiJsfiddleIcon],svg[mdi-jsfiddle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.34 13.7c0 1.3-1.11 2.34-2.48 2.34c-1.21 0-2.22-1.04-3.11-2l-.25-.25c0-.03-.03-.06-.05-.09c-.71-.74-1.49-1.48-2.24-1.48c-.89 0-1.61.66-1.61 1.47s.72 1.48 1.61 1.48c.76 0 1.14-.42 1.42-.72l.07-.08c.16-.17.44-.18.61-.02c.19.15.19.44.02.61l-.06.07c-.33.35-.92 1-2.06 1c-1.37 0-2.48-1.03-2.48-2.34c0-1.29 1.11-2.34 2.48-2.34c1.21 0 2.22 1.06 3.11 2l.24.25l.06.09c.71.74 1.49 1.48 2.24 1.48c.89 0 1.61-.67 1.61-1.48s-.72-1.47-1.61-1.47c-.75 0-1.14.42-1.42.72l-.07.06c-.16.19-.43.2-.61.04a.45.45 0 0 1-.02-.62l.07-.06c.32-.36.92-1 2.05-1c1.37 0 2.48 1.04 2.48 2.34M22 14.85c0 1.11-.43 2.15-1.22 2.94c-.78.78-1.83 1.21-2.94 1.21H6.28c-2.32-.04-4.21-1.94-4.21-4.25c0-1.38.69-2.68 1.82-3.47c-.04-.19-.06-.38-.06-.58c0-1.67 1.37-3.03 3.05-3.03c.51 0 1 .12 1.44.36A6.15 6.15 0 0 1 13.6 5c3.37 0 6.1 2.72 6.1 6.07v.07c1.41.7 2.3 2.13 2.3 3.71m-.87 0c0-1.35-.8-2.53-2.04-3.04a.44.44 0 0 1-.27-.43l.01-.09c0-.07.01-.15.01-.22c0-2.87-2.34-5.2-5.24-5.2c-2 0-3.86 1.16-4.73 2.96c-.05.12-.16.21-.29.24c-.12.03-.26 0-.36-.07c-.39-.31-.85-.47-1.34-.47c-1.2 0-2.18.97-2.18 2.17c0 .22.03.44.1.64c.06.2-.02.41-.19.51c-1.05.62-1.67 1.7-1.67 2.9c0 1.84 1.5 3.35 3.35 3.38h11.54c.89 0 1.71-.34 2.33-.96c.63-.62.97-1.44.97-2.32"></svg:path>`,
})
export class MdiJsfiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiJumpRopeIcon],svg[mdi-jump-rope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4.5v6c0 .7-.5 1.4-1.2 1.5v5.3c0 1.3-.8 3.8-3.8 3.8h-1.5c.4-.4.8-.9 1-1.5h.5c2.1 0 2.2-1.9 2.2-2.2V12c-.7-.1-1.2-.7-1.2-1.5v-6c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5m-6.2 13.7c0 1.5-1.2 2.8-2.8 2.8H8c-3 0-3.8-2.5-3.8-3.8V12c-.7-.1-1.2-.8-1.2-1.5v-6C3 3.7 3.7 3 4.5 3h1C6.3 3 7 3.7 7 4.5v6c0 .7-.5 1.4-1.2 1.5v5.3c0 .4.1 2.2 2.2 2.2h1.6q-.3-.6-.3-1.2v-10c0-1.5 1.2-2.8 2.8-2.8s2.7 1.2 2.7 2.8m-1.6-.1c0-.6-.5-1.2-1.2-1.2s-1.2.6-1.2 1.2v10c0 .7.6 1.2 1.2 1.2s1.2-.6 1.2-1.2z"></svg:path>`,
})
export class MdiJumpRopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKabaddiIcon],svg[mdi-kabaddi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.2 10.6q1.5 1.5 3.6 1.5l.1 2.1q-2.85 0-5.1-2.1l-.7-.7l-2.3 2.4L9 15.9v6H7v-5.2l-1.3-1.2v2.2L1.5 22L.1 20.6L3.7 17l-1.2-3.5c-.2-.6.1-1.1.6-1.5l3.3-3.3c.4-.5.9-.7 1.4-.7s.8.1 1.1.3zM24 11.9h-2V8.5l-1.8-.7l.9 4.4l1 5.2l.9 4.4h-2.1l-1.8-8l-2.1 2v6h-2v-7.5l2.1-2l-.6-3c-.6.6-1.3 1.2-2.1 1.6c-.9-.1-1.8-.5-2.5-1.2c1.6-.3 2.7-1.1 3.4-2.3l1-1.6c.6-1 1.5-1.3 2.6-.8L24 7.2zM11.4 4.4c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M16.5.3c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></svg:path>`,
})
export class MdiKabaddiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKangarooIcon],svg[mdi-kangaroo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.8 6.59L19 7.97v2.07l-1.31 1.57l-.38 1.64L16 14l-.5-.88l.94-.53l.26-1.14l.07-.3l.7-.84c.18-.21.15-.53-.06-.7a.506.506 0 0 0-.71.06l-.85 1.02l-.29 1.24c-.18.03-.36.07-.56.07c-.69 0-1.32-.24-1.77-.6c-.08 1.3-.5 2.41-1.1 3.03l-1.63 1.76l-.54 3.6L8.07 21l-.54-.83l1.51-.98l.46-3.27v-.01l.5-1.37c-.53-.46-.92-1.26-1.12-2.24l-.17.31c-.36.64-.71 1.29-1.15 1.95c-.45.64-.9 1.34-1.78 1.88c-.44.28-1.08.4-1.61.29c-.56-.12-1.03-.47-1.31-.84c-.55-.76-.71-1.54-.86-2.27l.97-.26c.23.64.53 1.29.91 1.64c.38.33.69.26.96 0c.32-.27.63-.85.89-1.45c.27-.61.49-1.27.72-1.95c.48-1.36.94-2.78 1.75-4.24c.42-.72.93-1.47 1.72-2.14C10.7 4.55 11.73 4 13 4s2.7 1.22 3.58 2.34c.42.55 1.29.48 1.64-.13l.92-1.58a.9.9 0 0 1-.35-.23a.984.984 0 0 1 0-1.4l1.14 1.13c.03 0 .07-.02.07-.02a1 1 0 0 1 .91.58L22 7l-1 .5z"></svg:path>`,
})
export class MdiKangarooIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKarateIcon],svg[mdi-karate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.8 2l-8.2 6.7l-1.21-1.04L14 5.58L9.41 1L8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17L8 16l-2.03-3.5l.35-1.32L9.5 13l.5 9h2l.5-10L21 3.4zM5 3a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2"></svg:path>`,
})
export class MdiKarateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKayakingIcon],svg[mdi-kayaking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 23v-2c-1.42.05-2.79-.1-4-1c-1.77 1.25-4.23 1.25-6 0c-1.77 1.25-4.23 1.25-6 0c-1.21.9-2.58 1.05-4 1v2c1.38.05 2.79-.06 4-.75c1.84 1 4.16 1 6 0c1.84 1 4.16 1 6 0c1.21.69 2.62.8 4 .75m1.39-5.79c-2.26-.92-5.09-1.65-7.73-1.99l3.7-8.34l1.31-.47l1.33-3L18.8 2l-1.3 2.95l.5 1.32l-1.69 3.7l-2.81 1.5L11 10.2a.5.5 0 0 0-.26-.14c-.92-.33-1.97.26-2.24 1.17l-1.37 4.18c-.54-.23-5.88 1.56-6.215 1.71L0 17.47c1.33.57 2.2.92 3.94 1.41c.81-.25 1.5-.79 2.06-1.41c1.5 1.95 4.5 1.95 6 0c1.5 1.95 4.5 1.95 6 0c.56.62 1.25 1.16 2.06 1.41l2.89-.97l1.05-.44zm-9.33-2.13c-.99-.08-2-.08-3-.08l.71-2.17l1.73.94l1.5-.85zM14 7.5c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2"></svg:path>`,
})
export class MdiKayakingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKegIcon],svg[mdi-keg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22v-2h1v-4H5v-2h1v-3H5V7h6V3h-1V2h4v1h-1v4h6v4h-1v3h1v2h-1v4h1v2zM17 9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1"></svg:path>`,
})
export class MdiKegIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKettleIcon],svg[mdi-kettle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 3C7.81 3 4 5.69 4 9c0 1.19.5 2.34 1.44 3.33A6.8 6.8 0 0 0 4 16.5V20c0 1.11.89 2 2 2h13c1.11 0 2-.89 2-2v-3.5c0-1.22-.34-2.43-1-3.5l2-2l-3-3l-2.1 2.1A9.2 9.2 0 0 0 12.5 9c-1.85 0-3.55.53-4.95 1.41C7.19 9.97 7 9.5 7 9c0-1.79 2.46-3.25 5.5-3.25c1.43 0 2.8.33 3.83.92l2.02-2.02C16.77 3.59 14.68 3 12.5 3m0 8c.34 0 .67.04 1 .09c-3.11.48-5.5 3.16-5.5 6.41V20H6v-2.5a6.5 6.5 0 0 1 6.5-6.5"></svg:path>`,
})
export class MdiKettleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKettleAlertIcon],svg[mdi-kettle-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 3C4.8 3 1 5.7 1 9c0 1.2.5 2.3 1.4 3.3C1.5 13.5 1 15 1 16.5V20c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-3.5c0-1.2-.3-2.4-1-3.5l2-2l-3-3l-2.1 2.1C12.6 9.4 11.1 9 9.5 9c-1.8 0-3.6.5-4.9 1.4C4.2 10 4 9.5 4 9c0-1.8 2.5-3.2 5.5-3.2c1.4 0 2.8.3 3.8.9l2-2C13.8 3.6 11.7 3 9.5 3m0 8c.3 0 .7 0 1 .1c-3.1.5-5.5 3.1-5.5 6.4V20H3v-2.5C3 13.9 5.9 11 9.5 11M21 13V7h2v6zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiKettleAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKettleAlertOutlineIcon],svg[mdi-kettle-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 3C4.8 3 1 5.7 1 9c0 1.2.5 2.3 1.4 3.3C1.5 13.5 1 15 1 16.5V20c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-3.5c0-1.2-.3-2.4-1-3.5l2-2l-3-3l-2.1 2.1c-2.9-1.6-6.5-1.5-9.3.3C4.2 10 4 9.5 4 9c0-1.8 2.5-3.3 5.5-3.3c1.4 0 2.8.4 3.8 1l2-2C13.6 3.5 11.6 3 9.5 3m0 8c3.5 0 6.5 3 6.5 5.5V20H3v-3.5C3 14 6 11 9.5 11m.5 1.5c-3 0-5 1.5-5 4.5v1h2v-1c0-1 0-3.5 3-4.5m11 .5V7h2v6zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiKettleAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKettleOffIcon],svg[mdi-kettle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l3.6 3.6C4.3 7.3 4 8.1 4 9c0 1.2.5 2.3 1.4 3.3C4.5 13.5 4 15 4 16.5V20c0 1.1.9 2 2 2h13c.3 0 .6-.1.9-.2l.9.9zM8.2 10.1l-.6.3C7.2 10 7 9.5 7 9v-.1zM8 17.5V20H6v-2.5c0-2.6 1.5-4.8 3.7-5.9l.8.8C9 13.6 8 15.4 8 17.5m8.9-7.4L19 8l3 3l-2 2c.7 1.1 1 2.3 1 3.5v1.3L12.2 9h.3c1.5 0 3.1.4 4.4 1.1M9.5 6.3L7.4 4.2C8.8 3.5 10.6 3 12.5 3c2.2 0 4.3.6 5.8 1.7l-2 2c-1-.6-2.4-.9-3.8-.9c-1.1 0-2.1.1-3 .5"></svg:path>`,
})
export class MdiKettleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKettleOffOutlineIcon],svg[mdi-kettle-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l3.6 3.6C4.3 7.3 4 8.1 4 9c0 1.2.5 2.3 1.4 3.3C4.5 13.5 4 15 4 16.5V20c0 1.1.9 2 2 2h13c.3 0 .6-.1.9-.2l.9.9zM8.2 10.1l-.6.3C7.2 10 7 9.5 7 9v-.1zM6 20v-3.5c0-1.8 1.6-3.9 3.7-4.9l1.2 1.2c-1.8.6-2.9 2-2.9 4.2v1h2v-1c0-.8 0-2.5 1.4-3.7l6.7 6.7zm10.9-9.9L19 8l3 3l-2 2c.7 1.1 1 2.3 1 3.5v1.3l-2.1-2.1c-.4-1.8-2.1-3.6-4.3-4.3L12.2 9c1.6-.1 3.2.3 4.7 1.1M9.5 6.3L7.4 4.2C8.8 3.5 10.6 3 12.5 3c2.1 0 4.1.5 5.8 1.7l-2 2c-1-.6-2.4-1-3.8-1c-1.1 0-2.2.2-3 .6"></svg:path>`,
})
export class MdiKettleOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKettleOutlineIcon],svg[mdi-kettle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 3C7.8 3 4 5.7 4 9c0 1.2.5 2.3 1.4 3.3A6.8 6.8 0 0 0 4 16.5V20c0 1.1.9 2 2 2h13a2 2 0 0 0 2-2v-3.5c0-1.2-.3-2.4-1-3.5l2-2l-3-3l-2.1 2.1a9.2 9.2 0 0 0-9.3.3A2 2 0 0 1 7 9c0-1.8 2.5-3.3 5.5-3.3c1.4 0 2.8.4 3.8 1l2-2A10 10 0 0 0 12.5 3m0 8c3.5 0 6.5 3 6.5 5.5V20H6v-3.5C6 14 9 11 12.5 11m.5 1.5c-3 0-5 1.5-5 4.5v1h2v-1c0-1 0-3.5 3-4.5"></svg:path>`,
})
export class MdiKettleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKettlePourOverIcon],svg[mdi-kettle-pour-over-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4c-.6 0-1 .4-1 1v1h5V5c0-.6-.4-1-1-1zM3 7l1.1 7.1c.1.7.4 1.4 1 2c.4.5 1.1.8 1.9.9c0 .6.4 1 1 1h8c.6 0 1-.4 1-1l-2-6h2l3.3 5l1.7-1l-3.3-5l1.3-.8l-1-1.7L16.4 9H15V7H8v4l-.8 5c-.7-.1-1.1-.3-1.4-.6c-.4-.4-.6-.9-.7-1.5L4 7zm1 12v2h16v-2z"></svg:path>`,
})
export class MdiKettlePourOverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKettleSteamIcon],svg[mdi-kettle-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 11l-3-3l-2.1 2.1A9.2 9.2 0 0 0 9.5 9c-1.85 0-3.55.53-4.95 1.41C4.19 9.97 4 9.5 4 9c0-1.79 2.46-3.25 5.5-3.25c1.43 0 2.8.33 3.83.92l2.02-2.02C13.77 3.59 11.68 3 9.5 3C4.81 3 1 5.69 1 9c0 1.19.5 2.34 1.44 3.33A6.8 6.8 0 0 0 1 16.5V20c0 1.11.89 2 2 2h13c1.11 0 2-.89 2-2v-3.5c0-1.22-.34-2.43-1-3.5zM5 17.5V20H3v-2.5A6.5 6.5 0 0 1 9.5 11c.34 0 .67.04 1 .09c-3.11.48-5.5 3.16-5.5 6.41M23 7.3c0 1.63-1.09 3.3-2.62 3.67l-.67-.68L19 9.6h.75c1 0 1.75-1.38 1.75-2.4s-.85-2.06-1.85-2.06v-1.5C21.5 3.64 23 5.45 23 7.3m-5.35-.57c-.62-.61-1-1.45-1-2.38C16.65 2.5 18.15 1 20 1v1.5c-1 0-1.85.83-1.85 1.85S19 6.2 20 6.2v1.5c-.82 0-1.58.25-2.21.68l-1.07-1.07c.28-.22.6-.42.93-.58"></svg:path>`,
})
export class MdiKettleSteamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKettleSteamOutlineIcon],svg[mdi-kettle-steam-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 3C4.8 3 1 5.7 1 9c0 1.2.5 2.3 1.4 3.3C1.5 13.5.985 15 1 16.5V20c0 1.1.9 2 2 2h13c1.11 0 2-.89 2-2v-3.5c0-1.2-.3-2.4-1-3.5l2-2l-3-3l-2.1 2.1a9.19 9.19 0 0 0-9.3.3C4.22 10.03 4 9.53 4 9c0-1.8 2.5-3.3 5.5-3.3c1.4 0 2.8.4 3.8 1l2-2A10.05 10.05 0 0 0 9.5 3m0 8c3.5 0 6.5 3 6.5 5.5V20H3v-3.5C3 14 6 11 9.5 11m.5 1.5c-3 0-5 1.5-5 4.5v1h2v-1c0-1 0-3.5 3-4.5m13-5.2c0 1.63-1.09 3.3-2.62 3.67l-.67-.68L19 9.6h.75c1 0 1.75-1.38 1.75-2.4s-.85-2.06-1.85-2.06v-1.5C21.5 3.64 23 5.45 23 7.3m-5.35-.57c-.62-.61-1-1.45-1-2.38C16.65 2.5 18.15 1 20 1v1.5c-1 0-1.85.83-1.85 1.85S19 6.2 20 6.2v1.5c-.82 0-1.58.25-2.21.68l-1.07-1.07c.28-.22.6-.42.93-.58"></svg:path>`,
})
export class MdiKettleSteamOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKettlebellIcon],svg[mdi-kettlebell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.2 10.7l.6-2.4c.1-.3.5-1.7-.3-2.9C15.9 4.5 14.7 4 13 4h-2c-1.7 0-2.9.5-3.5 1.4c-.8 1.2-.4 2.5-.3 2.9l.6 2.4C6.7 11.8 6 13.3 6 15c0 2.1 1.1 3.9 2.7 5h6.6c1.6-1.1 2.7-2.9 2.7-5c0-1.7-.7-3.2-1.8-4.3M9.6 9.5l-.5-1.7v-.1s-.2-.7.1-1.1Q9.5 6 11 6h2c.9 0 1.6.2 1.9.5c.3.4.1 1.1.1 1.1l-.5 1.9c-.8-.3-1.6-.5-2.5-.5s-1.7.2-2.4.5"></svg:path>`,
})
export class MdiKettlebellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyIcon],svg[mdi-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m5.6-4c-.8-2.3-3-4-5.6-4c-3.3 0-6 2.7-6 6s2.7 6 6 6c2.6 0 4.8-1.7 5.6-4H16v4h4v-4h3v-4z"></svg:path>`,
})
export class MdiKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyAlertIcon],svg[mdi-key-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6.5C4 4 6 2 8.5 2S13 4 13 6.5c0 1.96-1.25 3.63-3 4.24V15h3v3h-3v4H7V10.74c-1.75-.61-3-2.28-3-4.24m3 0C7 7.33 7.67 8 8.5 8S10 7.33 10 6.5S9.33 5 8.5 5S7 5.67 7 6.5M18 7h2v6h-2m0 4h2v-2h-2"></svg:path>`,
})
export class MdiKeyAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyAlertOutlineIcon],svg[mdi-key-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22h-4v2H6V13.32C3.58 12.17 2 9.72 2 7c0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.72-1.58 5.18-4 6.32V16h4zm-2-4h-4v-6.06l.67-.23C12.66 11 14 9.11 14 7c0-2.76-2.24-5-5-5S4 4.24 4 7c0 2.11 1.34 4 3.33 4.71l.67.23V22h2v-2h4zM12 7c0 1.66-1.34 3-3 3S6 8.66 6 7s1.34-3 3-3s3 1.34 3 3M9 8c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m11-1h2v6h-2m0 4h2v-2h-2"></svg:path>`,
})
export class MdiKeyAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyArrowRightIcon],svg[mdi-key-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.7 6c-.6-1.8-2.3-3-4.2-3C5 3 3 5 3 7.5S5 12 7.5 12c2 0 3.6-1.2 4.2-3H15v3h3V9h3V6zM7.5 9C6.7 9 6 8.3 6 7.5S6.7 6 7.5 6S9 6.7 9 7.5S8.3 9 7.5 9M13 21v-2H8v-2h5v-2l3 3z"></svg:path>`,
})
export class MdiKeyArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyChainIcon],svg[mdi-key-chain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.67 13.67c-.47.46-1.04.83-1.67 1.06V23H8v-2H5v-3h3v-3.28c-1.74-.62-3-2.26-3-4.22C5 8 7 6 9.5 6h.1c-.47.95-.68 2-.57 3.08c-.59.2-1.03.76-1.03 1.42c0 .83.67 1.5 1.5 1.5c.23 0 .45-.06.65-.15c.64.84 1.52 1.47 2.52 1.82m8.06 5.77l-2.76 1.16l-.78-1.84l-2.76 1.17l-1.17-2.77L16.03 16l-1.27-3c-1.85.08-3.65-.95-4.41-2.75c-.96-2.29.12-4.93 2.41-5.9c.24-.1.5-.17.74-.23C12.84 2.87 11.5 2 10 2C7.79 2 6 3.79 6 6v.24c-.3.26-.6.58-.85.91C5.06 6.78 5 6.4 5 6c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.42-.6 2.67-1.55 3.57c.42.43 1.05.56 1.63.31c.77-.32 1.12-1.2.8-1.96a1 1 0 0 0-.14-.26C15.9 7.13 16 6.58 16 6c0-.63-.1-1.24-.28-1.81c1.28.36 2.38 1.25 2.93 2.57c.76 1.8.24 3.81-1.15 5.05zM13 8.6c.37-.41.65-.89.82-1.42c-.54.27-.85.82-.82 1.42"></svg:path>`,
})
export class MdiKeyChainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyChainVariantIcon],svg[mdi-key-chain-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.66 13.67c-.34.33-.73.62-1.16.83V21l-2 2l-2-2l2-1.71L8 18l1.5-1.29l-2-1.71v-.5a4.42 4.42 0 0 1-2.5-4C5 8 7 6 9.5 6h.11c-.02.07-.07.12-.11.18c-.27.61-.42 1.25-.47 1.9A1.498 1.498 0 0 0 9.5 11h.1c.64 1.25 1.74 2.2 3.06 2.67M16 6c0-.63-.1-1.25-.28-1.82c1.34.38 2.49 1.37 3.01 2.78c.6 1.66.16 3.43-.98 4.63L20 17.68l-1.22 2.57l-2.56-1.2l1.28-2.29l-1.84-.7l.97-1.72l-2.47-.93l-.16-.46a4.48 4.48 0 0 1-3.73-2.91a4.51 4.51 0 0 1 2.69-5.77c.18-.06.37-.1.54-.14A3.95 3.95 0 0 0 10 2C7.79 2 6 3.79 6 6c0 .09 0 .17.03.26c-.33.27-.63.56-.88.89C5.06 6.78 5 6.4 5 6c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.16-.4 2.21-1.06 3.06C16.08 8.88 16 6 16 6m-3.19 2.1c.06.17.15.31.25.44c.56-.66.91-1.5.94-2.43c-.11.02-.2.04-.3.07c-.78.29-1.2 1.15-.89 1.92"></svg:path>`,
})
export class MdiKeyChainVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyChangeIcon],svg[mdi-key-change-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2c2 0 3.6 1.2 4.2 3H21v3h-3v3h-3V8h-3.3c-.6 1.8-2.3 3-4.2 3C5 11 3 9 3 6.5S5 2 7.5 2m0 3C6.7 5 6 5.7 6 6.5S6.7 8 7.5 8S9 7.3 9 6.5S8.3 5 7.5 5m0 8c2 0 3.6 1.2 4.2 3H21v3h-1v3h-2v-3h-2v3h-3v-3h-1.3c-.6 1.8-2.3 3-4.2 3C5 22 3 20 3 17.5S5 13 7.5 13m0 3c-.8 0-1.5.7-1.5 1.5S6.7 19 7.5 19S9 18.3 9 17.5S8.3 16 7.5 16"></svg:path>`,
})
export class MdiKeyChangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyLinkIcon],svg[mdi-key-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3C5 3 3 5 3 7.5S5 12 7.5 12c2 0 3.6-1.2 4.2-3H15v3h3V9h3V6h-9.3c-.6-1.8-2.2-3-4.2-3m0 3C8.3 6 9 6.7 9 7.5S8.3 9 7.5 9S6 8.3 6 7.5S6.7 6 7.5 6m2.5 8c-1.6 0-4 1.1-4 4s2.4 4 4 4h1v-2h-1c-.3 0-2-.1-2-2c0-1.8 1.5-2 2-2h1v-2m2 0v2h1c.3 0 2 .1 2 2c0 1.8-1.5 2-2 2h-1v2h1c1.6 0 4-1.1 4-4s-2.4-4-4-4m-5 3v2h6v-2z"></svg:path>`,
})
export class MdiKeyLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyMinusIcon],svg[mdi-key-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3c2 0 3.6 1.2 4.2 3H21v3h-3v3h-3V9h-3.3c-.6 1.8-2.3 3-4.2 3C5 12 3 10 3 7.5S5 3 7.5 3m0 3C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9S9 8.3 9 7.5S8.3 6 7.5 6M8 17h8v2H8z"></svg:path>`,
})
export class MdiKeyMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyOutlineIcon],svg[mdi-key-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18h-6v-3h-1.7c-1.1 2.4-3.6 4-6.3 4c-3.9 0-7-3.1-7-7s3.1-7 7-7c2.7 0 5.2 1.6 6.3 4H24v6h-3zm-4-2h2v-3h3v-2H11.9l-.2-.7C11 8.3 9.1 7 7 7c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.1 0 4-1.3 4.7-3.3l.2-.7H17zM7 15c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3m0-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class MdiKeyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyPlusIcon],svg[mdi-key-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3c2 0 3.6 1.2 4.2 3H21v3h-3v3h-3V9h-3.3c-.6 1.8-2.3 3-4.2 3C5 12 3 10 3 7.5S5 3 7.5 3m0 3C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9S9 8.3 9 7.5S8.3 6 7.5 6M8 17h3v-3h2v3h3v2h-3v3h-2v-3H8z"></svg:path>`,
})
export class MdiKeyPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyRemoveIcon],svg[mdi-key-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3c2 0 3.6 1.2 4.2 3H21v3h-3v3h-3V9h-3.3c-.6 1.8-2.3 3-4.2 3C5 12 3 10 3 7.5S5 3 7.5 3m0 3C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9S9 8.3 9 7.5S8.3 6 7.5 6m7.1 8l1.4 1.4l-2.6 2.6l2.6 2.6l-1.4 1.4l-2.6-2.6L9.4 22L8 20.6l2.6-2.6L8 15.4L9.4 14l2.6 2.6z"></svg:path>`,
})
export class MdiKeyRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyStarIcon],svg[mdi-key-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3C5 3 3 5 3 7.5S5 12 7.5 12c2 0 3.6-1.2 4.2-3H15v3h3V9h3V6h-9.3c-.6-1.8-2.2-3-4.2-3m0 3C8.3 6 9 6.7 9 7.5S8.3 9 7.5 9S6 8.3 6 7.5S6.7 6 7.5 6m4.5 8l-1.1 2.6l-2.9.3l2.2 1.9l-.7 2.8l2.5-1.5l2.4 1.5l-.6-2.8l2.2-1.9l-2.9-.2z"></svg:path>`,
})
export class MdiKeyStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyVariantIcon],svg[mdi-key-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18v4h-4v-3h-3v-3h-3l-2.26-2.26c-.55.17-1.13.26-1.74.26a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6c0 .61-.09 1.19-.26 1.74zM7 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiKeyVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyWirelessIcon],svg[mdi-key-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.9 5.9l1.4 1.4c3.1-3.1 8.2-3.1 11.3 0L19 5.9C15.2 2 8.8 2 4.9 5.9m2.9 2.9l1.4 1.4c1.6-1.6 4.1-1.6 5.7 0l1.4-1.4c-2.4-2.4-6.2-2.4-8.5 0m4 6.2c-.8-2.3-3.4-3.6-5.7-2.7S2.4 15.7 3.3 18s3.4 3.6 5.7 2.7c1.3-.5 2.3-1.5 2.7-2.7H15v3h3v-3h3v-3M7.5 18c-.8 0-1.5-.7-1.5-1.5S6.7 15 7.5 15s1.5.7 1.5 1.5S8.3 18 7.5 18"></svg:path>`,
})
export class MdiKeyWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardIcon],svg[mdi-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10h-2V8h2m0 5h-2v-2h2m-3-1h-2V8h2m0 5h-2v-2h2m0 6H8v-2h8m-9-5H5V8h2m0 5H5v-2h2m1 0h2v2H8m0-5h2v2H8m3 1h2v2h-2m0-5h2v2h-2m9-5H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardBackspaceIcon],svg[mdi-keyboard-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11H6.83l3.58-3.59L9 6l-6 6l6 6l1.41-1.42L6.83 13H21z"></svg:path>`,
})
export class MdiKeyboardBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardCapsIcon],svg[mdi-keyboard-caps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h12v-2H6m6-7.59L16.59 13L18 11.58l-6-6l-6 6L7.41 13z"></svg:path>`,
})
export class MdiKeyboardCapsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardCloseIcon],svg[mdi-keyboard-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23l4-4H8M19 8h-2V6h2m0 5h-2V9h2m-3-1h-2V6h2m0 5h-2V9h2m0 6H8v-2h8M7 8H5V6h2m0 5H5V9h2m1 0h2v2H8m0-5h2v2H8m3 1h2v2h-2m0-5h2v2h-2m9-5H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiKeyboardCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardCloseOutlineIcon],svg[mdi-keyboard-close-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23l4-4H8M4 3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2h16v10H4zm1 1v2h2V6zm3 0v2h2V6zm3 0v2h2V6zm3 0v2h2V6zm3 0v2h2V6zM5 9v2h2V9zm3 0v2h2V9zm3 0v2h2V9zm3 0v2h2V9zm3 0v2h2V9zm-9 3v2h8v-2z"></svg:path>`,
})
export class MdiKeyboardCloseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardEscIcon],svg[mdi-keyboard-esc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7h6v2H3v2h4v2H3v2h4v2H1zm10 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H9v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2m8 0h2a2 2 0 0 1 2 2v1h-2V9h-2v6h2v-1h2v1c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2"></svg:path>`,
})
export class MdiKeyboardEscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF1Icon],svg[mdi-keyboard-f1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7h6v2H8v2h3v2H8v4H6zm8 0h4v10h-2V9h-2z"></svg:path>`,
})
export class MdiKeyboardF1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF10Icon],svg[mdi-keyboard-f10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h6v2H4v2h3v2H4v4H2zm8 0h4v10h-2V9h-2zm8 0h2a2 2 0 0 1 2 2v6c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2m0 2v6h2V9z"></svg:path>`,
})
export class MdiKeyboardF10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF11Icon],svg[mdi-keyboard-f11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h6v2H5v2h3v2H5v4H3zm8 0h4v10h-2V9h-2zm6 0h4v10h-2V9h-2z"></svg:path>`,
})
export class MdiKeyboardF11Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF12Icon],svg[mdi-keyboard-f12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h6v2H4v2h3v2H4v4H2zm14 0h4a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2h-2v2h4v2h-6v-4c0-1.1.9-2 2-2h2V9h-4zm-6 0h4v10h-2V9h-2z"></svg:path>`,
})
export class MdiKeyboardF12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF2Icon],svg[mdi-keyboard-f2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h6v2H7v2h3v2H7v4H5zm8 0h4a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2h-2v2h4v2h-6v-4c0-1.1.9-2 2-2h2V9h-4z"></svg:path>`,
})
export class MdiKeyboardF2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF3Icon],svg[mdi-keyboard-f3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h6v2H7v2h3v2H7v4H5zm14 8c0 1.11-.89 2-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4a2 2 0 0 1 2 2v1.5c0 .83-.67 1.5-1.5 1.5c.83 0 1.5.67 1.5 1.5z"></svg:path>`,
})
export class MdiKeyboardF3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF4Icon],svg[mdi-keyboard-f4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h6v2H7v2h3v2H7v4H5zm8 0h2v4h2V7h2v10h-2v-4h-4z"></svg:path>`,
})
export class MdiKeyboardF4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF5Icon],svg[mdi-keyboard-f5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h6v2H7v2h3v2H7v4H5zm8 0h6v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2h-4v-2h4v-2h-4z"></svg:path>`,
})
export class MdiKeyboardF5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF6Icon],svg[mdi-keyboard-f6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h6v2H7v2h3v2H7v4H5zm10 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2m0 6v2h2v-2z"></svg:path>`,
})
export class MdiKeyboardF6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF7Icon],svg[mdi-keyboard-f7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h6v2H7v2h3v2H7v4H5zm10 10h-2l4-8h-4V7h6v2z"></svg:path>`,
})
export class MdiKeyboardF7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF8Icon],svg[mdi-keyboard-f8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h6v2H7v2h3v2H7v4H5zm10 6v2h2v-2zm0-4v2h2V9zm0 8a2 2 0 0 1-2-2v-1.5c0-.83.67-1.5 1.5-1.5c-.83 0-1.5-.67-1.5-1.5V9c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1.5c0 .83-.67 1.5-1.5 1.5c.83 0 1.5.67 1.5 1.5V15c0 1.11-.89 2-2 2z"></svg:path>`,
})
export class MdiKeyboardF8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF9Icon],svg[mdi-keyboard-f9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h6v2H7v2h3v2H7v4H5zm12 10h-4v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v6c0 1.11-.89 2-2 2m0-6V9h-2v2z"></svg:path>`,
})
export class MdiKeyboardF9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardOffIcon],svg[mdi-keyboard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.27L2.28 3L20 20.72L18.73 22l-3-3H4a2 2 0 0 1-2-2V7c0-.5.18-.93.46-1.27zM19 10V8h-2v2zm0 3v-2h-2v2zm-3-3V8h-2v2zm0 3v-2h-2v1.18L11.82 10H13V8h-2v1.18L9.82 8l-3-3H20a2 2 0 0 1 2 2v10c0 .86-.54 1.59-1.3 1.87L14.82 13zm-8 2v2h5.73l-2-2zm-3-5h1.73L5 8.27zm2 3v-2H5v2zm1 0h1.73L8 11.27z"></svg:path>`,
})
export class MdiKeyboardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardOffOutlineIcon],svg[mdi-keyboard-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 4.27l1.47 1.47A1.9 1.9 0 0 0 2 7v10a2 2 0 0 0 2 2h11.73l3 3L20 20.72L2.28 3zM4 17V7.27l1 1V10h1.73L8 11.27V13h1.73l1 1H8v2h4.73l1 1zm1-6h2v2H5zm12 0h2v2h-2zm2-1h-2V8h2zm-5 1h2v2h-1.17l-.83-.83zm-1-1h-1.17L11 9.17V8h2zm9-3v10c0 .86-.55 1.58-1.3 1.87L18.83 17H20V7H8.83l-2-2H20a2 2 0 0 1 2 2m-6 3h-2V8h2z"></svg:path>`,
})
export class MdiKeyboardOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardOutlineIcon],svg[mdi-keyboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 2h16v10H4zm1 1v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zM5 11v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm-9 3v2h8v-2z"></svg:path>`,
})
export class MdiKeyboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardReturnIcon],svg[mdi-keyboard-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7z"></svg:path>`,
})
export class MdiKeyboardReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardSettingsIcon],svg[mdi-keyboard-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10h-2V8h2m0 5h-2v-2h2m-3-1h-2V8h2m0 5h-2v-2h2m0 6H8v-2h8m-9-5H5V8h2m0 5H5v-2h2m1 0h2v2H8m0-5h2v2H8m3 1h2v2h-2m0-5h2v2h-2m9-5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiKeyboardSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardSettingsOutlineIcon],svg[mdi-keyboard-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 2h16v10H4zm1 1v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zM5 11v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm-9 3v2h8v-2z"></svg:path>`,
})
export class MdiKeyboardSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardSpaceIcon],svg[mdi-keyboard-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h2v4h14v-4h2v4c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2z"></svg:path>`,
})
export class MdiKeyboardSpaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardTabIcon],svg[mdi-keyboard-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18h2V6h-2m-8.41 1.41L15.17 11H1v2h14.17l-3.58 3.58L13 18l6-6l-6-6z"></svg:path>`,
})
export class MdiKeyboardTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardTabReverseIcon],svg[mdi-keyboard-tab-reverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v12h2m7-12l-6 6l6 6l1.41-1.42L8.83 13H23v-2H8.83l3.58-3.59z"></svg:path>`,
})
export class MdiKeyboardTabReverseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardVariantIcon],svg[mdi-keyboard-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h12v2H6zm0-3v2H2v-2zm1 2v-2h3v2zm4 0v-2h2v2zm3 0v-2h3v2zm4 0v-2h4v2zM2 10h3v2H2zm17 2v-2h3v2zm-1 0h-2v-2h2zM8 12H6v-2h2zm4 0H9v-2h3zm3 0h-2v-2h2zM2 9V7h2v2zm3 0V7h2v2zm3 0V7h2v2zm3 0V7h2v2zm3 0V7h2v2zm3 0V7h5v2z"></svg:path>`,
})
export class MdiKeyboardVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKhandaIcon],svg[mdi-khanda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20c3.72-2 6-4.73 6-8c0-2.66-1.54-5.1-4.11-7h-.07a7.53 7.53 0 0 1 1.86 5c0 3-1.68 5-4.18 6.83c0 .01-1.12.71-2.5 1.58v-1.08L15 16s-.2-.6-.42-1.54C16.6 13.58 18 11.69 18 9.5c0-2.16-1.36-4.03-3.35-4.93C14.84 3.63 15 3 15 3l-3-2l-3 2s.16.63.35 1.57C7.37 5.47 6 7.34 6 9.5c0 2.19 1.4 4.08 3.42 4.96C9.2 15.4 9 16 9 16l2 1.33v1.08c-1.38-.87-2.5-1.57-2.5-1.58C6 15 4.32 13 4.32 10c0-1.91.68-3.65 1.86-5h-.06C3.54 6.9 2 9.34 2 12c0 3.27 2.29 6 6 8l1-1.5l1.92 1.23L7.34 22L8 23l3-1.93V23h2v-1.93L16 23l.66-1l-3.58-2.27L15 18.5zm.75-10.5c0 1.59-.99 2.96-2.44 3.69c-.17-.96-.31-2.07-.31-3.19c0-1.33.2-2.85.42-4.14c1.39.74 2.33 2.09 2.33 3.64m-9.5 0c0-1.55.94-2.9 2.34-3.64C9.8 7.15 10 8.67 10 10c0 1.12-.14 2.23-.31 3.19c-1.45-.73-2.44-2.1-2.44-3.69"></svg:path>`,
})
export class MdiKhandaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKickstarterIcon],svg[mdi-kickstarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 10.2L17.5 12l1.8 1.8a4.774 4.774 0 0 1 0 6.79c-1.88 1.87-4.95 1.87-6.83 0l-.67-.66A4.77 4.77 0 0 1 7.83 22C5.16 22 3 19.85 3 17.2V6.8C3 4.15 5.16 2 7.83 2c1.67 0 3.1.82 3.97 2.07l.67-.66c1.88-1.87 4.95-1.87 6.83 0a4.774 4.774 0 0 1 0 6.79"></svg:path>`,
})
export class MdiKickstarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKiteIcon],svg[mdi-kite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.69 3.46c-.34-.31-.73-.46-1.19-.46c-.45 0-.84.15-1.17.46L5.54 9.08c-.31.3-.48.67-.54 1.12c0 .44.08.84.33 1.2l6.12 8.43c-.25.53-.7.79-1.36.79c-.8 0-1.3-.37-1.49-1.12c-.2-.66-.6-1.23-1.22-1.7c-.62-.46-1.28-.7-1.97-.7c-1.05 0-1.91.4-2.56 1.2l1.36 1.12c.29-.39.71-.58 1.2-.58c.8 0 1.3.37 1.49 1.11c.19.67.6 1.24 1.22 1.72s1.28.73 1.97.73c1.24 0 2.19-.57 2.85-1.7l6.74-9.31c.25-.35.35-.75.32-1.19c-.05-.45-.23-.82-.53-1.12z"></svg:path>`,
})
export class MdiKiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKiteOutlineIcon],svg[mdi-kite-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.5 5.1l5.45 5.28l-5.45 7.5l-5.43-7.5zm0-2.1c-.45 0-.84.15-1.17.46L5.54 9.08c-.31.3-.48.67-.54 1.12c0 .44.08.84.33 1.2l6.12 8.43c-.25.53-.7.79-1.36.79c-.8 0-1.3-.37-1.49-1.12c-.2-.66-.6-1.23-1.22-1.7c-.62-.46-1.28-.7-1.97-.7c-1.05 0-1.91.4-2.56 1.2l1.36 1.12c.29-.39.71-.58 1.2-.58c.8 0 1.3.37 1.49 1.11c.19.67.6 1.24 1.22 1.72s1.28.73 1.97.73c1.24 0 2.19-.57 2.85-1.7l6.74-9.3c.25-.36.35-.76.32-1.2c-.05-.44-.23-.82-.53-1.12l-5.79-5.62c-.33-.31-.72-.46-1.18-.46"></svg:path>`,
})
export class MdiKiteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKitesurfingIcon],svg[mdi-kitesurfing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 4.5l-1-1.07L17.92 1H20zM20.96 23q-1.59 0-3-.75c-1.84 1-4.15 1-5.99 0c-1.84 1-4.15 1-5.97 0c-1.23.69-2.64.8-4 .75v-2c1.41.05 2.77-.1 4-1c1.74 1.25 4.21 1.25 5.97 0c1.77 1.25 4.23 1.25 5.99 0c1.21.9 2.58 1.05 3.98 1v2zm-.61-10.74c-2.05-.76-4.21.35-6.27 1.1l-1.69-1.86H9.58V8c2.31.19 4.71-.33 6.32-2.04l-1.4-1.4C13.6 5.46 12.3 6 11 6H8c-1.11 0-2.05.92-2 2c.07 1.35-.33 4.73.45 5.87L8 16.82c-.57.41-1.07.8-1.5 1.18c1.59 1.5 4.15 1.17 5.47-.5c.94 1.09 2.48 1.8 3.93 1.33c1.55-1.06 6.84-4.83 4.45-6.57m-8.92 2.39c-.43.24-1.27.72-1.61.96l-.85-2.02l2.49-.09l.7.75zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2"></svg:path>`,
})
export class MdiKitesurfingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKlingonIcon],svg[mdi-klingon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.79 21.5l-.08-.26c-.18-.59-.24-1.16-.21-1.84c.1-1.23.64-2.09 1.32-2.81a6.3 6.3 0 0 1-.29-1.85c0-1.74.73-3.3 1.92-4.44c.88-.84 2.01-1.44 3.26-1.7c.66-2.37 1.09-4.8 1.29-7.1c.24 2 .65 4.62 1.3 7.08a6.6 6.6 0 0 1 3.37 1.72c1.18 1.14 1.92 2.7 1.92 4.44c0 .61-.09 1.19-.26 1.76c.88.42 1.87.67 3.17.79l-.06.15c-.12.33-.44.56-.73.74l-.02.01c-.56.38-1.51.81-2.84.81h-.44c-.18 0-.35-.03-.51-.05c-.07.05-.15.15-.23.23C15.5 20.31 13.86 21 12.06 21c-1.79 0-3.42-.69-4.6-1.82l-.12-.12c-1 .53-1.8 1.27-2.4 2.21l-.14.23m1.7-5.56c.15-.12 1.7-1.44 2.13-2.16l.1-.17c.92 1.39 1.67 2.67 2.7 4.47l-.21.01c-1.14.07-2.17.28-3.07.61c1.02.92 2.4 1.49 3.91 1.49c1.48 0 2.82-.54 3.83-1.42c-.25-.05-.5-.12-.74-.18c-.77-.18-1.5-.37-2.34-.4l-.19-.01l.08-.18c.4-.8 2.1-3.59 2.53-4.37l.11.18c.66.96 1.39 1.69 2.24 2.26c.11-.43.17-.87.17-1.32c0-1.5-.64-2.86-1.66-3.85a5.6 5.6 0 0 0-2.54-1.4c.3 1 .65 2 1.04 2.85l.03.05l-.03.06c-.39.76-.83 1.49-1.26 2.2c-.39.64-.79 1.3-1.15 1.98l-.1.19l-.12-.18c-.57-.83-2.21-3.59-2.55-4.15c.4-1 .74-2 1.04-3c-.95.28-1.75.76-2.42 1.4a5.3 5.3 0 0 0-1.66 3.84c0 .42.05.82.13 1.21"></svg:path>`,
})
export class MdiKlingonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKnifeIcon],svg[mdi-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.62 2c3.35 5.61-8.15 18.15-8.15 18.15L9.6 17.28L4.91 22l-2.14-2.14z"></svg:path>`,
})
export class MdiKnifeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKnifeMilitaryIcon],svg[mdi-knife-military-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 2l-4.61 1.75l-6.93 6.93L14 14.22l6.92-6.93C22.43 5.78 22 2 22 2M8.33 10l-1.41 1.39l1.41 1.41l-5.65 5.66L6.21 22l5.66-5.66l1.41 1.42l1.42-1.42z"></svg:path>`,
})
export class MdiKnifeMilitaryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKnobIcon],svg[mdi-knob-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m1 8h-2V4.1c.3-.1.7-.1 1-.1s.7 0 1 .1z"></svg:path>`,
})
export class MdiKnobIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKoalaIcon],svg[mdi-koala-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3c-.9 0-3.5 0-4.7 3.1c-.4-.1-.9-.1-1.3-.1h-2c-.4 0-.9 0-1.3.1C8.5 3 5.9 3 5 3C4 3 1 4 1 9c0 3.6 2.5 4.6 4 4.9V15c0 3.3 2.7 6 6 6h2c3.3 0 6-2.7 6-6v-1.1c1.5-.3 4-1.3 4-4.9c0-5-3-6-4-6M5 12v.4c-2.1-.6-1.7-2.9-.7-3.7C4 8.3 3 9 3 8.6c0-.5 1.8-1.2 2.1-1.3c-.3-.5-1.5-.3-1.5-.7c0-.3 1.2-.8 2.2-.6c.5.1 1.1.3 1.6.7C6 8 5 9.8 5 12m3.5 3c-2 0-2-3 0-3s2 3 0 3m4 3h-1c-.7 0-1.2-.7-.9-1.3l.7-3c.1-.4.5-.6.8-.7c.3 0 .6.2.8.7l.7 3c.1.6-.4 1.3-1.1 1.3m3-3c-2 0-2-3 0-3s2 3 0 3m4.2-6.4c1 .8 1.4 3.1-.7 3.7c.1-2.2-.9-4.3-2.4-5.6c.5-.4 1.1-.6 1.6-.7c1-.2 2.2.2 2.2.6s-1.2.2-1.5.6c.3.2 2.1.9 2.1 1.4c0 .4-.9-.3-1.3 0"></svg:path>`,
})
export class MdiKoalaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKodiIcon],svg[mdi-kodi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.03 1c-.21 0-.43.11-.62.31L8.88 3.84c-.22.22-.28.34-.5.54c-.29.24-.42.53-.41.9C8 6.57 8 7.84 8 9.13v4.03c0 .1 0 .18.03.28c.08.31.28.38.5.15c1.2-1.2 2.27-2.29 3.47-3.5c1.36-1.36 2.73-2.72 4.09-4.09c.41-.4.41-.85 0-1.25c-1.15-1.15-2.32-2.28-3.46-3.44c-.2-.2-.39-.31-.6-.31m6.63 6.66c-.21 0-.41.09-.6.28c-1.15 1.16-2.31 2.3-3.47 3.47c-.39.39-.39.82 0 1.22c1.15 1.15 2.29 2.31 3.44 3.46c.4.41.82.41 1.22 0c1.11-1.09 2.25-2.22 3.34-3.34c.17-.17.34-.33.41-.56v-.31c-.07-.24-.24-.38-.41-.57c-1.12-1.12-2.22-2.25-3.34-3.37c-.19-.19-.39-.28-.59-.28m-13.88.43c-.13-.05-.2.05-.28.13c-1.15 1.17-2.16 2.21-3.31 3.37c-.26.27-.26.65 0 .91c.62.63 1.25 1.25 1.87 1.88c.54.54.94.95 1.5 1.5c.16.15.3.12.38-.07c.06-.1.06-.23.06-.34V8.63c0-.08 0-.18-.03-.25c-.02-.13-.07-.24-.19-.29m7.31 6.16c-.2 0-.43.09-.62.28c-1.15 1.16-2.29 2.34-3.44 3.5c-.4.4-.4.82 0 1.22c1.11 1.12 2.23 2.22 3.35 3.34c.16.17.33.34.56.41h.28c.22-.06.4-.21.56-.37c1.12-1.13 2.25-2.25 3.38-3.38c.39-.4.34-.85-.03-1.25c-1.16-1.16-2.29-2.31-3.44-3.47c-.19-.19-.39-.28-.6-.28"></svg:path>`,
})
export class MdiKodiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiKubernetesIcon],svg[mdi-kubernetes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.95 13.5h-.23c-.18.11-.26.32-.18.5l.86 2.11c.83-.53 1.46-1.32 1.79-2.25l-2.23-.36zm-3.45.29a.415.415 0 0 0-.38-.29h-.08l-2.22.37c.33.92.96 1.7 1.79 2.23l.85-2.07V14c.04-.05.04-.14.04-.21m1.83.81a.38.38 0 0 0-.51-.15c-.07.05-.12.08-.15.15h-.01l-1.09 1.97c.78.26 1.62.31 2.43.12c.14-.03.29-.07.43-.12l-1.09-1.97zm3.45-4.57L14.1 11.5l.01.03a.37.37 0 0 0-.04.53q.075.09.18.12l.01.01l2.17.62c.07-.97-.14-1.95-.65-2.78m-3.11.16c.01.21.18.37.39.36c.08 0 .15-.02.21-.05h.01l1.83-1.31a4.45 4.45 0 0 0-2.57-1.24zm-1.94.31c.17.11.4.08.52-.09c.05-.06.07-.13.08-.21h.01l.12-2.25c-.15.02-.3.05-.46.08c-.8.18-1.54.58-2.12 1.16l1.84 1.31zm-.99 1.69c.2-.05.32-.26.26-.46c0-.08-.05-.14-.11-.19v-.01L8.21 10c-.52.86-.74 1.84-.63 2.82l2.16-.62zm1.64.66l.62.3l.62-.3l.15-.67l-.43-.53h-.69l-.43.53zm10.89 1.32L20.5 6.5c-.09-.42-.37-.76-.74-.94l-7.17-3.43c-.37-.17-.81-.17-1.19 0L4.24 5.56c-.37.18-.65.52-.74.94l-1.77 7.67c-.05.2-.05.4 0 .59c.01.06.03.12.05.18c.03.09.08.19.13.27c.03.04.05.08.09.11l4.95 6.18c.02 0 .05.04.05.06c.1.09.19.16.28.22c.12.08.26.14.4.17c.11.05.23.05.32.05h8.12c.07 0 .14-.03.2-.05c.05-.01.1-.03.14-.04c.04-.02.07-.03.11-.05c.05-.02.1-.05.15-.08c.12-.08.23-.18.33-.28l.15-.2l4.8-5.98c.1-.12.17-.25.22-.38c.02-.06.04-.12.05-.18c.05-.19.05-.4 0-.59m-7.43 2.99c.02.06.04.12.07.17c-.04.08-.06.17-.03.26c.12.24.23.46.38.68c.08.11.16.23.24.34c0 .03.03.08.04.12c.12.2.06.46-.15.59s-.47.05-.59-.15c-.01-.03-.02-.05-.03-.08c-.02-.03-.04-.09-.06-.09c-.05-.15-.09-.28-.12-.41c-.09-.25-.17-.49-.3-.72a.38.38 0 0 0-.21-.14l-.08-.16c-1.29.48-2.7.48-3.97-.01l-.1.18c-.07.01-.14.04-.19.09c-.14.24-.24.49-.33.77c-.03.13-.07.26-.12.4c-.02 0-.04.07-.06.1a.43.43 0 0 1-.81-.29c.01-.03.03-.05.04-.08c.04-.03.04-.08.04-.11c.09-.12.16-.23.24-.35c.16-.21.29-.45.39-.69a.54.54 0 0 0-.03-.25l.07-.18a5.6 5.6 0 0 1-2.47-3.09l-.2.03a.4.4 0 0 0-.23-.09c-.27.05-.51.13-.77.22c-.11.06-.24.11-.37.15c-.03.01-.07.02-.13.03a.44.44 0 0 1-.54-.27c-.07-.23.04-.47.28-.55c.02 0 .05-.01.08-.01v-.01h.01l.11-.02c.14-.04.28-.04.41-.04c.26 0 .52-.06.77-.12c.08-.05.14-.11.19-.19l.19-.05c-.21-1.36.1-2.73.86-3.87l-.14-.12c0-.09-.03-.18-.08-.25c-.2-.17-.41-.32-.64-.45q-.18-.09-.36-.21c-.02-.02-.06-.05-.08-.07l-.01-.01c-.2-.16-.25-.42-.11-.63c.09-.1.21-.15.35-.15q.165.015.3.12l.09.07c.1.09.19.2.28.3c.18.19.37.37.58.52c.08.04.17.05.26.03l.15.11c.75-.8 1.73-1.36 2.8-1.6c.25-.06.52-.1.78-.12l.01-.18a.45.45 0 0 0 .14-.23c.01-.26-.01-.52-.05-.77c-.03-.13-.05-.27-.06-.41V5.1c-.02-.24.15-.45.39-.48s.44.15.47.38v.22c-.01.14-.03.28-.06.41c-.04.25-.06.51-.05.77c.02.1.07.17.14.22l.01.19c1.36.12 2.62.73 3.56 1.72l.16-.12c.09.02.18.01.26-.03c.21-.15.41-.33.58-.52c.09-.1.18-.2.28-.3c.03-.02.07-.06.1-.06c.17-.18.44-.18.59 0c.19.16.18.43 0 .6c0 .02-.03.04-.06.06a2.5 2.5 0 0 1-.44.28c-.23.13-.45.28-.64.45c-.06.07-.09.15-.08.24l-.16.14a5.44 5.44 0 0 1 .88 3.86l.19.05c.04.08.11.14.19.18c.25.07.51.11.77.14h.41c.03.03.08.04.12.05c.24.03.4.25.37.49c-.05.23-.24.4-.48.37c-.03-.01-.07-.01-.07-.02v-.01c-.06 0-.1-.01-.14-.02q-.195-.06-.36-.15c-.26-.1-.5-.17-.77-.21c-.09 0-.17 0-.23.08c-.07-.01-.13-.02-.19-.03c-.41 1.31-1.31 2.41-2.47 3.11"></svg:path>`,
})
export class MdiKubernetesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLabelIcon],svg[mdi-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.63 5.84C17.27 5.33 16.67 5 16 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11c.67 0 1.27-.34 1.63-.85L22 12z"></svg:path>`,
})
export class MdiLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLabelMultipleIcon],svg[mdi-label-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h9l-2 2H4c-.5 0-1.03-.21-1.41-.59S2 19.5 2 19V9h2zM17.63 5.84C17.27 5.33 16.67 5 16 5H8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c.67 0 1.27-.34 1.63-.85L22 11z"></svg:path>`,
})
export class MdiLabelMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLabelMultipleOutlineIcon],svg[mdi-label-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h9l-2 2H4c-.5 0-1.03-.21-1.41-.59S2 18.5 2 18V8h2zM17.63 4.84C17.27 4.33 16.67 4 16 4H8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c.67 0 1.27-.34 1.63-.85L22 10zM16 14H8V6h8l3.55 4Z"></svg:path>`,
})
export class MdiLabelMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLabelOffIcon],svg[mdi-label-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.27L3.28 3L20 19.72L18.73 21l-2.1-2.1c-.2.06-.41.1-.63.1H5a2 2 0 0 1-2-2V7c0-.5.17-.93.46-1.27zm15.63 1.57L22 12l-3 4.2L7.83 5H16c.67 0 1.27.33 1.63.84"></svg:path>`,
})
export class MdiLabelOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLabelOffOutlineIcon],svg[mdi-label-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.27L3.28 3L20 19.72L18.73 21l-2.1-2.1c-.2.06-.41.1-.63.1H5a2 2 0 0 1-2-2V7c0-.5.17-.93.46-1.27zM5 17h9.73L5 7.27zm14.55-5L16 7H9.82L7.83 5H16c.67 0 1.27.33 1.63.84L22 12l-3 4.2l-1.41-1.44z"></svg:path>`,
})
export class MdiLabelOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLabelOutlineIcon],svg[mdi-label-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17H5V7h11l3.55 5m-1.92-6.16C17.27 5.33 16.67 5 16 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11c.67 0 1.27-.34 1.63-.85L22 12z"></svg:path>`,
})
export class MdiLabelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLabelPercentIcon],svg[mdi-label-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.63 5.84C17.27 5.33 16.67 5 16 5H5c-1.1 0-2 .9-2 2v10a2 2 0 0 0 2 2h11c.67 0 1.27-.34 1.63-.85L22 12zM8.45 8.03c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.42 1.42s-1.42-.64-1.42-1.42s.64-1.42 1.42-1.42m5.1 7.94c-.78 0-1.42-.64-1.42-1.42s.64-1.42 1.42-1.42s1.42.64 1.42 1.42s-.64 1.42-1.42 1.42M8.2 16L7 14.8L13.8 8L15 9.2z"></svg:path>`,
})
export class MdiLabelPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLabelPercentOutlineIcon],svg[mdi-label-percent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17H5V7h11l3.55 5m-1.92-6.16C17.27 5.33 16.67 5 16 5H5c-1.1 0-2 .9-2 2v10a2 2 0 0 0 2 2h11c.67 0 1.27-.34 1.63-.85L22 12zM13.8 8L15 9.2L8.2 16L7 14.8m1.45-6.77c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.42 1.42s-1.42-.64-1.42-1.42s.64-1.42 1.42-1.42m5.1 5.1c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.42 1.42s-1.42-.64-1.42-1.42s.64-1.42 1.42-1.42"></svg:path>`,
})
export class MdiLabelPercentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLabelVariantIcon],svg[mdi-label-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5 19l4.84-7L3.5 5h11c.67 0 1.22.3 1.63.86L20.5 12l-4.37 6.14c-.41.56-.96.86-1.63.86z"></svg:path>`,
})
export class MdiLabelVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLabelVariantOutlineIcon],svg[mdi-label-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17H15l3.5-5L15 7H6.5l3.5 5zm8.5 2H3l4.5-7L3 5h12c.69 0 1.23.3 1.64.86L21 12l-4.36 6.14c-.41.56-.95.86-1.64.86"></svg:path>`,
})
export class MdiLabelVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLadderIcon],svg[mdi-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1v2h-4V1H8v21h2v-2h4v2h2V1zm0 4v3h-4V5zm0 5v3h-4v-3zm-4 8v-3h4v3z"></svg:path>`,
})
export class MdiLadderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLadybugIcon],svg[mdi-ladybug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c.74 0 1.47.1 2.15.29l1.63-2.83c.28-.46.89-.64 1.37-.36c.48.27.64.9.35 1.36L16 6.07A8.07 8.07 0 0 1 18.93 9H5.07A8.07 8.07 0 0 1 8 6.07L6.5 3.46a.98.98 0 0 1 .35-1.36c.48-.28 1.09-.1 1.37.36l1.63 2.83C10.53 5.1 11.26 5 12 5m8 8a8 8 0 0 1-7.25 7.97V10.5h6.85c.26.79.4 1.63.4 2.5M4 13c0-.87.14-1.71.4-2.5h6.85v10.47A8 8 0 0 1 4 13"></svg:path>`,
})
export class MdiLadybugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLambdaIcon],svg[mdi-lambda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 20l4.16-12.09L9.34 6H8V4h2c.42 0 .78.26.93.63L16.66 18H18v2h-2c-.43 0-.79-.27-.93-.64l-3.74-8.71L8.12 20z"></svg:path>`,
})
export class MdiLambdaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLampIcon],svg[mdi-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8l4 12H4zm3 13h2v5h5v2H6v-2h5z"></svg:path>`,
})
export class MdiLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLampOutlineIcon],svg[mdi-lamp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.56 4l2.67 8H6.78l2.66-8zM16 2H8L4 14h16zm-5 13h2v5h5v2H6v-2h5z"></svg:path>`,
})
export class MdiLampOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLampsIcon],svg[mdi-lamps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 2l2 7H2l2-7m2 8h2v10h3v2H3v-2h3zm14-2l2 7H12l2-7m2 8h2v4h3v2h-8v-2h3z"></svg:path>`,
})
export class MdiLampsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLampsOutlineIcon],svg[mdi-lamps-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 4l.85 3h-4.7l.85-3zM10 2H4L2 9h10zm-4 8h2v10h3v2H3v-2h3zm12.5 0l.85 3h-4.7l.85-3zM20 8h-6l-2 7h10zm-4 8h2v4h3v2h-8v-2h3z"></svg:path>`,
})
export class MdiLampsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanIcon],svg[mdi-lan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2c-1.11 0-2 .89-2 2v3c0 1.11.89 2 2 2h1v2H2v2h4v2H5c-1.11 0-2 .89-2 2v3c0 1.11.89 2 2 2h4c1.11 0 2-.89 2-2v-3c0-1.11-.89-2-2-2H8v-2h8v2h-1c-1.11 0-2 .89-2 2v3c0 1.11.89 2 2 2h4c1.11 0 2-.89 2-2v-3c0-1.11-.89-2-2-2h-1v-2h4v-2h-9V9h1c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 2h4v3h-4zM5 17h4v3H5zm10 0h4v3h-4z"></svg:path>`,
})
export class MdiLanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanCheckIcon],svg[mdi-lan-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2H1v2h12V9h-3c1.11 0 2-.89 2-2V3c0-1.11-.89-2-2-2zm0 2h6v4H4zm10 10c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h-3v2h12v-2h-3c1.11 0 2-.89 2-2v-4c0-1.11-.89-2-2-2zm0 2h6v4h-6zm-8.5 5.5l5-5L9 14l-3.5 3.5l-2-2L2 17z"></svg:path>`,
})
export class MdiLanCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanConnectIcon],svg[mdi-lan-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2H1v2h12V9h-3c1.11 0 2-.89 2-2V3c0-1.11-.89-2-2-2zm0 2h6v4H4zM3 13v7h7v-2H5v-5zm11 0c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h-3v2h12v-2h-3c1.11 0 2-.89 2-2v-4c0-1.11-.89-2-2-2zm0 2h6v4h-6z"></svg:path>`,
})
export class MdiLanConnectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanDisconnectIcon],svg[mdi-lan-disconnect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2H1v2h12V9h-3c1.11 0 2-.89 2-2V3c0-1.11-.89-2-2-2zm0 2h6v4H4zm10 10c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h-3v2h12v-2h-3c1.11 0 2-.89 2-2v-4c0-1.11-.89-2-2-2zm-10.12.46l-1.42 1.42L4.59 17l-2.13 2.12l1.42 1.42L6 18.41l2.12 2.13l1.42-1.42L7.41 17l2.13-2.12l-1.42-1.42L6 15.59zM14 15h6v4h-6z"></svg:path>`,
})
export class MdiLanDisconnectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanPendingIcon],svg[mdi-lan-pending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2H1v2h12V9h-3c1.11 0 2-.89 2-2V3c0-1.11-.89-2-2-2zm0 2h6v4H4zm-1 9v2h2v-2zm11 1c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h-3v2h12v-2h-3c1.11 0 2-.89 2-2v-4c0-1.11-.89-2-2-2zM3 15v2h2v-2zm11 0h6v4h-6zM3 18v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2z"></svg:path>`,
})
export class MdiLanPendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLandFieldsIcon],svg[mdi-land-fields-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-4.7 2C14.5 5.1 14 6.5 14 8h-4c0-1.6.8-3.1 2-4zM14 14h-4c0-1.5-.5-2.9-1.3-4H12c1.2.9 2 2.4 2 4M4 4h5.3C8.5 5.1 8 6.5 8 8H4zm0 6h2c1.2.9 2 2.3 2 4H4zm0 10v-4h5.3C8.5 17.1 8 18.5 8 20zm6 0c0-1.6.8-3.1 2-4h3.3c-.8 1.1-1.3 2.5-1.3 4zm10 0h-4c0-1.6.8-3.1 2-4h2zm0-6h-4c0-1.5-.5-2.9-1.3-4H20zm0-6h-4c0-1.6.8-3.1 2-4h2z"></svg:path>`,
})
export class MdiLandFieldsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLandPlotsIcon],svg[mdi-land-plots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M4 4h4v10H4zm0 16v-4h4v4zm16 0H10V10h10zm0-12H10V4h10z"></svg:path>`,
})
export class MdiLandPlotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLandPlotsCircleIcon],svg[mdi-land-plots-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 5.5C13 5.6 14.6 4 16.5 4S20 5.6 20 7.5S18.4 11 16.5 11S13 9.4 13 7.5M4 4h7v7H4zm0 16v-7h7v7zm16 0h-7v-7h7z"></svg:path>`,
})
export class MdiLandPlotsCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLandPlotsCircleVariantIcon],svg[mdi-land-plots-circle-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 7c0 2.8-2.2 5-5 5s-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5M4 4h4v10H4zm0 16v-4h4v4zm16 0H10v-4h10z"></svg:path>`,
})
export class MdiLandPlotsCircleVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLandPlotsMarkerIcon],svg[mdi-land-plots-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16c1.1 0 2 .9 2 2v6H10v10h4.55q.27.45.54.84c.29.43.57.82.83 1.16H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2m4 2H4v10h4zM4 16v4h4v-4zm6-8h10V4H10zm8.5 14s-.58-.65-1.27-1.59c-.09-.13-.19-.27-.29-.41C16 18.66 15 16.89 15 15.5c0-1.9 1.6-3.5 3.5-3.5c.53 0 1.04.13 1.5.35c1.17.57 2 1.78 2 3.15c0 1.54-1.23 3.54-2.23 4.91c-.69.94-1.27 1.59-1.27 1.59m-1.2-6.4c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2"></svg:path>`,
})
export class MdiLandPlotsMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLandRowsHorizontalIcon],svg[mdi-land-rows-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2M4 6.5V4h16v2.5zM4 11V8.5h16V11zm0 4.5V13h16v2.5zM4 20v-2.5h16V20z"></svg:path>`,
})
export class MdiLandRowsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLandRowsVerticalIcon],svg[mdi-land-rows-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6.5 20H4V4h2.5zm4.5 0H8.5V4H11zm4.5 0H13V4h2.5zm4.5 0h-2.5V4H20z"></svg:path>`,
})
export class MdiLandRowsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLandslideIcon],svg[mdi-landslide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.47 13.79l-2.58-1.03L6 15.05L2 13.5v2.11l4 1.34zm-4.9-2.37L8 8H2v3.61l4 1.34zM6 19.05l-4-1.33V22h20l-4.97-6.62zM17 6V1l-5-1l-3 2v4l3 2zm1.5 1L16 9v3l2.5 2l4.5-2V8z"></svg:path>`,
})
export class MdiLandslideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLandslideOutlineIcon],svg[mdi-landslide-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12L8 8H2v14h20l-6-8zm1.53 2.77L6 16.95l-2-.67v-1.89l2 .67l3.95-1.32zM7 10l1.57 2.09l-2.57.86l-2-.67V10zM4 20v-1.61l2 .67l9.03-3.01L18 20zM17 6V1l-5-1l-3 2v4l3 2zm-6-2.93l1.42-.95l2.58.52v2.01l-2.77 1.11L11 4.93zM18.5 7L16 9v3l2.5 2l4.5-2V8zm2.5 3.7l-2.2.98l-.8-.64V9.96l1-.8l2 .44z"></svg:path>`,
})
export class MdiLandslideOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageCIcon],svg[mdi-language-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.45 15.97l.42 2.44c-.26.14-.68.27-1.24.39c-.57.13-1.24.2-2.01.2c-2.21-.04-3.87-.7-4.98-1.96c-1.14-1.27-1.68-2.88-1.68-4.83C6 9.9 6.68 8.13 8 6.89C9.28 5.64 10.92 5 12.9 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.6 2.49l-1.04-.34c-.4-.1-.87-.15-1.4-.15c-1.15-.01-2.11.36-2.86 1.1c-.76.73-1.14 1.85-1.18 3.34c.01 1.36.37 2.42 1.08 3.2c.71.77 1.7 1.17 2.99 1.18l1.33-.12c.43-.08.79-.19 1.09-.32"></svg:path>`,
})
export class MdiLanguageCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageCppIcon],svg[mdi-language-cpp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39c-.57.13-1.24.2-2.01.2c-2.21-.04-3.87-.7-4.98-1.96Q1 15.135 1 12.21c.05-2.31.72-4.08 2-5.32C4.32 5.64 5.96 5 7.94 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.58 2.49l-1.06-.34c-.4-.1-.86-.15-1.39-.15c-1.16-.01-2.12.36-2.87 1.1c-.76.73-1.15 1.85-1.18 3.34c0 1.36.37 2.42 1.08 3.2c.71.77 1.71 1.17 2.99 1.18l1.33-.12c.43-.08.79-.19 1.1-.32M11 11h2V9h2v2h2v2h-2v2h-2v-2h-2zm7 0h2V9h2v2h2v2h-2v2h-2v-2h-2z"></svg:path>`,
})
export class MdiLanguageCppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageCsharpIcon],svg[mdi-language-csharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39c-.57.13-1.24.2-2.01.2c-2.21-.04-3.87-.7-4.98-1.96Q2 15.135 2 12.21c.05-2.31.72-4.08 2-5.32C5.32 5.64 6.96 5 8.94 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.58 2.49l-1.06-.34c-.4-.1-.86-.15-1.39-.15c-1.16-.01-2.12.36-2.87 1.1c-.76.73-1.15 1.85-1.18 3.34c0 1.36.37 2.42 1.08 3.2c.71.77 1.71 1.17 2.99 1.18l1.33-.12c.43-.08.79-.19 1.1-.32M13.89 19l.61-4H13l.34-2h1.5l.32-2h-1.5L14 9h1.5l.61-4h2l-.61 4h1l.61-4h2l-.61 4H22l-.34 2h-1.5l-.32 2h1.5L21 15h-1.5l-.61 4h-2l.61-4h-1l-.61 4zm2.95-6h1l.32-2h-1z"></svg:path>`,
})
export class MdiLanguageCsharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageCss3Icon],svg[mdi-language-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81l-5.48 1.81l-4.75-1.81l.33-1.64H2.85l-.79 4l7.85 3l9.05-3l1.2-6.03l.24-1.21L21.94 3z"></svg:path>`,
})
export class MdiLanguageCss3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageFortranIcon],svg[mdi-language-fortran-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v2h1c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H5v2h9v-2h-2c-.55 0-1-.45-1-1v-4h2c.55 0 1 .45 1 1v2h2V8h-2v2c0 .55-.45 1-1 1h-2V6h5c1.11 0 2 1.34 2 3v1h2V4Z"></svg:path>`,
})
export class MdiLanguageFortranIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageGoIcon],svg[mdi-language-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.64 10.33l-.02-.06l.22-.27l.12-.08H6.8l.03.08l-.18.26l-.11.06zm-1.61.98L1 11.26l.22-.29l.12-.06h4.9l.05.09l-.08.24l-.1.07zm2.6.99l-.04-.06l.16-.28l.1-.06H6l.07.07l-.02.25l-.08.08zm11.15-2.16l-1.78.47c-.19.04-.2.05-.34-.11c-.16-.18-.27-.29-.5-.4c-.66-.34-1.33-.24-1.94.15c-.72.48-1.11 1.17-1.1 2.05c.01.86.6 1.57 1.45 1.7c.73.09 1.34-.17 1.83-.72l.29-.39h-2.07c-.22 0-.27-.14-.2-.32l.55-1.18c.03-.06.11-.17.27-.17h3.44c.15-.5.41-.96.75-1.41c.78-1.03 1.73-1.57 3-1.81c1.07-.18 2.13-.07 3.07.57c.84.58 1.37 1.36 1.5 2.39c.19 1.45-.24 2.63-1.24 3.65c-.71.72-1.58 1.17-2.57 1.39l-.86.08c-.98-.02-1.87-.3-2.62-.95c-.52-.45-.88-.99-1.06-1.63c-.15.24-.27.47-.44.7c-.77 1.02-1.78 1.65-3.06 1.8c-1.05.16-2.03-.05-2.89-.69c-.79-.6-1.26-1.4-1.36-2.39c-.14-1.17.2-2.22.91-3.14c.76-1 1.77-1.63 3.01-1.86c1-.18 1.97-.06 2.84.52c.57.38.97.9 1.24 1.52q.06.135-.12.18m6.11 1.6l-.03-.36c-.19-1.06-1.17-1.66-2.19-1.43c-1.01.22-1.67.85-1.88 1.86c-.19.84.21 1.69.98 2.03c.59.26 1.19.22 1.76-.06c.84-.43 1.31-1.12 1.36-2.04"></svg:path>`,
})
export class MdiLanguageGoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageHaskellIcon],svg[mdi-language-haskell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.08 19l4.67-7l-4.67-7h3.5l4.67 7l-4.67 7zm4.67 0l4.67-7l-4.67-7h3.5l9.34 14h-3.5l-2.92-4.37L10.25 19zm11.28-4.08l-1.53-2.34h5.42v2.34zm-2.33-3.5l-1.56-2.34h7.78v2.34z"></svg:path>`,
})
export class MdiLanguageHaskellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageHtml5Icon],svg[mdi-language-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17.56l4.07-1.13l.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58l-2.22.6l-2.22-.6l-.14-1.66h-2l.29 3.19zM4.07 3h15.86L18.5 19.2L12 21l-6.5-1.8z"></svg:path>`,
})
export class MdiLanguageHtml5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageJavaIcon],svg[mdi-language-java-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 6.08s-6.84 1.71-3.56 5.48c.97 1.11-.25 2.11-.25 2.11s2.45-1.25 1.31-2.85c-1.06-1.47-1.86-2.2 2.5-4.74m-4.47 1.2C16.08 4.08 14 2 14 2c.84 3.3-2.96 4.3-4.33 6.36c-.94 1.4.46 2.91 2.33 4.64c-.71-1.7-3.22-3.16.03-5.72M9.37 17.47c-3.08.86 1.88 2.63 5.79.96c-.38-.15-.75-.33-1.1-.54c-1.36.31-2.76.37-4.14.18c-1.31-.16-.55-.6-.55-.6m5.32-1.68c-1.75.38-3.56.47-5.34.26c-1.31-.13-.45-.77-.45-.77c-3.4 1.13 1.88 2.4 6.6 1.02c-.29-.11-.57-.3-.81-.51m3.42 3.3s.57.47-.61.83c-2.28.68-9.43.89-11.41.03c-.71-.31.63-.74 1.05-.83c.23-.06.46-.08.69-.08c-.79-.54-5.13 1.1-2.19 1.56c7.97 1.3 14.54-.6 12.47-1.51m-2.74-4.86c.29-.19.6-.35.92-.49c0 0-1.51.26-3.02.4c-1.6.16-3.21.18-4.81.06c-2.35-.31 1.29-1.2 1.29-1.2c-1.1 0-2.18.26-3.16.75c-2.05 1 5.1 1.45 8.78.48m.9 2.42c-.02.04-.04.07-.08.1c5.01-1.31 3.17-4.64.77-3.81c-.13.06-.24.14-.31.25c.14-.05.28-.09.43-.12c1.2-.24 2.92 1.63-.81 3.58m.13 4.61c-3.01.52-6.09.56-9.12.14c0 0 .46.38 2.81.53c3.6.23 9.13-.13 9.26-1.83c.03.01-.23.65-2.95 1.16"></svg:path>`,
})
export class MdiLanguageJavaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageJavascriptIcon],svg[mdi-language-javascript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm4.73 15.04c.4.85 1.19 1.55 2.54 1.55c1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08c-.58 0-.82-.4-1.09-.87zm5.98-.18c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03z"></svg:path>`,
})
export class MdiLanguageJavascriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageJsxIcon],svg[mdi-language-jsx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 3h18v18H3V3zm1.183 15.123c.355.753 1.055 1.377 2.26 1.377c1.334 0 2.249-.71 2.249-2.27v-5.144H7.185v5.122c0 .753-.312.947-.807.947c-.516 0-.732-.355-.968-.775l-1.227.743zm5.327-.162c.44.872 1.345 1.539 2.744 1.539c1.43 0 2.496-.742 2.496-2.098c0-1.26-.721-1.819-2.002-2.368l-.376-.16c-.646-.28-.925-.464-.925-.916c0-.365.28-.645.72-.645c.431 0 .71.183.969.645l1.173-.753C13.814 12.334 13.125 12 12.168 12c-1.345 0-2.206.86-2.206 1.99c0 1.227.72 1.809 1.808 2.271l.376.162c.689.3 1.097.484 1.097 1c0 .43-.398.743-1.022.743c-.742 0-1.162-.388-1.485-.915l-1.226.71zm8.002-4.092L16.68 12h-1.5l1.582 3.553l-1.757 3.947h1.5l1.008-2.262L18.52 19.5h1.5l-1.758-3.947L19.845 12h-1.5l-.832 1.869z" fill="currentColor"></svg:path>`,
})
export class MdiLanguageJsxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageKotlinIcon],svg[mdi-language-kotlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20L12 12l10 10H2Z"></svg:path>`,
})
export class MdiLanguageKotlinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageLuaIcon],svg[mdi-language-lua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 5A8.5 8.5 0 0 0 2 13.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 10.5 5m3 8a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 13.5 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5m6-11A2.5 2.5 0 0 0 17 4.5A2.5 2.5 0 0 0 19.5 7A2.5 2.5 0 0 0 22 4.5A2.5 2.5 0 0 0 19.5 2"></svg:path>`,
})
export class MdiLanguageLuaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageMarkdownIcon],svg[mdi-language-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.56 18H3.44C2.65 18 2 17.37 2 16.59V7.41C2 6.63 2.65 6 3.44 6h17.12c.79 0 1.44.63 1.44 1.41v9.18c0 .78-.65 1.41-1.44 1.41M6.81 15.19v-3.66l1.92 2.35l1.92-2.35v3.66h1.93V8.81h-1.93l-1.92 2.35l-1.92-2.35H4.89v6.38zM19.69 12h-1.92V8.81h-1.92V12h-1.93l2.89 3.28z"></svg:path>`,
})
export class MdiLanguageMarkdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageMarkdownOutlineIcon],svg[mdi-language-markdown-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.56 18H3.44C2.65 18 2 17.37 2 16.59V7.41C2 6.63 2.65 6 3.44 6h17.12c.79 0 1.44.63 1.44 1.41v9.18c0 .78-.65 1.41-1.44 1.41M3.44 6.94c-.26 0-.48.21-.48.47v9.19c0 .25.22.46.48.46h17.12c.26 0 .48-.21.48-.46V7.41c0-.26-.22-.47-.48-.47zm1.45 8.25V8.81h1.92l1.92 2.35l1.92-2.35h1.93v6.38h-1.93v-3.66l-1.92 2.35l-1.92-2.35v3.66zm12.01 0l-2.9-3.1h1.94V8.81h1.92v3.28h1.93z"></svg:path>`,
})
export class MdiLanguageMarkdownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguagePhpIcon],svg[mdi-language-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.08c-6.63 0-12-2.72-12-6.08s5.37-6.08 12-6.08S24 8.64 24 12s-5.37 6.08-12 6.08m-5.19-7.95c.54 0 .91.1 1.09.31c.18.2.22.56.13 1.03c-.1.53-.29.87-.58 1.09q-.42.33-1.29.33h-.87l.53-2.76zm-3.5 5.55h1.44l.34-1.75h1.23c.54 0 .98-.06 1.33-.17c.35-.12.67-.31.96-.58c.24-.22.43-.46.58-.73c.15-.26.26-.56.31-.88c.16-.78.05-1.39-.33-1.82c-.39-.44-.99-.65-1.82-.65H4.59zm7.25-8.33l-1.28 6.58h1.42l.74-3.77h1.14c.36 0 .6.06.71.18s.13.34.07.66l-.57 2.93h1.45l.59-3.07c.13-.62.03-1.07-.27-1.36c-.3-.27-.85-.4-1.65-.4h-1.27L12 7.35zM18 10.13c.55 0 .91.1 1.09.31c.18.2.22.56.13 1.03c-.1.53-.29.87-.57 1.09c-.29.22-.72.33-1.3.33h-.85l.5-2.76zm-3.5 5.55h1.44l.34-1.75h1.22c.55 0 1-.06 1.35-.17c.35-.12.65-.31.95-.58c.24-.22.44-.46.58-.73c.15-.26.26-.56.32-.88c.15-.78.04-1.39-.34-1.82c-.36-.44-.99-.65-1.82-.65h-2.75z"></svg:path>`,
})
export class MdiLanguagePhpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguagePythonIcon],svg[mdi-language-python-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.14 7.5A2.86 2.86 0 0 1 22 10.36v3.78A2.86 2.86 0 0 1 19.14 17H12c0 .39.32.96.71.96H17v1.68a2.86 2.86 0 0 1-2.86 2.86H9.86A2.86 2.86 0 0 1 7 19.64v-3.75a2.85 2.85 0 0 1 2.86-2.85h5.25a2.85 2.85 0 0 0 2.85-2.86V7.5zm-4.28 11.79c-.4 0-.72.3-.72.89s.32.71.72.71a.71.71 0 0 0 .71-.71c0-.59-.32-.89-.71-.89m-10-1.79A2.86 2.86 0 0 1 2 14.64v-3.78A2.86 2.86 0 0 1 4.86 8H12c0-.39-.32-.96-.71-.96H7V5.36A2.86 2.86 0 0 1 9.86 2.5h4.28A2.86 2.86 0 0 1 17 5.36v3.75a2.85 2.85 0 0 1-2.86 2.85H8.89a2.85 2.85 0 0 0-2.85 2.86v2.68zM9.14 5.71c.4 0 .72-.3.72-.89s-.32-.71-.72-.71c-.39 0-.71.12-.71.71s.32.89.71.89"></svg:path>`,
})
export class MdiLanguagePythonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguagePythonTextIcon],svg[mdi-language-python-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 5.69c6.92-4.62 9.1 1.31 9.28 4.58c.18 3.26-2.99 7.37-6.97 4.65v5.38L2 18.77V5.69M4.22 7.4v5.38c3.62 2.17 4.86.39 4.86-2.69c0-4.35-2.51-4.5-4.86-2.69m10.86-3.25s-.18 3.49 0 6.92c.36 3.43 4.61.77 4.61.77V4.92L22 5.2v9.24c0 6.16-6.15 5.86-6.15 5.86l-.77-2.3c5.38 0 4.7-3.57 4.7-3.57c-6.51 2.54-7.01-1.82-7.01-1.82V5.69l2.31-1.54z" fill="currentColor"></svg:path>`,
})
export class MdiLanguagePythonTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageRIcon],svg[mdi-language-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.29c-5.5 0-10 3-10 6.71c0 3.28 3.56 6 8.24 6.58v2.13h3.41v-2.12c.85-.09 1.64-.25 2.39-.48l1.38 2.6h3.86l-2.32-3.91C20.83 14.58 22 12.87 22 11c0-3.71-4.5-6.71-10-6.71m1.53 2.62c4.2 0 7.3 1.4 7.3 4.59c0 1.71-.92 2.91-2.42 3.65c-.09-.05-.17-.1-.22-.15c-.36-.16-.96-.34-.96-.34s2.98-.22 2.98-3.19s-3.12-3.02-3.12-3.02h-6.85v7.16c-2.55-.74-4.31-2.31-4.31-4.11c0-2.54 3.4-4.59 7.6-4.59m.15 3.98h2.07s.95-.05.95.94c0 .97-.95.97-.95.97h-2.07zm-.03 4.41h.92c.18 0 .27.05.43.2c.13.1.27.29.39.46c-.55.07-1.13.1-1.74.1z"></svg:path>`,
})
export class MdiLanguageRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageRubyIcon],svg[mdi-language-ruby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.8 2.07c2.52.43 3.24 2.16 3.2 3.97V6l-1.14 14.93l-14.78 1.01h.01c-1.23-.05-3.96-.17-4.09-3.99l1.37-2.5l2.77 6.46l2.36-7.62l-.05.01l.02-.02l7.71 2.46l-1.99-7.78l7.35-.46l-5.79-4.74l3.05-1.7zM2 17.91v.02zM6.28 6.23c2.96-2.95 6.79-4.69 8.26-3.2c1.46 1.47-.08 5.09-3.04 8.03c-3 2.94-6.77 4.78-8.24 3.3c-1.47-1.49.04-5.19 3.01-8.13z"></svg:path>`,
})
export class MdiLanguageRubyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageRubyOnRailsIcon],svg[mdi-language-ruby-on-rails-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.8 16.7s1.8-.2 1.8-2.4s-2.1-2.5-2.1-2.5h-3.8V19h1.9v-1.7l1.7 1.7H22zm-.8-1.4h-1.5v-1.6H19s.4.2.4.8c.1.6-.4.8-.4.8m2.3-7.1v.2C13.2 6.1 10 13.2 10.6 18.7H4.3c.7-5.4 7.5-16.1 17-10.5m-.8-1.3c-.7-.3-1.4-.6-2.1-.8l.1-1.3l2.1.8zm-2 1.8q1.05 0 2.1.3l-.1 1.2l-1.8-.2zm-4.6-2.9l-.4-1.2l2.1-.2l.4 1.3c-.2 0-1.9.1-2.1.1m1.3 3.7c.4-.2 1.1-.5 2-.7l.4 1.2l-1.8.7zm-3.4-3c-.6.3-1.2.6-1.8 1l-.8-1.3l1.8-1zm2.5 3.6l.8 1.2l-1.1 1.3l-1.1-1c.3-.6.8-1.1 1.4-1.5M11.6 15c.1-.8.3-1.5.6-2.3l1.2 1l-.3 1.9zM7.9 9.3c-.5.5-1 1.1-1.4 1.6L5.2 9.8l1.5-1.6zm-3.1 4.4c-.4.8-.7 1.6-1 2.3L2 15.3l.9-2.3zm6.7 2.6l1.8.6l.3 2l-2-.5c0-.2-.1-.9-.1-2.1"></svg:path>`,
})
export class MdiLanguageRubyOnRailsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageRustIcon],svg[mdi-language-rust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.9 11.7l-.9-.5V11l.7-.7c.1-.1.1-.3 0-.4l-.1-.1l-.9-.3c0-.1 0-.2-.1-.2l.6-.8c.1-.1.1-.3-.1-.4c0 0-.1 0-.1-.1l-1-.2c0-.1-.1-.1-.1-.2l.4-.9v-.3c-.1-.1-.2-.1-.3-.1h-1s0-.1-.1-.1l.2-1c0-.2-.1-.3-.2-.3h-.1l-1 .2c0-.1-.1-.1-.2-.2v-1q0-.3-.3-.3h-.1l-.9.4h-.1L16 3c0-.2-.2-.3-.3-.2h-.1l-.8.6c-.1 0-.2 0-.2-.1l-.3-.9c-.1-.1-.2-.2-.4-.2c0 0-.1 0-.1.1L13 3h-.2l-.5-.8c-.1-.2-.3-.2-.5-.2l-.1.1l-.5.9H11l-.7-.7c-.1-.1-.3-.1-.4 0l-.1.1l-.3.9c-.1 0-.2 0-.2.1l-.8-.6c-.2-.1-.4-.1-.5.1V3l-.2 1s-.1 0-.2.1l-.9-.4c-.1-.1-.3 0-.4.1v1.1c0 .1-.1.1-.1.2l-1-.2c-.2-.1-.3 0-.3.2v.1l.2 1c-.1 0-.1.1-.2.1h-1q-.3 0-.3.3v.1l.4.9v.2L3 8c-.2 0-.3.2-.3.3v.1l.6.8c0 .1 0 .2-.1.2l-.8.4c-.1.1-.2.2-.2.4c0 0 0 .1.1.1l.7.7v.2l-.8.5c-.2.1-.2.3-.2.4l.1.1l.9.6v.2l-.7.7c-.1.1-.1.3 0 .4l.1.1l.9.3c0 .1 0 .2.1.2l-.6.8c-.1.1-.1.3.1.4c0 0 .1 0 .1.1l1 .2c0 .1.1.1.1.2l-.4.9c-.1.1 0 .3.1.4h1.1c.1 0 .1.1.2.1l-.2 1c0 .2.1.3.2.3h.1l1-.2c0 .1.1.1.2.2v1q0 .3.3.3h.1l.9-.4h.1l.2 1c0 .2.2.3.3.2h.1l.8-.6c.1 0 .2 0 .2.1l.3.9c.1.1.2.2.4.2c0 0 .1 0 .1-.1l.8-.7h.2l.5.8c.1.1.3.2.4.1l.1-.1l.5-.8h.2l.7.7c.1.1.3.1.4 0l.1-.1l.3-.9c.1 0 .2 0 .2-.1l.8.6c.1.1.3.1.4-.1c0 0 0-.1.1-.1l.2-1c.1 0 .1-.1.2-.1l.9.4c.1.1.3 0 .4-.1v-1.1l.2-.2l1 .2c.2 0 .3-.1.3-.2v-.1l-.2-1l.2-.2h1q.3 0 .3-.3v-.1l-.4-.9c0-.1.1-.1.1-.2l1-.2c.2 0 .3-.2.2-.3v-.1l-.6-.8l.1-.2l.9-.3c.1-.1.2-.2.2-.4c0 0 0-.1-.1-.1L21 13v-.2l.8-.5c.2-.1.2-.3.1-.6q0 .15 0 0m-5.7 7c-.3-.1-.5-.4-.5-.7c.1-.3.4-.5.7-.5c.3.1.5.4.5.7c0 .4-.3.6-.7.5m-.2-1.9c-.3-.1-.6.1-.6.4l-.4 1.4q-1.35.6-3 .6c-1.1 0-2.1-.2-3.1-.7l-.3-1.4c-.1-.3-.3-.5-.6-.4l-1.2.3c-.2-.2-.4-.5-.6-.7h6c.1 0 .1 0 .1-.1v-2.1c0-.1 0-.1-.1-.1h-1.7v-1.3h1.9c.2 0 .9 0 1.2 1c.1.3.2 1.3.4 1.6c.1.3.6 1 1.1 1h3.1c-.2.3-.4.5-.7.8zm-8.3 1.9c-.3.1-.6-.1-.7-.5c-.1-.3.1-.6.5-.7s.6.1.7.5c0 .3-.2.6-.5.7M5.4 9.5c.1.3 0 .7-.3.8s-.7 0-.8-.3s0-.7.3-.8c.4-.1.7 0 .8.3m-.7 1.6l1.3-.5c.3-.1.4-.4.3-.7L6 9.3h1V14H5c-.3-1-.4-1.9-.3-2.9m5.6-.4V9.3h2.5c.1 0 .9.1.9.7c0 .5-.6.7-1.1.7zm9 1.2v.5h-.8c-.1 0-.1 0-.1.1v.3c0 .8-.5 1-.9 1s-.8-.2-.9-.4c-.2-1.3-.6-1.5-1.2-2c.7-.5 1.5-1.2 1.5-2.1c0-1-.7-1.6-1.1-1.9c-.7-.4-1.4-.5-1.6-.5H6.6c1.1-1.2 2.5-2 4.1-2.3l.9 1c.2.2.5.2.8 0l1-1c2.1.4 3.9 1.7 5 3.6l-.7 1.6c-.1.3 0 .6.3.7l1.3.6zm-7.7-8c.2-.2.6-.2.8 0s.2.6 0 .8q-.45.45-.9 0c-.2-.2-.1-.5.1-.8m6.9 5.6c.1-.3.5-.4.8-.3s.4.5.3.8s-.5.4-.8.3s-.4-.5-.3-.8"></svg:path>`,
})
export class MdiLanguageRustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageSwiftIcon],svg[mdi-language-swift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.09 19.72c-2.36 1.36-5.59 1.5-8.86.1A13.8 13.8 0 0 1 2 14.5c.67.55 1.46 1 2.3 1.4c3.37 1.57 6.73 1.46 9.1 0c-3.37-2.59-6.24-5.96-8.37-8.71c-.45-.45-.78-1.01-1.12-1.51c8.28 6.05 7.92 7.59 2.41-1.01c4.89 4.94 9.43 7.74 9.43 7.74c.16.09.25.16.36.22c.1-.25.19-.51.26-.78c.79-2.85-.11-6.12-2.08-8.81c4.55 2.75 7.25 7.91 6.12 12.24c-.03.11-.06.22-.05.39c2.24 2.83 1.64 5.78 1.35 5.22c-1.21-2.39-3.48-1.65-4.62-1.17"></svg:path>`,
})
export class MdiLanguageSwiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageTypescriptIcon],svg[mdi-language-typescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03zM13 11.25H8v1.5h1.5V20h1.75v-7.25H13z"></svg:path>`,
})
export class MdiLanguageTypescriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageXamlIcon],svg[mdi-language-xaml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.93 7.9l2.38 4.1l-2.36 4.09l-.62-1.09l1.47-2.5c.17-.31.17-.67 0-.96L16.32 9zm-.01-1.33a.12.12 0 0 0-.09.05l-1.27 2.25c-.06.07-.06.13 0 .22l1.62 2.81c.04.07.04.15 0 .22l-1.61 2.79c-.04.06-.04.15 0 .22l1.28 2.23c.02.04.06.06.09.06c.06 0 .06-.02.1-.06L20 12.23c.08-.14.08-.31 0-.44l-3-5.17c0-.03-.04-.05-.08-.05m4.99 5.1l-4.68-8.09a.68.68 0 0 0-.57-.33H7.28c-.23 0-.45.13-.57.33L2 11.67a.84.84 0 0 0 0 .66l4.71 8.09c.12.2.34.33.57.33h9.38c.23 0 .45-.13.57-.33l4.68-8.09a.65.65 0 0 0 0-.66M7.3 3.95h8.82l-4.36 7.7H6.93l3.94-6.83c.04-.07-.01-.16-.09-.16l-2.57-.01c-.08 0-.15.05-.21.11l-3.96 6.89h-1.2zm-1.13 8.51l3.57 6.17H8.5l-3.63-6.28l-.2-.35l.2-.35L8.5 5.37h1.23l-3.56 6.16l-.06.12c-.08.23-.08.48.01.7c.01.04.03.08.05.11m1.13 7.59l-4.45-7.7h1.2l3.98 6.88c.04.07.11.11.19.11h2.57c.08 0 .13-.09.09-.16l-3.94-6.83h4.83l4.4 7.7zm9.5-.3L12.37 12l4.41-7.79L21.29 12z"></svg:path>`,
})
export class MdiLanguageXamlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLaptopIcon],svg[mdi-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h16v10H4m16 2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2z"></svg:path>`,
})
export class MdiLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLaptopAccountIcon],svg[mdi-laptop-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4a2 2 0 0 1 2 2v10c0 1.11-.89 2-2 2h4v2H0v-2h4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2zm0 2H4v10h16zm-8 6c2.21 0 4 .9 4 2v1H8v-1c0-1.1 1.79-2 4-2m0-5a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2"></svg:path>`,
})
export class MdiLaptopAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLaptopChromebookIcon],svg[mdi-laptop-chromebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 15H4V5h16m-6 13h-4v-1h4m8 1V3H2v15H0v2h24v-2h-2z" fill="currentColor"></svg:path>`,
})
export class MdiLaptopChromebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLaptopMacIcon],svg[mdi-laptop-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 19a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1M4 5h16v11H4m16 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v11a2 2 0 0 0 2 2H0a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2h-4z" fill="currentColor"></svg:path>`,
})
export class MdiLaptopMacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLaptopOffIcon],svg[mdi-laptop-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.27L2.28 3L20 20.72L18.73 22l-2-2H0v-2h4a2 2 0 0 1-2-2V6c0-.22.04-.43.1-.63zM4 16h8.73L4 7.27zm16 0V6H7.82l-2-2H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-2.18l-4-4z"></svg:path>`,
})
export class MdiLaptopOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLaptopWindowsIcon],svg[mdi-laptop-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 4h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h1l2 3v1H0v-1l2-3h1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 2v9h16V6H4z" fill="currentColor"></svg:path>`,
})
export class MdiLaptopWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLaravelIcon],svg[mdi-laravel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.7 6.53c.01.02.01.05.01.08v4.29c0 .1-.06.22-.15.27l-3.61 2.08v4.11c0 .11-.05.21-.15.27l-7.52 4.33c-.02.01-.04.04-.06.04H10s0-.03-.04-.04l-7.52-4.33a.32.32 0 0 1-.15-.27V4.5c0-.05 0-.08.01-.1c0-.01.01-.02.01-.03c0-.02.01-.03.02-.05c0-.01.01-.02.02-.03l.03-.03l.03-.03c.01-.01.02-.02.03-.02L6.2 2.04c.1-.04.22-.04.3 0l3.78 2.17c.01.01.02.01.03.02l.03.03l.03.03c.01.01.02.02.02.03c.01.02.02.03.02.05c0 .01.01.02.01.03c.01.03.01.05.01.1v8l3.14-1.78V6.61c0-.03 0-.06.01-.08l.01-.03s.01-.03.02-.05c0-.01.01-.02.02-.03l.03-.03l.03-.03c.01-.01.02-.02.03-.02l3.78-2.17c.08-.06.2-.06.3 0l3.76 2.17c.01 0 .02.01.03.02l.03.03l.03.03c.01.01.01.02.02.03c.01.02.01.05.02.05s.01 0 .01.03m-.61 4.19V7.15l-3.14 1.8v3.55zm-3.76 6.46V13.6l-6.9 3.94v3.61zM2.91 5v12.18l6.9 3.97v-3.61l-3.6-2.04H6.2c-.01 0-.02 0-.03-.03c-.01 0-.02-.01-.03-.02l-.03-.03c-.01-.01-.01-.02-.02-.03c-.01-.02-.01-.03-.02-.04c0-.02-.01-.03-.01-.04c-.01-.01-.01-.03-.01-.04V6.82zm3.45-2.32L3.23 4.5l3.13 1.78L9.5 4.5zm3.45 10.2V5L6.67 6.82v7.87zm7.83-8.08L14.5 6.61l3.14 1.8l3.13-1.8zm-.31 4.15l-3.14-1.8v3.57l3.14 1.78zM10.12 17L17 13.06l-3.12-1.8L7 15.23z"></svg:path>`,
})
export class MdiLaravelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLaserPointerIcon],svg[mdi-laser-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 13l-4 3c-1 .88-1.14 2.12-1 3c.13 1 .91 2.22 2 2.68c1.57.67 3.09.22 4.04-.76L19 13c1.86-1.38 1-4-1-4h-6l7.46-4.39c.44-.32.62-.79.6-1.24C20 2.67 19.46 2 18.6 2h-.06c-.35 0-.68.11-.98.29L5 9c-.81.46-1.06 1.24-1 2c.05 1.03.74 2 2 2m-1 5.5a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1-5 0"></svg:path>`,
})
export class MdiLaserPointerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLassoIcon],svg[mdi-lasso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9c0-3.87-4.5-7-10-7S2 5.13 2 9v.025c.01 1.87 1.068 3.57 2.78 4.825l.003-.009q.61.445 1.321.81A3.5 3.5 0 0 0 6 15.5c0 1.26.67 2.37 1.67 3c-.21.61-.7 2.46.63 3.55c1.61 1.33 3.36.92 4.26.64c.252-.077.505-.182.78-.296c.716-.296 1.57-.649 2.88-.714c1.456-.08 2.712.13 3.345.237q.232.04.345.053s.95 0 1.06-.93c.11-.94-.94-1.07-.94-1.07s-1.6-.27-3.64-.26c-1.408.005-2.645.45-3.687.824c-1.26.453-2.233.803-2.873.146c-.65-.68-.44-1.32-.23-1.68a3.49 3.49 0 0 0 3.37-3.033a14 14 0 0 0 1.53-.187c4.175-.756 7.3-3.35 7.49-6.476Q22 9.154 22 9m-2 0c0 1.255-.743 2.405-1.968 3.284c-1.332.955-3.235 1.591-5.378 1.7A3.5 3.5 0 0 0 9.5 12c-.927 0-1.772.363-2.399.953a7.6 7.6 0 0 1-1.312-.802l.001-.001C4.688 11.303 4.021 10.224 4 9.056V9c0-2.76 3.58-5 8-5s8 2.24 8 5m-9.001 6.56q-.01.21-.07.4A1.5 1.5 0 0 1 9.5 17a1.5 1.5 0 0 1-1.498-1.584A1.5 1.5 0 0 1 11 15.56"></svg:path>`,
})
export class MdiLassoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLastfmIcon],svg[mdi-lastfm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18 17.93c-2.08-.01-3.19-1.03-3.96-2.84l-.22-.49l-1.9-4.37c-.63-1.54-2.2-2.59-3.96-2.59c-2.39 0-4.33 1.95-4.33 4.36s1.94 4.36 4.33 4.36c1.66 0 3.12-.95 3.84-2.36l.77 1.81A5.893 5.893 0 0 1 7.96 18C4.67 18 2 15.32 2 12c0-3.31 2.67-6 5.96-6c2.48 0 4.49 1.34 5.51 3.7c.07.19 1.07 2.54 1.95 4.54c.54 1.26 1 2.07 2.49 2.12c1.47.05 2.48-.86 2.48-1.99c0-1.11-.77-1.37-2.07-1.81c-2.32-.77-3.53-1.56-3.53-3.41c0-1.82 1.21-3.03 3.21-3.03c1.31 0 2.24.58 2.89 1.74l-1.27.64c-.48-.66-1.01-.93-1.68-.93c-.94 0-1.61.66-1.61 1.53c0 1.24 1.1 1.43 2.64 1.93c2.07.68 3.03 1.47 3.03 3.39c0 2.03-1.73 3.51-4 3.51z" fill="currentColor"></svg:path>`,
})
export class MdiLastfmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLastpassIcon],svg[mdi-lastpass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m20-7h-2v14h2z"></svg:path>`,
})
export class MdiLastpassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLatitudeIcon],svg[mdi-latitude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 2c3 0 5.5 1.6 6.9 4H5.1C6.5 5.6 9 4 12 4m0 16c-3 0-5.5-1.6-6.9-4h13.8c-1.4 2.4-3.9 4-6.9 4m-7.7-6c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2h15.5c.2.6.3 1.3.3 2s-.1 1.4-.3 2z"></svg:path>`,
})
export class MdiLatitudeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLaunchIcon],svg[mdi-launch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"></svg:path>`,
})
export class MdiLaunchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLavaLampIcon],svg[mdi-lava-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3L8 16h8L14 3zm1.5 2.75a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m1 2.75a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-1 3.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5M8 17l2 2l-2 2h8l-2-2l2-2z"></svg:path>`,
})
export class MdiLavaLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLayersIcon],svg[mdi-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16l7.36-5.73L21 9l-9-7l-9 7l1.63 1.27M12 18.54l-7.38-5.73L3 14.07l9 7l9-7l-1.63-1.27z"></svg:path>`,
})
export class MdiLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLayersEditIcon],svg[mdi-layers-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.63 10.27L3 9l9-7l7.94 6.17l-7.44 7.44l-.5.39zM10 18.94v-.83l.59-.58l.04-.03l-6.01-4.69L3 14.07l7 5.43zm11.7-6.36l-1.28-1.28a.55.55 0 0 0-.77 0l-1 1l2.05 2.05l1-1a.55.55 0 0 0 0-.77M12 21h2.06l6.05-6.07l-2.05-2.05L12 18.94z"></svg:path>`,
})
export class MdiLayersEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLayersMinusIcon],svg[mdi-layers-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-8v-2zm-11-1L2 9l9-7l9 7zm0 2.54l1-.79V18c0 .71.12 1.39.35 2L11 21.07l-9-7l1.62-1.26z"></svg:path>`,
})
export class MdiLayersMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLayersOffIcon],svg[mdi-layers-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.27 1L2 2.27L6.22 6.5L3 9l1.63 1.27L12 16l2.1-1.63l1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7l4.95-3.85L20.73 21L22 19.73zm16.09 9.27L21 9l-9-7l-2.91 2.27l7.87 7.88zm.45 4.73l1.19-.93l-1.43-1.43l-1.19.92z"></svg:path>`,
})
export class MdiLayersOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLayersOffOutlineIcon],svg[mdi-layers-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4.53l-1.17.91L9.41 4L12 2l9 7l-3.72 2.89l-1.43-1.42L17.74 9zm9 9.54l-.87.68l-1.43-1.43l.67-.52zM3.41.86l18.73 18.73L20.73 21l-3.78-3.78L12 21.07l-9-7l1.62-1.26L12 18.54l3.5-2.75l-1.4-1.42L12 16L3 9l3.22-2.5L2 2.27zM12 13.47l.67-.53l-5.02-5.02L6.26 9z"></svg:path>`,
})
export class MdiLayersOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLayersOutlineIcon],svg[mdi-layers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.54l7.37-5.74L21 14.07l-9 7l-9-7l1.62-1.26zM12 16L3 9l9-7l9 7zm0-11.47L6.26 9L12 13.47L17.74 9z"></svg:path>`,
})
export class MdiLayersOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLayersPlusIcon],svg[mdi-layers-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zm-6 2L2 9l9-7l9 7zm0 2.54l1-.79V18c0 .71.12 1.39.35 2L11 21.07l-9-7l1.62-1.26z"></svg:path>`,
})
export class MdiLayersPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLayersRemoveIcon],svg[mdi-layers-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.46 15.88l1.42-1.42L18 16.59l2.12-2.13l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18zM11 16L2 9l9-7l9 7zm0 2.54l1-.79V18c0 .71.12 1.39.35 2L11 21.07l-9-7l1.62-1.26z"></svg:path>`,
})
export class MdiLayersRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLayersSearchIcon],svg[mdi-layers-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.31 18.9c.44-.69.69-1.52.69-2.4c0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 23.39L22.39 22zm-3.81.1a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m-5.91.2L3 14.07l1.62-1.26L9 16.22v.28c0 .96.22 1.88.59 2.7m-4.96-8.93L3 9l9-7l9 7l-1.64 1.27l-.71.55c-.93-.52-2.01-.82-3.15-.82c-2.71 0-5.04 1.68-6 4.05z"></svg:path>`,
})
export class MdiLayersSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLayersSearchOutlineIcon],svg[mdi-layers-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.31 18.9c.44-.69.69-1.52.69-2.4c0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 23.39L22.39 22zm-3.81.1a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m-5.91.2L3 14.07l1.62-1.26L9 16.22v.28c0 .96.22 1.88.59 2.7m-.09-5.16L3 9l9-7l9 7l-2.34 1.82a6.6 6.6 0 0 0-2.29-.75L17.74 9L12 4.53L6.26 9l4.27 3.32c-.43.52-.79 1.1-1.03 1.72"></svg:path>`,
})
export class MdiLayersSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLayersTripleIcon],svg[mdi-layers-triple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0L3 7l1.63 1.27L12 14l7.36-5.73L21 7zm7.37 10.73L12 16.47l-7.38-5.73L3 12l9 7l9-7zm0 5L12 21.47l-7.38-5.73L3 17l9 7l9-7z"></svg:path>`,
})
export class MdiLayersTripleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLayersTripleOutlineIcon],svg[mdi-layers-triple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16.54l7.37-5.74L21 12.07l-9 7l-9-7l1.62-1.26zM12 14L3 7l9-7l9 7zm0-11.47L6.26 7L12 11.47L17.74 7zm0 18.94l7.37-5.74L21 17l-9 7l-9-7l1.62-1.26z"></svg:path>`,
})
export class MdiLayersTripleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLeadPencilIcon],svg[mdi-lead-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.84 2.73c-.39 0-.77.15-1.07.44l-2.12 2.12l5.3 5.31l2.12-2.1c.6-.61.6-1.56 0-2.14L17.9 3.17c-.3-.29-.68-.44-1.06-.44M12.94 6l-8.1 8.11l2.56.28l.18 2.29l2.28.17l.29 2.56l8.1-8.11m-14 3.74L2.5 21.73l6.7-1.79l-.24-2.16l-2.31-.17l-.18-2.32"></svg:path>`,
})
export class MdiLeadPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLeafIcon],svg[mdi-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8"></svg:path>`,
})
export class MdiLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLeafCircleIcon],svg[mdi-leaf-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M9.6 17.2c-.22 0-.52-.08-.8-.2l-.57 1.4l-1.14-.4l.16-.39C8.45 14.59 9.83 11.15 15 10c0 0-6 0-7.95 5.55c0 0-1.05-1.05-1.05-2.25s1.2-3.75 4.2-4.35c.85-.17 1.8-.3 2.74-.45C15.3 8.18 17.57 7.86 18 7c0 0-1.8 10.2-8.4 10.2"></svg:path>`,
})
export class MdiLeafCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLeafCircleOutlineIcon],svg[mdi-leaf-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.04 16.34c1.01-2.51 2.15-5.38 6.46-6.34c0 0-5 0-6.62 4.63c0 0-.88-.88-.88-1.88s1-3.12 3.5-3.62c.71-.13 1.5-.26 2.28-.37c1.97-.26 3.86-.54 4.22-1.26c0 0-1.5 8.5-7 8.5c-.18 0-.43-.06-.67-.15L8.86 17l-.95-.33zM12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2"></svg:path>`,
})
export class MdiLeafCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLeafMapleIcon],svg[mdi-leaf-maple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.79 13L16 16l1 2l-4-.75V21h-2v-3.75L7 18l1-2l-5.79-3l1-1.73L1.61 8l3.6-.23l1-1.77l3.42 3.9L8 5h2l2-3l2 3h2l-1.63 4.9L17.79 6l1 1.73l3.6.23l-1.6 3.23z"></svg:path>`,
})
export class MdiLeafMapleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLeafMapleOffIcon],svg[mdi-leaf-maple-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.11 14.91L8.2 5H10l2-3l2 3h2l-1.63 4.9L17.79 6l1 1.73l3.6.23l-1.6 3.23l1 1.81zM2.39 1.73L1.11 3l4.34 4.34l-.24.43l-3.6.23l1.6 3.27l-1 1.73L8 16l-1 2l4-.75V21h2v-3.75l2.91.55l4.93 4.93l1.27-1.27z"></svg:path>`,
})
export class MdiLeafMapleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLeafOffIcon],svg[mdi-leaf-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-5.7-5.7C13.26 18.79 10.92 20 8 20c-.36 0-.86-.13-1.34-.3L5.71 22l-1.89-.66c1.33-3.31 2.68-7.02 5.84-9.79l-.89-.89c-2.01 1.37-3.91 3.44-5.02 6.59c0 0-1.75-1.75-1.75-3.75C2 12 3.12 9.32 5.72 7.61L1.11 3l1.28-1.27l14 14.01l5.72 5.72zM17 8c-1.65.37-3.07.88-4.3 1.5l4.8 4.79C20.87 9.35 22 3 22 3c-.97 1.95-7.65 2.24-12.62 3.18l2.77 2.77C14.81 8 17 8 17 8"></svg:path>`,
})
export class MdiLeafOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLeakIcon],svg[mdi-leak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H3v3a3 3 0 0 0 3-3m8 0h-2a9 9 0 0 1-9 9v2c6.08 0 11-4.93 11-11m-4 0H8a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7m0 18h2a9 9 0 0 1 9-9v-2a11 11 0 0 0-11 11m8 0h3v-3a3 3 0 0 0-3 3m-4 0h2a5 5 0 0 1 5-5v-2a7 7 0 0 0-7 7"></svg:path>`,
})
export class MdiLeakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLeakOffIcon],svg[mdi-leak-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3H8c0 .37-.04.72-.12 1.06l1.59 1.59C9.81 4.84 10 3.94 10 3M3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97A9 9 0 0 1 3 12v2c2.71 0 5.19-1 7.11-2.62l2.5 2.5C11 15.81 10 18.29 10 21h2c0-2.16.76-4.14 2.03-5.69l1.43 1.43A6.92 6.92 0 0 0 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21L21 19.73L4.27 3zM14 3h-2c0 1.5-.37 2.91-1 4.16l1.44 1.46C13.42 7 14 5.06 14 3m5.94 13.12c.34-.08.69-.12 1.06-.12v-2c-.94 0-1.84.19-2.66.5zm-4.56-4.56L16.84 13c1.25-.63 2.66-1 4.16-1v-2c-2.06 0-4 .58-5.62 1.56"></svg:path>`,
})
export class MdiLeakOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLecternIcon],svg[mdi-lectern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21v1H7v-1h2V11h6v10zm.5-15c0-1.61-1.09-2.95-2.57-3.36c-.15-.37-.5-.64-.93-.64c-.55 0-1 .45-1 1s.45 1 1 1c.31 0 .58-.15.76-.37c1.01.32 1.74 1.26 1.74 2.37H4l1 4h14l1-4z"></svg:path>`,
})
export class MdiLecternIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLedOffIcon],svg[mdi-led-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiLedOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLedOnIcon],svg[mdi-led-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"></svg:path>`,
})
export class MdiLedOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLedOutlineIcon],svg[mdi-led-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2v5h-4v-5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiLedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLedStripIcon],svg[mdi-led-strip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.81 8.46L14.83 20.5l.71-.72l1.41 1.41l1.41-1.41l-1.41-1.42l1.41-1.41l1.42 1.41l1.41-1.41l-1.41-1.41l.72-.71L8.46 2.81zm2.83 0l2.82-2.82l9.2 9.19l-2.83 2.83zm1.41 0l1.41 1.42l1.42-1.42l-1.42-1.41zm2.12 2.13L10.59 12L12 10.59l-1.41-1.42zm2.12 2.12l1.42 1.41l1.41-1.41l-1.41-1.42zm2.12 2.12l1.42 1.41l1.41-1.41l-1.41-1.42z"></svg:path>`,
})
export class MdiLedStripIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLedStripVariantIcon],svg[mdi-led-strip-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.95 3L2 6.91l17.34 4.34l.95-3.91zm3.14 3.89l-1.93-.48l.48-1.95l1.93.48zm3.85.97L8 7.38l.5-1.96l1.92.49zm3.86.96l-1.93-.48l.48-1.95l1.92.48zm3.85.97l-1.93-.48l.48-1.96l1.93.49zM4.66 12.75l-.95 3.91L21.05 21l.95-3.9zm3.14 3.9l-1.92-.49l.47-1.95l1.93.48zm3.85.96l-1.92-.48l.47-1.95l1.93.48zm3.85.97l-1.92-.49l.48-1.95l1.94.48zm3.86.96l-1.93-.48l.48-1.95l1.93.48zM6.25 12.11L11 10.2l6.75 1.69L13 13.8z"></svg:path>`,
})
export class MdiLedStripVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLedStripVariantOffIcon],svg[mdi-led-strip-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l1.48 1.5L2 6.91l4.03 1.01l3.05 3.05l-2.83 1.14l5.3 1.33l1.39 1.39l-8.28-2.08l-.95 3.91l14.75 3.69l2.38 2.38zM7.8 16.65l-1.92-.49l.47-1.95l1.93.48zm3.85.96l-1.92-.48l.47-1.95l1.93.48zm3.85.97l-1.92-.49l.48-1.95l.25.06l1.43 1.43zm4.23-2.05l2.27.57l-.33 1.37zm-3.88-3.88L14.2 11l3.55.89zm-5.43-6.74l-.26 1.05l2.66 2.66l6.52 1.63l.95-3.91l-13-3.25l1.37 1.37zm5.78 1.44l1.93.49l-.48 1.95l-1.93-.48zm-3.85-.96l1.92.48l-.47 1.95l-1.93-.48z"></svg:path>`,
})
export class MdiLedStripVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLedVariantOffIcon],svg[mdi-led-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-1.95 0-3.57 1.4-3.92 3.25L16.82 15H18v-2h-2V7a4 4 0 0 0-4-4M3.28 4L2 5.27l6 6V13H6v2h3v6h2v-6h.73L13 16.27V21h2v-2.73L18.73 22L20 20.72l-5-5l-7-7z"></svg:path>`,
})
export class MdiLedVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLedVariantOnIcon],svg[mdi-led-variant-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a4 4 0 0 0-4 4v6H6v2h3v6h2v-6h2v6h2v-6h3v-2h-2V7a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiLedVariantOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLedVariantOutlineIcon],svg[mdi-led-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a4 4 0 0 0-4 4v6H6v2h3v6h2v-6h2v6h2v-6h3v-2h-2V7a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2v5h-4V7a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiLedVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLeekIcon],svg[mdi-leek-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v3.55l2 2l2-2V2zM6.34 4L3.87 6.5L15 17.62v-4.95zm11.32 0l-4.6 4.61l2.48 2.48l4.59-4.59zM9 13.74V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-.26l-2-2V20h-2v-4.26z"></svg:path>`,
})
export class MdiLeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLessThanIcon],svg[mdi-less-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.5 4.14l1 1.72L8.97 12l10.53 6.14l-1 1.72L5 12z"></svg:path>`,
})
export class MdiLessThanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLessThanOrEqualIcon],svg[mdi-less-than-or-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2.27L5 10.14L18.5 18l1-1.73l-10.53-6.13L19.5 4zM5 20v2h15v-2z"></svg:path>`,
})
export class MdiLessThanOrEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLibraryIcon],svg[mdi-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3m0 3.54C9.64 9.35 6.5 8 3 8v11c3.5 0 6.64 1.35 9 3.54c2.36-2.19 5.5-3.54 9-3.54V8c-3.5 0-6.64 1.35-9 3.54"></svg:path>`,
})
export class MdiLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLibraryBooksIcon],svg[mdi-library-books-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 7H9V5h10m-4 10H9v-2h6m4-2H9V9h10m1-7H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6z" fill="currentColor"></svg:path>`,
})
export class MdiLibraryBooksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLibraryOutlineIcon],svg[mdi-library-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14.27L10.64 13A11.24 11.24 0 0 0 5 10.18v6.95c2.61.34 5 1.34 7 2.82c2-1.48 4.39-2.48 7-2.82v-6.95c-2.16.39-4.09 1.39-5.64 2.82M19 8.15c.65-.1 1.32-.15 2-.15v11c-3.5 0-6.64 1.35-9 3.54C9.64 20.35 6.5 19 3 19V8c.68 0 1.35.05 2 .15c2.69.41 5.1 1.63 7 3.39c1.9-1.76 4.31-2.98 7-3.39M12 6c.27 0 .5-.1.71-.29c.19-.21.29-.44.29-.71s-.1-.5-.29-.71C12.5 4.11 12.27 4 12 4s-.5.11-.71.29c-.18.21-.29.45-.29.71s.11.5.29.71c.21.19.45.29.71.29m2.12 1.12a2.997 2.997 0 1 1-4.24-4.24a2.997 2.997 0 1 1 4.24 4.24"></svg:path>`,
})
export class MdiLibraryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLibraryShelvesIcon],svg[mdi-library-shelves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 9V1.5h-3V9h-3V1.5h-3V9h-3V1.5H4.65V9H3v1.5h18V9zm0 4.5h-3V21h-3v-7.5h-3V21h-3v-7.5H4.65V21H3v1.5h18V21h-1.5z"></svg:path>`,
})
export class MdiLibraryShelvesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLicenseIcon],svg[mdi-license-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10a3.04 3.04 0 0 1 3-3a3.04 3.04 0 0 1 3 3a3.04 3.04 0 0 1-3 3a3.04 3.04 0 0 1-3-3m3 9l4 1v-3.08A7.54 7.54 0 0 1 12 18a7.54 7.54 0 0 1-4-1.08V20m4-16a5.78 5.78 0 0 0-4.24 1.74A5.78 5.78 0 0 0 6 10a5.78 5.78 0 0 0 1.76 4.23A5.78 5.78 0 0 0 12 16a5.78 5.78 0 0 0 4.24-1.77A5.78 5.78 0 0 0 18 10a5.78 5.78 0 0 0-1.76-4.26A5.78 5.78 0 0 0 12 4m8 6a8 8 0 0 1-.57 2.8A7.8 7.8 0 0 1 18 15.28V23l-6-2l-6 2v-7.72A7.9 7.9 0 0 1 4 10a7.68 7.68 0 0 1 2.33-5.64A7.73 7.73 0 0 1 12 2a7.73 7.73 0 0 1 5.67 2.36A7.68 7.68 0 0 1 20 10"></svg:path>`,
})
export class MdiLicenseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLifebuoyIcon],svg[mdi-lifebuoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.79 15.41c.95-2.17.95-4.66 0-6.82l-2.74 1.24c.6 1.38.6 2.95.01 4.34zm-4.37-11.2a8.54 8.54 0 0 0-6.83 0l1.24 2.73c1.39-.59 2.96-.59 4.35.01zM4.21 8.58a8.56 8.56 0 0 0 0 6.84l2.74-1.25c-.6-1.38-.6-2.96 0-4.35zm4.38 11.21a8.5 8.5 0 0 0 6.83-.01l-1.24-2.73a5.5 5.5 0 0 1-4.34.01zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 6a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiLifebuoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightFloodDownIcon],svg[mdi-light-flood-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11H2V9h6c.55 0 1 .45 1 1s-.45 1-1 1m6.87-6.65l-.37.92l-6.32-.41L6.9 8H8c1.1 0 2 .9 2 2s-.9 2-2 2H5.27l-.86 2.12l4.8 4.12l-.38.92l1.86.76L16.72 5.1zm5.94 1.94l.76 1.85l-2.31.96l-.76-1.85zm-2.03 7.28l2.77 1.15l-.76 1.85L18 15.42zm-2.63 7.66L14.3 22l-.96-2.31l1.85-.76z"></svg:path>`,
})
export class MdiLightFloodDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightFloodUpIcon],svg[mdi-light-flood-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15H2v-2h6c.55 0 1 .45 1 1s-.45 1-1 1m8.72 3.9L10.69 4.08l-1.86.76l.38.92l-4.8 4.12l.86 2.12H8c1.1 0 2 .9 2 2s-.9 2-2 2H6.9l1.28 3.14l6.32-.41l.37.92zm4.09-1.19l-2.31-.96l.76-1.85l2.31.96zm-2.03-7.28L18 8.58l2.79-1.15l.76 1.85zm-3.59-5.36l-1.85-.76L14.3 2l1.85.77z"></svg:path>`,
})
export class MdiLightFloodUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightRecessedIcon],svg[mdi-light-recessed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7C6.5 7 2 9.46 2 12.5S6.5 18 12 18s10-2.46 10-5.5S17.5 7 12 7m4.5 3c0 .4-1.6 1.54-4.5 1.54S7.5 10.4 7.5 10c0-.09.15-.26.4-.45C9.06 9.21 10.44 9 12 9s2.94.21 4.1.55c.25.19.4.36.4.45M12 16c-4.88 0-8-2.07-8-3.5c0-.69.73-1.5 2.03-2.21c.27 1.54 2.84 2.75 5.97 2.75s5.7-1.21 5.97-2.75C19.27 11 20 11.81 20 12.5c0 1.43-3.12 3.5-8 3.5"></svg:path>`,
})
export class MdiLightRecessedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightSwitchIcon],svg[mdi-light-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v12h8V6zm6 4h-4V8h4zm5.4-8.4C19 1.2 18.5 1 18 1H6c-.5 0-1 .2-1.4.6S4 2.5 4 3v18c0 .5.2 1 .6 1.4s.9.6 1.4.6h12c.5 0 1-.2 1.4-.6s.6-.9.6-1.4V3c0-.5-.2-1-.6-1.4M18 21H6V3h12z"></svg:path>`,
})
export class MdiLightSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightSwitchOffIcon],svg[mdi-light-switch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.4 1.6C19 1.2 18.5 1 18 1H6c-.5 0-1 .2-1.4.6S4 2.5 4 3v18c0 .5.2 1 .6 1.4s.9.6 1.4.6h12c.5 0 1-.2 1.4-.6s.6-.9.6-1.4V3c0-.5-.2-1-.6-1.4M18 21H6V3h12zM8 6v12h8V6zm7 11H9V7h6zm-5-3h4v2h-4z"></svg:path>`,
})
export class MdiLightSwitchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbIcon],svg[mdi-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7M9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9z"></svg:path>`,
})
export class MdiLightbulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbAlertIcon],svg[mdi-lightbulb-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2C6.1 2 3 5.1 3 9c0 2.4 1.2 4.5 3 5.7V17c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2.3c1.8-1.3 3-3.4 3-5.7c0-3.9-3.1-7-7-7M7 21c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-1H7zm12-9V7h2v6h-2m0 4v-2h2v2z"></svg:path>`,
})
export class MdiLightbulbAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbAlertOutlineIcon],svg[mdi-lightbulb-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2c3.9 0 7 3.1 7 7c0 2.4-1.2 4.5-3 5.7V17c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1v-2.3C4.2 13.5 3 11.4 3 9c0-3.9 3.1-7 7-7M7 21v-1h6v1c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1m3-17C7.2 4 5 6.2 5 9c0 2.1 1.2 3.8 3 4.6V16h4v-2.4c1.8-.8 3-2.5 3-4.6c0-2.8-2.2-5-5-5m9 8V7h2v6h-2m0 4v-2h2v2z"></svg:path>`,
})
export class MdiLightbulbAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbAutoIcon],svg[mdi-lightbulb-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2C5.13 2 2 5.13 2 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74c0-3.87-3.13-7-7-7M6 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H6zm13-8h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9zm-2.15 5.65L18 15l1.15 3.65z"></svg:path>`,
})
export class MdiLightbulbAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbAutoOutlineIcon],svg[mdi-lightbulb-auto-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2c3.87 0 7 3.13 7 7c0 2.38-1.19 4.47-3 5.74V17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-2.26C3.19 13.47 2 11.38 2 9c0-3.87 3.13-7 7-7M6 21v-1h6v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1M9 4C6.24 4 4 6.24 4 9c0 2.05 1.23 3.81 3 4.58V16h4v-2.42c1.77-.77 3-2.53 3-4.58c0-2.76-2.24-5-5-5m10 9h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9zm-2.15 5.65L18 15l1.15 3.65z"></svg:path>`,
})
export class MdiLightbulbAutoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbCflIcon],svg[mdi-lightbulb-cfl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 2A2.5 2.5 0 0 1 13 4.5V14h1V4.47c0-.91-.37-1.77-1-2.42c.17-.05.33-.05.5-.05A2.5 2.5 0 0 1 16 4.5V14h1v3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-3h1V4.5A2.5 2.5 0 0 1 10.5 2m0 2c-.28 0-.5.22-.5.5V14h1V4.5c0-.28-.22-.5-.5-.5M9 20h6v1c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1z"></svg:path>`,
})
export class MdiLightbulbCflIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbCflOffIcon],svg[mdi-lightbulb-cfl-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.47c0-.91-.37-1.77-1-2.42c.17-.05.33-.05.5-.05A2.5 2.5 0 0 1 16 4.5V14h1v1.18l-3-3zm-4 .03c0-.28.22-.5.5-.5s.5.22.5.5v4.68l2 2V4.5a2.5 2.5 0 0 0-5 0v1.68l2 2zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9zm11-.28L18.73 22l-4-4H8c-.55 0-1-.45-1-1v-3h1v-2.73l-6-6L3.28 4z"></svg:path>`,
})
export class MdiLightbulbCflOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbCflSpiralIcon],svg[mdi-lightbulb-cfl-spiral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2c-.16 0-.31.03-.45.1l-2 1C7.56 3.66 8 5 9 5c.16 0 .32-.05.45-.1l2-1C12.43 3.36 12 2 11 2m4 2a.96.96 0 0 0-.45.1l-6 3C7.56 7.68 8 9 9 9c.18 0 .32-.05.45-.1l6-3C16.41 5.43 16 4 15 4m0 4c-.16 0-.31.03-.45.1L8.7 11.03c-.5.22-.7.57-.7.97v2H7v3c0 .55.44 1 1 1h8c.55 0 1-.45 1-1v-3h-1v-1c0-.56-.45-1-1-1s-1 .45-1 1v1h-4v-1.38l5.45-2.72C16.42 9.34 16 8 15 8M9 20v1c0 .57.46 1 1 1h4c.56 0 1-.45 1-1v-1"></svg:path>`,
})
export class MdiLightbulbCflSpiralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbCflSpiralOffIcon],svg[mdi-lightbulb-cfl-spiral-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.45 9.9l-1.57.78l-1.5-1.5l2.17-1.08c.14-.07.29-.1.45-.1c1 0 1.42 1.34.45 1.9M11.22 8l4.23-2.1C16.41 5.43 16 4 15 4a.96.96 0 0 0-.45.1L9.72 6.5zm9.62 14.73L16.09 18H8c-.56 0-1-.45-1-1v-3h1v-2c0-.4.2-.75.7-.97l.3-.15L1.11 3l1.28-1.27l19.72 19.73zM12.11 14l-1.61-1.62l-.5.24V14zM9 21c0 .57.46 1 1 1h4c.56 0 1-.45 1-1v-1H9zM9 5c.16 0 .32-.05.45-.1l2-1C12.43 3.36 12 2 11 2c-.16 0-.31.03-.45.1l-2 1C7.56 3.66 8 5 9 5"></svg:path>`,
})
export class MdiLightbulbCflSpiralOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbFluorescentTubeIcon],svg[mdi-lightbulb-fluorescent-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.05 2.81l-.55.53l-1.39-1.42l-1.24 1.24l1.41 1.42l-.7.7l-1.42-1.41l-1.24 1.24L3.34 6.5l-.53.55l14.14 14.14l.55-.53l1.39 1.42l1.24-1.24l-1.41-1.41l.7-.71l1.42 1.41l1.24-1.23l-1.42-1.4l.53-.55z"></svg:path>`,
})
export class MdiLightbulbFluorescentTubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbFluorescentTubeOutlineIcon],svg[mdi-lightbulb-fluorescent-tube-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.05 2.81l-.55.53l-1.39-1.42l-1.24 1.24l1.41 1.42l-.7.7l-1.42-1.41l-1.24 1.24L3.34 6.5l-.53.55l1.41 1.41l11.32 11.32l1.41 1.41l.55-.53l1.39 1.42l1.24-1.24l-1.41-1.41l.71-.71l1.41 1.41l1.24-1.24l-1.42-1.39l.53-.55l-1.41-1.41L8.46 4.22M7.05 5.64l11.31 11.31l-1.41 1.41L5.64 7.05Z"></svg:path>`,
})
export class MdiLightbulbFluorescentTubeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbGroupIcon],svg[mdi-lightbulb-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a5 5 0 1 1 6 0m-1 4h-4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m-7 0v-1H5v1a1 1 0 0 0 1 1h1.17A2.9 2.9 0 0 1 7 19m-2-9a6.8 6.8 0 0 1 .68-3A4 4 0 0 0 4 14.45V16a1 1 0 0 0 1 1h2v-2.12A6.92 6.92 0 0 1 5 10m12 8v1a2.9 2.9 0 0 1-.17 1H18a1 1 0 0 0 1-1v-1m-.68-11a6.8 6.8 0 0 1 .68 3a6.92 6.92 0 0 1-2 4.88V17h2a1 1 0 0 0 1-1v-1.55A4 4 0 0 0 18.32 7"></svg:path>`,
})
export class MdiLightbulbGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbGroupOffIcon],svg[mdi-lightbulb-group-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L18.09 20h-1.26c.11-.32.17-.66.17-1v-.11l-2.25-2.25c-.18.22-.44.36-.75.36h-4c-.55 0-1-.45-1-1v-2c-1.6-1.2-2.26-3.16-1.88-5L5.5 7.4C5.18 8.23 5 9.11 5 10c0 1.83.72 3.58 2 4.88V17H5c-.55 0-1-.45-1-1v-1.55a4.05 4.05 0 0 1-2-3.14C1.85 9.27 3.25 7.5 5.2 7.09L1.11 3l1.28-1.27l19.72 19.73zM15 6c-1.78-1.33-4.14-1.28-5.87-.07l6.95 6.95A5 5 0 0 0 15 6m4.79 10.59c.12-.17.21-.37.21-.59v-1.55c1.91-1.11 2.57-3.55 1.46-5.45a4 4 0 0 0-3.14-2c.45.94.68 1.96.68 3c0 1.57-.53 3.09-1.5 4.31zM10 19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h-4zm-3-1H5v1c0 .55.45 1 1 1h1.17c-.11-.32-.17-.66-.17-1z"></svg:path>`,
})
export class MdiLightbulbGroupOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbGroupOffOutlineIcon],svg[mdi-lightbulb-group-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L5.2 7.09C3.25 7.5 1.85 9.27 2 11.31c.12 1.31.86 2.48 2 3.14V16c0 .55.45 1 1 1h2v-2.12c-1.28-1.3-2-3.05-2-4.88c0-.89.18-1.77.5-2.6L7.12 9c-.38 1.84.28 3.8 1.88 5v2c0 .55.45 1 1 1h4c.31 0 .57-.14.75-.36L17 18.89V19c0 .34-.06.68-.17 1h1.26l2.75 2.73zM9.23 11.12l1.64 1.64c-.76-.3-1.34-.9-1.64-1.64M13 15h-2v-2.11l2 2zm-2.43-7.63L9.13 5.93C10.86 4.72 13.22 4.67 15 6c1.26.94 2 2.43 2 4c0 1.05-.33 2.05-.92 2.88l-1.45-1.45c.23-.43.37-.93.37-1.43c0-1.66-1.33-3-3-3c-.5 0-1 .14-1.43.37m6.93 6.94c.97-1.22 1.5-2.74 1.5-4.31c0-1.04-.23-2.06-.68-3c1.31.11 2.48.85 3.14 2c1.11 1.9.45 4.34-1.46 5.45V16c0 .22-.09.42-.21.59zM10 18h4v1c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1zm-3 1c0 .34.06.68.17 1H6c-.55 0-1-.45-1-1v-1h2z"></svg:path>`,
})
export class MdiLightbulbGroupOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbGroupOutlineIcon],svg[mdi-lightbulb-group-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19a2.9 2.9 0 0 0 .17 1H6a1 1 0 0 1-1-1v-1h2m3 1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h-4m-6-2a1 1 0 0 0 1 1h2v-2.12A6.92 6.92 0 0 1 5 10a6.8 6.8 0 0 1 .68-3A4 4 0 0 0 4 14.45M17 19a2.9 2.9 0 0 1-.17 1H18a1 1 0 0 0 1-1v-1h-2m0-8a5 5 0 0 1-2 4v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a5 5 0 1 1 8-4m-2 0a3 3 0 1 0-4 2.82V15h2v-2.18A3 3 0 0 0 15 10m3.32-3a6.8 6.8 0 0 1 .68 3a6.92 6.92 0 0 1-2 4.88V17h2a1 1 0 0 0 1-1v-1.55A4 4 0 0 0 18.32 7"></svg:path>`,
})
export class MdiLightbulbGroupOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbMultipleIcon],svg[mdi-lightbulb-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16v2c0 .55-.47 1-1 1h-4c-.58 0-1-.45-1-1v-2c-2.23-1.66-2.68-4.79-1-7s4.77-2.66 7-1s2.63 4.79 1 7c-.31.38-.65.72-1 1m-1 4h-4v1c0 .55.42 1 1 1h2c.53 0 1-.45 1-1m-8.34-6H7v1c0 .55.42 1 1 1h1v-.12c-.56-.55-1-1.18-1.34-1.88m5.92-10C12.46 2.47 9.5 1.33 7 2.45S3.31 6.5 4.43 9.04C4.77 9.81 5.3 10.5 6 11v2c0 .55.42 1 1 1h.28c-.21-.65-.31-1.32-.28-2c-.03-3.71 2.87-6.79 6.58-7"></svg:path>`,
})
export class MdiLightbulbMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbMultipleOffIcon],svg[mdi-lightbulb-multiple-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-4.1-4.1c-.19.22-.45.37-.74.37h-4c-.58 0-1-.45-1-1v-2a4.92 4.92 0 0 1-1.9-5L7.5 9.39c-.33.81-.53 1.69-.5 2.61c-.03.68.07 1.35.28 2H7c-.58 0-1-.45-1-1v-2c-.7-.5-1.23-1.19-1.57-1.96A5 5 0 0 1 4.12 6L1.11 3l1.28-1.27l19.72 19.73zM13.58 5C12.46 2.47 9.5 1.33 7 2.45c-.32.13-.61.3-.87.48l3.54 3.54A7 7 0 0 1 13.58 5m4.48 9.86C19.6 12.66 19.14 9.62 17 8a5.03 5.03 0 0 0-5.88-.08zM12 21c0 .55.42 1 1 1h2c.53 0 1-.45 1-1v-1h-4zm-5-6v1c0 .55.42 1 1 1h1v-.12c-.57-.55-1-1.18-1.34-1.88z"></svg:path>`,
})
export class MdiLightbulbMultipleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbMultipleOffOutlineIcon],svg[mdi-lightbulb-multiple-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l3.03 3.03C3.93 7 4 8.05 4.45 9.04c.34.77.88 1.46 1.55 1.96v2c0 .55.45 1 1 1h.3c-.2-.65-.3-1.32-.3-2c0-.92.19-1.79.5-2.59L9.11 11c-.06.33-.11.66-.11 1c0 1.57.74 3.06 2 4v2c0 .55.45 1 1 1h4c.31 0 .57-.14.75-.36l4.09 4.09zm-10.88-8.34l1.64 1.64c-.77-.32-1.34-.91-1.64-1.64M15 17h-2v-2.11l2 2zM9.69 6.5L6.14 2.94c.27-.19.56-.36.86-.5c2.53-1.11 5.5.03 6.6 2.56a6.87 6.87 0 0 0-3.91 1.5m1.43 1.42C11.94 7.35 12.93 7 14 7c1.57 0 3.06.74 4 2c1.33 1.78 1.28 4.14.07 5.87l-1.45-1.45q.12-.21.21-.42c.55-1.57-.27-3.28-1.83-3.84c-.84-.29-1.71-.19-2.43.21zM7.68 15c.32.7.78 1.33 1.32 1.88V17H8c-.55 0-1-.45-1-1v-1zM12 20h4v1c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1z"></svg:path>`,
})
export class MdiLightbulbMultipleOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbMultipleOutlineIcon],svg[mdi-lightbulb-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h-4m2-13a5.002 5.002 0 0 0-3 9v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2a4.997 4.997 0 0 0 1-7c-.94-1.26-2.43-2-4-2m1 7.82V17h-2v-2.18A3 3 0 0 1 11.17 11A3.003 3.003 0 0 1 15 9.16c1.56.56 2.38 2.27 1.83 3.84c-.3.85-.98 1.5-1.83 1.82M7.68 15H7v1c0 .55.45 1 1 1h1v-.12c-.54-.55-1-1.18-1.32-1.88M13.6 5C12.5 2.47 9.53 1.33 7 2.45S3.34 6.5 4.45 9.04c.34.77.88 1.46 1.55 1.96v2c0 .55.45 1 1 1h.3c-.2-.65-.3-1.32-.3-2c0-3.71 2.89-6.79 6.6-7"></svg:path>`,
})
export class MdiLightbulbMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbNightIcon],svg[mdi-lightbulb-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H6zm7-4.68V17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-2.26C3.19 13.47 2 11.38 2 9c0-3.87 3.13-7 7-7c1.65 0 3.16.57 4.35 1.5C10.8 4.57 9 7.07 9 10c0 2.79 1.64 5.19 4 6.32m7.92-6.38l-1.42-.91l-1.4.97l.4-1.65l-1.33-1.03l1.68-.11l.56-1.61l.63 1.58l1.68.04l-1.3 1.08zM19.39 13c-1.89 2.27-5.36 2.19-7.17-.05C10 10.13 11.56 6 15 5.34c.34-.05.64.29.5.63c-.45 1.28-.38 2.74.35 4a4.62 4.62 0 0 0 3.27 2.28c.35.05.5.49.27.75"></svg:path>`,
})
export class MdiLightbulbNightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbNightOutlineIcon],svg[mdi-lightbulb-night-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20h6v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1zm5-5.11V16H7v-2.42C5.23 12.81 4 11.05 4 9c0-2.76 2.24-5 5-5c.9 0 1.73.26 2.46.67c.54-.47 1.2-.86 1.89-1.17C12.16 2.57 10.65 2 9 2C5.13 2 2 5.13 2 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-.68c-.75-.36-1.43-.82-2-1.43m9.92-4.95l-.5-1.64l1.3-1.08l-1.68-.04l-.63-1.58l-.56 1.61l-1.68.11l1.33 1.03l-.4 1.65l1.4-.97zm-1.8 2.31a4.62 4.62 0 0 1-3.27-2.28c-.73-1.26-.8-2.72-.35-4c.14-.34-.16-.68-.5-.63c-3.44.66-5 4.79-2.78 7.61c1.81 2.24 5.28 2.32 7.17.05c.23-.26.08-.7-.27-.75"></svg:path>`,
})
export class MdiLightbulbNightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOffIcon],svg[mdi-lightbulb-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C9.76 2 7.78 3.05 6.5 4.68l9.81 9.82C17.94 13.21 19 11.24 19 9a7 7 0 0 0-7-7M3.28 4L2 5.27L5.04 8.3C5 8.53 5 8.76 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h5.73l4 4L20 20.72zM9 20v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1z"></svg:path>`,
})
export class MdiLightbulbOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOffOutlineIcon],svg[mdi-lightbulb-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C9.76 2 7.78 3.05 6.5 4.68l1.43 1.43C8.84 4.84 10.32 4 12 4a5 5 0 0 1 5 5c0 1.68-.84 3.16-2.11 4.06l1.42 1.44C17.94 13.21 19 11.24 19 9a7 7 0 0 0-7-7M3.28 4L2 5.27L5.04 8.3C5 8.53 5 8.76 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h5.73l4 4L20 20.72zm3.95 6.5l5.5 5.5H10v-2.42a5 5 0 0 1-2.77-3.08M9 20v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1z"></svg:path>`,
})
export class MdiLightbulbOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOnIcon],svg[mdi-lightbulb-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 0 1 6-6m2 15v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1zm6-10h3v2h-3zM1 11h3v2H1zM13 1v3h-2V1zM4.92 3.5l2.13 2.14l-1.42 1.41L3.5 4.93zm12.03 2.13l2.12-2.13l1.43 1.43l-2.13 2.12z"></svg:path>`,
})
export class MdiLightbulbOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOn10Icon],svg[mdi-lightbulb-on-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h3v2H1zm18.1-7.5L17 5.6L18.4 7l2.1-2.1zM11 1h2v3h-2zM4.9 3.5L3.5 4.9L5.6 7L7 5.6zM10 22c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4zm2-16c-3.3 0-6 2.7-6 6c0 2.2 1.2 4.2 3 5.2V19c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-1.8c1.8-1 3-3 3-5.2c0-3.3-2.7-6-6-6m1 9.9V17h-2v-1.1c-1.7-.4-3-2-3-3.9c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.9-1.3 3.4-3 3.9m7-4.9h3v2h-3z"></svg:path>`,
})
export class MdiLightbulbOn10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOn20Icon],svg[mdi-lightbulb-on-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h3v2H1zm3.9-7.5L3.5 4.9L5.6 7L7 5.6zM13 1h-2v3h2zm7 10v2h3v-2zM10 22c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4zm9.1-18.5L17 5.6L18.4 7l2.1-2.1zM18 12c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4"></svg:path>`,
})
export class MdiLightbulbOn20Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOn30Icon],svg[mdi-lightbulb-on-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5.6L5.6 7L3.5 4.9l1.4-1.4zM1 13h3v-2H1zM13 1h-2v3h2zm5 11c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 1.2.54 2.27 1.38 3h5.24c.84-.73 1.38-1.8 1.38-3m-6 10c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4zm10-11v2h3v-2zm-.9-7.5L17 5.6L18.4 7l2.1-2.1z"></svg:path>`,
})
export class MdiLightbulbOn30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOn40Icon],svg[mdi-lightbulb-on-40-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h3v2H1zM13 1h-2v3h2zM4.9 3.5L3.5 4.9L5.6 7L7 5.6zm14.2 0L17 5.6L18.4 7l2.1-2.1zM10 22c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4zm10-11v2h3v-2zm-2 1c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .74.22 1.41.57 2h6.86c.35-.59.57-1.26.57-2"></svg:path>`,
})
export class MdiLightbulbOn40Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOn50Icon],svg[mdi-lightbulb-on-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h3v2H1zm9 11c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4zm3-21h-2v3h2zM4.9 3.5L3.5 4.9L5.6 7L7 5.6zM20 11v2h3v-2zm-.9-7.5L17 5.6L18.4 7l2.1-2.1zM18 12c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6M8 12c0 .35.05.68.14 1h7.72c.09-.32.14-.65.14-1c0-2.21-1.79-4-4-4s-4 1.79-4 4"></svg:path>`,
})
export class MdiLightbulbOn50Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOn60Icon],svg[mdi-lightbulb-on-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21h4v1c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1zm-9-8h3v-2H1zm3.9-9.5L3.5 4.9L5.6 7L7 5.6zM13 1h-2v3h2zm7 10v2h3v-2zm-2 1c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6M8 12h8c0-2.21-1.79-4-4-4s-4 1.79-4 4m11.1-8.5L17 5.6L18.4 7l2.1-2.1z"></svg:path>`,
})
export class MdiLightbulbOn60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOn70Icon],svg[mdi-lightbulb-on-70-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5.6L5.6 7L3.5 4.9l1.4-1.4zM13 1h-2v3h2zM1 13h3v-2H1zm9 9c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4zm9.1-18.5L17 5.6L18.4 7l2.1-2.1zM18 12c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6m-9.86-1h7.72c-.45-1.72-2-3-3.86-3s-3.41 1.28-3.86 3M20 11v2h3v-2z"></svg:path>`,
})
export class MdiLightbulbOn70Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOn80Icon],svg[mdi-lightbulb-on-80-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5.6L5.6 7L3.5 4.9l1.4-1.4zM1 13h3v-2H1zM13 1h-2v3h2zm-3 21c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4zm10-11v2h3v-2zm-.9-7.5L17 5.6L18.4 7l2.1-2.1zM18 12c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6m-9.44-2h6.88C14.75 8.81 13.5 8 12 8s-2.75.81-3.44 2"></svg:path>`,
})
export class MdiLightbulbOn80Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOn90Icon],svg[mdi-lightbulb-on-90-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5.6L5.6 7L3.5 4.9l1.4-1.4zM10 22c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4zm-9-9h3v-2H1zM13 1h-2v3h2zm7 10v2h3v-2zm-.9-7.5L17 5.6L18.4 7l2.1-2.1zM18 12c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6m-6-4c-1 0-1.91.38-2.61 1h5.22C13.91 8.38 13 8 12 8"></svg:path>`,
})
export class MdiLightbulbOn90Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOnOutlineIcon],svg[mdi-lightbulb-on-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11h3v2h-3zM1 11h3v2H1zM13 1v3h-2V1zM4.92 3.5l2.13 2.14l-1.42 1.41L3.5 4.93zm12.03 2.13l2.12-2.13l1.43 1.43l-2.13 2.12zM12 6a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 0 1 6-6m2 15v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1zm-3-3h2v-2.13c1.73-.44 3-2.01 3-3.87a4 4 0 0 0-4-4a4 4 0 0 0-4 4c0 1.86 1.27 3.43 3 3.87z"></svg:path>`,
})
export class MdiLightbulbOnOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOutlineIcon],svg[mdi-lightbulb-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7M9 21v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m3-17a5 5 0 0 0-5 5c0 2.05 1.23 3.81 3 4.58V16h4v-2.42c1.77-.77 3-2.53 3-4.58a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiLightbulbOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbQuestionIcon],svg[mdi-lightbulb-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2C4.1 2 1 5.1 1 9c0 2.4 1.2 4.5 3 5.7V17c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2.3c1.8-1.3 3-3.4 3-5.7c0-3.9-3.1-7-7-7M5 21c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-1H5zm15.5-6.5V16H19v-1.5zm-2-5H17V9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1-.5 1.9-1.3 2.4l-.3.2c-.6.4-.9 1-.9 1.7v.2H19v-.2c0-1.2.6-2.3 1.6-2.9l.3-.2q.6-.45.6-1.2c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5z"></svg:path>`,
})
export class MdiLightbulbQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbQuestionOutlineIcon],svg[mdi-lightbulb-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2c3.9 0 7 3.1 7 7c0 2.4-1.2 4.5-3 5.7V17c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-2.3C2.2 13.5 1 11.4 1 9c0-3.9 3.1-7 7-7M5 21v-1h6v1c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1M8 4C5.2 4 3 6.2 3 9c0 2.1 1.2 3.8 3 4.6V16h4v-2.4c1.8-.8 3-2.5 3-4.6c0-2.8-2.2-5-5-5m12.5 10.5V16H19v-1.5zm-2-5H17V9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1-.5 1.9-1.3 2.4l-.3.2c-.6.4-.9 1-.9 1.7v.2H19v-.2c0-1.2.6-2.3 1.6-2.9l.3-.2q.6-.45.6-1.2c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5z"></svg:path>`,
})
export class MdiLightbulbQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbSpotIcon],svg[mdi-lightbulb-spot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19h2v3H9zm4 3h2v-3h-2zM2 2v2h20V2zm7 12v3h6v-3c2.5-1.43 5-3 5-8H4c0 5 2.5 6.57 5 8"></svg:path>`,
})
export class MdiLightbulbSpotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbSpotOffIcon],svg[mdi-lightbulb-spot-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L15.11 17H9v-3c-2.5-1.43-5-3-5-8v-.11L1.11 3l1.28-1.27l19.72 19.73zM22 4V2H5.2l2 2zm-2 2H9.2l7.17 7.17C18.33 11.87 20 10.07 20 6m-7 16h2v-3h-2zm-4 0h2v-3H9z"></svg:path>`,
})
export class MdiLightbulbSpotOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbVariantIcon],svg[mdi-lightbulb-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20h6v1c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1zM19 9c0 2.38-1.19 4.47-3 5.74V17c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.26C6.19 13.47 5 11.38 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7m-4.29-.71c-.39-.39-1.03-.39-1.42 0L12 9.59l-1.29-1.3c-.39-.39-1.03-.39-1.42 0s-.39 1.03 0 1.42l1.71 1.7V16h2v-4.59l1.71-1.7c.39-.39.39-1.03 0-1.42"></svg:path>`,
})
export class MdiLightbulbVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbVariantOutlineIcon],svg[mdi-lightbulb-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74c0-3.87-3.13-7-7-7m2 11.58V16h-1v-4.59l1.71-1.7c.39-.39.39-1.03 0-1.42s-1.03-.39-1.42 0L12 9.59l-1.29-1.3c-.39-.39-1.03-.39-1.42 0s-.39 1.03 0 1.42l1.71 1.7V16h-1v-2.42C8.23 12.81 7 11.05 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.05-1.23 3.81-3 4.58M9 20h6v1c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1z"></svg:path>`,
})
export class MdiLightbulbVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLighthouseIcon],svg[mdi-lighthouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10V8h1V4H8V3l4-2l4 2v1h-1v4h1v2h-1.26l-6.3 3.64L9 10zm5-2V4h-2v4zM7 23l.04-.24l9.11-5.26l.52 3.38L13 23zm1.05-6.83L15.31 12l.52 3.37l-8.4 4.85z"></svg:path>`,
})
export class MdiLighthouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLighthouseOnIcon],svg[mdi-lighthouse-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 10V2l9 3v2zm7 0V8h5V4H8V3l4-2l4 2v1h-1v4h1v2h-1.26l-6.3 3.64L9 10zM7 23l.04-.24l9.11-5.26l.52 3.38L13 23zm1.05-6.83L15.31 12l.52 3.37l-8.4 4.85z"></svg:path>`,
})
export class MdiLighthouseOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightningBoltIcon],svg[mdi-lightning-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15H6l7-14v8h5l-7 14z"></svg:path>`,
})
export class MdiLightningBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightningBoltCircleIcon],svg[mdi-lightning-bolt-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 20l4.86-9.73H13V4l-5 9.73h3.5zM12 2c2.75 0 5.1 1 7.05 2.95S22 9.25 22 12s-1 5.1-2.95 7.05S14.75 22 12 22s-5.1-1-7.05-2.95S2 14.75 2 12s1-5.1 2.95-7.05S9.25 2 12 2"></svg:path>`,
})
export class MdiLightningBoltCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLightningBoltOutlineIcon],svg[mdi-lightning-bolt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9.47V11h3.76L13 14.53V13H9.24zM13 1L6 15h5v8l7-14h-5z"></svg:path>`,
})
export class MdiLightningBoltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLineScanIcon],svg[mdi-line-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22v-2h3v-3h2v3.5c0 .4-.2.7-.5 1s-.7.5-1 .5zM7 22H3.5c-.4 0-.7-.2-1-.5s-.5-.7-.5-1V17h2v3h3zM17 2h3.5c.4 0 .7.2 1 .5s.5.6.5 1V7h-2V4h-3zM7 2v2H4v3H2V3.5c0-.4.2-.7.5-1s.6-.5 1-.5zm12 9H5v2h14z"></svg:path>`,
})
export class MdiLineScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLingerieIcon],svg[mdi-lingerie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7h-2V2h-2v2.34l-6 2.57l-6-2.57V2H4v5H2v2h2.05c.25 2.25 2.14 4 4.45 4c1.42 0 2.68-.67 3.5-1.7c.83 1.03 2.08 1.7 3.5 1.7c2.31 0 4.2-1.75 4.45-4H22zM8.5 11A2.5 2.5 0 0 1 6 8.5v-2l5 2.15C10.9 9.96 9.83 11 8.5 11M18 8.5a2.5 2.5 0 0 1-2.5 2.5c-1.33 0-2.4-1.04-2.5-2.35l5-2.15zM2 15v2h1c2.97 0 5.43 2.17 5.91 5h6.18c.48-2.83 2.94-5 5.91-5h1v-2zm11.59 5h-3.18a8.1 8.1 0 0 0-2.12-3h7.42c-.92.82-1.65 1.84-2.12 3"></svg:path>`,
})
export class MdiLingerieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkIcon],svg[mdi-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkBoxIcon],svg[mdi-link-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8 13h-1c-1.61 0-4-1.06-4-4c0-2.93 2.39-4 4-4h1v2h-1c-.46 0-2 .17-2 2c0 1.9 1.67 2 2 2h1zm4-5v2H9v-2zm-1 5h-1v-2h1c.46 0 2-.17 2-2c0-1.9-1.67-2-2-2h-1V8h1c1.61 0 4 1.07 4 4c0 2.94-2.39 4-4 4"></svg:path>`,
})
export class MdiLinkBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkBoxOutlineIcon],svg[mdi-link-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zm-8-3h-1c-1.61 0-4-1.06-4-4c0-2.93 2.39-4 4-4h1v2h-1c-.46 0-2 .17-2 2c0 1.9 1.67 2 2 2h1zm3 0h-1v-2h1c.46 0 2-.17 2-2c0-1.9-1.67-2-2-2h-1V8h1c1.61 0 4 1.07 4 4c0 2.94-2.39 4-4 4m1-3H9v-2h6z"></svg:path>`,
})
export class MdiLinkBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkBoxVariantIcon],svg[mdi-link-box-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5.06 11.81L11.73 17c-.65.67-1.51 1-2.37 1S7.64 17.67 7 17c-1.33-1.29-1.33-3.42 0-4.74l1.35-1.36l-.01.6c-.01.5.07 1 .23 1.44l.05.15l-.4.41a1.597 1.597 0 0 0 0 2.28c.61.62 1.67.62 2.28 0l2.2-2.19c.3-.31.48-.72.48-1.15c0-.44-.18-.83-.48-1.14a.87.87 0 0 1 0-1.24c.33-.33.91-.32 1.24 0c.63.64.98 1.48.98 2.38s-.35 1.74-.98 2.37M17 11.74l-1.34 1.36v-.6c.01-.5-.07-1-.23-1.44l-.05-.14l.4-.42a1.597 1.597 0 0 0 0-2.28c-.61-.62-1.68-.61-2.28 0l-2.2 2.2c-.3.3-.48.71-.48 1.14c0 .44.18.83.48 1.14c.17.16.26.38.26.62s-.09.46-.26.62a.86.86 0 0 1-.62.25c-.22 0-.45-.08-.62-.25a3.36 3.36 0 0 1 0-4.75L12.27 7A3.31 3.31 0 0 1 17 7c.65.62 1 1.46 1 2.36s-.35 1.74-1 2.38"></svg:path>`,
})
export class MdiLinkBoxVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkBoxVariantOutlineIcon],svg[mdi-link-box-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zm-5.06-8.94c.63.64.98 1.48.98 2.38s-.35 1.74-.98 2.37L11.73 17c-.65.67-1.51 1-2.37 1S7.64 17.67 7 17c-1.33-1.29-1.33-3.42 0-4.74l1.35-1.36l-.01.6c-.01.5.07 1 .23 1.44l.05.15l-.4.41a1.597 1.597 0 0 0 0 2.28c.61.62 1.67.62 2.28 0l2.2-2.19c.3-.31.48-.72.48-1.15c0-.44-.18-.83-.48-1.14a.87.87 0 0 1 0-1.24c.33-.33.91-.32 1.24 0m4.06-.7c0 .9-.35 1.74-1 2.38l-1.34 1.36v-.6c.01-.5-.07-1-.23-1.44l-.05-.14l.4-.42a1.597 1.597 0 0 0 0-2.28c-.61-.62-1.68-.61-2.28 0l-2.2 2.2c-.3.3-.48.71-.48 1.14c0 .44.18.83.48 1.14c.17.16.26.38.26.62s-.09.46-.26.62a.86.86 0 0 1-.62.25c-.22 0-.45-.08-.62-.25a3.36 3.36 0 0 1 0-4.75L12.27 7A3.31 3.31 0 0 1 17 7c.65.62 1 1.46 1 2.36"></svg:path>`,
})
export class MdiLinkBoxVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkCircleIcon],svg[mdi-link-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.17 2.76A10.1 10.1 0 0 1 12 2c1.31 0 2.61.26 3.83.76c1.21.5 2.31 1.24 3.24 2.17s1.67 2.03 2.17 3.24c.5 1.22.76 2.52.76 3.83c0 2.65-1.05 5.2-2.93 7.07A9.97 9.97 0 0 1 12 22a10.1 10.1 0 0 1-3.83-.76a10 10 0 0 1-3.24-2.17A9.97 9.97 0 0 1 2 12c0-2.65 1.05-5.2 2.93-7.07c.93-.93 2.03-1.67 3.24-2.17M10 16h1v-2h-1c-.33 0-2-.1-2-2c0-1.83 1.54-2 2-2h1V8h-1c-1.61 0-4 1.07-4 4c0 2.94 2.39 4 4 4m3 0h1c1.61 0 4-1.06 4-4c0-2.93-2.39-4-4-4h-1v2h1c.33 0 2 .1 2 2c0 1.83-1.54 2-2 2h-1zm-4-3h6v-2H9z"></svg:path>`,
})
export class MdiLinkCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkCircleOutlineIcon],svg[mdi-link-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16h1v-2h-1c-.33 0-2-.1-2-2c0-1.83 1.54-2 2-2h1V8h-1c-1.61 0-4 1.07-4 4c0 2.94 2.39 4 4 4m3 0h1c1.61 0 4-1.06 4-4c0-2.93-2.39-4-4-4h-1v2h1c.33 0 2 .1 2 2c0 1.83-1.54 2-2 2h-1zm-4-3h6v-2H9zM8.17 2.76A10.1 10.1 0 0 1 12 2c1.31 0 2.61.26 3.83.76c1.21.5 2.31 1.24 3.24 2.17s1.67 2.03 2.17 3.24c.5 1.22.76 2.52.76 3.83c0 2.65-1.05 5.2-2.93 7.07A9.97 9.97 0 0 1 12 22a10.1 10.1 0 0 1-3.83-.76a10 10 0 0 1-3.24-2.17A9.97 9.97 0 0 1 2 12c0-2.65 1.05-5.2 2.93-7.07c.93-.93 2.03-1.67 3.24-2.17m-1.83 14.9C7.84 19.16 9.88 20 12 20s4.16-.84 5.66-2.34S20 14.12 20 12s-.84-4.16-2.34-5.66A8 8 0 0 0 12 4c-2.12 0-4.16.84-5.66 2.34A8 8 0 0 0 4 12c0 2.12.84 4.16 2.34 5.66"></svg:path>`,
})
export class MdiLinkCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkEditIcon],svg[mdi-link-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 22v-2.04l6.13-6.13l2.04 2.05L15.04 22zm8.53-9.85l1.32 1.32c.2.2.2.53 0 .72l-.98.98l-2.04-2.04l.98-.98c.19-.2.52-.2.72 0m-.99-3.69c.19.19.36.4.52.62l-1.38 1.37C19.15 9.5 18.15 8.9 17 8.9h-4V7h4c1.33 0 2.6.53 3.54 1.46M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-1.33 0-2.6.53-3.54 1.46C2.53 9.4 2 10.67 2 12s.53 2.6 1.46 3.54C4.4 16.47 5.67 17 7 17h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8z"></svg:path>`,
})
export class MdiLinkEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkLockIcon],svg[mdi-link-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 16v-.5a2.5 2.5 0 0 0-5 0v.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-1 0h-3v-.5a1.5 1.5 0 0 1 3 0M7 8.9h4V7H7a5 5 0 0 0 0 10h4v-1.9H7a3.1 3.1 0 0 1 0-6.2M8 11v2h8v-2m-3 4.1V17h2v-1.9M17 7h-4v1.9h4a3.09 3.09 0 0 1 2.94 2.1a5 5 0 0 1 .56 0h1.4A5 5 0 0 0 17 7"></svg:path>`,
})
export class MdiLinkLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkOffIcon],svg[mdi-link-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.43-.98 2.63-2.31 3l1.46 1.44C20.88 15.61 22 13.95 22 12a5 5 0 0 0-5-5m-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11A4.99 4.99 0 0 0 2 12a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1c0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74L3.27 3z"></svg:path>`,
})
export class MdiLinkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkPlusIcon],svg[mdi-link-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h4v2H7a3 3 0 0 0-3 3a3 3 0 0 0 3 3h4v2H7a5 5 0 0 1-5-5a5 5 0 0 1 5-5m10 0a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3h-4V7zm-9 4h8v2H8zm9 1h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></svg:path>`,
})
export class MdiLinkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkVariantIcon],svg[mdi-link-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.98 2.98 0 0 0 0-4.24a2.98 2.98 0 0 0-4.24 0l-3.53 3.53a2.98 2.98 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.98 2.98 0 0 0 0 4.24a2.98 2.98 0 0 0 4.24 0l3.53-3.53a2.98 2.98 0 0 0 0-4.24a.973.973 0 0 1 0-1.42"></svg:path>`,
})
export class MdiLinkVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkVariantMinusIcon],svg[mdi-link-variant-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.6 13.4a1 1 0 0 1-1.4 1.4a4.8 4.8 0 0 1 0-7l3.5-3.6a5.1 5.1 0 0 1 7.1 0a5.1 5.1 0 0 1 0 7.1l-1.5 1.5a6.4 6.4 0 0 0-.4-2.4l.5-.5a3.2 3.2 0 0 0 0-4.3a3.2 3.2 0 0 0-4.3 0l-3.5 3.6a2.9 2.9 0 0 0 0 4.2M23 18v2h-8v-2m1.2-4.3a4.8 4.8 0 0 0-1.4-4.5a1 1 0 0 0-1.4 1.4a2.9 2.9 0 0 1 0 4.2l-3.5 3.6a3.2 3.2 0 0 1-4.3 0a3.2 3.2 0 0 1 0-4.3l.5-.4a7.3 7.3 0 0 1-.4-2.5l-1.5 1.5a5.1 5.1 0 0 0 0 7.1a5.1 5.1 0 0 0 7.1 0l1.8-1.8a6 6 0 0 1 3.1-4.3"></svg:path>`,
})
export class MdiLinkVariantMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkVariantOffIcon],svg[mdi-link-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-4.83-4.83l-2.61 2.61a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.98 2.98 0 0 0 0 4.24a2.98 2.98 0 0 0 4.24 0l2.62-2.6l-1.62-1.61c-.01.24-.11.49-.29.68c-.39.39-1.03.39-1.42 0A4.97 4.97 0 0 1 7.72 11zm10.71-1.05a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.98 2.98 0 0 0 0-4.24a2.98 2.98 0 0 0-4.24 0l-3.33 3.33l-1.41-1.42zm.7 4.95c.39-.39 1.03-.39 1.42 0a5 5 0 0 1 1.23 5.06l-1.78-1.77c-.05-.68-.34-1.35-.87-1.87a.973.973 0 0 1 0-1.42"></svg:path>`,
})
export class MdiLinkVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkVariantPlusIcon],svg[mdi-link-variant-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.6 13.4a1 1 0 0 1-1.4 1.4a4.8 4.8 0 0 1 0-7l3.5-3.6a5.1 5.1 0 0 1 7.1 0a5.1 5.1 0 0 1 0 7.1l-1.5 1.5a6.4 6.4 0 0 0-.4-2.4l.5-.5a3.2 3.2 0 0 0 0-4.3a3.2 3.2 0 0 0-4.3 0l-3.5 3.6a2.9 2.9 0 0 0 0 4.2M23 18v2h-3v3h-2v-3h-3v-2h3v-3h2v3m-3.8-4.3a4.8 4.8 0 0 0-1.4-4.5a1 1 0 0 0-1.4 1.4a2.9 2.9 0 0 1 0 4.2l-3.5 3.6a3.2 3.2 0 0 1-4.3 0a3.2 3.2 0 0 1 0-4.3l.5-.4a7.3 7.3 0 0 1-.4-2.5l-1.5 1.5a5.1 5.1 0 0 0 0 7.1a5.1 5.1 0 0 0 7.1 0l1.8-1.8a6 6 0 0 1 3.1-4.3"></svg:path>`,
})
export class MdiLinkVariantPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkVariantRemoveIcon],svg[mdi-link-variant-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.6 13.4a1 1 0 0 1-1.4 1.4a4.8 4.8 0 0 1 0-7l3.5-3.6a5.1 5.1 0 0 1 7.1 0a5.1 5.1 0 0 1 0 7.1l-1.5 1.5a6.4 6.4 0 0 0-.4-2.4l.5-.5a3.2 3.2 0 0 0 0-4.3a3.2 3.2 0 0 0-4.3 0l-3.5 3.6a2.9 2.9 0 0 0 0 4.2m5.6.3a4.8 4.8 0 0 0-1.4-4.5a1 1 0 0 0-1.4 1.4a2.9 2.9 0 0 1 0 4.2l-3.5 3.6a3.2 3.2 0 0 1-4.3 0a3.2 3.2 0 0 1 0-4.3l.5-.4a7.3 7.3 0 0 1-.4-2.5l-1.5 1.5a5.1 5.1 0 0 0 0 7.1a5.1 5.1 0 0 0 7.1 0l1.8-1.8a6 6 0 0 1 3.1-4.3m4.9 1.8L19 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1Z"></svg:path>`,
})
export class MdiLinkVariantRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinkedinIcon],svg[mdi-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></svg:path>`,
})
export class MdiLinkedinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinodeIcon],svg[mdi-linode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7.11 19.125l2.257 2.396l-.386-2.638l-2.411-2.371l.54 2.613zM9.542 22l-.022-.002l-.022-.006l-.017-.009l-.026-.02l-2.541-2.698a.12.12 0 0 1-.03-.058l-.628-3.034l-.002-.038a.12.12 0 0 1 .057-.088l.674-.413l-1.018-.959a.12.12 0 0 1-.035-.063l-.81-3.917l-.002-.04a.12.12 0 0 1 .057-.087l.01-.006l1.058-.503l-1.463-1.14a.12.12 0 0 1-.044-.07L3.66 3.643l-.001-.04l.006-.026a.12.12 0 0 1 .044-.056l.033-.017L8.571 2a.12.12 0 0 1 .088.007L12.2 3.715l.014.008a.12.12 0 0 1 .054.095l.22 5.163a.12.12 0 0 1-.064.112l-1.314.684l1.404.943l.007.005a.12.12 0 0 1 .046.097l.058 1.364l1.35-.825a.12.12 0 0 1 .128.002l.938.62l.025-1.224a.12.12 0 0 1 .057-.1l2.305-1.41a.12.12 0 0 1 .121-.002l2.731 1.513l.004.003a.12.12 0 0 1 .058.095v.023l-.38 2.806a.121.121 0 0 1-.044.077l-2.137 1.704a.118.118 0 0 1-.077.026a.124.124 0 0 1-.072-.026l-.791-.55l-.08 1.31a.12.12 0 0 1-.045.087L14.1 18.4l-.028.02a.119.119 0 0 1-.103-.001l-.026-.017l-1.091-.919l.076 1.788a.12.12 0 0 1-.045.1l-3.268 2.603l-.023.014a.116.116 0 0 1-.052.012zm7.344-8.8a.122.122 0 0 1 .054.098v.01l-.081 1.33l.747.519l.225-2.607l-2.529-1.575l-.023 1.164l1.607 1.061zm-3.008 2.179l-1.153-.88l.009.206a.119.119 0 0 1-.053.104l-.87.586l.946.772l.027.031a.12.12 0 0 1 .017.057l.039.903l1.06.893l-.022-2.672zm-7.719-.852l2.535 2.387l-.535-3.654l-2.734-2.277l.734 3.544zm-1.195-5.77l2.863 2.231l-.76-5.182l-3.115-1.938l1.012 4.889zm13.108 3.796l-.221 2.553l1.88-1.5l.336-2.482l-1.995 1.429zm-3.932 5.51l2.386-1.902l.159-2.617l-2.567 1.836l.022 2.683zm-1.452 1.158l-.117-2.735l-3.347 2.395l.407 2.775l3.057-2.435zM7.31 5.81l.772 5.271l4.164-2.167l-.21-4.92L7.31 5.811zm1.09 7.45l.552 3.77l3.538-2.383l-.154-3.627L8.4 13.26z" fill="currentColor"></svg:path>`,
})
export class MdiLinodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinuxIcon],svg[mdi-linux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19c-.39.31-.75.29-1.14-.01c-.2-.16-1.53-.92-1.95-1.19c-.48-.31-.45-.7.08-.92c1.64-.69 3.28-.64 4.91.03c.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.3 4.3 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01c-.2-.88-.29-1.78-.7-2.61c-.73-1.58-2-2.4-3.84-2.47c-1.81.05-3.16.81-3.95 2.4c-.21.43-.36.88-.46 1.34c-.17.76-.32 1.55-.5 2.32c-.15.65-.45 1.21-.96 1.71c-1.61 1.57-2.9 3.37-3.88 5.35c-.14.29-.28.58-.37.88c-.19.66.29 1.12.99.96c.44-.09.88-.18 1.3-.31c.41-.15.57-.05.67.35c.65 2.15 2.07 3.66 4.24 4.5c4.12 1.56 8.93-.66 9.97-4.58c.07-.27.17-.37.47-.27c.46.14.93.24 1.4.35c.49.09.85-.16.92-.64c.03-.26-.06-.49-.16-.73"></svg:path>`,
})
export class MdiLinuxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLinuxMintIcon],svg[mdi-linux-mint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.23V6.8h1.5c1.09 0 1.28.73 1.28 1.75v6.31c0 3.26 2.87 5.91 6.4 5.91h8.72c1.1 0 2.1-.7 2.1-1.77V9.2c0-3.27-2.87-5.92-6.4-5.92h-3.67v-.01zm4.62 2.23h1.75v8.99c0 1.2.82 2.14 1.79 2.14l5.97.02c1.25 0 2.22-.86 2.22-1.88l-.01-4.77c0-.31-.1-.55-.34-.77a.94.94 0 0 0-.75-.33c-.31 0-.54.1-.75.33c-.23.22-.34.46-.34.77v4.09h-1.85V9.96c0-.31-.1-.55-.31-.77c-.23-.23-.46-.33-.78-.33c-.3 0-.54.1-.76.33c-.22.22-.32.46-.32.77v4.09h-1.85V9.96c0-.81.29-1.52.86-2.1c.57-.57 1.28-.86 2.07-.86c.78 0 1.46.28 2.02.82c.55-.54 1.23-.82 2.01-.82c.8 0 1.51.29 2.07.86c.57.58.87 1.29.87 2.1l.01 5.1c-.09.85-.45 1.61-1.07 2.25c-.73.73-1.63 1.11-2.63 1.11H9.83c-.83-.08-1.54-.47-2.14-1.06c-.69-.71-1.07-1.57-1.07-2.57z"></svg:path>`,
})
export class MdiLinuxMintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLipstickIcon],svg[mdi-lipstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 23c-.55 0-1-.45-1-1v-9c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1zm1-12c-.55 0-1-.45-1-1V5.25S11 3 11.75 1c1.08.67 2.17 1.33 2.71 2.83S15 7.67 15 10c0 .55-.45 1-1 1z"></svg:path>`,
})
export class MdiLipstickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLiquidSpotIcon],svg[mdi-liquid-spot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.14 16.7c-.91 1.51-2.06 1.03-3.14.39s-2.1-1.41-2.75-.5c-.71.78-.16 2.03.12 3.13c.28 1.11.3 2.07-1.47 2.28c-1.4-.19-1.32-1.35-1.09-2.58s.59-2.53-.31-2.99c-.72-.48-1.22.35-1.85 1.17c-.65.81-1.39 1.6-2.61 1.02c-1.1-.91-.68-1.44-.1-2.12s1.33-1.59.9-3.19c-.18-.65-1.08-.5-1.97-.52c-.87-.02-1.75-.2-1.84-1.5c-.07-.79.52-1.11 1.13-1.36c.62-.25 1.25-.43 1.26-1.06c.03-.61-.38-1.04-.64-1.49s-.37-.92.25-1.62c1.05-.86 1.89-.13 2.73.66s1.67 1.62 2.7.97c.82-.54.07-1.49-.51-2.42s-.99-1.82.51-2.23c1.3-.36 1.8.53 2.25 1.56c.46 1.03.86 2.2 1.96 2.41c1.57.29 2.71-1.55 3.8-3.01s2.16-2.55 3.53-.75c1.5 1.89.07 2.77-1.6 3.55c-1.67.73-3.59 1.37-3.13 2.78c.27.82 1.15.37 2.08.06c.92-.31 1.91-.48 2.39.93c.51 1.49-.7 1.83-2.06 1.97s-2.88.08-2.98.76c-.11.71.8 1 1.59 1.42c.79.43 1.46 1 .85 2.28M20.5 19c-.95 0-1.44-.74-1.44-1.5s.48-1.5 1.44-1.5c1 0 1.5.74 1.5 1.5s-.5 1.5-1.5 1.5"></svg:path>`,
})
export class MdiLiquidSpotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLiquorIcon],svg[mdi-liquor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14c0 1.3.8 2.4 2 2.8V20H3v2h6v-2H7v-3.2c1.2-.4 2-1.5 2-2.8V6H3zm2-6h2v3H5zm15.6.5l-1-.3c-.3-.1-.6-.5-.6-.9V3c0-.5-.5-1-1-1h-3c-.6 0-1 .5-1 1v4.3c0 .4-.3.8-.7 1l-.9.3c-.8.3-1.4 1-1.4 1.9V20c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-9.6c0-.8-.5-1.6-1.4-1.9M16 4h1v1h-1zm-3 6.4l.9-.3c1.3-.4 2.1-1.5 2.1-2.8V7h1v.3c0 1.3.8 2.4 2 2.8l1 .3V12h-7zm7 9.6h-7v-2h7z"></svg:path>`,
})
export class MdiLiquorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiListBoxIcon],svg[mdi-list-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zm10 2h-6v-2h6zm0-4h-6v-2h6zm0-4h-6V7h6z"></svg:path>`,
})
export class MdiListBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiListBoxOutlineIcon],svg[mdi-list-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h6v2h-6zM9 7H7v2h2zm2 6h6v-2h-6zm0-4h6V7h-6zm-2 2H7v2h2zm12-6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-2 0H5v14h14zM9 15H7v2h2z"></svg:path>`,
})
export class MdiListBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiListStatusIcon],svg[mdi-list-status-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11L13 7.5l1.4-1.4l2.1 2.1L20.7 4l1.4 1.4zM11 7H2v2h9zm10 6.4L19.6 12L17 14.6L14.4 12L13 13.4l2.6 2.6l-2.6 2.6l1.4 1.4l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6zM11 15H2v2h9z"></svg:path>`,
})
export class MdiListStatusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLitecoinIcon],svg[mdi-litecoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.55 15.92l.61-2.14l1.65-.59l1.44-5.56l-1.69.68L16.25 2H8l-2.62 9.77l-1.66.57l-1.5 5.57L4 17.27L2.66 22h17.5l1.62-6.08zM19.39 21H4l1.46-5.35l-1.74.65l.86-3.19l1.66-.57L8.74 3H15l-1.87 7l1.7-.7l-.83 3.12l-1.67.58l-1.11 3.91h9.28z"></svg:path>`,
})
export class MdiLitecoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLoadingIcon],svg[mdi-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8"></svg:path>`,
})
export class MdiLoadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLocationEnterIcon],svg[mdi-location-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 12l-4-4v3H2v2h8v3m12-4a10 10 0 0 1-19.54 3h2.13a8 8 0 1 0 0-6H2.46A10 10 0 0 1 22 12"></svg:path>`,
})
export class MdiLocationEnterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLocationExitIcon],svg[mdi-location-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 12l-4-4v3h-8v2h8v3m2 2a10 10 0 1 1 0-12h-2.73a8 8 0 1 0 0 12Z"></svg:path>`,
})
export class MdiLocationExitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockIcon],svg[mdi-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockAlertIcon],svg[mdi-lock-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m6-9c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h1V6c0-2.8 2.2-5 5-5s5 2.2 5 5v2zm-6-5C8.3 3 7 4.3 7 6v2h6V6c0-1.7-1.3-3-3-3m12 10h-2V7h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiLockAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockAlertOutlineIcon],svg[mdi-lock-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m6 3V10H4v10zm0-12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h1V6c0-2.8 2.2-5 5-5s5 2.2 5 5v2zm-6-5C8.3 3 7 4.3 7 6v2h6V6c0-1.7-1.3-3-3-3m12 4h-2v6h2zm0 8h-2v2h2z"></svg:path>`,
})
export class MdiLockAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockCheckIcon],svg[mdi-lock-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6a2 2 0 0 0-2 2v10c0 1.11.89 2 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm3 11a2 2 0 1 1 2-2c0 1.11-.89 2-2 2m10.5.25L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiLockCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockCheckOutlineIcon],svg[mdi-lock-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15c0 1.11-.89 2-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2m-.91 5c.12.72.37 1.39.72 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6c0-2.76 2.24-5 5-5s5 2.24 5 5v2h1a2 2 0 0 1 2 2v3.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V10H6v10zM9 8h6V6c0-1.66-1.34-3-3-3S9 4.34 9 6zm12.34 7.84l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiLockCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockClockIcon],svg[mdi-lock-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2C6 2 4 4 4 6.5V7c-1.11 0-2 .89-2 2v9c0 1.11.89 2 2 2h4.72c1.46 1.29 3.34 2 5.28 2a8 8 0 0 0 8-8a8 8 0 0 0-8-8c-.34 0-.68.03-1 .08C12.76 3.77 10.82 2 8.5 2m0 2A2.5 2.5 0 0 1 11 6.5V7H6v-.5A2.5 2.5 0 0 1 8.5 4M14 8a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6a6 6 0 0 1 6-6m-1 2v5l3.64 2.19l.78-1.29l-2.92-1.75V10z"></svg:path>`,
})
export class MdiLockClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockMinusIcon],svg[mdi-lock-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6a2 2 0 0 0-2 2v10c0 1.11.89 2 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm3 11a2 2 0 1 1 2-2c0 1.11-.89 2-2 2m11 1v2h-8v-2z"></svg:path>`,
})
export class MdiLockMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockMinusOutlineIcon],svg[mdi-lock-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15c0 1.11-.89 2-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2m-.91 5c.12.72.37 1.39.72 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6c0-2.76 2.24-5 5-5s5 2.24 5 5v2h1a2 2 0 0 1 2 2v3.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V10H6v10zM9 8h6V6c0-1.66-1.34-3-3-3S9 4.34 9 6zm6 10v2h8v-2z"></svg:path>`,
})
export class MdiLockMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOffIcon],svg[mdi-lock-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5.82L7.36 4.16A4.99 4.99 0 0 1 12 1c2.76 0 5 2.24 5 5v2h1a2 2 0 0 1 2 2v6.8L11.2 8H15V6c0-1.66-1.34-3-3-3c-1.59 0-2.89 1.25-3 2.82m13.11 15.64l-1.27 1.27l-1.38-1.38c-.36.4-.88.65-1.46.65H6c-1.11 0-2-.89-2-2V10a2 2 0 0 1 2-2h.11l-5-5l1.28-1.27zm-8.26-5.72l-2.59-2.59C10.5 13.44 10 14.16 10 15a2 2 0 0 0 2 2c.84 0 1.56-.5 1.85-1.26"></svg:path>`,
})
export class MdiLockOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOffOutlineIcon],svg[mdi-lock-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5.82L7.36 4.16A4.99 4.99 0 0 1 12 1c2.76 0 5 2.24 5 5v2h1a2 2 0 0 1 2 2v6.8l-2-2V10h-4.8l-2-2H15V6c0-1.66-1.34-3-3-3c-1.59 0-2.89 1.25-3 2.82m13.11 15.64l-1.27 1.27l-1.38-1.38c-.36.4-.88.65-1.46.65H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h.11l-5-5l1.28-1.27zM18 19.89l-4.15-4.15C13.56 16.5 12.84 17 12 17a2 2 0 0 1-2-2c0-.85.5-1.56 1.26-1.85L8.11 10H6v10h12z"></svg:path>`,
})
export class MdiLockOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenIcon],svg[mdi-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h9V6a3 3 0 0 0-3-3a3 3 0 0 0-3 3H7a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6 9a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2"></svg:path>`,
})
export class MdiLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenAlertIcon],svg[mdi-lock-open-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h9V6c0-1.7-1.3-3-3-3S7 4.3 7 6H5c0-2.8 2.2-5 5-5s5 2.2 5 5v2zm-6 9c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m12-4h-2V7h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiLockOpenAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenAlertOutlineIcon],svg[mdi-lock-open-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20V10H4v10zm0-12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h9V6c0-1.7-1.3-3-3-3S7 4.3 7 6H5c0-2.8 2.2-5 5-5s5 2.2 5 5v2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M22 7h-2v6h2zm0 8h-2v2h2z"></svg:path>`,
})
export class MdiLockOpenAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenCheckIcon],svg[mdi-lock-open-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6m-7 4c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m10.5.25L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiLockOpenCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenCheckOutlineIcon],svg[mdi-lock-open-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2m-8 5V10h12v3.09c.33-.05.66-.09 1-.09s.67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.81c-.35-.61-.59-1.28-.72-2zm15.34-4.16l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiLockOpenCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenMinusIcon],svg[mdi-lock-open-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6m-7 4c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m11 1v2h-8v-2z"></svg:path>`,
})
export class MdiLockOpenMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenMinusOutlineIcon],svg[mdi-lock-open-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2m-8 5V10h12v3.09c.33-.05.66-.09 1-.09s.67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.81c-.35-.61-.59-1.28-.72-2zm9-2v2h8v-2z"></svg:path>`,
})
export class MdiLockOpenMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenOutlineIcon],svg[mdi-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h9V6a3 3 0 0 0-3-3a3 3 0 0 0-3 3H7a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6 9a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiLockOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenPlusIcon],svg[mdi-lock-open-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6m-7 4c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m11 1v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></svg:path>`,
})
export class MdiLockOpenPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenPlusOutlineIcon],svg[mdi-lock-open-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2m-8 5V10h12v3.09c.33-.05.66-.09 1-.09s.67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.81c-.35-.61-.59-1.28-.72-2zm14-2v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiLockOpenPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenRemoveIcon],svg[mdi-lock-open-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6m-7 4c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m8.41 2l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41z"></svg:path>`,
})
export class MdiLockOpenRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenRemoveOutlineIcon],svg[mdi-lock-open-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2m-8 5V10h12v3.09c.33-.05.66-.09 1-.09s.67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.81c-.35-.61-.59-1.28-.72-2zm16.54-3.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiLockOpenRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenVariantIcon],svg[mdi-lock-open-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 1c-2.76 0-5 2.24-5 5v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V10a2 2 0 0 0-2-2h-1V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2h2V6c0-2.76-2.24-5-5-5m-8 12a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 1 1 0-4"></svg:path>`,
})
export class MdiLockOpenVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOpenVariantOutlineIcon],svg[mdi-lock-open-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13a2 2 0 0 1 2 2c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2m8-12c-2.76 0-5 2.24-5 5v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2h-1V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2h2V6c0-2.76-2.24-5-5-5m-2 9v10H4V10z"></svg:path>`,
})
export class MdiLockOpenVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockOutlineIcon],svg[mdi-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockPatternIcon],svg[mdi-lock-pattern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3a4 4 0 0 1 4 4c0 1.86-1.27 3.43-3 3.87v2.26c.37.09.72.24 1.04.43l4.52-4.52C13.2 8.44 13 7.75 13 7a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4c-.74 0-1.43-.2-2-.55L10.45 15c.35.57.55 1.26.55 2a4 4 0 0 1-4 4a4 4 0 0 1-4-4c0-1.86 1.27-3.43 3-3.87v-2.26C4.27 10.43 3 8.86 3 7a4 4 0 0 1 4-4m10 10a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiLockPatternIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockPercentIcon],svg[mdi-lock-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9zm.5 5c.8 0 1.5.7 1.5 1.5S10.3 14 9.5 14S8 13.3 8 12.5S8.7 11 9.5 11m5 8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m-5.3.2l-1.4-1.4l7.1-7.1l1.4 1.4z"></svg:path>`,
})
export class MdiLockPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockPercentOpenIcon],svg[mdi-lock-percent-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6h2c0-1.7 1.3-3 3-3s3 1.3 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-8.5 3c.8 0 1.5.7 1.5 1.5S10.3 14 9.5 14S8 13.3 8 12.5S8.7 11 9.5 11m5 8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m-5.3.2l-1.4-1.4l7.1-7.1l1.4 1.4z"></svg:path>`,
})
export class MdiLockPercentOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockPercentOpenOutlineIcon],svg[mdi-lock-percent-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 11c.8 0 1.5.7 1.5 1.5S10.3 14 9.5 14S8 13.3 8 12.5S8.7 11 9.5 11m5 8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m-5.3.2l-1.4-1.4l7.1-7.1l1.4 1.4zM18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6h2c0-1.7 1.3-3 3-3s3 1.3 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 12H6V10h12z"></svg:path>`,
})
export class MdiLockPercentOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockPercentOpenVariantIcon],svg[mdi-lock-percent-open-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 1c-2.8 0-5 2.2-5 5v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2h-1V6c0-1.7 1.3-3 3-3s3 1.3 3 3v2h2V6c0-2.8-2.2-5-5-5M7.5 11c.8 0 1.5.7 1.5 1.5S8.3 14 7.5 14S6 13.3 6 12.5S6.7 11 7.5 11m5 8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m-5.3.2l-1.4-1.4l7.1-7.1l1.4 1.4z"></svg:path>`,
})
export class MdiLockPercentOpenVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockPercentOpenVariantOutlineIcon],svg[mdi-lock-percent-open-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 11c.8 0 1.5.7 1.5 1.5S8.3 14 7.5 14S6 13.3 6 12.5S6.7 11 7.5 11m5 8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m-5.3.2l-1.4-1.4l7.1-7.1l1.4 1.4zM18 1c-2.8 0-5 2.2-5 5v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2h-1V6c0-1.7 1.3-3 3-3s3 1.3 3 3v2h2V6c0-2.8-2.2-5-5-5m-2 9v10H4V10z"></svg:path>`,
})
export class MdiLockPercentOpenVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockPercentOutlineIcon],svg[mdi-lock-percent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9zm9 14H6V10h12zm-7-7.5c0 .8-.7 1.5-1.5 1.5S8 13.3 8 12.5S8.7 11 9.5 11s1.5.7 1.5 1.5m5 5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5m.2-5.3l-7.1 7.1l-1.4-1.4l7.1-7.1z"></svg:path>`,
})
export class MdiLockPercentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockPlusIcon],svg[mdi-lock-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6a2 2 0 0 0-2 2v10c0 1.11.89 2 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm3 11a2 2 0 1 1 2-2c0 1.11-.89 2-2 2m11 1v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></svg:path>`,
})
export class MdiLockPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockPlusOutlineIcon],svg[mdi-lock-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20V10h12v3.09c.33-.05.66-.09 1-.09s.67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h7.81c-.35-.61-.59-1.28-.72-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm5 9c0 1.11-.89 2-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2m9 3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></svg:path>`,
})
export class MdiLockPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockQuestionIcon],svg[mdi-lock-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a5 5 0 0 0-5 5v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5m0 1.9c1.71 0 3.1 1.39 3.1 3.1v2H8.9V6c0-1.71 1.39-3.1 3.1-3.1m.19 7.6c.94 0 1.69.21 2.23.62q.81.63.81 1.68c0 .44-.15.83-.44 1.2c-.29.36-.67.64-1.13.85c-.26.15-.43.3-.52.47c-.09.18-.14.4-.14.68h-2c0-.5.1-.84.29-1.08c.21-.24.55-.52 1.07-.84c.26-.14.47-.32.64-.54c.14-.21.22-.46.22-.74c0-.3-.09-.52-.27-.69c-.18-.18-.45-.26-.76-.26c-.27 0-.49.07-.69.21c-.16.14-.26.35-.26.63H9.27c-.05-.69.23-1.29.78-1.65c.54-.36 1.25-.54 2.14-.54M11 17h2v2h-2z"></svg:path>`,
})
export class MdiLockQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockRemoveIcon],svg[mdi-lock-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6a2 2 0 0 0-2 2v10c0 1.11.89 2 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm3 11a2 2 0 1 1 2-2c0 1.11-.89 2-2 2m8.41 2l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41z"></svg:path>`,
})
export class MdiLockRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockRemoveOutlineIcon],svg[mdi-lock-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15c0 1.11-.89 2-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2m-.91 5c.12.72.37 1.39.72 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6c0-2.76 2.24-5 5-5s5 2.24 5 5v2h1a2 2 0 0 1 2 2v3.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V10H6v10zM9 8h6V6c0-1.66-1.34-3-3-3S9 4.34 9 6zm13.54 8.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiLockRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockResetIcon],svg[mdi-lock-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.63 2c5.53 0 10.01 4.5 10.01 10s-4.48 10-10.01 10c-3.51 0-6.58-1.82-8.37-4.57l1.58-1.25C7.25 18.47 9.76 20 12.64 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8C8.56 4 5.2 7.06 4.71 11h2.76l-3.74 3.73L0 11h2.69c.5-5.05 4.76-9 9.94-9m2.96 8.24c.5.01.91.41.91.92v4.61c0 .5-.41.92-.92.92h-5.53c-.51 0-.92-.42-.92-.92v-4.61c0-.51.41-.91.91-.92V9.23c0-1.53 1.25-2.77 2.77-2.77c1.53 0 2.78 1.24 2.78 2.77zm-2.78-2.38c-.75 0-1.37.61-1.37 1.37v1.01h2.75V9.23c0-.76-.62-1.37-1.38-1.37"></svg:path>`,
})
export class MdiLockResetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockSmartIcon],svg[mdi-lock-smart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6M8 6h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zM8 9h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-2 4a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiLockSmartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockerIcon],svg[mdi-locker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v16h8V4zm2 9h2v4h-2zm0-7h4v1.5h-4zm0 3h4v1.5h-4z"></svg:path>`,
})
export class MdiLockerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLockerMultipleIcon],svg[mdi-locker-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m10 2v16h8V4zM3 4v16h8V4zm2 9h2v4H5zm0-7h4v1.5H5zm0 3h4v1.5H5zm10 4h2v4h-2zm0-7h4v1.5h-4zm0 3h4v1.5h-4z"></svg:path>`,
})
export class MdiLockerMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLoginIcon],svg[mdi-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8z"></svg:path>`,
})
export class MdiLoginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLoginVariantIcon],svg[mdi-login-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8.92 12.58L11.5 17l5-5l-5-5l-1.42 1.41L12.67 11H3v2h9.67z"></svg:path>`,
})
export class MdiLoginVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLogoutIcon],svg[mdi-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"></svg:path>`,
})
export class MdiLogoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLogoutVariantIcon],svg[mdi-logout-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.08 15.59L16.67 13H7v-2h9.67l-2.59-2.59L15.5 7l5 5l-5 5zM19 3a2 2 0 0 1 2 2v4.67l-2-2V5H5v14h14v-2.67l2-2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2z"></svg:path>`,
})
export class MdiLogoutVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLongitudeIcon],svg[mdi-longitude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.03 10.03 0 0 0 12 2M9.4 19.6a8.05 8.05 0 0 1 0-15.2A16.45 16.45 0 0 0 7.5 12a16.45 16.45 0 0 0 1.9 7.6m2.6.4a13.8 13.8 0 0 1-2.5-8A13.8 13.8 0 0 1 12 4a13.8 13.8 0 0 1 2.5 8a13.8 13.8 0 0 1-2.5 8m2.6-.4a16.15 16.15 0 0 0 0-15.2A8.03 8.03 0 0 1 20 12a7.9 7.9 0 0 1-5.4 7.6"></svg:path>`,
})
export class MdiLongitudeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLooksIcon],svg[mdi-looks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6A11 11 0 0 0 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2A11 11 0 0 0 12 6m0 4c-3.86 0-7 3.14-7 7h2a5 5 0 0 1 5-5a5 5 0 0 1 5 5h2c0-3.86-3.14-7-7-7"></svg:path>`,
})
export class MdiLooksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLotionIcon],svg[mdi-lotion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 6.5C15.5 5.66 17 4 17 4s1.5 1.66 1.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m4 8.5a2.5 2.5 0 0 0 2.5-2.5c0-1.67-2.5-4.5-2.5-4.5S17 10.83 17 12.5a2.5 2.5 0 0 0 2.5 2.5M16 12v10H4V12c0-2.97 2.16-5.43 5-5.91V4H7V2h6c1.13 0 2.15.39 3 1l-1.44 1.44C14.1 4.17 13.57 4 13 4h-2v2.09c2.84.48 5 2.94 5 5.91"></svg:path>`,
})
export class MdiLotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLotionOutlineIcon],svg[mdi-lotion-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 6.5C15.5 5.66 17 4 17 4s1.5 1.66 1.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m4 8.5a2.5 2.5 0 0 0 2.5-2.5c0-1.67-2.5-4.5-2.5-4.5S17 10.83 17 12.5a2.5 2.5 0 0 0 2.5 2.5M16 12v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8c0-2.97 2.16-5.43 5-5.91V4H7V2h6c1.13 0 2.15.39 3 1l-1.44 1.44C14.1 4.17 13.57 4 13 4h-2v2.09c2.84.48 5 2.94 5 5.91m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4v8h8z"></svg:path>`,
})
export class MdiLotionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLotionPlusIcon],svg[mdi-lotion-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 6.5C15.5 5.66 17 4 17 4s1.5 1.66 1.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m4 8.5a2.5 2.5 0 0 0 2.5-2.5c0-1.67-2.5-4.5-2.5-4.5S17 10.83 17 12.5a2.5 2.5 0 0 0 2.5 2.5M13 14h-2v-2H9v2H7v2h2v2h2v-2h2zm3-2v10H4V12c0-2.97 2.16-5.43 5-5.91V4H7V2h6c1.13 0 2.15.39 3 1l-1.44 1.44C14.1 4.17 13.57 4 13 4h-2v2.09c2.84.48 5 2.94 5 5.91"></svg:path>`,
})
export class MdiLotionPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLotionPlusOutlineIcon],svg[mdi-lotion-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 6.5C15.5 5.66 17 4 17 4s1.5 1.66 1.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m4 8.5a2.5 2.5 0 0 0 2.5-2.5c0-1.67-2.5-4.5-2.5-4.5S17 10.83 17 12.5a2.5 2.5 0 0 0 2.5 2.5M13 14h-2v-2H9v2H7v2h2v2h2v-2h2zm3-2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8c0-2.97 2.16-5.43 5-5.91V4H7V2h6c1.13 0 2.15.39 3 1l-1.44 1.44C14.1 4.17 13.57 4 13 4h-2v2.09c2.84.48 5 2.94 5 5.91m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4v8h8z"></svg:path>`,
})
export class MdiLotionPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLoupeIcon],svg[mdi-loupe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10h8a2 2 0 0 0 2-2v-8A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4z"></svg:path>`,
})
export class MdiLoupeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLumxIcon],svg[mdi-lumx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.35 1.75l7.78 7.78l-6.36 6.36l-1.42-1.42l4.95-4.94l-6.36-6.37zm3.54 7.78l-1.42 1.41l-4.24-4.24l-4.95 4.95l-1.41-1.42l6.36-6.36zm-5.66-1.42l1.42 1.42l-4.95 4.94l6.36 6.37l-1.41 1.41l-7.78-7.78zm-2.12 6.36l1.42-1.41l4.24 4.24l4.95-4.95l1.41 1.42l-6.36 6.36z"></svg:path>`,
})
export class MdiLumxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLungsIcon],svg[mdi-lungs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.47 3.11c-.47-.26-1.1-.06-1.36.43c-.07.14-.11.3-.11.46v2.59l-.71-.71a.98.98 0 0 1-.29-.7V1h-2v4.17c0 .27-.1.52-.29.71l-.71.71V4c0-.56-.46-1-1-1c-.17 0-.33.04-.47.11C4.72 5 2 9.97 2 15.77c0 1.9.33 3.78 1 5.55a1.007 1.007 0 0 0 1.44.55l5.06-2.8c.31-.17.5-.51.5-.88V9.41l1.3-1.29a.996.996 0 0 1 1.41 0L14 9.42v8.78c0 .36.21.7.5.88l5.08 2.8a1 1 0 0 0 1.36-.42c.02-.04.06-.09.06-.14c.67-1.77 1-3.65 1-5.55C22 9.97 19.29 5 15.47 3.11"></svg:path>`,
})
export class MdiLungsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiLyftIcon],svg[mdi-lyft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.56 12.5c0 .1-.06.22-.16.29a.49.49 0 0 1-.81-.38V8.5H5.66v4.89a2.44 2.44 0 0 0 2.44 2.44c.58 0 1.14-.21 1.58-.59c-.04.36-.25.69-.57.87c-.36.2-.76.31-1.17.3c-.48 0-.94-.11-1.38-.32L6.39 16v2.6c.65.26 1.35.4 2.05.4c1.03 0 2.02-.34 2.81-1c.83-.75 1.29-1.82 1.25-2.94V8.5H9.56v4m-4.63.89v-7.8H2v7.31c-.16 1.45.88 2.75 2.33 2.91c.08.01.17.02.23.02c.37 0 .73-.09 1.07-.24l.12-.09l-.1-.09c-.48-.56-.74-1.28-.72-2.02m17.07-2V8.5h-1c-.41-2.12-2.47-3.5-4.59-3.09c-.24.04-.47.09-.7.2a4.102 4.102 0 0 0-2.45 3.57v6.65h.13c1.56-.07 2.8-1.36 2.8-2.93h1.22V10h-1.26v-.83c0-.31.17-.6.44-.76a.998.998 0 0 1 1.51.83v2.69a3.84 3.84 0 0 0 3.77 3.9H22V12.9a1 1 0 0 1-1-1v-.49l1-.02z" fill="currentColor"></svg:path>`,
})
export class MdiLyftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMaceIcon],svg[mdi-mace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.92 9.27c.05-.27.08-.51.08-.77s-.03-.5-.08-.77L23 8.5zm-5.23 3.65l.81 3.24l.81-3.24c-.26.05-.53.08-.81.08s-.55-.03-.81-.08m-2.99-2.03l-4.91 4.9l-.7-.7L1 20.17L3.83 23l5.08-5.09l-.7-.7l4.9-4.91c-.57-.36-1.05-.84-1.41-1.41m4.57-6.81L15.5 1l-.77 3.08c.27-.05.51-.08.77-.08s.5.03.77.08M8 8.5l3.08.77C11.03 9 11 8.76 11 8.5s.03-.5.08-.77zm10.63 1.54c.23-.46.37-.98.37-1.54s-.14-1.08-.37-1.54L21 3l-3.96 2.37c-.46-.23-.98-.37-1.54-.37s-1.08.14-1.54.37L10 3l2.37 3.96c-.23.46-.37.98-.37 1.54c0 1.93 1.57 3.5 3.5 3.5c.56 0 1.08-.14 1.54-.37L21 14z"></svg:path>`,
})
export class MdiMaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
