import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPodiumIcon],svg[mdi-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7.09l2.45 1.49l-.65-2.81L16 3.89l-2.89-.25L12 1l-1.13 2.64L8 3.89l2.18 1.88l-.68 2.81zm-8 6l2.45 1.49l-.65-2.81L8 9.89l-2.89-.25L4 7L2.87 9.64L0 9.89l2.18 1.88l-.68 2.81zm16-3l2.45 1.49l-.65-2.81L24 6.89l-2.89-.25L20 4l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81zM15 23H9V10h6zm-8 0H1v-6h6zm16 0h-6V13h6z"></svg:path>`,
})
export class MdiPodiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPodiumBronzeIcon],svg[mdi-podium-bronze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 13.09l2.45 1.49l-.65-2.81L8 9.89l-2.89-.25L4 7L2.87 9.64L0 9.89l2.18 1.88l-.68 2.81zM7 23H1v-6h6zm2-13v13h6V10zm4 11h-2v-9h2zm4-8v10h6V13zm4 8h-2v-6h2z"></svg:path>`,
})
export class MdiPodiumBronzeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPodiumGoldIcon],svg[mdi-podium-gold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7.09l2.45 1.49l-.65-2.81L16 3.89l-2.89-.25L12 1l-1.13 2.64L8 3.89l2.18 1.88l-.68 2.81zM15 23H9V10h6zM1 17v6h6v-6zm4 4H3v-2h2zm12-8v10h6V13zm4 8h-2v-6h2z"></svg:path>`,
})
export class MdiPodiumGoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPodiumSilverIcon],svg[mdi-podium-silver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 10.09l2.45 1.49l-.65-2.81L24 6.89l-2.89-.25L20 4l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81zM23 23h-6V13h6zM1 17v6h6v-6zm4 4H3v-2h2zm4-11v13h6V10zm4 11h-2v-9h2z"></svg:path>`,
})
export class MdiPodiumSilverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPointOfSaleIcon],svg[mdi-point-of-sale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5c-.6 0-1 .5-1 1.1V16c0 .6.4 1 1 1.1c.6 0 1-.5 1-1.1V6.1c0-.6-.4-1.1-1-1.1m-3.6-3H4.6C3.7 2 3 2.7 3 3.6v13.8c0 .9.7 1.6 1.6 1.6H6v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2h2.4c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6M5 8h3v2H5zm7 3v2H9v-2zm-3-1V8h3v2zm3 4v2H9v-2zm-7-3h3v2H5zm0 5v-2h3v2zm3 5H7v-2h1zm5 0h-3v-2h3zm3-5h-3v-2h3zm0-3h-3v-2h3zm0-3h-3V8h3zm0-4H5V4h11z"></svg:path>`,
})
export class MdiPointOfSaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPokeballIcon],svg[mdi-pokeball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2c-4.08 0-7.45 3.05-7.94 7h4.07c.44-1.73 2.01-3 3.87-3s3.43 1.27 3.87 3h4.07c-.49-3.95-3.86-7-7.94-7m0 16c4.08 0 7.45-3.05 7.94-7h-4.07c-.44 1.73-2.01 3-3.87 3s-3.43-1.27-3.87-3H4.06c.49 3.95 3.86 7 7.94 7m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiPokeballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPokemonGoIcon],svg[mdi-pokemon-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 1.4-.41 2.71-1.12 3.8L12 22.21L6.12 12.8A6.95 6.95 0 0 1 5 9a7 7 0 0 1 7-7m0 1.5A5.5 5.5 0 0 0 6.59 8h2.58c.41-1.17 1.52-2 2.83-2s2.42.83 2.83 2h2.58A5.5 5.5 0 0 0 12 3.5m0 8.5a2.99 2.99 0 0 1-2.83-2H6.59c.13.69.38 1.34.75 1.91l.04.09A5.51 5.51 0 0 0 12 14.5c1.94 0 3.64-1 4.62-2.5l.04-.09c.37-.57.62-1.22.75-1.91h-2.58A2.99 2.99 0 0 1 12 12m0-4.5A1.5 1.5 0 0 0 10.5 9a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 13.5 9A1.5 1.5 0 0 0 12 7.5"></svg:path>`,
})
export class MdiPokemonGoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPokerChipIcon],svg[mdi-poker-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 6.08-4.92 11-11 11S1 18.08 1 12S5.92 1 12 1s11 4.92 11 11M13 4.06c2.13.27 4.07 1.39 5.37 3.1l1.74-1A10 10 0 0 0 13 2zm-9.11 2.1l1.74 1A8.02 8.02 0 0 1 11 4.06V2a10 10 0 0 0-7.11 4.16m-1 9.94l1.73-1a8.03 8.03 0 0 1 0-6.2l-1.73-1a9.86 9.86 0 0 0 0 8.2M11 19.94a8.02 8.02 0 0 1-5.37-3.1l-1.74 1A10 10 0 0 0 11 22zm9.11-2.1l-1.74-1a8.02 8.02 0 0 1-5.37 3.1v2c2.85-.29 5.44-1.78 7.11-4.1m1-1.74c1.19-2.6 1.19-5.6 0-8.2l-1.73 1a8.03 8.03 0 0 1 0 6.2zM15 12l-3-5l-3 5l3 5z"></svg:path>`,
})
export class MdiPokerChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPolaroidIcon],svg[mdi-polaroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v12h12V5z"></svg:path>`,
})
export class MdiPolaroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPoliceBadgeIcon],svg[mdi-police-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 4l-2-2c-1.15.64-2.6 1-4 1s-2.86-.37-4-1c-1.14.63-2.6 1-4 1s-2.85-.36-4-1L2 4s2 2 2 4s-2 6-2 8c0 4 10 6 10 6s10-2 10-6c0-2-2-6-2-8s2-4 2-4m-6.95 12.45l-3.08-1.86l-3.07 1.86l.82-3.5L7 10.61l3.58-.31L11.97 7l1.4 3.29l3.58.31l-2.72 2.34z"></svg:path>`,
})
export class MdiPoliceBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPoliceBadgeOutlineIcon],svg[mdi-police-badge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.21c1.24.51 2.65.79 4 .79c1.05 0 2.1-.16 3.08-.46C18.5 5.5 18 6.71 18 8c0 1.32.54 2.93 1.1 4.63c.4 1.2.9 2.7.9 3.37c0 1.03-3.53 3-8 3.96C7.54 19 4 17.03 4 16c0-.67.5-2.17.9-3.37C5.46 10.93 6 9.32 6 8c0-1.29-.5-2.5-1.08-3.46C5.9 4.84 6.96 5 8 5c1.35 0 2.76-.28 4-.79M20 2c-1.15.64-2.6 1-4 1s-2.86-.37-4-1c-1.14.63-2.6 1-4 1s-2.85-.36-4-1L2 4s2 2 2 4s-2 6-2 8c0 4 10 6 10 6s10-2 10-6c0-2-2-6-2-8s2-4 2-4zm-4.95 14.45l-3.08-1.86l-3.07 1.86l.82-3.5L7 10.61l3.58-.31L11.97 7l1.4 3.29l3.58.31l-2.72 2.34z"></svg:path>`,
})
export class MdiPoliceBadgeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPoliceStationIcon],svg[mdi-police-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10s4-.8 4-2.4c0-.8-.8-2.4-.8-3.2s.8-1.6.8-1.6l-.8-.8c-.46.26-1.04.4-1.6.4S12.46 2.25 12 2c-.46.25-1.04.4-1.6.4S9.26 2.26 8.8 2l-.8.8s.8.8.8 1.6S8 6.8 8 7.6c0 1.6 4 2.4 4 2.4m-.57-4.68L12 4l.55 1.32l1.45.12l-1.11.94l.33 1.4L12 7.04l-1.24.74l.33-1.4L10 5.44zM21 6h-4.35c.19.58.35 1.12.35 1.6c0 2.25-3.68 3.16-4.8 3.4h-.4C10.68 10.76 7 9.85 7 7.6c0-.48.16-1.02.35-1.6H3c-.55 0-1 .45-1 1v15h8v-5h4v5h8V7c0-.55-.45-1-1-1M8 20H4v-3h4zm0-5H4v-3h4zm6 0h-4v-3h4zm6 5h-4v-3h4zm0-5h-4v-3h4z"></svg:path>`,
})
export class MdiPoliceStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPollIcon],svg[mdi-poll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V8h4v14zm7 0V2h4v20zm7 0v-8h4v8z"></svg:path>`,
})
export class MdiPollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPoloIcon],svg[mdi-polo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 5 0M11 17V3H8v14H2l4 4h7v-4zm5 0h-2v4h2z"></svg:path>`,
})
export class MdiPoloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPolymerIcon],svg[mdi-polymer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-4L7.1 16.63L4.5 12L9 4H5L.5 12L5 20h4l7.89-12.63L19.5 12L15 20h4l4.5-8z"></svg:path>`,
})
export class MdiPolymerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPoolIcon],svg[mdi-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15c1.67-.75 3.33-1.5 5-1.83V5a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H10a1 1 0 0 0-1 1v1h5V5a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H17a1 1 0 0 0-1 1v9.94c2-.32 4-1.94 6-1.94v2c-2.22 0-4.44 2-6.67 2c-2.22 0-4.44-2-6.66-2c-2.23 0-4.45 1-6.67 2zm12-7H9v2h5zm0 4H9v1c1.67.16 3.33 1.31 5 1.79zM2 19c2.22-1 4.44-2 6.67-2c2.22 0 4.44 2 6.66 2c2.23 0 4.45-2 6.67-2v2c-2.22 0-4.44 2-6.67 2c-2.22 0-4.44-2-6.66-2c-2.23 0-4.45 1-6.67 2z"></svg:path>`,
})
export class MdiPoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPoolThermometerIcon],svg[mdi-pool-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6c-1.1 0-2 .9-2 2v6.8c-.6.6-1 1.4-1 2.2c0 1.7 1.3 3 3 3s3-1.3 3-3c0-.9-.4-1.7-1-2.2V8c0-1.1-.9-2-2-2m0 1c.5 0 1 .4 1 1v1h-2V8c0-.6.5-1 1-1m-4 13.3c-.9.4-1.8.7-2.7.7c-2.2 0-4.4-2-6.7-2c-1.2 0-2.4.3-3.7.7v-2c1.3-.4 2.5-.7 3.8-.7c2.2 0 4.4 2 6.7 2c.9 0 1.8-.3 2.7-.7v2M12.3 17c.9 0 1.8-.3 2.7-.7v-2c-.7.3-1.3.5-2 .7V5c0-.6.4-1 1-1h2.8c-.4-1.2-1.5-2-2.8-2c-1.7 0-3 1.3-3 3v1H6V5c0-.6.4-1 1-1h2.8C9.4 2.8 8.3 2 7 2C5.3 2 4 3.3 4 5v8.2c-.7.1-1.3.3-2 .6v2c1.2-.5 2.4-.8 3.7-.8c2.2 0 4.4 2 6.6 2M6 8h5v2H6zm0 4h5v2.8c-1.7-.5-3.3-1.6-5-1.8z"></svg:path>`,
})
export class MdiPoolThermometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPopcornIcon],svg[mdi-popcorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22H4.75s-.75 0-.94-1.35L2.04 3.81L2 3.5C2 2.67 2.9 2 4 2s2 .67 2 1.5C6 2.67 6.9 2 8 2s2 .67 2 1.5c0-.83.9-1.5 2-1.5c1.09 0 2 .66 2 1.5c0-.83.9-1.5 2-1.5s2 .67 2 1.5c0-.83.9-1.5 2-1.5s2 .67 2 1.5l-.04.31l-1.77 16.84C20 22 19.25 22 19.25 22zM17.85 4.93C17.55 4.39 16.84 4 16 4c-.81 0-1.64.36-2 .87L13.78 20h2.88zM10 4.87C9.64 4.36 8.81 4 8 4c-.84 0-1.55.39-1.85.93L7.34 20h2.88z"></svg:path>`,
})
export class MdiPopcornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPostIcon],svg[mdi-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm15 15H6v-1h12zm0-2H6v-1h12zm0-4H6V6h12z"></svg:path>`,
})
export class MdiPostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPostLampIcon],svg[mdi-post-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 3l-1-2h-2l-1 2l-5 3h2l1 8l2 2l.5 1H9v6h6v-6h-1.5l.5-1l2-2l1-8h2zm.16 10H9.84L9 6h6z"></svg:path>`,
})
export class MdiPostLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPostOutlineIcon],svg[mdi-post-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm2-2H3v18h18zm-4 14H7v-1h10zm0-2H7v-1h10zm0-3H7V7h10z"></svg:path>`,
})
export class MdiPostOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPostageStampIcon],svg[mdi-postage-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v3.5c1.1 0 2 1.12 2 2.5s-.9 2.5-2 2.5v3c1.1 0 2 1.12 2 2.5s-.9 2.5-2 2.5V22h3.5c0-1.1 1.12-2 2.5-2s2.5.9 2.5 2h3c0-1.1 1.12-2 2.5-2s2.5.9 2.5 2H22v-3.5c-1.1 0-2-1.12-2-2.5s.9-2.5 2-2.5v-3c-1.1 0-2-1.12-2-2.5s.9-2.5 2-2.5V2h-3.5c0 1.1-1.12 2-2.5 2s-2.5-.9-2.5-2h-3c0 1.1-1.12 2-2.5 2s-2.5-.9-2.5-2zm4 4h12v12H6zm3 1a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 3l-3 3l-2-1l-5 5h10z"></svg:path>`,
})
export class MdiPostageStampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPotIcon],svg[mdi-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-7H3v-2h18v2h-2z"></svg:path>`,
})
export class MdiPotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPotMixIcon],svg[mdi-pot-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.6 9L18 3.1l1.7 1L16.9 9zm-.6 1H3v2h2v7c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-7h2v-2z"></svg:path>`,
})
export class MdiPotMixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPotMixOutlineIcon],svg[mdi-pot-mix-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.6 9L18 3.1l1.7 1L16.9 9zm1.7 1H21v2h-2v7c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-7H3v-2zm.7 2H7v7h10z"></svg:path>`,
})
export class MdiPotMixOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPotOutlineIcon],svg[mdi-pot-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10v2h2v7c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-7h2v-2zm4 2h10v7H7z"></svg:path>`,
})
export class MdiPotOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPotSteamIcon],svg[mdi-pot-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2v-7H3v-2h18v2h-2M8 1.5a3.35 3.35 0 0 0 0 6.7h1.53c.39 0 .76.1 1.08.3h2.02c-.58-1.05-1.77-1.75-3.1-1.75H8c-1 0-1.85-.98-1.85-2S7 3 8 3m4.85-1c0 1-.85 1.85-1.85 1.85v1.5c1.92 0 3.5 1.35 3.89 3.15h1.53a5.54 5.54 0 0 0-3.07-4.12c.62-.61 1-1.45 1-2.38Z"></svg:path>`,
})
export class MdiPotSteamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPotSteamOutlineIcon],svg[mdi-pot-steam-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.5a3.35 3.35 0 0 0 0 6.7h1.53c.39 0 .76.1 1.08.3h2.02c-.58-1.05-1.77-1.75-3.1-1.75H8c-1 0-1.85-.98-1.85-2S7 3 8 3zm4.85.5c0 1-.85 1.85-1.85 1.85v1.5c1.92 0 3.5 1.35 3.89 3.15h1.53a5.54 5.54 0 0 0-3.07-4.12c.62-.61 1-1.45 1-2.38zM3 10v2h2v7a2 2 0 0 0 2 2h10c1.11 0 2-.89 2-2v-7h2v-2zm4 2h10v7H7z"></svg:path>`,
})
export class MdiPotSteamOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPoundIcon],svg[mdi-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.41 21l.71-4h-4l.35-2h4l1.06-6h-4l.35-2h4l.71-4h2l-.71 4h6l.71-4h2l-.71 4h4l-.35 2h-4l-1.06 6h4l-.35 2h-4l-.71 4h-2l.71-4h-6l-.71 4zM9.53 9l-1.06 6h6l1.06-6z"></svg:path>`,
})
export class MdiPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPoundBoxIcon],svg[mdi-pound-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 13h2l.35-2h4L13 18h2l.35-2h2l.36-2h-2l.7-4h2l.35-2h-2l.36-2h-2l-.36 2h-4l.36-2h-2l-.36 2h-2l-.35 2h2l-.7 4h-2l-.36 2h2zm3.41-8h4l-.7 4h-4z"></svg:path>`,
})
export class MdiPoundBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPoundBoxOutlineIcon],svg[mdi-pound-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M7 9h2.31l.32-3h2l-.32 3h2l.32-3h2l-.32 3H17v2h-1.9l-.2 2H17v2h-2.31l-.32 3h-2l.32-3h-2l-.32 3h-2l.32-3H7v-2h1.9l.2-2H7zm4.1 2l-.2 2h2l.2-2Z"></svg:path>`,
})
export class MdiPoundBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerIcon],svg[mdi-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.56 5.44l-1.45 1.45A5.97 5.97 0 0 1 18 12a6 6 0 0 1-6 6a6 6 0 0 1-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.44A7.96 7.96 0 0 0 4 12a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-2.72-1.36-5.12-3.44-6.56M13 3h-2v10h2"></svg:path>`,
})
export class MdiPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerCycleIcon],svg[mdi-power-cycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m0 16a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m1-2h-2V7h2z"></svg:path>`,
})
export class MdiPowerCycleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerOffIcon],svg[mdi-power-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m0 16a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7"></svg:path>`,
})
export class MdiPowerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerOnIcon],svg[mdi-power-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h2v18h-2z"></svg:path>`,
})
export class MdiPowerOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerPlugIcon],svg[mdi-power-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7V3h-2v4h-4V3H8v4C7 7 6 8 6 9v5.5L9.5 18v3h5v-3l3.5-3.5V9c0-1-1-2-2-2"></svg:path>`,
})
export class MdiPowerPlugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerPlugBatteryIcon],svg[mdi-power-plug-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c0-.65-.43-1.3-1-1.68c-.3-.2-.65-.32-1-.32V4H8v4H4V4H2v4c-1 0-2 1-2 2v5.5L3.5 19v3h5v-3l3.5-3.5zm.33-6c-.11 0-.22 0-.33.04v2.55c.3.18.56.41.79.62C13.44 7.87 14 8.85 14 10v6.33l-3 3v1.34c0 .73.6 1.33 1.33 1.33h9.34c.33 0 .69-.14.94-.39s.39-.61.39-.94V5.33C23 4.6 22.4 4 21.67 4H20V2h-6v2z"></svg:path>`,
})
export class MdiPowerPlugBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerPlugBatteryOutlineIcon],svg[mdi-power-plug-battery-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8.32c.57.38 1 1.03 1 1.68v5.5L8.5 19v3h-5v-3L0 15.5V10c0-1 1-2 2-2V4h2v4h4V4h2v4c.35 0 .7.12 1 .32m-3.91 9.27L10 14.67v-4.58c0-.03-.05-.09-.08-.09H2.09c-.03 0-.09.06-.09.09v4.58L5.33 18h1.34zM12 4.04c.11-.04.22-.04.33-.04H14V2h6v2h1.67C22.4 4 23 4.6 23 5.33v15.34c0 .33-.14.69-.39.94s-.61.39-.94.39h-9.34c-.73 0-1.33-.6-1.33-1.33v-1.34l2-2V20h8V6h-9z"></svg:path>`,
})
export class MdiPowerPlugBatteryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerPlugOffIcon],svg[mdi-power-plug-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-5.53-5.53l-.81.8v3h-5v-3L6 14.5V9c0-.3.1-.59.25-.86L1.11 3l1.28-1.27l19.72 19.73zM18 14.5V9c0-1-1-2-2-2V3h-2v4h-3.8l7.65 7.65zM10 3H8v1.8l2 2z"></svg:path>`,
})
export class MdiPowerPlugOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerPlugOffOutlineIcon],svg[mdi-power-plug-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l5.14 5.14C6.1 8.41 6 8.7 6 9v5.5L9.5 18v3h5v-3l.81-.8l5.53 5.53zm-9.02-4.87l-.42.41h-1.34l-.41-.41L8 13.67V9.89l5.89 5.89zM12.2 9l-2-2H14V3h2v4c1 0 2 1 2 2v5.5l-.15.15L16 12.8V9.09c0-.03-.05-.09-.08-.09zM10 6.8l-2-2V3h2z"></svg:path>`,
})
export class MdiPowerPlugOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerPlugOutlineIcon],svg[mdi-power-plug-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7V3h-2v4h-4V3H8v4C7 7 6 8 6 9v5.5L9.5 18v3h5v-3l3.5-3.5V9c0-1-1-2-2-2m0 6.67l-2.91 2.92l-.42.41h-1.34l-.41-.41L8 13.67V9.09c0-.03.06-.09.09-.09h7.83c.03 0 .08.06.08.09z"></svg:path>`,
})
export class MdiPowerPlugOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSettingsIcon],svg[mdi-power-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 24h2v-2h-2m1.56-17.56l-1.45 1.45A5.97 5.97 0 0 1 18 11a6 6 0 0 1-6 6a6 6 0 0 1-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44A7.96 7.96 0 0 0 4 11a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-2.72-1.36-5.12-3.44-6.56M13 2h-2v10h2m-2 12h2v-2h-2m-4 2h2v-2H7z"></svg:path>`,
})
export class MdiPowerSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSleepIcon],svg[mdi-power-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.73 18c-3.33 3.69-9.02 4-12.73.64c-3.67-3.33-3.96-9.02-.63-12.71A9.05 9.05 0 0 1 11.27 3c-3.31 3.7-3 9.39.73 12.71c1.63 1.48 3.78 2.29 6 2.29z"></svg:path>`,
})
export class MdiPowerSleepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketIcon],svg[mdi-power-socket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15h2v-4h-2m-8 4h2v-4H7m4 2h2V9h-2M8.83 7h6.37l3.8 3.8V17H5v-6.2M8 5l-5 5v9h18v-9l-5-5z"></svg:path>`,
})
export class MdiPowerSocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketAuIcon],svg[mdi-power-socket-au-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.22 2A2.22 2.22 0 0 0 2 4.22v15.56C2 21 3 22 4.22 22h15.56A2.22 2.22 0 0 0 22 19.78V4.22C22 3 21 2 19.78 2zM12 4a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8M8.27 7.54l-2 3.46L8 12l2-3.46zm7.46 0l-1.73 1L16 12l1.73-1zM11 14v4h2v-4z"></svg:path>`,
})
export class MdiPowerSocketAuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketChIcon],svg[mdi-power-socket-ch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.78 2H4.22C3 2 2 3 2 4.22v15.56C2 21 3 22 4.22 22h15.56C21 22 22 21 22 19.78V4.22C22 3 21 2 19.78 2M20 13l-3.45 3.45c-.36.36-.8.55-1.25.55H8.7c-.45 0-.89-.19-1.25-.55L4 13c-.5-.5-.5-1.5 0-2l3.45-3.45c.36-.36.8-.55 1.25-.55h6.6c.45 0 .89.19 1.25.55L20 11c.5.5.5 1.5 0 2m-9.5 1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m5-2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m-10 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5"></svg:path>`,
})
export class MdiPowerSocketChIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketDeIcon],svg[mdi-power-socket-de-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.22 2A2.22 2.22 0 0 0 2 4.22v15.56C2 21 3 22 4.22 22h15.56A2.22 2.22 0 0 0 22 19.78V4.22C22 3 21 2 19.78 2zM11 4.07V6h2V4.07A8 8 0 0 1 20 12a8 8 0 0 1-7 7.93V18h-2v1.93A8 8 0 0 1 4 12a8 8 0 0 1 7-7.93M7.5 10.5A1.5 1.5 0 0 0 6 12c0 .83.66 1.5 1.5 1.5A1.5 1.5 0 0 0 9 12a1.5 1.5 0 0 0-1.5-1.5m9 0A1.5 1.5 0 0 0 15 12a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 18 12a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiPowerSocketDeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketEuIcon],svg[mdi-power-socket-eu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 10.5A1.5 1.5 0 0 1 9 12a1.5 1.5 0 0 1-1.5 1.5c-.84 0-1.5-.67-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m9 0A1.5 1.5 0 0 1 18 12a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 15 12a1.5 1.5 0 0 1 1.5-1.5M4.22 2h15.56C21 2 22 3 22 4.22v15.56A2.22 2.22 0 0 1 19.78 22H4.22C3 22 2 21 2 19.78V4.22A2.22 2.22 0 0 1 4.22 2M12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiPowerSocketEuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketFrIcon],svg[mdi-power-socket-fr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.22 2A2.22 2.22 0 0 0 2 4.22v15.56C2 21 3 22 4.22 22h15.56A2.22 2.22 0 0 0 22 19.78V4.22C22 3 21 2 19.78 2zM12 4a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 0 12 9a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 12 6m-4.5 4.5A1.5 1.5 0 0 0 6 12c0 .83.66 1.5 1.5 1.5A1.5 1.5 0 0 0 9 12a1.5 1.5 0 0 0-1.5-1.5m9 0A1.5 1.5 0 0 0 15 12a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 18 12a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiPowerSocketFrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketItIcon],svg[mdi-power-socket-it-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 16.5c0-.82.67-1.5 1.5-1.5s1.5.68 1.5 1.5c0 .84-.67 1.5-1.5 1.5s-1.5-.66-1.5-1.5m0-9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S12.83 9 12 9s-1.5-.67-1.5-1.5M4.22 2h15.56C21 2 22 3 22 4.22v15.56C22 21 21 22 19.78 22H4.22C3 22 2 21 2 19.78V4.22C2 3 3 2 4.22 2M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m-1.5 8c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5"></svg:path>`,
})
export class MdiPowerSocketItIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketJpIcon],svg[mdi-power-socket-jp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.5v5H8v-5M19.78 2C21 2 22 3 22 4.22v15.56C22 21 21 22 19.78 22H4.22C3 22 2 21 2 19.78V4.22C2 3 3 2 4.22 2M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m4 5.5v5h-2v-5Z"></svg:path>`,
})
export class MdiPowerSocketJpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketUkIcon],svg[mdi-power-socket-uk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 2h16v16H4zm7 3v4h2V7zm-5 7.75V17h3.5v-2.25zm8.5 0V17H18v-2.25z"></svg:path>`,
})
export class MdiPowerSocketUkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSocketUsIcon],svg[mdi-power-socket-us-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7h2v5H8zM4.22 2h15.56C21 2 22 3 22 4.22v15.56A2.22 2.22 0 0 1 19.78 22H4.22C3 22 2 21 2 19.78V4.22A2.22 2.22 0 0 1 4.22 2M12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m2 3.5h2v4h-2zm-3.5 8.75a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5V17h-3z"></svg:path>`,
})
export class MdiPowerSocketUsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowerStandbyIcon],svg[mdi-power-standby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3h-2v10h2zm4.83 2.17l-1.42 1.42A6.94 6.94 0 0 1 19 12a7 7 0 0 1-7 7A6.995 6.995 0 0 1 7.58 6.58L6.17 5.17a9 9 0 0 0-1.03 12.69c3.22 3.78 8.9 4.24 12.69 1.02A9 9 0 0 0 21 12c0-2.63-1.16-5.13-3.17-6.83"></svg:path>`,
})
export class MdiPowerStandbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPowershellIcon],svg[mdi-powershell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.83 4c.49 0 .8.4.67.89l-3.16 14.22c-.11.49-.59.89-1.08.89H2.17c-.49 0-.8-.4-.67-.89L4.66 4.89C4.77 4.4 5.25 4 5.74 4zm-6 12h-4c-.46 0-.83.38-.83.84c0 .47.37.85.83.85h4c.47 0 .85-.38.85-.85c0-.46-.38-.84-.85-.84m-10.05.28a.87.87 0 0 0-.21 1.22c.28.42.84.5 1.24.23c7.35-5.17 7.4-5.23 7.45-5.26c.18-.16.27-.38.28-.6c.01-.2-.04-.37-.16-.56L9.46 6.03A.867.867 0 0 0 8.21 6c-.36.32-.38.88-.05 1.24l4.15 4.44z"></svg:path>`,
})
export class MdiPowershellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrescriptionIcon],svg[mdi-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v10h2v-4h2l5.41 5.41L9.83 19l1.41 1.41l3.59-3.58l3.58 3.58L19.82 19l-3.58-3.59l3.58-3.58l-1.41-1.42L14.83 14l-4-4H11a3 3 0 0 0 3-3a3 3 0 0 0-3-3zm2 2h5a1 1 0 0 1 1 1a1 1 0 0 1-1 1H6z"></svg:path>`,
})
export class MdiPrescriptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPresentationIcon],svg[mdi-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h8a2 2 0 0 1 2-2a2 2 0 0 1 2 2h8v2h-1v11h-5.75L17 22h-2l-1.75-6h-2.5L9 22H7l1.75-6H3V5H2zm3 2v9h14V5z"></svg:path>`,
})
export class MdiPresentationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPresentationPlayIcon],svg[mdi-presentation-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h8a2 2 0 0 1 2-2a2 2 0 0 1 2 2h8v2h-1v11h-5.75L17 22h-2l-1.75-6h-2.5L9 22H7l1.75-6H3V5H2zm3 2v9h14V5zm6.85 6.85a.5.5 0 0 1-.35.15a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5c.14 0 .26.06.35.15l1.4 1.39c.32.32.64.64.64.96s-.32.64-.64.96z"></svg:path>`,
})
export class MdiPresentationPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPretzelIcon],svg[mdi-pretzel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.15 15.84A8.97 8.97 0 0 1 3 10v-.03C3 7.22 5.25 5 8 5c1.64 0 3.09.79 4 2c.91-1.21 2.37-2 4-2c2.76 0 5 2.24 5 5c0 2.23-.81 4.27-2.15 5.84l1.36 1.36l-1.42 1.41l-1.4-1.4A9.04 9.04 0 0 1 12 19c-2 0-3.89-.67-5.39-1.79l-1.4 1.4l-1.42-1.41zm10.81-.07L12 11.82l-3.96 3.95C9.17 16.55 10.53 17 12 17s2.83-.45 3.96-1.23M11 10c0-1.66-1.35-3-3-3c-1.66 0-3 1.34-3 3c0 1.68.59 3.21 1.57 4.42zm6.43 4.42A7 7 0 0 0 19 10c0-1.67-1.35-3-3-3s-3 1.34-3 3z"></svg:path>`,
})
export class MdiPretzelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPreziIcon],svg[mdi-prezi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7.25 11.991c.025-1.9 1.343-4.71 4.78-4.71c2.597 0 4.722 2.108 4.722 4.71c0 2.603-2.125 4.773-4.721 4.773s-4.815-2.17-4.78-4.773zm4.78-4.2a4.194 4.194 0 0 0-4.188 4.2c0 2.32 1.875 4.161 4.189 4.161s4.13-1.841 4.13-4.16c0-2.32-1.816-4.2-4.13-4.2zm-5.944 4.2c0-3.509 2.838-5.908 5.944-5.908c3.107 0 5.866 2.616 5.866 5.908c0 3.292-2.735 5.88-5.866 5.88c-3.13 0-5.944-2.514-5.944-5.88zm5.944-5.374c-2.927 0-5.33 2.296-5.33 5.374c0 2.965 2.27 5.315 5.33 5.315c2.928 0 5.302-2.227 5.302-5.315c0-3.068-2.618-5.374-5.302-5.374zm-7.095 5.377c0-4.196 3.326-7.084 7.097-7.084c3.772 0 7.056 3.113 7.056 7.084c0 3.972-3.28 7.052-7.056 7.052c-3.776 0-7.097-2.992-7.097-7.052zm7.097-6.498c-3.531 0-6.545 2.785-6.545 6.498c0 3.577 2.955 6.487 6.464 6.487c3.532 0 6.54-2.762 6.54-6.487c0-3.7-3.042-6.498-6.459-6.498zm-.37 3.074h.749v6.823h-.748V8.57zm-1.56.536c.3-.238.748-.355.748-.355v6.442a2.185 2.185 0 0 1-.743-.346l-.005-5.74zm3.879-.014l-.005 5.74s-.319.246-.743.347V8.737s.448.116.748.355zm-4.703.795v4.15s-.688-.673-.688-2.064c0-1.39.688-2.086.688-2.086zm5.47-.029s.688.695.688 2.086s-.688 2.065-.688 2.065V9.858zm.786-4.864l-.716-.335l.786-2.003l.919.443l-.989 1.895zm-1.54-.584l-.77-.177l.35-2.123l.991.24l-.57 2.06zM12.4 4.163l-.79-.017l-.091-2.15l1.019.034l-.138 2.133zm-1.651.09l-.776.15l-.54-2.083l1.004-.181l.312 2.114zm-1.592.433l-.728.308l-.963-1.924l.944-.387l.747 2.003zm-1.464.754l-.647.454L5.7 4.213l.842-.575l1.15 1.802zM6.441 6.46l-.541.577l-1.659-1.37l.707-.736L6.44 6.46zM5.403 7.748l-.408.677l-1.909-.993l.537-.867l1.78 1.183zM4.672 9.19l-.26.746l-2.073-.58l.347-.959l1.986.793zm-.426 1.59l-.098.785L2 11.431l.14-1.01l2.106.36zm-.085 1.613l.064.788l-2.13.307l-.07-1.017l2.136-.078zm.257 1.633l.227.758l-2.018.747l-.282-.98l2.073-.525zm.59 1.54l.381.693l-1.817 1.153l-.48-.9l1.917-.946zm.899 1.38l.517.6l-1.537 1.505l-.657-.78l1.677-1.324zm1.141 1.143l.629.48l-1.197 1.788l-.803-.628l1.371-1.64zm1.386.902l.715.337l-.795 2l-.917-.446l.997-1.891zm1.552.594l.77.18l-.356 2.121l-.99-.243l.576-2.058zm1.627.253l.791.015l.095 2.15l-1.02-.032l.135-2.133zm1.612-.087l.777-.147l.533 2.084l-1.004.178l-.306-2.115zm1.597-.429l.73-.307l.957 1.927l-.945.384l-.742-2.004zm1.469-.752l.648-.452l1.34 1.684l-.844.573l-1.144-1.805zm1.276-1.04l.54-.578l1.662 1.368l-.705.736l-1.497-1.526zm1.014-1.256l.41-.676l1.906.998l-.54.866l-1.776-1.189zm.75-1.474l.26-.747l2.072.577l-.346.959l-1.986-.79zm.424-1.604l.097-.785l2.148.129l-.137 1.01l-2.108-.354zm.079-1.652l-.07-.787l2.127-.325l.078 1.017l-2.135.095zm-.268-1.627l-.233-.756l2.012-.762l.289.978l-2.068.54zm-.602-1.534l-.385-.69l1.809-1.165l.486.896l-1.91.96zm-.887-1.348l-.518-.597l1.532-1.51l.66.777l-1.674 1.33zm-1.175-1.164l-.632-.475L17.452 3.6l.808.623l-1.358 1.65z" fill="currentColor"></svg:path>`,
})
export class MdiPreziIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterIcon],svg[mdi-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6v4h12m1 5a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m-3 7H8v-5h8m3-6H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiPrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dIcon],svg[mdi-printer-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1m0-4a3 3 0 0 1 3 3v6h-4V7H6v4H2V5a3 3 0 0 1 3-3zm-1 16.25c0 .38-.21.71-.53.88l-4.9 2.69q-.255.18-.57.18c-.21 0-.41-.06-.57-.18l-4.9-2.69a.99.99 0 0 1-.53-.88V13c0-.38.21-.71.53-.88l4.9-2.44c.16-.12.36-.18.57-.18q.315 0 .57.18l4.9 2.44c.32.17.53.5.53.88zm-6-6.6L9.04 13L12 14.6l2.96-1.6zm-4 6.01l3 1.63v-2.96l-3-1.62zm8 0v-2.95l-3 1.62v2.96z"></svg:path>`,
})
export class MdiPrinter3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dNozzleIcon],svg[mdi-printer-3d-nozzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v6h2v5h-2.5L13 17h-2l-3.5-4H5V8h2zm3 20H2v-2h8a1 1 0 0 0 1-1v-1h2v1a3 3 0 0 1-3 3"></svg:path>`,
})
export class MdiPrinter3dNozzleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dNozzleAlertIcon],svg[mdi-printer-3d-nozzle-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v6h2v5h-2.5L13 17h-2l-3.5-4H5V8h2zm3 20H2v-2h8c.6 0 1-.5 1-1v-1h2v1c0 1.7-1.3 3-3 3m11-9V7h2v6zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiPrinter3dNozzleAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dNozzleAlertOutlineIcon],svg[mdi-printer-3d-nozzle-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v5h2v6h-2.5L13 17h-2l-3.5-4H5V7h2zm3 20H2v-2h8c.6 0 1-.5 1-1v-1h2v1c0 1.7-1.3 3-3 3M7 9v2h1.5l3.5 4l3.5-4H17V9h-2V4H9v5zm14 4V7h2v6zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiPrinter3dNozzleAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dNozzleHeatIcon],svg[mdi-printer-3d-nozzle-heat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h10v5h2v6h-2.5L10 17H8l-3.5-4H2V7h2zm19 12.5l-1.4 2.2l1.4 2.2l-2 3.1l-1.8-.9l1.5-2.2l-1.5-2.2l2-3.1zm-4.3 0l-1.5 2.2l1.5 2.2l-2 3.1l-1.8-.9l1.4-2.2l-1.4-2.2l2-3.1z"></svg:path>`,
})
export class MdiPrinter3dNozzleHeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dNozzleHeatOutlineIcon],svg[mdi-printer-3d-nozzle-heat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 14.5l-1.4 2.2l1.4 2.2l-2 3.1l-1.8-.9l1.5-2.2l-1.5-2.2l2-3.1zm-4.3 0l-1.5 2.2l1.5 2.2l-2 3.1l-1.8-.9l1.4-2.2l-1.4-2.2l2-3.1zM4 2h10v5h2v6h-2.5L10 17H8l-3.5-4H2V7h2zm0 7v2h1.5L9 15l3.5-4H14V9h-2V4H6v5z"></svg:path>`,
})
export class MdiPrinter3dNozzleHeatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dNozzleOffIcon],svg[mdi-printer-3d-nozzle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 22.7L14 15.9L13 17h-2l-3.5-4H5V8h1.1l-5-5l1.3-1.3l19.7 19.7zM11 19c0 .6-.4 1-1 1H2v2h8c1.7 0 3-1.3 3-3v-1h-2zm8-6V8h-2V2H7v1.8l9.2 9.2z"></svg:path>`,
})
export class MdiPrinter3dNozzleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dNozzleOffOutlineIcon],svg[mdi-printer-3d-nozzle-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l4 4H5v6h2.5l3.5 4h2l1-1.1l6.9 6.9zM12 15l-3.5-4H7V9h.1l5.4 5.4zm-1 3h2v1c0 1.7-1.3 3-3 3H2v-2h8c.6 0 1-.4 1-1zM9 5.8l-2-2V2h10v5h2v6h-2.8l-1.3-1.3l.6-.7H17V9h-2V4H9z"></svg:path>`,
})
export class MdiPrinter3dNozzleOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dNozzleOutlineIcon],svg[mdi-printer-3d-nozzle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v5h2v6h-2.5L13 17h-2l-3.5-4H5V7h2zm3 20H2v-2h8a1 1 0 0 0 1-1v-1h2v1a3 3 0 0 1-3 3M7 9v2h1.5l3.5 4l3.5-4H17V9h-2V4H9v5z"></svg:path>`,
})
export class MdiPrinter3dNozzleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dOffIcon],svg[mdi-printer-3d-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.3 2L1 3.3l1.1 1.1c-.1.2-.1.4-.1.6v6h4V8.3L8.7 11l-2.2 1.1c-.3.2-.5.5-.5.9v5.2c0 .4.2.7.5.9l4.9 2.7c.2.1.4.2.6.2s.4-.1.6-.2l4.5-2.5l3.7 3.7l1.3-1.3zm2.6 0h-.1l5 5H18v4h4V5c0-1.7-1.3-3-3-3zq.15 0 0 0M19 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-6.6 5.6l5.6 5.6V13c0-.4-.2-.7-.5-.9l-4.9-2.4c-.1 0-.1-.1-.2-.1m-2.2 2.9l2 2l-.2.1L9 13zM8 14.7l3 1.6v3l-3-1.6zm5.7 1.3l1.9 1.9l-2.6 1.4v-3z"></svg:path>`,
})
export class MdiPrinter3dOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterAlertIcon],svg[mdi-printer-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H4v4h12m1 5c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m-3 7H6v-5h8m3-6H3c-1.7 0-3 1.3-3 3v6h4v4h12v-4h4v-6c0-1.7-1.3-3-3-3m7 5h-2V7h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiPrinterAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterCheckIcon],svg[mdi-printer-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7H6V3h12zM6 21v-4H2v-6c0-1.66 1.34-3 3-3h14c1.66 0 3 1.34 3 3v2.81c-.88-.51-1.9-.81-3-.81c-1.23 0-2.36.37-3.31 1H8v5h5c0 .7.13 1.37.35 2zm12-10c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1m5.5 6L22 15.5L18.5 19l-2-2l-1.5 1.5l3.5 3.5z"></svg:path>`,
})
export class MdiPrinterCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterEyeIcon],svg[mdi-printer-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.8 21c-.2-.4-.5-.8-.6-1.3l-.4-.7H8v-5h5c1.2-.6 2.6-1 4-1c1.9 0 3.6.6 5 1.6V11c0-1.7-1.3-3-3-3H5c-1.7 0-3 1.3-3 3v6h4v4zM19 10c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-1-3H6V3h12zm-1 11c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0-3c-2.7 0-5.1 1.7-6 4c.9 2.3 3.3 4 6 4s5.1-1.7 6-4c-.9-2.3-3.3-4-6-4m0 6.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5"></svg:path>`,
})
export class MdiPrinterEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterOffIcon],svg[mdi-printer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v1.18L8.82 7H18V3zM2.28 3L1 4.27L4.75 8A3.02 3.02 0 0 0 2 11v6h4v4h11.73l2 2L21 21.72zm7.54 5l9 9H22v-6a3 3 0 0 0-3-3zM19 10a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M8 14h2.73l5 5H8z"></svg:path>`,
})
export class MdiPrinterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterOffOutlineIcon],svg[mdi-printer-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.41 1.6l20.95 20.95l-1.41 1.41L18 21H6v-4H2v-6c0-1.66 1.34-3 3-3L0 3zM6 15v-2h4l-3-3H5c-.55 0-1 .45-1 1v4zm2 4h8l-4-4H8zM8 5v.36l-2-2V3h12v5h1c1.66 0 3 1.34 3 3v6h-2.34l-4-4H18v2h2v-4c0-.55-.45-1-1-1h-6.34l-2-2H16V5zm11 6.5c0 .56-.45 1-1 1s-1-.44-1-1c0-.54.45-1 1-1s1 .46 1 1"></svg:path>`,
})
export class MdiPrinterOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterOutlineIcon],svg[mdi-printer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8c1.66 0 3 1.34 3 3v6h-4v4H6v-4H2v-6c0-1.66 1.34-3 3-3h1V3h12v5zM8 5v3h8V5zm8 14v-4H8v4zm2-4h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2v-2h12zm1-3.5c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1"></svg:path>`,
})
export class MdiPrinterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosIcon],svg[mdi-printer-pos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10H6a2 2 0 0 0-2 2v7h16v-7a2 2 0 0 0-2-2m0 4h-4v-2h4m-1-3H7V4h10Z"></svg:path>`,
})
export class MdiPrinterPosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosAlertIcon],svg[mdi-printer-pos-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10H4c-1.1 0-2 .9-2 2v7h16v-7a2 2 0 0 0-2-2m0 4h-4v-2h4zm-1-5H5V4h10zm7-2v6h-2V7zm-2 8h2v2h-2z"></svg:path>`,
})
export class MdiPrinterPosAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosAlertOutlineIcon],svg[mdi-printer-pos-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15h-4v-2h4zm3-3v7H2v-7c0-1.1.9-2 2-2h1V4h10v6h1a2 2 0 0 1 2 2M7 10h6V6H7zm9 2H4v5h12zm4 5h2v-2h-2zm0-10v6h2V7z"></svg:path>`,
})
export class MdiPrinterPosAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosCancelIcon],svg[mdi-printer-pos-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm-5 9.5c0 .17 0 .33.03.5H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.18c-.5-.11-1-.18-1.5-.18a6.5 6.5 0 0 0-6.5 6.5M10 12H6v2h4zm13 6.5c0 2.5-2 4.5-4.5 4.5S14 21 14 18.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5m-3 2.58L15.92 17c-.27.42-.42.94-.42 1.5c0 1.66 1.34 3 3 3c.56 0 1.08-.15 1.5-.42m1.5-2.58c0-1.66-1.34-3-3-3c-.56 0-1.08.15-1.5.42L21.08 20c.27-.42.42-.94.42-1.5"></svg:path>`,
})
export class MdiPrinterPosCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosCancelOutlineIcon],svg[mdi-printer-pos-cancel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 14C16 14 14 16 14 18.5s2 4.5 4.5 4.5s4.5-2 4.5-4.5s-2-4.5-4.5-4.5m0 7.5c-1.66 0-3-1.34-3-3c0-.56.15-1.08.42-1.5L20 21.08c-.42.27-.94.42-1.5.42m2.58-1.5L17 15.92c.42-.27.94-.42 1.5-.42c1.66 0 3 1.34 3 3c0 .56-.15 1.08-.42 1.5M7 15v-2h4v2zm-1 2v-5h14a2 2 0 0 0-2-2h-1V4H7v6H6a2 2 0 0 0-2 2v7h8.03c-.03-.17-.03-.33-.03-.5c0-.5.07-1 .18-1.5zM9 6h6v4H9z"></svg:path>`,
})
export class MdiPrinterPosCancelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosCheckIcon],svg[mdi-printer-pos-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm2 4c-3.31 0-6 2.69-6 6H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.09c-.33-.05-.66-.09-1-.09m-9-1H6v2h4zm11.34 3.84l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiPrinterPosCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosCheckOutlineIcon],svg[mdi-printer-pos-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15v-2h4v2zm-1 2h7.35c-.22.63-.35 1.3-.35 2H4v-7a2 2 0 0 1 2-2h1V4h10v6h1a2 2 0 0 1 2 2v1.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V12H6zm3-7h6V6H9zm12.34 5.84l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiPrinterPosCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosCogIcon],svg[mdi-printer-pos-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm2 3c-3.87 0-7 3.13-7 7H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.08c-.33-.05-.66-.08-1-.08m-9 0H6v2h4zm13.8 8.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiPrinterPosCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosCogOutlineIcon],svg[mdi-printer-pos-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.7 19.6v-1l1.1-.8c.1-.1.2-.2.1-.3l-1-1.7c0-.1-.2-.1-.3-.1l-1.2.5c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2h-2c-.2 0-.3.1-.3.2l-.2 1.3c-.3.2-.5.3-.8.5l-1.2-.5c-.1 0-.2 0-.3.1l-1 1.7c0 .1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.1-.2.2-.1.3l1 1.7c.1.1.2.1.3.1l1.2-.5c.2.2.5.4.8.5l.2 1.3c.1.1.2.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.2.5-.3.8-.5l1.2.4c.1 0 .2 0 .3-.1l1-1.7c.1-.1.1-.2 0-.2zm-3.7.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5M7 15v-2h4v2zm-1-3h14a2 2 0 0 0-2-2h-1V4H7v6H6a2 2 0 0 0-2 2v7h8c0-.69.11-1.37.29-2H6zm3-6h6v4H9z"></svg:path>`,
})
export class MdiPrinterPosCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosEditIcon],svg[mdi-printer-pos-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm2.39 1.74L11.13 19H4v-7a2 2 0 0 1 2-2h12c.59 0 1.11.26 1.5.67c-.05.02-.08.04-.11.07M10 12H6v2h4zm3 7.96V22h2.04l6.13-6.12l-2.04-2.05zm9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"></svg:path>`,
})
export class MdiPrinterPosEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosEditOutlineIcon],svg[mdi-printer-pos-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17v-5h12.13l1.26-1.26c.03-.03.06-.05.11-.07c-.39-.41-.91-.67-1.5-.67h-1V4H7v6H6a2 2 0 0 0-2 2v7h7.13l2-2zM9 6h6v4H9zm-2 9v-2h4v2zm15.85-.81l-.98.98l-2.04-2.04l.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72m-3.72-.36l2.04 2.04L15.04 22H13v-2.04z"></svg:path>`,
})
export class MdiPrinterPosEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosMinusIcon],svg[mdi-printer-pos-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm2 4c-3.31 0-6 2.69-6 6H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.09c-.33-.05-.66-.09-1-.09m-9-1H6v2h4zm5 6v2h8v-2z"></svg:path>`,
})
export class MdiPrinterPosMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosMinusOutlineIcon],svg[mdi-printer-pos-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h12v1.09c.33-.05.66-.09 1-.09s.67.04 1 .09V12a2 2 0 0 0-2-2h-1V4H7v6H6a2 2 0 0 0-2 2v7h9c0-.7.13-1.37.35-2H6zm3-6h6v4H9zm-2 9v-2h4v2zm16 3v2h-8v-2z"></svg:path>`,
})
export class MdiPrinterPosMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosNetworkIcon],svg[mdi-printer-pos-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7H7V2h10zm5 13v2h-7c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1H2v-2h7c0-.55.45-1 1-1h1v-2H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7h-7v2h1c.55 0 1 .45 1 1zm-4-10h-4v2h4z"></svg:path>`,
})
export class MdiPrinterPosNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosNetworkOutlineIcon],svg[mdi-printer-pos-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h4v2h-4zm9 9v2h-7c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1H2v-2h7c0-.55.45-1 1-1h1v-2H4v-7a2 2 0 0 1 2-2h1V2h10v6h1a2 2 0 0 1 2 2v7h-7v2h1c.55 0 1 .45 1 1zM9 8h6V4H9zm9 7v-5H6v5z"></svg:path>`,
})
export class MdiPrinterPosNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosOffIcon],svg[mdi-printer-pos-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.2 9l-5-5H17v5zm7.8 7.8V12a2 2 0 0 0-2-2h-4.8zm2.11 4.66l-1.27 1.27L17.11 19H4v-7a2 2 0 0 1 2-2h2.11l-7-7l1.28-1.27zM10 12H6v2h4z"></svg:path>`,
})
export class MdiPrinterPosOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosOffOutlineIcon],svg[mdi-printer-pos-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3L7 8.89V10H6a2 2 0 0 0-2 2v7h13.11l3.73 3.73l1.27-1.27zM6 17v-5h4.11l5 5zM9.2 6l-2-2H17v6h1a2 2 0 0 1 2 2v4.8l-2-2V12h-2.8l-2-2H15V6zM7 13h4v2H7z"></svg:path>`,
})
export class MdiPrinterPosOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosOutlineIcon],svg[mdi-printer-pos-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10h-1V4H7v6H6a2 2 0 0 0-2 2v7h16v-7a2 2 0 0 0-2-2M9 6h6v4H9zm9 11H6v-5h12zm-1-2h-4v-2h4z"></svg:path>`,
})
export class MdiPrinterPosOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosPauseIcon],svg[mdi-printer-pos-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm3 4.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM10 12H6v2h4zm6 10h2v-6h-2zm4-6v6h2v-6z"></svg:path>`,
})
export class MdiPrinterPosPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosPauseOutlineIcon],svg[mdi-printer-pos-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a2 2 0 0 0-2-2h-1V4H7v6H6a2 2 0 0 0-2 2v7h9c0-.7.13-1.37.35-2H6v-5h12v1.09c.33-.05.66-.09 1-.09s.67.04 1 .09zm-5-2H9V6h6zm-8 5v-2h4v2zm9 1h2v6h-2zm6 0v6h-2v-6z"></svg:path>`,
})
export class MdiPrinterPosPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosPlayIcon],svg[mdi-printer-pos-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.09V12a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7h9c0-3.31 2.69-6 6-6c.34 0 .67.04 1 .09M10 14H6v-2h4zm7-5H7V4h10zm5 10l-5 3v-6z"></svg:path>`,
})
export class MdiPrinterPosPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosPlayOutlineIcon],svg[mdi-printer-pos-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15v-2h4v2zm-1 2h7.35c-.22.63-.35 1.3-.35 2H4v-7a2 2 0 0 1 2-2h1V4h10v6h1a2 2 0 0 1 2 2v1.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V12H6zm3-7h6V6H9zm8 6v6l5-3z"></svg:path>`,
})
export class MdiPrinterPosPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosPlusIcon],svg[mdi-printer-pos-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm2 4c-3.31 0-6 2.69-6 6H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.09c-.33-.05-.66-.09-1-.09m-9-1H6v2h4zm10 6v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiPrinterPosPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosPlusOutlineIcon],svg[mdi-printer-pos-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h12v1.09c.33-.05.66-.09 1-.09s.67.04 1 .09V12a2 2 0 0 0-2-2h-1V4H7v6H6a2 2 0 0 0-2 2v7h9c0-.7.13-1.37.35-2H6zm3-6h6v4H9zm-2 9v-2h4v2zm16 3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></svg:path>`,
})
export class MdiPrinterPosPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosRefreshIcon],svg[mdi-printer-pos-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm-5 9.5c0 .17 0 .33.03.5H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.18c-.5-.11-1-.18-1.5-.18a6.5 6.5 0 0 0-6.5 6.5M10 12H6v2h4zm12 6.5v-4l-1.17 1.17A4 4 0 0 0 18 14.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5z"></svg:path>`,
})
export class MdiPrinterPosRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosRefreshOutlineIcon],svg[mdi-printer-pos-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15v-2h4v2zm15 3.5v-4l-1.17 1.17A4 4 0 0 0 18 14.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5zM12.18 17c-.11.5-.18 1-.18 1.5c0 .17 0 .33.03.5H4v-7a2 2 0 0 1 2-2h1V4h10v6h1a2 2 0 0 1 2 2H6v5zM9 10h6V6H9z"></svg:path>`,
})
export class MdiPrinterPosRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosRemoveIcon],svg[mdi-printer-pos-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm2 4c-3.31 0-6 2.69-6 6H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.09c-.33-.05-.66-.09-1-.09m-9-1H6v2h4zm12.54 4.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiPrinterPosRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosRemoveOutlineIcon],svg[mdi-printer-pos-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15v-2h4v2zm-1 2h7.35c-.22.63-.35 1.3-.35 2H4v-7a2 2 0 0 1 2-2h1V4h10v6h1a2 2 0 0 1 2 2v1.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V12H6zm3-7h6V6H9zm13.54 6.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiPrinterPosRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosStarIcon],svg[mdi-printer-pos-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm2 4c-3.31 0-6 2.69-6 6H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.09c-.33-.05-.66-.09-1-.09m-9-1H6v2h4zm13 5.89l-2.89-.25L19 15l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81l2.5-1.49l2.45 1.49l-.65-2.81z"></svg:path>`,
})
export class MdiPrinterPosStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosStarOutlineIcon],svg[mdi-printer-pos-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h12v1.09c.33-.05.66-.09 1-.09s.67.04 1 .09V12a2 2 0 0 0-2-2h-1V4H7v6H6a2 2 0 0 0-2 2v7h9c0-.7.13-1.37.35-2H6zm3-6h6v4H9zm-2 9v-2h4v2zm13.8 4.77l.65 2.81L19 21.09l-2.5 1.49l.68-2.81L15 17.89l2.87-.25L19 15l1.11 2.64l2.89.25z"></svg:path>`,
})
export class MdiPrinterPosStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosStopIcon],svg[mdi-printer-pos-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm2 4c-3.31 0-6 2.69-6 6H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.09c-.33-.05-.66-.09-1-.09m-9-1H6v2h4zm6 4v6h6v-6z"></svg:path>`,
})
export class MdiPrinterPosStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosStopOutlineIcon],svg[mdi-printer-pos-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h12v1.09c.33-.05.66-.09 1-.09s.67.04 1 .09V12a2 2 0 0 0-2-2h-1V4H7v6H6a2 2 0 0 0-2 2v7h9c0-.7.13-1.37.35-2H6zm3-6h6v4H9zm-2 9v-2h4v2zm15 1v6h-6v-6z"></svg:path>`,
})
export class MdiPrinterPosStopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosSyncIcon],svg[mdi-printer-pos-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm-4 8.5c0 .5.07 1 .18 1.5H4v-7a2 2 0 0 1 2-2h12c.74 0 1.38.41 1.73 1h-.23a6.5 6.5 0 0 0-6.5 6.5M10 12H6v2h4zm9 8a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5zm0-6.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4"></svg:path>`,
})
export class MdiPrinterPosSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosSyncOutlineIcon],svg[mdi-printer-pos-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15v-2h4v2zm6 2.5c0 .5.07 1 .18 1.5H4v-7a2 2 0 0 1 2-2h1V4h10v6h1c.74 0 1.38.41 1.73 1h-.23c-1.27 0-2.45.37-3.45 1H6v5h7.03c-.03.17-.03.33-.03.5M9 10h6V6H9zm10 3.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5z"></svg:path>`,
})
export class MdiPrinterPosSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosWrenchIcon],svg[mdi-printer-pos-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm-6 7c0 1.13.39 2.16 1 3H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.03A4.97 4.97 0 0 0 16 11c-2.76 0-5 2.24-5 5m-1-4H6v2h4zm12.87 9.19l-4.11-4.11c.41-1.04.18-2.26-.68-3.11c-.9-.91-2.25-1.09-3.34-.59l1.94 1.94l-1.35 1.36l-1.99-1.95c-.54 1.09-.29 2.44.59 3.35a2.91 2.91 0 0 0 3.12.68l4.11 4.1c.18.19.45.19.63 0l1.04-1.03c.22-.18.22-.5.04-.64"></svg:path>`,
})
export class MdiPrinterPosWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosWrenchOutlineIcon],svg[mdi-printer-pos-wrench-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15v-2h4v2zm6.03-3H6v5h5.1c.15.74.48 1.42.9 2H4v-7a2 2 0 0 1 2-2h1V4h10v6h1a2 2 0 0 1 2 2v1.03A4.97 4.97 0 0 0 16 11c-1.12 0-2.14.38-2.97 1M9 10h6V6H9zm13.87 11.19l-4.11-4.11c.41-1.04.18-2.26-.68-3.11c-.9-.91-2.25-1.09-3.34-.59l1.94 1.94l-1.35 1.36l-1.99-1.95c-.54 1.09-.29 2.44.59 3.35a2.91 2.91 0 0 0 3.12.68l4.11 4.1c.18.19.45.19.63 0l1.04-1.03c.22-.18.22-.5.04-.64"></svg:path>`,
})
export class MdiPrinterPosWrenchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterSearchIcon],svg[mdi-printer-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.3 18.9c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.2 2.4-.7l3.1 3.1l1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5M18 7H6V3h12zM6 21v-4H2v-6c0-1.7 1.3-3 3-3h14c1.7 0 3 1.3 3 3v2c-1.2-1.8-3.2-3-5.5-3c-2.7 0-5 1.7-6 4H8v5h2.5c.3.7.8 1.4 1.3 2z"></svg:path>`,
})
export class MdiPrinterSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterSettingsIcon],svg[mdi-printer-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2v4H6V2zm1 9a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1m-3 7v-5H8v5zm3-11a3 3 0 0 1 3 3v6h-4v4H6v-4H2v-6a3 3 0 0 1 3-3zm-4 17v-2h2v2zm-4 0v-2h2v2zm-4 0v-2h2v2z"></svg:path>`,
})
export class MdiPrinterSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterWirelessIcon],svg[mdi-printer-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.93 3.92l1.41 1.41c3.12-3.13 8.19-3.13 11.32 0l1.41-1.41C15.17 0 8.84 0 4.93 3.92m2.83 2.83l1.41 1.41a4.01 4.01 0 0 1 5.66 0l1.41-1.41a6 6 0 0 0-8.48 0M19 14a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m-3 6H8v-5h8zm3-10H5a3 3 0 0 0-3 3v5h4v4h12v-4h4v-5a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiPrinterWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPriorityHighIcon],svg[mdi-priority-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19h8v-2h-8zm0-5.5h8v-2h-8zM14 8h8V6h-8zM2 12.5C2 8.92 4.92 6 8.5 6H9V4l3 3l-3 3V8h-.5C6 8 4 10 4 12.5S6 17 8.5 17H12v2H8.5C4.92 19 2 16.08 2 12.5"></svg:path>`,
})
export class MdiPriorityHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPriorityLowIcon],svg[mdi-priority-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3l-3-3v2h-.5C6 16 4 14 4 11.5S6 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5"></svg:path>`,
})
export class MdiPriorityLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProfessionalHexagonIcon],svg[mdi-professional-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM5 9v6h1.25v-2H7a2 2 0 0 0 2-2a2 2 0 0 0-2-2zm1.25 3v-2h.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1zm3.5-3v6H11v-2h.75l.66 2h1.32l-.79-2.39c.49-.36.81-.95.81-1.61a2 2 0 0 0-2-2zM11 12v-2h.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1zm6-3c-1.38 0-2.5 1.34-2.5 3s1.12 3 2.5 3s2.5-1.34 2.5-3s-1.12-3-2.5-3m0 1.25c.76 0 1.38.78 1.38 1.75s-.62 1.75-1.38 1.75s-1.37-.78-1.37-1.75s.61-1.75 1.37-1.75"></svg:path>`,
})
export class MdiProfessionalHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressAlertIcon],svg[mdi-progress-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v2c4.39.54 7.5 4.53 6.96 8.92A8.014 8.014 0 0 1 13 19.88v2c5.5-.6 9.45-5.54 8.85-11.03C21.33 6.19 17.66 2.5 13 2m-2 0c-1.96.18-3.81.95-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67A9.8 9.8 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5 5.37l-1.39 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63zM13 13V7h-2v6zm0 4v-2h-2v2z"></svg:path>`,
})
export class MdiProgressAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressCheckIcon],svg[mdi-progress-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.9 9.9 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM15.5 8.5l-4.88 4.88l-2.12-2.12l-1.06 1.06l3.18 3.18l5.94-5.94zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5.04 5.37l-1.43 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63"></svg:path>`,
})
export class MdiProgressCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressClockIcon],svg[mdi-progress-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.9 9.9 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5.04 5.37l-1.43 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63M12.5 7v5.25l4.5 2.67l-.75 1.23L11 13V7z"></svg:path>`,
})
export class MdiProgressClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressCloseIcon],svg[mdi-progress-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.9 9.9 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5.04 5.37l-1.43 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63M14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41z"></svg:path>`,
})
export class MdiProgressCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressDownloadIcon],svg[mdi-progress-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.03c4.73.47 8.5 4.22 8.95 8.97A9.976 9.976 0 0 1 13 21.93v-2c3.64-.43 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4.05zm-2 .03v2c-1.43.2-2.78.78-3.9 1.68L5.67 4.26A9.83 9.83 0 0 1 11 2.06M4.26 5.67L5.69 7.1A8 8 0 0 0 4.05 11h-2c.2-1.96.95-3.81 2.21-5.33M2.06 13h2c.18 1.42.75 2.77 1.63 3.9l-1.42 1.43A10.04 10.04 0 0 1 2.06 13m5.04 5.37c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26zM12 16.5L7.5 12H11V8h2v4h3.5z"></svg:path>`,
})
export class MdiProgressDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressHelperIcon],svg[mdi-progress-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v2c4.39.54 7.5 4.53 6.96 8.92A8.014 8.014 0 0 1 13 19.88v2c5.5-.6 9.45-5.54 8.85-11.03C21.33 6.19 17.66 2.5 13 2m-2 0c-1.96.18-3.81.95-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.8 9.8 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5 5.37l-1.39 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63z"></svg:path>`,
})
export class MdiProgressHelperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressPencilIcon],svg[mdi-progress-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.84 10.2l-1.01 1.01l-2.07-2.03l1.01-1.02c.2-.21.54-.22.78 0l1.29 1.25c.21.21.22.55 0 .79M8 13.91l4.17-4.19l2.07 2.08l-4.16 4.2H8zM13 2v2c4.39.54 7.5 4.53 6.96 8.92A8.014 8.014 0 0 1 13 19.88v2c5.5-.6 9.45-5.54 8.85-11.03C21.33 6.19 17.66 2.5 13 2m-2 0c-1.96.18-3.81.95-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67A9.8 9.8 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5 5.37l-1.39 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63z"></svg:path>`,
})
export class MdiProgressPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressQuestionIcon],svg[mdi-progress-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18h-2v-2h2zm0-3h-2c0-3.25 3-3 3-5c0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5m9-3c0 5.18-3.95 9.45-9 9.95v-2.01c3.95-.49 7-3.86 7-7.94s-3.05-7.45-7-7.94V2.05c5.05.5 9 4.77 9 9.95M11 2.05v2.01c-1.46.18-2.8.76-3.91 1.62L5.67 4.26C7.15 3.05 9 2.25 11 2.05M4.06 11H2.05c.2-2 1-3.85 2.21-5.33L5.68 7.1A7.9 7.9 0 0 0 4.06 11M11 19.94v2.01c-2-.2-3.85-.99-5.33-2.21l1.42-1.42c1.11.86 2.45 1.44 3.91 1.62M2.05 13h2.01c.18 1.46.76 2.8 1.62 3.91l-1.42 1.42A10 10 0 0 1 2.05 13"></svg:path>`,
})
export class MdiProgressQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressStarIcon],svg[mdi-progress-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v2c4.39.54 7.5 4.53 6.96 8.92A8.014 8.014 0 0 1 13 19.88v2c5.5-.6 9.45-5.54 8.85-11.03C21.33 6.19 17.66 2.5 13 2m-2 0c-1.96.18-3.81.95-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67A9.8 9.8 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5 5.37l-1.39 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63zm1.52-1.57l.92-3.89l-3-2.58l3.95-.37L12 6.35L13.55 10l3.95.33l-3 2.58l.92 3.89L12 14.74z"></svg:path>`,
})
export class MdiProgressStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressStarFourPointsIcon],svg[mdi-progress-star-four-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.8 9.8 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68zM2.05 11a9.8 9.8 0 0 1 2.21-5.33L5.69 7.1A8 8 0 0 0 4.05 11zm2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9zm1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58z"></svg:path>`,
})
export class MdiProgressStarFourPointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressTagIcon],svg[mdi-progress-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.8 9.8 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68zM2.05 11a9.8 9.8 0 0 1 2.21-5.33L5.69 7.1A8 8 0 0 0 4.05 11zm2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9zm1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M11.6 8c.2 0 .4.1.6.2l3.6 3.6c.1.2.2.4.2.6c0 .3-.1.5-.2.6L13 15.8c-.2.1-.4.2-.6.2c-.3 0-.5-.1-.6-.2l-3.6-3.6c-.1-.2-.2-.4-.2-.6V8.8c0-.4.4-.8.8-.8zM8.8 9.4c0 .3.3.6.6.6s.6-.3.6-.6s-.3-.6-.6-.6s-.6.3-.6.6"></svg:path>`,
})
export class MdiProgressTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressUploadIcon],svg[mdi-progress-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.03c4.73.47 8.5 4.22 8.95 8.97A9.976 9.976 0 0 1 13 21.93v-2c3.64-.43 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4.05zm-2 .03v2c-1.43.2-2.78.78-3.9 1.68L5.67 4.26A9.83 9.83 0 0 1 11 2.06M4.26 5.67L5.69 7.1A8 8 0 0 0 4.05 11h-2c.2-1.96.95-3.81 2.21-5.33M2.06 13h2c.18 1.42.75 2.77 1.63 3.9l-1.42 1.43A10.04 10.04 0 0 1 2.06 13m5.04 5.37c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26zM12 7.5L7.5 12H11v4h2v-4h3.5z"></svg:path>`,
})
export class MdiProgressUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProgressWrenchIcon],svg[mdi-progress-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.9 9.9 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5.04 5.37l-1.43 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63m9.72-3.18l-4.11-4.11c.41-1.04.18-2.26-.68-3.11c-.9-.91-2.25-1.09-3.34-.59l1.94 1.94l-1.35 1.36l-1.99-1.95c-.54 1.09-.29 2.44.59 3.35c.86.86 2.08 1.08 3.12.68l4.11 4.1c.18.19.45.19.63 0l1.04-1.03c.22-.18.22-.5.04-.64"></svg:path>`,
})
export class MdiProgressWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorIcon],svg[mdi-projector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6c-1.13 0-2.23.35-3.16 1H4c-1.11 0-2 .89-2 2v6c0 1.11.89 2 2 2h1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h6v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h1c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2h-.85c-.92-.65-2.02-1-3.15-1m0 1.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 16 7.5M4 9h4v1H4zm12 0a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M4 11h4v1H4zm0 2h4v1H4z"></svg:path>`,
})
export class MdiProjectorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorOffIcon],svg[mdi-projector-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9c-1.03 0-1.9.79-2 1.82L16.18 13c2.54-.24 2.37-4-.18-4m-1 5.35l3.95 3.96v-.01M7.64 7l5.01 5l-5-5M20 7h-.85a5.49 5.49 0 0 0-6.31 0h-2.65l2.61 2.61c.98-2.27 3.93-2.83 5.7-1.08c1.72 1.74 1.16 4.69-1.11 5.67l2.79 2.8A2.01 2.01 0 0 0 22 15V9c0-1.1-.9-2-2-2m-4 2c-1.03 0-1.9.79-2 1.82L16.18 13c2.54-.24 2.37-4-.18-4m0 0c-1.03 0-1.9.79-2 1.82L16.18 13c2.54-.24 2.37-4-.18-4m6.25 12.61L2.53 1.89L1.26 3.16L5.1 7H4c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h6v1c0 .55.45 1 1 1h1.1l3.9 3.89l1.26-1.28M8 14H4v-1h4m0-1H4v-1h4m0-1H4V9h3.1l.9.9M2.54 1.89L7.64 7L2.53 1.89M7.65 7l5 5l-5.01-5m11.31 11.3v.01L15 14.35M7.64 7L2.53 1.89h.01M12.65 12L7.64 7h.01m11.3 11.3v.01L15 14.35"></svg:path>`,
})
export class MdiProjectorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenIcon],svg[mdi-projector-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1v9h6v2.59l-4.21 4.2l1.42 1.42l2.79-2.8V22h2v-2.59l2.79 2.8l1.42-1.42l-4.21-4.2V14h6V5h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></svg:path>`,
})
export class MdiProjectorScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenOffIcon],svg[mdi-projector-screen-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14.89v1.7l4.21 4.2l-1.42 1.42l-2.79-2.8V22h-2v-2.59l-2.79 2.8l-1.42-1.42l4.21-4.2V14H5V6.89L1.11 3l1.28-1.27l19.72 19.73l-1.27 1.27zm6-.89V5h1c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H5.2l12 12z"></svg:path>`,
})
export class MdiProjectorScreenOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenOffOutlineIcon],svg[mdi-projector-screen-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l1.27-1.27L2.39 1.73L1.11 3L5 6.89V14h6v2.59l-4.21 4.2l1.42 1.42l2.79-2.8V22h2v-2.59l2.79 2.8l1.42-1.42l-4.21-4.2v-1.7zM7 12V8.89L10.11 12zm1.2-7l-3-3H20c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1v9h-1.8l-2-2H17V5z"></svg:path>`,
})
export class MdiProjectorScreenOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenOutlineIcon],svg[mdi-projector-screen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1v9h6v2.59l-4.21 4.2l1.42 1.42l2.79-2.8V22h2v-2.59l2.79 2.8l1.42-1.42l-4.21-4.2V14h6V5h1c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1m-3 10H7V5h10z"></svg:path>`,
})
export class MdiProjectorScreenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenVariantIcon],svg[mdi-projector-screen-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18V9h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1v9z"></svg:path>`,
})
export class MdiProjectorScreenVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenVariantOffIcon],svg[mdi-projector-screen-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L16.11 18H5V9H4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h.11l-3-3l1.28-1.27l19.72 19.73zM19 9h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H9.2l9.8 9.8z"></svg:path>`,
})
export class MdiProjectorScreenVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenVariantOffOutlineIcon],svg[mdi-projector-screen-variant-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l3 3H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1v9h11.11l4.73 4.73zM7 16V9h.11l7 7zm5.2-7l-3-3H20c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1v6.8l-2-2V9z"></svg:path>`,
})
export class MdiProjectorScreenVariantOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenVariantOutlineIcon],svg[mdi-projector-screen-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1v9h14V9h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1m-3 10H7V9h10z"></svg:path>`,
})
export class MdiProjectorScreenVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPropaneTankIcon],svg[mdi-propane-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3zm16-2v-3c0-1.86-1.28-3.41-3-3.86V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v3zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9z"></svg:path>`,
})
export class MdiPropaneTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPropaneTankOutlineIcon],svg[mdi-propane-tank-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6.14V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-8c0-1.86-1.28-3.41-3-3.86M9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9zM8 8h8c1.1 0 2 .9 2 2v3H6v-3c0-1.1.9-2 2-2m8 12H8c-1.1 0-2-.9-2-2v-3h12v3c0 1.1-.9 2-2 2"></svg:path>`,
})
export class MdiPropaneTankOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiProtocolIcon],svg[mdi-protocol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20h-4l4-16h4m-6 0h-4L8 20h4M2 16.5A2.5 2.5 0 0 0 4.5 19A2.5 2.5 0 0 0 7 16.5A2.5 2.5 0 0 0 4.5 14A2.5 2.5 0 0 0 2 16.5m0-7A2.5 2.5 0 0 0 4.5 12A2.5 2.5 0 0 0 7 9.5A2.5 2.5 0 0 0 4.5 7A2.5 2.5 0 0 0 2 9.5"></svg:path>`,
})
export class MdiProtocolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPublishIcon],svg[mdi-publish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v2h14V4zm0 10h4v6h6v-6h4l-7-7z"></svg:path>`,
})
export class MdiPublishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPublishOffIcon],svg[mdi-publish-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 22.7L15 16.9V20H9v-6H5l3.6-3.6L1.1 3l1.3-1.3l19.7 19.7zM19 6V4H7.2l2 2zm-1.8 8H19l-7-7l-.9.9z"></svg:path>`,
})
export class MdiPublishOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPulseIcon],svg[mdi-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h2.79l4.31-8.21l1.18 8.96l3.22-4.09L17.83 13H21v2h-4l-2.33-2.33l-4.75 6.06l-.98-7.42L7 15H3z"></svg:path>`,
})
export class MdiPulseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPumpIcon],svg[mdi-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-6h1.5a9.3 9.3 0 0 1-.5-3a9 9 0 0 1 9-9h10v6h-1.5c.32.94.5 1.95.5 3a9 9 0 0 1-9 9zm3-9c0 1.28.34 2.47.94 3.5l3.46-2c-.25-.44-.4-.95-.4-1.5c0-.65.21-1.25.56-1.74L6.3 7.93C5.5 9.08 5 10.5 5 12m7 7c2.59 0 4.85-1.41 6.06-3.5l-3.46-2c-.52.9-1.49 1.5-2.6 1.5h-.29l-.38 3.97zm0-10c1.21 0 2.26.72 2.73 1.76l3.64-1.66A6.99 6.99 0 0 0 12 5zm0 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class MdiPumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPumpOffIcon],svg[mdi-pump-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l3.7 3.7C3.7 8.2 3 10 3 12c0 1 .2 2.1.5 3H2v6h10c2 0 3.8-.7 5.3-1.8l3.5 3.5zm-16.2-6c-.6-1-.9-2.2-.9-3.5c0-1.4.5-2.8 1.2-3.9l3 3c-.1.2-.2.6-.2.9c0 .5.2 1.1.4 1.5zM12 19h-.7l.4-4h.3c.3 0 .6-.1.9-.2l3 3c-1.1.7-2.5 1.2-3.9 1.2m0-10.2L7.4 4.2C8.8 3.5 10.3 3 12 3h10v6h-1.5c.3.9.5 2 .5 3c0 1.7-.5 3.2-1.2 4.6L12.2 9c1.1.1 2.1.8 2.5 1.7L18.3 9c-1-2.3-3.5-4-6.3-4z"></svg:path>`,
})
export class MdiPumpOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPumpkinIcon],svg[mdi-pumpkin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6c.97 0 1.87.5 2.61 1.38c.55-.59 1.2-1.02 1.89-1.23V4a2 2 0 0 1 2-2h2v2h-2v2.15c.69.21 1.34.64 1.89 1.23C15.63 6.5 16.53 6 17.5 6C20 6 22 9.36 22 13.5S20 21 17.5 21c-.97 0-1.87-.5-2.61-1.38C14.08 20.5 13.08 21 12 21s-2.08-.5-2.89-1.38C8.37 20.5 7.47 21 6.5 21C4 21 2 17.64 2 13.5S4 6 6.5 6"></svg:path>`,
})
export class MdiPumpkinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPurseIcon],svg[mdi-purse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 19.1l-1-8.6A1.65 1.65 0 0 0 19.3 9H16V5l-2-2h-4L8 5v4H4.7A1.65 1.65 0 0 0 3 10.5l-1 8.6A1.74 1.74 0 0 0 3.7 21h16.6a1.74 1.74 0 0 0 1.7-1.9M10 5h4v4h-4"></svg:path>`,
})
export class MdiPurseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPurseOutlineIcon],svg[mdi-purse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 11l1 8H4l1-8zm-5-8h-4L8 5v4H4.7A1.65 1.65 0 0 0 3 10.5l-1 8.6A1.74 1.74 0 0 0 3.7 21h16.6a1.74 1.74 0 0 0 1.7-1.9l-1-8.6A1.65 1.65 0 0 0 19.3 9H16V5zm-4 6V5h4v4"></svg:path>`,
})
export class MdiPurseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleIcon],svg[mdi-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5A2.5 2.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V5H4a2 2 0 0 0-2 2v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7S5 16.2 3.5 16.2H2V20a2 2 0 0 0 2 2h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"></svg:path>`,
})
export class MdiPuzzleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleCheckIcon],svg[mdi-puzzle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zm-3-6a2.5 2.5 0 0 1 2.5 2.5c0 .31-.06.61-.16.89C21.8 13.5 20.46 13 19 13c-3.31 0-6 2.69-6 6v.54c-.36-1.04-1.35-1.74-2.5-1.74c-1.5 0-2.7 1.2-2.7 2.7V22H4c-1.1 0-2-.9-2-2v-3.8h1.5c1.5 0 2.7-1.2 2.7-2.7S5 10.8 3.5 10.8H2V7a2 2 0 0 1 2-2h4V3.5C8 2.12 9.12.998 10.5.998S13 2.12 13 3.5V5h4a2 2 0 0 1 2 2v4z"></svg:path>`,
})
export class MdiPuzzleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleCheckOutlineIcon],svg[mdi-puzzle-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zM22 13.5v.3c-.63-.36-1.33-.61-2.06-.73c-.19-.62-.76-1.07-1.44-1.07H17V7h-5V5.5c0-.83-.67-1.5-1.5-1.5S9 4.67 9 5.5V7H4v2.12c1.76.68 3 2.38 3 4.38s-1.25 3.7-3 4.38V20h2.12a4.7 4.7 0 0 1 4.38-3c.97 0 1.87.3 2.62.8L13 19c0 1.09.29 2.12.8 3h-.6v-.3c0-1.49-1.2-2.7-2.7-2.7s-2.7 1.21-2.7 2.7v.3H4c-1.1 0-2-.9-2-2v-3.8h.3C3.79 16.2 5 15 5 13.5s-1.21-2.7-2.7-2.7H2V7c0-1.1.9-2 2-2h3.04c.24-1.7 1.7-3 3.46-3s3.22 1.3 3.46 3H17c1.1 0 2 .9 2 2v3.04c1.7.24 3 1.7 3 3.46"></svg:path>`,
})
export class MdiPuzzleCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleEditIcon],svg[mdi-puzzle-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.04 12.13c-.14 0-.28.06-.39.17l-1 1l2.05 2.05l1-1c.22-.21.22-.56 0-.77l-1.28-1.28a.53.53 0 0 0-.38-.17m-1.97 1.75L13 19.94V22h2.06l6.06-6.07zM19 11.12l-7.09 7.08c-.41-.25-.91-.4-1.41-.4c-1.5 0-2.7 1.2-2.7 2.7V22H4a2 2 0 0 1-2-2v-3.8h1.5c1.5 0 2.7-1.2 2.7-2.7S5 10.8 3.5 10.8H2V7c0-1.1.9-2 2-2h4V3.5a2.5 2.5 0 0 1 5 0V5h4a2 2 0 0 1 2 2z"></svg:path>`,
})
export class MdiPuzzleEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleEditOutlineIcon],svg[mdi-puzzle-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.04 12.13c-.14 0-.28.06-.39.17l-1 1l2.05 2.05l1-1c.22-.21.22-.56 0-.77l-1.28-1.28a.53.53 0 0 0-.38-.17m-1.97 1.75L13 19.94V22h2.06l6.06-6.07zm-8.02 5.18c-.18-.06-.36-.06-.55-.06c-1.5 0-2.7 1.21-2.7 2.7v.3H4a2 2 0 0 1-2-2v-3.8h.3C3.79 16.2 5 15 5 13.5s-1.21-2.7-2.7-2.7H2V7c0-1.1.9-2 2-2h3.04c.24-1.7 1.7-3 3.46-3s3.22 1.3 3.46 3H17a2 2 0 0 1 2 2v3.04c.36.05.69.17 1 .32c-.27.14-.54.3-.76.53L18.12 12H17V7h-5V5.5c0-.83-.67-1.5-1.5-1.5S9 4.67 9 5.5V7H4v2.12c1.76.68 3 2.38 3 4.38s-1.25 3.7-3 4.38V20h2.12a4.7 4.7 0 0 1 4.38-3c.76 0 1.5.18 2.11.5z"></svg:path>`,
})
export class MdiPuzzleEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleHeartIcon],svg[mdi-puzzle-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 22.3l-.6-.5c-2-1.9-3.4-3.1-3.4-4.6c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8c1.2 0 2.2.9 2.2 2.2c0 1.5-1.4 2.7-3.4 4.6zM20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4c-1.1 0-2 .9-2 2v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7S5 16.2 3.5 16.2H2V20a2 2 0 0 0 2 2h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7c.94 0 1.77.47 2.25 1.2h.34c-.05-.33-.09-.66-.09-1c0-3.31 2.69-6 6-6c1.54 0 2.94.58 4 1.53v-.03a2.5 2.5 0 0 0-2.5-2.5"></svg:path>`,
})
export class MdiPuzzleHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleHeartOutlineIcon],svg[mdi-puzzle-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 22v-.3c0-1.49-1.2-2.7-2.7-2.7s-2.7 1.21-2.7 2.7v.3H4a2 2 0 0 1-2-2v-3.8h.3C3.79 16.2 5 15 5 13.5s-1.21-2.7-2.7-2.7H2V7c0-1.1.9-2 2-2h3.04c.24-1.7 1.7-3 3.46-3s3.22 1.3 3.46 3H17a2 2 0 0 1 2 2v3.04c1.45.21 2.61 1.3 2.91 2.72A5.95 5.95 0 0 0 19 12h-2V7h-5V5.5c0-.83-.67-1.5-1.5-1.5S9 4.67 9 5.5V7H4v2.12c1.76.68 3 2.38 3 4.38s-1.25 3.7-3 4.38V20h2.12a4.7 4.7 0 0 1 4.38-3c.93 0 1.79.28 2.5.74V18c0 1.54.58 2.94 1.54 4zm5.8.3l.6-.5c2-1.9 3.4-3.1 3.4-4.6c0-1.3-1-2.2-2.2-2.2c-.7 0-1.4.3-1.8.8c-.4-.5-1.1-.8-1.8-.8c-1.2 0-2.2 1-2.2 2.2c0 1.5 1.4 2.7 3.4 4.6z"></svg:path>`,
})
export class MdiPuzzleHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleMinusIcon],svg[mdi-puzzle-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.04 19.61a2.68 2.68 0 0 0-2.54-1.81c-1.5 0-2.7 1.2-2.7 2.7V22H4a2 2 0 0 1-2-2v-3.8h1.5c1.5 0 2.7-1.2 2.7-2.7S5 10.8 3.5 10.8H2V7c0-1.1.9-2 2-2h4V3.5a2.5 2.5 0 0 1 5 0V5h4a2 2 0 0 1 2 2v4h1.5a2.5 2.5 0 0 1 2.5 2.5c0 .32-.06.62-.17.89A6 6 0 0 0 19 13c-3.31 0-6 2.69-6 6c0 .2 0 .41.04.61M15 18v2h8v-2z"></svg:path>`,
})
export class MdiPuzzleMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleMinusOutlineIcon],svg[mdi-puzzle-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 22v-.3c0-1.49-1.2-2.7-2.7-2.7s-2.7 1.21-2.7 2.7v.3H4a2 2 0 0 1-2-2v-3.8h.3C3.79 16.2 5 15 5 13.5s-1.21-2.7-2.7-2.7H2V7c0-1.1.9-2 2-2h3.04c.24-1.7 1.7-3 3.46-3s3.22 1.3 3.46 3H17a2 2 0 0 1 2 2v3.04c1.7.24 3 1.7 3 3.46c0 .1 0 .2-.03.29c-.62-.35-1.3-.59-2.04-.71c-.18-.62-.75-1.08-1.43-1.08H17V7h-5V5.5c0-.83-.67-1.5-1.5-1.5S9 4.67 9 5.5V7H4v2.12c1.76.68 3 2.38 3 4.38s-1.25 3.7-3 4.38V20h2.12a4.7 4.7 0 0 1 4.38-3c.97 0 1.87.3 2.62.81a5.96 5.96 0 0 0 .69 4.19zm1.8-4v2h8v-2z"></svg:path>`,
})
export class MdiPuzzleMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleOutlineIcon],svg[mdi-puzzle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13.5c0 1.76-1.3 3.22-3 3.46V20a2 2 0 0 1-2 2h-3.8v-.3a2.7 2.7 0 0 0-2.7-2.7c-1.5 0-2.7 1.21-2.7 2.7v.3H4a2 2 0 0 1-2-2v-3.8h.3C3.79 16.2 5 15 5 13.5s-1.21-2.7-2.7-2.7H2V7a2 2 0 0 1 2-2h3.04c.24-1.7 1.7-3 3.46-3s3.22 1.3 3.46 3H17a2 2 0 0 1 2 2v3.04c1.7.24 3 1.7 3 3.46M17 15h1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5H17V7h-5V5.5A1.5 1.5 0 0 0 10.5 4A1.5 1.5 0 0 0 9 5.5V7H4v2.12c1.76.68 3 2.38 3 4.38s-1.25 3.7-3 4.38V20h2.12a4.7 4.7 0 0 1 4.38-3c2 0 3.7 1.25 4.38 3H17z"></svg:path>`,
})
export class MdiPuzzleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzlePlusIcon],svg[mdi-puzzle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.04 19.61a2.68 2.68 0 0 0-2.54-1.81c-1.5 0-2.7 1.2-2.7 2.7V22H4a2 2 0 0 1-2-2v-3.8h1.5c1.5 0 2.7-1.2 2.7-2.7S5 10.8 3.5 10.8H2V7c0-1.1.9-2 2-2h4V3.5a2.5 2.5 0 0 1 5 0V5h4a2 2 0 0 1 2 2v4h1.5a2.5 2.5 0 0 1 2.5 2.5c0 .32-.06.62-.17.89A6 6 0 0 0 19 13c-3.31 0-6 2.69-6 6c0 .2 0 .41.04.61M18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiPuzzlePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzlePlusOutlineIcon],svg[mdi-puzzle-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 22v-.3c0-1.49-1.2-2.7-2.7-2.7s-2.7 1.21-2.7 2.7v.3H4a2 2 0 0 1-2-2v-3.8h.3C3.79 16.2 5 15 5 13.5s-1.21-2.7-2.7-2.7H2V7c0-1.1.9-2 2-2h3.04c.24-1.7 1.7-3 3.46-3s3.22 1.3 3.46 3H17a2 2 0 0 1 2 2v3.04c1.7.24 3 1.7 3 3.46c0 .1 0 .2-.03.29c-.62-.35-1.3-.59-2.04-.71c-.18-.62-.75-1.08-1.43-1.08H17V7h-5V5.5c0-.83-.67-1.5-1.5-1.5S9 4.67 9 5.5V7H4v2.12c1.76.68 3 2.38 3 4.38s-1.25 3.7-3 4.38V20h2.12a4.7 4.7 0 0 1 4.38-3c.97 0 1.87.3 2.62.81a5.96 5.96 0 0 0 .69 4.19zm4.8-7v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiPuzzlePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleRemoveIcon],svg[mdi-puzzle-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.04 19.61a2.68 2.68 0 0 0-2.54-1.81c-1.5 0-2.7 1.2-2.7 2.7V22H4a2 2 0 0 1-2-2v-3.8h1.5c1.5 0 2.7-1.2 2.7-2.7S5 10.8 3.5 10.8H2V7c0-1.1.9-2 2-2h4V3.5a2.5 2.5 0 0 1 5 0V5h4a2 2 0 0 1 2 2v4h1.5a2.5 2.5 0 0 1 2.5 2.5c0 .32-.06.62-.17.89A6 6 0 0 0 19 13c-3.31 0-6 2.69-6 6c0 .2 0 .41.04.61m8.08-4.15L19 17.59l-2.12-2.13l-1.41 1.42L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12z"></svg:path>`,
})
export class MdiPuzzleRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleRemoveOutlineIcon],svg[mdi-puzzle-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 22v-.3c0-1.49-1.2-2.7-2.7-2.7s-2.7 1.21-2.7 2.7v.3H4a2 2 0 0 1-2-2v-3.8h.3C3.79 16.2 5 15 5 13.5s-1.21-2.7-2.7-2.7H2V7c0-1.1.9-2 2-2h3.04c.24-1.7 1.7-3 3.46-3s3.22 1.3 3.46 3H17a2 2 0 0 1 2 2v3.04c1.7.24 3 1.7 3 3.46c0 .1 0 .2-.03.29c-.62-.35-1.3-.59-2.04-.71c-.18-.62-.75-1.08-1.43-1.08H17V7h-5V5.5c0-.83-.67-1.5-1.5-1.5S9 4.67 9 5.5V7H4v2.12c1.76.68 3 2.38 3 4.38s-1.25 3.7-3 4.38V20h2.12a4.7 4.7 0 0 1 4.38-3c.97 0 1.87.3 2.62.81a5.96 5.96 0 0 0 .69 4.19zm7.92-6.54L19 17.59l-2.12-2.13l-1.41 1.42L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12z"></svg:path>`,
})
export class MdiPuzzleRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleStarIcon],svg[mdi-puzzle-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 20.09l2.45 1.49l-.65-2.81l2.2-1.88l-2.89-.25L19 14l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81zm4-6.59v.03A5.97 5.97 0 0 0 19 12c-3.31 0-6 2.69-6 6c0 .34.04.67.09 1h-.34a2.68 2.68 0 0 0-2.25-1.2c-1.5 0-2.7 1.2-2.7 2.7V22H4a2 2 0 0 1-2-2v-3.8h1.5c1.5 0 2.7-1.2 2.7-2.7S5 10.8 3.5 10.8H2V7c0-1.1.9-2 2-2h4V3.5a2.5 2.5 0 0 1 5 0V5h4a2 2 0 0 1 2 2v4h1.5a2.5 2.5 0 0 1 2.5 2.5"></svg:path>`,
})
export class MdiPuzzleStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPuzzleStarOutlineIcon],svg[mdi-puzzle-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 22v-.3c0-1.49-1.2-2.7-2.7-2.7s-2.7 1.21-2.7 2.7v.3H4a2 2 0 0 1-2-2v-3.8h.3C3.79 16.2 5 15 5 13.5s-1.21-2.7-2.7-2.7H2V7c0-1.1.9-2 2-2h3.04c.24-1.7 1.7-3 3.46-3s3.22 1.3 3.46 3H17a2 2 0 0 1 2 2v3.04c1.45.21 2.61 1.3 2.91 2.72A5.95 5.95 0 0 0 19 12h-2V7h-5V5.5c0-.83-.67-1.5-1.5-1.5S9 4.67 9 5.5V7H4v2.12c1.76.68 3 2.38 3 4.38s-1.25 3.7-3 4.38V20h2.12a4.7 4.7 0 0 1 4.38-3c.93 0 1.79.28 2.5.74V18c0 1.54.58 2.94 1.54 4zm5.8-1.91l-2.5 1.49l.68-2.81L15 16.89l2.87-.25L19 14l1.11 2.64l2.89.25l-2.2 1.88l.65 2.81z"></svg:path>`,
})
export class MdiPuzzleStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPyramidIcon],svg[mdi-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.85 16.96l-9-14.49a1.003 1.003 0 0 0-1.7 0l-9 14.49c-.31.49-.15 1.22.49 1.47l9 3.5c.11.07.24.07.36.07s.25 0 .36-.07l9-3.5c.64-.25.8-.98.49-1.47M11 6.5v6.82L5.42 15.5zm1 13.43L5.76 17.5L12 15.07l6.24 2.43zm1-6.61V6.5l5.58 9z"></svg:path>`,
})
export class MdiPyramidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPyramidOffIcon],svg[mdi-pyramid-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7.3L9.05 5.85l2.1-3.38a1.003 1.003 0 0 1 1.7 0l9 14.49c.28.44.15 1.04-.35 1.36l-3.09-3.11L13 6.5v3.3l-2-2V6.5zm11.61 14.16l-1.27 1.27l-2.95-2.95l-5.53 2.15c-.11.07-.24.07-.36.07s-.25 0-.36-.07l-9-3.5c-.64-.25-.8-.98-.49-1.47L7.1 9L1.11 3l1.28-1.27zM5.42 15.5L11 13.32v-.43l-2.45-2.45zm10.93 2.74l-2.41-2.41l-1.94-.76l-6.24 2.43L12 19.93z"></svg:path>`,
})
export class MdiPyramidOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQiIcon],svg[mdi-qi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.09 6.56v8.08c0 .08-.09.15-.15.15c-2.32 0-4.19-1.88-4.19-4.19c0-2.32 1.87-4.2 4.19-4.2c.06 0 .15.07.15.16m0 11.3v2.43A2.666 2.666 0 0 0 14.5 23c.16 0 .28-.11.29-.27V4.47a.415.415 0 0 0-.29-.38c-3.58-1.42-7.64.35-9.06 3.94c-1.44 3.6.35 7.66 3.94 9.08c.78.31 1.62.47 2.43.49c.14-.01.26.11.27.27M16.19 5.5v10.22c0 .28 0 .48.27.28c2.96-2.5 3.35-6.91.87-9.87c-.26-.32-.56-.63-.87-.87c-.27-.21-.27 0-.27.27m-1.4-3.1c0-.77.63-1.4 1.4-1.4s1.4.63 1.4 1.4s-.63 1.4-1.4 1.4s-1.4-.63-1.4-1.4"></svg:path>`,
})
export class MdiQiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQqchatIcon],svg[mdi-qqchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.18 13.54c.58-1.38 1.39-2.4 1.99-2.62c-.01-.8.14-1.3.39-1.7c0-.03-.06-.36.16-.77C5.87 4.85 8.21 2 12 2s6.13 2.85 6.28 6.45c.22.41.16.74.16.77c.25.4.4.9.39 1.7c.6.22 1.41 1.24 1.99 2.63c.75 1.76.87 3.45.27 3.75c-.41.2-1.06-.3-1.67-1.18c-.24.98-.84 1.88-1.69 2.59c.9.33 1.48.87 1.48 1.48c0 1-1.58 1.81-3.52 1.81c-1.76 0-3.19-.66-3.48-1.5h-.42c-.29.84-1.72 1.5-3.48 1.5c-1.94 0-3.52-.81-3.52-1.81c0-.61.58-1.15 1.48-1.48c-.85-.71-1.45-1.61-1.69-2.59c-.61.88-1.26 1.38-1.67 1.18c-.6-.3-.48-1.99.27-3.76"></svg:path>`,
})
export class MdiQqchatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQrcodeIcon],svg[mdi-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h2v2H3zm8-6h2v4h-2zm-2 6h4v4h-2v-2H9zm6 0h2v2h2v-2h2v2h-2v2h2v4h-2v2h-2v-2h-4v2h-2v-4h4v-2h2v-2h-2zm4 8v-4h-2v4zM15 3h6v6h-6zm2 2v2h2V5zM3 3h6v6H3zm2 2v2h2V5zM3 15h6v6H3zm2 2v2h2v-2z"></svg:path>`,
})
export class MdiQrcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQrcodeEditIcon],svg[mdi-qrcode-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h2v2H5zM1 1h10v10H1zm2 2v6h6V3zm2 14h2v2H5zm-4-4h10v10H1zm2 2v6h6v-6zm10-2h4v2h2v-2h4v2h-4v2h4v6h-4v-2h-4v2h-2v-2h2v-2h-2zm8 8v-2h-2v2zm-2-4h-2v-2h-2v4h4zm3.7-13.65l-1 1l-2.05-2l1-1c.2-.21.54-.22.77 0l1.28 1.23c.21.2.22.54 0 .77M13 8.94l6.07-6.06l2.05 2.05L15.06 11H13z"></svg:path>`,
})
export class MdiQrcodeEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQrcodeMinusIcon],svg[mdi-qrcode-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h2v2H5zM1 1h10v10H1zm2 2v6h6V3zm2 14h2v2H5zm-4-4h10v10H1zm2 2v6h6v-6zm10-2h4v2h2v-2h4v2h-4v2h4v6h-4v-2h-4v2h-2v-2h2v-2h-2zm8 8v-2h-2v2zm-2-4h-2v-2h-2v4h4zM14 5v2h8V5Z"></svg:path>`,
})
export class MdiQrcodeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQrcodePlusIcon],svg[mdi-qrcode-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h2v2H5zM1 1h10v10H1zm2 2v6h6V3zm2 14h2v2H5zm-4-4h10v10H1zm2 2v6h6v-6zm10-2h4v2h2v-2h4v2h-4v2h4v6h-4v-2h-4v2h-2v-2h2v-2h-2zm8 8v-2h-2v2zm-2-4h-2v-2h-2v4h4zM17 2v3h-3v2h3v3h2V7h3V5h-3V2Z"></svg:path>`,
})
export class MdiQrcodePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQrcodeRemoveIcon],svg[mdi-qrcode-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h2v2H5zM1 1h10v10H1zm2 2v6h6V3zm2 14h2v2H5zm-4-4h10v10H1zm2 2v6h6v-6zm10-2h4v2h2v-2h4v2h-4v2h4v6h-4v-2h-4v2h-2v-2h2v-2h-2zm8 8v-2h-2v2zm-2-4h-2v-2h-2v4h4zM15.17 1.76l-1.41 1.41L16.59 6l-2.83 2.83l1.41 1.41L18 7.41l2.83 2.83l1.41-1.41L19.41 6l2.83-2.83l-1.41-1.41L18 4.59z"></svg:path>`,
})
export class MdiQrcodeRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQrcodeScanIcon],svg[mdi-qrcode-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h6v6H4zm16 0v6h-6V4zm-6 11h2v-2h-2v-2h2v2h2v-2h2v2h-2v2h2v3h-2v2h-2v-2h-3v2h-2v-4h3zm2 0v3h2v-3zM4 20v-6h6v6zM6 6v2h2V6zm10 0v2h2V6zM6 16v2h2v-2zm-2-5h2v2H4zm5 0h4v4h-2v-2H9zm2-5h2v4h-2zM2 2v4H0V2a2 2 0 0 1 2-2h4v2zm20-2a2 2 0 0 1 2 2v4h-2V2h-4V0zM2 18v4h4v2H2a2 2 0 0 1-2-2v-4zm20 4v-4h2v4a2 2 0 0 1-2 2h-4v-2z"></svg:path>`,
})
export class MdiQrcodeScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQuadcopterIcon],svg[mdi-quadcopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 1C8 1 10 3 10 5.5c0 .88-.25 1.7-.69 2.4l.1.1h5.18l.1-.1c-.44-.7-.69-1.52-.69-2.4C14 3 16 1 18.5 1S23 3 23 5.5S21 10 18.5 10c-.88 0-1.7-.25-2.4-.69l-1.1 1.1v3.18l1.1 1.1c.7-.44 1.52-.69 2.4-.69c2.5 0 4.5 2 4.5 4.5S21 23 18.5 23S14 21 14 18.5c0-.88.25-1.7.69-2.4l-.1-.1H9.41l-.1.1c.44.7.69 1.52.69 2.4C10 21 8 23 5.5 23S1 21 1 18.5S3 14 5.5 14c.88 0 1.7.25 2.4.69l1.1-1.1v-3.18l-1.1-1.1c-.7.44-1.52.69-2.4.69C3 10 1 8 1 5.5S3 1 5.5 1m0 2A2.5 2.5 0 0 0 3 5.5A2.5 2.5 0 0 0 5.5 8A2.5 2.5 0 0 0 8 5.5A2.5 2.5 0 0 0 5.5 3m0 13A2.5 2.5 0 0 0 3 18.5A2.5 2.5 0 0 0 5.5 21A2.5 2.5 0 0 0 8 18.5A2.5 2.5 0 0 0 5.5 16m13-13A2.5 2.5 0 0 0 16 5.5A2.5 2.5 0 0 0 18.5 8A2.5 2.5 0 0 0 21 5.5A2.5 2.5 0 0 0 18.5 3m0 13a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M3.91 17.25l1.13.66c.13-.1.29-.16.46-.16a.75.75 0 0 1 .75.75l-.01.1l1.13.65l-.28.5l-1.13-.66c-.13.1-.29.16-.46.16a.75.75 0 0 1-.75-.75l.01-.1l-1.13-.65zm-.28-11l1.13-.65l-.01-.1a.75.75 0 0 1 .75-.75c.17 0 .33.06.46.16l1.13-.66l.28.5l-1.13.65l.01.1a.75.75 0 0 1-.75.75c-.17 0-.33-.06-.46-.16l-1.13.66zm13.28-2l1.13.66c.13-.1.29-.16.46-.16a.75.75 0 0 1 .75.75l-.01.1l1.13.65l-.28.5l-1.13-.66c-.13.1-.29.16-.46.16a.75.75 0 0 1-.75-.75l.01-.1l-1.13-.65zm-.28 15l1.12-.75a.75.75 0 0 1 .75-.75c.17 0 .33.06.46.16l1.13-.66l.28.5l-1.12.75a.75.75 0 0 1-.75.75c-.17 0-.33-.06-.46-.16l-1.13.66z"></svg:path>`,
})
export class MdiQuadcopterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQualityHighIcon],svg[mdi-quality-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 13.5h2v-3h-2M18 14a1 1 0 0 1-1 1h-.75v1.5h-1.5V15H14a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1m-7 5H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11m8-5H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiQualityHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQualityLowIcon],svg[mdi-quality-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 13.5h2v-3h-2M18 14c0 .6-.4 1-1 1h-.75v1.5h-1.5V15H14c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h3c.6 0 1 .4 1 1m1-6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-8 9.5V15H6V9h1.5v4.5z"></svg:path>`,
})
export class MdiQualityLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQualityMediumIcon],svg[mdi-quality-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-9 4c0-.5-.5-1-1-1H6.5c-.5 0-1 .5-1 1v5H7v-4.5h1V14h1.5v-3.5h1V15H12zm2.5-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v1.5h1.25V15h.75a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm.5 1.5h2v3h-2z"></svg:path>`,
})
export class MdiQualityMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQueueFirstInLastOutIcon],svg[mdi-queue-first-in-last-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h12v2H6zm0 4.5h12v2H6zM6 15h12v2H6zm3 4h6l-3 3zM9 2h6l-3 3z"></svg:path>`,
})
export class MdiQueueFirstInLastOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQuickReplyIcon],svg[mdi-quick-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 18l-7-7l7-7v4c8 0 11 11 11 11s-3-5-11-5v4zm-6 0l-7-7l7-7v3l-4 4l4 4v3z" fill="currentColor"></svg:path>`,
})
export class MdiQuickReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQuicktimeIcon],svg[mdi-quicktime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3a9 9 0 0 1 9 9c0 1.76-.5 3.4-1.38 4.79L21 18.17V20a1 1 0 0 1-1 1h-1.82l-1.39-1.38A8.887 8.887 0 0 1 12 21a9 9 0 0 1-9-9a9 9 0 0 1 9-9m0 4a5 5 0 0 0-5 5a5 5 0 0 0 5 5c.65 0 1.26-.12 1.83-.35l-2.88-2.88c-.78-.77-.78-2.05 0-2.83c.78-.78 2.05-.78 2.83 0l2.88 2.88c.22-.56.34-1.18.34-1.82a5 5 0 0 0-5-5z" fill="currentColor"></svg:path>`,
})
export class MdiQuicktimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiQuoraIcon],svg[mdi-quora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.7 18.8c.5-.6.4-1.1.4-1.1h1.5s0 .4-.1.9c-.1.4-.2.7-.3 1c-.2.7-1.2 1.5-1.2 1.5c-1.1.9-2.3.8-2.3.8s-1.4.2-2.5-.5s-2-2.2-2-2.2s-4.4 1.2-7.8-1.7s-3.2-6.4-3.2-6.7c0-.7.4-8.5 8.6-8.8c4.8-.2 7.4 2.8 8.4 5.2c.7 1.7.7 3 .7 3.2s0 1.1-.2 2c-.1.9-.5 1.9-.8 2.4s-.7 1.2-1.2 1.7c-.5.6-1.1 1.1-1.2 1.2c0 0 1 1.2 1.6 1.4c.2 0 1.1.3 1.6-.3m-7-1.5c.1-.1-.3-.6-.5-.9s.1.1-.7-1c-.3-.5-.7-.7-1.3-.8h-.7c-.5 0-.8.1-.9.1c0-.1-.2-.3-.3-.5s-.1-.5-.1-.5c0-.2 1.5-.9 3.2-.9c1.4 0 2.4.8 2.8 1.2c.4.3.5.7.9 1c0 0 .1 0 .1.1c.4.3.9-3 .8-5.2s-.2-3.3-1-4.4c-.7-1-2.2-1.8-3.6-1.8c-.7 0-3 .1-4 1.8c-1.2 2-1 5.6-1 5.6s-.3 3.2 1.4 4.9s3.4 1.4 4.2 1.4z"></svg:path>`,
})
export class MdiQuoraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRabbitIcon],svg[mdi-rabbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.05 21l-2.73-4.74c0-1.73-1.07-2.84-2.37-2.84c-.9 0-1.68.5-2.08 1.24c.33-.19.72-.29 1.13-.29c1.3 0 2.36 1.06 2.36 2.36c0 1.31-1.05 2.38-2.36 2.38h3.3V21H6.79c-.24 0-.49-.09-.67-.28a.95.95 0 0 1 0-1.34l.5-.5c-.34-.15-.62-.38-.9-.62c-.22.5-.72.85-1.3.85a1.425 1.425 0 0 1 0-2.85l.47.08v-1.97a4.73 4.73 0 0 1 4.74-4.74h.02c2.12.01 3.77.84 3.77-.47c0-.93.2-1.3.54-1.82c-.73-.34-1.56-.55-2.43-.55c-.53 0-.95-.42-.95-.95c0-.43.28-.79.67-.91l-.67-.04c-.52 0-.95-.42-.95-.94c0-.53.43-.95.95-.95h.95c2.1 0 3.94 1.15 4.93 2.85l.28-.01c.71 0 1.37.23 1.91.61l.45.38c2.17 1.95 1.9 3.27 1.9 3.28c0 1.28-1.06 2.33-2.35 2.33l-.49-.05v.08c0 1.11-.48 2.1-1.23 2.8L20.24 21zm.11-13.26c-.53 0-.95.42-.95.94c0 .53.42.95.95.95c.52 0 .95-.42.95-.95c0-.52-.43-.94-.95-.94"></svg:path>`,
})
export class MdiRabbitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRabbitVariantIcon],svg[mdi-rabbit-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.84 14.5c-.26-.17-.62-.61-.79-.82C17.24 12 19 8.87 19 5c0-1.95-.74-3-2-3c-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2C5.74 2 5 3.05 5 5c0 3.87 1.76 7 2.95 8.68c-.17.21-.53.65-.79.82c-.5.43-1.66 1.39-1.66 3c0 2.21 1.79 4 4 4c1.55 0 2.5-.56 2.5-.56s.95.56 2.5.56c2.21 0 4-1.79 4-4c0-1.61-1.16-2.57-1.66-3m-7.49-2.3C8.34 10.7 7 8.12 7 5c0-.5.06-.8.12-.97c.94.31 3.24 2.71 3.38 7.64c-.47.12-.84.3-1.15.53m1.15 4.55c-.28 0-.5-.34-.5-.75s.22-.75.5-.75s.5.34.5.75s-.22.75-.5.75M12 19.5c-.55 0-1-.72-1-1s.45-.5 1-.5s1 .22 1 .5s-.45 1-1 1m1.5-2.75c-.28 0-.5-.34-.5-.75s.22-.75.5-.75s.5.34.5.75s-.22.75-.5.75m0-5.08c.14-4.93 2.44-7.33 3.38-7.64c.06.17.12.47.12.97c0 3.12-1.34 5.7-2.35 7.2c-.31-.23-.68-.41-1.15-.53"></svg:path>`,
})
export class MdiRabbitVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRabbitVariantOutlineIcon],svg[mdi-rabbit-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14c-.24-.24-.44-.5-.65-.75C17.5 11.5 19 8.56 19 5c0-1.95-.74-3-2-3c-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2C5.74 2 5 3.05 5 5c0 3.56 1.5 6.5 2.65 8.25c-.21.25-.41.51-.65.75c-.25.25-2 1.39-2 3.5C5 20 7 22 9.5 22c1.5 0 2.5-.5 2.5-.5s1 .5 2.5.5c2.5 0 4.5-2 4.5-4.5c0-2.11-1.75-3.25-2-3.5m-.12-9.97c.06.17.12.47.12.97c0 2.84-1.11 5.24-2.07 6.78c-.38-.28-.83-.48-1.4-.62c.24-4.52 2.44-6.83 3.35-7.13M7 5c0-.5.06-.8.12-.97c.91.3 3.11 2.61 3.38 7.13c-.6.14-1.05.34-1.42.62C8.11 10.24 7 7.84 7 5m7.5 15c-1 0-1.8-.33-2.22-.56c.42-.18.72-.71.72-.94c0-.28-.45-.5-1-.5s-1 .22-1 .5c0 .23.3.76.72.94c-.42.23-1.22.56-2.22.56A2.5 2.5 0 0 1 7 17.5c0-.7.43-1.24 1-1.73c.44-.36.61-.52 1.3-1.37c.76-.95 1.09-1.4 2.7-1.4s1.94.45 2.7 1.4c.69.85.86 1.01 1.3 1.37c.57.49 1 1.03 1 1.73a2.5 2.5 0 0 1-2.5 2.5m-.5-4c0 .41-.22.75-.5.75s-.5-.34-.5-.75s.22-.75.5-.75s.5.34.5.75m-3 0c0 .41-.22.75-.5.75s-.5-.34-.5-.75s.22-.75.5-.75s.5.34.5.75"></svg:path>`,
})
export class MdiRabbitVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRacingHelmetIcon],svg[mdi-racing-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 11.2c-.2 2.4.5 4.4 2 6.2S7.7 20 10.1 20h10c.5 0 1-.2 1.4-.6s.6-.9.6-1.4v-.8c0-.6-.1-1.3-.2-2.2h-8.2c-1 0-1.8-.4-2.5-1.1s-1.1-1.6-1.1-2.5c0-1.6.7-2.7 2.2-3.3L17.1 6c-1.7-1.2-3.7-1.9-6-2c-2.2-.2-4.2.5-6 1.9S2.4 9 2.2 11.2m9.9.2c0 .4.2.8.5 1.1s.7.5 1.1.5h7.8c-.6-2.2-1.5-4-2.8-5.4l-5.6 2.3c-.7.2-1 .7-1 1.5"></svg:path>`,
})
export class MdiRacingHelmetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRacquetballIcon],svg[mdi-racquetball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 16c1.4 0 2.5 1.1 2.5 2.5S19.9 21 18.5 21S16 19.9 16 18.5s1.1-2.5 2.5-2.5m-8-15C3 1 3 3.7 3 9.8c0 3.4 3.4 7.1 6 8.3V23h3v-4.9c2.6-1.2 6-4.9 6-8.3C18 3.6 18 1 10.5 1m4.9 3.2c.3.4.4 1 .5 1.8H15V3.8c.2.1.3.3.4.4m.6 5.6v.2h-1V7h1zM14 14h-3v-3h3zm-7 0v-3h3v3zM5 9.8V7h1v3H5zM7 7h3v3H7zm4-4c1.4 0 2.4.2 3 .3V6h-3zm-1 3H7V3.4c.6-.2 1.6-.4 3-.4zm1 4V7h3v3zM6 3.8V6h-.9c.1-.8.2-1.4.5-1.8zM5.2 11H6v1.7c-.3-.6-.6-1.1-.8-1.7M8 15h2v1.3l-.2-.1C9.2 16 8.6 15.5 8 15m3.2 1.3H11V15h2c-.6.5-1.2 1-1.8 1.3m3.8-3.6V11h.8c-.2.5-.5 1.1-.8 1.7"></svg:path>`,
})
export class MdiRacquetballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadarIcon],svg[mdi-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.07 4.93l-1.41 1.41A8 8 0 0 1 20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12a4 4 0 0 1-4 4a4 4 0 0 1-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.38-1-1.72V2h-1A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-2.76-1.12-5.26-2.93-7.07"></svg:path>`,
})
export class MdiRadarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadiatorIcon],svg[mdi-radiator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.95 3L6.53 5.19L7.95 7.4h-.01l-1.99 3.1l-1.73-.9l1.42-2.21l-1.42-2.2l2-3.1zm6-.11L12.53 5.1l1.42 2.2l-.01.01l-1.99 3.09l-1.73-.9l1.42-2.2l-1.42-2.2l2-3.1zm6.05 0L18.56 5.1L20 7.3v.01l-2 3.09l-1.75-.9l1.42-2.2l-1.42-2.2l2-3.1zM2 22v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8h-2v-2H4v2zm4-8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiRadiatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadiatorDisabledIcon],svg[mdi-radiator-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12H4a2 2 0 0 0-2 2v8h2v-2h16v2h2v-8a2 2 0 0 0-2-2M7 17a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1zm4 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1zm4 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1zm4 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1z"></svg:path>`,
})
export class MdiRadiatorDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadiatorOffIcon],svg[mdi-radiator-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2L2 3.27l2.77 2.77l.87 1.35L4.22 9.6l1.73.9l1.28-2l3.5 3.5H4a2 2 0 0 0-2 2v8h2v-2h14.73L20 21.27V22h2v-1.28zM7 17a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1zm4 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1zm4 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2c0-.21.08-.39.18-.55L15 16.27zm1.25-7.5l1.42-2.2l-1.42-2.2l2-3.1l1.75.89l-1.44 2.21L20 7.3v.01l-2 3.09zM22 14v4.18l-3-3V15a1 1 0 0 0-1-1c-.05 0-.1 0-.15.03L15.82 12H20a2 2 0 0 1 2 2M11.64 7.3l-1.42-2.2l2-3.1l1.73.89l-1.42 2.21l1.42 2.2l-.01.01L12.84 9l-1.4-1.38zM7.5 3.69L6.1 2.28l.12-.19L7.95 3z"></svg:path>`,
})
export class MdiRadiatorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioIcon],svg[mdi-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-.85.53-1.58 1.28-1.87L15.71 1l.76 1.83L8.83 6zm0 2H4v4h12v-2h2v2h2zM7 14a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioAmIcon],svg[mdi-radio-am-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2zm0 2h2v2H5zm8-2a2 2 0 0 0-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiRadioAmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioFmIcon],svg[mdi-radio-fm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v10h2v-4h3v-2H5V9h4V7zm10 0a2 2 0 0 0-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiRadioFmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioHandheldIcon],svg[mdi-radio-handheld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a1 1 0 0 0-1 1v17c0 1.11.89 2 2 2h5c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2h-5V3a1 1 0 0 0-1-1m1 7h5v4h-5z"></svg:path>`,
})
export class MdiRadioHandheldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioOffIcon],svg[mdi-radio-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 4.27l2 2c-.6.34-1 .99-1 1.73v12a2 2 0 0 0 2 2h14.73l2 2L22 22.72L2.28 3zM20 6H8.83l7.64-3.17L15.71 1L6.59 4.76L9.82 8H20v4h-2v-2h-2v2h-2.18L22 20.18V8a2 2 0 0 0-2-2M4 8h.73l4 4H4zm3 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3"></svg:path>`,
})
export class MdiRadioOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioTowerIcon],svg[mdi-radio-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2a2 2 0 0 1-.47 1.29L16.7 22h-2.13L12 14.93L9.43 22H7.3l3.17-8.71A2 2 0 0 1 10 12a2 2 0 0 1 2-2m0-2a4 4 0 0 0-4 4c0 .5.1 1 .28 1.46l-.88 2.4A6.03 6.03 0 0 1 6 12a6 6 0 0 1 6-6a6 6 0 0 1 6 6c0 1.47-.53 2.81-1.4 3.86l-.88-2.4C15.9 13 16 12.5 16 12a4 4 0 0 0-4-4m0-4a8 8 0 0 0-8 8c0 2.36 1 4.5 2.64 5.94l-.72 2A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10c0 3.23-1.54 6.11-3.92 7.94l-.72-2C19 16.5 20 14.36 20 12a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiRadioTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioactiveIcon],svg[mdi-radioactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m2 0h6c0-3.7-2-6.9-5-8.7l-3 5.2c1.2.7 2 2 2 3.5m-4 4c-.7 0-1.4-.2-2-.6c-1.2 2.1-2.6 4.4-3 5.2c1.5.9 3.2 1.3 5 1.3s3.5-.5 5-1.3l-3-5.2c-.6.4-1.3.6-2 .6m-2-7.4C8.8 5.5 7.4 3.1 7 2.3C4 4 2 7.3 2 11h6c0-1.5.8-2.8 2-3.4"></svg:path>`,
})
export class MdiRadioactiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioactiveCircleIcon],svg[mdi-radioactive-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m8 10h-4c0-1.5-.8-2.8-2-3.4l2-3.5c2.4 1.4 4 3.9 4 6.9m-8-2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M8 5.1c.6 1 1.3 2.3 2 3.5c-1.2.7-2 2-2 3.4H4c0-3 1.6-5.5 4-6.9m0 13.8c.6-1 1.3-2.3 2-3.5c.6.3 1.3.6 2 .6s1.4-.2 2-.6l2 3.5c-1.2.7-2.5 1.1-4 1.1s-2.8-.4-4-1.1"></svg:path>`,
})
export class MdiRadioactiveCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioactiveCircleOutlineIcon],svg[mdi-radioactive-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8s-8-3.6-8-8s3.6-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3 15.2l-1.8-3q-.6.3-1.2.3c-.6 0-.9-.1-1.2-.3c-.5.9-1.2 2-1.8 3c.9.5 1.9.8 3 .8s2.1-.3 3-.8m0-10.4l-1.8 3c.7.4 1.3 1.2 1.3 2.2H18c0-2.2-1.2-4.2-3-5.2M12 13c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m-6-1h3.5c0-.9.5-1.7 1.3-2.2c-.5-.9-1.2-2-1.8-3c-1.8 1-3 3-3 5.2"></svg:path>`,
})
export class MdiRadioactiveCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioactiveOffIcon],svg[mdi-radioactive-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-4.9-4.9l1 1.8c-1.5.9-3.2 1.3-5 1.3s-3.5-.5-5-1.3c.4-.8 1.8-3.1 3-5.2c.6.3 1.3.6 2 .6c.3 0 .7 0 1-.1L8.1 10c0 .3-.1.7-.1 1H2c0-2 .6-3.9 1.6-5.5L1.1 3l1.3-1.3l19.7 19.7zM16 11h6c0-3.7-2-6.9-5-8.7l-3 5.2c1.2.7 2 2 2 3.5m-3.8-2l1.8 1.8c-.1-.9-.9-1.7-1.8-1.8M7 2.3l-.9.6L9 5.8c-.9-1.5-1.7-2.9-2-3.5"></svg:path>`,
})
export class MdiRadioactiveOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioboxBlankIcon],svg[mdi-radiobox-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiRadioboxBlankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioboxIndeterminateVariantIcon],svg[mdi-radiobox-indeterminate-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.46 8.46C9.4 7.53 10.67 7 12 7s2.6.53 3.54 1.46l-7.08 7.08A5.04 5.04 0 0 1 7 12c0-1.33.53-2.6 1.46-3.54m-.29-5.7A10.1 10.1 0 0 1 12 2c1.31 0 2.61.26 3.83.76c1.21.5 2.31 1.24 3.24 2.17s1.67 2.03 2.17 3.24c.5 1.22.76 2.52.76 3.83c0 2.65-1.05 5.2-2.93 7.07A9.97 9.97 0 0 1 12 22a10.1 10.1 0 0 1-3.83-.76a10 10 0 0 1-3.24-2.17A9.97 9.97 0 0 1 2 12c0-2.65 1.05-5.2 2.93-7.07c.93-.93 2.03-1.67 3.24-2.17m-1.83 14.9C7.84 19.16 9.88 20 12 20s4.16-.84 5.66-2.34S20 14.12 20 12s-.84-4.16-2.34-5.66A8 8 0 0 0 12 4c-2.12 0-4.16.84-5.66 2.34A8 8 0 0 0 4 12c0 2.12.84 4.16 2.34 5.66"></svg:path>`,
})
export class MdiRadioboxIndeterminateVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadioboxMarkedIcon],svg[mdi-radiobox-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiRadioboxMarkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadiologyBoxIcon],svg[mdi-radiology-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m-1.9 10H13v1h4s-.06 3-1.5 3c-1.35 0-1-1.53-2.5-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c-1.5.47-1.15 2-2.5 2C7.06 17 7 14 7 14h4v-1H6.9c-.05-.31-.06-.65-.1-1H11v-1H6.81c.02-.33.1-.67.19-1h4V9H7.34c.16-.35.31-.69.49-1H11V7c0-.55.45-1 1-1s1 .45 1 1v1h3.17c.18.31.33.65.49 1H13v1h4c.1.33.17.67.19 1H13v1h4.2c-.04.35-.05.69-.1 1"></svg:path>`,
})
export class MdiRadiologyBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadiologyBoxOutlineIcon],svg[mdi-radiology-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm0-2H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m-7 3c.55 0 1 .45 1 1v1h3.17c.18.31.33.65.49 1H13v1h4c.1.33.17.67.19 1H13v1h4.2c-.04.35-.05.69-.1 1H13v1h4s-.06 3-1.5 3c-1.35 0-1-1.53-2.5-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c-1.5.47-1.15 2-2.5 2C7.06 17 7 14 7 14h4v-1H6.9c-.05-.31-.06-.65-.1-1H11v-1H6.81c.02-.33.1-.67.19-1h4V9H7.34c.16-.35.31-.69.49-1H11V7c0-.55.45-1 1-1"></svg:path>`,
})
export class MdiRadiologyBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadiusIcon],svg[mdi-radius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m5 13v-2h-3.28c-.36.62-1.01 1-1.72 1a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.71 0 1.36.38 1.72 1H17V9l3 3z"></svg:path>`,
})
export class MdiRadiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRadiusOutlineIcon],svg[mdi-radius-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m4-5v-2h-2.28c-.36.62-1.01 1-1.72 1a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.71 0 1.36.38 1.72 1H16V9l3 3z"></svg:path>`,
})
export class MdiRadiusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRailroadLightIcon],svg[mdi-railroad-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.67 10.5c-1.27 0-2.4.8-2.82 2h-1.68V7.77l3.49 2.09l1-1.72L14.11 6l3.57-2.14l-1-1.72l-3.51 2.09V2h-2v2.23L7.68 2.14l-1 1.72L10.23 6L6.66 8.14l1 1.72l3.51-2.09v4.73H9.5c-1.14-3.18-5.84-2.37-5.84 1s4.7 4.18 5.84 1h1.67V20a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2v-5.5h1.68c.81 2.3 3.88 2.72 5.28.73s-.03-4.73-2.46-4.73m-11 4c-.89 0-1.34-1.08-.71-1.71s1.71-.18 1.71.71a1 1 0 0 1-1 1m11 0c-.89 0-1.34-1.08-.71-1.71s1.71-.18 1.71.71a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRailroadLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRakeIcon],svg[mdi-rake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17.05L9.43 16L22.07 3.35l-1.41-1.42L8 14.58L6.95 13.5c-.78-.77-2.05-.77-2.83 0L2 15.64l.71.7l2.12-2.12l.71.71l-2.13 2.12l.71.71l2.12-2.12l.71.7l-2.12 2.12l.71.71l2.12-2.12l.7.71l-2.12 2.12l.71.71l2.12-2.13l.71.71l-2.12 2.12l.7.71l2.14-2.12c.77-.78.77-2.05 0-2.83"></svg:path>`,
})
export class MdiRakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRaspberryPiIcon],svg[mdi-raspberry-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h2v2h-2zM4 5h16a2 2 0 0 1 2 2h-3v2H5v4h3v3h11v1h3a2 2 0 0 1-2 2h-4v1h-2v-1h-3v1H7v-1H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m15 10H9v-5h10v1h3v2h-3zm-6-3v2h2v-2zM5 6v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm5 8h2v2h-2z"></svg:path>`,
})
export class MdiRaspberryPiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRawIcon],svg[mdi-raw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 9c.8 0 1.5.7 1.5 1.5v1c0 .6-.4 1.1-.9 1.4L8 15H6.5l-.9-2H4.5v2H3V9zm0 2.5v-1h-2v1zM10.25 9h2.5l1.5 6h-1.5l-.37-1.5h-1.75l-.38 1.5h-1.5zm.75 3h1l-.25-1h-.5zm9-3h1.5L20 15h-1.5l-.76-3.04L17 15h-1.5L14 9h1.5l.74 3L17 9h1.5l.74 3z"></svg:path>`,
})
export class MdiRawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRawOffIcon],svg[mdi-raw-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.15 14.32l-2.43-2.42L14 9h1.5l.74 3L17 9h1.5l.74 3L20 9h1.5L20 15h-1.5l-.76-3.04zM1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41l-9.11-9.11h-.04l-.38 1.5h-1.5l.68-2.74L8 10.83v.67c0 .6-.4 1.1-.9 1.4L8 15H6.5l-.9-2H4.5v2H3V9h3.17zM6.5 11.5v-1h-2v1z"></svg:path>`,
})
export class MdiRawOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRayEndIcon],svg[mdi-ray-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9c-1.31 0-2.42.83-2.83 2H2v2h15.17c.41 1.17 1.52 2 2.83 2a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiRayEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRayEndArrowIcon],svg[mdi-ray-end-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 12l4 4v-3h12.17c.41 1.17 1.52 2 2.83 2a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-1.31 0-2.42.83-2.83 2H5V8z"></svg:path>`,
})
export class MdiRayEndArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRayStartIcon],svg[mdi-ray-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9c1.31 0 2.42.83 2.83 2H22v2H6.83A2.99 2.99 0 0 1 4 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiRayStartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRayStartArrowIcon],svg[mdi-ray-start-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-4 4v-3H6.83A2.99 2.99 0 0 1 4 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H19V8z"></svg:path>`,
})
export class MdiRayStartArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRayStartEndIcon],svg[mdi-ray-start-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9c1.31 0 2.42.83 2.83 2h10.34c.41-1.17 1.52-2 2.83-2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a2.99 2.99 0 0 1-2.83-2H6.83A2.99 2.99 0 0 1 4 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiRayStartEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRayStartVertexEndIcon],svg[mdi-ray-start-vertex-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9c-1.31 0-2.42.83-2.83 2h-2.35C14.4 9.84 13.3 9 12 9s-2.4.84-2.82 2H6.83A2.99 2.99 0 0 0 4 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.31 0 2.42-.83 2.83-2h2.35c.42 1.16 1.52 2 2.82 2s2.4-.84 2.82-2h2.35c.41 1.17 1.52 2 2.83 2c1.66 0 3-1.34 3-3s-1.34-3-3-3"></svg:path>`,
})
export class MdiRayStartVertexEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRayVertexIcon],svg[mdi-ray-vertex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h7.17c.41-1.17 1.52-2 2.83-2s2.42.83 2.83 2H22v2h-7.17A2.99 2.99 0 0 1 12 15a2.99 2.99 0 0 1-2.83-2H2z"></svg:path>`,
})
export class MdiRayVertexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRazorDoubleEdgeIcon],svg[mdi-razor-double-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8c-.55 0-1-.45-1-1s.45-1 1-1V5H4v1c.55 0 1 .45 1 1s-.45 1-1 1H2v7h2c.55 0 1 .45 1 1s-.45 1-1 1v1h16v-1c-.55 0-1-.45-1-1s.45-1 1-1h2V8zm0 4h-1v1h-2v-1h-3.59c-.21.58-.76 1-1.41 1s-1.2-.42-1.41-1H7v1H5v-1H4v-1h1v-1h2v1h3.59c.21-.58.76-1 1.41-1s1.2.42 1.41 1H17v-1h2v1h1z"></svg:path>`,
})
export class MdiRazorDoubleEdgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRazorSingleEdgeIcon],svg[mdi-razor-single-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5v3H2V5zm0 8v5H2v-5h1.5c.83 0 1.5-.67 1.5-1.5S4.33 10 3.5 10H2V9h20v1h-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5zm-9-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1z"></svg:path>`,
})
export class MdiRazorSingleEdgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRdioIcon],svg[mdi-rdio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19.292 10.844c.055.379.084.764.084 1.156c0 4.611-3.894 8.35-8.699 8.35c-4.803 0-8.697-3.739-8.697-8.35s3.894-8.35 8.697-8.35c.943 0 1.85.145 2.7.412l.001 5.046s-2.592-1.419-4.91.247c-2.317 1.663-1.88 3.409-1.88 3.409s.108 2.756 3.378 2.756c3.657 0 4.692-3.329 4.692-3.329V4.58c.706.347 1.361.783 1.991 1.275c1.555.962 3.17 1.581 5.017 1.535c0 0 .354-.076.354.627c0 .381-.136.818-.518 1.23c0 0-.727 1.084-2.21 1.598z" fill="currentColor"></svg:path>`,
})
export class MdiRdioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReactIcon],svg[mdi-react-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9"></svg:path>`,
})
export class MdiReactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReadIcon],svg[mdi-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.59 11.59L23 13l-9.5 9.5l-5.08-5.09L9.83 16l3.67 3.68zM4 16V3h5a4 4 0 0 1 4 4c0 1.54-.87 2.88-2.15 3.55L14 16h-2l-2.89-5H6v5zm2-7h3a2 2 0 0 0 2-2a2 2 0 0 0-2-2H6z"></svg:path>`,
})
export class MdiReadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptIcon],svg[mdi-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2"></svg:path>`,
})
export class MdiReceiptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptClockIcon],svg[mdi-receipt-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.58-1.58c.14.19.3.36.47.53A7.001 7.001 0 0 0 21 11.1V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2zm17.85-6c0 .64-.12 1.27-.35 1.86c-.26.58-.62 1.14-1.07 1.57c-.43.45-.99.81-1.57 1.07c-.59.23-1.22.35-1.86.35c-2.68 0-4.85-2.17-4.85-4.85c0-1.29.51-2.5 1.42-3.43c.93-.91 2.14-1.42 3.43-1.42c2.67 0 4.85 2.17 4.85 4.85m-5.85.69V13h1.5v2.82l2.44 1.41l-.75 1.3z"></svg:path>`,
})
export class MdiReceiptClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptClockOutlineIcon],svg[mdi-receipt-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.58-1.58c.14.19.3.36.47.53A7.001 7.001 0 0 0 21 11.1V2zM19 9.68c-.93-.44-1.95-.68-3-.68c-3.86 0-7 3.13-7 7c0 1.05.24 2.07.68 3H5V5h14zM20.85 16c0 .64-.12 1.27-.35 1.86c-.26.58-.62 1.14-1.07 1.57c-.43.45-.99.81-1.57 1.07c-.59.23-1.22.35-1.86.35c-2.68 0-4.85-2.17-4.85-4.85c0-1.29.51-2.5 1.42-3.43c.93-.91 2.14-1.42 3.43-1.42c2.67 0 4.85 2.17 4.85 4.85m-5.85.69V13h1.5v2.82l2.44 1.41l-.75 1.3z"></svg:path>`,
})
export class MdiReceiptClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptOutlineIcon],svg[mdi-receipt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2zM19 19H5V5h14z"></svg:path>`,
})
export class MdiReceiptOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptSendIcon],svg[mdi-receipt-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 20.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v12.26l-9-4.5V22l-1.5-1.5L9 22l-1.5-1.5L6 22zM14 19l4-1l-4-1v-4l10 5l-10 5z"></svg:path>`,
})
export class MdiReceiptSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptSendOutlineIcon],svg[mdi-receipt-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 2l1.5 1.5L21 2v12.26l-2-1V5H5v14h7v3l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5zm-4 17l4-1l-4-1v-4l10 5l-10 5z"></svg:path>`,
})
export class MdiReceiptSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextIcon],svg[mdi-receipt-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2m15 7H6V7h12m0 6H6v-2h12m0 6H6v-2h12z"></svg:path>`,
})
export class MdiReceiptTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextArrowLeftIcon],svg[mdi-receipt-text-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.26-1.26c-.17-.56-.26-1.15-.26-1.74c0-.68.12-1.36.34-2H6v-2h8.53A6 6 0 0 1 21 13.34V2zM18 13H6v-2h12zm0-4H6V7h12zm0 9v-2l-3 3l3 3v-2h4v-2z"></svg:path>`,
})
export class MdiReceiptTextArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextArrowLeftOutlineIcon],svg[mdi-receipt-text-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l1.26-1.26c-.16-.52-.26-1.08-.26-1.65H5V4.91h14V13c.7 0 1.37.13 2 .35V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5zm1.35-5c.26-.75.65-1.42 1.19-2H6v2zM18 11H6v2h12zm0-4H6v2h12zm0 13v2l-3-3l3-3v2h4v2z"></svg:path>`,
})
export class MdiReceiptTextArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextArrowRightIcon],svg[mdi-receipt-text-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.26-1.26c-.17-.56-.26-1.15-.26-1.74c0-.68.12-1.36.34-2H6v-2h8.53A6 6 0 0 1 21 13.34V2zM18 13H6v-2h12zm0-4H6V7h12zm1 13v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiReceiptTextArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextArrowRightOutlineIcon],svg[mdi-receipt-text-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.26 20.74L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v11.35c-.63-.22-1.3-.35-2-.35V4.91H5v14.18h8c0 .57.1 1.13.26 1.65M14.54 15c-.54.58-.93 1.25-1.19 2H6v-2zM6 11h12v2H6zm0-4h12v2H6zm13 15v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiReceiptTextArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextCheckIcon],svg[mdi-receipt-text-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.25 22l-2.75-3l1.16-1.18l1.59 1.59l3.59-3.59L23 17.23M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.26-1.26c-.17-.56-.26-1.15-.26-1.74c0-.68.12-1.36.34-2H6v-2h8.53A6 6 0 0 1 21 13.34V2zM18 13H6v-2h12zm0-4H6V7h12z"></svg:path>`,
})
export class MdiReceiptTextCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextCheckOutlineIcon],svg[mdi-receipt-text-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.26 20.74L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v11.35c-.63-.22-1.3-.35-2-.35V5H5v14h8c0 .57.1 1.22.26 1.74M6 15v2h7.35c.26-.75.65-1.42 1.19-2zm0-2h12v-2H6zm0-4h12V7H6zm17 8.23l-1.16-1.41l-3.59 3.59l-1.59-1.59L15.5 19l2.75 3"></svg:path>`,
})
export class MdiReceiptTextCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextClockIcon],svg[mdi-receipt-text-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16.69V13h1.5v2.82l2.44 1.41l-.75 1.3zM19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.58-1.58c.14.19.3.36.47.53A7.001 7.001 0 0 0 21 11.1V2zM11.1 11c-.6.57-1.07 1.25-1.43 2H6v-2zm-2.03 4c-.07.33-.07.66-.07 1s0 .67.07 1H6v-2zM18 9H6V7h12zm2.85 7c0 .64-.12 1.27-.35 1.86c-.26.58-.62 1.14-1.07 1.57c-.43.45-.99.81-1.57 1.07c-.59.23-1.22.35-1.86.35c-2.68 0-4.85-2.17-4.85-4.85c0-1.29.51-2.5 1.42-3.43c.93-.91 2.14-1.42 3.43-1.42c2.67 0 4.85 2.17 4.85 4.85"></svg:path>`,
})
export class MdiReceiptTextClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextClockOutlineIcon],svg[mdi-receipt-text-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16.69V13h1.5v2.82l2.44 1.41l-.75 1.3zm-4.42 3.73L9 22l-1.5-1.5L6 22l-1.5-1.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v9.1a7.001 7.001 0 0 1-9.95 9.85a5 5 0 0 1-.47-.53m-.86-1.33c-.32-.66-.54-1.36-.65-2.09H6v-2h3.07c.1-.71.31-1.38.61-2H6v-2h5.1c1.27-1.24 3-2 4.9-2H6V7h12v2h-2c1.05 0 2.07.24 3 .68V4.91H5v14.18zM20.85 16c0-2.68-2.18-4.85-4.85-4.85c-1.29 0-2.5.51-3.43 1.42c-.91.93-1.42 2.14-1.42 3.43c0 2.68 2.17 4.85 4.85 4.85c.64 0 1.27-.12 1.86-.35c.58-.26 1.14-.62 1.57-1.07c.45-.43.81-.99 1.07-1.57c.23-.59.35-1.22.35-1.86"></svg:path>`,
})
export class MdiReceiptTextClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextEditIcon],svg[mdi-receipt-text-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5v-.87L13.13 17H6v-2h9.13l2-2H6v-2h12v1.13l3-3V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2zM6 9V7h12v2zm7 13v-2.04l6.13-6.13l2.04 2.04L15.04 22zm8-9.97a.5.5 0 0 1 .53.12l1.32 1.32c.2.2.2.53 0 .72l-.98.98l-2.04-2.04l.98-.98l.02-.02c.05-.04.11-.08.17-.1"></svg:path>`,
})
export class MdiReceiptTextEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextEditOutlineIcon],svg[mdi-receipt-text-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 2l1.5 1.5L21 2v7.13l-2 2V4.91H5v14.18h5.5v1.41L9 22l-1.5-1.5L6 22l-1.5-1.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5zm-5 17.96l6.13-6.13l2.04 2.04L15.04 22H13zm6.83-6.83l.98-.98l.02-.02c.05-.04.11-.08.17-.1a.5.5 0 0 1 .53.12l1.32 1.32c.2.2.2.53 0 .72l-.98.98zm-1.83-1l-.87.87H6v-2h12zM15.13 15l-2 2H6v-2zM18 9V7H6v2z"></svg:path>`,
})
export class MdiReceiptTextEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextMinusIcon],svg[mdi-receipt-text-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18v2h8v-2zm4.5-14.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.26-1.26c-.17-.56-.26-1.15-.26-1.74c0-.68.12-1.36.34-2H6v-2h8.53A6 6 0 0 1 21 13.34V2zM18 13H6v-2h12zm0-4H6V7h12z"></svg:path>`,
})
export class MdiReceiptTextMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextMinusOutlineIcon],svg[mdi-receipt-text-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18v2h8v-2zm-1.74 2.74L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v11.35c-.63-.22-1.3-.35-2-.35V5H5v14h8c0 .57.1 1.22.26 1.74M14.54 15c-.54.58-.93 1.25-1.19 2H6v-2zM6 11h12v2H6zm0-4h12v2H6z"></svg:path>`,
})
export class MdiReceiptTextMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextOutlineIcon],svg[mdi-receipt-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2zM19 19H5V5h14zM6 15h12v2H6m0-6h12v2H6m0-6h12v2H6z"></svg:path>`,
})
export class MdiReceiptTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextPlusIcon],svg[mdi-receipt-text-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3zm1.5-11.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.26-1.26c-.17-.56-.26-1.15-.26-1.74c0-.68.12-1.36.34-2H6v-2h8.53A6 6 0 0 1 21 13.34V2zM18 13H6v-2h12zm0-4H6V7h12z"></svg:path>`,
})
export class MdiReceiptTextPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextPlusOutlineIcon],svg[mdi-receipt-text-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3zm-4.74 5.74L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v11.35c-.63-.22-1.3-.35-2-.35V5H5v14h8c0 .57.1 1.22.26 1.74M14.54 15c-.54.58-.93 1.25-1.19 2H6v-2zM6 11h12v2H6zm0-4h12v2H6z"></svg:path>`,
})
export class MdiReceiptTextPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextRemoveIcon],svg[mdi-receipt-text-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.12 15.46L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12zM19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.26-1.26c-.17-.56-.26-1.15-.26-1.74c0-.68.12-1.36.34-2H6v-2h8.53A6 6 0 0 1 21 13.34V2zM18 13H6v-2h12zm0-4H6V7h12z"></svg:path>`,
})
export class MdiReceiptTextRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextRemoveOutlineIcon],svg[mdi-receipt-text-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.12 15.46L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12zm-7.86 5.28L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v11.35c-.63-.22-1.3-.35-2-.35V5H5v14h8c0 .57.1 1.22.26 1.74M14.54 15c-.54.58-.93 1.25-1.19 2H6v-2zM6 11h12v2H6zm0-4h12v2H6z"></svg:path>`,
})
export class MdiReceiptTextRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextSendIcon],svg[mdi-receipt-text-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 20.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v12.26l-3-1.5V11H6v2h6v2H6v2h6v5l-1.5-1.5L9 22l-1.5-1.5L6 22zM6 7v2h12V7zm8 6l10 5l-10 5v-4l4-1l-4-1z"></svg:path>`,
})
export class MdiReceiptTextSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextSendOutlineIcon],svg[mdi-receipt-text-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22v-2.91H5V4.91h14v8.35l2 1V2zM14 23v-4l4-1l-4-1v-4l10 5zm-2-12v2H6v-2zm-6 6v-2h6v2zM18 7v2H6V7z"></svg:path>`,
})
export class MdiReceiptTextSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRecordIcon],svg[mdi-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12c0 3.86-3.14 7-7 7s-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7"></svg:path>`,
})
export class MdiRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRecordCircleIcon],svg[mdi-record-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 7a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiRecordCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRecordCircleOutlineIcon],svg[mdi-record-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 5a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiRecordCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRecordPlayerIcon],svg[mdi-record-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V17H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h17v-2H7l-1 1V9a1 1 0 0 1 1-1h12V7h2v1a1 1 0 0 1 1 1v1h-1v2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V17H5zM3 14v1h2v-1zm3 0v1h2v-1zm14.5-.5a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiRecordPlayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRecordRecIcon],svg[mdi-record-rec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 5A7.5 7.5 0 0 0 5 12.5a7.5 7.5 0 0 0 7.5 7.5a7.5 7.5 0 0 0 7.5-7.5A7.5 7.5 0 0 0 12.5 5M7 10h2a1 1 0 0 1 1 1v1c0 .5-.38.9-.86.97L10.31 15H9.15L8 13v2H7m5-5h2v1h-2v1h2v1h-2v1h2v1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m4 0h2v1h-2v3h2v1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m-8 1v1h1v-1"></svg:path>`,
})
export class MdiRecordRecIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRectangleIcon],svg[mdi-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v13h16V6z"></svg:path>`,
})
export class MdiRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRectangleOutlineIcon],svg[mdi-rectangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v13h16V6zm14 11H6V8h12z"></svg:path>`,
})
export class MdiRectangleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRecycleIcon],svg[mdi-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.82 15.42l-2.5 4.33c-.49.86-1.4 1.31-2.32 1.25h-2v2l-2.5-4.5L15 14v2h2.82l-2.22-3.85l4.33-2.5l1.8 3.12c.52.77.59 1.8.09 2.65M9.21 3.06h5c.98 0 1.83.57 2.24 1.39l1 1.74l1.73-1l-2.64 4.41l-5.15.09l1.73-1l-1.41-2.45l-2.21 3.85l-4.34-2.5l1.8-3.12c.41-.83 1.26-1.41 2.25-1.41m-4.16 16.7l-2.5-4.33c-.49-.85-.42-1.87.09-2.64l1-1.73l-1.73-1l5.14.08l2.65 4.42l-1.73-1L6.56 16H11v5H7.4a2.51 2.51 0 0 1-2.35-1.24"></svg:path>`,
})
export class MdiRecycleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRecycleVariantIcon],svg[mdi-recycle-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.17 7.91l1.73 1l3.18-5.49l2.25 3.89l-2.6 1.5l5.46 1.46l1.47-5.46l-2.6 1.5l-2.25-3.9a1.99 1.99 0 0 0-2.73-.73c-.27.15-.5.37-.67.63M10 20v-2H3.66l2.24-3.9l2.6 1.5l-1.46-5.46l-5.47 1.46l2.6 1.5L1.92 17a2.003 2.003 0 0 0 1.62 3m15.52-8.5l-1.74 1L20.5 18H16v-3l-4 4l4 4v-3h4.5c1.11 0 2-.89 2-2c0-.31-.08-.62-.22-.89Z"></svg:path>`,
})
export class MdiRecycleVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRedditIcon],svg[mdi-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 15.41c.08.09.08.28 0 .39c-.73.7-2.09.76-2.5.76c-.39 0-1.75-.06-2.46-.76c-.1-.11-.1-.3 0-.39c.11-.1.28-.1.38 0c.46.46 1.41.59 2.08.59c.69 0 1.66-.13 2.1-.59c.11-.1.28-.1.4 0m-3.75-2.37c0-.57-.47-1.04-1.04-1.04s-1.04.47-1.04 1.04s.47 1.05 1.04 1.04c.57 0 1.04-.47 1.04-1.04M14.29 12c-.57 0-1.04.5-1.04 1.05s.47 1.04 1.04 1.04s1.04-.48 1.04-1.04c0-.55-.47-1.05-1.04-1.05M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-3.33 0c0-.81-.67-1.46-1.45-1.46c-.4 0-.76.16-1.02.41c-1-.72-2.37-1.18-3.9-1.24l.67-3.13l2.17.47c.02.55.48.99 1.04.99c.57 0 1.04-.47 1.04-1.04s-.47-1.04-1.04-1.04c-.41 0-.77.24-.93.59l-2.43-.52c-.07-.03-.14 0-.19.04c-.06.04-.09.1-.1.17l-.74 3.48c-1.55.05-2.95.51-3.97 1.24c-.26-.25-.62-.4-1.01-.4c-.81 0-1.46.65-1.46 1.44c0 .61.36 1.11.86 1.34c-.02.16-.03.28-.03.44c0 2.22 2.61 4.07 5.82 4.07c3.23 0 5.85-1.82 5.85-4.07c0-.14-.01-.28-.04-.44c.5-.23.86-.74.86-1.34"></svg:path>`,
})
export class MdiRedditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRedhatIcon],svg[mdi-redhat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.34 13.16c1.32 0 3.22-.27 3.22-1.84q.015-.18-.03-.36l-.78-3.4c-.18-.75-.34-1.09-1.66-1.75c-1.02-.52-3.24-1.38-3.9-1.38c-.61 0-.79.79-1.52.79c-.7 0-1.22-.59-1.88-.59c-.63 0-1.04.43-1.36 1.31c0 0-.88 2.5-1 2.86c-.01.07-.02.13-.02.2c0 .97 3.82 4.15 8.93 4.15m3.43-1.19c.18.86.18.95.18 1.04c0 1.5-1.66 2.31-3.83 2.31c-4.92 0-9.23-2.88-9.23-4.78c0-.27.06-.53.16-.77c-1.77.08-4.05.4-4.05 2.42c0 3.32 7.84 7.39 14.05 7.39c4.76 0 5.95-2.15 5.95-3.85c0-1.34-1.15-2.86-3.23-3.76"></svg:path>`,
})
export class MdiRedhatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRedoIcon],svg[mdi-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.4 10.6C16.55 9 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8 8 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7z"></svg:path>`,
})
export class MdiRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRedoVariantIcon],svg[mdi-redo-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7A6.5 6.5 0 0 0 4 13.5a6.5 6.5 0 0 0 6.5 6.5H14v-2h-3.5C8 18 6 16 6 13.5S8 9 10.5 9h5.67l-3.08 3.09l1.41 1.41L20 8l-5.5-5.5l-1.42 1.41L16.17 7zM18 18h-2v2h2z"></svg:path>`,
})
export class MdiRedoVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReflectHorizontalIcon],svg[mdi-reflect-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20h-8a1 1 0 0 1-1-1V4.97a1 1 0 0 1 .74-.97c.45-.12.91.08 1.13.47l8.02 14.03c.18.31.18.69 0 1s-.51.5-.89.5M2 20c-.38 0-.71-.19-.89-.5a.99.99 0 0 1 0-1L9.13 4.47c.22-.39.68-.59 1.13-.47a1 1 0 0 1 .74.97V19a1 1 0 0 1-1 1zm7-2V8.74L3.71 18z"></svg:path>`,
})
export class MdiReflectHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReflectVerticalIcon],svg[mdi-reflect-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23H6c-.39 0-.74-.21-.91-.55a1 1 0 0 1 .1-1.05l6.01-8.02c.38-.51 1.22-.51 1.6 0l6.01 8.02c.23.3.27.71.1 1.05s-.52.55-.91.55m0-22c.39 0 .74.21.91.55s.13.75-.1 1.05l-6.01 8.02c-.38.51-1.22.51-1.6 0L5.19 2.6a1 1 0 0 1-.1-1.05C5.26 1.21 5.61 1 6 1zM8 3l4 5.35L16 3z"></svg:path>`,
})
export class MdiReflectVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRefreshIcon],svg[mdi-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"></svg:path>`,
})
export class MdiRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRefreshAutoIcon],svg[mdi-refresh-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.68 6h-1.36L7 16h2l.73-2h4.54l.73 2h2zm-2.38 6.5L12 8l1.7 4.5zm7.1 7.9L19 22h-5v-5l2 2c2.39-1.39 4-4.05 4-7c0-4.41-3.59-8-8-8s-8 3.59-8 8c0 2.95 1.61 5.53 4 6.92v2.24C4.47 19.61 2 16.1 2 12C2 6.5 6.5 2 12 2s10 4.5 10 10c0 3.53-1.83 6.62-4.6 8.4"></svg:path>`,
})
export class MdiRefreshAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRefreshCircleIcon],svg[mdi-refresh-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m6 9h-5l1.81-1.81A3.94 3.94 0 0 0 12 8a4 4 0 1 0 3.86 5h2.05A6 6 0 1 1 12 6a5.9 5.9 0 0 1 4.22 1.78L18 6Z"></svg:path>`,
})
export class MdiRefreshCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRegexIcon],svg[mdi-regex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16.92c-.33.05-.66.08-1 .08s-.67-.03-1-.08v-3.51l-2.5 2.48c-.5-.39-1-.89-1.39-1.39l2.48-2.5H9.08c-.05-.33-.08-.66-.08-1s.03-.67.08-1h3.51l-2.48-2.5c.19-.25.39-.5.65-.74c.24-.26.49-.46.74-.65L14 8.59V5.08c.33-.05.66-.08 1-.08s.67.03 1 .08v3.51l2.5-2.48c.5.39 1 .89 1.39 1.39L17.41 10h3.51c.05.33.08.66.08 1s-.03.67-.08 1h-3.51l2.48 2.5c-.19.25-.39.5-.65.74c-.24.26-.49.46-.74.65L16 13.41zM5 19a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"></svg:path>`,
})
export class MdiRegexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRegisteredTrademarkIcon],svg[mdi-registered-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m.25-6.73h-1.44v3.23H9V7.71h3.26q1.545 0 2.4.69c.56.47.84 1.1.84 1.96q0 .9-.39 1.5c-.26.4-.65.72-1.18.95l1.9 3.59v.1h-1.94zm-1.44-1.46h1.46c.45 0 .8-.12 1.05-.35s.37-.55.37-.96s-.11-.73-.35-.97c-.23-.24-.59-.35-1.08-.35h-1.45z"></svg:path>`,
})
export class MdiRegisteredTrademarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReiterateIcon],svg[mdi-reiterate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 4A6.5 6.5 0 0 0 4 10H1l4 4l4-4H6.03a4.5 4.5 0 0 1 4.47-4a4.5 4.5 0 0 1 4.5 4.5a4.5 4.5 0 0 1-4.5 4.5H2v2h8.5a6.5 6.5 0 0 0 6.5-6.5A6.5 6.5 0 0 0 10.5 4m8.5 8v3h-2.5a7.5 7.5 0 0 1-2.26 2H19v3l4-4Z"></svg:path>`,
})
export class MdiReiterateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationManyToManyIcon],svg[mdi-relation-many-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v6h-1l-2-2h-8V9H5l-2 2H2V5h1l2 2h8v8h6l2-2Z"></svg:path>`,
})
export class MdiRelationManyToManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationManyToOneIcon],svg[mdi-relation-many-to-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2h-3v2h-2v-2h-6V9H5l-2 2H2V5h1l2 2h8v8h4v-2h2v2Z"></svg:path>`,
})
export class MdiRelationManyToOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationManyToOneOrManyIcon],svg[mdi-relation-many-to-one-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v6h-1l-2-2v2h-2v-2h-6V9H5l-2 2H2V5h1l2 2h8v8h4v-2h2v2l2-2Z"></svg:path>`,
})
export class MdiRelationManyToOneOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationManyToOnlyOneIcon],svg[mdi-relation-many-to-only-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2h-1v2h-2v-2h-1v2h-2v-2h-5V9H5l-2 2H2V5h1l2 2h8v8h3v-2h2v2h1v-2h2v2Z"></svg:path>`,
})
export class MdiRelationManyToOnlyOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationManyToZeroOrManyIcon],svg[mdi-relation-many-to-zero-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 13l-2 2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H5L3 5H2v6h1l2-2h6v8h3.21a2.5 2.5 0 0 0 4.58 0H19l2 2h1v-6m-5.5 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationManyToZeroOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationManyToZeroOrOneIcon],svg[mdi-relation-many-to-zero-or-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-2h-2v2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H5L3 5H2v6h1l2-2h6v8h3.21a2.5 2.5 0 0 0 4.58 0H19v2h2v-2h1v-2m-5.5 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationManyToZeroOrOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneOrManyToManyIcon],svg[mdi-relation-one-or-many-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v6h-1l-2-2h-8V9H7v2H5V9l-2 2H2V5h1l2 2V5h2v2h6v8h6l2-2Z"></svg:path>`,
})
export class MdiRelationOneOrManyToManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneOrManyToOneIcon],svg[mdi-relation-one-or-many-to-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2h-3v2h-2v-2h-6V9H7v2H5V9l-2 2H2V5h1l2 2V5h2v2h6v8h4v-2h2v2Z"></svg:path>`,
})
export class MdiRelationOneOrManyToOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneOrManyToOneOrManyIcon],svg[mdi-relation-one-or-many-to-one-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v6h-1l-2-2v2h-2v-2h-6V9H7v2H5V9l-2 2H2V5h1l2 2V5h2v2h6v8h4v-2h2v2l2-2Z"></svg:path>`,
})
export class MdiRelationOneOrManyToOneOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneOrManyToOnlyOneIcon],svg[mdi-relation-one-or-many-to-only-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2h-1v2h-2v-2h-1v2h-2v-2h-5V9H7v2H5V9l-2 2H2V5h1l2 2V5h2v2h6v8h3v-2h2v2h1v-2h2v2Z"></svg:path>`,
})
export class MdiRelationOneOrManyToOnlyOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneOrManyToZeroOrManyIcon],svg[mdi-relation-one-or-many-to-zero-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 13l-2 2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H7V5H5v2L3 5H2v6h1l2-2v2h2V9h4v8h3.21a2.5 2.5 0 0 0 4.58 0H19l2 2h1v-6m-5.5 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationOneOrManyToZeroOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneOrManyToZeroOrOneIcon],svg[mdi-relation-one-or-many-to-zero-or-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-2h-2v2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H7V5H5v2L3 5H2v6h1l2-2v2h2V9h4v8h3.21a2.5 2.5 0 0 0 4.58 0H19v2h2v-2h1v-2m-5.5 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationOneOrManyToZeroOrOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneToManyIcon],svg[mdi-relation-one-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v6h-1l-2-2h-8V9H7v2H5V9H2V7h3V5h2v2h6v8h6l2-2Z"></svg:path>`,
})
export class MdiRelationOneToManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneToOneIcon],svg[mdi-relation-one-to-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2h-3v2h-2v-2h-6V9H7v2H5V9H2V7h3V5h2v2h6v8h4v-2h2v2Z"></svg:path>`,
})
export class MdiRelationOneToOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneToOneOrManyIcon],svg[mdi-relation-one-to-one-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v6h-1l-2-2v2h-2v-2h-6V9H7v2H5V9H2V7h3V5h2v2h6v8h4v-2h2v2l2-2Z"></svg:path>`,
})
export class MdiRelationOneToOneOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneToOnlyOneIcon],svg[mdi-relation-one-to-only-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2h-1v2h-2v-2h-1v2h-2v-2h-5V9H7v2H5V9H2V7h3V5h2v2h6v8h3v-2h2v2h1v-2h2v2Z"></svg:path>`,
})
export class MdiRelationOneToOnlyOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneToZeroOrManyIcon],svg[mdi-relation-one-to-zero-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 13l-2 2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H7V5H5v2H2v2h3v2h2V9h4v8h3.21a2.5 2.5 0 0 0 4.58 0H19l2 2h1v-6m-5.5 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationOneToZeroOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneToZeroOrOneIcon],svg[mdi-relation-one-to-zero-or-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-2h-2v2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H7V5H5v2H2v2h3v2h2V9h4v8h3.21a2.5 2.5 0 0 0 4.58 0H19v2h2v-2h1v-2m-5.5 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationOneToZeroOrOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOnlyOneToManyIcon],svg[mdi-relation-only-one-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v6h-1l-2-2h-8V9H8v2H6V9H5v2H3V9H2V7h1V5h2v2h1V5h2v2h5v8h6l2-2Z"></svg:path>`,
})
export class MdiRelationOnlyOneToManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOnlyOneToOneIcon],svg[mdi-relation-only-one-to-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2h-3v2h-2v-2h-6V9H8v2H6V9H5v2H3V9H2V7h1V5h2v2h1V5h2v2h5v8h4v-2h2v2Z"></svg:path>`,
})
export class MdiRelationOnlyOneToOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOnlyOneToOneOrManyIcon],svg[mdi-relation-only-one-to-one-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v6h-1l-2-2v2h-2v-2h-6V9H8v2H6V9H5v2H3V9H2V7h1V5h2v2h1V5h2v2h5v8h4v-2h2v2l2-2Z"></svg:path>`,
})
export class MdiRelationOnlyOneToOneOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOnlyOneToOnlyOneIcon],svg[mdi-relation-only-one-to-only-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2h-1v2h-2v-2h-1v2h-2v-2h-5V9H8v2H6V9H5v2H3V9H2V7h1V5h2v2h1V5h2v2h5v8h3v-2h2v2h1v-2h2v2Z"></svg:path>`,
})
export class MdiRelationOnlyOneToOnlyOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOnlyOneToZeroOrManyIcon],svg[mdi-relation-only-one-to-zero-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 13l-2 2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H8V5H6v2H5V5H3v2H2v2h1v2h2V9h1v2h2V9h3v8h3.21a2.5 2.5 0 0 0 4.58 0H19l2 2h1v-6m-5.5 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationOnlyOneToZeroOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOnlyOneToZeroOrOneIcon],svg[mdi-relation-only-one-to-zero-or-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-2h-2v2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H8V5H6v2H5V5H3v2H2v2h1v2h2V9h1v2h2V9h3v8h3.21a2.5 2.5 0 0 0 4.58 0H19v2h2v-2h1v-2m-5.5 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationOnlyOneToZeroOrOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrManyToManyIcon],svg[mdi-relation-zero-or-many-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 13l-2 2h-6V7H9.79a2.5 2.5 0 0 0-4.58 0H5L3 5H2v6h1l2-2h.21a2.5 2.5 0 0 0 4.58 0H11v8h8l2 2h1v-6M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrManyToManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrManyToOneIcon],svg[mdi-relation-zero-or-many-to-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15v-2h-2v2h-4V7H9.79a2.5 2.5 0 0 0-4.58 0H5L3 5H2v6h1l2-2h.21a2.5 2.5 0 0 0 4.58 0H11v8h6v2h2v-2h3v-2M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrManyToOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrManyToOneOrManyIcon],svg[mdi-relation-zero-or-many-to-one-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 13l-2 2v-2h-2v2h-4V7H9.79a2.5 2.5 0 0 0-4.58 0H5L3 5H2v6h1l2-2h.21a2.5 2.5 0 0 0 4.58 0H11v8h6v2h2v-2l2 2h1v-6M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrManyToOneOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrManyToOnlyOneIcon],svg[mdi-relation-zero-or-many-to-only-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-2h-2v2h-1v-2h-2v2h-3V7H9.79a2.5 2.5 0 0 0-4.58 0H5L3 5H2v6h1l2-2h.21a2.5 2.5 0 0 0 4.58 0H11v8h5v2h2v-2h1v2h2v-2h1v-2M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrManyToOnlyOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrManyToZeroOrManyIcon],svg[mdi-relation-zero-or-many-to-zero-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 13l-2 2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H9.79a2.5 2.5 0 0 0-4.58 0H5L3 5H2v6h1l2-2h.21a2.5 2.5 0 0 0 4.58 0H11v8h3.21a2.5 2.5 0 0 0 4.58 0H19l2 2h1v-6M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1m9 8a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrManyToZeroOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrManyToZeroOrOneIcon],svg[mdi-relation-zero-or-many-to-zero-or-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-2h-2v2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H9.79a2.5 2.5 0 0 0-4.58 0H5L3 5H2v6h1l2-2h.21a2.5 2.5 0 0 0 4.58 0H11v8h3.21a2.5 2.5 0 0 0 4.58 0H19v2h2v-2h1v-2M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1m9 8a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrManyToZeroOrOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrOneToManyIcon],svg[mdi-relation-zero-or-one-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 13l-2 2h-6V7H9.79a2.5 2.5 0 0 0-4.58 0H5V5H3v2H2v2h1v2h2V9h.21a2.5 2.5 0 0 0 4.58 0H11v8h8l2 2h1v-6M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrOneToManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrOneToOneIcon],svg[mdi-relation-zero-or-one-to-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15v-2h-2v2h-4V7H9.79a2.5 2.5 0 0 0-4.58 0H5V5H3v2H2v2h1v2h2V9h.21a2.5 2.5 0 0 0 4.58 0H11v8h6v2h2v-2h3v-2M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrOneToOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrOneToOneOrManyIcon],svg[mdi-relation-zero-or-one-to-one-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 13l-2 2v-2h-2v2h-4V7H9.79a2.5 2.5 0 0 0-4.58 0H5V5H3v2H2v2h1v2h2V9h.21a2.5 2.5 0 0 0 4.58 0H11v8h6v2h2v-2l2 2h1v-6M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrOneToOneOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrOneToOnlyOneIcon],svg[mdi-relation-zero-or-one-to-only-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-2h-2v2h-1v-2h-2v2h-3V7H9.79a2.5 2.5 0 0 0-4.58 0H5V5H3v2H2v2h1v2h2V9h.21a2.5 2.5 0 0 0 4.58 0H11v8h5v2h2v-2h1v2h2v-2h1v-2M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrOneToOnlyOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrOneToZeroOrManyIcon],svg[mdi-relation-zero-or-one-to-zero-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 13l-2 2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H9.79a2.5 2.5 0 0 0-4.58 0H5V5H3v2H2v2h1v2h2V9h.21a2.5 2.5 0 0 0 4.58 0H11v8h3.21a2.5 2.5 0 0 0 4.58 0H19l2 2h1v-6M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1m9 8a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrOneToZeroOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrOneToZeroOrOneIcon],svg[mdi-relation-zero-or-one-to-zero-or-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-2h-2v2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H9.79a2.5 2.5 0 0 0-4.58 0H5V5H3v2H2v2h1v2h2V9h.21a2.5 2.5 0 0 0 4.58 0H11v8h3.21a2.5 2.5 0 0 0 4.58 0H19v2h2v-2h1v-2M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1m9 8a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrOneToZeroOrOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRelativeScaleIcon],svg[mdi-relative-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V6h16m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-8 6h-2v2h2m-4-2H6v2h2m8 2h-2v2h2m0-6h-2v2h2z"></svg:path>`,
})
export class MdiRelativeScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReloadIcon],svg[mdi-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.7 6.7 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95S18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0"></svg:path>`,
})
export class MdiReloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReloadAlertIcon],svg[mdi-reload-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5 4 9 9 9c2.4 0 4.7-.9 6.4-2.6l-1.5-1.5c-1.3 1.4-3 2.1-4.9 2.1c-6.2 0-9.4-7.5-4.9-11.9S18 5.8 18 12h-3l4 4h.1l3.9-4h-3c0-5-4-9-9-9s-9 4-9 9m8 3h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiReloadAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReminderIcon],svg[mdi-reminder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 3c.65 0 1.25.21 1.75.56V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.57c.5-.35 1.1-.57 1.75-.57a3 3 0 0 1 3 3c0 1.58-1.21 2.87-2.75 3h-2v1h1.24l.48.13l4.59 2.29c.82.31 1.22.92 1.22 1.83l-.03.14v.14l-1 6.75c-.06.47-.28.88-.66 1.22c-.37.34-.79.5-1.26.5H10c-.55 0-1-.19-1.42-.59L2 15.84l1.05-1.07c.28-.27.64-.43 1.08-.43h.32l4.55.99V9H7a3.02 3.02 0 0 1-2.75-3a3 3 0 0 1 3-3M9 6a1.75 1.75 0 0 0-1.75-1.75A1.75 1.75 0 0 0 5.5 6c0 .88.65 1.61 1.5 1.73v.02h2zm6 1.75v-.01c.85-.12 1.5-.85 1.5-1.74c0-.96-.78-1.74-1.75-1.74S13 5.04 13 6v1.75z"></svg:path>`,
})
export class MdiReminderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRemoteIcon],svg[mdi-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41A8.95 8.95 0 0 1 12 2c2.5 0 4.74 1 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0M7.05 6.05l1.41 1.41a5.02 5.02 0 0 1 7.08 0l1.41-1.41A6.98 6.98 0 0 0 12 4c-1.93 0-3.68.78-4.95 2.05M12 15a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m3-6H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiRemoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRemoteDesktopIcon],svg[mdi-remote-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M3 4h18v12H3M15 5l-3.5 3.5L15 12l1.4-1.4l-2.1-2.1l2.1-2.1M9 8L7.6 9.4l2.1 2.1l-2.1 2.1L9 15l3.5-3.5"></svg:path>`,
})
export class MdiRemoteDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRemoteOffIcon],svg[mdi-remote-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L21 21.72L19.73 23L16 19.27V22a1 1 0 0 1-1 1H9c-.54 0-1-.45-1-1V11.27zM12 0c3.05 0 5.8 1.23 7.77 3.23l-1.41 1.41C16.75 3 14.5 2 12 2c-2.28 0-4.36.85-5.94 2.24L4.64 2.82C6.59 1.07 9.17 0 12 0m0 4c1.94 0 3.69.78 4.95 2.05l-1.4 1.41C14.64 6.56 13.39 6 12 6c-1.17 0-2.24.4-3.1 1.08L7.5 5.66A6.85 6.85 0 0 1 12 4m3 5c.56 0 1 .45 1 1v4.18l-2.5-2.49l-.19-.19L10.82 9zm-4.97 4.3c.13.86.81 1.55 1.68 1.7z"></svg:path>`,
})
export class MdiRemoteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRemoteTvIcon],svg[mdi-remote-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h6c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2h-2v2h-2V2zm2 4h2v2h2v2h-2v2h-2v-2H9V8h2zm-2 8h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiRemoteTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRemoteTvOffIcon],svg[mdi-remote-tv-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22L17 20.25c-.14.99-1 1.75-2 1.75H9a2 2 0 0 1-2-2v-9.73zM9 2h2v2h2V2h2a2 2 0 0 1 2 2v11.18l-4-4V10h2V8h-2V6h-2v2H9.82L7 5.18V4a2 2 0 0 1 2-2m0 18h2v-2H9zm4 0h2v-1.73l-.27-.27H13zm-4-6v2h2v-1.73l-.27-.27z"></svg:path>`,
})
export class MdiRemoteTvOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRenameIcon],svg[mdi-rename-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 16l-4 4h10v-4zm-2.94-8.81L3 16.25V20h3.75l9.06-9.06zm6.65.85c.39-.39.39-1.04 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"></svg:path>`,
})
export class MdiRenameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRenameBoxIcon],svg[mdi-rename-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17h-7.5l2-2H18M6 17v-2.5l7.88-7.85c.19-.2.51-.2.71 0l1.76 1.76c.2.2.2.51 0 .71L8.47 17M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiRenameBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRenameBoxOutlineIcon],svg[mdi-rename-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17h-5.5l2-2H17M7 17v-2.5l7.9-7.8c.2-.2.5-.2.7 0l1.8 1.8c.2.2.2.5 0 .7L9.5 17M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class MdiRenameBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRenameOutlineIcon],svg[mdi-rename-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 16l-4 4h10v-4zm-2.94-8.81L3 16.25V20h3.75l9.06-9.06zM5.92 18H5v-.92L12.06 10l.94.94zm12.79-9.96c.39-.39.39-1.04 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"></svg:path>`,
})
export class MdiRenameOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReorderHorizontalIcon],svg[mdi-reorder-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h18v-2H3zm0 4h18v-2H3zm0-8h18V9H3zm0-6v2h18V5z"></svg:path>`,
})
export class MdiReorderHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReorderVerticalIcon],svg[mdi-reorder-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v18h2V3zM5 3v18h2V3zm8 0v18h2V3zm6 0h-2v18h2z"></svg:path>`,
})
export class MdiReorderVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRepeatIcon],svg[mdi-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17H7v-3l-4 4l4 4v-3h12v-6h-2M7 7h10v3l4-4l-4-4v3H5v6h2z"></svg:path>`,
})
export class MdiRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRepeatOffIcon],svg[mdi-repeat-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3-3H7v3l-4-4l4-4v3h6.73L7 10.27V11H5V8.27zM17 13h2v4.18l-2-2zm0-8V2l4 4l-4 4V7H8.82l-2-2z"></svg:path>`,
})
export class MdiRepeatOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRepeatOnceIcon],svg[mdi-repeat-once-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15V9h-1l-2 1v1h1.5v4m5.5 2H7v-3l-4 4l4 4v-3h12v-6h-2M7 7h10v3l4-4l-4-4v3H5v6h2z"></svg:path>`,
})
export class MdiRepeatOnceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRepeatVariantIcon],svg[mdi-repeat-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.75L10.25 10H7v6h6.5l2 2H7a2 2 0 0 1-2-2v-6H1.75zm12 12.5L13.75 14H17V8h-6.5l-2-2H17a2 2 0 0 1 2 2v6h3.25z"></svg:path>`,
})
export class MdiRepeatVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReplayIcon],svg[mdi-replay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5V1L7 6l5 5V7a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6H4a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiReplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReplyIcon],svg[mdi-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9V5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11"></svg:path>`,
})
export class MdiReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReplyAllIcon],svg[mdi-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9V5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11M7 8V5l-7 7l7 7v-3l-4-4z"></svg:path>`,
})
export class MdiReplyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReplyAllOutlineIcon],svg[mdi-reply-all-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9.8v.9l1.7.2c2.6.4 4.5 1.4 5.9 2.7c-1.7-.5-3.5-.8-5.6-.8h-2v1.3L8.8 12zM13 5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11M7 8V5l-7 7l7 7v-3l-4-4"></svg:path>`,
})
export class MdiReplyAllOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReplyCircleIcon],svg[mdi-reply-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2S2 6.5 2 12m3-1l5-5v3c5.06.73 7.28 4.33 8 8c-1.81-2.57-4.39-4-8-4v3z"></svg:path>`,
})
export class MdiReplyCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReplyOutlineIcon],svg[mdi-reply-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9.8v.9l1.7.3c2.6.4 4.5 1.4 5.9 2.7c-1.7-.5-3.5-.8-5.6-.8H8v1.3L5.8 12zM10 5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11"></svg:path>`,
})
export class MdiReplyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiReproductionIcon],svg[mdi-reproduction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.72 13.15l.9-.89c-.02-1.26.69-2.82 2-4.12c1.95-1.96 4.49-2.59 5.66-1.42s.54 3.71-1.42 5.66c-1.3 1.31-2.86 2.02-4.12 2l-.89.9c-.35.33-.85.38-1.25.13c-.84.3-1.6.67-2.04 1.39c-.53.88-.53 2.3-1.09 3.15c-.56.86-1.68 1.15-2.86 1.15S5 21 3.95 19.5l2.48.42c.57.08 2.07-.53 2.62-1.38c.56-.86.56-2.27 1.09-3.16c.47-.78 1.36-1.15 2.29-1.47c-.01-.27.07-.55.29-.76M7 2a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiReproductionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiResistorIcon],svg[mdi-resistor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h5l3.07 4.35L13.11 4L18 11h4v2h-5l-3.07-4.35L10.89 20L6 13H2z"></svg:path>`,
})
export class MdiResistorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiResistorNodesIcon],svg[mdi-resistor-nodes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h1.67c.41-1.17 1.52-2 2.83-2a3 3 0 0 1 3 3c0 .65-.21 1.25-.56 1.74l1.13 1.61L13.11 4l1.5 2.13l2.09 2.98l.8-.11c1.31 0 2.42.83 2.83 2H22v2h-1.67a2.99 2.99 0 0 1-2.83 2a3 3 0 0 1-3-3c0-.65.21-1.25.56-1.74l-1.13-1.61L10.89 20L7.3 14.89A2.99 2.99 0 0 1 3.67 13H2zm15.5-.5A1.5 1.5 0 0 0 16 12a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 19 12a1.5 1.5 0 0 0-1.5-1.5m-11 0A1.5 1.5 0 0 0 5 12a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 8 12a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiResistorNodesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiResizeIcon],svg[mdi-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.59 12l4-4H11V6h7v7h-2V9.41l-4 4V16h8V4H8v8zM22 2v16H12v4H2V12h4V2zM10 14H4v6h6z"></svg:path>`,
})
export class MdiResizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiResizeBottomRightIcon],svg[mdi-resize-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-2v-2h2zm0-4h-2v-2h2zm-4 4h-2v-2h2zm0-4h-2v-2h2zm-4 4h-2v-2h2zm8-8h-2v-2h2z"></svg:path>`,
})
export class MdiResizeBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiResponsiveIcon],svg[mdi-responsive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6zM0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1zm-2-8v7h5v-7z"></svg:path>`,
})
export class MdiResponsiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRestartIcon],svg[mdi-restart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c2.1 0 4.1.8 5.6 2.3c3.1 3.1 3.1 8.2 0 11.3c-1.8 1.9-4.3 2.6-6.7 2.3l.5-2c1.7.2 3.5-.4 4.8-1.7c2.3-2.3 2.3-6.1 0-8.5C15.1 6.6 13.5 6 12 6v4.6l-5-5l5-5zM6.3 17.6C3.7 15 3.3 11 5.1 7.9l1.5 1.5c-1.1 2.2-.7 5 1.2 6.8q.75.75 1.8 1.2l-.6 2q-1.5-.6-2.7-1.8"></svg:path>`,
})
export class MdiRestartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRestartAlertIcon],svg[mdi-restart-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4.03V.633L5 5.63l5 5v-4.6c1.5 0 3.11.6 4.21 1.7c2.29 2.4 2.29 6.2 0 8.5c-1.3 1.3-3.1 1.9-4.81 1.7l-.5 2c2.41.3 4.91-.4 6.71-2.3c3.09-3.1 3.09-8.2 0-11.3c-1.5-1.5-3.5-2.3-5.61-2.3m-5.69 13.6c.8.8 1.69 1.4 2.69 1.8l.61-2q-1.05-.45-1.8-1.2c-1.9-1.8-2.31-4.6-1.2-6.8l-1.5-1.5c-1.8 3.1-1.4 7.1 1.2 9.7M20 13h2V7h-2zm0 4h2v-2h-2z"></svg:path>`,
})
export class MdiRestartAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRestartOffIcon],svg[mdi-restart-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-4.2-4.2c-1.7 1.2-3.7 1.7-5.7 1.4l.5-2c1.3.1 2.6-.2 3.7-.9L1.1 3l1.3-1.3l14.1 14.1l1.4 1.4l4.2 4.2zM12 6c1.5 0 3.1.6 4.2 1.8c1.8 1.8 2.2 4.4 1.3 6.6l1.5 1.5c1.7-3 1.2-6.9-1.4-9.5C16.1 4.8 14 4 12 4V.7l-4.1 4L12 8.8zM6.6 9.4L5.1 7.9C3.3 11 3.7 15 6.3 17.7c.8.7 1.7 1.3 2.7 1.7l.5-2q-.9-.45-1.8-1.2c-1.8-1.8-2.2-4.6-1.1-6.8"></svg:path>`,
})
export class MdiRestartOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRestoreIcon],svg[mdi-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.9 8.9 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9"></svg:path>`,
})
export class MdiRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRestoreAlertIcon],svg[mdi-restore-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c-5 0-9 4-9 9H1l3.9 3.9l.1.1l4-4H6c0-3.9 3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7c-1.9 0-3.7-.8-4.9-2.1l-1.4 1.4C8.3 20 10.5 21 13 21c5 0 9-4 9-9s-4-9-9-9m-1 12h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiRestoreAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRewindIcon],svg[mdi-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 12l8.5 6V6m-9 12V6l-8.5 6z"></svg:path>`,
})
export class MdiRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRewind10Icon],svg[mdi-rewind-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 3c4.65 0 8.58 3.03 9.97 7.22L20.1 11c-1.05-3.19-4.06-5.5-7.6-5.5c-1.96 0-3.73.72-5.12 1.88L10 10H3V3l2.6 2.6C7.45 4 9.85 3 12.5 3M10 12v10H8v-8H6v-2zm8 2v6c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-4 0v6h2v-6z"></svg:path>`,
})
export class MdiRewind10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRewind15Icon],svg[mdi-rewind-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 3c4.65 0 8.58 3.03 9.97 7.22L20.1 11c-1.05-3.19-4.06-5.5-7.6-5.5c-1.96 0-3.73.72-5.12 1.88L10 10H3V3l2.6 2.6C7.45 4 9.85 3 12.5 3M10 12v10H8v-8H6v-2zm2 0h6v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2h-4v-2h4v-2h-4z"></svg:path>`,
})
export class MdiRewind15Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRewind30Icon],svg[mdi-rewind-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14v6c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-4 0v6h2v-6zm-4 6a2 2 0 0 1-2 2H5v-2h4v-2H7v-2h2v-2H5v-2h4a2 2 0 0 1 2 2v1.5A1.5 1.5 0 0 1 9.5 17a1.5 1.5 0 0 1 1.5 1.5zm1.5-17c4.65 0 8.58 3.03 9.97 7.22L20.1 11c-1.05-3.19-4.06-5.5-7.6-5.5c-1.96 0-3.73.72-5.12 1.88L10 10H3V3l2.6 2.6C7.45 4 9.85 3 12.5 3"></svg:path>`,
})
export class MdiRewind30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRewind45Icon],svg[mdi-rewind-45-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 3c4.6 0 8.6 3 10 7.2l-2.4.8C19 7.8 16 5.5 12.5 5.5c-2 0-3.7.7-5.1 1.9L10 10H3V3l2.6 2.6C7.4 4 9.9 3 12.5 3m.5 9h6v2h-4v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-4v-2h4v-2h-4zm-8 0v6h4v4h2V12H9v4H7v-4z"></svg:path>`,
})
export class MdiRewind45Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRewind5Icon],svg[mdi-rewind-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 3c4.65 0 8.58 3.03 9.97 7.22L20.1 11c-1.05-3.19-4.06-5.5-7.6-5.5c-1.96 0-3.73.72-5.12 1.88L10 10H3V3l2.6 2.6C7.45 4 9.85 3 12.5 3M9 12h6v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H9v-2h4v-2H9z"></svg:path>`,
})
export class MdiRewind5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRewind60Icon],svg[mdi-rewind-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14v6c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2m-4 0v6h2v-6zM12.5 3c4.6 0 8.6 3 10 7.2l-2.4.8C19 7.8 16 5.5 12.5 5.5c-2 0-3.7.7-5.1 1.9L10 10H3V3l2.6 2.6C7.4 4 9.9 3 12.5 3M7 12c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H7v-2h4v-2zm0 6h2v2H7z"></svg:path>`,
})
export class MdiRewind60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRewindOutlineIcon],svg[mdi-rewind-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.9L7 12l3 2.1zm9 0L16 12l3 2.1zM12 6v12l-8.5-6zm9 0v12l-8.5-6z"></svg:path>`,
})
export class MdiRewindOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRhombusIcon],svg[mdi-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2"></svg:path>`,
})
export class MdiRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRhombusMediumIcon],svg[mdi-rhombus-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.46c-.28 0-.56.1-.78.32l-4.44 4.44c-.43.43-.43 1.13 0 1.56l4.44 4.44c.43.43 1.13.43 1.56 0l4.44-4.44c.43-.43.43-1.13 0-1.56l-4.44-4.44c-.22-.22-.5-.32-.78-.32"></svg:path>`,
})
export class MdiRhombusMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRhombusMediumOutlineIcon],svg[mdi-rhombus-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.46c-.28 0-.56.1-.78.32l-4.44 4.44c-.43.43-.43 1.13 0 1.56l4.44 4.44c.43.43 1.13.43 1.56 0l4.44-4.44c.43-.43.43-1.13 0-1.56l-4.44-4.44c-.22-.22-.5-.32-.78-.32m0 2.37L15.17 12L12 15.17L8.83 12z"></svg:path>`,
})
export class MdiRhombusMediumOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRhombusOutlineIcon],svg[mdi-rhombus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2m0 2l8 8l-8 8l-8-8Z"></svg:path>`,
})
export class MdiRhombusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRhombusSplitIcon],svg[mdi-rhombus-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.5 0-1 .19-1.41.59l-3.3 3.29l4.71 4.7l4.71-4.7l-3.3-3.29C13 2.19 12.5 2 12 2M5.88 7.29l-3.29 3.3c-.79.78-.79 2.04 0 2.82l3.29 3.3l4.7-4.71zm12.24 0L13.42 12l4.7 4.71l3.29-3.3c.79-.78.79-2.04 0-2.82zM12 13.42l-4.71 4.7l3.3 3.29c.78.79 2.04.79 2.82 0l3.3-3.29z"></svg:path>`,
})
export class MdiRhombusSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRhombusSplitOutlineIcon],svg[mdi-rhombus-split-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2m0 2l3.29 3.29l-3.29 3.3l-3.29-3.3zM7.29 8.71l3.3 3.29l-3.3 3.29L4 12zm9.42 0L20 12l-3.29 3.29l-3.3-3.29zM12 13.41l3.29 3.3L12 20l-3.29-3.29z"></svg:path>`,
})
export class MdiRhombusSplitOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRibbonIcon],svg[mdi-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.41 19.31l3.18 3.19L18 21.07l-3.17-3.17m.71-6.37h-.01L12 15.07l-3.53-3.54h-.01A4.98 4.98 0 0 1 7 8a5 5 0 0 1 5-5a5 5 0 0 1 5 5c0 1.38-.56 2.63-1.46 3.53M16.9 13A6.96 6.96 0 0 0 19 8a7 7 0 0 0-7-7a7 7 0 0 0-7 7c0 1.96.81 3.73 2.1 5l3.49 3.5L6 21.07l1.41 1.43z"></svg:path>`,
})
export class MdiRibbonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRiceIcon],svg[mdi-rice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h-2.3c-.3-1.1-.8-2.2-1.5-3l3.4-5.4l-1.7-1.1l-3.2 5.1c-.4-.3-.7-.5-1.2-.7l.9-3.6l-1.9-.5l-.8 3.4c-.6-.1-1.1-.2-1.7-.2c-3.7 0-6.8 2.6-7.7 6H2c0 4.1 2.5 7.6 6 9.2V22h8v-1.8c3.5-1.6 6-5.1 6-9.2M12 7c2.6 0 4.8 1.7 5.6 4H6.4c.8-2.3 3-4 5.6-4"></svg:path>`,
})
export class MdiRiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRickshawIcon],svg[mdi-rickshaw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14.05v-1.32c0-.47-.16-.93-.46-1.29L15.6 6.72c-.38-.46-.94-.72-1.54-.72H4c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h.05a2.5 2.5 0 0 0 4.9 0h8.1A2.5 2.5 0 1 0 20 14.05M3.5 8c0-.27.23-.5.5-.5h3V12H3.5zm3 9.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6.5-2H9V14h2v-2H9V7.5h4zm2-7.16L18.05 12H15zm4.5 9.16c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiRickshawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRickshawElectricIcon],svg[mdi-rickshaw-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12.05v-1.32c0-.47-.16-.93-.46-1.29L15.6 4.72c-.38-.46-.94-.72-1.54-.72H4c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h.05a2.5 2.5 0 0 0 4.9 0h8.1A2.5 2.5 0 1 0 20 12.05M3.5 6c0-.27.23-.5.5-.5h3V10H3.5zm3 9.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6.5-2H9V12h2v-2H9V5.5h4zm2-7.16L18.05 10H15zm4.5 9.16c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M11 20H7l6 3v-2h4l-6-3z"></svg:path>`,
})
export class MdiRickshawElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRingIcon],svg[mdi-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10L8 4.4L9.6 2h4.8L16 4.4zm3.5-3.2l-1.2 1.7c2.2.9 3.7 3 3.7 5.5a6 6 0 0 1-6 6a6 6 0 0 1-6-6c0-2.5 1.5-4.6 3.7-5.5L8.5 6.8C5.8 8.1 4 10.8 4 14a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-3.2-1.8-5.9-4.5-7.2"></svg:path>`,
})
export class MdiRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRivetIcon],svg[mdi-rivet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.43 2c-.82 0-1.49.65-1.49 1.5v3.46H7.95v.99h7.96v-.99h-1.99V3.5c0-.85-.67-1.5-1.49-1.5zm-.49 6.95v12.92l.99 1l.99-1V8.95z"></svg:path>`,
})
export class MdiRivetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRoadIcon],svg[mdi-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16h2v4h-2m0-10h2v4h-2m0-10h2v4h-2M4 22h16V2H4z"></svg:path>`,
})
export class MdiRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRoadVariantIcon],svg[mdi-road-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.1 4.8c-.1-.5-.5-.8-1-.8H13l.2 3h-2.4l.2-3H6.8c-.5 0-.9.4-1 .8l-2.7 14c-.1.6.4 1.2 1 1.2H10l.3-5h3.4l.3 5h5.8c.6 0 1.1-.6 1-1.2zM10.4 13l.2-4h2.6l.2 4z"></svg:path>`,
})
export class MdiRoadVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobberIcon],svg[mdi-robber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.7 12.5c0 .3-1.3.7-2.3.7s-2.1-.7-2.1-.9c0-.3.7-1.2 2.3-1.3c.9-.1 1.9.5 2.1 1.5m4.7-1.5c-1-.1-1.9.5-2.1 1.5c0 .3 1.2.7 2.3.7s2.1-.7 2.1-.9s-.7-1.2-2.3-1.3m6.6 1c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2-.8c0-2-.7-2.7-3.3-2.7S13.3 9.6 12 9.6s-2-1.1-4.7-1.1S4 9.1 4 11.2c0 3.4 1.5 5.3 3.6 5.3c1.6 0 2.8-2 4.4-2s2.7 2 4.4 2c2.1 0 3.6-1.9 3.6-5.3"></svg:path>`,
})
export class MdiRobberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotIcon],svg[mdi-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"></svg:path>`,
})
export class MdiRobotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotAngryIcon],svg[mdi-robot-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M7.5 18A2.5 2.5 0 0 1 5 15.5c0-.82.4-1.54 1-2l3.83 2.88C9.5 17.32 8.57 18 7.5 18m9 0c-1.07 0-2-.68-2.33-1.62L18 13.5c.6.46 1 1.18 1 2a2.5 2.5 0 0 1-2.5 2.5"></svg:path>`,
})
export class MdiRobotAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotAngryOutlineIcon],svg[mdi-robot-angry-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 3h-2v3H5v-3H3v-1h2v-2c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5v2h2zm-3.5-1.5c0 1.11-.89 2-2 2c-.97 0-1.77-.69-1.96-1.6l2.96-2.12c.6.35 1 .98 1 1.72m-10-1.72l2.96 2.12c-.18.91-.99 1.6-1.96 1.6a2 2 0 0 1-2-2c0-.74.4-1.37 1-1.72"></svg:path>`,
})
export class MdiRobotAngryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotConfusedIcon],svg[mdi-robot-confused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4h-2V3h2.5c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5H20v1h-1V5h1zm-1 5h1V8h-1zm-2-6h-1v4h1zm6 12v3c0 .55-.45 1-1 1h-1v1c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-3.87 3.13-7 7-7h1V5.73c-.6-.34-1-.99-1-1.73c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c.34 0 .67.03 1 .08V10h4.74A6.94 6.94 0 0 1 21 14h1c.55 0 1 .45 1 1m-13 .5a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0m9 0a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0M17 8h-1v1h1z"></svg:path>`,
})
export class MdiRobotConfusedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotConfusedOutlineIcon],svg[mdi-robot-confused-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8h1v1h-1zm1-3h-1v2h1V6h.5c.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5H18v1h2zm-3-2h-1v4h1zm-3.5 12.5a2 2 0 1 0 4 0c0-1.11-.89-2-2-2s-2 .9-2 2M17 8h-1v1h1zm5 6h-1c0-1.5-.47-2.87-1.26-4h-2.77c1.22.91 2.03 2.36 2.03 4v2h2v1h-2v3H5v-3H3v-1h2v-2c0-2.76 2.24-5 5-5h4c.34 0 .68.04 1 .1V7.08c-.33-.05-.66-.08-1-.08h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-13.5-.5c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2"></svg:path>`,
})
export class MdiRobotConfusedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotDeadIcon],svg[mdi-robot-dead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M9.86 16.68l-1.18 1.18l-1.18-1.18l-1.18 1.18l-1.18-1.18l1.18-1.18l-1.18-1.18l1.18-1.18l1.18 1.18l1.18-1.18l1.18 1.18l-1.18 1.18zm9 0l-1.18 1.18l-1.18-1.18l-1.18 1.18l-1.18-1.18l1.18-1.18l-1.18-1.18l1.18-1.18l1.18 1.18l1.18-1.18l1.18 1.18l-1.18 1.18z"></svg:path>`,
})
export class MdiRobotDeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotDeadOutlineIcon],svg[mdi-robot-dead-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.62 14.44L9.56 15.5l1.06 1.06l-1.06 1.06l-1.06-1.06l-1.06 1.06l-1.06-1.06l1.06-1.06l-1.06-1.06l1.06-1.06l1.06 1.06l1.06-1.06zm5.94-1.06l-1.06 1.06l-1.06-1.06l-1.06 1.06l1.06 1.06l-1.06 1.06l1.06 1.06l1.06-1.06l1.06 1.06l1.06-1.06l-1.06-1.06l1.06-1.06zM23 15v3c0 .55-.45 1-1 1h-1v1c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-3.87 3.13-7 7-7h1V5.73c-.6-.34-1-.99-1-1.73c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c3.87 0 7 3.13 7 7h1c.55 0 1 .45 1 1m-2 1h-2v-2c0-2.76-2.24-5-5-5h-4c-2.76 0-5 2.24-5 5v2H3v1h2v3h14v-3h2z"></svg:path>`,
})
export class MdiRobotDeadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotExcitedIcon],svg[mdi-robot-excited-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M8.68 17.04L7.5 15.86l-1.18 1.18l-1.18-1.18L7.5 13.5l2.36 2.36zm9 0l-1.18-1.18l-1.18 1.18l-1.18-1.18l2.36-2.36l2.36 2.36z"></svg:path>`,
})
export class MdiRobotExcitedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotExcitedOutlineIcon],svg[mdi-robot-excited-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 3h-2v3H5v-3H3v-1h2v-2c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5v2h2zM8.5 13.5l2.36 2.36l-1.18 1.18l-1.18-1.18l-1.18 1.18l-1.18-1.18zm7 0l2.36 2.36l-1.18 1.18l-1.18-1.18l-1.18 1.18l-1.18-1.18z"></svg:path>`,
})
export class MdiRobotExcitedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotHappyIcon],svg[mdi-robot-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M9.79 16.5C9.4 15.62 8.53 15 7.5 15s-1.9.62-2.29 1.5c-.13-.31-.21-.64-.21-1a2.5 2.5 0 0 1 5 0c0 .36-.08.69-.21 1m9 0c-.39-.88-1.29-1.5-2.29-1.5s-1.9.62-2.29 1.5c-.13-.31-.21-.64-.21-1a2.5 2.5 0 0 1 5 0c0 .36-.08.69-.21 1"></svg:path>`,
})
export class MdiRobotHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotHappyOutlineIcon],svg[mdi-robot-happy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 15.5c0 .37-.1.7-.28 1c-.34-.59-.98-1-1.72-1s-1.38.41-1.72 1c-.17-.3-.28-.63-.28-1c0-1.1.9-2 2-2s2 .9 2 2M23 15v3c0 .55-.45 1-1 1h-1v1c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-3.87 3.13-7 7-7h1V5.73c-.6-.34-1-.99-1-1.73c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c3.87 0 7 3.13 7 7h1c.55 0 1 .45 1 1m-2 1h-2v-2c0-2.76-2.24-5-5-5h-4c-2.76 0-5 2.24-5 5v2H3v1h2v3h14v-3h2zm-5.5-2.5c-1.1 0-2 .9-2 2c0 .37.11.7.28 1c.34-.59.98-1 1.72-1s1.38.41 1.72 1c.18-.3.28-.63.28-1a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiRobotHappyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotIndustrialIcon],svg[mdi-robot-industrial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.41 4L16 6.41v.18L18.41 9H22v2h-4.41L16 9.41V12h-1a2 2 0 0 1-2-2V7.5H9.86c-.09.37-.24.72-.44 1.05L15.18 19H20a2 2 0 0 1 2 2v1H2v-1a2 2 0 0 1 2-2h6.61l-4.69-8.5a4.006 4.006 0 0 1-3.81-3A4 4 0 0 1 5 2.63c2.13-.55 4.31.73 4.86 2.87H13V3a2 2 0 0 1 2-2h1v2.59L17.59 2H22v2zM6 4.5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiRobotIndustrialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotIndustrialOutlineIcon],svg[mdi-robot-industrial-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h4.6L2.62 8.64C2.23 8 2 7.29 2 6.5a3.999 3.999 0 0 1 7.87-1H14V3c0-1.1.9-2 2-2v2.59L17.59 2H22v2h-3.59L16 6.41v.18L18.41 9H22v2h-4.41L16 9.41V12a2 2 0 0 1-2-2V7.5H9.87c-.1.39-.26.76-.46 1.1l6 10.4H20a2 2 0 0 1 2 2v1H2v-1c0-1.1.9-2 2-2m3.91-9c-.56.32-1.21.5-1.91.5l4.91 8.5h2.19zM6 4.5a2 2 0 0 0-2 2c0 1.11.89 2 2 2s2-.89 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiRobotIndustrialOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotLoveIcon],svg[mdi-robot-love-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M9.7 15.45l-.73.73l-1.47 1.47l-2.2-2.2c-.4-.4-.4-1.06 0-1.45c.41-.42 1.06-.42 1.47 0l.73.72l.73-.72c.41-.42 1.06-.42 1.47 0c.4.39.4 1.05 0 1.45m9 0l-.73.73l-1.47 1.47l-2.2-2.2c-.4-.4-.4-1.06 0-1.45c.41-.42 1.06-.42 1.47 0l.73.72l.73-.72c.41-.42 1.06-.42 1.47 0c.4.39.4 1.05 0 1.45"></svg:path>`,
})
export class MdiRobotLoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotLoveOutlineIcon],svg[mdi-robot-love-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 3h-2v3H5v-3H3v-1h2v-2c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5v2h2zm-10.3-3c.4.39.4 1.05 0 1.45l-.73.73l-1.47 1.47l-2.2-2.2c-.4-.4-.4-1.06 0-1.45c.41-.42 1.06-.42 1.47 0l.73.72l.73-.72c.41-.42 1.06-.42 1.47 0m7 0c.4.39.4 1.05 0 1.45l-.73.73l-1.47 1.47l-2.2-2.2c-.4-.4-.4-1.06 0-1.45c.41-.42 1.06-.42 1.47 0l.73.72l.73-.72c.41-.42 1.06-.42 1.47 0"></svg:path>`,
})
export class MdiRobotLoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotMowerIcon],svg[mdi-robot-mower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 14V5h12c5.5 0 10 4.5 10 10v2h-2.17A2.99 2.99 0 0 1 18 19a2.99 2.99 0 0 1-2.83-2H10a5.002 5.002 0 0 1-9-3m5-3c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m9-1v2h5.25c-.33-.73-.75-1.4-1.25-2z"></svg:path>`,
})
export class MdiRobotMowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotMowerOutlineIcon],svg[mdi-robot-mower-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 14a5.002 5.002 0 0 0 9 3h5.17A3 3 0 0 0 18 19c1.31 0 2.42-.83 2.83-2H23v-2c0-5.5-4.5-10-10-10H1zm20 1H10.9A5.002 5.002 0 0 0 3 10V7h9.5c2.6 0 4.92 1.16 6.5 3h-4v2h5.25c.42.92.67 1.94.75 3M6 11c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3"></svg:path>`,
})
export class MdiRobotMowerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotOffIcon],svg[mdi-robot-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 15v3c0 .5-.36.88-.83.97l-3.2-3.2c.03-.09.03-.18.03-.27a2.5 2.5 0 0 0-2.5-2.5c-.09 0-.18 0-.27.03L10.2 7h.8V5.73c-.6-.34-1-.99-1-1.73c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c3.87 0 7 3.13 7 7h1c.55 0 1 .45 1 1m-.89 6.46l-1.27 1.27l-.95-.95c-.27.14-.57.22-.89.22H5a2 2 0 0 1-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-2.47 1.29-4.64 3.22-5.89L1.11 3l1.28-1.27zM10 15.5a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0m6.07 2.46l-2.03-2.03c.19 1.04 1 1.84 2.03 2.03"></svg:path>`,
})
export class MdiRobotOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotOffOutlineIcon],svg[mdi-robot-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 15v3c0 .5-.36.88-.83.97L20.2 17h.8v-1h-1.8l-.2-.2V14c0-2.76-2.24-5-5-5h-1.8l-2-2h.8V5.73c-.6-.34-1-.99-1-1.73c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c3.87 0 7 3.13 7 7h1c.55 0 1 .45 1 1M8.5 13.5c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2m13.61 7.96l-1.27 1.27l-.95-.95c-.27.14-.57.22-.89.22H5a2 2 0 0 1-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-2.47 1.29-4.64 3.22-5.89L1.11 3l1.28-1.27zm-4-1.46l-2.51-2.5h-.1a2 2 0 0 1-2-2v-.1L7.7 9.59C6.1 10.42 5 12.08 5 14v2H3v1h2v3z"></svg:path>`,
})
export class MdiRobotOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotOutlineIcon],svg[mdi-robot-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 15.5c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2m-9-2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2M23 15v3c0 .55-.45 1-1 1h-1v1c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-3.87 3.13-7 7-7h1V5.73c-.6-.34-1-.99-1-1.73c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c3.87 0 7 3.13 7 7h1c.55 0 1 .45 1 1m-2 1h-2v-2c0-2.76-2.24-5-5-5h-4c-2.76 0-5 2.24-5 5v2H3v1h2v3h14v-3h2z"></svg:path>`,
})
export class MdiRobotOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotVacuumIcon],svg[mdi-robot-vacuum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c2.65 0 5.19 1.06 7.07 2.93l-1.42 1.42A8 8 0 0 0 12 4c-2.12 0-4.16.84-5.65 2.35L4.93 4.93C6.81 3.06 9.35 2 12 2M3.66 6.5l1.45 1.44A8.04 8.04 0 0 0 4 12a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-1.43-.39-2.83-1.12-4.06l1.46-1.44A9.93 9.93 0 0 1 22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12c0-1.96.58-3.88 1.66-5.5M12 6a6 6 0 0 1 6 6c0 1.59-.63 3.12-1.76 4.24l-1.41-1.41a4.004 4.004 0 0 1-5.66 0l-1.41 1.41A5.97 5.97 0 0 1 6 12a6 6 0 0 1 6-6m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiRobotVacuumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotVacuumAlertIcon],svg[mdi-robot-vacuum-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2c2.6 0 5.2 1.1 7.1 2.9l-1.4 1.4C14.1 4.8 12.1 4 10 4s-4.2.8-5.7 2.3L2.9 4.9C4.8 3.1 7.4 2 10 2M1.7 6.5l1.5 1.4C2.4 9.2 2 10.6 2 12c0 4.4 3.6 8 8 8s8-3.6 8-8c0-1.4-.4-2.8-1.1-4.1l1.5-1.4C19.4 8.1 20 10 20 12c0 5.5-4.5 10-10 10S0 17.5 0 12c0-2 .6-3.9 1.7-5.5M10 6c3.3 0 6 2.7 6 6c0 1.6-.6 3.1-1.8 4.2l-1.4-1.4c-.7.8-1.7 1.2-2.8 1.2s-2.1-.4-2.8-1.2l-1.4 1.4C4.6 15.1 4 13.6 4 12c0-3.3 2.7-6 6-6m0 2c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m12 4V7h2v6h-2m0 4v-2h2v2z"></svg:path>`,
})
export class MdiRobotVacuumAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotVacuumOffIcon],svg[mdi-robot-vacuum-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 22.7L18 19.9c-1.7 1.3-3.8 2.1-6 2.1c-5.5 0-10-4.5-10-10c0-2 .6-3.9 1.7-5.5l1.5 1.4C4.4 9.2 4 10.6 4 12c0 4.4 3.6 8 8 8c1.7 0 3.3-.6 4.6-1.5l-2.9-2.9c-.5.3-1.1.4-1.7.4c-1.1 0-2.1-.4-2.8-1.2l-1.4 1.4C6.6 15.1 6 13.6 6 12c0-1.2.3-2.3.9-3.2L1.1 3l1.3-1.3l19.7 19.7zM20 12c0 1.4-.4 2.7-1 3.8l1.5 1.5c1-1.5 1.5-3.3 1.5-5.3s-.6-3.9-1.7-5.5l-1.5 1.4c.8 1.3 1.2 2.7 1.2 4.1m-8-8c2.1 0 4.2.8 5.7 2.3l1.4-1.4C17.2 3.1 14.7 2 12 2c-1.9 0-3.7.5-5.3 1.5L8.2 5c1.1-.7 2.5-1 3.8-1m5.5 10.3c.3-.7.5-1.5.5-2.3c0-3.3-2.7-6-6-6c-.8 0-1.6.2-2.3.5l1.7 1.7c.2-.1.4-.2.6-.2c.6 0 1 .4 1 1c0 .2-.1.4-.2.6z"></svg:path>`,
})
export class MdiRobotVacuumOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotVacuumVariantIcon],svg[mdi-robot-vacuum-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v2h2V5h14v2h2V5a2 2 0 0 0-2-2zm3 4v2h8V7zM3 9v3a9 9 0 0 0 9 9a9 9 0 0 0 9-9V9h-2v3a7 7 0 0 1-7 7a7 7 0 0 1-7-7V9zm9 3a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 12 17a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 12 12"></svg:path>`,
})
export class MdiRobotVacuumVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotVacuumVariantAlertIcon],svg[mdi-robot-vacuum-variant-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3c-1.1 0-2 .9-2 2v2h2V5h14v2h2V5c0-1.1-.9-2-2-2zm3 4v2h8V7zM1 9v3c0 5 4 9 9 9s9-4 9-9V9h-2v3c0 3.9-3.1 7-7 7s-7-3.1-7-7V9zm9 3c-1.4 0-2.5 1.1-2.5 2.5S8.6 17 10 17s2.5-1.1 2.5-2.5S11.4 12 10 12m11 0V7h2v6h-2m0 4v-2h2v2z"></svg:path>`,
})
export class MdiRobotVacuumVariantAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRobotVacuumVariantOffIcon],svg[mdi-robot-vacuum-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-3.5-3.5C15.8 20.3 14 21 12 21c-5 0-9-4-9-9V9h2v3c0 3.9 3.1 7 7 7c1.4 0 2.8-.5 3.9-1.2L14 15.9c-.5.6-1.2 1.1-2 1.1c-1.4 0-2.5-1.1-2.5-2.5c0-.8.4-1.6 1.1-2L5 6.9V7H3V4.9L1.1 3l1.3-1.3l19.7 19.7zM19 5v2h2V5c0-1.1-.9-2-2-2H6.2l2 2zm0 7c0 1.1-.3 2.1-.7 3.1l1.5 1.5c.8-1.3 1.2-2.9 1.2-4.6V9h-2zm-3-3V7h-5.8l2 2z"></svg:path>`,
})
export class MdiRobotVacuumVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRocketIcon],svg[mdi-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 22l-3.86-1.55c.7-1.53 1.2-3.11 1.51-4.72zM7.86 20.45L4 22l2.35-6.27c.31 1.61.81 3.19 1.51 4.72M12 2s5 2 5 10c0 3.1-.75 5.75-1.67 7.83A2 2 0 0 1 13.5 21h-3a2 2 0 0 1-1.83-1.17C7.76 17.75 7 15.1 7 12c0-8 5-10 5-10m0 10c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2"></svg:path>`,
})
export class MdiRocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRocketLaunchIcon],svg[mdi-rocket-launch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.16 22.19l-1.66-3.84c1.6-.58 3.07-1.35 4.43-2.27l-2.78 6.11m-7.5-9.69l-3.84-1.65l6.11-2.78a20 20 0 0 0-2.27 4.43M21.66 2.35S23.78 7.31 18.11 13c-2.2 2.17-4.58 3.5-6.73 4.34c-.74.28-1.57.1-2.12-.46l-2.13-2.13c-.56-.56-.74-1.38-.47-2.13C7.5 10.5 8.83 8.09 11 5.89C16.69.216 21.66 2.35 21.66 2.35M6.25 22H4.84l4.09-4.1c.3.21.63.36.97.45zM2 22v-1.41l4.77-4.78l1.43 1.42L3.41 22zm0-2.84v-1.41l3.65-3.65c.09.35.24.68.45.97zM16 6a2 2 0 1 0 0 4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiRocketLaunchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRocketLaunchOutlineIcon],svg[mdi-rocket-launch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.16 22.19l-1.66-3.84c1.6-.58 3.07-1.35 4.43-2.27l-2.78 6.11m-7.5-9.69l-3.84-1.65l6.11-2.78C7 9.43 6.23 10.91 5.65 12.5M20 4c-2.96-.22-5.2.83-7.55 3.31c-2.36 2.47-3.36 4.5-3.95 6.04l2.17 2.1c2.29-.87 4.33-2.18 6.03-3.89C20 8.27 20.17 5.4 20 4m-9 1.9c2.63-2.8 7-4.82 10.66-3.55c0 0 2.12 4.96-3.55 10.65c-2.2 2.17-4.58 3.5-6.72 4.34c-.24.09-1.15.39-2.13-.46l-2.13-2.13c-.56-.56-.74-1.38-.47-2.13C7.5 10.5 8.41 8.69 11 5.9M6.25 22H4.84l4.09-4.1c.3.21.63.36.97.45zM2 22v-1.41l4.77-4.78l1.43 1.42L3.41 22zm0-2.83v-1.42l3.65-3.65c.09.35.24.68.45.97zM16 6a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 1 1 0-4"></svg:path>`,
})
export class MdiRocketLaunchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRocketOutlineIcon],svg[mdi-rocket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2S7 4 7 12c0 3.1.76 5.75 1.67 7.83A2 2 0 0 0 10.5 21h3a2 2 0 0 0 1.83-1.17C16.25 17.75 17 15.1 17 12c0-8-5-10-5-10m1.5 17h-3c-1-2.24-1.5-4.59-1.5-7c0-4.64 1.9-6.8 3-7.67c1.1.87 3 3.03 3 7.67c0 2.41-.5 4.76-1.5 7m6.5 3l-3.86-1.55c.7-1.53 1.2-3.11 1.51-4.72m-9.79 4.72L4 22l2.35-6.27c.31 1.61.81 3.19 1.51 4.72M12 12c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class MdiRocketOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRodentIcon],svg[mdi-rodent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.33 17.39c1.4 1.27.47 3.61-1.41 3.61h-8.86A5.04 5.04 0 0 1 6 15.94v-.05c-2.3-.47-4-2.48-4-4.89c0-2.75 2.22-5 5-5h2.5c.3 0 .5-.23.5-.5S9.8 5 9.5 5H7V3h2.5C10.88 3 12 4.13 12 5.5C12 6.89 10.88 8 9.5 8H7c-1.66 0-3 1.33-3 3c0 1.37.92 2.5 2.14 2.87c.56-2.2 2.53-3.87 4.92-3.87c.8 0 1.6.22 2.3.55c-1.41.79-2.36 2.25-2.36 3.95c0 1.25.5 2.37 1.33 3.17l.7-.7c-.65-.61-1.03-1.5-1.03-2.47c0-2.59 2.34-3.5 3.5-3.5c2.08 0 3.95 1.89 3.44 4.23zM18 19c.56 0 1-.44 1-1s-.44-1-1-1s-1 .44-1 1s.44 1 1 1"></svg:path>`,
})
export class MdiRodentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRollerShadeIcon],svg[mdi-roller-shade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h20v-2zM6 19v-6h5v1.8c-.4.3-.8.8-.8 1.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.6-.3-1.1-.8-1.4V13h5v6z"></svg:path>`,
})
export class MdiRollerShadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRollerShadeClosedIcon],svg[mdi-roller-shade-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2zM6 19v-2h5v2zm7 0v-2h5v2z"></svg:path>`,
})
export class MdiRollerShadeClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRollerSkateIcon],svg[mdi-roller-skate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 18C5.1 18 4 19.12 4 20.5S5.1 23 6.5 23S9 21.88 9 20.5S7.86 18 6.5 18m10 0c-1.4 0-2.5 1.12-2.5 2.5s1.1 2.5 2.5 2.5s2.5-1.12 2.5-2.5s-1.14-2.5-2.5-2.5m3.5-1c0-1.37.09-3.19-.5-4.05c-.95-2.05-3.68-2.39-5.59-2.9C13 10 12 9 11.82 8H9a.49.49 0 0 1-.5-.5c0-.28.21-.5.5-.5h2.5V6H9a.49.49 0 0 1-.5-.5c0-.28.21-.5.5-.5h2.5V2H3v15z"></svg:path>`,
})
export class MdiRollerSkateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRollerSkateOffIcon],svg[mdi-roller-skate-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-1.89-1.89c-.17 1.22-1.2 2.16-2.45 2.16c-1.4 0-2.5-1.12-2.5-2.5c0-1.26.93-2.3 2.14-2.47L15.11 17H3V4.9L1.11 3l1.28-1.27l19.72 19.73zM9 5h2.5V2H5.2l3.3 3.32c.09-.19.27-.32.5-.32m3.56 4.36C12.18 9 11.9 8.5 11.82 8h-.62zm6.94 3.59c-.95-2.05-3.68-2.39-5.59-2.9c-.46-.02-.91-.28-1.31-.65l7.4 7.39c0-1.34.06-3.03-.5-3.84M9.2 6l1 1h1.3V6zM6.5 18C5.1 18 4 19.12 4 20.5S5.1 23 6.5 23S9 21.88 9 20.5S7.86 18 6.5 18"></svg:path>`,
})
export class MdiRollerSkateOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRollerbladeIcon],svg[mdi-rollerblade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 18a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5m14 0a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5m1.5-1c0-1.37.09-3.19-.5-4.05c-.95-2.05-3.68-2.39-5.59-2.9C13 10 12 9 11.82 8H9a.49.49 0 0 1-.5-.5c0-.28.21-.5.5-.5h2.5V6H9a.49.49 0 0 1-.5-.5c0-.28.21-.5.5-.5h2.5V2H3v15zm-8.5 1a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class MdiRollerbladeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRollerbladeOffIcon],svg[mdi-rollerblade-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-.52-.52c-.46.48-1.1.79-1.82.79a2.5 2.5 0 0 1-2.5-2.5c0-.72.31-1.36.79-1.82L15.11 17H3V4.9L1.11 3l1.28-1.27l19.72 19.73zm-1.34-9.78c-.95-2.05-3.68-2.39-5.59-2.9c-.46-.02-.91-.28-1.31-.65l7.4 7.39c0-1.34.06-3.03-.5-3.84M9.2 6l1 1h1.3V6zm3.36 3.36C12.18 9 11.9 8.5 11.82 8h-.62zM11.5 18a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5M9 5h2.5V2H5.2l3.3 3.32c.09-.19.27-.32.5-.32M4.5 18a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class MdiRollerbladeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRollupjsIcon],svg[mdi-rollupjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.46 8.64c0 2.47-1.35 4.62-3.34 5.76c-.12.1-.19.26-.12.41l3.41 6.74c.09.21-.05.45-.28.45H6.1l.07-.04c.49-.28 3.89-6.99 7.21-10.17s3.74-2.12 1.91-5.58c0 0 1.41 2.75.21 2.96c-.94.17-3.1-1.92-2.3-3.8c.8-1.84 3.95-1.49 5.4.01c.55.96.86 2.07.86 3.26m-12.3 4.49c-1.32 2.43-2.16 4.2-2.62 5.44V2.31c0-.17.14-.31.31-.31h8.07a6.62 6.62 0 0 1 5.54 3.15C17.62 4.1 16.3 3.5 15 3.5c-2.47 0-3.09.9-7.84 9.63"></svg:path>`,
})
export class MdiRollupjsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRolodexIcon],svg[mdi-rolodex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.89 5H18.5v2a2.5 2.5 0 0 1-5 0V5.25c0-.14-.11-.25-.25-.25h-2.5c-.14 0-.25.11-.25.25V7a2.5 2.5 0 0 1-5 0V5H4.11C3 4.97 2.03 5.87 2 7v12c.03 1.13 1 2.03 2.11 2h15.78c1.11.03 2.08-.87 2.11-2V7c-.03-1.13-1-2.03-2.11-2M7 18H5v-2h2zm0-4H5v-2h2zm4 4H9v-2h2zm0-4H9v-2h2zm4 4h-2v-2h2zm0-4h-2v-2h2zm4 4h-2v-2h2zm0-4h-2v-2h2zm-3-6c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1M8 8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1"></svg:path>`,
})
export class MdiRolodexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRolodexOutlineIcon],svg[mdi-rolodex-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18H5v-2h2zm0-4H5v-2h2zm4 4H9v-2h2zm0-4H9v-2h2zm4 4h-2v-2h2zm0-4h-2v-2h2zm4 4h-2v-2h2zm0-4h-2v-2h2zm-3-6c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1M8 8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1m11.89-3H18.5v2a2.5 2.5 0 0 1-5 0V5.25c0-.14-.11-.25-.25-.25h-2.5c-.14 0-.25.11-.25.25V7a2.5 2.5 0 0 1-5 0V5H4.11C3 4.97 2.03 5.87 2 7v12c.03 1.13 1 2.03 2.11 2h15.78c1.11.03 2.08-.87 2.11-2V7c-.03-1.13-1-2.03-2.11-2M20 19H4v-8h16z"></svg:path>`,
})
export class MdiRolodexOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral1Icon],svg[mdi-roman-numeral-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7v2h-1v6h1v2h-4v-2h1V9h-1V7z"></svg:path>`,
})
export class MdiRomanNumeral1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral10Icon],svg[mdi-roman-numeral-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7l2 5l-2 5h2l1-2.5l1 2.5h2l-2-5l2-5h-2l-1 2.5L11 7z"></svg:path>`,
})
export class MdiRomanNumeral10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral2Icon],svg[mdi-roman-numeral-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7v2h-1v6h1v2H7v-2h1V9H7V7zm6 0v2h-1v6h1v2h-4v-2h1V9h-1V7z"></svg:path>`,
})
export class MdiRomanNumeral2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral3Icon],svg[mdi-roman-numeral-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v2H8v6h1v2H5v-2h1V9H5V7zm5 0v2h-1v6h1v2h-4v-2h1V9h-1V7zm5 0v2h-1v6h1v2h-4v-2h1V9h-1V7z"></svg:path>`,
})
export class MdiRomanNumeral3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral4Icon],svg[mdi-roman-numeral-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7l2 10h2l2-10h-2l-1 5l-1-5zm-1 0v2h-1v6h1v2H7v-2h1V9H7V7z"></svg:path>`,
})
export class MdiRomanNumeral4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral5Icon],svg[mdi-roman-numeral-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7l2 10h2l2-10h-2l-1 5l-1-5z"></svg:path>`,
})
export class MdiRomanNumeral5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral6Icon],svg[mdi-roman-numeral-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 7l2 10h2l2-10h-2l-1 5l-1-5zm11 0v2h-1v6h1v2h-4v-2h1V9h-1V7z"></svg:path>`,
})
export class MdiRomanNumeral6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral7Icon],svg[mdi-roman-numeral-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 7l2 10h2l2-10H8l-1 5l-1-5zm11 0v2h-1v6h1v2h-4v-2h1V9h-1V7zm5 0v2h-1v6h1v2h-4v-2h1V9h-1V7z"></svg:path>`,
})
export class MdiRomanNumeral7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral8Icon],svg[mdi-roman-numeral-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 7l2 10h2L7 7H5l-1 5l-1-5zm11 0v2h-1v6h1v2H8v-2h1V9H8V7zm5 0v2h-1v6h1v2h-4v-2h1V9h-1V7zm5 0v2h-1v6h1v2h-4v-2h1V9h-1V7z"></svg:path>`,
})
export class MdiRomanNumeral8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral9Icon],svg[mdi-roman-numeral-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7v2h-1v6h1v2H7v-2h1V9H7V7zm1 0l2 5l-2 5h2l1-2.5l1 2.5h2l-2-5l2-5h-2l-1 2.5L14 7z"></svg:path>`,
})
export class MdiRomanNumeral9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRoomServiceIcon],svg[mdi-room-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a2 2 0 0 1 2 2q0 .36-.12.69C17.95 8.5 21 11.91 21 16H3c0-4.09 3.05-7.5 7.12-8.31Q10 7.36 10 7a2 2 0 0 1 2-2m10 14H2v-2h20z"></svg:path>`,
})
export class MdiRoomServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRoomServiceOutlineIcon],svg[mdi-room-service-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a2 2 0 0 1 2 2q0 .36-.12.69C17.95 8.5 21 11.91 21 16H3c0-4.09 3.05-7.5 7.12-8.31Q10 7.36 10 7a2 2 0 0 1 2-2m10 14H2v-2h20zM12 9.5c-3.11 0-5.75 1.89-6.66 4.5h13.32c-.91-2.61-3.55-4.5-6.66-4.5"></svg:path>`,
})
export class MdiRoomServiceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRotate360Icon],svg[mdi-rotate-360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7C6.5 7 2 9.2 2 12c0 2.2 2.9 4.1 7 4.8V20l4-4l-4-4v2.7c-3.2-.6-5-1.9-5-2.7c0-1.1 3-3 8-3s8 1.9 8 3c0 .7-1.5 1.9-4 2.5v2.1c3.5-.8 6-2.5 6-4.6c0-2.8-4.5-5-10-5"></svg:path>`,
})
export class MdiRotate360Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRotate3dIcon],svg[mdi-rotate-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.47 21.5C4.2 19.94 1.86 16.76 1.5 13H0c.5 6.16 5.66 11 11.95 11l.66-.03l-3.81-3.81zm.89-6.54c-.19 0-.36-.03-.52-.08a1.1 1.1 0 0 1-.4-.24c-.11-.1-.2-.22-.26-.37c-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.7.21.95s.33.5.56.69c.24.18.51.32.82.41q.45.15.96.15c.37 0 .72-.05 1.03-.15c.32-.1.6-.25.83-.44s.42-.41.55-.72c.13-.29.2-.61.2-.97c0-.19-.02-.38-.07-.56c-.05-.16-.12-.35-.23-.51c-.1-.15-.24-.3-.4-.43c-.17-.13-.37-.22-.61-.31a2.07 2.07 0 0 0 .89-.75c.1-.16.17-.3.22-.46s.07-.32.07-.48q0-.54-.18-.96c-.14-.26-.29-.51-.51-.69c-.2-.19-.47-.33-.77-.43C9.05 8.05 8.71 8 8.34 8c-.34 0-.69.05-1 .16c-.3.11-.57.26-.79.45c-.21.19-.38.39-.51.67c-.12.26-.18.54-.18.85h1.3q0-.255.09-.45a.94.94 0 0 1 .25-.34c.11-.09.23-.17.38-.22s.3-.08.48-.08c.4 0 .7.1.89.31c.19.2.29.49.29.86c0 .18-.04.34-.08.49a.87.87 0 0 1-.25.37c-.11.1-.25.18-.41.24s-.36.09-.58.09h-.77v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.23.24.29.4c.07.16.1.37.1.57c0 .41-.12.72-.35.93c-.23.23-.55.33-.95.33m8.55-5.92c-.32-.33-.7-.59-1.14-.77c-.43-.18-.92-.27-1.46-.27h-2.36v8h2.3c.55 0 1.06-.09 1.51-.27s.84-.43 1.16-.76s.58-.73.74-1.19c.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57c-.16-.47-.43-.87-.75-1.2m-.41 3.16c0 .42-.03.8-.12 1.13c-.1.33-.24.62-.43.85s-.45.41-.71.53q-.435.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69c.38.46.55 1.12.55 1.99M11.95 0l-.66.03l3.81 3.81l1.33-1.34c3.27 1.56 5.61 4.73 5.96 8.5h1.5c-.5-6.16-5.65-11-11.94-11"></svg:path>`,
})
export class MdiRotate3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRotate3dVariantIcon],svg[mdi-rotate-3d-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c4.97 0 9 2.69 9 6c0 1.68-1.04 3.2-2.71 4.29c1.07-.87 1.71-1.97 1.71-3.16C20 9.29 16.42 7 12 7v3L8 6l4-4zm0 14c-4.97 0-9-2.69-9-6c0-1.68 1.04-3.2 2.71-4.29C4.64 9.58 4 10.68 4 11.88C4 14.71 7.58 17 12 17v-3l4 4l-4 4z"></svg:path>`,
})
export class MdiRotate3dVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRotateLeftIcon],svg[mdi-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4.07V1L8.45 5.55L13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93M7.1 18.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47m1.02-4.47L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47"></svg:path>`,
})
export class MdiRotateLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRotateLeftVariantIcon],svg[mdi-rotate-left-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h3a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m16 13a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-9v-7zM14 4a8 8 0 0 1 8 8l-.06 1h-2.02l.08-1a6 6 0 0 0-6-6v3l-4-4l4-4z"></svg:path>`,
})
export class MdiRotateLeftVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRotateOrbitIcon],svg[mdi-rotate-orbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14.25L4.75 11H7c.25-5.61 2.39-10 5-10c2 0 3.77 2.64 4.55 6.45C20.36 8.23 23 10 23 12c0 1.83-2.17 3.43-5.4 4.3l.29-2.03C19.8 13.72 21 12.91 21 12c0-1.06-1.65-2-4.13-2.5c.08.79.13 1.63.13 2.5c0 6.08-2.24 11-5 11c-1.83 0-3.43-2.17-4.3-5.4l2.03.29C10.28 19.8 11.09 21 12 21c1.66 0 3-4.03 3-9q0-1.5-.15-2.85Q13.5 9 12 9l-1.86.06l.29-2.01L12 7c.87 0 1.71.05 2.5.13C14 4.65 13.06 3 12 3c-1.54 0-2.82 3.5-3 8h2.25zM14.25 16L11 19.25V17c-5.61-.25-10-2.39-10-5c0-1.83 2.17-3.43 5.4-4.3l-.29 2.03C4.2 10.28 3 11.09 3 12c0 1.54 3.5 2.82 8 3v-2.25z"></svg:path>`,
})
export class MdiRotateOrbitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRotateRightIcon],svg[mdi-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.89 15.5l1.42 1.39c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.5M13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03m6.93-6.9a7.9 7.9 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47m-2.36-5.45L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10z"></svg:path>`,
})
export class MdiRotateRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRotateRightVariantIcon],svg[mdi-rotate-right-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4V1l4 4l-4 4V6a6 6 0 0 0-6 6l.08 1H2.06L2 12a8 8 0 0 1 8-8m7-2h3a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2M4 15h9v7H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiRotateRightVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRoundedCornerIcon],svg[mdi-rounded-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h2v2h-2zm0-2h2v-2h-2zM3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm0-4h2V3H3zm4 0h2V3H7zm8 16h2v-2h-2zm-4 0h2v-2h-2zm4 0h2v-2h-2zm-8 0h2v-2H7zm-4 0h2v-2H3zM21 8a5 5 0 0 0-5-5h-5v2h5a3 3 0 0 1 3 3v5h2z"></svg:path>`,
})
export class MdiRoundedCornerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRouterIcon],svg[mdi-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m1-7v3h2l-3 3l-3-3h2v-3m-6 0h3v2l3-3l-3-3v2H5m6 0V8H9l3-3l3 3h-2v3m6 0h-3V9l-3 3l3 3v-2h3"></svg:path>`,
})
export class MdiRouterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRouterNetworkIcon],svg[mdi-router-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9c-1.1 0-2 .9-2 2v4a2 2 0 0 0 2 2h6v2h-1c-.55 0-1 .45-1 1H2v2h7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1h7v-2h-7c0-.55-.45-1-1-1h-1v-2h6c1.11 0 2-.89 2-2v-4a2 2 0 0 0-2-2zm1 3h2v2H6zm3.5 0h2v2h-2zm3.5 0h2v2h-2z"></svg:path>`,
})
export class MdiRouterNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRouterNetworkWirelessIcon],svg[mdi-router-network-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 3.1l-.8.8C19 2.8 17.5 2.2 16 2.2s-3 .6-4.2 1.7l-.8-.8C12.4 1.7 14.2 1 16 1s3.6.7 5 2.1m-5 .2c1.2 0 2.4.5 3.3 1.4l-.8.8c-.7-.7-1.6-1-2.5-1s-1.8.3-2.5 1l-.8-.8c.9-.9 2.1-1.4 3.3-1.4m1 6.7h2c.53 0 1.04.21 1.41.59c.38.37.59.88.59 1.41v2c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59h-6v2h1c.55 0 1 .45 1 1h7v2h-7c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1H2v-2h7c0-.55.45-1 1-1h1v-2H5c-.53 0-1.04-.21-1.41-.59C3.21 15.04 3 14.53 3 14v-2c0-.53.21-1.04.59-1.41c.37-.38.88-.59 1.41-.59h10V6h2zM5 14h2v-2H5zm3.5 0h2v-2h-2zm3.5 0h2v-2h-2z"></svg:path>`,
})
export class MdiRouterNetworkWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRouterWirelessIcon],svg[mdi-router-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7m-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1s1.8.3 2.5 1zM19 13h-2V9h-2v4H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M8 18H6v-2h2zm3.5 0h-2v-2h2zm3.5 0h-2v-2h2z"></svg:path>`,
})
export class MdiRouterWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRouterWirelessOffIcon],svg[mdi-router-wireless-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.8 5.9l-.8-.8C12.4 3.7 14.2 3 16 3s3.6.7 5 2.1l-.8.8C19 4.8 17.5 4.2 16 4.2s-3 .6-4.2 1.7M21 15c0-1.1-.9-2-2-2h-2V9h-2v2.8l6 6zm-2.5-7.5l.8-.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1s1.8.3 2.5 1m3.6 14l-1.3 1.3l-1.7-1.8H5c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h6.1L1.1 3l1.3-1.3zM8 16H6v2h2zm3.5 0h-2v2h2zm3.5.9l-.9-.9H13v2h2z"></svg:path>`,
})
export class MdiRouterWirelessOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRouterWirelessSettingsIcon],svg[mdi-router-wireless-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.2 4.9C19 3.8 17.5 3.2 16 3.2s-3 .6-4.2 1.7l-.8-.8C12.4 2.7 14.2 2 16 2s3.6.7 5 2.1zm-.9.8l-.8.8c-.7-.7-1.6-1-2.5-1s-1.8.3-2.5 1l-.8-.8c.9-.9 2.1-1.4 3.3-1.4s2.4.5 3.3 1.4M19 12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h10V8h2v4zM8 17v-2H6v2zm3.5 0v-2h-2v2zm3.5 0v-2h-2v2zm-8 5h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiRouterWirelessSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRoutesIcon],svg[mdi-routes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10H5L3 8l2-2h6V3l1-1l1 1v1h6l2 2l-2 2h-6v2h6l2 2l-2 2h-6v6a2 2 0 0 1 2 2H9a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiRoutesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRoutesClockIcon],svg[mdi-routes-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 13H15v3.69l3.19 1.84l.75-1.3l-2.44-1.41zM16 9c-1.96 0-3.73.82-5 2.12V7h6l2-2l-2-2h-6V2l-1-1l-1 1v4H3L1 8l2 2h6v10c-1.1 0-2 .9-2 2h5.41c1.05.63 2.28 1 3.59 1c3.87 0 7-3.13 7-7s-3.13-7-7-7m0 11.85c-2.68 0-4.85-2.17-4.85-4.85s2.17-4.85 4.85-4.85s4.85 2.17 4.85 4.85s-2.17 4.85-4.85 4.85"></svg:path>`,
})
export class MdiRoutesClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRowingIcon],svg[mdi-rowing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 14.5L4 19l1.5 1.5L9 17h2zM15 1a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m6 20l-3 3l-3-3v-1.5l-7.09-7.09c-.31.05-.61.09-.91.09v-2.18c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.23.43-.38.69-.5c.29-.14.62-.23.96-.23h.03C16 6 17 7 17 8.26V14c0 .85-.35 1.62-.92 2.17l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18z"></svg:path>`,
})
export class MdiRowingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRssIcon],svg[mdi-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93z"></svg:path>`,
})
export class MdiRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRssBoxIcon],svg[mdi-rss-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2.5 12A1.5 1.5 0 0 0 6 16.5A1.5 1.5 0 0 0 7.5 18A1.5 1.5 0 0 0 9 16.5A1.5 1.5 0 0 0 7.5 15M6 10v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8m0-4v2a10 10 0 0 1 10 10h2A12 12 0 0 0 6 6"></svg:path>`,
})
export class MdiRssBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRssOffIcon],svg[mdi-rss-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 3.77L3.78 2.5L21.5 20.22l-1.27 1.28l-1.5-1.5h-2c0-.75-.06-1.5-.19-2.19L6.19 7.46C5.5 7.33 4.75 7.27 4 7.27v-2zm3.68 11.87a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 10.1a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93zm5.13-4.79c4.46 1.56 8 5.1 9.56 9.56z"></svg:path>`,
})
export class MdiRssOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRugIcon],svg[mdi-rug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m11 5H1v-2h3v-2H1v-2h3v-2H1V9h3V7H1V5h22v2h-3v2h3v2h-3v2h3v2h-3v2h3zm-11-3.08c.62.7 1.66.89 2.5.41s1.19-1.49.9-2.37c.91-.18 1.6-.99 1.6-1.96s-.69-1.78-1.6-1.96c.29-.88-.06-1.89-.9-2.37s-1.88-.29-2.5.41a1.995 1.995 0 0 0-3.39 1.96C7.69 10.22 7 11.03 7 12s.69 1.78 1.61 1.96A1.995 1.995 0 0 0 12 15.92"></svg:path>`,
})
export class MdiRugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRugbyIcon],svg[mdi-rugby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.22 16.22c2.03-2.03 3.11-4.72 3.23-8.02c-1.09 2.41-2.64 4.61-4.64 6.61s-4.2 3.55-6.61 4.64c3.3-.09 5.96-1.17 8.02-3.23M7.78 7.78C5.75 9.81 4.67 12.5 4.55 15.8c.45-1 1.15-2.15 2.06-3.45c.89-1.3 1.77-2.35 2.58-3.16c2-2 4.2-3.55 6.61-4.64c-3.3.09-5.96 1.17-8.02 3.23M20.5 3.5c.5.55.84 1.61.97 3.2c.12 1.6-.12 3.46-.73 5.6c-.61 2.15-1.63 3.93-3.07 5.37C16.36 19 14.8 19.95 13 20.55c-1.79.61-3.56.92-5.31.92c-2.13 0-3.52-.33-4.19-.97c-.5-.55-.84-1.61-.97-3.2c-.12-1.6.12-3.46.73-5.6c.61-2.15 1.63-3.93 3.07-5.37C7.64 5 9.2 4.05 11 3.45c1.79-.61 3.56-.92 5.31-.92c2.13 0 3.52.33 4.19.97"></svg:path>`,
})
export class MdiRugbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRulerIcon],svg[mdi-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.39 18.36l1.77-1.76L4.58 18l1.06-1.05l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.42 1.41L10.59 12l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.41 1.41l1.07-1.06l-1.42-1.41l1.42-1.42L18 6.7l1.07-1.06l-2.47-2.48l1.76-1.77l4.25 4.25L5.64 22.61z"></svg:path>`,
})
export class MdiRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRulerSquareIcon],svg[mdi-ruler-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v16h6v-1.5H7V18h2v-1.5H5V15h4v-1.5H7V12h2v-1.5H5V9h4V5h1.5v4H12V7h1.5v2H15V5h1.5v4H18V7h1.5v2H21V3H5a2 2 0 0 0-2 2m3 2a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRulerSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRulerSquareCompassIcon],svg[mdi-ruler-square-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19.88V22l-1.8-1.17l-4.79-9a4.9 4.9 0 0 0 1.78-1M15 7a3 3 0 0 1-3 3a3 3 0 0 1-.44 0L5.8 20.83L4 22v-2.12L9.79 9A3 3 0 0 1 12 4V2a1 1 0 0 1 1 1v1.18A3 3 0 0 1 15 7m-2 0a1 1 0 1 0-1 1a1 1 0 0 0 1-1m-8.78 3L6 11.8l-1.44 2.76L2.1 12.1m9.9 5.66l-1.5-1.51L9 19l3 3l3-3l-1.47-2.77M19.78 10L18 11.8l1.5 2.76l2.4-2.46Z"></svg:path>`,
})
export class MdiRulerSquareCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRunIcon],svg[mdi-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 5.5c1.09 0 2-.92 2-2a2 2 0 0 0-2-2c-1.11 0-2 .88-2 2c0 1.08.89 2 2 2M9.89 19.38l1-4.38L13 17v6h2v-7.5l-2.11-2l.61-3A7.3 7.3 0 0 0 19 13v-2c-1.91 0-3.5-1-4.31-2.42l-1-1.58c-.4-.62-1-1-1.69-1c-.31 0-.5.08-.81.08L6 8.28V13h2V9.58l1.79-.7L8.19 17l-4.9-1l-.4 2z"></svg:path>`,
})
export class MdiRunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRunFastIcon],svg[mdi-run-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 5.5a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m-3.6 13.9l1-4.4l2.1 2v6h2v-7.5l-2.1-2l.6-3A7.3 7.3 0 0 0 22 13v-2c-1.76.03-3.4-.89-4.3-2.4l-1-1.6c-.36-.6-1-1-1.7-1c-.3 0-.5.1-.8.1L9 8.3V13h2V9.6l1.8-.7l-1.6 8.1l-4.9-1l-.4 2zM4 9a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3v2zm1-4a1 1 0 0 1-1-1a1 1 0 0 1 1-1h5v2zm-2 8a1 1 0 0 1-1-1a1 1 0 0 1 1-1h4v2z"></svg:path>`,
})
export class MdiRunFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiRvTruckIcon],svg[mdi-rv-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h2V6l-2-2H3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1a3 3 0 0 0 3 3a3 3 0 0 0 3-3h5a3 3 0 0 0 6 0h2v-5M7 18.5a1.5 1.5 0 0 1 0-3a1.5 1.5 0 0 1 0 3M9 12H3V9h6m5 6h-3V9h3m4 9.5a1.5 1.5 0 1 1 1.5-1.5a1.54 1.54 0 0 1-1.5 1.5M17 12V9.5h2.5l2 2.5Z"></svg:path>`,
})
export class MdiRvTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSackIcon],svg[mdi-sack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9c4 2 5 9 5 9s1 4-5 4H8c-6 0-5-4-5-4s1-7 5-9m6-5l-2-2l-2 2l-4-2l2 5h8l2-5z"></svg:path>`,
})
export class MdiSackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSackOutlineIcon],svg[mdi-sack-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18.28v-.23c-.05-.17-.1-.42-.17-.73c-.14-.63-.37-1.47-.7-2.37c-.63-1.72-1.55-3.21-2.66-3.95H8.53c-1.11.74-2.03 2.23-2.66 3.95c-.33.9-.56 1.74-.7 2.37c-.07.31-.12.56-.17.73v.24l-.03.1l-.02.06c-.01.05-.01.1-.01.18c0 .16.03.33.1.48c.05.1.46.89 2.96.89h8c2.5 0 2.91-.79 2.96-.89c.07-.15.1-.32.1-.48c0-.08 0-.13-.01-.18l-.02-.06l-.03-.1zM3 18s1-7 5-9h8c4 2 5 9 5 9s1 4-5 4H8c-6 0-5-4-5-4m7-14l2-2l2 2l4-2l-2 5H8L6 2z"></svg:path>`,
})
export class MdiSackOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSackPercentIcon],svg[mdi-sack-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7L6 2l4 2l2-2l2 2l4-2l-2 5zm8 15H8c-6 0-5-4-5-4s1-7 5-9h8c4 2 5 9 5 9s1 4-5 4m-8.5-9.5A1.5 1.5 0 0 0 9 14a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 9 11a1.5 1.5 0 0 0-1.5 1.5m9 6A1.5 1.5 0 0 0 15 17a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 0 15 20a1.5 1.5 0 0 0 1.5-1.5m0-6.15L15.15 11L7.5 18.65L8.87 20z"></svg:path>`,
})
export class MdiSackPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSafeIcon],svg[mdi-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2v1h2v-1h11v1h2v-1a2 2 0 0 0 2-2v-1h1v-2h-1V9h1V7h-1V6a2 2 0 0 0-2-2zm0 2h15v11H4zm9.5 1.5a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4M5 9v5h2V9zm8.5.5a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiSafeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSafeSquareIcon],svg[mdi-safe-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2h-1v1h-4v-1H9v1H5v-1H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm-3 10c0-1-.3-2-.8-2.8l1.5-1.5l-1.4-1.4l-1.5 1.5C14 7.3 13 7 12 7s-2 .3-2.8.8L7.8 6.3L6.3 7.8l1.5 1.5C7.3 10 7 11 7 12s.3 2 .8 2.8l-1.5 1.5l1.5 1.4l1.5-1.5c.7.5 1.7.8 2.7.8s2-.3 2.8-.8l1.5 1.5l1.4-1.4l-1.5-1.5c.5-.8.8-1.8.8-2.8m-5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3m0 5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2"></svg:path>`,
})
export class MdiSafeSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSafeSquareOutlineIcon],svg[mdi-safe-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m-2.2 5.7l-1.5-1.4l1.5-1.5C7.3 14 7 13 7 12s.3-2 .8-2.7L6.3 7.8l1.5-1.5l1.4 1.5C10 7.3 11 7 12 7s2 .3 2.8.8l1.5-1.5l1.4 1.4l-1.5 1.5c.5.8.8 1.8.8 2.8s-.3 2-.8 2.8l1.5 1.5l-1.4 1.4l-1.5-1.5c-.8.5-1.8.8-2.8.8s-2-.3-2.7-.8zM12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3m8-7c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2h-1v1h-4v-1H9v1H5v-1H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm0 18V4H4v16z"></svg:path>`,
})
export class MdiSafeSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSafetyGogglesIcon],svg[mdi-safety-goggles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9c1.11 0 2 .89 2 2v3c0 1.11-.89 2-2 2h-2.23l-1.24-1.23c-.75-.77-1.76-1.17-2.83-1.17s-2.07.4-2.83 1.17L7.64 16H6c-1.11 0-2-.89-2-2v-3c0-1.11.89-2 2-2zm0-2H6a4 4 0 0 0-4 4H1v3h1a4 4 0 0 0 4 4h2.5c.04-.06.09-.12 1.79-1.82c.39-.39.9-.58 1.41-.58c.52 0 1.03.19 1.42.58L14.91 18H18a4 4 0 0 0 4-4h1v-3h-1a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiSafetyGogglesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSafetyGooglesIcon],svg[mdi-safety-googles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18.006 9c1.1 0 1.994.894 1.994 2v3.006c0 1.1-.894 1.994-1.994 1.994h-2.238l-1.234-1.234a3.978 3.978 0 0 0-2.832-1.171a3.977 3.977 0 0 0-2.832 1.171L7.636 16H5.994C4.894 16 4 15.106 4 14v-3.006C4 9.894 4.894 9 5.994 9h12.012m0-2H5.994A4.005 4.005 0 0 0 2 10.994V11H1v3h1v.006A4.005 4.005 0 0 0 5.994 18h2.503c.046-.058.088-.12 1.788-1.82a2 2 0 0 1 1.418-.585a2 2 0 0 1 1.418.585L14.909 18h3.098A4.005 4.005 0 0 0 22 14.006V14h1v-3h-1v-.006A4.005 4.005 0 0 0 18.006 7z" fill="currentColor"></svg:path>`,
})
export class MdiSafetyGooglesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSailBoatIcon],svg[mdi-sail-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 13.5l8-11.47V13.5zm9.5 0c1.35-3.75 1.17-8.79 0-12.5c4.76 1.54 8.4 7.4 8.46 12.5zm8.6 3.58c-.41.64-.89 1.19-1.45 1.66c-.65-.29-1.23-.74-1.69-1.24c-1.49 1.93-4.5 1.93-5.99 0c-1.47 1.93-4.5 1.93-5.97 0c-.5.5-1.05.95-1.7 1.24c-1.14-.94-2-2.28-2.3-3.74h19.94a6.4 6.4 0 0 1-.84 2.08M20.96 23q-1.59 0-3-.75c-1.84 1-4.15 1-5.99 0c-1.84 1-4.15 1-5.97 0c-1.23.69-2.64.8-4 .75v-2c1.41.05 2.77-.1 4-1c1.74 1.25 4.21 1.25 5.97 0c1.77 1.25 4.23 1.25 5.99 0c1.21.9 2.58 1.05 3.98 1v2z"></svg:path>`,
})
export class MdiSailBoatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSailBoatSinkIcon],svg[mdi-sail-boat-sink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.96 21c-1.06 0-2.06-.26-3-.76c-1.84 1-4.15 1-5.99 0c-1.84 1-4.15 1-5.97 0c-1.23.69-2.64.8-4 .76v-2c1.41.04 2.77-.11 4-1c1.74 1.24 4.21 1.24 5.97 0c1.77 1.24 4.23 1.24 5.99 0c1.21.89 2.58 1.04 3.98 1v2zM22 3.5L7.11 5.96l6 6.21zM10.81 16.36l1.16-.82l1.15.82c.53.36 1.18.57 1.85.57c.15 0 .31-.02.46-.04L5.2 6.31C4.29 7.65 3.9 9.32 4 10.92l5.74 5.91c.39-.09.76-.25 1.07-.47"></svg:path>`,
})
export class MdiSailBoatSinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSaleIcon],svg[mdi-sale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.65 2.85l.61 3.86l3.51 1.79L21 12l1.78 3.5l-3.54 1.79l-.61 3.86l-3.89-.61l-2.77 2.76l-2.78-2.8l-3.86.64l-.62-3.89l-3.49-1.78L3 11.97L1.23 8.5l3.51-1.81l.61-3.83l3.87.64L12 .69l2.77 2.77zM9.5 7A1.5 1.5 0 0 0 8 8.5A1.5 1.5 0 0 0 9.5 10A1.5 1.5 0 0 0 11 8.5A1.5 1.5 0 0 0 9.5 7m5 7a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m-6.09 3L17 8.41L15.59 7L7 15.59z"></svg:path>`,
})
export class MdiSaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSaleOutlineIcon],svg[mdi-sale-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 7c.83 0 1.5.67 1.5 1.5S10.33 10 9.5 10S8 9.33 8 8.5S8.67 7 9.5 7m5 7c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-6.09 3L7 15.59L15.59 7L17 8.41zM18.65 2.85l.61 3.86l3.51 1.79L21 12l1.78 3.5l-3.54 1.79l-.61 3.86l-3.89-.61l-2.77 2.77l-2.78-2.81l-3.86.64l-.62-3.89l-3.49-1.78L3 11.97L1.23 8.5l3.51-1.81l.61-3.82l3.87.63L12 .695l2.76 2.765zm1.45 6.52L17.5 8L17 5.11l-2.9.42L12 3.5L9.9 5.53L7 5.11L6.5 8L3.9 9.37L5.2 12l-1.3 2.63L6.5 16l.5 2.89l2.9-.42L12 20.5l2.1-2.03l2.9.42l.5-2.89l2.6-1.37L18.8 12z"></svg:path>`,
})
export class MdiSaleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSalesforceIcon],svg[mdi-salesforce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.38 6.37c-.7 0-1.31.21-1.91.41c-.7-1.21-2.01-2.01-3.42-2.01c-1.1 0-2.1.5-2.81 1.2c-.8-1-2.01-1.71-3.41-1.71C4.5 4.26 2.5 6.17 2.5 8.5c0 .59.21 1.19.41 1.79A3.68 3.68 0 0 0 1 13.5c0 2 1.61 3.72 3.62 3.72c.3 0 .6 0 .8-.1c.4 1.51 1.91 2.62 3.72 2.62c1.7 0 3.11-1.01 3.61-2.42c.51.21 1.01.41 1.51.41c1.31 0 2.51-.73 3.11-1.81c.31.08.63.08.91.08c2.61 0 4.72-2.09 4.72-4.8c.1-2.7-2-4.83-4.62-4.83"></svg:path>`,
})
export class MdiSalesforceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSassIcon],svg[mdi-sass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m-2 13.33c.16.54.14 1.04 0 1.5c0 .05-.04.1-.06.17c-.02 0-.04.07-.07.12c-.11.24-.27.47-.46.67c-.58.64-1.41.88-1.74.68c-.38-.22-.17-1.12.49-1.83c.72-.76 1.76-1.26 1.76-1.26zm8.27-9.05c-.45-1.78-3.4-2.36-6.18-1.37c-1.66.59-3.46 1.51-4.75 2.72c-1.53 1.44-1.78 2.69-1.68 3.21c.34 1.84 2.88 3.05 3.92 3.94v.01c-.3.15-2.54 1.28-3.08 2.44c-.54 1.22.1 2.1.5 2.22c1.34.36 2.69-.29 3.41-1.38c.7-1.04.65-2.39.34-3.07c.42-.1.91-.15 1.53-.08c1.76.21 2.1 1.3 2.03 1.76c-.06.46-.43.71-.55.79c-.12.07-.16.1-.15.16c.01.08.07.08.17.06c.15-.03.93-.37.96-1.22c.04-1.08-.99-2.28-2.81-2.25c-.75.02-1.22.09-1.56.22l-.08-.09c-1.13-1.2-3.21-2.05-3.12-3.67c.03-.59.23-2.13 4-4.01c3.08-1.54 5.55-1.12 5.98-.17c.61 1.33-1.32 3.82-4.52 4.18c-1.22.14-1.87-.34-2.03-.51c-.17-.17-.19-.2-.25-.17c-.11.07-.04.23 0 .33c.09.25.49.67 1.15.91c.59.19 2.03.3 3.76-.37c1.94-.75 3.46-2.84 3.01-4.59"></svg:path>`,
})
export class MdiSassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSatelliteIcon],svg[mdi-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 18l3.5-4.5l2.5 3l3.5-4.5l4.5 6M5 12v-2a5 5 0 0 0 5-5h2a7 7 0 0 1-7 7m0-7h3a3 3 0 0 1-3 3m14-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiSatelliteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSatelliteUplinkIcon],svg[mdi-satellite-uplink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.86 2l-.52 1.93c4.41.85 7.86 4.3 8.71 8.72l1.95-.52C20.95 7.03 16.96 3.04 11.86 2m-1.04 3.86l-.52 1.95c3.04.46 5.42 2.84 5.88 5.87l1.94-.52c-.66-3.72-3.57-6.66-7.3-7.3m-7.1 3.83A7.96 7.96 0 0 0 5 18.28V22h3v-1.59c.95.39 1.97.59 3 .59c1.14 0 2.27-.25 3.3-.72zm6.07.07l-.53 1.96a3 3 0 0 1 3 3l1.97-.52c-.23-2.34-2.1-4.2-4.44-4.44"></svg:path>`,
})
export class MdiSatelliteUplinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSatelliteVariantIcon],svg[mdi-satellite-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.62 1l5.66 5.67l-2.12 2.12l-2.12-2.12l-1.42 1.42l2.33 2.32l-1.16 1.17l.45.46a2.5 2.5 0 0 1 2.83.5l-3.53 3.53a2.5 2.5 0 0 1-.5-2.83l-.46-.45l-1.17 1.16l-2.32-2.33l-1.42 1.42l2.12 2.12l-2.12 2.12L1 11.62L3.14 9.5l2.12 2.12l1.41-1.41l-2.83-2.83c-.78-.78-.78-2.05 0-2.83l.71-.71c.78-.78 2.05-.78 2.83 0l2.83 2.83l1.41-1.41L9.5 3.14zM18 14a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2zm4 0a8 8 0 0 1-8 8v-2a6 6 0 0 0 6-6z"></svg:path>`,
})
export class MdiSatelliteVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSausageIcon],svg[mdi-sausage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5.3c1.2.5 2 1.8 2 3.2C21 15.4 15.4 21 8.5 21c-1.4 0-2.6-.8-3.2-2L3 20.5v-6L5.3 16c.6-1.2 1.8-2 3.2-2c3 0 5.5-2.5 5.5-5.5c0-1.4.8-2.6 2-3.2L14.5 3h6z"></svg:path>`,
})
export class MdiSausageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSausageOffIcon],svg[mdi-sausage-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-4.5-4.5c-2.1 1.7-4.9 2.8-7.8 2.8c-1.4 0-2.6-.8-3.2-2L3 20.5v-6L5.3 16c.5-1.2 1.8-2 3.2-2c1 0 2-.3 2.8-.8L1.1 3l1.3-1.3l19.7 19.7zM21 8.5c0-1.4-.8-2.6-2-3.2L20.5 3h-6L16 5.3c-1.2.5-2 1.8-2 3.2c0 .7-.1 1.3-.4 1.9l5.1 5.2c1.5-2 2.3-4.5 2.3-7.1"></svg:path>`,
})
export class MdiSausageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSawBladeIcon],svg[mdi-saw-blade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15s-1.4 1.3 1.1 2l-2.8 2.8h-2.8s-1.9-.1-.5 2.2h-4l-2-2s-1.3-1.4-2 1.1l-2.8-2.8v-2.8s.1-1.9-2.2-.5v-4l2-2s1.4-1.3-1.2-1.9l2.8-2.9h2.9s1.9.1.5-2.2h4l2 2s1.3 1.4 2-1.2l2.8 2.8v2.9s-.1 1.9 2.2.5v4zm-6-3a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2"></svg:path>`,
})
export class MdiSawBladeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSawtoothWaveIcon],svg[mdi-sawtooth-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22V6.83L2 16v-2.83L13 2v15.17L22 8v2.83z"></svg:path>`,
})
export class MdiSawtoothWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSaxophoneIcon],svg[mdi-saxophone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a3 3 0 0 1 3 3v8.5c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5V13a1 1 0 0 0 1-1a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1a1 1 0 0 0 1 1v2a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-4a1 1 0 0 0 1-1a1 1 0 0 0-1-1V8a1 1 0 0 0 1-1a1 1 0 0 0-1-1v-.5A3.5 3.5 0 0 0 8.5 2z"></svg:path>`,
})
export class MdiSaxophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScaleIcon],svg[mdi-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.46 15.06l-1.41 1.41l-1.37-1.37A7.94 7.94 0 0 0 4.06 19H6v2H2v-1c0-4.84 3.44-8.87 8-9.8v-2L2 5V3h20v2l-8 3.2v2c4.56.93 8 4.96 8 9.8v1h-4v-2h1.94a7.94 7.94 0 0 0-1.62-3.9l-1.37 1.37l-1.41-1.41l1.37-1.38A8 8 0 0 0 13 12.06V14h-2v-1.94c-1.46.18-2.8.76-3.91 1.62zM12 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2c-.32 0-.62-.07-.88-.21L7.27 20l3.85-1.79c.26-.14.56-.21.88-.21"></svg:path>`,
})
export class MdiScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScaleBalanceIcon],svg[mdi-scale-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-1.27 0-2.4.8-2.82 2H3v2h1.95L2 14c-.47 2 1 3 3.5 3s4.06-1 3.5-3L6.05 7h3.12c.33.85.98 1.5 1.83 1.83V20H2v2h20v-2h-9V8.82c.85-.32 1.5-.97 1.82-1.82h3.13L15 14c-.47 2 1 3 3.5 3s4.06-1 3.5-3l-2.95-7H21V5h-6.17C14.4 3.8 13.27 3 12 3m0 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-6.5 5.25L7 14H4zm13 0L20 14h-3z"></svg:path>`,
})
export class MdiScaleBalanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScaleBathroomIcon],svg[mdi-scale-bathroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 2a4 4 0 0 0-4 4h3.26l-.41-2.77L12.9 8H16a4 4 0 0 0-4-4m-7 6v10h14V10z"></svg:path>`,
})
export class MdiScaleBathroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScaleOffIcon],svg[mdi-scale-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.11 21.46l-1.27 1.27L19.11 21H18v-1.11L12.11 14H11v-1.11l-.69-.69a7.9 7.9 0 0 0-3.22 1.48l1.37 1.38l-1.41 1.41l-1.37-1.37A7.94 7.94 0 0 0 4.06 19H6v2H2v-1a10 10 0 0 1 6.68-9.43L3.85 5.74L2 5V3.89L1.11 3l1.28-1.27m19.52 16.98A10 10 0 0 0 14 10.2v-2L22 5V3H6.2M12 18a1.84 1.84 0 0 0-.88.21L7.27 20l3.85 1.79A1.84 1.84 0 0 0 12 22a2 2 0 0 0 0-4"></svg:path>`,
})
export class MdiScaleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScaleUnbalancedIcon],svg[mdi-scale-unbalanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20V8.8c.5-.2 1-.5 1.3-.9l3.5 1.3l-2.9 6.8c-.5 2 1 3 3.5 3s4.1-1 3.5-3l-2.6-6.3l.9.3l.7-1.9L15 6c0-1.2-.7-2.4-2-2.9c-1.2-.5-2.5 0-3.3.9L3.9 2l-.7 1.8l1.6.6L2.1 11c-.5 2 1 3 3.5 3s4.1-1 3.5-3L6.6 5.1L9 6c0 1.2.7 2.4 2 2.9V20H2v2h20v-2zm6.9-4h-3l1.5-3.8zM7.1 11h-3l1.5-3.8zm4-5.3c.2-.5.8-.8 1.3-.6s.8.8.6 1.3s-.8.8-1.3.6s-.8-.8-.6-1.3"></svg:path>`,
})
export class MdiScaleUnbalancedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScanHelperIcon],svg[mdi-scan-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2a2 2 0 0 1 2-2h4v2H2v4H0zm24 20a2 2 0 0 1-2 2h-4v-2h4v-4h2zM2 24a2 2 0 0 1-2-2v-4h2v4h4v2zM22 0a2 2 0 0 1 2 2v4h-2V2h-4V0z"></svg:path>`,
})
export class MdiScanHelperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScannerIcon],svg[mdi-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.2 10.7L19.8 5l.7 1.9L6.4 12H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5.5c0-.8.5-1.6 1.2-1.8M17 17h2v-2h-2zM5 17h10v-2H5z"></svg:path>`,
})
export class MdiScannerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScannerOffIcon],svg[mdi-scanner-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-2-2H5a2 2 0 0 1-2-2v-5.5c0-.8.5-1.6 1.2-1.8l2.37-.86zM6.4 12h2.33l-.62-.62zM5 15v2h8.73l-2-2zM19.8 5l.7 1.9l-8.65 3.13l-1.55-1.56zm-.8 7a2 2 0 0 1 2 2v4c0 .34-.09.66-.24.94L19 17.18V15h-2.18l-3-3z"></svg:path>`,
})
export class MdiScannerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScatterPlotIcon],svg[mdi-scatter-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m4-8a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m5.6 11.6c1.65 0 3 1.34 3 3a3 3 0 0 1-3 3c-1.66 0-3-1.35-3-3a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiScatterPlotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScatterPlotOutlineIcon],svg[mdi-scatter-plot-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4m0-6a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m4-2a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4m0-6a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m5.6 17.6c-2.21 0-4-1.79-4-4a4 4 0 0 1 4-4c2.21 0 4 1.79 4 4a4 4 0 0 1-4 4m0-6a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1-.9-2-2-2"></svg:path>`,
})
export class MdiScatterPlotOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScentIcon],svg[mdi-scent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 5.1C18.5 6.4 19 7.6 19 9c0 1.7-.7 3.3-2.4 5.1c-1.9 2-3.6 4.2-3.6 6.4c0 .4.1.8.2 1.3c0 .1 0 .2-.1.3s-.2 0-.2-.1c-1-1.3-1.5-2.5-1.5-3.9c0-1.7.7-3.3 2.4-5.1c1.9-2 3.6-4.2 3.6-6.4c0-.4-.1-.8-.2-1.3c0-.1 0-.2.1-.3c.1 0 .1 0 .2.1m-7.8-3c.7.9 1 1.9 1 2.8c0 1.3-.6 2.5-1.8 3.8c-1.4 1.5-2.7 3.2-2.7 4.8c0 .3.1.7.2.9c0 .1 0 .1-.1.2s-.2 0-.2 0c-.8-1-1.1-2-1.1-2.9c0-1.3.6-2.5 1.8-3.8c1.4-1.5 2.7-3.2 2.7-4.8c0-.3-.1-.7-.2-.9V2c.2 0 .3 0 .4.1m.4 7.8c1.9-2 3.6-4.2 3.6-6.4c0-.4-.1-.8-.2-1.3c0-.1 0-.2.1-.3s.2 0 .2.1c1 1.3 1.5 2.5 1.5 3.9c0 1.7-.7 3.3-2.4 5.1c-1.9 2-3.6 4.2-3.6 6.4c0 .4.1.8.2 1.3c0 .1 0 .2-.1.3s-.2 0-.2-.1c-1-1.3-1.5-2.5-1.5-3.9c0-1.7.7-3.3 2.4-5.1"></svg:path>`,
})
export class MdiScentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScentOffIcon],svg[mdi-scent-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.6 16.5c-.9 1.3-1.6 2.7-1.6 4c0 .4.1.8.2 1.3c0 .1 0 .2-.1.3s-.2 0-.2-.1c-1-1.3-1.5-2.5-1.5-3.9q0-1.8 1.2-3.6l-1.4-1.4c-1.1 1.4-1.8 2.9-1.8 4.4c0 .4.1.8.2 1.3c0 .1 0 .2-.1.3s-.2 0-.2-.1c-1-1.3-1.5-2.5-1.5-3.9c0-1.3.5-2.6 1.5-4L7.9 9.8c-1 1.2-1.7 2.4-1.7 3.6c0 .3.1.7.2.9c0 .1 0 .1-.1.2s-.2 0-.2 0c-.8-.9-1.1-1.9-1.1-2.8c0-1.1.5-2.2 1.4-3.3L1.1 3l1.3-1.3l19.7 19.7l-1.3 1.3zM10.2 7q.6-1.05.6-2.1c0-.9-.3-1.9-1.1-2.8c-.1-.1-.2-.1-.3-.1s0 .1 0 .2c.1.3.2.6.2.9c0 .8-.3 1.6-.8 2.4zm7.1-.5c0 1.7-1.1 3.5-2.5 5.1l2 2c1.5-1.5 2.2-3 2.2-4.6q0-1.95-1.5-3.9c-.1-.1-.1-.1-.2-.1c-.1.1-.1.2-.1.3c0 .4.1.8.1 1.2m-3.8 3.8c1.2-1.5 1.8-2.9 1.8-4.4q0-1.95-1.5-3.9h-.2c-.1.1-.1.2-.1.3c.1.4.2.8.2 1.3c0 1.6-.9 3.2-2.2 4.8z"></svg:path>`,
})
export class MdiScentOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSchoolIcon],svg[mdi-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17z"></svg:path>`,
})
export class MdiSchoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSchoolOutlineIcon],svg[mdi-school-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"></svg:path>`,
})
export class MdiSchoolOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScissorsCuttingIcon],svg[mdi-scissors-cutting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21H7v-2h4zm4.5-2H17v2h-4v-2h.2l-1.4-6.1l-2.5.6c-.1.5-.3.9-.5 1.3c-.9 1.5-2.8 1.9-4.3 1s-1.9-2.8-1-4.3s2.8-1.9 4.3-1c.4.2.7.6.9.9l2.5-.6l-.6-2.5c-.4-.1-.8-.3-1.2-.5C8 6.9 7.5 5 8.4 3.5s2.8-1.9 4.3-1s1.9 2.8 1 4.3c-.2.4-.6.7-.9.9zM7 11.8c-.7-.5-1.7-.2-2.2.5s-.2 1.7.5 2.1c.7.5 1.7.3 2.2-.5c.4-.7.2-1.7-.5-2.1M12.4 6c.5-.7.2-1.7-.5-2.2s-1.7-.2-2.2.5c-.4.7-.2 1.7.6 2.2c.7.4 1.7.2 2.1-.5m.4 5.3c-.2-.1-.4-.1-.5.1s-.1.4.1.5s.4.1.5-.1c.2-.2.1-.4-.1-.5M21 8.5L14.5 10l.5 2.2l7.5-1.8l.5-.7zM23 19h-4v2h4zM5 19H1v2h4z"></svg:path>`,
})
export class MdiScissorsCuttingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScooterIcon],svg[mdi-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.82 19H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.01 2.01 0 0 0 15.89 4H12v2h3.89l1.4 6.25h-.01A6.01 6.01 0 0 0 13.09 17H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 21c1.3 0 2.4-.84 2.82-2M5 19c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m14-4c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiScooterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScooterElectricIcon],svg[mdi-scooter-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.01 2.01 0 0 0 15.89 1H12v2h3.89l1.4 6.25h-.01A6.01 6.01 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2M5 16c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m14-4c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-8 4H7l6 3v-2h4l-6-3z"></svg:path>`,
})
export class MdiScooterElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScoreboardIcon],svg[mdi-scoreboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9h2v6H6zm10 0h2v6h-2zm5-6c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zM5 7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1zm10 0c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1zm-3 4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0 4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1"></svg:path>`,
})
export class MdiScoreboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScoreboardOutlineIcon],svg[mdi-scoreboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18M5 7h4c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1m1 2v6h2V9m7-2h4c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1m1 2v6h2V9m-6 2c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0 4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1"></svg:path>`,
})
export class MdiScoreboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScreenRotationIcon],svg[mdi-screen-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 21.5c-3.25-1.56-5.59-4.74-5.95-8.5H.05C.56 19.16 5.71 24 12 24l.66-.03l-3.81-3.81m5.98 1.03L2.81 9.17l6.36-6.36l12.02 12.02M10.23 1.75a1.49 1.49 0 0 0-2.12 0L1.75 8.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zm6.27.75c3.25 1.57 5.59 4.74 5.95 8.5h1.5C23.44 4.84 18.29 0 12 0l-.66.03l3.81 3.81z"></svg:path>`,
})
export class MdiScreenRotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScreenRotationLockIcon],svg[mdi-screen-rotation-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.8 2.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4zM16 9h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1v-.5A2.5 2.5 0 0 0 18.5 0A2.5 2.5 0 0 0 16 2.5V3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1M8.47 20.5C5.2 18.94 2.86 15.76 2.5 12H1c.5 6.16 5.66 11 11.95 11l.66-.03l-3.81-3.82zm14.78-7.73l-2.57-2.57l-1.41 1.41l2.23 2.22l-5.67 5.67L4.5 8.17l5.67-5.67l2.1 2.11l1.41-1.41L11.23.75a1.49 1.49 0 0 0-2.12 0L2.75 7.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12"></svg:path>`,
})
export class MdiScreenRotationLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScrewFlatTopIcon],svg[mdi-screw-flat-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 17v2L12 22l-1.5-3zm1-10.7l-1 .7V6h-3v3l-1 .7v1l5-3.3zm0 4l-1 .7V9l-3 2v2l-1 .7v1l5-3.3zm0 4l-1 .7v-2l-3 2v2l-1 .7v1l5-3.3zM8 2S7 2 7 3l3 2h4l3-2s0-1-1-1z"></svg:path>`,
})
export class MdiScrewFlatTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScrewLagIcon],svg[mdi-screw-lag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 19.3l4-2.7V20l-2 2l-2-2zm4-6.6l-4 2.7v2L9 18v1l6-3.9V14l-1 .7zM7 2v3h10V2zm2 4v3l1 .7v3.7L9 14v1l6-3.9V10l-1 .7v-1l1-.7V6z"></svg:path>`,
})
export class MdiScrewLagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScrewMachineFlatTopIcon],svg[mdi-screw-machine-flat-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 7.3l-1 .7V7h-3v3l-1 .7v1l5-3.3zm0 4l-1 .7v-2l-3 2v2l-1 .7v1l5-3.3zm0 4l-1 .7v-2l-3 2v2l-1 .7v1l5-3.3zM8 3S7 3 7 4l3 2h4l3-2s0-1-1-1zm5.5 15v3h-3v-1z"></svg:path>`,
})
export class MdiScrewMachineFlatTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiScrewMachineRoundTopIcon],svg[mdi-screw-machine-round-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 7.3l-1 .7V7h-3v3l-1 .7v1l5-3.3zm0 4l-1 .7v-2l-3 2v2l-1 .7v1l5-3.3zm0 4l-1 .7v-2l-3 2v2l-1 .7v1l5-3.3zM7 6h10s-1-3-5-3s-5 3-5 3m6.5 12v3h-3v-1z"></svg:path>`,
})
export class MdiScrewMachineRoundTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
