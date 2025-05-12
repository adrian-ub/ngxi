import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickMinusIcon],svg[mdi-toy-brick-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20h-8v-2h8zm-10-1c0-3.31 2.69-6 6-6c.7 0 1.37.13 2 .35V6h-2V5a2 2 0 0 0-2-2h-2c-1.1 0-2 .9-2 2v1h-2V5a2 2 0 0 0-2-2H7c-1.1 0-2 .9-2 2v1H3v14h10.09c-.05-.33-.09-.66-.09-1"></svg:path>`,
})
export class MdiToyBrickMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickMinusOutlineIcon],svg[mdi-toy-brick-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H3V6h2V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1h2V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1h2v7.35c-.63-.22-1.3-.35-2-.35V8H5v10h8.09c-.05.33-.09.66-.09 1s.04.67.09 1M23 18h-8v2h8z"></svg:path>`,
})
export class MdiToyBrickMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickOutlineIcon],svg[mdi-toy-brick-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1h-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3v14h18V6m-2 12H5V8h14Z"></svg:path>`,
})
export class MdiToyBrickOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickPlusIcon],svg[mdi-toy-brick-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1h-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3v14h10.09a5.5 5.5 0 0 1-.09-1a6 6 0 0 1 8-5.66V6m-1 9v3h3v2h-3v3h-2v-3h-3v-2h3v-3Z"></svg:path>`,
})
export class MdiToyBrickPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickPlusOutlineIcon],svg[mdi-toy-brick-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1h-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3v14h11v-2H5V8h14v5h2V6m0 9v3h3v2h-3v3h-2v-3h-3v-2h3v-3Z"></svg:path>`,
})
export class MdiToyBrickPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickRemoveIcon],svg[mdi-toy-brick-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1h-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3v14h10.09a5.5 5.5 0 0 1-.09-1a6 6 0 0 1 8-5.66V6m1.54 10.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.42-1.42L17.59 19l-2.13-2.12l1.42-1.42L19 17.59l2.12-2.13Z"></svg:path>`,
})
export class MdiToyBrickRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickRemoveOutlineIcon],svg[mdi-toy-brick-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6V5c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v1h-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v1H3v14h11v-2H5V8h14v5h2V6m-3.12 9.46L20 17.59l2.12-2.12l1.42 1.41L21.41 19l2.13 2.12l-1.42 1.42L20 20.41l-2.12 2.13l-1.42-1.42L18.59 19l-2.12-2.12"></svg:path>`,
})
export class MdiToyBrickRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickSearchIcon],svg[mdi-toy-brick-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1h-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3v14h8.81A6.5 6.5 0 0 1 21 10.81V6m-.69 11.9a4.5 4.5 0 1 0-1.43 1.42L22 22.39L23.39 21m-6.89-3a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5"></svg:path>`,
})
export class MdiToyBrickSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickSearchOutlineIcon],svg[mdi-toy-brick-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1h-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3v14h8.81a6.6 6.6 0 0 1-1.31-2H5V8h14v1.5a6.6 6.6 0 0 1 2 1.31V6m-.69 11.9a4.5 4.5 0 1 0-1.43 1.42L22 22.39L23.39 21m-6.89-3a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5"></svg:path>`,
})
export class MdiToyBrickSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrackLightIcon],svg[mdi-track-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v2h3v3.4L4.11 4.38l-2.68 6.46l5.54 2.3l4.97 3.68l1.85.77l3.83-9.24l-1.85-.77L11 6.87V3h3V1zm15.81 5.29l-2.31.96l.76 1.85l2.31-.96zm-2.03 7.28L19 15.42l2.79 1.15l.76-1.85zm-3.59 5.36l-1.85.76l.96 2.31l1.85-.77z"></svg:path>`,
})
export class MdiTrackLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrackLightOffIcon],svg[mdi-track-light-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.78 13.57l2.77 1.15l-.76 1.85L19 15.42zm2.79-5.43l-.76-1.85l-2.31.96l.76 1.85zm-8.23 11.55L15.3 22l1.85-.77l-.96-2.3zM2.39 1.73L1.11 3l2.53 2.53l-2.21 5.31l5.54 2.3l4.97 3.68l1.85.77l.56-1.35l6.49 6.49l1.27-1.27zM6.2 3L6 2.8V1h8v2h-3v3.87l4.77.71l1.85.77l-1.78 4.29L9 5.8V3z"></svg:path>`,
})
export class MdiTrackLightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrackpadIcon],svg[mdi-trackpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v8h16V5zm0 14h7v-4H4zm16 0v-4h-7v4z"></svg:path>`,
})
export class MdiTrackpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrackpadLockIcon],svg[mdi-trackpad-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h11v-2h-2v-4h4.68c.82-.65 1.79-1 2.82-1c.5 0 1 .09 1.5.26V3c0-1.11-.89-2-2-2zm0 2h16v8H3zm0 10h7v4H3zm16.5 1a2.5 2.5 0 0 0-2.5 2.5v.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1v-.5a2.5 2.5 0 0 0-2.5-2.5m0 1a1.5 1.5 0 0 1 1.5 1.5v.5h-3v-.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiTrackpadLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTractorIcon],svg[mdi-tractor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v7.26c-1.8.64-3 2.34-3 4.24C2 18 4 20 6.5 20c2.29 0 4.21-1.72 4.47-4h4.2c-.11.32-.17.66-.17 1a3 3 0 0 0 3 3a3 3 0 0 0 3-3c0-.34-.06-.68-.18-1H22v-3c0-1.11-.89-2-2-2h-4.96l-1.39-7zm2 2h5l1 5v3h-2.26A4.53 4.53 0 0 0 7 11.03zm-.5 7.25a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25a2.25 2.25 0 0 1 2.25-2.25M18 15.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiTractorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTractorVariantIcon],svg[mdi-tractor-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.3 2.79l-3.5 3.5l.7.71l1.4-1.39l1.1 1.1V9c0 1.11-.89 2-2 2h-.54A6 6 0 0 1 12 15a6 6 0 0 1-.09 1h3.12a4.5 4.5 0 0 1 4.47-4a4.5 4.5 0 0 1 2.5.76V8c0-1.11-.89-2-2-2h-6.29l-1.1-1.1L14 3.5zM4 7c-.55 0-1 .45-1 1s.45 1 1 1h5a2 2 0 0 0-2-2zm2 3a5 5 0 0 0-1.56.25l.36.93l-.47.18l-.33-.93a5 5 0 0 0-2.46 2.31l.91.41l-.21.45l-.9-.4A5 5 0 0 0 1 15a5 5 0 0 0 .25 1.56l.93-.36l.18.47l-.93.33a5 5 0 0 0 2.31 2.46l.4-.91l.46.21l-.4.9A5 5 0 0 0 6 20a5 5 0 0 0 1.56-.25l-.36-.93l.47-.18l.33.93a5 5 0 0 0 2.46-2.31l-.91-.4l.21-.46l.9.4A5 5 0 0 0 11 15a5 5 0 0 0-.25-1.56l-.93.36l-.18-.47l.93-.33a5 5 0 0 0-2.31-2.46l-.4.91l-.46-.21l.4-.9A5 5 0 0 0 6 10m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m13.5 1a3.5 3.5 0 0 0-3.5 3.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5m0 2a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiTractorVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrademarkIcon],svg[mdi-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.8 8.44H6.87V16H4.89V8.44H2V7h7.8zM13.5 7l2.46 6.5L18.41 7H21v9h-2v-2.5l.22-4.26L16.63 16h-1.35L12.7 9.25l.2 4.25V16h-1.97V7z"></svg:path>`,
})
export class MdiTrademarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrafficConeIcon],svg[mdi-traffic-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 15l1 4h3v3H3v-3h3l1-4zm-2-7l1 4H8l1-4zm-2-7l1 4h-4l1-4z"></svg:path>`,
})
export class MdiTrafficConeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrafficLightIcon],svg[mdi-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a2 2 0 0 1-2-2a2 2 0 0 1 2-2c1.11 0 2 .89 2 2a2 2 0 0 1-2 2m0 5a2 2 0 0 1-2-2a2 2 0 0 1 2-2c1.11 0 2 .89 2 2a2 2 0 0 1-2 2m0 5a2 2 0 0 1-2-2a2 2 0 0 1 2-2c1.11 0 2 .89 2 2a2 2 0 0 1-2 2m8-9h-3V8.86c1.72-.45 3-2 3-3.86h-3V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86"></svg:path>`,
})
export class MdiTrafficLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrafficLightOutlineIcon],svg[mdi-traffic-light-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86m-5 9H9V5h6zm-3-1c.83 0 1.5-.67 1.5-1.5S12.83 15 12 15s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m0-4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M12 9c.83 0 1.5-.67 1.5-1.5S12.83 6 12 6s-1.5.67-1.5 1.5S11.17 9 12 9"></svg:path>`,
})
export class MdiTrafficLightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainIcon],svg[mdi-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4 0-8 .5-8 4v9.5A3.5 3.5 0 0 0 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19a3.5 3.5 0 0 0 3.5-3.5V6c0-3.5-3.58-4-8-4M7.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 14A1.5 1.5 0 0 1 9 15.5A1.5 1.5 0 0 1 7.5 17m3.5-7H6V6h5zm2 0V6h5v4zm3.5 7a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiTrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainBusIcon],svg[mdi-train-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h7c.8 0 1.56.32 2.12.88S15 4.2 15 5v1h-2V4H4v7h5v5H8l-3 3H4v-2l1-1c-.8 0-1.56-.32-2.12-.88S2 13.8 2 13V5c0-.8.32-1.56.88-2.12S4.2 2 5 2m.71 10.29C5.5 12.11 5.27 12 5 12c-.26 0-.5.11-.71.29c-.18.21-.29.45-.29.71c0 .27.11.5.29.71c.21.19.45.29.71.29c.27 0 .5-.1.71-.29c.19-.21.29-.44.29-.71c0-.26-.1-.5-.29-.71M11 11c0-1.66 1-3 4-3h3c3 0 4 1.34 4 3v7c0 .74-.4 1.39-1 1.73V21c0 .55-.45 1-1 1s-1-.45-1-1v-1h-5v1c0 .55-.45 1-1 1s-1-.45-1-1v-1.27c-.6-.34-1-.99-1-1.73zm2-1v4h7v-4zm1 8c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m6-1c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1"></svg:path>`,
})
export class MdiTrainBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarIcon],svg[mdi-train-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3l-1 1v1h1l2-2.03L9 18v-5H4V6h9v2h2V7a3 3 0 0 0-3-3M5 14a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66L10 13.77v5.51c0 .38.32.72.7.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .7-.34.7-.72v-5.51zm-8.16.34h7.19l1.03 3h-9.25zM12 16a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m8 0a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiTrainCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarAutorackIcon],svg[mdi-train-car-autorack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6H3c-1.1 0-2 .9-2 2v9h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V8a2 2 0 0 0-2-2M7.58 12.18c.61 0 1.1.5 1.1 1.11s-.49 1.1-1.1 1.1s-1.11-.49-1.11-1.1s.5-1.11 1.11-1.11m-.55-1.1l1.65-1.47h2.95l2.95 1.47zm2.63 2.95h4.68c.16.39.4.72.71.97h-6.1c.31-.25.55-.58.71-.97m5.66-.74c0-.61.49-1.11 1.1-1.11s1.11.5 1.11 1.11s-.5 1.1-1.11 1.1c-.61.01-1.1-.49-1.1-1.1M17.79 15c.32-.25.57-.58.71-.97h1.61v-.74c0-.82-.76-1.08-1.48-1.47L12 8.5H8.32l-2.21 1.84h-.74c-.82 0-1.48.66-1.48 1.48v2.21H5.5c.14.39.39.72.71.97H3V8h18v7z"></svg:path>`,
})
export class MdiTrainCarAutorackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarBoxIcon],svg[mdi-train-car-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7v10h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V7z"></svg:path>`,
})
export class MdiTrainCarBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarBoxFullIcon],svg[mdi-train-car-box-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7v10h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V7zm15 9h-2v-5h-4v5H8V9h8z"></svg:path>`,
})
export class MdiTrainCarBoxFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarBoxOpenIcon],svg[mdi-train-car-box-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7v10h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V7zm15 9H8V9h8z"></svg:path>`,
})
export class MdiTrainCarBoxOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarCabooseIcon],svg[mdi-train-car-caboose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9V7h-8V6h1V4H8v2h1v1H1v2h1v6H1v2h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1v-2h-1V9zM4 15H3V9h1zm7-3H6V9h5zm7 0h-5V9h5zm3 3h-1V9h1z"></svg:path>`,
})
export class MdiTrainCarCabooseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarCenterbeamIcon],svg[mdi-train-car-centerbeam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v11h-1c0 1.11-.89 2-2 2s-2-.89-2-2H6c0 1.11-.89 2-2 2s-2-.89-2-2H1V6h2v9h18V6z"></svg:path>`,
})
export class MdiTrainCarCenterbeamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarCenterbeamFullIcon],svg[mdi-train-car-centerbeam-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v11h-1c0 1.11-.89 2-2 2s-2-.89-2-2H6c0 1.11-.89 2-2 2s-2-.89-2-2H1V6h2v9h18V6zM8 12H4v2h4zm7 0H9v2h6zm5 0h-4v2h4zM8 9H4v2h4zm7 0H9v2h6zm5 0h-4v2h4zM8 6H4v2h4zm7 0H9v2h6zm5 0h-4v2h4z"></svg:path>`,
})
export class MdiTrainCarCenterbeamFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarContainerIcon],svg[mdi-train-car-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6v11h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V6zm20 9h-2V9h-2v6h-2V9h-2v6h-2V9H9v6H7V9H5v6H3V8h18z"></svg:path>`,
})
export class MdiTrainCarContainerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarFlatbedIcon],svg[mdi-train-car-flatbed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 15v2h-1c0 1.11-.89 2-2 2s-2-.89-2-2H6c0 1.11-.89 2-2 2s-2-.89-2-2H1v-2z"></svg:path>`,
})
export class MdiTrainCarFlatbedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarFlatbedCarIcon],svg[mdi-train-car-flatbed-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 13v-3c0-1.11-.89-2-2-2h-2l-3-4H6L3 8c-1.11 0-2 .89-2 2v3h2c0 .77.3 1.47.78 2H1v2h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1v-2h-2.78c.48-.53.78-1.23.78-2zm-3.5 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5M12 5.5h3.25L17.14 8H12zm3.78 9.5H8.22c.48-.53.78-1.23.78-2h6c0 .77.3 1.47.78 2M6.75 5.5h3.75V8H4.86zm-.75 6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MdiTrainCarFlatbedCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarFlatbedTankIcon],svg[mdi-train-car-flatbed-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.22 15c.48-.53.78-1.23.78-2c0-1.66-1.34-3-3-3H5c-1.66 0-3 1.34-3 3c0 .77.3 1.47.78 2H1v2h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1v-2zM19 12c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m8.62-6l-.4-2H22v2zM20 9H4V8h2l1-5h5l1 5h7z"></svg:path>`,
})
export class MdiTrainCarFlatbedTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarGondolaIcon],svg[mdi-train-car-gondola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 10v7h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1v-7zm20 5h-2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v2H3v-3h18z"></svg:path>`,
})
export class MdiTrainCarGondolaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarGondolaFullIcon],svg[mdi-train-car-gondola-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10c-1.96-1.81-5.26-3-9-3s-7.04 1.19-9 3H1v7h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1v-7zm0 5h-2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v2H3v-3h18z"></svg:path>`,
})
export class MdiTrainCarGondolaFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarHopperIcon],svg[mdi-train-car-hopper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8v9h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V8zm12 7v-4h-2v4H8v-4H6v4H3v-5h18v5h-3v-4h-2v4z"></svg:path>`,
})
export class MdiTrainCarHopperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarHopperCoveredIcon],svg[mdi-train-car-hopper-covered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9V7H1v2l1 1.33V15H1v2h1a2 2 0 1 0 4 0h4l1 1h2l1-1h4a2 2 0 1 0 4 0h1v-2h-1v-4.67zM4 15v-2l1.5 2zm1-5V9h14v1zm15 5h-1.5l1.5-2z"></svg:path>`,
})
export class MdiTrainCarHopperCoveredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarHopperFullIcon],svg[mdi-train-car-hopper-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8c-1.96-1.81-5.26-3-9-3S4.96 6.19 3 8H1v9h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V8zm-8 7v-4h-2v4H8v-4H6v4H3v-5h18v5h-3v-4h-2v4z"></svg:path>`,
})
export class MdiTrainCarHopperFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarIntermodalIcon],svg[mdi-train-car-intermodal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-4H3v4H1v2h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1v-2zm-5-1H8v-1h8zm5-9H3v5h18zm-5 3H8V7h8z"></svg:path>`,
})
export class MdiTrainCarIntermodalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarPassengerIcon],svg[mdi-train-car-passenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3c-1.1 0-2 .9-2 2v8h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V9a2 2 0 0 0-2-2M7 12H3V9h4zm8 0H9V9h6zm6 0h-4V9h4z"></svg:path>`,
})
export class MdiTrainCarPassengerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarPassengerDoorIcon],svg[mdi-train-car-passenger-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3c-1.1 0-2 .9-2 2v8h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V9a2 2 0 0 0-2-2M7 12H3V9h4zm4 4H9V9h2zm4 0h-2V9h2zm6-4h-4V9h4z"></svg:path>`,
})
export class MdiTrainCarPassengerDoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarPassengerDoorOpenIcon],svg[mdi-train-car-passenger-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3c-1.1 0-2 .9-2 2v8h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V9a2 2 0 0 0-2-2M8 12H3V9h5zm6 4h-4V9h4zm7-4h-5V9h5z"></svg:path>`,
})
export class MdiTrainCarPassengerDoorOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarPassengerVariantIcon],svg[mdi-train-car-passenger-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3c-1.1 0-2 .9-2 2v8h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V9a2 2 0 0 0-2-2m-10 5H3V9h8zm10 0h-8V9h8z"></svg:path>`,
})
export class MdiTrainCarPassengerVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarTankIcon],svg[mdi-train-car-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 15v2h-1c0 1.11-.89 2-2 2s-2-.89-2-2H6c0 1.11-.89 2-2 2s-2-.89-2-2H1v-2zm-2-7h-6V7H9v1H3c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h18c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiTrainCarTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrainVariantIcon],svg[mdi-train-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10H6V5h12m-6 12a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m-8-1.5A3.5 3.5 0 0 0 7.5 19L6 20.5v.5h12v-.5L16.5 19a3.5 3.5 0 0 0 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4z"></svg:path>`,
})
export class MdiTrainVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTramIcon],svg[mdi-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16.94V8.5c0-2.79-2.61-3.4-6-3.5l.75-1.5H17V2H7v1.5h4.75L11 5c-3.14.11-6 .73-6 3.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06m-7 1.56a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m5-4.5H7V9h10z"></svg:path>`,
})
export class MdiTramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTramSideIcon],svg[mdi-tram-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1L5 4l2.5 2H5S2 6 2 9v10h5s0-2 2-2h13v-3h-4V8h4V6H10.5L13 4zM4 8h5v6H4zm7 0h5v6h-5zm-7 8h1v2H4zm5 3v.5a2.5 2.5 0 0 0 2.5 2.5c1 0 1.89-.59 2.29-1.5h1.42c.4.91 1.29 1.5 2.29 1.5a2.5 2.5 0 0 0 2.5-2.5V19z"></svg:path>`,
})
export class MdiTramSideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTranscribeIcon],svg[mdi-transcribe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.11.89-2 2-2zm-2 12v-2h-5.5l-2 2zM6 17h2.5l6.85-6.88c.2-.19.2-.51 0-.71l-1.76-1.76c-.2-.2-.52-.2-.71 0L6 14.53z"></svg:path>`,
})
export class MdiTranscribeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTranscribeCloseIcon],svg[mdi-transcribe-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23l-4-4h8zm8-20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2 12v-2h-5.5l-2 2zM6 15h2.5l6.85-6.88c.2-.19.2-.51 0-.7l-1.76-1.77c-.2-.2-.52-.2-.71 0L6 12.53z"></svg:path>`,
})
export class MdiTranscribeCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransferIcon],svg[mdi-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a2 2 0 0 0-2 2v4h2V6h8v3h-2.5l3.5 3.5L20.5 9H18V6a2 2 0 0 0-2-2zm-5 8v2h8v-2zm0 3v2h8v-2zm10 0v2h8v-2zM3 18v2h8v-2zm10 0v2h8v-2z"></svg:path>`,
})
export class MdiTransferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransferDownIcon],svg[mdi-transfer-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3v2H8V3zm0 4v2H8V7zm0 4v2H8v-2zM5 15h14l-7 7z"></svg:path>`,
})
export class MdiTransferDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransferLeftIcon],svg[mdi-transfer-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16h-2V8h2zm-4 0h-2V8h2zm-4 0h-2V8h2zM9 5v14l-7-7z"></svg:path>`,
})
export class MdiTransferLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransferRightIcon],svg[mdi-transfer-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8h2v8H3zm4 0h2v8H7zm4 0h2v8h-2zm4 11.25V4.75L22.25 12z"></svg:path>`,
})
export class MdiTransferRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransferUpIcon],svg[mdi-transfer-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2h8v2zm0-4v-2h8v2zm0-4v-2h8v2zm11-4H5l7-7z"></svg:path>`,
})
export class MdiTransferUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransitConnectionIcon],svg[mdi-transit-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12c0-1.3-.84-2.4-2-2.82V6.82C14.16 6.4 15 5.3 15 4a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 1.3.84 2.4 2 2.82v2.37C9.84 9.6 9 10.7 9 12s.84 2.4 2 2.82v2.36C9.84 17.6 9 18.7 9 20a3 3 0 0 0 3 3a3 3 0 0 0 3-3c0-1.3-.84-2.4-2-2.82v-2.36c1.16-.42 2-1.52 2-2.82m-3-9a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m0 18a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiTransitConnectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransitConnectionHorizontalIcon],svg[mdi-transit-connection-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9c-1.3 0-2.4.8-2.8 2H6.8C6.4 9.8 5.3 9 4 9c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2h2.4c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2h2.4c.4 1.2 1.5 2 2.8 2c1.7 0 3-1.3 3-3s-1.3-3-3-3c-1.3 0-2.4.8-2.8 2h-2.4c-.4-1.2-1.5-2-2.8-2m-9 3c0-.6.4-1 1-1s1 .4 1 1s-.4 1-1 1s-1-.4-1-1m18 0c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1"></svg:path>`,
})
export class MdiTransitConnectionHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransitConnectionVariantIcon],svg[mdi-transit-connection-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11h-3.18C14.4 9.84 13.3 9 12 9s-2.4.84-2.82 2H6c-.33 0-2-.1-2-2V8c0-1.83 1.54-2 2-2h10.18C16.6 7.16 17.7 8 19 8a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-1.3 0-2.4.84-2.82 2H6C4.39 4 2 5.06 2 8v1c0 2.94 2.39 4 4 4h3.18c.42 1.16 1.52 2 2.82 2s2.4-.84 2.82-2H18c.33 0 2 .1 2 2v1c0 1.83-1.54 2-2 2H7.82C7.4 16.84 6.3 16 5 16a3 3 0 0 0-3 3a3 3 0 0 0 3 3c1.3 0 2.4-.84 2.82-2H18c1.61 0 4-1.07 4-4v-1c0-2.93-2.39-4-4-4m1-7a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M5 20a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiTransitConnectionVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransitDetourIcon],svg[mdi-transit-detour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a3 3 0 0 0-2.39 1.21A11.5 11.5 0 0 0 13.75 4l.13 2a9.5 9.5 0 0 1 2.12.13A3 3 0 1 0 19 3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m-10.14.86L7.67 6.25a11.5 11.5 0 0 1 3.93-1.88l.5 1.94a9.5 9.5 0 0 0-3.24 1.55M21 18a3 3 0 1 1-5.31-1.89a9.47 9.47 0 0 0-7.1-2.65c-.22.01-.43.04-.65.08a3 3 0 1 1-3.55-3.48A11.5 11.5 0 0 1 6.04 7.7L7.5 9.06a9.3 9.3 0 0 0-1 1.35a3.04 3.04 0 0 1 1.12 1.15c.29-.06.57-.06.88-.1a11.47 11.47 0 0 1 8.96 3.59A3 3 0 0 1 18 15a3 3 0 0 1 3 3"></svg:path>`,
})
export class MdiTransitDetourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransitSkipIcon],svg[mdi-transit-skip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12c0-4-2.5-7.3-6-8.5c-.3-1.4-1.5-2.5-3-2.5c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.1 0 2.1-.6 2.6-1.5C17.2 6.5 19 9 19 12c0 2.9-1.8 5.5-4.4 6.5c-.5-.9-1.5-1.5-2.6-1.5c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.5 0 2.7-1.1 3-2.5c3.5-1.2 6-4.6 6-8.5m-9-7c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m0 16c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m0-12c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3"></svg:path>`,
})
export class MdiTransitSkipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransitTransferIcon],svg[mdi-transit-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 15.5H22V17h-5.5v1.75l-2.5-2.5l2.5-2.5zm3 4.25V18l2.5 2.5l-2.5 2.5v-1.75H14v-1.5zM9.5 5.5a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2M5.75 8.9L4 9.65V13H2V8.3l5.25-2.15Q7.625 6 8 6c.7 0 1.35.35 1.7.95l.95 1.6C11.55 10 13.15 11 15 11v2c-2.2 0-4.15-1-5.45-2.6l-.6 3L11 15.45V23H9v-6l-2.15-2l-1.75 8H3z"></svg:path>`,
})
export class MdiTransitTransferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransitionIcon],svg[mdi-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2a7 7 0 0 1 7 7c0 2.71-1.54 5.05-3.78 6.22a7.1 7.1 0 0 1-3 3A7.01 7.01 0 0 1 9 22a7 7 0 0 1-7-7c0-2.71 1.54-5.05 3.78-6.22a7.1 7.1 0 0 1 3-3A7.01 7.01 0 0 1 15 2m-3 17a7 7 0 0 1-7-7c-.63.84-1 1.87-1 3a5 5 0 0 0 5 5c1.13 0 2.16-.37 3-1m3-3a7 7 0 0 1-7-7c-.63.84-1 1.87-1 3a5 5 0 0 0 5 5c1.13 0 2.16-.37 3-1m0-12c-1.13 0-2.16.37-3 1a7 7 0 0 1 7 7c.63-.84 1-1.87 1-3a5 5 0 0 0-5-5m-5 5a5 5 0 0 0 5 5c.6 0 1.17-.1 1.7-.3c.2-.53.3-1.1.3-1.7a5 5 0 0 0-5-5c-.6 0-1.17.1-1.7.3c-.2.53-.3 1.1-.3 1.7"></svg:path>`,
})
export class MdiTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransitionMaskedIcon],svg[mdi-transition-masked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2c1.94 0 3.59.7 4.95 2.05C21.3 5.41 22 7.06 22 9c0 1.56-.5 2.96-1.42 4.2c-.94 1.23-2.14 2.07-3.61 2.5l.03-.32V15c0-2.19-.77-4.07-2.35-5.65S11.19 7 9 7h-.37l-.33.03c.43-1.47 1.27-2.67 2.5-3.61C12.04 2.5 13.44 2 15 2M9 8a7 7 0 0 1 7 7a7 7 0 0 1-7 7a7 7 0 0 1-7-7a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiTransitionMaskedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTranslateIcon],svg[mdi-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.87 15.07l-2.54-2.51l.03-.03A17.5 17.5 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7l1.62-4.33L19.12 17z"></svg:path>`,
})
export class MdiTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTranslateOffIcon],svg[mdi-translate-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.17 5.81c-.3.88-.7 1.74-1.17 2.58l1.35 1.35c.76-1.24 1.36-2.56 1.78-3.93h3.03V3.75H9.94V1.69H7.87v2.06h-1.5l2.06 2.06zm3.36 7.1l1.5 1.5l.64-1.72l1.41 3.78l3.31 3.3l-3.69-9.83h-2.06zM1.31 1.31L0 2.62l1.13 1.13H.65v2.06h2.54l2.07 2.07h-.8c.75 1.68 1.78 3.27 3.07 4.7l-5.25 5.18l1.47 1.46l5.16-5.15l3.2 3.2l.69-1.84l1.3 1.29l-2.1 5.59h2.06l1.16-3.09h1.38L21.38 24l1.31-1.31z"></svg:path>`,
})
export class MdiTranslateOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTranslateVariantIcon],svg[mdi-translate-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1H3c-1.1 0-2 .9-2 2v12l3-3h5v-1c0-2.2 1.79-4 4-4V3c0-1.1-.9-2-2-2m0 3H9.5c-.34 1.19-.96 2.3-1.82 3.26l-.02.02l1.26 1.25l-.37 1.01L7 8l-2.5 2.5l-.69-.73l2.53-2.49A8.6 8.6 0 0 1 4.86 5h.99c.31.6.69 1.17 1.15 1.68A7.7 7.7 0 0 0 8.57 4H3V3h3.5V2h1v1H11zm10 5h-8c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7l3 3V11c0-1.1-.9-2-2-2m-1.37 10l-.85-2.25h-3.56L14.38 19h-1.5l3.37-9h1.5l3.38 9zM17 12l1.22 3.25h-2.43z"></svg:path>`,
})
export class MdiTranslateVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransmissionTowerIcon],svg[mdi-transmission-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.28 5.45l-1.78-.9L7.76 2h8.47l1.27 2.55l-1.78.89L15 4H9zM18.62 8h-4.53l-.79-3h-2.6l-.79 3H5.38L4.1 10.55l1.79.89l.73-1.44h10.76l.72 1.45l1.79-.89zm-.85 14H15.7l-.24-.9L12 15.9l-3.47 5.2l-.23.9H6.23l2.89-11h2.07l-.36 1.35L12 14.1l1.16-1.75l-.35-1.35h2.07zm-6.37-7l-.9-1.35l-1.18 4.48zm3.28 3.12l-1.18-4.48l-.9 1.36z"></svg:path>`,
})
export class MdiTransmissionTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransmissionTowerExportIcon],svg[mdi-transmission-tower-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.18 5.45l-1.78-.9L4.66 2h8.47l1.27 2.55l-1.78.89L11.9 4h-6zM15.5 8H11l-.8-3H7.6l-.79 3H2.28L1 10.55l1.79.89L3.5 10h10.78l.72 1.45l1.79-.89zm-.83 14H12.6l-.24-.9l-3.46-5.2l-3.47 5.2l-.23.9H3.13L6 11h2.09l-.36 1.35L8.9 14.1l1.16-1.75L9.71 11h2.07zM8.3 15l-.9-1.35l-1.18 4.48zm3.28 3.12l-1.18-4.48L9.5 15zM23 16l-4-4v3h-4v2h4v3z"></svg:path>`,
})
export class MdiTransmissionTowerExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransmissionTowerImportIcon],svg[mdi-transmission-tower-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.39 5.45l-1.78-.9L10.87 2h8.47l1.27 2.55l-1.78.89L18.11 4h-6zM21.73 8H17.2l-.79-3h-2.6L13 8H8.5l-1.29 2.55l1.79.89l.73-1.44H20.5l.71 1.45l1.79-.89zm-.85 14h-2.07l-.24-.9l-3.46-5.2l-3.47 5.2l-.23.9H9.34l2.89-11h2.07l-.36 1.35l1.17 1.75l1.16-1.75l-.35-1.35H18zm-6.38-7l-.89-1.35l-1.18 4.48zm3.29 3.12l-1.18-4.48l-.9 1.36zM9 16l-4-4v3H1v2h4v3z"></svg:path>`,
})
export class MdiTransmissionTowerImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTransmissionTowerOffIcon],svg[mdi-transmission-tower-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l5 5h-.7l-1.3 2.5l1.8.9l.7-1.4h1.5l1 1l-2.9 11h2.1l.2-.9l3.5-5.2l3.5 5.2l.2.9h2.1l-.8-3.2l3.9 3.9zM9.3 18.1l1.2-4.5l.9 1.3zm5.4 0L12.6 15l.2-.3l1.3 1.3zm-.5-7.1h.7l.2.9zm-.1-3h4.5l1.3 2.6l-1.8.9l-.7-1.5h-4.2l-3-3l.5-2h2.6zM8.4 5.2L6.9 3.7L7.8 2h8.5l1.3 2.5l-1.8.9L15 4H9z"></svg:path>`,
})
export class MdiTransmissionTowerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrashCanIcon],svg[mdi-trash-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3zm0 5h2v9H9zm4 0h2v9h-2z"></svg:path>`,
})
export class MdiTrashCanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrashCanOutlineIcon],svg[mdi-trash-can-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3zM7 6h10v13H7zm2 2v9h2V8zm4 0v9h2V8z"></svg:path>`,
})
export class MdiTrashCanOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrayIcon],svg[mdi-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h2v5h16v-5h2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"></svg:path>`,
})
export class MdiTrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrayAlertIcon],svg[mdi-tray-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h2v5h16v-5h2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m11-5h-2v2h2m0-10h-2v6h2Z"></svg:path>`,
})
export class MdiTrayAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrayArrowDownIcon],svg[mdi-tray-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h2v5h16v-5h2v5c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2zm10 3l5.55-5.46l-1.42-1.41L13 11.25V2h-2v9.25L7.88 8.13L6.46 9.55z"></svg:path>`,
})
export class MdiTrayArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrayArrowUpIcon],svg[mdi-tray-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h2v5h16v-5h2v5c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2zM12 2L6.46 7.46l1.42 1.42L11 5.75V15h2V5.75l3.13 3.13l1.42-1.43z"></svg:path>`,
})
export class MdiTrayArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrayFullIcon],svg[mdi-tray-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5H6v2h12M6 9h12v2H6m-4 1h2v5h16v-5h2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m16-4H6v2h12Z"></svg:path>`,
})
export class MdiTrayFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrayMinusIcon],svg[mdi-tray-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10H8V8h8M2 17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5h-2v5H4v-5H2Z"></svg:path>`,
})
export class MdiTrayMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrayPlusIcon],svg[mdi-tray-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h2v5h16v-5h2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m9-12h2v3h3v2h-3v3h-2v-3H8V8h3Z"></svg:path>`,
})
export class MdiTrayPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrayRemoveIcon],svg[mdi-tray-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5h-2v5H4v-5H2m12.12-6.54l1.42 1.42L13.41 9l2.13 2.12l-1.42 1.42L12 10.41l-2.12 2.13l-1.42-1.42L10.59 9L8.46 6.88l1.42-1.42L12 7.59Z"></svg:path>`,
})
export class MdiTrayRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTreasureChestIcon],svg[mdi-treasure-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4h14a3 3 0 0 1 3 3v4h-7v-1H9v1H2V7a3 3 0 0 1 3-3m6 7h2v2h-2zm-9 1h7v1l2 2h2l2-2v-1h7v8H2z"></svg:path>`,
})
export class MdiTreasureChestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTreasureChestOutlineIcon],svg[mdi-treasure-chest-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20h20V7c0-.8-.32-1.56-.88-2.12S19.8 4 19 4H5c-.8 0-1.56.32-2.12.88S2 6.2 2 7zm18-9h-5V9H9v2H4V7c0-.26.11-.5.29-.71C4.5 6.11 4.74 6 5 6h14c.27 0 .5.11.71.29c.19.21.29.45.29.71zm-5 2h5v5H4v-5h5l2 2h2zm-4-2h2v2h-2z"></svg:path>`,
})
export class MdiTreasureChestOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTreeIcon],svg[mdi-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21v-4.26c-.47.17-.97.26-1.5.26C7 17 5 15 5 12.5c0-1.27.5-2.41 1.36-3.23C6.13 8.73 6 8.13 6 7.5C6 5 8 3 10.5 3c1.56 0 2.94.8 3.75 2h.25a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5q-.75 0-1.5-.21V21z"></svg:path>`,
})
export class MdiTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTreeOutlineIcon],svg[mdi-tree-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 3a4.48 4.48 0 0 0-4.13 6.27C5.5 10.12 5 11.28 5 12.5C5 15 7 17 9.5 17c.5 0 1-.11 1.5-.28V21h2v-5.23c.5.14 1 .23 1.5.23a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 14.5 5h-.26C13.41 3.76 12 3 10.5 3m0 2c1.32 0 2.41 1.03 2.5 2.35c.46-.23 1-.35 1.5-.35a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5c-.96 0-1.87-.39-2.54-1.09A2.49 2.49 0 0 1 9.5 15A2.5 2.5 0 0 1 7 12.5c0-1.38.8-1.96 2-2.71c-.8-1.03-1-1.63-1-2.29A2.5 2.5 0 0 1 10.5 5"></svg:path>`,
})
export class MdiTreeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrelloIcon],svg[mdi-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2m-8.8 15.2a1.2 1.2 0 0 1-1.2 1.2H5.8c-.66 0-1.2-.54-1.2-1.2V5.8a1.2 1.2 0 0 1 1.2-1.2h3.7c.66 0 1.2.54 1.2 1.2zm8.7-5c0 .66-.54 1.2-1.2 1.2h-3.7c-.66 0-1.2-.54-1.2-1.2V5.8c0-.66.54-1.2 1.2-1.2h3.7c.66 0 1.2.54 1.2 1.2z"></svg:path>`,
})
export class MdiTrelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrendingDownIcon],svg[mdi-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 18l2.29-2.29l-4.88-4.88l-4 4L2 7.41L3.41 6l6 6l4-4l6.3 6.29L22 12v6z"></svg:path>`,
})
export class MdiTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrendingNeutralIcon],svg[mdi-trending-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 12l-4-4v3H3v2h15v3z"></svg:path>`,
})
export class MdiTrendingNeutralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrendingUpIcon],svg[mdi-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 6l2.29 2.29l-4.88 4.88l-4-4L2 16.59L3.41 18l6-6l4 4l6.3-6.29L22 12V6z"></svg:path>`,
})
export class MdiTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTriangleIcon],svg[mdi-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h22L12 2"></svg:path>`,
})
export class MdiTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTriangleDownIcon],svg[mdi-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22L12 22"></svg:path>`,
})
export class MdiTriangleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTriangleDownOutlineIcon],svg[mdi-triangle-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22L1 3h22M12 18l7.53-13H4.47"></svg:path>`,
})
export class MdiTriangleDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTriangleOutlineIcon],svg[mdi-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L1 21h22M12 6l7.53 13H4.47"></svg:path>`,
})
export class MdiTriangleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTriangleSmallDownIcon],svg[mdi-triangle-small-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9h8l-4 7"></svg:path>`,
})
export class MdiTriangleSmallDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTriangleSmallUpIcon],svg[mdi-triangle-small-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15h8l-4-7"></svg:path>`,
})
export class MdiTriangleSmallUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTriangleWaveIcon],svg[mdi-triangle-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 12l-5 10L7.1 6.04L4.24 12H2L7 2l9.9 15.96L19.76 12z"></svg:path>`,
})
export class MdiTriangleWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTriforceIcon],svg[mdi-triforce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 21L12 3.5L22.5 21zM12 21l5-9H7z"></svg:path>`,
})
export class MdiTriforceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrophyIcon],svg[mdi-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2c-.9 0-2 1-2 2H8c0-1-1.1-2-2-2H2v9c0 1 1 2 2 2h2.2c.4 2 1.7 3.7 4.8 4v2.08C8 19.54 8 22 8 22h8s0-2.46-3-2.92V17c3.1-.3 4.4-2 4.8-4H20c1 0 2-1 2-2V2zM6 11H4V4h2zm14 0h-2V4h2z"></svg:path>`,
})
export class MdiTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrophyAwardIcon],svg[mdi-trophy-award-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.2 10.7l1.4 5.3l-4.6-3.8L7.4 16l1.4-5.2l-4.2-3.5L10 7l2-5l2 5l5.4.3zM14 19h-1v-3l-1-1l-1 1v3h-1c-1.1 0-2 .9-2 2v1h8v-1a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiTrophyAwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrophyBrokenIcon],svg[mdi-trophy-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.2 13c.4 1.8 1.4 3.3 3.8 3.8v2.54C8 20.12 8 22 8 22h5.2l-3-7l4-5l-3.5-6H8c0-1-1.1-2-2-2H2v9c0 1 1 2 2 2zM6 11H4V4h2zm11.8 2H20c1 0 2-1 2-2V2h-4c-.9 0-2 1-2 2h-2.1l2.8 6l-4.5 5l1 7H16s0-1.88-2-2.66v-2.49c2.39-.5 3.5-2.15 3.8-3.85m2.2-2h-2V4h2z"></svg:path>`,
})
export class MdiTrophyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrophyOutlineIcon],svg[mdi-trophy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2c-.9 0-2 1-2 2H8c0-1-1.1-2-2-2H2v9c0 1 1 2 2 2h2.2c.4 2 1.7 3.7 4.8 4v2.08C8 19.54 8 22 8 22h8s0-2.46-3-2.92V17c3.1-.3 4.4-2 4.8-4H20c1 0 2-1 2-2V2zM6 11H4V4h2zm10 .5c0 1.93-.58 3.5-4 3.5c-3.41 0-4-1.57-4-3.5V6h8zm4-.5h-2V4h2z"></svg:path>`,
})
export class MdiTrophyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrophyVariantIcon],svg[mdi-trophy-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4V2H7v2H2v7c0 1.1.9 2 2 2h3.1a5.01 5.01 0 0 0 3.9 3.9v2.18C8 19.54 8 22 8 22h8s0-2.46-3-2.92V16.9a5.01 5.01 0 0 0 3.9-3.9H20c1.1 0 2-.9 2-2V4zM4 11V6h3v5zm16 0h-3V6h3z"></svg:path>`,
})
export class MdiTrophyVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrophyVariantOutlineIcon],svg[mdi-trophy-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4V2H7v2H2v7c0 1.1.9 2 2 2h3.1a5.01 5.01 0 0 0 3.9 3.9v2.18C8 19.54 8 22 8 22h8s0-2.46-3-2.92V16.9a5.01 5.01 0 0 0 3.9-3.9H20c1.1 0 2-.9 2-2V4zM4 11V6h3v5zm11 1c0 1.65-1.35 3-3 3s-3-1.35-3-3V4h6zm5-1h-3V6h3z"></svg:path>`,
})
export class MdiTrophyVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckIcon],svg[mdi-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5z"></svg:path>`,
})
export class MdiTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckAlertIcon],svg[mdi-truck-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-1.1 0-2 .9-2 2v11h2c0 1.7 1.3 3 3 3s3-1.3 3-3h6c0 1.7 1.3 3 3 3s3-1.3 3-3h2v-5l-3-4h-3V4zm5 2h2v4H8zm9 3.5h2.5l2 2.5H17zM8 12h2v2H8zm-2 3.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5m12 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"></svg:path>`,
})
export class MdiTruckAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckAlertOutlineIcon],svg[mdi-truck-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12h2v2H8zm0-5h2v4H8zm10 11.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5m1.5-9H17V12h4.5zM6 18.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.7-1.3 3-3 3s-3-1.3-3-3H9c0 1.7-1.3 3-3 3s-3-1.3-3-3H1V6c0-1.1.9-2 2-2h14v4zM3 6v9h.8c.5-.6 1.4-1 2.2-1s1.7.4 2.2 1H15V6z"></svg:path>`,
})
export class MdiTruckAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckCargoContainerIcon],svg[mdi-truck-cargo-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-3V4H1v13h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M15 7h-2v7h-2V7H9v7H7V7H5v7H3V6h12zm3 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M17 12V9.5h2.5l1.96 2.5z"></svg:path>`,
})
export class MdiTruckCargoContainerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckCheckIcon],svg[mdi-truck-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h14v4h3l3 4v5h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3H9a3 3 0 0 1-3 3a3 3 0 0 1-3-3H1V6a2 2 0 0 1 2-2m14 5.5V12h4.47L19.5 9.5zm-11 6A1.5 1.5 0 0 0 4.5 17A1.5 1.5 0 0 0 6 18.5A1.5 1.5 0 0 0 7.5 17A1.5 1.5 0 0 0 6 15.5m12 0a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5M8 14l6-6l-1.41-1.42L8 11.17L5.91 9.08L4.5 10.5z"></svg:path>`,
})
export class MdiTruckCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckCheckOutlineIcon],svg[mdi-truck-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6zm2 4.5L6.5 9L8 10.5L11.5 7L13 8.5l-5 5z"></svg:path>`,
})
export class MdiTruckCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckDeliveryIcon],svg[mdi-truck-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4a2 2 0 0 0-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5l-3-4h-3V4m-7 2l4 4l-4 4v-3H4V9h6m7 .5h2.5l1.97 2.5H17M6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiTruckDeliveryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckDeliveryOutlineIcon],svg[mdi-truck-delivery-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6zm7 1l3.5 3.5L10 14v-2.5H5v-2h5z"></svg:path>`,
})
export class MdiTruckDeliveryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckFastIcon],svg[mdi-truck-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13.5L2.25 12H7.5l-.6-1.5H2L1.25 9h7.8l-.6-1.5H1.11L.25 6H4a2 2 0 0 1 2-2h12v4h3l3 4v5h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3h-4a3 3 0 0 1-3 3a3 3 0 0 1-3-3H4v-3.5zm16 5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5m1.5-9H18V12h4.46zM9 18.5a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 9 15.5A1.5 1.5 0 0 0 7.5 17A1.5 1.5 0 0 0 9 18.5"></svg:path>`,
})
export class MdiTruckFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckFastOutlineIcon],svg[mdi-truck-fast-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.75 7.5h9.75l.75 1.5H1.5zm1 3h9.75l.75 1.5H2.5zm16.25 8c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM8 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3h-4c0 1.66-1.35 3-3 3c-1.66 0-3-1.34-3-3H3v-3.5h2V15h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6H3c0-1.11.89-2 2-2h12v4z"></svg:path>`,
})
export class MdiTruckFastOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckFlatbedIcon],svg[mdi-truck-flatbed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h-5v9H1v4h2c0 .83.3 1.53.89 2.13c.61.59 1.3.87 2.11.87s1.5-.28 2.11-.87c.59-.6.89-1.3.89-2.13h5.5c0 .83.28 1.53.88 2.13c.59.59 1.29.87 2.12.87c.8 0 1.5-.28 2.09-.87c.6-.6.91-1.3.91-2.13H23v-7zM7.08 18.07c-.28.3-.64.43-1.08.43s-.8-.13-1.08-.43s-.42-.65-.42-1.07c0-.39.14-.74.42-1.04s.64-.46 1.08-.46s.8.16 1.08.46s.42.65.42 1.04c0 .42-.14.77-.42 1.07m11.46 0c-.3.3-.65.43-1.04.43c-.42 0-.77-.13-1.07-.43S16 17.42 16 17c0-.39.13-.74.43-1.04s.65-.46 1.07-.46c.39 0 .74.16 1.04.46s.46.65.46 1.04c0 .42-.16.77-.46 1.07M15 10V6h2.06l3.33 4z"></svg:path>`,
})
export class MdiTruckFlatbedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckMinusIcon],svg[mdi-truck-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m7-7.5H5V9h8zm5 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M17 12V9.5h2.5l1.96 2.5z"></svg:path>`,
})
export class MdiTruckMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckMinusOutlineIcon],svg[mdi-truck-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.7 1.3 3 3 3s3-1.3 3-3h6c0 1.7 1.3 3 3 3s3-1.3 3-3h2v-5zM6 18.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m9-3.5H8.2c-.5-.6-1.3-1-2.2-1s-1.7.4-2.2 1H3V6h12zm3 3.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5M17 12V9.5h2.5l2 2.5zM6 11V9h6v2z"></svg:path>`,
})
export class MdiTruckMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckOffRoadIcon],svg[mdi-truck-off-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.81 3.4l-5.42.96l.7 3.94L.733 9.95l.867 4.92l1.97-.34c.14.78.58 1.47 1.24 1.93c.65.46 1.45.64 2.24.5c.78-.14 1.48-.58 1.95-1.23c.44-.66.62-1.46.5-2.23l5.89-1.06c.14.79.58 1.48 1.23 1.94c.65.45 1.46.62 2.24.5c.79-.14 1.48-.59 1.94-1.24c.46-.64.64-1.46.5-2.24l1.97-.35l-.52-2.95c-.2-1.1-1.25-1.82-2.32-1.6l-1.97.32zm-3.68 2.18l3.45-.61l2.36 2.12l-5.37.95zm-4.86 6.95A1.49 1.49 0 0 1 8 13.74c.07.4 0 .8-.25 1.12c-.22.33-.57.55-.96.64c-.4.05-.79-.04-1.12-.27a1.48 1.48 0 0 1-.62-.97c-.05-.39.02-.79.25-1.12c.23-.32.57-.54.97-.61m11.81-2.09c.39-.07.8.02 1.12.25c.33.23.55.58.62.97s-.02.8-.25 1.12c-.23.33-.57.55-.97.62c-.39.07-.79-.02-1.1-.25c-.34-.23-.57-.58-.63-.97c-.07-.39.02-.79.24-1.12c.23-.33.58-.56.97-.62M2.83 19.17L2 20v2h20v-6h-5.38c-1.07 0-2.12.17-3.16.5l-1.38.47C10.04 17.65 7.9 18 5.75 18h-.09c-1.06 0-2.08.42-2.83 1.17"></svg:path>`,
})
export class MdiTruckOffRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckOffRoadOffIcon],svg[mdi-truck-off-road-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l5.85 5.85l-6.227 1.1l.867 4.92l1.97-.34c.14.78.58 1.47 1.24 1.93c.65.46 1.45.64 2.24.5c.78-.14 1.48-.58 1.95-1.23c.44-.66.62-1.46.5-2.23l1.78-.33l3.09 3.09c-.31.07-.61.15-.91.24l-1.38.47C10.04 17.65 7.9 18 5.75 18h-.09c-1.06 0-2.08.42-2.83 1.17L2 20v2h18.11l.73.73l.73-.73H22v-.43l.11-.11l-.11-.11zm5 11.05c.32.22.54.57.61.96c.07.4 0 .8-.25 1.12c-.22.33-.57.55-.96.64c-.4.05-.79-.04-1.12-.27a1.48 1.48 0 0 1-.62-.97c-.05-.39.02-.79.25-1.12a1.505 1.505 0 0 1 2.09-.36M22 18.5L19.5 16H22zm-3.6-3.58c.16 0 .31-.02.46-.04c.79-.14 1.48-.59 1.94-1.24c.46-.64.64-1.46.5-2.24l1.97-.35l-.52-2.95c-.2-1.1-1.25-1.82-2.32-1.6l-1.97.32l-3.65-3.42l-5.42.96l.34 1.88zm-7.27-9.34l3.45-.61l2.36 2.12l-5.37.95zm6.95 4.86c.39-.07.8.02 1.12.25c.33.23.55.58.62.97s-.02.8-.25 1.12c-.23.33-.57.55-.97.62c-.39.07-.79-.02-1.1-.25c-.34-.23-.57-.58-.63-.97c-.07-.39.02-.79.24-1.12c.23-.33.58-.56.97-.62"></svg:path>`,
})
export class MdiTruckOffRoadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckOutlineIcon],svg[mdi-truck-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6z"></svg:path>`,
})
export class MdiTruckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckPlusIcon],svg[mdi-truck-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM8 6v3H5v2h3v3h2v-3h3V9h-3V6z"></svg:path>`,
})
export class MdiTruckPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckPlusOutlineIcon],svg[mdi-truck-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.7 1.3 3 3 3s3-1.3 3-3h6c0 1.7 1.3 3 3 3s3-1.3 3-3h2v-5zM6 18.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m9-3.5H8.2c-.5-.6-1.3-1-2.2-1s-1.7.4-2.2 1H3V6h12zm3 3.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5M17 12V9.5h2.5l2 2.5zm-9-1H6V9h2V7h2v2h2v2h-2v2H8z"></svg:path>`,
})
export class MdiTruckPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckRemoveIcon],svg[mdi-truck-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m6.54-6.38l-1.42 1.42L9 11.41l-2.12 2.13l-1.41-1.42L7.59 10L5.46 7.88l1.42-1.41L9 8.59l2.12-2.12l1.42 1.41L10.41 10zM18 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M17 12V9.5h2.5l1.96 2.5z"></svg:path>`,
})
export class MdiTruckRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckRemoveOutlineIcon],svg[mdi-truck-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m9-3.5H8.24c-.55-.61-1.35-1-2.24-1s-1.69.39-2.24 1H3V6h12zm3 3.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M17 12V9.5h2.5l1.96 2.5zm-11.18-.23L7.59 10L5.82 8.23l1.41-1.41L9 8.59l1.77-1.77l1.41 1.41L10.41 10l1.77 1.77l-1.41 1.41L9 11.41l-1.77 1.77z"></svg:path>`,
})
export class MdiTruckRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckSnowflakeIcon],svg[mdi-truck-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H3c-1.1 0-2 .9-2 2v11h2c0 1.7 1.3 3 3 3s3-1.3 3-3h6c0 1.7 1.3 3 3 3s3-1.3 3-3h2v-5l-3-4h-3zm-6.8 1.3h.3c.5.1.8.6.7 1.1l-.5 2l2-.5c.5-.1 1 .2 1.1.7s-.2 1-.6 1.1l-2 .5l1.4 1.4c.4.3.4.9 0 1.3c-.3.4-.9.4-1.3 0l-1.5-1.4l-.5 2c-.1.5-.6.8-1.1.6a.8.8 0 0 1-.6-1.1l.5-2l-2 .5c-.5.1-1-.2-1.1-.6c-.1-.5.2-1 .6-1.1l2-.5l-1.4-1.6c-.3-.3-.3-.9 0-1.3c.3-.3.9-.3 1.3 0l1.4 1.4l.5-2c.1-.2.4-.5.8-.5M17 9.5h2.5l2 2.5H17zm-11 6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5m12 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"></svg:path>`,
})
export class MdiTruckSnowflakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTruckTrailerIcon],svg[mdi-truck-trailer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2H10a3 3 0 0 1-3 3a3 3 0 0 1-3-3H2V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v9zM7 16a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiTruckTrailerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTrumpetIcon],svg[mdi-trumpet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6c-1 5-7 5-7 5H4c-1 0-2-1-2-1H1v4h1s1-1 2-1h.3c-.2.3-.3.6-.3 1v2c0 1.1.9 2 2 2h1v1h2v-1h1v1h2v-1h1v1h2v-1h1c1.1 0 2-.9 2-2v-2c0-.1 0-.3-.1-.4c1.7.6 3.5 1.8 4.1 4.4h1V6zM6 16.5c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1v3zm3 0v-3h1v3zm3 0v-3h1v3zm4.5-.5c0 .3-.2.5-.5.5h-1v-3h1c.3 0 .5.2.5.5zM9 10H7V9h2zm3 0h-2V9h2zm3 0h-2V9h2z"></svg:path>`,
})
export class MdiTrumpetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTshirtCrewIcon],svg[mdi-tshirt-crew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21H8a1 1 0 0 1-1-1v-7.93l-1.3 1a.996.996 0 0 1-1.41 0l-2.83-2.78a.996.996 0 0 1 0-1.41L7.34 3H9c0 1.1 1.34 2 3 2s3-.9 3-2h1.66l5.88 5.88c.39.39.39 1.02 0 1.41l-2.83 2.83c-.39.38-1.02.38-1.41 0l-1.3-1V20a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiTshirtCrewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTshirtCrewOutlineIcon],svg[mdi-tshirt-crew-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21H8a1 1 0 0 1-1-1v-7.93l-1.3 1.05c-.39.38-1.02.38-1.41 0l-2.83-2.83a.996.996 0 0 1 0-1.41L7.34 3H9c0 1.1 1.34 2 3 2s3-.9 3-2h1.66l5.88 5.88c.39.39.39 1.02 0 1.41l-2.83 2.83c-.39.38-1.02.38-1.41 0L17 12.07V20a1 1 0 0 1-1 1m4.42-11.42l-4.31-4.3c-.31.35-.68.66-1.11.92c-.84.5-1.87.8-3 .8c-1.7 0-3.21-.68-4.11-1.72l-4.31 4.3L5 11l3-2h1v10h6V9h1l3 2z"></svg:path>`,
})
export class MdiTshirtCrewOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTshirtVIcon],svg[mdi-tshirt-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21H8a1 1 0 0 1-1-1v-7.93l-1.3 1a.996.996 0 0 1-1.41 0l-2.83-2.78a.996.996 0 0 1 0-1.41L7.34 3H9c.29 1.8 1.4 3.37 3 4.25c1.6-.88 2.71-2.45 3-4.25h1.66l5.88 5.88c.39.39.39 1.02 0 1.41l-2.83 2.83c-.39.38-1.02.38-1.41 0l-1.3-1V20a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiTshirtVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTshirtVOutlineIcon],svg[mdi-tshirt-v-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21H8a1 1 0 0 1-1-1v-7.93l-1.3 1.05c-.39.38-1.02.38-1.41 0l-2.83-2.83a.996.996 0 0 1 0-1.41L7.34 3H9c0 1.1 1 3 3 4.25C14 6 15 4.1 15 3h1.66l5.88 5.88c.39.39.39 1.02 0 1.41l-2.83 2.83c-.39.38-1.02.38-1.41 0L17 12.07V20a1 1 0 0 1-1 1m4.42-11.42l-4.31-4.3C15 7 14 8.25 12 9.25c-2-1-3-2.25-4.11-3.97l-4.31 4.3L5 11l3-2h1v10h6V9h1l3 2z"></svg:path>`,
})
export class MdiTshirtVOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTsunamiIcon],svg[mdi-tsunami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.67 17.63c-3.8 2.8-6.12.4-6.67 0c-.66.49-2.92 2.76-6.67 0C3.43 19.03 2.65 19 2 19v2c1.16 0 2.3-.32 3.33-.93a6.54 6.54 0 0 0 6.67 0a6.54 6.54 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5 0-3.33-1.37m.66-5.63H22v-2h-2.67C17.5 10 16 8.5 16 6.67c0-1.02.38-1.74 1.09-3.34c-1.37-.21-2-.33-3.09-.33C7.36 3 2.15 8.03 2 14.5v2c1.16 0 2.3-.32 3.33-.93a6.54 6.54 0 0 0 6.67 0a6.54 6.54 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5 0-3.33-1.37c-3.8 2.8-6.12.4-6.67 0c-.9.67-.54.41-.91.63c-.7-.94-1.09-2.06-1.09-3.26c0-2.58 1.77-4.74 4.21-5.33c-.13.51-.21 1.02-.21 1.5C14 9.61 16.39 12 19.33 12"></svg:path>`,
})
export class MdiTsunamiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTumbleDryerIcon],svg[mdi-tumble-dryer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m1 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m3 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m2 4a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m-3.89 2.5H10c-.24 1.38 0 2.17.58 2.79c1.1 1.07 1.58 2.42 1.31 4.21H10c.24-1.38 0-2.17-.58-2.79c-1.1-1.07-1.57-2.42-1.31-4.21m4 0H14c-.24 1.38 0 2.17.58 2.79c1.1 1.07 1.58 2.42 1.31 4.21H14c.24-1.38 0-2.17-.58-2.79c-1.1-1.07-1.57-2.42-1.31-4.21"></svg:path>`,
})
export class MdiTumbleDryerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTumbleDryerAlertIcon],svg[mdi-tumble-dryer-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h12a2 2 0 0 1 2 2v16c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m1 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m2 4c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m-3.89 2.5H8c-.24 1.38 0 2.17.58 2.79c1.1 1.07 1.58 2.42 1.31 4.21H8c.24-1.38 0-2.17-.58-2.79c-1.1-1.07-1.57-2.42-1.31-4.21m4 0H12c-.24 1.38 0 2.17.58 2.79c1.1 1.07 1.58 2.42 1.31 4.21H12c.24-1.38 0-2.17-.58-2.79c-1.1-1.07-1.57-2.42-1.31-4.21M20 15h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiTumbleDryerAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTumbleDryerOffIcon],svg[mdi-tumble-dryer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L4 5.89V20c0 1.11.89 2 2 2h12c.58 0 1.1-.25 1.46-.65l1.38 1.38zM12 20c-3.31 0-6-2.69-6-6c0-1.68.7-3.2 1.82-4.29l.79.79h-.5c-.26 1.79.21 3.14 1.31 4.21c.58.62.82 1.41.58 2.79h1.89c.27-1.79-.21-3.14-1.31-4.21c-.36-.38-.58-.85-.63-1.45l4.08 4.08c.08.43.08.94-.03 1.58h1.61l.68.68A5.96 5.96 0 0 1 12 20m-.75-11.95C11.5 8 11.75 8 12 8c3.31 0 6 2.69 6 6c0 .25 0 .5-.05.75L20 16.8V4a2 2 0 0 0-2-2H6c-.24 0-.46.05-.67.13zM10 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class MdiTumbleDryerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTumblrIcon],svg[mdi-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17 11h-4v4.5c0 .94.28 1.5 1.5 1.5H17v4s-1.46.05-2.83.05c-3.37 0-4.67-2.05-4.67-4.3V11H7V7c3.07-.26 3.27-2.5 3.5-4H13v4h4" fill="currentColor"></svg:path>`,
})
export class MdiTumblrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTumblrBoxIcon],svg[mdi-tumblr-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 11h-3v3.9c0 .73.14 1.1 1.1 1.1H16v3s-1.03.1-2.1.1c-2.65 0-3.9-1.6-3.9-3.4V11H8V8.2c2.41-.2 2.62-2.04 2.8-3.2H13v3h3m4-6H4c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" fill="currentColor"></svg:path>`,
})
export class MdiTumblrBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTumblrReblogIcon],svg[mdi-tumblr-reblog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3.75 17L8 12.75V16h10v-4.5l2-2V16a2 2 0 0 1-2 2H8v3.25L3.75 17m16.5-10L16 11.25V8H6v4.5l-2 2V8a2 2 0 0 1 2-2h10V2.75L20.25 7z" fill="currentColor"></svg:path>`,
})
export class MdiTumblrReblogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTuneIcon],svg[mdi-tune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"></svg:path>`,
})
export class MdiTuneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTuneVariantIcon],svg[mdi-tune-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13c-1.86 0-3.41 1.28-3.86 3H2v2h2.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H22v-2H11.86c-.45-1.72-2-3-3.86-3m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M19.86 6c-.45-1.72-2-3-3.86-3s-3.41 1.28-3.86 3H2v2h10.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H22V6zM16 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class MdiTuneVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTuneVerticalIcon],svg[mdi-tune-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3H5v6h2zm12 0h-2v10h2zM3 13h2v8h2v-8h2v-2H3zm12-6h-2V3h-2v4H9v2h6zm-4 14h2V11h-2zm4-6v2h2v4h2v-4h2v-2z"></svg:path>`,
})
export class MdiTuneVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTuneVerticalVariantIcon],svg[mdi-tune-vertical-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12.14V2H6v10.14c-1.72.45-3 2-3 3.86s1.28 3.41 3 3.86V22h2v-2.14c1.72-.45 3-2 3-3.86s-1.28-3.41-3-3.86M7 14c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M18 2h-2v2.14c-1.72.45-3 2-3 3.86s1.28 3.41 3 3.86V22h2V11.86c1.72-.45 3-2 3-3.86s-1.28-3.41-3-3.86zm-1 4c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></svg:path>`,
})
export class MdiTuneVerticalVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTunnelIcon],svg[mdi-tunnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12v10h20V12c0-5.5-4.5-10-10-10M7.1 5.69A7.94 7.94 0 0 1 11 4.07v2.02c-.91.15-1.75.51-2.47 1.02zm8.37 1.42A5.95 5.95 0 0 0 13 6.09V4.07c1.46.18 2.79.76 3.9 1.62zM5.69 7.1l1.42 1.43A5.95 5.95 0 0 0 6.09 11H4.07c.18-1.46.76-2.79 1.62-3.9M6 13v2.5H4V13zm-2 7v-2.5h2V20zM16.89 8.53l1.42-1.43a7.94 7.94 0 0 1 1.62 3.9h-2.02a5.95 5.95 0 0 0-1.02-2.47M18 13h2v2.5h-2zm0 7v-2.5h2V20z"></svg:path>`,
})
export class MdiTunnelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTunnelOutlineIcon],svg[mdi-tunnel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12v10h20V12c0-5.5-4.5-10-10-10m3.47 5.11A5.95 5.95 0 0 0 13 6.09V4.07c1.46.18 2.79.76 3.9 1.62zm-6.94 0L7.1 5.69A7.94 7.94 0 0 1 11 4.07v2.02c-.91.15-1.75.51-2.47 1.02M5.69 7.1l1.42 1.43A5.95 5.95 0 0 0 6.09 11H4.07c.18-1.46.76-2.79 1.62-3.9M6 13v2.5H4V13zm-2 7v-2.5h2V20zm12 0H8v-8c0-2.21 1.79-4 4-4s4 1.79 4 4zm.89-11.47l1.42-1.43a7.94 7.94 0 0 1 1.62 3.9h-2.02a5.95 5.95 0 0 0-1.02-2.47M18 13h2v2.5h-2zm0 7v-2.5h2V20z"></svg:path>`,
})
export class MdiTunnelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTurbineIcon],svg[mdi-turbine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2S2 6.5 2 12m18 0c0 4.4-3.6 8-8 8s-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8m-7.5-5l-.3 1.3l-.9-3.3c-1 .3-1.6 1.3-1.4 2.4l.3 1.3l-2.3-2.4c-.7.7-.7 2 0 2.7l1 1l-3.3-.9c-.3 1 .3 2.1 1.4 2.4l1.3.3l-3.3.9c.3 1 1.3 1.6 2.4 1.4l1.3-.3l-2.4 2.4c.8.7 2 .7 2.7 0l.9-.9l-.9 3.3c1 .3 2.1-.3 2.4-1.4l.3-1.3l.9 3.3c1-.3 1.6-1.3 1.4-2.4l-.3-1.3l2.4 2.4c.7-.8.7-2 0-2.7l-1-1.2l3.3.9c.3-1-.3-2.1-1.4-2.4l-1.3-.3l3.3-.9c-.3-1-1.3-1.6-2.4-1.4l-1.3.3l2.4-2.4c-.8-.7-2-.7-2.7 0l-.9 1l.9-3.3c-1.1-.2-2.2.4-2.5 1.5m1 5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5"></svg:path>`,
})
export class MdiTurbineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTurkeyIcon],svg[mdi-turkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 19.44c-.75.36-1.6.56-2.5.56c-3.31 0-6-2.69-6-6V9c0-3.31 2.69-6 6-6l2.5 4.58c-2.4 1.23-4 3.42-4 5.92s1.61 4.7 4 5.94m5.5-.5V20h1c.55 0 1 .45 1 1s-.45 1-1 1h-3c-.55 0-1-.45-1-1s.45-1 1-1v-1.06c-3.39-.38-6-2.67-6-5.44C8 10.46 11.13 8 15 8h.56C14.84 6.63 14 5.23 14 4c0-1.1.9-2 2-2c2.21 0 4 1.79 4 4h-2s4 3 4 7.5c0 2.77-2.61 5.06-6 5.44M16 4c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1m1 8a2 2 0 0 0-2-2c-2.21 0-4 1.79-4 4h4c1.11 0 2-.89 2-2"></svg:path>`,
})
export class MdiTurkeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTurnstileIcon],svg[mdi-turnstile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-6V11l-6-6V2h12zM9.17 6.17C8.42 6.92 8 7.94 8 9H2v2h6.55c.35.6.85 1.1 1.45 1.45V19h2v-6c1.06 0 2.08-.42 2.83-1.17z"></svg:path>`,
})
export class MdiTurnstileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTurnstileOutlineIcon],svg[mdi-turnstile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.41 10.41c-.37.38-.88.59-1.41.59a2 2 0 0 1-2-2c0-.53.21-1.04.59-1.41L9.17 6.17C8.42 6.92 8 7.94 8 9H2v2h6.55c.35.6.85 1.1 1.45 1.45V19h2v-6c1.06 0 2.08-.42 2.83-1.17zM10 2v3l6 6v11h6V2zm10 18h-2v-9.83l-6-6V4h8z"></svg:path>`,
})
export class MdiTurnstileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTurtleIcon],svg[mdi-turtle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.47 5.95c.48-.28 1-.51 1.53-.67V4c0-1.1.87-2 1.97-2.03C13.13 2 14 2.9 14 4v1.28c.53.17 1.05.39 1.53.67l-1.6 2.12h-3.86zM19 12c0 .5-.05.95-.14 1.4l-2.53-.78l-1.19-3.66l1.6-2.11q.645.6 1.14 1.35c.79-.07 1.55.05 2.23.39c1.03.53 1.73 1.54 1.89 2.69l-3 .36zM5 12v-.35l-3-.37c.16-1.15.86-2.16 1.89-2.69a3.54 3.54 0 0 1 2.19-.33c.33-.51.71-.98 1.16-1.39l1.62 2.08l-1.19 3.67l-2.53.78C5.05 12.95 5 12.5 5 12m5.24-2.43h3.52l1.09 3.36L12 15l-2.85-2.07zm-2.11 4.48l3.12 2.26v2.65c-.57-.06-1.12-.19-1.63-.38l-1.23 2.76a3.49 3.49 0 0 1-2.02-2.58c-.14-.76-.02-1.52.32-2.2c-.45-.52-.82-1.1-1.1-1.74zm7.74 0l2.54.77c-.28.64-.65 1.22-1.1 1.74c.34.68.46 1.44.33 2.2a3.52 3.52 0 0 1-2.03 2.58l-1.22-2.76c-.53.19-1.06.36-1.64.42v-2.69z"></svg:path>`,
})
export class MdiTurtleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTwitchIcon],svg[mdi-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"></svg:path>`,
})
export class MdiTwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTwitterIcon],svg[mdi-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"></svg:path>`,
})
export class MdiTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTwitterBoxIcon],svg[mdi-twitter-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m12.71 6.33c.48-.4 1.04-.88 1.29-1.41c-.41.21-.9.34-1.44.41c.5-.36.91-.83 1.12-1.47c-.52.28-1.05.52-1.71.64c-1.55-1.87-5.26-.35-4.6 2.45c-2.61-.16-4.2-1.34-5.52-2.79c-.75 1.22-.1 3.07.79 3.58c-.46-.03-.81-.17-1.14-.33c.04 1.54.89 2.28 2.08 2.68c-.36.07-.76.09-1.14.03c.37 1.07 1.14 1.74 2.46 1.88c-.9.76-2.56 1.29-3.9 1.08c1.15.73 2.46 1.31 4.28 1.23c4.41-.2 7.36-3.36 7.43-7.98z" fill="currentColor"></svg:path>`,
})
export class MdiTwitterBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTwitterCircleIcon],svg[mdi-twitter-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17.71 9.33c.48-.4 1.04-.88 1.29-1.41c-.41.21-.9.34-1.44.41c.5-.36.91-.83 1.12-1.47c-.52.28-1.05.52-1.71.64c-1.55-1.87-5.26-.35-4.6 2.45c-2.61-.16-4.2-1.34-5.52-2.79c-.75 1.22-.1 3.07.79 3.58c-.46-.03-.81-.17-1.14-.33c.04 1.54.89 2.28 2.08 2.68c-.36.07-.76.09-1.14.03c.37 1.07 1.14 1.74 2.46 1.88c-.9.76-2.56 1.29-3.9 1.08c1.15.73 2.46 1.31 4.28 1.23c4.41-.2 7.36-3.36 7.43-7.98M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2z" fill="currentColor"></svg:path>`,
})
export class MdiTwitterCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTwoFactorAuthenticationIcon],svg[mdi-two-factor-authentication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v2h4v2H4a2 2 0 0 0-2 2v4h6v-2H4v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm7 0v10h2v-4h3v-2h-3V9h4V7zm9 0a2 2 0 0 0-2 2v8h2v-3h2v3h2V9a2 2 0 0 0-2-2zm0 2h2v3h-2z"></svg:path>`,
})
export class MdiTwoFactorAuthenticationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTypewriterIcon],svg[mdi-typewriter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13h-4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2H4l-2 5v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2M6 20c-.89 0-1.34-1.08-.71-1.71S7 18.11 7 19c0 .55-.45 1-1 1m4 0c-.89 0-1.34-1.08-.71-1.71S11 18.11 11 19c0 .55-.45 1-1 1m4 0c-.89 0-1.34-1.08-.71-1.71S15 18.11 15 19c0 .55-.45 1-1 1m4 0c-.89 0-1.34-1.08-.71-1.71S19 18.11 19 19c0 .55-.45 1-1 1m0-10V3H6v7H3v2h18v-2M8 5h8v1H8m0 1h6v1H8"></svg:path>`,
})
export class MdiTypewriterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUberIcon],svg[mdi-uber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6.38 13.24v-4.2H7.4v6.8H6.39v-.63c-.46.47-1.1.75-1.81.75C3.12 15.96 2 14.9 2 13.3V9.04h1v4.2c0 1.09.74 1.8 1.7 1.8c.94 0 1.68-.73 1.68-1.8m2.76-4.2v2.46c.23-.21.51-.4.81-.53c.3-.12.63-.19.96-.19c1.46 0 2.59 1.16 2.59 2.59s-1.13 2.59-2.59 2.59c-.33 0-.66-.07-.96-.19c-.31-.13-.58-.32-.82-.55v.62h-.97v-6.8h.98m3.41 4.33c0-.96-.78-1.72-1.71-1.72c-.95 0-1.71.76-1.71 1.72c0 .95.75 1.72 1.71 1.72c.93 0 1.71-.77 1.71-1.72m3.91-2.58c1.44 0 2.49 1.1 2.49 2.57v.33h-4.04c.13.81.8 1.4 1.64 1.4c.58 0 1.06-.23 1.45-.73l.7.53a2.62 2.62 0 0 1-2.15 1.06c-1.49 0-2.64-1.11-2.64-2.59c0-1.39 1.09-2.57 2.55-2.57m-1.54 2.12h3.03c-.16-.76-.77-1.26-1.51-1.26c-.73 0-1.34.5-1.52 1.26m5.58.09v2.84h-1v-4.95h.97v.61c.24-.4.64-.65 1.19-.65H22v.91h-.41c-.64 0-1.09.5-1.09 1.24" fill="currentColor"></svg:path>`,
})
export class MdiUberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUbisoftIcon],svg[mdi-ubisoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.41 2c-6.2 0-8.88 5.53-8.88 5.53l.79.56S2.33 10 2.35 12.4c0 4.94 3.94 9.6 9.72 9.6c5.26 0 9.6-4.29 9.6-9.59C21.67 5.5 16.31 2 11.41 2m.06 1.69c4.84 0 8.6 3.91 8.6 8.45c0 4.81-3.62 8.16-7.84 8.16c-3.1 0-5.9-2.36-5.9-5.6c0-1.88.99-3.2 2.11-3.88l.16.18c-.3.24-1.17 1.64-1.17 3c0 2.56 2 4.33 4.52 4.33c3.21 0 5.35-2.74 5.35-5.92c0-3.7-3.27-6.84-7.2-6.84c-2.17 0-4.01.93-5.07 1.76l-.17-.15c1.39-2.14 3.79-3.49 6.61-3.49M10 7.23c2.53 0 4.97 1.66 5.59 4.02l-.23.08c-1.09-1.45-2.89-2.65-5.01-2.65c-3.91 0-5.96 3.55-5.66 6.51l-.23.09s-.43-.95-.43-2.08c0-3.27 2.68-5.97 5.97-5.97m1.68 4.1c1.18 0 2.13.97 2.13 2.11c0 .94-.6 1.5-.6 1.5l.71.51s-.71 1.12-2.16 1.12c-1.39 0-2.63-1.13-2.63-2.64c0-1.55 1.34-2.6 2.55-2.6"></svg:path>`,
})
export class MdiUbisoftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUbuntuIcon],svg[mdi-ubuntu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-7.66-4.26c.58.33 1.31.13 1.66-.44c.31-.57.12-1.3-.46-1.64c-.57-.33-1.31-.16-1.64.44c-.33.57-.13 1.31.44 1.64m-2.46 7.76c-.53 0-1.03-.11-1.47-.32l-.84 1.5c.7.32 1.48.54 2.31.54c.49 0 .95-.07 1.4-.19c.08-.49.36-.93.82-1.19c.46-.27.98-.29 1.44-.12c.89-.87 1.46-2.06 1.55-3.39l-1.71-.02a3.506 3.506 0 0 1-3.5 3.19m0-7c1.84 0 3.34 1.39 3.5 3.19l1.71-.03a5.2 5.2 0 0 0-1.55-3.38c-.46.17-.99.14-1.44-.12c-.46-.26-.74-.71-.82-1.19c-.45-.12-.91-.19-1.4-.19c-.83 0-1.61.19-2.31.54l.84 1.5c.44-.21.94-.32 1.47-.32M8.37 12c0-1.19.59-2.24 1.49-2.87L9 7.65a5.22 5.22 0 0 0-2.17 3.04c.38.31.62.78.62 1.31s-.24 1-.62 1.31A5.2 5.2 0 0 0 9 16.34l.86-1.47c-.9-.63-1.49-1.68-1.49-2.87m5.97 4.26c-.57.33-.77 1.06-.44 1.64c.33.57 1.07.77 1.64.44c.58-.34.77-1.07.46-1.64c-.35-.58-1.08-.77-1.66-.44M5.76 10.8c-.66 0-1.2.54-1.2 1.2s.54 1.2 1.2 1.2c.67 0 1.2-.54 1.2-1.2s-.53-1.2-1.2-1.2"></svg:path>`,
})
export class MdiUbuntuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUfoIcon],svg[mdi-ufo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.94 10.28C15.66 7.87 14 6 12 6s-3.66 1.87-3.94 4.28C4.5 10.82 2 12.06 2 13.5C2 15.43 6.5 17 12 17s10-1.57 10-3.5c0-1.44-2.5-2.68-6.06-3.22"></svg:path>`,
})
export class MdiUfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUfoOutlineIcon],svg[mdi-ufo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.54C16.78 7.44 14.63 5 12 5s-4.78 2.44-5 5.54C4 11.23 2 12.5 2 14c0 2.21 4.5 4 10 4s10-1.79 10-4c0-1.5-2-2.77-5-3.46m-2.07 1.3c-1.9.21-3.96.21-5.86 0c-.04-.28-.07-.56-.07-.84c0-2.2 1.35-4 3-4s3 1.8 3 4c0 .28 0 .56-.07.84"></svg:path>`,
})
export class MdiUfoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUltraHighDefinitionIcon],svg[mdi-ultra-high-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v4h2V7h2v10h-2v-4h-2v4H9zm8 0h3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3zm3 8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v6zM7 14a3 3 0 0 1-3 3a3 3 0 0 1-3-3V7h2v7a1 1 0 0 0 1 1a1 1 0 0 0 1-1V7h2z"></svg:path>`,
})
export class MdiUltraHighDefinitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUmbracoIcon],svg[mdi-umbraco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.6 8.6l-1.43-.22c-.67 3.29-.71 5.86.44 7.12c.99 1.11 4.28 1.11 4.28 1.11s3.4 0 4.39-1.11c1.15-1.26 1.1-3.83.44-7.12l-1.43.22s1.25 5.28-.6 6.09c-.88.38-2.8.38-2.8.38s-1.81 0-2.69-.38c-1.85-.81-.6-6.09-.6-6.09M12 3a9 9 0 0 1 9 9a9 9 0 0 1-9 9a9 9 0 0 1-9-9a9 9 0 0 1 9-9"></svg:path>`,
})
export class MdiUmbracoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUmbrellaIcon],svg[mdi-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a9 9 0 0 1 9 9h-8v8a3 3 0 0 1-3 3a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-8H3a9 9 0 0 1 9-9"></svg:path>`,
})
export class MdiUmbrellaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUmbrellaBeachIcon],svg[mdi-umbrella-beach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.13 14.56l1.43-1.43L21 19.57L19.57 21zm4.29-5.73l2.86-2.86C16.33 2 9.93 2 6 5.95c3.91-1.3 8.29-.25 11.42 2.88M5.95 6C2 9.93 2 16.33 5.97 20.28l2.86-2.86C5.7 14.29 4.65 9.91 5.95 6m.02-.04l-.01.01C5.58 9 7.13 12.85 10.26 16L16 10.26c-3.14-3.13-7-4.68-10.03-4.3"></svg:path>`,
})
export class MdiUmbrellaBeachIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUmbrellaBeachOutlineIcon],svg[mdi-umbrella-beach-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19.57L19.57 21l-6.44-6.44l1.43-1.43zM13.12 3C10.54 3 7.96 4 6 5.95l-.03.01a10.086 10.086 0 0 0 0 14.31l14.3-14.31A10.13 10.13 0 0 0 13.12 3M6.14 17.27a8.06 8.06 0 0 1-.68-6.82c.19 1.91.89 3.79 2.07 5.44zM9 14.43c-1.37-2.05-1.88-4.5-1.4-6.83c.58-.1 1.16-.18 1.75-.18c1.8 0 3.55.55 5.08 1.58zm1.45-8.97a8.06 8.06 0 0 1 6.82.68l-1.39 1.39a11.25 11.25 0 0 0-5.43-2.07"></svg:path>`,
})
export class MdiUmbrellaBeachOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUmbrellaClosedIcon],svg[mdi-umbrella-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2q-.6 0-.9.6L6.5 15H11v4c0 .6-.4 1-1 1s-1-.4-1-1v-1H7v1c0 1.7 1.3 3 3 3s3-1.3 3-3v-4h4.5L12.9 2.6Q12.6 2 12 2"></svg:path>`,
})
export class MdiUmbrellaClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUmbrellaClosedOutlineIcon],svg[mdi-umbrella-closed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c.4 0 .8.2.9.6L17.5 15H13v4c0 1.7-1.3 3-3 3s-3-1.3-3-3v-1h2v1c0 .6.4 1 1 1s1-.4 1-1v-4H6.5l4.6-12.4c.1-.4.5-.6.9-.6m0 3.9L9.4 13h5.3z"></svg:path>`,
})
export class MdiUmbrellaClosedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUmbrellaClosedVariantIcon],svg[mdi-umbrella-closed-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 7l-2-1V3.5c0-.3.2-.5.5-.5s.5.2.5.5V4h2v-.5C16 2.1 14.9 1 13.5 1S11 2.1 11 3.5V6L9 7L6 6l5.1 15.3c.3.9 1.6.9 1.9 0C14.6 16.2 18 6 18 6zm-4 8L9 8.9l.7.2l1.3-1zm2-6.9l1.3 1l.7-.2l-2 6.1z"></svg:path>`,
})
export class MdiUmbrellaClosedVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUmbrellaOutlineIcon],svg[mdi-umbrella-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C8.9 4 6.18 6.03 5.3 9h13.4A7 7 0 0 0 12 4m0-2a9 9 0 0 1 9 9h-8v8a3 3 0 0 1-3 3a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-8H3a9 9 0 0 1 9-9"></svg:path>`,
})
export class MdiUmbrellaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUnderwearOutlineIcon],svg[mdi-underwear-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-.55 0-1 .45-1 1v5c0 5.5 4.5 10 10 10s10-4.5 10-10V5c0-.55-.45-1-1-1zm17 2v2H4V6zM4 10h16c0 .34 0 .67-.06 1A6.996 6.996 0 0 0 13 17.94c-.33.06-.66.06-1 .06s-.67 0-1-.06A6.996 6.996 0 0 0 4.06 11C4 10.67 4 10.34 4 10m11.04 7.4a4.99 4.99 0 0 1 4.37-4.36a8.18 8.18 0 0 1-4.38 4.37M4.6 13.04c2.28.27 4.1 2.08 4.37 4.37a8.12 8.12 0 0 1-4.37-4.38Z"></svg:path>`,
})
export class MdiUnderwearOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUndoIcon],svg[mdi-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8"></svg:path>`,
})
export class MdiUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUndoVariantIcon],svg[mdi-undo-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 7a6.5 6.5 0 0 1 6.5 6.5a6.5 6.5 0 0 1-6.5 6.5H10v-2h3.5c2.5 0 4.5-2 4.5-4.5S16 9 13.5 9H7.83l3.08 3.09L9.5 13.5L4 8l5.5-5.5l1.42 1.41L7.83 7zM6 18h2v2H6z"></svg:path>`,
})
export class MdiUndoVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUnfoldLessHorizontalIcon],svg[mdi-unfold-less-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.59 5.41L15.17 4L12 7.17L8.83 4L7.41 5.41L12 10m-4.59 8.59L8.83 20L12 16.83L15.17 20l1.41-1.41L12 14z"></svg:path>`,
})
export class MdiUnfoldLessHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUnfoldLessVerticalIcon],svg[mdi-unfold-less-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.41 7.41L10 12l-4.59 4.59L4 15.17L7.17 12L4 8.83zm13.18 9.18L14 12l4.59-4.58L20 8.83L16.83 12L20 15.17z"></svg:path>`,
})
export class MdiUnfoldLessVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUnfoldMoreHorizontalIcon],svg[mdi-unfold-more-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.17L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15M12 5.83L15.17 9l1.41-1.41L12 3L7.41 7.59L8.83 9z"></svg:path>`,
})
export class MdiUnfoldMoreHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUnfoldMoreVerticalIcon],svg[mdi-unfold-more-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.17 12L15 8.83l1.41-1.42L21 12l-4.59 4.58L15 15.17zM5.83 12L9 15.17l-1.41 1.42L3 12l4.59-4.58L9 8.83z"></svg:path>`,
})
export class MdiUnfoldMoreVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUngroupIcon],svg[mdi-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h4v1h7V2h4v4h-1v3h2V8h4v4h-1v6h1v4h-4v-1h-6v1H8v-4h1v-2H6v1H2v-4h1V6H2zm16 10v-1h-2v2h1v4h-4v-1h-2v2h1v1h6v-1h1v-6zm-5-6V5H6v1H5v7h1v1h3v-2H8V8h4v1h2V6zm-1 6h-1v2h2v-1h1v-2h-2z"></svg:path>`,
})
export class MdiUngroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUnicodeIcon],svg[mdi-unicode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6a1.46 1.46 0 0 1-1.46 1.44A1.46 1.46 0 0 1 19.09 6a1.46 1.46 0 0 1 1.45-1.5A1.46 1.46 0 0 1 22 6m-.44 2.86h-2.03c-.13-.01-.19.05-.19.14v3.59c0 .49 0 .91.01 1.27l.02.9c.01.24.02.45.02.63c.01.17.01.33.01.47h-.02c-.12-.26-.31-.64-.56-1.12c-.24-.47-.53-1.02-.85-1.63c-.33-.61-.68-1.27-1.05-1.96c-.37-.68-.74-1.37-1.11-2.04c-.36-.68-.72-1.33-1.06-1.95q-.525-.93-.9-1.62c-.03-.04-.06-.1-.08-.12c-.03-.02-.09-.03-.17-.03h-2.98c-.12 0-.15.05-.15.15h.03c-.03.02-.03.03-.03.04v8.26c0 .66-.07 1.16-.22 1.61c-.15.43-.35.78-.61 1.05c-.26.25-.57.43-.92.55c-.36.11-.72.17-1.16.17c-1.02 0-1.77-.31-2.26-.91c-.5-.61-.74-1.42-.74-2.43V5.56c0-.11-.06-.17-.17-.17H2.17c-.11 0-.17.06-.17.19v8.49c0 .93.13 1.71.38 2.39c.25.67.62 1.23 1.12 1.68c.46.44 1.03.78 1.71 1s1.43.36 2.26.36c.77 0 1.5-.12 2.18-.33c.69-.2 1.28-.53 1.77-.97c.49-.45.88-1.02 1.17-1.7c.29-.71.44-1.55.44-2.54V8.62c.11.24.25.53.41.85c.29.58.61 1.21.98 1.91s.75 1.42 1.16 2.18c.42.76.81 1.5 1.19 2.2c.39.7.73 1.35 1.06 1.94c.32.59.57 1.06.75 1.42c.05.1.15.15.27.15h2.69c.14 0 .21-.07.21-.19V9.05c0-.13-.07-.2-.19-.2Z"></svg:path>`,
})
export class MdiUnicodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUnicornIcon],svg[mdi-unicorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 5l-.89 1.34c.54.36.89.97.89 1.66v3.5l-1.5.5l-1.54-2.46c-.13-.21-.46-.12-.46.13v3.58c0 .98-.39 1.86-1 2.53V22H15v-5h-.25c-.21 0-.42-.03-.62-.06l-4.68-.78l-.88 1.96l.97 3.88H6.96l-.92-3.7c-.07-.27-.04-.56.07-.8l.89-2a3.32 3.32 0 0 1-1.5-2.69c-.04.15-.06.37-.03.69c.03.44.14 1.09.07 1.81c-.04.72-.36 1.46-.78 1.95c-.44.49-.91.83-1.41 1.09l-.7-.7c.19-.47.38-.89.42-1.28c.06-.37-.01-.67-.12-.94l-.53-1.13c-.21-.51-.47-1.25-.42-2.12c.03-.85.5-1.96 1.39-2.57c.9-.61 1.87-.7 2.66-.53c.5.1 1.01.34 1.45.68c.37-.17.8-.26 1.25-.26h5.75V9c0-2.21 1.79-4 4-4L22 2l-1 3z"></svg:path>`,
})
export class MdiUnicornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUnicornVariantIcon],svg[mdi-unicorn-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12v7l-3 1l-3-4.67c-.29-.44-1-.19-.92.34L14 23L4 18l.96-5.25C5.56 9.42 8.46 7 11.84 7H13l6-6l-2 6h3l-1.58 2.37C19.36 9.88 20 10.86 20 12"></svg:path>`,
})
export class MdiUnicornVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUnicycleIcon],svg[mdi-unicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9.09V5h1c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1h1v4.09c-2.84.48-5 2.94-5 5.91c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.97-2.16-5.43-5-5.91M12 19c-2.21 0-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86V16h2v-4.86c1.72.45 3 2 3 3.86c0 2.21-1.79 4-4 4"></svg:path>`,
})
export class MdiUnicycleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUnityIcon],svg[mdi-unity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.11 17H7.5l-4.91-5L7.5 7h2.61l1.31-2.26L18.21 3l1.87 6.74L18.77 12l1.31 2.26L18.21 21l-6.79-1.74zm.14-.25l5.13 1.38L12.42 13H6.5zm6.87.38L18.5 12l-1.38-5.13L14.15 12zm-6.87-9.88L6.5 11h5.92l2.96-5.13z"></svg:path>`,
})
export class MdiUnityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUnrealIcon],svg[mdi-unreal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12m3.24 6.76A9.5 9.5 0 0 1 2.44 12c0-2.55.99-4.95 2.8-6.76A9.5 9.5 0 0 1 12 2.44c2.55 0 4.95.99 6.76 2.8a9.5 9.5 0 0 1 2.8 6.76c0 2.55-.99 4.95-2.8 6.76a9.5 9.5 0 0 1-6.76 2.8c-2.55 0-4.95-.99-6.76-2.8M6.35 9.5c-2.01 2.29-1.62 4.18-1.62 4.18s.55-1.3 1.88-2.68c.64-.63 1.11-.85 1.43-.85c.36 0 .53.26.53.5v4.64c0 .46-.3.56-.57.55a1.5 1.5 0 0 1-.45-.08C8.92 17.73 12.19 18 12.19 18l1.44-1.5h.04L15 17.63c2.39-1.42 3.55-4.05 3.55-4.05c-1.05 1.12-1.76 1.39-2.16 1.38c-.36 0-.51-.21-.51-.21c-.01-.1-.06-5.85.01-5.85c.42-.77 1.74-2.34 1.74-2.34c-2.47.49-3.82 2.1-3.82 2.1c-.4-.31-1.22-.26-1.22-.26c.38.21.76.81.76 1.32v4.93s-.85.73-1.47.73c-.38 0-.61-.21-.74-.38c-.09-.12-.14-.21-.14-.21v-6.1c-.07.06-.18.11-.29.11c-.14-.01-.28-.07-.37-.27c-.08-.15-.12-.38-.12-.7c0-1.13 1.28-1.87 1.28-1.87c-1.63.43-3.14 1.26-5.15 3.54"></svg:path>`,
})
export class MdiUnrealIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUntappdIcon],svg[mdi-untappd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14.41 4s.53.39.56.71c0 .1-.24.14-.29.22c-.06.07.02.22-.03.28c-.06.05-.15.05-.24.2c-.08.15-2.34 4.68-2.68 5.22c-.14.4-.26 1.83-.36 2.03c-.11.19-5.03 7.18-5.21 7.39c-.49.58-1.85.25-2.88-.49c-.98-.7-1.54-1.86-1.17-2.4c.16-.23 5.04-7.24 5.18-7.41c.15-.17 1.46-.75 1.78-1.04c.4-.49 3.89-4.17 4-4.29c.11-.12.08-.22.11-.29c.04-.07.2-.05.25-.13c.07-.07-.04-.29.07-.32c.09-.04.46-.01.91.32m-3.56.44l.89.93l-1.48 1.57l-.8-1.57c-.08-.15-.18-.15-.24-.2c-.05-.06.02-.2-.03-.28c-.06-.08-.29-.06-.29-.16c0-.11.15-.45.6-.77c0 0 .56-.36.87-.28c.1.03.06.27.13.32c.04.1.2.08.23.15c.04.06 0 .17.12.29m11.07 12.71c.37.66-.39 1.85-1.42 2.55c-1 .69-2.29.84-2.67.3c-.17-.22-5.16-7.18-5.27-7.38c-.11-.19-.24-1.62-.38-2.03l-.03-.04c.3-.55.92-1.78 1.58-3.08c.57.59 1.02 1.09 1.15 1.25c.33.28 1.65.86 1.8 1.03c.14.17 5.1 7.16 5.24 7.4z" fill="currentColor"></svg:path>`,
})
export class MdiUntappdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUpdateIcon],svg[mdi-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1a6.887 6.887 0 0 0 0 9.8c2.73 2.7 7.15 2.7 9.88 0c1.36-1.35 2.04-2.92 2.04-4.9h2c0 1.98-.88 4.55-2.64 6.29c-3.51 3.48-9.21 3.48-12.72 0c-3.5-3.47-3.53-9.11-.02-12.58a8.987 8.987 0 0 1 12.65 0L21 3zM12.5 8v4.25l3.5 2.08l-.72 1.21L11 13V8z"></svg:path>`,
})
export class MdiUpdateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadIcon],svg[mdi-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16v-6H5l7-7l7 7h-4v6zm-4 4v-2h14v2z"></svg:path>`,
})
export class MdiUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadBoxIcon],svg[mdi-upload-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m11 14v-2H8v2zm0-6l-4-4l-4 4h2.5v3h3v-3z"></svg:path>`,
})
export class MdiUploadBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadBoxOutlineIcon],svg[mdi-upload-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17v-2h8v2zm8-6l-4-4l-4 4h2.5v3h3v-3zM5 3h14a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiUploadBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadCircleIcon],svg[mdi-upload-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m4 15v-2H8v2zm0-7l-4-4l-4 4h2.5v4h3v-4z"></svg:path>`,
})
export class MdiUploadCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadCircleOutlineIcon],svg[mdi-upload-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17v-2h8v2zm8-7l-4-4l-4 4h2.5v4h3v-4zm-4-8c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8"></svg:path>`,
})
export class MdiUploadCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadLockIcon],svg[mdi-upload-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-5c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1v-1.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V16c.5 0 1 .5 1 1v4c0 .5-.5 1-1 1m-8-2H5v-2h9zm7-4v-1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V16zm-6 0H9v-6H5l7-7l7 7h-4z"></svg:path>`,
})
export class MdiUploadLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadLockOutlineIcon],svg[mdi-upload-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-5c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1v-1.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V16c.5 0 1 .5 1 1v4c0 .5-.5 1-1 1M5 18h9v2H5zm16-2v-1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V16zM9 16v-6H5l7-7l7 7h-4v6zm.83-8H11v6h2V8h1.17L12 5.83z"></svg:path>`,
})
export class MdiUploadLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadMultipleIcon],svg[mdi-upload-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14V8H5l7-7l7 7h-4v6zm-4 4v-2h14v2zm14 2H5v2h14z"></svg:path>`,
})
export class MdiUploadMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadMultipleOutlineIcon],svg[mdi-upload-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8h-4v6H9V8H5l7-7zm-4.83-2L12 3.83L9.83 6H11v6h2V6zM5 16v2h14v-2zm14 4v2H5v-2z"></svg:path>`,
})
export class MdiUploadMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadNetworkIcon],svg[mdi-upload-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v2h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-5 2.5L7.5 10H11v4h2v-4h3.5z"></svg:path>`,
})
export class MdiUploadNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadNetworkOutlineIcon],svg[mdi-upload-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2zm-8-5V5h10v10zm5-9l-4 4h3v4h2v-4h3z"></svg:path>`,
})
export class MdiUploadNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadOffIcon],svg[mdi-upload-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l5.45 5.45L5 10h3.11l.89.89V16h5.11l2 2H5v2h13.11l2.73 2.73zM15 10h4l-7-7l-2.9 2.9l5.9 5.9z"></svg:path>`,
})
export class MdiUploadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadOffOutlineIcon],svg[mdi-upload-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l5.45 5.45L5 10h3.11l.89.89V16h5.11l2 2H5v2h13.11l2.73 2.73zM11 14v-1.11L12.11 14zm1-8.2L14.2 8H13v1.8l2 2V10h4l-7-7l-2.9 2.9l1.4 1.4z"></svg:path>`,
})
export class MdiUploadOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUploadOutlineIcon],svg[mdi-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10v6h6v-6h4l-7-7l-7 7zm3-4.2L14.2 8H13v6h-2V8H9.8zM19 18H5v2h14z"></svg:path>`,
})
export class MdiUploadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUsbIcon],svg[mdi-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7v4h1v2h-3V5h2l-3-4l-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93A2.2 2.2 0 0 0 7 6.8c-1.22 0-2.2.98-2.2 2.2c0 .85.5 1.56 1.2 1.93V13a2 2 0 0 0 2 2h3v3.05c-.71.36-1.2 1.1-1.2 1.95a2.2 2.2 0 0 0 2.2 2.2a2.2 2.2 0 0 0 2.2-2.2c0-.85-.49-1.59-1.2-1.95V15h3a2 2 0 0 0 2-2v-2h1V7z"></svg:path>`,
})
export class MdiUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUsbCPortIcon],svg[mdi-usb-c-port-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3h12c1.66 0 3-1.34 3-3s-1.34-3-3-3zm0-2h12c2.76 0 5 2.24 5 5s-2.24 5-5 5H6c-2.76 0-5-2.24-5-5s2.24-5 5-5"></svg:path>`,
})
export class MdiUsbCPortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUsbFlashDriveIcon],svg[mdi-usb-flash-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m7.07-10.31L16.5 6.1l-1.43 1.4l-1.41-1.4zM17.9 7.5l1.41 1.43l-1.41 1.41l-1.4-1.41zM8 13c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m1.77-8.67l.73.75l3.79-3.79c.18-.18.43-.29.71-.29s.53.11.71.29l7.07 7.07v.01a1.02 1.02 0 0 1-.12 1.39l-3.73 3.74l.74.73l-6.72 6.72A6.98 6.98 0 0 1 8 23c-3.87 0-7-3.13-7-7c0-1.93.78-3.68 2.05-4.95zM20.59 9L15 3.41L11.93 6.5l5.57 5.58z"></svg:path>`,
})
export class MdiUsbFlashDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUsbFlashDriveOutlineIcon],svg[mdi-usb-flash-drive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M9.77 4.33l.73.75l3.79-3.79c.18-.18.43-.29.71-.29s.53.11.71.29l7.07 7.07v.01a1.02 1.02 0 0 1-.12 1.39l-3.73 3.74l.74.73l-6.72 6.72A6.98 6.98 0 0 1 8 23c-3.87 0-7-3.13-7-7c0-1.93.78-3.68 2.05-4.95zm1.77 15.21l5.3-5.31l-7.07-7.07l-5.31 5.3C3.56 13.37 3 14.62 3 16c0 2.76 2.24 5 5 5c1.38 0 2.63-.56 3.54-1.46m3.53-14.85L16.5 6.1l-1.43 1.4l-1.41-1.4zM17.9 7.5l1.41 1.43l-1.41 1.41l-1.4-1.41zM20.59 9L15 3.41L11.93 6.5l5.57 5.58z"></svg:path>`,
})
export class MdiUsbFlashDriveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiUsbPortIcon],svg[mdi-usb-port-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2c-1.1 0-2 .9-2 2v8H5v4l4 4v2h6v-2l4-4v-4h-1V4a2 2 0 0 0-2-2M8 4h8v8H8m1-5v2h2V7m2 0v2h2V7Z"></svg:path>`,
})
export class MdiUsbPortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVacuumIcon],svg[mdi-vacuum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20v2h-7v-2h2.46L12 4.61c-.19-.47-.5-.85-.94-1.15S10.14 3 9.61 3c-.71 0-1.33.27-1.85.79S7 4.92 7 5.64V9h1c2.21 0 4 1.79 4 4v9H8c.61-.84 1-1.87 1-3c0-2.76-2.24-5-5-5c-.71 0-1.39.15-2 .42V9h3V5.64c0-.84.23-1.64.63-2.32c.41-.7.96-1.26 1.67-1.69Q8.35 1 9.61 1c.94 0 1.79.26 2.55.77s1.34 1.2 1.71 2.04L20.66 20zM7 19c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3m-2 0c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1"></svg:path>`,
})
export class MdiVacuumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVacuumOutlineIcon],svg[mdi-vacuum-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.66 20L13.87 3.81q-.555-1.26-1.71-2.04C11.4 1.26 10.55 1 9.61 1q-1.26 0-2.31.63c-1.05.63-1.26.99-1.67 1.69S5 4.8 5 5.64L5.03 9h-3v5.45c.62-.28 1.28-.42 1.97-.42v-3h5c.57 0 1.04.2 1.43.59c.39.38.57.85.57 1.38v7.03H8.91A4.7 4.7 0 0 1 7.97 22H13v-9c0-.72-.2-1.38-.55-2S11.61 9.91 11 9.56C10.42 9.2 9.75 9 9 9H7V5.64c0-.72.25-1.33.76-1.85S8.89 3 9.61 3c.53 0 1.02.16 1.45.46s.75.68.94 1.15L18.46 20l-2.46.03V22h7v-1.97zM4 18c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"></svg:path>`,
})
export class MdiVacuumOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiValveIcon],svg[mdi-valve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22H2V2h2m18 0h-2v20h2M17.24 5.34l-4 4a3 3 0 0 0-4 4l-4 4l1.42 1.42l4-4a3 3 0 0 0 4-4l4-4Z"></svg:path>`,
})
export class MdiValveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiValveClosedIcon],svg[mdi-valve-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20h-2v-9h-5.18a3 3 0 0 1-5.64 0H4v9H2V2h2v9h5.18a3 3 0 0 1 5.64 0H20V2Z"></svg:path>`,
})
export class MdiValveClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiValveOpenIcon],svg[mdi-valve-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22H2V2h2m18 0h-2v20h2M11 4v5.18a3 3 0 0 0 0 5.64V20h2v-5.18a3 3 0 0 0 0-5.64V4Z"></svg:path>`,
})
export class MdiValveOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVanPassengerIcon],svg[mdi-van-passenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7c-1.11 0-2 .89-2 2v8h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-4c0-1.11-.89-2-2-2l-3-4zm0 1.5h4V11H3zm6 0h4V11H9zm6 0h2.5l1.96 2.5H15zm-9 7A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiVanPassengerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVanUtilityIcon],svg[mdi-van-utility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7c-1.11 0-2 .89-2 2v8h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-4c0-1.11-.89-2-2-2l-3-4zm12 1.5h2.5l1.96 2.5H15zm-9 7A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiVanUtilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVanishIcon],svg[mdi-vanish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13v-2h5v2zm-1.17-5.24l2.83-2.83l1.41 1.41l-2.83 2.83zM11 16h2v5h-2zm0-13h2v5h-2zM4.93 17.66l2.83-2.83l1.41 1.41l-2.83 2.83zm0-11.32l1.41-1.41l2.83 2.83l-1.41 1.41zM8 13H3v-2h5zm11.07 4.66l-1.41 1.41l-2.83-2.83l1.41-1.41z"></svg:path>`,
})
export class MdiVanishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVanishQuarterIcon],svg[mdi-vanish-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h2v5h-2zM4.9 6.3l1.4-1.4l2.8 2.8l-1.3 1.5zM8 13H3v-2h5z"></svg:path>`,
})
export class MdiVanishQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVanityLightIcon],svg[mdi-vanity-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20h-6c0-1.66 1.34-7 3-7s3 5.34 3 7m-10-7c-1.66 0-3 5.34-3 7h6c0-1.66-1.34-7-3-7m-7 0c-1.66 0-3 5.34-3 7h6c0-1.66-1.34-7-3-7m9.82-7c-.56-1.56-2.29-2.36-3.82-1.8c-.86.3-1.5.97-1.82 1.8H2v2h2v4h2V8h3.18c.32.85.97 1.5 1.82 1.82V12h2V9.82c.85-.32 1.5-.97 1.82-1.82H18v4h2V8h2V6z"></svg:path>`,
})
export class MdiVanityLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVariableIcon],svg[mdi-variable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.41 3c1.39 2.71 1.94 5.84 1.59 9c-.2 3.16-1.3 6.29-3.17 9l-1.53-1c1.61-2.43 2.55-5.2 2.7-8c.34-2.8-.11-5.57-1.3-8zM5.17 3L6.7 4C5.09 6.43 4.15 9.2 4 12c-.34 2.8.12 5.57 1.3 8l-1.69 1c-1.4-2.71-1.96-5.83-1.61-9c.2-3.16 1.3-6.29 3.17-9m6.91 7.68l2.32-3.23h2.53l-3.78 5l2.2 4.92h-2.26L11.71 14l-2.43 3.33H6.76l3.9-5.12l-2.13-4.76h2.27z"></svg:path>`,
})
export class MdiVariableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVariableBoxIcon],svg[mdi-variable-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.4 18C5.9 16.5 5 14.3 5 12s.9-4.5 2.4-6l1.6.7C7.7 7.9 7 9.9 7 12s.7 4.1 2 5.3zm5.3-3l-.8-2l-1.4 2H9l2.3-3.1L10 9h1.3l.8 2l1.4-2H15l-2.2 3l1.3 3zm3.9 3l-1.6-.7c1.3-1.3 2-3.2 2-5.3s-.7-4.1-2-5.3l1.6-.7c1.5 1.5 2.4 3.7 2.4 6s-.9 4.5-2.4 6"></svg:path>`,
})
export class MdiVariableBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorArrangeAboveIcon],svg[mdi-vector-arrange-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V3c0-1.11-.89-2-2-2zm0 2h11v11H3zm15 4v2h2v11H9v-2H7v2c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2z"></svg:path>`,
})
export class MdiVectorArrangeAboveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorArrangeBelowIcon],svg[mdi-vector-arrange-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2zm0-2H9V9h11zM5 16v-2H3V3h11v2h2V3c0-1.11-.89-2-2-2H3c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2z"></svg:path>`,
})
export class MdiVectorArrangeBelowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorBezierIcon],svg[mdi-vector-bezier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4A1.5 1.5 0 0 0 6 5.5A1.5 1.5 0 0 0 7.5 7c.63 0 1.2-.4 1.41-1H13c.67-.67 1.33-1 2-1H8.91c-.21-.6-.78-1-1.41-1M19 5C8 5 14 17 5 17v2c11 0 5-12 14-12zm-2.5 12c-.63 0-1.2.4-1.41 1H11c-.67.67-1.33 1-2 1h6.09c.21.6.78 1 1.41 1a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiVectorBezierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorCircleIcon],svg[mdi-vector-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v2.06A8.52 8.52 0 0 0 4.05 9H2v6h2.06A8.5 8.5 0 0 0 9 19.95V22h6v-2.06A8.5 8.5 0 0 0 19.95 15H22V9h-2.06A8.52 8.52 0 0 0 15 4.05V2m-4 2h2v2h-2m-2 .25V8h6V6.25c1.18.61 2.14 1.57 2.75 2.75H16v6h1.75A6.4 6.4 0 0 1 15 17.75V16H9v1.75A6.4 6.4 0 0 1 6.25 15H8V9H6.25A6.4 6.4 0 0 1 9 6.25M4 11h2v2H4m14-2h2v2h-2m-7 5h2v2h-2"></svg:path>`,
})
export class MdiVectorCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorCircleVariantIcon],svg[mdi-vector-circle-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9h-2.03c-1.27-3.59-4.66-6-8.47-6a9 9 0 0 0-9 9c0 5 4.03 9 9 9c3.81 0 7.2-2.4 8.5-6h2m-2-4v2h-2v-2m-.18 4c-1.16 2.44-3.62 4-6.32 4c-3.86 0-7-3.13-7-7c0-3.86 3.14-7 7-7c2.7 0 5.16 1.57 6.31 4H16v6"></svg:path>`,
})
export class MdiVectorCircleVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorCombineIcon],svg[mdi-vector-combine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v4c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2h-4V3c0-1.11-.89-2-2-2zm0 2h11v4H9c-1.11 0-2 .89-2 2v5H3zm6 6h5v5H9zm7 0h4v11H9v-4h5c1.11 0 2-.89 2-2z"></svg:path>`,
})
export class MdiVectorCombineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorCurveIcon],svg[mdi-vector-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2A1.5 1.5 0 0 1 20 3.5A1.5 1.5 0 0 1 18.5 5c-.23 0-.45-.05-.65-.15l-3.69 3.7l.34.45c2.19-1.26 4.76-2 7.5-2l1 .03v2.01L22 9c-2.58 0-5 .75-7 2.04A3.96 3.96 0 0 1 11.04 15C9.75 17 9 19.42 9 22l.04 1H7.03L7 22c0-2.74.74-5.31 2-7.5l-.45-.34l-3.7 3.69c.1.2.15.42.15.65A1.5 1.5 0 0 1 3.5 20A1.5 1.5 0 0 1 2 18.5A1.5 1.5 0 0 1 3.5 17c.23 0 .45.05.65.15l3.69-3.7C7.31 12.78 7 11.92 7 11a4 4 0 0 1 4-4c.92 0 1.78.31 2.45.84l3.7-3.69c-.1-.2-.15-.42-.15-.65A1.5 1.5 0 0 1 18.5 2M11 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiVectorCurveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorDifferenceIcon],svg[mdi-vector-difference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h2v-2H3V3h11v2h2V3c0-1.11-.89-2-2-2zm6 6c-1.11 0-2 .89-2 2v2h2V9h2V7zm4 0v2h1v1h2V7zm5 0v2h2v11H9v-2H7v2c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2zm-4 5v2h-2v2h2c1.11 0 2-.89 2-2v-2zm-7 1v3h3v-2H9v-1z"></svg:path>`,
})
export class MdiVectorDifferenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorDifferenceAbIcon],svg[mdi-vector-difference-ab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1c-1.11 0-2 .89-2 2v2h2V3h2V1zm4 0v2h3V1zm5 0v2h2v2h2V3c0-1.11-.89-2-2-2zM1 7v3h2V7zm13 0v7H7v6c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2zm2 2h4v11H9v-4h5c1.11 0 2-.89 2-2zM1 12v2c0 1.11.89 2 2 2h2v-2H3v-2z"></svg:path>`,
})
export class MdiVectorDifferenceAbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorDifferenceBaIcon],svg[mdi-vector-difference-ba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22c1.11 0 2-.89 2-2v-2h-2v2h-2v2zm-4 0v-2h-3v2zm-5 0v-2H9v-2H7v2c0 1.11.89 2 2 2zm11-6v-3h-2v3zM9 16V9h7V3c0-1.11-.89-2-2-2H3c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2zm-2-2H3V3h11v4H9c-1.11 0-2 .89-2 2zm15-3V9c0-1.11-.89-2-2-2h-2v2h2v2z"></svg:path>`,
})
export class MdiVectorDifferenceBaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorEllipseIcon],svg[mdi-vector-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v6h-2.65c-.97 2.12-2.92 3.78-5.35 4.54V22H9v-2.46C5.5 18.45 3 15.5 3 12c0-4.42 4.03-8 9-8c3.78 0 7 2.07 8.35 5zm-6 6V9h1.06C16.85 7.21 14.59 6 12 6c-3.87 0-7 2.69-7 6c0 2.39 1.64 4.46 4 5.42V16h6v1.42c1.29-.52 2.35-1.37 3.06-2.42zm2-2h2v-2h-2zm-8 7h2v-2h-2z"></svg:path>`,
})
export class MdiVectorEllipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorIntersectionIcon],svg[mdi-vector-intersection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.14 1A2.14 2.14 0 0 0 1 3.14V5h2V3h2V1zM7 1v2h3V1zm5 0v2h2v2h2V3.14C16 1.96 15.04 1 13.86 1zM1 7v3h2V7zm8 0c-1.11 0-2 .89-2 2v7h6.86A2.14 2.14 0 0 0 16 13.86V7zm9 0v2h2v2h2V9c0-1.11-.89-2-2-2zM9 9h5v5H9zm-8 3v1.86C1 15.04 1.96 16 3.14 16H5v-2H3v-2zm19 1v3h2v-3zM7 18v2c0 1.11.89 2 2 2h2v-2H9v-2zm13 0v2h-2v2h2c1.11 0 2-.89 2-2v-2zm-7 2v2h3v-2z"></svg:path>`,
})
export class MdiVectorIntersectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorLineIcon],svg[mdi-vector-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v4.59L7.59 15H3v6h6v-4.58L16.42 9H21V3m-4 2h2v2h-2M5 17h2v2H5"></svg:path>`,
})
export class MdiVectorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorLinkIcon],svg[mdi-vector-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2v-3h-2v3H3V3h11v2h2V3c0-1.11-.89-2-2-2M9 7c-1.11 0-2 .89-2 2v3h2V9h11v11H9v-2H7v2c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2z"></svg:path>`,
})
export class MdiVectorLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPointIcon],svg[mdi-vector-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9v6h6V9zm2 2h2v2h-2z"></svg:path>`,
})
export class MdiVectorPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPointEditIcon],svg[mdi-vector-point-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9v6h6V9zm2 2h2v2h-2zm10.2 2c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.2-.1-.3-.2-.4-.2m-2.1 1.8L13 20.9V23h2.1l6.1-6.2z"></svg:path>`,
})
export class MdiVectorPointEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPointMinusIcon],svg[mdi-vector-point-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9v6h6V9zm2 2h2v2h-2zm4 7v2h8v-2z"></svg:path>`,
})
export class MdiVectorPointMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPointPlusIcon],svg[mdi-vector-point-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9v6h6V9zm2 2h2v2h-2zm7 4v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiVectorPointPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPointSelectIcon],svg[mdi-vector-point-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l-5 2l5-11l5 11zM8 2h8v3h6v2h-6v3H8V7H2V5h6zm2 2v4h4V4z"></svg:path>`,
})
export class MdiVectorPointSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPolygonIcon],svg[mdi-vector-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v6h2.28l1.29 8H4v6h6v-1.94l5-.01V22h6v-6h-1.83L20 9h2V3h-6v3.53L14.8 8H9.59L8 5.82V2M4 4h2v2H4m14-1h2v2h-2M6.31 8h.8L9 10.59V14h6v-3.09L16.57 9H18l-.84 7H15v2.06h-5V16H7.6m3.4-6h2v2h-2m-5 6h2v2H6m11-2h2v2h-2"></svg:path>`,
})
export class MdiVectorPolygonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPolygonVariantIcon],svg[mdi-vector-polygon-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V2h-6v3.8L14.4 8H9.6L8 5.8V2H2v6h2v8H2v6h6v-2h8v2h6v-6h-2V8zm-11 2h2v2h-2zM4 4h2v2H4zm2 16H4v-2h2zm10-2H8v-2H6V8h1.1L9 10.6V14h6v-3.4L16.9 8H18v8h-2zm4 2h-2v-2h2zM18 6V4h2v2z"></svg:path>`,
})
export class MdiVectorPolygonVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPolylineIcon],svg[mdi-vector-polyline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v6h2.95l2 6H6v6h6v-4.59L17.41 11H22V5h-6v4.57L10.59 15H9.06l-2-6H8V3M4 5h2v2H4m14 0h2v2h-2M8 17h2v2H8Z"></svg:path>`,
})
export class MdiVectorPolylineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPolylineEditIcon],svg[mdi-vector-polyline-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v6h2.95l2 6H6v6h6v-4.59L17.41 11H22V5h-6v4.57L10.59 15H9.06l-2-6H8V3zm2 2h2v2H4zm14 2h2v2h-2zm3.15 6c-.15 0-.28.05-.39.16l-1.01 1.02l2.07 2.07l1.02-1.01c.21-.21.21-.57 0-.78l-1.3-1.3a.54.54 0 0 0-.39-.16m-2 1.76L13 20.91V23h2.09l6.14-6.16zM8 17h2v2H8z"></svg:path>`,
})
export class MdiVectorPolylineEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPolylineMinusIcon],svg[mdi-vector-polyline-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v6h2.95l2 6H6v6h6v-4.59L17.41 11H22V5h-6v4.57L10.59 15H9.06l-2-6H8V3zm2 2h2v2H4zm14 2h2v2h-2zM8 17h2v2H8zm7 1v2h8v-2z"></svg:path>`,
})
export class MdiVectorPolylineMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPolylinePlusIcon],svg[mdi-vector-polyline-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v6h2.95l2 6H6v6h6v-4.59L17.41 11H22V5h-6v4.57L10.59 15H9.06l-2-6H8V3zm2 2h2v2H4zm14 2h2v2h-2zm0 8v3h-3v2h3v3h2v-3h3v-2h-3v-3zM8 17h2v2H8z"></svg:path>`,
})
export class MdiVectorPolylinePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPolylineRemoveIcon],svg[mdi-vector-polyline-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.1 15.5L19 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1zM16 5v4.6L10.6 15H9.1l-2-6H8V3H2v6h3l2 6H6v6h6v-4.6l5.4-5.4H22V5zM6 7H4V5h2zm4 12H8v-2h2zM20 9h-2V7h2z"></svg:path>`,
})
export class MdiVectorPolylineRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorRadiusIcon],svg[mdi-vector-radius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h2V2h6v2a10 10 0 0 1 10 10h2v6h-2v2h-2v-2h-2v-6h2a8 8 0 0 0-8-8v2H4V6H2zm16 12v2h2v-2zM6 4v2h2V4z"></svg:path>`,
})
export class MdiVectorRadiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorRectangleIcon],svg[mdi-vector-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h6v2h8V4h6v6h-2v4h2v6h-6v-2H8v2H2v-6h2v-4H2zm14 6V8H8v2H6v4h2v2h8v-2h2v-4zM4 6v2h2V6zm14 0v2h2V6zM4 16v2h2v-2zm14 0v2h2v-2z"></svg:path>`,
})
export class MdiVectorRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSelectionIcon],svg[mdi-vector-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h2v2H3v2H1V3a2 2 0 0 1 2-2m11 0a2 2 0 0 1 2 2v2h-2V3h-2V1zm6 6a2 2 0 0 1 2 2v2h-2V9h-2V7zm2 13a2 2 0 0 1-2 2h-2v-2h2v-2h2zm-2-7h2v3h-2zm-7-4V7h3v3h-2V9zm0 13v-2h3v2zm-4 0a2 2 0 0 1-2-2v-2h2v2h2v2zm-2-6v-3h2v1h1v2zM7 3V1h3v2zM3 16a2 2 0 0 1-2-2v-2h2v2h2v2zM1 7h2v3H1zm8 0h2v2H9v2H7V9a2 2 0 0 1 2-2m7 7a2 2 0 0 1-2 2h-2v-2h2v-2h2z"></svg:path>`,
})
export class MdiVectorSelectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSquareIcon],svg[mdi-vector-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h6v2h8V2h6v6h-2v8h2v6h-6v-2H8v2H2v-6h2V8H2zm14 6V6H8v2H6v8h2v2h8v-2h2V8zM4 4v2h2V4zm14 0v2h2V4zM4 18v2h2v-2zm14 0v2h2v-2z"></svg:path>`,
})
export class MdiVectorSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSquareCloseIcon],svg[mdi-vector-square-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h2v2H4zm2 16H4v-2h2zM18 8v8h-2v2H8v-2H6V8h2V2H2v6h2v8H2v6h6v-2h8v2h6v-6h-2V8h2V2h-6v6zm2 12h-2v-2h2zM18 6V4h2v2zm-4 0h-4V4h4z"></svg:path>`,
})
export class MdiVectorSquareCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSquareEditIcon],svg[mdi-vector-square-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.7 14.4l-1 1l-2.1-2.1l1-1c.2-.2.6-.2.8 0l1.3 1.3c.2.2.2.5 0 .8M13 19.9l6.1-6.1l2.1 2.1l-6.1 6.1H13zm-2 0v-.8l.6-.6l.5-.5H8v-2H6V8h2V6h8v2h2v4.1l1.1-1.1l.2-.2c.2-.2.5-.4.8-.5V8h2V2h-6v2H8V2H2v6h2v8H2v6h6v-2zM18 4h2v2h-2zM4 4h2v2H4zm2 16H4v-2h2z"></svg:path>`,
})
export class MdiVectorSquareEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSquareMinusIcon],svg[mdi-vector-square-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-.3 0-.7.1-1H8v-2H6V8h2V6h8v2h2v5.1c.3-.1.7-.1 1-.1s.7 0 1 .1V8h2V2h-6v2H8V2H2v6h2v8H2v6h6v-2h5.1c-.1-.3-.1-.7-.1-1m5-15h2v2h-2zM4 4h2v2H4zm2 16H4v-2h2zm17-2v2h-8v-2z"></svg:path>`,
})
export class MdiVectorSquareMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSquareOpenIcon],svg[mdi-vector-square-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h2v2H4zm2 16H4v-2h2zM18 8v8h-2v2H8v-2H6V8h2V2H2v6h2v8H2v6h6v-2h8v2h6v-6h-2V8h2V2h-6v6zm2 12h-2v-2h2zM18 6V4h2v2z"></svg:path>`,
})
export class MdiVectorSquareOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSquarePlusIcon],svg[mdi-vector-square-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-.3 0-.7.1-1H8v-2H6V8h2V6h8v2h2v5.1c.3-.1.7-.1 1-.1s.7 0 1 .1V8h2V2h-6v2H8V2H2v6h2v8H2v6h6v-2h5.1c-.1-.3-.1-.7-.1-1m5-15h2v2h-2zM4 4h2v2H4zm2 16H4v-2h2zm14-5v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class MdiVectorSquarePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSquareRemoveIcon],svg[mdi-vector-square-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-.3 0-.7.1-1H8v-2H6V8h2V6h8v2h2v5.1c.3-.1.7-.1 1-.1s.7 0 1 .1V8h2V2h-6v2H8V2H2v6h2v8H2v6h6v-2h5.1c-.1-.3-.1-.7-.1-1m5-15h2v2h-2zM4 4h2v2H4zm2 16H4v-2h2zm16.5-3.1L20.4 19l2.1 2.1l-1.4 1.4l-2.1-2.1l-2.1 2.1l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1z"></svg:path>`,
})
export class MdiVectorSquareRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorTriangleIcon],svg[mdi-vector-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v6h.73l-3.94 7H2v6h6v-2h8v2h6v-6h-3.79l-3.94-7H15V3m-4 2h2v2h-2m1 2.04l4 7.11V18H8v-1.85M4 18h2v2H4m14-2h2v2h-2"></svg:path>`,
})
export class MdiVectorTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVectorUnionIcon],svg[mdi-vector-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v4c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2h-4V3c0-1.11-.89-2-2-2zm0 2h11v6h6v11H9v-6H3z"></svg:path>`,
})
export class MdiVectorUnionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVenmoIcon],svg[mdi-venmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19.5 3c.64 1.08.94 2.19.94 3.6c0 4.48-3.83 10.31-6.94 14.4H6.41L3.56 4l6.21-.61l1.51 12.11c1.41-2.29 3.14-5.89 3.14-8.34c0-1.35-.23-2.26-.59-3.01L19.5 3z" fill="currentColor"></svg:path>`,
})
export class MdiVenmoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVhsIcon],svg[mdi-vhs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm.54 4H7v4H4.54c-.35-.61-.54-1.3-.54-2s.19-1.39.54-2M9 10h6v4H9zm8 0h2.46c.35.61.54 1.3.54 2s-.19 1.39-.54 2H17z"></svg:path>`,
})
export class MdiVhsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVibrateIcon],svg[mdi-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19H8V5h8m.5-2h-9A1.5 1.5 0 0 0 6 4.5v15A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 16.5 3M19 17h2V7h-2m3 2v6h2V9M3 17h2V7H3m-3 8h2V9H0z"></svg:path>`,
})
export class MdiVibrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVibrateOffIcon],svg[mdi-vibrate-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.2 5L6.55 3.35c.26-.23.6-.35.95-.35h9A1.5 1.5 0 0 1 18 4.5v10.3l-2-2V5zM0 15h2V9H0zm21 2V7h-2v8.8l1.2 1.2zM3 17h2V7H3zm15 .35l4.11 4.11l-1.27 1.27L18 19.85c-.17.69-.79 1.15-1.5 1.15h-9A1.5 1.5 0 0 1 6 19.5V7.89L1.11 3l1.28-1.27l3.7 3.71L8 7.34l8 8l2 2zm-2 .54l-8-8V19h8zM22 9v6h2V9z"></svg:path>`,
})
export class MdiVibrateOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoIcon],svg[mdi-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11z"></svg:path>`,
})
export class MdiVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideo2dIcon],svg[mdi-video-2d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h3c1.66 0 3 1.34 3 3v4c0 1.66-1.34 3-3 3h-3zm3 8c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-1v6zM5 7h4a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H7v2h4v2H5v-4c0-1.1.9-2 2-2h2V9H5z"></svg:path>`,
})
export class MdiVideo2dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideo3dIcon],svg[mdi-video-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5v-2h4v-2H6v-2h3V9H5zm8 0h3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3zm3 8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v6z"></svg:path>`,
})
export class MdiVideo3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideo3dOffIcon],svg[mdi-video-3d-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.61 2l18.74 18.74l-1.41 1.41L14.8 17H13v-1.8l-2-1.97v1.98c-.07.47-.26.87-.59 1.2c-.33.32-.73.52-1.2.59H5v-2h4v-2H6v-2h2.8L6.79 9H5V7.23L1.2 3.41zM16 7h.22c.78.07 1.41.36 1.92.88c.51.51.79 1.12.86 1.88v4.48c-.05.39-.13.76-.28 1.06L17 13.6V9.85c-.05-.22-.16-.41-.31-.57c-.16-.15-.35-.25-.57-.28H15v2.59l-2-2.02V7z"></svg:path>`,
})
export class MdiVideo3dOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideo3dVariantIcon],svg[mdi-video-3d-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10v4a.5.5 0 0 1-.5.5h-1v-5h1a.5.5 0 0 1 .5.5m7-3.5v11l-4-4V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3.5m-7.5-1A1.5 1.5 0 0 0 8 8H4.5v1.5H8v1.75H5.5v1.5H8v1.75H4.5V16H8a1.5 1.5 0 0 0 1.5-1.5m6-5A1.5 1.5 0 0 0 14 8h-3v8h3a1.5 1.5 0 0 0 1.5-1.5"></svg:path>`,
})
export class MdiVideo3dVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideo4kBoxIcon],svg[mdi-video-4k-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 10.5h-1V15H9.5v-1.5h-3V9H8v3h1.5V9H11v3h1zm6 1.5h-1.8l-1.8-2.2V15H13V9h1.5v2.2L16.2 9H18l-2.2 3z"></svg:path>`,
})
export class MdiVideo4kBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoAccountIcon],svg[mdi-video-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 10.5l4-4v11l-4-4V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM14 16v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1zm-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiVideoAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoBoxIcon],svg[mdi-video-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 16l-4-3.2V16H6V8h8v3.2L18 8m2-4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiVideoBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoBoxOffIcon],svg[mdi-video-box-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8h.73L14 15.27V16H6M2.27 1L1 2.27l2 2.01c-.59.34-1 .98-1 1.72v12a2 2 0 0 0 2 2h14.73l2 2L22 20.73M20 4H7.82l4 4H14v2.18l.57.57L18 8v6.18l4 3.99V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiVideoBoxOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoCheckIcon],svg[mdi-video-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11zM8.93 15L6 11.8l1.24-1.24l1.69 1.7l3.83-3.83L14 9.93z"></svg:path>`,
})
export class MdiVideoCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoCheckOutlineIcon],svg[mdi-video-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8v8H5V8zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1m-9.65 6.08l1.15-1.13L9 12.5L12.5 9l1.15 1.37L9 15z"></svg:path>`,
})
export class MdiVideoCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoHighDefinitionIcon],svg[mdi-video-high-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10v4c0 .3-.2.5-.5.5h-1v-5h1c.3 0 .5.2.5.5m3 .5V7c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-3.5l4 4v-11zM9.5 16H8v-3.2H6V16H4.5V8H6v3.2h2V8h1.5zm6-1.5c0 .8-.7 1.5-1.5 1.5h-3V8h3c.8 0 1.5.7 1.5 1.5z"></svg:path>`,
})
export class MdiVideoHighDefinitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoImageIcon],svg[mdi-video-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 10.5l4-4v11l-4-4V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-6.09-.95L9.2 11.82l1.3 1.73l-.73.54l-2.04-2.73L5 15h10z"></svg:path>`,
})
export class MdiVideoImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoInputAntennaIcon],svg[mdi-video-input-antenna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a7 7 0 0 0-7 7h2a5 5 0 0 1 5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7m1 9.29c.88-.39 1.5-1.26 1.5-2.29A2.5 2.5 0 0 0 12 9.5A2.5 2.5 0 0 0 9.5 12c0 1 .62 1.9 1.5 2.29v3.3L7.59 21L9 22.41l3-3l3 3L16.41 21L13 17.59zM12 1A11 11 0 0 0 1 12h2a9 9 0 0 1 9-9a9 9 0 0 1 9 9h2A11 11 0 0 0 12 1"></svg:path>`,
})
export class MdiVideoInputAntennaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoInputComponentIcon],svg[mdi-video-input-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2a1 1 0 0 0-1-1a1 1 0 0 0-1 1v4H1v6h6V6H5zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1zM21 6V2a1 1 0 0 0-1-1a1 1 0 0 0-1 1v4h-2v6h6V6zm-8-4a1 1 0 0 0-1-1a1 1 0 0 0-1 1v4H9v6h6V6h-2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6z"></svg:path>`,
})
export class MdiVideoInputComponentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoInputHdmiIcon],svg[mdi-video-input-hdmi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3H5v6l3 6v3h8v-3l3-6V7zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8z"></svg:path>`,
})
export class MdiVideoInputHdmiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoInputScartIcon],svg[mdi-video-input-scart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.6 2.2l-3.3.2l-3.5 2l-.5-.9L2 10v7h1v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2h1v-7h-1l-.2-.4l3.5-2l1.8-2.8zM15 17v2H5v-2z"></svg:path>`,
})
export class MdiVideoInputScartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoInputSvideoIcon],svg[mdi-video-input-svideo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11.5A1.5 1.5 0 0 0 6.5 10A1.5 1.5 0 0 0 5 11.5A1.5 1.5 0 0 0 6.5 13A1.5 1.5 0 0 0 8 11.5m7-5A1.5 1.5 0 0 0 13.5 5h-3A1.5 1.5 0 0 0 9 6.5A1.5 1.5 0 0 0 10.5 8h3A1.5 1.5 0 0 0 15 6.5M8.5 15A1.5 1.5 0 0 0 7 16.5A1.5 1.5 0 0 0 8.5 18a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 8.5 15M12 1A11 11 0 0 0 1 12a11 11 0 0 0 11 11a11 11 0 0 0 11-11A11 11 0 0 0 12 1m0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9s9 4.04 9 9s-4.04 9-9 9m5.5-11a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m-2 5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiVideoInputSvideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoMarkerIcon],svg[mdi-video-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 16.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2m0-4.8C3.6 12 2 13.6 2 15.5C2 18.1 5.5 22 5.5 22S9 18.1 9 15.5C9 13.6 7.4 12 5.5 12M4 6c-.6 0-1 .4-1 1v3.6c.8-.4 1.6-.6 2.5-.6c3 0 5.5 2.5 5.5 5.5c0 .9-.2 1.7-.5 2.5H16c.6 0 1-.4 1-1v-3.5l4 4v-11l-4 4V7c0-.6-.4-1-1-1z"></svg:path>`,
})
export class MdiVideoMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoMarkerOutlineIcon],svg[mdi-video-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 16.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2m0-4.8C3.6 12 2 13.6 2 15.5C2 18.1 5.5 22 5.5 22S9 18.1 9 15.5C9 13.6 7.4 12 5.5 12M4 6c-.6 0-1 .4-1 1v3.6c.6-.3 1.3-.5 2-.6V8h10v8h-4c-.1.7-.2 1.4-.5 2H16c.6 0 1-.4 1-1v-3.5l4 4v-11l-4 4V7c0-.6-.4-1-1-1z"></svg:path>`,
})
export class MdiVideoMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoMinusIcon],svg[mdi-video-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11zM14 13H6v-2h8z"></svg:path>`,
})
export class MdiVideoMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoMinusOutlineIcon],svg[mdi-video-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8v8H5V8zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1m-3 7H7v-2h6z"></svg:path>`,
})
export class MdiVideoMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoOffIcon],svg[mdi-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.27 2L2 3.27L4.73 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12c.2 0 .39-.08.54-.18L19.73 21L21 19.73M21 6.5l-4 4V7a1 1 0 0 0-1-1H9.82L21 17.18z"></svg:path>`,
})
export class MdiVideoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoOffOutlineIcon],svg[mdi-video-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.41 1.86L2 3.27L4.73 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12c.21 0 .39-.08.55-.18L19.73 21l1.41-1.41l-8.86-8.86zM5 16V8h1.73l8 8zm10-8v2.61l6 6V6.5l-4 4V7a1 1 0 0 0-1-1h-5.61l2 2z"></svg:path>`,
})
export class MdiVideoOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoOutlineIcon],svg[mdi-video-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8v8H5V8zm1-2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiVideoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoPlusIcon],svg[mdi-video-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3z"></svg:path>`,
})
export class MdiVideoPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoPlusOutlineIcon],svg[mdi-video-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8v8H5V8zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1m-3 7h-2v2H9v-2H7v-2h2V9h2v2h2z"></svg:path>`,
})
export class MdiVideoPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoStabilizationIcon],svg[mdi-video-stabilization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v12h16V6zm3.24.58l11.59 3.11l-2.07 7.73l-11.59-3.11z"></svg:path>`,
})
export class MdiVideoStabilizationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoStandardDefinitionIcon],svg[mdi-video-standard-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14v-4c0-.3-.2-.5-.5-.5h-1v5h1c.3 0 .5-.2.5-.5m3-7v3.5l4-4v11l-4-4V17c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h12c.6 0 1 .4 1 1m-3 9c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-3v8zM9 8H5.5C4.67 8 4 8.67 4 9.5V11c0 .83.67 1.5 1.5 1.5h2v2H4V16h3.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2V9.5H9z"></svg:path>`,
})
export class MdiVideoStandardDefinitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoSwitchIcon],svg[mdi-video-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.5V13H7v2.5L3.5 12L7 8.5V11h6V8.5l3.5 3.5M18 9.5V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3.5l4 4v-13z"></svg:path>`,
})
export class MdiVideoSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoSwitchOutlineIcon],svg[mdi-video-switch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13h4v2l3-3l-3-3v2H8V9l-3 3l3 3zm10-3.5V6c0-.6-.5-1-1-1H3c-.5 0-1 .4-1 1v12c0 .5.5 1 1 1h14c.5 0 1-.5 1-1v-3.5l4 4v-13zM16 17H4V7h12z"></svg:path>`,
})
export class MdiVideoSwitchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoVintageIcon],svg[mdi-video-vintage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14.5V11a1 1 0 0 0-1-1h-1c2.24-1.61 2.76-4.73 1.15-7a5.02 5.02 0 0 0-6.98-1.13C9.5 2.35 8.96 3 8.6 3.73a4.985 4.985 0 0 0-6.88 1.64a5 5 0 0 0 1.64 6.88c.21.12.42.25.64.33V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11zM13 4a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiVideoVintageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoWirelessIcon],svg[mdi-video-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14.5V11a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11M3 3.86l1.4 1.38c3.1-3.05 8.1-3.05 11.2 0L17 3.86C13.14.05 6.87.05 3 3.86m2.8 2.76L7.2 8c1.55-1.5 4.05-1.5 5.6 0l1.4-1.38c-2.32-2.28-6.08-2.28-8.4 0"></svg:path>`,
})
export class MdiVideoWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVideoWirelessOutlineIcon],svg[mdi-video-wireless-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12v8H5v-8zm1-2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4V11a1 1 0 0 0-1-1M3 3.86l1.4 1.38c3.1-3.05 8.1-3.05 11.2 0L17 3.86C13.14.05 6.87.05 3 3.86m2.8 2.77L7.2 8c1.55-1.5 4.05-1.5 5.6 0l1.4-1.37c-2.32-2.29-6.08-2.29-8.4 0"></svg:path>`,
})
export class MdiVideoWirelessOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewAgendaIcon],svg[mdi-view-agenda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1m0 10H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1"></svg:path>`,
})
export class MdiViewAgendaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewAgendaOutlineIcon],svg[mdi-view-agenda-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6H4v-4h16m1-12H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 6H4V5h16Z"></svg:path>`,
})
export class MdiViewAgendaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewArrayIcon],svg[mdi-view-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h9V5H8m10 0v13h3V5M4 18h3V5H4z"></svg:path>`,
})
export class MdiViewArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewArrayOutlineIcon],svg[mdi-view-array-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7v9h-5V7zm6-2h-3v13h3zm-4 0H8v13h9zM7 5H4v13h3z"></svg:path>`,
})
export class MdiViewArrayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewCarouselIcon],svg[mdi-view-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6v11h4V6M2 17h4V6H2m5 13h10V4H7z"></svg:path>`,
})
export class MdiViewCarouselIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewCarouselOutlineIcon],svg[mdi-view-carousel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h4v11H2zm5 13h10V4H7zM9 6h6v11H9zm9 0h4v11h-4z"></svg:path>`,
})
export class MdiViewCarouselOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewColumnIcon],svg[mdi-view-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5v13h5V5M4 18h5V5H4m6 13h5V5h-5z"></svg:path>`,
})
export class MdiViewColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewColumnOutlineIcon],svg[mdi-view-column-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v13h17V5zm10 2v9h-3V7zM6 7h3v9H6zm13 9h-3V7h3z"></svg:path>`,
})
export class MdiViewColumnOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewComfyIcon],svg[mdi-view-comfy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h4V5H3zm0 5h4v-4H3zm5 0h4v-4H8zm5 0h4v-4h-4zM8 9h4V5H8zm5-4v4h4V5zm5 9h4v-4h-4zM3 19h4v-4H3zm5 0h4v-4H8zm5 0h4v-4h-4zm5 0h4v-4h-4zm0-14v4h4V5z"></svg:path>`,
})
export class MdiViewComfyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewComfyOutlineIcon],svg[mdi-view-comfy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14h19V5zm17 4h-2.25V7H20zM9.25 11h2.25v2H9.25zm-2 2H5v-2h2.25zm4.25-4H9.25V7h2.25zm2-2h2.25v2H13.5zm-2 8v2H9.25v-2zm2 0h2.25v2H13.5zm0-2v-2h2.25v2zm4.25-2H20v2h-2.25zM7.25 7v2H5V7zM5 15h2.25v2H5zm12.75 2v-2H20v2z"></svg:path>`,
})
export class MdiViewComfyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewCompactIcon],svg[mdi-view-compact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19h6v-7H3zm7 0h12v-7H10zM3 5v6h19V5z"></svg:path>`,
})
export class MdiViewCompactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewCompactOutlineIcon],svg[mdi-view-compact-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14h19V5zm2 2h15v4H5zm0 10v-4h4v4zm6 0v-4h9v4z"></svg:path>`,
})
export class MdiViewCompactOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewDashboardIcon],svg[mdi-view-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3z"></svg:path>`,
})
export class MdiViewDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewDashboardEditIcon],svg[mdi-view-dashboard-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.1c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-1.9 1.8l-6.1 6V23h2.1l6.1-6.1zM21 9h-8V3h8zm-8 9.06V11h8v.1c-.76 0-1.43.4-1.81.79zM11 13H3V3h8zm0 8H3v-6h8z"></svg:path>`,
})
export class MdiViewDashboardEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewDashboardEditOutlineIcon],svg[mdi-view-dashboard-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.1c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-1.9 1.8l-6.1 6V23h2.1l6.1-6.1zM21 3h-8v6h8zm-2 4h-4V5h4zm-6 11.06V11h8v.1c-.76 0-1.43.4-1.81.79L18.07 13H15v3.07zM11 3H3v10h8zm-2 8H5V5h4zm2 9.06V15H3v6h8zM9 19H5v-2h4z"></svg:path>`,
})
export class MdiViewDashboardEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewDashboardOutlineIcon],svg[mdi-view-dashboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v2h-4V5zM9 5v6H5V5zm10 8v6h-4v-6zM9 17v2H5v-2zM21 3h-8v6h8zM11 3H3v10h8zm10 8h-8v10h8zm-10 4H3v6h8z"></svg:path>`,
})
export class MdiViewDashboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewDashboardVariantIcon],svg[mdi-view-dashboard-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v14h6V5zm7 0v5h6V5zm7 0v9h6V5zm-7 6v8h6v-8zm7 4v4h6v-4z"></svg:path>`,
})
export class MdiViewDashboardVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewDashboardVariantOutlineIcon],svg[mdi-view-dashboard-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v14h20V5zm18 7h-4V7h4zm-6-2h-4V7h4zm-4 2h4v5h-4zM4 7h4v10H4zm12 10v-3h4v3z"></svg:path>`,
})
export class MdiViewDashboardVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewDayIcon],svg[mdi-view-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v3h19V3m-1 5H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M2 21h19v-3H2z"></svg:path>`,
})
export class MdiViewDayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewDayOutlineIcon],svg[mdi-view-day-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18H2v2h19zm-2-8v4H4v-4zm1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m1-4H2v2h19z"></svg:path>`,
})
export class MdiViewDayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewGalleryIcon],svg[mdi-view-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H2v13h19zM2 17h4v4H2zm5 0h4v4H7zm5 0h4v4h-4zm5 0h4v4h-4z"></svg:path>`,
})
export class MdiViewGalleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewGalleryOutlineIcon],svg[mdi-view-gallery-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v18h22V3zm20 2v9H3V5zM11 16v3H8v-3zm-8 0h3v3H3zm10 3v-3h3v3zm5 0v-3h3v3z"></svg:path>`,
})
export class MdiViewGalleryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewGridIcon],svg[mdi-view-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h8V3H3m0 18h8v-8H3m10 8h8v-8h-8m0-10v8h8V3"></svg:path>`,
})
export class MdiViewGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewGridCompactIcon],svg[mdi-view-grid-compact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h2v2H2zm3 0h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zM2 8h2v2H2zm3 0h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zM2 11h2v2H2zm3 0h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zM2 14h2v2H2zm3 0h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zM2 17h2v2H2zm3 0h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2z"></svg:path>`,
})
export class MdiViewGridCompactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewGridOutlineIcon],svg[mdi-view-grid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h8V3H3m2 2h4v4H5m8 12h8v-8h-8m2 2h4v4h-4M3 21h8v-8H3m2 2h4v4H5m8-16v8h8V3m-2 6h-4V5h4Z"></svg:path>`,
})
export class MdiViewGridOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewGridPlusIcon],svg[mdi-view-grid-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v8h8V3zM3 21h8v-8H3zM3 3v8h8V3zm10 13h3v-3h2v3h3v2h-3v3h-2v-3h-3z"></svg:path>`,
})
export class MdiViewGridPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewGridPlusOutlineIcon],svg[mdi-view-grid-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h8v-8H3m2 2h4v4H5m-2-8h8V3H3m2 2h4v4H5m8-6v8h8V3m-2 6h-4V5h4m-1 11h3v2h-3v3h-2v-3h-3v-2h3v-3h2Z"></svg:path>`,
})
export class MdiViewGridPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewHeadlineIcon],svg[mdi-view-headline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v2h17V5M4 11h17V9H4m0 10h17v-2H4m0-2h17v-2H4z"></svg:path>`,
})
export class MdiViewHeadlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewListIcon],svg[mdi-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v4h12V5M9 19h12v-4H9m0-1h12v-4H9M4 9h4V5H4m0 14h4v-4H4m0-1h4v-4H4z"></svg:path>`,
})
export class MdiViewListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewListOutlineIcon],svg[mdi-view-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14h17V5zm4 2v2H5V7zm-2 6v-2h2v2zm0 2h2v2H5zm13 2H9v-2h9zm0-4H9v-2h9zm0-4H9V7h9z"></svg:path>`,
})
export class MdiViewListOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewModuleIcon],svg[mdi-view-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5v6h5V5m-11 6h5V5h-5m6 13h5v-6h-5m-6 6h5v-6h-5m-6 6h5v-6H4m0-1h5V5H4z"></svg:path>`,
})
export class MdiViewModuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewModuleOutlineIcon],svg[mdi-view-module-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v13h17V5zm10 2v3.5h-3V7zM6 7h3v3.5H6zm0 9v-3.5h3V16zm5 0v-3.5h3V16zm8 0h-3v-3.5h3zm-3-5.5V7h3v3.5z"></svg:path>`,
})
export class MdiViewModuleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewParallelIcon],svg[mdi-view-parallel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3v18h-4V3zm-5 0v18h-4V3zM9 3v18H5V3z"></svg:path>`,
})
export class MdiViewParallelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewParallelOutlineIcon],svg[mdi-view-parallel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5v18h14zm-2 16h-2V5h2zm-4 0h-2V5h2zM7 5h2v14H7z"></svg:path>`,
})
export class MdiViewParallelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewQuiltIcon],svg[mdi-view-quilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5v6h11V5m-5 13h5v-6h-5M4 18h5V5H4m6 13h5v-6h-5z"></svg:path>`,
})
export class MdiViewQuiltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewQuiltOutlineIcon],svg[mdi-view-quilt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v13h17V5zm2 11V7h3v9zm5 0v-3.5h3V16zm8 0h-3v-3.5h3zm-8-5.5V7h8v3.5z"></svg:path>`,
})
export class MdiViewQuiltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewSequentialIcon],svg[mdi-view-sequential-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h18v4H3zm0 5h18v4H3zm0 5h18v4H3z"></svg:path>`,
})
export class MdiViewSequentialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewSequentialOutlineIcon],svg[mdi-view-sequential-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14h18V5zm16 2v2H5V7zm0 4v2H5v-2zM5 17v-2h14v2z"></svg:path>`,
})
export class MdiViewSequentialOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewSplitHorizontalIcon],svg[mdi-view-split-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h18v2H3zm0 6V9h18v2zm0 8v-6h18v6z"></svg:path>`,
})
export class MdiViewSplitHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewSplitVerticalIcon],svg[mdi-view-split-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5h8v14h-8zM3 5h8v2H3zm0 6V9h8v2zm0 8v-2h8v2zm0-4v-2h8v2z"></svg:path>`,
})
export class MdiViewSplitVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewStreamIcon],svg[mdi-view-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v6h17V5M4 18h17v-6H4z"></svg:path>`,
})
export class MdiViewStreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewStreamOutlineIcon],svg[mdi-view-stream-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v12h17V6zm15 10H6v-3h13zM6 11V8h13v3z"></svg:path>`,
})
export class MdiViewStreamOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewWeekIcon],svg[mdi-view-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m7 0h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M6 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiViewWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViewWeekOutlineIcon],svg[mdi-view-week-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1M8 18H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4z"></svg:path>`,
})
export class MdiViewWeekOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVimeoIcon],svg[mdi-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7.42c-.09 1.95-1.45 4.62-4.08 8.02C15.2 19 12.9 20.75 11 20.75c-1.15 0-2.14-1.08-2.95-3.25c-.55-1.96-1.05-3.94-1.61-5.92c-.6-2.16-1.24-3.24-1.94-3.24c-.14 0-.66.32-1.56.95L2 8.07c1-.87 1.96-1.74 2.92-2.61c1.32-1.14 2.31-1.74 2.96-1.8c1.56-.16 2.52.92 2.88 3.2c.39 2.47.66 4 .81 4.6c.43 2.04.93 3.04 1.48 3.04c.42 0 1.05-.64 1.89-1.97q1.26-1.98 1.35-3.03q.18-1.71-1.35-1.71c-.48 0-.97.11-1.48.33c.98-3.23 2.86-4.8 5.63-4.71c2.06.06 3.03 1.4 2.91 4.01"></svg:path>`,
})
export class MdiVimeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVineIcon],svg[mdi-vine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19.89 11.948a5.907 5.907 0 0 1-1.316.154c-2.27 0-4.02-1.586-4.02-4.344c0-1.351.523-2.054 1.262-2.054c.703 0 1.172.63 1.172 1.91c0 .728-.195 1.525-.339 1.997c0 0 .7 1.221 2.614.846c.406-.902.627-2.07.627-3.095C19.89 4.604 18.484 3 15.906 3c-2.649 0-4.2 2.037-4.2 4.723c0 2.66 1.245 4.944 3.295 5.985c-.862 1.725-1.96 3.245-3.104 4.39c-2.076-2.51-3.953-5.86-4.724-12.394H4.11c1.415 10.883 5.633 14.349 6.748 15.014c.631.379 1.174.36 1.751.036c.906-.515 3.625-3.233 5.132-6.417a10.133 10.133 0 0 0 2.15-.246v-2.143z" fill="currentColor"></svg:path>`,
})
export class MdiVineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiViolinIcon],svg[mdi-violin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2a1 1 0 0 0-1 1v6a.5.5 0 0 0 .5.5H12a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5h-1.5C9.73 10.5 9 9.77 9 9V5.16C7.27 5.6 6 7.13 6 9v1.5A2.5 2.5 0 0 1 8.5 13A2.5 2.5 0 0 1 6 15.5V17c0 2.77 2.23 5 5 5h2c2.77 0 5-2.23 5-5v-1.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5V9c0-2.22-1.78-4-4-4V3a1 1 0 0 0-1-1zm-.25 14.5h2.5l-.5 3.5h-1.5z"></svg:path>`,
})
export class MdiViolinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVirtualRealityIcon],svg[mdi-virtual-reality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm1 6h1.5l1 3.43L9.5 9H11l-1.75 6h-1.5zm7 0h3.5c.85 0 1.5.65 1.5 1.5v1c0 .6-.4 1.15-.9 1.4L18 15h-1.5l-.85-2H14.5v2H13zm1.5 1.5v1h2v-1z"></svg:path>`,
})
export class MdiVirtualRealityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVirusIcon],svg[mdi-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.82 14A1.746 1.746 0 0 0 23 13a1.746 1.746 0 0 0-3.18-1H19c0-1.57-.5-3-1.4-4.19l1.34-1.34c.56.1 1.13-.06 1.56-.47c.67-.69.67-1.8 0-2.5c-.69-.67-1.8-.67-2.5 0c-.41.43-.57 1-.47 1.56L16.19 6.4c-.92-.69-2-1.15-3.19-1.32v-1.4A1.746 1.746 0 0 0 12 .5a1.746 1.746 0 0 0-1 3.18v1.4c-.9.13-1.74.42-2.5.86L7.39 4.35c.19-.52.14-1.12-.2-1.6a1.75 1.75 0 0 0-2.44-.43c-.79.55-.99 1.64-.43 2.43c.34.49.88.75 1.43.75l1.18 1.68c-.43.43-.77.91-1.06 1.44A1.76 1.76 0 0 0 4 9c-.67.7-.67 1.8 0 2.5c.29.27.64.43 1 .5c0 .54.07 1.06.18 1.56l-1.31.35c-.42-.35-1-.5-1.58-.35a1.75 1.75 0 1 0 .92 3.38c.57-.16 1-.58 1.18-1.1l1.51-.41c.45.79 1.05 1.49 1.75 2.07l-1.1 2c-.55.08-1.05.39-1.34.92a1.749 1.749 0 1 0 3.08 1.66c.28-.52.27-1.12.02-1.61l1.07-1.97c.81.32 1.69.5 2.62.5h.18c-.13.26-.18.56-.18.88c.08.97.92 1.69 1.88 1.62s1.69-.92 1.62-1.88c-.04-.5-.29-.94-.65-1.23c.47-.21.92-.48 1.34-.79l2.34 2.34c-.1.56.06 1.13.47 1.56c.7.67 1.8.67 2.5 0s.67-1.8 0-2.5c-.43-.41-1-.57-1.56-.47l-2.34-2.34c.49-.65.87-1.39 1.11-2.19zm-9.32-2c-.83 0-1.5-.67-1.5-1.5S9.67 9 10.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m3.5 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiVirusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVirusOffIcon],svg[mdi-virus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.42 4.22L5.28 2.08c.69-.2 1.47.04 1.91.67c.31.44.37.98.23 1.47m13.83 7.03c-.59 0-1.12.3-1.43.75H19c0-1.57-.5-3-1.4-4.19l1.34-1.34c.56.1 1.13-.06 1.56-.47c.67-.69.67-1.8 0-2.5c-.69-.67-1.8-.67-2.5 0c-.41.43-.57 1-.47 1.56L16.19 6.4c-.92-.69-2-1.15-3.19-1.32v-1.4A1.746 1.746 0 0 0 12 .5a1.746 1.746 0 0 0-1 3.18v1.4c-.74.11-1.43.33-2.08.64l9.36 9.36c.17-.35.32-.7.43-1.08h1.11A1.746 1.746 0 0 0 23 13c0-.97-.78-1.75-1.75-1.75m.86 10.21l-1.27 1.27l-.74-.73c-.4-.04-.79-.2-1.1-.5c-.3-.31-.46-.7-.5-1.1l-2.6-2.61c-.33.21-.68.44-1.05.6c.36.29.61.73.65 1.23c.07.96-.66 1.81-1.62 1.88s-1.8-.65-1.88-1.62c0-.32.05-.62.18-.88H12c-.93 0-1.81-.18-2.62-.5l-1.07 1.97c.25.49.26 1.09-.02 1.61a1.749 1.749 0 1 1-3.08-1.66c.29-.53.79-.84 1.34-.92l1.1-2c-.7-.58-1.3-1.28-1.75-2.07l-1.51.41c-.18.52-.61.94-1.18 1.1a1.75 1.75 0 1 1-.92-3.38c.58-.15 1.16 0 1.58.35l1.31-.35A7.2 7.2 0 0 1 5 12c-.36-.07-.71-.23-1-.5c-.67-.7-.67-1.8 0-2.5c.5-.5 1.25-.62 1.87-.38c.1-.18.22-.35.33-.53L1.11 3l1.28-1.27z"></svg:path>`,
})
export class MdiVirusOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVirusOffOutlineIcon],svg[mdi-virus-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 13a1.746 1.746 0 0 1-3.18 1h-1.11c-.11.38-.26.73-.43 1.08l-1.55-1.55c.16-.48.27-.99.27-1.53c0-2.76-2.24-5-5-5c-.54 0-1.05.11-1.53.27L8.92 5.72c.65-.31 1.34-.53 2.08-.64v-1.4A1.746 1.746 0 0 1 12 .5a1.746 1.746 0 0 1 1 3.18v1.4c1.19.17 2.27.63 3.19 1.32l1.34-1.34c-.1-.56.06-1.13.47-1.56c.35-.33.8-.5 1.25-.5s.9.17 1.25.5c.67.7.67 1.81 0 2.5c-.35.33-.8.5-1.25.5c-.1 0-.2 0-.31-.03L17.6 7.81A6.86 6.86 0 0 1 19 12h.82A1.746 1.746 0 0 1 23 13m-.89 8.46l-1.27 1.27l-.74-.73c-.4-.05-.79-.21-1.1-.5c-.3-.31-.46-.7-.5-1.1l-2.6-2.61c-.33.21-.68.44-1.05.6c.36.29.61.73.65 1.23c.07.96-.65 1.8-1.62 1.88h-.13c-.91 0-1.67-.7-1.75-1.62c0-.32.05-.62.18-.88H12c-.93 0-1.81-.18-2.62-.5l-1.07 1.97c.25.49.26 1.09-.02 1.61a1.75 1.75 0 0 1-2.37.71a1.75 1.75 0 0 1-.71-2.37c.29-.53.79-.84 1.34-.92l1.1-2c-.7-.58-1.3-1.28-1.75-2.07l-1.51.41c-.18.52-.61.94-1.18 1.1c-.16.06-.31.06-.46.06c-.75 0-1.48-.5-1.69-1.29c-.251-.94.3-1.9 1.23-2.15c.15-.06.31-.06.46-.06c.41 0 .81.15 1.12.41l1.31-.35A7.2 7.2 0 0 1 5 12c-.36-.08-.71-.23-1-.5c-.67-.7-.67-1.8 0-2.5c.35-.33.8-.5 1.25-.5c.21 0 .42.04.62.12c.1-.18.22-.35.33-.53L1.11 3l1.28-1.27zm-7.66-5.12L7.66 9.55C7.25 10.28 7 11.11 7 12c0 2.76 2.24 5 5 5c.9 0 1.73-.25 2.45-.66M7.19 2.75C6.84 2.26 6.3 2 5.75 2c-.16 0-.32.03-.48.07l2.15 2.15c.14-.49.08-1.03-.23-1.47"></svg:path>`,
})
export class MdiVirusOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVirusOutlineIcon],svg[mdi-virus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5a1.746 1.746 0 0 0-1 3.18v1.4c-.9.13-1.74.42-2.5.86L7.39 4.35c.19-.52.14-1.12-.2-1.6C6.84 2.26 6.3 2 5.75 2c-.35 0-.7.1-1 .32c-.79.55-.99 1.64-.43 2.43c.34.49.88.75 1.43.75l1.18 1.68c-.43.43-.77.91-1.06 1.44c-.2-.08-.41-.12-.62-.12c-.45 0-.9.17-1.25.5c-.67.7-.67 1.8 0 2.5c.29.27.64.42 1 .5c0 .54.07 1.06.18 1.56l-1.31.35c-.31-.26-.71-.41-1.12-.41c-.15 0-.31 0-.46.06a1.75 1.75 0 0 0-1.23 2.15C1.27 16.5 2 17 2.75 17c.15 0 .3 0 .46-.06c.57-.16 1-.58 1.18-1.1l1.51-.41c.45.79 1.05 1.49 1.75 2.07l-1.1 2c-.55.08-1.05.39-1.34.92a1.749 1.749 0 1 0 3.08 1.66c.28-.52.27-1.12.02-1.61l1.07-1.97c.81.32 1.69.5 2.62.5h.18c-.13.26-.18.56-.18.88c.08.92.84 1.62 1.75 1.62h.13c.97-.08 1.69-.92 1.62-1.88c-.04-.5-.29-.94-.65-1.23c.47-.21.92-.48 1.34-.79l2.34 2.34c-.1.56.06 1.13.47 1.56c.35.33.8.5 1.25.5s.9-.17 1.25-.5c.67-.7.67-1.8 0-2.5c-.35-.33-.8-.5-1.25-.5c-.1 0-.2 0-.31.03l-2.34-2.34c.49-.65.87-1.39 1.11-2.19h1.11A1.746 1.746 0 0 0 23 13a1.746 1.746 0 0 0-3.18-1H19c0-1.57-.5-3-1.4-4.19l1.34-1.34c.11.03.21.03.31.03c.45 0 .9-.17 1.25-.5c.67-.69.67-1.8 0-2.5c-.35-.33-.8-.5-1.25-.5s-.9.17-1.25.5c-.41.43-.57 1-.47 1.56L16.19 6.4c-.92-.69-2-1.15-3.19-1.32v-1.4A1.746 1.746 0 0 0 12 .5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m-1.5-8C9.67 9 9 9.67 9 10.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S11.33 9 10.5 9m3.5 4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class MdiVirusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVkIcon],svg[mdi-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2m3.08 14.27h-1.46c-.55 0-.72-.45-1.69-1.44c-.88-.83-1.26-.95-1.47-.95c-.29 0-.38.08-.38.5v1.31c0 .35-.11.57-1.04.57c-1.54 0-3.25-.94-4.45-2.67c-1.81-2.54-2.3-4.46-2.3-4.84c0-.21.07-.41.49-.41h1.47c.37 0 .51.16.65.56c.72 2.1 1.92 3.9 2.41 3.9c.19 0 .27-.09.27-.55V10.1c-.05-.98-.58-1.07-.58-1.42c0-.18.14-.34.37-.34h2.29c.31 0 .42.16.42.54v2.89c0 .31.13.42.23.42c.18 0 .34-.11.67-.45c1.05-1.17 1.8-2.98 1.8-2.98c.1-.21.26-.41.65-.41h1.43c.44 0 .54.23.44.54c-.18.85-1.96 3.36-1.94 3.36c-.16.25-.22.36 0 .65c.15.21.66.65 1 1.04c.62.71 1.1 1.3 1.23 1.71c.11.41-.09.62-.51.62z" fill="currentColor"></svg:path>`,
})
export class MdiVkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVkBoxIcon],svg[mdi-vk-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5m.5 5.5H7c.36 0 .5.16.64.57c.72 2.1 1.93 3.93 2.43 3.93c.19 0 .28-.08.28-.55v-2.17c-.06-1-.59-1.09-.59-1.44c0-.17.14-.34.38-.34h2.31c.32 0 .42.17.42.54v2.92c0 .31.13.42.23.42c.19 0 .35-.11.69-.45c1.06-1.19 1.81-3.01 1.81-3.01c.1-.22.27-.42.64-.42h1.47c.45 0 .55.23.45.54c-.19.86-1.98 3.39-1.98 3.39c-.18.25-.22.37 0 .66c.15.21.67.65 1.01 1.06c.64.71 1.11 1.31 1.25 1.72c.12.42-.09.63-.51.63h-1.48c-.56 0-.72-.45-1.72-1.45c-.88-.84-1.23-.95-1.47-.95c-.3 0-.39.08-.39.51v1.32c0 .36-.11.57-1.05.57c-1.56 0-3.28-.95-4.49-2.7C5.5 11.24 5 9.31 5 8.92c0-.22.08-.42.5-.42z" fill="currentColor"></svg:path>`,
})
export class MdiVkBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVkCircleIcon],svg[mdi-vk-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M5.5 8.5H7c.36 0 .5.16.64.57c.72 2.1 1.93 3.93 2.43 3.93c.19 0 .28-.08.28-.55v-2.17c-.06-1-.59-1.09-.59-1.44c0-.17.14-.34.38-.34h2.31c.32 0 .42.17.42.54v2.92c0 .31.13.42.23.42c.19 0 .35-.11.69-.45c1.06-1.19 1.81-3.01 1.81-3.01c.1-.22.27-.42.64-.42h1.47c.45 0 .55.23.45.54c-.19.86-1.98 3.39-1.98 3.39c-.18.25-.22.37 0 .66c.15.21.67.65 1.01 1.06c.64.71 1.11 1.31 1.25 1.72c.12.42-.09.63-.51.63h-1.48c-.56 0-.72-.45-1.72-1.45c-.88-.84-1.23-.95-1.47-.95c-.3 0-.39.08-.39.51v1.32c0 .36-.11.57-1.05.57c-1.56 0-3.28-.95-4.49-2.7C5.5 11.24 5 9.31 5 8.92c0-.22.08-.42.5-.42z" fill="currentColor"></svg:path>`,
})
export class MdiVkCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVlcIcon],svg[mdi-vlc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c-.42 0-.81.23-1 .75L9.88 4.88c.48.52 1.4.62 2.12.62s1.64-.1 2.13-.62L13 1.75c-.18-.5-.58-.75-1-.75M8.44 8.91l-1.44 4c1.07 1.36 3.26 1.59 5 1.59s3.93-.23 5-1.59l-1.44-4C14.76 9.83 13.24 10 12 10s-2.76-.17-3.56-1.09m-3 6.09c-.82 0-1.68.65-1.91 1.44l-1.47 5.12c-.22.79.24 1.44 1.07 1.44h17.75c.82 0 1.28-.65 1.06-1.44l-1.47-5.12c-.23-.79-1.09-1.44-1.91-1.44h-.81l.34.97c.12.32.2.72 0 1C16.84 18.7 14.14 19 12 19s-4.84-.3-6.09-2.03c-.2-.28-.12-.68 0-1l.34-.97z"></svg:path>`,
})
export class MdiVlcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVoicemailIcon],svg[mdi-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 15a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 18.5 8a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m-13 0A3.5 3.5 0 0 1 2 11.5A3.5 3.5 0 0 1 5.5 8A3.5 3.5 0 0 1 9 11.5A3.5 3.5 0 0 1 5.5 15m13-9a5.5 5.5 0 0 0-5.5 5.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5A5.5 5.5 0 0 0 5.5 6A5.5 5.5 0 0 0 0 11.5A5.5 5.5 0 0 0 5.5 17h13a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 18.5 6"></svg:path>`,
})
export class MdiVoicemailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolcanoIcon],svg[mdi-volcano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-7l-2 5H6l-4 9h20zm-5-7h2v4h-2zm3.12 4.47l2.83-2.83l1.41 1.41l-2.82 2.83zM7.64 4.05l1.41-1.41l2.83 2.82l-1.41 1.42z"></svg:path>`,
})
export class MdiVolcanoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolcanoOutlineIcon],svg[mdi-volcano-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-7l-2 5H6l-4 9h20zM7.3 15h3.05l.5-1.26l1.5-3.74h4.15l2.85 10H5.08zM13 1h2v4h-2zm3.12 4.47l2.83-2.83l1.41 1.41l-2.82 2.83zM7.64 4.05l1.41-1.41l2.83 2.82l-1.41 1.42z"></svg:path>`,
})
export class MdiVolcanoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolleyballIcon],svg[mdi-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.04 4.85C17.34 3.2 15.33 2.25 13 2v3.62l9 5.18c-.28-2.3-1.27-4.3-2.96-5.95M12 22c3.44 0 6.16-1.38 8.17-4.14L17.06 16l-8.99 5.2c1.25.53 2.57.8 3.93.8m1-10.59l8.15 4.66c.44-.94.73-1.93.85-2.96l-9-5.18zm-9.12 6.4c.66.91 1.38 1.65 2.17 2.19l8.99-5.1L12 13.15zM11.04 2C10 2.09 9 2.36 8 2.8v10.35l3.04-1.74zM2 12c0 1.39.3 2.77.89 4.12L6 14.28V4c-2.67 2-4 4.65-4 8"></svg:path>`,
})
export class MdiVolleyballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeIcon],svg[mdi-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 9h4l5-5v16l-5-5H3V9zm18 3a9.003 9.003 0 0 1-7 8.777V18.71a7.003 7.003 0 0 0 0-13.42V3.223c4.008.91 7 4.494 7 8.777zm-4 0a5.001 5.001 0 0 1-3 4.584V7.416c1.766.772 3 2.534 3 4.584z" fill="currentColor"></svg:path>`,
})
export class MdiVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeEqualIcon],svg[mdi-volume-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h4l5-5v16l-5-5H3zm11 4h8v2h-8m0-6h8v2h-8Z"></svg:path>`,
})
export class MdiVolumeEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeHighIcon],svg[mdi-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77s-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9z"></svg:path>`,
})
export class MdiVolumeHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeLowIcon],svg[mdi-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9v6h4l5 5V4l-5 5z"></svg:path>`,
})
export class MdiVolumeLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeMediumIcon],svg[mdi-volume-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9v6h4l5 5V4L9 9m9.5 3c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4"></svg:path>`,
})
export class MdiVolumeMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeMinusIcon],svg[mdi-volume-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h4l5-5v16l-5-5H3zm11 2h8v2h-8z"></svg:path>`,
})
export class MdiVolumeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeMuteIcon],svg[mdi-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h4l5-5v16l-5-5H3zm13.59 3L14 9.41L15.41 8L18 10.59L20.59 8L22 9.41L19.41 12L22 14.59L20.59 16L18 13.41L15.41 16L14 14.59z"></svg:path>`,
})
export class MdiVolumeMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeOffIcon],svg[mdi-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4L9.91 6.09L12 8.18M4.27 3L3 4.27L7.73 9H3v6h4l5 5v-6.73l4.25 4.26c-.67.51-1.42.93-2.25 1.17v2.07c1.38-.32 2.63-.95 3.68-1.81L19.73 21L21 19.73l-9-9M19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.9 8.9 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71m-2.5 0c0-1.77-1-3.29-2.5-4.03v2.21l2.45 2.45c.05-.2.05-.42.05-.63"></svg:path>`,
})
export class MdiVolumeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolumePlusIcon],svg[mdi-volume-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h4l5-5v16l-5-5H3zm11 2h3V8h2v3h3v2h-3v3h-2v-3h-3z"></svg:path>`,
})
export class MdiVolumePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeSourceIcon],svg[mdi-volume-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9v6h4l5 5V4L7 9zm13 6h-2V9h2zm4 4h-2V5h2z"></svg:path>`,
})
export class MdiVolumeSourceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeVariantOffIcon],svg[mdi-volume-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.64 3.64l15.72 15.72l-1.41 1.42L16 16.83V20l-5-5H7V9h1.17L4.22 5.05zM16 4v7.17l-3.59-3.59z"></svg:path>`,
})
export class MdiVolumeVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeVibrateIcon],svg[mdi-volume-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9v6h4l5 5V4L8 9zm12.55-6.53L15.5 3.53L17.93 6L15 9l2.93 3L15 15l2.93 3l-2.43 2.47l1.05 1.06L20 18l-2.93-3L20 12l-2.93-3L20 6z"></svg:path>`,
})
export class MdiVolumeVibrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVoteIcon],svg[mdi-vote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4zm-1-5.05l-4.95 4.95L8.5 9.36l4.96-4.95zm-4.24-5.66L6.39 8.66a.996.996 0 0 0 0 1.41L11.34 15c.39.41 1.02.41 1.41 0l6.36-6.34a.996.996 0 0 0 0-1.41L14.16 2.3a.975.975 0 0 0-1.4-.01"></svg:path>`,
})
export class MdiVoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVoteOutlineIcon],svg[mdi-vote-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 13l3 3v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4l3-3h.83l2 2H6.78L5 17h14l-1.77-2h-1.91l2-2zm1 7v-1H5v1zm-7.66-5l-4.95-4.93a.996.996 0 0 1 0-1.41l6.37-6.37a.975.975 0 0 1 1.4.01l4.95 4.95c.39.39.39 1.02 0 1.41L12.75 15a.96.96 0 0 1-1.41 0m2.12-10.59L8.5 9.36l3.55 3.54L17 7.95z"></svg:path>`,
})
export class MdiVoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVpnIcon],svg[mdi-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5h6l-3 3zm1.5 9.66c-.3.34-.5.84-.5 1.34a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.55-.22-1.05-.59-1.41l1.42-1.42C15.55 13.9 16 14.9 16 16a4 4 0 0 1-4 4a4 4 0 0 1-4-4c0-1.07.42-2.04 1.1-2.75l-.01-.01l7.08-7.07A4 4 0 0 1 19 5a4 4 0 0 1 4 4a4 4 0 0 1-4 4c-1.1 0-2.1-.45-2.83-1.17l1.42-1.42c.36.37.86.59 1.41.59a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.55 0-1.05.22-1.41.59zM6.41 7.59C6.05 7.22 5.55 7 5 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2c.55 0 1.05-.22 1.41-.59l1.42 1.42C7.1 12.55 6.1 13 5 13a4 4 0 0 1-4-4a4 4 0 0 1 4-4c1.11 0 2.11.45 2.83 1.17l2.76 2.76l-1.42 1.42z"></svg:path>`,
})
export class MdiVpnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVuejsIcon],svg[mdi-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h3.5L12 15l6.5-12H22L12 21zm4.5 0h3L12 7.58L14.5 3h3L12 13.08z"></svg:path>`,
})
export class MdiVuejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiVuetifyIcon],svg[mdi-vuetify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.64L7.92 2h8.16zm0 10.31L3.27 4.91h4.57L12 14.47l4.16-9.56h4.57z"></svg:path>`,
})
export class MdiVuetifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWalkIcon],svg[mdi-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.12 10H19V8.2h-3.62l-2-3.33c-.3-.5-.84-.84-1.46-.84c-.18 0-.34.03-.5.08L6 5.8V11h1.8V7.33l2.11-.66L6 22h1.8l2.87-8.11L13 17v5h1.8v-6.41l-2.49-4.54l.73-2.87M14 3.8c1 0 1.8-.8 1.8-1.8S15 .2 14 .2S12.2 1 12.2 2S13 3.8 14 3.8"></svg:path>`,
})
export class MdiWalkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallIcon],svg[mdi-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h9v5H3zm-1-6h6v5H2zm7 0h6v5H9zm7 0h6v5h-6zm-3 6h8v5h-8zM3 4h8v5H3zm9 0h9v5h-9z"></svg:path>`,
})
export class MdiWallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallFireIcon],svg[mdi-wall-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.14 15.34l-.02.01c.23.28.43.59.58.92l.09.19c.71 1.69.21 3.64-1.1 4.86c-1.19 1.09-2.85 1.38-4.39 1.18c-1.46-.18-2.8-1.1-3.57-2.37c-.23-.39-.43-.83-.53-1.28c-.13-.35-.17-.73-.2-1.1c-.09-1.6.55-3.3 1.76-4.3c-.55 1.21-.42 2.72.39 3.77l.11.13c.14.12.31.15.47.09c.15-.06.27-.21.27-.37l-.07-.24c-.88-2.33-.14-5.03 1.73-6.56c.51-.42 1.14-.8 1.8-.97c-.68 1.36-.46 3.14.63 4.2c.46.5 1.02.79 1.49 1.23zM19.86 20l-.01-.03c.45-.39.7-1.06.68-1.66L20.5 18c-.2-1-1.07-1.34-1.63-2.07l-.43-.78c-.22.5-.24.97-.15 1.51c.1.57.32 1.06.21 1.65c-.16.65-.67 1.3-1.56 1.51c.5.49 1.31.88 2.12.6c.26-.07.59-.26.8-.42M3 16h8.06L11 17c0 1.41.36 2.73 1 3.88V21H3zm-1-6h6v5H2zm7 0h6v.07A8.03 8.03 0 0 0 11.25 15H9zM3 4h8v5H3zm9 0h9v5h-9z"></svg:path>`,
})
export class MdiWallFireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceIcon],svg[mdi-wall-sconce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 4l-4 9h12l-4-9zM4 14v8h2v-3h8v-5h-2v3H6v-3z"></svg:path>`,
})
export class MdiWallSconceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceFlatIcon],svg[mdi-wall-sconce-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v6h14V5zm.27 8.32L3.5 15.09l1.41 1.41l1.77-1.77zm13.46 0l-1.41 1.41l1.77 1.77l1.41-1.41zM11 16v3h2v-3z"></svg:path>`,
})
export class MdiWallSconceFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceFlatOutlineIcon],svg[mdi-wall-sconce-flat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v6h14V5zm12 4H7V7h10zM5.27 13.32L3.5 15.09l1.41 1.41l1.77-1.77zm13.46 0l-1.41 1.41l1.77 1.77l1.41-1.41zM11 16v3h2v-3z"></svg:path>`,
})
export class MdiWallSconceFlatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceFlatVariantIcon],svg[mdi-wall-sconce-flat-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19v-6H5v6zm-.27-8.32l1.77-1.77l-1.41-1.41l-1.77 1.77zm-13.46 0l1.41-1.41L4.91 7.5L3.5 8.91zM13 8V5h-2v3z"></svg:path>`,
})
export class MdiWallSconceFlatVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceFlatVariantOutlineIcon],svg[mdi-wall-sconce-flat-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13v6h14v-6zm12 4H7v-2h10zm1.73-6.32l1.77-1.77l-1.41-1.41l-1.77 1.77zm-13.46 0l1.41-1.41L4.91 7.5L3.5 8.91zM13 8V5h-2v3z"></svg:path>`,
})
export class MdiWallSconceFlatVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceOutlineIcon],svg[mdi-wall-sconce-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.7 6l2.22 5h-5.84l2.22-5zM15 4h-4l-4 9h12zM4 14v8h2v-3h8v-5h-2v3H6v-3z"></svg:path>`,
})
export class MdiWallSconceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceRoundIcon],svg[mdi-wall-sconce-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19v-3h-2v3zm6.09-2.5l1.41-1.41l-1.77-1.77l-1.41 1.41zm-14.18 0l1.77-1.77l-1.41-1.41l-1.77 1.77zM20 12c0-2.86-1.5-5.5-4-6.93s-5.5-1.43-8 0S4 9.14 4 12z"></svg:path>`,
})
export class MdiWallSconceRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceRoundOutlineIcon],svg[mdi-wall-sconce-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19v-3h-2v3zm6.09-2.5l1.41-1.41l-1.77-1.77l-1.41 1.41zm-14.18 0l1.77-1.77l-1.41-1.41l-1.77 1.77zM12 6c1.04 0 2.08.28 3 .81c1.26.69 2.19 1.86 2.66 3.19H6.34C6.81 8.67 7.74 7.5 9 6.81A6.03 6.03 0 0 1 12 6m0-2c-1.37 0-2.75.36-4 1.07C5.5 6.5 4 9.14 4 12h16c0-2.86-1.5-5.5-4-6.93A8.1 8.1 0 0 0 12 4"></svg:path>`,
})
export class MdiWallSconceRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceRoundVariantIcon],svg[mdi-wall-sconce-round-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5v3h2V5zM4.91 7.5L3.5 8.91l1.77 1.77l1.41-1.41zm14.18 0l-1.77 1.77l1.41 1.41l1.77-1.77zM4 12c0 2.86 1.5 5.5 4 6.93s5.5 1.43 8 0s4-4.07 4-6.93z"></svg:path>`,
})
export class MdiWallSconceRoundVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceRoundVariantOutlineIcon],svg[mdi-wall-sconce-round-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5v3h2V5zM4.91 7.5L3.5 8.91l1.77 1.77l1.41-1.41zm14.18 0l-1.77 1.77l1.41 1.41l1.77-1.77zM17.66 14c-.47 1.33-1.4 2.5-2.66 3.19c-.92.53-1.96.81-3 .81s-2.08-.28-3-.81C7.74 16.5 6.81 15.33 6.34 14zM20 12H4c0 2.86 1.5 5.5 4 6.93A8 8 0 0 0 12 20a8 8 0 0 0 4-1.07c2.5-1.43 4-4.07 4-6.93"></svg:path>`,
})
export class MdiWallSconceRoundVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceVariantIcon],svg[mdi-wall-sconce-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 4.5v3h2v-3h-2M4.91 7L3.5 8.41l1.77 1.77l1.41-1.41L4.91 7m14.18 0l-1.77 1.77l1.41 1.41l1.77-1.77L19.09 7M4 11.5c0 2.86 1.5 5.5 4 6.93c2.5 1.43 5.5 1.43 8 0s4-4.07 4-6.93H4z" fill="currentColor"></svg:path>`,
})
export class MdiWallSconceVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWalletIcon],svg[mdi-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1h-9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2m0-2h10V8H12m4 5.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWalletBifoldIcon],svg[mdi-wallet-bifold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H7C4.79 3 3 4.79 3 7v10c0 2.21 1.79 4 4 4h12c1.11 0 2-.89 2-2V9a2 2 0 0 0-2-2V5a2 2 0 0 0-2-2m0 2v2H7c-.73 0-1.41.2-2 .54V7c0-1.1.9-2 2-2m8.5 10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class MdiWalletBifoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWalletBifoldOutlineIcon],svg[mdi-wallet-bifold-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 15.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M7 3h10a2 2 0 0 1 2 2v2a2 2 0 0 1 2 2v10c0 1.11-.89 2-2 2H7c-2.21 0-4-1.79-4-4V7c0-2.21 1.79-4 4-4m10 4V5H7c-1.1 0-2 .9-2 2v.54A4 4 0 0 1 7 7zM5 17a2 2 0 0 0 2 2h12V9H7c-1.1 0-2 .9-2 2z"></svg:path>`,
})
export class MdiWalletBifoldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWalletGiftcardIcon],svg[mdi-wallet-giftcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14H4V8h5.08L7 10.83L8.62 12L11 8.76l1-1.36l1 1.36L15.38 12L17 10.83L14.92 8H20m0 11H4v-2h16M9 4a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m5 2h-2.18c.11-.31.18-.65.18-1a3 3 0 0 0-3-3c-1.05 0-1.96.54-2.5 1.35L12 4l-.5-.66C10.96 2.54 10.05 2 9 2a3 3 0 0 0-3 3c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2"></svg:path>`,
})
export class MdiWalletGiftcardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWalletMembershipIcon],svg[mdi-wallet-membership-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10H4V4h16m0 11H4v-2h16m0-11H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2l4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2"></svg:path>`,
})
export class MdiWalletMembershipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWalletOutlineIcon],svg[mdi-wallet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72V5a2 2 0 0 0-2-2zm0 2h14v2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6v2H5zm8 4h7v6h-7zm3 1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiWalletOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWalletPlusIcon],svg[mdi-wallet-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v3H0v2h3v3h2V5h3V3H5V0zm6 3v3H6v3H3v10a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h-9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h9V5a2 2 0 0 0-2-2zm3 5v8h10V8zm4 2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MdiWalletPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWalletPlusOutlineIcon],svg[mdi-wallet-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v3H0v2h3v3h2V5h3V3H5V0zm7 3v2h9v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5v-9H3v9a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72V5c0-1.1-.9-2-2-2zm3 6h7v6h-7zm3 1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiWalletPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWalletTravelIcon],svg[mdi-wallet-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14H4V8h3v2h2V8h6v2h2V8h3m0 11H4v-2h16M9 4h6v2H9m11 0h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2"></svg:path>`,
})
export class MdiWalletTravelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWallpaperIcon],svg[mdi-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h7V2H4a2 2 0 0 0-2 2v7h2zm6 9l-4 5h12l-3-4l-2.03 2.71zm7-4.5A1.5 1.5 0 0 0 15.5 7A1.5 1.5 0 0 0 14 8.5a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 17 8.5M20 2h-7v2h7v7h2V4a2 2 0 0 0-2-2m0 18h-7v2h7a2 2 0 0 0 2-2v-7h-2zM4 13H2v7a2 2 0 0 0 2 2h7v-2H4z"></svg:path>`,
})
export class MdiWallpaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWanIcon],svg[mdi-wan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a8 8 0 0 0-8 8c0 4.03 3 7.42 7 7.93V19h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2h-7a1 1 0 0 0-1-1h-1v-1.07c4-.5 7-3.9 7-7.93a8 8 0 0 0-8-8m0 2s.74 1.28 1.26 3h-2.52C11.26 5.28 12 4 12 4m-2.23.43c-.27.5-.68 1.41-1.03 2.57H6.81C7.5 5.84 8.5 4.93 9.77 4.43m4.46.01c1.27.5 2.27 1.4 2.96 2.56h-1.93c-.35-1.16-.76-2.07-1.03-2.56M6.09 9h2.23c-.04.33-.07.66-.07 1s.03.67.07 1H6.09a5.6 5.6 0 0 1 0-2m4.23 0h3.36c.04.33.07.66.07 1s-.03.67-.07 1h-3.36c-.04-.33-.07-.66-.07-1s.03-.67.07-1m5.36 0h2.23a5.6 5.6 0 0 1 0 2h-2.23c.04-.33.07-.66.07-1s-.03-.67-.07-1m-8.87 4h1.93c.35 1.16.76 2.07 1.03 2.56c-1.27-.5-2.27-1.4-2.96-2.56m3.93 0h2.52c-.52 1.72-1.26 3-1.26 3s-.74-1.28-1.26-3m4.52 0h1.93c-.69 1.16-1.69 2.07-2.96 2.57c.27-.5.68-1.41 1.03-2.57"></svg:path>`,
})
export class MdiWanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWardrobeIcon],svg[mdi-wardrobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v15c0 1.1.9 2 2 2v1h2v-1h3.5V2H6c-1.1 0-2 .9-2 2m4 6h2v3H8zm10-8h-5.5v19H16v1h2v-1c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 11h-2v-3h2z"></svg:path>`,
})
export class MdiWardrobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWardrobeOutlineIcon],svg[mdi-wardrobe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v15c0 1.11.89 2 2 2v1h2v-1h8v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2zm0 2h5v15H6zm7 0h5v15h-5zm-5 6v3h2v-3zm6 0v3h2v-3z"></svg:path>`,
})
export class MdiWardrobeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWarehouseIcon],svg[mdi-warehouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19h2v2H6zm6-16L2 8v13h2v-8h16v8h2V8zm-4 8H4V9h4zm6 0h-4V9h4zm6 0h-4V9h4zM6 15h2v2H6zm4 0h2v2h-2zm0 4h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiWarehouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWashingMachineIcon],svg[mdi-washing-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.83 11.17a4.01 4.01 0 0 1 0 5.66a4.01 4.01 0 0 1-5.66 0zM6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m1 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m3 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m2 4a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6"></svg:path>`,
})
export class MdiWashingMachineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWashingMachineAlertIcon],svg[mdi-washing-machine-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.83 11.17c1.56 1.56 1.56 4.1 0 5.66s-4.1 1.56-5.66 0zM4 2h12a2 2 0 0 1 2 2v16c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m1 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m2 4c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m10 7h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiWashingMachineAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWashingMachineOffIcon],svg[mdi-washing-machine-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L4 5.89V20c0 1.11.89 2 2 2h12c.58 0 1.1-.25 1.46-.65l1.38 1.38zM12 20c-3.31 0-6-2.69-6-6c0-1.68.7-3.2 1.82-4.29l4.24 4.24l-2.89 2.88a4.01 4.01 0 0 0 5.66 0c.02-.02.03-.04.05-.06l1.41 1.41A5.96 5.96 0 0 1 12 20m-.75-11.95C11.5 8 11.75 8 12 8c3.31 0 6 2.69 6 6c0 .25 0 .5-.05.75L20 16.8V4a2 2 0 0 0-2-2H6c-.24 0-.46.05-.67.13zM10 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class MdiWashingMachineOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWatchIcon],svg[mdi-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12a6 6 0 0 1 6-6a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6m14 0a7.94 7.94 0 0 0-3.05-6.27L16 0H8l-.95 5.73A7.94 7.94 0 0 0 4 12c0 2.54 1.19 4.81 3.05 6.27L8 24h8l.95-5.73A7.96 7.96 0 0 0 20 12"></svg:path>`,
})
export class MdiWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWatchExportIcon],svg[mdi-watch-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11h5l-2.5-2.5l1.42-1.42L22.84 12l-4.92 4.92l-1.42-1.42L19 13h-5zm-2 7a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.4 0 2.69.5 3.71 1.29l1.42-1.42l-.18-.14L16 0H8l-.95 5.73A7.96 7.96 0 0 0 4 12a7.94 7.94 0 0 0 3.05 6.27L8 24h8l.95-5.73l.18-.14l-1.42-1.42A6.07 6.07 0 0 1 12 18"></svg:path>`,
})
export class MdiWatchExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWatchExportVariantIcon],svg[mdi-watch-export-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11h5l-2.5-2.5l1.42-1.42L22.84 12l-4.92 4.92l-1.42-1.42L19 13h-5zM8 0h8l.83 5H17c.28 0 .54.06.78.16L15.94 7H7v10h8.94l1.84 1.84c-.24.1-.5.16-.78.16h-.17L16 24H8l-.83-5H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h.17z"></svg:path>`,
})
export class MdiWatchExportVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWatchImportIcon],svg[mdi-watch-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h5L4.5 8.5l1.42-1.42L10.84 12l-4.92 4.92L4.5 15.5L7 13H2zm10 7a6 6 0 0 0 6-6a6 6 0 0 0-6-6c-1.4 0-2.69.5-3.71 1.29L6.87 5.87l.18-.14L8 0h8l.95 5.73A7.94 7.94 0 0 1 20 12c0 2.54-1.19 4.81-3.05 6.27L16 24H8l-.95-5.73l-.18-.14l1.42-1.42C9.31 17.5 10.6 18 12 18"></svg:path>`,
})
export class MdiWatchImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWatchImportVariantIcon],svg[mdi-watch-import-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h5L3.5 8.5l1.42-1.42L9.84 12l-4.92 4.92L3.5 15.5L6 13H1zM8 0h8l.83 5H17a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-.17L16 24H8l-.83-5H7c-.54 0-1-.21-1.38-.56L7.06 17H17V7H7.06L5.62 5.56C6 5.21 6.46 5 7 5h.17z"></svg:path>`,
})
export class MdiWatchImportVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWatchVariantIcon],svg[mdi-watch-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 0l-.83 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h.17L8 24h8l.83-5H17a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-.17L16 0zM7 7h10v10H7z"></svg:path>`,
})
export class MdiWatchVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWatchVibrateIcon],svg[mdi-watch-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V7h2v10zm16 0V7h2v10zm3-8h2v6h-2zM0 15V9h2v6zm17.96-3.03c0 1.9-.89 3.6-2.28 4.7l-.71 4.28H9l-.73-4.28A5.98 5.98 0 0 1 6 11.97c0-1.9.88-3.6 2.27-4.69L9 3h5.97l.71 4.28a5.95 5.95 0 0 1 2.28 4.69m-10.46 0c0 2.48 2 4.49 4.47 4.49a4.5 4.5 0 0 0 4.49-4.49c0-2.47-2.01-4.47-4.49-4.47a4.47 4.47 0 0 0-4.47 4.47"></svg:path>`,
})
export class MdiWatchVibrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWatchVibrateOffIcon],svg[mdi-watch-vibrate-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 9h2v6H0zm12-1.5c2.47 0 4.47 2.03 4.46 4.5c-.01.38-.06.76-.16 1.13l1.2 1.18c.31-.73.5-1.51.5-2.31c0-1.83-.84-3.56-2.28-4.69L15 3H9l-.41 2.39l2.27 2.27c.37-.11.75-.16 1.14-.16m9 9.5V7h-2v8.8l1.2 1.2zm-4.5-1.14l5.61 5.6l-1.27 1.27l-5.29-5.29L15 21H9l-.73-4.28c-2.42-1.9-3-5.32-1.36-7.92L1.11 3l1.28-1.27l5.7 5.71L9.17 8.5l6.27 6.29zm-2.45.08l-6-6c-.35.63-.55 1.34-.55 2.06c0 2.47 2.03 4.47 4.5 4.46c.72 0 1.42-.18 2.05-.52M22 9v6h2V9zM3 17h2V7H3z"></svg:path>`,
})
export class MdiWatchVibrateOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterIcon],svg[mdi-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a6 6 0 0 1-6-6c0-4 6-10.75 6-10.75S18 10 18 14a6 6 0 0 1-6 6"></svg:path>`,
})
export class MdiWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterAlertIcon],svg[mdi-water-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3.25S16 10 16 14c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-4 6-10.75 6-10.75M20 7v6h-2V7zm-2 10h2v-2h-2z"></svg:path>`,
})
export class MdiWaterAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterAlertOutlineIcon],svg[mdi-water-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3.25S4 10 4 14c0 3.31 2.69 6 6 6s6-2.69 6-6c0-4-6-10.75-6-10.75M10 18c-2.21 0-4-1.79-4-4c0-1.77 2-5.04 4-7.61c2 2.56 4 5.84 4 7.61c0 2.21-1.79 4-4 4M20 7v6h-2V7zm-2 10h2v-2h-2z"></svg:path>`,
})
export class MdiWaterAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterBoilerIcon],svg[mdi-water-boiler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h1v2H6v2h3c1.11 0 2-.89 2-2v-2h2v2c0 1.11.89 2 2 2h3v-2h-3v-2h1c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm4 2.97a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-2 9.53h4V16h-4z"></svg:path>`,
})
export class MdiWaterBoilerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterBoilerAlertIcon],svg[mdi-water-boiler-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h1v2H4v2h3c1.11 0 2-.89 2-2v-2h2v2c0 1.11.89 2 2 2h3v-2h-3v-2h1c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm4 2.97a2 2 0 1 1 .001 3.999A2 2 0 0 1 10 4.97M8 14.5h4V16H8zm10 .5h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiWaterBoilerAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterBoilerAutoIcon],svg[mdi-water-boiler-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h1v2H2v2h3c1.11 0 2-.89 2-2v-2h2v2c0 1.11.89 2 2 2h2l.75-2H11v-2h1c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm4 2.97a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 4.97M6 14.5h4V16H6zM19.8 13h-2l-3.2 9h1.9l.7-2h3.2l.7 2H23zm-2.2 5.7l1.2-3.7l1.2 3.7z"></svg:path>`,
})
export class MdiWaterBoilerAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterBoilerOffIcon],svg[mdi-water-boiler-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.82L6.25 3.05C6.59 2.42 7.24 2 8 2h8c1.11 0 2 .89 2 2v10.8l-5.84-5.84C13.19 8.87 14 8 14 6.97a2 2 0 0 0-2-2c-1.05 0-1.9.81-2 1.85M15 18v2h3v2h-3c-1.11 0-2-.89-2-2v-2h-2v2c0 1.11-.89 2-2 2H6v-2h3v-2H8c-1.11 0-2-.89-2-2V7.89L1.11 3l1.28-1.27l19.72 19.73l-1.27 1.27L16.1 18zm-1-2v-.11l-1.39-1.39H10V16z"></svg:path>`,
})
export class MdiWaterBoilerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterCheckIcon],svg[mdi-water-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.75 16.25L17 21l-2.75-3l1.16-1.16L17 18.43l3.59-3.59zM17.62 12C16.31 8.1 12 3.25 12 3.25S6 10 6 14c0 3.31 2.69 6 6 6h.34c-.22-.64-.34-1.3-.34-2c0-3.18 2.5-5.78 5.62-6"></svg:path>`,
})
export class MdiWaterCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterCheckOutlineIcon],svg[mdi-water-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.75 16.25L17 21l-2.75-3l1.16-1.16L17 18.43l3.59-3.59zM8 14c0-1.77 2-5.04 4-7.61c1.5 1.94 3 4.28 3.67 6.08c.6-.26 1.26-.41 1.95-.47C16.31 8.1 12 3.25 12 3.25S6 10 6 14c0 3.31 2.69 6 6 6h.34c-.22-.64-.34-1.3-.34-2c-2.21 0-4-1.79-4-4"></svg:path>`,
})
export class MdiWaterCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterCircleIcon],svg[mdi-water-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 17c-2.76 0-5-2.24-5-5c0-3.33 5-8.96 5-8.96s5 5.63 5 8.96c0 2.76-2.24 5-5 5"></svg:path>`,
})
export class MdiWaterCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterMinusIcon],svg[mdi-water-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-8v-2zm-4.38-5C16.31 8.1 12 3.25 12 3.25S6 10 6 14c0 3.31 2.69 6 6 6h.34c-.22-.64-.34-1.3-.34-2c0-3.18 2.5-5.78 5.62-6"></svg:path>`,
})
export class MdiWaterMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterMinusOutlineIcon],svg[mdi-water-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-8v-2zM8 14c0-1.77 2-5.04 4-7.61c1.5 1.94 3 4.28 3.67 6.08c.6-.26 1.26-.41 1.95-.47C16.31 8.1 12 3.25 12 3.25S6 10 6 14c0 3.31 2.69 6 6 6h.34c-.22-.64-.34-1.3-.34-2c-2.21 0-4-1.79-4-4"></svg:path>`,
})
export class MdiWaterMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterOffIcon],svg[mdi-water-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-4.55-4.55A5.96 5.96 0 0 1 12 20c-3.31 0-6-2.69-6-6c0-1.33.67-2.97 1.55-4.56L1.11 3l1.28-1.27l19.72 19.73zM18 14c0-4-6-10.75-6-10.75s-1.16 1.3-2.45 3.1l8.4 8.4c.05-.25.05-.5.05-.75"></svg:path>`,
})
export class MdiWaterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterOffOutlineIcon],svg[mdi-water-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l6.54 6.54C6.74 11.03 6 12.65 6 14.23c0 3.31 2.69 6 6 6a5.9 5.9 0 0 0 4.4-1.94l4.44 4.44zM12 18.23c-2.22 0-4-1.78-4-4c0-.73.5-1.96 1.14-3.2L15 16.88c-.74.83-1.8 1.35-3 1.35m-.86-10.29L9.71 6.5c.86-1.12 1.54-1.89 1.54-1.89l.75-.84l.75.84s1.28 1.45 2.57 3.33S18 12.07 18 14.23c0 .18 0 .36-.03.54l-2.51-2.51c-.46-1.03-1.09-2.19-1.78-3.19c-.84-1.22-1.24-1.65-1.68-2.17c-.27.31-.5.6-.86 1.04"></svg:path>`,
})
export class MdiWaterOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterOpacityIcon],svg[mdi-water-opacity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14v-2h1.61c.24.71.39 1.39.39 2zm-.42-6c-.46-.71-.93-1.39-1.38-2H14v2zm.42 4v-2h-2v2zm0-3.32V10h.74c-.24-.44-.48-.89-.74-1.32M12 16v-2h2v-2h-2v-2h2V8h-2V6h2v-.27c-1.1-1.47-2-2.48-2-2.48S6 10 6 14c0 3.31 2.69 6 6 6v-2h2v-2zm2 3.65c.75-.26 1.42-.65 2-1.19V18h-2zM14 16h2v-2h-2zm2 2h.46c.54-.58.93-1.25 1.19-2H16z"></svg:path>`,
})
export class MdiWaterOpacityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterOutlineIcon],svg[mdi-water-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3.77l-.75.84S9.97 6.06 8.68 7.94S6 12.07 6 14.23a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-2.16-1.39-4.41-2.68-6.29s-2.57-3.33-2.57-3.33zm0 3.13c.44.52.84.95 1.68 2.17c1.21 1.76 2.32 4 2.32 5.16c0 2.22-1.78 4-4 4s-4-1.78-4-4c0-1.16 1.11-3.4 2.32-5.16c.84-1.22 1.24-1.65 1.68-2.17"></svg:path>`,
})
export class MdiWaterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterPercentIcon],svg[mdi-water-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.25S6 10 6 14c0 3.32 2.69 6 6 6a6 6 0 0 0 6-6c0-4-6-10.75-6-10.75m2.47 6.72l1.06 1.06l-6 6l-1.06-1.06M9.75 10A1.25 1.25 0 0 1 11 11.25a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 9.75 10m4.5 4.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 14.25 17A1.25 1.25 0 0 1 13 15.75a1.25 1.25 0 0 1 1.25-1.25"></svg:path>`,
})
export class MdiWaterPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterPercentAlertIcon],svg[mdi-water-percent-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7v6h-2V7zm-2 10h2v-2h-2zM10 3.25S4 10 4 14c0 3.32 2.69 6 6 6s6-2.69 6-6c0-4-6-10.75-6-10.75M7.75 10a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.5 7a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m-4.72.03l-1.06-1.06l6-6l1.06 1.06z"></svg:path>`,
})
export class MdiWaterPercentAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterPlusIcon],svg[mdi-water-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c0 .7.12 1.36.34 2H12c-3.31 0-6-2.69-6-6c0-4 6-10.75 6-10.75S16.31 8.1 17.62 12c-3.12.22-5.62 2.82-5.62 6m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiWaterPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterPlusOutlineIcon],svg[mdi-water-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c0 .7.12 1.36.34 2H12c-3.31 0-6-2.69-6-6c0-4 6-10.75 6-10.75S16.31 8.1 17.62 12c-.69.06-1.34.22-1.95.47C15 10.68 13.5 8.33 12 6.39C10 8.96 8 12.23 8 14c0 2.21 1.79 4 4 4m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiWaterPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterPoloIcon],svg[mdi-water-polo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16h2v2h-2c-1.4 0-2.8-.4-4-1c-2.5 1.3-5.5 1.3-8 0c-1.2.6-2.6 1-4 1H2v-2h2c1.4 0 2.8-.5 4-1.3c2.4 1.7 5.6 1.7 8 0c1.2.8 2.6 1.3 4 1.3m-7-5.4c.6-.3 1.3-.6 2-.7v.3c.3 1 .3 1.9.2 2.9c-.9.5-2 .8-3 .8c.5-1 .8-2.2.8-3.3m-.1-7q-2.1.6-3.6 2.1q-.6-1.5-.6-3c2.2-1 4.7-.9 6.9.2c.3.1.6.2.8.4c-1.2-.1-2.4 0-3.5.3m-6.1 9.7q-.9.45-1.8.6c-.7-1.3-1-2.7-1-4.1c.5 1 1.2 2 2 2.8c.3.2.5.5.8.7m12.2.6c-.6-.1-1.2-.3-1.7-.5c.2-1.2.1-2.4-.2-3.6c1.1.1 2.1.4 3 1c-.1 1-.4 1.9-.9 2.8zM7.4 11.2c-1.2-1.1-1.9-2.7-2.2-4.3L5.1 6c.5-.8 1-1.4 1.7-2c.1 1.4.6 2.7 1.4 3.8c.7 1.1 1.7 2.1 2.8 2.7c0 .8-.2 1.6-.5 2.4c-1.2-.3-2.2-.9-3.1-1.7m6.1-5.7c1.5-.4 3.2-.3 4.7.2l.8.4c.4.7.6 1.5.8 2.3c-2.5-1.1-5.4-.9-7.8.4c-.7-.3-1.2-.8-1.7-1.4l.1-.1c.9-.8 1.9-1.5 3.1-1.8M16 18.7c1.2.8 2.6 1.3 4 1.3h2v2h-2c-1.4 0-2.8-.4-4-1c-2.5 1.3-5.5 1.3-8 0c-1.2.6-2.6 1-4 1H2v-2h2c1.4 0 2.8-.5 4-1.3c2.4 1.7 5.6 1.7 8 0"></svg:path>`,
})
export class MdiWaterPoloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterPumpIcon],svg[mdi-water-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14.5s2 2.17 2 3.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.33 2-3.5 2-3.5M5 18V9a2 2 0 0 1-2-2a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h8a2 2 0 0 1 2 2v4a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1a1 1 0 0 1 1-1V9h-6v9h1a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiWaterPumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterPumpOffIcon],svg[mdi-water-pump-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.7 2.5A2 2 0 0 1 7 2h2a2 2 0 0 1 2 2v1h8a2 2 0 0 1 2 2v4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2V9h-4.8m8.64 13.73l1.27-1.27L11 10.34L2.39 1.73L1.11 3l2.54 2.54A2 2 0 0 0 5 9v9H4a2 2 0 0 0-2 2v2h12v-2a2 2 0 0 0-2-2h-1v-5.11Z"></svg:path>`,
})
export class MdiWaterPumpOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterRemoveIcon],svg[mdi-water-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c0 .7.12 1.36.34 2H12c-3.31 0-6-2.69-6-6c0-4 6-10.75 6-10.75S16.31 8.1 17.62 12c-3.12.22-5.62 2.82-5.62 6m9.54-2.12l-1.41-1.41L18 16.59l-2.12-2.12l-1.41 1.41L16.59 18l-2.12 2.12l1.41 1.41L18 19.41l2.12 2.12l1.41-1.41L19.41 18z"></svg:path>`,
})
export class MdiWaterRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterRemoveOutlineIcon],svg[mdi-water-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c0 .7.12 1.36.34 2H12c-3.31 0-6-2.69-6-6c0-4 6-10.75 6-10.75S16.31 8.1 17.62 12c-.69.06-1.34.22-1.95.47C15 10.68 13.5 8.33 12 6.39C10 8.96 8 12.23 8 14c0 2.21 1.79 4 4 4m9.54-2.12l-1.41-1.41L18 16.59l-2.12-2.12l-1.41 1.41L16.59 18l-2.12 2.12l1.41 1.41L18 19.41l2.12 2.12l1.41-1.41L19.41 18z"></svg:path>`,
})
export class MdiWaterRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterSyncIcon],svg[mdi-water-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.2S6 10 6 14c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-6-10.8-6-10.8m0 5.3V10c2.2 0 4 1.8 4 4c0 .8-.2 1.6-.7 2.2l-1.1-1.1c.2-.3.3-.7.3-1.1c0-1.4-1.1-2.5-2.5-2.5V13l-2.2-2.2zm-3.3 3.3l1.1 1.1c-.2.3-.3.7-.3 1.1c0 1.4 1.1 2.5 2.5 2.5V15l2.2 2.2l-2.2 2.3V18c-2.2 0-4-1.8-4-4c0-.8.2-1.6.7-2.2"></svg:path>`,
})
export class MdiWaterSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterThermometerIcon],svg[mdi-water-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5c-1.11 0-2 .89-2 2v6.76c-.64.57-1 1.39-1 2.24c0 1.66 1.34 3 3 3s3-1.34 3-3c0-.85-.36-1.67-1-2.23V7c0-1.11-.89-2-2-2m0 1c.55 0 1 .45 1 1v1h-2V7c0-.55.45-1 1-1M8 20c-3.31 0-6-2.69-6-6C2 10 8 3.25 8 3.25S14 10 14 14c0 3.31-2.69 6-6 6"></svg:path>`,
})
export class MdiWaterThermometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterThermometerOutlineIcon],svg[mdi-water-thermometer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5c-1.11 0-2 .89-2 2v6.76c-.64.57-1 1.39-1 2.24c0 1.66 1.34 3 3 3s3-1.34 3-3c0-.85-.36-1.67-1-2.23V7c0-1.11-.89-2-2-2m0 1c.55 0 1 .45 1 1v1h-2V7c0-.55.45-1 1-1M8 3.54l-.75.84S5.97 5.83 4.68 7.71S2 11.84 2 14c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.16-1.39-4.41-2.68-6.29S8.75 4.38 8.75 4.38zm0 3.13c.44.52.84.95 1.68 2.17C10.89 10.6 12 12.84 12 14c0 2.22-1.78 4-4 4s-4-1.78-4-4c0-1.16 1.11-3.4 2.32-5.16C7.16 7.62 7.56 7.19 8 6.67"></svg:path>`,
})
export class MdiWaterThermometerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterWellIcon],svg[mdi-water-well-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16H2v2h2v4h16v-4h2zm-11.56-1c-.25 0-.44-.19-.49-.44l-.38-3v-.06c0-.28.22-.5.5-.5H14c.27.04.46.29.43.56l-.38 3c-.05.25-.24.44-.49.44zM19 2l2.56 4.68c.04.1.05.21.05.32c0 .56-.45 1-1 1H19v7h-2V8h-4v2h-2V8H7v7H5V8H3.62a.998.998 0 0 1-.9-1.45L5 2z"></svg:path>`,
})
export class MdiWaterWellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterWellOutlineIcon],svg[mdi-water-well-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.62 8H5v7h2V8h4v2h2V8h4v7h2V8h1.61c.55 0 1-.44 1-1a.9.9 0 0 0-.05-.32L19 2H5L2.72 6.55A.998.998 0 0 0 3.62 8m2.62-4h11.52l1 2H5.24zM2 16v2h2v4h16v-4h2v-2zm16 4H6v-2h12zm-4.07-9c.28 0 .5.22.5.5v.06l-.38 3c-.05.25-.24.44-.49.44h-3.12c-.25 0-.44-.19-.49-.44l-.38-3A.51.51 0 0 1 10 11z"></svg:path>`,
})
export class MdiWaterWellOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaterfallIcon],svg[mdi-waterfall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20c-1.39 0-2.78-.47-4-1.33c-2.44 1.71-5.56 1.71-8 0C6.78 19.53 5.39 20 4 20H2v2h2c1.37 0 2.74-.35 4-1c2.5 1.3 5.5 1.3 8 0c1.26.65 2.62 1 4 1h2v-2m-2-4c-1.39 0-2.78-.47-4-1.33c-2.44 1.71-5.56 1.71-8 0C6.78 15.53 5.39 16 4 16H2v2h2c1.37 0 2.74-.35 4-1c2.5 1.3 5.5 1.3 8 0c1.26.65 2.62 1 4 1h2v-2m0-14H2v2h4v12h12V4h4M9 4h2v6H9m4-2h2v6h-2Z"></svg:path>`,
})
export class MdiWaterfallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWateringCanIcon],svg[mdi-watering-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 7.47c-.74.73-.93 1.78-.58 2.68L15 13.07V11c0-.55-.45-1-1-1h-1.03c.03-.17.03-.33.03-.5C13 6.46 10.54 4 7.5 4A5.497 5.497 0 0 0 4 13.74V20c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-4.11l4.33-4.33c.9.35 1.95.17 2.67-.56zM4.05 10C4.03 9.83 4 9.67 4 9.5C4 7.57 5.57 6 7.5 6S11 7.57 11 9.5c0 .17-.03.33-.05.5z"></svg:path>`,
})
export class MdiWateringCanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWateringCanOutlineIcon],svg[mdi-watering-can-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 7.47c-.74.73-.93 1.78-.58 2.68L15 13.07V11c0-.55-.45-1-1-1h-1.03c.03-.17.03-.33.03-.5C13 6.46 10.54 4 7.5 4A5.497 5.497 0 0 0 4 13.74V20c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-4.11l4.33-4.33c.9.35 1.95.17 2.67-.56zM4.05 10C4.03 9.83 4 9.67 4 9.5C4 7.57 5.57 6 7.5 6S11 7.57 11 9.5c0 .17-.03.33-.05.5M13 19H6v-7h7z"></svg:path>`,
})
export class MdiWateringCanOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWatermarkIcon],svg[mdi-watermark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16h-9v-6h9z"></svg:path>`,
})
export class MdiWatermarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaveIcon],svg[mdi-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12c-1.39 0-2.78-.47-4-1.33c-2.44 1.71-5.56 1.71-8 0C6.78 11.53 5.39 12 4 12H2v2h2c1.37 0 2.74-.35 4-1c2.5 1.3 5.5 1.3 8 0c1.26.65 2.62 1 4 1h2v-2"></svg:path>`,
})
export class MdiWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaveArrowDownIcon],svg[mdi-wave-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2V7h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0C17.22 6.53 18.61 7 20 7m-8 15l-4-4h3v-7h2v7h3z"></svg:path>`,
})
export class MdiWaveArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaveArrowUpIcon],svg[mdi-wave-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2V7h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0C17.22 6.53 18.61 7 20 7m-8 4l4 4h-3v7h-2v-7H8z"></svg:path>`,
})
export class MdiWaveArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaveUndercurrentIcon],svg[mdi-wave-undercurrent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2V7h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0C17.22 6.53 18.61 7 20 7m-8 5.5c2.21 0 4 1.79 4 4c0 .82-.25 1.58-.67 2.21l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 12 14v1.5l-2.25-2.25L12 11zm0 6.5v-1.5l2.25 2.25L12 22v-1.5c-2.21 0-4-1.79-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 12 19"></svg:path>`,
})
export class MdiWaveUndercurrentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWaveformIcon],svg[mdi-waveform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 12l-2 1l-1 1l-1-1l-1 3l-1-3l-1 8l-1-8l-1 2l-1-2l-1 4l-1-4l-1 9l-1-9l-1 6l-1-6l-1 1l-1-1l-2-1l2-1l1-1l1 1l1-6l1 6l1-9l1 9l1-4l1 4l1-2l1 2l1-8l1 8l1-3l1 3l1-1l1 1z"></svg:path>`,
})
export class MdiWaveformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWavesIcon],svg[mdi-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33m0-6h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2V6h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0C17.22 5.53 18.61 6 20 6m0 12h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33"></svg:path>`,
})
export class MdiWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWavesArrowLeftIcon],svg[mdi-waves-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33h2v2h-2c-1.37 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.62 1-4 1H2v-2zm4 4.67c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33h2v2h-2c-1.37 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.62 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33M6 10V7h5V5H6V2L2 6"></svg:path>`,
})
export class MdiWavesArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWavesArrowRightIcon],svg[mdi-waves-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33m0 6h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33m2-14l-4-4v3h-5v2h5v3"></svg:path>`,
})
export class MdiWavesArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWavesArrowUpIcon],svg[mdi-waves-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33m0 6h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33M7 2L3 6h3v5h2V6h3m6-4l-4 4h3v5h2V6h3"></svg:path>`,
})
export class MdiWavesArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWazeIcon],svg[mdi-waze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.54 6.63c.69.94 1.15 2.04 1.35 3.19c.21 1.25.11 2.52-.31 3.72a7.35 7.35 0 0 1-2 3.06a9.1 9.1 0 0 1-2.26 1.58c.41 1.07-.13 2.27-1.2 2.68c-.24.09-.49.14-.74.14a2.08 2.08 0 0 1-2.07-2h-3.07c-.11 1.14-1.13 2-2.27 1.87c-1.06-.1-1.86-.98-1.88-2.04c.01-.19.04-.39.1-.57a8.37 8.37 0 0 1-4-2.85c-.33-.44-.23-1.07.23-1.41c.18-.14.4-.22.63-.22c.72 0 1-.25 1.17-.63c.24-.72.38-1.47.39-2.23c.03-.53.09-1.05.17-1.57A7.3 7.3 0 0 1 7.5 5c1.66-1.3 3.69-2 5.79-2c1.43 0 2.84.35 4.11 1a8.7 8.7 0 0 1 3.14 2.63m-3.82 10.68c1.78-.81 3.18-2.27 3.87-4.1c1.62-4.94-2.59-9.16-7.3-9.16c-.35 0-.71.02-1.06.07C9.36 4.5 6.4 6.5 5.81 9.5c-.38 2 .19 5.29-2.76 5.29C4 16 5.32 16.93 6.81 17.37c.85-.76 2.16-.68 2.93.18c.11.12.2.25.26.39h3.55c.52-1.02 1.78-1.44 2.8-.9c.15.08.25.17.37.27m-5.75-7c-.58.03-1.09-.41-1.12-1c-.03-.58.42-1.08 1-1.12c.58-.03 1.09.42 1.12 1.06a1 1 0 0 1-.97 1.04zm4.69 0c-.58.03-1.09-.41-1.12-1c-.04-.58.42-1.08 1-1.12c.58-.03 1.09.42 1.12 1.06c.02.55-.41 1.02-1 1.04zm-5.95 1.76c-.06-.28.13-.57.41-.62s.56.13.62.41a2.5 2.5 0 0 0 2.58 1.74c1.14.06 2.18-.64 2.57-1.72c.14-.26.46-.38.71-.23c.18.1.29.27.29.47c-.19.71-.63 1.33-1.23 1.76c-.69.48-1.5.75-2.34.76h-.11c-1.63.07-3.1-1-3.53-2.58z"></svg:path>`,
})
export class MdiWazeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherCloudyIcon],svg[mdi-weather-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19a5 5 0 0 1-5-5a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 11a4 4 0 0 1 4 4a4 4 0 0 1-4 4zm13-6h-2v-1a5 5 0 0 0-5-5c-2.5 0-4.55 1.82-4.94 4.19C6.73 11.07 6.37 11 6 11a3 3 0 0 0-3 3a3 3 0 0 0 3 3h13a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiWeatherCloudyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherCloudyAlertIcon],svg[mdi-weather-cloudy-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19a5 5 0 0 1-5-5a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 11a4 4 0 0 1 4 4a4 4 0 0 1-4 4zm13-6h-2v-1a5 5 0 0 0-5-5c-2.5 0-4.55 1.82-4.94 4.19C6.73 11.07 6.37 11 6 11a3 3 0 0 0-3 3a3 3 0 0 0 3 3h13a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-6-1h-2V8h2zm0 4h-2v-2h2"></svg:path>`,
})
export class MdiWeatherCloudyAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherCloudyArrowRightIcon],svg[mdi-weather-cloudy-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 7l.69.06A5.5 5.5 0 0 1 12 3a5.5 5.5 0 0 1 5.5 5.5l-.08.95c.46-.29 1-.45 1.58-.45a3 3 0 0 1 3 3a3 3 0 0 1-3 3H6a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1a1 1 0 0 0-1-1h-3.5V8.5A3.5 3.5 0 0 0 12 5a3.5 3.5 0 0 0-3.5 3.5V9zm16 10l-3 3v-2H2v-2h17v-2z"></svg:path>`,
})
export class MdiWeatherCloudyArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherCloudyClockIcon],svg[mdi-weather-cloudy-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13h1.5v2.82l2.44 1.41l-.75 1.3L15 16.69zm3.13-3.67C17.23 6.81 14.83 5 12 5C9.3 5 7 6.65 6 9c-2.76 0-5 2.24-5 5s2.24 5 5 5h3.68c1.13 2.36 3.53 4 6.32 4c3.87 0 7-3.13 7-7c0-3.12-2.04-5.76-4.87-6.67M6 17c-1.66 0-3-1.34-3-3s1.34-3 3-3c.37 0 .73.07 1.06.19A5.004 5.004 0 0 1 12 7c1.63 0 3.07.79 4 2c-3.88 0-7 3.14-7 7c0 .34.03.67.08 1zm10 4c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class MdiWeatherCloudyClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherDustIcon],svg[mdi-weather-dust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5c0-.6.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1m1 8c0-.6.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1m0 3c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1s-.4-1-1-1zM18 5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1h-2c-.6 0-1-.4-1-1M7 20c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1zM3 10c-.6 0-1-.4-1-1s.4-1 1-1h9c1.1 0 2-.9 2-2s-.9-2-2-2c-.6 0-1.1.2-1.4.6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4C9.9 2.5 10.9 2 12 2c2.2 0 4 1.8 4 4s-1.8 4-4 4zm16 2c.6 0 1-.4 1-1s-.4-1-1-1c-.3 0-.5.1-.7.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4c.5-.6 1.3-.9 2.1-.9c1.7 0 3 1.3 3 3s-1.3 3-3 3h-9c-.6 0-1-.4-1-1s.4-1 1-1zm-1 6h-5c-.6 0-1-.4-1-1s.4-1 1-1h5c1.7 0 3 1.3 3 3s-1.3 3-3 3c-.8 0-1.6-.3-2.1-.9c-.4-.4-.4-1 0-1.4s1-.4 1.4 0c.2.2.4.3.7.3c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class MdiWeatherDustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherFogIcon],svg[mdi-weather-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h10a1 1 0 0 1 1 1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m13 0h5a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1a1 1 0 0 1 1-1M1 12a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 9c2.19 0 3.97 1.76 4 4h-2a2 2 0 0 0-2-2h-2v-1a5 5 0 0 0-5-5C9.5 5 7.45 6.82 7.06 9.19C6.73 9.07 6.37 9 6 9a3 3 0 0 0-3 3a3 3 0 0 0 .17 1H1.1zm2 7h2a1 1 0 0 1 1 1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m5 0h13a1 1 0 0 1 1 1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiWeatherFogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherHailIcon],svg[mdi-weather-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14a1 1 0 0 1 1 1a1 1 0 0 1-1 1a5 5 0 0 1-5-5a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-1a1 1 0 0 1-1-1a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3m4 4a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m4.5-2a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m-4-4a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 9 13.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiWeatherHailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherHazyIcon],svg[mdi-weather-hazy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l2.39 3.42C13.65 5.15 12.84 5 12 5s-1.65.15-2.39.42zM3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29zm17.31 0l-1.77 3.79a7.02 7.02 0 0 0-2.38-4.15M14 15a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1m8 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1m-12 4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1m-7 0a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m9-10a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiWeatherHazyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherHurricaneIcon],svg[mdi-weather-hurricane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6.79c1.86 1.07 3 3.06 3 5.21C18 22 6 22 6 22c1.25-.94 2.38-2.05 3.34-3.29a.99.99 0 0 0-.34-1.5C7.14 16.14 6 14.15 6 12C6 2 18 2 18 2c-1.25.94-2.38 2.05-3.34 3.29a.99.99 0 0 0 .34 1.5M12 14a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2"></svg:path>`,
})
export class MdiWeatherHurricaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherHurricaneOutlineIcon],svg[mdi-weather-hurricane-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14c1.11 0 2-.89 2-2a2 2 0 1 0-2 2m6-12a18 18 0 0 0-3.34 3.29a.99.99 0 0 0 .34 1.5c1.86 1.07 3 3.06 3 5.21c0 6.41-4.92 8.71-8.46 9.54C7.55 22 6 22 6 22a18 18 0 0 0 3.34-3.29a.99.99 0 0 0-.34-1.5C7.14 16.14 6 14.15 6 12c0-6.41 4.93-8.71 8.47-9.54C16.45 2 18 2 18 2M9.44 7.47C8.61 8.5 8 9.93 8 12c0 1.43.75 2.74 1.96 3.46c1.24.66 1.82 2.04 1.51 3.34c1.2-.53 2.29-1.26 3.09-2.27C15.39 15.5 16 14.07 16 12c0-1.43-.75-2.74-1.96-3.46a2.97 2.97 0 0 1-1.5-3.34c-1.21.53-2.3 1.27-3.1 2.27"></svg:path>`,
})
export class MdiWeatherHurricaneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherLightningIcon],svg[mdi-weather-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16a5 5 0 0 1-5-5a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-1a1 1 0 0 1-1-1a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3h1a1 1 0 0 1 1 1a1 1 0 0 1-1 1zm6-5h3l-2 4h2l-3.75 7l.75-5H9.5z"></svg:path>`,
})
export class MdiWeatherLightningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherLightningRainyIcon],svg[mdi-weather-lightning-rainy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 13.59c.5.28.64.91.37 1.37c-.28.48-.87.64-1.37.37A4.98 4.98 0 0 1 1 11a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a1 1 0 0 1-1-1a1 1 0 0 1 1-1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3c0 1.11.6 2.08 1.5 2.6zm5-2.59h3l-2 4h2l-3.75 7l.75-5H7zm8 7.67c0 1.29-1 2.33-2.25 2.33S13 19.96 13 18.67c0-1.55 2.25-4.17 2.25-4.17s2.25 2.62 2.25 4.17"></svg:path>`,
})
export class MdiWeatherLightningRainyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherMoonsetIcon],svg[mdi-weather-moonset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12h4c0-1.33.53-2.6 1.46-3.54C9.4 7.53 10.67 7 12 7s2.6.53 3.54 1.46C16.47 9.4 17 10.67 17 12h4c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29H3c-.26 0-.5-.1-.71-.29C2.11 13.5 2 13.27 2 13c0-.26.11-.5.29-.71c.21-.18.45-.29.71-.29m2 4h14c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29H5c-.26 0-.5-.1-.71-.29C4.11 17.5 4 17.27 4 17c0-.26.11-.5.29-.71c.21-.18.45-.29.71-.29m12 4c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29H7c-.26 0-.5-.1-.71-.29C6.11 21.5 6 21.27 6 21c0-.26.11-.5.29-.71c.21-.18.45-.29.71-.29z"></svg:path>`,
})
export class MdiWeatherMoonsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherMoonsetDownIcon],svg[mdi-weather-moonset-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12h4c0-1.33.53-2.6 1.46-3.54C9.4 7.53 10.67 7 12 7s2.6.53 3.54 1.46C16.47 9.4 17 10.67 17 12h4c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29H3c-.26 0-.5-.1-.71-.29C2.11 13.5 2 13.27 2 13c0-.26.11-.5.29-.71c.21-.18.45-.29.71-.29m9.71 8.71l3.11-3.11c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0L12 18.59l-2.41-2.41a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42l3.11 3.11c.21.19.45.29.71.29s.5-.1.71-.29"></svg:path>`,
})
export class MdiWeatherMoonsetDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherMoonsetUpIcon],svg[mdi-weather-moonset-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12h4c0-1.33.53-2.6 1.46-3.54C9.4 7.53 10.67 7 12 7s2.6.53 3.54 1.46C16.47 9.4 17 10.67 17 12h4c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29H3c-.26 0-.5-.1-.71-.29C2.11 13.5 2 13.27 2 13c0-.26.11-.5.29-.71c.21-.18.45-.29.71-.29m9.71 4.3l3.11 3.11a.996.996 0 1 1-1.41 1.41L12 18.41l-2.41 2.41a.996.996 0 1 1-1.41-1.41l3.11-3.11c.21-.2.45-.3.71-.3s.5.1.71.3"></svg:path>`,
})
export class MdiWeatherMoonsetUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherNightIcon],svg[mdi-weather-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3zm3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95zm-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31"></svg:path>`,
})
export class MdiWeatherNightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherNightPartlyCloudyIcon],svg[mdi-weather-night-partly-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.28c-.26.02-.5.03-.74.03c-1.94 0-3.87-.74-5.35-2.22A7.52 7.52 0 0 1 13.72 2c.05-.47-.5-1-1.01-1a.7.7 0 0 0-.39.12c-.32.24-.66.52-.96.82c-2.31 2.3-2.81 5.72-1.52 8.52a5.48 5.48 0 0 0-3.15 3.6L6 14a4 4 0 0 0-4 4a4 4 0 0 0 4 4h13a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-.58 0-1.12.16-1.58.45l.08-.95c0-.22 0-.45-.04-.67a7.45 7.45 0 0 0 4.6-2.19c.32-.3.58-.64.82-.96c.39-.55-.23-1.4-.84-1.4M19 18a1 1 0 0 1 1 1a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2.5v-.5c0-1.56 1.03-2.86 2.44-3.32c.16-.05.32-.09.49-.12c.18-.03.37-.06.57-.06c.23 0 .45.03.66.07q.105.015.21.06c.13.03.28.07.41.12c.08.03.16.07.22.11c.13.05.24.11.34.18c.08.05.16.1.23.16c.1.07.18.14.27.22c.07.08.16.13.21.2c.08.08.14.17.21.25c.06.08.13.16.18.25c.06.09.1.18.15.28s.11.18.15.28c.17.41.26.85.26 1.32V18m1.33-5.14A5.51 5.51 0 0 0 12 10h-.13c-.46-.81-.73-1.74-.73-2.71c0-.98.25-1.92.72-2.74A9.4 9.4 0 0 0 14.5 9.5a9.35 9.35 0 0 0 4.95 2.64c-.79.46-1.69.7-2.62.72"></svg:path>`,
})
export class MdiWeatherNightPartlyCloudyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherPartlyCloudyIcon],svg[mdi-weather-partly-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.74 5.47c2.36 1.03 3.61 3.56 3.18 5.99A6 6 0 0 1 18 16v.17a3 3 0 0 1 1-.17a3 3 0 0 1 3 3a3 3 0 0 1-3 3H6a4 4 0 0 1-4-4a4 4 0 0 1 4-4h.27C5 12.45 4.6 10.24 5.5 8.26a5.49 5.49 0 0 1 7.24-2.79m-.81 1.83c-1.77-.8-3.84.01-4.62 1.77c-.46 1.02-.38 2.15.1 3.06A5.99 5.99 0 0 1 12 10c.7 0 1.38.12 2 .34a3.51 3.51 0 0 0-2.07-3.04m1.62-3.66c-.55-.24-1.1-.41-1.67-.52l2.49-1.3l.9 2.89a7.7 7.7 0 0 0-1.72-1.07m-7.46.8c-.49.35-.92.75-1.29 1.19l.11-2.81l2.96.68c-.62.21-1.22.53-1.78.94M18 9.71c-.09-.59-.22-1.16-.41-1.71l2.38 1.5l-2.05 2.23c.11-.65.13-1.33.08-2.02M3.04 11.3c.07.6.2 1.17.39 1.7l-2.37-1.5L3.1 9.28c-.1.65-.13 1.33-.06 2.02M19 18h-3v-2a4 4 0 0 0-4-4a4 4 0 0 0-4 4H6a2 2 0 0 0-2 2a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiWeatherPartlyCloudyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherPartlyLightningIcon],svg[mdi-weather-partly-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15a3 3 0 0 0-1 .17V15c0-1.81-.81-3.44-2.08-4.54c.43-2.43-.82-4.96-3.17-5.99c-2.78-1.23-6.03.03-7.25 2.78c-.9 1.99-.5 4.2.77 5.75H6a4 4 0 0 0-4 4a4 4 0 0 0 4 4h1s1 0 1-1s-1-1-1-1H6a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2a4 4 0 0 1 4-4a4 4 0 0 1 4 4v2h3a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-2s-1 0-1 1s1 1 1 1h2a3 3 0 0 0 3-3a3 3 0 0 0-3-3m-7-6c-1.84 0-3.5.83-4.59 2.13c-.48-.91-.56-2.04-.1-3.06a3.487 3.487 0 0 1 4.62-1.77c1.25.56 2.01 1.76 2.07 3.04c-.62-.22-1.3-.34-2-.34m1.55-6.37c-.55-.23-1.1-.4-1.67-.51l2.49-1.3l.9 2.89c-.51-.42-1.08-.78-1.72-1.08m-7.46.81c-.49.35-.92.75-1.29 1.19l.11-2.81l2.96.68c-.62.21-1.22.53-1.78.94M18 8.71c-.09-.59-.22-1.16-.41-1.71l2.38 1.5l-2.05 2.23c.11-.65.13-1.33.08-2.02M3.04 10.3c.07.6.21 1.17.39 1.7l-2.37-1.5L3.1 8.28c-.1.65-.13 1.33-.06 2.02M11.8 15h2.45l-1.64 3.27h1.64L11.18 24l.62-4.09H9.75"></svg:path>`,
})
export class MdiWeatherPartlyLightningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherPartlyRainyIcon],svg[mdi-weather-partly-rainy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 4.47c2.35 1.03 3.6 3.56 3.17 5.99A6 6 0 0 1 18 15v.17a3 3 0 0 1 1-.17a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-2s-1 0-1-1s1-1 1-1h2a1 1 0 0 0 1-1a1 1 0 0 0-1-1h-3v-2a4 4 0 0 0-4-4a4 4 0 0 0-4 4H6a2 2 0 0 0-2 2a2 2 0 0 0 2 2h1s1 0 1 1s-1 1-1 1H6a4 4 0 0 1-4-4a4 4 0 0 1 4-4h.27C5 11.45 4.6 9.24 5.5 7.25c1.22-2.75 4.47-4.01 7.25-2.78m-.82 1.83c-1.77-.8-3.84.01-4.62 1.77c-.46 1.02-.38 2.15.1 3.06A5.99 5.99 0 0 1 12 9c.7 0 1.38.12 2 .34a3.51 3.51 0 0 0-2.07-3.04m1.62-3.67c-.55-.23-1.1-.4-1.67-.51l2.49-1.3l.9 2.89c-.51-.42-1.08-.78-1.72-1.08m-7.46.81c-.49.35-.92.75-1.29 1.19l.11-2.81l2.96.68c-.62.21-1.22.53-1.78.94M18 8.71c-.09-.59-.22-1.16-.41-1.71l2.38 1.5l-2.05 2.23c.11-.65.13-1.33.08-2.02M3.04 10.3c.07.6.21 1.17.39 1.7l-2.37-1.5L3.1 8.28c-.1.65-.13 1.33-.06 2.02M12 18.91c.59.91 1 1.72 1 2.09a1 1 0 0 1-1 1a1 1 0 0 1-1-1c0-.37.41-1.18 1-2.09m0-3.29S9 19 9 21a3 3 0 0 0 3 3a3 3 0 0 0 3-3c0-2-3-5.38-3-5.38"></svg:path>`,
})
export class MdiWeatherPartlyRainyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherPartlySnowyIcon],svg[mdi-weather-partly-snowy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19.03a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2c0-2.22 1.79-4 4-4a4 4 0 0 1 4 4v2h3a1 1 0 0 1 1 1c0 .54-.45 1-1 1h-2s-1 0-1 1s1 1 1 1h2a3 3 0 0 0 3-3c0-1.66-1.34-3-3-3c-.35 0-.69.05-1 .16v-.16c0-1.82-.81-3.45-2.08-4.53c.43-2.45-.82-4.97-3.17-6c-2.78-1.23-6.03.03-7.25 2.78c-.9 1.99-.5 4.19.77 5.75H6c-2.21 0-4 1.78-4 4a4 4 0 0 0 4 4s1 0 1-1s-1-1-1-1m6-10c-1.84 0-3.5.82-4.59 2.13a3.51 3.51 0 0 1-.1-3.07a3.496 3.496 0 0 1 4.62-1.77A3.52 3.52 0 0 1 14 9.37c-.62-.22-1.3-.34-2-.34m1.55-6.37c-.55-.24-1.1-.4-1.67-.51L14.37.84l.9 2.89a7.7 7.7 0 0 0-1.72-1.07m-7.46.8q-.735.525-1.29 1.2l.11-2.82l2.96.69c-.62.2-1.22.52-1.78.93M18 8.73c-.09-.58-.22-1.16-.41-1.7l2.38 1.5l-2.05 2.23c.11-.66.13-1.34.08-2.03M3.04 10.32c.07.6.21 1.18.39 1.71l-2.37-1.5L3.1 8.3c-.1.65-.13 1.34-.06 2.02m4.99 11.13c.1.39.5.61.88.51l1.59-.42l-.44 1.57c-.1.39.13.79.51.89s.78-.13.88-.5l.42-1.59l1.16 1.16c.27.28.74.28 1.02 0s.28-.75 0-1.02l-1.16-1.17l1.58-.41c.38-.1.61-.5.53-.88c-.12-.38-.5-.59-.91-.51l-1.59.42l.44-1.57c.1-.39-.12-.78-.51-.88c-.38-.1-.77.12-.88.51l-.41 1.58L10 17.97c-.3-.28-.77-.28-1.05 0c-.27.3-.27.75 0 1.03l1.16 1.16l-1.57.41c-.39.11-.61.5-.51.88"></svg:path>`,
})
export class MdiWeatherPartlySnowyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherPartlySnowyRainyIcon],svg[mdi-weather-partly-snowy-rainy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.55 2.66c-.55-.24-1.1-.4-1.67-.51L14.37.84l.9 2.89a7.7 7.7 0 0 0-1.72-1.07m-7.46.8q-.735.525-1.29 1.2l.11-2.82l2.96.69c-.62.2-1.22.52-1.78.93M18 8.73c-.09-.58-.22-1.16-.41-1.7l2.38 1.5l-2.05 2.23c.11-.66.13-1.34.08-2.03M3.04 10.32c.07.6.21 1.18.39 1.71l-2.37-1.5L3.1 8.3c-.1.65-.13 1.34-.06 2.02m13.64 11.89c0 .99-.77 1.79-1.73 1.79c-.95 0-1.72-.8-1.72-1.79c0-1.18 1.72-3.18 1.72-3.18s1.73 2 1.73 3.18m-10.65-.76c-.1-.38.12-.77.51-.87l1.59-.43L6.96 19a.7.7 0 0 1 0-1c.27-.3.74-.3 1.04 0l1.14 1.14l.41-1.58c.1-.39.5-.62.88-.51c.39.1.62.5.5.88l-.43 1.57l1.6-.4c.4-.1.78.11.9.5a.74.74 0 0 1-.53.87l-1.58.42l1.16 1.16c.28.27.28.74 0 1.02s-.74.28-1.02 0L9.87 21.9l-.42 1.6c-.1.38-.5.6-.88.5c-.39-.1-.6-.5-.51-.88l.44-1.57l-1.59.41c-.41.1-.78-.12-.88-.51M19 15.03c-.35 0-.69.05-1 .16v-.16c0-1.82-.81-3.45-2.08-4.53c.43-2.45-.82-4.97-3.17-6c-2.78-1.23-6.03.03-7.25 2.78c-.9 1.99-.5 4.19.77 5.75H6c-2.21 0-4 1.78-4 4c0 1.14.5 2.17 1.27 2.9c0 0 .7.71 1.41 0s0-1.43 0-1.43c-.41-.35-.68-.88-.68-1.47a2 2 0 0 1 2-2h2c0-2.22 1.79-4 4-4a4 4 0 0 1 4 4v2h3a1 1 0 0 1 1 1c0 .54-.45 1-1 1h-1s-1 0-1 1s1 1 1 1h1a3 3 0 0 0 3-3c0-1.66-1.34-3-3-3m-7-6c-1.84 0-3.5.82-4.59 2.13a3.51 3.51 0 0 1-.1-3.07a3.496 3.496 0 0 1 4.62-1.77A3.52 3.52 0 0 1 14 9.37c-.62-.22-1.3-.34-2-.34"></svg:path>`,
})
export class MdiWeatherPartlySnowyRainyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherPouringIcon],svg[mdi-weather-pouring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12c.53.14.85.69.71 1.22l-1.3 4.83c-.14.54-.69.85-1.22.71a.967.967 0 0 1-.69-1.22l1.28-4.83c.14-.54.69-.85 1.22-.71m4 0c.53.14.85.69.71 1.22l-2.07 7.73c-.14.55-.69.85-1.23.71c-.53-.16-.85-.69-.71-1.23l2.08-7.72c.14-.54.69-.85 1.22-.71m4 0c.53.14.85.69.71 1.22l-1.3 4.83c-.14.54-.69.85-1.22.71a.967.967 0 0 1-.69-1.22l1.28-4.83c.14-.54.69-.85 1.22-.71m0-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3c0 1.11.6 2.08 1.5 2.6v-.01c.5.28.64.91.37 1.37c-.28.47-.87.64-1.37.36v.01A4.98 4.98 0 0 1 1 11a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4c0 1.5-.8 2.77-2 3.46c-.5.27-1.09.11-1.37-.37c-.27-.48-.13-1.09.37-1.37v.01c.6-.34 1-.99 1-1.73a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiWeatherPouringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherRainyIcon],svg[mdi-weather-rainy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14.03a1 1 0 0 1 1 1c0 .55-.45 1-1 1c-2.76 0-5-2.24-5-5s2.24-5 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03l.5-.03a4 4 0 0 1 4 4c0 2.2-1.79 4-4 4h-1c-.55 0-1-.45-1-1c0-.56.45-1 1-1h1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2v-1c0-2.76-2.24-5-5-5c-2.5 0-4.55 1.81-4.94 4.18c-.33-.12-.69-.18-1.06-.18a3 3 0 0 0-3 3a3 3 0 0 0 3 3m6 .12c.18.24.37.51.56.79C13 15.56 14 17.03 14 18a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-.97 1-2.44 1.44-3.06c.19-.28.38-.54.56-.79m0-3.12l-.5.56s-.85.96-1.71 2.22C8.93 15.06 8 16.56 8 18a4 4 0 0 0 4 4a4 4 0 0 0 4-4c0-1.44-.93-2.94-1.79-4.19c-.86-1.26-1.71-2.22-1.71-2.22"></svg:path>`,
})
export class MdiWeatherRainyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherSnowyIcon],svg[mdi-weather-snowy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14a1 1 0 0 1 1 1a1 1 0 0 1-1 1a5 5 0 0 1-5-5a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-1a1 1 0 0 1-1-1a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3m1.88 4.07l2.19-.57l-1.61-1.62c-.39-.38-.39-1.02 0-1.42c.39-.39 1.04-.39 1.42 0l1.62 1.61l.57-2.19a1 1 0 1 1 1.93.52l-.59 2.19L15.6 16a1 1 0 1 1 .52 1.93l-2.19.57l1.61 1.62c.39.38.39 1.03 0 1.42s-1.04.39-1.42 0l-1.62-1.61l-.57 2.19A1 1 0 1 1 10 21.6l.59-2.19L8.4 20a1 1 0 1 1-.52-1.93"></svg:path>`,
})
export class MdiWeatherSnowyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherSnowyHeavyIcon],svg[mdi-weather-snowy-heavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16.36c-.14-.54.18-1.11.73-1.25L7 14.5l-1.67-1.64c-.4-.4-.4-1.05 0-1.46c.4-.4 1.07-.4 1.46 0l1.66 1.65l.59-2.25c.14-.56.71-.88 1.25-.73c.56.14.88.71.71 1.26l-.58 2.25l2.25-.58a.99.99 0 0 1 1.26.71c.15.54-.17 1.11-.73 1.25l-2.25.59l1.65 1.66c.4.39.4 1.06 0 1.46s-1.06.4-1.45 0L9.5 17l-.61 2.27c-.14.56-.71.87-1.25.73c-.56-.14-.87-.71-.73-1.26l.59-2.24l-2.24.59c-.55.14-1.12-.17-1.26-.73M1 10a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a1 1 0 0 1-1-1a1 1 0 0 1 1-1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V8a5 5 0 0 0-5-5C9.5 3 7.45 4.82 7.06 7.19C6.73 7.07 6.37 7 6 7a3 3 0 0 0-3 3c0 .85.35 1.61.91 2.16c.36.39.35 1-.03 1.38a.996.996 0 0 1-1.41 0A5 5 0 0 1 1 10m13.03 10.43c.1.39.47.61.88.51l1.59-.44l-.44 1.59c-.1.41.12.78.51.88c.38.11.78-.12.88-.51l.41-1.57l1.17 1.16c.27.28.74.28 1.02 0s.28-.75 0-1.02l-1.16-1.17l1.57-.41c.39-.1.62-.5.51-.88c-.1-.39-.47-.61-.88-.51l-1.59.44l.44-1.59c.1-.41-.12-.78-.51-.88a.71.71 0 0 0-.88.51l-.41 1.57l-1.17-1.16a.724.724 0 0 0-1.02 0c-.28.29-.28.75 0 1.02l1.16 1.17l-1.57.41c-.39.1-.62.5-.51.88"></svg:path>`,
})
export class MdiWeatherSnowyHeavyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherSnowyRainyIcon],svg[mdi-weather-snowy-rainy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 18.67c0 1.29-1 2.33-2.25 2.33S14 19.96 14 18.67c0-1.55 2.25-4.17 2.25-4.17s2.25 2.62 2.25 4.17M4 17.36c-.14-.54.18-1.11.73-1.25L7 15.5l-1.67-1.64c-.4-.4-.4-1.05 0-1.46c.4-.4 1.07-.4 1.46 0l1.66 1.65l.59-2.25c.14-.56.71-.88 1.25-.73c.56.14.88.71.71 1.26l-.58 2.25l2.25-.58a.99.99 0 0 1 1.26.71c.15.54-.17 1.11-.73 1.25l-2.25.59l1.65 1.66c.4.39.4 1.06 0 1.46s-1.06.4-1.45 0L9.5 18l-.61 2.27c-.14.56-.71.87-1.25.73c-.56-.14-.87-.71-.73-1.26l.59-2.24l-2.24.59c-.55.14-1.12-.17-1.26-.73M1 11a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a1 1 0 0 1-1-1a1 1 0 0 1 1-1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3c0 .85.35 1.61.91 2.16c.36.39.35 1-.03 1.38a.996.996 0 0 1-1.41 0A5 5 0 0 1 1 11"></svg:path>`,
})
export class MdiWeatherSnowyRainyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherSunnyIcon],svg[mdi-weather-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0-7l2.39 3.42C13.65 5.15 12.84 5 12 5s-1.65.15-2.39.42zM3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29zm.02 10l1.76-3.77a7.13 7.13 0 0 0 2.38 4.14zM20.65 7l-1.77 3.79a7.02 7.02 0 0 0-2.38-4.15zm-.01 10l-4.14.36c.59-.51 1.12-1.14 1.54-1.86c.42-.73.69-1.5.83-2.29zM12 22l-2.41-3.44c.74.27 1.55.44 2.41.44c.82 0 1.63-.17 2.37-.44z"></svg:path>`,
})
export class MdiWeatherSunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherSunnyAlertIcon],svg[mdi-weather-sunny-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m0-13l2.39 3.42C13.65 5.15 12.84 5 12 5s-1.65.15-2.39.42zM3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29zm.02 10l1.76-3.77a7.13 7.13 0 0 0 2.38 4.14zM12 22l-2.41-3.44c.74.27 1.55.44 2.41.44c.82 0 1.63-.17 2.37-.44M19 13V7h2v6zm0 4v-2h2v2"></svg:path>`,
})
export class MdiWeatherSunnyAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherSunnyOffIcon],svg[mdi-weather-sunny-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l3.86 3.86L3.34 7l1.77 3.79c.14-.79.39-1.55.83-2.29c.06-.14.19-.26.28-.39l1.44 1.44C7.25 10.27 7 11.11 7 12c0 2.76 2.24 5 5 5c.9 0 1.73-.25 2.45-.66l6.39 6.39zM12 15c-1.66 0-3-1.34-3-3c0-.33.07-.64.17-.94l3.77 3.77c-.3.1-.61.17-.94.17m6.05-6.5c-.42-.72-.95-1.35-1.55-1.86l4.15.36l-1.77 3.79c-.14-.79-.41-1.56-.83-2.29M12 7c2.76 0 5 2.24 5 5c0 .54-.11 1.05-.26 1.54L15 11.78A3.06 3.06 0 0 0 12.22 9l-1.75-1.73c.48-.16.99-.27 1.53-.27m0-2c-.84 0-1.65.15-2.39.42L12 2l2.39 3.42C13.65 5.15 12.84 5 12 5m6.87 8.21L20.64 17l-.4.04l-1.99-1.99c.29-.6.51-1.21.62-1.84M12 19c.82 0 1.63-.17 2.37-.44L12 22l-2.41-3.44c.74.27 1.55.44 2.41.44m-6.05-3.5c.42.74.96 1.36 1.55 1.87L3.36 17l1.76-3.77c.14.77.41 1.55.83 2.27"></svg:path>`,
})
export class MdiWeatherSunnyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherSunsetIcon],svg[mdi-weather-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12h4a5 5 0 0 1 5-5a5 5 0 0 1 5 5h4a1 1 0 0 1 1 1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m2 4h14a1 1 0 0 1 1 1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1a1 1 0 0 1 1-1m12 4a1 1 0 0 1 1 1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1a1 1 0 0 1 1-1zm-2-8a3 3 0 0 0-3-3a3 3 0 0 0-3 3zM12 2l2.39 3.42C13.65 5.15 12.84 5 12 5s-1.65.15-2.39.42zM3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29zm17.31 0l-1.77 3.79a7.02 7.02 0 0 0-2.38-4.15z"></svg:path>`,
})
export class MdiWeatherSunsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherSunsetDownIcon],svg[mdi-weather-sunset-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12h4a5 5 0 0 1 5-5a5 5 0 0 1 5 5h4a1 1 0 0 1 1 1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m12 0a3 3 0 0 0-3-3a3 3 0 0 0-3 3zM12 2l2.39 3.42C13.65 5.15 12.84 5 12 5s-1.65.15-2.39.42zM3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29zm17.31 0l-1.77 3.79a7.02 7.02 0 0 0-2.38-4.15zm-7.94 13.71l3.11-3.11c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0L12 18.59l-2.41-2.41a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42l3.11 3.11c.21.19.45.29.71.29s.5-.1.71-.29"></svg:path>`,
})
export class MdiWeatherSunsetDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherSunsetUpIcon],svg[mdi-weather-sunset-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12h4a5 5 0 0 1 5-5a5 5 0 0 1 5 5h4a1 1 0 0 1 1 1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m12 0a3 3 0 0 0-3-3a3 3 0 0 0-3 3zM12 2l2.39 3.42C13.65 5.15 12.84 5 12 5s-1.65.15-2.39.42zM3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29zm17.31 0l-1.77 3.79a7.02 7.02 0 0 0-2.38-4.15zm-7.94 9.3l3.11 3.11a.996.996 0 1 1-1.41 1.41L12 18.41l-2.41 2.41a.996.996 0 1 1-1.41-1.41l3.11-3.11c.21-.2.45-.3.71-.3s.5.1.71.3"></svg:path>`,
})
export class MdiWeatherSunsetUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherTornadoIcon],svg[mdi-weather-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1a1 1 0 0 1-1 1m-1 3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1m1 4a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1m-5 4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1m-3 4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1"></svg:path>`,
})
export class MdiWeatherTornadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherWindyIcon],svg[mdi-weather-windy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10a1 1 0 0 1-1-1a1 1 0 0 1 1-1h8a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.55 0-1.05.22-1.41.59a.973.973 0 0 1-1.42 0c-.39-.39-.39-1.03 0-1.42C9.9 2.45 10.9 2 12 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4zm15 2a1 1 0 0 0 1-1a1 1 0 0 0-1-1c-.28 0-.53.11-.71.29a.996.996 0 0 1-1.41 0c-.38-.39-.38-1.02 0-1.41C17.42 8.34 18.17 8 19 8a3 3 0 0 1 3 3a3 3 0 0 1-3 3H5a1 1 0 0 1-1-1a1 1 0 0 1 1-1zm-1 6H4a1 1 0 0 1-1-1a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-.83 0-1.58-.34-2.12-.88c-.38-.39-.38-1.02 0-1.41a.996.996 0 0 1 1.41 0c.18.18.43.29.71.29a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiWeatherWindyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherWindyVariantIcon],svg[mdi-weather-windy-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 6l.69.06A5.5 5.5 0 0 1 12 2a5.5 5.5 0 0 1 5.5 5.5l-.08.95c.46-.29 1-.45 1.58-.45a3 3 0 0 1 3 3a3 3 0 0 1-3 3H6a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1a1 1 0 0 0-1-1h-3.5V7.5A3.5 3.5 0 0 0 12 4a3.5 3.5 0 0 0-3.5 3.5V8zm12 10H4a1 1 0 0 1-1-1a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-.83 0-1.58-.34-2.12-.88c-.38-.39-.38-1.02 0-1.41a.996.996 0 0 1 1.41 0c.18.18.43.29.71.29a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiWeatherWindyVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebIcon],svg[mdi-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiWebIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebBoxIcon],svg[mdi-web-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.95 13.4H6.58a5.5 5.5 0 0 1 0-2.8h2.37a12 12 0 0 0-.1 1.4a12 12 0 0 0 .1 1.4M7.16 9.2H9.2a12 12 0 0 1 .98-2.49A5.55 5.55 0 0 0 7.16 9.2m9.68 0a5.6 5.6 0 0 0-3.03-2.49a11 11 0 0 1 .97 2.49M12 17.57a9.5 9.5 0 0 0 1.34-2.77h-2.68A9.5 9.5 0 0 0 12 17.57m0-11.15a9.5 9.5 0 0 0-1.34 2.78h2.68A9.5 9.5 0 0 0 12 6.42M7.16 14.8a5.6 5.6 0 0 0 3.02 2.49a12 12 0 0 1-.98-2.49M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-2 7a7 7 0 1 0-7 7a7 7 0 0 0 7-7m-3.85 0a12 12 0 0 1-.1 1.4h2.37a5.5 5.5 0 0 0 0-2.8h-2.37a12 12 0 0 1 .1 1.4m-1.34 5.29a5.62 5.62 0 0 0 3.03-2.49h-2.06a11 11 0 0 1-.97 2.49m-3.45-6.69a8.8 8.8 0 0 0 0 2.8h3.28a10 10 0 0 0 .11-1.4a10 10 0 0 0-.11-1.4Z"></svg:path>`,
})
export class MdiWebBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebCancelIcon],svg[mdi-web-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.82 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .5-.04 1-.1 1.46c.6-.5 1.32-.89 2.1-1.14V12c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2v.18c.7.17 1.35.45 1.95.82c.05-.32.05-.66.05-1c0-5.5-4.5-10-10-10C6.47 2 2 6.5 2 12s4.5 10 10 10c.34 0 .68 0 1-.05c-.41-.66-.71-1.4-.87-2.2c-.04.07-.08.14-.13.21c-.83-1.2-1.5-2.53-1.91-3.96h2.41c.31-.75.76-1.42 1.32-2m5.1-6h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m10.5 6C16 14 14 16 14 18.5s2 4.5 4.5 4.5s4.5-2 4.5-4.5s-2-4.5-4.5-4.5m0 7.5c-1.66 0-3-1.34-3-3c0-.56.15-1.08.42-1.5L20 21.08c-.42.27-.94.42-1.5.42m2.58-1.5L17 15.92c.42-.27.94-.42 1.5-.42c1.66 0 3 1.34 3 3c0 .56-.15 1.08-.42 1.5"></svg:path>`,
})
export class MdiWebCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebCheckIcon],svg[mdi-web-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 12c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2c0 .37-.03.73-.08 1.08c.69.1 1.33.32 1.92.64c.1-.56.16-1.13.16-1.72c0-5.5-4.5-10-10-10C6.47 2 2 6.5 2 12s4.5 10 10 10c.59 0 1.16-.06 1.72-.16A5.9 5.9 0 0 1 13 19c0-.29.03-.57.07-.85c-.32.63-.67 1.24-1.07 1.81c-.83-1.2-1.5-2.53-1.91-3.96h3.72a5.95 5.95 0 0 1 2.59-2.4c.06-.53.1-1.06.1-1.6M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m6.34 6H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25-9.56c1.84.63 3.37 1.9 4.33 3.56h-2.95a15.7 15.7 0 0 0-1.38-3.56m7.91 12.81L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiWebCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebClockIcon],svg[mdi-web-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12.5v4l3 2l.75-1.25l-2.25-1.5V12.5zm7-.11V12c0-5.5-4.5-10-10-10C6.47 2 2 6.5 2 12s4.5 10 10 10c.13 0 .24 0 .37-.03c1.06.65 2.3 1.03 3.63 1.03c3.86 0 7-3.14 7-7c0-1.32-.38-2.56-1-3.61m-2.24-2.28l-.17-.11h.15c.01.03.01.07.02.11M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M9.66 10h2.75a7 7 0 0 0-2.84 3.24c-.04-.41-.07-.82-.07-1.24c0-.68.06-1.35.16-2M9.4 4.44C8.8 5.55 8.35 6.75 8 8H5.08A7.92 7.92 0 0 1 9.4 4.44M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16M16 21c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class MdiWebClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebMinusIcon],svg[mdi-web-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 12c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2c0 .37-.03.73-.08 1.08c.69.1 1.33.32 1.92.64c.1-.56.16-1.13.16-1.72c0-5.5-4.5-10-10-10C6.47 2 2 6.5 2 12s4.5 10 10 10c.59 0 1.16-.06 1.72-.16A5.9 5.9 0 0 1 13 19c0-.29.03-.57.07-.85c-.32.63-.67 1.24-1.07 1.81c-.83-1.2-1.5-2.53-1.91-3.96h3.72a5.95 5.95 0 0 1 2.59-2.4c.06-.53.1-1.06.1-1.6M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m6.34 6H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25-9.56c1.84.63 3.37 1.9 4.33 3.56h-2.95a15.7 15.7 0 0 0-1.38-3.56M23 18v2h-8v-2z"></svg:path>`,
})
export class MdiWebMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebOffIcon],svg[mdi-web-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.4 4.44c-.21.39-.4.79-.56 1.2l1.53 1.53c.41-1.12.96-2.17 1.63-3.14c.83 1.2 1.5 2.54 1.91 3.97H11.2l2 2h1.14c.06.41.1.84.13 1.27l1.97 1.97c.03-.41.06-.82.06-1.24c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2H17.2l3.3 3.28c.94-1.53 1.5-3.34 1.5-5.28c0-5.5-4.5-10-10-10c-1.94 0-3.75.56-5.28 1.5L8.18 5c.39-.23.82-.42 1.22-.56M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M2.39 1.73L1.11 3l2.95 2.95A9.9 9.9 0 0 0 2 12c0 5.5 4.5 10 10 10c2.28 0 4.37-.77 6.06-2.05l2.78 2.78l1.27-1.27zM5.5 7.37l.61.63H5.08c.12-.22.26-.42.42-.63M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m4.42-4c0-.2 0-.39.03-.58L12.11 14H9.66c-.1-.66-.16-1.32-.16-2m2.5 7.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96m2.59-.4c.37-.68.67-1.41.91-2.15l1.12 1.09c-.62.45-1.3.81-2.03 1.06"></svg:path>`,
})
export class MdiWebOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebPlusIcon],svg[mdi-web-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 12c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2c0 .37-.03.73-.08 1.08c.69.1 1.33.32 1.92.64c.1-.56.16-1.13.16-1.72c0-5.5-4.5-10-10-10C6.47 2 2 6.5 2 12s4.5 10 10 10c.59 0 1.16-.06 1.72-.16A5.9 5.9 0 0 1 13 19c0-.29.03-.57.07-.85c-.32.63-.67 1.24-1.07 1.81c-.83-1.2-1.5-2.53-1.91-3.96h3.72a5.95 5.95 0 0 1 2.59-2.4c.06-.53.1-1.06.1-1.6M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m6.34 6H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25-9.56c1.84.63 3.37 1.9 4.33 3.56h-2.95a15.7 15.7 0 0 0-1.38-3.56M23 18v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></svg:path>`,
})
export class MdiWebPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebRefreshIcon],svg[mdi-web-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.82 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .5-.04 1-.1 1.46c.6-.5 1.32-.89 2.1-1.14V12c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2v.18c.7.17 1.35.45 1.95.82c.05-.32.05-.66.05-1c0-5.5-4.5-10-10-10C6.47 2 2 6.5 2 12s4.5 10 10 10c.34 0 .68 0 1-.05c-.41-.66-.71-1.4-.87-2.2c-.04.07-.08.14-.13.21c-.83-1.2-1.5-2.53-1.91-3.96h2.41c.31-.75.76-1.42 1.32-2m5.1-6h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m12.83 7.67L22 14.5v4h-4l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.11 0 2.11.45 2.83 1.17"></svg:path>`,
})
export class MdiWebRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebRemoveIcon],svg[mdi-web-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 12c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2c0 .37-.03.73-.08 1.08c.69.1 1.33.32 1.92.64c.1-.56.16-1.13.16-1.72c0-5.5-4.5-10-10-10C6.47 2 2 6.5 2 12s4.5 10 10 10c.59 0 1.16-.06 1.72-.16A5.9 5.9 0 0 1 13 19c0-.29.03-.57.07-.85c-.32.63-.67 1.24-1.07 1.81c-.83-1.2-1.5-2.53-1.91-3.96h3.72a5.95 5.95 0 0 1 2.59-2.4c.06-.53.1-1.06.1-1.6M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m6.34 6H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25-9.56c1.84.63 3.37 1.9 4.33 3.56h-2.95a15.7 15.7 0 0 0-1.38-3.56M20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41z"></svg:path>`,
})
export class MdiWebRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebSyncIcon],svg[mdi-web-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11.74c0-.59-.07-1.16-.14-1.74h3.38c.08.33.15.67.19 1c.72.07 1.41.23 2.07.5C21.71 6.21 17.35 2 12 2C6.47 2 2 6.5 2 12s4.5 10 10 10c.87 0 1.71-.12 2.5-.33a6.6 6.6 0 0 1-1.46-3.47c-.31.61-.65 1.2-1.04 1.76c-.83-1.2-1.5-2.53-1.91-3.96h3.09c.17-.72.46-1.39.85-2H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .5-.04 1-.1 1.5a6.4 6.4 0 0 1 2.1-1.76M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m2.09 0c.41-1.43 1.08-2.77 1.91-3.97c.83 1.2 1.5 2.54 1.91 3.97zm8.83 0h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M23 17.5c0 .82-.25 1.58-.67 2.21l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 19 15v1.5l-2.25-2.25L19 12v1.5c2.21 0 4 1.79 4 4m-4 1l2.25 2.25L19 23v-1.5c-2.21 0-4-1.79-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 19 20z"></svg:path>`,
})
export class MdiWebSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebcamIcon],svg[mdi-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7 7 0 0 1 7 7a7 7 0 0 1-7 7a7 7 0 0 1-7-7a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3M6 22a2 2 0 0 1-2-2c0-.38.1-.73.29-1.03l1.82-3.16A9 9 0 0 0 12 18c2.25 0 4.31-.83 5.89-2.19l1.82 3.16c.19.3.29.65.29 1.03a2 2 0 0 1-2 2z"></svg:path>`,
})
export class MdiWebcamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebcamOffIcon],svg[mdi-webcam-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c1.66 0 3 1.34 3 3c0 .78-.3 1.5-.79 2L10 6.79c.5-.49 1.22-.79 2-.79m0-2c2.76 0 5 2.24 5 5c0 1.33-.53 2.53-1.38 3.42l1.42 1.42A6.95 6.95 0 0 0 19 9c0-3.87-3.13-7-7-7c-1.88 0-3.59.75-4.84 1.96l1.42 1.42C9.47 4.53 10.67 4 12 4m10.11 17.46l-1.27 1.27l-1.38-1.38c-.36.4-.88.65-1.46.65H6c-1.11 0-2-.89-2-2c0-.38.1-.73.29-1.03l1.82-3.16A9 9 0 0 0 12 18c1.21 0 2.37-.25 3.43-.68l-1.58-1.58c-.59.17-1.21.26-1.85.26c-3.87 0-7-3.13-7-7c0-.64.09-1.26.26-1.85L1.11 3l1.28-1.27zM12.1 14L7 8.9V9c0 2.76 2.24 5 5 5z"></svg:path>`,
})
export class MdiWebcamOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebhookIcon],svg[mdi-webhook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.46 19C9 21.07 6.15 21.59 4.09 20.15c-2.05-1.44-2.53-4.31-1.09-6.4a4.59 4.59 0 0 1 3.58-1.98l.05 1.43c-.91.07-1.79.54-2.36 1.36c-1 1.44-.69 3.38.68 4.35c1.38.96 3.31.59 4.31-.84c.31-.45.49-.94.56-1.44v-1.01l5.58-.04l.07-.11c.53-.92 1.68-1.24 2.58-.72a1.9 1.9 0 0 1 .68 2.6c-.53.91-1.69 1.23-2.59.71c-.41-.23-.7-.6-.83-1.02l-4.07.02a5 5 0 0 1-.78 1.94m7.28-7.14c2.53.31 4.33 2.58 4.02 5.07c-.31 2.5-2.61 4.27-5.14 3.96a4.63 4.63 0 0 1-3.43-2.21l1.24-.72a3.22 3.22 0 0 0 2.32 1.45c1.75.21 3.3-.98 3.51-2.65s-1.03-3.2-2.76-3.41c-.54-.06-1.06.01-1.53.18l-.85.44l-2.58-4.77h-.22a1.906 1.906 0 0 1-1.85-1.95c.03-1.04.93-1.85 1.98-1.81c1.05.06 1.88.91 1.85 1.95c-.02.44-.19.84-.46 1.15l1.9 3.51c.62-.2 1.3-.27 2-.19M8.25 9.14c-1-2.35.06-5.04 2.37-6.02c2.32-.98 5 .13 6 2.48c.59 1.37.47 2.87-.2 4.07l-1.24-.72c.42-.81.49-1.8.09-2.73c-.68-1.6-2.49-2.37-4.04-1.72c-1.56.66-2.26 2.5-1.58 4.1c.28.66.75 1.17 1.32 1.51l.39.21l-3.07 4.99c.03.05.07.11.1.19c.49.91.15 2.06-.77 2.55c-.91.49-2.06.13-2.56-.81c-.49-.93-.15-2.08.77-2.57c.39-.21.82-.26 1.23-.17l2.31-3.77c-.47-.43-.87-.97-1.12-1.59"></svg:path>`,
})
export class MdiWebhookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWebpackIcon],svg[mdi-webpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.45 17.39l-8.09 4.58V18.4l5.04-2.77zm.55-.5V7.31L18.04 9v6.18zm-17.45.5l8.09 4.57V18.4L6.6 15.63zm-.55-.5V7.31L5.96 9v6.18zm.35-10.2L11.64 2v3.45L6.33 8.37l-.05.02zm17.3 0L12.36 2v3.45l5.31 2.93l.04.02zm-9.01 10.9l-4.97-2.74V9.44l4.97 2.87zm.72 0l4.97-2.73V9.44l-4.97 2.87zM7 8.81l5-2.75l5 2.75l-5 2.88z"></svg:path>`,
})
export class MdiWebpackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
