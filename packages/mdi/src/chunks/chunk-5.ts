import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDisqusIcon],svg[mdi-disqus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.08 22c-2.45 0-4.69-.89-6.42-2.37l-4.25.58l1.64-4.06c-.55-1.27-.89-2.65-.89-4.15c0-5.5 4.44-10 9.92-10S22 6.5 22 12s-4.44 10-9.92 10m5.42-10.03v-.03C17.5 9.06 15.46 7 11.95 7H8.16v10h3.74c3.53 0 5.6-2.14 5.6-5.03M12 14.54h-1.11V9.46H12c1.62 0 2.7.93 2.7 2.54c0 1.63-1.08 2.54-2.7 2.54"></svg:path>`,
})
export class MdiDisqusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDisqusOutlineIcon],svg[mdi-disqus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11.9 14.5h-1.1v-5h1.1c1.6 0 2.7.9 2.7 2.5s-1.1 2.5-2.7 2.5m0-7.5H8.1v10h3.7c3.5 0 5.6-2.1 5.6-5s-2-5-5.5-5m.1 13c-1.9 0-3.7-.7-5.1-1.9l-.7-.6l-1.7.2l.7-1.6l-.3-.8c-.5-1.1-.7-2.2-.7-3.4c0-4.4 3.6-8 7.9-8c4.3 0 7.8 3.7 7.8 8.1c0 4.4-3.6 8-7.9 8m0-18C6.5 2 2.1 6.5 2.1 12c0 1.5.3 2.9.9 4.2l-1.6 4.1l4.3-.6c1.7 1.5 4 2.4 6.4 2.4c5.5 0 9.9-4.5 9.9-10S17.5 2 12 2z" fill="currentColor"></svg:path>`,
})
export class MdiDisqusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDistributeHorizontalCenterIcon],svg[mdi-distribute-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v3h2v14H8v3H6v-3H4V5h2V2zm8 0v5h-2v10h2v5h2v-5h2V7h-2V2z"></svg:path>`,
})
export class MdiDistributeHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDistributeHorizontalLeftIcon],svg[mdi-distribute-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7v10h-5v5h-2V2h2v5zM5 2H3v20h2v-3h5V5H5z"></svg:path>`,
})
export class MdiDistributeHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDistributeHorizontalRightIcon],svg[mdi-distribute-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V7h5V2h2v20H8v-5zm16 5h2V2h-2v3h-5v14h5z"></svg:path>`,
})
export class MdiDistributeHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDistributeVerticalBottomIcon],svg[mdi-distribute-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h10v5h5v2H2V8h5zM2 19v2h20v-2h-3v-5H5v5z"></svg:path>`,
})
export class MdiDistributeVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDistributeVerticalCenterIcon],svg[mdi-distribute-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16h3v-2h14v2h3v2h-3v2H5v-2H2zm0-8h5v2h10V8h5V6h-5V4H7v2H2z"></svg:path>`,
})
export class MdiDistributeVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDistributeVerticalTopIcon],svg[mdi-distribute-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21H7v-5H2v-2h20v2h-5zm5-16V3H2v2h3v5h14V5z"></svg:path>`,
})
export class MdiDistributeVerticalTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiversifyIcon],svg[mdi-diversify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2v2h-7a2 2 0 0 0-2 2v3h2V6h7v2l3-3zm0 7v2h-5v2h5v2l3-3zm-7.95 1c-1.11 0-2.01.87-2.02 2s.87 2 1.97 2c1.11 0 2-.89 2-2c0-1.09-.87-1.97-1.95-2M2 11v2h6v-2zm8 4v3a2 2 0 0 0 2 2h7v2l3-3l-3-3v2h-7v-3z"></svg:path>`,
})
export class MdiDiversifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDivingIcon],svg[mdi-diving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.26 5.2l.04-.02a1 1 0 0 1 1.41.12L16.97 8H20c.55 0 1 .45 1 1s-.45 1-1 1h-3.5c-.35 0-.65-.18-.83-.44l-1.5-1.79l-2.53 2.36l2.93 2.05c.26.18.43.48.43.82v4c0 .55-.45 1-1 1s-1-.45-1-1v-3.5l-3.23-2.24a1.786 1.786 0 0 1-.17-2.8zM16.5 5c.84 0 1.5-.67 1.5-1.5S17.34 2 16.5 2S15 2.67 15 3.5S15.68 5 16.5 5M6 19H5c-1.66 0-3 1.34-3 3h4v-1.5h9V19z"></svg:path>`,
})
export class MdiDivingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDivingFlippersIcon],svg[mdi-diving-flippers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.28 3.66c-1-.22-1.74-1.41-2.71-1.62s-2.17.55-3.15.33a3.66 3.66 0 0 0-3.14.34L11.21 17L11 18c-.36 1.62.67 3.22 2.29 3.58c1.61.35 3.21-.67 3.57-2.29l.21-1L23 5.28a3.63 3.63 0 0 0-2.72-1.62m-5.37 15.2c-.12.55-.66.9-1.21.79c-.56-.12-.91-.65-.79-1.22l.86-3.93a1 1 0 0 1 1.97.34c0 .04-.01.07-.02.11zm-5.19 2.48c-.39-.61-.64-1.29-.72-2L8.24 16c-.14-.53.17-1.08.76-1.24a.8.8 0 0 1 .22 0V3.43c-.91 0-2-.57-2.84-.37s-1.69 1.38-2.66 1.6c-1.11.1-2.11.69-2.72 1.62l5.93 13l.21 1a3.003 3.003 0 0 0 3.57 2.29h.1c-.43-.35-.81-.76-1.09-1.23"></svg:path>`,
})
export class MdiDivingFlippersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDivingHelmetIcon],svg[mdi-diving-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4m3.45-4.11l-1.38.69l.25.42H20v6h-1.67a7.06 7.06 0 0 1-2.12 2.6c1.64.51 2.89 1.31 3.46 2.26C18.69 21.1 15.62 22 12 22s-6.69-.9-7.67-2.14c.57-.95 1.82-1.75 3.46-2.26c-.9-.68-1.63-1.57-2.12-2.6H4V9h1.68A6.95 6.95 0 0 1 9 5.68V4h6v1.68c.68.32 1.29.78 1.82 1.32l1.73-.86C19.93 5.42 20 4.1 20 2h2c0 2.06 0 4.62-2.55 5.89M17 12a5 5 0 0 0-5-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5"></svg:path>`,
})
export class MdiDivingHelmetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDivingScubaIcon],svg[mdi-diving-scuba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 13c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m7.89-2.89l4.53-1.21l-.78-2.9l-4.53 1.21c-.8.21-1.28 1.04-1.06 1.84s1.04 1.28 1.84 1.06M20.5 5.9L23 3l-1-1l-3 3l-2 4l-9.5 2.87c-.8.2-1.37.89-1.5 1.68L5.24 18L2.4 21.8L4 23l3-4l1.14-3.14L14 14l5-3.5z"></svg:path>`,
})
export class MdiDivingScubaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDivingScubaFlagIcon],svg[mdi-diving-scuba-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 6l17 14H2zm3-2l17 14V4z"></svg:path>`,
})
export class MdiDivingScubaFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDivingScubaMaskIcon],svg[mdi-diving-scuba-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c1.31 0 2.42.83 2.83 2H18a4 4 0 0 1 4 4v1h-2v-1a2 2 0 0 0-2-2h-3.17A2.99 2.99 0 0 1 12 21a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m6-14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-3.15c-.42 0-.8.24-.95.63c-.2.6-.67 1.08-1.28 1.28c-1.04.34-2.18-.23-2.52-1.28c-.15-.39-.53-.63-.95-.63H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 7V5H6v5h4.65c.25-.54.76-.91 1.35-1c.59.09 1.1.46 1.35 1z"></svg:path>`,
})
export class MdiDivingScubaMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDivingScubaTankIcon],svg[mdi-diving-scuba-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5c0-1.03.62-1.91 1.5-2.29V6H11v1.35c1.22.58 2 1.8 2 3.15V22H6V10.5c0-1.35.78-2.57 2-3.15V6H6V4h2v-.5A1.5 1.5 0 0 1 9.5 2A1.5 1.5 0 0 1 11 3.5V4h4.5a2 2 0 0 1 2 2v10.21c.88.38 1.5 1.26 1.5 2.29"></svg:path>`,
})
export class MdiDivingScubaTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDivingScubaTankMultipleIcon],svg[mdi-diving-scuba-tank-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5c0-1.03.62-1.91 1.5-2.29V6H14v1.35c1.22.58 2 1.8 2 3.15V22H2V10.5c0-1.35.78-2.57 2-3.15V6H2V4h2v-.5A1.5 1.5 0 0 1 5.5 2A1.5 1.5 0 0 1 7 3.5V4h4v-.5A1.5 1.5 0 0 1 12.5 2A1.5 1.5 0 0 1 14 3.5V4h4.5a2 2 0 0 1 2 2v10.21c.88.38 1.5 1.26 1.5 2.29M11 7.35V6H7v1.35c1.22.58 2 1.8 2 3.15c0-1.35.78-2.57 2-3.15"></svg:path>`,
})
export class MdiDivingScubaTankMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDivingSnorkelIcon],svg[mdi-diving-snorkel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h3.15c.42 0 .8.24.95.63a2.003 2.003 0 0 0 2.52 1.28c.61-.2 1.08-.68 1.28-1.28c.15-.39.53-.63.95-.63H16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 7h-4.65c-.25-.54-.76-.91-1.35-1c-.59.09-1.1.46-1.35 1H4V5h12zm6-8v13.5a6.5 6.5 0 0 1-6.5 6.5c-1.71 0-3.35-.68-4.57-1.88c-1.98.46-4.05-.33-5.22-2l1.91-.83c.88.93 2.22 1.21 3.38.71c.2-.09.39-.2.56-.33c.84-.62 1.31-1.63 1.22-2.67l1.91-.83c.41 1.87-.28 3.83-1.79 5c.76.54 1.67.83 2.6.83c2.5 0 4.5-2 4.5-4.5V2z"></svg:path>`,
})
export class MdiDivingSnorkelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDivisionIcon],svg[mdi-division-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13H5v-2h14zm-7-8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 10a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiDivisionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDivisionBoxIcon],svg[mdi-division-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13v-2H7v2zm2-10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2zm-7 4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m0 8a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiDivisionBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDlnaIcon],svg[mdi-dlna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.38 12.56h-8.53c-.88 0-1.75.4-2.24 1.05v-.01c-.49.68-1.29 1.12-2.2 1.12c-1.49 0-2.7-1.22-2.7-2.72s1.21-2.69 2.7-2.69c.91 0 1.71.44 2.2 1.12v-.01c.49.65 1.36 1.08 2.24 1.08h8.44c.16 0 .71-.1.71-.83c-.74-4.24-4.9-7.49-9.94-7.49c-3.1 0-5.87 1.23-7.72 3.17c-.29.44.01.57.29.61h5.51c.86 0 1.75-.42 2.24-1.07v.02c.5-.68 1.29-1.13 2.2-1.13c1.49 0 2.7 1.22 2.7 2.72s-1.21 2.7-2.7 2.7c-.91 0-1.7-.45-2.2-1.13v.01c-.49-.64-1.38-1.05-2.24-1.05H4.13h.02s-.89-.03-1.43.72C2.3 9.42 2 10.85 2 12c0 1.16.17 2.21.72 3.27c.47.76 1.43.73 1.43.73h-.04h6.03c.86 0 1.75-.42 2.24-1.07v.01c.5-.68 1.29-1.13 2.2-1.13c1.49 0 2.7 1.22 2.7 2.69c0 1.5-1.21 2.73-2.7 2.73c-.91 0-1.7-.45-2.2-1.13v.02c-.49-.65-1.38-1.07-2.24-1.07h-5.5c-.28.04-.58.17-.32.59c1.85 1.94 4.63 3.18 7.74 3.18c5.05 0 9.22-3.25 9.94-7.51c0-.59-.41-.73-.62-.75"></svg:path>`,
})
export class MdiDlnaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDnaIcon],svg[mdi-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h2v2c0 1.44.68 2.61 1.88 3.78c.86.83 2.01 1.63 3.21 2.42l-1.83 1.19C8.27 10.72 7.31 10 6.5 9.21C5.07 7.82 4 6.1 4 4zm14 0h2v2c0 2.1-1.07 3.82-2.5 5.21c-1.41 1.38-3.21 2.52-4.96 3.63c-1.75 1.12-3.45 2.21-4.66 3.38C6.68 17.39 6 18.56 6 20v2H4v-2c0-2.1 1.07-3.82 2.5-5.21c1.41-1.38 3.21-2.52 4.96-3.63c1.75-1.12 3.45-2.21 4.66-3.38C17.32 6.61 18 5.44 18 4zm-3.26 10.61c.99.67 1.95 1.39 2.76 2.18C18.93 16.18 20 17.9 20 20v2h-2v-2c0-1.44-.68-2.61-1.88-3.78c-.86-.83-2.01-1.63-3.21-2.42zM7 3h10v1l-.06.5H7.06L7 4zm.68 3h8.64c-.24.34-.52.69-.9 1.06l-.51.44H9.07l-.49-.44c-.38-.37-.66-.72-.9-1.06m1.41 10.5h5.84l.49.44c.38.37.66.72.9 1.06H7.68c.24-.34.52-.69.9-1.06zm-2.03 3h9.88l.06.5v1H7v-1z"></svg:path>`,
})
export class MdiDnaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDnsIcon],svg[mdi-dns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m13-6H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M7 19a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m13-6H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiDnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDnsOutlineIcon],svg[mdi-dns-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15v4H5v-4zm1-2H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M7 18.5A1.5 1.5 0 0 1 5.5 17A1.5 1.5 0 0 1 7 15.5A1.5 1.5 0 0 1 8.5 17A1.5 1.5 0 0 1 7 18.5M19 5v4H5V5zm1-2H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M7 8.5A1.5 1.5 0 0 1 5.5 7A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 8.5 7A1.5 1.5 0 0 1 7 8.5"></svg:path>`,
})
export class MdiDnsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoNotDisturbIcon],svg[mdi-do-not-disturb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m5 11H7v-2h10v2z" fill="currentColor"></svg:path>`,
})
export class MdiDoNotDisturbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDockBottomIcon],svg[mdi-dock-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 9H4V6h16Z"></svg:path>`,
})
export class MdiDockBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDockLeftIcon],svg[mdi-dock-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H9V6h11Z"></svg:path>`,
})
export class MdiDockLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDockRightIcon],svg[mdi-dock-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-5 14H4V6h11Z"></svg:path>`,
})
export class MdiDockRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDockTopIcon],svg[mdi-dock-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2m0-9h16v7H4z"></svg:path>`,
})
export class MdiDockTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDockWindowIcon],svg[mdi-dock-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18v2H4a2 2 0 0 1-2-2V8h2v10M22 6v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m-2 0H8v8h12Z"></svg:path>`,
})
export class MdiDockWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDockerIcon],svg[mdi-docker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.81 10.25c-.06-.04-.56-.43-1.64-.43c-.28 0-.56.03-.84.08c-.21-1.4-1.38-2.11-1.43-2.14l-.29-.17l-.18.27c-.24.36-.43.77-.51 1.19c-.2.8-.08 1.56.33 2.21c-.49.28-1.29.35-1.46.35H2.62c-.34 0-.62.28-.62.63c0 1.15.18 2.3.58 3.38c.45 1.19 1.13 2.07 2 2.61c.98.6 2.59.94 4.42.94c.79 0 1.61-.07 2.42-.22c1.12-.2 2.2-.59 3.19-1.16A8.3 8.3 0 0 0 16.78 16c1.05-1.17 1.67-2.5 2.12-3.65h.19c1.14 0 1.85-.46 2.24-.85c.26-.24.45-.53.59-.87l.08-.24zm-17.96.99h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H3.85c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.43 0h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H6.28c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.47 0h1.75c.1 0 .17-.07.17-.16V9.5c0-.08-.06-.16-.17-.16H8.75c-.08 0-.15.07-.15.16v1.58c0 .09.06.16.15.16m2.44 0h1.77c.08 0 .15-.07.15-.16V9.5c0-.08-.06-.16-.15-.16h-1.77c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16M6.28 9h1.76c.08 0 .16-.09.16-.18V7.25c0-.09-.07-.16-.16-.16H6.28c-.09 0-.16.06-.16.16v1.57c.01.09.07.18.16.18m2.47 0h1.75c.1 0 .17-.09.17-.18V7.25c0-.09-.06-.16-.17-.16H8.75c-.08 0-.15.06-.15.16v1.57c0 .09.06.18.15.18m2.44 0h1.77c.08 0 .15-.09.15-.18V7.25c0-.09-.07-.16-.15-.16h-1.77c-.08 0-.15.06-.15.16v1.57c0 .09.07.18.15.18m0-2.28h1.77c.08 0 .15-.07.15-.16V5c0-.1-.07-.17-.15-.17h-1.77c-.08 0-.15.06-.15.17v1.56c0 .08.07.16.15.16m2.46 4.52h1.76c.09 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16h-1.76c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16"></svg:path>`,
})
export class MdiDockerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoctorIcon],svg[mdi-doctor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.84 16.26C17.86 16.83 20 18.29 20 20v2H4v-2c0-1.71 2.14-3.17 5.16-3.74L12 21zM8 8h8v2a4 4 0 0 1-4 4a4 4 0 0 1-4-4zm0-1l.41-4.1a1 1 0 0 1 1-.9h5.19c.51 0 .94.39.99.9L16 7zm4-4h-1v1h-1v1h1v1h1V5h1V4h-1z"></svg:path>`,
})
export class MdiDoctorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDocumentIcon],svg[mdi-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 4v2h10V7H7zm0 4v2h10v-2H7zm0 4v2h7v-2H7z" fill="currentColor"></svg:path>`,
})
export class MdiDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDogIcon],svg[mdi-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4c-1.71 0-2.75.33-3.35.61C13.88 4.23 13 4 12 4s-1.88.23-2.65.61C8.75 4.33 7.71 4 6 4c-3 0-5 8-5 10c0 .83 1.32 1.59 3.14 1.9c.64 2.24 3.66 3.95 7.36 4.1v-4.28c-.59-.37-1.5-1.04-1.5-1.72c0-1 2-1 2-1s2 0 2 1c0 .68-.91 1.35-1.5 1.72V20c3.7-.15 6.72-1.86 7.36-4.1C21.68 15.59 23 14.83 23 14c0-2-2-10-5-10M4.15 13.87c-.5-.12-.89-.26-1.15-.37c.25-2.77 2.2-7.1 3.05-7.5c.54 0 .95.06 1.32.11c-2.1 2.31-2.93 5.93-3.22 7.76M9 12a1 1 0 0 1-1-1c0-.54.45-1 1-1a1 1 0 0 1 1 1c0 .56-.45 1-1 1m6 0a1 1 0 0 1-1-1c0-.54.45-1 1-1a1 1 0 0 1 1 1c0 .56-.45 1-1 1m4.85 1.87c-.29-1.83-1.12-5.45-3.22-7.76c.37-.05.78-.11 1.32-.11c.85.4 2.8 4.73 3.05 7.5c-.25.11-.64.25-1.15.37"></svg:path>`,
})
export class MdiDogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDogServiceIcon],svg[mdi-dog-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 8l3 3v10h-2v-6H8l-2 3v3H4v-6l1-1v-3L2 8l1-1l2 2h2v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9zm5-3V3l-4 4l3 3l1-1l1 1l2-2zm-7.5 4.5l-7-7c-.27-.28-.71-.28-1 0c-.28.27-.28.71 0 1l7 7c.27.28.71.28 1 0c.28-.27.28-.71 0-1"></svg:path>`,
})
export class MdiDogServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDogSideIcon],svg[mdi-dog-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 3l-4 4l3 3l1-1l1 1l2-2l-3-3zM3 7L2 8l3 3v3l-1 1v6h2v-3l2-3h7v6h2V11l-3-3l-1 1H5z"></svg:path>`,
})
export class MdiDogSideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDogSideOffIcon],svg[mdi-dog-side-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 10l-3-3l4-4v2l3 3l-2 2l-1-1zm-1 1l-3-3l-1 1h-.8l4.8 4.8zM2.39 1.73L1.11 3l6 6H5L3 7L2 8l3 3v3l-1 1v6h2v-3l2-3h5.11L15 16.89V21h2v-2.11l3.84 3.84l1.27-1.27z"></svg:path>`,
})
export class MdiDogSideOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDolbyIcon],svg[mdi-dolby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v14h20V5zm4 12H4V7h2c2.86.09 5.1 2.33 5 5c.1 2.67-2.14 4.91-5 5m14 0h-2c-2.86-.09-5.1-2.33-5-5c-.1-2.67 2.14-4.91 5-5h2z"></svg:path>`,
})
export class MdiDolbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDollyIcon],svg[mdi-dolly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.97 19.88a2.01 2.01 0 0 1-2.57-1.19a1.97 1.97 0 0 1 1.19-2.56c1.04-.38 2.19.15 2.57 1.18a2.01 2.01 0 0 1-1.19 2.57M9.9 14.25c-2.07.75-3.14 3.05-2.4 5.13a4.043 4.043 0 0 0 5.16 2.37c2.07-.75 3.13-3.05 2.38-5.12c-.76-2.08-3.07-3.13-5.14-2.38m6.04-9.67L9.37 7l1.38 3.74l6.57-2.41m3 5.29l-4.78 1.75c.17.29.31.59.43.91s.2.65.25.97L21 15.5m-1.46-6.92l-8.45 3.1l.49 1.32c1.25.09 2.42.64 3.31 1.55l6.03-2.21M2 2v2h3.09l3.57 9.75a4.95 4.95 0 0 1 1.87-.69L6.5 2"></svg:path>`,
})
export class MdiDollyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDolphinIcon],svg[mdi-dolphin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7s0-4-5-4c-1.53 0-2.85.19-4 .5c-.5-.44-3.74-3.191-7 .07l2.56 2.56C2.5 10.53 4 18 4 18s-3 0-3 4l4-1l4 1c0-4-3-4-3-4s.85-5.76 7-6.82V14c2 0 2.68-1.81 2.89-3H18c4 0 5-1 5-2s-2-2-3-2m-2 1c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiDolphinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDomainIcon],svg[mdi-domain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"></svg:path>`,
})
export class MdiDomainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDomainOffIcon],svg[mdi-domain-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19h4l-2-2h-2zm-2-4v-2H8v2zm0 4v-2H8v2zm-4-8V9H4v2zm0 4v-2H4v2zm0 4v-2H4v2zM1.31 1.78l21 20.91L21 24l-3-3H2V5L.09 3.09zM16 11h2v2h-2zM8 5v.91L5.11 3H12v4h10v12.92l-2-2.01V9h-8v.89L9.09 7H10V5z"></svg:path>`,
})
export class MdiDomainOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDomainPlusIcon],svg[mdi-domain-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V3H2v18h11.35a5.8 5.8 0 0 1-.35-2h-1v-2h1.35a5 5 0 0 1 .65-1.31V15h-2v-2h2v-2h-2V9h8v4.09a5.6 5.6 0 0 1 2 .72V7M6 19H4v-2h2m0-2H4v-2h2m0-2H4V9h2m0-2H4V5h2m4 14H8v-2h2m0-2H8v-2h2m0-2H8V9h2m0-2H8V5h2m6 8h2v-2h-2m0 0v2h2v-2m-2 0v2h2v-2m2 4v3h3v2h-3v3h-2v-3h-3v-2h3v-3Z"></svg:path>`,
})
export class MdiDomainPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDomainRemoveIcon],svg[mdi-domain-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V3H2v18h11.35a5.8 5.8 0 0 1-.35-2h-1v-2h1.35a5 5 0 0 1 .65-1.31V15h-2v-2h2v-2h-2V9h8v4.09a5.6 5.6 0 0 1 2 .72V7M6 19H4v-2h2m0-2H4v-2h2m0-2H4V9h2m0-2H4V5h2m4 14H8v-2h2m0-2H8v-2h2m0-2H8V9h2m0-2H8V5h2m6 8h2v-2h-2m0 0v2h2v-2m-2 0v2h2v-2m4.54 5.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.42-1.42L17.59 19l-2.13-2.12l1.42-1.42L19 17.59l2.12-2.13Z"></svg:path>`,
})
export class MdiDomainRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDomainSwitchIcon],svg[mdi-domain-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9h2v2h-2zm6 6V5H12V1H2v14zm-2-2h-8v-2h2V9h-2V7h8zM8 5V3h2v2zm0 4V7h2v2zm0 4v-2h2v2zM4 5V3h2v2zm0 4V7h2v2zm0 4v-2h2v2zm5 4v2h6v-2l3 3l-3 3v-2H9v2l-3-3z"></svg:path>`,
})
export class MdiDomainSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDomeLightIcon],svg[mdi-dome-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10a9 9 0 0 1-18 0v-.97c0-.27.11-.53.3-.73c.2-.19.46-.3.73-.3H20c.25 0 .5.11.7.3c.19.2.3.45.3.7zM5 10c0 3.86 3.14 7 7 7s7-3.14 7-7zm15-4v1H4V6c0-.27.1-.5.29-.71C4.5 5.1 4.73 5 5 5h5V3h4v2h5c.25 0 .5.11.7.3c.19.2.3.45.3.7"></svg:path>`,
})
export class MdiDomeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDominoMaskIcon],svg[mdi-domino-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.83 9.81c-1.13-.11-2.14.57-2.37 1.69c0 .34 1.35.79 2.59.79s2.36-.79 2.36-1.01c0-.23-.78-1.35-2.58-1.47m-7.65 0c-1.8.12-2.59 1.13-2.59 1.46c0 .23 1.23 1.02 2.36 1.02s2.59-.45 2.59-.79c-.23-1.12-1.35-1.8-2.36-1.69M16.95 16c-1.91 0-3.15-2.25-4.95-2.25S8.85 16 7.05 16C4.69 16 3 13.86 3 10.04C3 7.68 3.68 7 6.71 7S10.54 8.24 12 8.24S14.36 7 17.29 7S21 7.79 21 10.04c0 3.82-1.69 5.96-4.05 5.96"></svg:path>`,
})
export class MdiDominoMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDonkeyIcon],svg[mdi-donkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.34 10.35l-.07-.07l-.09-.09L18 7V6a.5.5 0 0 0-.5-.5c-.14 0-.28.06-.37.16L13.46 9H7c-.68 0-1.31.35-1.68.92l-2.7 2.67c-.33.45-.23 1.07.22 1.41c.34.24.81.25 1.16 0l1-.93V19h3v-4h5v4h3v-5.17c0-.53.21-1.04.59-1.41L18 11l2 1c.15.08.32.13.5.13c.6-.02 1.09-.52 1.08-1.13c-.01-.24-.08-.47-.24-.65"></svg:path>`,
})
export class MdiDonkeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoorIcon],svg[mdi-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3c-1.11 0-2 .89-2 2v16h12V5c0-1.11-.89-2-2-2zm0 2h8v14H8zm5 6v2h2v-2z"></svg:path>`,
})
export class MdiDoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoorClosedIcon],svg[mdi-door-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11h2v2h-2zm-4-8h7c1.11 0 2 .89 2 2v14h1v2H2v-2h8V5c0-1.11.89-2 2-2m0 2v14h7V5z"></svg:path>`,
})
export class MdiDoorClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoorClosedCancelIcon],svg[mdi-door-closed-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 11C9 11 11 9 11 6.5S9 2 6.5 2S2 4 2 6.5S4 11 6.5 11M3.92 5L8 9.09c-.42.26-.94.41-1.5.41c-1.66 0-3-1.34-3-3c0-.56.15-1.08.42-1.5M9.5 6.5c0 .56-.15 1.08-.41 1.5L5 3.92c.42-.27.94-.42 1.5-.42c1.66 0 3 1.34 3 3M10 12c.81-.54 1.5-1.23 2-2.03V19h7V5h-6.17A7 7 0 0 0 12 3h7c1.11 0 2 .89 2 2v14h1v2H2v-2h8zm6-1h2v2h-2z"></svg:path>`,
})
export class MdiDoorClosedCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoorClosedLockIcon],svg[mdi-door-closed-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11h2v2h-2zm-4-8h7a2 2 0 0 1 2 2v14h1v2H2v-2h8V5a2 2 0 0 1 2-2m0 2v14h7V5M6.2 5H2.8v-.5a1.7 1.7 0 0 1 3.4 0M7 5v-.5a2.5 2.5 0 0 0-5 0V5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiDoorClosedLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoorOpenIcon],svg[mdi-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-1.11 0-2 .89-2 2H3v14H2v2h20v-2h-1V5c0-1.11-.89-2-2-2zm0 2h7v14h-7zm-7 6h2v2H5z"></svg:path>`,
})
export class MdiDoorOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoorSlidingIcon],svg[mdi-door-sliding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13H8v-2h2zm6-2h-2v2h2zm5 8v2H3v-2h1V5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v14zM11 5H6v14h5zm7 0h-5v14h5z"></svg:path>`,
})
export class MdiDoorSlidingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoorSlidingLockIcon],svg[mdi-door-sliding-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 17v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zM13 11h2v2h-2zm-4 2H7v-2h2zm4 6h-1V5h5v6.44c.61-.27 1.29-.44 2-.44V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14H2v2h11zm-3 0H5V5h5z"></svg:path>`,
})
export class MdiDoorSlidingLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoorSlidingOpenIcon],svg[mdi-door-sliding-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11v2H4v-2zm16-6h-5v14h5zM7 5H2v14h5zm15-2c1.11 0 2 .89 2 2v16H0V5c0-1.11.894-2 2-2h7v16h6V3zm-2 8h-2v2h2z"></svg:path>`,
})
export class MdiDoorSlidingOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoorbellIcon],svg[mdi-doorbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m4-8H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H8V4h8z"></svg:path>`,
})
export class MdiDoorbellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoorbellVideoIcon],svg[mdi-doorbell-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2m4-11v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2m-7.5 3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5m5.5 3H8v10h8z"></svg:path>`,
})
export class MdiDoorbellVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDotNetIcon],svg[mdi-dot-net-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m19 2h-2V9h-2V7h6v2h-2zM16 7v2h-2v2h2v2h-2v2h2v2h-4V7zm-5 0v10H9l-3-6v6H4V7h2l3 6V7z"></svg:path>`,
})
export class MdiDotNetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDotsCircleIcon],svg[mdi-dots-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-18c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M6 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m-3-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m12 12c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m-3-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></svg:path>`,
})
export class MdiDotsCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDotsGridIcon],svg[mdi-dots-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M6 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m12 12c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></svg:path>`,
})
export class MdiDotsGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDotsHexagonIcon],svg[mdi-dots-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m-6 0c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m-6 0c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m9 6c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m-6 0c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6-12c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2M7 6c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2"></svg:path>`,
})
export class MdiDotsHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDotsHorizontalIcon],svg[mdi-dots-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"></svg:path>`,
})
export class MdiDotsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDotsHorizontalCircleIcon],svg[mdi-dots-horizontal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 8.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m-5.5 0A1.5 1.5 0 0 0 5 12a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 8 12a1.5 1.5 0 0 0-1.5-1.5m11 0A1.5 1.5 0 0 0 16 12a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 19 12a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiDotsHorizontalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDotsHorizontalCircleOutlineIcon],svg[mdi-dots-horizontal-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m0 6.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m-4.5 0A1.5 1.5 0 0 1 9 12a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 6 12a1.5 1.5 0 0 1 1.5-1.5m9 0A1.5 1.5 0 0 1 18 12a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 15 12a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiDotsHorizontalCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDotsSquareIcon],svg[mdi-dots-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-12c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M6 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m12 12c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></svg:path>`,
})
export class MdiDotsSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDotsTriangleIcon],svg[mdi-dots-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m-9 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m6 12c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></svg:path>`,
})
export class MdiDotsTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDotsVerticalIcon],svg[mdi-dots-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiDotsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDotsVerticalCircleIcon],svg[mdi-dots-vertical-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12m8.5 0a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0-1.5 1.5m0 5.5A1.5 1.5 0 0 0 12 19a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 12 16a1.5 1.5 0 0 0-1.5 1.5m0-11A1.5 1.5 0 0 0 12 8a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 12 5a1.5 1.5 0 0 0-1.5 1.5"></svg:path>`,
})
export class MdiDotsVerticalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDotsVerticalCircleOutlineIcon],svg[mdi-dots-vertical-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 12a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5m0 4.5A1.5 1.5 0 0 1 12 15a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 18a1.5 1.5 0 0 1-1.5-1.5m0-9A1.5 1.5 0 0 1 12 6a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 9a1.5 1.5 0 0 1-1.5-1.5M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiDotsVerticalCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDoubanIcon],svg[mdi-douban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 6H4V4h16v2m0 12v2H4v-2h3.33l-1.07-4H5V8h14v6h-1.26l-1.07 4H20M7 12h10v-2H7v2m2.4 6h5.2l1.07-4H8.33l1.07 4z" fill="currentColor"></svg:path>`,
})
export class MdiDoubanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadIcon],svg[mdi-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7z"></svg:path>`,
})
export class MdiDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadBoxIcon],svg[mdi-download-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m3 14h8v-2H8zm8-7h-2.5V7h-3v3H8l4 4z"></svg:path>`,
})
export class MdiDownloadBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadBoxOutlineIcon],svg[mdi-download-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17v-2h8v2zm8-7l-4 4l-4-4h2.5V7h3v3zM5 3h14a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiDownloadBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadCircleIcon],svg[mdi-download-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2M8 17h8v-2H8zm8-7h-2.5V6h-3v4H8l4 4z"></svg:path>`,
})
export class MdiDownloadCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadCircleOutlineIcon],svg[mdi-download-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17v-2h8v2zm8-7l-4 4l-4-4h2.5V6h3v4zm-4-8c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8"></svg:path>`,
})
export class MdiDownloadCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadLockIcon],svg[mdi-download-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h9v-2H5m14-9h-4V3H9v6H5l7 7m10 0a1.08 1.08 0 0 1 1 1v4a1.08 1.08 0 0 1-1 1h-5a1.08 1.08 0 0 1-1-1v-4a1.08 1.08 0 0 1 1-1v-1.5a2.5 2.5 0 0 1 5 0zm-1 0v-1.5a1.5 1.5 0 0 0-3 0V16z"></svg:path>`,
})
export class MdiDownloadLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadLockOutlineIcon],svg[mdi-download-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16a1.08 1.08 0 0 1 1 1v4a1.08 1.08 0 0 1-1 1h-5a1.08 1.08 0 0 1-1-1v-4a1.08 1.08 0 0 1 1-1v-1.5a2.5 2.5 0 0 1 5 0zm-1 0v-1.5a1.5 1.5 0 0 0-3 0V16zM13 5v6h1.17L12 13.17L9.83 11H11V5zm2-2H9v6H5l7 7l7-7h-4zm-1 15H5v2h9Z"></svg:path>`,
})
export class MdiDownloadLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadMultipleIcon],svg[mdi-download-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v6H5l7 7l7-7h-4V1zM5 16v2h14v-2zm0 4v2h14v-2z"></svg:path>`,
})
export class MdiDownloadMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadMultipleOutlineIcon],svg[mdi-download-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14l7-7h-4V1H9v6H5zm0-2.83L9.83 9H11V3h2v6h1.17zM5 16v2h14v-2zm0 6v-2h14v2z"></svg:path>`,
})
export class MdiDownloadMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadNetworkIcon],svg[mdi-download-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v2h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-5 11.5l4.5-4.5H13V6h-2v4H7.5z"></svg:path>`,
})
export class MdiDownloadNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadNetworkOutlineIcon],svg[mdi-download-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2zm-8-5V5h10v10zm5-1l4-4h-3V6h-2v4H8z"></svg:path>`,
})
export class MdiDownloadNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadOffIcon],svg[mdi-download-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L18.11 20H5v-2h11.11l-3.05-3.05L12 16L5 9h2.11l-6-6l1.28-1.27l19.72 19.73zM19 9h-4V3H9v2.8l6.6 6.6z"></svg:path>`,
})
export class MdiDownloadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadOffOutlineIcon],svg[mdi-download-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l6 6H5l7 7l1.06-1.05L16.11 18H5v2h13.11l2.73 2.73zM11 5h2v4.8l2.6 2.6L19 9h-4V3H9v2.8l2 2z"></svg:path>`,
})
export class MdiDownloadOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadOutlineIcon],svg[mdi-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5v6h1.17L12 13.17L9.83 11H11V5zm2-2H9v6H5l7 7l7-7h-4zm4 15H5v2h14z"></svg:path>`,
})
export class MdiDownloadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDragIcon],svg[mdi-drag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4V9h2v2zm4 0V9h2v2zm4 0V9h2v2zM7 7V5h2v2zm4 0V5h2v2zm4 0V5h2v2z"></svg:path>`,
})
export class MdiDragIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDragHorizontalIcon],svg[mdi-drag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15v-2h2v2zm0-4V9h2v2zm4 4v-2h2v2zm0-4V9h2v2zm4 4v-2h2v2zm0-4V9h2v2zm4 4v-2h2v2zm0-4V9h2v2zm4 4v-2h2v2zm0-4V9h2v2z"></svg:path>`,
})
export class MdiDragHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDragHorizontalVariantIcon],svg[mdi-drag-horizontal-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11H3V9h18zm0 2H3v2h18z"></svg:path>`,
})
export class MdiDragHorizontalVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDragVariantIcon],svg[mdi-drag-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.67 12l-4.49 4.5l-2.51-2.5l1.98-2l-1.98-1.96l2.51-2.51zM12 1.33l4.47 4.49l-2.51 2.51L12 6.35l-2 1.98l-2.5-2.51zm0 21.34l-4.47-4.49l2.51-2.51L12 17.65l2-1.98l2.5 2.51zM1.33 12l4.49-4.5L8.33 10l-1.98 2l1.98 1.96l-2.51 2.51zM12 10a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiDragVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDragVerticalIcon],svg[mdi-drag-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3h2v2H9zm4 0h2v2h-2zM9 7h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiDragVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDragVerticalVariantIcon],svg[mdi-drag-vertical-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21H9V3h2zm4-18h-2v18h2z"></svg:path>`,
})
export class MdiDragVerticalVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDramaMasksIcon],svg[mdi-drama-masks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.11 19.45a6.95 6.95 0 0 1-4.4-5.1L2.05 6.54c-.24-1.08.45-2.14 1.53-2.37l9.77-2.07l.03-.01c1.07-.21 2.12.48 2.34 1.54l.35 1.67l4.35.93h.03c1.05.24 1.73 1.3 1.51 2.36l-1.66 7.82a6.993 6.993 0 0 1-8.3 5.38a6.9 6.9 0 0 1-3.89-2.34M20 8.18L10.23 6.1l-1.66 7.82v.03c-.57 2.68 1.16 5.32 3.85 5.89s5.35-1.15 5.92-3.84zm-4 8.32a2.96 2.96 0 0 1-3.17 1.39a2.97 2.97 0 0 1-2.33-2.55zM8.47 5.17L4 6.13l1.66 7.81l.01.03c.15.71.45 1.35.86 1.9c-.1-.77-.08-1.57.09-2.37l.43-2c-.45-.08-.84-.33-1.05-.69c.06-.61.56-1.15 1.25-1.31h.25l.78-3.81c.04-.19.1-.36.19-.52m6.56 7.06c.32-.53 1-.81 1.69-.66c.69.14 1.19.67 1.28 1.29c-.33.52-1 .8-1.7.64c-.69-.13-1.19-.66-1.27-1.27m-4.88-1.04c.32-.53.99-.81 1.68-.66c.67.14 1.2.68 1.28 1.29c-.33.52-1 .81-1.69.68c-.69-.17-1.19-.7-1.27-1.31m1.82-6.76l1.96.42l-.16-.8z"></svg:path>`,
})
export class MdiDramaMasksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDrawIcon],svg[mdi-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 20.85c1.78-.7 1.39-2.63.49-3.85c-.89-1.25-2.12-2.11-3.36-2.94A9.8 9.8 0 0 1 4.54 12c-.28-.33-.85-.94-.27-1.06c.59-.12 1.61.46 2.13.68c.91.38 1.81.82 2.65 1.34l1.01-1.7C8.5 10.23 6.5 9.32 4.64 9.05c-1.06-.16-2.18.06-2.54 1.21c-.32.99.19 1.99.77 2.77c1.37 1.83 3.5 2.71 5.09 4.29c.34.33.75.72.95 1.18c.21.44.16.47-.31.47c-1.24 0-2.79-.97-3.8-1.61l-1.01 1.7c1.53.94 4.09 2.41 5.96 1.79m11.09-15.6c.22-.22.22-.58 0-.79l-1.3-1.3a.56.56 0 0 0-.78 0l-1.02 1.02l2.08 2.08M11 10.92V13h2.08l6.15-6.15l-2.08-2.08z"></svg:path>`,
})
export class MdiDrawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDrawPenIcon],svg[mdi-draw-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 20.85c1.78-.7 1.39-2.63.49-3.85c-.89-1.25-2.12-2.11-3.36-2.94A9.8 9.8 0 0 1 4.54 12c-.28-.33-.85-.94-.27-1.06c.59-.12 1.61.46 2.13.68c.91.38 1.81.82 2.65 1.34l1.01-1.7C8.5 10.23 6.5 9.32 4.64 9.05c-1.06-.16-2.18.06-2.54 1.21c-.32.99.19 1.99.77 2.77c1.37 1.83 3.5 2.71 5.09 4.29c.34.33.75.72.95 1.18c.21.44.16.47-.31.47c-1.24 0-2.79-.97-3.8-1.61l-1.01 1.7c1.53.94 4.09 2.41 5.96 1.79m9.21-13.52L13.29 13H11v-2.29l5.67-5.68zm3.4-.78c-.01.3-.32.61-.64.92L19.2 10l-.87-.87l2.6-2.59l-.59-.59l-.67.67l-2.29-2.29l2.15-2.15c.24-.24.63-.24.86 0l1.43 1.43c.24.22.24.62 0 .86c-.21.21-.41.41-.41.61c-.02.2.18.42.38.59c.29.3.58.58.57.88"></svg:path>`,
})
export class MdiDrawPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDrawingIcon],svg[mdi-drawing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 3A5.5 5.5 0 0 1 14 8.5c0 1.33-.47 2.55-1.26 3.5H21v9h-9v-8.26c-.95.79-2.17 1.26-3.5 1.26A5.5 5.5 0 0 1 3 8.5A5.5 5.5 0 0 1 8.5 3"></svg:path>`,
})
export class MdiDrawingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDrawingBoxIcon],svg[mdi-drawing-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18h-6v-5.79c-.66.61-1.53.99-2.5.99c-2.04 0-3.7-1.66-3.7-3.7a3.7 3.7 0 0 1 3.7-3.7c2.04 0 3.7 1.66 3.7 3.7c0 .97-.38 1.84-.99 2.5H18m1-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiDrawingBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDresserIcon],svg[mdi-dresser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3c-1.1 0-2 .9-2 2v3h20V5a2 2 0 0 0-2-2zm6 2h4v1h-4zM2 9v5h20V9zm8 2h4v1h-4zm-8 4v3a2 2 0 0 0 2 2v1h2v-1h12v1h2v-1c1.11 0 2-.89 2-2v-3zm8 2h4v1h-4z"></svg:path>`,
})
export class MdiDresserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDresserOutlineIcon],svg[mdi-dresser-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3c-1.1 0-2 .9-2 2v13a2 2 0 0 0 2 2v1h2v-1h12v1h2v-1c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2zm0 2h16v3H4zm6 1v1h4V6zm-6 4h16v3H4zm6 1v1h4v-1zm-6 4h16v3H4zm6 1v1h4v-1z"></svg:path>`,
})
export class MdiDresserOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDribbbleIcon],svg[mdi-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16.42 18.42A57.5 57.5 0 0 0 15 13.17c.5-.07 1-.11 1.58-.11h.02c.93 0 1.95.12 3.06.37a7.788 7.788 0 0 1-3.24 4.99M12 19.8c-1.74 0-3.34-.57-4.64-1.54c.28-.45.87-1.32 1.82-2.22c.96-.93 2.32-1.89 4.05-2.46c.59 1.67 1.13 3.57 1.54 5.71c-.86.33-1.77.51-2.77.51M4.2 12v-.11c.22.01.51.01.85.01h.01c1.56-.01 4.3-.14 7.08-1.01c.15.33.3.67.45 1.03c-1.86.62-3.32 1.61-4.4 2.58c-1.03.96-1.74 1.89-2.15 2.5a7.704 7.704 0 0 1-1.84-5m4.35-7c.55.65 1.63 2.06 2.79 4.25c-2.34.71-4.73.87-6.16.87h-.13c-.24 0-.45 0-.62-.01C5 7.87 6.5 6 8.55 5M12 4.2c1.84 0 3.53.64 4.86 1.71C15.84 7.14 14.5 8 13.03 8.65C12 6.67 11 5.25 10.34 4.38c.54-.11 1.09-.18 1.66-.18m6.13 2.98a7.823 7.823 0 0 1 1.66 4.45a15.32 15.32 0 0 0-3.19-.35h-.01c-.8 0-1.55.07-2.26.19c-.17-.42-.33-.82-.52-1.21c1.58-.69 3.09-1.68 4.32-3.08M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="currentColor"></svg:path>`,
})
export class MdiDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDribbbleBoxIcon],svg[mdi-dribbble-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m10.09 13.5c-.28-1.36-.62-2.59-1.01-3.68l1.12-.08h.02c.65 0 1.37.08 2.14.26a5.49 5.49 0 0 1-2.27 3.5m-3.09.96c-1.21 0-2.34-.4-3.24-1.07c.19-.32.6-.93 1.24-1.56c.7-.65 1.64-1.33 2.86-1.72c.42 1.16.79 2.49 1.08 3.99c-.61.23-1.26.36-1.94.36M6.54 12v-.08l.6.01c1.1 0 3.01-.1 4.96-.71l.31.72c-1.3.44-2.32 1.13-3.07 1.82c-.73.66-1.22 1.32-1.51 1.74c-.8-.94-1.29-2.16-1.29-3.5m3.05-4.89c.38.45 1.14 1.43 1.95 2.97c-1.65.49-3.31.6-4.32.6H6.7a5.47 5.47 0 0 1 2.89-3.57M12 6.54c1.29 0 2.47.46 3.41 1.2c-.72.86-1.67 1.48-2.69 1.92a19.89 19.89 0 0 0-1.88-2.99c.37-.08.76-.13 1.16-.13m4.29 2.09c.68.87 1.11 1.94 1.16 3.11c-.79-.16-1.53-.24-2.23-.24c-.56 0-1.09.04-1.59.13l-.36-.85c1.1-.48 2.16-1.17 3.02-2.15M12 5a7 7 0 0 0-7 7a7 7 0 0 0 7 7a7 7 0 0 0 7-7a7 7 0 0 0-7-7z" fill="currentColor"></svg:path>`,
})
export class MdiDribbbleBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDroneIcon],svg[mdi-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h-1l-1-2h-6.25L16 12.5h-2L10.75 9H4c-.55 0-2-.45-2-1s1.5-2.5 3.5-2.5S7.67 6.5 9 7h12a1 1 0 0 1 1 1zM10.75 6.5L14 3h2l-2.25 3.5zM18 11V9.5h1.75L19 11zM3 19a1 1 0 0 1-1-1a1 1 0 0 1 1-1a4 4 0 0 1 4 4a1 1 0 0 1-1 1a1 1 0 0 1-1-1a2 2 0 0 0-2-2m8 2a1 1 0 0 1-1 1a1 1 0 0 1-1-1a6 6 0 0 0-6-6a1 1 0 0 1-1-1a1 1 0 0 1 1-1a8 8 0 0 1 8 8"></svg:path>`,
})
export class MdiDroneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDropboxIcon],svg[mdi-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 6.2l5 3.19l5-3.19L8 3zm10 0l5 3.19l5-3.19L18 3zM3 12.55l5 3.19l5-3.19l-5-3.2zm15-3.2l-5 3.2l5 3.19l5-3.19zM8.03 16.8l5.01 3.2l5-3.2l-5-3.19z"></svg:path>`,
})
export class MdiDropboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDrupalIcon],svg[mdi-drupal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.47 14.65c0 .64-.22 1.71-.64 2.45c-.43.75-.75.96-1.39.96c-.74-.11-2.13-2.24-3.08-2.34c-1.18 0-3.63 2.45-5.65 2.45c-1.17 0-1.6-.22-1.92-.43c-.64-.43-.85-1.07-.85-1.92c0-1.6 1.49-2.98 3.3-2.98c2.35 0 3.94 2.34 5.12 2.24c.95 0 2.87-1.92 3.83-1.92c.96-.21 1.28.84 1.28 1.49m-3.84-9.37c-1.06-.64-2.02-.96-3.09-1.6c-.63-.43-1.49-1.38-2.23-2.24c-.31 1.39-.53 1.92-1.07 2.35c-1.06.74-1.6 1.06-2.55 1.49C6.94 5.7 3 8.05 3 13.16S7.37 22 12.05 22c4.8 0 8.95-3.5 8.95-8.73c.21-5.22-3.73-7.57-4.37-7.99"></svg:path>`,
})
export class MdiDrupalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDuckIcon],svg[mdi-duck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 5A1.5 1.5 0 0 0 7 6.5A1.5 1.5 0 0 0 8.5 8A1.5 1.5 0 0 0 10 6.5A1.5 1.5 0 0 0 8.5 5M10 2a5 5 0 0 1 5 5c0 1.7-.85 3.2-2.14 4.1c1.58.15 3.36.51 5.14 1.4c3 1.5 4-.5 4-.5s-1 9-7 9H9s-5 0-5-5c0-3 3-4 2-6c-4 0-4-3.5-4-3.5c1 .5 2.24.5 3 .15A5.02 5.02 0 0 1 10 2"></svg:path>`,
})
export class MdiDuckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDumbbellIcon],svg[mdi-dumbbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22l1.43-1.43L16.29 22l2.14-2.14l1.43 1.43l1.43-1.43l-1.43-1.43L22 16.29z"></svg:path>`,
})
export class MdiDumbbellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDumpTruckIcon],svg[mdi-dump-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-5v6H2v3h1a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5zM6 18.5A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5m12 0a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5M17 12V9.5h2.5l1.96 2.5zm1-5h-4v6H3L1.57 8H1V6h12l1-1h4z"></svg:path>`,
})
export class MdiDumpTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarHearingIcon],svg[mdi-ear-hearing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20c-.29 0-.56-.06-.76-.15c-.71-.35-1.21-.88-1.71-2.38c-.53-1.56-1.47-2.29-2.39-3c-.79-.61-1.61-1.24-2.32-2.53C9.29 11 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9c.93 1.65 1.98 2.48 2.85 3.15c.81.62 1.39 1.07 1.71 2.05c.6 1.82 1.37 2.84 2.73 3.55c.51.23 1.07.35 1.64.35a4 4 0 0 0 4-4h-2a2 2 0 0 1-2 2M7.64 2.64L6.22 1.22A10.97 10.97 0 0 0 3 9c0 3.04 1.23 5.79 3.22 7.78l1.41-1.41A8.95 8.95 0 0 1 5 9c0-2.5 1-4.74 2.64-6.36M11.5 9a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 16.5 9A2.5 2.5 0 0 0 14 6.5A2.5 2.5 0 0 0 11.5 9"></svg:path>`,
})
export class MdiEarHearingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarHearingLoopIcon],svg[mdi-ear-hearing-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.5a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5M16 17v2h2v4h2v-4h2v-2zm-4.31-3.53L3.67 22L2.4 20.73l7.35-7.86c.58.34 1.25.55 1.94.6M19 9c0 1.26-.38 2.65-1.07 3.9c-.93 1.65-1.98 2.48-2.85 3.15c-.81.62-1.39 1.07-1.71 2.05c-.6 1.82-1.37 2.84-2.73 3.55c-.51.23-1.07.35-1.64.35c-1.19 0-2.25-.53-3-1.35l1.43-1.43a1.98 1.98 0 0 0 2.33.63c.71-.35 1.21-.88 1.71-2.38c.53-1.56 1.47-2.29 2.39-3c.79-.61 1.61-1.24 2.32-2.53C16.71 11 17 9.93 17 9c0-2.8-2.2-5-5-5S7 6.2 7 9H5c0-3.93 3.07-7 7-7s7 3.07 7 7m-.63-4.88l2.35-2.39L22 3l-2.68 2.72c-.26-.57-.58-1.11-.95-1.6"></svg:path>`,
})
export class MdiEarHearingLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarHearingOffIcon],svg[mdi-ear-hearing-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.27L2.28 3L20 20.72L18.73 22l-5.82-5.82c-.72.56-1.24 1.01-1.54 1.92c-.6 1.82-1.37 2.84-2.73 3.55c-.51.23-1.07.35-1.64.35a4 4 0 0 1-4-4h2a2 2 0 0 0 2 2c.29 0 .56-.06.76-.15c.71-.35 1.21-.88 1.71-2.38c.44-1.35 1.22-2.08 2.03-2.71L5.04 8.31C5 8.54 5 8.77 5 9H3c0-.83.14-1.61.39-2.34zm13.18 7.67C14.71 11 15 9.93 15 9c0-2.8-2.2-5-5-5c-1.19 0-2.26.39-3.11 1.06L5.46 3.63C6.67 2.61 8.25 2 10 2c3.93 0 7 3.07 7 7c0 1.26-.38 2.65-1.07 3.9l-.46.75l-1.44-1.45zm2.18-9.3l1.42-1.42C19.77 3.21 21 5.96 21 9c0 2.83-1.07 5.41-2.82 7.36l-1.41-1.42A9 9 0 0 0 19 9c0-2.5-1-4.74-2.64-6.36M12.5 9c0 .5-.14.93-.37 1.31L8.69 6.87c.38-.23.81-.37 1.31-.37A2.5 2.5 0 0 1 12.5 9"></svg:path>`,
})
export class MdiEarHearingOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarbudsIcon],svg[mdi-earbuds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8v12c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-6.73c-.68.45-1.39.73-2 .73c-2 0-3-2-3-3V6c0-1 1-3 3-3s5 3 5 5m6.5-5C13.46 3 11 5.46 11 8.5s2.46 5.5 5.5 5.5S22 11.54 22 8.5S19.54 3 16.5 3m-2 11.68V20c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5.32c-.63.21-1.3.32-2 .32s-1.37-.11-2-.32"></svg:path>`,
})
export class MdiEarbudsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarbudsOffIcon],svg[mdi-earbuds-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 9.34l1.56 1.57v-.01l2.54 2.55l-.01-.01l1.49 1.49h.01l2.91 2.91v.01l3.61 3.61l-1.27 1.27l-2.41-2.4c-.13.39-.49.67-.93.67h-2c-.55 0-1-.45-1-1v-3.61l-4.5-4.5V20c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-6.73c-.68.45-1.39.73-2 .73c-2 0-3-2-3-3V6c0-.42.19-1 .55-1.57L1.11 3l1.28-1.27L6.1 5.44M22 8.5C22 5.46 19.54 3 16.5 3c-2.81 0-5.13 2.12-5.46 4.84l6.12 6.12A5.496 5.496 0 0 0 22 8.5"></svg:path>`,
})
export class MdiEarbudsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarbudsOffOutlineIcon],svg[mdi-earbuds-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.11 21.46l-3.61-3.61v-.01l-2.92-2.91l-1.49-1.49h.01l-2.54-2.54L10 9.34l-3-3L6.66 6h.01l-.57-.56l-3.71-3.71L1.11 3l1.44 1.43C2.19 5 2 5.58 2 6v5c0 1 1 3 3 3c.61 0 1.32-.28 2-.73V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8.11l4.5 4.5V20c0 .55.45 1 1 1h2c.44 0 .8-.28.93-.68l2.41 2.41zM8 10.23L5.91 11.6c-.51.33-.83.4-.91.4c-.7 0-1-.92-1-1V6.03c0-.03 0-.06.03-.11L8 9.89zm5.53.1l-2.49-2.49C11.37 5.12 13.69 3 16.5 3C19.54 3 22 5.46 22 8.5c0 2.82-2.11 5.13-4.84 5.46l-2.49-2.49c.53.33 1.16.53 1.83.53c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5S13 6.57 13 8.5c0 .67.2 1.3.53 1.83"></svg:path>`,
})
export class MdiEarbudsOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarbudsOutlineIcon],svg[mdi-earbuds-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3C3 3 2 5 2 6v5c0 1 1 3 3 3c.61 0 1.32-.28 2-.73V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8c0-2-3-5-5-5m3 7.23L5.91 11.6c-.51.33-.83.4-.91.4c-.7 0-1-.92-1-1V6.03C4 5.92 4.3 5 5 5c.9 0 3 2.1 3 3zM16.5 15c.7 0 1.37-.11 2-.32V20c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-5.32c.63.21 1.3.32 2 .32m0-12C13.46 3 11 5.46 11 8.5s2.46 5.5 5.5 5.5S22 11.54 22 8.5S19.54 3 16.5 3m0 9c-1.93 0-3.5-1.57-3.5-3.5S14.57 5 16.5 5S20 6.57 20 8.5S18.43 12 16.5 12"></svg:path>`,
})
export class MdiEarbudsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthIcon],svg[mdi-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiEarthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthArrowDownIcon],svg[mdi-earth-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19h2v-4h2v4h2l-3 3zm-3-1c0-2.2 1.2-4.1 3-5.2c-.1-.5-.5-.8-1-.8H8v-2h2c.6 0 1-.4 1-1V7h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4 5 7.4v.3c.7.2 1.3.6 1.9 1.1c.1-.4.1-.9.1-1.4c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10c.5 0 1 0 1.4-.1c-.9-1.1-1.4-2.4-1.4-3.9m-1 1.9c-4-.5-7-3.8-7-7.9c0-.6.1-1.2.2-1.8L9 15v1c0 1.1.9 2 2 2z"></svg:path>`,
})
export class MdiEarthArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthArrowLeftIcon],svg[mdi-earth-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15v2h4v2h-4v2l-3-3zm-5 3c0-2.2 1.2-4.1 3-5.2c-.1-.5-.5-.8-1-.8H8v-2h2c.6 0 1-.4 1-1V7h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4 5 7.4v.3c.7.2 1.3.6 1.9 1.1c.1-.4.1-.9.1-1.4c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10c.5 0 1 0 1.4-.1c-.9-1.1-1.4-2.4-1.4-3.9m-1 1.9c-4-.5-7-3.8-7-7.9c0-.6.1-1.2.2-1.8L9 15v1c0 1.1.9 2 2 2z"></svg:path>`,
})
export class MdiEarthArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthArrowRightIcon],svg[mdi-earth-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21v-2h-4v-2h4v-2l3 3zm-7-3c0-2.2 1.2-4.1 3-5.2c-.1-.5-.5-.8-1-.8H8v-2h2c.6 0 1-.4 1-1V7h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4 5 7.4v.3c.7.2 1.3.6 1.9 1.1c.1-.4.1-.9.1-1.4c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10c.5 0 1 0 1.4-.1c-.9-1.1-1.4-2.4-1.4-3.9m-1 1.9c-4-.5-7-3.8-7-7.9c0-.6.1-1.2.2-1.8L9 15v1c0 1.1.9 2 2 2z"></svg:path>`,
})
export class MdiEarthArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthArrowUpIcon],svg[mdi-earth-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17h-2v4h-2v-4h-2l3-3zm-9 1c0-2.2 1.2-4.1 3-5.2c-.1-.5-.5-.8-1-.8H8v-2h2c.6 0 1-.4 1-1V7h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4 5 7.4v.3c.7.2 1.3.6 1.9 1.1c.1-.4.1-.9.1-1.4c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10c.5 0 1 0 1.4-.1c-.9-1.1-1.4-2.4-1.4-3.9m-1 1.9c-4-.5-7-3.8-7-7.9c0-.6.1-1.2.2-1.8L9 15v1c0 1.1.9 2 2 2z"></svg:path>`,
})
export class MdiEarthArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthBoxIcon],svg[mdi-earth-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10.78 2H19v12.18c-.26-.8-1.31-1.39-2.2-1.39h-1v-3a1 1 0 0 0-1-1h-6v-2h2a1 1 0 0 0 1-1v-2h2c1.03 0 1.87-.79 1.98-1.79M5 10.29l4.8 4.5v1a2 2 0 0 0 2 2V19H5z"></svg:path>`,
})
export class MdiEarthBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthBoxMinusIcon],svg[mdi-earth-box-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-8v-2zM5 3h14a2 2 0 0 1 2 2v7.8c-.61-.35-1.28-.6-2-.72V5h-3.22c-.11 1-.95 1.79-1.98 1.79h-2v2c0 .56-.45 1-1 1h-2v2h6c.43 0 .8.27.94.65A6.01 6.01 0 0 0 12 17.83c-1.3-.04-2.2-.93-2.2-2.04v-1L5 10.29V19h7.08c.12.72.37 1.39.72 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2"></svg:path>`,
})
export class MdiEarthBoxMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthBoxOffIcon],svg[mdi-earth-box-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 4.27l-2 2V19a2 2 0 0 1-2 2H6.27l-2 2L3 21.72L21.72 3zM5 3h14.18l-2 2h-1.4c-.11 1-.95 1.79-1.98 1.79h-2v2c0 .56-.45 1-1 1h-2v2h1.58l-1.83 1.83L5 10.29v6.89l-2 2V5c0-1.11.89-2 2-2m6.8 16v-1.21c-.63 0-1.2-.29-1.57-.75L8.27 19zm4-6.21v3h1c.89 0 1.94.59 2.2 1.39V8.27l-3.67 3.67c.28.18.47.49.47.85"></svg:path>`,
})
export class MdiEarthBoxOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthBoxPlusIcon],svg[mdi-earth-box-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM5 3h14a2 2 0 0 1 2 2v7.8c-.61-.35-1.28-.6-2-.72V5h-3.22c-.11 1-.95 1.79-1.98 1.79h-2v2c0 .56-.45 1-1 1h-2v2h6c.43 0 .8.27.94.65A6.01 6.01 0 0 0 12 17.83c-1.3-.04-2.2-.93-2.2-2.04v-1L5 10.29V19h7.08c.12.72.37 1.39.72 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2"></svg:path>`,
})
export class MdiEarthBoxPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthBoxRemoveIcon],svg[mdi-earth-box-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.46 15.88l1.42-1.42L18 16.59l2.12-2.12l1.42 1.41L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18l-2.12-2.12M5 3h14a2 2 0 0 1 2 2v7.8c-.61-.35-1.28-.6-2-.72V5h-3.22c-.11 1-.95 1.79-1.98 1.79h-2v2c0 .56-.45 1-1 1h-2v2h6c.43 0 .8.27.94.65A6.01 6.01 0 0 0 12 17.83c-1.3-.04-2.2-.93-2.2-2.04v-1L5 10.29V19h7.08c.12.72.37 1.39.72 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2"></svg:path>`,
})
export class MdiEarthBoxRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthMinusIcon],svg[mdi-earth-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h8v2h-8zm6-5c0-3.36-2.07-6.23-5-7.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h6c.5 0 .9.35 1 .81c-1.8 1.04-3 2.98-3 5.19c0 1.5.54 2.85 1.44 3.9L12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10l-.1 1.44c-.56-.48-1.2-.85-1.9-1.1zm-9 7.93V18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.78 4 11.38 4 12c0 4.08 3.06 7.44 7 7.93"></svg:path>`,
})
export class MdiEarthMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthOffIcon],svg[mdi-earth-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 5.27l-1.5 1.48C21.46 8.28 22 10.07 22 12a10 10 0 0 1-10 10c-1.92 0-3.72-.54-5.25-1.5L5.27 22L4 20.72L20.72 4zm-4.1 12.12C19.2 15.97 20 14.08 20 12c0-1.37-.34-2.66-.95-3.78l-4.22 4.22c.11.16.17.35.17.56v3h1c.89 0 1.64.59 1.9 1.39M11 19.93V18c-.5 0-.93-.17-1.27-.46l-1.51 1.51c.85.45 1.78.75 2.78.88m4-15.34V5a2 2 0 0 1-2 2h-2v2a1 1 0 0 1-1 1H8v2h2.18l-2.09 2.09l-3.88-3.88C4.08 10.78 4 11.38 4 12c0 1.74.56 3.36 1.5 4.67L4.08 18.1A9.9 9.9 0 0 1 2 12A10 10 0 0 1 12 2c2.3 0 4.41.77 6.1 2.08L16.67 5.5A8.2 8.2 0 0 0 15 4.59"></svg:path>`,
})
export class MdiEarthOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthPlusIcon],svg[mdi-earth-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zm3-2c0-3.36-2.07-6.23-5-7.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h6c.5 0 .9.35 1 .81c-1.8 1.04-3 2.98-3 5.19c0 1.5.54 2.85 1.44 3.9L12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10l-.1 1.44c-.56-.48-1.2-.85-1.9-1.1zm-9 7.93V18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.78 4 11.38 4 12c0 4.08 3.06 7.44 7 7.93"></svg:path>`,
})
export class MdiEarthPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEarthRemoveIcon],svg[mdi-earth-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.46 15.88l1.42-1.42L18 16.59l2.12-2.12l1.42 1.41L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18l-2.12-2.12M20 12c0-3.36-2.07-6.23-5-7.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h6c.5 0 .9.35 1 .81c-1.8 1.04-3 2.98-3 5.19c0 1.5.54 2.85 1.44 3.9L12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10l-.1 1.44c-.56-.48-1.2-.85-1.9-1.1zm-9 7.93V18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.78 4 11.38 4 12c0 4.08 3.06 7.44 7 7.93"></svg:path>`,
})
export class MdiEarthRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEbayIcon],svg[mdi-ebay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3.805 10.507c-.816 0-1.643.517-1.643 1.422h3.205c0-.853-.633-1.422-1.562-1.422zm.04-.741c2.06 0 2.66 1.35 2.684 2.265V7.842H7.65v2.765s.476-.826 2.006-.826c1.634 0 2.602 1.154 2.602 2.59c0 .175-.013.344-.04.507c.264-.742 1.18-1.109 2.684-1.109h1.363v-.24c0-.676-.595-1.027-1.363-1.027c-1.18 0-1.241.746-1.241.746h-1.162c0-.204.15-1.482 2.484-1.482c.795 0 1.665.166 2.108.82l-.33-.62h1.307l1.876 3.759l1.872-3.759H23l-3.41 6.691H18.35l.983-1.865l-2.089-3.92c.092.224.144.492.144.81v2.416c0 .28.04.716.04.716h-1.033s-.028-.352-.028-.71c0 0-.524.9-2.15.9c-1.195 0-2.078-.576-2.078-1.632c0-.06.003-.117.009-.173c-.31 1.086-1.239 1.79-2.493 1.79c-1.473 0-2.015-.847-2.015-.847c0 .321-.04.672-.04.672H6.505s.025-.489.025-.837V12.67H2.137c0 .924.702 1.583 1.678 1.583c1.198 0 1.445-.841 1.445-.841h1.15s-.153 1.562-2.525 1.562C1.87 14.974 1 13.984 1 12.41c0-1.986 1.293-2.644 2.845-2.644zm5.528.774c-1.178 0-1.723.934-1.723 1.84c0 .973.607 1.85 1.73 1.85c.943 0 1.716-.735 1.716-1.86c0-1.049-.67-1.83-1.723-1.83zm6.892 1.95c-1.764 0-2.965.006-2.965.882c0 .481.356.896 1.188.896c1.519 0 1.777-1.04 1.777-1.457v-.32z" fill="currentColor"></svg:path>`,
})
export class MdiEbayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEggIcon],svg[mdi-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 14.5A7.5 7.5 0 0 1 12 22a7.5 7.5 0 0 1-7.5-7.5C4.5 10.36 7.86 2 12 2s7.5 8.36 7.5 12.5"></svg:path>`,
})
export class MdiEggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEggEasterIcon],svg[mdi-egg-easter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.89 6.36C8.23 3.91 10 2 12 2s3.77 1.91 5.11 4.36c-.85.21-1.61.71-2.11 1.41a3.71 3.71 0 0 0-5.2-.8c-.3.22-.58.49-.8.8c-.5-.7-1.26-1.2-2.11-1.41M15 18.06l-3-3l-3 3l-3-3l-1.27 1.27a7.504 7.504 0 0 0 9.11 5.43a7.53 7.53 0 0 0 5.43-5.43L18 15.06zm-6-2.12l3-3l3 3l3-3l1.5 1.5c-.13-2.31-.7-4.58-1.69-6.68c-1.16.1-2.06 1.07-2.06 2.24h-1.5A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10h-1.5c0-1.17-.9-2.14-2.06-2.24c-.99 2.1-1.56 4.37-1.69 6.68l1.5-1.5z"></svg:path>`,
})
export class MdiEggEasterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEggFriedIcon],svg[mdi-egg-fried-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5c2.17 0 2.58.57 3.5 1.82c.38.53.82 1.12 1.44 1.74c.49.49.92.87 1.27 1.18c1.09.95 1.29 1.12 1.29 2.76c0 2.93 0 3.38-1.56 4.94C16 18.86 15.38 19.5 13 19.5c-1.12 0-1.5-.32-2.11-.81c-.62-.5-1.46-1.19-2.89-1.19c-3.04 0-3.5-3.45-3.5-5.5c0-1.35.5-3.09 1.97-3.58c1.78-.59 2.73-1.71 3.49-2.61c.79-.93 1.15-1.31 2.04-1.31M12 3C9 3 9 6 6 7c-2.12.71-3 3-3 5c0 3 1 7 5 7c2 0 2 2 5 2s4-1 6-3s2-3 2-6s-1-3-3-5s-2-4-6-4m0 5c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 2c-1.1 0-2 .9-2 2H9c0-1.65 1.35-3 3-3z"></svg:path>`,
})
export class MdiEggFriedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEggOffIcon],svg[mdi-egg-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l5 5c-1 2.3-1.6 4.8-1.6 6.5c0 4.1 3.4 7.5 7.5 7.5c2.2 0 4.2-1 5.6-2.5l3.2 3.2zm-2.6-7C19.5 10.4 16.1 2 12 2c-1.5 0-2.9 1.1-4.1 2.7l11.4 11.4c.1-.5.2-1 .2-1.6"></svg:path>`,
})
export class MdiEggOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEggOffOutlineIcon],svg[mdi-egg-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L6.1 8c-1 2.28-1.6 4.76-1.6 6.5c0 4.14 3.36 7.5 7.5 7.5c2.23 0 4.22-1 5.59-2.5l3.25 3.23zM12 20a5.51 5.51 0 0 1-5.5-5.5c0-1.42.45-3.25 1.13-5l8.54 8.56C15.16 19.24 13.67 20 12 20M9.36 6.16L7.92 4.72C9.1 3.11 10.5 2 12 2c4.14 0 7.5 8.36 7.5 12.5c0 .56-.07 1.1-.18 1.62l-1.82-1.83C17.38 10.46 14.28 4 12 4c-.83 0-1.78.87-2.64 2.16"></svg:path>`,
})
export class MdiEggOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEggOutlineIcon],svg[mdi-egg-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c2.32 0 5.5 6.7 5.5 10.5c0 3.03-2.47 5.5-5.5 5.5s-5.5-2.47-5.5-5.5C6.5 10.7 9.68 4 12 4m0-2c-4.14 0-7.5 8.36-7.5 12.5S7.86 22 12 22s7.5-3.36 7.5-7.5S16.14 2 12 2"></svg:path>`,
})
export class MdiEggOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEiffelTowerIcon],svg[mdi-eiffel-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.21 17c.44-.85.85-1.84 1.23-3H9v-2h1c.61-2.6 1-5.87 1-10h2c0 4.13.4 7.4 1 10h1v2h-.44c.38 1.16.79 2.15 1.23 3H17v2l2 3h-2.42c-.77-1.76-2.53-3-4.58-3s-3.81 1.24-4.58 3H5l2-3l-.03-2zm4.38-3h-1.18a22 22 0 0 1-1.13 3h3.44c-.4-.87-.79-1.87-1.13-3"></svg:path>`,
})
export class MdiEiffelTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEightTrackIcon],svg[mdi-eight-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2L5 5v11l1 4c.27 1.07.9 2 2 2h8a2 2 0 0 0 2-2l1-4V5l-2-3h-2v1h-2V2zm0 4h10v10H7z"></svg:path>`,
})
export class MdiEightTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEjectIcon],svg[mdi-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5L5.33 15h13.34M5 17h14v2H5z"></svg:path>`,
})
export class MdiEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEjectCircleIcon],svg[mdi-eject-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.5 14h-9v-2h9zm-9-4L12 6l4.5 6z"></svg:path>`,
})
export class MdiEjectCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEjectCircleOutlineIcon],svg[mdi-eject-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.5-8L12 6l-4.5 6zm0 4h-9v-2h9z"></svg:path>`,
})
export class MdiEjectCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEjectOutlineIcon],svg[mdi-eject-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17h14v2H5zm7-12L5.33 15h13.34zm0 3.6l2.93 4.4H9.07z"></svg:path>`,
})
export class MdiEjectOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElectricSwitchIcon],svg[mdi-electric-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h2.17C3.58 9.83 4.69 9 6 9c.65 0 1.25.21 1.74.56l6.7-4.69l1.14 1.63l-6.69 4.7c.07.25.11.52.11.8a3 3 0 0 1-3 3a2.99 2.99 0 0 1-2.83-2H1zm22 0v2h-2.17A2.99 2.99 0 0 1 18 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2zM6 11a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m12 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiElectricSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElectricSwitchClosedIcon],svg[mdi-electric-switch-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.83 11a3 3 0 0 0-5.65 0H8.82a3 3 0 0 0-5.65 0H1v2h2.17a3 3 0 0 0 5.65 0h6.36a3 3 0 0 0 5.65 0H23v-2M6 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1m12 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiElectricSwitchClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElectronFrameworkIcon],svg[mdi-electron-framework-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-1.67 0-3.16-1.5-4.1-4.07c-.07-.2.03-.43.24-.49c.2-.08.42.03.49.23c.81 2.23 2.07 3.56 3.37 3.56c.94 0 1.87-.68 2.62-1.92a.386.386 0 0 1 .66.4C14.38 21.19 13.22 22 12 22m3.91-4.28a.4.4 0 0 1-.11-.02c-.21-.07-.3-.28-.26-.49c.46-1.4.68-3.03.68-4.71c0-3.85-1.25-7.26-3.03-8.36c-.25.36-.69.64-1.19.64c-.76 0-1.39-.62-1.39-1.39S11.24 2 12 2c.77 0 1.4.61 1.41 1.37C15.53 4.5 17 8.21 17 12.5c0 1.75-.25 3.46-.72 4.95c-.05.16-.2.27-.37.27M12 2.77c-.34 0-.62.28-.62.62s.29.61.62.61c.35 0 .64-.27.64-.61s-.29-.62-.64-.62M4.08 18.54c-.77 0-1.4-.63-1.4-1.39c0-.49.26-.93.65-1.18c-.14-2.41 2.35-5.56 6.17-7.75c1.59-.9 3.25-1.55 4.82-1.88c.18-.05.41.08.45.29c.05.21-.08.42-.27.46c-1.5.32-3.09.94-4.6 1.8c-3.44 1.97-5.8 4.79-5.8 6.87c.76.01 1.4.63 1.4 1.39c0 .77-.65 1.39-1.42 1.39m0-2.01c-.34 0-.62.28-.62.62c0 .35.28.62.62.62s.63-.27.63-.62c0-.34-.29-.62-.63-.62m14.42-3.09c-.07 0-.16-.03-.23-.09a.393.393 0 0 1-.04-.55c1.54-1.8 2.07-3.54 1.41-4.66c-.47-.81-1.54-1.26-3.01-1.28c-.22 0-.39-.18-.38-.39c0-.21.18-.37.39-.38c1.75.02 3.06.61 3.67 1.66c.84 1.44.29 3.46-1.49 5.55c-.08.09-.19.14-.32.14m-2 5.46c-2 0-4.56-.74-7-2.13c-1.55-.89-2.93-1.98-4-3.14a.4.4 0 0 1 0-.55c.18-.14.42-.13.57.03c1.01 1.1 2.33 2.14 3.82 2.99c3.31 1.9 6.88 2.53 8.76 1.62c-.08-.17-.15-.37-.15-.57c0-.77.65-1.39 1.42-1.39s1.4.62 1.4 1.39a1.396 1.396 0 0 1-2.15 1.17c-.7.39-1.61.58-2.67.58m3-1.27c.13.08.27.14.42.14a.619.619 0 1 0 0-1.24c-.35 0-.62.28-.62.62c0 .14.05.27.13.38c.04.02.07.06.07.1M4.46 12c-.13 0-.26-.08-.33-.2c-.9-1.55-1.05-2.99-.43-4.06c.84-1.44 2.88-1.98 5.61-1.49c.19.04.35.25.31.45c-.03.21-.23.35-.44.3C6.82 6.59 5 7 4.37 8.13c-.48.82-.33 1.98.43 3.28c.1.19.04.42-.15.53c-.06.03-.12.06-.19.06m7.75 1.4a.92.92 0 0 1-.4-1.8c.5-.1 1 .21 1.1.71c.09.49-.21.98-.7 1.09"></svg:path>`,
})
export class MdiElectronFrameworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElephantIcon],svg[mdi-elephant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 15.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5v-7c0-1.93-2.07-3.5-4-3.5H6a4 4 0 0 0-4 4v10h4v-4h5v4h4v-4.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5V16a3 3 0 0 0 3 3a3 3 0 0 0 3-3v-2h-2.5z"></svg:path>`,
})
export class MdiElephantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElevationDeclineIcon],svg[mdi-elevation-decline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21H3v-9.75L9.45 15l3.77-2.2L21 17.29zM3 8.94V6.75l6.45 3.75l3.77-2.2L21 12.79V15l-7.78-4.5l-3.77 2.17z"></svg:path>`,
})
export class MdiElevationDeclineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElevationRiseIcon],svg[mdi-elevation-rise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-3.71l7.78-4.49l3.77 2.2L21 11.25V21zM21 8.94l-6.45 3.73l-3.77-2.17L3 15v-2.21l7.78-4.49l3.77 2.2L21 6.75z"></svg:path>`,
})
export class MdiElevationRiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElevatorIcon],svg[mdi-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l4 4H8v4H6V6H3zm10 8l-4-4h3V2h2v4h3zM7 12h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m0 2v6h10v-6z"></svg:path>`,
})
export class MdiElevatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElevatorDownIcon],svg[mdi-elevator-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 10l4-4H8V2H6v4H3zm10 0l-4-4h3V2h2v4h3zM7 12h10a2 2 0 0 1 2 2v6c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2m0 2v6h10v-6z"></svg:path>`,
})
export class MdiElevatorDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElevatorPassengerIcon],svg[mdi-elevator-passenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8.5 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m2.5 8h-1v4H7v-4H6v-2.5c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2zm4.5 3L13 13h5zM13 11l2.5-4l2.5 4z"></svg:path>`,
})
export class MdiElevatorPassengerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElevatorPassengerOffIcon],svg[mdi-elevator-passenger-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.11 21.46l-1.41-1.41v-.01L2.39 1.73L1.11 3L3 4.9V19c0 1.1.9 2 2 2h14.1l1.74 1.73zM11 14h-1v4H7v-4H6v-2.5c0-1 .71-1.79 1.65-1.96L11 12.89zm2.46-3.74L6.2 3H19c1.1 0 2 .9 2 2v12.8l-3.69-3.69L18 13h-1.8l-2-2H18l-2.5-4z"></svg:path>`,
})
export class MdiElevatorPassengerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElevatorPassengerOffOutlineIcon],svg[mdi-elevator-passenger-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L3 4.9V19c0 1.1.9 2 2 2h14.1l1.74 1.73zM5 19V6.89l2.65 2.65C6.71 9.71 6 10.5 6 11.5V14h1v4h3v-4h1v-1.11L17.11 19zM8.2 5l-2-2H19c1.1 0 2 .9 2 2v12.8l-2-2V5zm9.8 6h-3.8l-.74-.74L15.5 7zm-.69 3.11L16.2 13H18z"></svg:path>`,
})
export class MdiElevatorPassengerOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElevatorPassengerOutlineIcon],svg[mdi-elevator-passenger-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4zM8.5 8.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M18 11l-2.5-4l-2.5 4zm-5 2l2.5 4l2.5-4z"></svg:path>`,
})
export class MdiElevatorPassengerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiElevatorUpIcon],svg[mdi-elevator-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l4 4H8v4H6V6H3zm10 0l-4 4h3v4h2V6h3zM7 12h10a2 2 0 0 1 2 2v6c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2m0 2v6h10v-6z"></svg:path>`,
})
export class MdiElevatorUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEllipseIcon],svg[mdi-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C6.5 4 2 7.58 2 12s4.5 8 10 8s10-3.58 10-8s-4.5-8-10-8"></svg:path>`,
})
export class MdiEllipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEllipseOutlineIcon],svg[mdi-ellipse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c4.41 0 8 2.69 8 6s-3.59 6-8 6s-8-2.69-8-6s3.59-6 8-6m0-2C6.5 4 2 7.58 2 12s4.5 8 10 8s10-3.58 10-8s-4.5-8-10-8"></svg:path>`,
})
export class MdiEllipseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailIcon],svg[mdi-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailAlertIcon],svg[mdi-email-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 8l-8 5l-8-5V6l8 5l8-5m0-2H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m6 3h-2v6h2zm0 8h-2v2h2z"></svg:path>`,
})
export class MdiEmailAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailAlertOutlineIcon],svg[mdi-email-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 7h-2v6h2zm0 8h-2v2h2zm-4-9c0-1.1-.9-2-2-2H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H2V8l8 5l8-5z"></svg:path>`,
})
export class MdiEmailAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailArrowLeftIcon],svg[mdi-email-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5zm14 8v2h4v2h-4v2l-3-3z"></svg:path>`,
})
export class MdiEmailArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailArrowLeftOutlineIcon],svg[mdi-email-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-.34.04-.67.09-1H4V8l8 5l8-5v5.09c.72.12 1.39.37 2 .72V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9.09c-.05-.33-.09-.66-.09-1m7-13l-8 5l-8-5zm-2 10v2h4v2h-4v2l-3-3z"></svg:path>`,
})
export class MdiEmailArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailArrowRightIcon],svg[mdi-email-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5zm16 14v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiEmailArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailArrowRightOutlineIcon],svg[mdi-email-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-.34.04-.67.09-1H4V8l8 5l8-5v5.09c.72.12 1.39.37 2 .72V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9.09c-.05-.33-.09-.66-.09-1m7-13l-8 5l-8-5zm0 16v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiEmailArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailBoxIcon],svg[mdi-email-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm1.4 3.5h11.2c.77 0 1.4.62 1.4 1.4v8.2a1.4 1.4 0 0 1-1.4 1.4H6.4c-.77 0-1.4-.63-1.4-1.4V7.9c0-.78.62-1.4 1.4-1.4M6 8v2l6 4l6-4V8l-6 4z"></svg:path>`,
})
export class MdiEmailBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailCheckIcon],svg[mdi-email-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5zm13.75 14.16l-2.75-3L16.16 18l1.59 1.59L21.34 16l1.16 1.41z"></svg:path>`,
})
export class MdiEmailCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailCheckOutlineIcon],svg[mdi-email-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-.34.04-.67.09-1H4V8l8 5l8-5v5.09c.72.12 1.39.37 2 .72V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9.09c-.05-.33-.09-.66-.09-1m7-13l-8 5l-8-5zm-2.25 16.16l-2.75-3L16.16 18l1.59 1.59L21.34 16l1.16 1.41z"></svg:path>`,
})
export class MdiEmailCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailEditIcon],svg[mdi-email-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12.13c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.22-.21.22-.56 0-.77l-1.24-1.23a.56.56 0 0 0-.38-.17m-2 1.75L13 19.94V22h2.06l6.06-6.07M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v-.89l8.24-8.22c.47-.49 1.12-.76 1.8-.76c.34 0 .68.06 1 .19V6c0-1.12-.92-2-2.04-2m0 4l-8 5l-8-5V6l8 5l8-5"></svg:path>`,
})
export class MdiEmailEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailEditOutlineIcon],svg[mdi-email-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.07 13.88L13 19.94V22h2.06l6.06-6.07m1.58-2.35l-1.28-1.28a.52.52 0 0 0-.38-.17c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.19-.2.19-.52 0-.72M11 18H4V8l8 5l8-5v2h2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7zm9-12l-8 5l-8-5z"></svg:path>`,
})
export class MdiEmailEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailFastIcon],svg[mdi-email-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 3.67l-6.5 3.33L9 9.17V7.5l6.5 3.31L22 7.5zM5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4zM3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1"></svg:path>`,
})
export class MdiEmailFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailFastOutlineIcon],svg[mdi-email-fast-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17zm-6.5-5.69L9 7.5h13zM5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4zM3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1"></svg:path>`,
})
export class MdiEmailFastOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailHeartOutlineIcon],svg[mdi-email-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9c-1.1 0-2 .92-2 2.05c0 .57.22 1.07.59 1.45L12 16l3.42-3.5c.36-.37.58-.89.58-1.45C16 9.92 15.1 9 14 9c-.54 0-1.05.23-1.41.6l-.59.6l-.58-.59A2 2 0 0 0 10 9m10-5c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm-3.3 4.06L20 6H4l3.3 2.06c-.41.39-.75.86-.97 1.39L4 8v10h16V8l-2.33 1.45c-.22-.53-.56-1-.97-1.39"></svg:path>`,
})
export class MdiEmailHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailLockIcon],svg[mdi-email-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.2c0-.96.5-1.86 1.2-2.46v-.24c0-2.44 2.2-4.5 4.8-4.5c1.65 0 3.13.83 4 2.06V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h8zM4 6l8 5l8-5v2l-8 5l-8-5zm16.8 11v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z"></svg:path>`,
})
export class MdiEmailLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailLockOutlineIcon],svg[mdi-email-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.2V18H4V8l8 5l8-5v3.44c.81.36 1.5.92 2 1.62V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8zM20 6l-8 5l-8-5zm.8 11v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z"></svg:path>`,
})
export class MdiEmailLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailMarkAsUnreadIcon],svg[mdi-email-mark-as-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.84 7h-2.62L10.5 4L4 7.41V17a2 2 0 0 1-2-2V7.17c0-.67.28-1.11.81-1.36L10.5 2l7.55 3.81c.45.28.73.69.79 1.19M7 8h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2m13 3.67V10l-6.5 3.31L7 10v1.67L13.5 15z"></svg:path>`,
})
export class MdiEmailMarkAsUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailMinusIcon],svg[mdi-email-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5zm19 10v2h-8v-2z"></svg:path>`,
})
export class MdiEmailMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailMinusOutlineIcon],svg[mdi-email-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-.34.04-.67.09-1H4V8l8 5l8-5v5.09c.72.12 1.39.37 2 .72V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9.09c-.05-.33-.09-.66-.09-1m7-13l-8 5l-8-5zm3 12v2h-8v-2z"></svg:path>`,
})
export class MdiEmailMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailMultipleIcon],svg[mdi-email-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6V4l-8 5l-8-5v2l8 5zm0-4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2zM2 6v14h18v2H2a2 2 0 0 1-2-2V6z"></svg:path>`,
})
export class MdiEmailMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailMultipleOutlineIcon],svg[mdi-email-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v14h18v2H2c-1.105 0-2-.89-2-2V6zm22-2c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H6V6l8 5l8-5z"></svg:path>`,
})
export class MdiEmailMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailNewsletterIcon],svg[mdi-email-newsletter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .64L8.23 3H5v2L2.97 6.29C2.39 6.64 2 7.27 2 8v10a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V8c0-.73-.39-1.36-.97-1.71L19 5V3h-3.23M7 5h10v4.88L12 13L7 9.88M8 6v1.5h8V6M5 7.38v1.25L4 8m15-.62L20 8l-1 .63M8 8.5V10h8V8.5Z"></svg:path>`,
})
export class MdiEmailNewsletterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailOffIcon],svg[mdi-email-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l1.5 1.5Q2 5.1 2 6v12c0 1.1.9 2 2 2h14.1l2.7 2.7zM4 8V6l.3.2l5.3 5.3zm9.4 2.2L7.2 4H20c1.1 0 2 .9 2 2v12c0 .2 0 .5-.1.7l-7.3-7.3L20 8V6z"></svg:path>`,
})
export class MdiEmailOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailOffOutlineIcon],svg[mdi-email-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l1.5 1.5c-.3.4-.6.9-.6 1.5v12c0 1.1.9 2 2 2h14.1l2.7 2.7zM4 18V8l5.6 3.5l6.5 6.5zM9.2 6l-2-2H20c1.1 0 2 .9 2 2v12c0 .2 0 .5-.1.7L20 16.8V8l-5.4 3.4l-1.2-1.2L20 6z"></svg:path>`,
})
export class MdiEmailOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailOpenIcon],svg[mdi-email-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 8l8 5l8-5l-8-5zm18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71"></svg:path>`,
})
export class MdiEmailOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailOpenHeartOutlineIcon],svg[mdi-email-open-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9c-1.1 0-2 .92-2 2.05c0 .57.22 1.07.59 1.45L12 16l3.42-3.5c.36-.37.58-.89.58-1.45C16 9.92 15.1 9 14 9c-.54 0-1.05.23-1.41.6l-.59.6l-.58-.59A2 2 0 0 0 10 9m2-8.36l9.03 5.65c.58.35.97.98.97 1.71v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-.73.39-1.36.97-1.71zM4 10v8h16v-8l-2 1.25v-.2c0-.55-.12-1.1-.33-1.6L20 8l-8-5l-8 5l2.33 1.45c-.21.5-.33 1.05-.33 1.6v.2z"></svg:path>`,
})
export class MdiEmailOpenHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailOpenMultipleIcon],svg[mdi-email-open-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 8l8 5l8-5l-8-5zm18 0v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8c0-.73.39-1.36.97-1.71L14 .64l9.03 5.65c.58.35.97.98.97 1.71M2 8v14h18v2H2a2 2 0 0 1-2-2V8z"></svg:path>`,
})
export class MdiEmailOpenMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailOpenMultipleOutlineIcon],svg[mdi-email-open-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8v14h18v2H2c-1.105 0-2-.89-2-2V8zm21.03-1.71L14 .64L4.97 6.29C4.39 6.64 4 7.27 4 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-.73-.39-1.36-.97-1.71M22 18H6v-8l8 5l8-5zm-8-5L6 8l8-5l8 5z"></svg:path>`,
})
export class MdiEmailOpenMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailOpenOutlineIcon],svg[mdi-email-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.03 6.29L12 .64L2.97 6.29C2.39 6.64 2 7.27 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-.73-.39-1.36-.97-1.71M20 18H4v-8l8 5l8-5zm-8-5L4 8l8-5l8 5z"></svg:path>`,
})
export class MdiEmailOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailOutlineIcon],svg[mdi-email-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></svg:path>`,
})
export class MdiEmailOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailPlusIcon],svg[mdi-email-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5zm16 7v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class MdiEmailPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailPlusOutlineIcon],svg[mdi-email-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-.34.04-.67.09-1H4V8l8 5l8-5v5.09c.72.12 1.39.37 2 .72V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9.09c-.05-.33-.09-.66-.09-1m7-13l-8 5l-8-5zm0 9v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class MdiEmailPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailRemoveIcon],svg[mdi-email-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41zM13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h16a2 2 0 0 1 2 2v7.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m7-11V6l-8 5l-8-5v2l8 5z"></svg:path>`,
})
export class MdiEmailRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailRemoveOutlineIcon],svg[mdi-email-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 18H4V8l8 5l8-5v5.09c.72.12 1.39.37 2 .72V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9.09c-.05-.33-.09-.66-.09-1s.04-.67.09-1M20 6l-8 5l-8-5zm.41 13l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41z"></svg:path>`,
})
export class MdiEmailRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailSealIcon],svg[mdi-email-seal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 13.3c-.3-.9-.1-1.6 0-2c-.1-.4-.3-1-.1-1.9c.3-.8.8-1.2 1.1-1.5c.1-.4.3-1 1.1-1.6c.7-.5 1.4-.5 1.8-.5c.1-.1.3-.2.5-.3V2.6c.1-.9-.6-1.6-1.5-1.6H2.6C1.7 1 1 1.7 1 2.6v9.8c0 .9.7 1.6 1.6 1.6h10.3c-.2-.2-.3-.4-.4-.7M3 5V3l6 3l6-3v2L9 8zm19.6 4.9c-.2-.6-.7-.7-1-1c-.2-.3-.2-.9-.7-1.2c-.5-.4-1-.2-1.4-.3s-.7-.6-1.3-.6s-.9.4-1.3.6c-.4.1-.9-.1-1.4.3c-.5.3-.4.8-.7 1.2c-.3.3-.8.5-1 1c-.2.6.2 1 .2 1.4s-.4.8-.2 1.4s.7.7 1 1c.2.3.2.9.7 1.2c.5.4 1 .2 1.4.3s.7.6 1.3.6s.9-.4 1.3-.6c.4-.1.9.1 1.4-.3s.5-.9.7-1.2c.3-.3.8-.5 1-1c.2-.6-.2-1-.2-1.4s.4-.8.2-1.4m-4.4 4.5c-1.7 0-3-1.4-3-3s1.4-3 3-3s3 1.4 3 3s-1.3 3-3 3m1.5-3.1c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5m-.2 5.8l-.5 2.7l-.6 3.1l-2-1.9l-2.4 1.1l1-5.7c.4.2.9.3 1.4.3c.3.2.7.4 1 .5c.2.1.5.1.8.1c.5.1.9 0 1.3-.2m3.2 2.4l-2-.7l.4-2.2l.6-.3l.1-.1z"></svg:path>`,
})
export class MdiEmailSealIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailSealOutlineIcon],svg[mdi-email-seal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 13.3c-.2-.5-.2-.9-.1-1.3H3V4.5l6 4l6-4v1.7c.6-.3 1.1-.3 1.4-.3c.1-.1.3-.2.5-.3v-3c.1-.9-.6-1.6-1.5-1.6H2.6C1.7 1 1 1.7 1 2.6v9.8c0 .9.7 1.6 1.6 1.6h10.3c-.2-.2-.3-.4-.4-.7M15 3L9 7L3 3zm7.6 6.9c-.2-.6-.7-.7-1-1c-.2-.3-.2-.9-.7-1.2c-.5-.4-1-.2-1.4-.3s-.7-.6-1.3-.6s-.9.4-1.3.6c-.4.1-.9-.1-1.4.3c-.5.3-.4.8-.7 1.2c-.3.3-.8.5-1 1c-.2.6.2 1 .2 1.4s-.4.8-.2 1.4s.7.7 1 1c.2.3.2.9.7 1.2c.5.4 1 .2 1.4.3s.7.6 1.3.6s.9-.4 1.3-.6c.4-.1.9.1 1.4-.3s.5-.9.7-1.2c.3-.3.8-.5 1-1c.2-.6-.2-1-.2-1.4s.4-.8.2-1.4m-4.4 4.5c-1.7 0-3-1.4-3-3s1.4-3 3-3s3 1.4 3 3s-1.3 3-3 3m1.5-3.1c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5m-.2 5.8l-.5 2.7l-.6 3.1l-2-1.9l-2.4 1.1l1-5.7c.4.2.9.3 1.4.3c.3.2.7.4 1 .5c.2.1.5.1.8.1c.5.1.9 0 1.3-.2m3.2 2.4l-2-.7l.4-2.2l.6-.3l.1-.1z"></svg:path>`,
})
export class MdiEmailSealOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailSearchIcon],svg[mdi-email-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h16a2 2 0 0 1 2 2v4.82c-1-.97-2.3-1.59-3.69-1.76L19 8V6l-8 5l-8-5v2l7.62 4.76c-.41.86-.62 1.79-.62 2.74a6.5 6.5 0 0 0 1.81 4.5H3a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2m13.5 7c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L22 22.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"></svg:path>`,
})
export class MdiEmailSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailSearchOutlineIcon],svg[mdi-email-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L22 22.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5m-6 5H3V8l7.62 4.76A6.49 6.49 0 0 1 16.5 9c.27 0 .54 0 .81.06L19 8v1.5c.75.31 1.42.77 2 1.32V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8.82c-.55-.58-1-1.25-1.32-2M19 6l-8 5l-8-5z"></svg:path>`,
})
export class MdiEmailSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailSyncIcon],svg[mdi-email-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h10.5a6.5 6.5 0 0 1-.5-2.5a6.5 6.5 0 0 1 6.5-6.5a6.5 6.5 0 0 1 1.5.18V6a2 2 0 0 0-2-2zm0 2l8 5l8-5v2l-8 5l-8-5zm16 6l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4zm-3.33 3.29c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5V20a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12z"></svg:path>`,
})
export class MdiEmailSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailSyncOutlineIcon],svg[mdi-email-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10.5a6.5 6.5 0 0 1-.5-2H3V8l8 5l8-5v3a7 7 0 0 1 .5 0a6.5 6.5 0 0 1 1.5.18V6c0-1.1-.9-2-2-2zm0 2h16l-8 5zm16 6l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4zm-3.33 3.29c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5V20a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12z"></svg:path>`,
})
export class MdiEmailSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmailVariantIcon],svg[mdi-email-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13L2 6.76V6c0-1.11.89-2 2-2h16a2 2 0 0 1 2 2v.75zm10 5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.11l2 1.25V18h16v-7.64l2-1.25z"></svg:path>`,
})
export class MdiEmailVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmberIcon],svg[mdi-ember-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14.22s-4.39 3.13-7.28 3.17c-2.88.05-2.59-1.83-2.59-1.83s10.58-3.62 7.7-10.77c-1.3-1.84-2.83-2.42-4.94-2.37c-2.13.04-4.72 1.34-6.43 5.18c-.82 1.84-1.05 3.58-1.22 4.9c0 0-1.92.38-2.92-.46s-1.55 0-1.55 0s-1.74 2.16-.02 2.83c1.71.67 4.37.95 4.37.95c.24 1.18.96 3.18 3.05 4.78c3.13 2.4 9.15-.2 9.15-.2m-7.69-8.07c.13-4.97 3.37-7.15 4.52-6.06c1.12 1.09.71 3.43-1.43 4.89c-2.13 1.47-3.09 1.17-3.09 1.17"></svg:path>`,
})
export class MdiEmberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmbyIcon],svg[mdi-emby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2L6 7l1 1l-5 5l5 5l1-1l5 5l5-5l-1-1l5-5l-5-5l-1 1zm-1 6.5l6 3.5l-6 3.5z"></svg:path>`,
})
export class MdiEmbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonIcon],svg[mdi-emoticon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m3.5 6A1.5 1.5 0 0 1 17 9.5a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 14 9.5A1.5 1.5 0 0 1 15.5 8m-7 0A1.5 1.5 0 0 1 10 9.5A1.5 1.5 0 0 1 8.5 11A1.5 1.5 0 0 1 7 9.5A1.5 1.5 0 0 1 8.5 8m3.5 9.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.81 2.04-2.78 3.5-5.11 3.5"></svg:path>`,
})
export class MdiEmoticonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonAngryIcon],svg[mdi-emoticon-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 9.5V8l3 1.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5m7.77 7.73C14.32 16.5 13.25 16 12 16s-2.32.5-2.77 1.23l-1.42-1.42C8.71 14.72 10.25 14 12 14s3.29.72 4.19 1.81zM17 9.5c0 .8-.7 1.5-1.5 1.5S14 10.3 14 9.5L17 8z"></svg:path>`,
})
export class MdiEmoticonAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonAngryOutlineIcon],svg[mdi-emoticon-angry-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-6c1.75 0 3.29.72 4.19 1.81l-1.42 1.42C14.32 16.5 13.25 16 12 16s-2.32.5-2.77 1.23l-1.42-1.42C8.71 14.72 10.25 14 12 14m-2-4.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5V8zm7 0c0 .8-.7 1.5-1.5 1.5S14 10.3 14 9.5L17 8z"></svg:path>`,
})
export class MdiEmoticonAngryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonConfusedIcon],svg[mdi-emoticon-confused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2M8.5 8A1.5 1.5 0 1 1 7 9.5A1.54 1.54 0 0 1 8.5 8m8.5 8h-4a4 4 0 0 0-3.47 2L7.8 17a6 6 0 0 1 5.2-3h4m-1.5-3A1.5 1.5 0 1 1 17 9.5a1.54 1.54 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiEmoticonConfusedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonConfusedOutlineIcon],svg[mdi-emoticon-confused-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 0-8 8a8 8 0 0 0 8-8m2 0A10 10 0 1 1 12 2a10 10 0 0 1 10 10m-6.5-4A1.5 1.5 0 1 1 14 9.5A1.54 1.54 0 0 1 15.5 8M10 9.5A1.5 1.5 0 1 1 8.5 8A1.54 1.54 0 0 1 10 9.5m7 5.5h-4a4 4 0 0 0-3.47 2L7.8 16a6 6 0 0 1 5.2-3h4Z"></svg:path>`,
})
export class MdiEmoticonConfusedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonCoolIcon],svg[mdi-emoticon-cool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.22 7.22A9.98 9.98 0 0 1 12 2c3.79 0 7.09 2.11 8.78 5.22L20 8H4zM21.4 8.6c.38 1.07.6 2.21.6 3.4a10 10 0 0 1-10 10A10 10 0 0 1 2 12c0-1.19.22-2.33.6-3.4L4 10h1c0 1.38 2.12 2.5 3.5 2.5s2.75-1.12 2.75-2.5h1.5c0 1.38 1.37 2.5 2.75 2.5S19 11.38 19 10h1zm-5.21 6.82L14.77 14c-.45.72-1.52 1.23-2.77 1.23S9.68 14.72 9.23 14l-1.42 1.42c.9 1.08 2.44 1.81 4.19 1.81s3.29-.73 4.19-1.81"></svg:path>`,
})
export class MdiEmoticonCoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonCoolOutlineIcon],svg[mdi-emoticon-cool-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10c0 1.38-2.12 2.5-3.5 2.5s-2.75-1.12-2.75-2.5h-1.5c0 1.38-1.37 2.5-2.75 2.5S5 11.38 5 10h-.75c-.16.64-.25 1.31-.25 2a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-.69-.09-1.36-.25-2zm-7-6C9.04 4 6.45 5.61 5.07 8h13.86C17.55 5.61 14.96 4 12 4m10 8a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-10 5.23c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81"></svg:path>`,
})
export class MdiEmoticonCoolOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonCryIcon],svg[mdi-emoticon-cry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.14 17.57c0-1.07 1.18-3.07 2.43-4.76C8.82 14.5 10 16.5 10 17.57A2.43 2.43 0 0 1 7.57 20c-1.34 0-2.43-1.09-2.43-2.43M22 12a10 10 0 0 1-10 10c-.92 0-1.82-.14-2.67-.37A4.42 4.42 0 0 0 12 17.57c0-.45-.11-.97-.31-1.57H12c1.25 0 2.32.5 2.77 1.23l1.42-1.42C15.29 14.72 13.75 14 12 14c-.41 0-.81.04-1.19.12c-.43-.76-.96-1.59-1.62-2.49L8.71 11c.71-.13 1.29-.77 1.29-1.5C10 8.7 9.3 8 8.5 8S7 8.7 7 9.5c0 .19.04.37.11.54l-1.15 1.59C4.4 13.75 3.5 15.5 3.23 16.81C2.45 15.38 2 13.74 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-5-2.5c0-.8-.7-1.5-1.5-1.5S14 8.7 14 9.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiEmoticonCryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonCryOutlineIcon],svg[mdi-emoticon-cry-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.57 20c-1.34 0-2.43-1.09-2.43-2.43c0-1.07 1.18-3.07 2.43-4.76C8.82 14.5 10 16.5 10 17.57A2.43 2.43 0 0 1 7.57 20M12 2A10 10 0 0 0 2 12c0 1.75.45 3.38 1.24 4.81c.16-.81.57-1.74 1.07-2.64A7.7 7.7 0 0 1 4 12a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8c-.24 0-.47 0-.71-.04c-.47.74-1.15 1.32-1.95 1.67c.85.24 1.74.37 2.66.37a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 12c-.41 0-.81.04-1.19.12c.35.63.66 1.28.88 1.88H12c1.25 0 2.32.5 2.77 1.23l1.42-1.42C15.29 14.72 13.75 14 12 14m3.5-6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5S16.3 8 15.5 8M10 9.5C10 8.7 9.3 8 8.5 8S7 8.7 7 9.5S7.7 11 8.5 11s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiEmoticonCryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonDeadIcon],svg[mdi-emoticon-dead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10M6.76 8.82l1.06-1.06l1.06 1.06l1.06-1.06L11 8.82L9.94 9.88L11 10.94L9.94 12l-1.06-1.06L7.82 12l-1.06-1.06l1.06-1.06zm.13 8.68C7.69 15.46 9.67 14 12 14s4.31 1.46 5.11 3.5zm10.35-6.56L16.18 12l-1.06-1.06L14.06 12L13 10.94l1.06-1.06L13 8.82l1.06-1.06l1.06 1.06l1.06-1.06l1.06 1.06l-1.06 1.06z"></svg:path>`,
})
export class MdiEmoticonDeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonDeadOutlineIcon],svg[mdi-emoticon-dead-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m4.18-12.24l-1.06 1.06l-1.06-1.06L13 8.82l1.06 1.06L13 10.94L14.06 12l1.06-1.06L16.18 12l1.06-1.06l-1.06-1.06l1.06-1.06zM7.82 12l1.06-1.06L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82l1.06 1.06l-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5"></svg:path>`,
})
export class MdiEmoticonDeadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonDevilIcon],svg[mdi-emoticon-devil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 2.09c-.9.91-2.37 1.64-4.19 2.16A9.92 9.92 0 0 0 12 2c-2.39 0-4.59.84-6.31 2.25C3.87 3.73 2.4 3 1.5 2.09c.03 1.63.85 3.12 2.22 4.31A9.9 9.9 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-2.08-.63-4-1.72-5.6c1.37-1.19 2.19-2.68 2.22-4.31M7.5 8.5l3 1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5zm4.5 8.73c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81M16.5 10c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5l3-1.5z"></svg:path>`,
})
export class MdiEmoticonDevilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonDevilOutlineIcon],svg[mdi-emoticon-devil-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2.09c.9.91 2.37 1.64 4.19 2.16A9.92 9.92 0 0 1 12 2c2.39 0 4.59.84 6.31 2.25C20.13 3.73 21.6 3 22.5 2.09c-.03 1.63-.85 3.12-2.22 4.31A9.9 9.9 0 0 1 22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12c0-2.08.63-4 1.72-5.6C2.35 5.21 1.53 3.72 1.5 2.09M20 12a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8m-9.5-2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V8.5zm6 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5l3-1.5zM12 17.23c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81"></svg:path>`,
})
export class MdiEmoticonDevilOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonExcitedIcon],svg[mdi-emoticon-excited-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10M8.88 7.82L11 9.94L9.94 11L8.88 9.94L7.82 11L6.76 9.94zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5m4.18-6.5l-1.06-1.06L14.06 11L13 9.94l2.12-2.12l2.12 2.12z"></svg:path>`,
})
export class MdiEmoticonExcitedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonExcitedOutlineIcon],svg[mdi-emoticon-excited-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06l-2.12-2.12zm-4.12 0L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5"></svg:path>`,
})
export class MdiEmoticonExcitedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonFrownIcon],svg[mdi-emoticon-frown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.5 2 12s4.47 10 10 10c5.5 0 10-4.5 10-10S17.5 2 12 2m3.5 6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11S7 10.33 7 9.5S7.67 8 8.5 8m-1.61 9c.8-2.04 2.78-3.5 5.11-3.5s4.31 1.46 5.11 3.5z"></svg:path>`,
})
export class MdiEmoticonFrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonFrownOutlineIcon],svg[mdi-emoticon-frown-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.5 2 12s4.47 10 10 10c5.5 0 10-4.5 10-10S17.5 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8S14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8S7 8.67 7 9.5S7.67 11 8.5 11m3.5 2.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5"></svg:path>`,
})
export class MdiEmoticonFrownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonHappyIcon],svg[mdi-emoticon-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 9.5C7 8.7 7.7 8 8.5 8s1.5.7 1.5 1.5S9.3 11 8.5 11S7 10.3 7 9.5m5 7.73c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81M15.5 11c-.8 0-1.5-.7-1.5-1.5S14.7 8 15.5 8s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"></svg:path>`,
})
export class MdiEmoticonHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonHappyOutlineIcon],svg[mdi-emoticon-happy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8m2 0a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M10 9.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5S7.7 8 8.5 8s1.5.7 1.5 1.5m7 0c0 .8-.7 1.5-1.5 1.5S14 10.3 14 9.5S14.7 8 15.5 8s1.5.7 1.5 1.5m-5 7.73c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81"></svg:path>`,
})
export class MdiEmoticonHappyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonKissIcon],svg[mdi-emoticon-kiss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.9 18.94L15.94 16c-.18-.21-.39-.5-.39-.95a1.3 1.3 0 0 1 1.3-1.3c.34 0 .68.14.92.4l1.14 1.11l1.12-1.13c.24-.24.58-.38.92-.38a1.3 1.3 0 0 1 1.3 1.3c0 .34-.14.68-.38.92zm-1.44.68A9.93 9.93 0 0 1 11 22A10 10 0 0 1 1 12A10 10 0 0 1 11 2a10 10 0 0 1 10 10c0 .09 0 .17-.05.25c-.74 0-1.45.3-1.98.82l-.07.07l-.06-.05a2.76 2.76 0 0 0-1.99-.84a2.8 2.8 0 0 0-2.8 2.8c0 .73.29 1.45.82 1.98zM13 9.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5S15.3 8 14.5 8S13 8.7 13 9.5m-4 0C9 8.7 8.3 8 7.5 8S6 8.7 6 9.5S6.7 11 7.5 11S9 10.3 9 9.5m3.94 5.68L14 14.12L11.88 12l-1.06 1.06l1.06 1.06l-1.06 1.06l1.06 1.06l-1.06 1.06l1.06 1.06L14 16.24z"></svg:path>`,
})
export class MdiEmoticonKissIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonKissOutlineIcon],svg[mdi-emoticon-kiss-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9.5c0 .8-.7 1.5-1.5 1.5S6 10.3 6 9.5S6.7 8 7.5 8S9 8.7 9 9.5m7 0c0 .8-.7 1.5-1.5 1.5S13 10.3 13 9.5S13.7 8 14.5 8s1.5.7 1.5 1.5m-2 4.62L11.88 12l-1.06 1.06l1.06 1.06l-1.06 1.06l1.06 1.06l-1.06 1.06l1.06 1.06L14 16.24l-1.06-1.06zM16.85 13a2.05 2.05 0 0 0-2.05 2.05c0 .57.23 1.07.6 1.45l3.5 3.5l3.5-3.5c.37-.37.6-.89.6-1.45A2.05 2.05 0 0 0 20.95 13c-.55 0-1.08.23-1.45.6l-.6.6l-.6-.59c-.37-.38-.9-.61-1.45-.61M15 18.92A8 8 0 0 1 11 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8c4.26 0 7.73 3.33 8 7.5c.58-.31 1.26-.5 1.95-.5c-.5-5.05-4.77-9-9.95-9A10 10 0 0 0 1 12a10 10 0 0 0 10 10c2 0 3.88-.6 5.45-1.62z"></svg:path>`,
})
export class MdiEmoticonKissOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonLolIcon],svg[mdi-emoticon-lol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.07 8.93v-4a4.06 4.06 0 0 1 .66-2.21a10 10 0 0 0-13 13a4.06 4.06 0 0 1 2.21-.66h4v4a4.06 4.06 0 0 1-.66 2.21a10 10 0 0 0 13-13a4.06 4.06 0 0 1-2.21.66M11 6h1.5v1.5H14V9h-3m-3.5 5v-1.5H6V11h3v3m6.89 1.9A5.5 5.5 0 0 1 9.8 17L17 9.8a5.5 5.5 0 0 1-1.11 6.09m-11 5.19a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2a2 2 0 0 1-1.96 1.99M19.07 2.93a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2v-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiEmoticonLolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonLolOutlineIcon],svg[mdi-emoticon-lol-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11v1.5h1.5V14H9v-3m3.5-5H11v3h3V7.5h-1.5M9.8 17A5.5 5.5 0 0 0 17 9.8M6.34 6.34a8 8 0 0 1 8.74-1.72a4.1 4.1 0 0 1 .65-1.9a10 10 0 0 0-13 13a4.1 4.1 0 0 1 1.9-.65a8 8 0 0 1 1.71-8.73m11.32 11.32a8 8 0 0 1-8.74 1.72a4.1 4.1 0 0 1-.65 1.9a10 10 0 0 0 13-13a4.1 4.1 0 0 1-1.9.65a8 8 0 0 1-1.71 8.73M6 11v1.5h1.5V14H9v-3m.8 6A5.5 5.5 0 0 0 17 9.8M12.5 6H11v3h3V7.5h-1.5M6 11v1.5h1.5V14H9v-3m3.5-5H11v3h3V7.5h-1.5M9.8 17A5.5 5.5 0 0 0 17 9.8M4.93 21a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2a2 2 0 0 1-2 2.07M19.07 2.93a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2v-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiEmoticonLolOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonMinusIcon],svg[mdi-emoticon-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h8v2h-8zM12 2c5.5 0 10 4.5 10 10c0 .59-.05 1.16-.15 1.72C21 13.26 20.03 13 19 13c-1.23 0-2.37.37-3.32 1H6.89c.8 2.04 2.78 3.5 5.11 3.5c.42 0 .83-.05 1.23-.14a5.97 5.97 0 0 0 .49 4.49c-.56.1-1.13.15-1.72.15c-5.5 0-10-4.5-10-10S6.47 2 12 2m3.5 6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S16.33 8 15.5 8m-7 0C7.67 8 7 8.67 7 9.5S7.67 11 8.5 11s1.5-.67 1.5-1.5S9.33 8 8.5 8"></svg:path>`,
})
export class MdiEmoticonMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonMinusOutlineIcon],svg[mdi-emoticon-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h8v2h-8zm-3-.5c-2.33 0-4.31-1.46-5.11-3.5h8.8a5.94 5.94 0 0 0-2.46 3.36c-.4.09-.81.14-1.23.14M8.5 11C7.67 11 7 10.33 7 9.5S7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11m7 0c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M12 20l1.07-.07c.11.68.33 1.33.65 1.92c-.56.1-1.14.15-1.72.15c-5.53 0-10-4.5-10-10S6.47 2 12 2c5.5 0 10 4.5 10 10c0 .59-.05 1.16-.15 1.72c-.59-.32-1.23-.54-1.92-.65L20 12c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8"></svg:path>`,
})
export class MdiEmoticonMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonNeutralIcon],svg[mdi-emoticon-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 9.5A1.5 1.5 0 0 1 8.5 8A1.5 1.5 0 0 1 10 9.5A1.5 1.5 0 0 1 8.5 11A1.5 1.5 0 0 1 7 9.5m9 6.5H8v-2h8zm-.5-5A1.5 1.5 0 0 1 14 9.5A1.5 1.5 0 0 1 15.5 8A1.5 1.5 0 0 1 17 9.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiEmoticonNeutralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonNeutralOutlineIcon],svg[mdi-emoticon-neutral-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m-3.5-9A1.5 1.5 0 0 1 7 9.5A1.5 1.5 0 0 1 8.5 8A1.5 1.5 0 0 1 10 9.5A1.5 1.5 0 0 1 8.5 11M17 9.5a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 14 9.5A1.5 1.5 0 0 1 15.5 8A1.5 1.5 0 0 1 17 9.5M16 14v2H8v-2z"></svg:path>`,
})
export class MdiEmoticonNeutralOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonOutlineIcon],svg[mdi-emoticon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.5c2.33 0 4.3-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5M8.5 11A1.5 1.5 0 0 0 10 9.5A1.5 1.5 0 0 0 8.5 8A1.5 1.5 0 0 0 7 9.5A1.5 1.5 0 0 0 8.5 11m7 0A1.5 1.5 0 0 0 17 9.5A1.5 1.5 0 0 0 15.5 8A1.5 1.5 0 0 0 14 9.5a1.5 1.5 0 0 0 1.5 1.5M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiEmoticonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonPlusIcon],svg[mdi-emoticon-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h3v-3h2v3h3v2h-3v3h-2v-3h-3zM12 2c5.5 0 10 4.5 10 10c0 .59-.05 1.16-.15 1.72C21 13.26 20.03 13 19 13c-1.23 0-2.37.37-3.32 1H6.89c.8 2.04 2.78 3.5 5.11 3.5c.42 0 .83-.05 1.23-.14a5.97 5.97 0 0 0 .49 4.49c-.56.1-1.13.15-1.72.15c-5.5 0-10-4.5-10-10S6.47 2 12 2m3.5 6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S16.33 8 15.5 8m-7 0C7.67 8 7 8.67 7 9.5S7.67 11 8.5 11s1.5-.67 1.5-1.5S9.33 8 8.5 8"></svg:path>`,
})
export class MdiEmoticonPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonPlusOutlineIcon],svg[mdi-emoticon-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h3v-3h2v3h3v2h-3v3h-2v-3h-3zm-3-.5c-2.33 0-4.31-1.46-5.11-3.5h8.8a5.94 5.94 0 0 0-2.46 3.36c-.4.09-.81.14-1.23.14M8.5 11C7.67 11 7 10.33 7 9.5S7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11m7 0c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M12 20l1.07-.07c.11.68.33 1.33.65 1.92c-.56.1-1.14.15-1.72.15c-5.53 0-10-4.5-10-10S6.47 2 12 2c5.5 0 10 4.5 10 10c0 .59-.05 1.16-.15 1.72c-.59-.32-1.23-.54-1.92-.65L20 12c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8"></svg:path>`,
})
export class MdiEmoticonPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonPoopIcon],svg[mdi-emoticon-poop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.36 2c-.21 0-.49.12-.79.32C10 2.7 8.85 3.9 8.4 5.1c-.34.9-.35 1.72-.21 2.33c-.56.1-.97.28-1.13.35c-.51.22-1.59 1.18-1.69 2.67c-.03.52.04 1.05.2 1.55c-.66.19-1.04.43-1.07.44c-.32.12-.85.49-1 .69c-.35.4-.58.87-.71 1.37c-.29 1.09-.19 2.33.34 3.33c.29.56.69 1.17 1.13 1.6c1.44 1.48 3.92 2.04 5.88 2.36c2.39.4 4.89.26 7.12-.66c3.35-1.39 4.24-3.63 4.38-4.24c.29-1.39-.07-2.7-.22-3.02c-.22-.46-.58-.93-1.17-1.23c-.4-.25-.75-.38-1.01-.44c.26-.95-.11-1.7-.62-2.26c-.77-.82-1.56-.94-1.56-.94c.26-.5.36-1.1.22-1.68c-.16-.71-.55-1.16-1.06-1.46c-.52-.31-1.16-.46-1.82-.58c-.32-.06-1.65-.25-2.2-1.01c-.45-.62-.46-1.74-.58-2.07c-.05-.13-.12-.2-.26-.2M16 9.61c.07 0 .13.01.19.01c1.43.16 2.45 1.54 2.28 3.07s-1.47 2.65-2.9 2.49c-1.43-.18-2.45-1.53-2.28-3.07c.16-1.45 1.35-2.55 2.71-2.5m-7.38 0c1.33.04 2.44 1.17 2.54 2.6c.12 1.54-.95 2.87-2.38 2.98h-.01c-1.43.11-2.69-1.05-2.81-2.59c-.11-1.54.96-2.87 2.39-2.98c.09-.01.18-.01.27-.01m.02 1.7c-.04 0-.07 0-.11.01c-.56.07-.96.58-.89 1.13a1 1 0 0 0 1.13.87c.56-.07.96-.58.9-1.13a1.01 1.01 0 0 0-1.03-.88m7.3.02c-.52.02-.94.42-.98.95a1 1 0 0 0 .95 1.06a1.008 1.008 0 1 0 .14-2.01zm-7.23 4.82c.29-.01.55.08.79.13c1.18.22 2.2.25 2.69.25s1.5-.03 2.67-.25c.41-.08.88-.25 1.25 0c.48.32.13 1.47-.61 2.25a4.53 4.53 0 0 1-3.31 1.38c-1.78 0-2.86-.91-3.31-1.38c-.74-.78-1.09-1.93-.62-2.25c.14-.09.29-.13.45-.13"></svg:path>`,
})
export class MdiEmoticonPoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonPoopOutlineIcon],svg[mdi-emoticon-poop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.42 13.87c-.22-.46-.58-.93-1.17-1.23c-.4-.25-.75-.38-1.01-.44c.26-.95-.11-1.7-.62-2.26c-.77-.82-1.56-.94-1.56-.94c.26-.5.36-1.1.22-1.68c-.16-.71-.55-1.16-1.06-1.46c-.52-.31-1.16-.46-1.82-.58c-.32-.06-1.65-.25-2.2-1.01c-.45-.62-.46-1.74-.58-2.07c-.05-.13-.12-.2-.26-.2c-.21 0-.49.12-.79.32C10 2.7 8.85 3.9 8.4 5.1c-.34.9-.35 1.72-.21 2.33c-.56.1-.97.28-1.13.35c-.51.22-1.59 1.18-1.69 2.67c-.03.44.04.89.13 1.33v.25c-.62.19-.97.4-1 .41c-.32.12-.85.49-1 .69c-.35.4-.58.87-.71 1.37c-.29 1.09-.19 2.33.34 3.33c.29.56.69 1.17 1.13 1.6c1.44 1.48 3.92 2.04 5.88 2.36c.82.14 1.66.21 2.49.21c1.59 0 3.17-.27 4.63-.87c3.35-1.39 4.24-3.63 4.38-4.24c.29-1.39-.07-2.7-.22-3.02m-5.37-2.54a1.008 1.008 0 1 1-.14 2.01a1 1 0 0 1-.95-1.06c.04-.53.46-.93.98-.95zm4.13 5.22c-.01.02-.48 1.95-3.49 3.19c-1.22.51-2.59.76-4.06.76c-.73 0-1.49-.06-2.25-.19c-1.62-.26-3.88-.75-5.07-1.95c-.27-.27-.59-.73-.85-1.23c-.34-.63-.42-1.48-.22-2.25c.08-.3.21-.56.39-.76l.02-.03c.09-.09.3-.21.38-.25l.11-.04l.12-.06c.06-.04.2-.11.41-.19c.46 1.26 1.61 2.15 2.92 2.15c.08 0 .15-.01.23-.01a2.97 2.97 0 0 0 2.12-1.14c.53-.66.79-1.51.72-2.38c-.12-1.67-1.44-3.01-3.02-3.06h-.02c-.12 0-.22 0-.31.01c-.31.03-.58.11-.85.22c.09-.1.17-.17.2-.19c.13-.05.41-.15.79-.24L10 8.63l-.35-1.54c-.04-.19-.12-.74.16-1.46c.15-.43.46-.87.77-1.25c.1.27.23.53.42.77c.77 1.08 2.12 1.43 3.06 1.59l.07.02c.47.08 1 .19 1.33.39c.21.13.3.26.36.52c.05.2.02.43-.09.64l-.52.89c-1.26.3-2.26 1.44-2.42 2.86c-.2 1.81.99 3.4 2.71 3.62c.12.01.24.02.35.02c.71 0 1.4-.26 1.97-.75c.41-.36.72-.82.92-1.33l.16.04c.1.02.27.08.55.25l.05.04l.07.05c.21.08.37.26.48.5c.08.17.33 1.1.13 2.05m-12.54-4.1c-.07-.55.33-1.06.89-1.13c.04-.01.07-.01.11-.01c.51-.01.97.36 1.03.88c.06.55-.34 1.06-.9 1.13a1 1 0 0 1-1.13-.87m1.07 3.7c.29-.01.55.08.79.13c1.18.22 2.2.25 2.69.25s1.5-.03 2.67-.25c.41-.08.88-.25 1.25 0c.48.32.13 1.47-.61 2.25a4.53 4.53 0 0 1-3.31 1.38c-1.78 0-2.86-.91-3.31-1.38c-.74-.78-1.09-1.93-.62-2.25c.14-.09.29-.13.45-.13"></svg:path>`,
})
export class MdiEmoticonPoopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonRemoveIcon],svg[mdi-emoticon-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.88 15.46L19 17.59l2.12-2.12l1.42 1.41L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.42-1.42L17.59 19l-2.12-2.12zM12 2c5.5 0 10 4.5 10 10c0 .59-.05 1.16-.15 1.72C21 13.26 20.03 13 19 13c-1.23 0-2.37.37-3.32 1H6.89c.8 2.04 2.78 3.5 5.11 3.5c.42 0 .83-.05 1.23-.14a5.97 5.97 0 0 0 .49 4.49c-.56.1-1.13.15-1.72.15c-5.5 0-10-4.5-10-10S6.47 2 12 2m3.5 6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S16.33 8 15.5 8m-7 0C7.67 8 7 8.67 7 9.5S7.67 11 8.5 11s1.5-.67 1.5-1.5S9.33 8 8.5 8"></svg:path>`,
})
export class MdiEmoticonRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonRemoveOutlineIcon],svg[mdi-emoticon-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.88 15.46L19 17.59l2.12-2.12l1.42 1.41L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.42-1.42L17.59 19l-2.12-2.12zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h8.8a5.94 5.94 0 0 0-2.46 3.36c-.4.09-.81.14-1.23.14M8.5 11C7.67 11 7 10.33 7 9.5S7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11m7 0c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M12 20l1.07-.07c.11.68.33 1.33.65 1.92c-.56.1-1.14.15-1.72.15c-5.53 0-10-4.5-10-10S6.47 2 12 2c5.5 0 10 4.5 10 10c0 .59-.05 1.16-.15 1.72c-.59-.32-1.23-.54-1.92-.65L20 12c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8"></svg:path>`,
})
export class MdiEmoticonRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonSadIcon],svg[mdi-emoticon-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 9.5C7 8.7 7.7 8 8.5 8s1.5.7 1.5 1.5S9.3 11 8.5 11S7 10.3 7 9.5m7.77 7.73C14.32 16.5 13.25 16 12 16s-2.32.5-2.77 1.23l-1.42-1.42C8.71 14.72 10.25 14 12 14s3.29.72 4.19 1.81zM15.5 11c-.8 0-1.5-.7-1.5-1.5S14.7 8 15.5 8s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"></svg:path>`,
})
export class MdiEmoticonSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonSadOutlineIcon],svg[mdi-emoticon-sad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8m2 0a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-6.5-4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5M10 9.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5S7.7 8 8.5 8s1.5.7 1.5 1.5m2 4.5c1.75 0 3.29.72 4.19 1.81l-1.42 1.42C14.32 16.5 13.25 16 12 16s-2.32.5-2.77 1.23l-1.42-1.42C8.71 14.72 10.25 14 12 14"></svg:path>`,
})
export class MdiEmoticonSadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonSickIcon],svg[mdi-emoticon-sick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9c-1.1 0-2-.9-2-2s2-4 2-4s2 2.9 2 4s-.9 2-2 2m-3.5-2c0-.73.41-1.71.92-2.66A9.96 9.96 0 0 0 12 2C6.47 2 2 6.5 2 12s4.47 10 10 10c5.5 0 10-4.5 10-10c0-.55-.06-1.09-.14-1.62a3.5 3.5 0 0 1-.86.12c-1.93 0-3.5-1.57-3.5-3.5m-1.88.38l1.06 1.06l-1.06 1.06l1.06 1.06l-1.06 1.06L13.5 9.5zm-8.3 1.06l1.06-1.06L10.5 9.5l-2.12 2.12l-1.06-1.06L8.38 9.5zM15.44 17c-.69-1.19-1.97-2-3.44-2s-2.75.81-3.44 2H6.88c.3-.76.76-1.43 1.34-2l-2.98-1.7c-.45.26-1.01.28-1.49 0a1.501 1.501 0 0 1 1.5-2.6c.48.3.75.8.75 1.3l3.57 2.06c.73-.36 1.55-.56 2.43-.56c2.33 0 4.32 1.45 5.12 3.5z"></svg:path>`,
})
export class MdiEmoticonSickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonSickOutlineIcon],svg[mdi-emoticon-sick-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.32 10.56L8.38 9.5L7.32 8.44l1.06-1.06L10.5 9.5l-2.12 2.12zM4.5 9h.08C5.77 6.07 8.64 4 12 4c2.19 0 4.16.88 5.61 2.3c.15-.6.45-1.3.81-1.96A9.96 9.96 0 0 0 12 2c-4.89 0-8.95 3.5-9.82 8.14C2.74 9.44 3.59 9 4.5 9M21 10.5c-.42 0-.82-.09-1.19-.22c.12.55.19 1.13.19 1.72c0 4.42-3.58 8-8 8c-3.36 0-6.23-2.07-7.42-5H4.5c-.5 0-1.04-.14-1.5-.4c-.32-.18-.59-.42-.82-.7C3.07 18.5 7.11 22 12 22c5.5 0 10-4.5 10-10c0-.55-.06-1.09-.14-1.62a3.5 3.5 0 0 1-.86.12M21 3s-2 2.9-2 4s.9 2 2 2s2-.9 2-2s-2-4-2-4m-5.38 4.38L13.5 9.5l2.12 2.12l1.06-1.06l-1.06-1.06l1.06-1.06zM8.56 17c.69-1.19 1.97-2 3.44-2s2.75.81 3.44 2h1.68c-.8-2.05-2.79-3.5-5.12-3.5c-.87 0-1.7.2-2.43.57L6 12c0-.5-.27-1-.75-1.29c-.72-.41-1.63-.17-2.05.55c-.41.74-.17 1.63.55 2.05c.48.28 1.05.25 1.49 0l2.97 1.72c-.57.53-1.03 1.21-1.33 1.97z"></svg:path>`,
})
export class MdiEmoticonSickOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonTongueIcon],svg[mdi-emoticon-tongue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-4.73 9c-.17-.29-.27-.64-.27-1c0-1.11.89-2 2-2a2 2 0 0 1 2 2c0 .36-.1.71-.27 1c-.34-.6-.99-1-1.73-1s-1.39.4-1.73 1M16 15h-1c0 2-.9 3-2 3s-2-1-2-3H8v-2h8zm.73-4c-.34-.6-.99-1-1.73-1s-1.39.4-1.73 1c-.17-.29-.27-.64-.27-1c0-1.11.89-2 2-2a2 2 0 0 1 2 2c0 .36-.1.71-.27 1"></svg:path>`,
})
export class MdiEmoticonTongueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonTongueOutlineIcon],svg[mdi-emoticon-tongue-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8M9 10c-.74 0-1.39.4-1.73 1c-.17-.29-.27-.64-.27-1a2 2 0 0 1 2-2a2 2 0 0 1 1.73 3c-.34-.6-.99-1-1.73-1m8 0c0 .36-.1.71-.27 1c-.34-.6-.99-1-1.73-1s-1.39.4-1.73 1c-.17-.29-.27-.64-.27-1a2 2 0 0 1 2-2a2 2 0 0 1 2 2m-1 3v2h-1c0 2-.9 3-2 3s-2-1-2-3H8v-2z"></svg:path>`,
})
export class MdiEmoticonTongueOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonWinkIcon],svg[mdi-emoticon-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 9.5C7 8.7 7.7 8 8.5 8s1.5.7 1.5 1.5S9.3 11 8.5 11S7 10.3 7 9.5m5 7.73c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81M17 10h-4V9h4z"></svg:path>`,
})
export class MdiEmoticonWinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonWinkOutlineIcon],svg[mdi-emoticon-wink-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8M10 9.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5S7.7 8 8.5 8s1.5.7 1.5 1.5m2 7.73c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81M17 10h-4V9h4z"></svg:path>`,
})
export class MdiEmoticonWinkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEngineIcon],svg[mdi-engine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"></svg:path>`,
})
export class MdiEngineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEngineOffIcon],svg[mdi-engine-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.78 2.5L21.5 20.22l-1.27 1.28L18 19.27V20h-8l-2-2H5v-3H3v3H1v-8h2v3h2v-3l1.87-1.86L2.5 3.77zM20 9v3h-2V8h-6V6h3V4H7.82l15 15H23V9z"></svg:path>`,
})
export class MdiEngineOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEngineOffOutlineIcon],svg[mdi-engine-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.5 3.77l4.37 4.37L5 10v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-.73l3.23 3.23l1.27-1.28L3.78 2.5zM16 18h-5l-2-2H7v-5l1-1h.73L16 17.27zm7-9v10h-.18L16 12.18V10h-2.18l-6-6H15v2h-3v2h6v4h2V9z"></svg:path>`,
})
export class MdiEngineOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEngineOutlineIcon],svg[mdi-engine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"></svg:path>`,
})
export class MdiEngineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEpsilonIcon],svg[mdi-epsilon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.05 7.78l1.1-1.6S14.91 5 12.77 5c-2.73 0-4.42 1.84-4.42 3.76s1.73 2.93 1.73 2.93S8 12.38 8 15c0 2.63 2.14 4 4.44 4c2.94 0 4.56-1.96 4.56-1.96l-1.4-1.54s-1.46 1.37-3.01 1.37c-1.93 0-2.38-1.18-2.38-1.95c0-1.05.33-2.27 3.62-2.27l-.01-1.88s-3.38.34-3.38-1.99c0-1.57 1.46-1.86 2.2-1.86c1.64 0 2.41.86 2.41.86"></svg:path>`,
})
export class MdiEpsilonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEqualIcon],svg[mdi-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10H5V8h14zm0 6H5v-2h14z"></svg:path>`,
})
export class MdiEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEqualBoxIcon],svg[mdi-equal-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16v-2H7v2zm2-13a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2zm-2 7V8H7v2z"></svg:path>`,
})
export class MdiEqualBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEqualizerIcon],svg[mdi-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20h4V4h-4zm-6 0h4v-8H4zM16 9v11h4V9z"></svg:path>`,
})
export class MdiEqualizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEqualizerOutlineIcon],svg[mdi-equalizer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21H9V3h6zm-4-2h2V5h-2zm-3 2H2V11h6zm-4-2h2v-6H4zm18 2h-6V8h6zm-4-2h2v-9h-2z"></svg:path>`,
})
export class MdiEqualizerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEraserIcon],svg[mdi-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.24 3.56l4.95 4.94c.78.79.78 2.05 0 2.84L12 20.53a4.01 4.01 0 0 1-5.66 0L2.81 17c-.78-.79-.78-2.05 0-2.84l10.6-10.6c.79-.78 2.05-.78 2.83 0M4.22 15.58l3.54 3.53c.78.79 2.04.79 2.83 0l3.53-3.53l-4.95-4.95z"></svg:path>`,
})
export class MdiEraserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEraserVariantIcon],svg[mdi-eraser-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.14 3c-.51 0-1.02.2-1.41.59L2.59 14.73c-.78.77-.78 2.04 0 2.83L5.03 20h7.66l8.72-8.73c.79-.77.79-2.04 0-2.83l-4.85-4.85c-.39-.39-.91-.59-1.42-.59M17 18l-2 2h7v-2"></svg:path>`,
})
export class MdiEraserVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEscalatorIcon],svg[mdi-escalator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-1.05l-12 12H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2h1.29L7 14.29V10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1.29L17.29 4H20a2 2 0 0 1 2 2a2 2 0 0 1-2 2M8.5 5A1.5 1.5 0 0 1 10 6.5A1.5 1.5 0 0 1 8.5 8A1.5 1.5 0 0 1 7 6.5A1.5 1.5 0 0 1 8.5 5"></svg:path>`,
})
export class MdiEscalatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEscalatorBoxIcon],svg[mdi-escalator-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm9.34 3h2.71a2 2 0 0 1 2 2c0 1.11-.89 2-2 2H16l-6 8H7.05a2 2 0 1 1 0-4h1.29z"></svg:path>`,
})
export class MdiEscalatorBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEscalatorDownIcon],svg[mdi-escalator-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-1.05l-12 12H4a2 2 0 1 1 0-4h1.29L7 14.29V10c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1.29L17.29 4H20c1.11 0 2 .89 2 2s-.89 2-2 2M8.5 5c.83 0 1.5.67 1.5 1.5S9.33 8 8.5 8S7 7.33 7 6.5S7.67 5 8.5 5m6.33 12.34l5.51-5.51l1.83 1.83l-5.51 5.51L18.5 21H13v-5.5z"></svg:path>`,
})
export class MdiEscalatorDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEscalatorUpIcon],svg[mdi-escalator-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-1.05l-12 12H4a2 2 0 1 1 0-4h1.29L7 14.29V10c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1.29L17.29 4H20c1.11 0 2 .89 2 2s-.89 2-2 2M8.5 5c.83 0 1.5.67 1.5 1.5S9.33 8 8.5 8S7 7.33 7 6.5S7.67 5 8.5 5m11.67 10.66l-5.51 5.51l-1.83-1.83l5.51-5.51L16.5 12H22v5.5z"></svg:path>`,
})
export class MdiEscalatorUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEslintIcon],svg[mdi-eslint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.95 9.55l3.89-2.25c.1-.05.22-.05.32 0l3.89 2.25c.1.06.16.16.16.27v4.5c0 .11-.06.21-.16.27l-3.89 2.25a.36.36 0 0 1-.32 0l-3.89-2.25a.32.32 0 0 1-.16-.27v-4.5c0-.11.06-.21.16-.27m14.17 2.05c.17.29.17.63 0 .93l-4.65 8.03c-.17.3-.47.44-.82.44h-9.3c-.35 0-.65-.15-.82-.44l-4.65-8.03a.95.95 0 0 1 0-.95L6.53 3.5c.17-.28.47-.5.82-.5h9.3c.35 0 .65.22.82.5zm-3.85 3.9V8.65c0-.12-.07-.23-.18-.29l-5.93-3.41a.33.33 0 0 0-.33 0L5.91 8.36c-.11.06-.18.17-.18.29v6.85c0 .11.07.22.18.28l5.93 3.41c.1.06.23.06.33 0l5.92-3.41a.33.33 0 0 0 .18-.28"></svg:path>`,
})
export class MdiEslintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEtIcon],svg[mdi-et-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 8.78l-1.29-1.56c-.26.2-1.18.78-1.94.78c-.51 0-1.47-.25-2.32-.47C16.39 7.26 15.39 7 14.6 7c-.6 0-1.17.15-1.67.35A3.97 3.97 0 0 0 9 4c-4.42 0-7 3.58-7 8s3.58 7 8 7c2.06 0 3.93-.57 5.34-1.61l-.34 3.9l2 .18l1-11.73c.66.15 1.27.26 1.77.26c1.61 0 3.07-1.09 3.23-1.22M9 6a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4.23C4.8 7.67 6.39 6 9 6m1 11c-3.31 0-6-1.69-6-5h5c1.6 0 2.83-.83 3.5-2.09c.26-.2 1.35-.91 2.1-.91c.34 0 .9.11 1.45.25l-.4 4.64C14.82 15.95 12.6 17 10 17"></svg:path>`,
})
export class MdiEtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEthereumIcon],svg[mdi-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.75l-6.25 10.5L12 16l6.25-3.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25z"></svg:path>`,
})
export class MdiEthereumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEthernetIcon],svg[mdi-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15h2v3h2v-3h2v3h2v-3h2v3h2V9h-4V6H9v3H5v9h2zM4.38 3h15.25A2.37 2.37 0 0 1 22 5.38v14.25A2.37 2.37 0 0 1 19.63 22H4.38A2.37 2.37 0 0 1 2 19.63V5.38C2 4.06 3.06 3 4.38 3"></svg:path>`,
})
export class MdiEthernetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEthernetCableIcon],svg[mdi-ethernet-cable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3v4h2V3zM8 4v7h8V4h-2v4h-4V4zm2 8v10h4V12z"></svg:path>`,
})
export class MdiEthernetCableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEthernetCableOffIcon],svg[mdi-ethernet-cable-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h2v4h-2zM8 4h2v4h4V4h2v7h-3.18L8 6.18zm12 16.72L18.73 22L14 17.27V22h-4v-8.73l-8-8L3.28 4z"></svg:path>`,
})
export class MdiEthernetCableOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEthernetOffIcon],svg[mdi-ethernet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l1.21 1.21c-.2.35-.32.74-.32 1.17v14.25A2.37 2.37 0 0 0 4.38 22h15.25c.15 0 .29 0 .44-.04l.77.77l1.27-1.27zM15 18h-2v-3h-2v3H9v-3H7v3H5V9h2.11L15 16.89zM9.2 6l-3-3h13.43A2.37 2.37 0 0 1 22 5.38V18.8l-3-3V9h-4V6z"></svg:path>`,
})
export class MdiEthernetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEtsyIcon],svg[mdi-etsy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6.72 20.78c1.51-.07 3.35 0 5.15 0c1.85 0 3.75-.12 5.25 0c.6.05 1.16.41 1.65.09c.39-.49.1-1.16.19-1.82c.16-1.27 1.32-2.78-.37-3.1c-.72.66-.24 1.28-.64 2.1c-.5.98-2.27 1.32-3.95 1.45c-1.46.12-4 .26-4.5-.73c-.46-.83-.21-2.12-.21-3.19c0-1.2-.13-2.36.21-3.28c1.82.13 4.2-.61 5.5.2c.87.5.37 1.56 1.38 1.9c.69-.19.32-1.08.28-1.9c-.03-.56-.03-1.31 0-1.93c.03-.84.34-1.81-.56-1.83c-.71.56-.17 1.49-.92 2.01c-.23.17-.75.25-1.1.25c-1.38.17-3.54.05-4.7-.16c-.15-1.68-.14-3.97 0-5.65c.62-.62 2.07-.65 3.04-.64c1.71 0 4.37.15 4.88 1c.28.45.06 1.45.55 1.55c1 .23.51-1.55.56-2.37c.03-.62.3-1.01.18-1.46c-.32-.44-.8-.22-1.09-.18c-3.15.41-7.9.18-11.24.18c-.4 0-1.1-.2-1.38.27c-.2 1.06 1.24.62 1.74 1.19c.17.18.41 1 .46 1.55c.15 1.46 0 3.69 0 5.84c0 2.26.18 4.55 0 5.93c-.08.48-.35 1.25-.46 1.36c-.62.63-2.28-.06-2.12 1.28c.59.39 1.43.13 2.22.09z" fill="currentColor"></svg:path>`,
})
export class MdiEtsyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEvPlugCcs1Icon],svg[mdi-ev-plug-ccs1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 20c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5M18 18.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5m4 1.5c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4s1.8-4 4-4h.3C4.3 14.4 3 11.8 3 9c0-5 4-9 9-9s9 4 9 9c0 2.8-1.3 5.4-3.3 7h.3c2.2 0 4 1.8 4 4m-10-4c3.9 0 7-3.1 7-7s-3.1-7-7-7s-7 3.1-7 7s3.1 7 7 7m8 4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2s.9 2 2 2h12c1.1 0 2-.9 2-2M12.9 6.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8s-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8m-5.4 0c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8s-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8m1.8 3.9c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1s.4-1.2 1-1.2c.7 0 1.2.6 1.2 1.2m4.5 2.5c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8s1.8.8 1.8 1.8m3.2-2.5c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1s.4-1.2 1.1-1.2c.6 0 1.1.6 1.1 1.2"></svg:path>`,
})
export class MdiEvPlugCcs1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEvPlugCcs2Icon],svg[mdi-ev-plug-ccs2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 19c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5M18 17.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5m0-2.5h-.3c2-1.6 3.3-4.2 3.3-7s-1.3-5.4-3.3-7H6.3C4.3 2.6 3 5.2 3 8s1.3 5.4 3.3 7H6c-2.2 0-4 1.8-4 4s1.8 4 4 4h12c2.2 0 4-1.8 4-4s-1.8-4-4-4M5 8c0-1.9.8-3.7 2.1-5h9.8C18.2 4.3 19 6.1 19 8c0 3.9-3.1 7-7 7s-7-3.1-7-7m13 13H6c-1.1 0-2-.9-2-2s.9-2 2-2h12c1.1 0 2 .9 2 2s-.9 2-2 2M12.9 5.3c0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3S14.9 4 14.1 4c-.7 0-1.2.6-1.2 1.3m-4.3 0c0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3S10.6 4 9.9 4c-.8 0-1.3.6-1.3 1.3M7.7 10c1 0 1.7-.8 1.7-1.7s-.8-1.7-1.7-1.7S6 7.3 6 8.3c0 .9.8 1.7 1.7 1.7m3.9 1.7c0-.9-.8-1.7-1.7-1.7c-1 0-1.7.8-1.7 1.7c0 1 .8 1.7 1.7 1.7s1.7-.7 1.7-1.7M12 10c1 0 1.7-.8 1.7-1.7s-.8-1.7-1.7-1.7s-1.7.8-1.7 1.7s.8 1.7 1.7 1.7m3.9 1.7c0-.9-.8-1.7-1.7-1.7c-1 0-1.7.8-1.7 1.7c0 1 .8 1.7 1.7 1.7s1.7-.7 1.7-1.7M18 8.3c0-.9-.8-1.7-1.7-1.7c-1 0-1.7.8-1.7 1.7c0 1 .8 1.7 1.7 1.7S18 9.2 18 8.3"></svg:path>`,
})
export class MdiEvPlugCcs2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEvPlugChademoIcon],svg[mdi-ev-plug-chademo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 9.5C6.1 9.5 5 10.6 5 12s1.1 2.5 2.5 2.5S10 13.4 10 12S8.9 9.5 7.5 9.5m9 0c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5S19 13.4 19 12s-1.1-2.5-2.5-2.5M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8s-8-3.6-8-8s3.6-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 3c-1.4 0-2.5 1.1-2.5 2.5S10.6 10 12 10s2.5-1.1 2.5-2.5S13.4 5 12 5m1.5 2.5c0 .2-.1.4-.2.6l-.6-.6l.6-.6c.1.2.2.4.2.6m-.9-1.3l-.6.6l-.6-.6c.2-.1.4-.2.6-.2s.4.1.6.2m-1.9 1.9c-.1-.2-.2-.4-.2-.6s.1-.4.2-.6l.6.6zm.7.7l.6-.6l.6.6c-.2.1-.4.2-.6.2s-.4-.1-.6-.2M12 14c-1.4 0-2.5 1.1-2.5 2.5S10.6 19 12 19s2.5-1.1 2.5-2.5S13.4 14 12 14m1.5 2.5c0 .2-.1.4-.2.6l-.6-.6l.6-.6c.1.2.2.4.2.6m-.9-1.3l-.6.6l-.6-.6c.2-.1.4-.2.6-.2s.4.1.6.2m-1.9 1.9c-.1-.2-.2-.4-.2-.6s.1-.4.2-.6l.6.6zm.7.7l.6-.6l.6.6c-.2.1-.4.2-.6.2s-.4-.1-.6-.2"></svg:path>`,
})
export class MdiEvPlugChademoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEvPlugTeslaIcon],svg[mdi-ev-plug-tesla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m11 1c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m5-.07V11a9 9 0 0 1-9 9h-2c-4.97 0-9-4-9-9V9.93C2 6.65 4.65 4 7.93 4h8.14C19.35 4 22 6.65 22 9.93M14.5 9a2.5 2.5 0 0 0 5 0a2.5 2.5 0 0 0-5 0m-10 0a2.5 2.5 0 0 0 5 0a2.5 2.5 0 0 0-5 0M9 17c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1m4.5 0c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5m3.5 0c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1m2.97-5.34C19.23 12.5 18.18 13 17 13c-2.21 0-4-1.79-4-4c0-1.2.54-2.27 1.38-3H9.62c.84.73 1.38 1.8 1.38 3c0 2.21-1.79 4-4 4a3.9 3.9 0 0 1-2.97-1.34c.16 1.66.9 3.16 2.01 4.28C7.71 14.73 9.76 14 12 14s4.29.73 5.96 1.94a7.04 7.04 0 0 0 2.01-4.28"></svg:path>`,
})
export class MdiEvPlugTeslaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEvPlugType1Icon],svg[mdi-ev-plug-type1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9c0 1.1.9 2 2 2s2-.9 2-2s-.9-2-2-2s-2 .9-2 2M7 9c0 1.1.9 2 2 2s2-.9 2-2s-.9-2-2-2s-2 .9-2 2m2 4.2c0-.6-.6-1.2-1.2-1.2s-1.2.6-1.2 1.2s.6 1.2 1.2 1.2S9 13.9 9 13.2m5 2.8c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8s-8-3.6-8-8s3.6-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m5.5 11.2c0-.7-.6-1.2-1.2-1.2c-.7 0-1.2.6-1.2 1.2s.6 1.2 1.2 1.2c.6.1 1.2-.5 1.2-1.2"></svg:path>`,
})
export class MdiEvPlugType1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEvPlugType2Icon],svg[mdi-ev-plug-type2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.3 5C19 6.5 20 8.6 20 11c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.4 1.1-4.5 2.7-6zm.7-2H6l-.6.5C3.2 5.4 2 8.1 2 11c0 5.5 4.5 10 10 10s10-4.5 10-10c0-2.9-1.2-5.6-3.4-7.5zm-5 4.5c0 .8.7 1.5 1.5 1.5S16 8.3 16 7.5S15.3 6 14.5 6S13 6.7 13 7.5m-5 0C8 8.3 8.7 9 9.5 9S11 8.3 11 7.5S10.3 6 9.5 6S8 6.7 8 7.5M7 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4.5 2c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2m.5-2c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4.5 2c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2m2.5-4c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2"></svg:path>`,
})
export class MdiEvPlugType2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEvStationIcon],svg[mdi-ev-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.77 7.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 0 1-1 1a1 1 0 0 1-1-1V14a2 2 0 0 0-2-2h-1V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0 0 18 21a2.5 2.5 0 0 0 2.5-2.5V9c0-.69-.28-1.32-.73-1.77M18 10a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1M8 18v-4.5H6L10 6v5h2z"></svg:path>`,
})
export class MdiEvStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEventbriteIcon],svg[mdi-eventbrite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 17.5c-1.85 0-3.58-.94-4.59-2.5l10-2.25l4.67-1a9.76 9.76 0 0 0-1-4.11C18.66 2.61 12.62.5 7.58 2.92C2.55 5.34.44 11.38 2.86 16.41c2.43 5.03 8.47 7.15 13.5 4.73c2.14-1.05 3.89-2.83 4.86-5.03L16.61 15A5.47 5.47 0 0 1 12 17.5m0-11c1.76 0 3.41.84 4.44 2.27l-9.87 2.42A5.49 5.49 0 0 1 12 6.5z" fill="currentColor"></svg:path>`,
})
export class MdiEventbriteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEvernoteIcon],svg[mdi-evernote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.09 11.63s.19-1.28.91-1.28c.76 0 1.78 1.71 1.78 1.71s-2.32-.43-2.69-.43M19 4.69c-.36-.6-2.17-1.28-3.11-1.28H13.5S12.7 2 10.88 2c-1.83 0-1.71.81-1.71 1.5v2.82l-.83.87H4.5s-1.06.72-1.06 2.25c0 1.56.48 6.91 3.69 7.41c3.8.58 4.45-1.18 4.45-1.39c0-.9.02-2.25.02-2.25s1.11 2.12 2.79 2.12s2.65.97 2.65 1.96v1.84S17 20.28 16 20.28h-2.11s-.69-.54-.69-1.28c0-.75.33-.95.73-.95c.39 0 .72.04.72.04v-1.56s-3.18-.03-3.18 2.41c0 2.43 1.66 3.06 2.99 3.06h2.17s3.93-.5 3.93-8.25S19.33 5.28 19 4.69M7.5 6.31H4.26l4.06-4.09V5.5z"></svg:path>`,
})
export class MdiEvernoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExcavatorIcon],svg[mdi-excavator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 18.5c.54 0 1 .46 1 1s-.46 1-1 1h-12c-.54 0-1-.46-1-1s.46-1 1-1zm0-1.5h-12C5.13 17 4 18.13 4 19.5S5.13 22 6.5 22h12a2.5 2.5 0 0 0 0-5m2.5-6h-3V7h-5l-3 4v5h12zm-9.46 0l1.96-2.5H16V11zM9.76 3.41L4.76 2L2 11.83c-.34 1.28.41 2.61 1.7 2.97l1.16.32l3.29-2.83l-3.88-1.08l1.88-6.75l2.79.78c.56.29 1.77 1.1 2.53 2.13L12.5 6h.44c-1.26-1.59-3.09-2.54-3.18-2.59"></svg:path>`,
})
export class MdiExcavatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExclamationIcon],svg[mdi-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h2v11h-2zm2 14v2h-2v-2z"></svg:path>`,
})
export class MdiExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExclamationThickIcon],svg[mdi-exclamation-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3h4v11h-4zm0 18v-4h4v4z"></svg:path>`,
})
export class MdiExclamationThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExitRunIcon],svg[mdi-exit-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.34 8.17c-.93 0-1.69-.77-1.69-1.7a1.69 1.69 0 0 1 1.69-1.69c.94 0 1.7.76 1.7 1.69s-.76 1.7-1.7 1.7M10.3 19.93l-5.93-1.18l.34-1.7l4.15.85l1.35-6.86l-1.52.6v2.86H7v-3.96l4.4-1.87l.67-.08c.6 0 1.1.34 1.43.85l.86 1.35c.68 1.21 2.03 2.03 3.64 2.03v1.68c-1.86 0-3.56-.83-4.66-2.1l-.5 2.54l1.77 1.69V23h-1.69v-5.1l-1.78-1.69zM21 23h-2V3H6v13.11l-2-.42V1h17zM6 23H4v-3.22l2 .42z"></svg:path>`,
})
export class MdiExitRunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExitToAppIcon],svg[mdi-exit-to-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8.92 12.58L11.5 17l5-5l-5-5l-1.42 1.41L12.67 11H3v2h9.67z"></svg:path>`,
})
export class MdiExitToAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExpandAllIcon],svg[mdi-expand-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8H8v10H6V8a2 2 0 0 1 2-2h10zm-4-6H4a2 2 0 0 0-2 2v10h2V4h10zm8 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2m-2 3h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></svg:path>`,
})
export class MdiExpandAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExpandAllOutlineIcon],svg[mdi-expand-all-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v10h2V4h10V2zm4 4a2 2 0 0 0-2 2v10h2V8h10V6zm12 6v8h-8v-8zm0-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-1 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2z"></svg:path>`,
})
export class MdiExpandAllOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExpansionCardIcon],svg[mdi-expansion-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v1.5h1V17h1.5V7zm4 0v9h1v1h7v-1h8V7zm11.5 2a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 17.5 9"></svg:path>`,
})
export class MdiExpansionCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExpansionCardVariantIcon],svg[mdi-expansion-card-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h2.5v10H3V8.5H2M22 7v9h-8v1H7v-1H6V7m4 2H8v3h2m3-3h-2v3h2m7-3h-5v5h5z"></svg:path>`,
})
export class MdiExpansionCardVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExponentIcon],svg[mdi-exponent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.38 3l2.39 5.75c-.22.93-.5 1.57-.77 1.95c-.33.48-.56.55-.81.55v1.5c.75 0 1.55-.4 2.05-1.19C19.87 8.94 22 3 22 3h-1.62l-1.69 4.05L17 3zM3.42 8.59L2 10l4.79 4.79L2 19.59L3.41 21l4.8-4.79L13 21l1.41-1.41l-4.79-4.8L14.41 10L13 8.59l-4.79 4.79l-4.8-4.79z"></svg:path>`,
})
export class MdiExponentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExponentBoxIcon],svg[mdi-exponent-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm8.76 3h1.63l1.11 2.6L17.59 6h1.65s-1.74 4.57-2.78 6.32c-.38.57-1.11.95-1.96.93v-1.5c.46.01.75-.25 1-.62c.11-.13.18-.33.24-.49zM6.41 9.59l2.8 2.79L12 9.59L13.41 11l-2.79 2.79l2.79 2.8L12 18l-2.79-2.79L6.41 18L5 16.59l2.79-2.8L5 11z"></svg:path>`,
})
export class MdiExponentBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExportIcon],svg[mdi-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-4-4v3h-9v2h9v3M1 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3h-2V6H3v12h12v-3h2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2"></svg:path>`,
})
export class MdiExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiExportVariantIcon],svg[mdi-export-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1L8 5h3v9h2V5h3m2 18H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3v2H6v12h12V9h-3V7h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiExportVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeIcon],svg[mdi-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"></svg:path>`,
})
export class MdiEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeArrowLeftIcon],svg[mdi-eye-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5c.36 0 .72 0 1.08-.05a6 6 0 0 1-.08-.95c0-.56.08-1.12.24-1.66c-.41.1-.82.16-1.24.16c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5c0 .29-.03.59-.08.88c.66-.25 1.37-.38 2.08-.38c1.17 0 2.31.34 3.29 1c.27-.5.51-1 .71-1.5c-1.73-4.39-6-7.5-11-7.5M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m6 6v2h4v2h-4v2l-3-3z"></svg:path>`,
})
export class MdiEyeArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeArrowLeftOutlineIcon],svg[mdi-eye-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5c.36 0 .72 0 1.08-.05a6 6 0 0 1-.08-.95c0-.36.04-.72.1-1.08c-.36.04-.73.08-1.1.08c-3.76 0-7.17-2.14-8.82-5.5a9.821 9.821 0 0 1 17.64 0c-.12.24-.26.45-.39.68c.66.16 1.29.43 1.86.82c.27-.5.51-1 .71-1.5c-1.73-4.39-6-7.5-11-7.5M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m6 6v2h4v2h-4v2l-3-3z"></svg:path>`,
})
export class MdiEyeArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeArrowRightIcon],svg[mdi-eye-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5h1.1c-.1-.3-.1-.6-.1-1c0-.6.1-1.1.2-1.7c-.4.1-.8.2-1.2.2c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5c0 .3 0 .6-.1.9c.7-.2 1.4-.4 2.1-.4c1.2 0 2.3.3 3.3 1c.3-.5.5-1 .7-1.5c-1.7-4.4-6-7.5-11-7.5M12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3m7 12v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiEyeArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeArrowRightOutlineIcon],svg[mdi-eye-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5h1.1c-.1-.3-.1-.6-.1-1s0-.7.1-1.1c-.4 0-.7.1-1.1.1c-3.8 0-7.2-2.1-8.8-5.5c1.6-3.4 5-5.5 8.8-5.5s7.2 2.1 8.8 5.5c-.1.2-.3.4-.4.7c.7.2 1.3.4 1.9.8c.3-.5.5-1 .7-1.5c-1.7-4.4-6-7.5-11-7.5M12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3m7 12v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiEyeArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeCheckIcon],svg[mdi-eye-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 8c.5 0 .97-.07 1.42-.21c-.27.71-.42 1.43-.42 2.21v.45l-1 .05c-5 0-9.27-3.11-11-7.5c1.73-4.39 6-7.5 11-7.5s9.27 3.11 11 7.5c-.25.64-.56 1.26-.92 1.85c-.9-.54-1.96-.85-3.08-.85c-.78 0-1.5.15-2.21.42c.14-.45.21-.92.21-1.42a5 5 0 0 0-5-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5"></svg:path>`,
})
export class MdiEyeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeCheckOutlineIcon],svg[mdi-eye-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-.25.65-.56 1.26-.92 1.85a5.8 5.8 0 0 0-1.9-.73l.64-1.12a9.821 9.821 0 0 0-17.64 0A9.82 9.82 0 0 0 12 17.5l1.21-.07c-.14.5-.21 1.03-.21 1.57v.46l-1 .04c-5 0-9.27-3.11-11-7.5c1.73-4.39 6-7.5 11-7.5"></svg:path>`,
})
export class MdiEyeCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeCircleIcon],svg[mdi-eye-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9.5A2.5 2.5 0 0 0 9.5 12a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 12 9.5m0 3.5a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m0-3.5A2.5 2.5 0 0 0 9.5 12a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 12 9.5m0 3.5a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m0-11A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 14c-2.63 0-5-1.57-6-4a6.505 6.505 0 0 1 8.5-3.5A6.52 6.52 0 0 1 18 12c-1 2.43-3.37 4-6 4m0-6.5A2.5 2.5 0 0 0 9.5 12a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 12 9.5m0 3.5a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiEyeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeCircleOutlineIcon],svg[mdi-eye-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10m0-2a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-9a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m0-3c2.63 0 5 1.57 6 4a6.505 6.505 0 0 1-8.5 3.5A6.52 6.52 0 0 1 6 12c1-2.43 3.37-4 6-4m0 1.5A2.5 2.5 0 0 0 9.5 12a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 12 9.5"></svg:path>`,
})
export class MdiEyeCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeClosedIcon],svg[mdi-eye-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.5c-3.8 0-7.2-2.1-8.8-5.5H1c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5h-2.2c-1.6 3.4-5 5.5-8.8 5.5"></svg:path>`,
})
export class MdiEyeClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeLockIcon],svg[mdi-eye-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 17v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zM15 12c-.9.7-1.5 1.6-1.7 2.7c-.4.2-.8.3-1.3.3c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3m-3 7.5c-5 0-9.3-3.1-11-7.5c1.7-4.4 6-7.5 11-7.5s9.3 3.1 11 7.5c-.2.5-.5 1-.7 1.5C21.5 12 19.8 11 18 11c-.4 0-.7.1-1.1.1C16.5 8.8 14.5 7 12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5h.3q-.3.6-.3 1.2z"></svg:path>`,
})
export class MdiEyeLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeLockOpenIcon],svg[mdi-eye-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.9 11.1c-1 .8-1.7 2-1.7 3.4v.2q-.6.3-1.2.3c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.4 0 2.5.9 2.9 2.1M12 18.2q0-.6.3-1.2H12c-2.8 0-5-2.2-5-5s2.2-5 5-5c2.1 0 3.9 1.3 4.7 3.2c.4-.1.9-.2 1.3-.2c2.1 0 3.9 1.3 4.5 3.1c.2-.3.3-.7.5-1.1c-1.7-4.4-6-7.5-11-7.5S2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5zm8.8-1.2h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiEyeLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeLockOpenOutlineIcon],svg[mdi-eye-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.5c-5 0-9.3-3.1-11-7.5c1.7-4.4 6-7.5 11-7.5s9.3 3.1 11 7.5c-.1.4-.3.7-.5 1.1c-.5-1.2-1.5-2.2-2.8-2.7C17.9 8 15.1 6.5 12 6.5c-3.8 0-7.2 2.1-8.8 5.5c1.7 3.4 5.1 5.5 8.8 5.5h.1c-.1.2-.1.5-.1.7zM12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3q.6 0 1.2-.3v-.2c0-1.3.7-2.5 1.7-3.4C14.5 9.9 13.4 9 12 9m8.8 8h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiEyeLockOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeLockOutlineIcon],svg[mdi-eye-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 17v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zM15 12c-.9.7-1.5 1.6-1.7 2.7c-.4.2-.8.3-1.3.3c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3m-3 7.5c-5 0-9.3-3.1-11-7.5c1.7-4.4 6-7.5 11-7.5s9.3 3.1 11 7.5c-.2.5-.5 1-.7 1.5c-.4-.7-.9-1.3-1.6-1.7c-1.7-3.3-5-5.3-8.7-5.3c-3.8 0-7.2 2.1-8.8 5.5c1.7 3.4 5.1 5.5 8.8 5.5h.1c-.1.2-.1.5-.1.7z"></svg:path>`,
})
export class MdiEyeLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeMinusIcon],svg[mdi-eye-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5A11.8 11.8 0 0 0 1 12a11.8 11.8 0 0 0 11 7.5h1.1a3.8 3.8 0 0 1-.1-1a10 10 0 0 1 .2-1.7L12 17a5 5 0 1 1 5-5a2.8 2.8 0 0 1-.1.9a5.2 5.2 0 0 1 2.1-.4a5.6 5.6 0 0 1 3.3 1A10 10 0 0 0 23 12a11.8 11.8 0 0 0-11-7.5M12 9a3 3 0 1 0 3 3a2.9 2.9 0 0 0-3-3m3 8.5v2h8v-2Z"></svg:path>`,
})
export class MdiEyeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeMinusOutlineIcon],svg[mdi-eye-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5A11.8 11.8 0 0 0 1 12a11.8 11.8 0 0 0 11 7.5h1.1a3.8 3.8 0 0 1-.1-1a4 4 0 0 1 .1-1.1H12A9.6 9.6 0 0 1 3.2 12A9.6 9.6 0 0 1 12 6.5a9.6 9.6 0 0 1 8.8 5.5l-.4.7a4.6 4.6 0 0 1 1.9.8A10 10 0 0 0 23 12a11.8 11.8 0 0 0-11-7.5M12 9a3 3 0 1 0 3 3a2.9 2.9 0 0 0-3-3m3 8.5v2h8v-2Z"></svg:path>`,
})
export class MdiEyeMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeOffIcon],svg[mdi-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"></svg:path>`,
})
export class MdiEyeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeOffOutlineIcon],svg[mdi-eye-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"></svg:path>`,
})
export class MdiEyeOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeOutlineIcon],svg[mdi-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"></svg:path>`,
})
export class MdiEyeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyePlusIcon],svg[mdi-eye-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5c.36 0 .72 0 1.08-.05a6 6 0 0 1-.08-.95c0-.56.08-1.12.24-1.66c-.41.1-.82.16-1.24.16a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5c0 .29-.03.59-.08.88c.66-.25 1.37-.38 2.08-.38c1.17 0 2.31.34 3.29 1c.27-.5.51-1 .71-1.5c-1.73-4.39-6-7.5-11-7.5M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m6 5.5v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiEyePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyePlusOutlineIcon],svg[mdi-eye-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5c.36 0 .72 0 1.08-.05a6 6 0 0 1-.08-.95c0-.36.04-.72.1-1.08c-.36.04-.73.08-1.1.08c-3.76 0-7.17-2.14-8.82-5.5a9.821 9.821 0 0 1 17.64 0c-.12.24-.26.45-.39.68c.66.16 1.29.43 1.86.82c.27-.5.51-1 .71-1.5c-1.73-4.39-6-7.5-11-7.5M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m6 5.5v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiEyePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeRefreshIcon],svg[mdi-eye-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3m6 9.5l1.8-1.8c-.5-.4-1.1-.7-1.8-.7c-1.4 0-2.5 1.1-2.5 2.5S16.6 21 18 21c.8 0 1.5-.4 2-1h1.7c-.6 1.5-2 2.5-3.7 2.5c-2.2 0-4-1.8-4-4s1.8-4 4-4c1.1 0 2.1.4 2.8 1.2l1.2-1.2v4zm-5.9 1s-.1 0 0 0C7 19.5 2.7 16.4 1 12c1.7-4.4 6-7.5 11-7.5s9.3 3.1 11 7.5c-.2.4-.4.9-.6 1.3c-1.1-.8-2.4-1.3-3.9-1.3c-.5 0-1 .1-1.5.2V12c0-2.8-2.2-5-5-5s-5 2.2-5 5s2.2 5 5 5h.2c-.1.5-.2 1-.2 1.5c0 .3 0 .7.1 1"></svg:path>`,
})
export class MdiEyeRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeRefreshOutlineIcon],svg[mdi-eye-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3m6 9.5l1.8-1.8c-.5-.4-1.1-.7-1.8-.7c-1.4 0-2.5 1.1-2.5 2.5S16.6 21 18 21c.8 0 1.5-.4 2-1h1.7c-.6 1.5-2 2.5-3.7 2.5c-2.2 0-4-1.8-4-4s1.8-4 4-4c1.1 0 2.1.4 2.8 1.2l1.2-1.2v4zm-6 0c0-.3 0-.7.1-1H12c-3.8 0-7.2-2.1-8.8-5.5c1.6-3.4 5-5.5 8.8-5.5s7.2 2.1 8.8 5.5c-.1.1-.1.2-.2.4q.9.3 1.8.9c.2-.4.4-.9.6-1.3c-1.7-4.4-6-7.5-11-7.5S2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5h.1c-.1-.3-.1-.7-.1-1"></svg:path>`,
})
export class MdiEyeRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeRemoveIcon],svg[mdi-eye-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.54 16.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 8c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5c0 .5-.1 1-.23 1.43c.69-.27 1.44-.43 2.23-.43c1.12 0 2.17.32 3.07.85c.36-.58.67-1.2.93-1.85c-1.73-4.39-6-7.5-11-7.5S2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5c.35 0 .69 0 1.03-.05c-.03-.15-.03-.3-.03-.45c0-.79.16-1.54.43-2.23c-.43.13-.93.23-1.43.23"></svg:path>`,
})
export class MdiEyeRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeRemoveOutlineIcon],svg[mdi-eye-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.54 16.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 8.5c-3.76 0-7.17-2.14-8.82-5.5a9.821 9.821 0 0 1 17.64 0c-.19.39-.41.77-.65 1.13c.68.13 1.33.37 1.9.72c.36-.58.67-1.2.93-1.85c-1.73-4.39-6-7.5-11-7.5S2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5c.35 0 .69 0 1.03-.05c-.03-.15-.03-.3-.03-.45c0-.55.08-1.08.22-1.59c-.4.05-.81.09-1.22.09"></svg:path>`,
})
export class MdiEyeRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeSettingsIcon],svg[mdi-eye-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5c-4.86 0-9.22 3-11 7.5c2.39 6.08 9.25 9.06 15.33 6.67c3.05-1.2 5.47-3.61 6.67-6.67c-1.78-4.5-6.14-7.5-11-7.5M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiEyeSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyeSettingsOutlineIcon],svg[mdi-eye-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c4.86 0 9.22 3 11 7.5c-2.39 6.08-9.25 9.06-15.33 6.67C4.62 17.47 2.2 15.06 1 12c1.78-4.5 6.14-7.5 11-7.5M3.18 12c2.38 4.87 8.27 6.89 13.14 4.5a9.8 9.8 0 0 0 4.5-4.5c-2.38-4.87-8.27-6.89-13.14-4.5a9.8 9.8 0 0 0-4.5 4.5M9 22H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2z"></svg:path>`,
})
export class MdiEyeSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyedropperIcon],svg[mdi-eyedropper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.35 11.72l-2.13 2.13l-1.41-1.42l-7.71 7.71L3.5 22L2 20.5l1.86-4.6l7.71-7.71l-1.42-1.41l2.13-2.13zM16.76 3A3 3 0 0 1 21 3a3 3 0 0 1 0 4.24l-1.92 1.92l-4.24-4.24zM5.56 17.03L4.5 19.5l2.47-1.06L14.4 11L13 9.6z"></svg:path>`,
})
export class MdiEyedropperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyedropperMinusIcon],svg[mdi-eyedropper-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.35 11.72l-2.13 2.13l-1.41-1.42l-7.71 7.71L3.5 22L2 20.5l1.86-4.6l7.71-7.71l-1.42-1.41l2.13-2.13zM16.76 3c1.17-1.17 3.07-1.17 4.24 0s1.17 3.07 0 4.24l-1.92 1.92l-4.24-4.24zM5.56 17.03L4.5 19.5l2.47-1.06L14.4 11L13 9.6zM9 4v2H1V4z"></svg:path>`,
})
export class MdiEyedropperMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyedropperOffIcon],svg[mdi-eyedropper-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 7.24l-1.92 1.92l-4.24-4.24L16.76 3c1.17-1.17 3.07-1.17 4.24 0s1.17 3.07 0 4.24M10.94 8.82l1.42 1.42l.64-.64l1.4 1.4l-.64.64l1.42 1.42l.63-.63l1.41 1.42l2.13-2.13l-7.07-7.07l-2.13 2.13l1.42 1.41zm8.92 11.47l-1.28 1.28l-5.95-5.96l-4.53 4.53L3.5 22L2 20.5l1.86-4.6l4.53-4.53l-6.53-6.52l1.28-1.28zm-8.65-6.09l-1.4-1.41l-4.25 4.24L4.5 19.5l2.47-1.06z"></svg:path>`,
})
export class MdiEyedropperOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyedropperPlusIcon],svg[mdi-eyedropper-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.35 11.72l-2.13 2.13l-1.41-1.42l-7.71 7.71L3.5 22L2 20.5l1.86-4.6l7.71-7.71l-1.42-1.41l2.13-2.13zM16.76 3c1.17-1.17 3.07-1.17 4.24 0s1.17 3.07 0 4.24l-1.92 1.92l-4.24-4.24zM5.56 17.03L4.5 19.5l2.47-1.06L14.4 11L13 9.6zM6 1v3h3v2H6v3H4V6H1V4h3V1z"></svg:path>`,
})
export class MdiEyedropperPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyedropperRemoveIcon],svg[mdi-eyedropper-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.35 11.72l-2.13 2.13l-1.41-1.42l-7.71 7.71L3.5 22L2 20.5l1.86-4.6l7.71-7.71l-1.42-1.41l2.13-2.13zM16.76 3c1.17-1.17 3.07-1.17 4.24 0s1.17 3.07 0 4.24l-1.92 1.92l-4.24-4.24zM5.56 17.03L4.5 19.5l2.47-1.06L14.4 11L13 9.6zM8.54 2.88L6.41 5l2.13 2.12l-1.42 1.42L5 6.41L2.88 8.54L1.46 7.12L3.59 5L1.46 2.88l1.42-1.41L5 3.59l2.12-2.12z"></svg:path>`,
})
export class MdiEyedropperRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiEyedropperVariantIcon],svg[mdi-eyedropper-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.92 19L5 17.08L13.06 9L15 10.94m5.71-5.31l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-3.12 3.12l-1.93-1.91l-1.41 1.41l1.42 1.42L3 16.25V21h4.75l8.92-8.92l1.42 1.42l1.41-1.41l-1.92-1.92l3.12-3.12c.4-.4.4-1.05.01-1.42"></svg:path>`,
})
export class MdiEyedropperVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceAgentIcon],svg[mdi-face-agent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.72 14.76c.35-.85.54-1.76.54-2.76c0-.72-.11-1.41-.3-2.05c-.65.15-1.33.23-2.04.23A9.07 9.07 0 0 1 9.5 6.34a9.2 9.2 0 0 1-4.73 4.88c-.04.25-.04.52-.04.78A7.27 7.27 0 0 0 12 19.27c1.05 0 2.06-.23 2.97-.64c.57 1.09.83 1.63.81 1.63c-1.64.55-2.91.82-3.78.82c-2.42 0-4.73-.95-6.43-2.66a9 9 0 0 1-2.24-3.69H2v-4.55h1.09a9.09 9.09 0 0 1 15.33-4.6a9 9 0 0 1 2.47 4.6H22v4.55h-.06L18.38 18l-5.3-.6v-1.67h4.83zm-9.45-2.99c.3 0 .59.12.8.34a1.136 1.136 0 0 1 0 1.6c-.21.21-.5.33-.8.33c-.63 0-1.14-.5-1.14-1.13s.51-1.14 1.14-1.14m5.45 0c.63 0 1.13.51 1.13 1.14s-.5 1.13-1.13 1.13s-1.14-.5-1.14-1.13a1.14 1.14 0 0 1 1.14-1.14"></svg:path>`,
})
export class MdiFaceAgentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceManIcon],svg[mdi-face-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11.75A1.25 1.25 0 0 0 7.75 13A1.25 1.25 0 0 0 9 14.25A1.25 1.25 0 0 0 10.25 13A1.25 1.25 0 0 0 9 11.75m6 0A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8c0-.29 0-.58.05-.86c2.36-1.05 4.23-2.98 5.21-5.37a9.97 9.97 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26c0 4.41-3.59 8-8 8"></svg:path>`,
})
export class MdiFaceManIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceManOutlineIcon],svg[mdi-face-man-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 13A1.25 1.25 0 0 1 9 14.25A1.25 1.25 0 0 1 7.75 13A1.25 1.25 0 0 1 9 11.75A1.25 1.25 0 0 1 10.25 13M15 11.75A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75m7 .25a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12M4.42 9.47a8.05 8.05 0 0 0 3.66-4.44a8.05 8.05 0 0 0-3.66 4.44M20 12c0-.78-.12-1.53-.33-2.24c-.7.15-1.42.24-2.17.24a10 10 0 0 1-7.76-3.69A10.02 10.02 0 0 1 4 11.86V12c0 4.41 3.59 8 8 8s8-3.59 8-8"></svg:path>`,
})
export class MdiFaceManOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceManProfileIcon],svg[mdi-face-man-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 6.39A9.97 9.97 0 0 0 17.42 10c.78 0 1.53-.09 2.25-.26c.21.71.33 1.47.33 2.26c0 4.41-3.59 8-8 8c-3 0-5.61-1.66-7-4.11L6.75 14v-1A1.25 1.25 0 0 1 8 11.75A1.25 1.25 0 0 1 9.25 13v1H12m4-2.25A1.25 1.25 0 0 0 14.75 13A1.25 1.25 0 0 0 16 14.25A1.25 1.25 0 0 0 17.25 13A1.25 1.25 0 0 0 16 11.75"></svg:path>`,
})
export class MdiFaceManProfileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceManShimmerIcon],svg[mdi-face-man-shimmer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.41 3.41L16 4.5l2.41 1.09L19.5 8l1.1-2.41L23 4.5l-2.4-1.09L19.5 1M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10c0-1.47-.33-2.87-.9-4.13l-1.24 2.72c.08.46.14.91.14 1.41c0 4.43-3.57 8-8 8s-8-3.57-8-8v-.13a10 10 0 0 0 5.74-5.56A10 10 0 0 0 17.5 10a10 10 0 0 0 1.33-.09l-1.48-3.26L12.6 4.5l3.53-1.6C14.87 2.33 13.47 2 12 2m-3 9.75A1.25 1.25 0 0 0 7.75 13A1.25 1.25 0 0 0 9 14.25A1.25 1.25 0 0 0 10.25 13A1.25 1.25 0 0 0 9 11.75m6 0A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75"></svg:path>`,
})
export class MdiFaceManShimmerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceManShimmerOutlineIcon],svg[mdi-face-man-shimmer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.5 1l-1.09 2.41L16 4.5l2.41 1.09L19.5 8l1.1-2.41L23 4.5l-2.4-1.09zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10c0-1.47-.33-2.87-.9-4.13l-1.24 2.7c.09.47.14.93.14 1.43c0 4.43-3.57 8-8 8s-8-3.57-8-8v-.14a10 10 0 0 0 5.74-5.55a10 10 0 0 0 9.09 3.6L17.96 8h-.46c-2.82 0-5.4-1.5-6.84-3.88c.44-.07.88-.12 1.34-.12c.5 0 .96.05 1.42.13l2.71-1.22A9.9 9.9 0 0 0 12 2M8.09 5a8 8 0 0 1-3.68 4.5C5.04 7.57 6.37 6 8.09 5M9 11.75A1.25 1.25 0 0 0 7.75 13A1.25 1.25 0 0 0 9 14.25A1.25 1.25 0 0 0 10.25 13A1.25 1.25 0 0 0 9 11.75m6 0A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75"></svg:path>`,
})
export class MdiFaceManShimmerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceMaskIcon],svg[mdi-face-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.25 6c-1.46 0-2.64 1.14-2.75 2.58l-4.95-1.42c-.36-.11-.74-.11-1.1 0L6.5 8.58C6.39 7.14 5.21 6 3.75 6C2.23 6 1 7.23 1 8.75v3.5C1 13.77 2.23 15 3.75 15h1.93c1.13 2.36 3.53 4 6.32 4s5.19-1.64 6.32-4h1.93c1.52 0 2.75-1.23 2.75-2.75v-3.5C23 7.23 21.77 6 20.25 6M5 13.5H3.75c-.69 0-1.25-.56-1.25-1.25v-3.5a1.25 1.25 0 0 1 2.5 0zM15 12l-2.6-.7c-.3-.1-.6-.1-.8 0L9 12v-1l2.3-.7c.4-.1.9-.1 1.4 0l2.3.7zm6.5.25c0 .69-.56 1.25-1.25 1.25H19V8.75a1.25 1.25 0 0 1 2.5 0z"></svg:path>`,
})
export class MdiFaceMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceMaskOutlineIcon],svg[mdi-face-mask-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 12l-2.6-.7c-.3-.1-.6-.1-.8 0L9 12v-1l2.3-.7c.4-.1.9-.1 1.4 0l2.3.7zm5.25-6c-1.46 0-2.64 1.14-2.75 2.58l-4.95-1.42c-.18-.05-.36-.08-.55-.08c-.18 0-.37.03-.55.08L6.5 8.58C6.39 7.14 5.21 6 3.75 6C2.23 6 1 7.23 1 8.75v3.5C1 13.77 2.23 15 3.75 15h1.93c1.13 2.36 3.53 4 6.32 4s5.19-1.64 6.32-4h1.93c1.52 0 2.75-1.23 2.75-2.75v-3.5C23 7.23 21.77 6 20.25 6M5 13.5H3.75c-.69 0-1.25-.56-1.25-1.25v-3.5a1.25 1.25 0 0 1 2.5 0zM17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5v-1.5l5-1.42l5 1.42zm4.5.25c0 .69-.56 1.25-1.25 1.25H19V8.75a1.25 1.25 0 0 1 2.5 0z"></svg:path>`,
})
export class MdiFaceMaskOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceRecognitionIcon],svg[mdi-face-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11.75A1.25 1.25 0 0 0 7.75 13A1.25 1.25 0 0 0 9 14.25A1.25 1.25 0 0 0 10.25 13A1.25 1.25 0 0 0 9 11.75m6 0A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a4 4 0 0 1 0-.86a10.05 10.05 0 0 0 5.26-5.37A9.99 9.99 0 0 0 17.42 10c.76 0 1.51-.09 2.25-.26c1.25 4.26-1.17 8.69-5.41 9.93c-.76.22-1.5.33-2.26.33M0 2a2 2 0 0 1 2-2h4v2H2v4H0zm24 20a2 2 0 0 1-2 2h-4v-2h4v-4h2zM2 24a2 2 0 0 1-2-2v-4h2v4h4v2zM22 0a2 2 0 0 1 2 2v4h-2V2h-4V0z"></svg:path>`,
})
export class MdiFaceRecognitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceWomanIcon],svg[mdi-face-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 13a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0M22 12v10H2V12C2 6.5 6.5 2 12 2s10 4.5 10 10M4 12c0 4.41 3.59 8 8 8s8-3.59 8-8c0-.79-.12-1.55-.33-2.26A9.97 9.97 0 0 1 9.26 5.77c-.98 2.39-2.85 4.32-5.21 5.37c-.05.28-.05.57-.05.86m5 2.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path>`,
})
export class MdiFaceWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceWomanOutlineIcon],svg[mdi-face-woman-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12v10h20V12c0-5.5-4.5-10-10-10m0 2c2.9 0 5.44 1.56 6.84 3.88c-.43.07-.88.12-1.34.12c-2.9 0-5.44-1.56-6.84-3.88c.43-.07.88-.12 1.34-.12M8.08 5.03a8.05 8.05 0 0 1-3.66 4.44a8.05 8.05 0 0 1 3.66-4.44M4 11.86c2.6-.98 4.69-2.99 5.74-5.55A10 10 0 0 0 17.5 10c.75 0 1.47-.09 2.17-.24c.21.71.33 1.46.33 2.24c0 4.41-3.59 8-8 8s-8-3.59-8-8zM4 20v-2c.57.75 1.25 1.43 2 2zm16 0h-2c.75-.57 1.43-1.25 2-2zm-6.25-7a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-6 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path>`,
})
export class MdiFaceWomanOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceWomanProfileIcon],svg[mdi-face-woman-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 13a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M22 12c0 5.5-4.5 10-10 10H2V12C2 6.5 6.5 2 12 2s10 4.5 10 10M7 18c1.41 1.23 3 2 5 2c4.41 0 8-3.59 8-8c0-.79-.12-1.55-.33-2.26c-.72.17-1.47.26-2.25.26c-2 0-3.85-.6-5.42-1.61c0 0-1.46 5.37-3.97 4.61c-.66-.2-1.03.31-1.03 1"></svg:path>`,
})
export class MdiFaceWomanProfileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceWomanShimmerIcon],svg[mdi-face-woman-shimmer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.5 1l-1.09 2.41L16 4.5l2.41 1.09L19.5 8l1.1-2.41L23 4.5l-2.4-1.09zM12 2C6.5 2 2 6.5 2 12v10h20V12c0-1.47-.33-2.87-.9-4.13l-1.24 2.72c.08.46.14.91.14 1.41c0 4.43-3.57 8-8 8s-8-3.57-8-8v-.13a10 10 0 0 0 5.74-5.56A10 10 0 0 0 17.5 10a10 10 0 0 0 1.33-.09l-1.48-3.26L12.6 4.5l3.53-1.6C14.87 2.33 13.47 2 12 2m-3 9.75A1.25 1.25 0 0 0 7.75 13A1.25 1.25 0 0 0 9 14.25A1.25 1.25 0 0 0 10.25 13A1.25 1.25 0 0 0 9 11.75m6 0A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75"></svg:path>`,
})
export class MdiFaceWomanShimmerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaceWomanShimmerOutlineIcon],svg[mdi-face-woman-shimmer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.5 1l-1.09 2.41L16 4.5l2.41 1.09L19.5 8l1.1-2.41L23 4.5l-2.4-1.09M12 2C6.5 2 2 6.5 2 12v10h20V12c0-1.47-.33-2.87-.9-4.13l-1.24 2.7c.09.47.14.93.14 1.43c0 4.43-3.57 8-8 8s-8-3.57-8-8v-.14a9.93 9.93 0 0 0 5.74-5.55a10 10 0 0 0 9.09 3.6L17.96 8h-.46c-2.82 0-5.4-1.5-6.84-3.88c.44-.07.88-.12 1.34-.12c.5 0 .96.05 1.42.13l2.71-1.22A9.9 9.9 0 0 0 12 2M8.09 5a8.12 8.12 0 0 1-3.68 4.5C5.04 7.57 6.37 6 8.09 5M9 11.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m6 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M4 17.97c.58.77 1.26 1.45 2.03 2.03H4m16-2.03V20h-2.03c.77-.58 1.45-1.26 2.03-2.03"></svg:path>`,
})
export class MdiFaceWomanShimmerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFacebookIcon],svg[mdi-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"></svg:path>`,
})
export class MdiFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFacebookBoxIcon],svg[mdi-facebook-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" fill="currentColor"></svg:path>`,
})
export class MdiFacebookBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFacebookGamingIcon],svg[mdi-facebook-gaming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 14.5v-5H21V21h-5.5v-6.5zM3 3h18v5.5H8.5v7h6V21H3z"></svg:path>`,
})
export class MdiFacebookGamingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFacebookMessengerIcon],svg[mdi-facebook-messenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17c.16.13.26.35.27.57l.05 1.78c.04.57.61.94 1.13.71l1.98-.87c.17-.06.36-.09.53-.06c.9.27 1.9.4 2.9.4c5.64 0 10-4.13 10-9.7S17.64 2 12 2m6 7.46l-2.93 4.67c-.47.73-1.47.92-2.17.37l-2.34-1.73a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.33-.97-.17-.68-.63l2.93-4.67c.47-.73 1.47-.92 2.17-.4l2.34 1.76a.6.6 0 0 0 .72 0l3.16-2.4c.42-.33.97.17.68.63"></svg:path>`,
})
export class MdiFacebookMessengerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFacebookWorkplaceIcon],svg[mdi-facebook-workplace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.69 16.12c-.27.31-.74.8-1.5.8c-1.06 0-1.41-.77-1.73-1.58l-1.6-3.93l-1.6 3.93c-.26.66-.56 1.58-1.73 1.58s-1.46-.92-1.74-1.58L7.11 8.72h2.26l2.16 5.45l1.61-3.97c.25-.63.55-1.58 1.72-1.58c1.14 0 1.46.95 1.72 1.58l1.75 4.3c.89-1.36 1.27-3 1.05-4.61a6.7 6.7 0 0 0-2.24-4.16a6.73 6.73 0 0 0-4.42-1.67c-1.69-.01-3.33.52-4.72 1.5a8.06 8.06 0 0 0-2.88 3.98c-.52 1.6-.52 3.33 0 4.93s1.54 2.99 2.91 3.97c1.37.99 3.01 1.51 4.69 1.5c.73 0 1.45-.1 2.15-.3v2.11c-.71.16-1.43.25-2.15.25c-2.11 0-4.18-.66-5.9-1.9s-3-2.99-3.65-5a9.9 9.9 0 0 1-.01-6.2c.66-2.01 1.94-3.76 3.66-5C8.53 2.66 10.6 2 12.72 2c4.84 0 8.78 3.94 8.78 8.79c0 1.92-.64 3.8-1.81 5.33"></svg:path>`,
})
export class MdiFacebookWorkplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFactoryIcon],svg[mdi-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18v2h4v-2zm0-4v2h10v-2zm6 4v2h4v-2zm6-4v2h4v-2zm0 4v2h4v-2zM2 22V8l5 4V8l5 4V8l5 4l1-10h3l1 10v10z"></svg:path>`,
})
export class MdiFactoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFamilyTreeIcon],svg[mdi-family-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 11 5.79V7H7a2 2 0 0 0-2 2v.71A2.5 2.5 0 0 0 3.5 12A2.5 2.5 0 0 0 5 14.29V15H4a2 2 0 0 0-2 2v1.21A2.5 2.5 0 0 0 .5 20.5A2.5 2.5 0 0 0 3 23a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 4 18.21V17h4v1.21a2.5 2.5 0 0 0-1.5 2.29A2.5 2.5 0 0 0 9 23a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-1.5-2.29V17a2 2 0 0 0-2-2H7v-.71A2.5 2.5 0 0 0 8.5 12A2.5 2.5 0 0 0 7 9.71V9h10v.71A2.5 2.5 0 0 0 15.5 12a2.5 2.5 0 0 0 1.5 2.29V15h-1a2 2 0 0 0-2 2v1.21a2.5 2.5 0 0 0-1.5 2.29A2.5 2.5 0 0 0 15 23a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-1.5-2.29V17h4v1.21a2.5 2.5 0 0 0-1.5 2.29A2.5 2.5 0 0 0 21 23a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-1.5-2.29V17a2 2 0 0 0-2-2h-1v-.71A2.5 2.5 0 0 0 20.5 12A2.5 2.5 0 0 0 19 9.71V9a2 2 0 0 0-2-2h-4V5.79a2.5 2.5 0 0 0 1.5-2.29A2.5 2.5 0 0 0 12 1m0 1.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M6 11a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m12 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M3 19.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiFamilyTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanIcon],svg[mdi-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m.5-9c4.5 0 4.61 3.57 2.25 4.75c-.99.49-1.43 1.54-1.62 2.47c.48.2.9.51 1.22.91c3.7-2 7.68-1.21 7.68 2.37c0 4.5-3.57 4.6-4.75 2.23c-.5-.99-1.56-1.43-2.49-1.62c-.2.48-.51.89-.91 1.23c1.99 3.69 1.2 7.66-2.38 7.66c-4.5 0-4.59-3.58-2.23-4.76c.98-.49 1.42-1.53 1.62-2.45c-.49-.2-.92-.52-1.24-.92C5.96 15.85 2 15.07 2 11.5C2 7 5.56 6.89 6.74 9.26c.5.99 1.55 1.42 2.48 1.61c.19-.48.51-.9.92-1.22C8.15 5.96 8.94 2 12.5 2"></svg:path>`,
})
export class MdiFanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanAlertIcon],svg[mdi-fan-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11c-.57 0-1 .45-1 1s.43 1 1 1c.54 0 1-.45 1-1s-.46-1-1-1m.5-9c4.5 0 4.59 3.57 2.23 4.75c-.99.49-1.43 1.54-1.62 2.47c.48.2.89.51 1.22.91c3.7-2 7.67-1.21 7.67 2.37c0 4.5-3.57 4.6-4.74 2.23c-.5-.99-1.56-1.43-2.49-1.62c-.2.48-.51.89-.91 1.23C13.85 18.03 13.06 22 9.5 22c-4.5 0-4.6-3.58-2.24-4.76c.98-.49 1.42-1.53 1.62-2.45c-.49-.2-.92-.52-1.24-.92C3.95 15.85 0 15.07 0 11.5C0 7 3.56 6.89 4.73 9.26c.5.99 1.55 1.42 2.48 1.61c.19-.48.51-.9.92-1.22C6.14 5.96 6.93 2 10.5 2M22 13V7h2v6zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiFanAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanAutoIcon],svg[mdi-fan-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 2c-3.57 0-4.36 3.96-2.37 7.65c-.41.32-.73.74-.92 1.22c-.93-.19-1.98-.62-2.48-1.61C5.56 6.89 2 7 2 11.5c0 3.57 3.95 4.35 7.64 2.37c.32.4.75.72 1.24.92c-.2.92-.64 1.96-1.62 2.45C6.9 18.42 7 22 11.5 22c.81 0 1.5-.22 2-.59c-.31-.74-.5-1.55-.5-2.41c0-1.41.5-2.7 1.3-3.72c-.13-.31-.27-.63-.44-.94c.4-.34.71-.75.91-1.23c.49.1 1.01.28 1.48.56a6 6 0 0 1 5.64.07c.06-.37.11-.78.11-1.24c0-3.58-3.97-4.37-7.67-2.37c-.33-.4-.74-.71-1.22-.91c.19-.93.63-1.98 1.62-2.47C17.09 5.57 17 2 12.5 2m-.5 9c.54 0 1 .45 1 1s-.46 1-1 1c-.57 0-1-.45-1-1s.43-1 1-1m6 4a2 2 0 0 0-2 2v6h2v-2h2v2h2v-6c0-1.1-.9-2-2-2m-2 2h2v2h-2Z"></svg:path>`,
})
export class MdiFanAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanChevronDownIcon],svg[mdi-fan-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-1.41.5-2.7 1.3-3.72c-.13-.31-.27-.63-.44-.94c.4-.34.71-.75.91-1.23c.49.1 1.01.28 1.48.56a6 6 0 0 1 5.64.07c.06-.37.11-.78.11-1.24c0-3.58-3.97-4.37-7.67-2.37c-.33-.4-.74-.71-1.22-.91c.19-.93.63-1.98 1.62-2.47C17.09 5.57 17 2 12.5 2c-3.57 0-4.36 3.96-2.37 7.65c-.41.32-.73.74-.92 1.22c-.93-.19-1.98-.62-2.48-1.61C5.56 6.89 2 7 2 11.5c0 3.57 3.95 4.35 7.64 2.37c.32.4.75.72 1.24.92c-.2.92-.64 1.96-1.62 2.45C6.9 18.42 7 22 11.5 22c.81 0 1.5-.22 2-.59c-.31-.74-.5-1.55-.5-2.41m-1-6c-.57 0-1-.45-1-1s.43-1 1-1c.54 0 1 .45 1 1s-.46 1-1 1m7 6.17L22.17 16l1.42 1.41L19 22l-4.59-4.59L15.83 16z"></svg:path>`,
})
export class MdiFanChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanChevronUpIcon],svg[mdi-fan-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-1.41.5-2.7 1.3-3.72c-.13-.31-.27-.63-.44-.94c.4-.34.71-.75.91-1.23c.49.1 1.01.28 1.48.56a6 6 0 0 1 5.64.07c.06-.37.11-.78.11-1.24c0-3.58-3.97-4.37-7.67-2.37c-.33-.4-.74-.71-1.22-.91c.19-.93.63-1.98 1.62-2.47C17.09 5.57 17 2 12.5 2c-3.57 0-4.36 3.96-2.37 7.65c-.41.32-.73.74-.92 1.22c-.93-.19-1.98-.62-2.48-1.61C5.56 6.89 2 7 2 11.5c0 3.57 3.95 4.35 7.64 2.37c.32.4.75.72 1.24.92c-.2.92-.64 1.96-1.62 2.45C6.9 18.42 7 22 11.5 22c.81 0 1.5-.22 2-.59c-.31-.74-.5-1.55-.5-2.41m-1-6c-.57 0-1-.45-1-1s.43-1 1-1c.54 0 1 .45 1 1s-.46 1-1 1m7 4.83L15.83 21l-1.42-1.41L19 15l4.59 4.59L22.17 21z"></svg:path>`,
})
export class MdiFanChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanClockIcon],svg[mdi-fan-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h1.5v2.8l2.4 1.4l-.8 1.3l-3.1-1.8zm5-2.7c-.2-3.4-4-4.1-7.7-2.1q-.45-.6-1.2-.9c.2-.9.6-2 1.6-2.5C16.1 4.6 16 1 11.5 1C7.9 1 7.2 5 9.1 8.7q-.6.45-.9 1.2c-.9-.2-2-.6-2.5-1.6C4.6 5.9 1 6 1 10.5c0 3.6 4 4.3 7.7 2.4c.3.4.8.7 1.2.9c-.2.9-.6 2-1.6 2.5C5.9 17.4 6 21 10.5 21c.3 0 .5 0 .7-.1c1.3 1.9 3.4 3.1 5.8 3.1c3.9 0 7-3.1 7-7c0-2.4-1.2-4.5-3-5.7M11 10c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m6 12c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5"></svg:path>`,
})
export class MdiFanClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanMinusIcon],svg[mdi-fan-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-1.41.5-2.7 1.3-3.72c-.13-.31-.27-.63-.44-.94c.4-.34.71-.75.91-1.23c.49.1 1.01.28 1.48.56a6 6 0 0 1 5.64.07c.06-.37.11-.78.11-1.24c0-3.58-3.97-4.37-7.67-2.37c-.33-.4-.74-.71-1.22-.91c.19-.93.63-1.98 1.62-2.47C17.09 5.57 17 2 12.5 2c-3.57 0-4.36 3.96-2.37 7.65c-.41.32-.73.74-.92 1.22c-.93-.19-1.98-.62-2.48-1.61C5.56 6.89 2 7 2 11.5c0 3.57 3.95 4.35 7.64 2.37c.32.4.75.72 1.24.92c-.2.92-.64 1.96-1.62 2.45C6.9 18.42 7 22 11.5 22c.81 0 1.5-.22 2-.59c-.31-.74-.5-1.55-.5-2.41m-1-6c-.57 0-1-.45-1-1s.43-1 1-1c.54 0 1 .45 1 1s-.46 1-1 1m11 5v2h-8v-2z"></svg:path>`,
})
export class MdiFanMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanOffIcon],svg[mdi-fan-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 2C9.64 2 8.57 4.55 9.29 7.47L15 13.16c.87.21 1.81.65 2.28 1.57c1.18 2.37 4.75 2.27 4.75-2.23c0-3.58-3.98-4.37-7.68-2.37c-.32-.4-.74-.71-1.22-.91c.19-.93.63-1.98 1.62-2.47C17.11 5.57 17 2 12.5 2M3.28 4L2 5.27l2.47 2.46C3.22 7.74 2 8.87 2 11.5c0 3.57 3.96 4.35 7.65 2.37c.32.4.75.72 1.24.92c-.2.92-.64 1.96-1.62 2.45C6.91 18.42 7 22 11.5 22c2.3 0 3.44-1.64 3.44-3.79L18.73 22L20 20.72z"></svg:path>`,
})
export class MdiFanOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanPlusIcon],svg[mdi-fan-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-1.41.5-2.7 1.3-3.72c-.13-.31-.27-.63-.44-.94c.4-.34.71-.75.91-1.23c.49.1 1.01.28 1.48.56a6 6 0 0 1 5.64.07c.06-.37.11-.78.11-1.24c0-3.58-3.97-4.37-7.67-2.37c-.33-.4-.74-.71-1.22-.91c.19-.93.63-1.98 1.62-2.47C17.09 5.57 17 2 12.5 2c-3.57 0-4.36 3.96-2.37 7.65c-.41.32-.73.74-.92 1.22c-.93-.19-1.98-.62-2.48-1.61C5.56 6.89 2 7 2 11.5c0 3.57 3.95 4.35 7.64 2.37c.32.4.75.72 1.24.92c-.2.92-.64 1.96-1.62 2.45C6.9 18.42 7 22 11.5 22c.81 0 1.5-.22 2-.59c-.31-.74-.5-1.55-.5-2.41m-1-6c-.57 0-1-.45-1-1s.43-1 1-1c.54 0 1 .45 1 1s-.46 1-1 1m8 2v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class MdiFanPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanRemoveIcon],svg[mdi-fan-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-1.41.5-2.7 1.3-3.72c-.13-.31-.27-.63-.44-.94c.4-.34.71-.75.91-1.23c.49.1 1.01.28 1.48.56a6 6 0 0 1 5.64.07c.06-.37.11-.78.11-1.24c0-3.58-3.97-4.37-7.67-2.37c-.33-.4-.74-.71-1.22-.91c.19-.93.63-1.98 1.62-2.47C17.09 5.57 17 2 12.5 2c-3.57 0-4.36 3.96-2.37 7.65c-.41.32-.73.74-.92 1.22c-.93-.19-1.98-.62-2.48-1.61C5.56 6.89 2 7 2 11.5c0 3.57 3.95 4.35 7.64 2.37c.32.4.75.72 1.24.92c-.2.92-.64 1.96-1.62 2.45C6.9 18.42 7 22 11.5 22c.81 0 1.5-.22 2-.59c-.31-.74-.5-1.55-.5-2.41m-1-6c-.57 0-1-.45-1-1s.43-1 1-1c.54 0 1 .45 1 1s-.46 1-1 1m10.54 3.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12z"></svg:path>`,
})
export class MdiFanRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanSpeed1Icon],svg[mdi-fan-speed-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-1.41.5-2.7 1.3-3.72c-.13-.31-.27-.63-.44-.94c.4-.34.71-.75.91-1.23c.49.1 1.01.28 1.48.56a6 6 0 0 1 5.64.07c.06-.37.11-.78.11-1.24c0-3.58-3.97-4.37-7.67-2.37c-.33-.4-.74-.71-1.22-.91c.19-.93.63-1.98 1.62-2.47C17.09 5.57 17 2 12.5 2c-3.57 0-4.36 3.96-2.37 7.65c-.41.32-.73.74-.92 1.22c-.93-.19-1.98-.62-2.48-1.61C5.56 6.89 2 7 2 11.5c0 3.57 3.95 4.35 7.64 2.37c.32.4.75.72 1.24.92c-.2.92-.64 1.96-1.62 2.45C6.9 18.42 7 22 11.5 22c.81 0 1.5-.22 2-.59c-.31-.74-.5-1.55-.5-2.41m-1-6c-.57 0-1-.45-1-1s.43-1 1-1c.54 0 1 .45 1 1s-.46 1-1 1m5 2v2h1v6h2v-8z"></svg:path>`,
})
export class MdiFanSpeed1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanSpeed2Icon],svg[mdi-fan-speed-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-1.41.5-2.7 1.3-3.72c-.13-.31-.27-.63-.44-.94c.4-.34.71-.75.91-1.23c.49.1 1.01.28 1.48.56a6 6 0 0 1 5.64.07c.06-.37.11-.78.11-1.24c0-3.58-3.97-4.37-7.67-2.37c-.33-.4-.74-.71-1.22-.91c.19-.93.63-1.98 1.62-2.47C17.09 5.57 17 2 12.5 2c-3.57 0-4.36 3.96-2.37 7.65c-.41.32-.73.74-.92 1.22c-.93-.19-1.98-.62-2.48-1.61C5.56 6.89 2 7 2 11.5c0 3.57 3.95 4.35 7.64 2.37c.32.4.75.72 1.24.92c-.2.92-.64 1.96-1.62 2.45C6.9 18.42 7 22 11.5 22c.81 0 1.5-.22 2-.59c-.31-.74-.5-1.55-.5-2.41m-1-6c-.57 0-1-.45-1-1s.43-1 1-1c.54 0 1 .45 1 1s-.46 1-1 1m4 2v2h3v1h-1c-1.1 0-2 .9-2 2v3h5v-2h-3v-1h1c1.11 0 2-.89 2-2v-1a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiFanSpeed2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFanSpeed3Icon],svg[mdi-fan-speed-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-1.41.5-2.7 1.3-3.72c-.13-.31-.27-.63-.44-.94c.4-.34.71-.75.91-1.23c.49.1 1.01.28 1.48.56a6 6 0 0 1 5.64.07c.06-.37.11-.78.11-1.24c0-3.58-3.97-4.37-7.67-2.37c-.33-.4-.74-.71-1.22-.91c.19-.93.63-1.98 1.62-2.47C17.09 5.57 17 2 12.5 2c-3.57 0-4.36 3.96-2.37 7.65c-.41.32-.73.74-.92 1.22c-.93-.19-1.98-.62-2.48-1.61C5.56 6.89 2 7 2 11.5c0 3.57 3.95 4.35 7.64 2.37c.32.4.75.72 1.24.92c-.2.92-.64 1.96-1.62 2.45C6.9 18.42 7 22 11.5 22c.81 0 1.5-.22 2-.59c-.31-.74-.5-1.55-.5-2.41m-1-6c-.57 0-1-.45-1-1s.43-1 1-1c.54 0 1 .45 1 1s-.46 1-1 1m9 8v-.5c0-.83-.67-1.5-1.5-1.5c.83 0 1.5-.67 1.5-1.5V17a2 2 0 0 0-2-2h-3v2h3v1h-2v2h2v1h-3v2h3c1.11 0 2-.89 2-2"></svg:path>`,
})
export class MdiFanSpeed3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFastForwardIcon],svg[mdi-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6v12l8.5-6M4 18l8.5-6L4 6z"></svg:path>`,
})
export class MdiFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFastForward10Icon],svg[mdi-fast-forward-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12v10H8v-8H6v-2zm8 2v6c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-4 0v6h2v-6zM11.5 3c2.65 0 5.05 1 6.9 2.6L21 3v7h-7l2.62-2.62C15.23 6.22 13.46 5.5 11.5 5.5c-3.54 0-6.55 2.31-7.6 5.5l-2.37-.78C2.92 6.03 6.85 3 11.5 3"></svg:path>`,
})
export class MdiFastForward10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFastForward15Icon],svg[mdi-fast-forward-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3c2.65 0 5.05 1 6.9 2.6L21 3v7h-7l2.62-2.62C15.23 6.22 13.46 5.5 11.5 5.5c-3.54 0-6.55 2.31-7.6 5.5l-2.37-.78C2.92 6.03 6.85 3 11.5 3M10 12v10H8v-8H6v-2zm2 0h6v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2h-4v-2h4v-2h-4z"></svg:path>`,
})
export class MdiFastForward15Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFastForward30Icon],svg[mdi-fast-forward-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3c-4.65 0-8.58 3.03-9.97 7.22L3.9 11c1.05-3.19 4.06-5.5 7.6-5.5c1.96 0 3.73.72 5.12 1.88L14 10h7V3l-2.6 2.6C16.55 4 14.15 3 11.5 3M19 14v6c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-4 0v6h2v-6zm-4 6a2 2 0 0 1-2 2H5v-2h4v-2H7v-2h2v-2H5v-2h4a2 2 0 0 1 2 2v1.5A1.5 1.5 0 0 1 9.5 17a1.5 1.5 0 0 1 1.5 1.5z"></svg:path>`,
})
export class MdiFastForward30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFastForward45Icon],svg[mdi-fast-forward-45-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3c2.6 0 5 1 6.9 2.6L21 3v7h-7l2.6-2.6c-1.4-1.2-3.2-1.9-5.1-1.9C8 5.5 4.9 7.8 3.9 11l-2.4-.8C2.9 6 6.8 3 11.5 3m1.5 9h6v2h-4v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-4v-2h4v-2h-4zm-8 0v6h4v4h2V12H9v4H7v-4z"></svg:path>`,
})
export class MdiFastForward45Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFastForward5Icon],svg[mdi-fast-forward-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3c2.65 0 5.05 1 6.9 2.6L21 3v7h-7l2.62-2.62C15.23 6.22 13.46 5.5 11.5 5.5c-3.54 0-6.55 2.31-7.6 5.5l-2.37-.78C2.92 6.03 6.85 3 11.5 3M9 12h6v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H9v-2h4v-2H9z"></svg:path>`,
})
export class MdiFastForward5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFastForward60Icon],svg[mdi-fast-forward-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3c-4.7 0-8.6 3-10 7.2l2.4.8c1-3.2 4.1-5.5 7.6-5.5c2 0 3.7.7 5.1 1.9L14 10h7V3l-2.6 2.6C16.5 4 14.1 3 11.5 3M19 14v6c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2m-4 0v6h2v-6zm-8-2c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H7v-2h4v-2zm0 6h2v2H7z"></svg:path>`,
})
export class MdiFastForward60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFastForwardOutlineIcon],svg[mdi-fast-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 9.9l3 2.1l-3 2.1zm-9 0L9 12l-3 2.1zM13 6v12l8.5-6zM4 6v12l8.5-6z"></svg:path>`,
})
export class MdiFastForwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaucetIcon],svg[mdi-faucet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14v2h-3v-1.72zm0-1c0-1.1-1-2-2.2-2H10v-1H5v11h5v-7.09zM5 9h5V7l5.36-1.79a.932.932 0 1 0-.61-1.76L5 7z"></svg:path>`,
})
export class MdiFaucetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaucetVariantIcon],svg[mdi-faucet-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21H3c0-1.1.9-2 2-2h14c1.11 0 2 .89 2 2M19 7c0-1.61-1.07-4-4-4s-4 2.39-4 4v11h2V7c0-.46.17-2 2-2s2 1.54 2 2h-.5v2h3V7zM7 12c-.55 0-1 .45-1 1v1H3v1h3v3h2v-5c0-.55-.45-1-1-1m14 2h-3v-1c0-.55-.45-1-1-1s-1 .45-1 1v5h2v-3h3z"></svg:path>`,
})
export class MdiFaucetVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFaxIcon],svg[mdi-fax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9h-1V4H8v16h14v-8c0-1.66-1.34-3-3-3m-9-3h6v3h-6zm4 11h-4v-5h4zm2 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M4.5 8A2.5 2.5 0 0 0 2 10.5v8a2.5 2.5 0 0 0 5 0v-8A2.5 2.5 0 0 0 4.5 8"></svg:path>`,
})
export class MdiFaxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFeatherIcon],svg[mdi-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2s-7.64-.37-13.66 7.88C3.72 16.21 2 22 2 22l1.94-1c1.44-2.5 2.19-3.53 3.6-5c2.53.74 5.17.65 7.46-2c-2-.56-3.6-.43-5.96-.19C11.69 12 13.5 11.6 16 12l1-2c-1.8-.34-3-.37-4.78.04C14.19 8.65 15.56 7.87 18 8l1.21-1.93c-1.56-.11-2.5.06-4.29.5c1.61-1.46 3.08-2.12 5.22-2.25c0 0 1.05-1.89 1.86-2.32"></svg:path>`,
})
export class MdiFeatherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFeatureSearchIcon],svg[mdi-feature-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.5c-.3.8-.5 1.6-.5 2.5c0 3.6 2.9 6.5 6.5 6.5c.8 0 1.5-.1 2.1-.4L20 15zm-.7-11.1c.4-.7.7-1.5.7-2.4C20 4 18 2 15.5 2S11 4 11 6.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.1 3.1l1.4-1.4zm-3.8.1C14.1 9 13 7.9 13 6.5S14.1 4 15.5 4S18 5.1 18 6.5S16.9 9 15.5 9"></svg:path>`,
})
export class MdiFeatureSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFeatureSearchOutlineIcon],svg[mdi-feature-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 2C13 2 11 4 11 6.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.1 3.1l1.4-1.4l-3.1-3.1c.4-.7.7-1.5.7-2.4C20 4 18 2 15.5 2M4 4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5l-2-2v7H4V6h5.03c.06-.7.23-1.35.47-2zm11.5 0C16.9 4 18 5.1 18 6.5S16.9 9 15.5 9S13 7.9 13 6.5S14.1 4 15.5 4"></svg:path>`,
})
export class MdiFeatureSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFedoraIcon],svg[mdi-fedora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.47 2 12v7.73C2 21 3 22 4.27 22H12c5.53 0 10-4.5 10-10S17.5 2 12 2m2.03 4.12c1.68 0 3.26 1.28 3.26 3.06c0 .16 0 .32-.02.51c-.05.47-.48.81-.95.75a.836.836 0 0 1-.7-.98c0-.06.01-.14.01-.28c0-1.01-.82-1.4-1.6-1.4s-1.48.66-1.48 1.4c.01.85 0 1.7 0 2.56l1.45-.02c1.12-.02 1.13 1.68 0 1.67l-1.45.01l-.01 2.39c-.18 1.88-1.77 3.37-3.69 3.37c-2.03 0-3.71-1.66-3.71-3.7A3.8 3.8 0 0 1 9 11.74l1.15-.01v1.67L9 13.41h-.03c-1.16.03-2.15.82-2.16 2.06c0 1.12.91 2.03 2.04 2.03c1.15 0 2.03-.83 2.03-2.03c.02-2.01-.01-4.22 0-6.3c0-.12.01-.21.02-.34c.19-1.54 1.57-2.71 3.13-2.71"></svg:path>`,
})
export class MdiFedoraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFenceIcon],svg[mdi-fence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9v2H7V9H5v2H3V9H1v12h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2V9h-2v2h-2V9h-2v2h-2V9h-2v2h-2V9zm-6 4h2v4H3zm4 0h2v4H7zm4 0h2v4h-2zm4 0h2v4h-2zm4 0h2v4h-2z"></svg:path>`,
})
export class MdiFenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFenceElectricIcon],svg[mdi-fence-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9v2H7V9H5v2H3V9H1v12h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2V9h-2v2h-2V9h-2v2h-2V9h-2v2h-2V9zm-6 4h2v4H3zm4 0h2v4H7zm4 0h2v4h-2zm4 0h2v4h-2zm4 0h2v4h-2zM7 4h4V2l6 3h-4v2z"></svg:path>`,
})
export class MdiFenceElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFencingIcon],svg[mdi-fencing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.5 17.42l1.08 1.08l-2.3 2.28c-.28.29-.78.29-1.06 0s-.29-.78 0-1.06zm13.79-12V4L12 10.29L5.71 4v1.42L11.29 11L7.5 14.81c-1.18-.84-2.82-.74-3.87.31l4.25 4.25c1.05-1.05 1.15-2.69.32-3.87zm3.49 14.3l-2.28-2.3l-1.08 1.08l2.3 2.28c.28.29.78.29 1.06 0s.29-.78 0-1.06m-5.28-4.91l-3.08-3.1l-.71.71l3.1 3.08c-.84 1.18-.74 2.82.31 3.87l4.25-4.25c-1.05-1.05-2.69-1.15-3.87-.31"></svg:path>`,
})
export class MdiFencingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFerrisWheelIcon],svg[mdi-ferris-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19c.86 0 1.59.54 1.87 1.29c.55-.12 1.08-.29 1.59-.52l-1.76-4.15c-.52.25-1.09.38-1.7.38s-1.18-.13-1.7-.38l-1.76 4.15c.51.23 1.04.4 1.59.52c.28-.75 1.01-1.29 1.87-1.29m6.25-1.24c-.25-.34-.44-.76-.44-1.26c0-1.09.9-2 2-2l.31.03c.25-.8.38-1.65.38-2.53s-.13-1.73-.38-2.5h-.31c-1.11 0-2-.89-2-2c0-.5.16-.91.44-1.26a8.47 8.47 0 0 0-4.38-2.53C13.59 4.46 12.86 5 12 5s-1.59-.54-1.87-1.29a8.47 8.47 0 0 0-4.38 2.53c.28.35.45.79.45 1.26a2 2 0 0 1-2 2h-.32c-.25.78-.38 1.62-.38 2.5c0 .89.14 1.74.39 2.55l.31-.05c1.11 0 2 .92 2 2c0 .5-.16.93-.44 1.27c.32.35.68.67 1.05.96l1.9-4.46C8.26 13.62 8 12.84 8 12a4 4 0 0 1 4-4a4 4 0 0 1 4 4c0 .84-.26 1.62-.71 2.27l1.9 4.46c.38-.29.73-.62 1.06-.97M12 23c-1 0-1.84-.74-2-1.71a9.5 9.5 0 0 1-1.85-.6L7.17 23H5l1.41-3.32a8.6 8.6 0 0 1-1.45-1.31c-.24.1-.49.13-.76.13a2 2 0 0 1-2-2c0-.62.3-1.18.77-1.55a9.5 9.5 0 0 1-.01-5.87A2.006 2.006 0 0 1 4.2 5.5c.26 0 .51.06.73.15A9.4 9.4 0 0 1 10 2.71C10.16 1.74 11 1 12 1s1.84.74 2 1.71c2 .42 3.74 1.47 5.06 2.93c.23-.09.48-.14.75-.14a2 2 0 0 1 2 2a2 2 0 0 1-.77 1.57c.3.93.46 1.93.46 2.93s-.16 2-.46 2.93c.46.37.77.94.77 1.57c0 1.12-.89 2-2 2c-.27 0-.52-.04-.76-.14c-.44.49-.93.93-1.46 1.32L19 23h-2.17l-.98-2.31c-.6.26-1.22.47-1.85.6c-.16.97-1 1.71-2 1.71"></svg:path>`,
})
export class MdiFerrisWheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFerryIcon],svg[mdi-ferry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h12v3.96L12 8L6 9.96M3.94 19H4c1.6 0 3-.88 4-2c1 1.12 2.4 2 4 2s3-.88 4-2c1 1.12 2.4 2 4 2h.05l1.9-6.69c.08-.25.05-.53-.06-.77c-.13-.24-.34-.42-.6-.5L20 10.62V6a2 2 0 0 0-2-2h-3V1H9v3H6a2 2 0 0 0-2 2v4.62l-1.29.42c-.26.08-.47.26-.6.5c-.11.24-.14.52-.06.77M20 21c-1.39 0-2.78-.47-4-1.33c-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.37 0 2.74-.35 4-1c2.5 1.3 5.5 1.3 8 0c1.26.65 2.62 1 4 1h2v-2z"></svg:path>`,
})
export class MdiFerryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileIcon],svg[mdi-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></svg:path>`,
})
export class MdiFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileAccountIcon],svg[mdi-file-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m8 18v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1zm-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiFileAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileAccountOutlineIcon],svg[mdi-file-account-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-5-7c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m2 5v1H7v-1c0-1.33 2.67-2 4-2s4 .67 4 2"></svg:path>`,
})
export class MdiFileAccountOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileAlertIcon],svg[mdi-file-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h2v-2h-2zm0-10v6h2V7M4 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6m-1 1.5L16.5 9H11Z"></svg:path>`,
})
export class MdiFileAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileAlertOutlineIcon],svg[mdi-file-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h2v-2h-2zm0-10v6h2V7M4 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6M4 4h7v5h5v11H4Z"></svg:path>`,
})
export class MdiFileAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileArrowLeftRightIcon],svg[mdi-file-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V8l-6-6H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6m-6-9.5L18.5 9H13zm7 16V18h-4v-2h4v-1.5l3 2.5zm-2 .5h4v2h-4v1.5L15 21l3-2.5z"></svg:path>`,
})
export class MdiFileArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileArrowLeftRightOutlineIcon],svg[mdi-file-arrow-left-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16zM23 17l-3-2.5V16h-4v2h4v1.5zm-5 1.5L15 21l3 2.5V22h4v-2h-4z"></svg:path>`,
})
export class MdiFileArrowLeftRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileArrowUpDownIcon],svg[mdi-file-arrow-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V8l-6-6H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6m-6-9.5L18.5 9H13zM23.5 20L21 23l-2.5-3H20v-4h2v4zm-4-2H18v4h-2v-4h-1.5l2.5-3z"></svg:path>`,
})
export class MdiFileArrowUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileArrowUpDownOutlineIcon],svg[mdi-file-arrow-up-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16zM17 15l-2.5 3H16v4h2v-4h1.5zm5 5v-4h-2v4h-1.5l2.5 3l2.5-3z"></svg:path>`,
})
export class MdiFileArrowUpDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCabinetIcon],svg[mdi-file-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8h-4V6h4zm6-4v16c0 1.11-.89 2-2 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m-2 9H6v7h12zm0-9H6v7h12zm-4 11h-4v2h4z"></svg:path>`,
})
export class MdiFileCabinetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCadIcon],svg[mdi-file-cad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6m-1 1.5L18.5 9H13m-3.12.25h1.24v.94c.69-.01 1.26.56 1.26 1.25v2.06l-.12.13l.89 1.54c.32-.5.48-1.08.47-1.67h1.26c0 1.04-.38 2.05-1.05 2.85l1.67 2.9v1.25l-1.08-.62l-1.55-2.69c-.7.46-1.53.7-2.37.7s-1.66-.24-2.37-.7l-1.55 2.69l-1.08.62v-1.25l3.24-5.62l-.12-.13v-2.06c0-.69.57-1.26 1.26-1.25m.62 1.25c-.69 0-1.04.84-.55 1.33s1.33.15 1.33-.55c0-.43-.35-.78-.78-.78m-.84 3.1l-.9 1.57c1.05.71 2.43.71 3.48 0l-.9-1.57c-.47.46-1.21.46-1.68 0"></svg:path>`,
})
export class MdiFileCadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCadBoxIcon],svg[mdi-file-cad-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7.75 2.25h1.5v1.13c.83 0 1.5.67 1.5 1.5v2.49l-.14.13l1.07 1.86c.37-.6.57-1.29.57-2h1.5A5.2 5.2 0 0 1 16 13.77l2 3.48v1.5L16.7 18l-1.86-3.22a5.18 5.18 0 0 1-5.68 0L7.3 18l-1.3.75v-1.5l3.89-6.75l-.14-.13V7.88c0-.83.67-1.5 1.5-1.5m.75 1.5c-.84 0-1.26 1.02-.66 1.62A.943.943 0 1 0 12 7.88m-1 3.72l-1.09 1.9c1.26.86 2.92.86 4.18 0L13 11.6c-.57.51-1.43.51-2 0"></svg:path>`,
})
export class MdiFileCadBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCancelIcon],svg[mdi-file-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m4.5 9C8 11 6 13 6 15.5S8 20 10.5 20s4.5-2 4.5-4.5s-2-4.5-4.5-4.5m0 1.5a3 3 0 0 1 3 3c0 .56-.15 1.08-.42 1.5L9 12.92c.42-.27.94-.42 1.5-.42m-3 3c0-.56.15-1.08.42-1.5L12 18.08c-.42.27-.94.42-1.5.42a3 3 0 0 1-3-3"></svg:path>`,
})
export class MdiFileCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCancelOutlineIcon],svg[mdi-file-cancel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6.5-10c2.5 0 4.5 2 4.5 4.5S14 19 11.5 19S7 17 7 14.5S9 10 11.5 10m0 1.5c-.56 0-1.08.15-1.5.42L14.08 16c.27-.42.42-.94.42-1.5a3 3 0 0 0-3-3m-3 3a3 3 0 0 0 3 3c.56 0 1.08-.15 1.5-.42L8.92 13c-.27.42-.42.94-.42 1.5"></svg:path>`,
})
export class MdiFileCancelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCertificateIcon],svg[mdi-file-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3v3l2-1l2 1v-3h3a2 2 0 0 0 2-2V7m-5 8v2l-2-1l-2 1v-2l-2-1l2-1v-2l2 1l2-1v2l2 1m-3-6V3.5L17.5 8Z"></svg:path>`,
})
export class MdiFileCertificateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCertificateOutlineIcon],svg[mdi-file-certificate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13v-2l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1M14 2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1v-2H7V4h6v4h4v10h-1v2h1a2 2 0 0 0 2-2V7m-5 6v-2l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1m-6 9l2-1l2 1v-5h-4m4-5v-2l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1Z"></svg:path>`,
})
export class MdiFileCertificateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileChartIcon],svg[mdi-file-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m1 18h2v-6H7zm4 0h2v-8h-2zm4 0h2v-4h-2z"></svg:path>`,
})
export class MdiFileChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileChartCheckIcon],svg[mdi-file-chart-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zM6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.8c-.5-.9-.8-1.9-.8-3v1h-2v-8h2v7c0-3.3 2.7-6 6-6c.3 0 .7 0 1 .1V8l-6-6zm7 1.5L18.5 9H13zM7 14h2v6H7z"></svg:path>`,
})
export class MdiFileChartCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileChartCheckOutlineIcon],svg[mdi-file-chart-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zM6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.8c-.4-.6-.6-1.3-.7-2H6V4h7v5h5v4.1c.3-.1.7-.1 1-.1s.7 0 1 .1V8l-6-6zm5 9v8h2v-8zm-4 2v6h2v-6z"></svg:path>`,
})
export class MdiFileChartCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileChartOutlineIcon],svg[mdi-file-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zm-9-7v6H7v-6zm6 2v4h2v-4zm-4-4v8h2v-8z"></svg:path>`,
})
export class MdiFileChartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCheckIcon],svg[mdi-file-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zM6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.53-.91-.81-1.95-.81-3c0-3.31 2.69-6 6-6c.34 0 .67.03 1 .08V8l-6-6m-1 1.5L18.5 9H13Z"></svg:path>`,
})
export class MdiFileCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCheckOutlineIcon],svg[mdi-file-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zm-10.41 3H6V4h7v5h5v4.09c.33-.05.66-.09 1-.09s.67.04 1 .09V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.35-.61-.6-1.28-.72-2"></svg:path>`,
})
export class MdiFileCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileClockIcon],svg[mdi-file-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h8.41A7 7 0 0 0 16 23a7 7 0 0 0 7-7a7 7 0 0 0-5-6.7V8l-6-6zm7 1.5L16.5 9H11zm5 7.5a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m-1 1v5l3.61 2.16l.75-1.22l-2.86-1.69V12z"></svg:path>`,
})
export class MdiFileClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileClockOutlineIcon],svg[mdi-file-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.41A7 7 0 0 0 16 23a7 7 0 0 0 7-7a7 7 0 0 0-5-6.7V8l-6-6zm0 2h7v5h5a7 7 0 0 0-7 7a7 7 0 0 0 1.26 4H4zm12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m-1 1v5l3.61 2.16l.75-1.22l-2.86-1.69V12z"></svg:path>`,
})
export class MdiFileClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCloudIcon],svg[mdi-file-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9.68 13a3.758 3.758 0 0 0-7-1A3.03 3.03 0 0 0 6 17a3 3 0 0 0 3 3h6.5a2.5 2.5 0 0 0 2.5-2.5c0-1.32-1.03-2.39-2.32-2.5"></svg:path>`,
})
export class MdiFileCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCloudOutlineIcon],svg[mdi-file-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-1-3.08c0 1.15-.93 2.08-2.08 2.08H9.5A2.5 2.5 0 0 1 7 16.5c0-1.29 1-2.35 2.23-2.5c.52-1 1.56-1.67 2.77-1.67c1.5 0 2.78 1.09 3.07 2.5c1.07.1 1.93.99 1.93 2.09"></svg:path>`,
})
export class MdiFileCloudOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCodeIcon],svg[mdi-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m.12 13.5l3.74 3.74l1.42-1.41l-2.33-2.33l2.33-2.33l-1.42-1.41zm11.16 0l-3.74-3.74l-1.42 1.41l2.33 2.33l-2.33 2.33l1.42 1.41z"></svg:path>`,
})
export class MdiFileCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCodeOutlineIcon],svg[mdi-file-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-8.46-4.35l2.09 2.09L10.35 19L7 15.65l3.35-3.35l1.28 1.26zm7.46 0L13.65 19l-1.27-1.26l2.09-2.09l-2.09-2.09l1.27-1.26z"></svg:path>`,
})
export class MdiFileCodeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCogIcon],svg[mdi-file-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h6.68a7 7 0 0 1-.68-3a7 7 0 0 1 7-7a7 7 0 0 1 1 .08V8l-6-6zm7 1.5L18.5 9H13zM18 14a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 20 14zm1 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MdiFileCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCogOutlineIcon],svg[mdi-file-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h6v-2H6V4h7v5h5v3h2V8l-6-6m4 12a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 20 14m-1 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MdiFileCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileCompareIcon],svg[mdi-file-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18H6v-2h4zm0-4H6v-2h4zm0-13v1H6c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h4v1h2V1zm10 7v12c0 1.11-.89 2-2 2h-4v-2h4v-9h-4V9h4.5L14 4.5V2zm-4 6h-2v-2h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiFileCompareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDelimitedIcon],svg[mdi-file-delimited-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm1 14l-2 4h-3l2-4H9v-5h6zm-2-7V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileDelimitedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDelimitedOutlineIcon],svg[mdi-file-delimited-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zm-8-1l2-4H9v-5h6v5l-2 4z"></svg:path>`,
})
export class MdiFileDelimitedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentIcon],svg[mdi-file-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"></svg:path>`,
})
export class MdiFileDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentAlertIcon],svg[mdi-file-document-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h2v-2h-2zm0-10v6h2V7zm-9 2h5.5L11 3.5zM4 2h8l6 6v12c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H4v2zm3-4v-2H4v2z"></svg:path>`,
})
export class MdiFileDocumentAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentAlertOutlineIcon],svg[mdi-file-document-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h2v-2h-2zm0-10v6h2V7M6 16h5v2H6m0-6h8v2H6M4 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6M4 4h7v5h5v11H4Z"></svg:path>`,
})
export class MdiFileDocumentAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentArrowRightIcon],svg[mdi-file-document-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 19l-3-3v2h-4v2h4v2zm-10 0c0-.3 0-.7.1-1H6v-2h7.8c.5-.8 1.1-1.5 1.9-2H6v-2h12v1.1c.3-.1.7-.1 1-.1s.7 0 1 .1V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.8c-.5-.9-.8-1.9-.8-3m0-15.5L18.5 9H13z"></svg:path>`,
})
export class MdiFileDocumentArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentArrowRightOutlineIcon],svg[mdi-file-document-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 19l-3-3v2h-4v2h4v2zm-9.2 3H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8l6 6v5.1c-.3-.1-.7-.1-1-.1s-.7 0-1 .1V9h-5V4H6v16h7.1c.1.7.4 1.4.7 2M8 12h8v1.8c-.1.1-.2.1-.3.2H8zm0 4h5v2H8z"></svg:path>`,
})
export class MdiFileDocumentArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentCheckIcon],svg[mdi-file-document-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zM6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.53-.91-.81-1.95-.81-3c0-.33.03-.67.08-1H6v-2h7.81c.46-.8 1.1-1.5 1.87-2H6v-2h12v1.08c.33-.05.67-.08 1-.08c.34 0 .67.03 1 .08V8l-6-6m-1 1.5L18.5 9H13Z"></svg:path>`,
})
export class MdiFileDocumentCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentCheckOutlineIcon],svg[mdi-file-document-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zM6 2a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.36-.62-.61-1.3-.73-2H6V4h7v5h5v4.08c.33-.05.67-.08 1-.08c.34 0 .67.03 1 .08V8l-6-6M8 12v2h8v-2m-8 4v2h5v-2Z"></svg:path>`,
})
export class MdiFileDocumentCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentEditIcon],svg[mdi-file-document-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h4v-1.91L12.09 18H6v-2h8.09l2-2H6v-2h12.09L20 10.09V8l-6-6zm7 1.5L18.5 9H13zm7.15 9.5a.55.55 0 0 0-.4.16l-1.02 1.02l2.09 2.08l1.02-1.01c.21-.22.21-.58 0-.79l-1.3-1.3a.54.54 0 0 0-.39-.16m-2.01 1.77L12 20.92V23h2.08l6.15-6.15z"></svg:path>`,
})
export class MdiFileDocumentEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentEditOutlineIcon],svg[mdi-file-document-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12h8v2H8zm2 8H6V4h7v5h5v3.1l2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4zm-2-2h4.1l.9-.9V16H8zm12.2-5c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1l-2.1-2.1l1-1c.1-.1.2-.2.4-.2m0 3.9L14.1 23H12v-2.1l6.1-6.1z"></svg:path>`,
})
export class MdiFileDocumentEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentMinusIcon],svg[mdi-file-document-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h8v2h-8M6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.53-.91-.81-1.95-.81-3c0-.33.03-.67.08-1H6v-2h7.81c.46-.8 1.1-1.5 1.87-2H6v-2h12v1.08c.33-.05.67-.08 1-.08c.34 0 .67.03 1 .08V8l-6-6m-1 1.5L18.5 9H13Z"></svg:path>`,
})
export class MdiFileDocumentMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentMinusOutlineIcon],svg[mdi-file-document-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18h-8v2h8M6 2a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.36-.62-.61-1.3-.73-2H6V4h7v5h5v4.08c.33-.05.67-.08 1-.08c.34 0 .67.03 1 .08V8l-6-6M8 12v2h8v-2m-8 4v2h5v-2Z"></svg:path>`,
})
export class MdiFileDocumentMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentMultipleIcon],svg[mdi-file-document-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v18h16v2H4c-1.1 0-2-.9-2-2V4zm11 3h5.5L15 1.5zM8 0h8l6 6v12c0 1.11-.89 2-2 2H8a2 2 0 0 1-2-2V2c0-1.11.89-2 2-2m9 16v-2H8v2zm3-4v-2H8v2z"></svg:path>`,
})
export class MdiFileDocumentMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentMultipleOutlineIcon],svg[mdi-file-document-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0H8C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6zm4 18H8V2h7v5h5zM4 4v18h16v2H4c-1.1 0-2-.9-2-2V4zm6 6v2h8v-2zm0 4v2h5v-2z"></svg:path>`,
})
export class MdiFileDocumentMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentOutlineIcon],svg[mdi-file-document-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 2h7v5h5v11H6zm2 8v2h8v-2zm0 4v2h5v-2z"></svg:path>`,
})
export class MdiFileDocumentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentPlusIcon],svg[mdi-file-document-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.53-.91-.81-1.95-.81-3c0-.33.03-.67.08-1H6v-2h7.81c.46-.8 1.1-1.5 1.87-2H6v-2h12v1.08c.33-.05.67-.08 1-.08s.67.03 1 .08V8zm-1 7V3.5L18.5 9zm5 6v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiFileDocumentPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentPlusOutlineIcon],svg[mdi-file-document-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3M6 2a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.36-.62-.61-1.3-.73-2H6V4h7v5h5v4.08c.33-.05.67-.08 1-.08c.34 0 .67.03 1 .08V8l-6-6M8 12v2h8v-2m-8 4v2h5v-2Z"></svg:path>`,
})
export class MdiFileDocumentPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentRefreshIcon],svg[mdi-file-document-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h8l6 6v4.17c-.5-.11-1-.17-1.5-.17H6v2h7.81c-.55.58-1 1.25-1.31 2H6v2h6v.5c0 1.29.38 2.5 1 3.5H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m7 7h5.5L13 3.5zm5 5.5c1.11 0 2.11.45 2.83 1.17L22 14.5v4h-4l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4"></svg:path>`,
})
export class MdiFileDocumentRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentRefreshOutlineIcon],svg[mdi-file-document-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c-.53 0-1.04.21-1.41.59C4.21 2.96 4 3.47 4 4v16c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59h7c-.37-.6-.66-1.28-.83-2H6V4h7v5h5v3h.5c.5 0 1 .06 1.5.17V8l-6-6zm6 16c.07-.7.24-1.38.5-2H8v2zm1.81-4c.62-.64 1.36-1.15 2.19-1.5V12H8v2zm4.19.5c1.11 0 2.11.45 2.83 1.17L22 14.5v4h-4l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4"></svg:path>`,
})
export class MdiFileDocumentRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentRemoveIcon],svg[mdi-file-document-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.12 15.46L19 17.59l-2.12-2.13l-1.42 1.42L17.59 19l-2.13 2.12l1.42 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12M6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.53-.91-.81-1.95-.81-3c0-.33.03-.67.08-1H6v-2h7.81c.46-.8 1.1-1.5 1.87-2H6v-2h12v1.08c.33-.05.67-.08 1-.08c.34 0 .67.03 1 .08V8l-6-6m-1 1.5L18.5 9H13Z"></svg:path>`,
})
export class MdiFileDocumentRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentRemoveOutlineIcon],svg[mdi-file-document-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.54 21.12L20.41 19l2.13-2.12l-1.42-1.42L19 17.59l-2.12-2.13l-1.42 1.42L17.59 19l-2.13 2.12l1.42 1.42L19 20.41l2.12 2.13M6 2a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.36-.62-.61-1.3-.73-2H6V4h7v5h5v4.08c.33-.05.67-.08 1-.08c.34 0 .67.03 1 .08V8l-6-6M8 12v2h8v-2m-8 4v2h5v-2Z"></svg:path>`,
})
export class MdiFileDocumentRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDownloadIcon],svg[mdi-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm-2 17l-4-4h2.5v-3h3v3H16zm1-10V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileDownloadOutlineIcon],svg[mdi-file-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-1l-4-4h2.5v-3h3v3H16z"></svg:path>`,
})
export class MdiFileDownloadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileEditIcon],svg[mdi-file-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4v-1.9l10-10V8l-6-6zm7 1.5L18.5 9H13zm7.1 9.5c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-2 1.8L12 20.9V23h2.1l6.1-6.1z"></svg:path>`,
})
export class MdiFileEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileEditOutlineIcon],svg[mdi-file-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20H6V4h7v5h5v3.1l2-2V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4zm10.2-7c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1l-2.1-2.1l1-1c.1-.1.2-.2.4-.2m0 3.9L14.1 23H12v-2.1l6.1-6.1z"></svg:path>`,
})
export class MdiFileEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileExcelIcon],svg[mdi-file-excel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm1.8 18H14l-2-3.4l-2 3.4H8.2l2.9-4.5L8.2 11H10l2 3.4l2-3.4h1.8l-2.9 4.5zM13 9V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileExcelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileExcelBoxIcon],svg[mdi-file-excel-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.2 17h-2L12 13.2L9.8 17h-2l3.2-5l-3.2-5h2l2.2 3.8L14.2 7h2L13 12m6-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiFileExcelBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileExcelBoxOutlineIcon],svg[mdi-file-excel-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 2h14v14H5zm8 7l3.2 5h-2L12 13.2L9.8 17h-2l3.2-5l-3.2-5h2l2.2 3.8L14.2 7h2z"></svg:path>`,
})
export class MdiFileExcelBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileExcelOutlineIcon],svg[mdi-file-excel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-5.1-5.5l2.9 4.5H14l-2-3.4l-2 3.4H8.2l2.9-4.5L8.2 10H10l2 3.4l2-3.4h1.8z"></svg:path>`,
})
export class MdiFileExcelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileExportIcon],svg[mdi-file-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"></svg:path>`,
})
export class MdiFileExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileExportOutlineIcon],svg[mdi-file-export-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zm-2-9v7.1L13.9 16l-2.8 2.8L8.3 16l2.8-2.8L8.9 11z"></svg:path>`,
})
export class MdiFileExportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileEyeIcon],svg[mdi-file-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18c.56 0 1 .44 1 1s-.44 1-1 1s-1-.44-1-1s.44-1 1-1m0-3c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5m-7.86-1.75L8.85 19l.29-.74C10.43 15.06 13.5 13 17 13c1.05 0 2.06.21 3 .56V8l-6-6H6c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h4.5c-.55-.66-1-1.42-1.36-2.25M13 3.5L18.5 9H13z"></svg:path>`,
})
export class MdiFileEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileEyeOutlineIcon],svg[mdi-file-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18c.56 0 1 .44 1 1s-.44 1-1 1s-1-.44-1-1s.44-1 1-1m0-3c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5M9.27 20H6V4h7v5h5v4.07c.7.08 1.36.25 2 .49V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.5a8.2 8.2 0 0 1-1.23-2"></svg:path>`,
})
export class MdiFileEyeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileFindIcon],svg[mdi-file-find-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3m11 6.59V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.76.83-2.76.83a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5c0 1-.31 1.96-.83 2.75z"></svg:path>`,
})
export class MdiFileFindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileFindOutlineIcon],svg[mdi-file-find-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM6 4h7l5 5v8.58l-1.84-1.84a4.97 4.97 0 0 0-.66-6.28A4.92 4.92 0 0 0 12 8c-1.28 0-2.55.5-3.53 1.46c-1.97 1.95-1.97 5.11 0 7.04c.97 1 2.25 1.47 3.53 1.47c.96 0 1.92-.28 2.75-.83L17.6 20H6zm8.11 11.1c-.56.56-1.31.9-2.11.9s-1.55-.33-2.11-.9C9.33 14.54 9 13.79 9 13c0-.81.32-1.56.89-2.12c.56-.57 1.31-.88 2.11-.88s1.55.31 2.11.88c.56.56.89 1.31.89 2.12c0 .79-.32 1.54-.89 2.1"></svg:path>`,
})
export class MdiFileFindOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileGifBoxIcon],svg[mdi-file-gif-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 7.5H7.5v3h1V12H10v1.7c0 .7-.5 1.3-1.3 1.3H7.3c-.8 0-1.3-.7-1.3-1.3v-3.3C6 9.7 6.5 9 7.3 9h1.3c.9 0 1.4.7 1.4 1.3zm3 4.5h-1.5V9H13zm4.5-4.5H16v1h1.5V13H16v2h-1.5V9h3z"></svg:path>`,
})
export class MdiFileGifBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileHiddenIcon],svg[mdi-file-hidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h1v2h-3V7h2zm5.5 0l-2.12-2.12l1.25-1.25L20 8v2h-2v1h-3V9zM13 3.5V2h-1v2h1v2h-2V4H9V2H8v2H6v1H4V4c0-1.11.89-2 2-2h8l2.36 2.36l-1.25 1.25zM20 20a2 2 0 0 1-2 2h-2v-2h2v-1h2zm-2-5h2v3h-2zm-6 7v-2h3v2zm-4 0v-2h3v2zm-2 0a2 2 0 0 1-2-2v-2h2v2h1v2zm-2-8h2v3H4zm0-4h2v3H4zm14 1h2v3h-2zM4 6h2v3H4z"></svg:path>`,
})
export class MdiFileHiddenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImageIcon],svg[mdi-file-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m0 18h12v-8l-4 4l-2-2zM8 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiFileImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImageBoxIcon],svg[mdi-file-image-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.5 13.498l2.5 3.006l3.5-4.506l4.5 6H5m16 1v-14a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" fill="currentColor"></svg:path>`,
})
export class MdiFileImageBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImageMarkerIcon],svg[mdi-file-image-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 20l6-6l1.03 1.03c.25-2.77 2.65-5.03 5.47-5.03c.5 0 1 .08 1.5.22V8l-6-6H6c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h9.91c-.41-.56-.91-1.24-1.36-2zm7-16.5L18.5 9H13zM8 9a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m10.5 3c-1.9 0-3.5 1.6-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5c0-1.9-1.6-3.5-3.5-3.5m0 4.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2"></svg:path>`,
})
export class MdiFileImageMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImageMarkerOutlineIcon],svg[mdi-file-image-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 12c-.83 0-1.5-.67-1.5-1.5S7.67 9 8.5 9s1.5.67 1.5 1.5S9.33 12 8.5 12m5.5 7c-.57-1.14-1-2.36-1-3.5c0-.16 0-.32.03-.47L12 14l-5 5zm-8 1V4h7v5h5v1.03c.17-.03.33-.03.5-.03c.5 0 1 .08 1.5.22V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h9.91c-.41-.56-.91-1.24-1.36-2zm16-4.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiFileImageMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImageMinusIcon],svg[mdi-file-image-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H6l6-6l1.88 1.88c.62-.98 1.48-1.78 2.52-2.28L18 12v1.09c.33-.05.66-.09 1-.09s.67.04 1 .09V8l-6-6H6c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h7.81c-.35-.61-.6-1.28-.72-2M13 3.5L18.5 9H13zM8 9a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m15 9v2h-8v-2z"></svg:path>`,
})
export class MdiFileImageMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImageMinusOutlineIcon],svg[mdi-file-image-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 19l5-5l1.88 1.88c-.55.91-.88 1.98-.88 3.12zm3-8.5C10 9.67 9.33 9 8.5 9S7 9.67 7 10.5S7.67 12 8.5 12s1.5-.67 1.5-1.5m3.09 9.5H6V4h7v5h5v4.09c.33-.05.66-.09 1-.09s.67.04 1 .09V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.35-.61-.6-1.28-.72-2M15 18v2h8v-2z"></svg:path>`,
})
export class MdiFileImageMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImageOutlineIcon],svg[mdi-file-image-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-1-7v6H7l5-5l2 2m-4-5.5A1.5 1.5 0 0 1 8.5 12A1.5 1.5 0 0 1 7 10.5A1.5 1.5 0 0 1 8.5 9a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class MdiFileImageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImagePlusIcon],svg[mdi-file-image-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H6l6-6l1.88 1.88c.62-.98 1.48-1.78 2.52-2.28L18 12v1.09c.33-.05.66-.09 1-.09s.67.04 1 .09V8l-6-6H6c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h7.81c-.35-.61-.6-1.28-.72-2M13 3.5L18.5 9H13zM8 9a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m12 6v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class MdiFileImagePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImagePlusOutlineIcon],svg[mdi-file-image-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 19l5-5l1.88 1.88c-.55.91-.88 1.98-.88 3.12zm3-8.5C10 9.67 9.33 9 8.5 9S7 9.67 7 10.5S7.67 12 8.5 12s1.5-.67 1.5-1.5m3.09 9.5H6V4h7v5h5v4.09c.33-.05.66-.09 1-.09s.67.04 1 .09V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.35-.61-.6-1.28-.72-2M18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiFileImagePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImageRemoveIcon],svg[mdi-file-image-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H6l6-6l1.88 1.88c.62-.98 1.48-1.78 2.52-2.28L18 12v1.09c.33-.05.66-.09 1-.09s.67.04 1 .09V8l-6-6H6c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h7.81c-.35-.61-.6-1.28-.72-2M13 3.5L18.5 9H13zM8 9a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m14.54 7.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12z"></svg:path>`,
})
export class MdiFileImageRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImageRemoveOutlineIcon],svg[mdi-file-image-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 19l5-5l1.88 1.88c-.55.91-.88 1.98-.88 3.12zm3-8.5C10 9.67 9.33 9 8.5 9S7 9.67 7 10.5S7.67 12 8.5 12s1.5-.67 1.5-1.5m3.09 9.5H6V4h7v5h5v4.09c.33-.05.66-.09 1-.09s.67.04 1 .09V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.35-.61-.6-1.28-.72-2m8.03-4.54L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12z"></svg:path>`,
})
export class MdiFileImageRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImportIcon],svg[mdi-file-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-2.95 2.22l2.83 2.83L15 11.93V19H7.93l2.12-2.12l-2.83-2.83"></svg:path>`,
})
export class MdiFileImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileImportOutlineIcon],svg[mdi-file-import-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-3-8.07V19H7.93l2.12-2.12l-2.83-2.83l2.83-2.83l2.83 2.83z"></svg:path>`,
})
export class MdiFileImportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileJpgBoxIcon],svg[mdi-file-jpg-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 13.5c0 1.1-.9 1.5-2 1.5s-2-.4-2-1.5V12h1.5v1.5h1V9H9zm5-2c0 .8-.7 1.5-1.5 1.5h-1v2H10V9h2.5c.8 0 1.5.7 1.5 1.5zm5-1h-2.5v3h1V12H19v1.7c0 .7-.5 1.3-1.3 1.3h-1.3c-.8 0-1.3-.7-1.3-1.3v-3.3c-.1-.7.4-1.4 1.2-1.4h1.3c.8 0 1.3.7 1.3 1.3v.2m-7.4 0h1v1h-1z"></svg:path>`,
})
export class MdiFileJpgBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileKeyIcon],svg[mdi-file-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1m9-8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8m4 13h-5.2c-.6-1.6-2.3-2.4-3.8-1.8c-1.6.6-2.4 2.3-1.8 3.8s2.3 2.4 3.8 1.8c.9-.3 1.5-1 1.8-1.8H14v2h2v-2h2m.5-8L13 3.5V9z"></svg:path>`,
})
export class MdiFileKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileKeyOutlineIcon],svg[mdi-file-key-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5m-5.17 6a3 3 0 1 0 0 2H14v2h2v-2h1v-2m-7 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiFileKeyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileLinkIcon],svg[mdi-file-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm-3 18h-1c-1.61 0-4-1.06-4-4c0-2.93 2.39-4 4-4h1v2h-1c-.46 0-2 .17-2 2c0 1.9 1.67 2 2 2h1zm4-5v2H9v-2zm-1 5h-1v-2h1c.46 0 2-.17 2-2c0-1.9-1.67-2-2-2h-1v-2h1c1.61 0 4 1.07 4 4c0 2.94-2.39 4-4 4M13 9V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileLinkOutlineIcon],svg[mdi-file-link-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-7-1h-.25C9.45 19 7 18.22 7 15.25s2.45-3.75 3.75-3.75H11V13h-.25c-.37 0-2.25.13-2.25 2.25c0 2.19 2 2.25 2.25 2.25H11zm3-3h-4v-1.5h4zm-1-4.5h.25c1.3 0 3.75.78 3.75 3.75S14.55 19 13.25 19H13v-1.5h.25c.37 0 2.25-.13 2.25-2.25c0-2.19-2-2.25-2.25-2.25H13z"></svg:path>`,
})
export class MdiFileLinkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileLockIcon],svg[mdi-file-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13c-1.4 0-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3v-1.5c0-1.4-1.4-2.5-2.8-2.5m0 1.2c.8 0 1.5.5 1.5 1.3V17h-3v-1.5c0-.8.7-1.3 1.5-1.3M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6v-3.8c0-1 .4-1.7 1-2.2c.1-.1.2-.1.2-.2v-.3c0-2.7 2.4-4.5 4.8-4.5c.7 0 1.4.2 2 .4V8l-6-6zm7 1.5L18.5 9H13z"></svg:path>`,
})
export class MdiFileLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileLockOpenIcon],svg[mdi-file-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-2.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5v.5h-1.3v-.5c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V17h4.3c.6 0 1.2.6 1.2 1.3M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6v-3.8c0-1 .4-1.7 1-2.2c.1-.1.2-.1.2-.2v-1.3c0-2.7 2.4-4.5 4.8-4.5c.7 0 1.4.2 2 .4V8l-6-6zm7 1.5L18.5 9H13z"></svg:path>`,
})
export class MdiFileLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileLockOpenOutlineIcon],svg[mdi-file-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-2.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5v.5h-1.3v-.5c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V17h4.3c.6 0 1.2.6 1.2 1.3M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6v-2H6V4h7v5h5v1c.7 0 1.4.2 2 .4V8l-6-6z"></svg:path>`,
})
export class MdiFileLockOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileLockOutlineIcon],svg[mdi-file-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13c-1.4 0-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3v-1.5c0-1.4-1.4-2.5-2.8-2.5m0 1.2c.8 0 1.5.5 1.5 1.3V17h-3v-1.5c0-.8.7-1.3 1.5-1.3M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6v-2H6V4h7v5h5v2c.7 0 1.4.2 2 .4V8l-6-6z"></svg:path>`,
})
export class MdiFileLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileMarkerIcon],svg[mdi-file-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 10c.5 0 1 .08 1.5.22V8l-6-6H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h9.91C14.7 20.41 13 17.78 13 15.5c0-3 2.5-5.5 5.5-5.5M13 3.5L18.5 9H13zm5.5 8.5c-1.9 0-3.5 1.6-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5c0-1.9-1.6-3.5-3.5-3.5m0 4.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2"></svg:path>`,
})
export class MdiFileMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileMarkerOutlineIcon],svg[mdi-file-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.55 20c.45.76.95 1.44 1.36 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v2.22c-.5-.14-1-.22-1.5-.22c-.17 0-.33 0-.5.03V9h-5V4H6v16zM22 15.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiFileMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileMinusIcon],svg[mdi-file-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.53-.91-.81-1.95-.81-3c0-3.31 2.69-6 6-6c.34 0 .67.03 1 .08V8zm-1 7V3.5L18.5 9zm10 11h-8v-2h8z"></svg:path>`,
})
export class MdiFileMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileMinusOutlineIcon],svg[mdi-file-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2M23 18h-8v2h8z"></svg:path>`,
})
export class MdiFileMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileMoveIcon],svg[mdi-file-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h4v-3l5 4.5l-5 4.5v-3h-4zm-1-8h5.5L13 3.5zM6 2h8l6 6v4.34c-.63-.22-1.3-.34-2-.34a6 6 0 0 0-6 6c0 1.54.58 2.94 1.53 4H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiFileMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileMoveOutlineIcon],svg[mdi-file-move-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 .41.12.8.34 1.12c.07.11.16.21.25.29c.36.37.86.59 1.41.59h7.53c-.53-.58-.92-1.25-1.18-2H6V4h7v5h5v3c.7 0 1.37.12 2 .34V8zm4 21l5-4.5l-3-2.7l-2-1.8v3h-4v3h4z"></svg:path>`,
})
export class MdiFileMoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileMultipleIcon],svg[mdi-file-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7h5.5L15 1.5zM8 0h8l6 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2M4 4v18h16v2H4a2 2 0 0 1-2-2V4z"></svg:path>`,
})
export class MdiFileMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileMultipleOutlineIcon],svg[mdi-file-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0H8C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6zm4 18H8V2h7v5h5zM4 4v18h16v2H4c-1.1 0-2-.9-2-2V4z"></svg:path>`,
})
export class MdiFileMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileMusicIcon],svg[mdi-file-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 11h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V11h3zm0-4V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileMusicOutlineIcon],svg[mdi-file-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-5-10v2h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V10z"></svg:path>`,
})
export class MdiFileMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileOutlineIcon],svg[mdi-file-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z"></svg:path>`,
})
export class MdiFileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePdfIcon],svg[mdi-file-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.1 9.4c-.02.04-.29 1.76-2.1 4.69c0 0-3.5 1.82-2.67 3.18c.67 1.08 2.32-.04 3.74-2.68c0 0 1.82-.64 4.24-.82c0 0 3.86 1.73 4.39-.11c.52-1.86-3.06-1.44-3.7-1.25c0 0-2-1.35-2.5-3.21c0 0 1.14-3.95-.61-3.9c-1.75.05-1.09 3.13-.79 4.1m.81 1.04c.03.01.47 1.21 1.89 2.46c0 0-2.33.46-3.39.9c0 0 1-1.73 1.5-3.36m3.93 2.72c.58-.16 2.33.15 2.26.48c-.06.33-2.26-.48-2.26-.48M7.77 17c-.53 1.24-1.44 2-1.67 2c-.23 0 .7-1.6 1.67-2m3.14-6.93c0-.07-.36-2.2 0-2.15c.54.08 0 2.08 0 2.15z" fill="currentColor"></svg:path>`,
})
export class MdiFilePdfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePdfBoxIcon],svg[mdi-file-pdf-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9.5 8.5c0 .8-.7 1.5-1.5 1.5H7v2H5.5V9H8c.8 0 1.5.7 1.5 1.5zm5 2c0 .8-.7 1.5-1.5 1.5h-2.5V9H13c.8 0 1.5.7 1.5 1.5zm4-3H17v1h1.5V13H17v2h-1.5V9h3zm-6.5 0h1v3h-1zm-5 0h1v1H7z"></svg:path>`,
})
export class MdiFilePdfBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePdfBoxOutlineIcon],svg[mdi-file-pdf-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v14H5V5h14m-1.1 8.5c-.3-.5-1-.7-2.2-.7c-.4 0-.8 0-1.2.1c-.3-.2-.6-.4-.8-.6c-.6-.5-1.2-1.4-1.5-2.5v-.1c.3-1.3.6-2.8 0-3.5c-.3-.1-.5-.2-.7-.2h-.2c-.4 0-.7.4-.8.7c-.4 1.3-.1 2 .2 3.2c-.2.9-.6 1.8-1 2.8c-.4.7-.7 1.3-1 1.8c-.4.2-.7.3-.9.5c-1.1.7-1.7 1.5-1.8 2v.5l.5.3c.2.2.3.2.5.2c.8 0 1.7-.9 2.9-3h.1c1-.3 2.2-.5 3.9-.7c1 .5 2.2.7 2.9.7c.4 0 .7-.1.9-.3c.2-.2.3-.4.3-.6c0-.3 0-.5-.1-.6M6.8 17.3c0-.4.5-1 1.2-1.6c.1-.1.3-.2.5-.3c-.7 1.1-1.3 1.8-1.7 1.9m4.5-10.6s0-.1.1-.1h.1c.2.2.2.5.1 1.1v.2c-.1.2-.1.5-.2.8c-.3-.9-.3-1.6-.1-2m-1.2 7.6H10c.1-.3.3-.6.5-1c.4-.8.8-1.6 1-2.3c.4.9.9 1.6 1.5 2.1c.1.1.3.2.4.3c-.9.1-2.1.4-3.3.9m7.2-.1h-.2c-.4 0-1.1-.2-1.8-.5c.1-.1.2-.1.2-.1c1.4 0 1.7.2 1.8.3l.1.1c0 .2 0 .2-.1.2z" fill="currentColor"></svg:path>`,
})
export class MdiFilePdfBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePdfOutlineIcon],svg[mdi-file-pdf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-7.08-7.69c-.24-.77-.77-3.23.63-3.27c1.4-.04.48 3.12.48 3.12c.39 1.49 2.02 2.56 2.02 2.56c.5-.15 3.35-.48 2.95 1c-.43 1.48-3.5.09-3.5.09c-1.95.14-3.41.66-3.41.66c-1.13 2.11-2.45 3.03-2.99 2.14c-.67-1.11 2.13-2.54 2.13-2.54c1.45-2.35 1.67-3.72 1.69-3.76m.65.84c-.4 1.3-1.2 2.69-1.2 2.69c.85-.34 2.71-.73 2.71-.73c-1.14-1-1.49-1.95-1.51-1.96m3.14 2.17s1.75.65 1.79.39c.07-.27-1.33-.51-1.79-.39m-5.66 1.49c-.77.3-1.51 1.58-1.33 1.58c.18.01.91-.6 1.33-1.58m2.52-5.55c0-.05.43-1.68 0-1.73c-.3-.03-.01 1.69 0 1.73z" fill="currentColor"></svg:path>`,
})
export class MdiFilePdfOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePercentIcon],svg[mdi-file-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM7.37 20L15 12.35L13.65 11L6 18.65zM13 9h5.5L13 3.5zm-5.5 2A1.5 1.5 0 0 0 6 12.5A1.5 1.5 0 0 0 7.5 14A1.5 1.5 0 0 0 9 12.5A1.5 1.5 0 0 0 7.5 11m6 6a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiFilePercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePercentOutlineIcon],svg[mdi-file-percent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-8-8.5c0 .83-.67 1.5-1.5 1.5S7 12.33 7 11.5S7.67 10 8.5 10s1.5.67 1.5 1.5m6 6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5m0-6.15L8.37 19L7 17.65L14.65 10z"></svg:path>`,
})
export class MdiFilePercentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePhoneIcon],svg[mdi-file-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm3 17.44c0 .31-.25.56-.56.56C11.23 20 7 15.77 7 10.56c0-.31.25-.56.56-.56H9.5c.31 0 .56.25.56.56c0 .69.11 1.36.31 1.98c.06.19.02.41-.14.57L9 14.33c.81 1.57 2.1 2.86 3.67 3.67l1.23-1.23c.15-.16.37-.2.56-.14c.62.2 1.29.32 1.99.32c.3 0 .55.24.55.55zM13 9V3.5L18.5 9z"></svg:path>`,
})
export class MdiFilePhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePhoneOutlineIcon],svg[mdi-file-phone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-9-6.67c.81 1.57 2.1 2.86 3.67 3.67l1.22-1.23c.16-.16.38-.2.57-.14c.62.2 1.29.32 1.98.32c.31 0 .56.24.56.55v1.95c0 .3-.25.55-.56.55C11.23 19 7 14.77 7 9.56c0-.31.25-.56.56-.56H9.5c.31 0 .56.25.56.56c0 .69.11 1.36.31 1.98c.06.19.02.41-.14.57z"></svg:path>`,
})
export class MdiFilePhoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePlusIcon],svg[mdi-file-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.53-.91-.81-1.95-.81-3c0-3.31 2.69-6 6-6c.34 0 .67.03 1 .08V8zm-1 7V3.5L18.5 9zm10 11h-3v3h-2v-3h-3v-2h3v-3h2v3h3z"></svg:path>`,
})
export class MdiFilePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePlusOutlineIcon],svg[mdi-file-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2M23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></svg:path>`,
})
export class MdiFilePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePngBoxIcon],svg[mdi-file-png-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 11.5c0 .8-.7 1.5-1.5 1.5h-1v2H5V9h2.5c.8 0 1.5.7 1.5 1.5zm5 3.5h-1.5l-1-2.5V15H10V9h1.5l1 2.5V9H14zm5-4.5h-2.5v3h1V12H19v1.7c0 .7-.5 1.3-1.3 1.3h-1.3c-.8 0-1.3-.7-1.3-1.3v-3.3c-.1-.7.4-1.4 1.2-1.4h1.3c.8 0 1.3.7 1.3 1.3v.2zm-12.5 0h1v1h-1z"></svg:path>`,
})
export class MdiFilePngBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePowerpointIcon],svg[mdi-file-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.6 12.3h-2v3.2h2.1c.6 0 .9-.2 1.2-.5s.4-.6.4-1.1s-.1-.8-.4-1.1s-.7-.5-1.3-.5M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm1.2 14c-.6.5-1.1.7-2.4.7h-2.2V20H9v-9h3.8c1.3 0 1.9.3 2.4.8c.6.6.8 1.2.8 2.1s-.2 1.6-.8 2.1M13 9V3.5L18.5 9z"></svg:path>`,
})
export class MdiFilePowerpointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePowerpointBoxIcon],svg[mdi-file-powerpoint-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.8 13.4h2.5c1.5 0 2.16-.28 2.8-.82c.64-.55.9-1.33.9-2.35c0-.97-.25-1.73-.9-2.35c-.65-.59-1.27-.88-2.8-.88H8v10h1.8zM19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-9.2 9V8.4h2.3c.66 0 1.17.25 1.5.6s.5.72.5 1.24c0 .56-.18.95-.5 1.26s-.7.5-1.38.5z"></svg:path>`,
})
export class MdiFilePowerpointBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePowerpointBoxOutlineIcon],svg[mdi-file-powerpoint-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 2h14v14H5zm10.1 2.88c-.65-.59-1.27-.88-2.8-.88H8v10h1.8v-3.6h2.5c1.5 0 2.16-.28 2.8-.82c.64-.55.9-1.33.9-2.35c0-.97-.25-1.73-.9-2.35m-1.5 3.62c-.32.31-.7.5-1.38.5H9.8V8.4h2.3c.66 0 1.17.25 1.5.6s.5.72.5 1.24c0 .56-.18.95-.5 1.26"></svg:path>`,
})
export class MdiFilePowerpointBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePowerpointOutlineIcon],svg[mdi-file-powerpoint-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-2.8-9.2c-.5-.5-1.1-.8-2.4-.8H9v9h1.6v-3.3h2.2c1.3 0 1.8-.2 2.4-.7s.8-1.2.8-2.1s-.2-1.5-.8-2.1M13.9 14c-.3.3-.6.5-1.2.5h-2.1v-3.2h2c.6 0 1 .2 1.3.5s.4.6.4 1.1s-.1.8-.4 1.1"></svg:path>`,
})
export class MdiFilePowerpointOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilePresentationBoxIcon],svg[mdi-file-presentation-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16H5V8h14m0-5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiFilePresentationBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileQuestionIcon],svg[mdi-file-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm7 1.5L18.5 9H13zM12 11a3 3 0 0 1 3 3c0 1.88-2.25 2.06-2.25 3.75h-1.5c0-2.44 2.25-2.25 2.25-3.75a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0-1.5 1.5H9a3 3 0 0 1 3-3m-.75 7.5h1.5V20h-1.5z"></svg:path>`,
})
export class MdiFileQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileQuestionOutlineIcon],svg[mdi-file-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-3-7c0 1.89-2.25 2.07-2.25 3.76h-1.5c0-2.44 2.25-2.26 2.25-3.76c0-.82-.67-1.5-1.5-1.5s-1.5.68-1.5 1.5H9c0-1.65 1.34-3 3-3s3 1.35 3 3m-2.25 4.5V19h-1.5v-1.5z"></svg:path>`,
})
export class MdiFileQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileRefreshIcon],svg[mdi-file-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14.5c1.11 0 2.11.45 2.83 1.17L22 14.5v4h-4l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4M13 9h5.5L13 3.5zM6 2h8l6 6v4.17c-.5-.11-1-.17-1.5-.17a6.5 6.5 0 0 0-6.5 6.5c0 1.29.37 2.5 1 3.5H6c-1.12 0-2-.9-2-2V4c0-1.11.89-2 2-2"></svg:path>`,
})
export class MdiFileRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileRefreshOutlineIcon],svg[mdi-file-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14.5c1.11 0 2.11.45 2.83 1.17L22 14.5v4h-4l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4M14 2l6 6v4.17c-.5-.11-1-.17-1.5-.17H18V9h-5V4H6v16h6.17c.17.72.46 1.39.83 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z"></svg:path>`,
})
export class MdiFileRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileRemoveIcon],svg[mdi-file-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.12 22.54L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41L20.41 19l2.13 2.12zM14 2H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.53-.91-.81-1.95-.81-3c0-3.31 2.69-6 6-6c.34 0 .67.03 1 .08V8zm-1 7V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileRemoveOutlineIcon],svg[mdi-file-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2m8.73-.88L20.41 19l2.13-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13z"></svg:path>`,
})
export class MdiFileRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileReplaceIcon],svg[mdi-file-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12h5.5L14 6.5zM8 5h7l6 6v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3h5v2l4-3l-4-3v2H6V7a2 2 0 0 1 2-2m5.5-2H4v13h2v2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h7.5z"></svg:path>`,
})
export class MdiFileReplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileReplaceOutlineIcon],svg[mdi-file-replace-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 3l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v2l4-3l-4-3v2H4V3zm7 7v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2h2v2h11v-9h-5V7H8v6H6V7a2 2 0 0 1 2-2h8z"></svg:path>`,
})
export class MdiFileReplaceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileRestoreIcon],svg[mdi-file-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 9.5c-1.35 0-2.5.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8a5 5 0 0 1 5 5a5 5 0 0 1-5 5"></svg:path>`,
})
export class MdiFileRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
