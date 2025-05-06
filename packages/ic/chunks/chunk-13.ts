import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundWarningIcon],svg[ic-round-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z"></svg:path>`,
})
export class IcRoundWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWarningAmberIcon],svg[ic-round-warning-amber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.99L19.53 19H4.47zM2.74 18c-.77 1.33.19 3 1.73 3h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0zM11 11v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1m0 5h2v2h-2z"></svg:path>`,
})
export class IcRoundWarningAmberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWashIcon],svg[ic-round-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.94 11.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.68c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h8.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38h-9.9l1.49-2.61a1.065 1.065 0 0 0-.12-1.23l-.42-.45c-.38-.39-1.01-.41-1.41-.03zM18.5 8A2.5 2.5 0 0 0 21 5.5c0-1.25-1.41-3.16-2.11-4.04a.49.49 0 0 0-.77 0C17.41 2.34 16 4.25 16 5.5A2.5 2.5 0 0 0 18.5 8m-5 1c.83 0 1.5-.67 1.5-1.5c0-.56-.67-1.49-1.11-2.04a.49.49 0 0 0-.77 0C12.67 6.01 12 6.94 12 7.5c0 .83.67 1.5 1.5 1.5"></svg:path>`,
})
export class IcRoundWashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWatchIcon],svg[ic-round-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12c0-2.54-1.19-4.81-3.04-6.27l-.68-4.06C16.12.71 15.28 0 14.31 0H9.7c-.98 0-1.82.71-1.98 1.67l-.67 4.06C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27l.67 4.06c.16.96 1 1.67 1.98 1.67h4.61c.98 0 1.81-.71 1.97-1.67l.68-4.06A7.98 7.98 0 0 0 20 12M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6"></svg:path>`,
})
export class IcRoundWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWatchLaterIcon],svg[ic-round-watch-later-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3.55 13.8l-4.08-2.51c-.3-.18-.48-.5-.48-.85V7.75c.01-.41.35-.75.76-.75s.75.34.75.75v4.45l3.84 2.31c.36.22.48.69.26 1.05c-.22.35-.69.46-1.05.24"></svg:path>`,
})
export class IcRoundWatchLaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWatchOffIcon],svg[ic-round-watch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5c0 .64-.13 1.25-.35 1.82l1.5 1.5a6.96 6.96 0 0 0-1.79-8.79l-.93-3.1A2 2 0 0 0 13.51 2h-3.02c-.89 0-1.66.58-1.92 1.42l-.53 1.79l2.14 2.14C10.75 7.13 11.36 7 12 7M2.1 3.51a.996.996 0 0 0 0 1.41l3.75 3.75C5.31 9.67 5 10.8 5 12c0 2.22 1.03 4.19 2.64 5.47l.93 3.1c.26.85 1.03 1.43 1.92 1.43h3.02c.88 0 1.66-.58 1.92-1.43l.53-1.78l3.11 3.11a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0M12 17c-2.76 0-5-2.24-5-5c0-.64.13-1.25.35-1.82l6.47 6.47c-.57.22-1.18.35-1.82.35"></svg:path>`,
})
export class IcRoundWatchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWaterIcon],svg[ic-round-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.98 14H22zM5.35 13c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c.93 0 1.05.45 2.01.79c.63.22 1.3-.24 1.3-.91c0-.52-.23-.83-.64-.97c-.6-.22-1.15-.9-2.69-.9c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.54 0-2.13.71-2.68.91c-.41.13-.65.43-.65.97c0 .67.66 1.13 1.29.91c1.06-.36 1.1-.8 2.06-.8m13.32 2c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.1 1-3.34 1s-1.38-1-3.33-1c-1.53 0-2.15.71-2.69.91c-.41.14-.65.45-.65.98c0 .67.66 1.13 1.3.91c1.02-.36 1.08-.8 2.04-.8c1.24 0 1.38 1 3.33 1s2.1-1 3.34-1c1.19 0 1.42 1 3.33 1c1.94 0 2.09-1 3.33-1c.94 0 1.06.46 2.03.8c.63.22 1.3-.24 1.3-.91c0-.53-.24-.83-.65-.98c-.53-.19-1.14-.91-2.68-.91M5.35 9c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c.93 0 1.05.45 2.01.79c.63.22 1.3-.24 1.3-.91c0-.52-.23-.83-.64-.97c-.6-.23-1.15-.91-2.69-.91c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.54 0-2.13.71-2.68.91c-.41.14-.65.44-.65.98c0 .67.66 1.13 1.29.91c1.06-.36 1.1-.8 2.06-.8"></svg:path>`,
})
export class IcRoundWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWaterDamageIcon],svg[ic-round-water-damage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.33 3.6l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0M12 16c-1.1 0-2-.9-2-2c0-.78.99-2.44 1.58-3.36c.2-.31.64-.31.84 0c.59.92 1.58 2.58 1.58 3.36c0 1.1-.9 2-2 2"></svg:path>`,
})
export class IcRoundWaterDamageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWaterDropIcon],svg[ic-round-water-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.66 2.58c-.38-.33-.95-.33-1.33 0C6.45 6.88 4 10.62 4 13.8c0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.18-2.45-6.92-7.34-11.22M7.83 14c.37 0 .67.26.74.62c.41 2.22 2.28 2.98 3.64 2.87c.43-.02.79.32.79.75c0 .4-.32.73-.72.75c-2.13.13-4.62-1.09-5.19-4.12a.75.75 0 0 1 .74-.87"></svg:path>`,
})
export class IcRoundWaterDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWaterfallChartIcon],svg[ic-round-waterfall-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 4c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5m-15 9c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5S3 19.33 3 18.5v-4c0-.83.67-1.5 1.5-1.5m11-9c.83 0 1.5.67 1.5 1.5S16.33 7 15.5 7S14 6.33 14 5.5S14.67 4 15.5 4m-4 1c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5S10 8.33 10 7.5v-1c0-.83.67-1.5 1.5-1.5m-3 5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5S7 13.33 7 12.5v-1c0-.83.67-1.5 1.5-1.5"></svg:path>`,
})
export class IcRoundWaterfallChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWavesIcon],svg[ic-round-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16.99c-1.35 0-2.2.42-2.95.8c-.65.33-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.43.22-.81.41-1.27.52c-.45.1-.78.46-.78.91v.1c0 .6.56 1.03 1.14.91c.74-.15 1.3-.43 1.81-.69c.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.52.26 1.08.55 1.83.7a.94.94 0 0 0 1.12-.91v-.09c0-.46-.34-.82-.79-.92c-.46-.1-.83-.29-1.26-.52c-.75-.39-1.6-.81-2.95-.81m0-4.45c-1.35 0-2.2.43-2.95.8c-.65.32-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.43.21-.81.41-1.28.52c-.44.1-.77.46-.77.91v.1a.93.93 0 0 0 1.12.91c.75-.15 1.31-.44 1.83-.69c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.52.26 1.08.55 1.83.7a.94.94 0 0 0 1.12-.92v-.09c0-.46-.34-.82-.79-.92c-.46-.1-.83-.29-1.26-.52c-.75-.38-1.6-.8-2.95-.8m2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.43.22-.81.41-1.27.52c-.45.1-.78.46-.78.91v.07c0 .6.54 1.04 1.12.92c.75-.15 1.31-.44 1.83-.69c.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.52.26 1.08.55 1.83.7A.94.94 0 0 0 22 5.97v-.09c0-.46-.34-.82-.79-.92c-.46-.1-.83-.28-1.26-.5M17 8.09c-1.35 0-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.43.23-.8.42-1.26.52c-.45.1-.79.46-.79.92v.09a.93.93 0 0 0 1.12.91c.75-.15 1.31-.44 1.83-.69c.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.52.26 1.08.55 1.83.7a.94.94 0 0 0 1.12-.91v-.09c0-.46-.34-.82-.79-.92c-.46-.1-.83-.29-1.26-.52c-.75-.39-1.6-.81-2.95-.81"></svg:path>`,
})
export class IcRoundWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWavingHandIcon],svg[ic-round-waving-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.07 9.8c-.2.2-.2.51 0 .71a3 3 0 0 1 .28 3.92c-.15.2-.12.47.05.65c.22.22.57.19.76-.05a4.02 4.02 0 0 0-.04-4.85l7.62-7.62c.49-.49 1.28-.49 1.77 0s.49 1.28 0 1.77l-5.13 5.13c-.2.2-.2.51 0 .71s.51.2.71 0l6.54-6.54c.49-.49 1.28-.49 1.77 0s.49 1.28 0 1.77l-6.54 6.54c-.2.2-.2.51 0 .71s.51.2.71 0l5.48-5.48c.49-.49 1.28-.49 1.77 0s.49 1.28 0 1.77l-6.19 6.19c-.2.2-.2.51 0 .71s.51.2.71 0l4.07-4.07a1.25 1.25 0 0 1 1.77 0c.49.49.49 1.28 0 1.77l-7.07 7.07c-3.22 3.22-8.45 3.22-11.67 0s-3.22-8.45 0-11.67l4.6-4.6a1.25 1.25 0 0 1 1.77 0c.49.49.49 1.28 0 1.77zm.93-8c0-.41-.34-.75-.75-.75c-.04 0-.07 0-.11.01c-2.63.38-4.7 2.46-5.08 5.08c0 .03-.01.07-.01.11c0 .41.34.75.75.75c.38 0 .69-.28.74-.64a4.5 4.5 0 0 1 3.81-3.81c.37-.06.65-.37.65-.75m10 20.4c0 .41.34.75.75.75c.04 0 .07 0 .11-.01c2.63-.38 4.7-2.46 5.08-5.08c0-.03.01-.07.01-.11c0-.41-.34-.75-.75-.75c-.38 0-.69.28-.74.64a4.5 4.5 0 0 1-3.81 3.81c-.37.06-.65.37-.65.75"></svg:path>`,
})
export class IcRoundWavingHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWbAutoIcon],svg[ic-round-wb-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.85 12.65h2.3L8 9zM22.72 7c-.42 0-.77.3-.85.7l-1.07 5.59l-1.31-5.51c-.11-.46-.52-.78-.99-.78s-.88.32-.98.78l-1.31 5.51l-1.07-5.59c-.08-.4-.44-.7-.85-.7c-.01 0-.03.01-.04.01A7.998 7.998 0 0 0 0 12c0 4.42 3.58 8 8 8c3.17 0 5.9-1.85 7.2-4.52a1.104 1.104 0 0 0 2.01-.32L18.5 9.9l1.29 5.26c.12.49.57.84 1.07.84c.52 0 .96-.36 1.08-.86l1.61-7.08A.86.86 0 0 0 22.72 7m-11.79 9c-.38 0-.72-.24-.84-.6L9.6 14H6.4l-.49 1.4c-.13.36-.46.6-.84.6a.888.888 0 0 1-.84-1.19l2.44-6.86C6.87 7.38 7.4 7 8 7s1.13.38 1.34.94l2.44 6.86c.2.59-.23 1.2-.85 1.2"></svg:path>`,
})
export class IcRoundWbAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWbCloudyIcon],svg[ic-round-wb-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.37 10.04C18.68 6.59 15.65 4 12.01 4c-2.89 0-5.4 1.64-6.65 4.04A5.994 5.994 0 0 0 .01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.64-4.96"></svg:path>`,
})
export class IcRoundWbCloudyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWbIncandescentIcon],svg[ic-round-wb-incandescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 19.79c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41M11.99 23H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99M3.01 11.05H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.55 0 .99-.44.99-.99v-.01a.97.97 0 0 0-.98-.99M15 6.86V3.05c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3.81a6 6 0 0 0-2.93 6.13c.4 2.61 2.56 4.7 5.18 5.02c3.64.44 6.75-2.4 6.75-5.95c0-2.23-1.21-4.16-3-5.2m5 5.18v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99m-2.06 7.37l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41"></svg:path>`,
})
export class IcRoundWbIncandescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWbIridescentIcon],svg[ic-round-wb-iridescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15h12c.55 0 1-.45 1-1v-3.95c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1V14c0 .55.45 1 1 1m5-13v1.05c0 .55.45.95 1 .95s1-.4 1-.95V2c0-.55-.45-1-1-1s-1 .45-1 1m7.34 2.3l-.38.38a.996.996 0 1 0 1.41 1.41l.38-.38a.996.996 0 1 0-1.41-1.41M13 22v-.96c0-.55-.45-1-1-1s-1 .45-1 1V22c0 .55.45 1 1 1s1-.45 1-1m6.74-3.61l-.39-.39a.996.996 0 1 0-1.41 1.41l.38.39c.39.39 1.02.39 1.41 0l.01-.01a.984.984 0 0 0 0-1.4M4.25 5.71l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41m1.42 14.08l.38-.38A.996.996 0 1 0 4.64 18l-.38.38a.996.996 0 1 0 1.41 1.41"></svg:path>`,
})
export class IcRoundWbIridescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWbShadeIcon],svg[ic-round-wb-shade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.13c0 .23.09.46.26.63l4.98 4.98c.17.17.39.26.62.26c.79 0 1.18-.95.62-1.51l-4.98-4.98c-.55-.56-1.5-.16-1.5.62M15 20h2l-3-3v2c0 .55.45 1 1 1M7.65 4.35l-4.8 4.8a.5.5 0 0 0 .36.85H4v9c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-9h.79c.45 0 .67-.54.35-.85l-4.79-4.8a.5.5 0 0 0-.7 0M9 14H7v-4h2z"></svg:path>`,
})
export class IcRoundWbShadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWbSunnyIcon],svg[ic-round-wb-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.05 4.14l-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4M3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1m9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99m7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4m-1.81 15.1l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41M20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99M12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99m-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41"></svg:path>`,
})
export class IcRoundWbSunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWbTwilightIcon],svg[ic-round-wb-twilight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.07 9.37l.71-.71a.996.996 0 1 0-1.41-1.41l-.71.71a.996.996 0 1 0 1.41 1.41M21 18H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1M12 7c.56 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1M4.96 9.34a.996.996 0 1 0 1.41-1.41l-.71-.71a.996.996 0 1 0-1.41 1.41zM19 16c0-3.87-3.13-7-7-7s-7 3.13-7 7z"></svg:path>`,
})
export class IcRoundWbTwilightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWcIcon],svg[ic-round-wc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 21v-6.5H5c-.55 0-1-.45-1-1V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v4.5c0 .55-.45 1-1 1h-.5V21c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1M18 21v-5h1.61c.68 0 1.16-.67.95-1.32l-2.1-6.31A2.01 2.01 0 0 0 16.56 7h-.12a2 2 0 0 0-1.9 1.37l-2.1 6.31c-.22.65.26 1.32.95 1.32H15v5c0 .55.45 1 1 1h1c.55 0 1-.45 1-1M7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m9 0c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2"></svg:path>`,
})
export class IcRoundWcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWebIcon],svg[ic-round-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 9h10.5v3.5H4zm0 5.5h10.5V18H5c-.55 0-1-.45-1-1zM19 18h-2.5V9H20v8c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundWebIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWebAssetIcon],svg[ic-round-web-asset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m-1 14H6c-.55 0-1-.45-1-1V8h14v9c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundWebAssetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWebAssetOffIcon],svg[ic-round-web-asset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.83 4H20a2 2 0 0 1 2 2v12c0 .34-.09.66-.23.94L20 17.17V8h-9.17zm12.95 18.61L17.17 20H4a2 2 0 0 1-2-2V6c0-.34.08-.66.23-.94l-.84-.84A.996.996 0 1 1 2.8 2.81l18.38 18.38c.39.39.39 1.02 0 1.41c-.38.4-1.01.4-1.4.01M15.17 18l-10-10H4v10z"></svg:path>`,
})
export class IcRoundWebAssetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWebStoriesIcon],svg[ic-round-web-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2zM2 20c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2zm19-2c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z"></svg:path>`,
})
export class IcRoundWebStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWebhookIcon],svg[ic-round-webhook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16c0-1.84 1-3.45 2.48-4.32c.67-.39 1.52.08 1.52.86c0 .36-.19.68-.5.86c-.9.52-1.5 1.49-1.5 2.6c0 1.85 1.68 3.31 3.6 2.94c1.42-.28 2.4-1.61 2.4-3.06c0-.49.39-.88.88-.88h5c.27-.31.67-.5 1.12-.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.44 0-.84-.19-1.12-.5H11.9A5 5 0 0 1 2 16m14.37-9c.65 0 1.14-.62.97-1.25A4.99 4.99 0 0 0 12.5 2a5.002 5.002 0 0 0-3.45 8.62l-2.35 3.9c-.68.14-1.2.75-1.2 1.48c0 .83.67 1.5 1.5 1.5a1.498 1.498 0 0 0 1.43-1.95l2.86-4.75c.25-.41.13-.95-.28-1.19c-.9-.53-1.51-1.5-1.51-2.61c0-1.65 1.35-3 3-3c1.38 0 2.54.93 2.89 2.2c.13.46.51.8.98.8m.63 6c-.38 0-.75.07-1.09.2c-.4.16-.86-.04-1.08-.41l-2.6-4.32C11.53 8.35 11 7.74 11 7c0-.83.67-1.5 1.5-1.5S14 6.17 14 7c0 .15-.02.29-.06.43l2.19 3.65c.28-.05.57-.08.87-.08c2.76 0 5 2.24 5 5s-2.24 5-5 5c-.86 0-1.68-.22-2.39-.61c-.92-.5-.58-1.89.47-1.89c.17 0 .34.05.49.14c.42.23.91.36 1.43.36c1.65 0 3-1.35 3-3s-1.35-3-3-3"></svg:path>`,
})
export class IcRoundWebhookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWechatIcon],svg[ic-round-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43c0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47c-.09-.39-.14-.79-.14-1.21c-.01-3.54 3.44-6.43 7.69-6.43M12 5.89a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M6.87 7.82a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"></svg:path><svg:path fill="currentColor" d="M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14s2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03m-8.34-.32a.96.96 0 1 1 .96-.96c.01.53-.43.96-.96.96m3.85 0a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"></svg:path>`,
})
export class IcRoundWechatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWeekendIcon],svg[ic-round-weekend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2m-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundWeekendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWestIcon],svg[ic-round-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.7 18.3a.996.996 0 0 0 0-1.41L5.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1H5.83l3.88-3.88A.996.996 0 1 0 8.3 5.71L2.7 11.3a.996.996 0 0 0 0 1.41l5.59 5.59c.39.38 1.03.38 1.41 0"></svg:path>`,
})
export class IcRoundWestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWhatsappIcon],svg[ic-round-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></svg:path>`,
})
export class IcRoundWhatsappIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWhatshotIcon],svg[ic-round-whatshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.09 4.56c-.7-1.03-1.5-1.99-2.4-2.85c-.35-.34-.94-.02-.84.46c.19.94.39 2.18.39 3.29c0 2.06-1.35 3.73-3.41 3.73c-1.54 0-2.8-.93-3.35-2.26c-.1-.2-.14-.32-.2-.54c-.11-.42-.66-.55-.9-.18c-.18.27-.35.54-.51.83A13.77 13.77 0 0 0 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-3.49-1.08-6.73-2.91-9.44M11.71 19c-1.78 0-3.22-1.4-3.22-3.14c0-1.62 1.05-2.76 2.81-3.12c1.47-.3 2.98-.93 4.03-1.92c.28-.26.74-.14.82.23c.23 1.02.35 2.08.35 3.15c.01 2.65-2.14 4.8-4.79 4.8"></svg:path>`,
})
export class IcRoundWhatshotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWheelchairPickupIcon],svg[ic-round-wheelchair-pickup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m5.5 6.95V9c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h1v6c0 .55.45 1 1 1h2.5v-.11c-1.24-1.26-2-2.99-2-4.89c0-2.58 1.41-4.84 3.5-6.05M16.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3c0-1.11.61-2.06 1.5-2.58v-2.16c-2.02.64-3.5 2.51-3.5 4.74c0 2.76 2.24 5 5 5s5-2.24 5-5zm2.5-3h-4V9c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1h4.46l1.92 2.88c.31.46.93.58 1.39.28c.46-.31.58-.93.28-1.39l-2.21-3.32c-.19-.28-.51-.45-.84-.45"></svg:path>`,
})
export class IcRoundWheelchairPickupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWhereToVoteIcon],svg[ic-round-where-to-vote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2m-1.77 10.66l-1.41-1.41a.996.996 0 1 1 1.41-1.41l.71.71l2.83-2.83a.996.996 0 1 1 1.41 1.41l-3.54 3.54c-.38.38-1.02.38-1.41-.01"></svg:path>`,
})
export class IcRoundWhereToVoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWidgetsIcon],svg[ic-round-widgets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1m-9 7h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1M3 4v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1m12.95-1.6L11.7 6.64a.996.996 0 0 0 0 1.41l4.25 4.25c.39.39 1.02.39 1.41 0l4.25-4.25a.996.996 0 0 0 0-1.41L17.37 2.4c-.39-.39-1.03-.39-1.42 0"></svg:path>`,
})
export class IcRoundWidgetsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWidthFullIcon],svg[ic-round-width-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 6h1v12H4zm16 12h-1V6h1z"></svg:path>`,
})
export class IcRoundWidthFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWidthNormalIcon],svg[ic-round-width-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 6h4v12H4zm16 12h-4V6h4z"></svg:path>`,
})
export class IcRoundWidthNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWidthWideIcon],svg[ic-round-width-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 6h2v12H4zm16 12h-2V6h2z"></svg:path>`,
})
export class IcRoundWidthWideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiIcon],svg[ic-round-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.06 10.06c.51.51 1.32.56 1.87.1c4.67-3.84 11.45-3.84 16.13-.01c.56.46 1.38.42 1.89-.09c.59-.59.55-1.57-.1-2.1c-5.71-4.67-13.97-4.67-19.69 0c-.65.52-.7 1.5-.1 2.1m7.76 7.76l1.47 1.47c.39.39 1.02.39 1.41 0l1.47-1.47c.47-.47.37-1.28-.23-1.59a4.28 4.28 0 0 0-3.91 0c-.57.31-.68 1.12-.21 1.59m-3.73-3.73c.49.49 1.26.54 1.83.13a7.06 7.06 0 0 1 8.16 0c.57.4 1.34.36 1.83-.13l.01-.01c.6-.6.56-1.62-.13-2.11c-3.44-2.49-8.13-2.49-11.58 0c-.69.5-.73 1.51-.12 2.12"></svg:path>`,
})
export class IcRoundWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifi1BarIcon],svg[ic-round-wifi-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="18" r="2" fill="currentColor"></svg:circle>`,
})
export class IcRoundWifi1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifi2BarIcon],svg[ic-round-wifi-2-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-6.62-1.63c-.63-.63-.59-1.71.13-2.24C7.33 10.79 9.57 10 12 10s4.67.79 6.49 2.13c.72.53.76 1.6.13 2.24c-.53.54-1.37.57-1.98.12A7.93 7.93 0 0 0 12 13c-1.73 0-3.33.55-4.64 1.49c-.61.44-1.45.41-1.98-.12"></svg:path>`,
})
export class IcRoundWifi2BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiCallingIcon],svg[ic-round-wifi-calling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4.95C21.79 4.78 19.67 3 16.5 3c-3.18 0-5.29 1.78-5.5 1.95L16.5 12z"></svg:path><svg:path fill="currentColor" d="m19.2 15.28l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.04.57-1.64L8.72 4.8a2 2 0 0 0-1.99-1.77H5c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.37 15.9 15.9c1.13.07 2.07-.87 2.07-2v-1.73c0-1.02-.76-1.87-1.77-1.99"></svg:path>`,
})
export class IcRoundWifiCallingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiCalling3Icon],svg[ic-round-wifi-calling-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.54 4.8A7.9 7.9 0 0 0 16.49 3c-1.92 0-3.67.67-5.05 1.8c-.34.28-.36.79-.05 1.1l.01.01c.27.27.7.29 1 .05c1.12-.91 2.54-1.45 4.09-1.45s2.97.55 4.09 1.45c.3.24.73.23 1-.05l.01-.01c.31-.31.29-.83-.05-1.1"></svg:path><svg:path fill="currentColor" d="M19.45 8.04c.33-.33.28-.88-.11-1.15c-.8-.56-1.79-.89-2.85-.89s-2.04.33-2.85.89c-.38.27-.44.82-.11 1.15c.25.25.65.31.94.1c.57-.4 1.27-.64 2.02-.64s1.45.24 2.02.64c.29.21.69.15.94-.1m-2.96.86c-.32 0-.62.08-.89.21c-.3.15-.34.56-.11.79l.65.65c.2.2.51.2.71 0l.65-.65c.23-.23.19-.64-.11-.79c-.27-.14-.58-.21-.9-.21"></svg:path><svg:path fill="currentColor" d="m15.63 14.4l-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c.23-.24.33-.57.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03c.17 2.89 1.05 5.6 2.43 7.97c1.58 2.73 3.85 4.99 6.57 6.57c2.37 1.37 5.08 2.26 7.97 2.43c.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.67-.73a.99.99 0 0 0-.9.26"></svg:path>`,
})
export class IcRoundWifiCalling3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiChannelIcon],svg[ic-round-wifi-channel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.13 21c.5 0 .92-.38.99-.87c.65-4.89 1.95-9.01 2.88-10c.91.98 2.19 5.01 2.86 9.82c.08.6.59 1.05 1.19 1.05c.54 0 1.02-.36 1.16-.89c.62-2.38 1.9-5.11 2.79-5.11c.9 0 2.19 2.83 2.81 5.2c.12.48.56.8 1.05.8c.62 0 1.12-.52 1.09-1.14C20.75 15.89 19.81 3 16 3c-2.51 0-3.77 5.61-4.4 10.57C10.79 10.66 9.61 8 8 8c-2.92 0-4.41 8.71-4.85 11.87c-.09.6.38 1.13.98 1.13M16 13c-.99 0-1.82.62-2.5 1.5c.57-4.77 1.54-8.62 2.5-9.44c.97.81 1.91 4.67 2.49 9.43C17.81 13.62 16.98 13 16 13"></svg:path>`,
})
export class IcRoundWifiChannelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiFindIcon],svg[ic-round-wifi-find-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14c0-3.36 2.64-6 6-6c2.2 0 4.08 1.13 5.13 2.86l.36-.37c.86-.86.76-2.27-.2-3.01A16.9 16.9 0 0 0 12 4C8.13 4 4.56 5.3 1.71 7.48c-.96.74-1.06 2.15-.2 3.01l9.08 9.09c.78.78 2.05.78 2.83 0l.45-.45C12.14 18.09 11 16.2 11 14"></svg:path><svg:path fill="currentColor" d="M20.44 16.03c.35-.59.56-1.28.56-2.03c0-2.24-1.76-4-4-4s-4 1.76-4 4s1.76 4 4 4c.75 0 1.44-.21 2.03-.56l1.85 1.85a.996.996 0 1 0 1.41-1.41zM17 16c-1.12 0-2-.88-2-2s.88-2 2-2s2 .88 2 2s-.88 2-2 2"></svg:path>`,
})
export class IcRoundWifiFindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiLockIcon],svg[ic-round-wifi-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.21 8.24C20.22 5.6 16.3 4 12 4S3.78 5.6.79 8.24C.35 8.63.32 9.3.73 9.71l5.62 5.63l4.94 4.95c.39.39 1.02.39 1.42 0l2.34-2.34V15c0-.45.09-.88.23-1.29c.54-1.57 2.01-2.71 3.77-2.71h2.94l1.29-1.29c.4-.41.37-1.08-.07-1.47"></svg:path><svg:path fill="currentColor" d="M22 16v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z"></svg:path>`,
})
export class IcRoundWifiLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiOffIcon],svg[ic-round-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.06 10.14c.56.46 1.38.42 1.89-.09c.59-.59.55-1.57-.1-2.1c-3.59-2.94-8.2-4.03-12.55-3.26l2.59 2.59c2.89-.03 5.8.92 8.17 2.86m-2.27 1.83c-.78-.57-1.63-1-2.52-1.3l2.95 2.95c.24-.58.1-1.27-.43-1.65m-3.84 4.26a4.28 4.28 0 0 0-3.91 0c-.59.31-.7 1.12-.23 1.59l1.47 1.47c.39.39 1.02.39 1.41 0l1.47-1.47c.49-.47.39-1.28-.21-1.59m5.73 1.67L4.12 2.34a.996.996 0 1 0-1.41 1.41L5.05 6.1c-1.01.5-1.99 1.11-2.89 1.85a1.42 1.42 0 0 0-.1 2.1c.51.51 1.32.56 1.87.1c1-.82 2.1-1.46 3.25-1.93l2.23 2.23c-1.13.3-2.21.8-3.19 1.51c-.69.5-.73 1.51-.13 2.11l.01.01c.49.49 1.26.54 1.83.13a7.14 7.14 0 0 1 3.97-1.29l6.37 6.37c.39.39 1.02.39 1.41 0c.39-.37.39-1 0-1.39"></svg:path>`,
})
export class IcRoundWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiPasswordIcon],svg[ic-round-wifi-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.49 12.13A10.9 10.9 0 0 0 12 10c-2.43 0-4.67.79-6.49 2.13c-.72.53-.76 1.6-.13 2.24c.53.54 1.37.57 1.98.12A7.93 7.93 0 0 1 12 13c1.73 0 3.33.55 4.64 1.49c.62.44 1.45.41 1.98-.12c.64-.64.6-1.71-.13-2.24m4.31-4.24C19.86 5.46 16.1 4 12 4S4.14 5.46 1.2 7.89c-.67.55-.71 1.58-.09 2.21c.55.55 1.42.58 2.02.09a13.93 13.93 0 0 1 17.74 0c.6.49 1.47.46 2.02-.09c.62-.63.58-1.66-.09-2.21M12 16c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m11 3v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z"></svg:path>`,
})
export class IcRoundWifiPasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiProtectedSetupIcon],svg[ic-round-wifi-protected-setup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.7 5.3l1.44-1.44c.32-.32.09-.85-.35-.85H11.5c-.28 0-.5.22-.5.5V9.8c0 .45.54.67.85.35L13.3 8.7c1.97 1.46 3.25 3.78 3.25 6.42c0 .66-.08 1.31-.24 1.92c-.12.5.48.86.84.49a8.47 8.47 0 0 0 2.4-5.91c0-2.51-1.11-4.76-2.85-6.32m-4.55 8.56L10.7 15.3c-1.97-1.46-3.25-3.78-3.25-6.42c0-.66.08-1.31.24-1.92c.12-.5-.48-.86-.84-.49a8.474 8.474 0 0 0 .44 12.24l-1.44 1.44c-.32.32-.09.85.35.85h6.29c.28 0 .5-.22.5-.5v-6.29a.49.49 0 0 0-.84-.35"></svg:path>`,
})
export class IcRoundWifiProtectedSetupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiTetheringIcon],svg[ic-round-wifi-tethering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 2a6 6 0 0 0-6.75-5.95c-2.62.32-4.78 2.41-5.18 5.02c-.33 2.15.49 4.11 1.93 5.4c.48.43 1.23.33 1.56-.23l.01-.01c.24-.42.14-.93-.22-1.26a4 4 0 0 1-1.22-3.94a3.95 3.95 0 0 1 2.9-2.91A4 4 0 0 1 16 13c0 1.18-.52 2.23-1.33 2.96c-.36.32-.47.84-.23 1.26l.01.01c.31.53 1.03.69 1.5.28A6 6 0 0 0 18 13m-7.17-9.93c-4.62.52-8.35 4.33-8.78 8.96a9.97 9.97 0 0 0 4.02 9.01c.48.35 1.16.2 1.46-.31c.25-.43.14-.99-.26-1.29c-2.28-1.69-3.65-4.55-3.16-7.7c.54-3.5 3.46-6.29 6.98-6.68C15.91 4.51 20 8.28 20 13c0 2.65-1.29 4.98-3.27 6.44c-.4.3-.51.85-.26 1.29c.3.52.98.66 1.46.31A9.96 9.96 0 0 0 22 13c0-5.91-5.13-10.62-11.17-9.93"></svg:path>`,
})
export class IcRoundWifiTetheringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiTetheringErrorIcon],svg[ic-round-wifi-tethering-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.66 7.14c-2.24.48-4.04 2.3-4.52 4.54c-.37 1.75.02 3.38.89 4.66c.34.51 1.08.55 1.51.11c.35-.35.37-.88.1-1.28c-.5-.76-.75-1.71-.61-2.73c.23-1.74 1.67-3.17 3.41-3.4A4.003 4.003 0 0 1 16 13c0 .8-.24 1.54-.64 2.16c-.27.41-.25.95.1 1.29c.43.43 1.17.4 1.51-.11C17.62 15.4 18 14.25 18 13c0-3.75-3.45-6.7-7.34-5.86m-.41-3.99c-4.05.69-7.19 3.69-8.03 7.72c-.66 3.17.2 6.16 1.97 8.38c.37.46 1.07.49 1.49.07c.36-.36.39-.93.07-1.32a8 8 0 0 1-1.66-6.28c.55-3.47 3.42-6.24 6.92-6.65c2.76-.33 5.27.74 6.93 2.59c.2.21.47.34.76.34c.85 0 1.34-1.01.77-1.65c-2.19-2.45-5.56-3.82-9.22-3.2M12 11c-1.1 0-2 .9-2 2c0 .55.23 1.05.59 1.41s.86.59 1.41.59s1.05-.23 1.41-.59s.59-.86.59-1.41c0-1.1-.9-2-2-2m9-1c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1m0 8c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class IcRoundWifiTetheringErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiTetheringErrorRoundedIcon],svg[ic-round-wifi-tethering-error-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.66 7.14c-2.24.48-4.04 2.3-4.52 4.54c-.37 1.75.02 3.38.89 4.66c.34.51 1.08.55 1.51.11c.35-.35.37-.88.1-1.28c-.5-.76-.75-1.71-.61-2.73c.23-1.74 1.67-3.17 3.41-3.4A4.003 4.003 0 0 1 16 13c0 .8-.24 1.54-.64 2.16c-.27.41-.25.95.1 1.29c.43.43 1.17.4 1.51-.11C17.62 15.4 18 14.25 18 13c0-3.75-3.45-6.7-7.34-5.86m-.41-3.99c-4.05.69-7.19 3.69-8.03 7.72c-.66 3.17.2 6.16 1.97 8.38c.37.46 1.07.49 1.49.07c.36-.36.39-.93.07-1.32a8 8 0 0 1-1.66-6.28c.55-3.47 3.42-6.24 6.92-6.65c2.76-.33 5.27.74 6.93 2.59c.2.21.47.34.76.34c.85 0 1.34-1.01.77-1.65c-2.19-2.45-5.56-3.82-9.22-3.2M12 11c-1.1 0-2 .9-2 2c0 .55.23 1.05.59 1.41s.86.59 1.41.59s1.05-.23 1.41-.59s.59-.86.59-1.41c0-1.1-.9-2-2-2m9-1c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1m0 8c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class IcRoundWifiTetheringErrorRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWifiTetheringOffIcon],svg[ic-round-wifi-tethering-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.11 3.51c-.4.39-.4 1.03-.01 1.42l1.98 1.98A9.96 9.96 0 0 0 2 13c0 2.36.82 4.53 2.19 6.24c.37.47 1.07.5 1.5.08c.36-.36.39-.92.08-1.32A7.9 7.9 0 0 1 4 13c0-1.75.57-3.35 1.51-4.66l1.43 1.43A6 6 0 0 0 6 13c0 1.25.38 2.4 1.03 3.35c.34.5 1.08.54 1.51.11c.35-.35.37-.88.1-1.29C8.24 14.54 8 13.8 8 13c0-.63.15-1.23.41-1.76l1.61 1.61c0 .05-.02.1-.02.15c0 .55.23 1.05.59 1.41s.86.59 1.41.59c.05 0 .1-.01.16-.02l6.91 6.91a.996.996 0 1 0 1.41-1.41L3.51 3.51a.984.984 0 0 0-1.4 0M17.7 14.87c.19-.59.3-1.22.3-1.87c0-3.31-2.69-6-6-6c-.65 0-1.28.1-1.87.3l1.71 1.71C11.89 9 11.95 9 12 9c2.21 0 4 1.79 4 4c0 .05 0 .11-.01.16zM12 5c4.42 0 8 3.58 8 8c0 1.22-.27 2.37-.77 3.4l1.49 1.49A9.95 9.95 0 0 0 22 13c0-5.52-4.48-10-10-10c-1.78 0-3.44.46-4.89 1.28l1.48 1.48C9.63 5.27 10.78 5 12 5"></svg:path>`,
})
export class IcRoundWifiTetheringOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWindPowerIcon],svg[ic-round-wind-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3H5c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1M5 7H2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1M4 21h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m9.73-10.39c.75.23 1.3.78 1.57 1.46l4.27-7.11a2.28 2.28 0 0 0-3.51-2.84l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.93c.36-.15.98-.33 1.73-.1m-3.12 1.66c.16-.52.48-.96.89-1.27H3.28a2.279 2.279 0 0 0-.63 4.47l4.51 1.29c.53.15 1.1.08 1.58-.21l2.69-1.61a2.49 2.49 0 0 1-.82-2.67m11.6 6.34l-2.28-4.1a2.05 2.05 0 0 0-1.26-.97l-3.18-.8c.03.32 0 .66-.1.99A2.48 2.48 0 0 1 13 15.5c-.61 0-.99-.22-1-.22V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.89.89 2.33.89 3.22 0c.72-.72.88-1.83.38-2.72"></svg:path><svg:path fill="currentColor" d="M12.56 14.43c.79.24 1.63-.2 1.87-1c.24-.79-.2-1.63-1-1.87c-.79-.24-1.63.2-1.87 1c-.24.79.21 1.63 1 1.87"></svg:path>`,
})
export class IcRoundWindPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWindowIcon],svg[ic-round-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11V3H5c-1.1 0-2 .9-2 2v6zm2 0h8V5c0-1.1-.9-2-2-2h-6zm-2 2H3v6c0 1.1.9 2 2 2h6zm2 0v8h6c1.1 0 2-.9 2-2v-6z"></svg:path>`,
})
export class IcRoundWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWineBarIcon],svg[ic-round-wine-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3c-.55 0-1 .45-1 1v5c0 2.97 2.16 5.43 5 5.91V19H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4.09c2.84-.48 5-2.94 5-5.91V4c0-.55-.45-1-1-1zm9 5H8V5h8z"></svg:path>`,
})
export class IcRoundWineBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWomanIcon],svg[ic-round-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m16.45 14.63l-2.52-6.32c-.32-.79-1.08-1.3-1.94-1.31c-.85 0-1.62.51-1.94 1.31l-2.52 6.32c-.25.66.24 1.37.94 1.37H10v5c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5h1.53c.7 0 1.19-.71.92-1.37"></svg:path>`,
})
export class IcRoundWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWoman2Icon],svg[ic-round-woman-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.94 8.31a2.08 2.08 0 0 0-2.48-1.24c-.66.17-1.18.7-1.43 1.34l-2.48 6.22c-.27.66.22 1.37.92 1.37h2.03v5c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-5h2.03c.71 0 1.19-.71.93-1.37z"></svg:path><svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle>`,
})
export class IcRoundWoman2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWooCommerceIcon],svg[ic-round-woo-commerce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.14 7H3.86C2.83 7 1.99 7.84 2 8.86v6.21c0 1.03.83 1.86 1.86 1.86h7.71l3.52 1.96l-.8-1.96h5.84c1.03 0 1.86-.83 1.86-1.86V8.86C22 7.83 21.17 7 20.14 7M3.51 8.44c-.23.02-.4.1-.51.25c-.12.15-.16.34-.13.55c.48 3.07.93 5.13 1.35 6.21c.16.39.35.58.57.56c.34-.02.75-.5 1.23-1.42c.25-.52.65-1.31 1.18-2.35c.44 1.55 1.05 2.71 1.81 3.48c.21.22.43.32.65.3a.51.51 0 0 0 .43-.29c.08-.16.11-.34.1-.54c-.05-.74.02-1.78.23-3.12c.21-1.37.47-2.36.79-2.95a.69.69 0 0 0-.17-.86a.72.72 0 0 0-.52-.16c-.24.02-.42.13-.54.36q-.765 1.38-1.08 4.5c-.31-.78-.57-1.71-.78-2.8c-.09-.49-.31-.72-.67-.69c-.24.02-.45.18-.61.49l-1.79 3.41c-.29-1.19-.57-2.63-.83-4.34c-.05-.43-.29-.62-.71-.59m15.76.59c.58.12 1.01.43 1.31.95c.26.44.39.97.39 1.61c0 .84-.21 1.61-.64 2.31q-.735 1.23-1.92 1.23c-.14 0-.29-.02-.44-.05a1.88 1.88 0 0 1-1.31-.95q-.39-.675-.39-1.62c0-.84.21-1.61.64-2.31q.75-1.23 1.92-1.23c.14.01.28.03.44.06m-.34 4.42c.3-.27.51-.67.62-1.21c.03-.19.06-.39.06-.61c0-.24-.05-.49-.15-.74c-.12-.32-.29-.49-.48-.53c-.29-.06-.58.11-.85.51a2.6 2.6 0 0 0-.49 1.57c0 .24.05.49.15.74c.12.32.29.49.48.53c.2.04.42-.05.66-.26m-3.48-3.47c-.29-.52-.74-.83-1.31-.95c-.15-.03-.3-.05-.44-.05q-1.17 0-1.92 1.23a4.3 4.3 0 0 0-.64 2.31q0 .945.39 1.62c.29.52.73.83 1.31.95c.16.03.3.05.44.05q1.185 0 1.92-1.23c.43-.7.64-1.47.64-2.31c0-.65-.13-1.18-.39-1.62m-1.03 2.26c-.11.54-.32.94-.62 1.21c-.24.21-.46.3-.66.26s-.36-.21-.48-.53c-.1-.25-.15-.51-.15-.74c0-.2.02-.41.06-.6c.07-.34.21-.66.43-.97c.27-.4.56-.56.85-.51c.2.04.36.21.48.53c.1.25.15.51.15.74c0 .22-.02.42-.06.61"></svg:path>`,
})
export class IcRoundWooCommerceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWordpressIcon],svg[ic-round-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2M3.01 12c0-1.3.28-2.54.78-3.66l4.29 11.75c-3-1.46-5.07-4.53-5.07-8.09M12 20.99c-.88 0-1.73-.13-2.54-.37l2.7-7.84l2.76 7.57c.02.04.04.09.06.12c-.93.34-1.93.52-2.98.52m1.24-13.21c.54-.03 1.03-.09 1.03-.09c.48-.06.43-.77-.06-.74c0 0-1.46.11-2.4.11c-.88 0-2.37-.11-2.37-.11c-.48-.02-.54.72-.05.75c0 0 .46.06.94.09l1.4 3.84l-1.97 5.9l-3.27-9.75c.54-.02 1.03-.08 1.03-.08c.48-.06.43-.77-.06-.74c0 0-1.46.11-2.4.11c-.17 0-.37 0-.58-.01C6.1 4.62 8.86 3.01 12 3.01c2.34 0 4.47.89 6.07 2.36c-.04 0-.08-.01-.12-.01c-.88 0-1.51.77-1.51 1.6c0 .74.43 1.37.88 2.11c.34.6.74 1.37.74 2.48c0 .77-.3 1.66-.68 2.91l-.9 3zm6.65-.09a8.99 8.99 0 0 1-3.37 12.08l2.75-7.94c.51-1.28.68-2.31.68-3.22c0-.33-.02-.64-.06-.92"></svg:path>`,
})
export class IcRoundWordpressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWorkIcon],svg[ic-round-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"></svg:path>`,
})
export class IcRoundWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWorkHistoryIcon],svg[ic-round-work-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68A6.995 6.995 0 0 1 18 11m-8-7h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85z"></svg:path>`,
})
export class IcRoundWorkHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWorkOffIcon],svg[ic-round-work-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.11 2.54A.996.996 0 1 0 2.7 3.95L4.74 6H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h15.74l1.29 1.29a.996.996 0 1 0 1.41-1.41zM10 4h4v2h-3.6L22 17.6V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-.99 0-1.8.7-1.96 1.64L10 5.6z"></svg:path>`,
})
export class IcRoundWorkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWorkOutlineIcon],svg[ic-round-work-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6V4h-4v2zM4 9v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1m16-3c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z"></svg:path>`,
})
export class IcRoundWorkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWorkspacePremiumIcon],svg[ic-round-workspace-premium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.92 12.75l1.08-.82l1.07.81c.39.29.92-.08.78-.55l-.42-1.36l1.2-.95c.37-.28.16-.88-.32-.88h-1.4l-.43-1.34a.5.5 0 0 0-.95 0L11.09 9H9.68c-.47 0-.68.6-.31.89l1.19.95l-.42 1.36c-.14.47.39.84.78.55M6 21.61c0 .68.67 1.16 1.32.95L12 21l4.68 1.56a.998.998 0 0 0 1.32-.95v-6.33A7.96 7.96 0 0 0 20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28zM12 4c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6"></svg:path>`,
})
export class IcRoundWorkspacePremiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWorkspacesIcon],svg[ic-round-workspaces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m6-10C9.8 3 8 4.8 8 7s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m6 10c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4"></svg:path>`,
})
export class IcRoundWorkspacesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWrapTextIcon],svg[ic-round-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1m11.83 4H5c-.55 0-1 .45-1 1s.45 1 1 1h12.13c1 0 1.93.67 2.09 1.66c.21 1.25-.76 2.34-1.97 2.34H15v-.79c0-.45-.54-.67-.85-.35l-1.79 1.79c-.2.2-.2.51 0 .71l1.79 1.79c.32.32.85.09.85-.35V19h2c2.34 0 4.21-2.01 3.98-4.39c-.2-2.08-2.06-3.61-4.15-3.61M9 17H5c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundWrapTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWrongLocationIcon],svg[ic-round-wrong-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.42 4.5l1.38-1.38a.996.996 0 1 0-1.41-1.41L19 3.08L17.62 1.7a.996.996 0 1 0-1.41 1.41l1.38 1.38l-1.38 1.38a.996.996 0 1 0 1.41 1.41L19 5.92l1.38 1.38a.996.996 0 1 0 1.41-1.41z"></svg:path><svg:path fill="currentColor" d="M19.67 8L19 7.33l-.59.59c-.7.7-1.84.88-2.65.3a2.005 2.005 0 0 1-.26-3.05l.67-.67l-.67-.67c-.36-.36-.54-.81-.57-1.28C14.01 2.19 13.02 2 12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2c0-.76-.1-1.47-.26-2.14c-.02-.02-.05-.04-.07-.06M12 12c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcRoundWrongLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundWysiwygIcon],svg[ic-round-wysiwyg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 16H5V7h14zm-3-7H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m-4 4H8c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundWysiwygIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundYardIcon],svg[ic-round-yard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 8.22a1.562 1.562 0 0 1 2.45-1.28l-.01-.12c0-.86.7-1.56 1.56-1.56s1.56.7 1.56 1.56l-.01.12A1.562 1.562 0 0 1 16 8.22c0 .62-.37 1.16-.89 1.4c.52.25.89.79.89 1.41c0 .86-.7 1.56-1.56 1.56c-.33 0-.64-.11-.89-.28l.01.12c0 .86-.7 1.56-1.56 1.56s-1.56-.7-1.56-1.56l.01-.12A1.562 1.562 0 0 1 8 11.03c0-.62.37-1.16.89-1.4C8.37 9.38 8 8.84 8 8.22M12 19c-2.83 0-5.21-1.97-5.84-4.61c-.18-.74.49-1.4 1.23-1.23C10.03 13.79 12 16.17 12 19c0-2.83 1.97-5.21 4.61-5.84c.74-.18 1.4.49 1.23 1.23A6.015 6.015 0 0 1 12 19"></svg:path><svg:circle cx="12" cy="9.62" r="1.56" fill="currentColor"></svg:circle>`,
})
export class IcRoundYardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundYoutubeSearchedForIcon],svg[ic-round-youtube-searched-for-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.01 14h-.8l-.27-.27a6.48 6.48 0 0 0 1.51-5.09C17.11 6 15.1 3.78 12.5 3.18C8.26 2.2 4.51 5.53 4.51 9.5h-2.1a.5.5 0 0 0-.31.89l3.4 2.75c.19.2.51.21.71.01l2.9-2.79c.32-.31.1-.86-.35-.86H6.51c0-2.49 2-4.48 4.46-4.5c2.44-.02 4.54 2.05 4.54 4.49c0 2.48-2.02 4.51-4.5 4.51c-.45 0-.89-.07-1.3-.19c-.34-.1-.71 0-.96.26c-.53.53-.32 1.45.39 1.66c.59.17 1.22.27 1.87.27c1.61 0 3.08-.59 4.22-1.57l.27.27v.79l4.27 4.25c.41.41 1.07.41 1.48 0s.41-1.08 0-1.49z"></svg:path>`,
})
export class IcRoundYoutubeSearchedForIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundZoomInIcon],svg[ic-round-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34c-4.23-.52-7.78 3.04-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14m0-7c-.28 0-.5.22-.5.5V9H7.5c-.28 0-.5.22-.5.5s.22.5.5.5H9v1.5c0 .28.22.5.5.5s.5-.22.5-.5V10h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10V7.5c0-.28-.22-.5-.5-.5"></svg:path>`,
})
export class IcRoundZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundZoomInMapIcon],svg[ic-round-zoom-in-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1.59L4.62 3.21a.996.996 0 1 0-1.41 1.41L5.59 7H4c-.55 0-1 .45-1 1m17-1h-1.59l2.38-2.38a.996.996 0 1 0-1.41-1.41L17 5.59V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1M4 17h1.59l-2.38 2.38a.996.996 0 1 0 1.41 1.41L7 18.41V20c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m17-1c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.38 2.38a.996.996 0 1 0 1.41-1.41L18.41 17H20c.55 0 1-.45 1-1"></svg:path>`,
})
export class IcRoundZoomInMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundZoomOutIcon],svg[ic-round-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14m-2-5h4c.28 0 .5.22.5.5s-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5"></svg:path>`,
})
export class IcRoundZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundZoomOutMapIcon],svg[ic-round-zoom-out-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.85 3.85L17.3 5.3l-2.18 2.16c-.39.39-.39 1.03 0 1.42s1.03.39 1.42 0L18.7 6.7l1.45 1.45a.5.5 0 0 0 .85-.36V3.5c0-.28-.22-.5-.5-.5h-4.29a.5.5 0 0 0-.36.85m-12 4.3L5.3 6.7l2.16 2.18c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42L6.7 5.3l1.45-1.45A.5.5 0 0 0 7.79 3H3.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.36m4.3 12L6.7 18.7l2.18-2.16c.39-.39.39-1.03 0-1.42s-1.03-.39-1.42 0L5.3 17.3l-1.45-1.45a.5.5 0 0 0-.85.36v4.29c0 .28.22.5.5.5h4.29a.5.5 0 0 0 .36-.85m12-4.3L18.7 17.3l-2.16-2.18c-.39-.39-1.03-.39-1.42 0s-.39 1.03 0 1.42l2.18 2.16l-1.45 1.45a.5.5 0 0 0 .36.85h4.29c.28 0 .5-.22.5-.5v-4.29a.5.5 0 0 0-.85-.36"></svg:path>`,
})
export class IcRoundZoomOutMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp10kIcon],svg[ic-sharp-10k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10.5h1.5v3H10zM21 3H3v18h18zM7.5 15H6v-4.5H4.5V9h3zM13 9v6H8.5V9zm6 6h-1.75l-1.75-2.25V15H14V9h1.5v2.25L17.25 9H19l-2.25 3z"></svg:path>`,
})
export class IcSharp10kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp10mpIcon],svg[ic-sharp-10mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 7H15v3h-1.5zM21 3H3v18h18zm-8.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm2.5 0h-1.5v-6H18V17h-3zm-5-13v6H8.5V7H7V5.5zm6.5 0v6H12v-6zM15 14h1.5v1.5H15z"></svg:path>`,
})
export class IcSharp10mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp11mpIcon],svg[ic-sharp-11mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm5 2.5h3v6H9.5V7H8zm4.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm.5-13h3v6h-1.5V7H13zM18 17h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path>`,
})
export class IcSharp11mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp123Icon],svg[ic-sharp-123-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15H5.5v-4.5H4V9h3zm6.5-1.5h-3v-1h3V9H9v1.5h3v1H9V15h4.5zm6 1.5V9H15v1.5h3v1h-2v1h2v1h-3V15z"></svg:path>`,
})
export class IcSharp123Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp12mpIcon],svg[ic-sharp-12mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm9 5h3V7h-3V5.5h4.5V9h-3v1h3v1.5H12zM7 5.5h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path>`,
})
export class IcSharp12mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp13mpIcon],svg[ic-sharp-13mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm9 7h3V9h-2V8h2V7h-3V5.5h4.5v6H12zM7 5.5h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path>`,
})
export class IcSharp13mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp14mpIcon],svg[ic-sharp-14mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm9 2.5h1.5v3H15v-3h1.5v3h1V10h-1v1.5H15V10h-3zm-5 0h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path>`,
})
export class IcSharp14mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp15mpIcon],svg[ic-sharp-15mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm9 7h3V9h-3V5.5h4.5V7h-3v1h3v3.5H12zM7 5.5h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path>`,
})
export class IcSharp15mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp16mpIcon],svg[ic-sharp-16mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm9 2.5h4.5V7h-3v1h3v3.5H12zm-5 0h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M13.5 9H15v1.5h-1.5z"></svg:path>`,
})
export class IcSharp16mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp17mpIcon],svg[ic-sharp-17mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm4 2.5h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM12 7V5.5h4.87l-1.87 6h-1.75L14.62 7zm6 10h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path>`,
})
export class IcSharp17mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp18UpRatingIcon],svg[ic-sharp-18-up-rating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12.5h1.5V14H13zm0-2.5h1.5v1.5H13z"></svg:path><svg:path fill="currentColor" d="M21 3H3v18h18zM10 15H8.5v-4.5H7V9h3zm6-1c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H15c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcSharp18UpRatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp18mpIcon],svg[ic-sharp-18mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 9H15v1.5h-1.5zm0-2.5H15V8h-1.5z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm9 2.5h4.5v6H12zm-5 0h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path>`,
})
export class IcSharp18mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp19mpIcon],svg[ic-sharp-19mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 6.5H15V8h-1.5zM15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm9 7h3V9h-3V5.5h4.5v6H12zM7 5.5h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path>`,
})
export class IcSharp19mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp1kIcon],svg[ic-sharp-1k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM10 15H8.5v-4.5H7V9h3zm7 0h-1.75l-1.75-2.25V15H12V9h1.5v2.25L15.25 9H17l-2.25 3z"></svg:path>`,
})
export class IcSharp1kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp1kPlusIcon],svg[ic-sharp-1k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM9 15H7.5v-4.5H6V9h3zm4.75 0L12 12.75V15h-1.5V9H12v2.25L13.75 9h1.75l-2.25 3l2.25 3zM19 12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z"></svg:path>`,
})
export class IcSharp1kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp1xMobiledataIcon],svg[ic-sharp-1x-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7h4v10H6V9H4zm11.83 4.72L18.66 7h-2.33l-1.66 2.77L13 7h-2.33l2.83 4.72L10.33 17h2.33l2-3.34l2 3.34H19z"></svg:path>`,
})
export class IcSharp1xMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp20mpIcon],svg[ic-sharp-20mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 7H16v3h-1.5z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm3.5 5h3V7h-3V5.5H11V9H8v1h3v1.5H6.5zm6 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm.5-13h4.5v6H13zM18 17h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path>`,
})
export class IcSharp20mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp21mpIcon],svg[ic-sharp-21mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm4.5 5h3V7h-3V5.5H12V9H9v1h3v1.5H7.5zm5 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm.5-13h3v6h-1.5V7H13zM18 17h-3v1.5h-1.5v-6H18z"></svg:path>`,
})
export class IcSharp21mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp22mpIcon],svg[ic-sharp-22mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm3.5 5h3V7h-3V5.5H11V9H8v1h3v1.5H6.5zm6 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM13 8h3V7h-3V5.5h4.5V9h-3v1h3v1.5H13zm5 9h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path>`,
})
export class IcSharp22mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp23mpIcon],svg[ic-sharp-23mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm3.5 5h3V7h-3V5.5H11V9H8v1h3v1.5H6.5zm6 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM13 10h3V9h-2V8h2V7h-3V5.5h4.5v6H13zm5 7h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path>`,
})
export class IcSharp23mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp24mpIcon],svg[ic-sharp-24mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm3.5 5h3V7h-3V5.5H11V9H8v1h3v1.5H6.5zm6 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18zm.5-7h-1v1.5H16V10h-3V5.5h1.5v3H16v-3h1.5v3h1z"></svg:path>`,
})
export class IcSharp24mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp2kIcon],svg[ic-sharp-2k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM8 12.5v1h3V15H6.5v-3.5h3v-1h-3V9H11v3.5zM18 15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z"></svg:path>`,
})
export class IcSharp2kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp2kPlusIcon],svg[ic-sharp-2k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-11 9.5H7.5v1H10V15H6v-3.5h2.5v-1H6V9h4zm4.25 2.5l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3L16 15zM19 12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z"></svg:path>`,
})
export class IcSharp2kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp2mpIcon],svg[ic-sharp-2mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm7 5h3V7h-3V5.5h4.5V9h-3v1h3v1.5H10zm2.5 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path>`,
})
export class IcSharp2mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp30fpsIcon],svg[ic-sharp-30fps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v3h6v2.5H3v3h5V16H2v3h9V5zm17 3v8h-4V8zm3-3H12v14h10z"></svg:path>`,
})
export class IcSharp30fpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp30fpsSelectIcon],svg[ic-sharp-30fps-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v2h5v2H5v2h4v2H4v2h7V4zm9 0h7v10h-7zm5 2h-3v6h3zM5 22H3v-5h2zm4 0H7v-5h2zm4 0h-2v-5h2zm8 0h-6v-5h6z"></svg:path>`,
})
export class IcSharp30fpsSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp360Icon],svg[ic-sharp-360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77V20l4-4l-4-4v2.73c-3.15-.56-5-1.9-5-2.73c0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58c0-2.76-4.48-5-10-5"></svg:path>`,
})
export class IcSharp360Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp3dRotationIcon],svg[ic-sharp-3d-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.53 21.48A10.49 10.49 0 0 1 1.56 13H.06c.51 6.16 5.66 11 11.95 11l.66-.03l-3.81-3.81zm.89-6.52c-.19 0-.37-.03-.52-.08a1.1 1.1 0 0 1-.4-.24c-.11-.1-.2-.22-.26-.37c-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95s.33.5.56.69c.24.18.51.32.82.41q.45.15.96.15c.37 0 .72-.05 1.03-.15c.32-.1.6-.25.83-.44s.42-.43.55-.72s.2-.61.2-.97c0-.19-.02-.38-.07-.56a1.7 1.7 0 0 0-.23-.51c-.1-.16-.24-.3-.4-.43c-.17-.13-.37-.23-.61-.31a2.1 2.1 0 0 0 .89-.75c.1-.15.17-.3.22-.46s.07-.32.07-.48q0-.54-.18-.96c-.18-.42-.29-.51-.51-.69c-.2-.19-.47-.33-.77-.43C9.11 8.05 8.77 8 8.4 8c-.36 0-.69.05-1 .16c-.3.11-.57.26-.79.45c-.21.19-.38.41-.51.67c-.12.26-.18.54-.18.85h1.3q0-.255.09-.45c.09-.195.14-.25.25-.34s.23-.17.38-.22s.3-.08.48-.08c.4 0 .7.1.89.31c.19.2.29.49.29.86c0 .18-.03.34-.08.49s-.14.27-.25.37s-.25.18-.41.24s-.36.09-.58.09h-.77v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4s.1.35.1.57c0 .41-.12.72-.35.93c-.23.23-.55.33-.95.33m8.55-5.92c-.32-.33-.7-.59-1.14-.77Q15.17 8 14.36 8H12v8h2.3c.55 0 1.06-.09 1.51-.27s.84-.43 1.16-.76s.57-.73.74-1.19c.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57s-.42-.87-.74-1.2m-.39 3.16c0 .42-.05.79-.14 1.13c-.1.33-.24.62-.43.85s-.43.41-.71.53q-.435.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69c.38.46.57 1.12.57 1.99zM12.01 0l-.66.03l3.81 3.81l1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.45 4.84 18.3 0 12.01 0"></svg:path>`,
})
export class IcSharp3dRotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp3gMobiledataIcon],svg[ic-sharp-3g-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h5v2H4v2h4v2H3v2h7V7zm18 4v6h-9V7h9v2h-7v6h5v-2h-2.5v-2z"></svg:path>`,
})
export class IcSharp3gMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp3kIcon],svg[ic-sharp-3k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM11 9v6H6.5v-1.5h3v-1h-2v-1h2v-1h-3V9zm7 6h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z"></svg:path>`,
})
export class IcSharp3kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp3kPlusIcon],svg[ic-sharp-3k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM10 9v6H5.5v-1.5h3v-1h-2v-1h2v-1h-3V9zm6 6h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm3-2.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z"></svg:path>`,
})
export class IcSharp3kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp3mpIcon],svg[ic-sharp-3mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM10 10h3V9h-2V8h2V7h-3V5.5h4.5v6H10zm8 7h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path>`,
})
export class IcSharp3mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp3pIcon],svg[ic-sharp-3p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20l4-4h16V2zm10 4c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m4 8H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 13.43z"></svg:path>`,
})
export class IcSharp3pIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp4gMobiledataIcon],svg[ic-sharp-4g-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7H7v5H5V7H3v7h4v3h2v-3h2v-2H9zm8 4v2h2v2h-5V9h7V7h-9v10h9v-6z"></svg:path>`,
})
export class IcSharp4gMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp4gPlusMobiledataIcon],svg[ic-sharp-4g-plus-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11v2h2v2h-4V9h6V7H9v10h8v-6zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7z"></svg:path>`,
})
export class IcSharp4gPlusMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp4kIcon],svg[ic-sharp-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-9 10.51h-1V15H9.5v-1.5h-3V9H8v3h1.5V9H11v3h1zM18.2 15h-1.7l-2-3v3H13V9h1.5v3l2-3h1.7l-2 3z"></svg:path>`,
})
export class IcSharp4kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp4kPlusIcon],svg[ic-sharp-4k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM11 13.5h-1V15H8.5v-1.5h-3V9H7v3h1.5V9H10v3h1zm3.75 1.5L13 12.75V15h-1.5V9H13v2.25L14.75 9h1.75l-2.25 3l2.25 3zM19 12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z"></svg:path>`,
})
export class IcSharp4kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp4mpIcon],svg[ic-sharp-4mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm-3-8.5V5.5H11v3h1.5v-3H14v3h1V10h-1v1.5h-1.5V10zm8.5 7h-3v1.5h-1.5v-6H18z"></svg:path>`,
})
export class IcSharp4mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp5gIcon],svg[ic-sharp-5g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13h2v2h-5V9h7V7h-9v10h9v-6h-4zM3 13h5v2H3v2h7v-6H5V9h5V7H3z"></svg:path>`,
})
export class IcSharp5gIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp5kIcon],svg[ic-sharp-5k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-10 7.5H8v1h3V15H6.5v-1.5h3v-1h-3V9H11zm7 4.5h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z"></svg:path>`,
})
export class IcSharp5kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp5kPlusIcon],svg[ic-sharp-5k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-11 7.5H7.5v1H10V15H6v-1.5h2.5v-1H6V9h4zm6 4.5h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm3-2.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z"></svg:path>`,
})
export class IcSharp5kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp5mpIcon],svg[ic-sharp-5mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm7 7h3V9h-3V5.5h4.5V7h-3v1h3v3.5H10zm2.5 8.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path>`,
})
export class IcSharp5mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp6FtApartIcon],svg[ic-sharp-6-ft-apart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 9.43V10h8zM18 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 9.43V10h8zM19 17v-2.01L5 15v2l-3-3l3-3v2.01L19 13v-2l3 3zm-9 2v-1H7v4h3v-2.5H8V19zm-1 1.5v.5H8v-.5zm8.5-1.5h-1v3h-1v-3h-1v-1h3zm-5 0v.5h1v1h-1V22h-1v-4H14v1z"></svg:path>`,
})
export class IcSharp6FtApartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp60fpsIcon],svg[ic-sharp-60fps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8v8h-4V8zm3-3H12v14h10zM10 8V5H2v14h9v-9H5V8zm-2 5v3H5v-3z"></svg:path>`,
})
export class IcSharp60fpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp60fpsSelectIcon],svg[ic-sharp-60fps-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6v6h-3V6zm2-2h-7v10h7zm-9 2V4H4v10h7V8H6V6zm-2 4v2H6v-2zM5 22H3v-5h2zm4 0H7v-5h2zm4 0h-2v-5h2zm8 0h-6v-5h6z"></svg:path>`,
})
export class IcSharp60fpsSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp6kIcon],svg[ic-sharp-6k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12.5h1.5V14H8zM21 3H3v18h18zm-10 7.5H8v1h3V15H6.5V9H11zm7 4.5h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z"></svg:path>`,
})
export class IcSharp6kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp6kPlusIcon],svg[ic-sharp-6k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 12.5h1V14h-1zM21 3H3v18h18zm-11 7.5H7.5v1H10V15H6V9h4zm6 4.5h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm3-2.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z"></svg:path>`,
})
export class IcSharp6kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp6mpIcon],svg[ic-sharp-6mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm7 2.5h4.5V7h-3v1h3v3.5H10zm2.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M11.5 9H13v1.5h-1.5z"></svg:path>`,
})
export class IcSharp6mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp7kIcon],svg[ic-sharp-7k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM9.5 15H7.75l1.38-4.5H6.5V9h4.86zm8.5 0h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z"></svg:path>`,
})
export class IcSharp7kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp7kPlusIcon],svg[ic-sharp-7k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM8.5 15H6.75l1.38-4.5H5.5V9h4.86zm7.5 0h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm3-2.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z"></svg:path>`,
})
export class IcSharp7kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp7mpIcon],svg[ic-sharp-7mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm-1.25-7L12.62 7H10V5.5h4.87l-1.87 6zM18 17h-3v1.5h-1.5v-6H18z"></svg:path>`,
})
export class IcSharp7mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp8kIcon],svg[ic-sharp-8k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12.5h1.5V14H8zM8 10h1.5v1.5H8zm13-7H3v18h18zm-10 7v4c0 .55-.45 1-1 1H7.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H10c.55 0 1 .45 1 1m7 5h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z"></svg:path>`,
})
export class IcSharp8kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp8kPlusIcon],svg[ic-sharp-8k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 12.5h1V14h-1zm0-2.5h1v1.5h-1zM21 3H3v18h18zM10 14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1zm6 1h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm3-2.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z"></svg:path>`,
})
export class IcSharp8kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp8mpIcon],svg[ic-sharp-8mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15zm-3.5-7.5H13V8h-1.5z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm7 2.5h4.5v6H10zm2.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M11.5 9H13v1.5h-1.5z"></svg:path>`,
})
export class IcSharp8mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp9kIcon],svg[ic-sharp-9k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10h1.5v1.5H8zm13-7H3v18h18zM11 9v6H6.5v-1.5h3v-1h-3V9zm7 6h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z"></svg:path>`,
})
export class IcSharp9kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp9kPlusIcon],svg[ic-sharp-9k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 10h1v1.5h-1zM21 3H3v18h18zM10 9v6H6v-1.5h2.5v-1H6V9zm6 6h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm3-2.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z"></svg:path>`,
})
export class IcSharp9kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharp9mpIcon],svg[ic-sharp-9mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm7 7h3V9h-3V5.5h4.5v6H10zm2.5 8.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M11.5 6.5H13V8h-1.5z"></svg:path>`,
})
export class IcSharp9mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAbcIcon],svg[ic-sharp-abc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h-1.5v-.5h-2v3h2V13H21v2h-5V9h5zM8 9v6H6.5v-1.5h-2V15H3V9zm-1.5 1.5h-2V12h2zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-4V9h4c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M11 10.5v.75h2v-.75zm2 2.25h-2v.75h2z"></svg:path>`,
})
export class IcSharpAbcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAcUnitIcon],svg[ic-sharp-ac-unit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h-4.17l3.24-3.24l-1.41-1.42L15 11h-2V9l4.66-4.66l-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93L6.34 4.34L11 9v2H9L4.34 6.34L2.93 7.76L6.17 11H2v2h4.17l-3.24 3.24l1.41 1.42L9 13h2v2l-4.66 4.66l1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24l1.42-1.41L13 15v-2h2l4.66 4.66l1.41-1.42L17.83 13H22z"></svg:path>`,
})
export class IcSharpAcUnitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccessAlarmIcon],svg[ic-sharp-access-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53zM12.5 8H11v6l4.75 2.85l.75-1.23l-4-2.37zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18m0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7"></svg:path>`,
})
export class IcSharpAccessAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccessAlarmsIcon],svg[ic-sharp-access-alarms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 5.7l-4.6-3.9l-1.3 1.5l4.6 3.9zM7.9 3.4L6.6 1.9L2 5.7l1.3 1.5zM12.5 8H11v6l4.7 2.9l.8-1.2l-4-2.4zM12 4c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9m0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7"></svg:path>`,
})
export class IcSharpAccessAlarmsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccessTimeIcon],svg[ic-sharp-access-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"></svg:path>`,
})
export class IcSharpAccessTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccessTimeFilledIcon],svg[ic-sharp-access-time-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m3.3 14.71L11 12.41V7h2v4.59l3.71 3.71z"></svg:path>`,
})
export class IcSharpAccessTimeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccessibilityIcon],svg[ic-sharp-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m9 7h-6v13h-2v-6h-2v6H9V9H3V7h18z"></svg:path>`,
})
export class IcSharpAccessibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccessibilityNewIcon],svg[ic-sharp-accessibility-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2"></svg:path>`,
})
export class IcSharpAccessibilityNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccessibleIcon],svg[ic-sharp-accessible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45c-.01 0-.01-.01-.02-.01H13c-.37-.21-.78-.31-1.25-.25C10.73 7.15 10 8.07 10 9.1V17h7v5h2v-7.5h-5v-3.45c1.29 1.07 3.25 1.94 5 1.95m-6.17 5c-.41 1.16-1.52 2-2.83 2c-1.66 0-3-1.34-3-3c0-1.31.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9z"></svg:path>`,
})
export class IcSharpAccessibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccessibleForwardIcon],svg[ic-sharp-accessible-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="4.54" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 17h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5m5-3.5h-3.86l1.67-3.67C18.42 8.5 17.44 7 15.96 7h-5.2c-.81 0-1.54.47-1.87 1.2L8.22 10l1.92.53l.65-1.53H13l-3.12 7H18v5h2z"></svg:path>`,
})
export class IcSharpAccessibleForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccountBalanceIcon],svg[ic-sharp-account-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10v7h3v-7zm6 0v7h3v-7zM2 22h19v-3H2zm14-12v7h3v-7zm-4.5-9L2 6v2h19V6z"></svg:path>`,
})
export class IcSharpAccountBalanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccountBalanceWalletIcon],svg[ic-sharp-account-balance-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v3H3V3h18v3H10v12zm-9-2h10V8H12zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcSharpAccountBalanceWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccountBoxIcon],svg[ic-sharp-account-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-9 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58z"></svg:path>`,
})
export class IcSharpAccountBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccountCircleIcon],svg[ic-sharp-account-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88a9.95 9.95 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20"></svg:path>`,
})
export class IcSharpAccountCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAccountTreeIcon],svg[ic-sharp-account-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"></svg:path>`,
})
export class IcSharpAccountTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAdUnitsIcon],svg[ic-sharp-ad-units-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1H5v22h14zm-2 18H7V5h10z"></svg:path><svg:path fill="currentColor" d="M8 6h8v2H8z"></svg:path>`,
})
export class IcSharpAdUnitsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAdbIcon],svg[ic-sharp-adb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5zM16.12 4.37l2.1-2.1l-.82-.83l-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83l2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63M9 9c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpAdbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddIcon],svg[ic-sharp-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></svg:path>`,
})
export class IcSharpAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddAPhotoIcon],svg[ic-sharp-add-a-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4V1h2v3h3v2H5v3H3V6H0V4zm3 6V7h3V4h7l1.83 2H23v16H3V10zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5m-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3"></svg:path>`,
})
export class IcSharpAddAPhotoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddAlarmIcon],svg[ic-sharp-add-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.88 3.39L6.6 1.86L2 5.71l1.29 1.53zM22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18m0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7m1-11h-2v3H8v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class IcSharpAddAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddAlertIcon],svg[ic-sharp-add-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99m7-6v-6c0-3.35-2.36-6.15-5.5-6.83V1.5h-3v2.67C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1zm-3-3.99h-3v3h-2v-3H8V11h3V8h2v3h3z"></svg:path>`,
})
export class IcSharpAddAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddBoxIcon],svg[ic-sharp-add-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-4 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"></svg:path>`,
})
export class IcSharpAddBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddBusinessIcon],svg[ic-sharp-add-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zM2 4h15v2H2z"></svg:path><svg:path fill="currentColor" d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class IcSharpAddBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddCardIcon],svg[ic-sharp-add-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.01 4L2 20h12v-2H4v-6h18V4zM20 8H4V6h16zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></svg:path>`,
})
export class IcSharpAddCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddChartIcon],svg[ic-sharp-add-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V5h9V3H3v18h18V10h-2z"></svg:path><svg:path fill="currentColor" d="M11 7h2v10h-2zm4 6h2v4h-2zm-8-3h2v7H7zm12-5V3h-2v2h-2v2h2v2h2V7h2V5z"></svg:path>`,
})
export class IcSharpAddChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddCircleIcon],svg[ic-sharp-add-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"></svg:path>`,
})
export class IcSharpAddCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddCircleOutlineIcon],svg[ic-sharp-add-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"></svg:path>`,
})
export class IcSharpAddCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddCommentIcon],svg[ic-sharp-add-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v16h16l4 4zm-5 9h-4v4h-2v-4H7V9h4V5h2v4h4z"></svg:path>`,
})
export class IcSharpAddCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddHomeIcon],svg[ic-sharp-add-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11c.7 0 1.37.1 2 .29V9l-8-6l-8 6v12h7.68A6.995 6.995 0 0 1 18 11"></svg:path><svg:path fill="currentColor" d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z"></svg:path>`,
})
export class IcSharpAddHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddHomeWorkIcon],svg[ic-sharp-add-home-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11.68V11L8 6l-7 5v10h5v-6h4v6h1.68c-.43-.91-.68-1.92-.68-3c0-2.79 1.64-5.19 4-6.32m8 1.43V3H10v1.97l7 5v1.11c.33-.05.66-.08 1-.08c1.96 0 3.73.81 5 2.11M17 7h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M23 18c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5m-5.5 3v-2.5H15v-1h2.5V15h1v2.5H21v1h-2.5V21z"></svg:path>`,
})
export class IcSharpAddHomeWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddIcCallIcon],svg[ic-sharp-add-ic-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-3V3h-2v3h-3v2h3v3h2V8h3zm0 9.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"></svg:path>`,
})
export class IcSharpAddIcCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddLinkIcon],svg[ic-sharp-add-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11h8v2H8zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class IcSharpAddLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddLocationIcon],svg[ic-sharp-add-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6h-2v3H8v2h3v3h2v-3h3V9h-3zm-1-4c4.2 0 8 3.22 8 8.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2"></svg:path>`,
})
export class IcSharpAddLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddLocationAltIcon],svg[ic-sharp-add-location-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1v3h3v2h-3v3h-2V6h-3V4h3V1zm-8 12c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m2-9.75V7h3v3h2.92c.05.39.08.79.08 1.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 6.22 7.8 3 12 3c.68 0 1.35.08 2 .25"></svg:path>`,
})
export class IcSharpAddLocationAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddModeratorIcon],svg[ic-sharp-add-moderator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10c1.08 0 2.09.25 3 .68V5l-8-3l-8 3v6.09c0 5.05 3.41 9.76 8 10.91c.03-.01.05-.02.08-.02A7 7 0 0 1 10 17c0-3.87 3.13-7 7-7"></svg:path><svg:path fill="currentColor" d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m3 5.5h-2.5V20h-1v-2.5H14v-1h2.5V14h1v2.5H20z"></svg:path>`,
})
export class IcSharpAddModeratorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddPhotoAlternateIcon],svg[ic-sharp-add-photo-alternate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2zm-3 4V8h-3V5H3v16h16V11zM5 19l3-4l2 3l3-4l4 5z"></svg:path>`,
})
export class IcSharpAddPhotoAlternateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddReactionIcon],svg[ic-sharp-add-reaction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9V7h-2V2.84A9.9 9.9 0 0 0 11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12c0-1.05-.17-2.05-.47-3zm-2.5-1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11S7 10.33 7 9.5S7.67 8 8.5 8m3.5 9.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5M22 3h2v2h-2v2h-2V5h-2V3h2V1h2z"></svg:path>`,
})
export class IcSharpAddReactionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddRoadIcon],svg[ic-sharp-add-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2zM18 4h2v9h-2zM4 4h2v16H4zm7 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2z"></svg:path>`,
})
export class IcSharpAddRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddShoppingCartIcon],svg[ic-sharp-add-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59L3.62 17H19v-2H7z"></svg:path>`,
})
export class IcSharpAddShoppingCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddTaskIcon],svg[ic-sharp-add-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.18L10.59 16.6l-4.24-4.24l1.41-1.41l2.83 2.83l10-10zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45A10 10 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72m7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2z"></svg:path>`,
})
export class IcSharpAddTaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddToDriveIcon],svg[ic-sharp-add-to-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11c.17 0 .33.01.49.02L15 3H9l5.68 9.84A6 6 0 0 1 19 11M8.15 4.52L2 15.5L5 21l6.33-10.97zM13.2 15.5H9.9L6.73 21h7.81A5.93 5.93 0 0 1 13 17c0-.52.07-1.02.2-1.5m6.8.5v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class IcSharpAddToDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddToHomeScreenIcon],svg[ic-sharp-add-to-home-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1.01L6 1v5h2V5h10v14H8v-1H6v5h14zM10 15h2V8H5v2h3.59L3 15.59L4.41 17L10 11.41z"></svg:path>`,
})
export class IcSharpAddToHomeScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddToPhotosIcon],svg[ic-sharp-add-to-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v16h16v-2H4zm18-4H6v16h16zm-3 9h-4v4h-2v-4H9V9h4V5h2v4h4z"></svg:path>`,
})
export class IcSharpAddToPhotosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddToQueueIcon],svg[ic-sharp-add-to-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v16h7v2h8v-2h7zm-2 14H3V5h18zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3z"></svg:path>`,
})
export class IcSharpAddToQueueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAddchartIcon],svg[ic-sharp-addchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2v8h-2zm-2 8v-6H7v6zm10 2H5V5h6V3H3v18h18v-8h-2zm-4-6v4h2v-4zm4-8V2h-2v3h-3v2h3v3h2V7h3V5z"></svg:path>`,
})
export class IcSharpAddchartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAdfScannerIcon],svg[ic-sharp-adf-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12h-4V4H6v8H2v8h20zm-6 0H8V6h8zm2 5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpAdfScannerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAdjustIcon],svg[ic-sharp-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3"></svg:path>`,
})
export class IcSharpAdjustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAdminPanelSettingsIcon],svg[ic-sharp-admin-panel-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11c.34 0 .67.04 1 .09V6.27L10.5 3L3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82c.55-.13 1.08-.32 1.6-.55c-.69-.98-1.1-2.17-1.1-3.45c0-3.31 2.69-6 6-6"></svg:path><svg:path fill="currentColor" d="M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12s-1.12-.51-1.12-1.12s.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17c.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17"></svg:path>`,
})
export class IcSharpAdminPanelSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAdobeIcon],svg[ic-sharp-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.97 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h13.97c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m-1.59 13.98c-.03.01-.07.02-.1.02h-2.26a.49.49 0 0 1-.46-.3l-2.46-5.74c-.02-.06-.08-.09-.13-.07a.12.12 0 0 0-.07.07l-1.53 3.65c-.03.07 0 .14.07.17c.02.01.03.01.05.01h1.68c.1 0 .2.06.24.16l.74 1.64c.07.15-.01.33-.16.4c-.06 0-.1.01-.14.01H6.73c-.15 0-.28-.13-.28-.28c0-.04.01-.07.02-.11l3.9-9.28c.08-.2.28-.33.49-.33h2.25c.22 0 .41.13.49.33l3.92 9.28c.07.14.01.31-.14.37"></svg:path>`,
})
export class IcSharpAdobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAdsClickIcon],svg[ic-sharp-ads-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.71 17.99A5.993 5.993 0 0 1 6 12c0-3.31 2.69-6 6-6c3.22 0 5.84 2.53 5.99 5.71l-2.1-.63a3.999 3.999 0 1 0-4.81 4.81zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10m-3.77 4.26L22 15l-10-3l3 10l1.26-3.77l4.27 4.27l1.98-1.98z"></svg:path>`,
})
export class IcSharpAdsClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAgricultureIcon],svg[ic-sharp-agriculture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 12c.93 0 1.78.28 2.5.76V8c0-1.1-.9-2-2-2h-6.29l-1.06-1.06l1.41-1.41l-.71-.71l-3.53 3.53l.71.71l1.41-1.41L13 6.71V9c0 1.1-.9 2-2 2h-.54A5.98 5.98 0 0 1 12 15c0 .34-.04.67-.09 1h3.14c.25-2.25 2.14-4 4.45-4"></svg:path><svg:path fill="currentColor" d="M19.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M4 9h5c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1s.45 1 1 1m5.83 4.82l-.18-.47l.93-.35a4.92 4.92 0 0 0-2.31-2.43l-.4.89l-.46-.21l.4-.9C7.26 10.13 6.64 10 6 10c-.53 0-1.04.11-1.52.26l.34.91l-.47.18l-.35-.93a4.92 4.92 0 0 0-2.43 2.31l.89.4l-.21.46l-.9-.4C1.13 13.74 1 14.36 1 15c0 .53.11 1.04.26 1.52l.91-.34l.18.47l-.93.35a4.92 4.92 0 0 0 2.31 2.43l.4-.89l.46.21l-.4.9c.55.22 1.17.35 1.81.35c.53 0 1.04-.11 1.52-.26l-.34-.91l.47-.18l.35.93a4.92 4.92 0 0 0 2.43-2.31l-.89-.4l.21-.46l.9.4c.22-.55.35-1.17.35-1.81c0-.53-.11-1.04-.26-1.52zm-2.68 3.95c-1.53.63-3.29-.09-3.92-1.62s.09-3.29 1.62-3.92s3.29.09 3.92 1.62c.64 1.53-.09 3.29-1.62 3.92"></svg:path>`,
})
export class IcSharpAgricultureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirIcon],svg[ic-sharp-air-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3M19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5m-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11"></svg:path>`,
})
export class IcSharpAirIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirlineSeatFlatIcon],svg[ic-sharp-airline-seat-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7v6H9V7zM2 14v2h6v2h8v-2h6v-2zm5.14-1.9a3 3 0 0 0-.04-4.24a3 3 0 0 0-4.24.04a3 3 0 0 0 .04 4.24a3 3 0 0 0 4.24-.04"></svg:path>`,
})
export class IcSharpAirlineSeatFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirlineSeatFlatAngledIcon],svg[ic-sharp-airline-seat-flat-angled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.56 16.18L9.2 11.71l2.08-5.66l12.35 4.47zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89l-19.02-6.86zm5.8-1.94a3.01 3.01 0 0 0 1.41-4A3.005 3.005 0 0 0 4.7 4.8a2.99 2.99 0 0 0-1.4 4a2.99 2.99 0 0 0 4 1.4"></svg:path>`,
})
export class IcSharpAirlineSeatFlatAngledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirlineSeatIndividualSuiteIcon],svg[ic-sharp-airline-seat-individual-suite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3s1.35 3 3 3m16-6H11v7H3V7H1v10h22z"></svg:path>`,
})
export class IcSharpAirlineSeatIndividualSuiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirlineSeatLegroomExtraIcon],svg[ic-sharp-airline-seat-legroom-extra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3H2v14h11v-2H4zm18.24 12.96l-2.53 1.15l-3.41-6.98A2.02 2.02 0 0 0 14.51 9H11V3H5v11h10l3.41 7l5.07-2.32z"></svg:path>`,
})
export class IcSharpAirlineSeatLegroomExtraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirlineSeatLegroomNormalIcon],svg[ic-sharp-airline-seat-legroom-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15V3H3v14h11v-2zm17 3h-3v-7c0-1.1-.9-2-2-2h-5V3H6v11h10v7h6z"></svg:path>`,
})
export class IcSharpAirlineSeatLegroomNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirlineSeatLegroomReducedIcon],svg[ic-sharp-airline-seat-legroom-reduced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.97 21H14v-3l1-4H6V3h6v6h5c1.1 0 2 .9 2 2l-2 7h2.97zM5 15V3H3v14h9v-2z"></svg:path>`,
})
export class IcSharpAirlineSeatLegroomReducedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirlineSeatReclineExtraIcon],svg[ic-sharp-airline-seat-recline-extra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79c.63-.9 1.88-1.12 2.79-.49c.9.64 1.12 1.88.49 2.79c-.64.9-1.88 1.12-2.79.49M16 19H6.5L4 7H2l2.85 14H16zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38a2.2 2.2 0 0 0-.99-.06h-.02a2.27 2.27 0 0 0-1.84 2.61L7.44 18h9.24l3.82 3l1.5-1.5z"></svg:path>`,
})
export class IcSharpAirlineSeatReclineExtraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirlineSeatReclineNormalIcon],svg[ic-sharp-airline-seat-recline-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.59 5.41c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0s.78 2.05 0 2.83c-.79.79-2.05.79-2.83 0M6 19V7H4v14h11v-2zm14 1.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5c-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V18h8.07l3.5 3.5z"></svg:path>`,
})
export class IcSharpAirlineSeatReclineNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirlineStopsIcon],svg[ic-sharp-airline-stops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.21 9.21C15.93 10.78 13.45 13.3 13 17h2v2H9v-2h2c-.5-4.5-4.37-8-9-8V7c4.39 0 8.22 2.55 10 6.3c1.13-2.43 2.99-4.25 4.78-5.52L14 5h7v7z"></svg:path>`,
})
export class IcSharpAirlineStopsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirlinesIcon],svg[ic-sharp-airlines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4L2 20h17l3-16zm1.5 10a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class IcSharpAirlinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirplaneTicketIcon],svg[ic-sharp-airplane-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2.01v6c1.1 0 1.99.9 1.99 2s-.89 2-2 2v6h20zm-4.27 9.3l-8.86 2.36l-1.66-2.88l.93-.25l1.26.99l2.39-.64l-2.4-4.16l1.4-.38l4.01 3.74l2.44-.65a.967.967 0 0 1 1.18.68a.99.99 0 0 1-.69 1.19"></svg:path>`,
})
export class IcSharpAirplaneTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirplanemodeActiveIcon],svg[ic-sharp-airplanemode-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1l4 1v-1.5L13.5 19v-5.5z"></svg:path>`,
})
export class IcSharpAirplanemodeActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirplanemodeInactiveIcon],svg[ic-sharp-airplanemode-inactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7.67V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V9l8.5 5v2l-4.49-1.32zm9.28 14.94l1.41-1.41l-7.69-7.7l-3.94-3.94l-6.75-6.75l-1.42 1.41l6.38 6.38L2 14v2l8.5-2.5V19L8 20.5V22l4-1l4 1v-1.5L13.5 19v-2.67z"></svg:path>`,
})
export class IcSharpAirplanemodeInactiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirplayIcon],svg[ic-sharp-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22h12l-6-6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6z"></svg:path>`,
})
export class IcSharpAirplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAirportShuttleIcon],svg[ic-sharp-airport-shuttle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5H1v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zM3 11V7h4v4zm3 6.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M13 11H9V7h4zm5 6.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M15 11V7h1l4 4z"></svg:path>`,
})
export class IcSharpAirportShuttleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAlarmIcon],svg[ic-sharp-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 8H11v6l4.75 2.85l.75-1.23l-4-2.37zm4.837-6.19l4.607 3.845l-1.28 1.535l-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7"></svg:path>`,
})
export class IcSharpAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAlarmAddIcon],svg[ic-sharp-alarm-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.337 1.81l4.607 3.845l-1.28 1.535l-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7m1-11h-2v3H8v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class IcSharpAlarmAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAlarmOffIcon],svg[ic-sharp-alarm-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.04 6.29C10.66 6.11 11.32 6 12 6c3.86 0 7 3.14 7 7c0 .68-.11 1.34-.29 1.96l1.56 1.56c.47-1.08.73-2.27.73-3.52A9 9 0 0 0 8.47 4.72zm7.297-4.48l4.607 3.845l-1.28 1.535l-4.61-3.843zM3.02 2.1L1.61 3.51l1.37 1.37l-.92.77l1.28 1.54l1.06-.88l.8.8A8.96 8.96 0 0 0 3 13a9 9 0 0 0 9 9c2.25 0 4.31-.83 5.89-2.2l2.1 2.1l1.41-1.41zM12 20c-3.86 0-7-3.14-7-7c0-1.7.61-3.26 1.62-4.47l9.85 9.85A6.96 6.96 0 0 1 12 20M7.48 3.73l.46-.38l-1.28-1.54l-.6.5z"></svg:path>`,
})
export class IcSharpAlarmOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAlarmOnIcon],svg[ic-sharp-alarm-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.54 14.53L8.41 12.4l-1.06 1.06l3.18 3.18l6-6l-1.06-1.06zm6.797-12.72l4.607 3.845l-1.28 1.535l-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7"></svg:path>`,
})
export class IcSharpAlarmOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAlbumIcon],svg[ic-sharp-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5m0-5.5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcSharpAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAlignHorizontalCenterIcon],svg[ic-sharp-align-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z"></svg:path>`,
})
export class IcSharpAlignHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAlignHorizontalLeftIcon],svg[ic-sharp-align-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22H2V2h2zM22 7H6v3h16zm-6 7H6v3h10z"></svg:path>`,
})
export class IcSharpAlignHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAlignHorizontalRightIcon],svg[ic-sharp-align-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h2v20h-2zM2 10h16V7H2zm6 7h10v-3H8z"></svg:path>`,
})
export class IcSharpAlignHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAlignVerticalBottomIcon],svg[ic-sharp-align-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2v-2h20zM10 2H7v16h3zm7 6h-3v10h3z"></svg:path>`,
})
export class IcSharpAlignVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAlignVerticalCenterIcon],svg[ic-sharp-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h-5V6h-3v5h-4V3H7v8H1.84v2H7v8h3v-8h4v5h3v-5h5z"></svg:path>`,
})
export class IcSharpAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAlignVerticalTopIcon],svg[ic-sharp-align-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v2H2V2zM7 22h3V6H7zm7-6h3V6h-3z"></svg:path>`,
})
export class IcSharpAlignVerticalTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAllInboxIcon],svg[ic-sharp-all-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v11h18zm-2 6h-4c0 1.62-1.38 3-3 3s-3-1.38-3-3H5V5h14zm-4 7h6v5H3v-5h6c0 1.66 1.34 3 3 3s3-1.34 3-3"></svg:path>`,
})
export class IcSharpAllInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAllInclusiveIcon],svg[ic-sharp-all-inclusive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L7.8 14.39c-.64.64-1.49.99-2.4.99c-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1l1.51-1.34L9.22 8.2A5.37 5.37 0 0 0 5.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53L13.51 12l2.69-2.39c.64-.64 1.49-.99 2.4-.99c1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01l-1.51 1.34l1.27 1.12a5.4 5.4 0 0 0 3.82 1.57c2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37"></svg:path>`,
})
export class IcSharpAllInclusiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAllOutIcon],svg[ic-sharp-all-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v4l4-4zm12 0l4 4V4zm4 16v-4l-4 4zM4 20h4l-4-4zm15-8c0-3.87-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7m-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class IcSharpAllOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAltRouteIcon],svg[ic-sharp-alt-route-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.78 11.16l-1.42 1.42a7.3 7.3 0 0 1-1.79-2.94l1.94-.49c.32.89.77 1.5 1.27 2.01M11 6L7 2L3 6h3.02c.02.81.08 1.54.19 2.17l1.94-.49C8.08 7.2 8.03 6.63 8.02 6zm10 0l-4-4l-4 4h2.99c-.1 3.68-1.28 4.75-2.54 5.88c-.5.44-1.01.92-1.45 1.55c-.34-.49-.73-.88-1.13-1.24L9.46 13.6c.93.85 1.54 1.54 1.54 3.4v5h2v-5c0-2.02.71-2.66 1.79-3.63c1.38-1.24 3.08-2.78 3.2-7.37z"></svg:path>`,
})
export class IcSharpAltRouteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAlternateEmailIcon],svg[ic-sharp-alternate-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"></svg:path>`,
})
export class IcSharpAlternateEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAmpStoriesIcon],svg[ic-sharp-amp-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h10v15H7zM3 6h2v11H3zm16 0h2v11h-2z"></svg:path>`,
})
export class IcSharpAmpStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAnalyticsIcon],svg[ic-sharp-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm6 14H7v-5h2zm4 0h-2v-3h2zm0-5h-2v-2h2zm4 5h-2V7h2z"></svg:path>`,
})
export class IcSharpAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAnchorIcon],svg[ic-sharp-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 15l1.55 1.55c-.96 1.69-3.33 3.04-5.55 3.37V11h3V9h-3V7.82C14.16 7.4 15 6.3 15 5c0-1.65-1.35-3-3-3S9 3.35 9 5c0 1.3.84 2.4 2 2.82V9H8v2h3v8.92c-2.22-.33-4.59-1.68-5.55-3.37L7 15l-4-3v3c0 3.88 4.92 7 9 7s9-3.12 9-7v-3zM12 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class IcSharpAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAndroidIcon],svg[ic-sharp-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.46 11.46 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 0 0 1 18h22a10.78 10.78 0 0 0-5.4-8.52M7 15.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m10 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path>`,
})
export class IcSharpAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAnimationIcon],svg[ic-sharp-animation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2c-2.71 0-5.05 1.54-6.22 3.78a7.06 7.06 0 0 0-3 3A7.01 7.01 0 0 0 2 15c0 3.87 3.13 7 7 7c2.71 0 5.05-1.54 6.22-3.78a7.06 7.06 0 0 0 3-3A7.01 7.01 0 0 0 22 9c0-3.87-3.13-7-7-7M9 20a5.002 5.002 0 0 1-4-8c0 3.87 3.13 7 7 7c-.84.63-1.88 1-3 1m3-3a5.002 5.002 0 0 1-4-8c0 3.86 3.13 6.99 7 7c-.84.63-1.88 1-3 1m4.7-3.3c-.53.19-1.1.3-1.7.3c-2.76 0-5-2.24-5-5c0-.6.11-1.17.3-1.7c.53-.19 1.1-.3 1.7-.3c2.76 0 5 2.24 5 5c0 .6-.11 1.17-.3 1.7M19 12c0-3.86-3.13-6.99-7-7a5.002 5.002 0 0 1 7 7"></svg:path>`,
})
export class IcSharpAnimationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAnnouncementIcon],svg[ic-sharp-announcement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20l4-4h16zm-9 9h-2V5h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class IcSharpAnnouncementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAodIcon],svg[ic-sharp-aod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1H5v22h14zm-2 17H7V6h10zm-9-8h8v1.5H8zm1 3h6v1.5H9z"></svg:path>`,
})
export class IcSharpAodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpApartmentIcon],svg[ic-sharp-apartment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11V3H7v4H3v14h8v-4h2v4h8V11zM7 19H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm4 4H9v-2h2zm0-4H9V9h2zm0-4H9V5h2zm4 8h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2zm4 12h-2v-2h2zm0-4h-2v-2h2z"></svg:path>`,
})
export class IcSharpApartmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpApiIcon],svg[ic-sharp-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 12l-2 2l-2-2l2-2zm-2-6l2.12 2.12l2.5-2.5L12 1L7.38 5.62l2.5 2.5zm-6 6l2.12-2.12l-2.5-2.5L1 12l4.62 4.62l2.5-2.5zm12 0l-2.12 2.12l2.5 2.5L23 12l-4.62-4.62l-2.5 2.5zm-6 6l-2.12-2.12l-2.5 2.5L12 23l4.62-4.62l-2.5-2.5z"></svg:path>`,
})
export class IcSharpApiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAppBlockingIcon],svg[ic-sharp-app-blocking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m-2.5 4A2.5 2.5 0 0 1 18 9.5c.42 0 .8.11 1.15.29l-3.36 3.36c-.18-.35-.29-.73-.29-1.15m2.5 2.5c-.42 0-.8-.11-1.15-.29l3.36-3.36c.18.35.29.73.29 1.15a2.5 2.5 0 0 1-2.5 2.5"></svg:path><svg:path fill="currentColor" d="M19 23v-6h-2v1H7V6h10v1h2V.94L5 1v22z"></svg:path>`,
})
export class IcSharpAppBlockingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAppRegistrationIcon],svg[ic-sharp-app-registration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm12 0h4v4h-4zm-5 13.86V20h2.1l5.98-5.97l-2.12-2.12zm3-5.83V10h-4v4h2.03zm3.671-.824l1.415-1.414l2.12 2.12l-1.413 1.415z"></svg:path>`,
})
export class IcSharpAppRegistrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAppSettingsAltIcon],svg[ic-sharp-app-settings-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.81 12.74l-.82-.63v-.22l.8-.63c.16-.12.2-.34.1-.51l-.85-1.48a.4.4 0 0 0-.35-.2q-.075 0-.15.03l-.95.38c-.08-.05-.11-.07-.19-.11l-.15-1.01a.41.41 0 0 0-.4-.36h-1.71c-.2 0-.37.15-.4.34l-.14 1.01c-.03.02-.07.03-.1.05l-.09.06l-.95-.38a.4.4 0 0 0-.5.17l-.85 1.48c-.1.17-.06.39.1.51l.8.63v.23l-.8.63a.39.39 0 0 0-.1.51l.85 1.48c.07.13.21.2.35.2q.075 0 .15-.03l.95-.37c.08.05.12.07.2.11l.15 1.01c.03.2.2.34.4.34h1.71c.2 0 .37-.15.4-.34l.15-1.01c.03-.02.07-.03.1-.05l.09-.06l.95.38a.4.4 0 0 0 .5-.17l.85-1.48a.39.39 0 0 0-.1-.51M18 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 23V1h14v6h-2V6H7v12h10v-1h2v6z"></svg:path>`,
})
export class IcSharpAppSettingsAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAppShortcutIcon],svg[ic-sharp-app-shortcut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18H7V6h10v1h2V1H5v22h14v-6h-2zm3.38-8.38L21 11l.62-1.38L23 9l-1.38-.62L21 7l-.62 1.38L19 9z"></svg:path><svg:path fill="currentColor" d="m16 8l-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zm5 5l-.62 1.38L19 15l1.38.62L21 17l.62-1.38L23 15l-1.38-.62z"></svg:path>`,
})
export class IcSharpAppShortcutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAppleIcon],svg[ic-sharp-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"></svg:path>`,
})
export class IcSharpAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpApprovalIcon],svg[ic-sharp-approval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14v8h16v-8zm14 4H6v-2h12zM12 2C9.24 2 7 4.24 7 7l5 7l5-7c0-2.76-2.24-5-5-5"></svg:path>`,
})
export class IcSharpApprovalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAppsIcon],svg[ic-sharp-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"></svg:path>`,
})
export class IcSharpAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAppsOutageIcon],svg[ic-sharp-apps-outage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6 6h4v-4h-4zm3-20c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m.5 8h-1V7h1zm0-2h-1V2h1zM16 14h4v-2.07c-.33.05-.66.07-1 .07c-1.07 0-2.09-.24-3-.68zM10 4v4h2.68c-.44-.91-.68-1.93-.68-3c0-.34.02-.67.07-1z"></svg:path>`,
})
export class IcSharpAppsOutageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArchitectureIcon],svg[ic-sharp-architecture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.36 18.78L6.61 21l1.62-1.54l2.77-7.6c-.68-.17-1.28-.51-1.77-.98zm8.41-7.9c-.49.47-1.1.81-1.77.98l2.77 7.6L17.39 21l.26-2.22zM15 8c0-1.3-.84-2.4-2-2.82V3h-2v2.18C9.84 5.6 9 6.7 9 8c0 1.66 1.34 3 3 3s3-1.34 3-3m-3 1c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpArchitectureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArchiveIcon],svg[ic-sharp-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.71 3H5.29L3 5.79V21h18V5.79zM12 17.5L6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z"></svg:path>`,
})
export class IcSharpArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAreaChartIcon],svg[ic-sharp-area-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13v7h18v-1.5l-9-7L8 17zm0-6l4 3l5-7l5 4h4v8.97l-9.4-7.31l-3.98 5.48L3 10.44z"></svg:path>`,
})
export class IcSharpAreaChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowBackIcon],svg[ic-sharp-arrow-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"></svg:path>`,
})
export class IcSharpArrowBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowBackIosIcon],svg[ic-sharp-arrow-back-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z"></svg:path>`,
})
export class IcSharpArrowBackIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowBackIosNewIcon],svg[ic-sharp-arrow-back-ios-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"></svg:path>`,
})
export class IcSharpArrowBackIosNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowCircleDownIcon],svg[ic-sharp-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 10V8h-2v4H8l4 4l4-4z"></svg:path>`,
})
export class IcSharpArrowCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowCircleLeftIcon],svg[ic-sharp-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2S2 6.48 2 12m10-1h4v2h-4v3l-4-4l4-4z"></svg:path>`,
})
export class IcSharpArrowCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowCircleRightIcon],svg[ic-sharp-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10s10-4.48 10-10m-10 1H8v-2h4V8l4 4l-4 4z"></svg:path>`,
})
export class IcSharpArrowCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowCircleUpIcon],svg[ic-sharp-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10m-1-10v4h2v-4h3l-4-4l-4 4z"></svg:path>`,
})
export class IcSharpArrowCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowDownwardIcon],svg[ic-sharp-arrow-downward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"></svg:path>`,
})
export class IcSharpArrowDownwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowDropDownIcon],svg[ic-sharp-arrow-drop-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 10l5 5l5-5z"></svg:path>`,
})
export class IcSharpArrowDropDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowDropDownCircleIcon],svg[ic-sharp-arrow-drop-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 13l-4-4h8z"></svg:path>`,
})
export class IcSharpArrowDropDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowDropUpIcon],svg[ic-sharp-arrow-drop-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 14l5-5l5 5z"></svg:path>`,
})
export class IcSharpArrowDropUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowForwardIcon],svg[ic-sharp-arrow-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></svg:path>`,
})
export class IcSharpArrowForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowForwardIosIcon],svg[ic-sharp-arrow-forward-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"></svg:path>`,
})
export class IcSharpArrowForwardIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowLeftIcon],svg[ic-sharp-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 7l-5 5l5 5z"></svg:path>`,
})
export class IcSharpArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowOutwardIcon],svg[ic-sharp-arrow-outward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"></svg:path>`,
})
export class IcSharpArrowOutwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowRightIcon],svg[ic-sharp-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 17l5-5l-5-5z"></svg:path>`,
})
export class IcSharpArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowRightAltIcon],svg[ic-sharp-arrow-right-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></svg:path>`,
})
export class IcSharpArrowRightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowUpwardIcon],svg[ic-sharp-arrow-upward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"></svg:path>`,
})
export class IcSharpArrowUpwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArtTrackIcon],svg[ic-sharp-art-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13h-8v-2h8zm0-6h-8v2h8zm-8 10h8v-2h-8zM12 7v10H2V7zm-1.5 8l-2.25-3l-1.75 2.26l-1.25-1.51L3.5 15z"></svg:path>`,
})
export class IcSharpArtTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpArticleIcon],svg[ic-sharp-article-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm11 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"></svg:path>`,
})
export class IcSharpArticleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAspectRatioIcon],svg[ic-sharp-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm16-6H1v18h22zm-2 16.01H3V4.99h18z"></svg:path>`,
})
export class IcSharpAspectRatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAssessmentIcon],svg[ic-sharp-assessment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"></svg:path>`,
})
export class IcSharpAssessmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAssignmentIcon],svg[ic-sharp-assignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"></svg:path>`,
})
export class IcSharpAssignmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAssignmentIndIcon],svg[ic-sharp-assignment-ind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1z"></svg:path>`,
})
export class IcSharpAssignmentIndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAssignmentLateIcon],svg[ic-sharp-assignment-late-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-8 15h-2v-2h2zm0-4h-2V8h2zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpAssignmentLateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAssignmentReturnIcon],svg[ic-sharp-assignment-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m4 12h-4v3l-5-5l5-5v3h4z"></svg:path>`,
})
export class IcSharpAssignmentReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAssignmentReturnedIcon],svg[ic-sharp-assignment-returned-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0 15l-5-5h3V9h4v4h3z"></svg:path>`,
})
export class IcSharpAssignmentReturnedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAssignmentTurnedInIcon],svg[ic-sharp-assignment-turned-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-2 14l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z"></svg:path>`,
})
export class IcSharpAssignmentTurnedInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAssistWalkerIcon],svg[ic-sharp-assist-walker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12.5" cy="4.5" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19.77 17.72L19 10h-3c-1.5-.02-2.86-.54-3.76-1.44l-2-1.98A1.95 1.95 0 0 0 8.83 6c-.51 0-1.02.2-1.41.59l-4.2 4.17l2.08 4.07l-3.15 4.05l1.57 1.24l3.68-4.73l-.17-1.36l.77.72V20h2v-6.12l-2.12-2.12l2.36-2.36c.94.94 1.72 1.82 3.59 2.32L13 20h1.5l.41-3.5h3.18l.14 1.22c-.44.26-.73.74-.73 1.28c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.54-.29-1.02-.73-1.28M15.09 15l.41-3.5h2l.41 3.5z"></svg:path>`,
})
export class IcSharpAssistWalkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAssistantIcon],svg[ic-sharp-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3v18h6l3 3l3-3h6zm-7.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11z"></svg:path>`,
})
export class IcSharpAssistantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAssistantDirectionIcon],svg[ic-sharp-assistant-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 10H8v5h2v-3h3.5v2.5L17 11l-3.5-3.5zM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11s11-4.9 11-11S18.1 1 12 1m8.31 11l-8.34 8.37L3.62 12l8.34-8.37z"></svg:path>`,
})
export class IcSharpAssistantDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAssistantPhotoIcon],svg[ic-sharp-assistant-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></svg:path>`,
})
export class IcSharpAssistantPhotoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAssuredWorkloadIcon],svg[ic-sharp-assured-workload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10h2v7H5zm6 0h2v7h-2zm11-4L12 1L2 6v2h20zM2 19v2h12.4c-.21-.64-.32-1.31-.36-2zm17-6.74V10h-2v3.26zM20 14l-4 2v2.55c0 2.52 1.71 4.88 4 5.45c2.29-.57 4-2.93 4-5.45V16zm-.72 7l-2.03-2.03l1.06-1.06l.97.97l2.41-2.38l1.06 1.06z"></svg:path>`,
})
export class IcSharpAssuredWorkloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAtmIcon],svg[ic-sharp-atm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9v1.5h2.25V15h1.5v-4.5H14V9zM7 9H2v6h1.5v-1.5h2V15H7zm-1.5 3h-2v-1.5h2zM22 9h-6.5v6H17v-4.5h1V14h1.5v-3.51h1V15H22z"></svg:path>`,
})
export class IcSharpAtmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAttachEmailIcon],svg[ic-sharp-attach-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10V2H1v16h13v-5c0-1.66 1.34-3 3-3zm-10 1L3 6V4l8 5l8-5v2z"></svg:path><svg:path fill="currentColor" d="M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4z"></svg:path>`,
})
export class IcSharpAttachEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAttachFileIcon],svg[ic-sharp-attach-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6z"></svg:path>`,
})
export class IcSharpAttachFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAttachMoneyIcon],svg[ic-sharp-attach-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4"></svg:path>`,
})
export class IcSharpAttachMoneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAttachmentIcon],svg[ic-sharp-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 16H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h12.5a2.5 2.5 0 0 1 0 5H9c-.55 0-1-.45-1-1s.45-1 1-1h9.5V9.5H9a2.5 2.5 0 0 0 0 5h10.5c2.21 0 4-1.79 4-4s-1.79-4-4-4H7c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5h11.5z"></svg:path>`,
})
export class IcSharpAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAttractionsIcon],svg[ic-sharp-attractions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.44 18.75c.37-.46.94-.75 1.57-.75s1.19.29 1.56.75c.39-.09.76-.21 1.12-.36l-1.42-3.18a3.52 3.52 0 0 1-2.56-.02l-1.43 3.19c.37.16.75.29 1.16.37M5.16 10a7.06 7.06 0 0 0 .08 4c.63.05 1.22.4 1.56.99c.33.57.35 1.23.11 1.79c.27.27.56.53.87.76l1.52-3.39c-.47-.58-.75-1.32-.75-2.13c0-1.89 1.55-3.41 3.46-3.41s3.46 1.53 3.46 3.41c0 .82-.29 1.57-.78 2.16l1.5 3.35c.32-.24.62-.5.9-.79c-.22-.55-.2-1.2.12-1.75c.33-.57.9-.92 1.52-.99a7.03 7.03 0 0 0 .09-4.02c-.64-.04-1.26-.39-1.6-1c-.36-.62-.35-1.36-.03-1.95c-.91-.98-2.1-1.71-3.44-2.05C13.4 5.6 12.74 6 12.01 6s-1.39-.41-1.74-1.01a7.05 7.05 0 0 0-3.44 2.03c.33.6.35 1.35-.02 1.98c-.36.62-.99.97-1.65 1m-1.3-.42c-.78-.6-1.02-1.7-.51-2.58s1.58-1.23 2.49-.85a8.53 8.53 0 0 1 4.18-2.42c.13-.98.97-1.73 1.99-1.73s1.85.75 1.98 1.73c1.63.39 3.07 1.24 4.18 2.42a1.99 1.99 0 0 1 2.49.85c.51.88.27 1.98-.51 2.58c.23.77.35 1.58.35 2.42s-.12 1.65-.35 2.42c.78.6 1.02 1.7.51 2.58s-1.58 1.23-2.49.85c-.4.43-.85.81-1.34 1.15l1.34 3h-1.86l-.97-2.17c-.43.18-.88.33-1.34.44c-.14.98-.98 1.73-1.99 1.73s-1.85-.75-1.98-1.73c-.48-.12-.94-.27-1.38-.46L7.66 22H5.79l1.36-3.03a8.7 8.7 0 0 1-1.3-1.12c-.92.38-1.99.03-2.5-.85s-.27-1.98.51-2.58c-.24-.77-.35-1.58-.35-2.42s.11-1.65.35-2.42"></svg:path>`,
})
export class IcSharpAttractionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAttributionIcon],svg[ic-sharp-attribution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m-2.75-5.5h1.5V19h2.5v-4.5h1.5v-6h-5.5z"></svg:path><svg:circle cx="12" cy="6.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcSharpAttributionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAudioFileIcon],svg[ic-sharp-audio-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H4v20h16V8zm2 11h-3v3.75c0 1.24-1.01 2.25-2.25 2.25S8.5 17.99 8.5 16.75s1.01-2.25 2.25-2.25c.46 0 .89.14 1.25.38V11h4zm-3-4V3.5L18.5 9z"></svg:path>`,
})
export class IcSharpAudioFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAudiotrackIcon],svg[ic-sharp-audiotrack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3z"></svg:path>`,
})
export class IcSharpAudiotrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoAwesomeIcon],svg[ic-sharp-auto-awesome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"></svg:path>`,
})
export class IcSharpAutoAwesomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoAwesomeMosaicIcon],svg[ic-sharp-auto-awesome-mosaic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h8V3H3zM21 3h-8v8h8zm-8 18h8v-8h-8z"></svg:path>`,
})
export class IcSharpAutoAwesomeMosaicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoAwesomeMotionIcon],svg[ic-sharp-auto-awesome-motion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H2v12h2V4h10zm4 4H6v12h2V8h10zm4 4H10v12h12z"></svg:path>`,
})
export class IcSharpAutoAwesomeMotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoDeleteIcon],svg[ic-sharp-auto-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v14h7.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7m0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path><svg:path fill="currentColor" d="M16.5 12H15v5l3.6 2.1l.8-1.2l-2.9-1.7z"></svg:path>`,
})
export class IcSharpAutoDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoFixHighIcon],svg[ic-sharp-auto-fix-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zM8.5 7l.94-2.06L11.5 4l-2.06-.94L8.5 1l-.94 2.06L5.5 4l2.06.94zM20 12.5l-.94 2.06l-2.06.94l2.06.94l.94 2.06l.94-2.06L23 15.5l-2.06-.94zm-1.59-2.67l-4.24-4.24L1.59 18.17l4.24 4.24zm-4.2 1.38L12.8 9.8l1.38-1.38l1.41 1.41z"></svg:path>`,
})
export class IcSharpAutoFixHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoFixNormalIcon],svg[ic-sharp-auto-fix-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-1.59 2.83l-4.24-4.24L1.59 18.17l4.24 4.24zm-4.2 1.38L12.8 9.8l1.38-1.38l1.41 1.41z"></svg:path>`,
})
export class IcSharpAutoFixNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoFixOffIcon],svg[ic-sharp-auto-fix-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-5.83 1.42l1.41 1.41l-1.46 1.46l1.42 1.42l2.87-2.88l-4.24-4.24l-2.88 2.87l1.42 1.42zM1.39 4.22l7.07 7.07l-6.87 6.88l4.24 4.24l6.88-6.87l7.07 7.07l1.41-1.42L2.81 2.81z"></svg:path>`,
})
export class IcSharpAutoFixOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoGraphIcon],svg[ic-sharp-auto-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.06 9.94L12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94zm4.5-5l1.09-2.41L12 5.5L9.59 4.41L8.5 2L7.41 4.41L5 5.5l2.41 1.09zm-4 11.5l6-6.01l4 4L23 8.93l-1.41-1.41l-7.09 7.97l-4-4L3 19z"></svg:path>`,
})
export class IcSharpAutoGraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoModeIcon],svg[ic-sharp-auto-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.03 3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73.19 3.31.88 4.61 1.92zM11 3.06V1.05c-2.29.2-4.36 1.12-6.03 2.51l1.42 1.42A8.93 8.93 0 0 1 11 3.06M4.98 6.39L3.56 4.97C2.17 6.64 1.26 8.71 1.05 11h2.01c.19-1.73.88-3.31 1.92-4.61M20.94 11h2.01c-.21-2.29-1.12-4.36-2.51-6.03l-1.42 1.42A8.93 8.93 0 0 1 20.94 11M7 12l3.44 1.56L12 17l1.56-3.44L17 12l-3.44-1.56L12 7l-1.56 3.44z"></svg:path><svg:path fill="currentColor" d="M12 21a8.96 8.96 0 0 1-7.46-4H7v-2H1v6h2v-2.7c1.99 2.84 5.27 4.7 9 4.7c4.87 0 9-3.17 10.44-7.56l-1.96-.45C19.25 18.48 15.92 21 12 21"></svg:path>`,
})
export class IcSharpAutoModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoStoriesIcon],svg[ic-sharp-auto-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4.6v12.02c-1.14-.41-2.31-.62-3.5-.62c-1.9 0-3.78.54-5.5 1.58V5.48C10.38 4.55 8.51 4 6.5 4S2.62 4.55 1 5.48V20c1.52-1.18 3.43-2 5.5-2s3.98.82 5.5 2c1.52-1.18 3.43-2 5.5-2s3.98.82 5.5 2V5.48c-.63-.36-1.3-.64-2-.88"></svg:path><svg:path fill="currentColor" d="m19 .5l-5 5V15l5-4.5z"></svg:path>`,
})
export class IcSharpAutoStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAutofpsSelectIcon],svg[ic-sharp-autofps-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.03 6.3h-.06l-1.02 2.89h2.1zM3 17h2v5H3z"></svg:path><svg:path fill="currentColor" d="M12 15c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6m-.63-10h1.25l2.63 7h-1.21l-.63-1.79h-2.83L9.96 12H8.74zM7 17h2v5H7zm4 0h2v5h-2zm4 0h6v5h-6z"></svg:path>`,
})
export class IcSharpAutofpsSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAutorenewIcon],svg[ic-sharp-autorenew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6v3l4-4l-4-4v3c-4.42 0-8 3.58-8 8c0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.9 5.9 0 0 1 6 12c0-3.31 2.69-6 6-6m6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8c0 3.31-2.69 6-6 6v-3l-4 4l4 4v-3c4.42 0 8-3.58 8-8c0-1.57-.46-3.03-1.24-4.26"></svg:path>`,
})
export class IcSharpAutorenewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpAvTimerIcon],svg[ic-sharp-av-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1m0-14v4h2V5.08c3.39.49 6 3.39 6 6.92c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41l-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9a9 9 0 0 0 0-18zm7 9c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1M6 12c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1"></svg:path>`,
})
export class IcSharpAvTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBabyChangingStationIcon],svg[ic-sharp-baby-changing-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8v2h-3L8.31 8.82L7 12.75V22H3V12l1.58-4.63A2 2 0 0 1 6.46 6c.28 0 .56.05.84.18l4.15 1.83zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m1 18h12v-2H9zm10.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M13 13v-2H9v2h2v3h6v-5h-2v2z"></svg:path>`,
})
export class IcSharpBabyChangingStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBackHandIcon],svg[ic-sharp-back-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.21 10.47L5 9.36L7.25 15H8V2h2.5v10h1V0H14v12h1V1.5h2.5V12h1V4.5H21V16c0 4.42-3.58 8-8 8c-3.26 0-6.19-1.99-7.4-5.02z"></svg:path>`,
})
export class IcSharpBackHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBackpackIcon],svg[ic-sharp-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8v14H4V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86M6 12v2h10v2h2v-4z"></svg:path>`,
})
export class IcSharpBackpackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBackspaceIcon],svg[ic-sharp-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 3H6l-6 9l6 9h18zm-5 12.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12z"></svg:path>`,
})
export class IcSharpBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBackupIcon],svg[ic-sharp-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5l5 5z"></svg:path>`,
})
export class IcSharpBackupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBackupTableIcon],svg[ic-sharp-backup-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6v14H6v2h16V6z"></svg:path><svg:path fill="currentColor" d="M18 2H2v16h16zM9 16H4v-5h5zm7 0h-5v-5h5zm0-7H4V4h12z"></svg:path>`,
})
export class IcSharpBackupTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBadgeIcon],svg[ic-sharp-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7h-7V2H9v5H2v15h20zM9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12m3 6H6v-.43c0-.6.36-1.15.92-1.39c.64-.28 1.34-.43 2.08-.43s1.44.15 2.08.43c.55.24.92.78.92 1.39zm1-9h-2V4h2zm5 7.5h-4V15h4zm0-3h-4V12h4z"></svg:path>`,
})
export class IcSharpBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBakeryDiningIcon],svg[ic-sharp-bakery-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.36 7.58l-.86 9.41H17l3.16-7.89zM3.84 9.1L7 16.99h1.5l-.86-9.41zM10 16.99h4L15 6H9zm10.32-4.24l-1.81 4.5l1.95.96l2.06-1.22zM1.48 16.99l2.06 1.22l1.95-.96l-1.81-4.5z"></svg:path>`,
})
export class IcSharpBakeryDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBalanceIcon],svg[ic-sharp-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.83c.85-.3 1.53-.98 1.83-1.83H18l-3 7c0 1.66 1.57 3 3.5 3s3.5-1.34 3.5-3l-3-7h2V4h-6.17c-.41-1.17-1.52-2-2.83-2s-2.42.83-2.83 2H3v2h2l-3 7c0 1.66 1.57 3 3.5 3S9 14.66 9 13L6 6h3.17c.3.85.98 1.53 1.83 1.83V19H2v2h20v-2h-9zM20.37 13h-3.74l1.87-4.36zm-13 0H3.63L5.5 8.64zM12 6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpBalanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBalconyIcon],svg[ic-sharp-balcony-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10v2H8v-2zm6 2v-2h-2v2zm5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4zM7 16H5v4h2zm4 0H9v4h2zm0-11.92C8.16 4.56 6 7.03 6 10v4h5zM13 14h5v-4c0-2.97-2.16-5.44-5-5.92zm2 2h-2v4h2zm4 0h-2v4h2z"></svg:path>`,
})
export class IcSharpBalconyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBallotIcon],svg[ic-sharp-ballot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9.5h5v-2h-5zm0 7h5v-2h-5zm8 4.5H3V3h18zM6 11h5V6H6zm1-4h3v3H7zM6 18h5v-5H6zm1-4h3v3H7z"></svg:path>`,
})
export class IcSharpBallotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBarChartIcon],svg[ic-sharp-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"></svg:path>`,
})
export class IcSharpBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBarcodeIcon],svg[ic-sharp-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6h1v12H2zm2 0h2v12H4zm4 0h1v12H8zm2 0h3v12h-3zm4 0h1v12h-1zm3 0h1v12h-1zm2 0h1v12h-1zm2 0h1v12h-1z"></svg:path>`,
})
export class IcSharpBarcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatchPredictionIcon],svg[ic-sharp-batch-prediction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8H5v14h14zm-6 12.5h-2V19h2zm0-2.5h-2c0-1.5-2.5-3-2.5-5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 2-2.5 3.5-2.5 5m5-11.5H6V5h12zm-1-3H7V2h10z"></svg:path>`,
})
export class IcSharpBatchPredictionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBathroomIcon],svg[ic-sharp-bathroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM9 18c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m2-3H7v-1c0-2.76 2.24-5 5-5s5 2.24 5 5z"></svg:path>`,
})
export class IcSharpBathroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBathtubIcon],svg[ic-sharp-bathtub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="7" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08c-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08c0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.25 2.25 0 0 0 5 12.25V13H2v8h2v1h16v-1h2v-8z"></svg:path>`,
})
export class IcSharpBathtubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery0BarIcon],svg[ic-sharp-battery-0-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v18H7V4h3V2h4v2zm-2 2H9v14h6z"></svg:path>`,
})
export class IcSharpBattery0BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery1BarIcon],svg[ic-sharp-battery-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v18H7V4h3V2h4v2zm-2 2H9v12h6z"></svg:path>`,
})
export class IcSharpBattery1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery2BarIcon],svg[ic-sharp-battery-2-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v18H7V4h3V2h4v2zm-2 2H9v10h6z"></svg:path>`,
})
export class IcSharpBattery2BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery20Icon],svg[ic-sharp-battery-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v5h10v-5z"></svg:path><svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v13h10z"></svg:path>`,
})
export class IcSharpBattery20Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery3BarIcon],svg[ic-sharp-battery-3-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v18H7V4h3V2h4v2zm-2 2H9v8h6z"></svg:path>`,
})
export class IcSharpBattery3BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery30Icon],svg[ic-sharp-battery-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v11h10z"></svg:path><svg:path fill="currentColor" d="M7 15v7h10v-7z"></svg:path>`,
})
export class IcSharpBattery30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery4BarIcon],svg[ic-sharp-battery-4-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v18H7V4h3V2h4v2zm-2 2H9v6h6z"></svg:path>`,
})
export class IcSharpBattery4BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery5BarIcon],svg[ic-sharp-battery-5-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v18H7V4h3V2h4v2zm-2 2H9v4h6z"></svg:path>`,
})
export class IcSharpBattery5BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery50Icon],svg[ic-sharp-battery-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v9h10z"></svg:path><svg:path fill="currentColor" d="M7 13v9h10v-9z"></svg:path>`,
})
export class IcSharpBattery50Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery6BarIcon],svg[ic-sharp-battery-6-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v18H7V4h3V2h4v2zm-2 2H9v2h6z"></svg:path>`,
})
export class IcSharpBattery6BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery60Icon],svg[ic-sharp-battery-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v7h10z"></svg:path><svg:path fill="currentColor" d="M7 11v11h10V11z"></svg:path>`,
})
export class IcSharpBattery60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery80Icon],svg[ic-sharp-battery-80-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v5h10z"></svg:path><svg:path fill="currentColor" d="M7 9v13h10V9z"></svg:path>`,
})
export class IcSharpBattery80Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery90Icon],svg[ic-sharp-battery-90-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v4h10z"></svg:path><svg:path fill="currentColor" d="M7 8v14h10V8z"></svg:path>`,
})
export class IcSharpBattery90Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryAlertIcon],svg[ic-sharp-battery-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h-3V2h-4v2H7v18h10zm-4 14h-2v-2h2zm0-4h-2V9h2z"></svg:path>`,
})
export class IcSharpBatteryAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryCharging20Icon],svg[ic-sharp-battery-charging-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20v-3H7v5h10v-5h-4.4z"></svg:path><svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v13h4v-2.5H9L13 7v5.5h2L12.6 17H17z"></svg:path>`,
})
export class IcSharpBatteryCharging20Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryCharging30Icon],svg[ic-sharp-battery-charging-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v10.5h2L13 7v5.5h2l-1.07 2H17z"></svg:path><svg:path fill="currentColor" d="M11 20v-5.5H7V22h10v-7.5h-3.07z"></svg:path>`,
})
export class IcSharpBatteryCharging30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryCharging50Icon],svg[ic-sharp-battery-charging-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.47 13.5L11 20v-5.5H9l.53-1H7V22h10v-8.5z"></svg:path><svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v9.5h2.53L13 7v5.5h2l-.53 1H17z"></svg:path>`,
})
export class IcSharpBatteryCharging50Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryCharging60Icon],svg[ic-sharp-battery-charging-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v7h3.87L13 7v4h4z"></svg:path><svg:path fill="currentColor" d="M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v11h10V11h-4z"></svg:path>`,
})
export class IcSharpBatteryCharging60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryCharging80Icon],svg[ic-sharp-battery-charging-80-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v5h4.93L13 7v2h4z"></svg:path><svg:path fill="currentColor" d="M13 12.5h2L11 20v-5.5H9L11.93 9H7v13h10V9h-4z"></svg:path>`,
})
export class IcSharpBatteryCharging80Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryCharging90Icon],svg[ic-sharp-battery-charging-90-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v4h5.47L13 7v1h4z"></svg:path><svg:path fill="currentColor" d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v14h10V8h-4z"></svg:path>`,
})
export class IcSharpBatteryCharging90Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryChargingFullIcon],svg[ic-sharp-battery-charging-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h-3V2h-4v2H7v18h10zm-6 16v-5.5H9L13 7v5.5h2z"></svg:path>`,
})
export class IcSharpBatteryChargingFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryFullIcon],svg[ic-sharp-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h-3V2h-4v2H7v18h10z"></svg:path>`,
})
export class IcSharpBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatterySaverIcon],svg[ic-sharp-battery-saver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h-3V2h-4v2H7v18h10zm-2 10h-2v2h-2v-2H9v-2h2v-2h2v2h2z"></svg:path>`,
})
export class IcSharpBatterySaverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryStdIcon],svg[ic-sharp-battery-std-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h-3V2h-4v2H7v18h10z"></svg:path>`,
})
export class IcSharpBatteryStdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryUnknownIcon],svg[ic-sharp-battery-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4M13 18h-2v-2h2zm1.3-5.31s-.38.42-.67.71c-.48.48-.83 1.15-.83 1.6h-1.6c0-.83.46-1.52.93-2l.93-.94A1.498 1.498 0 0 0 12 9.5c-.83 0-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.7 1.69"></svg:path>`,
})
export class IcSharpBatteryUnknownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBeachAccessIcon],svg[ic-sharp-beach-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98m11.47 2.85l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02c3.93-1.3 8.31-.25 11.44 2.88M5.97 5.96l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3m7.156 8.6l1.428-1.428l6.442 6.442l-1.43 1.428z"></svg:path>`,
})
export class IcSharpBeachAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBedIcon],svg[ic-sharp-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10V5H3v5H2v9h2v-2h16v2h2v-9zm-8-3h6v3h-6zm-8 3V7h6v3zm-1 5v-3h16v3z"></svg:path>`,
})
export class IcSharpBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBedroomBabyIcon],svg[ic-sharp-bedroom-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM12 18c-2.64 0-5.13-1.03-7-2.9l1.06-1.06c.34.34.71.65 1.1.92L8 13.5V9.51l-1.55.99l-.95-1L7 7.76L6 7h3.65l1.73 3H17v1h-1v2.5l.84 1.46c.39-.28.76-.58 1.1-.92L19 15.1a9.84 9.84 0 0 1-7 2.9"></svg:path><svg:path fill="currentColor" d="M14.69 14.24a7.72 7.72 0 0 1-5.4 0l-.81 1.41l-.03.06c1.1.52 2.28.79 3.53.79s2.45-.28 3.55-.79l-.03-.06z"></svg:path>`,
})
export class IcSharpBedroomBabyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBedroomChildIcon],svg[ic-sharp-bedroom-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.5h6v2H9zM7.51 12h9v2h-9z"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zm-4 15h-1.5v-1.5h-9V17H6v-6.32l1.5-.01V7h9v3.67H18z"></svg:path>`,
})
export class IcSharpBedroomChildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBedroomParentIcon],svg[ic-sharp-bedroom-parent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 12h11v2h-11zm.75-3.5h4v2h-4zm5.5 0h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zm-3 15h-1.5v-1.5h-11V17H5v-5l.65-.55V7H11c.37 0 .72.12 1 .32c.28-.2.63-.32 1-.32h5.35v4.45L19 12z"></svg:path>`,
})
export class IcSharpBedroomParentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBedtimeIcon],svg[ic-sharp-bedtime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10c3.71 0 6.93-2.02 8.66-5.02c-7.51-.25-12.09-8.43-8.32-14.96"></svg:path>`,
})
export class IcSharpBedtimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBedtimeOffIcon],svg[ic-sharp-bedtime-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.19 21.19L2.81 2.81L1.39 4.22l2.27 2.27A9.96 9.96 0 0 0 2 12c0 5.52 4.48 10 10 10c2.04 0 3.93-.62 5.51-1.66l2.27 2.27zM12.34 2.02c-2.18-.07-4.19.55-5.85 1.64l4.59 4.59c-.27-2.05.1-4.22 1.26-6.23"></svg:path>`,
})
export class IcSharpBedtimeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBeenhereIcon],svg[ic-sharp-beenhere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.01 1L3 17l9 6l8.99-6L21 1zM10 16l-5-5l1.41-1.42L10 13.17l7.59-7.59L19 7z"></svg:path>`,
})
export class IcSharpBeenhereIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBentoIcon],svg[ic-sharp-bento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11V5h6v6zm0 8h6v-6h-6zM14 5v14H2V5zm-4.5 7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5"></svg:path>`,
})
export class IcSharpBentoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBikeScooterIcon],svg[ic-sharp-bike-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14h.74L8.47 4H3v2h3.87l1.42 6.25h-.01A6.01 6.01 0 0 0 4.09 17H0v2h6v-1c0-2.21 1.79-4 4-4m8.18-6l-1.83-5H11v2h3.96l1.1 3H10.4l.46 2H15c-.43.58-.75 1.25-.9 2h-2.79l.46 2h2.33c.44 2.23 2.31 3.88 4.65 3.99c2.8.13 5.25-2.19 5.25-5c0-2.8-2.2-5-5-5h-.82zm.82 8c-1.68 0-3-1.32-3-3c0-.93.41-1.73 1.05-2.28l.96 2.64l1.88-.68l-.97-2.67c.03 0 .06-.01.09-.01c1.68 0 3 1.32 3 3s-1.33 3-3.01 3"></svg:path><svg:path fill="currentColor" d="M10 15c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpBikeScooterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBiotechIcon],svg[ic-sharp-biotech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19v-2h5v-2h-8c-1.66 0-3-1.34-3-3c0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H5v2h14v-2z"></svg:path><svg:path fill="currentColor" d="M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62l.94-.34l.34.94l1.88-.68l-.34-.94l.94-.34l-2.74-7.53l-.94.34l-.34-.94l-1.88.68l.34.94l-.94.35z"></svg:path><svg:circle cx="10.5" cy="8" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcSharpBiotechIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBlenderIcon],svg[ic-sharp-blender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3h-4V2h-4v1H3v8h4.23l.64 4.13L6 17v5h12v-5l-1.87-1.87zM5 9V5h1.31l.62 4zm7 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m2.29-5H9.72L8.33 5h7.34z"></svg:path>`,
})
export class IcSharpBlenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBlindIcon],svg[ic-sharp-blind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11.5" cy="3.5" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12.13 7.12c-.17-.35-.44-.65-.8-.85a1.98 1.98 0 0 0-1.93-.03v-.01L4 9.3V14h2v-3.54l1.5-.85C7.18 10.71 7 11.85 7 13v5.33L4.4 21.8L6 23l3-4l.22-3.54L11 18v5h2v-6.5l-1.97-2.81c-.04-.52-.14-1.76.45-3.4c.75 1.14 1.88 1.98 3.2 2.41L20.63 23l.87-.5l-5.48-9.5H17v-2c-.49 0-2.88.17-4.08-2.21"></svg:path>`,
})
export class IcSharpBlindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBlindsIcon],svg[ic-sharp-blinds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h20v-2zM16 9h2v2h-2zm-2 2H6V9h8zm4-4h-2V5h2zm-4-2v2H6V5zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6z"></svg:path>`,
})
export class IcSharpBlindsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBlindsClosedIcon],svg[ic-sharp-blinds-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h11.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2zm-2-8h-2V9h2zm-4 0H6V9h8zm0 2v2H6v-2zm2 0h2v2h-2zm2-6h-2V5h2zm-4-2v2H6V5zM6 19v-2h8v2zm10 0v-2h2v2z"></svg:path>`,
})
export class IcSharpBlindsClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBlockIcon],svg[ic-sharp-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M4 12c0-4.42 3.58-8 8-8c1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.9 7.9 0 0 1 4 12m8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.9 7.9 0 0 1 20 12c0 4.42-3.58 8-8 8"></svg:path>`,
})
export class IcSharpBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBloodtypeIcon],svg[ic-sharp-bloodtype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-5.33 4.55-8 8.48-8 11.8c0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8m3 16H9v-2h6zm0-5h-2v2h-2v-2H9v-2h2V9h2v2h2z"></svg:path>`,
})
export class IcSharpBloodtypeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBluetoothIcon],svg[ic-sharp-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.71 7.71L12 2h-1v7.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L11 14.41V22h1l5.71-5.71l-4.3-4.29zM13 5.83l1.88 1.88L13 9.59zm1.88 10.46L13 18.17v-3.76z"></svg:path>`,
})
export class IcSharpBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBluetoothAudioIcon],svg[ic-sharp-bluetooth-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33s-.16-1.59-.43-2.31zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2a9.94 9.94 0 0 0 1.54-5.31c-.01-1.89-.55-3.67-1.48-5.19m-3.82 1L10 2H9v7.59L4.41 5L3 6.41L8.59 12L3 17.59L4.41 19L9 14.41V22h1l5.71-5.71l-4.3-4.29zM11 5.83l1.88 1.88L11 9.59zm1.88 10.46L11 18.17v-3.76z"></svg:path>`,
})
export class IcSharpBluetoothAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBluetoothConnectedIcon],svg[ic-sharp-bluetooth-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 12l-2-2l-2 2l2 2zm10.71-4.29L12 2h-1v7.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L11 14.41V22h1l5.71-5.71l-4.3-4.29zM13 5.83l1.88 1.88L13 9.59zm1.88 10.46L13 18.17v-3.76zM19 10l-2 2l2 2l2-2z"></svg:path>`,
})
export class IcSharpBluetoothConnectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBluetoothDisabledIcon],svg[ic-sharp-bluetooth-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 5.83l1.88 1.88l-1.6 1.6l1.41 1.41l3.02-3.02L12 2h-1v5.03l2 2zM5.41 4L4 5.41L10.59 12L5 17.59L6.41 19L11 14.41V22h1l4.29-4.29l2.3 2.29L20 18.59zM13 18.17v-3.76l1.88 1.88z"></svg:path>`,
})
export class IcSharpBluetoothDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBluetoothDriveIcon],svg[ic-sharp-bluetooth-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10H4.81l1.04-3H15V5H4.43L2 12v9h3v-2h12v2h3v-9h-3c-1.1 0-2-.9-2-2m-8.5 6c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16m9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path><svg:path fill="currentColor" d="M22 3.85L19.15 1h-.5v3.79l-2.3-2.29l-.7.7L18.44 6l-2.79 2.79l.7.71l2.3-2.3V11h.5L22 8.14L19.85 6zm-2.35-.94l.94.94l-.94.94zm.94 5.23l-.94.94V7.2z"></svg:path>`,
})
export class IcSharpBluetoothDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBluetoothSearchingIcon],svg[ic-sharp-bluetooth-searching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33s-.16-1.59-.43-2.31zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2a9.94 9.94 0 0 0 1.54-5.31c-.01-1.89-.55-3.67-1.48-5.19m-3.82 1L10 2H9v7.59L4.41 5L3 6.41L8.59 12L3 17.59L4.41 19L9 14.41V22h1l5.71-5.71l-4.3-4.29zM11 5.83l1.88 1.88L11 9.59zm1.88 10.46L11 18.17v-3.76z"></svg:path>`,
})
export class IcSharpBluetoothSearchingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBlurCircularIcon],svg[ic-sharp-blur-circular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m3 7c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m-3-3c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5M14 9c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5m3 6c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m0-4c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m0-3.5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcSharpBlurCircularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBlurLinearIcon],svg[ic-sharp-blur-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M9 13c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0-4c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1M3 21h18v-2H3zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5S3.5 7.17 3.5 8S4.17 9.5 5 9.5m0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M9 17c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5M3 3v2h18V3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5m0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5M13 9c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0 4c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0 4c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcSharpBlurLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBlurOffIcon],svg[ic-sharp-blur-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m13.8 11.48l.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28M14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5m-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5"></svg:path><svg:circle cx="18" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="18" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21 10.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5"></svg:path><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="18" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="18" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 20.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m7-7c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m-18 0c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5"></svg:path><svg:circle cx="10" cy="18" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m7 11c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5"></svg:path><svg:circle cx="6" cy="14" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M2.5 5.27L6 8.77l.28.28L6 9c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47c0 .83.67 1.5 1.5 1.5c.74 0 1.36-.54 1.47-1.25l2.81 2.81A.9.9 0 0 0 14 17c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1c0-.1-.03-.19-.06-.28l3.78 3.78h.01l1.41-1.41L3.91 3.86z"></svg:path>`,
})
export class IcSharpBlurOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBlurOnIcon],svg[ic-sharp-blur-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0-8c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5M6 5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5M14 7c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5m-11 10c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m7 7c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5M10 7c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m8 .5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0-8c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0-4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5M14 17c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0 8.5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5"></svg:path>`,
})
export class IcSharpBlurOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBoltIcon],svg[ic-sharp-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21h-1l1-7H6.74S10.42 7.54 13 3h1l-1 7h4.28z"></svg:path>`,
})
export class IcSharpBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBookIcon],svg[ic-sharp-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4v20h16zM6 4h5v8l-2.5-1.5L6 12z"></svg:path>`,
})
export class IcSharpBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBookOnlineIcon],svg[ic-sharp-book-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1H5v22h14zM7 18V6h10v12zm9-7V8H8v3.1c.55 0 1 .45 1 1s-.45 1-1 1V16h8v-3c-.55 0-1-.45-1-1s.45-1 1-1m-3.5 3.5h-1v-1h1zm0-2h-1v-1h1zm0-2h-1v-1h1z"></svg:path>`,
})
export class IcSharpBookOnlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBookmarkIcon],svg[ic-sharp-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5v18l7-3l7 3z"></svg:path>`,
})
export class IcSharpBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBookmarkAddIcon],svg[ic-sharp-bookmark-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h-2v2h-2V7h-2V5h2V3h2v2h2zm-2 14l-7-3l-7 3V3h9a5.002 5.002 0 0 0 5 7.9z"></svg:path>`,
})
export class IcSharpBookmarkAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBookmarkAddedIcon],svg[ic-sharp-bookmark-added-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 21l-7-3l-7 3V3h9a5.002 5.002 0 0 0 5 7.9zM17.83 9L15 6.17l1.41-1.41l1.41 1.41l3.54-3.54l1.41 1.41z"></svg:path>`,
})
export class IcSharpBookmarkAddedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBookmarkBorderIcon],svg[ic-sharp-bookmark-border-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5v18l7-3l7 3zm-2 15l-5-2.18L7 18V5h10z"></svg:path>`,
})
export class IcSharpBookmarkBorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBookmarkRemoveIcon],svg[ic-sharp-bookmark-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h-6V5h6zm-2 3.9c-.64.13-1.32.14-2.02 0c-1.91-.38-3.47-1.92-3.87-3.83A5.02 5.02 0 0 1 14 3H5v18l7-3l7 3z"></svg:path>`,
})
export class IcSharpBookmarkRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBookmarksIcon],svg[ic-sharp-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 18l2 1V1H7v2h12zM17 5H3v18l7-3l7 3z"></svg:path>`,
})
export class IcSharpBookmarksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderAllIcon],svg[ic-sharp-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm8 16H5v-6h6zm0-8H5V5h6zm8 8h-6v-6h6zm0-8h-6V5h6z"></svg:path>`,
})
export class IcSharpBorderAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderBottomIcon],svg[ic-sharp-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11H7v2h2zm4 4h-2v2h2zM9 3H7v2h2zm4 8h-2v2h2zM5 3H3v2h2zm8 4h-2v2h2zm4 4h-2v2h2zm-4-8h-2v2h2zm4 0h-2v2h2zm2 10h2v-2h-2zm0 4h2v-2h-2zM5 7H3v2h2zm14-4v2h2V3zm0 6h2V7h-2zM5 11H3v2h2zM3 21h18v-2H3zm2-6H3v2h2z"></svg:path>`,
})
export class IcSharpBorderBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderClearIcon],svg[ic-sharp-border-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h2V3H7zm0 8h2v-2H7zm0 8h2v-2H7zm4-4h2v-2h-2zm0 4h2v-2h-2zm-8 0h2v-2H3zm0-4h2v-2H3zm0-4h2v-2H3zm0-4h2V7H3zm0-4h2V3H3zm8 8h2v-2h-2zm8 4h2v-2h-2zm0-4h2v-2h-2zm0 8h2v-2h-2zm0-12h2V7h-2zm-8 0h2V7h-2zm8-6v2h2V3zm-8 2h2V3h-2zm4 16h2v-2h-2zm0-8h2v-2h-2zm0-8h2V3h-2z"></svg:path>`,
})
export class IcSharpBorderClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderColorIcon],svg[ic-sharp-border-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68l-3.75-3.75l2.53-2.54l3.75 3.75z"></svg:path>`,
})
export class IcSharpBorderColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderHorizontalIcon],svg[ic-sharp-border-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h2v-2H3zM5 7H3v2h2zM3 17h2v-2H3zm4 4h2v-2H7zM5 3H3v2h2zm4 0H7v2h2zm8 0h-2v2h2zm-4 4h-2v2h2zm0-4h-2v2h2zm6 14h2v-2h-2zm-8 4h2v-2h-2zm-8-8h18v-2H3zM19 3v2h2V3zm0 6h2V7h-2zm-8 8h2v-2h-2zm4 4h2v-2h-2zm4 0h2v-2h-2z"></svg:path>`,
})
export class IcSharpBorderHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderInnerIcon],svg[ic-sharp-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h2v-2H3zm4 0h2v-2H7zM5 7H3v2h2zM3 17h2v-2H3zM9 3H7v2h2zM5 3H3v2h2zm12 0h-2v2h2zm2 6h2V7h-2zm0-6v2h2V3zm-4 18h2v-2h-2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8zm6 18h2v-2h-2zm0-4h2v-2h-2z"></svg:path>`,
})
export class IcSharpBorderInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderLeftIcon],svg[ic-sharp-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21h2v-2h-2zm0-4h2v-2h-2zm0-12h2V3h-2zm0 4h2V7h-2zm0 4h2v-2h-2zm-4 8h2v-2H7zM7 5h2V3H7zm0 8h2v-2H7zm-4 8h2V3H3zM19 9h2V7h-2zm-4 12h2v-2h-2zm4-4h2v-2h-2zm0-14v2h2V3zm0 10h2v-2h-2zm0 8h2v-2h-2zm-4-8h2v-2h-2zm0-8h2V3h-2z"></svg:path>`,
})
export class IcSharpBorderLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderOuterIcon],svg[ic-sharp-border-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h-2v2h2zm0 4h-2v2h2zm4 0h-2v2h2zM3 3v18h18V3zm16 16H5V5h14zm-6-4h-2v2h2zm-4-4H7v2h2z"></svg:path>`,
})
export class IcSharpBorderOuterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderRightIcon],svg[ic-sharp-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21h2v-2H7zM3 5h2V3H3zm4 0h2V3H7zm0 8h2v-2H7zm-4 8h2v-2H3zm8 0h2v-2h-2zm-8-8h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm8 8h2v-2h-2zm4-4h2v-2h-2zm4-10v18h2V3zm-4 18h2v-2h-2zm0-16h2V3h-2zm-4 8h2v-2h-2zm0-8h2V3h-2zm0 4h2V7h-2z"></svg:path>`,
})
export class IcSharpBorderRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderStyleIcon],svg[ic-sharp-border-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21h2v-2h-2zm4 0h2v-2h-2zM7 21h2v-2H7zm4 0h2v-2h-2zm8-4h2v-2h-2zm0-4h2v-2h-2zM3 3v18h2V5h16V3zm16 6h2V7h-2z"></svg:path>`,
})
export class IcSharpBorderStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderTopIcon],svg[ic-sharp-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21h2v-2H7zm0-8h2v-2H7zm4 0h2v-2h-2zm0 8h2v-2h-2zm-8-4h2v-2H3zm0 4h2v-2H3zm0-8h2v-2H3zm0-4h2V7H3zm8 8h2v-2h-2zm8-8h2V7h-2zm0 4h2v-2h-2zM3 3v2h18V3zm16 14h2v-2h-2zm-4 4h2v-2h-2zM11 9h2V7h-2zm8 12h2v-2h-2zm-4-8h2v-2h-2z"></svg:path>`,
})
export class IcSharpBorderTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderVerticalIcon],svg[ic-sharp-border-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h2V7H3zm0-4h2V3H3zm4 16h2v-2H7zm0-8h2v-2H7zm-4 0h2v-2H3zm0 8h2v-2H3zm0-4h2v-2H3zM7 5h2V3H7zm12 12h2v-2h-2zm-8 4h2V3h-2zm8 0h2v-2h-2zm0-8h2v-2h-2zm0-10v2h2V3zm0 6h2V7h-2zm-4-4h2V3h-2zm0 16h2v-2h-2zm0-8h2v-2h-2z"></svg:path>`,
})
export class IcSharpBorderVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBoyIcon],svg[ic-sharp-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5c.97 0 1.75-.78 1.75-1.75S12.97 4 12 4s-1.75.78-1.75 1.75S11.03 7.5 12 7.5M14 20v-5h1v-4.5c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2V15h1v5z"></svg:path>`,
})
export class IcSharpBoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrandingWatermarkIcon],svg[ic-sharp-branding-watermark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-2 16h-9v-6h9z"></svg:path>`,
})
export class IcSharpBrandingWatermarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBreakfastDiningIcon],svg[ic-sharp-breakfast-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.85 3H6.14C4.15 3 2.36 4.39 2.05 6.36c-.27 1.75.59 3.29 1.95 4.09V21h16V10.45a4 4 0 0 0 1.95-4.11C21.63 4.38 19.83 3 17.85 3m-1.44 10L12 17.42L7.59 13L12 8.59z"></svg:path>`,
})
export class IcSharpBreakfastDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrightness1Icon],svg[ic-sharp-brightness-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor"></svg:circle>`,
})
export class IcSharpBrightness1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrightness2Icon],svg[ic-sharp-brightness-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2"></svg:path>`,
})
export class IcSharpBrightness2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrightness3Icon],svg[ic-sharp-brightness-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2c-1.05 0-2.05.16-3 .46c4.06 1.27 7 5.06 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46c5.52 0 10-4.48 10-10S14.52 2 9 2"></svg:path>`,
})
export class IcSharpBrightness3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrightness4Icon],svg[ic-sharp-brightness-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6"></svg:path>`,
})
export class IcSharpBrightness4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrightness5Icon],svg[ic-sharp-brightness-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.31L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6"></svg:path>`,
})
export class IcSharpBrightness5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrightness6Icon],svg[ic-sharp-brightness-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.31L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6"></svg:path>`,
})
export class IcSharpBrightness6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrightness7Icon],svg[ic-sharp-brightness-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6m0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"></svg:path>`,
})
export class IcSharpBrightness7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrightnessAutoIcon],svg[ic-sharp-brightness-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.85 12.65h2.3L12 9zM20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12zM14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9z"></svg:path>`,
})
export class IcSharpBrightnessAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrightnessHighIcon],svg[ic-sharp-brightness-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6m0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"></svg:path>`,
})
export class IcSharpBrightnessHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrightnessLowIcon],svg[ic-sharp-brightness-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.31L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6"></svg:path>`,
})
export class IcSharpBrightnessLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrightnessMediumIcon],svg[ic-sharp-brightness-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.31L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6"></svg:path>`,
})
export class IcSharpBrightnessMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBroadcastOnHomeIcon],svg[ic-sharp-broadcast-on-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.76V4H4v2h16v2.59c.73.29 1.4.69 2 1.17M9 9H2v11h7zm-2 9H4v-7h3zm10.75-1.03c.3-.23.5-.57.5-.97a1.25 1.25 0 0 0-2.5 0c0 .4.2.75.5.97V22h1.5z"></svg:path><svg:path fill="currentColor" d="M17 13.5a2.5 2.5 0 0 1 2.5 2.5c0 .69-.28 1.31-.73 1.76l1.06 1.06C20.55 18.1 21 17.1 21 16c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 1.1.45 2.1 1.17 2.83l1.06-1.06A2.5 2.5 0 0 1 17 13.5"></svg:path><svg:path fill="currentColor" d="M17 9.5a6.5 6.5 0 0 0-6.5 6.5c0 1.79.73 3.42 1.9 4.6l1.06-1.06C12.56 18.63 12 17.38 12 16c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.37-.56 2.62-1.46 3.52l1.07 1.06A6.5 6.5 0 0 0 17 9.5"></svg:path>`,
})
export class IcSharpBroadcastOnHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBroadcastOnPersonalIcon],svg[ic-sharp-broadcast-on-personal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8c.7 0 1.38.1 2.02.27L12 3L4 9v12h6.76A7.998 7.998 0 0 1 17 8m0 6.75c-.69 0-1.25.56-1.25 1.25c0 .4.2.75.5.97V22h1.5v-5.03c.3-.23.5-.57.5-.97c0-.69-.56-1.25-1.25-1.25"></svg:path><svg:path fill="currentColor" d="M17 12c-2.21 0-4 1.79-4 4c0 1.1.45 2.1 1.17 2.83l1.06-1.06A2.5 2.5 0 1 1 19.5 16c0 .69-.28 1.31-.73 1.76l1.06 1.06C20.55 18.1 21 17.1 21 16c0-2.21-1.79-4-4-4"></svg:path><svg:path fill="currentColor" d="M17 9.5a6.5 6.5 0 0 0-6.5 6.5c0 1.79.73 3.42 1.9 4.6l1.06-1.06C12.56 18.63 12 17.38 12 16c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.37-.56 2.62-1.46 3.52l1.07 1.06A6.5 6.5 0 0 0 17 9.5"></svg:path>`,
})
export class IcSharpBroadcastOnPersonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrokenImageIcon],svg[ic-sharp-broken-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v8.59l-3-3.01l-4 4.01l-4-4l-4 4l-3-3.01V3zm-3 8.42l3 3.01V21H3v-8.58l3 2.99l4-4l4 4z"></svg:path>`,
})
export class IcSharpBrokenImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrowseGalleryIcon],svg[ic-sharp-browse-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 9 3m2.79 13.21L8 12.41V7h2v4.59l3.21 3.21z"></svg:path><svg:path fill="currentColor" d="M17.99 3.52v2.16A6.99 6.99 0 0 1 22 12c0 2.79-1.64 5.2-4.01 6.32v2.16C21.48 19.24 24 15.91 24 12s-2.52-7.24-6.01-8.48"></svg:path>`,
})
export class IcSharpBrowseGalleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrowserNotSupportedIcon],svg[ic-sharp-browser-not-supported-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6v10.5l2 2V4H6.5l2 2zM3.22 3.32L1.95 4.59L3 5.64V20h14.36l2.06 2.06l1.27-1.27zM15 18H5V7.64L15.36 18z"></svg:path>`,
})
export class IcSharpBrowserNotSupportedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrowserUpdatedIcon],svg[ic-sharp-browser-updated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v5h-5l1 1v2H6v-2l1-1H2V3h10v2H4v11h16v-3zm-7 2l-5-5h4V3h2v7h4z"></svg:path>`,
})
export class IcSharpBrowserUpdatedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrunchDiningIcon],svg[ic-sharp-brunch-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h2V4h-2zm-2 14H2v-2h14zm2-6.11l-.4-.42a5.85 5.85 0 0 1-1.6-4V2h6v9.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h2v2h-4zM7 16v-2h4v2h5v2H2v-2z"></svg:path>`,
})
export class IcSharpBrunchDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBrushIcon],svg[ic-sharp-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14c-1.66 0-3 1.34-3 3c0 1.31-1.16 2-2 2c.92 1.22 2.49 2 4 2c2.21 0 4-1.79 4-4c0-1.66-1.34-3-3-3m14.41-8.66l-2.75-2.75L9 12.25L11.75 15z"></svg:path>`,
})
export class IcSharpBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBubbleChartIcon],svg[ic-sharp-bubble-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7.2" cy="14.4" r="3.2" fill="currentColor"></svg:circle><svg:circle cx="14.8" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="15.2" cy="8.8" r="4.8" fill="currentColor"></svg:circle>`,
})
export class IcSharpBubbleChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBugReportIcon],svg[ic-sharp-bug-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-2.81a6 6 0 0 0-1.82-1.96L17 4.41L15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3L7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20zm-6 8h-4v-2h4zm0-4h-4v-2h4z"></svg:path>`,
})
export class IcSharpBugReportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBuildIcon],svg[ic-sharp-build-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.09 2.91C10.08.9 7.07.49 4.65 1.67l4.34 4.34l-3 3l-4.34-4.34C.48 7.1.89 10.09 2.9 12.1a6.51 6.51 0 0 0 6.89 1.48l9.82 9.82l3.71-3.71l-9.78-9.79c.92-2.34.44-5.1-1.45-6.99"></svg:path>`,
})
export class IcSharpBuildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBuildCircleIcon],svg[ic-sharp-build-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m3.14 15.25l-3.76-3.76c-1.22.43-2.64.17-3.62-.81a3.47 3.47 0 0 1-.59-4.1l2.35 2.35l1.41-1.41l-2.35-2.35c1.32-.71 2.99-.52 4.1.59c.98.98 1.24 2.4.81 3.62l3.76 3.76z"></svg:path>`,
})
export class IcSharpBuildCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBungalowIcon],svg[ic-sharp-bungalow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L4.2 15.5l1.7 1.06L7 14.8V21h4v-5h2v5h4v-6.21l1.1 1.77l1.7-1.06zm1 11h-2v-2h2z"></svg:path>`,
})
export class IcSharpBungalowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBurstModeIcon],svg[ic-sharp-burst-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5h2v14H1zm4 0h2v14H5zm18 0H9v14h14zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17z"></svg:path>`,
})
export class IcSharpBurstModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBusAlertIcon],svg[ic-sharp-bus-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11V8h7.29c-.77-2.6.21-4.61.37-4.97C2.97 2.67 2 5.02 2 7v9.5c0 .95.38 1.81 1 2.44V22h3v-2h8v2h3v-3.06c.62-.63 1-1.49 1-2.44V13c-1.91 0-3.63-.76-4.89-2zm2.5 6c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17m8.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5"></svg:path><svg:path fill="currentColor" d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m.5 8h-1V8h1zm0-2h-1V3h1z"></svg:path>`,
})
export class IcSharpBusAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBusinessIcon],svg[ic-sharp-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z"></svg:path>`,
})
export class IcSharpBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpBusinessCenterIcon],svg[ic-sharp-business-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16v-1H3.01v6H21v-6h-7v1zm12-9h-6V5l-2-2h-4L8 5v2H2v7h8v-2h4v2h8zm-8 0h-4V5h4z"></svg:path>`,
})
export class IcSharpBusinessCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCabinIcon],svg[ic-sharp-cabin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1c0 1.66-1.34 3-3 3c-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3c.55 0 1-.45 1-1zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4zm1.94 4h-3.89L12 5.52zm-6.5 2h9.12L18 10.1v.9H6v-.9zM18 13v2H6v-2zM6 19v-2h12v2z"></svg:path>`,
})
export class IcSharpCabinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCableIcon],svg[ic-sharp-cable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5V3h-4v2h-1v5h2v9h-4V3H5v11H3v5h1v2h4v-2h1v-5H7V5h4v16h8V10h2V5z"></svg:path>`,
})
export class IcSharpCableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCachedIcon],svg[ic-sharp-cached-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 8l-4 4h3c0 3.31-2.69 6-6 6a5.9 5.9 0 0 1-2.8-.7l-1.46 1.46A7.93 7.93 0 0 0 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6c1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0 0 12 4c-4.42 0-8 3.58-8 8H1l4 4l4-4z"></svg:path>`,
})
export class IcSharpCachedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCakeIcon],svg[ic-sharp-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a2 2 0 0 0 2-2c0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03c0 1.1.9 2 2 2m4.53 9.92l-1-1l-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07l-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V22h18v-5.61c-.75.51-1.71.75-2.74.52c-.66-.14-1.25-.51-1.73-.99M18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96c.52 0 1.02-.2 1.38-.57l2.14-2.13l2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13l2.13 2.13c.37.37.86.57 1.38.57c1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9"></svg:path>`,
})
export class IcSharpCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCalculateIcon],svg[ic-sharp-calculate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-7.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06l-1.41 1.41l1.41 1.41l-1.06 1.06l-1.41-1.4l-1.41 1.41l-1.06-1.06l1.41-1.41zm-6.78.66h5v1.5h-5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2zm6.5 1.25h-5v-1.5h5zm0-2.5h-5v-1.5h5z"></svg:path>`,
})
export class IcSharpCalculateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCalendarMonthIcon],svg[ic-sharp-calendar-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"></svg:path>`,
})
export class IcSharpCalendarMonthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCalendarTodayIcon],svg[ic-sharp-calendar-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3h-3V1h-2v2H7V1H5v2H2v20h20zm-2 18H4V8h16z"></svg:path>`,
})
export class IcSharpCalendarTodayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCalendarViewDayIcon],svg[ic-sharp-calendar-view-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z"></svg:path>`,
})
export class IcSharpCalendarViewDayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCalendarViewMonthIcon],svg[ic-sharp-calendar-view-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zM8 11H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4zM8 18H4v-5h4zm6 0h-4v-5h4zm6 0h-4v-5h4z"></svg:path>`,
})
export class IcSharpCalendarViewMonthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCalendarViewWeekIcon],svg[ic-sharp-calendar-view-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zm-9 2h2.5v12H13zm-2 12H8.5V6H11zM4 6h2.5v12H4zm16 12h-2.5V6H20z"></svg:path>`,
})
export class IcSharpCalendarViewWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCallIcon],svg[ic-sharp-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 15.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"></svg:path>`,
})
export class IcSharpCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCallEndIcon],svg[ic-sharp-call-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.68 16.07l3.92-3.11V9.59c2.85-.93 5.94-.93 8.8 0v3.38l3.91 3.1L24 12.39c-6.41-7.19-17.59-7.19-24 0z"></svg:path>`,
})
export class IcSharpCallEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCallMadeIcon],svg[ic-sharp-call-made-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v2h6.59L4 18.59L5.41 20L17 8.41V15h2V5z"></svg:path>`,
})
export class IcSharpCallMadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCallMergeIcon],svg[ic-sharp-call-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20.41L18.41 19L15 15.59L13.59 17zM7.5 8H11v5.59L5.59 19L7 20.41l6-6V8h3.5L12 3.5z"></svg:path>`,
})
export class IcSharpCallMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCallMissedIcon],svg[ic-sharp-call-missed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.59 7L12 14.59L6.41 9H11V7H3v8h2v-4.59l7 7l9-9z"></svg:path>`,
})
export class IcSharpCallMissedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCallMissedOutgoingIcon],svg[ic-sharp-call-missed-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 8.41l9 9l7-7V15h2V7h-8v2h4.59L12 14.59L4.41 7z"></svg:path>`,
})
export class IcSharpCallMissedOutgoingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCallReceivedIcon],svg[ic-sharp-call-received-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5.41L18.59 4L7 15.59V9H5v10h10v-2H8.41z"></svg:path>`,
})
export class IcSharpCallReceivedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCallSplitIcon],svg[ic-sharp-call-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 4l2.29 2.29l-2.88 2.88l1.42 1.42l2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29l4.71 4.7V20h2v-8.41l-5.29-5.3z"></svg:path>`,
})
export class IcSharpCallSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCallToActionIcon],svg[ic-sharp-call-to-action-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-2 16H3v-3h18z"></svg:path>`,
})
export class IcSharpCallToActionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCameraIcon],svg[ic-sharp-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.4 10.5l4.77-8.26a9.98 9.98 0 0 0-8.49 2.01l3.66 6.35zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9zm.26 1h-7.49l.29.5l4.76 8.25A9.9 9.9 0 0 0 22 12c0-.69-.07-1.35-.2-2M8.54 12l-3.9-6.75A9.96 9.96 0 0 0 2.2 14h7.49zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15zm11.27 0l-3.9 6.76a9.98 9.98 0 0 0 8.49-2.01l-3.66-6.35z"></svg:path>`,
})
export class IcSharpCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCameraAltIcon],svg[ic-sharp-camera-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16.83 4L15 2H9L7.17 4H2v16h20V4zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class IcSharpCameraAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCameraEnhanceIcon],svg[ic-sharp-camera-enhance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.83 5L15 3H9L7.17 5H2v16h20V5zM12 18c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-9l-1.25 2.75L8 13l2.75 1.25L12 17l1.25-2.75L16 13l-2.75-1.25z"></svg:path>`,
})
export class IcSharpCameraEnhanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCameraFrontIcon],svg[ic-sharp-camera-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20H5v2h5v2l3-3l-3-3zm4 0v2h5v-2zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-1.99.9-1.99 2S10.9 8 12 8m7-8H5v18h14zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5z"></svg:path>`,
})
export class IcSharpCameraFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCameraIndoorIcon],svg[ic-sharp-camera-indoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L4 9v12h16V9zm4 13.06L14 15v2H8v-6h6v2l2-1.06z"></svg:path>`,
})
export class IcSharpCameraIndoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCameraOutdoorIcon],svg[ic-sharp-camera-outdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14v-2h-6v6h6v-2l2 1.06v-4.12zM12 3L4 9v12h16v-2H6v-9l6-4.5l6 4.5v1h2V9z"></svg:path>`,
})
export class IcSharpCameraOutdoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCameraRearIcon],svg[ic-sharp-camera-rear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20H5v2h5v2l3-3l-3-3zm4 0v2h5v-2zm5-20H5v18h14zm-7 6c-1.11 0-2-.9-2-2s.89-2 1.99-2s2 .9 2 2C14 5.1 13.1 6 12 6"></svg:path>`,
})
export class IcSharpCameraRearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCameraRollIcon],svg[ic-sharp-camera-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5V3h-3V1H5v2H2v19h12v-2h8V5zm-2 13h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2z"></svg:path>`,
})
export class IcSharpCameraRollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCameraswitchIcon],svg[ic-sharp-cameraswitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6h-4L9 7H6v10h12V7h-3zm-2 8c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path><svg:path fill="currentColor" d="m8.57.51l4.48 4.48V2.04c4.72.47 8.48 4.23 8.95 8.95h2C23.34 3.02 15.49-1.59 8.57.51m2.38 21.45c-4.72-.47-8.48-4.23-8.95-8.95H0c.66 7.97 8.51 12.58 15.43 10.48l-4.48-4.48z"></svg:path>`,
})
export class IcSharpCameraswitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCampaignIcon],svg[ic-sharp-campaign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39c.4-.53.8-1.07 1.2-1.6c-.99-.74-2.24-1.68-3.2-2.4c-.4.54-.8 1.08-1.2 1.61M20.4 5.6c-.4-.53-.8-1.07-1.2-1.6c-.99.74-2.24 1.68-3.2 2.4c.4.53.8 1.07 1.2 1.6c.96-.72 2.21-1.65 3.2-2.4M8 9H2v6h3v4h2v-4h1l5 3V6zm7.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34"></svg:path>`,
})
export class IcSharpCampaignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCancelIcon],svg[ic-sharp-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12z"></svg:path>`,
})
export class IcSharpCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCancelPresentationIcon],svg[ic-sharp-cancel-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v18h22V3zm20 16H3V5h18zM9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59z"></svg:path>`,
})
export class IcSharpCancelPresentationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCancelScheduleSendIcon],svg[ic-sharp-cancel-schedule-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 9c-.42 0-.83.04-1.24.11L1.01 3L1 10l9 2l-9 2l.01 7l8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9m0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5s-2.47 5.5-5.5 5.5"></svg:path><svg:path fill="currentColor" d="m18.27 14.03l-1.77 1.76l-1.77-1.76l-.7.7l1.76 1.77l-1.76 1.77l.7.7l1.77-1.76l1.77 1.76l.7-.7l-1.76-1.77l1.76-1.77z"></svg:path>`,
})
export class IcSharpCancelScheduleSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCandlestickChartIcon],svg[ic-sharp-candlestick-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4H7v2H5v12h2v2h2v-2h2V6H9zm10 4h-2V4h-2v4h-2v7h2v5h2v-5h2z"></svg:path>`,
})
export class IcSharpCandlestickChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCarCrashIcon],svg[ic-sharp-car-crash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m.5 6h-1V3h1zm0 1v1h-1V8zm-.59 5c.06.16.09.33.09.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.39.15-.74.39-1.01A7.03 7.03 0 0 1 11.68 9H5.81l1.04-3H11c0-.69.1-1.37.29-2H5.41L3 11v9h3v-2h12v2h3v-7.68c-1.05.51-2.16.69-3.09.68M7.5 15c-.83 0-1.5-.67-1.5-1.5S6.67 12 7.5 12s1.5.67 1.5 1.5S8.33 15 7.5 15"></svg:path>`,
})
export class IcSharpCarCrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCarRentalIcon],svg[ic-sharp-car-rental-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.83 3A3.01 3.01 0 0 0 8 1C6.34 1 5 2.34 5 4c0 1.65 1.34 3 3 3c1.3 0 2.41-.84 2.83-2H16v2h2V5h1V3zM8 5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m9.11 4H6.89L5 14.69V22h2v-2h10v2h2v-7.31zM9 17.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M7.67 13l.66-2h7.34l.66 2z"></svg:path>`,
})
export class IcSharpCarRentalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCarRepairIcon],svg[ic-sharp-car-repair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17.01V19h7v3h2v-3h7v-1.99zM7 14h10v2h2V8.69L17.11 3H6.89L5 8.69V16h2zm2-2.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M8.33 5h7.34l.66 2H7.67z"></svg:path>`,
})
export class IcSharpCarRepairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCardGiftcardIcon],svg[ic-sharp-card-giftcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6h-4.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67l-.5-.68C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5c0 .35.07.69.18 1H2.01v15H22zm-7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m11 15H4v-2h16zm0-5H4V8h5.08L7 10.83L8.62 12L12 7.4l3.38 4.6L17 10.83L14.92 8H20z"></svg:path>`,
})
export class IcSharpCardGiftcardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCardMembershipIcon],svg[ic-sharp-card-membership-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v15h6v5l4-2l4 2v-5h6zm-2 13H4v-2h16zm0-5H4V4h16z"></svg:path>`,
})
export class IcSharpCardMembershipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCardTravelIcon],svg[ic-sharp-card-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6h-5V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v15h20zM9 4h6v2H9zm11 15H4v-2h16zm0-5H4V8h3v2h2V8h6v2h2V8h3z"></svg:path>`,
})
export class IcSharpCardTravelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCarpenterIcon],svg[ic-sharp-carpenter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1.5L3.11 5.39l8.13 11.67l-1.41 1.41l4.24 4.24l7.07-7.07zm5.66 16.97l4.24-4.24l1.41 1.41l-4.24 4.24z"></svg:path>`,
})
export class IcSharpCarpenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCasesIcon],svg[ic-sharp-cases-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5V1h-8v4H5v13h18V5zm-2 0h-4V3h4zM3 9H1v13h18v-2H3z"></svg:path>`,
})
export class IcSharpCasesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCasinoIcon],svg[ic-sharp-casino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6S9 6.67 9 7.5S8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9"></svg:path>`,
})
export class IcSharpCasinoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCastIcon],svg[ic-sharp-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v5h2V5h18v14h-7v2h9zM1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0-4v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11"></svg:path>`,
})
export class IcSharpCastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCastConnectedIcon],svg[ic-sharp-cast-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19zM1 10v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11m22-7H1v5h2V5h18v14h-7v2h9z"></svg:path>`,
})
export class IcSharpCastConnectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCastForEducationIcon],svg[ic-sharp-cast-for-education-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v5h2V5h18v14h-7v2h9zM1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0-4v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11m10 1.09v2L14.5 15l3.5-1.91v-2L14.5 13zM14.5 6L9 9l5.5 3L20 9z"></svg:path>`,
})
export class IcSharpCastForEducationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCastleIcon],svg[ic-sharp-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-5h4v5h9V9zm-10 3H9V9h2zm4 0h-2V9h2z"></svg:path>`,
})
export class IcSharpCastleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCatchingPokemonIcon],svg[ic-sharp-catching-pokemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 12a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 5 0m7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2s10 4.48 10 10m-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8"></svg:path>`,
})
export class IcSharpCatchingPokemonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCategoryIcon],svg[ic-sharp-category-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l-5.5 9h11z"></svg:path><svg:circle cx="17.5" cy="17.5" r="4.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M3 13.5h8v8H3z"></svg:path>`,
})
export class IcSharpCategoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCelebrationIcon],svg[ic-sharp-celebration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 22l14-5l-9-9zm12.53-9.47L21 6.05l1.48 1.48l1.06-1.06L21 3.93l-7.53 7.53zM10.94 6L9.47 7.47l1.06 1.06l2.54-2.54l-2.54-2.53l-1.06 1.07zm8.03 3.97l-3.5 3.5l1.06 1.06L19 12.06l2.5 2.49l1.06-1.06z"></svg:path><svg:path fill="currentColor" d="m15.97 4.97l-4.5 4.5l1.06 1.06L18.07 5l-3.53-3.53l-1.06 1.06z"></svg:path>`,
})
export class IcSharpCelebrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCellTowerIcon],svg[ic-sharp-cell-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.3 14.7l1.2-1.2c-1-1-1.5-2.3-1.5-3.5c0-1.3.5-2.6 1.5-3.5L7.3 5.3c-1.3 1.3-2 3-2 4.7s.7 3.4 2 4.7M19.1 2.9l-1.2 1.2c1.6 1.6 2.4 3.8 2.4 5.9s-.8 4.3-2.4 5.9l1.2 1.2c2-2 2.9-4.5 2.9-7.1s-1-5.1-2.9-7.1"></svg:path><svg:path fill="currentColor" d="M6.1 4.1L4.9 2.9C3 4.9 2 7.4 2 10s1 5.1 2.9 7.1l1.2-1.2c-1.6-1.6-2.4-3.8-2.4-5.9s.8-4.3 2.4-5.9m10.6 10.6c1.3-1.3 2-3 2-4.7c-.1-1.7-.7-3.4-2-4.7l-1.2 1.2c1 1 1.5 2.3 1.5 3.5c0 1.3-.5 2.6-1.5 3.5zM14.5 10a2.5 2.5 0 0 0-5 0c0 .76.34 1.42.87 1.88L7 22h2l.67-2h4.67l.66 2h2l-3.37-10.12c.53-.46.87-1.12.87-1.88m-4.17 8L12 13l1.67 5z"></svg:path>`,
})
export class IcSharpCellTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCellWifiIcon],svg[ic-sharp-cell-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22h16V5.97zm14-2h-2v-7.22l2-2zM5.22 7.22L3.93 5.93c3.9-3.91 10.24-3.91 14.15 0l-1.29 1.29c-3.19-3.19-8.38-3.19-11.57 0m7.71 3.85L11 13l-1.93-1.93a2.74 2.74 0 0 1 3.86 0m1.29-1.28c-1.78-1.77-4.66-1.77-6.43 0L6.5 8.5a6.374 6.374 0 0 1 9 0z"></svg:path>`,
})
export class IcSharpCellWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCenterFocusStrongIcon],svg[ic-sharp-center-focus-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m-7 7H3v6h6v-2H5zM5 5h4V3H3v6h2zm16-2h-6v2h4v4h2zm-2 16h-4v2h6v-6h-2z"></svg:path>`,
})
export class IcSharpCenterFocusStrongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCenterFocusWeakIcon],svg[ic-sharp-center-focus-weak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15H3v6h6v-2H5zM5 5h4V3H3v6h2zm16-2h-6v2h4v4h2zm-2 16h-4v2h6v-6h-2zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcSharpCenterFocusWeakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChairIcon],svg[ic-sharp-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13h10V7h3V3H4v4h3z"></svg:path><svg:path fill="currentColor" d="M23 9h-4v6H5V9H1v10h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1h3z"></svg:path>`,
})
export class IcSharpChairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChairAltIcon],svg[ic-sharp-chair-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10h3V3H5v7h3v2H5v9h2v-3h10v3h2v-9h-3zM7 8V5h10v3zm10 8H7v-2h10zm-3-4h-4v-2h4z"></svg:path>`,
})
export class IcSharpChairAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChaletIcon],svg[ic-sharp-chalet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 7.5l7.5 7.5l-1.41 1.41L15 15.33V20h-4v-5H9v5H5v-4.67l-1.09 1.09L2.5 15zm12-1h-1.19l.75-.75l-.71-.71l-1.46 1.46h-.89v-.89l1.45-1.45l-.71-.71l-.74.74V3h-1v1.19l-.75-.75l-.71.71l1.45 1.45v.9h-.89l-1.45-1.45l-.71.71l.75.75H14v1h1.19l-.75.75l.71.71l1.45-1.45h.89v.89l-1.45 1.45l.71.71l.75-.75V11h1V9.81l.75.75l.71-.71l-1.46-1.46V7.5h.89l1.45 1.45l.71-.71l-.74-.74H22z"></svg:path>`,
})
export class IcSharpChaletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChangeCircleIcon],svg[ic-sharp-change-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m.06 17v-2.01H12c-1.28 0-2.56-.49-3.54-1.46a5.006 5.006 0 0 1-.64-6.29l1.1 1.1c-.71 1.33-.53 3.01.59 4.13c.7.7 1.62 1.03 2.54 1.01v-2.14l2.83 2.83zm4.11-4.24l-1.1-1.1c.71-1.33.53-3.01-.59-4.13A3.48 3.48 0 0 0 12 8.5h-.06v2.15L9.11 7.83L11.94 5v2.02c1.3-.02 2.61.45 3.6 1.45c1.7 1.7 1.91 4.35.63 6.29"></svg:path>`,
})
export class IcSharpChangeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChangeHistoryIcon],svg[ic-sharp-change-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.77L18.39 18H5.61zM12 4L2 20h20z"></svg:path>`,
})
export class IcSharpChangeHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChargingStationIcon],svg[ic-sharp-charging-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 11l-3 6v-4h-2l3-6v4zM5 1h14v22H5zm2 5v12h10V6z"></svg:path>`,
})
export class IcSharpChargingStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChatIcon],svg[ic-sharp-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2.01L2 22l4-4h16zM6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"></svg:path>`,
})
export class IcSharpChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChatBubbleIcon],svg[ic-sharp-chat-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20l4-4h16z"></svg:path>`,
})
export class IcSharpChatBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChatBubbleOutlineIcon],svg[ic-sharp-chat-bubble-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20l4-4h16zm-2 14H6l-2 2V4h16z"></svg:path>`,
})
export class IcSharpChatBubbleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCheckIcon],svg[ic-sharp-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"></svg:path>`,
})
export class IcSharpCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCheckBoxIcon],svg[ic-sharp-check-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM10 17l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"></svg:path>`,
})
export class IcSharpCheckBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCheckBoxOutlineBlankIcon],svg[ic-sharp-check-box-outline-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm2-2H3v18h18z"></svg:path>`,
})
export class IcSharpCheckBoxOutlineBlankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCheckCircleIcon],svg[ic-sharp-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"></svg:path>`,
})
export class IcSharpCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCheckCircleOutlineIcon],svg[ic-sharp-check-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"></svg:path>`,
})
export class IcSharpCheckCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChecklistIcon],svg[ic-sharp-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7h-9v2h9zm0 8h-9v2h9zM5.54 11L2 7.46l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41zm0 8L2 15.46l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41z"></svg:path>`,
})
export class IcSharpChecklistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChecklistRtlIcon],svg[ic-sharp-checklist-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7H2v2h9zm0 8H2v2h9zm5.34-4L12.8 7.46l1.41-1.41l2.12 2.12l4.24-4.24L22 5.34zm0 8l-3.54-3.54l1.41-1.41l2.12 2.12l4.24-4.24L22 13.34z"></svg:path>`,
})
export class IcSharpChecklistRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCheckroomIcon],svg[ic-sharp-checkroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.6 18.2L13 11.75v-.91a3.496 3.496 0 0 0-.18-6.75A3.51 3.51 0 0 0 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5H11v2.75L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8M6 18l6-4.5l6 4.5z"></svg:path>`,
})
export class IcSharpCheckroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChevronLeftIcon],svg[ic-sharp-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z"></svg:path>`,
})
export class IcSharpChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChevronRightIcon],svg[ic-sharp-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"></svg:path>`,
})
export class IcSharpChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChildCareIcon],svg[ic-sharp-child-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14.5" cy="10.5" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="9.5" cy="10.5" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 17c2.01 0 3.74-1.23 4.5-3h-9c.76 1.77 2.49 3 4.5 3m10.94-5.66a4.01 4.01 0 0 0-2.81-3.17a9.1 9.1 0 0 0-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91a3.99 3.99 0 0 0-2.81 3.17Q1 11.655 1 12t.06.66a4.01 4.01 0 0 0 2.81 3.17a9 9 0 0 0 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89a4 4 0 0 0 2.8-3.17q.06-.315.06-.66t-.06-.66M19 14c-.1 0-.19-.02-.29-.03c-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86c-.1.01-.19.03-.29.03c-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03c.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86c.1-.01.19-.03.29-.03c1.1 0 2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcSharpChildCareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChildFriendlyIcon],svg[ic-sharp-child-friendly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v8h8c0-4.42-3.58-8-8-8m6.32 13.89A7.95 7.95 0 0 0 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3c1.93 0 3.5-1.57 3.5-3.5c0-1.04-.46-1.97-1.18-2.61M8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20m9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20"></svg:path>`,
})
export class IcSharpChildFriendlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChromeReaderModeIcon],svg[ic-sharp-chrome-reader-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM23 4H1v17h22zm-2 15h-9V6h9z"></svg:path>`,
})
export class IcSharpChromeReaderModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpChurchIcon],svg[ic-sharp-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L2 14v8h8v-5h4v5h8v-8zm-6 1.28c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcSharpChurchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCircleIcon],svg[ic-sharp-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"></svg:path>`,
})
export class IcSharpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCircleNotificationsIcon],svg[ic-sharp-circle-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 16.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5m5-2.5H7v-2h1v-3c0-1.86 1.28-3.41 3-3.86V5.5h2v1.64c1.72.45 3 2 3 3.86v3h1z"></svg:path>`,
})
export class IcSharpCircleNotificationsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpClassIcon],svg[ic-sharp-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4v20h16zM6 4h5v8l-2.5-1.5L6 12z"></svg:path>`,
})
export class IcSharpClassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCleanHandsIcon],svg[ic-sharp-clean-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.99 7l1.37-.63l.63-1.37l.63 1.37l1.37.63l-1.37.63L16.99 9l-.63-1.37zM20 14c1.1 0 2-.9 2-2s-2-4-2-4s-2 2.9-2 4s.9 2 2 2M1 22h4V11H1zM9.24 9.5L15 11.65V11a5 5 0 0 0-4-4.9V4h2c.57 0 1.1.17 1.55.45l1.43-1.43A4.9 4.9 0 0 0 13 2H7.5v2H9v2.11c-1.78.37-3.2 1.68-3.75 3.39zM22 17h-9l-2.09-.73l.33-.94L13 16h4v-2l-8.03-3H7v9.02L14 22l8-3z"></svg:path>`,
})
export class IcSharpCleanHandsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCleaningServicesIcon],svg[ic-sharp-cleaning-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11V1H9v10H3v12h18V11zm4 10h-2v-4h-2v4h-2v-4h-2v4H9v-4H7v4H5v-8h14z"></svg:path>`,
})
export class IcSharpCleaningServicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpClearIcon],svg[ic-sharp-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"></svg:path>`,
})
export class IcSharpClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpClearAllIcon],svg[ic-sharp-clear-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13h14v-2H5zm-2 4h14v-2H3zM7 7v2h14V7z"></svg:path>`,
})
export class IcSharpClearAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCloseIcon],svg[ic-sharp-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"></svg:path>`,
})
export class IcSharpCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCloseFullscreenIcon],svg[ic-sharp-close-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3.41L16.71 8.7L20 12h-8V4l3.29 3.29L20.59 2zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59z"></svg:path>`,
})
export class IcSharpCloseFullscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpClosedCaptionIcon],svg[ic-sharp-closed-caption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3v16h18zm-10 7H9.5v-.5h-2v3h2V13H11v2H6V9h5zm7 0h-1.5v-.5h-2v3h2V13H18v2h-5V9h5z"></svg:path>`,
})
export class IcSharpClosedCaptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpClosedCaptionDisabledIcon],svg[ic-sharp-closed-caption-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.83 4H21v14.17L17.83 15H18v-2h-1.5v.5h-.17l-1.83-1.83V10.5h2v.5H18V9h-5v1.17zm12.95 18.61L17.17 20H3V5.83L1.39 4.22L2.8 2.81l18.38 18.38zM11 13.83l-.83-.83H9.5v.5h-2v-3h.17L6.17 9H6v6h5z"></svg:path>`,
})
export class IcSharpClosedCaptionDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpClosedCaptionOffIcon],svg[ic-sharp-closed-caption-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3v16h18zm-10 7H9.5v-.5h-2v3h2V13H11v2H6V9h5zm7 0h-1.5v-.5h-2v3h2V13H18v2h-5V9h5z"></svg:path>`,
})
export class IcSharpClosedCaptionOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCloudIcon],svg[ic-sharp-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96"></svg:path>`,
})
export class IcSharpCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCloudCircleIcon],svg[ic-sharp-cloud-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3h.14c.44-1.73 1.99-3 3.86-3c2.21 0 4 1.79 4 4h.5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class IcSharpCloudCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCloudDoneIcon],svg[ic-sharp-cloud-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M10 17l-3.5-3.5l1.41-1.41L10 14.18L15.18 9l1.41 1.41z"></svg:path>`,
})
export class IcSharpCloudDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icSharpCloudDownloadIcon],svg[ic-sharp-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5l-5-5h3V9h4v4z"></svg:path>`,
})
export class IcSharpCloudDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
