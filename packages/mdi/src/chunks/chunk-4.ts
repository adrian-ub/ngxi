import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCloverIcon],svg[mdi-clover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.18c3.3-3 5-4.54 5-6.49C17 3.19 15.75 2 14.25 2c-.86 0-1.68.36-2.25 1c-.57-.64-1.39-1-2.31-1C8.19 2 7 3.25 7 4.75c0 1.89 1.7 3.43 5 6.43m-.82.82c-3-3.3-4.54-5-6.49-5C3.19 7 2 8.25 2 9.75c0 .86.36 1.68 1 2.25c-.64.57-1 1.39-1 2.31C2 15.81 3.25 17 4.75 17c1.89 0 3.43-1.7 6.43-5m1.65 0c2.99 3.3 4.53 5 6.48 5c1.5 0 2.69-1.25 2.69-2.75c0-.86-.36-1.68-1-2.25c.64-.57 1-1.39 1-2.31C22 8.19 20.75 7 19.25 7c-1.89 0-3.43 1.7-6.42 5m-.83.82c-3.3 3-5 4.54-5 6.49C7 20.81 8.25 22 9.75 22c.86 0 1.68-.36 2.25-1c.57.64 1.39 1 2.31 1c1.5 0 2.69-1.25 2.69-2.75c0-1.89-1.7-3.43-5-6.43"></svg:path>`,
})
export class MdiCloverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCloverOutlineIcon],svg[mdi-clover-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.61 12.62l.04-.04l.51-.55l.02-.03l-.02-.03c-.16-.19-.34-.37-.5-.55l-.05-.04C8.42 8.97 7.03 7.53 5.58 7.12C5.29 7.04 5 7 4.69 7C3.19 7 2 8.25 2 9.75c0 .63.19 1.25.55 1.75c.13.18.28.35.45.5c-.17.15-.32.32-.45.5c-.36.5-.55 1.14-.55 1.81C2 15.81 3.25 17 4.75 17c.28 0 .56-.04.83-.11c1.42-.39 2.82-1.84 5.03-4.27M8.47 12c-.9.97-1.59 1.69-2.21 2.21c-.83.7-1.26.79-1.51.79c-.45 0-.75-.35-.75-.69c0-.38.14-.65.33-.81L6 12l-1.67-1.5A1 1 0 0 1 4 9.75c0-.45.35-.75.69-.75c.31 0 .74.1 1.57.8c.62.51 1.31 1.23 2.21 2.2m-1.35 6.43c-.08.29-.12.57-.12.88C7 20.81 8.25 22 9.75 22c.63 0 1.25-.19 1.75-.55c.18-.13.35-.28.5-.45c.15.17.32.32.5.45c.5.36 1.14.55 1.81.55c1.5 0 2.69-1.25 2.69-2.75c0-.28-.04-.56-.11-.83c-.39-1.42-1.84-2.82-4.27-5.03l-.04-.04l-.55-.5l-.03-.03l-.03.03l-.55.5l-.04.03c-2.41 2.2-3.85 3.59-4.26 5.05m4.88-2.9c.97.9 1.69 1.59 2.21 2.21c.7.83.79 1.26.79 1.51c0 .45-.35.75-.69.75c-.38 0-.65-.14-.81-.33L12 18l-1.5 1.67c-.17.2-.45.33-.75.33c-.45 0-.75-.35-.75-.69c0-.31.1-.74.8-1.57c.51-.62 1.23-1.31 2.2-2.21m1.39-2.91c2.2 2.41 3.58 3.85 5.04 4.26c.29.08.57.12.88.12c1.5 0 2.69-1.25 2.69-2.75c0-.63-.19-1.25-.55-1.75c-.13-.18-.28-.35-.45-.5c.17-.15.32-.32.45-.5c.36-.5.55-1.13.55-1.81C22 8.19 20.75 7 19.25 7c-.28 0-.56.04-.83.11c-1.42.39-2.82 1.84-5.03 4.27l-.03.04l-.53.58l.53.58zm2.15-.62c.89-.97 1.59-1.69 2.2-2.21c.84-.7 1.26-.79 1.51-.79c.45 0 .75.35.75.69c0 .38-.14.65-.33.81L18 12l1.67 1.5c.2.18.33.45.33.75c0 .45-.35.75-.69.75c-.31 0-.74-.1-1.57-.8c-.61-.51-1.31-1.23-2.2-2.2m-2.92-1.38c2.41-2.2 3.85-3.59 4.26-5.04c.08-.29.12-.58.12-.89C17 3.19 15.75 2 14.25 2c-.63 0-1.25.19-1.75.55c-.18.13-.35.28-.5.45c-.15-.17-.32-.32-.5-.45C11 2.19 10.37 2 9.69 2C8.19 2 7 3.25 7 4.75c0 .28.04.56.11.83C7.5 7 8.95 8.4 11.38 10.62l.04.03l.55.5l.03.03l.03-.02l.56-.51l.03-.04M12 8.47c-.97-.9-1.69-1.59-2.21-2.21C9.09 5.43 9 5 9 4.75c0-.45.35-.75.69-.75c.38 0 .65.14.81.33L12 6l1.5-1.67c.18-.2.45-.33.75-.33c.45 0 .75.35.75.69c0 .31-.1.74-.8 1.57c-.51.62-1.23 1.31-2.2 2.21"></svg:path>`,
})
export class MdiCloverOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoachLampIcon],svg[mdi-coach-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 5l-1-3h-2l-1 3l-6 3h2l.6 3H4V7H2v10h2v-4h5l1 5l2 2l1 2h2l1-2l2-2l2-10h2m-5.84 9h-4.32L10 8h8Z"></svg:path>`,
})
export class MdiCoachLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoachLampVariantIcon],svg[mdi-coach-lamp-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 2L12 4l-2 2.31L5 9h2l2.5 9l2.5 2l.5 2h1l.5-2l2.5-2L19 9h2l-5-2.69L14 4l-.5-2M9 9h8l-2.22 8h-3.56M3 14v8h8.5l-.5-2H8l-3-3v-3Z"></svg:path>`,
})
export class MdiCoachLampVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoatRackIcon],svg[mdi-coat-rack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.33 7.78a1 1 0 0 0-1.67 1.11A2 2 0 1 1 13 10V7.82a3 3 0 1 0-2 0V10a2 2 0 1 1-3.66-1.11a1 1 0 1 0-1.67-1.11A4 4 0 0 0 11 13.46V20a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2v-6.54a4 4 0 0 0 5.33-5.68M12 4a1 1 0 1 1-1 1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiCoatRackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeArrayIcon],svg[mdi-code-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm3 1v12h4v-2H8V8h2V6zm10 10h-2v2h4V6h-4v2h2z"></svg:path>`,
})
export class MdiCodeArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeBlockBracesIcon],svg[mdi-code-block-braces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.1 0-2 .9-2 2s-.9 2-2 2v2c1.1 0 2 .9 2 2s.9 2 2 2h2v-2H5v-1c0-1.1-.9-2-2-2c1.1 0 2-.9 2-2V5h2V3m4 0c1.1 0 2 .9 2 2s.9 2 2 2v2c-1.1 0-2 .9-2 2s-.9 2-2 2H9v-2h2v-1c0-1.1.9-2 2-2c-1.1 0-2-.9-2-2V5H9V3zm11 3v12c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-3h2v3h16V6h-2.97V4H20c1.11 0 2 .89 2 2"></svg:path>`,
})
export class MdiCodeBlockBracesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeBlockBracketsIcon],svg[mdi-code-block-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v10h4v-2H4V5h2V3zm10 8h-2v2h4V3h-4v2h2zm10-5v12c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-3h2v3h16V6h-2.97V4H20c1.11 0 2 .89 2 2"></svg:path>`,
})
export class MdiCodeBlockBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeBlockParenthesesIcon],svg[mdi-code-block-parentheses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.6 3C13.1 4.3 14 6.1 14 8s-.9 3.7-2.4 5l-1.6-.6c1.3-1 2-2.7 2-4.4s-.7-3.4-2-4.4zM4.4 3l1.6.6C4.7 4.6 4 6.3 4 8s.7 3.4 2 4.4l-1.6.6C2.9 11.7 2 9.9 2 8s.9-3.7 2.4-5M22 6v12c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-3h2v3h16V6h-3.97V4H20c1.11 0 2 .89 2 2"></svg:path>`,
})
export class MdiCodeBlockParenthesesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeBlockTagsIcon],svg[mdi-code-block-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.59 3.41L7 4.82L3.82 8L7 11.18L5.59 12.6L1 8zm5.82 0L16 8l-4.59 4.6L10 11.18L13.18 8L10 4.82zM22 6v12c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-4h2v4h16V6h-2.97V4H20c1.11 0 2 .89 2 2"></svg:path>`,
})
export class MdiCodeBlockTagsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeBracesIcon],svg[mdi-code-braces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H3v2h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2v-2H8v-5a2 2 0 0 0-2-2a2 2 0 0 0 2-2V5h2V3m6 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2a2 2 0 0 1-2-2V5h-2V3z"></svg:path>`,
})
export class MdiCodeBracesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeBracesBoxIcon],svg[mdi-code-braces-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8 5H9v2c0 1.1-.9 2-2 2c1.1 0 2 .9 2 2v2h2v2H9c-1.1 0-2-.9-2-2v-1c0-1.1-.9-2-2-2v-2c1.1 0 2-.9 2-2V8c0-1.1.9-2 2-2h2zm8 5c-1.1 0-2 .9-2 2v1c0 1.1-.9 2-2 2h-2v-2h2v-2c0-1.1.9-2 2-2c-1.1 0-2-.9-2-2V8h-2V6h2c1.1 0 2 .9 2 2v1c0 1.1.9 2 2 2z"></svg:path>`,
})
export class MdiCodeBracesBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeBracketsIcon],svg[mdi-code-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v2h3v12h-3v2h5V4M4 4v16h5v-2H6V6h3V4z"></svg:path>`,
})
export class MdiCodeBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeEqualIcon],svg[mdi-code-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13h5v2H6m7-2h5v2h-5m0-6h5v2h-5M6 9h5v2H6M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiCodeEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeGreaterThanIcon],svg[mdi-code-greater-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.41 7.41L15 12l-4.59 4.6L9 15.18L12.18 12L9 8.82M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiCodeGreaterThanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeGreaterThanOrEqualIcon],svg[mdi-code-greater-than-or-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13h5v2h-5m0-6h5v2h-5M6.91 7.41L11.5 12l-4.59 4.6l-1.41-1.42L8.68 12L5.5 8.82M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiCodeGreaterThanOrEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeJsonIcon],svg[mdi-code-json-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h2v2H5v5a2 2 0 0 1-2 2a2 2 0 0 1 2 2v5h2v2H5c-1.07-.27-2-.9-2-2v-4a2 2 0 0 0-2-2H0v-2h1a2 2 0 0 0 2-2V5a2 2 0 0 1 2-2m14 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2a2 2 0 0 1-2-2V5h-2V3zm-7 12a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiCodeJsonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeLessThanIcon],svg[mdi-code-less-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.59 7.41L9 12l4.59 4.6L15 15.18L11.82 12L15 8.82M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiCodeLessThanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeLessThanOrEqualIcon],svg[mdi-code-less-than-or-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13h5v2h-5m0-6h5v2h-5m-2.91-3.59l1.41 1.41L8.32 12l3.18 3.18l-1.41 1.42L5.5 12M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiCodeLessThanOrEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeNotEqualIcon],svg[mdi-code-not-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15h2v2H6m5-4h7v2h-7m0-6h7v2h-7M6 7h2v6H6M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiCodeNotEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeNotEqualVariantIcon],svg[mdi-code-not-equal-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6.5v2.83L8.33 12L11 14.67v2.83L5.5 12M13 6.43L18.57 12L13 17.57v-2.83L15.74 12L13 9.26M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiCodeNotEqualVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeParenthesesIcon],svg[mdi-code-parentheses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.62 3C19.13 5.27 20 8.55 20 12c0 3.44-.87 6.72-2.38 9L16 19.96c1.26-1.89 2-4.83 2-7.96s-.74-6.08-2-7.97zM6.38 3L8 4.04C6.74 5.92 6 8.87 6 12s.74 6.08 2 7.96L6.38 21C4.87 18.73 4 15.45 4 12s.87-6.73 2.38-9"></svg:path>`,
})
export class MdiCodeParenthesesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeParenthesesBoxIcon],svg[mdi-code-parentheses-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 14.3l-1.6.7C6.9 16.5 6 14.3 6 12s.9-4.5 2.4-6l1.6.7C8.7 7.9 8 9.9 8 12s.7 4.1 2 5.3m5.6.7l-1.6-.7c1.3-1.3 2-3.2 2-5.3s-.7-4.1-2-5.3l1.6-.7c1.5 1.5 2.4 3.7 2.4 6s-.9 4.5-2.4 6"></svg:path>`,
})
export class MdiCodeParenthesesBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeStringIcon],svg[mdi-code-string-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm9.5 6h-1A1.5 1.5 0 0 1 10 9.5A1.5 1.5 0 0 1 11.5 8h1A1.5 1.5 0 0 1 14 9.5h2A3.5 3.5 0 0 0 12.5 6h-1A3.5 3.5 0 0 0 8 9.5a3.5 3.5 0 0 0 3.5 3.5h1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H8a3.5 3.5 0 0 0 3.5 3.5h1a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5"></svg:path>`,
})
export class MdiCodeStringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeTagsIcon],svg[mdi-code-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6z"></svg:path>`,
})
export class MdiCodeTagsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodeTagsCheckIcon],svg[mdi-code-tags-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.59 3.41L2 8l4.59 4.6L8 11.18L4.82 8L8 4.82zm5.82 0L11 4.82L14.18 8L11 11.18l1.41 1.42L17 8zm9.18 8.18l-8.09 8.09L9.83 16l-1.41 1.41l5.08 5.09L23 13z"></svg:path>`,
})
export class MdiCodeTagsCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCodepenIcon],svg[mdi-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.21 12l-1.33.89v-1.78zm3.26-2.18V7.34l-4.16 2.78l1.85 1.24zm5.23.3l-4.17-2.78v2.48l2.31 1.54zm-9.39 3.76l4.16 2.78v-2.48l-2.31-1.54zm5.22.3v2.48l4.17-2.78l-1.86-1.24zM12 10.74L10.12 12L12 13.26L13.88 12zM22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-3.82-1.88v-.07l-.01-.05l-.01-.05c-.01-.01-.01-.02-.02-.04l-.01-.02l-.02-.04l-.01-.02l-.02-.03l-.02-.03l-.03-.03l-.03-.02V9.7l-.04-.02l-.01-.01l-5.65-3.76a.53.53 0 0 0-.59 0L6.05 9.67v.01L6 9.7v.02l-.03.02l-.03.03l-.01.03l-.03.03l-.01.02l-.02.04l-.01.02l-.02.04V10h-.01l-.01.05v3.9l.01.05h.01v.05c.01.01.01.02.02.04l.01.02l.02.04l.01.02l.02.03l.02.03l.03.03l.03.02v.02l.04.02l.01.01l5.66 3.77c.08.06.19.08.29.08s.21-.03.3-.08l5.65-3.77l.01-.01l.04-.02v-.02l.03-.02l.03-.03l.02-.03l.02-.03l.01-.02l.02-.04l.01-.02l.02-.04V14h.01l.01-.05zm-1.06 2.77v-1.78l-1.33.89z"></svg:path>`,
})
export class MdiCodepenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeIcon],svg[mdi-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21h18v-2H2M20 8h-2V5h2m0-2H4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeMakerIcon],svg[mdi-coffee-maker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1m-5 2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class MdiCoffeeMakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeMakerCheckIcon],svg[mdi-coffee-maker-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.75 21.16l-2.75-3L16.16 17l1.59 1.59L21.34 15l1.16 1.41zM13 18c0-2.22 1.21-4.15 3-5.19V11H6v5c0 1.64.81 3.09 2.03 4H4V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4h2V2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10.54A5.93 5.93 0 0 1 13 18m-3-9c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1"></svg:path>`,
})
export class MdiCoffeeMakerCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeMakerCheckOutlineIcon],svg[mdi-coffee-maker-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.75 21.16l-2.75-3L16.16 17l1.59 1.59L21.34 15l1.16 1.41zM13 18.21c-.5.49-1.22.79-2 .79c-1.65 0-3-1.35-3-3v-3h6v1.69c.5-.77 1.2-1.42 2-1.88V11H6v5c0 1.64.81 3.09 2.03 4H4V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4h2V2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10.54c-.91-1-1.48-2.33-1.54-3.79M10 9c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1"></svg:path>`,
})
export class MdiCoffeeMakerCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeMakerOutlineIcon],svg[mdi-coffee-maker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1m-8 10v-3h6v3c0 1.65-1.35 3-3 3s-3-1.35-3-3m3-8c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class MdiCoffeeMakerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeOffIcon],svg[mdi-coffee-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.27 2L22 20.72L20.72 22l-.99-1H2v-2h15.73l-2.29-2.29c-.44.18-.94.29-1.44.29H8c-2.21 0-4-1.79-4-4V5.27l-2-2zM22 5v3c0 1.1-.9 2-2 2h-2v3c0 .36-.06.7-.15 1.04L6.81 3H20a2 2 0 0 1 2 2m-2 0h-2v3h2z"></svg:path>`,
})
export class MdiCoffeeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeOffOutlineIcon],svg[mdi-coffee-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3.27l2 2V13c0 2.21 1.79 4 4 4h6c.5 0 1-.11 1.44-.29L17.73 19H2v2h17.73l.99 1L22 20.72L3.27 2zM8 15c-1.1 0-2-.9-2-2V7.27L13.73 15zM20 3H6.81l2 2H16v7.19l1.85 1.85c.09-.34.15-.68.15-1.04v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2z"></svg:path>`,
})
export class MdiCoffeeOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeOutlineIcon],svg[mdi-coffee-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-2h18v2zM20 8V5h-2v3zm0-5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V3zm-4 2H6v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2z"></svg:path>`,
})
export class MdiCoffeeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeToGoIcon],svg[mdi-coffee-to-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-2h14l-1.74-1.76l1.41-1.41L20.84 18l-4.17 4.17l-1.41-1.41L17 19zM17 8V5h-2v3zm0-5a2 2 0 0 1 2 2v3c0 1.11-.89 2-2 2h-2v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V3z"></svg:path>`,
})
export class MdiCoffeeToGoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeToGoOutlineIcon],svg[mdi-coffee-to-go-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v8a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-1h2c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2zm2 2h8v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm10 0h2v3h-2zm1.67 8.83l-1.41 1.41L17 17H3v2h14l-1.74 1.76l1.41 1.41L20.84 18z"></svg:path>`,
})
export class MdiCoffeeToGoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoffinIcon],svg[mdi-coffin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22L5 8l3-6h8l3 6l-3 14zm3-16v2H9v2h2v5h2v-5h2V8h-2V6z"></svg:path>`,
})
export class MdiCoffinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogIcon],svg[mdi-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"></svg:path>`,
})
export class MdiCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogBoxIcon],svg[mdi-cog-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 12c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.29.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.19.69l-.25 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.3L10 16.85c-.44-.18-.83-.41-1.19-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42a.35.35 0 0 1 .08-.45l1.48-1.16c-.03-.22-.05-.45-.05-.68s.02-.46.05-.68l-1.48-1.16a.35.35 0 0 1-.08-.45l1.4-2.42c.09-.16.27-.22.43-.16l1.74.71c.36-.28.75-.52 1.19-.69l.25-1.86c.03-.16.18-.29.35-.29h2.8c.17 0 .32.13.35.29L14 7.15c.43.17.83.41 1.19.69l1.74-.71c.16-.06.34 0 .43.16l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.22.05.45.05.68M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 7c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCogBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogClockwiseIcon],svg[mdi-cog-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0 0 18c2 0 3.92-.66 5.5-1.86l-1.44-1.44A6.995 6.995 0 0 1 5 12c0-3.87 3.13-7 7-7s7 3.13 7 7h-3l4 4l4-4h-3a9 9 0 0 0-9-9M7.71 13.16c-.09.07-.12.19-.07.29l.9 1.55c.06.12.18.12.28.12l1.13-.45q.36.24.75.42l.18 1.19c.02.11.12.19.22.19h1.8c.1.03.21-.06.23-.17l.18-1.18c.27-.12.53-.27.76-.45l1.12.45c.11.04.23-.01.28-.12l.9-1.5c.05-.12.02-.24-.06-.31l-1-.74q.045-.45 0-.9l1-.76c.09-.07.11-.18.06-.29l-.9-1.55a.226.226 0 0 0-.28-.1l-1.12.45c-.24-.17-.5-.3-.77-.42l-.17-1.19a.244.244 0 0 0-.23-.19h-1.76c-.1 0-.19.07-.21.17l-.17 1.18c-.26.12-.53.27-.76.45l-1.15-.42a.234.234 0 0 0-.29.12l-.91 1.5c-.05.12-.02.24.06.31l1 .74q-.03.225 0 .45q-.015.225 0 .45l-1 .74m4.29.31c-.84 0-1.5-.68-1.5-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class MdiCogClockwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogCounterclockwiseIcon],svg[mdi-cog-counterclockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9H0l4 4l4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7a6.995 6.995 0 0 1-11.06 5.7L6.5 19.14C8.08 20.34 10 21 12 21a9 9 0 0 0 0-18m4.29 10.19l-1-.74q.015-.225 0-.45q.03-.225 0-.45l1-.74c.08-.07.11-.19.06-.31L15.44 9a.234.234 0 0 0-.29-.12L14 9.3c-.23-.18-.5-.33-.76-.45l-.17-1.18a.214.214 0 0 0-.21-.17H11.1c-.1 0-.21.08-.23.19l-.17 1.19c-.27.12-.53.25-.77.42l-1.12-.45a.23.23 0 0 0-.28.1l-.9 1.55c-.05.11-.03.22.06.29l1 .76q-.045.45 0 .9l-1 .74c-.08.07-.11.19-.06.31l.9 1.5c.05.11.17.16.28.12l1.12-.45c.23.18.49.33.76.45l.18 1.18c.02.11.13.2.23.17h1.8c.1 0 .21-.08.22-.19l.18-1.19q.39-.18.75-.42l1.13.45c.1 0 .22 0 .28-.12l.9-1.55c.05-.1.02-.22-.07-.29M12 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .82-.66 1.5-1.5 1.5"></svg:path>`,
})
export class MdiCogCounterclockwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogOffIcon],svg[mdi-cog-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.12 21.46L2.4 1.73L1.12 3L4 5.87L2.34 8.73c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.51-.21.96-.48 1.39-.79l4.59 4.59zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5c0-.5.12-.92.29-1.33l4.54 4.54c-.41.18-.83.29-1.33.29m-.26-6.97L8.56 5.35c.19-.1.37-.2.57-.28l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.12.22.07.49-.12.64L19.43 11c.04.34.07.67.07 1s-.03.65-.07.97l2.11 1.66c.19.15.24.42.12.64l-1.16 2.02l-5.03-5.03c.03-.08.03-.17.03-.26c0-1.93-1.57-3.5-3.5-3.5c-.09 0-.17 0-.26.03"></svg:path>`,
})
export class MdiCogOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogOffOutlineIcon],svg[mdi-cog-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L4 5.88L2.34 8.73c-.13.22-.07.49.12.64L4.57 11l-.07 1l.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.51-.2.96-.48 1.39-.78l4.58 4.58zM10 11.9l2.1 2.1H12a2 2 0 0 1-2-2zm3.13 5.49L12.76 20h-1.52l-.37-2.62a5.44 5.44 0 0 1-3.01-1.76l-2.43 1.04l-.75-1.3L6.8 13.8a5.55 5.55 0 0 1 0-3.6L4.69 8.65l.75-1.3l.06.02l2.9 2.92C8.15 10.8 8 11.38 8 12c0 2.21 1.79 4 4 4c.62 0 1.2-.14 1.71-.4l1.12 1.12c-.52.31-1.09.54-1.7.67M10.06 6.86L8.55 5.35c.19-.09.38-.2.58-.28l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.13.22.07.49-.12.64L19.43 11l.07 1l-.07 1l2.11 1.63c.19.15.25.42.12.64l-1.16 2.02l-1.46-1.45l.28-.48l-2.12-1.55c.4-1.17.4-2.44 0-3.61l2.11-1.55l-.75-1.3l-2.41 1.04a5.42 5.42 0 0 0-3.03-1.77L12.75 4h-1.5l-.37 2.61c-.28.06-.56.14-.82.25M12 8c2.21 0 4 1.79 4 4c0 .25-.03.5-.07.73l-4.66-4.66c.23-.04.48-.07.73-.07"></svg:path>`,
})
export class MdiCogOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogOutlineIcon],svg[mdi-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-2 12c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66L4.5 12l.07-1l-2.11-1.63a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.13.22.07.49-.12.64L19.43 11l.07 1l-.07 1l2.11 1.63c.19.15.25.42.12.64l-2 3.46c-.12.22-.39.31-.61.22l-2.49-1c-.52.39-1.06.73-1.69.98l-.37 2.65c-.04.24-.25.42-.5.42zm1.25-18l-.37 2.61c-1.2.25-2.26.89-3.03 1.78L5.44 7.35l-.75 1.3L6.8 10.2a5.55 5.55 0 0 0 0 3.6l-2.12 1.56l.75 1.3l2.43-1.04c.77.88 1.82 1.52 3.01 1.76l.37 2.62h1.52l.37-2.61c1.19-.25 2.24-.89 3.01-1.77l2.43 1.04l.75-1.3l-2.12-1.55c.4-1.17.4-2.44 0-3.61l2.11-1.55l-.75-1.3l-2.41 1.04a5.42 5.42 0 0 0-3.03-1.77L12.75 4z"></svg:path>`,
})
export class MdiCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogPauseIcon],svg[mdi-cog-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.53 22H10c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66c-.04-.32-.07-.64-.07-.97s.03-.66.07-1L2.46 9.37a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.12.22.07.49-.12.64L19.43 11c.04.34.07.67.07 1v.19c-.5-.12-1-.19-1.5-.19c-.92 0-1.78.21-2.56.58c.03-.19.06-.38.06-.58c0-1.93-1.57-3.5-3.5-3.5S8.5 10.07 8.5 12s1.57 3.5 3.5 3.5c.2 0 .39-.03.58-.06a5.97 5.97 0 0 0 .95 6.56M19 15h2v6h-2m-4-6h2v6h-2z"></svg:path>`,
})
export class MdiCogPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogPauseOutlineIcon],svg[mdi-cog-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.54 22H10c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66L4.5 12l.07-1l-2.11-1.63a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.13.22.07.49-.12.64L19.43 11l.07 1v.19c-.5-.12-1-.19-1.5-.19c-.17 0-.34 0-.5.03c0-.62-.1-1.24-.3-1.83l2.11-1.55l-.75-1.3l-2.41 1.04a5.42 5.42 0 0 0-3.03-1.77L12.75 4h-1.5l-.37 2.61c-1.2.25-2.26.89-3.03 1.78L5.44 7.35l-.75 1.3L6.8 10.2a5.55 5.55 0 0 0 0 3.6l-2.12 1.56l.75 1.3l2.43-1.04c.77.88 1.82 1.52 3.01 1.76l.37 2.62h1.11c.26.75.65 1.42 1.19 2m-1.18-6.04c-.12.04-.24.04-.36.04c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4c0 .12 0 .24-.04.36a6.05 6.05 0 0 0-3.6 3.6M14 12c0-1.1-.89-2-2-2s-2 .9-2 2s.9 2 2 2s2-.89 2-2m5 3h2v6h-2m-4-6h2v6h-2z"></svg:path>`,
})
export class MdiCogPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogPlayIcon],svg[mdi-cog-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.53 22H10c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66c-.04-.32-.07-.64-.07-.97s.03-.66.07-1L2.46 9.37a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.12.22.07.49-.12.64L19.43 11c.04.34.07.67.07 1v.19c-.5-.12-1-.19-1.5-.19c-.92 0-1.78.21-2.56.58c.03-.19.06-.38.06-.58c0-1.93-1.57-3.5-3.5-3.5S8.5 10.07 8.5 12s1.57 3.5 3.5 3.5c.2 0 .39-.03.58-.06a5.97 5.97 0 0 0 .95 6.56M16 15v6l5-3z"></svg:path>`,
})
export class MdiCogPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogPlayOutlineIcon],svg[mdi-cog-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.54 22H10c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66L4.5 12l.07-1l-2.11-1.63a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.13.22.07.49-.12.64L19.43 11l.07 1v.19c-.5-.12-1-.19-1.5-.19c-.17 0-.34 0-.5.03c0-.62-.1-1.24-.3-1.83l2.11-1.55l-.75-1.3l-2.41 1.04a5.42 5.42 0 0 0-3.03-1.77L12.75 4h-1.5l-.37 2.61c-1.2.25-2.26.89-3.03 1.78L5.44 7.35l-.75 1.3L6.8 10.2a5.55 5.55 0 0 0 0 3.6l-2.12 1.56l.75 1.3l2.43-1.04c.77.88 1.82 1.52 3.01 1.76l.37 2.62h1.11c.26.75.65 1.42 1.19 2m2.42-9.64c.04-.12.04-.24.04-.36c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4c.12 0 .24 0 .36-.04a6.05 6.05 0 0 1 3.6-3.6M12 14c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m4 1v6l5-3z"></svg:path>`,
})
export class MdiCogPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogRefreshIcon],svg[mdi-cog-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14.5c1.1 0 2.1.4 2.8 1.2l1.2-1.2v4h-4l1.8-1.8c-.5-.4-1.1-.7-1.8-.7c-1.4 0-2.5 1.1-2.5 2.5S16.6 21 18 21c.8 0 1.5-.4 2-1h1.7c-.6 1.5-2 2.5-3.7 2.5c-2.2 0-4-1.8-4-4s1.8-4 4-4m-6.5 4c0-1.1.3-2.1.7-3H12c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 .2 0 .4-.1.5c.8-.3 1.6-.5 2.6-.5c.5 0 1 .1 1.5.2V12c0-.3 0-.7-.1-1l2.1-1.6c.2-.2.2-.4.1-.6l-2-3.5c-.1-.3-.3-.3-.6-.3l-2.5 1c-.5-.4-1.1-.7-1.7-1l-.4-2.7c.1-.1-.2-.3-.4-.3h-4c-.2 0-.5.2-.5.4l-.4 2.7c-.6.2-1.1.6-1.7.9L5 5c-.3 0-.5 0-.7.3l-2 3.5c-.1.2 0 .4.2.6L4.6 11c0 .3-.1.7-.1 1s0 .7.1 1l-2.1 1.7c-.2.2-.2.4-.1.6l2 3.5c.1.2.3.2.6.2l2.5-1c.5.4 1.1.7 1.7 1l.4 2.7c0 .2.2.4.5.4h2.5c-.7-1.1-1.1-2.3-1.1-3.6"></svg:path>`,
})
export class MdiCogRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogRefreshOutlineIcon],svg[mdi-cog-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14.5c1.1 0 2.1.4 2.8 1.2l1.2-1.2v4h-4l1.8-1.8c-.5-.4-1.1-.7-1.8-.7c-1.4 0-2.5 1.1-2.5 2.5S16.6 21 18 21c.8 0 1.5-.4 2-1h1.7c-.6 1.5-2 2.5-3.7 2.5c-2.2 0-4-1.8-4-4s1.8-4 4-4M11.7 20h-.4l-.4-2.6c-1.2-.2-2.2-.9-3-1.8l-2.4 1l-.8-1.3l2.1-1.6q-.6-1.8 0-3.6L4.7 8.7l.8-1.3l2.4 1q1.2-1.35 3-1.8l.3-2.6h1.5l.4 2.6c1.2.2 2.3.9 3 1.8l2.4-1l.8 1.3l-2.1 1.5q.3.9.3 1.8h.5c.5 0 1 .1 1.5.2V12l-.1-1l2.1-1.6c.2-.2.2-.4.1-.6l-2-3.5c-.1-.3-.3-.3-.6-.3l-2.5 1c-.5-.4-1.1-.7-1.7-1l-.4-2.7c.1-.1-.2-.3-.4-.3h-4c-.2 0-.5.2-.5.4l-.4 2.7c-.6.2-1.1.6-1.7.9L5 5c-.3 0-.5 0-.7.3l-2 3.5c-.1.2 0 .4.2.6L4.6 11l-.1 1l.1 1l-2.1 1.7c-.2.2-.2.4-.1.6l2 3.5c.1.2.3.2.6.2l2.5-1c.5.4 1.1.7 1.7 1l.4 2.7c0 .2.2.4.5.4h2.5c-.5-.7-.7-1.4-.9-2.1m4.3-7.7V12c0-2.2-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4c.7-1.7 2.2-3.1 4-3.7m-6-.3c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2"></svg:path>`,
})
export class MdiCogRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogStopIcon],svg[mdi-cog-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.53 22H10c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66c-.04-.32-.07-.64-.07-.97s.03-.66.07-1L2.46 9.37a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.12.22.07.49-.12.64L19.43 11c.04.34.07.67.07 1v.19c-.5-.12-1-.19-1.5-.19c-.92 0-1.78.21-2.56.58c.03-.19.06-.38.06-.58c0-1.93-1.57-3.5-3.5-3.5S8.5 10.07 8.5 12s1.57 3.5 3.5 3.5c.2 0 .39-.03.58-.06a5.97 5.97 0 0 0 .95 6.56M21 15h-6v6h6z"></svg:path>`,
})
export class MdiCogStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogStopOutlineIcon],svg[mdi-cog-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.54 22H10c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66L4.5 12l.07-1l-2.11-1.63a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.13.22.07.49-.12.64L19.43 11l.07 1v.19c-.5-.12-1-.19-1.5-.19c-.17 0-.34 0-.5.03c0-.62-.1-1.24-.3-1.83l2.11-1.55l-.75-1.3l-2.41 1.04a5.42 5.42 0 0 0-3.03-1.77L12.75 4h-1.5l-.37 2.61c-1.2.25-2.26.89-3.03 1.78L5.44 7.35l-.75 1.3L6.8 10.2a5.55 5.55 0 0 0 0 3.6l-2.12 1.56l.75 1.3l2.43-1.04c.77.88 1.82 1.52 3.01 1.76l.37 2.62h1.11c.26.75.65 1.42 1.19 2m-1.18-6.04c-.12.04-.24.04-.36.04c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4c0 .12 0 .24-.04.36a6.05 6.05 0 0 0-3.6 3.6M14 12c0-1.1-.89-2-2-2s-2 .9-2 2s.9 2 2 2s2-.89 2-2m1 3h6v6h-6z"></svg:path>`,
})
export class MdiCogStopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogSyncIcon],svg[mdi-cog-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 18.5c0-1.1.3-2.1.7-3H12c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 .2 0 .4-.1.5c.8-.3 1.6-.5 2.6-.5c.5 0 1 .1 1.5.2V12c0-.3 0-.7-.1-1l2.1-1.6c.2-.2.2-.4.1-.6l-2-3.5c-.1-.3-.3-.3-.6-.3l-2.5 1c-.5-.4-1.1-.7-1.7-1l-.4-2.7c.1-.1-.2-.3-.4-.3h-4c-.2 0-.5.2-.5.4l-.4 2.7c-.6.2-1.1.6-1.7.9L5 5c-.3 0-.5 0-.7.3l-2 3.5c-.1.2 0 .4.2.6L4.6 11c0 .3-.1.7-.1 1s0 .7.1 1l-2.1 1.7c-.2.2-.2.4-.1.6l2 3.5c.1.2.3.2.6.2l2.5-1c.5.4 1.1.7 1.7 1l.4 2.7c0 .2.2.4.5.4h2.5c-.7-1.1-1.1-2.3-1.1-3.6m6.5-4V13l-2.2 2.2l2.2 2.2V16c1.4 0 2.5 1.1 2.5 2.5c0 .4-.1.8-.3 1.1l1.1 1.1c1.2-1.8.7-4.3-1.1-5.5c-.6-.5-1.4-.7-2.2-.7m0 6.5c-1.4 0-2.5-1.1-2.5-2.5c0-.4.1-.8.3-1.1l-1.1-1.1c-1.2 1.8-.7 4.3 1.1 5.5c.7.4 1.4.7 2.2.7V24l2.2-2.2l-2.2-2.3z"></svg:path>`,
})
export class MdiCogSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogSyncOutlineIcon],svg[mdi-cog-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.7 20h-.4l-.4-2.6c-1.2-.2-2.2-.9-3-1.8l-2.4 1l-.8-1.3l2.1-1.6q-.6-1.8 0-3.6L4.7 8.7l.8-1.3l2.4 1q1.2-1.35 3-1.8l.3-2.6h1.5l.4 2.6c1.2.2 2.3.9 3 1.8l2.4-1l.8 1.3l-2.1 1.5q.3.9.3 1.8h.5c.5 0 1 .1 1.5.2V12l-.1-1l2.1-1.6c.2-.2.2-.4.1-.6l-2-3.5c-.1-.3-.3-.3-.6-.3l-2.5 1c-.5-.4-1.1-.7-1.7-1l-.4-2.7c.1-.1-.2-.3-.4-.3h-4c-.2 0-.5.2-.5.4l-.4 2.7c-.6.2-1.1.6-1.7.9L5 5c-.3 0-.5 0-.7.3l-2 3.5c-.1.2 0 .4.2.6L4.6 11l-.1 1l.1 1l-2.1 1.7c-.2.2-.2.4-.1.6l2 3.5c.1.2.3.2.6.2l2.5-1c.5.4 1.1.7 1.7 1l.4 2.7c0 .2.2.4.5.4h2.5c-.5-.7-.7-1.4-.9-2.1m4.3-7.7V12c0-2.2-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4c.7-1.7 2.2-3.1 4-3.7m-6-.3c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m8 2.5V13l-2.2 2.2l2.2 2.2V16c1.4 0 2.5 1.1 2.5 2.5c0 .4-.1.8-.3 1.1l1.1 1.1c1.2-1.8.7-4.3-1.1-5.5c-.6-.5-1.4-.7-2.2-.7m0 6.5c-1.4 0-2.5-1.1-2.5-2.5c0-.4.1-.8.3-1.1l-1.1-1.1c-1.2 1.8-.7 4.3 1.1 5.5c.7.4 1.4.7 2.2.7V24l2.2-2.2l-2.2-2.3z"></svg:path>`,
})
export class MdiCogSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogTransferIcon],svg[mdi-cog-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18v-2l-4 3.5l4 3.5v-2h3v-3zm8-2.5L18 12v2h-3v3h3v2zm-.34-6.77l-2-3.46c-.12-.22-.38-.31-.61-.22l-2.49 1c-.51-.41-1.06-.74-1.69-1l-.37-2.63A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.26-1.17.59-1.69 1L5 5.05c-.23-.09-.5 0-.61.22l-2 3.46c-.13.21-.08.49.11.64L4.57 11c-.04.33-.07.67-.07 1s.03.67.07 1l-2.11 1.63c-.2.15-.25.43-.12.64l2 3.46c.11.27.4.38.66.27l2.5-1c.24.19.5.37.76.53l3.51-3A3.52 3.52 0 0 1 8.5 11.8c.15-1.93 1.82-3.39 3.75-3.25c1.44.09 2.67 1.07 3.1 2.45h4.08l2.11-1.63c.19-.15.24-.43.12-.64"></svg:path>`,
})
export class MdiCogTransferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogTransferOutlineIcon],svg[mdi-cog-transfer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17v-3h3v-2l4 3.5l-4 3.5v-2zm2 1v3h-3v2l-4-3.5l4-3.5v2zM12 8c-2.21 0-4 1.8-4 4c0 1.91 1.35 3.54 3.21 3.92L16 11.86A3.997 3.997 0 0 0 12 8m0 6c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m9.66-5.27l-2-3.46c-.12-.22-.38-.31-.61-.22l-2.49 1c-.51-.41-1.06-.74-1.69-1l-.37-2.63A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.26-1.17.59-1.69 1L5 5.05c-.23-.09-.5 0-.61.22l-2 3.46c-.13.21-.08.49.11.64L4.57 11l-.07 1l.07 1l-2.11 1.63c-.2.15-.25.43-.12.64l2 3.46c.11.27.4.38.66.27l2.5-1c.24.19.5.37.76.53l1.65-1.4c-.77-.33-1.45-.82-2-1.45l-2.41 1l-.77-1.3L6.8 13.8a5.55 5.55 0 0 1 0-3.6L4.69 8.65l.75-1.3l2.41 1c.78-.9 1.83-1.53 3-1.78l.4-2.57h1.5l.37 2.62c1.17.24 2.22.88 3 1.77l2.41-1l.75 1.3l-2.08 1.51c.09.26.16.53.2.8h2l2.1-1.63a.48.48 0 0 0 .16-.64M12 8c-2.21 0-4 1.8-4 4c0 1.91 1.35 3.54 3.21 3.92L16 11.86A3.997 3.997 0 0 0 12 8m0 6c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m0-6c-2.21 0-4 1.8-4 4c0 1.91 1.35 3.54 3.21 3.92L16 11.86A3.997 3.997 0 0 0 12 8m0 6c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2"></svg:path>`,
})
export class MdiCogTransferOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCogsIcon],svg[mdi-cogs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.9 18.45c1.35 0 2.45-1.1 2.45-2.45s-1.1-2.45-2.45-2.45c-1.36 0-2.45 1.1-2.45 2.45s1.09 2.45 2.45 2.45m5.2-1.77l1.48 1.16c.13.11.17.29.08.45l-1.4 2.42a.35.35 0 0 1-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.27 1.85c-.02.17-.17.3-.34.3h-2.8c-.18 0-.32-.13-.35-.3l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.75.7c-.15.06-.34 0-.42-.15l-1.4-2.42a.35.35 0 0 1 .08-.45l1.48-1.16l-.05-.68l.05-.69l-1.48-1.15a.35.35 0 0 1-.08-.45l1.4-2.42c.08-.16.27-.22.42-.16l1.75.71c.36-.28.75-.52 1.18-.69l.26-1.86c.03-.16.17-.29.35-.29h2.8c.17 0 .32.13.34.29l.27 1.86c.42.17.82.41 1.18.69l1.74-.71c.17-.06.34 0 .43.16l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.15l.05.69zM6.69 8.07c.87 0 1.57-.7 1.57-1.57s-.7-1.58-1.57-1.58A1.58 1.58 0 0 0 5.11 6.5c0 .87.71 1.57 1.58 1.57m3.34-1.13l.97.74c.07.07.09.19.03.29l-.9 1.56c-.05.1-.17.14-.27.1l-1.12-.45l-.74.44l-.19 1.19c-.02.11-.11.19-.22.19h-1.8c-.12 0-.21-.08-.23-.19L5.4 9.62l-.76-.44l-1.14.45c-.09.04-.2 0-.26-.1l-.9-1.56c-.06-.1-.03-.22.05-.29l.95-.74l-.03-.44l.03-.44l-.95-.74a.23.23 0 0 1-.05-.29l.9-1.56c.06-.1.17-.14.26-.1l1.13.45l.77-.44l.16-1.19c.02-.11.11-.19.23-.19h1.8c.11 0 .2.08.22.19L8 3.38l.74.44l1.12-.45c.1-.04.22 0 .27.1l.9 1.56c.06.1.04.22-.03.29l-.97.74l.03.44z"></svg:path>`,
})
export class MdiCogsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCollageIcon],svg[mdi-collage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h6V3m2 0v8h8V5c0-1.11-.89-2-2-2m-6 10v8h6c1.11 0 2-.89 2-2v-6"></svg:path>`,
})
export class MdiCollageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCollapseAllIcon],svg[mdi-collapse-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4H4v10H2V4a2 2 0 0 1 2-2h10zm4 2H8a2 2 0 0 0-2 2v10h2V8h10zm4 6v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2m-2 3h-8v2h8z"></svg:path>`,
})
export class MdiCollapseAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCollapseAllOutlineIcon],svg[mdi-collapse-all-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v10h2V4h10V2zm4 4a2 2 0 0 0-2 2v10h2V8h10V6zm12 6v8h-8v-8zm0-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-1 7h-6v-2h6z"></svg:path>`,
})
export class MdiCollapseAllOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiColorHelperIcon],svg[mdi-color-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 24h24v-4H0z"></svg:path>`,
})
export class MdiColorHelperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommaIcon],svg[mdi-comma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"></svg:path>`,
})
export class MdiCommaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommaBoxIcon],svg[mdi-comma-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m10 10V7H9v6h3l-2 4h3z"></svg:path>`,
})
export class MdiCommaBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommaBoxOutlineIcon],svg[mdi-comma-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 17l2-4H9V7h6v6l-2 4zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiCommaBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommaCircleIcon],svg[mdi-comma-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m3 11l-2 4h-3l2-4H9V7h6z"></svg:path>`,
})
export class MdiCommaCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommaCircleOutlineIcon],svg[mdi-comma-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m-2 13h3l2-4V7H9v6h3z"></svg:path>`,
})
export class MdiCommaCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentIcon],svg[mdi-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29z"></svg:path>`,
})
export class MdiCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentAccountIcon],svg[mdi-comment-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm7-8v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1zm-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCommentAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentAccountOutlineIcon],svg[mdi-comment-account-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zm6-2H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2zm-4-8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiCommentAccountOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentAlertIcon],svg[mdi-comment-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22c-.6 0-1-.4-1-1v-3H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-6.1l-3.7 3.7c-.2.2-.4.3-.7.3zm4-11V5h-2v6m2 4v-2h-2v2z"></svg:path>`,
})
export class MdiCommentAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentAlertOutlineIcon],svg[mdi-comment-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zm3-6h-2V6h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiCommentAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentArrowLeftIcon],svg[mdi-comment-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.2 0 .5-.1.7-.3l3.7-3.7H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-4 9h-4.5l1.8 1.8L12 14l-4-4l4-4l1.2 1.2L11.5 9H16z"></svg:path>`,
})
export class MdiCommentArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentArrowLeftOutlineIcon],svg[mdi-comment-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.2 0 .5-.1.7-.3l3.7-3.7H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14h-6.9L10 19.1V16H4V4h16zm-4-5V9h-4.5l1.8-1.8L12 6l-4 4l4 4l1.2-1.2l-1.7-1.8z"></svg:path>`,
})
export class MdiCommentArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentArrowRightIcon],svg[mdi-comment-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.2 0 .5-.1.7-.3l3.7-3.7H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8 12l-1.2-1.2l1.8-1.8H8V9h4.5l-1.8-1.8L12 6l4 4z"></svg:path>`,
})
export class MdiCommentArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentArrowRightOutlineIcon],svg[mdi-comment-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.2 0 .5-.1.7-.3l3.7-3.7H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14h-6.9L10 19.1V16H4V4h16zM8 9v2h4.5l-1.8 1.8L12 14l4-4l-4-4l-1.2 1.2L12.5 9z"></svg:path>`,
})
export class MdiCommentArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentBookmarkIcon],svg[mdi-comment-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.2 0 .5-.1.7-.3l3.7-3.7H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1 11l-2.5-1.5L14 13V5h5z"></svg:path>`,
})
export class MdiCommentBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentBookmarkOutlineIcon],svg[mdi-comment-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22c-.6 0-1-.4-1-1v-3H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-6.1l-3.7 3.7c-.2.2-.4.3-.7.3zm1-6v3.1l3.1-3.1H20V4H4v12zm8-2V6h-5v8l2.5-1.5z"></svg:path>`,
})
export class MdiCommentBookmarkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentCheckIcon],svg[mdi-comment-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v3c0 .55.45 1 1 1h.5c.25 0 .5-.1.7-.29L13.9 18H20c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-9.53 12L7 10.5l1.4-1.41l2.07 2.08L15.6 6L17 7.41z"></svg:path>`,
})
export class MdiCommentCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentCheckOutlineIcon],svg[mdi-comment-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22c-.55 0-1-.45-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 1.11-.89 2-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zm5.6-10L17 7.41L10.47 14L7 10.5l1.4-1.41l2.07 2.08z"></svg:path>`,
})
export class MdiCommentCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentEditIcon],svg[mdi-comment-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v3c0 .55.45 1 1 1h.5c.25 0 .5-.1.7-.29L13.9 18H20c1.1 0 2-.9 2-2V4a2 2 0 0 0-2-2M9.08 15H7v-2.09l6.17-6.19l2.07 2.08zm7.76-7.8l-1.01 1.01l-2.07-2.03l1.01-1.02c.2-.21.54-.22.78 0l1.29 1.25c.21.21.22.55 0 .79"></svg:path>`,
})
export class MdiCommentEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentEditOutlineIcon],svg[mdi-comment-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22c-.55 0-1-.45-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 1.11-.89 2-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zm5.84-7.8l-1.01 1.01l-2.07-2.03l1.01-1.02c.2-.21.54-.22.78 0l1.29 1.25c.21.21.22.55 0 .79M8 11.91l4.17-4.19l2.07 2.08l-4.16 4.2H8z"></svg:path>`,
})
export class MdiCommentEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentEyeIcon],svg[mdi-comment-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12v4c0 1.11-.89 2-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H9a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.5c-.55.67-1 1.42-1.36 2.25L7.85 7l.29.75C9.43 10.94 12.5 13 16 13c1.44 0 2.8-.37 4-1m-4-6c.56 0 1 .44 1 1s-.44 1-1 1s-1-.44-1-1s.44-1 1-1m0-3c2.73 0 5.06 1.66 6 4c-.94 2.34-3.27 4-6 4s-5.06-1.66-6-4c.94-2.34 3.27-4 6-4m0 1.5A2.5 2.5 0 0 0 13.5 7A2.5 2.5 0 0 0 16 9.5A2.5 2.5 0 0 0 18.5 7A2.5 2.5 0 0 0 16 4.5"></svg:path>`,
})
export class MdiCommentEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentEyeOutlineIcon],svg[mdi-comment-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6c.56 0 1 .44 1 1s-.44 1-1 1s-1-.44-1-1s.44-1 1-1m0-3c2.73 0 5.06 1.66 6 4c-.94 2.34-3.27 4-6 4s-5.06-1.66-6-4c.94-2.34 3.27-4 6-4m0 1.5A2.5 2.5 0 0 0 13.5 7A2.5 2.5 0 0 0 16 9.5A2.5 2.5 0 0 0 18.5 7A2.5 2.5 0 0 0 16 4.5m2 8.25V16h-4.92L10 19.08V16H4V6h4.27c.32-.73.73-1.4 1.23-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v3a1 1 0 0 0 1 1h.5c.25 0 .5-.1.7-.29L13.9 18H18c1.11 0 2-.89 2-2v-4c-.63.33-1.3.58-2 .75"></svg:path>`,
})
export class MdiCommentEyeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentFlashIcon],svg[mdi-comment-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 16h-2.2l1.7-4h-5v6h2v5zM15 18h-1.1l-3.7 3.7c-.2.2-.4.3-.7.3H9c-.6 0-1-.4-1-1v-3H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6h-7z"></svg:path>`,
})
export class MdiCommentFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentFlashOutlineIcon],svg[mdi-comment-flash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 16h-2.2l1.7-4h-5v6h2v5zM15 18h-1.1l-3.7 3.7c-.2.2-.4.3-.7.3H9c-.6 0-1-.4-1-1v-3H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6h-2V4H4v12h6v3.1l3.1-3.1H15z"></svg:path>`,
})
export class MdiCommentFlashOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentMinusIcon],svg[mdi-comment-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v3c0 .55.45 1 1 1h.5c.25 0 .5-.1.7-.29L13.9 18H20c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-4 9H8V9h8z"></svg:path>`,
})
export class MdiCommentMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentMinusOutlineIcon],svg[mdi-comment-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11H8V9h8zm6-7v12c0 1.11-.89 2-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9c-.55 0-1-.45-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2m-2 0H4v12h6v3.08L13.08 16H20z"></svg:path>`,
})
export class MdiCommentMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentMultipleIcon],svg[mdi-comment-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29zm-9-8H1V3a2 2 0 0 1 2-2h16v2H3z"></svg:path>`,
})
export class MdiCommentMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentMultipleOutlineIcon],svg[mdi-comment-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L16.08 17H21V7H7v10zM3 15H1V3a2 2 0 0 1 2-2h16v2H3z"></svg:path>`,
})
export class MdiCommentMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentOffIcon],svg[mdi-comment-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.11 21.46l-1.27 1.27L16.11 18H13.9l-3.7 3.71c-.2.19-.45.29-.7.29H9c-.55 0-1-.45-1-1v-3H4a2 2 0 0 1-2-2V3.9L1.11 3l1.28-1.27zM22 16V4a2 2 0 0 0-2-2H5.2l15.75 15.75c.62-.34 1.05-.99 1.05-1.75"></svg:path>`,
})
export class MdiCommentOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentOffOutlineIcon],svg[mdi-comment-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.2 4l-2-2H20a2 2 0 0 1 2 2v12c0 .76-.43 1.41-1.05 1.75L19.2 16h.8V4zm14.91 17.46l-1.27 1.27L16.11 18H13.9l-3.7 3.71c-.2.19-.45.29-.7.29H9c-.55 0-1-.45-1-1v-3H4a2 2 0 0 1-2-2V3.9L1.11 3l1.28-1.27zm-8-5.46L4 5.89V16h6v3.08L13.08 16z"></svg:path>`,
})
export class MdiCommentOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentOutlineIcon],svg[mdi-comment-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12z"></svg:path>`,
})
export class MdiCommentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentPlusIcon],svg[mdi-comment-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm2-16v3H8v2h3v3h2v-3h3V9h-3V6z"></svg:path>`,
})
export class MdiCommentPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentPlusOutlineIcon],svg[mdi-comment-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zm1-10h2v3h3v2h-3v3h-2v-3H8V9h3z"></svg:path>`,
})
export class MdiCommentPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentProcessingIcon],svg[mdi-comment-processing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm8-11V9h-2v2zm-4 0V9h-2v2zm-4 0V9H7v2z"></svg:path>`,
})
export class MdiCommentProcessingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentProcessingOutlineIcon],svg[mdi-comment-processing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zm7-5h-2V9h2zm-4 0h-2V9h2zm-4 0H7V9h2z"></svg:path>`,
})
export class MdiCommentProcessingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentQuestionIcon],svg[mdi-comment-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m8.19 3.5c-.89 0-1.6.18-2.14.54c-.55.36-.83.96-.78 1.65h1.97c0-.28.1-.49.26-.63c.2-.14.42-.21.69-.21c.31 0 .58.08.76.26c.18.17.27.39.27.69c0 .28-.08.53-.22.74c-.17.22-.38.4-.64.54c-.52.32-.86.6-1.07.84c-.19.24-.29.58-.29 1.08h2c0-.28.05-.5.14-.68c.09-.17.26-.32.52-.47c.46-.21.84-.49 1.13-.85c.29-.37.44-.76.44-1.2q0-1.05-.81-1.68c-.54-.41-1.29-.62-2.23-.62M11 12v2h2v-2z"></svg:path>`,
})
export class MdiCommentQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentQuestionOutlineIcon],svg[mdi-comment-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v3a1 1 0 0 0 1 1h.5c.25 0 .5-.1.7-.29L13.9 18H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 2h16v12h-6.92L10 19.08V16H4zm8.19 1.5c-.89 0-1.6.18-2.14.54c-.55.36-.83.96-.78 1.65h1.97c0-.28.1-.49.26-.63c.2-.14.42-.21.69-.21c.31 0 .58.08.76.26c.18.17.27.39.27.69c0 .28-.08.53-.22.74c-.17.22-.38.4-.64.54c-.52.32-.86.6-1.07.84c-.19.24-.29.58-.29 1.08h2c0-.28.05-.5.14-.68c.09-.17.26-.32.52-.47c.46-.21.84-.49 1.13-.85c.29-.37.44-.76.44-1.2q0-1.05-.81-1.68c-.54-.41-1.29-.62-2.23-.62M11 12v2h2v-2z"></svg:path>`,
})
export class MdiCommentQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentQuoteIcon],svg[mdi-comment-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.2 0 .5-.1.7-.3l3.7-3.7H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-9 11H7V8.8L8.3 6h2L8.9 9H11zm6 0h-4V8.8L14.3 6h2l-1.4 3H17z"></svg:path>`,
})
export class MdiCommentQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentQuoteOutlineIcon],svg[mdi-comment-quote-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22c-.6 0-1-.4-1-1v-3H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-6.1l-3.7 3.7c-.2.2-.4.3-.7.3zm1-6v3.1l3.1-3.1H20V4H4v12zm6.3-10l-1.4 3H17v4h-4V8.8L14.3 6zm-6 0L8.9 9H11v4H7V8.8L8.3 6z"></svg:path>`,
})
export class MdiCommentQuoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentRemoveIcon],svg[mdi-comment-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm.41-16L8 7.41L10.59 10L8 12.59L9.41 14L12 11.41L14.59 14L16 12.59L13.41 10L16 7.41L14.59 6L12 8.59z"></svg:path>`,
})
export class MdiCommentRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentRemoveOutlineIcon],svg[mdi-comment-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zM9.41 6L12 8.59L14.59 6L16 7.41L13.41 10L16 12.59L14.59 14L12 11.41L9.41 14L8 12.59L10.59 10L8 7.41z"></svg:path>`,
})
export class MdiCommentRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentSearchIcon],svg[mdi-comment-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 2C18 2 20 4 20 6.5c0 .88-.25 1.7-.69 2.39l3.1 3.11L21 13.39l-3.11-3.08c-.69.44-1.51.69-2.39.69C13 11 11 9 11 6.5S13 2 15.5 2m0 2A2.5 2.5 0 0 0 13 6.5A2.5 2.5 0 0 0 15.5 9A2.5 2.5 0 0 0 18 6.5A2.5 2.5 0 0 0 15.5 4M4 4h5.5c-.31.79-.5 1.64-.5 2.5a6.5 6.5 0 0 0 6.5 6.5c.68 0 1.33-.11 1.96-.31L20 15.23V16a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H9a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiCommentSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentSearchOutlineIcon],svg[mdi-comment-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h5.5a6.9 6.9 0 0 0-.46 2H4v10h6v3.08L13.08 16H18v-2.77l2 2V16a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.19-.45.29-.7.29H9a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m11.5-2C18 2 20 4 20 6.5c0 .88-.25 1.7-.69 2.39l3.1 3.11L21 13.39l-3.11-3.08c-.69.44-1.51.69-2.39.69C13 11 11 9 11 6.5S13 2 15.5 2m0 2A2.5 2.5 0 0 0 13 6.5A2.5 2.5 0 0 0 15.5 9A2.5 2.5 0 0 0 18 6.5A2.5 2.5 0 0 0 15.5 4"></svg:path>`,
})
export class MdiCommentSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentTextIcon],svg[mdi-comment-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zM5 5v2h14V5zm0 4v2h8V9zm0 4v2h10v-2z"></svg:path>`,
})
export class MdiCommentTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentTextMultipleIcon],svg[mdi-comment-text-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15H1V3a2 2 0 0 1 2-2h16v2H3zm9 8a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29zM9 9v2h10V9zm0 4v2h8v-2z"></svg:path>`,
})
export class MdiCommentTextMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentTextMultipleOutlineIcon],svg[mdi-comment-text-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29zm1-6v3.08L16.08 17H21V7H7v10zM3 15H1V3a2 2 0 0 1 2-2h16v2H3zm6-6h10v2H9zm0 4h8v2H9z"></svg:path>`,
})
export class MdiCommentTextMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCommentTextOutlineIcon],svg[mdi-comment-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zM6 7h12v2H6zm0 4h9v2H6z"></svg:path>`,
})
export class MdiCommentTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCompareIcon],svg[mdi-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2z"></svg:path>`,
})
export class MdiCompareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCompareHorizontalIcon],svg[mdi-compare-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14H2v2h7v3l4-4l-4-4zm6-1v-3h7V8h-7V5l-4 4z"></svg:path>`,
})
export class MdiCompareHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCompareRemoveIcon],svg[mdi-compare-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-5V3h5c1.1 0 2 .9 2 2v8.4c-.6-.2-1.3-.4-2-.4zm-9-4h2v22h-2v-2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h5zm0 11l-5 6h5zm5.7 2L14 12v3.7c.4-.7 1-1.2 1.7-1.7m5.4 1.5L19 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1z"></svg:path>`,
})
export class MdiCompareRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCompareVerticalIcon],svg[mdi-compare-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15v7h2v-7h3l-4-4l-4 4zm-1-6h-3V2H8v7H5l4 4z"></svg:path>`,
})
export class MdiCompareVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCompassIcon],svg[mdi-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.19 14.19L6 18l3.81-8.19L18 6m-6-4A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 8.9a1.1 1.1 0 0 0-1.1 1.1a1.1 1.1 0 0 0 1.1 1.1a1.1 1.1 0 0 0 1.1-1.1a1.1 1.1 0 0 0-1.1-1.1"></svg:path>`,
})
export class MdiCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCompassOffIcon],svg[mdi-compass-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 3.5l1.28-1.25l19.47 19.47L20.5 23l-2.8-2.78A10 10 0 0 1 12 22A10 10 0 0 1 2 12c0-2.12.66-4.08 1.78-5.7zM6 18l6.47-3L9 11.53zM18 6l-6.44 3l-5.23-5.24A9.97 9.97 0 0 1 12 2a10 10 0 0 1 10 10c0 2.1-.65 4.06-1.76 5.67L15 12.44z"></svg:path>`,
})
export class MdiCompassOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCompassOffOutlineIcon],svg[mdi-compass-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 3.5l1.28-1.25l19.47 19.47L20.5 23l-2.8-2.78A10 10 0 0 1 12 22A10 10 0 0 1 2 12c0-2.12.66-4.08 1.78-5.7zM7 17l2.39-5.09l-4.16-4.17A8.03 8.03 0 0 0 4 12a8 8 0 0 0 8 8c1.56 0 3-.45 4.26-1.23l-4.17-4.16zM17 7l-2.38 5.05l-2.67-2.67zm-5-5a10 10 0 0 1 10 10c0 2.1-.65 4.06-1.76 5.67l-1.44-1.45C19.56 15 20 13.55 20 12a8 8 0 0 0-8-8c-1.55 0-3 .44-4.22 1.2L6.33 3.76A9.97 9.97 0 0 1 12 2"></svg:path>`,
})
export class MdiCompassOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCompassOutlineIcon],svg[mdi-compass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 17l3.2-6.8L17 7l-3.2 6.8zm5-5.9a.9.9 0 0 0-.9.9a.9.9 0 0 0 .9.9a.9.9 0 0 0 .9-.9a.9.9 0 0 0-.9-.9M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiCompassOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCompassRoseIcon],svg[mdi-compass-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 9l-3-9l-3 9l-9 3l9 3l3 9l3-9l9-3zM4 12l6-2l1 2zm8 8l-2-6l2-1zm0-16l2 6l-2 1zm2 10l-1-2h7zm-5.3 3.3L5 19l1.7-3.7l1.6.5zm8.6-2L19 19l-3.7-1.7l.5-1.6zM6.7 8.7L5 5l3.7 1.7l-.5 1.5zm8.6-2L19 5l-1.7 3.7l-1.6-.5z"></svg:path>`,
})
export class MdiCompassRoseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCompostIcon],svg[mdi-compost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 14a6.98 6.98 0 0 1-2.96 4.76c-.2-.83-1.43-1.51-3.04-1.7c.17-1.19.52-2.3.76-2.94c.38.24.82.38 1.32.38c3.55 0 3-6 3-6s-.5 1-2 1h-1a2.5 2.5 0 0 0-2.13 3.81c.66-.69 1.37-1.31 2.13-1.81c-1.32 1.33-2.33 3-3 4.6c-.63-1.23-1.42-2.17-2-2.6c.47.2.91.5 1.33.8c.11-.24.17-.51.17-.8C11.45 10.77 7 11 7 11c.31.42.5.95.5 1.5v1c0 1.1.9 2 2 2c.5 0 .95-.18 1.3-.5c.23.63.4 1.35.49 2.04c-1.72.15-3.04.85-3.25 1.73C6.21 17.5 5 15.39 5 13c0-3.86 3.14-7 7-7v3l5-4l-5-4v3a9 9 0 0 0 0 18c4.63 0 8.44-3.5 8.94-8z"></svg:path>`,
})
export class MdiCompostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiConcourseCiIcon],svg[mdi-concourse-ci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10.94 12.09a1.06 1.06 0 1 0 .97-1.14a1.06 1.06 0 0 0-.97 1.14m2.6 1.12a2.62 2.62 0 0 1-.96.67l-.01.01a11.17 11.17 0 0 0 1.3 3.03a4.83 4.83 0 0 1-.95.38a4.9 4.9 0 0 1-.68.14l-.08.01l-.1.01l-.19.01c-.12 0-.23.03-.37 0a5 5 0 0 1-.71-.07a5.13 5.13 0 0 1-.7-.17a4.78 4.78 0 0 1-.63-.23a5 5 0 0 1-.53-.32a4.45 4.45 0 0 1-.43-.3c-.12-.09-.22-.19-.3-.26l-.25-.25s.05.1.21.28c.08.08.16.19.28.3a4.93 4.93 0 0 0 .38.37a5.21 5.21 0 0 0 .51.38a5.08 5.08 0 0 0 .63.36a5.43 5.43 0 0 0 .72.29a5.5 5.5 0 0 0 .78.18c.14.03.28.04.42.05l.19.02h.2a5.5 5.5 0 0 0 .8-.05a5.61 5.61 0 0 0 1.32-.35q.24.33.51.64l-.03.02l-.21.14h-.04c-.03.03.05 0 .04 0h-.02l-.06.04l-.14.07l-.07.03l-.04.02l-.01.01h-.01c-.01.01.05-.01.02 0h-.01l-.15.07q-.08.03-.17.07v.01l-.07.02l-.09.03a6.5 6.5 0 0 1-1.59.39a6.4 6.4 0 0 1-.94.04h-.12l-.12-.01l-.26-.02c-.16-.03-.31-.04-.48-.07a6.59 6.59 0 0 1-1.83-.63c-.15-.07-.29-.14-.42-.22c-.13-.08-.25-.16-.37-.24a6.64 6.64 0 0 1-.64-.51a6.35 6.35 0 0 1-.5-.49c-.14-.15-.25-.29-.35-.41c-.09-.12-.16-.2-.22-.28l-.06-.1l.06.11c.04.07.1.17.18.3c.08.13.18.27.32.45a6.5 6.5 0 0 0 .44.55a6.86 6.86 0 0 0 .61.58c.12.1.23.19.36.29c.13.1.26.19.4.28a7.12 7.12 0 0 0 .9.49a7.2 7.2 0 0 0 .99.37c.17.06.35.09.53.13l.27.05l.11.02l.14.02a7.27 7.27 0 0 0 1.04.07a7.38 7.38 0 0 0 1.85-.26l.09-.03l.05-.01l.06-.02c.06-.02.12-.03.16-.05l.18-.06l.17-.06l.15-.04l.06-.05h.02l.05-.02l.01-.01l.03-.01l.22-.11l.28-.14c.19.18.39.34.59.53c0 0 .97 1 1.5.59c.5-.39-.08-1.6-.08-1.6a11.2 11.2 0 0 0-4.14-5.47m-3.38-1.64l-.01-.01a11.18 11.18 0 0 0-3.24-.45a4.72 4.72 0 0 1 .43-1.72l.04-.08l.04-.08l.08-.17c.07-.1.12-.21.19-.31a4.97 4.97 0 0 1 .45-.58a5.05 5.05 0 0 1 .52-.5a4.77 4.77 0 0 1 .54-.4A5.06 5.06 0 0 1 9.74 7a4.88 4.88 0 0 1 .48-.22c.15-.06.28-.09.39-.12c.21-.06.34-.08.34-.08s-.13.01-.35.03c-.1.02-.25.03-.41.07a4.94 4.94 0 0 0-.52.14a5.34 5.34 0 0 0-.59.23a5.08 5.08 0 0 0-.63.34a5.47 5.47 0 0 0-.63.45a5.55 5.55 0 0 0-.57.57c-.09.09-.17.22-.25.33l-.12.15l-.06.08l-.06.09a5.5 5.5 0 0 0-.38.71a5.61 5.61 0 0 0-.41 1.37l-.01.02c-.26.02-.53.05-.8.1v-.14l.01-.25v-.05c0-.04-.01.06-.01.05v-.03l.01-.07l.01-.15l.01-.08v-.04h.01v-.03c0-.01-.01.03-.01.03l.03-.18l.02-.18l.01-.02v-.01l-.01.02l.01-.01v-.01l.01-.04l.01-.1a6.5 6.5 0 0 1 .99-2.38l.06-.09l.07-.1l.16-.21c.1-.12.19-.25.31-.37a6.61 6.61 0 0 1 1.51-1.23c.13-.09.27-.16.4-.22c.13-.08.27-.13.4-.19a6.76 6.76 0 0 1 .77-.28a6.5 6.5 0 0 1 .68-.16c.2-.05.38-.06.53-.08c.15-.02.27-.02.35-.03l.12-.01h-.12c-.08 0-.2-.01-.35-.01c-.15 0-.33 0-.54.02a6.41 6.41 0 0 0-.71.1a7.03 7.03 0 0 0-.82.2c-.14.07-.29.1-.43.16c-.15.05-.3.12-.45.19a7.26 7.26 0 0 0-.89.5a7.33 7.33 0 0 0-.84.64c-.14.12-.27.26-.4.38L5.9 7l-.08.09l-.1.1a7.25 7.25 0 0 0-.6.85a7.38 7.38 0 0 0-.76 1.71l-.03.09l-.01.05l-.02.06l-.05.18l-.04.16l-.03.21l-.03.13c-.01.02-.01.04-.01.07l-.01.02v.06l-.01.03l-.03.25l-.04.44c-.26.07-.52.15-.77.24c0 0-1.35.31-1.28.98c.08.63 1.41.78 1.41.78a11.21 11.21 0 0 0 6.83-.76a2.62 2.62 0 0 1-.08-1.17m9.54-.73a7.19 7.19 0 0 0-.17-1.05c-.03-.17-.1-.34-.15-.52l-.08-.24l-.04-.12l-.05-.14a7.23 7.23 0 0 0-.46-.94a7.35 7.35 0 0 0-1.13-1.48l-.07-.07l-.05-.03l-.03-.05l-.14-.12l-.12-.11l-.15-.12l-.12-.1l-.05-.05l-.01-.01h-.01l-.04-.03l-.03-.02l-.21-.14l-.27-.19q.1-.43.18-.86s.38-1.34-.25-1.6c-.58-.24-1.34.87-1.34.87a11.21 11.21 0 0 0-2.66 6.33a2.63 2.63 0 0 1 1.07.5A11.2 11.2 0 0 0 15.25 8a4.73 4.73 0 0 1 .83.66a4.81 4.81 0 0 1 .45.53l.05.06l.05.08l.11.17c.06.09.12.19.18.3a4.89 4.89 0 0 1 .48 1.36a4.78 4.78 0 0 1 .1.67a4.88 4.88 0 0 1 0 .61a4.76 4.76 0 0 1-.06.52c-.02.15-.05.29-.08.4c-.05.21-.09.34-.09.34l.14-.33c.04-.11.09-.23.13-.37a5.06 5.06 0 0 0 .13-.54a5.34 5.34 0 0 0 .08-.63a5.04 5.04 0 0 0 .01-.72a5.38 5.38 0 0 0-.33-1.54c-.05-.13-.11-.26-.16-.38L17.18 9l-.04-.07l-.05-.1a5.53 5.53 0 0 0-1.42-1.67c.12-.26.22-.51.33-.78l.03.03l.22.12l.03.01v.01h.01c.03.02-.05-.05-.04-.02h.01l.01.01l.06.04l.12.08l.05.05l.06.02l.01.01h.01l-.02-.01h.01l.14.11l.14.1l.02.02l-.01-.01l.01.01l.04.04l.09.05a6.46 6.46 0 0 1 1.6 2l.05.1l.06.12l.11.23c.05.15.12.29.18.45a6.69 6.69 0 0 1 .24.95a6.78 6.78 0 0 1 .11.96c.01.14.01.31 0 .46c0 .18-.01.3-.02.45a6.79 6.79 0 0 1-.13.81a6.4 6.4 0 0 1-.2.67c-.04.2-.11.37-.16.51c-.06.14-.11.24-.14.31l-.06.12l.07-.11c.04-.08.1-.17.17-.3c.07-.14.16-.28.24-.49a6.5 6.5 0 0 0 .25-.67a6.93 6.93 0 0 0 .22-.81c.02-.15.05-.31.07-.46c.02-.16.04-.32.04-.48a7.1 7.1 0 0 0-.01-1.03" fill="currentColor"></svg:path>`,
})
export class MdiConcourseCiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiConeIcon],svg[mdi-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.62 16.68L12.85 2.5A.96.96 0 0 0 12 2a.99.99 0 0 0-.85.47L2.38 16.65h.02c-.25.39-.4.85-.4 1.35c0 1.5 1.3 4 10 4c3.74 0 10-.5 10-4c0-.39-.09-.85-.38-1.32M12 4.9l6 9.68c-1.47-.35-3.4-.58-6-.58c-1.75 0-4.04.12-6 .6zM12 20c-4.42 0-8-.89-8-2c0-1.1 3.58-2 8-2s8 .9 8 2c0 1.11-3.58 2-8 2"></svg:path>`,
})
export class MdiConeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiConeOffIcon],svg[mdi-cone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7.31L9.06 5.86l2.09-3.39A.99.99 0 0 1 12 2c.33 0 .66.16.85.5l8.77 14.18a2.48 2.48 0 0 1 .28 2.02l-4.17-4.17c.08.02.17.03.27.05L12 4.9zm11.61 14.15l-1.27 1.27l-1.67-1.67c-2.14.77-5.06.94-7.17.94c-8.7 0-10-2.5-10-4c0-.5.15-.96.4-1.35h-.02L7.11 9l-6-6l1.28-1.27zM6 14.6c1.96-.48 4.25-.6 6-.6h.11l-3.55-3.55zm11.55 4.84l-3.36-3.36C13.5 16.03 12.76 16 12 16c-4.42 0-8 .9-8 2s3.58 2 8 2c2.16 0 4.11-.21 5.55-.56"></svg:path>`,
})
export class MdiConeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiConnectionIcon],svg[mdi-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.4 7.5c.8.8.8 2.1 0 2.8l-2.8 2.8l-7.8-7.8l2.8-2.8c.8-.8 2.1-.8 2.8 0l1.8 1.8l3-3l1.4 1.4l-3 3zm-5.8 5.8l-1.4-1.4l-2.8 2.8l-2.1-2.1l2.8-2.8l-1.4-1.4l-2.8 2.8l-1.5-1.4l-2.8 2.8c-.8.8-.8 2.1 0 2.8l1.8 1.8l-4 4l1.4 1.4l4-4l1.8 1.8c.8.8 2.1.8 2.8 0l2.8-2.8l-1.4-1.4z"></svg:path>`,
})
export class MdiConnectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiConsoleIcon],svg[mdi-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V7H4v12zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-7 14v-2h5v2zm-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59z"></svg:path>`,
})
export class MdiConsoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiConsoleLineIcon],svg[mdi-console-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19v-3h8v3zm-4.5-6L2.47 7h4.24l4.96 4.95c.58.59.58 1.55 0 2.12L6.74 19H2.5z"></svg:path>`,
})
export class MdiConsoleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiConsoleNetworkIcon],svg[mdi-console-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v2h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM7 7l4 4l-4 4h2.85l3.28-3.28c.37-.39.37-1.02 0-1.42L9.83 7zm10 6h-3v2h3z"></svg:path>`,
})
export class MdiConsoleNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiConsoleNetworkOutlineIcon],svg[mdi-console-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2zm-8-5V5h10v10zm1-8.11l3.56 3.56L8 14h2.53l2.92-2.92c.33-.34.33-.9 0-1.26L10.5 6.89zm8 5.33h-2.67V14H16z"></svg:path>`,
})
export class MdiConsoleNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiConsolidateIcon],svg[mdi-consolidate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h2V4h2v5a2 2 0 0 1-2 2h-2v2l-3-3l3-3m-4 3a2 2 0 1 0-2 2a2 2 0 0 0 2-2M2 11v5h2v-5h2v2l3-3l-3-3v2H4a2 2 0 0 0-2 2m13 5l-3-3l-3 3h2v2a2 2 0 0 0 2 2h5v-2h-5v-2"></svg:path>`,
})
export class MdiConsolidateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContactlessPaymentIcon],svg[mdi-contactless-payment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.79 23c-.42-.17-.72-.55-.79-1c-.05-.26 0-.44.4-1.16c1.5-2.7 2.27-5.75 2.23-8.84c.04-3-.69-5.93-2.13-8.56c-.21-.44-.4-.86-.56-1.31c.06-.38.25-.73.56-.94c.45-.24 1-.19 1.41.09c.28.36.52.72.72 1.14A21.4 21.4 0 0 1 20.8 9c.23 1.81.26 3.65.09 5.47c-.31 2.34-1 4.6-2.06 6.71c-.64 1.28-1 1.82-1.38 1.82zm-4.36-2.21c-.57-.16-.93-.74-.81-1.32c0-.12.31-.67.59-1.23c1.18-2.27 1.69-4.83 1.46-7.38c-.14-1.83-.67-3.61-1.54-5.22c-.63-1.26-.67-1.46-.3-2c.44-.49 1.17-.56 1.71-.14c.72 1.06 1.29 2.22 1.71 3.44c1.28 3.79 1.08 7.92-.56 11.56c-.84 1.89-1.43 2.5-2.26 2.24zm-4.5-2.23a1.31 1.31 0 0 1-.73-.86c0-.2 0-.46.45-1.26a8.99 8.99 0 0 0 0-8.68C7 6.5 7 6.24 7.53 5.76c.19-.22.47-.33.77-.29c.64 0 1 .31 1.54 1.44A10.5 10.5 0 0 1 11.12 12c.04 1.81-.4 3.61-1.27 5.2c-.54 1.05-.81 1.3-1.35 1.39c-.19.02-.39 0-.57-.09zm-4.21-2.13c-.33-.16-.59-.43-.72-.78c-.1-.35 0-.65.4-1.29c.5-.68.74-1.52.69-2.36c.07-.85-.16-1.69-.65-2.39A6 6 0 0 1 3 8.82c-.11-.63.31-1.23 1-1.35c.54-.1.92.13 1.42.89a6.62 6.62 0 0 1 0 7.27c-.51.77-1.09 1-1.69.8z"></svg:path>`,
})
export class MdiContactlessPaymentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContactlessPaymentCircleIcon],svg[mdi-contactless-payment-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M8.43 14.44l-1.36-.61c.28-.56.43-1.16.43-1.78c0-.66-.15-1.29-.43-1.88l1.36-.61Q9 10.775 9 12.05c0 .75-.19 1.55-.57 2.39m3.1 1.5l-1.31-.65c.53-1.13.78-2.29.78-3.43c0-1.13-.25-2.17-.78-3.15l1.31-.75c.66 1.16.97 2.46.97 3.9c0 1.47-.31 2.83-.97 4.08m3.15 1.41l-1.37-.7c.79-1.54 1.19-3.08 1.19-4.65s-.4-3.13-1.19-4.69l1.37-.66C15.55 8.43 16 10.22 16 12c0 1.82-.45 3.6-1.32 5.35"></svg:path>`,
})
export class MdiContactlessPaymentCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContactlessPaymentCircleOutlineIcon],svg[mdi-contactless-payment-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M8.43 14.44l-1.36-.61c.28-.56.43-1.16.43-1.78c0-.66-.15-1.29-.43-1.88l1.36-.61Q9 10.775 9 12.05c0 .75-.19 1.55-.57 2.39m3.1 1.5l-1.31-.65c.53-1.13.78-2.29.78-3.43c0-1.13-.25-2.17-.78-3.15l1.31-.75c.66 1.16.97 2.46.97 3.9c0 1.47-.31 2.83-.97 4.08m3.15 1.41l-1.37-.7c.79-1.54 1.19-3.08 1.19-4.65s-.4-3.13-1.19-4.69l1.37-.66C15.55 8.43 16 10.22 16 12c0 1.82-.45 3.6-1.32 5.35"></svg:path>`,
})
export class MdiContactlessPaymentCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContactsIcon],svg[mdi-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 0H4v2h16zM4 24h16v-2H4zM20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-8 2.75A2.25 2.25 0 0 1 14.25 9A2.25 2.25 0 0 1 12 11.25A2.25 2.25 0 0 1 9.75 9A2.25 2.25 0 0 1 12 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5z"></svg:path>`,
})
export class MdiContactsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContactsOutlineIcon],svg[mdi-contacts-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16zM4 0h16v2H4m0 20h16v2H4m8-12a2.5 2.5 0 0 0 0-5a2.5 2.5 0 0 0 0 5m0-3.5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m5 7.5c0-2.1-3.31-3-5-3s-5 .9-5 3v1h10zm-8.19-.5c.61-.5 2.03-1 3.19-1c1.17 0 2.59.5 3.2 1z"></svg:path>`,
})
export class MdiContactsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContainIcon],svg[mdi-contain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h6v2H4v14h4v2H2zm5 14v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm7-14v18h-6v-2h4V5h-4V3z"></svg:path>`,
})
export class MdiContainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContainEndIcon],svg[mdi-contain-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm7-14v18h-6v-2h4V5h-4V3z"></svg:path>`,
})
export class MdiContainEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContainStartIcon],svg[mdi-contain-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h6v2H4v14h4v2H2zm5 14v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z"></svg:path>`,
})
export class MdiContainStartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentCopyIcon],svg[mdi-content-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12z"></svg:path>`,
})
export class MdiContentCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentCutIcon],svg[mdi-content-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 3l-6 6l2 2l7-7V3m-10 9.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5M6 20a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2M6 8a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m3.64-.36c.23-.5.36-1.05.36-1.64a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1z"></svg:path>`,
})
export class MdiContentCutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentDuplicateIcon],svg[mdi-content-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12v2H4v12h7v-2l4 3l-4 3zm8 4V7H8v6H6V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2h2v2z"></svg:path>`,
})
export class MdiContentDuplicateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentPasteIcon],svg[mdi-content-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H5V4h2v3h10V4h2m-7-2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m7 0h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiContentPasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveIcon],svg[mdi-content-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7z"></svg:path>`,
})
export class MdiContentSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveAlertIcon],svg[mdi-content-save-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9H3V5h10m-3 14c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3m5-16H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7zm8 10h-2V7h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiContentSaveAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveAlertOutlineIcon],svg[mdi-content-save-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7zm2 16H3V5h11.2L17 7.8zm-7-7c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3M4 6h9v4H4zm19 7h-2V7h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiContentSaveAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveAllIcon],svg[mdi-content-save-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7V3H7v4zm-3 10a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3m5-16l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM1 7h2v14h14v2H3a2 2 0 0 1-2-2z"></svg:path>`,
})
export class MdiContentSaveAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveAllOutlineIcon],svg[mdi-content-save-all-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7h2v14h14v2H3a2 2 0 0 1-2-2zm18-6H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5zm2 16H7V3h11.17L21 5.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M8 4h9v4H8z"></svg:path>`,
})
export class MdiContentSaveAllOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveCheckIcon],svg[mdi-content-save-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h6.81c-.39-.66-.64-1.4-.74-2.16a2.994 2.994 0 0 1-1.87-3.81C9.61 13.83 10.73 13 12 13c.44 0 .88.1 1.28.29c2.29-1.79 5.55-1.7 7.72.25V7zm-2 6H5V5h10zm.75 12L13 18l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41z"></svg:path>`,
})
export class MdiContentSaveCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveCheckOutlineIcon],svg[mdi-content-save-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12.8c-.5-.49-1.22-.8-2-.8a2.996 2.996 0 0 0-1 5.82a6.03 6.03 0 0 1 3-5.02M11.09 19H5V5h11.17L19 7.83v4.52c.75.26 1.42.65 2 1.19V7l-4-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.81c-.35-.61-.6-1.28-.72-2M6 10h9V6H6zm9.75 11L13 18l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41z"></svg:path>`,
})
export class MdiContentSaveCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveCogIcon],svg[mdi-content-save-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.7V7l-4-4H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6.7c-.3-.7-.5-1.4-.6-2.2C9.9 18.4 9 17.3 9 16c0-1.7 1.3-3 3-3c.3 0 .6.1.9.2C14.2 11.8 16 11 18 11c1.1 0 2.1.2 3 .7M15 9H5V5h10zm6.7 9.6v-1l1.1-.8c.1-.1.2-.2.1-.3l-1-1.7c0-.1-.2-.1-.3-.1l-1.2.5c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2h-2c-.2 0-.3.1-.3.2l-.2 1.3c-.3.2-.5.3-.8.5l-1.2-.5c-.1 0-.2 0-.3.1l-1 1.7c0 .1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.1-.2.2-.1.3l1 1.7c.1.1.2.1.3.1l1.2-.5c.2.2.5.4.8.5l.2 1.3c.1.1.2.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.2.5-.3.8-.5l1.2.4c.1 0 .2 0 .3-.1l1-1.7c.1-.1.1-.2 0-.2zm-3.7.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"></svg:path>`,
})
export class MdiContentSaveCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveCogOutlineIcon],svg[mdi-content-save-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 19c.1.7.3 1.4.6 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h12l4 4v4.7c-.6-.3-1.3-.5-2-.6V7.8L16.2 5H5v14zm.9-7c-1.7 0-3 1.3-3 3c0 1.3.8 2.4 2 2.8c.1-2.2 1.1-4.1 2.7-5.3c-.5-.3-1.1-.5-1.7-.5m3-2V6H6v4zm7.8 9.6l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1l1.1.8c.1 0 .1.1 0 .2M19.5 18c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiContentSaveCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveEditIcon],svg[mdi-content-save-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 19l.14-.14A2.97 2.97 0 0 1 8 16a3 3 0 0 1 3-3c1.36 0 2.5.9 2.86 2.14L20 9V7l-4-4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6zM4 5h10v4H4zm16.04 7.13c-.14 0-.28.06-.39.17l-1 1l2.05 2.05l1-1c.22-.21.22-.56 0-.77l-1.28-1.28a.53.53 0 0 0-.38-.17m-1.97 1.75L12 19.94V22h2.06l6.06-6.07z"></svg:path>`,
})
export class MdiContentSaveEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveEditOutlineIcon],svg[mdi-content-save-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h6v2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v2.12l-2 2V7.83L15.17 5H4zm10-9V6H5v4zm6.42 2.3a.53.53 0 0 0-.38-.17c-.14 0-.28.06-.39.17l-1 1l2.05 2.05l1-1c.22-.21.22-.56 0-.77zM12 19.94V22h2.06l6.06-6.07l-2.05-2.05zM14 15c0-1.66-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3h.13L14 15.13z"></svg:path>`,
})
export class MdiContentSaveEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveMinusIcon],svg[mdi-content-save-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.81c-.36-.62-.61-1.3-.73-2H12c-1.66 0-3-1.34-3-3s1.34-3 3-3c.68 0 1.34.23 1.87.65A6.02 6.02 0 0 1 18 12c1.05 0 2.09.28 3 .81V7zm-2 6H5V5h10zm-1 8v2h8v-2z"></svg:path>`,
})
export class MdiContentSaveMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveMinusOutlineIcon],svg[mdi-content-save-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.81c-.36-.62-.61-1.3-.73-2H5V5h11.17L19 7.83v4.25c.7.12 1.38.37 2 .73V7l-4-4zm1 3v4h9V6zm6 6c-1.66 0-3 1.34-3 3s1.34 3 3 3c0-1.89.89-3.66 2.39-4.79C13.85 12.5 13 12 12 12m2 5v2h8v-2z"></svg:path>`,
})
export class MdiContentSaveMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveMoveIcon],svg[mdi-content-save-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.81c-.39-.66-.64-1.4-.74-2.16a2.994 2.994 0 0 1-1.87-3.81C9.61 13.83 10.73 13 12 13c.44 0 .88.1 1.28.29c2.29-1.79 5.55-1.7 7.72.25V7zm-2 6H5V5h10zm-2 8h4v-3l5 4.5l-5 4.5v-3h-4z"></svg:path>`,
})
export class MdiContentSaveMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveMoveOutlineIcon],svg[mdi-content-save-move-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17h4v-3l5 4.5l-5 4.5v-3h-4zm1-4.2c-.5-.49-1.22-.8-2-.8a2.996 2.996 0 0 0-1 5.82a6.03 6.03 0 0 1 3-5.02M11.09 19H5V5h11.17L19 7.83v4.52c.75.26 1.42.65 2 1.19V7l-4-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.81c-.35-.61-.6-1.28-.72-2M6 10h9V6H6z"></svg:path>`,
})
export class MdiContentSaveMoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveOffIcon],svg[mdi-content-save-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.2 5l-2-2H17l4 4v10.8L12.2 9H15V5zm13.91 16.46l-1.27 1.27L19.1 21H5a2 2 0 0 1-2-2V4.9L1.11 3l1.28-1.27zM7.11 9L5 6.89V9zm7.78 7.78l-3.67-3.67C9.95 13.46 9 14.61 9 16c0 1.66 1.34 3 3 3c1.39 0 2.54-.95 2.89-2.22"></svg:path>`,
})
export class MdiContentSaveOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveOffOutlineIcon],svg[mdi-content-save-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.2 5l-2-2H17l4 4v10.8l-2-2V7.83L16.17 5zm6.8 5V6H9.2l4 4zm7.11 11.46l-1.27 1.27L19.1 21H5a2 2 0 0 1-2-2V4.9L1.11 3l1.28-1.27zm-5-2.46l-2.52-2.5a2.996 2.996 0 1 1-4.09-4.09L8.11 10H6V7.89l-1-1V19z"></svg:path>`,
})
export class MdiContentSaveOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveOutlineIcon],svg[mdi-content-save-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M6 6h9v4H6z"></svg:path>`,
})
export class MdiContentSaveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSavePlusIcon],svg[mdi-content-save-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.81c-.36-.62-.61-1.3-.73-2H12c-1.66 0-3-1.34-3-3s1.34-3 3-3c.68 0 1.34.23 1.87.65A6.02 6.02 0 0 1 18 12c1.05 0 2.09.28 3 .81V7zm-2 6H5V5h10zm2 5v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiContentSavePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSavePlusOutlineIcon],svg[mdi-content-save-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.81c-.36-.62-.61-1.3-.73-2H5V5h11.17L19 7.83v4.25c.7.12 1.38.37 2 .73V7l-4-4zm1 3v4h9V6zm6 6c-1.66 0-3 1.34-3 3s1.34 3 3 3c0-1.89.89-3.66 2.39-4.79C13.85 12.5 13 12 12 12m5 2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiContentSavePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveSettingsIcon],svg[mdi-content-save-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8V4H5v4zm-3 10a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3m5-16l4 4v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-6 20h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2z"></svg:path>`,
})
export class MdiContentSaveSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveSettingsOutlineIcon],svg[mdi-content-save-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm2-20H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6zm2 16H5V4h11.17L19 6.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M6 5h9v4H6z"></svg:path>`,
})
export class MdiContentSaveSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContrastIcon],svg[mdi-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.38 20.9a2 2 0 0 1-1.28-1.27L19.63 3.1a2 2 0 0 1 1.27 1.28zM20 16v2h-7v-2zM3 6h3V3h2v3h3v2H8v3H6V8H3z"></svg:path>`,
})
export class MdiContrastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContrastBoxIcon],svg[mdi-contrast-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15.5h-5V17h5m2 2H5L19 5M5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiContrastBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiContrastCircleIcon],svg[mdi-contrast-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c-2.21 0-4.21-.9-5.66-2.34L17.66 6.34A8 8 0 0 1 20 12a8 8 0 0 1-8 8M6 8h2V6h1.5v2h2v1.5h-2v2H8v-2H6M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 14h5v-1.5h-5z"></svg:path>`,
})
export class MdiContrastCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiControllerIcon],svg[mdi-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.97 16L5 19c-.33.3-.77.5-1.25.5A1.75 1.75 0 0 1 2 17.75v-.25l1-7.38A4.524 4.524 0 0 1 7.5 6h9c2.36 0 4.29 1.81 4.5 4.12l1 7.38v.25a1.75 1.75 0 0 1-1.75 1.75c-.48 0-.92-.2-1.25-.5l-2.97-3zM7 8v2H5v1h2v2h1v-2h2v-1H8V8zm9.5 0a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75m-1.75 1.75a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75m3.5 0a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75M16.5 11.5a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MdiControllerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiControllerClassicIcon],svg[mdi-controller-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7h12a5 5 0 0 1 5 5a5 5 0 0 1-5 5c-1.64 0-3.09-.79-4-2h-4c-.91 1.21-2.36 2-4 2a5 5 0 0 1-5-5a5 5 0 0 1 5-5m13.75 2.5a1.25 1.25 0 0 0-1.25 1.25A1.25 1.25 0 0 0 19.75 12A1.25 1.25 0 0 0 21 10.75a1.25 1.25 0 0 0-1.25-1.25m-2.5 2.5A1.25 1.25 0 0 0 16 13.25a1.25 1.25 0 0 0 1.25 1.25a1.25 1.25 0 0 0 1.25-1.25A1.25 1.25 0 0 0 17.25 12M5 9v2H3v2h2v2h2v-2h2v-2H7V9z"></svg:path>`,
})
export class MdiControllerClassicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiControllerClassicOutlineIcon],svg[mdi-controller-classic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 7a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5c-1.71 0-3.23-.78-4.24-2h-2.52c-1.01 1.22-2.53 2-4.24 2A5.5 5.5 0 0 1 1 12.5A5.5 5.5 0 0 1 6.5 7zm-11 2A3.5 3.5 0 0 0 3 12.5A3.5 3.5 0 0 0 6.5 16c1.4 0 2.6-.82 3.16-2h4.68c.56 1.18 1.76 2 3.16 2a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 17.5 9zm-.75 1.25h1.5v1.5h1.5v1.5h-1.5v1.5h-1.5v-1.5h-1.5v-1.5h1.5zm11 2.25a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m2-2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiControllerClassicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiControllerOffIcon],svg[mdi-controller-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-6-6H7.97L5 19c-.33.3-.77.5-1.25.5A1.75 1.75 0 0 1 2 17.75v-.25l1-7.38c.1-1.03.53-1.95 1.19-2.66zM5 10v1h2v2h1v-1.73L6.73 10zm11.5-4c2.36 0 4.29 1.81 4.5 4.12l1 7.38v.25c0 .66-.36 1.25-.9 1.53L7.82 6zm0 2a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75m-1.75 1.75a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75m3.5 0a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75M16.5 11.5a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MdiControllerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiControllerXboxIcon],svg[mdi-controller-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path stroke-width=".2" stroke-linejoin="round" stroke="currentColor" d="M12 6.059c1.726 0 6.686-4.314 9.274.863C23.863 12.098 23.216 19 21.49 19c-4.313 0-1.725-4.314-9.49-4.314C4.235 14.686 6.824 19 2.51 19c-1.726 0-2.373-6.902.215-12.078c2.589-5.177 7.55-.863 9.275-.863zM12 7.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3z" fill="currentColor"></svg:path>`,
})
export class MdiControllerXboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieIcon],svg[mdi-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9c0-.5-.04-1-.13-1.5C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1M9.5 6A1.5 1.5 0 0 1 11 7.5A1.5 1.5 0 0 1 9.5 9A1.5 1.5 0 0 1 8 7.5A1.5 1.5 0 0 1 9.5 6m-3 4A1.5 1.5 0 0 1 8 11.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 5 11.5A1.5 1.5 0 0 1 6.5 10m5 1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m5 2a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5M11 16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 11 19a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 11 16"></svg:path>`,
})
export class MdiCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieAlertIcon],svg[mdi-cookie-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1c-5 0-9 4-9 9s4 9 9 9s9-4 9-9c0-.5 0-1-.1-1.5c-.3-.5-.9-.5-.9-.5M4.5 13c-.8 0-1.5-.7-1.5-1.5S3.7 10 4.5 10s1.5.7 1.5 1.5S5.3 13 4.5 13M6 7.5C6 6.7 6.7 6 7.5 6S9 6.7 9 7.5S8.3 9 7.5 9S6 8.3 6 7.5M9 19c-.8 0-1.5-.7-1.5-1.5S8.2 16 9 16s1.5.7 1.5 1.5S9.8 19 9 19m.5-5c-.8 0-1.5-.7-1.5-1.5S8.7 11 9.5 11s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m5 2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m6.5-1h2v2h-2zm2-8v6h-2V7z"></svg:path>`,
})
export class MdiCookieAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieAlertOutlineIcon],svg[mdi-cookie-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5m2.9-4c.1.5.1 1 .1 1.5c0 5-4 9-9 9s-9-4-9-9s4-9 9-9c0 0 1 0 1 1v2h1s1 0 1 1v1h2s1 0 1 1v1h2s.6 0 .9.5M17 12h-1.5c-.8 0-1.5-.7-1.5-1.5V10h-1.5c-.8 0-1.5-.7-1.5-1.5V8h-.5C9.7 8 9 7.3 9 6.5V5.1c-3.1.4-5.5 2.9-5.9 6c.1-.6.7-1.1 1.4-1.1c.8 0 1.5.7 1.5 1.5S5.3 13 4.5 13s-1.4-.6-1.5-1.4c0 .5 0 1 .1 1.5c.4 2.7 2.5 4.9 5.1 5.6c-.4-.3-.7-.7-.7-1.2c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .7-.5 1.3-1.2 1.5c4.2.4 7.7-2.9 7.7-7m-7.5-1c-.8 0-1.5.7-1.5 1.5S8.7 14 9.5 14s1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5M9 7.5C9 6.7 8.3 6 7.5 6S6 6.7 6 7.5S6.7 9 7.5 9S9 8.3 9 7.5M21 17h2v-2h-2zm0-10v6h2V7z"></svg:path>`,
})
export class MdiCookieAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieCheckIcon],svg[mdi-cookie-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14.53v-.03c0-.83.67-1.5 1.5-1.5c.3 0 .58.09.82.24A6.2 6.2 0 0 1 19 13c.66 0 1.3.12 1.89.32a8.4 8.4 0 0 0-.02-2.82C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0 0 18c.45 0 .89-.04 1.32-.11c-.2-.59-.32-1.23-.32-1.89c0-1.78.78-3.37 2-4.47M6.5 13c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13M8 7.5C8 6.67 8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9S8 8.33 8 7.5M11 19c-.83 0-1.5-.67-1.5-1.5S10.17 16 11 16s1.5.67 1.5 1.5S11.83 19 11 19m.5-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m11 3.25L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiCookieCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieCheckOutlineIcon],svg[mdi-cookie-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10h-.5c-.83 0-1.5-.67-1.5-1.5V8h-.5c-.83 0-1.5-.67-1.5-1.5V5.07C7.91 5.5 5.47 8 5.07 11.08A1.494 1.494 0 0 1 8 11.5c0 .83-.67 1.5-1.5 1.5c-.79 0-1.43-.61-1.5-1.38c0 .49 0 .99.09 1.5c.41 2.69 2.45 4.92 5.07 5.62A1.498 1.498 0 0 1 11 16c.83 0 1.5.67 1.5 1.5c0 .72-.5 1.32-1.18 1.46c.58.04 1.14.04 1.68-.04V19c0 .66.12 1.3.32 1.89c-.43.07-.87.11-1.32.11a9 9 0 0 1 0-18s1 0 1 1v2h1s1 0 1 1v1h2s1 0 1 1v1h2s.6 0 .87.5a8.4 8.4 0 0 1 .02 2.82c-.59-.2-1.23-.32-1.89-.32h-.08c.05-.32.08-.66.08-1h-1.5c-.83 0-1.5-.67-1.5-1.5V10zm0 4.5v.03c.66-.58 1.45-1.03 2.32-1.29c-.24-.15-.52-.24-.82-.24c-.83 0-1.5.67-1.5 1.5m-3.5-.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M11 7.5c0-.83-.67-1.5-1.5-1.5S8 6.67 8 7.5S8.67 9 9.5 9S11 8.33 11 7.5m10.34 8.34l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiCookieCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieClockIcon],svg[mdi-cookie-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.97 10.24c-.02-.24-.06-.5-.1-.74C19.6 9 19 9 19 9h-2V8c0-1-1-1-1-1h-2V6c0-1-1-1-1-1h-1V3c0-1-1-1-1-1a9 9 0 0 0-9 9c0 4.71 3.62 8.57 8.23 8.96A7 7 0 0 0 16 23c3.87 0 7-3.13 7-7c0-2.39-1.2-4.5-3.03-5.76m-8.33.29c-.77.62-1.41 1.39-1.86 2.28c-.46-.26-.78-.75-.78-1.31c0-.83.67-1.5 1.5-1.5c.46 0 .86.21 1.14.53M5.5 12c-.83 0-1.5-.67-1.5-1.5S4.67 9 5.5 9S7 9.67 7 10.5S6.33 12 5.5 12M7 6.5C7 5.67 7.67 5 8.5 5s1.5.67 1.5 1.5S9.33 8 8.5 8S7 7.33 7 6.5m1.5 10c0-.46.21-.86.53-1.14c-.03.21-.03.43-.03.64c0 .62.09 1.22.24 1.79c-.44-.29-.74-.74-.74-1.29M16 21c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m.5-4.75l2.86 1.69l-.75 1.22L15 17v-5h1.5z"></svg:path>`,
})
export class MdiCookieClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieClockOutlineIcon],svg[mdi-cookie-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 8C7.67 8 7 7.33 7 6.5S7.67 5 8.5 5s1.5.67 1.5 1.5S9.33 8 8.5 8m8 4H15v5l3.61 2.16l.75-1.22l-2.86-1.69zm6.5 4c0 3.87-3.13 7-7 7c-2.39 0-4.5-1.2-5.77-3.04C5.62 19.57 2 15.71 2 11a9 9 0 0 1 9-9s1 0 1 1v2h1s1 0 1 1v1h2s1 0 1 1v1h2s.6 0 .87.5c.04.24.08.5.1.74A6.98 6.98 0 0 1 23 16M9.16 17.74c-.4-.27-.66-.74-.66-1.24c0-.46.21-.86.53-1.14c.09-.91.35-1.77.75-2.55c-.46-.26-.78-.75-.78-1.31c0-.83.67-1.5 1.5-1.5c.46 0 .86.21 1.14.53c.95-.76 2.1-1.27 3.36-1.45V9h-1.5c-.83 0-1.5-.67-1.5-1.5V7h-.5c-.83 0-1.5-.67-1.5-1.5V4.07C6.91 4.5 4.47 7 4.07 10.08A1.494 1.494 0 0 1 7 10.5c0 .83-.67 1.5-1.5 1.5c-.79 0-1.43-.61-1.5-1.38c0 .49 0 .99.09 1.5c.41 2.69 2.45 4.92 5.07 5.62M21 16c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"></svg:path>`,
})
export class MdiCookieClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieCogIcon],svg[mdi-cookie-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12.29V12c0-.5-.04-1-.13-1.5C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0 0 18h.29a7.4 7.4 0 0 1-.29-2v-.41c-.25.25-.6.41-1 .41c-.83 0-1.5-.67-1.5-1.5S10.17 16 11 16c.59 0 1.1.35 1.34.84A7 7 0 0 1 19 12c.69 0 1.36.11 2 .29M6.5 13c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13m3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9m2 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m11.2 5.6v-1l1.1-.8c.1-.1.2-.2.1-.3l-1-1.7c0-.1-.2-.1-.3-.1l-1.2.5c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2h-2c-.2 0-.3.1-.3.2l-.2 1.3c-.3.2-.5.3-.8.5l-1.2-.5c-.1 0-.2 0-.3.1l-1 1.7c0 .1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.1-.2.2-.1.3l1 1.7c.1.1.2.1.3.1l1.2-.5c.2.2.5.4.8.5l.2 1.3c.1.1.2.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.2.5-.3.8-.5l1.2.4c.1 0 .2 0 .3-.1l1-1.7c.1-.1.1-.2 0-.2zm-3.7.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"></svg:path>`,
})
export class MdiCookieCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieCogOutlineIcon],svg[mdi-cookie-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 10c-.83 0-1.5-.67-1.5-1.5V8h-.5c-.83 0-1.5-.67-1.5-1.5V5.07C7.91 5.5 5.47 8 5.07 11.08A1.494 1.494 0 0 1 8 11.5c0 .83-.67 1.5-1.5 1.5c-.79 0-1.43-.61-1.5-1.38c0 .49 0 .99.09 1.5c.41 2.69 2.45 4.92 5.07 5.62A1.498 1.498 0 0 1 11 16c.59 0 1.1.35 1.34.84c-.18.55-.28 1.13-.34 1.73c-.17.19-.4.33-.68.39c.23.04.46.04.68.04c0 .69.11 1.36.29 2H12a9 9 0 0 1 0-18s1 0 1 1v2h1s1 0 1 1v1h2s1 0 1 1v1h2s.6 0 .87.5c.09.5.13 1 .13 1.5v.29a7.4 7.4 0 0 0-2-.29h-1.5c-.83 0-1.5-.67-1.5-1.5V10zm-3 1c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5M11 7.5c0-.83-.67-1.5-1.5-1.5S8 6.67 8 7.5S8.67 9 9.5 9S11 8.33 11 7.5m12.8 12.9c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiCookieCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieEditIcon],svg[mdi-cookie-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.1 15.03c-.06-.17-.1-.34-.1-.53c0-.83.67-1.5 1.5-1.5c.19 0 .36.04.53.1l2.36-2.36c.3-.3.66-.5 1.05-.62C20.21 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0-9 9c0 4.63 3.5 8.44 8 8.94v-1.81l.14-.13H11c-.83 0-1.5-.67-1.5-1.5S10.17 16 11 16s1.5.67 1.5 1.5v.14zM6.5 13c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13m3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9m2 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m11.35.19l-.98.98l-2.04-2.04l.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72m-3.72-.36l2.04 2.04L15.04 22H13v-2.04z"></svg:path>`,
})
export class MdiCookieEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieEditOutlineIcon],svg[mdi-cookie-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 6c.83 0 1.5.67 1.5 1.5S10.33 9 9.5 9S8 8.33 8 7.5S8.67 6 9.5 6m2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m-.5 5a1.498 1.498 0 0 0-.84 2.74c-2.62-.7-4.66-2.93-5.07-5.62C5 12.61 5 12.11 5 11.62c.07.77.71 1.38 1.5 1.38c.83 0 1.5-.67 1.5-1.5S7.33 10 6.5 10c-.68 0-1.25.46-1.43 1.08C5.47 8 7.91 5.5 11 5.07V6.5c0 .83.67 1.5 1.5 1.5h.5v.5c0 .83.67 1.5 1.5 1.5H16v.5c0 .83.67 1.5 1.5 1.5h.63l1.26-1.26c.3-.3.66-.5 1.05-.62C20.21 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0-9 9c0 4.63 3.5 8.44 8 8.94v-1.81l1.47-1.47c.03-.06.03-.11.03-.16c0-.83-.67-1.5-1.5-1.5m4-1.5c0 .19.04.36.1.53l1.93-1.93c-.17-.06-.34-.1-.53-.1c-.83 0-1.5.67-1.5 1.5m7.85-1.03l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72M13 19.96V22h2.04l6.13-6.12l-2.04-2.05z"></svg:path>`,
})
export class MdiCookieEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieLockIcon],svg[mdi-cookie-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 11c.92 0 1.77.29 2.5.77c0-.42-.05-.85-.13-1.27C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0 0 18c.34 0 .67 0 1-.06V17c0-.92.42-1.74 1.07-2.29A4.51 4.51 0 0 1 18.5 11m-12 2c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13M8 7.5C8 6.67 8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9S8 8.33 8 7.5M11 19c-.83 0-1.5-.67-1.5-1.5S10.17 16 11 16s1.5.67 1.5 1.5S11.83 19 11 19m.5-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m9.5 2v-.5a2.5 2.5 0 0 0-5 0v.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></svg:path>`,
})
export class MdiCookieLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieLockOutlineIcon],svg[mdi-cookie-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m6-2.5v.5c0 .4.16.76.41 1.03A4.5 4.5 0 0 1 18.5 11c.92 0 1.77.29 2.5.77c0-.42-.05-.85-.13-1.27C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0 0 18c.34 0 .67 0 1-.06v-2.02c-.54.08-1.1.08-1.68.04c.68-.14 1.18-.74 1.18-1.46c0-.83-.67-1.5-1.5-1.5a1.498 1.498 0 0 0-.84 2.74c-2.62-.7-4.66-2.93-5.07-5.62C5 12.61 5 12.11 5 11.62c.07.77.71 1.38 1.5 1.38c.83 0 1.5-.67 1.5-1.5S7.33 10 6.5 10c-.68 0-1.25.46-1.43 1.08C5.47 8 7.91 5.5 11 5.07V6.5c0 .83.67 1.5 1.5 1.5h.5v.5c0 .83.67 1.5 1.5 1.5zm-5-2.5c0-.83-.67-1.5-1.5-1.5S8 6.67 8 7.5S8.67 9 9.5 9S11 8.33 11 7.5M22 17v4c0 .55-.45 1-1 1h-5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1v-.5a2.5 2.5 0 0 1 5 0v.5c.55 0 1 .45 1 1m-2-1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.5h3z"></svg:path>`,
})
export class MdiCookieLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieMinusIcon],svg[mdi-cookie-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14.53v-.03c0-.83.67-1.5 1.5-1.5c.3 0 .58.09.82.24A6.2 6.2 0 0 1 19 13c.66 0 1.3.12 1.89.32a8.4 8.4 0 0 0-.02-2.82C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0 0 18c.45 0 .89-.04 1.32-.11c-.2-.59-.32-1.23-.32-1.89c0-1.78.78-3.37 2-4.47M6.5 13c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13M8 7.5C8 6.67 8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9S8 8.33 8 7.5M11 19c-.83 0-1.5-.67-1.5-1.5S10.17 16 11 16s1.5.67 1.5 1.5S11.83 19 11 19m.5-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M23 18v2h-8v-2z"></svg:path>`,
})
export class MdiCookieMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieMinusOutlineIcon],svg[mdi-cookie-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10h-.5c-.83 0-1.5-.67-1.5-1.5V8h-.5c-.83 0-1.5-.67-1.5-1.5V5.07C7.91 5.5 5.47 8 5.07 11.08A1.494 1.494 0 0 1 8 11.5c0 .83-.67 1.5-1.5 1.5c-.79 0-1.43-.61-1.5-1.38c0 .49 0 .99.09 1.5c.41 2.69 2.45 4.92 5.07 5.62A1.498 1.498 0 0 1 11 16c.83 0 1.5.67 1.5 1.5c0 .72-.5 1.32-1.18 1.46c.58.04 1.14.04 1.68-.04V19c0 .66.12 1.3.32 1.89c-.43.07-.87.11-1.32.11a9 9 0 0 1 0-18s1 0 1 1v2h1s1 0 1 1v1h2s1 0 1 1v1h2s.6 0 .87.5a8.4 8.4 0 0 1 .02 2.82c-.59-.2-1.23-.32-1.89-.32h-.08c.05-.32.08-.66.08-1h-1.5c-.83 0-1.5-.67-1.5-1.5V10zm0 4.5v.03c.66-.58 1.45-1.03 2.32-1.29c-.24-.15-.52-.24-.82-.24c-.83 0-1.5.67-1.5 1.5m-4-7c0-.83-.67-1.5-1.5-1.5S8 6.67 8 7.5S8.67 9 9.5 9S11 8.33 11 7.5m.5 6.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m3.5 4v2h8v-2z"></svg:path>`,
})
export class MdiCookieMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieOffIcon],svg[mdi-cookie-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.25 6.05l-1.8-1.8A8.9 8.9 0 0 1 12 3s1 0 1 1v2h1s1 0 1 1v1h2s1 0 1 1v1h2s.6 0 .87.5a8.9 8.9 0 0 1-1.12 6.05l-1.8-1.8c.02-.08.05-.16.05-.25c0-.83-.67-1.5-1.5-1.5c-.09 0-.17.03-.25.05l-5.3-5.3c.02-.08.05-.16.05-.25c0-.83-.67-1.5-1.5-1.5c-.09 0-.17.03-.25.05m12.86 15.41l-1.27 1.27l-3.5-3.5A8.9 8.9 0 0 1 12 21a9 9 0 0 1-9-9c0-2 .66-3.85 1.77-5.34L1.11 3l1.28-1.27zM8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5S5.67 13 6.5 13S8 12.33 8 11.5m2 1c0 .83.67 1.5 1.5 1.5c.18 0 .35-.04.5-.1L10.1 12c-.06.15-.1.32-.1.5m2.5 5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5"></svg:path>`,
})
export class MdiCookieOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieOffOutlineIcon],svg[mdi-cookie-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.93 5.73L7.45 4.25A8.9 8.9 0 0 1 12 3s1 0 1 1v2h1s1 0 1 1v1h2s1 0 1 1v1h2s.6 0 .87.5a8.9 8.9 0 0 1-1.12 6.05l-1.47-1.47c.46-.93.72-1.97.72-3.08h-1.5c-.83 0-1.5-.67-1.5-1.5V10h-1.5c-.83 0-1.5-.67-1.5-1.5V8h-.5c-.83 0-1.5-.67-1.5-1.5V5.07c-.74.11-1.43.34-2.07.66m.32.32l1.7 1.7c.02-.08.05-.16.05-.25c0-.83-.67-1.5-1.5-1.5c-.09 0-.17.03-.25.05m7 7l1.7 1.7c.02-.08.05-.16.05-.25c0-.83-.67-1.5-1.5-1.5c-.09 0-.17.03-.25.05m5.86 8.41l-1.27 1.27l-3.5-3.5A8.9 8.9 0 0 1 12 21a9 9 0 0 1-9-9c0-2 .66-3.85 1.77-5.34L1.11 3l1.28-1.27zm-6.21-3.67L12 13.9c-.15.06-.32.1-.5.1c-.83 0-1.5-.67-1.5-1.5c0-.18.04-.35.1-.5L6.21 8.1c-.59.9-1 1.9-1.14 2.98A1.494 1.494 0 0 1 8 11.5c0 .83-.67 1.5-1.5 1.5c-.79 0-1.43-.61-1.5-1.38c0 .49 0 .99.09 1.5c.41 2.69 2.45 4.92 5.07 5.62A1.498 1.498 0 0 1 11 16c.83 0 1.5.67 1.5 1.5c0 .72-.5 1.32-1.18 1.46c1.71.16 3.29-.3 4.58-1.17"></svg:path>`,
})
export class MdiCookieOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieOutlineIcon],svg[mdi-cookie-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.87 10.5C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 1 0 9 9c0-.5-.04-1-.13-1.5m-9.55 8.46c.68-.14 1.18-.74 1.18-1.46c0-.83-.67-1.5-1.5-1.5a1.498 1.498 0 0 0-.84 2.74c-2.62-.7-4.66-2.93-5.07-5.62C5 12.61 5 12.11 5 11.62c.07.77.71 1.38 1.5 1.38c.83 0 1.5-.67 1.5-1.5S7.33 10 6.5 10c-.68 0-1.25.46-1.43 1.08C5.47 8 7.91 5.5 11 5.07V6.5c0 .83.67 1.5 1.5 1.5h.5v.5c0 .83.67 1.5 1.5 1.5H16v.5c0 .83.67 1.5 1.5 1.5H19c0 4.08-3.5 7.36-7.68 6.96M9.5 9C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9m3.5 3.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5m5 2c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5"></svg:path>`,
})
export class MdiCookieOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookiePlusIcon],svg[mdi-cookie-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14.53v-.03c0-.83.67-1.5 1.5-1.5c.3 0 .58.09.82.24A6.2 6.2 0 0 1 19 13c.66 0 1.3.12 1.89.32a8.4 8.4 0 0 0-.02-2.82C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0 0 18c.45 0 .89-.04 1.32-.11c-.2-.59-.32-1.23-.32-1.89c0-1.78.78-3.37 2-4.47M6.5 13c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13M8 7.5C8 6.67 8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9S8 8.33 8 7.5M11 19c-.83 0-1.5-.67-1.5-1.5S10.17 16 11 16s1.5.67 1.5 1.5S11.83 19 11 19m.5-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M23 18v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></svg:path>`,
})
export class MdiCookiePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookiePlusOutlineIcon],svg[mdi-cookie-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 13c.3 0 .58.09.82.24c-.87.26-1.66.71-2.32 1.29v-.03c0-.83.67-1.5 1.5-1.5m-.5-3v.5c0 .83.67 1.5 1.5 1.5H19c0 .34-.03.68-.08 1H19c.66 0 1.3.12 1.89.32a8.4 8.4 0 0 0-.02-2.82C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0 0 18c.45 0 .89-.04 1.32-.11c-.2-.59-.32-1.23-.32-1.89v-.08c-.54.08-1.1.08-1.68.04c.68-.14 1.18-.74 1.18-1.46c0-.83-.67-1.5-1.5-1.5a1.498 1.498 0 0 0-.84 2.74c-2.62-.7-4.66-2.93-5.07-5.62C5 12.61 5 12.11 5 11.62c.07.77.71 1.38 1.5 1.38c.83 0 1.5-.67 1.5-1.5S7.33 10 6.5 10c-.68 0-1.25.46-1.43 1.08C5.47 8 7.91 5.5 11 5.07V6.5c0 .83.67 1.5 1.5 1.5h.5v.5c0 .83.67 1.5 1.5 1.5zm-4.5 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M11 7.5c0-.83-.67-1.5-1.5-1.5S8 6.67 8 7.5S8.67 9 9.5 9S11 8.33 11 7.5M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiCookiePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieRefreshIcon],svg[mdi-cookie-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16c.53 0 1 .28 1.26.69C13.04 14 15.54 12 18.5 12c.88 0 1.71.18 2.5.5V12c0-.5-.04-1-.13-1.5C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0 0 18h.5c-.31-.76-.5-1.56-.5-2.39c-.26.24-.61.39-1 .39c-.83 0-1.5-.67-1.5-1.5S10.17 16 11 16m2-3.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5m-6.5.5c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13M8 7.5C8 6.67 8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9S8 8.33 8 7.5m10 11l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.11 0 2.11.45 2.83 1.17L22 14.5v4z"></svg:path>`,
})
export class MdiCookieRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieRefreshOutlineIcon],svg[mdi-cookie-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5m-2-5c0-.83-.67-1.5-1.5-1.5S8 6.67 8 7.5S8.67 9 9.5 9S11 8.33 11 7.5m4 2.5h1v.5c0 .83.67 1.5 1.5 1.5H19v.03c.69.06 1.36.21 2 .47V12c0-.5-.04-1-.13-1.5C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0 0 18h.5c-.26-.64-.41-1.31-.47-2c-.23 0-.47 0-.71-.04c.27-.06.49-.2.68-.38v-.08c0-.63.1-1.23.26-1.81a1.497 1.497 0 0 0-2.76.81c0 .5.26.97.66 1.24c-2.62-.7-4.66-2.93-5.07-5.62C5 12.61 5 12.11 5 11.62c.07.77.71 1.38 1.5 1.38c.83 0 1.5-.67 1.5-1.5S7.33 10 6.5 10c-.68 0-1.25.46-1.43 1.08C5.47 8 7.91 5.5 11 5.07V6.5c0 .83.67 1.5 1.5 1.5h.5v.5c0 .83.67 1.5 1.5 1.5zm7 8.5v-4l-1.17 1.17A4 4 0 0 0 18 14.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5z"></svg:path>`,
})
export class MdiCookieRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieRemoveIcon],svg[mdi-cookie-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 13c.3 0 .58.09.82.24A6.2 6.2 0 0 1 19 13c.66 0 1.3.12 1.89.32a8.4 8.4 0 0 0-.02-2.82C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0 0 18c.45 0 .89-.04 1.32-.11c-.2-.59-.32-1.23-.32-1.89c0-1.78.78-3.37 2-4.47v-.03c0-.83.67-1.5 1.5-1.5m-10 0c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13M8 7.5C8 6.67 8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9S8 8.33 8 7.5M11 19c-.83 0-1.5-.67-1.5-1.5S10.17 16 11 16s1.5.67 1.5 1.5S11.83 19 11 19m.5-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m8.91 5l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41z"></svg:path>`,
})
export class MdiCookieRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieRemoveOutlineIcon],svg[mdi-cookie-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.32 13.24c-.87.26-1.66.71-2.32 1.29v-.03c0-.83.67-1.5 1.5-1.5c.3 0 .58.09.82.24M16 10v.5c0 .83.67 1.5 1.5 1.5H19c0 .34-.03.68-.08 1H19c.66 0 1.3.12 1.89.32a8.4 8.4 0 0 0-.02-2.82C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1a9 9 0 0 0 0 18c.45 0 .89-.04 1.32-.11c-.2-.59-.32-1.23-.32-1.89v-.08c-.54.08-1.1.08-1.68.04c.68-.14 1.18-.74 1.18-1.46c0-.83-.67-1.5-1.5-1.5a1.498 1.498 0 0 0-.84 2.74c-2.62-.7-4.66-2.93-5.07-5.62C5 12.61 5 12.11 5 11.62c.07.77.71 1.38 1.5 1.38c.83 0 1.5-.67 1.5-1.5S7.33 10 6.5 10c-.68 0-1.25.46-1.43 1.08C5.47 8 7.91 5.5 11 5.07V6.5c0 .83.67 1.5 1.5 1.5h.5v.5c0 .83.67 1.5 1.5 1.5zm-5-2.5c0-.83-.67-1.5-1.5-1.5S8 6.67 8 7.5S8.67 9 9.5 9S11 8.33 11 7.5m.5 6.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m11.04 2.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiCookieRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieSettingsIcon],svg[mdi-cookie-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.87 9.5C20.6 9 20 9 20 9h-2V8c0-1-1-1-1-1h-2V6c0-1-1-1-1-1h-1V3c0-1-1-1-1-1a9 9 0 1 0 9 9c0-.5-.04-1-.13-1.5M6.5 12c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9S8 9.67 8 10.5S7.33 12 6.5 12M8 6.5C8 5.67 8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8S8 7.33 8 6.5M11 18c-.83 0-1.5-.67-1.5-1.5S10.17 15 11 15s1.5.67 1.5 1.5S11.83 18 11 18m.5-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiCookieSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCookieSettingsOutlineIcon],svg[mdi-cookie-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5m-2-5c0-.83-.67-1.5-1.5-1.5S8 5.67 8 6.5S8.67 8 9.5 8S11 7.33 11 6.5M21 11a9 9 0 1 1-9-9s1 0 1 1v2h1s1 0 1 1v1h2s1 0 1 1v1h2s.6 0 .87.5c.09.5.13 1 .13 1.5m-2 0h-1.5c-.83 0-1.5-.67-1.5-1.5V9h-1.5c-.83 0-1.5-.67-1.5-1.5V7h-.5c-.83 0-1.5-.67-1.5-1.5V4.07C7.91 4.5 5.47 7 5.07 10.08A1.494 1.494 0 0 1 8 10.5c0 .83-.67 1.5-1.5 1.5c-.79 0-1.43-.61-1.5-1.38c0 .49 0 .99.09 1.5c.41 2.69 2.45 4.92 5.07 5.62A1.498 1.498 0 0 1 11 15c.83 0 1.5.67 1.5 1.5c0 .72-.5 1.32-1.18 1.46C15.5 18.36 19 15.08 19 11m-2.5 1c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5M7 24h2v-2H7zm8 0h2v-2h-2zm-4 0h2v-2h-2z"></svg:path>`,
})
export class MdiCookieSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCoolantTemperatureIcon],svg[mdi-coolant-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 1A1.5 1.5 0 0 0 10 2.5v12c-.63.47-1 1.21-1 2a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5c0-.79-.37-1.5-1-2V13h4v-2h-4V9h4V7h-4V5h4V3h-4v-.5A1.5 1.5 0 0 0 11.5 1M0 15v2c.67 0 .79.21 1.29.71S2.67 19 4 19s2.21-.79 2.71-1.29c.11-.12.2-.21.29-.3v-2.25c-.79.26-1.35.77-1.71 1.13c-.5.5-.62.71-1.29.71s-.79-.21-1.29-.71S1.33 15 0 15m16 0v2c.67 0 .79.21 1.29.71S18.67 19 20 19s2.21-.79 2.71-1.29S23.33 17 24 17v-2c-1.33 0-2.21.79-2.71 1.29S20.67 17 20 17s-.79-.21-1.29-.71S17.33 15 16 15m-8 5c-1.33 0-2.21.79-2.71 1.29S4.67 22 4 22s-.79-.21-1.29-.71c-.36-.36-.92-.87-1.71-1.13v2.25c.09.09.18.18.29.3c.5.5 1.38 1.29 2.71 1.29s2.21-.79 2.71-1.29S7.33 22 8 22s.79.21 1.29.71c.44.43 1.15 1.09 2.21 1.25c.16.04.33.04.5.04c1.33 0 2.21-.79 2.71-1.29S15.33 22 16 22s.79.21 1.29.71S18.67 24 20 24s2.21-.79 2.71-1.29c.11-.12.2-.21.29-.3v-2.25c-.79.26-1.35.77-1.71 1.13c-.5.5-.62.71-1.29.71s-.79-.21-1.29-.71S17.33 20 16 20s-2.21.79-2.71 1.29s-.62.71-1.29.71c-.22 0-.37-.03-.5-.08c-.28-.1-.45-.29-.79-.63C10.21 20.79 9.33 20 8 20"></svg:path>`,
})
export class MdiCoolantTemperatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCopyleftIcon],svg[mdi-copyleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.92 10.86c.12.99.2 2.24-.3 3.14c-.12.27-.34.5-.59.64c-.23.15-.53.22-.89.23c-.42 0-.81-.14-1.14-.4a1.7 1.7 0 0 1-.34-.47c-.09-.17-.16-.36-.16-.57H8.72c.01.41.12.79.28 1.15c.2.36.45.67.76.92c1.44 1.33 4.09 1.12 5.3-.37c1.31-1.67 1.28-4.59-.01-6.26c-1.22-1.52-3.92-1.71-5.37-.37c-.3.28-.53.62-.68 1c-.19.4-.28.83-.3 1.3h1.8c0-.43.19-.86.47-1.17c.29-.29.7-.49 1.15-.49c.69.01 1.21.3 1.5.86c.14.24.25.53.3.86M12 2C6.5 2 2 6.5 2 12c.53 13.26 19.47 13.27 20 0c0-5.5-4.5-10-10-10M4 12c.44-10.61 15.56-10.61 16 0c0 4.41-3.59 8-8 8s-8-3.59-8-8"></svg:path>`,
})
export class MdiCopyleftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCopyrightIcon],svg[mdi-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.08 10.86c.05-.33.16-.62.3-.86c.3-.56.81-.85 1.5-.86c.45 0 .86.2 1.15.49c.28.31.47.74.47 1.17h1.8c-.02-.47-.11-.9-.3-1.3c-.15-.38-.38-.72-.68-1c-1.45-1.34-4.14-1.15-5.37.37c-1.29 1.67-1.32 4.59-.01 6.26c1.21 1.49 3.86 1.7 5.3.37c.31-.25.56-.56.76-.92c.16-.36.27-.74.28-1.15H13.5c0 .21-.07.4-.16.57c-.09.19-.21.34-.34.47c-.33.26-.72.4-1.14.4c-.36-.01-.66-.08-.89-.23a1.4 1.4 0 0 1-.59-.64c-.5-.9-.42-2.15-.3-3.14M12 2C6.5 2 2 6.5 2 12c.53 13.27 19.5 13.26 20 0c0-5.5-4.5-10-10-10m0 18c-4.41 0-8-3.59-8-8c.44-10.61 15.56-10.61 16 0c0 4.41-3.59 8-8 8"></svg:path>`,
})
export class MdiCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCordovaIcon],svg[mdi-cordova-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.18 21.55h-3.24l.23-2.73h-1.59l-.23 2.73h-6.7l-.23-2.73H6.83l.23 2.73H3.82L2 9.73l4.55-7.28h10.9L22 9.73zM16.55 6.09h-2.93l.2 1.36h-3.64l.2-1.36H7.45L5.64 9.73L6.55 17h10.9l.91-7.27zm-1.6 8.5c-.25 0-.45-.76-.45-1.69c0-.94.2-1.7.45-1.7c.26 0 .46.76.46 1.7c0 .93-.2 1.69-.46 1.69m-5.73.14c-.26 0-.46-.76-.46-1.69c0-.94.2-1.69.46-1.69c.25 0 .45.75.45 1.69c0 .93-.2 1.69-.45 1.69"></svg:path>`,
})
export class MdiCordovaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCornIcon],svg[mdi-corn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12H8.82c.8.5 1.53 1.07 2.18 1.68zm-4-1c.27-5.12 2.37-9 5-9c2.66 0 4.77 3.94 5 9.12c1.5-.69 3.17-1.12 5-1.12c-5.75 2.57-3.75 12-10 12c-6 0-4.07-9.43-10-12c1.82 0 3.5.4 5 1m4 0V9H8.24l-.21 2zm0-3V6H9.05c-.25.6-.45 1.27-.62 2zm0-3V3.3c-.55.33-1.05.92-1.5 1.7zm1-2v2h1v1h-1v2h2v1h-2v2h3v1h-3v2h2v1h-1.77c1.19 1.45 1.92 3 2.09 4.23c.99-1.67 1.64-4.39 1.68-7.47C15.94 7 14.13 3 12 3"></svg:path>`,
})
export class MdiCornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCornOffIcon],svg[mdi-corn-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l6.1 6.1c-.1.6-.2 1.2-.2 1.9c-1.5-.6-3.2-1-5-1c5.9 2.6 4 12 10 12c2.5 0 3.7-1.5 4.6-3.5l4.3 4.3zM8.1 10l1 1H8zm.7 2h1.3l.9.9v.8c-.7-.6-1.4-1.2-2.2-1.7m5.5 7.2c-.2-1.2-.9-2.8-2.1-4.2h.9l2.1 2.1q-.3 1.2-.9 2.1M11 6v1.8L12.2 9H14V8h-2V6h1V5h-1V3c2.1 0 3.9 4 4 8.8v1l2 2c.8-2 1.9-3.9 4-4.8c-1.8 0-3.5.4-5 1.1c-.2-5.2-2.3-9.1-5-9.1c-1.5 0-2.8 1.2-3.7 3.1l.9.9zm0-2.7V5H9.5c.5-.8 1-1.4 1.5-1.7m4 8.5l-.8-.8h.8z"></svg:path>`,
})
export class MdiCornOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCosineWaveIcon],svg[mdi-cosine-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v2c-1.74 0-3 4.58-4.04 8.27c-1.39 5-2.7 9.73-5.96 9.73s-4.57-4.73-5.96-9.73C5 8.58 3.74 4 2 4V2c3.26 0 4.57 4.73 5.96 9.73C9 15.42 10.26 20 12 20s3-4.58 4.04-8.27C17.43 6.73 18.74 2 22 2"></svg:path>`,
})
export class MdiCosineWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCounterIcon],svg[mdi-counter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v12h7V6zm16 12V6h-1.24c.24.54.19 1.07.19 1.13c-.07.67-.54 1.37-.71 1.62l-2.33 2.55l3.32-.02l.01 1.22l-5.2-.03l-.04-1s3.05-3.23 3.2-3.52c.14-.28.71-1.95-.7-1.95c-1.23.05-1.09 1.3-1.09 1.3l-1.54.01s.01-.66.38-1.31H13v12h2.58l-.01-.86l.97-.01s.91-.16.92-1.05c.04-1-.81-1-.96-1c-.13 0-1.07.05-1.07.87h-1.52s.04-2.06 2.59-2.06c2.6 0 2.46 2.02 2.46 2.02s.04 1.25-1.11 1.72l.52.37zM8.92 16h-1.5v-5.8l-1.8.56V9.53l3.14-1.12h.16z"></svg:path>`,
})
export class MdiCounterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCountertopIcon],svg[mdi-countertop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2v-2zm-5 8h-2v-6h2z"></svg:path>`,
})
export class MdiCountertopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCountertopOutlineIcon],svg[mdi-countertop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10h-4V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2zM6 6h2v2H6zm0 12v-6h5v6zm12 0h-5v-6h5z"></svg:path>`,
})
export class MdiCountertopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCowIcon],svg[mdi-cow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 18a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5m3 0a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5M10 11a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m4 7c0 2.21-2.69 4-6 4s-6-1.79-6-4c0-.9.45-1.73 1.2-2.4c-.75-1-1.2-2.25-1.2-3.6l.12-1.22c-.54.15-1.19.15-1.72 0c-1.02-.28-2.56-1.43-2.33-2.23s2.14-.95 3.16-.65c.59.17 1.22.6 1.59 1.06l.57-.81C6.79 7.05 7 4 10 3l-.09.14c-.28.44-1 1.83-.24 3.33a6.02 6.02 0 0 1 4.66 0c.76-1.5.04-2.89-.24-3.33L14 3c3 1 3.21 4.05 2.61 5.15l.57.81c.37-.46 1-.89 1.59-1.06c1.02-.3 2.93-.15 3.16.65s-1.31 1.95-2.33 2.23c-.53.15-1.18.15-1.72 0L18 12c0 1.35-.45 2.6-1.2 3.6c.75.67 1.2 1.5 1.2 2.4m-6-2c-2.21 0-4 .9-4 2s1.79 2 4 2s4-.9 4-2s-1.79-2-4-2m0-2c1.12 0 2.17.21 3.07.56c.58-.69.93-1.56.93-2.56a4 4 0 0 0-4-4a4 4 0 0 0-4 4c0 1 .35 1.87.93 2.56c.9-.35 1.95-.56 3.07-.56m2.09-10.86"></svg:path>`,
})
export class MdiCowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCowOffIcon],svg[mdi-cow-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l5.8 5.8l-.1.2c-.4-.5-1-.9-1.6-1.1c-1-.3-2.9-.2-3.2.6s1.3 2 2.3 2.2c.5.1 1.2.1 1.7 0V12c0 1.3.5 2.6 1.2 3.6c-.7.7-1.2 1.5-1.2 2.4c0 2.2 2.7 4 6 4c2.5 0 4.7-1 5.6-2.5l3.3 3.3zM9.4 11.2c-.3.2-.4.5-.4.8c0 .6.4 1 1 1c.3 0 .6-.1.8-.4l1.4 1.4h-.1c-1.1 0-2.2.2-3.1.6c-.7-.7-1-1.6-1-2.6c0-.6.1-1.2.4-1.7zM16 18c0 1.1-1.8 2-4 2s-4-.9-4-2s1.8-2 4-2c1 0 1.9.2 2.6.5l1.4 1.4zM9.7 6.5L7.8 4.6C8.3 3.9 9 3.3 10 3l-.1.1c-.3.5-1 1.9-.2 3.4m1.6 1.6L9.7 6.5c.7-.3 1.5-.5 2.3-.5s1.6.2 2.3.5c.8-1.5 0-2.9-.2-3.3L14 3c3 1 3.2 4 2.6 5.2l.6.8c.4-.5 1-.9 1.6-1.1c1-.3 2.9-.2 3.2.6s-1.3 2-2.3 2.2c-.5.1-1.2.1-1.7 0V12c0 .8-.2 1.6-.5 2.3l-1.6-1.6c0-.2.1-.5.1-.7c0-2.2-1.8-4-4-4c-.2 0-.5 0-.7.1M14 18.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5s.2-.5.5-.5s.5.2.5.5m-3 0c0 .3-.2.5-.5.5s-.5-.2-.5-.5s.2-.5.5-.5s.5.2.5.5"></svg:path>`,
})
export class MdiCowOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCpu32BitIcon],svg[mdi-cpu-32-bit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v2H7a2 2 0 0 0-2 2v2H3v2h2v2H3v2h2v2a2 2 0 0 0 2 2h2v2h2v-2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2v-2h-2v-2h2V9h-2V7a2 2 0 0 0-2-2h-2V3h-2v2h-2V3M7 9h3.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7v-1.5h3v-.75H8.5v-1.5H10v-.75H7M12.5 9H16a1 1 0 0 1 1 1v1.75a1 1 0 0 1-1 1h-2v.75h3V15h-4.5v-2.75a1 1 0 0 1 1-1h2v-.75h-3"></svg:path>`,
})
export class MdiCpu32BitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCpu64BitIcon],svg[mdi-cpu-64-bit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v2H7a2 2 0 0 0-2 2v2H3v2h2v2H3v2h2v2a2 2 0 0 0 2 2h2v2h2v-2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2v-2h-2v-2h2V9h-2V7a2 2 0 0 0-2-2h-2V3h-2v2h-2V3M8 9h3.5v1.5h-3v.75h2a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m4.5 0H14v2h1.5V9H17v6h-1.5v-2.5h-3m-4 .25v.75H10v-.75"></svg:path>`,
})
export class MdiCpu64BitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCradleIcon],svg[mdi-cradle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-6V4H8C5.8 4 4 5.8 4 8v6c0 1.1.9 2 2 2h2v2.9c-.6-.4-1.2-.8-1.7-1.3L4.9 19c1.8 1.9 4.3 3 7.1 3s5.3-1.1 7.1-2.9l-1.4-1.4c-.5.5-1 .9-1.6 1.3v-3h2c1.1 0 2-.9 2-2v-3c-.1-1.1-1-2-2.1-2m-4 10.8c-.6.2-1.3.2-2 .2s-1.4-.1-2-.2V16h4z"></svg:path>`,
})
export class MdiCradleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCradleOutlineIcon],svg[mdi-cradle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-6V4H8C5.8 4 4 5.8 4 8v6c0 1.1.9 2 2 2h2v2.9c-.6-.4-1.2-.8-1.7-1.3L4.9 19c1.8 1.9 4.3 3 7.1 3s5.3-1.1 7.1-2.9l-1.4-1.4c-.5.5-1 .9-1.6 1.3v-3h2c1.1 0 2-.9 2-2v-3c-.1-1.1-1-2-2.1-2m-4 10.8c-.6.2-1.3.2-2 .2s-1.4-.1-2-.2V16h4zm4-5.8H6V8c0-1.1.9-2 2-2h2v5h8z"></svg:path>`,
})
export class MdiCradleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCraneIcon],svg[mdi-crane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6V5a1 1 0 0 0-1-1H9V3H6v1H5v2h1v9H5v-2H3v2H2v2h1v4h2v-4h5v4h2v-4h1v-2h-1v-2h-2v2H9V6h8v4.62c-.47.17-.81.61-.81 1.14c0 .44.24.84.61 1.06V14h.62c.34 0 .61.28.61.62s-.27.62-.61.62c-.22 0-.42-.12-.53-.31a.62.62 0 0 0-.84-.22c-.3.16-.4.54-.23.84c.33.56.94.92 1.6.92c1.01 0 1.84-.83 1.84-1.85c0-.78-.5-1.48-1.23-1.74v-.06c.38-.22.62-.62.62-1.06c0-.46-.27-.85-.65-1.06V6zM8 13.66l-1 1v-1.42l1-1zm0-2.95l-1 1v-1.42l1-1zm-1-2V7.29l1-1v1.42z"></svg:path>`,
})
export class MdiCraneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreationIcon],svg[mdi-creation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 1l-1.26 2.75L15 5l2.74 1.26L19 9l1.25-2.74L23 5l-2.75-1.25M9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5M19 15l-1.26 2.74L15 19l2.74 1.25L19 23l1.25-2.75L23 19l-2.75-1.26"></svg:path>`,
})
export class MdiCreationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreationOutlineIcon],svg[mdi-creation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 4l2.5 5.5L17 12l-5.5 2.5L9 20l-2.5-5.5L1 12l5.5-2.5zm0 4.83L8 11l-2.17 1L8 13l1 2.17L10 13l2.17-1L10 11zM19 9l-1.26-2.74L15 5l2.74-1.25L19 1l1.25 2.75L23 5l-2.75 1.26zm0 14l-1.26-2.74L15 19l2.74-1.25L19 15l1.25 2.75L23 19l-2.75 1.26z"></svg:path>`,
})
export class MdiCreationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreativeCommonsIcon],svg[mdi-creative-commons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.89 10.34l-1.34.7c-.14-.3-.31-.51-.52-.63s-.41-.18-.58-.18c-.9 0-1.34.59-1.34 1.77c0 .54.11.97.34 1.29c.22.32.55.48 1 .48c.58 0 .99-.27 1.23-.86l1.23.63c-.26.49-.62.87-1.09 1.15q-.69.42-1.53.42c-.9 0-1.62-.27-2.17-.82C6.58 13.74 6.3 13 6.3 12c0-.95.28-1.7.83-2.26q.84-.84 2.1-.84c1.24-.01 2.13.48 2.66 1.44m5.77 0l-1.32.7c-.14-.3-.34-.51-.53-.63q-.315-.18-.6-.18c-.89 0-1.34.59-1.34 1.77c0 .54.13.97.34 1.29c.23.32.56.48 1 .48c.59 0 1-.27 1.24-.86l1.25.63c-.28.49-.65.87-1.11 1.15c-.47.28-.97.42-1.52.42c-.9 0-1.63-.27-2.17-.82S12.09 13 12.09 12c0-.95.28-1.7.83-2.26S14.17 8.9 15 8.9c1.26-.01 2.14.48 2.66 1.44M12 3.5a8.5 8.5 0 0 1 8.5 8.5a8.5 8.5 0 0 1-8.5 8.5A8.5 8.5 0 0 1 3.5 12A8.5 8.5 0 0 1 12 3.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiCreativeCommonsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardIcon],svg[mdi-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 7H4V8h16Z"></svg:path>`,
})
export class MdiCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardCheckIcon],svg[mdi-credit-card-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09c-.06-.33-.09-.66-.09-1c0-3.31 2.69-6 6-6c1.06 0 2.09.28 3 .81V6c0-1.11-.89-2-2-2m0 7H4V8h16m-2.25 14L15 19l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41z"></svg:path>`,
})
export class MdiCreditCardCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardCheckOutlineIcon],svg[mdi-credit-card-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-.34.04-.67.09-1H3v-6h16v1c.7 0 1.37.13 2 .35V6c0-1.11-.89-2-2-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h10.09c-.05-.33-.09-.66-.09-1M3 6h16v2H3zm14.75 16L15 19l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41z"></svg:path>`,
})
export class MdiCreditCardCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardChipIcon],svg[mdi-credit-card-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2M10 14H5v-4h5z"></svg:path>`,
})
export class MdiCreditCardChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardChipOutlineIcon],svg[mdi-credit-card-chip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6v12H4V6zm0-2H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m-9 6H6v4h5z"></svg:path>`,
})
export class MdiCreditCardChipOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardClockIcon],svg[mdi-credit-card-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h1.5v2.82l2.44 1.41l-.75 1.3L16 17.69zm8 3a7 7 0 0 1-7 7c-2.79 0-5.2-1.64-6.33-4H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h16a2 2 0 0 1 2 2v6.1c1.24 1.26 2 2.99 2 4.9m-7-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m3-2V7H4v3z"></svg:path>`,
})
export class MdiCreditCardClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardClockOutlineIcon],svg[mdi-credit-card-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h1.5v2.82l2.44 1.41l-.75 1.3L16 17.69zm8 3a7 7 0 0 1-7 7c-2.79 0-5.2-1.64-6.33-4H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h16a2 2 0 0 1 2 2v6.1c1.24 1.26 2 2.99 2 4.9m-14 0c0-1.96.81-3.73 2.1-5H4v6h6.07c-.07-.33-.07-.66-.07-1m7-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m3-4V6H4v2z"></svg:path>`,
})
export class MdiCreditCardClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardEditIcon],svg[mdi-credit-card-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.6 11.3c.1-.1.2-.2.4-.2c.1 0 .3.1.4.2l1.2 1.2c.2.2.2.6 0 .8l-1 1l-2-2zM13 18.9l6-6.1l2.1 2.1l-6 6.1H13zm-2 .2v-1l.6-.6l6.5-6.5H4V8h16v1.1l2-2V6c0-1.1-.9-2-2-2H4c-.5 0-1 .2-1.4.6S2 5.5 2 6v12c0 .5.2 1 .6 1.4s.9.6 1.4.6h7z"></svg:path>`,
})
export class MdiCreditCardEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardEditOutlineIcon],svg[mdi-credit-card-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 18.9l6.1-6.1l2.1 2.1l-6.1 6.1H13zm8.4-7.6l1.3 1.3c.2.2.2.5 0 .7l-1 1l-2.1-2l1-1c.1-.1.2-.2.4-.2s.3.1.4.2M11 18H4v-6h13.1L22 7.1V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7zM4 6h16v2H4z"></svg:path>`,
})
export class MdiCreditCardEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardFastIcon],svg[mdi-credit-card-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8c-.55 0-1-.45-1-1s.45-1 1-1h2.54C5.19 6.6 5 7.29 5 8zm2 5H2c-.55 0-1-.45-1-1s.45-1 1-1h3zm-4 5c-.552 0-1-.45-1-1s.448-1 1-1h4c0 .71.19 1.4.54 2zM21 6H9c-1.11 0-2 .89-2 2v8c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m0 6H9V9h12z"></svg:path>`,
})
export class MdiCreditCardFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardFastOutlineIcon],svg[mdi-credit-card-fast-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8c-.55 0-1-.45-1-1s.45-1 1-1h2.54C5.19 6.6 5 7.29 5 8zm2 5H2c-.55 0-1-.45-1-1s.45-1 1-1h3zm-4 5c-.552 0-1-.45-1-1s.448-1 1-1h4c0 .71.19 1.4.54 2zM21 6H9c-1.11 0-2 .89-2 2v8c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m0 2v1H9V8zM9 16v-4h12v4z"></svg:path>`,
})
export class MdiCreditCardFastOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardLockIcon],svg[mdi-credit-card-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 15v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V15c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zm-7.47 5H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16c1.11 0 2 .89 2 2v4.04c-.58-.44-1.25-.78-2-.93V8H4v3h11.04c-.54.72-.84 1.58-.84 2.5v.24c-.7.6-1.2 1.5-1.2 2.46v3.5c0 .1 0 .2.03.3"></svg:path>`,
})
export class MdiCreditCardLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardLockOutlineIcon],svg[mdi-credit-card-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 15v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V15c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zM13 19.7V18H4v-6h10.5c.68-1.72 2.46-3 4.5-3c1.13 0 2.17.4 3 1.04V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.03c-.03-.1-.03-.2-.03-.3M4 6h16v2H4z"></svg:path>`,
})
export class MdiCreditCardLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardMarkerIcon],svg[mdi-credit-card-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 12c-1.9 0-3.5 1.6-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5c0-1.9-1.6-3.5-3.5-3.5m0 4.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2M14.55 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16c1.11 0 2 .89 2 2v5.3a5.55 5.55 0 0 0-2-1.08V8H4v3h11.39C13.96 12 13 13.66 13 15.5c0 1.5.72 3.11 1.55 4.5"></svg:path>`,
})
export class MdiCreditCardMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardMarkerOutlineIcon],svg[mdi-credit-card-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 18H4v-6h10.3c1-1.2 2.5-2 4.2-2c1.3 0 2.5.5 3.5 1.3V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10.6c-.4-.6-.8-1.3-1.1-2M4 6h16v2H4zm14.5 6c-1.9 0-3.5 1.6-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5c0-1.9-1.6-3.5-3.5-3.5m0 4.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2"></svg:path>`,
})
export class MdiCreditCardMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardMinusIcon],svg[mdi-credit-card-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09c-.06-.33-.09-.66-.09-1c0-3.31 2.69-6 6-6c1.06 0 2.09.28 3 .81V6c0-1.11-.89-2-2-2m0 7H4V8h16m3 10v2h-8v-2z"></svg:path>`,
})
export class MdiCreditCardMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardMinusOutlineIcon],svg[mdi-credit-card-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 18v2h-8v-2m3-10V6H3v2zm0 4H3v6h11v2H3a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h16c1.11 0 2 .89 2 2v7h-2z"></svg:path>`,
})
export class MdiCreditCardMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardMultipleIcon],svg[mdi-credit-card-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9V6H7v3zm0-6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 19h15v2H3a2 2 0 0 1-2-2V8h2Z"></svg:path>`,
})
export class MdiCreditCardMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardMultipleOutlineIcon],svg[mdi-credit-card-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8V6H7v2zm0 8v-5H7v5zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2zM3 20h15v2H3a2 2 0 0 1-2-2V9h2z"></svg:path>`,
})
export class MdiCreditCardMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardOffIcon],svg[mdi-credit-card-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.2 8l-4-4H20a2 2 0 0 1 2 2v12a1.9 1.9 0 0 1-.12.68L14.2 11H20V8m.84 14.73L18.11 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 .65-1.46L1.11 3l1.28-1.27l19.72 19.73M9.11 11l-3-3H4v3Z"></svg:path>`,
})
export class MdiCreditCardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardOffOutlineIcon],svg[mdi-credit-card-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.93 4.2l1.28-1.27L20 20.72L18.73 22l-2-2H4a2 2 0 0 1-2-2V6c0-.22.04-.43.11-.62zM20 8V6H7.82l-2-2H20a2 2 0 0 1 2 2v12c0 .6-.26 1.13-.68 1.5l-1.5-1.5H20v-6h-6.18l-4-4zM4 8h.73L4 7.27zm0 4v6h10.73l-6-6z"></svg:path>`,
})
export class MdiCreditCardOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardOutlineIcon],svg[mdi-credit-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8H4V6h16m0 12H4v-6h16m0-8H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCreditCardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardPlusIcon],svg[mdi-credit-card-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09a5.5 5.5 0 0 1-.09-1a6 6 0 0 1 6-6a5.9 5.9 0 0 1 3 .81V6a2 2 0 0 0-2-2m0 7H4V8h16m0 7v3h3v2h-3v3h-2v-3h-3v-2h3v-3Z"></svg:path>`,
})
export class MdiCreditCardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardPlusOutlineIcon],svg[mdi-credit-card-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2zM19 8V6H3v2zm0 4H3v6h11v2H3a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h16a2 2 0 0 1 2 2v7h-2z"></svg:path>`,
})
export class MdiCreditCardPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardRefreshIcon],svg[mdi-credit-card-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.68c-.11-.5-.18-1-.18-1.5A6.5 6.5 0 0 1 18 12c1.5 0 2.9.53 4 1.4V6c0-1.11-.89-2-2-2m0 7H4V8h16zm.83 4.67L22 14.5v4h-4l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.11 0 2.11.45 2.83 1.17"></svg:path>`,
})
export class MdiCreditCardRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardRefreshOutlineIcon],svg[mdi-credit-card-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7.68c-.11-.5-.18-1-.18-1.5c0-.17 0-.33.03-.5H4v-6h16v.32c.74.24 1.41.61 2 1.08V6a2 2 0 0 0-2-2m0 4H4V6h16zm.83 7.67L22 14.5v4h-4l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.11 0 2.11.45 2.83 1.17"></svg:path>`,
})
export class MdiCreditCardRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardRefundIcon],svg[mdi-credit-card-refund-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m0 6H6v-3h12m-1-9v5h-1.5V6.5H9.88l2.42 2.43L11.24 10L7 5.75l4.24-4.25l1.06 1.07L9.88 5Z"></svg:path>`,
})
export class MdiCreditCardRefundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardRefundOutlineIcon],svg[mdi-credit-card-refund-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m0 10H6v-4h12zm0-6H6v-2h12zM17 5v5h-1.5V6.5H9.88l2.42 2.43L11.24 10L7 5.75l4.24-4.25l1.06 1.07L9.88 5z"></svg:path>`,
})
export class MdiCreditCardRefundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardRemoveIcon],svg[mdi-credit-card-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09a5.5 5.5 0 0 1-.09-1a6 6 0 0 1 6-6a5.9 5.9 0 0 1 3 .81V6a2 2 0 0 0-2-2m0 7H4V8h16m2.54 8.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.42-1.42L17.59 19l-2.13-2.12l1.42-1.42L19 17.59l2.12-2.13Z"></svg:path>`,
})
export class MdiCreditCardRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardRemoveOutlineIcon],svg[mdi-credit-card-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-.34.04-.67.09-1H3v-6h16v1c.7 0 1.37.13 2 .35V6c0-1.11-.89-2-2-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h10.09c-.05-.33-.09-.66-.09-1M3 6h16v2H3zm19.54 10.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.13z"></svg:path>`,
})
export class MdiCreditCardRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardScanIcon],svg[mdi-credit-card-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 6H6V9h12M2 4h4V2H2a2 2 0 0 0-2 2v4h2zm20-2h-4v2h4v4h2V4a2 2 0 0 0-2-2M2 16H0v4a2 2 0 0 0 2 2h4v-2H2zm20 4h-4v2h4a2 2 0 0 0 2-2v-4h-2z"></svg:path>`,
})
export class MdiCreditCardScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardScanOutlineIcon],svg[mdi-credit-card-scan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4V2H2a2 2 0 0 0-2 2v4h2zm20-2h-4v2h4v4h2V4a2 2 0 0 0-2-2M2 16H0v4a2 2 0 0 0 2 2h4v-2H2zm20 4h-4v2h4a2 2 0 0 0 2-2v-4h-2zM4 8v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m2 8v-4h12v4zm12-8v2H6V8z"></svg:path>`,
})
export class MdiCreditCardScanOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardSearchIcon],svg[mdi-credit-card-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.82 11c-2.42 2.5-2.42 6.5 0 9H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16c1.11 0 2 .89 2 2v6.06c-.26-.41-.55-.8-.9-1.16c-.34-.33-.71-.63-1.1-.87V8H4v3zm11.57 10L22 22.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4zM19 15.5a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class MdiCreditCardSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardSearchOutlineIcon],svg[mdi-credit-card-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.03 12c.25-.39.54-.76.87-1.1a6.525 6.525 0 0 1 9.2 0c.35.36.64.75.9 1.16V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7.82a6.4 6.4 0 0 1-1.32-2H4v-6zM4 6h16v2H4zm16.31 11.9c.44-.69.69-1.52.69-2.4c0-2.5-2-4.5-4.5-4.5S12 13 12 15.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L22 22.39L23.39 21zm-3.81.1a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class MdiCreditCardSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardSettingsIcon],svg[mdi-credit-card-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 7H4V8h16M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2Z"></svg:path>`,
})
export class MdiCreditCardSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardSettingsOutlineIcon],svg[mdi-credit-card-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8H4V6h16m0 12H4v-6h16m0-8H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiCreditCardSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardSyncIcon],svg[mdi-credit-card-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17.5c0 .89.18 1.73.5 2.5H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16c1.11 0 2 .89 2 2v5.5c-.77-.32-1.61-.5-2.5-.5h.5V8H4v3h15.5a6.5 6.5 0 0 0-6.5 6.5m6 2.5a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5zm0-6.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4"></svg:path>`,
})
export class MdiCreditCardSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardSyncOutlineIcon],svg[mdi-credit-card-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18v-6h12.05c1-.63 2.18-1 3.45-1c.89 0 1.73.18 2.5.5V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.5c-.26-.62-.42-1.3-.47-2zM4 6h16v2H4zm19 11.5c0 .82-.25 1.58-.67 2.21l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 19 15v1.5l-2.25-2.25L19 12v1.5c2.21 0 4 1.79 4 4m-4 1l2.25 2.25L19 23v-1.5c-2.21 0-4-1.79-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 19 20z"></svg:path>`,
})
export class MdiCreditCardSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardWirelessIcon],svg[mdi-credit-card-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.93 4.92l1.41 1.41c3.12-3.13 8.19-3.13 11.32 0l1.41-1.41C15.17 1 8.84 1 4.93 4.92m2.83 2.83l1.41 1.41a4.01 4.01 0 0 1 5.66 0l1.41-1.41a6 6 0 0 0-8.48 0M18 11H6a2 2 0 0 0-2 2v8c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2v-8a2 2 0 0 0-2-2m0 6H6v-3h12z"></svg:path>`,
})
export class MdiCreditCardWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardWirelessOffIcon],svg[mdi-credit-card-wireless-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-2.15 0-4.3.69-6.1 2.08L7.32 5.5c3.13-2.26 7.52-2 10.34.83l1.41-1.41C17.12 2.96 14.56 2 12 2M3.28 4L2 5.27L7.73 11H6a2 2 0 0 0-2 2v8c0 1.11.89 2 2 2h12c.5 0 .92-.18 1.27-.46l.46.46L21 21.72M12 6c-1.13 0-2.25.31-3.23.94l1.47 1.47c1.49-.73 3.34-.49 4.59.75l1.41-1.41A5.96 5.96 0 0 0 12 6m.82 5l3 3H18v2.18l2 2V13a2 2 0 0 0-2-2M6 14h4.73l3 3H6Z"></svg:path>`,
})
export class MdiCreditCardWirelessOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardWirelessOffOutlineIcon],svg[mdi-credit-card-wireless-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-2.15 0-4.3.69-6.1 2.08L7.32 5.5c3.13-2.26 7.52-2 10.34.83l1.41-1.41C17.12 2.96 14.56 2 12 2M3.28 4L2 5.27L7.73 11H6a2 2 0 0 0-2 2v8c0 1.11.89 2 2 2h12c.47 0 .92-.16 1.27-.46l.46.46L21 21.72M12 6c-1.13 0-2.25.31-3.23.94l1.47 1.47c1.49-.73 3.34-.49 4.59.75l1.41-1.41A5.96 5.96 0 0 0 12 6m.82 5l2 2H18v2h-1.18L20 18.18V13a2 2 0 0 0-2-2M6 13h3.73l2 2H6m0 2h7.73l4 4H6Z"></svg:path>`,
})
export class MdiCreditCardWirelessOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardWirelessOutlineIcon],svg[mdi-credit-card-wireless-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m0 10H6v-4h12zm0-6H6v-2h12zM4.93 4.92l1.41 1.41c3.12-3.13 8.19-3.13 11.32 0l1.41-1.41C15.17 1 8.84 1 4.93 4.92m2.83 2.83l1.41 1.41a4.01 4.01 0 0 1 5.66 0l1.41-1.41a6 6 0 0 0-8.48 0"></svg:path>`,
})
export class MdiCreditCardWirelessOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCricketIcon],svg[mdi-cricket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.34 17.77l1.41-1.41L20 20.58L18.56 22zM18.5 2A3.5 3.5 0 0 1 22 5.5A3.5 3.5 0 0 1 18.5 9A3.5 3.5 0 0 1 15 5.5A3.5 3.5 0 0 1 18.5 2M2.24 7.11l2.83-2.83a1.02 1.02 0 0 1 1.43 0l8.47 8.49c.39.39.39 1.02 0 1.41L12.14 17a.99.99 0 0 1-1.42 0L2.24 8.53c-.39-.4-.39-1.03 0-1.42"></svg:path>`,
})
export class MdiCricketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCropIcon],svg[mdi-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17V1H5v4H1v2h4v10a2 2 0 0 0 2 2h10v4h2v-4h4v-2m-6-2h2V7a2 2 0 0 0-2-2H9v2h8z"></svg:path>`,
})
export class MdiCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCropFreeIcon],svg[mdi-crop-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-4v2h4v4h2V5a2 2 0 0 0-2-2m0 16h-4v2h4a2 2 0 0 0 2-2v-4h-2M5 15H3v4a2 2 0 0 0 2 2h4v-2H5M3 5v4h2V5h4V3H5a2 2 0 0 0-2 2"></svg:path>`,
})
export class MdiCropFreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCropLandscapeIcon],svg[mdi-crop-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17H5V7h14m0-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCropLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCropPortraitIcon],svg[mdi-crop-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19H7V5h10m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCropPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCropRotateIcon],svg[mdi-crop-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.47 21.5C4.2 19.93 1.86 16.76 1.5 13H0c.5 6.16 5.66 11 11.95 11c.23 0 .44 0 .66-.03L8.8 20.15zM12.05 0c-.23 0-.44 0-.66.04l3.81 3.81l1.33-1.35c3.27 1.57 5.61 4.74 5.97 8.5H24c-.5-6.16-5.66-11-11.95-11M16 14h2V8a2 2 0 0 0-2-2h-6v2h6zm-8 2V4H6v2H4v2h2v8a2 2 0 0 0 2 2h8v2h2v-2h2v-2z"></svg:path>`,
})
export class MdiCropRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCropSquareIcon],svg[mdi-crop-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCropSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrossIcon],svg[mdi-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 2h3v6H19v3h-5.5v11h-3V11H5V8h5.5z"></svg:path>`,
})
export class MdiCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrossBolnisiIcon],svg[mdi-cross-bolnisi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 7l-.5-.5c-1.57 1.5-3.03 2.9-4.57 3.68c-1.43.73-2.49.73-3.93.82c.09-1.44.09-2.5.82-3.93c.78-1.54 2.18-3 3.68-4.57L17 2c-1.68 1.23-3.36 1.83-5 1.83S8.68 3.23 7 2l-.5.5C8 4.07 9.4 5.53 10.18 7.07c.73 1.43.73 2.49.82 3.93c-1.44-.09-2.5-.09-3.93-.82C5.53 9.4 4.06 8 2.5 6.5L2 7c1.23 1.68 1.83 3.36 1.83 5s-.6 3.32-1.83 5l.5.5c1.57-1.5 3.03-2.9 4.57-3.68c1.43-.73 2.49-.73 3.93-.82c-.09 1.44-.09 2.5-.82 3.93c-.78 1.54-2.18 3-3.68 4.57l.5.5c1.68-1.23 3.36-1.83 5-1.83s3.32.6 5 1.83l.5-.5c-1.5-1.57-2.9-3.03-3.68-4.57c-.73-1.43-.73-2.49-.82-3.93c1.44.09 2.5.09 3.93.82c1.54.78 3 2.18 4.57 3.68l.5-.5c-1.23-1.68-1.83-3.36-1.83-5s.6-3.32 1.83-5"></svg:path>`,
})
export class MdiCrossBolnisiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrossCelticIcon],svg[mdi-cross-celtic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.8 8a5.97 5.97 0 0 0-4.3-4.3V2h-3v1.7A5.97 5.97 0 0 0 6.2 8H4v3h2.2a5.97 5.97 0 0 0 4.3 4.3V22h3v-6.7a5.97 5.97 0 0 0 4.3-4.3h2.17V8zm-5.76 1.53L14.5 11h1.26a4.08 4.08 0 0 1-2.26 2.26V12l-1.44-2.44L12 9.5l-.06.06L10.5 12v1.26A4.1 4.1 0 0 1 8.24 11H9.5l2.46-1.47l.04-.03h-.04L9.5 8H8.24a4.08 4.08 0 0 1 2.26-2.26V7l1.44 2.44l.06.06l.06-.06L13.5 7V5.74c1.03.42 1.85 1.23 2.26 2.26H14.5l-2.46 1.5H12z"></svg:path>`,
})
export class MdiCrossCelticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrossOutlineIcon],svg[mdi-cross-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 6V1h-7v5H3v7h5.5v10h7V13H21V6zm3.5 5h-5.5v10h-3V11H5V8h5.5V3h3v5H19z"></svg:path>`,
})
export class MdiCrossOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrosshairsIcon],svg[mdi-crosshairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.05 13H1v-2h2.05C3.5 6.83 6.83 3.5 11 3.05V1h2v2.05c4.17.45 7.5 3.78 7.95 7.95H23v2h-2.05c-.45 4.17-3.78 7.5-7.95 7.95V23h-2v-2.05C6.83 20.5 3.5 17.17 3.05 13M12 5a7 7 0 0 0-7 7a7 7 0 0 0 7 7a7 7 0 0 0 7-7a7 7 0 0 0-7-7"></svg:path>`,
})
export class MdiCrosshairsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrosshairsGpsIcon],svg[mdi-crosshairs-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-8.95 5H1v-2h2.05C3.5 6.83 6.83 3.5 11 3.05V1h2v2.05c4.17.45 7.5 3.78 7.95 7.95H23v2h-2.05c-.45 4.17-3.78 7.5-7.95 7.95V23h-2v-2.05C6.83 20.5 3.5 17.17 3.05 13M12 5a7 7 0 0 0-7 7a7 7 0 0 0 7 7a7 7 0 0 0 7-7a7 7 0 0 0-7-7"></svg:path>`,
})
export class MdiCrosshairsGpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrosshairsOffIcon],svg[mdi-crosshairs-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.94 11C20.5 6.83 17.17 3.5 13 3.06V1h-2v2.06a8.4 8.4 0 0 0-3.16.97l1.5 1.5A6.995 6.995 0 0 1 19 12c0 .94-.19 1.84-.5 2.65l1.5 1.5c.5-.96.82-2.02.95-3.15H23v-2zM3 4.27l2.04 2.04A8.9 8.9 0 0 0 3.06 11H1v2h2.06c.44 4.17 3.77 7.5 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21L21 19.73L4.27 3zm13.27 13.27a6.995 6.995 0 0 1-9.81-9.81z"></svg:path>`,
})
export class MdiCrosshairsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrosshairsQuestionIcon],svg[mdi-crosshairs-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.05 13H1v-2h2.05C3.5 6.83 6.83 3.5 11 3.05V1h2v2.05c4.17.45 7.5 3.78 7.95 7.95H23v2h-2.05c-.45 4.17-3.78 7.5-7.95 7.95V23h-2v-2.05C6.83 20.5 3.5 17.17 3.05 13M12 5c-3.87 0-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7s-3.13-7-7-7m-.87 12.25h1.75V15.5h-1.75zM12 6.75c-1.93 0-3.5 1.57-3.5 3.5h1.75c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 1.75-2.62 1.53-2.62 4.38h1.75c0-1.97 2.62-2.19 2.62-4.38c0-1.93-1.57-3.5-3.5-3.5"></svg:path>`,
})
export class MdiCrosshairsQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrowdIcon],svg[mdi-crowd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.69 9.12a.88.88 0 0 0-.65-.28c-.41 0-.72.19-.92.58s-.15.76.17 1.11q1.77 1.59 2.25 2.25c.41.56.61 1.38.61 2.44c0 1.31.5 2.28 1.5 2.95c.56.44 1.17.77 1.85.99v-3.89c0-.94-.33-1.72-.96-2.35m8.92.05c-.62.62-.96 1.39-.96 2.3v3.93c.96-.34 1.76-.87 2.42-1.57c.65-.7.98-1.47.98-2.41c0-1.13.19-1.94.57-2.44c.09-.16.26-.36.53-.61c.23-.25.47-.49.71-.71c.23-.21.46-.43.68-.65l.33-.28a.9.9 0 0 0 .28-.66c0-.28-.09-.53-.28-.73s-.42-.3-.72-.3s-.5.09-.69.28M12 20c.69 0 1.36-.09 2-.28v-3.57c0-.59-.18-1.05-.59-1.49Q12.795 14 12 14c-.53 0-1 .2-1.38.61c-.4.39-.62.85-.62 1.45v3.66c.64.19 1.31.28 2 .28M9 8.5c0 .83-.67 1.5-1.5 1.5S6 9.33 6 8.5S6.67 7 7.5 7S9 7.67 9 8.5m9 0c0 .83-.67 1.5-1.5 1.5S15 9.33 15 8.5S15.67 7 16.5 7s1.5.67 1.5 1.5m-4.5-3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 4 12 4s1.5.67 1.5 1.5m0 5.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5"></svg:path>`,
})
export class MdiCrowdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrownIcon],svg[mdi-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14z"></svg:path>`,
})
export class MdiCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrownCircleIcon],svg[mdi-crown-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4 13.44c0 .34-.22.56-.56.56H8.56c-.34 0-.56-.22-.56-.56V15h8zM16 14H8L7 8l3 2l2-3l2 3l3-2z"></svg:path>`,
})
export class MdiCrownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrownCircleOutlineIcon],svg[mdi-crown-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m-4-6L7 8l3 2l2-3l2 3l3-2l-1 6zm.56 2c-.34 0-.56-.22-.56-.56V15h8v.44c0 .34-.22.56-.56.56z"></svg:path>`,
})
export class MdiCrownCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrownOutlineIcon],svg[mdi-crown-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8l3 5.2l3-2.7l-.7 3.5H6.7L6 10.5l3 2.7zm0-4l-3.5 6L3 5l2 11h14l2-11l-5.5 5zm7 14H5v1c0 .6.4 1 1 1h12c.6 0 1-.4 1-1z"></svg:path>`,
})
export class MdiCrownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCryengineIcon],svg[mdi-cryengine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.03 12.5c-.03.5-2.12 2.73-5.21 3.74c-3.77 1.26-9.85.79-9.85-3.94c0-2.22 1.81-4.03 4.03-4.03c2.25 0 4.05 1.82 4.05 4.04c0 1.08-.47 2.13-1.18 2.87c.67-.01 3.07-.18 5.34-2.06c.25-.24.41-.44.48-.57c.02-.05.05-.09.04-.15c0-.48-2.61-4.21-8.01-5.28c6.5.34 10.28 4.2 10.31 5.28zM12 10c-1.26 0-2.29 1.04-2.29 2.3A2.29 2.29 0 0 0 12 14.59c1.27 0 2.29-1.02 2.29-2.29c0-1.26-1.02-2.3-2.29-2.3m-8.69 2.34v.08c.1.52 1.51 2.99 6.97 4.46c-6.32-.51-9.16-3.6-9.24-4.46h-.01v-.07c0-.85 3.93-4.77 9.89-5.2c-4.78 1.11-7.61 4.72-7.61 5.19"></svg:path>`,
})
export class MdiCryengineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCrystalBallIcon],svg[mdi-crystal-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.38 8.38l2.12.96l2.12-.96l-.96 2.12l.96 2.12l-2.12-.96l-2.12.96l.96-2.12zM16.5 2.5l1.09 2.91L20.5 6.5l-2.91 1.09l-1.09 2.91l-1.09-2.91L12.5 6.5l2.91-1.09zM6 19h1v-1a1 1 0 0 1 1-1h.26a7.47 7.47 0 0 1-3.76-6.5A7.5 7.5 0 0 1 12 3c1.05 0 2.05.22 2.96.61l-.37.98l-1.42.53Q12.6 5 12 5a5.5 5.5 0 0 0-5.5 5.5A5.5 5.5 0 0 0 12 16c2.91 0 5.3-2.27 5.5-5.13l.91-2.46l.71-.27c.25.74.38 1.54.38 2.36c0 2.78-1.5 5.2-3.76 6.5H16a1 1 0 0 1 1 1v1h1a2 2 0 0 1 2 2v1H4v-1a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiCrystalBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCubeIcon],svg[mdi-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L6.04 7.5L12 10.85l5.96-3.35z"></svg:path>`,
})
export class MdiCubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCubeOffIcon],svg[mdi-cube-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-3.56-3.56l-4.71 2.65c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l.77-.43L1.11 3l1.28-1.27l19.72 19.73zM12 4.15l5.96 3.35l-4.65 2.61l7.22 7.22c.29-.17.47-.48.47-.83v-9c0-.38-.21-.71-.53-.88l-7.9-4.44C12.41 2.06 12.21 2 12 2s-.41.06-.57.18L7.56 4.36L9 5.82z"></svg:path>`,
})
export class MdiCubeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCubeOffOutlineIcon],svg[mdi-cube-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L4.3 6.19l-.77.43c-.32.17-.53.5-.53.88v9c0 .38.21.71.53.88l7.9 4.44c.16.12.36.18.57.18s.41-.06.57-.18l4.71-2.65l3.56 3.56zM5 15.91v-6.7l5.29 2.97l.71.71v6.4zm8 3.38v-4.4l2.82 2.81zM9 5.82L7.56 4.36l3.87-2.18c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9c0 .35-.18.66-.47.83L19 15.8V9.21l-4.22 2.37l-1.47-1.47l4.65-2.61L12 4.15z"></svg:path>`,
})
export class MdiCubeOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCubeOutlineIcon],svg[mdi-cube-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L6.04 7.5L12 10.85l5.96-3.35zM5 15.91l6 3.38v-6.71L5 9.21zm14 0v-6.7l-6 3.37v6.71z"></svg:path>`,
})
export class MdiCubeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCubeScanIcon],svg[mdi-cube-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22v-2h3v-3h2v3.5c0 .39-.16.74-.46 1.04s-.65.46-1.04.46zM7 22H3.5c-.39 0-.74-.16-1.04-.46S2 20.89 2 20.5V17h2v3h3zM17 2h3.5c.39 0 .74.16 1.04.46s.46.65.46 1.04V7h-2V4h-3zM7 2v2H4v3H2V3.5c0-.39.16-.74.46-1.04S3.11 2 3.5 2zm6 15.25l4-2.3v-4.59l-4 2.3zm-1-6.33l4-2.29l-4-2.35l-4 2.35zm-5 4.03l4 2.3v-4.59l-4-2.3zm11.23-7.36c.5.32.77.75.77 1.32v6.32c0 .57-.27 1-.77 1.32l-5.48 3.18q-.75.48-1.5 0l-5.48-3.18c-.5-.32-.77-.75-.77-1.32V8.91c0-.57.27-1 .77-1.32l5.48-3.18c.25-.13.5-.19.75-.19s.5.06.75.19z"></svg:path>`,
})
export class MdiCubeScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCubeSendIcon],svg[mdi-cube-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4L9 8.04v7.92L16 20l7-4.04V8.04m-7-1.73l3.8 2.19l-3.8 2.19l-3.79-2.19M0 7v2h7V7m4 3.11l4 2.31v4.69l-4-2.3m10-4.7v4.7l-4 2.3v-4.69M2 11v2h5v-2m-3 4v2h3v-2"></svg:path>`,
})
export class MdiCubeSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCubeUnfoldedIcon],svg[mdi-cube-unfolded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9V4h7v5h10v7h-5v5h-7v-5H1V9zm10 7h-3v3h3zM8 9h3V6H8zm-2 5v-3H3v3zm12-3v3h3v-3zm-5 0v3h3v-3zm-5 0v3h3v-3z"></svg:path>`,
})
export class MdiCubeUnfoldedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCupIcon],svg[mdi-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.32 8H5.67l-.44-4h13.54M3 2l2 18.23c.13 1 .97 1.77 2 1.77h10c1 0 1.87-.77 2-1.77L21 2z"></svg:path>`,
})
export class MdiCupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCupOffIcon],svg[mdi-cup-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.27L2.28 3L21 21.72L19.73 23l-1.46-1.46c-.34.29-.77.46-1.27.46H7a2.02 2.02 0 0 1-2-1.77L3.53 6.8zM18.32 8l.45-4H5.82l-2-2H21l-1.71 15.47L9.82 8z"></svg:path>`,
})
export class MdiCupOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCupOffOutlineIcon],svg[mdi-cup-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.83 2l2 2h12.95L17.5 15.66l1.8 1.84L21 2M2.27 3L1 4.27L3.53 6.8L5 20.23c.13 1 .97 1.77 2 1.77h10c.47 0 .91-.18 1.26-.46L19.73 23L21 21.73M5.78 9.06L16.73 20H7Z"></svg:path>`,
})
export class MdiCupOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCupOutlineIcon],svg[mdi-cup-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 2l2 18.23c.13 1 .97 1.77 2 1.77h10c1 0 1.87-.77 2-1.77L21 2zm2.22 2h13.56L17 20H7z"></svg:path>`,
})
export class MdiCupOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCupWaterIcon],svg[mdi-cup-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.32 8H5.67l-.44-4h13.54M12 19a3 3 0 0 1-3-3c0-2 3-5.4 3-5.4s3 3.4 3 5.4a3 3 0 0 1-3 3M3 2l2 18.23c.13 1 .97 1.77 2 1.77h10c1 0 1.87-.77 2-1.77L21 2z"></svg:path>`,
})
export class MdiCupWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCupboardIcon],svg[mdi-cupboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7c-1.1 0-2 .9-2 2v15a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-7 16H8v-3h2zm6 0h-2v-3h2zm1-6H7V9h10zm0-5H7V4h10z"></svg:path>`,
})
export class MdiCupboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCupboardOutlineIcon],svg[mdi-cupboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2c-1.1 0-2 .9-2 2v15a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2zm0 2h10v3H7zm0 5h10v3H7zm0 5h4v5H7zm6 0h4v5h-4zm-5 1v3h2v-3zm6 0v3h2v-3z"></svg:path>`,
})
export class MdiCupboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCupcakeIcon],svg[mdi-cupcake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.5A2.5 2.5 0 0 1 14.5 4A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 9.5 4A2.5 2.5 0 0 1 12 1.5M15.87 5C18 5 20 7 20 9c2.7 0 2.7 4 0 4H4c-2.7 0-2.7-4 0-4c0-2 2-4 4.13-4c.44 1.73 2.01 3 3.87 3s3.43-1.27 3.87-3M5 15h3l1 7H7zm5 0h4l-1 7h-2zm6 0h3l-2 7h-2z"></svg:path>`,
})
export class MdiCupcakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurlingIcon],svg[mdi-curling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3v2c2.5 0 3.9.05 4.72.41c.54.24 1.01.8 1.53 1.59H5v2h14.62l-.73-1.45c-1.03-2.05-1.93-3.33-3.36-3.96C14.1 2.95 12.5 3 10 3m-4 8c-2.22 0-4 1.78-4 4v3c0 2.22 1.78 4 4 4h12c2.22 0 4-1.78 4-4v-3c0-2.22-1.78-4-4-4z"></svg:path>`,
})
export class MdiCurlingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyBdtIcon],svg[mdi-currency-bdt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.09 10.5V9h-8.5V4.5A1.5 1.5 0 0 0 8.09 3a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 0 8.09 6v3h-3v1.5h3v6.2c0 2.36 1.91 4.27 4.25 4.3c2.34-.04 4.2-1.96 4.16-4.3c0-1.59-.75-3.09-2-4.08a4 4 0 0 0-.7-.47c-.22-.1-.46-.15-.7-.15c-.71 0-1.36.39-1.71 1c-.19.3-.29.65-.29 1c.01 1.1.9 2 2.01 2c.62 0 1.2-.31 1.58-.8c.21.47.31.98.31 1.5c.04 1.5-1.14 2.75-2.66 2.8c-1.53 0-2.76-1.27-2.75-2.8v-6.2z"></svg:path>`,
})
export class MdiCurrencyBdtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyBrlIcon],svg[mdi-currency-brl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C14.64 12.44 12 11.78 12 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C20.53 5.69 22 7.21 22 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C19.36 11.56 22 12.22 22 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C13.47 18.31 12 16.79 12 15M2 3h3.5A5.5 5.5 0 0 1 11 8.5c0 2.19-1.29 4.09-3.14 4.97L11.64 21H9.4l-3.52-7H4v7H2zm3.5 9A3.5 3.5 0 0 0 9 8.5A3.5 3.5 0 0 0 5.5 5H4v7z"></svg:path>`,
})
export class MdiCurrencyBrlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyBtcIcon],svg[mdi-currency-btc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.06 11.57A3.9 3.9 0 0 0 18 9c0-1.86-1.27-3.43-3-3.87V3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4c0-1.45-.78-2.73-1.94-3.43M10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class MdiCurrencyBtcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyChfIcon],svg[mdi-currency-chf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7 3h11v2H9v6h8v2H9v3h2v2H9v3H7v-3H5v-2h2V3z" fill="currentColor"></svg:path>`,
})
export class MdiCurrencyChfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyCnyIcon],svg[mdi-currency-cny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.28 12H18v2h-5v7h-2v-7H6v-2h4.72L5 3h2.37L12 10.29L16.63 3H19z"></svg:path>`,
})
export class MdiCurrencyCnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyEthIcon],svg[mdi-currency-eth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5h12v2H6m1 4h10v2H7m-1.5 4h13v2h-13"></svg:path>`,
})
export class MdiCurrencyEthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyEurIcon],svg[mdi-currency-eur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18.5c-2.5 0-4.68-1.42-5.76-3.5H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24A6.49 6.49 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.96 8.96 0 0 0 15 3c-3.92 0-7.24 2.5-8.5 6H3l-1 2h4.06c-.06.33-.06.66-.06 1s0 .67.06 1H3l-1 2h4.5c1.26 3.5 4.58 6 8.5 6c2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57"></svg:path>`,
})
export class MdiCurrencyEurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyEurOffIcon],svg[mdi-currency-eur-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L6.7 8.59c-.06.14-.13.27-.2.41H3l-1 2h4.06c-.06.33-.06.66-.06 1s0 .67.06 1H3l-1 2h4.5c1.26 3.5 4.58 6 8.5 6c1.21 0 2.36-.26 3.41-.7l2.43 2.43zM8.58 13c-.05-.33-.08-.66-.08-1s.03-.67.08-1h.53l2 2zM15 18.5c-2.5 0-4.68-1.42-5.76-3.5h3.87l3.33 3.33c-.47.1-.94.17-1.44.17M12.2 9H16l-1 2h-.8zm-1.7-1.68L8.74 5.54A8.96 8.96 0 0 1 15 3c2.3 0 4.41.87 6 2.3l-1.77 1.77A6.47 6.47 0 0 0 15 5.5c-1.74 0-3.31.7-4.5 1.82"></svg:path>`,
})
export class MdiCurrencyEurOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyFraIcon],svg[mdi-currency-fra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z"></svg:path>`,
})
export class MdiCurrencyFraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyGbpIcon],svg[mdi-currency-gbp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21c1.93 0 3.62-1.17 4-3l-1.75-.88C16 18.21 15.33 19 14 19H9.1c.83-1 1.5-2.34 1.5-4c0-.35-.03-.69-.1-1H14v-2H9.82C9 10.42 8 9.6 8 8a3.5 3.5 0 0 1 6.78-1.22L16.63 6c-.8-2.05-2.79-3.5-5.13-3.5C8.46 2.5 6 4.96 6 8c0 1.78.79 2.9 1.5 4H6v2h2.47c.08.31.13.64.13 1c0 2.7-2.6 4-2.6 4v2z"></svg:path>`,
})
export class MdiCurrencyGbpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyIlsIcon],svg[mdi-currency-ils-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16a5 5 0 0 1-5 5H8V9h2v10h7a3 3 0 0 0 3-3V3h2zm-6-8v7h-2V8a3 3 0 0 0-3-3H4v16H2V3h9a5 5 0 0 1 5 5"></svg:path>`,
})
export class MdiCurrencyIlsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyInrIcon],svg[mdi-currency-inr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h10l-1 2h-3.26c.48.58.84 1.26 1.05 2H18l-1 2h-2a5.56 5.56 0 0 1-4.8 4.96V14h-.7l6 7H13l-6-7v-2h2.5c1.76 0 3.22-1.3 3.46-3H7l1-2h4.66C12.1 5.82 10.9 5 9.5 5H7z"></svg:path>`,
})
export class MdiCurrencyInrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyJpyIcon],svg[mdi-currency-jpy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.92 11H18v2h-5v2h5v2h-5v4h-2v-4H6v-2h5v-2H6v-2h4.08L5 3h2.37L12 10.29L16.63 3H19z"></svg:path>`,
})
export class MdiCurrencyJpyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyKrwIcon],svg[mdi-currency-krw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h2l1.33 6h4l1.34-6h2.66l1.34 6h4L20 3h2l-1.33 6H22v2h-1.78l-.44 2H22v2h-2.67L18 21h-2.67L14 15h-4l-1.33 6H6l-1.33-6H2v-2h2.22l-.44-2H2V9h1.33zm11.11 8h-2.22l-.45 2h3.12zm-5.78 7L8 15H6.67zm1.56-7H5.78l.44 2h2.22zm7.78 7l.66-3H16zm1.55-7h-3.11l.45 2h2.22zM12 6l-.67 3h1.34z"></svg:path>`,
})
export class MdiCurrencyKrwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyKztIcon],svg[mdi-currency-kzt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14v2H5zm0 3h14v2h-6v13h-2V8H5z"></svg:path>`,
})
export class MdiCurrencyKztIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyMntIcon],svg[mdi-currency-mnt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5v3.62l4-1.45v2.12l-4 1.45v1.76l4-1.43v2.13l-4 1.45V21h-2v-5.62l-4 1.46v-2.13l4-1.47v-1.77l-4 1.45V10.8l4-1.45V5H5V3h14v2z"></svg:path>`,
})
export class MdiCurrencyMntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyNgnIcon],svg[mdi-currency-ngn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h2V3h2l3.42 6H16V3h2v6h2v2h-2v2h2v2h-2v6h-2l-3.43-6H8v6H6v-6H4v-2h2v-2H4zm4 0h1.13L8 7.03zm0 2v2h3.42l-1.14-2zm8 6v-2h-1.15zm-3.44-6l1.15 2H16v-2z"></svg:path>`,
})
export class MdiCurrencyNgnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyPhpIcon],svg[mdi-currency-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v4H3v2h2v2H3v2h2v10h2v-6h6c2.7 0 5.16-1.56 6.32-4H22v-2h-2.08c.11-.66.11-1.34 0-2H22V6h-2.68C18.16 3.56 15.7 2 13 2M7 4h6c1.57 0 3.06.74 4 2H7zm6 10H7v-2h10c-.94 1.26-2.43 2-4 2m5-5c0 .34-.04.67-.1 1H7V8h10.9c.06.33.1.66.1 1"></svg:path>`,
})
export class MdiCurrencyPhpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyRialIcon],svg[mdi-currency-rial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h2v2h-2zm3 0h2v2h-2zM9 4h2v11a4 4 0 0 1-4 4H5a3 3 0 0 1-3-3v-4h2v4a1 1 0 0 0 1 1h2c1.11 0 2-.89 2-2zm3 0h2v9h3V8h2v5c0 1.11-.89 2-2 2h-3c-1.11 0-2-.89-2-2zm8 6h2v7a3 3 0 0 1-3 3h-2v-2h2a1 1 0 0 0 1-1z"></svg:path>`,
})
export class MdiCurrencyRialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyRubIcon],svg[mdi-currency-rub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3H7v9H5v2h2v2H5v2h2v3h2v-3h4v-2H9v-2h4.5c3.04 0 5.5-2.46 5.5-5.5S16.54 3 13.5 3m0 9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12"></svg:path>`,
})
export class MdiCurrencyRubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyRupeeIcon],svg[mdi-currency-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2c-.27 2.8-2.63 5-5.5 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7z"></svg:path>`,
})
export class MdiCurrencyRupeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencySignIcon],svg[mdi-currency-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.41 3L3 4.41L5.69 7.1A7.92 7.92 0 0 0 4 12c0 1.85.63 3.55 1.69 4.9L3 19.59L4.41 21l2.69-2.69A7.92 7.92 0 0 0 12 20c1.85 0 3.55-.63 4.9-1.69L19.59 21L21 19.59l-2.69-2.69A7.92 7.92 0 0 0 20 12c0-1.85-.63-3.55-1.69-4.9L21 4.41L19.59 3L16.9 5.69A7.92 7.92 0 0 0 12 4c-1.85 0-3.55.63-4.9 1.69zM12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6"></svg:path>`,
})
export class MdiCurrencySignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyThbIcon],svg[mdi-currency-thb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.1 11.6c.6-.7.9-1.6.9-2.6c0-1.9-1.3-3.4-3-3.9L13 5V3h-2v2H7v14h4v2h2v-2h1c2.2 0 4-1.8 4-4c0-1.5-.8-2.7-1.9-3.4M15 9c0 1.1-.9 2-2 2V7c1.1 0 2 .9 2 2M9 7h2v4H9zm0 10v-4h2v4zm5 0h-1v-4h1c1.1 0 2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class MdiCurrencyThbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyTryIcon],svg[mdi-currency-try-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.76V3h2v4.5L15 5v2.36l-4 2.51v2.35l4-2.5v2.36l-4 2.51V19c2.76 0 5-2.24 5-5h2c0 3.87-3.13 7-7 7H9v-5.16l-3 1.88v-2.36l3-1.86v-2.38L6 13v-2.36z"></svg:path>`,
})
export class MdiCurrencyTryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyTwdIcon],svg[mdi-currency-twd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h18v2h-6v6h6v2h-6a2 2 0 0 1-2-2v-6h-2.65l-4.62 8L4 20l4.04-7H3zm2-8h14v2H5z"></svg:path>`,
})
export class MdiCurrencyTwdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyUahIcon],svg[mdi-currency-uah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.59 11H18V9h-1.68c.42-.66.68-1.32.68-2c0-2.63-2.5-4-5-4c-2.35 0-4.47 2.06-4.71 2.29l1.42 1.42C9.19 6.23 10.71 5 12 5c1.04 0 3 .42 3 2c0 .5-.5 1.24-1.24 2H6v2h5.63c-.42.36-1.88 1.67-2.22 2H6v2h1.68c-.42.66-.68 1.32-.68 2c0 2.63 2.5 4 5 4c2.35 0 4.47-2.06 4.71-2.29l-1.42-1.42c-.47.48-2 1.71-3.29 1.71c-1.04 0-3-.42-3-2c0-.5.5-1.24 1.24-2H18v-2h-5.62z"></svg:path>`,
})
export class MdiCurrencyUahIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyUsdIcon],svg[mdi-currency-usd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15"></svg:path>`,
})
export class MdiCurrencyUsdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyUsdCircleIcon],svg[mdi-currency-usd-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m3 8h-4v1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1h-2v-1H9v-2h4v-1h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1V7h2v1h2z" fill="currentColor"></svg:path>`,
})
export class MdiCurrencyUsdCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyUsdCircleOutlineIcon],svg[mdi-currency-usd-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m-1 13v-1H9v-2h4v-1h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1V7h2v1h2v2h-4v1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1h-2z" fill="currentColor"></svg:path>`,
})
export class MdiCurrencyUsdCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyUsdOffIcon],svg[mdi-currency-usd-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.27L4.28 3L21 19.72L19.73 21l-3.67-3.67c-.62.67-1.52 1.22-2.56 1.49V21h-3v-2.18C8.47 18.31 7 16.79 7 15h2c0 1.08 1.37 2 3 2c1.13 0 2.14-.44 2.65-1.08l-2.97-2.97C9.58 12.42 7 11.75 7 9c0-.23 0-.45.07-.66zm7.5.91V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2c-.37 0-.72.05-1.05.13L9.4 5.58z"></svg:path>`,
})
export class MdiCurrencyUsdOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrentAcIcon],svg[mdi-current-ac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.43 11C12.28 10.84 10 7 7 7s-4.68 3.18-5 4v2h9.57c.15.16 2.43 4 5.43 4s4.68-3.18 5-4v-2zM7 9c1.17 0 2.18.85 3 2H4.31c.47-.83 1.23-2 2.69-2m10 6c-1.17 0-2.18-.85-3-2h5.69c-.47.83-1.23 2-2.69 2"></svg:path>`,
})
export class MdiCurrentAcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurrentDcIcon],svg[mdi-current-dc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9v2h20V9zm0 4v2h5v-2zm7 0v2h6v-2zm8 0v2h5v-2z"></svg:path>`,
})
export class MdiCurrentDcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCursorDefaultIcon],svg[mdi-cursor-default-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.64 21.97a.99.99 0 0 1-1.33-.47l-2.18-4.74l-2.51 2.02c-.17.14-.38.22-.62.22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1c.24 0 .47.09.64.23l.01-.01l11.49 9.64a1.001 1.001 0 0 1-.44 1.75l-3.16.62l2.2 4.73c.26.5.02 1.09-.48 1.32z"></svg:path>`,
})
export class MdiCursorDefaultIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCursorDefaultClickIcon],svg[mdi-cursor-default-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.76 8.69a.76.76 0 0 0-.76.76V20.9c0 .42.34.76.76.76c.19 0 .35-.06.48-.16l1.91-1.55l1.66 3.62c.13.27.4.43.69.43c.11 0 .22 0 .33-.08l2.76-1.28c.38-.18.56-.64.36-1.01L17.28 18l2.41-.45a.9.9 0 0 0 .43-.26c.27-.32.23-.79-.12-1.08l-8.74-7.35l-.01.01a.76.76 0 0 0-.49-.18M15 10V8h5v2zm-1.17-5.24l2.83-2.83l1.41 1.41l-2.83 2.83zM10 0h2v5h-2zM3.93 14.66l2.83-2.83l1.41 1.41l-2.83 2.83zm0-11.32l1.41-1.41l2.83 2.83l-1.41 1.41zM7 10H2V8h5z"></svg:path>`,
})
export class MdiCursorDefaultClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCursorDefaultClickOutlineIcon],svg[mdi-cursor-default-click-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 11l6.38 5.37l-.88.18l-.64.12c-.63.13-.99.83-.71 1.4l.27.58l1.36 2.94l-1.42.66l-1.36-2.93l-.26-.58a.985.985 0 0 0-1.52-.36l-.51.4l-.71.57zm-.74-2.31a.76.76 0 0 0-.76.76V20.9c0 .42.34.76.76.76c.19 0 .35-.06.48-.16l1.91-1.55l1.66 3.62c.13.27.4.43.69.43c.11 0 .22 0 .33-.08l2.76-1.28c.38-.18.56-.64.36-1.01L17.28 18l2.41-.45a.9.9 0 0 0 .43-.26c.27-.32.23-.79-.12-1.08l-8.74-7.35l-.01.01a.76.76 0 0 0-.49-.18M15 10V8h5v2zm-1.17-5.24l2.83-2.83l1.41 1.41l-2.83 2.83zM10 0h2v5h-2zM3.93 14.66l2.83-2.83l1.41 1.41l-2.83 2.83zm0-11.32l1.41-1.41l2.83 2.83l-1.41 1.41zM7 10H2V8h5z"></svg:path>`,
})
export class MdiCursorDefaultClickOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCursorDefaultGestureIcon],svg[mdi-cursor-default-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.59 8c-.33 0-.59.27-.59.6v8.97a.593.593 0 0 0 .96.47l1.49-1.21l1.29 2.83c.1.22.31.34.53.34c.09 0 .17 0 .26-.06l2.14-1.01c.3-.14.44-.5.28-.79l-1.29-2.84l1.87-.36c.12-.03.24-.09.33-.2c.21-.24.18-.62-.09-.85L16 8.13a.74.74 0 0 0-.41-.13M12.5 6.73c.22-.07.67.46 1.09 1.03L15 6.71c-.13-.21-.31-.46-.53-.75c-.16-.21-.88-1.03-1.81-1.16c-.62-.08-1.85.26-2.06 1.81c-.13.97.16 1.58.61 2.47c.25.52.83 1.88.97 2.7c.15.81-.12 1.38-.44 1.34c-.3-.04-.54-.47-.71-.71c-.14-.19-1.03-1.59-1.36-2.18c-.45-.73-1.63-2.27-3.23-2.49c-2.09-.28-3 1.46-3.26 2.62L1 10.06v1.82l1.93.27C2.75 15.6 4.5 16.82 5.67 17c1.25.15 2.41-.72 2.57-1.94c.17-1.22-.68-3.56-3.28-4.37c.14-.54.25-1.26 1.4-1.1c.9.12 1.85 1.67 2.57 2.85c.65 1.09 1.17 1.95 1.9 2.28c.62.28 1.33.25 1.9-.07c.69-.39 1.13-1.1 1.27-2.02c.22-1.73-1.3-4.46-1.43-4.79c-.17-.38-.45-1.02-.07-1.11m-6 8.05c-.07.33-.4.47-.62.44c-.5-.06-1.22-.72-1.17-2.69c1.46.6 1.82 1.82 1.79 2.25"></svg:path>`,
})
export class MdiCursorDefaultGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCursorDefaultGestureOutlineIcon],svg[mdi-cursor-default-gesture-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 10.54l3.87 3.29l-1.87.35l.79 1.74l.93 2.04l-.5.23l-.91-1.99l-.81-1.77l-1.5 1.23zM15.59 8c-.33 0-.59.27-.59.6v8.97a.593.593 0 0 0 .96.47l1.49-1.21l1.29 2.83c.1.22.31.34.53.34c.09 0 .17 0 .26-.06l2.14-1.01c.3-.14.44-.5.28-.79l-1.29-2.84l1.87-.36c.12-.03.24-.09.33-.2c.21-.24.18-.62-.09-.85L16 8.13a.74.74 0 0 0-.41-.13M12.5 6.73c.22-.07.67.46 1.09 1.03L15 6.71c-.13-.21-.31-.46-.53-.75c-.16-.21-.88-1.03-1.81-1.16c-.62-.08-1.85.26-2.06 1.81c-.13.97.16 1.58.61 2.47c.25.52.83 1.88.97 2.7c.15.81-.12 1.38-.44 1.34c-.3-.04-.54-.47-.71-.71c-.14-.19-1.03-1.59-1.36-2.18c-.45-.73-1.63-2.27-3.23-2.49c-2.09-.28-3 1.46-3.26 2.62L1 10.06v1.82l1.93.27C2.75 15.6 4.5 16.82 5.67 17c1.25.15 2.41-.72 2.57-1.94c.17-1.22-.68-3.56-3.28-4.37c.14-.54.25-1.26 1.4-1.1c.9.12 1.85 1.67 2.57 2.85c.65 1.09 1.17 1.95 1.9 2.28c.62.28 1.33.25 1.9-.07c.69-.39 1.13-1.1 1.27-2.02c.22-1.73-1.3-4.46-1.43-4.79c-.17-.38-.45-1.02-.07-1.11m-6 8.05c-.07.33-.4.47-.62.44c-.5-.06-1.22-.72-1.17-2.69c1.46.6 1.82 1.82 1.79 2.25"></svg:path>`,
})
export class MdiCursorDefaultGestureOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCursorDefaultOutlineIcon],svg[mdi-cursor-default-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.07 14.27a.997.997 0 0 1 1.33.48l2.3 4.99l1.8-.85l-2.31-4.98c-.24-.5-.02-1.1.48-1.33l.28-.08l2.3-.45L8 5.12V15.9l1.82-1.47zm3.57 7.7a.99.99 0 0 1-1.33-.47l-2.18-4.74l-2.51 2.02c-.17.14-.38.22-.62.22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1c.24 0 .47.09.64.23l.01-.01l11.49 9.64a1.001 1.001 0 0 1-.44 1.75l-3.16.62l2.2 4.73c.26.5.02 1.09-.48 1.32z"></svg:path>`,
})
export class MdiCursorDefaultOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCursorMoveIcon],svg[mdi-cursor-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6v5h5V7.75L22.25 12L18 16.25V13h-5v5h3.25L12 22.25L7.75 18H11v-5H6v3.25L1.75 12L6 7.75V11h5V6H7.75L12 1.75L16.25 6z"></svg:path>`,
})
export class MdiCursorMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCursorPointerIcon],svg[mdi-cursor-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.75 10.19l.63.13l4.17 2.08c.7.23 1.16.92 1.1 1.66v.26l-.9 6.12c-.06.43-.25.83-.6 1.11c-.31.3-.72.45-1.15.45h-6.88c-.49 0-.94-.18-1.27-.53L2.86 15.5l.9-1c.24-.25.62-.39.98-.37h.29L9 15V4.5a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5.69z"></svg:path>`,
})
export class MdiCursorPointerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCursorTextIcon],svg[mdi-cursor-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19a1 1 0 0 0 1 1h2v2h-2.5c-.55 0-1.5-.45-1.5-1c0 .55-.95 1-1.5 1H8v-2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8V2h2.5c.55 0 1.5.45 1.5 1c0-.55.95-1 1.5-1H16v2h-2a1 1 0 0 0-1 1z"></svg:path>`,
})
export class MdiCursorTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurtainsIcon],svg[mdi-curtains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1V1h22zM2 22h4c0-3-2-5-2-5c6-4 7-13 7-13H2zM22 4h-9s1 9 7 13c0 0-2 2-2 5h4z"></svg:path>`,
})
export class MdiCurtainsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCurtainsClosedIcon],svg[mdi-curtains-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1V1h22zM2 22h9V4H2zM22 4h-9v18h9z"></svg:path>`,
})
export class MdiCurtainsClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCylinderIcon],svg[mdi-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-2.11 0-9 .29-9 4v12c0 3.71 6.89 4 9 4s9-.29 9-4V6c0-3.71-6.89-4-9-4m0 8c1.38 0 4.8-.13 7-1.25v6.5C16.8 14.13 13.38 14 12 14s-4.8.13-7 1.25v-6.5C7.2 9.87 10.62 10 12 10m0-6c3.87 0 7 .89 7 2s-3.13 2-7 2s-7-.89-7-2s3.13-2 7-2m0 16c-3.87 0-7-.89-7-2c0-1.1 3.13-2 7-2s7 .9 7 2c0 1.11-3.13 2-7 2"></svg:path>`,
})
export class MdiCylinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiCylinderOffIcon],svg[mdi-cylinder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.64 4.44L6.03 2.83C8.15 2.1 10.82 2 12 2c2.11 0 9 .29 9 4v11.8l-2.94-2.94c.33.11.64.24.94.39v-6.5c-1.72.88-4.18 1.14-5.83 1.22L11.18 8H12c3.87 0 7-.89 7-2s-3.13-2-7-2c-1.65 0-3.16.17-4.36.44m14.47 17.02l-1.27 1.27l-1.93-1.93C16.7 21.87 13.36 22 12 22c-2.11 0-9-.29-9-4V6c0-.34.08-.64.18-.93L1.11 3l1.28-1.27zM5 15.25C7.2 14.13 10.62 14 12 14h.11L7.73 9.62C6.76 9.43 5.8 9.15 5 8.75zm12.39 4.03l-3.18-3.18c-.71-.06-1.43-.1-2.21-.1c-3.87 0-7 .9-7 2s3.13 2 7 2c2.17 0 4.1-.28 5.39-.72"></svg:path>`,
})
export class MdiCylinderOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDanceBallroomIcon],svg[mdi-dance-ballroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.5c0 .83-.67 1.5-1.5 1.5S11 4.33 11 3.5S11.67 2 12.5 2s1.5.67 1.5 1.5M8.5 5C7.67 5 7 5.67 7 6.5S7.67 8 8.5 8S10 7.33 10 6.5S9.33 5 8.5 5m5.5 7l-.78-2.25h2.96l2.16-1.08c.37-.17.52-.63.33-1a.737.737 0 0 0-1-.34l-.82.41l-.49-.84c-.29-.65-1-1.02-1.7-.86l-2.47.53c-.69.15-1.19.78-1.19 1.5v.7l-2.43 1.62h.01c-.08.07-.19.16-.25.28l-.89 1.77l-1.78.89c-.37.17-.52.64-.33 1.01a.753.753 0 0 0 1.01.33l2.22-1.11L9.6 11.5L11 13c-1 3-8 7-8 7s4 2 9 2s9-2 9-2s-5-4-7-8m2.85-.91l-.32.16h-1.2l.06.16c.52 1.03 1.28 2.09 2.11 3.03l-.53-3.41z"></svg:path>`,
})
export class MdiDanceBallroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDancePoleIcon],svg[mdi-dance-pole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1v1l-.77-.64L7.76 5.5l3.24 2V5.16L10.78 5L12 3.56V23h2v-9.76l1.93-1.93c2.57.4 5.2-.95 6.73-2.48l-1.42-1.42C20.1 8.56 17.7 9.61 16 9.26l-2-2.02V1m3 3a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-6 3.76l-3.9 3.9c-1.85 1.84-2.79 3.19-4.04 6.5l1.88.7c1-2.66 1.72-3.72 2.93-5.02l1.35 1.35l-4.95 4.95l1.42 1.42L11 16.24Z"></svg:path>`,
})
export class MdiDancePoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDataIcon],svg[mdi-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 2V5.03c3.392.487 6 3.395 6 6.92c0 .896-.175 1.75-.482 2.537l2.6 1.534A9.925 9.925 0 0 0 22 11.95c0-5.184-3.946-9.446-9-9.95m-2 0a9.993 9.993 0 0 0-9 9.95c0 5.523 4.469 10 9.995 10c3.31 0 6.237-1.613 8.057-4.09l-2.596-1.53A6.98 6.98 0 0 1 12 18.95a7 7 0 0 1-7-7c0-3.526 2.608-6.434 6-6.921V2" fill="currentColor"></svg:path>`,
})
export class MdiDataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDataMatrixIcon],svg[mdi-data-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20h20v-2h-2v-2h2v-2h-2v-2h2v-2h-4v-2h-2v2h-2v-2h-2V8H8v4h4v4h-2v2h2v2h-2v-2H8v-2H6v-2H4v-2h2V6H4V2zm4 4h2V2H6zm2 10h2v-2H8zm10-6h4V8h-4zm0-2V4h-2v2h-2v2zm-2-4V2h-2v2zm2 0h2V2h-2zm2 0v2h2V4zM10 2v4h2V2zm4 12h2v2h2v4h-4zM4 18h2v2H4z"></svg:path>`,
})
export class MdiDataMatrixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDataMatrixEditIcon],svg[mdi-data-matrix-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12.1c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-1.9 1.8l-6.1 6V22h2.1l6.1-6.1zM8 6H6V2h2zm2 10H8v-2h2zm2-10h-2V2h2zm4-4v2h-2V2zm4 2h-2V2h2zM10 20v-2H8v-2H6v-2H4v-2h2V6H4V2H2v20h8zm-4 0H4v-2h2zm16-10h-4V8h4zm-2-4V4h2v2zm-2-2v4h-4V6h2V4zm-8 14v-2h2v-4H8V8h4v2h2v2h2v-2h2v1.1L15.1 14H14v1.1L11.1 18z"></svg:path>`,
})
export class MdiDataMatrixEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDataMatrixMinusIcon],svg[mdi-data-matrix-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2v2h-2V2zm-4 0h-2v4h2zm-2 12H8v2h2zm6-10v2h-2v2h4V4zM8 2H6v4h2zm12 0h-2v2h2zm-6.2 20H2V2h2v4h2v6H4v2h2v2h2v2h2v2h2v-2h-2v-2h2v-4H8V8h4v2h2v2h2v-2h2v2h4v1.8c-.9-.5-1.9-.8-3-.8c-1.2 0-2.4.4-3.3 1H14v1.7c-.6.9-1 2.1-1 3.3c0 1.1.3 2.1.8 3M6 18H4v2h2zM22 8h-4v2h4zm0-2V4h-2v2zm-7 12v2h8v-2z"></svg:path>`,
})
export class MdiDataMatrixMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDataMatrixPlusIcon],svg[mdi-data-matrix-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2v2h-2V2zm-4 0h-2v4h2zm-2 12H8v2h2zm6-10v2h-2v2h4V4zM8 2H6v4h2zm12 0h-2v2h2zm-6.2 20H2V2h2v4h2v6H4v2h2v2h2v2h2v2h2v-2h-2v-2h2v-4H8V8h4v2h2v2h2v-2h2v2h4v1.8c-.9-.5-1.9-.8-3-.8c-1.2 0-2.4.4-3.3 1H14v1.7c-.6.9-1 2.1-1 3.3c0 1.1.3 2.1.8 3M6 18H4v2h2zM22 8h-4v2h4zm0-2V4h-2v2zm-4 9v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiDataMatrixPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDataMatrixRemoveIcon],svg[mdi-data-matrix-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2v2h-2V2zm-4 0h-2v4h2zm-2 12H8v2h2zm6-10v2h-2v2h4V4zM8 2H6v4h2zm12 0h-2v2h2zm-6.2 20H2V2h2v4h2v6H4v2h2v2h2v2h2v2h2v-2h-2v-2h2v-4H8V8h4v2h2v2h2v-2h2v2h4v1.8c-.9-.5-1.9-.8-3-.8c-1.2 0-2.4.4-3.3 1H14v1.7c-.6.9-1 2.1-1 3.3c0 1.1.3 2.1.8 3M6 18H4v2h2zM22 8h-4v2h4zm0-2V4h-2v2zm-.9 9.5L19 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1z"></svg:path>`,
})
export class MdiDataMatrixRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDataMatrixScanIcon],svg[mdi-data-matrix-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h4V0H2C.9 0 0 .9 0 2v4h2zm20-2h-4v2h4v4h2V2c0-1.1-.9-2-2-2M2 18H0v4c0 1.1.9 2 2 2h4v-2H2zm20 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2zM8 6V4h2v2zm2 8v-2h2v2zm6-10h2v2h-2zm2 2h2v2h-2zm0 8h2v2h-2zm2-2h-4v6h4v2H4V4h2v2h2v4H6v2h2v2h2v2h2v2h2v-2h-2v-2h2v-4h-4V6h2V4h2v4h2v2h4zM8 18v-2H6v2z"></svg:path>`,
})
export class MdiDataMatrixScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseIcon],svg[mdi-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4"></svg:path>`,
})
export class MdiDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseAlertIcon],svg[mdi-database-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7c0 2.21-3.58 4-8 4S2 9.21 2 7s3.58-4 8-4s8 1.79 8 4m-8 11c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4m0-5c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4m10 4h2v-2h-2zm0-10v6h2V7z"></svg:path>`,
})
export class MdiDatabaseAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseAlertOutlineIcon],svg[mdi-database-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3C5.58 3 2 4.79 2 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23zm0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM10 9C6.13 9 4 7.5 4 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2m12-2v6h-2V7zm-2 8h2v2h-2z"></svg:path>`,
})
export class MdiDatabaseAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseArrowDownIcon],svg[mdi-database-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c-2.17 0-4.07 1.16-5.12 2.89c-.6.07-1.23.11-1.88.11c-4.42 0-8-1.79-8-4V9c0 2.21 3.58 4 8 4s8-1.79 8-4v3c0 .36-.1.71-.28 1.05C19.5 13 19.24 13 19 13m-7-2c4.42 0 8-1.79 8-4s-3.58-4-8-4s-8 1.79-8 4s3.58 4 8 4m1.1 6.96c-.36.04-.73.04-1.1.04c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19c0-.36.04-.7.1-1.04M20 20v-4h-2v4h-2l3 3l3-3z"></svg:path>`,
})
export class MdiDatabaseArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseArrowDownOutlineIcon],svg[mdi-database-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.09V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19v-.05c-.32.05-.65.05-1 .05c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23c.65 0 1.27-.04 1.88-.11A5.99 5.99 0 0 1 19 13c.34 0 .67.04 1 .09m-2-.64c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2m10 11l-3 3l-3-3h2v-4h2v4z"></svg:path>`,
})
export class MdiDatabaseArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseArrowLeftIcon],svg[mdi-database-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4m15.72 6.05c.18-.34.28-.69.28-1.05V9c0 2.21-3.58 4-8 4s-8-1.79-8-4v3c0 2.21 3.58 4 8 4c.65 0 1.28-.04 1.88-.11A5.99 5.99 0 0 1 19 13c.24 0 .5 0 .72.05m-6.62 4.91c-.36.04-.73.04-1.1.04c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19c0-.36.04-.7.1-1.04M18 18v-2l-3 3l3 3v-2h4v-2z"></svg:path>`,
})
export class MdiDatabaseArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseArrowLeftOutlineIcon],svg[mdi-database-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.09V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19v-.05c-.32.05-.65.05-1 .05c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23c.65 0 1.27-.04 1.88-.11A5.99 5.99 0 0 1 19 13c.34 0 .67.04 1 .09m-2-.64c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2m10 9v2h-4v2l-3-3l3-3v2z"></svg:path>`,
})
export class MdiDatabaseArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseArrowRightIcon],svg[mdi-database-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4m15.72 6.05c.18-.34.28-.69.28-1.05V9c0 2.21-3.58 4-8 4s-8-1.79-8-4v3c0 2.21 3.58 4 8 4c.65 0 1.28-.04 1.88-.11A5.99 5.99 0 0 1 19 13c.24 0 .5 0 .72.05m-6.62 4.91c-.36.04-.73.04-1.1.04c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19c0-.36.04-.7.1-1.04M23 19l-3-3v2h-4v2h4v2z"></svg:path>`,
})
export class MdiDatabaseArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseArrowRightOutlineIcon],svg[mdi-database-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.09V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19v-.05c-.32.05-.65.05-1 .05c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23c.65 0 1.27-.04 1.88-.11A5.99 5.99 0 0 1 19 13c.34 0 .67.04 1 .09m-2-.64c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2m8 13v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiDatabaseArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseArrowUpIcon],svg[mdi-database-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c-2.17 0-4.07 1.16-5.12 2.89c-.6.07-1.23.11-1.88.11c-4.42 0-8-1.79-8-4V9c0 2.21 3.58 4 8 4s8-1.79 8-4v3c0 .36-.1.71-.28 1.05C19.5 13 19.24 13 19 13m-7-2c4.42 0 8-1.79 8-4s-3.58-4-8-4s-8 1.79-8 4s3.58 4 8 4m1.1 6.96c-.36.04-.73.04-1.1.04c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19c0-.36.04-.7.1-1.04M19 15l-3 3h2v4h2v-4h2z"></svg:path>`,
})
export class MdiDatabaseArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseArrowUpOutlineIcon],svg[mdi-database-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.09V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19v-.05c-.32.05-.65.05-1 .05c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23c.65 0 1.27-.04 1.88-.11A5.99 5.99 0 0 1 19 13c.34 0 .67.04 1 .09m-2-.64c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2m10 9h-2v4h-2v-4h-2l3-3z"></svg:path>`,
})
export class MdiDatabaseArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseCheckIcon],svg[mdi-database-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.42 0 8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4s3.58-4 8-4M4 9c0 2.21 3.58 4 8 4s8-1.79 8-4v3.08L19 12c-2.59 0-4.8 1.64-5.64 3.94L12 16c-4.42 0-8-1.79-8-4zm0 5c0 2.21 3.58 4 8 4h1c0 1.05.27 2.04.75 2.9L12 21c-4.42 0-8-1.79-8-4zm14 7.08l-2.75-3l1.16-1.16L18 18.5l3.59-3.58l1.16 1.41z"></svg:path>`,
})
export class MdiDatabaseCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseCheckOutlineIcon],svg[mdi-database-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.09V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19v-.05c-.32.05-.65.05-1 .05c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23c.65 0 1.27-.04 1.88-.11A5.99 5.99 0 0 1 19 13c.34 0 .67.04 1 .09m-2-.64c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2m10.5 8.25L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiDatabaseCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseClockIcon],svg[mdi-database-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 16.25l2.86 1.69l-.75 1.22L15 17v-5h1.5zM23 16c0 3.87-3.13 7-7 7a7 7 0 0 1-5.75-3C6.18 19.79 3 18.08 3 16v-3c0 1.88 2.58 3.44 6.06 3.88C9.03 16.59 9 16.3 9 16c0-.38.04-.75.1-1.12c-3.5-.43-6.1-2-6.1-3.88V8c0 2.09 3.2 3.8 7.27 4c.6-.86 1.37-1.56 2.26-2.07c-.49.04-1.03.07-1.53.07c-4.42 0-8-1.79-8-4s3.58-4 8-4s8 1.79 8 4c0 1.2-1.07 2.28-2.75 3c.75.04 1.5.19 2.19.45C18.79 9 19 8.5 19 8v1.68c2.36 1.13 4 3.53 4 6.32m-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"></svg:path>`,
})
export class MdiDatabaseClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseClockOutlineIcon],svg[mdi-database-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 16.25l2.86 1.69l-.75 1.22L15 17v-5h1.5zM23 16c0 3.87-3.13 7-7 7a7 7 0 0 1-5.75-3C6.19 19.79 3 18.08 3 16V6c0-2.21 3.58-4 8-4s8 1.79 8 4v3.68c2.36 1.13 4 3.53 4 6.32m-6-6.92v-.44c-.23.13-.5.26-.76.36c.26 0 .51.04.76.08M5 6c0 .5 2.13 2 6 2s6-1.5 6-2s-2.13-2-6-2s-6 1.5-6 2m0 5.45c1.07.78 2.8 1.31 4.72 1.48c.61-1.26 1.6-2.31 2.82-3.01c-.5.05-1.01.08-1.54.08c-2.39 0-4.53-.53-6-1.36zm4.26 6.42C9.1 17.27 9 16.65 9 16c0-.39.04-.77.1-1.14c-1.54-.17-2.95-.53-4.1-1.09V16c0 .42 1.5 1.5 4.26 1.87M21 16c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"></svg:path>`,
})
export class MdiDatabaseClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseCogIcon],svg[mdi-database-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4m8.08 11H12c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4h.29a7.4 7.4 0 0 1-.29-2c0-.34.03-.67.08-1M20 12.08V9c0 2.21-3.58 4-8 4s-8-1.79-8-4v3c0 2.21 3.58 4 8 4h.69c1.13-2.37 3.53-4 6.31-4c.34 0 .67.03 1 .08m3.8 8.32c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiDatabaseCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseCogOutlineIcon],svg[mdi-database-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14c-2.42 0-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v2.44c.33-.05.66-.08 1-.08s.67.03 1 .08V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4h.29a7.4 7.4 0 0 1-.29-2c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23c.24 0 .47 0 .7-.03c.4-.83.95-1.56 1.62-2.16c-.74.12-1.52.19-2.32.19m0-9c3.87 0 6 1.5 6 2s-2.13 2-6 2s-6-1.5-6-2s2.13-2 6-2m10.7 14.6v-1l1.1-.8c.1-.1.2-.2.1-.3l-1-1.7c0-.1-.2-.1-.3-.1l-1.2.5c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2h-2c-.2 0-.3.1-.3.2l-.2 1.3c-.3.2-.5.3-.8.5l-1.2-.5c-.1 0-.2 0-.3.1l-1 1.7c0 .1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.1-.2.2-.1.3l1 1.7c.1.1.2.1.3.1l1.2-.5c.2.2.5.4.8.5l.2 1.3c.1.1.2.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.2.5-.3.8-.5l1.2.4c.1 0 .2 0 .3-.1l1-1.7c.1-.1.1-.2 0-.2zm-3.7.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"></svg:path>`,
})
export class MdiDatabaseCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseEditIcon],svg[mdi-database-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14v3c0 2 3.05 3.72 7 4v-2.89l.13-.11C7.12 17.76 4 16.06 4 14m8-1c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4h1.16L17 12.12c-1.6.6-3.29.88-5 .88m0-10C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4m9 8.13c-.15 0-.29.06-.39.17l-1 1l2.05 2l1-1a.54.54 0 0 0 0-.77l-1.24-1.23a.52.52 0 0 0-.38-.17m-2 1.75L13 18.94V21h2.06l6.06-6.07z"></svg:path>`,
})
export class MdiDatabaseEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseEditOutlineIcon],svg[mdi-database-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c.8 0 1.57-.07 2.31-.18l2.91-2.91C15.89 13.59 14 14 12 14c-2.42 0-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v2.49l1.39-1.39c.18-.18.39-.32.61-.44V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.04 3.06 3.72 7 3.97v-1.84l.17-.17C7.84 18.76 6 17.46 6 17v-2.23c1.61.78 3.72 1.23 6 1.23m0-11c3.87 0 6 1.5 6 2s-2.13 2-6 2s-6-1.5-6-2s2.13-2 6-2m7.13 8.83l2.04 2.04L15.04 22H13v-2.04zm3.72.36l-.98.98l-2.04-2.04l.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72"></svg:path>`,
})
export class MdiDatabaseEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseExportIcon],svg[mdi-database-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4c.5 0 1-.03 1.5-.08V9.5h2.89l-1-1L18.9 5c-1.4-1.2-3.96-2-6.9-2m6.92 4.08L17.5 8.5L20 11h-5v2h5l-2.5 2.5l1.42 1.42L23.84 12M4 9v3c0 2.21 3.58 4 8 4c1.17 0 2.26-.15 3.25-.37l1.13-1.13H13.5v-1.58c-.5.05-1 .08-1.5.08c-4.42 0-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4c2.94 0 5.5-.8 6.9-2L17 17.1c-1.39.56-3.1.9-5 .9c-4.42 0-8-1.79-8-4"></svg:path>`,
})
export class MdiDatabaseExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseExportOutlineIcon],svg[mdi-database-export-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.86 18l1.04 1c-1.4 1.2-3.96 2-6.9 2c-4.41 0-8-1.79-8-4V7c0-2.21 3.58-4 8-4c2.95 0 5.5.8 6.9 2l-1.04 1l-.36.4C16.65 5.77 14.78 5 12 5C8.13 5 6 6.5 6 7s2.13 2 6 2c1.37 0 2.5-.19 3.42-.46l.96.96H13.5v1.42c-.5.05-1 .08-1.5.08c-2.39 0-4.53-.53-6-1.36v2.81C7.3 13.4 9.58 14 12 14c.5 0 1-.03 1.5-.08v.58h2.88l-1 1l.12.11c-1.09.25-2.26.39-3.5.39c-2.28 0-4.39-.45-6-1.23V17c0 .5 2.13 2 6 2c2.78 0 4.65-.77 5.5-1.39zm1.06-10.92L17.5 8.5L20 11h-5v2h5l-2.5 2.5l1.42 1.42L23.84 12z"></svg:path>`,
})
export class MdiDatabaseExportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseEyeIcon],svg[mdi-database-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12V9c0 2.2 3.6 4 8 4s8-1.8 8-4v3c0 .5-.2.9-.5 1.4c-.8-.3-1.6-.4-2.5-.4c-2.5 0-4.9 1.1-6.4 2.9C6.8 15.6 4 14 4 12m8-1c4.4 0 8-1.8 8-4s-3.6-4-8-4s-8 1.8-8 4s3.6 4 8 4m-2.9 8.7l-.3-.7l.3-.7c.1-.2.2-.3.2-.5c-3.1-.6-5.3-2-5.3-3.8v3c0 1.8 2.4 3.3 5.7 3.8c-.2-.3-.4-.7-.6-1.1M17 18c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m6 1c-.9 2.3-3.3 4-6 4s-5.1-1.7-6-4c.9-2.3 3.3-4 6-4s5.1 1.7 6 4m-3.5 0c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5"></svg:path>`,
})
export class MdiDatabaseEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseEyeOffIcon],svg[mdi-database-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.1 10.9l-7-7c1.3-.6 3-.9 4.9-.9c4.4 0 8 1.8 8 4c0 1.9-2.5 3.4-5.9 3.9m2.1 2.1h.8c.9 0 1.7.1 2.5.4c.3-.4.5-.9.5-1.4V9c0 1.5-1.7 2.9-4.3 3.5zm2.2 2.2l4.4 4.4c.1-.2.2-.4.3-.5c-.9-2-2.6-3.5-4.7-3.9m3.7 6.3l-1.3 1.3l-.6-.6c-1 .5-2.1.9-3.2.9c-2.7 0-5.1-1.7-6-4c.6-1.4 1.6-2.5 2.9-3.2l-1.5-1.5c-.7.4-1.3 1-1.9 1.6c-3.7-.4-6.5-2-6.5-4V9c0 2.1 3.1 3.7 7.1 4l-2.3-2.3C6 10 4 8.6 4 7c0-.3.1-.6.2-.9L1.1 3l1.3-1.3zm-3.3-.8l-1.1-1.1c-.1.3-.4.4-.7.4c-.6 0-1-.4-1-1c0-.3.1-.6.4-.8l-1.1-1.1c-.5.5-.8 1.1-.8 1.8c0 1.4 1.1 2.5 2.5 2.5c.7.1 1.4-.2 1.8-.7M8.8 19l.3-.7c.1-.2.2-.3.2-.5c-3.1-.6-5.3-2-5.3-3.8v3c0 1.8 2.4 3.3 5.7 3.8c-.2-.3-.4-.7-.5-1.1z"></svg:path>`,
})
export class MdiDatabaseEyeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseEyeOffOutlineIcon],svg[mdi-database-eye-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 19c-.1.2-.2.4-.3.5l-4.4-4.4c2.2.5 3.9 2 4.7 3.9M12 5c3.9 0 6 1.5 6 2s-2.1 1.9-5.8 2l1.9 1.9c1.5-.2 2.9-.6 3.9-1.2v2.8c-.3.2-.6.4-1 .6q1.5 0 3 .6V7c0-2.2-3.6-4-8-4c-1.9 0-3.6.3-4.9.9l1.6 1.6c.8-.3 2-.5 3.3-.5m10.1 16.5l-1.3 1.3l-.6-.6c-1 .5-2.1.9-3.2.9c-2.7 0-5.1-1.7-6-4c.6-1.4 1.6-2.5 2.9-3.2l-1.5-1.5c-.7.4-1.3 1-1.9 1.6c-1.7-.1-3.3-.5-4.6-1.2V17c0 .3 1.1 1.2 3 1.6l-.1.4l.3.7c.2.4.3.7.5 1.1c-3.2-.5-5.6-2-5.6-3.8V7c0-.3.1-.6.2-.9L1.1 3l1.3-1.3zm-10-7.5l-3.4-3.4c-1.1-.2-2-.6-2.8-1v2.8c1.3 1 3.6 1.5 6 1.5c.1.1.2.1.2.1m6.7 6.7l-1.1-1.1c-.1.3-.4.4-.7.4c-.6 0-1-.4-1-1c0-.3.1-.6.4-.8l-1.1-1.1c-.5.5-.8 1.1-.8 1.8c0 1.4 1.1 2.5 2.5 2.5c.7.1 1.4-.2 1.8-.7"></svg:path>`,
})
export class MdiDatabaseEyeOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseEyeOutlineIcon],svg[mdi-database-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.1 19.7l-.3-.7l.2-.4c-1.9-.5-3-1.3-3-1.6v-2.2c1.3.6 2.8 1 4.6 1.2c.7-.8 1.6-1.5 2.5-2H12c-2.4 0-4.7-.6-6-1.5V9.6c1.5.8 3.6 1.4 6 1.4s4.5-.5 6-1.4v2.8c-.3.2-.6.4-1 .6q1.5 0 3 .6V7c0-2.2-3.6-4-8-4S4 4.8 4 7v10c0 1.8 2.4 3.3 5.7 3.8c-.2-.3-.4-.7-.6-1.1M12 5c3.9 0 6 1.5 6 2s-2.1 2-6 2s-6-1.5-6-2s2.1-2 6-2m5 13c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0-3c-2.7 0-5.1 1.7-6 4c.9 2.3 3.3 4 6 4s5.1-1.7 6-4c-.9-2.3-3.3-4-6-4m0 6.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5"></svg:path>`,
})
export class MdiDatabaseEyeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseImportIcon],svg[mdi-database-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C8.59 3 5.69 4.07 4.54 5.57l5.25 5.25c.71.11 1.43.18 2.21.18c4.42 0 8-1.79 8-4s-3.58-4-8-4M3.92 7.08L2.5 8.5L5 11H0v2h5l-2.5 2.5l1.42 1.42L8.84 12M20 9c0 2.21-3.58 4-8 4c-.66 0-1.3-.05-1.91-.13l-2.47 2.47c1.26.41 2.76.66 4.38.66c4.42 0 8-1.79 8-4m0 2c0 2.21-3.58 4-8 4c-2.28 0-4.33-.5-5.79-1.25l-1.68 1.68C5.68 19.93 8.59 21 12 21c4.42 0 8-1.79 8-4"></svg:path>`,
})
export class MdiDatabaseImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseImportOutlineIcon],svg[mdi-database-import-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.84 12l-4.92 4.92L2.5 15.5L5 13H0v-2h5L2.5 8.5l1.42-1.42zM12 3C8.59 3 5.68 4.07 4.53 5.57L5 6l1.03 1.07C6 7.05 6 7 6 7c0-.5 2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2c-2.62 0-4.42-.69-5.32-1.28l3.12 3.12c.7.1 1.44.16 2.2.16c2.39 0 4.53-.53 6-1.36v2.81c-1.3.95-3.58 1.55-6 1.55c-.96 0-1.9-.1-2.76-.27l-1.65 1.64c1.32.4 2.82.63 4.41.63c2.28 0 4.39-.45 6-1.23V17c0 .5-2.13 2-6 2s-6-1.5-6-2v-.04L5 18l-.46.43C5.69 19.93 8.6 21 12 21c4.41 0 8-1.79 8-4V7c0-2.21-3.58-4-8-4"></svg:path>`,
})
export class MdiDatabaseImportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseLockIcon],svg[mdi-database-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3c4.42 0 8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4s3.58-4 8-4m8 9.03a4.5 4.5 0 0 0-3.87 3.4c-1.21.36-2.63.57-4.13.57c-4.42 0-8-1.79-8-4V9c0 2.21 3.58 4 8 4s8-1.79 8-4zm-5 5.68v3c-.93.19-1.94.29-3 .29c-4.42 0-8-1.79-8-4v-3c0 2.21 3.58 4 8 4c1.06 0 2.07-.1 3-.29M19.5 14a2.5 2.5 0 0 1 2.5 2.5v.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1v-.5a2.5 2.5 0 0 1 2.5-2.5m0 1a1.5 1.5 0 0 0-1.5 1.5v.5h3v-.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiDatabaseLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseLockOutlineIcon],svg[mdi-database-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12.45V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v1.41c.17-.02.33-.05.5-.05c.53 0 1.03.1 1.5.26V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c.34 0 .67 0 1-.03v-2.02c-.32.05-.65.05-1 .05c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23c.41 0 .81-.03 1.21-.06c.19-.48.47-.91.86-1.24c.06-.31.16-.61.27-.9c-.74.13-1.53.2-2.34.2c-2.42 0-4.7-.6-6-1.55M12 5c3.87 0 6 1.5 6 2s-2.13 2-6 2s-6-1.5-6-2s2.13-2 6-2m9 11v-.5a2.5 2.5 0 0 0-5 0v.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></svg:path>`,
})
export class MdiDatabaseLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseMarkerIcon],svg[mdi-database-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 12c-1.9 0-3.5 1.6-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5c0-1.9-1.6-3.5-3.5-3.5m0 4.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2M4 12V9c0 2.21 3.58 4 8 4c.57 0 1.13-.03 1.67-.09c-.42.78-.67 1.66-.67 2.59c0 .15 0 .31.03.46c-.34.04-.68.04-1.03.04c-4.42 0-8-1.79-8-4m0-5c0-2.21 3.58-4 8-4s8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4m11 13.71c-.93.19-1.94.29-3 .29c-4.42 0-8-1.79-8-4v-3c0 2.21 3.58 4 8 4c.5 0 1.03-.03 1.5-.07c.4.98.94 1.94 1.5 2.78"></svg:path>`,
})
export class MdiDatabaseMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseMarkerOutlineIcon],svg[mdi-database-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23c.35 0 .69-.03 1.03-.05c-.03-.15-.03-.3-.03-.45c0-.54.09-1.06.24-1.56c-.41.06-.82.06-1.24.06c-2.42 0-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v.39c.17-.03.33-.03.5-.03c.5 0 1 .08 1.5.22V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c1.06 0 2.07-.11 3-.29c-.38-.57-.75-1.21-1.07-1.86c-.59.09-1.22.15-1.93.15m0-14c3.87 0 6 1.5 6 2s-2.13 2-6 2s-6-1.5-6-2s2.13-2 6-2m6.5 7c-1.9 0-3.5 1.6-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5c0-1.9-1.6-3.5-3.5-3.5m0 4.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2"></svg:path>`,
})
export class MdiDatabaseMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseMinusIcon],svg[mdi-database-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17v2h-8v-2M12 3c4.42 0 8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4s3.58-4 8-4M4 9c0 2.21 3.58 4 8 4s8-1.79 8-4v3.08L19 12c-2.59 0-4.8 1.64-5.64 3.94L12 16c-4.42 0-8-1.79-8-4zm0 5c0 2.21 3.58 4 8 4h1c0 1.05.27 2.04.75 2.9L12 21c-4.42 0-8-1.79-8-4z"></svg:path>`,
})
export class MdiDatabaseMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseMinusOutlineIcon],svg[mdi-database-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.09V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19v-.05c-.32.05-.65.05-1 .05c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23c.65 0 1.27-.04 1.88-.11A5.99 5.99 0 0 1 19 13c.34 0 .67.04 1 .09m-2-.64c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2m11 9v2h-8v-2z"></svg:path>`,
})
export class MdiDatabaseMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseOffIcon],svg[mdi-database-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.07 15.87c.59-.56.93-1.19.93-1.87v2.8zM20 9c0 1.54-1.73 2.86-4.27 3.53l2.16 2.16C19.19 14 20 13.04 20 12zm0-2c0-2.21-3.58-4-8-4c-1.87 0-3.58.33-4.94.86l7 7C17.5 10.41 20 8.85 20 7M2.39 1.73L1.11 3l3.1 3.1c-.13.29-.21.59-.21.9c0 1.63 1.96 3.04 4.77 3.66l2.31 2.31C7.1 12.74 4 11.06 4 9v3c0 2.21 3.58 4 8 4c.69 0 1.35-.05 2-.13l1.66 1.68c-1.09.29-2.34.45-3.66.45c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4c2.31 0 4.38-.5 5.84-1.27l3 3l1.27-1.27z"></svg:path>`,
})
export class MdiDatabaseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseOffOutlineIcon],svg[mdi-database-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l3.1 3.1c-.13.29-.21.59-.21.9v10c0 2.21 3.59 4 8 4c2.3 0 4.38-.5 5.84-1.27l3 3l1.27-1.27zM6 9.64c.76.43 1.7.78 2.76 1.01L12.11 14H12c-2.42 0-4.7-.6-6-1.55zM12 19c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23c.68 0 1.34-.05 2-.13l2.34 2.36c-1.01.42-2.47.77-4.34.77M8.64 5.44L7.06 3.86C8.42 3.33 10.13 3 12 3c4.42 0 8 1.79 8 4v9.8l-2-2v-.03v.01l-1.55-1.53c.6-.22 1.13-.49 1.55-.8V9.64c-1.03.58-2.39 1.01-3.94 1.22L12.19 9C15.94 8.94 18 7.5 18 7s-2.13-2-6-2c-1.34 0-2.46.18-3.36.44"></svg:path>`,
})
export class MdiDatabaseOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseOutlineIcon],svg[mdi-database-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23zm0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2"></svg:path>`,
})
export class MdiDatabaseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabasePlusIcon],svg[mdi-database-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM12 3c4.42 0 8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4s3.58-4 8-4M4 9c0 2.21 3.58 4 8 4s8-1.79 8-4v3.08L19 12c-2.59 0-4.8 1.64-5.64 3.94L12 16c-4.42 0-8-1.79-8-4zm0 5c0 2.21 3.58 4 8 4h1c0 1.05.27 2.04.75 2.9L12 21c-4.42 0-8-1.79-8-4z"></svg:path>`,
})
export class MdiDatabasePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabasePlusOutlineIcon],svg[mdi-database-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.09V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19v-.05c-.32.05-.65.05-1 .05c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23c.65 0 1.27-.04 1.88-.11A5.99 5.99 0 0 1 19 13c.34 0 .67.04 1 .09m-2-.64c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2m11 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></svg:path>`,
})
export class MdiDatabasePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseRefreshIcon],svg[mdi-database-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.42 0 8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4s3.58-4 8-4M4 9c0 2.21 3.58 4 8 4c1.11 0 2.18-.11 3.14-.32c-.95.86-1.64 1.99-1.96 3.28L12 16c-4.42 0-8-1.79-8-4zm16 0v2h-.5l-.6.03c.7-.6 1.1-1.29 1.1-2.03M4 14c0 2.21 3.58 4 8 4l1-.03c.09 1.06.42 2.03.95 2.91L12 21c-4.42 0-8-1.79-8-4zm15-.5c1.11 0 2.11.45 2.83 1.17L23 13.5v4h-4l1.77-1.77A2.5 2.5 0 1 0 21 19h1.71A3.99 3.99 0 0 1 19 21.5c-2.21 0-4-1.79-4-4s1.79-4 4-4"></svg:path>`,
})
export class MdiDatabaseRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseRefreshOutlineIcon],svg[mdi-database-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12.45V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v2.39c.17-.03.33-.03.5-.03c.5 0 1 .07 1.5.18V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4h.5c-.26-.63-.41-1.3-.47-2H12c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23h.5c.35-.82.84-1.54 1.45-2.14c-.63.09-1.28.14-1.95.14c-2.42 0-4.7-.6-6-1.55M12 5c3.87 0 6 1.5 6 2s-2.13 2-6 2s-6-1.5-6-2s2.13-2 6-2m6 13.5l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.11 0 2.11.45 2.83 1.17L22 14.5v4z"></svg:path>`,
})
export class MdiDatabaseRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseRemoveIcon],svg[mdi-database-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.46 15.88l1.42-1.42L19 16.59l2.12-2.12l1.41 1.41L20.41 18l2.13 2.12l-1.42 1.42L19 19.41l-2.12 2.12l-1.41-1.41L17.59 18zM12 3c4.42 0 8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4s3.58-4 8-4M4 9c0 2.21 3.58 4 8 4s8-1.79 8-4v3.08L19 12c-2.59 0-4.8 1.64-5.64 3.94L12 16c-4.42 0-8-1.79-8-4zm0 5c0 2.21 3.58 4 8 4h1c0 1.05.27 2.04.75 2.9L12 21c-4.42 0-8-1.79-8-4z"></svg:path>`,
})
export class MdiDatabaseRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseRemoveOutlineIcon],svg[mdi-database-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.09V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19v-.05c-.32.05-.65.05-1 .05c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23c.65 0 1.27-.04 1.88-.11A5.99 5.99 0 0 1 19 13c.34 0 .67.04 1 .09m-2-.64c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2m8.41 10l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41z"></svg:path>`,
})
export class MdiDatabaseRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseSearchIcon],svg[mdi-database-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.68 12.32a4.49 4.49 0 0 0-6.36.01a4.49 4.49 0 0 0 0 6.36a4.51 4.51 0 0 0 5.57.63L21 22.39L22.39 21l-3.09-3.11c1.13-1.77.87-4.09-.62-5.57m-1.41 4.95c-.98.98-2.56.97-3.54 0c-.97-.98-.97-2.56.01-3.54c.97-.97 2.55-.97 3.53 0c.97.98.97 2.56 0 3.54M10.9 20.1a6.5 6.5 0 0 1-1.48-2.32C6.27 17.25 4 15.76 4 14v3c0 2.21 3.58 4 8 4c-.4-.26-.77-.56-1.1-.9M4 9v3c0 1.68 2.07 3.12 5 3.7v-.2c0-.93.2-1.85.58-2.69C6.34 12.3 4 10.79 4 9m8-6C7.58 3 4 4.79 4 7c0 2 3 3.68 6.85 4h.05c1.2-1.26 2.86-2 4.6-2c.91 0 1.81.19 2.64.56A3.22 3.22 0 0 0 20 7c0-2.21-3.58-4-8-4"></svg:path>`,
})
export class MdiDatabaseSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseSearchOutlineIcon],svg[mdi-database-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18.95c-3.23-.23-5-1.5-5-1.95v-2.23c1.13.55 2.5.92 4 1.1c0-.66.04-1.33.21-1.98c-1.71-.22-3.24-.73-4.21-1.44V9.64c1.43.81 3.5 1.33 5.82 1.36c.03-.03.05-.07.08-.1c2.2-2.19 5.6-2.49 8.1-.87V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c.34 0 .68 0 1-.03c-.38-.25-.76-.53-1.1-.87c-.35-.36-.65-.74-.9-1.15M12 5c3.87 0 6 1.5 6 2s-2.13 2-6 2s-6-1.5-6-2s2.13-2 6-2m8.31 12.9c.44-.69.69-1.52.69-2.4c0-2.5-2-4.5-4.5-4.5S12 13 12 15.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L22 22.39L23.39 21zm-3.81.1a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class MdiDatabaseSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseSettingsIcon],svg[mdi-database-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM12 3c4.42 0 8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4s3.58-4 8-4M4 9c0 2.21 3.58 4 8 4s8-1.79 8-4v3c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5c0 2.21 3.58 4 8 4s8-1.79 8-4v3c0 1.19-1.05 2.27-2.71 3H6.71C5.05 19.27 4 18.19 4 17z"></svg:path>`,
})
export class MdiDatabaseSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseSettingsOutlineIcon],svg[mdi-database-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7v10c0 1.2 1.06 2.27 2.73 3h10.54c1.67-.73 2.73-1.8 2.73-3V7c0-2.21-3.58-4-8-4m6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23zm0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2M7 22h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"></svg:path>`,
})
export class MdiDatabaseSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseSyncIcon],svg[mdi-database-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12v1.5a4 4 0 0 1 4 4c0 .82-.25 1.58-.67 2.21l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 19 15v1.5l-2.25-2.25zm0 11v-1.5a4 4 0 0 1-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 19 20v-1.5l2.25 2.25zM12 3c4.42 0 8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4s3.58-4 8-4M4 9c0 2.21 3.58 4 8 4c1.11 0 2.17-.11 3.14-.32c-.95.86-1.64 1.99-1.96 3.28L12 16c-4.42 0-8-1.79-8-4zm16 0v2h-.5l-.6.03c.7-.6 1.1-1.29 1.1-2.03M4 14c0 2.21 3.58 4 8 4l1-.03c.09 1.06.42 2.03.95 2.91L12 21c-4.42 0-8-1.79-8-4z"></svg:path>`,
})
export class MdiDatabaseSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseSyncOutlineIcon],svg[mdi-database-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c.41 0 .81-.03 1.21-.06c.19-.76.51-1.48.95-2.11c-.69.11-1.42.17-2.16.17c-2.42 0-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v1.55c.5-.12 1-.19 1.55-.19c.15 0 .3 0 .45.03V7c0-2.21-3.58-4-8-4S4 4.79 4 7v10c0 2.21 3.59 4 8 4c.66 0 1.31-.04 1.92-.12c-.35-.59-.61-1.24-.76-1.94c-.37.06-.75.06-1.16.06c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23m0-11c3.87 0 6 1.5 6 2s-2.13 2-6 2s-6-1.5-6-2s2.13-2 6-2m11 12.5c0 .82-.25 1.58-.67 2.21l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 19 15v1.5l-2.25-2.25L19 12v1.5c2.21 0 4 1.79 4 4m-4 1l2.25 2.25L19 23v-1.5c-2.21 0-4-1.79-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 19 20z"></svg:path>`,
})
export class MdiDatabaseSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeathStarIcon],svg[mdi-death-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.05 13h19.9c-.5 5.05-4.76 9-9.95 9c-5.18 0-9.45-3.95-9.95-9m19.9-2H2.05c.5-5.05 4.77-9 9.95-9s9.45 3.95 9.95 9M12 6.75a2.5 2.5 0 0 0-2.5-2.5A2.5 2.5 0 0 0 7 6.75a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5"></svg:path>`,
})
export class MdiDeathStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeathStarVariantIcon],svg[mdi-death-star-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.05 13h19.89c-.06.69-.2 1.36-.4 2H14v2h3v2h-2v2h-2.5v1H12c-5.18 0-9.45-3.95-9.95-9m19.89-2H2.05c.5-5.05 4.77-9 9.95-9c1.62 0 3.15.39 4.5 1.08V5h2v2H20v2h1.54c.2.64.34 1.31.4 2M12 6.75a2.5 2.5 0 0 0-2.5-2.5A2.5 2.5 0 0 0 7 6.75a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5"></svg:path>`,
})
export class MdiDeathStarVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeathlyHallowsIcon],svg[mdi-deathly-hallows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L1 21h22zm.75 9.47c1.81.4 2.95 2.2 2.55 4.03c-.3 1.25-1.3 2.25-2.55 2.53zM11.25 18c-1.81-.4-2.95-2.2-2.55-4c.3-1.28 1.3-2.28 2.55-2.56zm5.63-3.28A4.874 4.874 0 0 0 12.75 10V6.29L20.4 19.5h-7.33c2.22-.5 3.8-2.47 3.81-4.75zm-5.63-8.43V10c-2.65.4-4.48 2.88-4.07 5.54c.32 1.96 1.79 3.58 3.75 4.01H3.6z"></svg:path>`,
})
export class MdiDeathlyHallowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDebianIcon],svg[mdi-debian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.5 10.57l-.2.37c.26-.78.11-1.63.15-2.37l-.07-.02c-.07-1.85-1.67-3.82-3.09-4.48c-1.23-.57-3.12-.67-3.99-.24c.12-.11.6-.15.45-.23c-1.37.13-1.06.47-2.11.74c-.29.28.86-.22.23.16c-.56.13-.82-.12-1.65.74c.07.12.53-.35.15.12c-.79-.09-2.48 1.8-2.84 2.42l.19.04c-.31.77-.72 1.26-.77 1.72c-.08 1.14-.45 3.21.08 3.85l-.06.53l.23.45l-.12.01c.58 1.83.62.04 1.39 1.94c-.11-.04-.23-.08-.39-.32c-.02.19.24.69.54 1.08l-.12.14c.16.31.32.38.43.49c-.63-.35.57 1.13.7 1.32l.1-.17c-.02.24.17.56.53 1.01l.3-.01c.13.24.58.68.85.7l-.18.24c.69.2.33.29 1.18.59l-.17-.3c.43.37.56.7 1.17.98c.85.3.96.18 1.82.43c-.73 0-1.59 0-2.17-.22c-3.96-1.07-7.56-5.72-7.32-10.5c-.06-.97.1-2.18-.06-2.42c.22-.74.48-1.64 1.01-2.71c-.04-.07.09.21.36-.24c.16-.36.29-.75.5-1.1l.1-.03c.11-.61 1.43-1.55 1.85-2.02v.18c.86-.81 2.4-1.35 3.26-1.73c-.23.25.51-.03 1.04-.06l-.49.28c.63-.16.6.07 1.25-.03c-.23.03-.5.1-.46.16c.72.08.84-.22 1.51 0l-.05-.2c.94.34 1.13.28 2.14.82c.36.01.4-.22.93 0c.1.16-.02.19.64.59c.07-.03-.13-.22-.27-.37c1.3.71 2.75 2.22 3.18 3.84c-.41-.74-.04.39-.18.33c.18.49.33 1 .43 1.53c-.12-.43-.39-1.48-.86-2.15c-.03.43-.6-.3-.29.66c.22.34.05-.35.34.25c0 .29.11.58.18.95c-.1-.02-.22-.41-.3-.31c.1.5.27.72.33.76c-.03.08-.12-.08-.12.24c.04.74.21.43.29.46c-.09.37-.41.79-.25 1.42l-.2-.56c-.05.53.11.63-.13 1.28c.18-.6.16-1.1-.01-.85c.09.82-.65 1.45-.58 1.98l-.21-.29c-.57.83-.01.45-.4 1.06c.14-.23-.07-.08.11-.36c-.12.01-.55.53-.94.83c-1.54 1.23-3.39 1.4-5.15.73h-.01c.01-.04 0-.09-.12-.17c-1.51-1.15-2.4-2.13-2.11-4.41c.25-.17.31-1.12.84-1.45c.32-.71 1.28-1.36 2.31-1.38c1.05-.06 1.94.56 2.39 1.14c-.82-.75-2.14-.98-3.28-.43c-1.15.53-1.84 1.8-1.76 3.07c.06-.07.1-.02.12-.18c-.03 2.47 2.66 4.28 4.6 3.37l.03.05c.78-.22.68-.39 1.19-.75c-.04.09-.34.3-.16.3c.25-.06 1.03-.79 1.42-1.13c.17-.38-.1-.23.15-.69l.3-.15c.17-.48.35-.75.35-1.32"></svg:path>`,
})
export class MdiDebianIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDebugStepIntoIcon],svg[mdi-debug-step-into-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m1-20v11l4.5-4.5l1.42 1.42L12 16.84L5.08 9.92L6.5 8.5L11 13V2z"></svg:path>`,
})
export class MdiDebugStepIntoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDebugStepOutIcon],svg[mdi-debug-step-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m1-6h-2V6l-4.5 4.5l-1.42-1.42L12 2.16l6.92 6.92l-1.42 1.42L13 6z"></svg:path>`,
})
export class MdiDebugStepOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDebugStepOverIcon],svg[mdi-debug-step-over-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m11.46-5.14l-1.59 6.89L15 14.16l3.8-2.38A7.97 7.97 0 0 0 12 8c-3.95 0-7.23 2.86-7.88 6.63l-1.97-.35C2.96 9.58 7.06 6 12 6c3.58 0 6.73 1.89 8.5 4.72z"></svg:path>`,
})
export class MdiDebugStepOverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDecagramIcon],svg[mdi-decagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68z"></svg:path>`,
})
export class MdiDecagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDecagramOutlineIcon],svg[mdi-decagram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-2.44 2.78l.34 3.68l-3.61.82l-1.89 3.18L12 21l-3.4 1.47l-1.89-3.18l-3.61-.82l.34-3.69L1 12l2.44-2.79l-.34-3.68l3.61-.81L8.6 1.54L12 3l3.4-1.46l1.89 3.18l3.61.82l-.34 3.68zm-2.67 0L18.5 9.89l.24-2.79L16 6.5l-1.42-2.43L12 5.18L9.42 4.07L8 6.5l-2.74.59l.24 2.79L3.67 12l1.83 2.1l-.24 2.8l2.74.6l1.42 2.43L12 18.81l2.58 1.11L16 17.5l2.74-.61l-.24-2.79z"></svg:path>`,
})
export class MdiDecagramOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDecimalIcon],svg[mdi-decimal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3m1 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0m6-3a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3m1 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0M6 15a1 1 0 1 1-1-1a1 1 0 0 1 1 1"></svg:path>`,
})
export class MdiDecimalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDecimalCommaIcon],svg[mdi-decimal-comma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7a3 3 0 0 1 3 3v3a3 3 0 0 1-6 0v-3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m7-2a3 3 0 0 1 3 3v3a3 3 0 0 1-6 0v-3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1M5 14a1 1 0 0 0-1 1l1 3h1v-3a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiDecimalCommaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDecimalCommaDecreaseIcon],svg[mdi-decimal-comma-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13v3H4l-1-3a1 1 0 0 1 2 0m10 3v-2l-3 3l3 3v-2h6v-2m-9-5a3 3 0 0 1-6 0V8a3 3 0 0 1 6 0m-2 0a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Z"></svg:path>`,
})
export class MdiDecimalCommaDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDecimalCommaIncreaseIcon],svg[mdi-decimal-comma-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0V8a3 3 0 0 0-3-3m1 6a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0m6 6a3 3 0 0 0 3-3V8a3 3 0 0 0-6 0v3a3 3 0 0 0 3 3m-1-6a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0m4 9v-2h-6v-2h6v-2l3 3M5 13v3H4l-1-3a1 1 0 0 1 2 0"></svg:path>`,
})
export class MdiDecimalCommaIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDecimalDecreaseIcon],svg[mdi-decimal-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17l3 3v-2h6v-2h-6v-2zM9 5a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m-5 5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiDecimalDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDecimalIncreaseIcon],svg[mdi-decimal-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 17l-3 3v-2h-6v-2h6v-2zM9 5a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m7-2a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1M4 12a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiDecimalIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteIcon],svg[mdi-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"></svg:path>`,
})
export class MdiDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteAlertIcon],svg[mdi-delete-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v2H3V4h3.5l1-1h5l1 1zM4 19V7h12v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2m15-4h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiDeleteAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteAlertOutlineIcon],svg[mdi-delete-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19V7h12v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2M6 9v10h8V9zm7.5-5H17v2H3V4h3.5l1-1h5zM19 17v-2h2v2zm0-4V7h2v6z"></svg:path>`,
})
export class MdiDeleteAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteCircleIcon],svg[mdi-delete-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m5 5h-2.5l-1-1h-3l-1 1H7v2h10zM9 18h6a1 1 0 0 0 1-1v-7H8v7a1 1 0 0 0 1 1"></svg:path>`,
})
export class MdiDeleteCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteCircleOutlineIcon],svg[mdi-delete-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m4 6v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-7zm-2.5-4l1 1H17v2H7V7h2.5l1-1z"></svg:path>`,
})
export class MdiDeleteCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteClockIcon],svg[mdi-delete-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13h1.5v2.82l2.44 1.41l-.75 1.3L15 16.69zm8 3c0 3.87-3.13 7-7 7c-1.91 0-3.64-.76-4.9-2H8c-1.1 0-2-.9-2-2V7h12v2.29c2.89.86 5 3.54 5 6.71m-7-5c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m3-7v2H5V4h3.5l1-1h5l1 1z"></svg:path>`,
})
export class MdiDeleteClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteClockOutlineIcon],svg[mdi-delete-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13h1.5v2.82l2.44 1.41l-.75 1.3L15 16.69zm8 3c0 3.87-3.13 7-7 7c-1.91 0-3.64-.76-4.9-2H8c-1.1 0-2-.9-2-2V7h12v2.29c2.89.86 5 3.54 5 6.71M9 16c0-3.87 3.13-7 7-7H8v10h1.67c-.43-.91-.67-1.93-.67-3m7-5c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m-.5-7H19v2H5V4h3.5l1-1h5z"></svg:path>`,
})
export class MdiDeleteClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteEmptyIcon],svg[mdi-delete-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37zM6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2"></svg:path>`,
})
export class MdiDeleteEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteEmptyOutlineIcon],svg[mdi-delete-empty-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37zM6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2m2 0h8v-6.8L10.46 9H8z"></svg:path>`,
})
export class MdiDeleteEmptyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteForeverIcon],svg[mdi-delete-forever-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></svg:path>`,
})
export class MdiDeleteForeverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteForeverOutlineIcon],svg[mdi-delete-forever-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.12 10.47L12 12.59l-2.13-2.12l-1.41 1.41L10.59 14l-2.12 2.12l1.41 1.41L12 15.41l2.12 2.12l1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8z"></svg:path>`,
})
export class MdiDeleteForeverOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteOffIcon],svg[mdi-delete-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L5 5.72l.28.28l1 1L18 18.72l2 2L18.73 22l-1.46-1.46c-.34.29-.77.46-1.27.46H8c-1.1 0-2-.9-2-2V9.27zM19 4v2H7.82l-2-2H8.5l1-1h5l1 1zm-1 3v9.18L8.82 7z"></svg:path>`,
})
export class MdiDeleteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteOffOutlineIcon],svg[mdi-delete-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L5 5.72l.28.28l1 1l2 2L16 16.72l2 2l2 2L18.73 22l-1.46-1.46c-.34.29-.77.46-1.27.46H8c-1.1 0-2-.9-2-2V9.27zM8 19h7.73L8 11.27zM18 7v9.18l-2-2V9h-5.18l-2-2zm-2.5-3H19v2H7.82l-2-2H8.5l1-1h5z"></svg:path>`,
})
export class MdiDeleteOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteOutlineIcon],svg[mdi-delete-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"></svg:path>`,
})
export class MdiDeleteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteRestoreIcon],svg[mdi-delete-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14h2l-4-4l-4 4h2v4h4zM6 7h12v12c0 .5-.2 1-.61 1.39c-.39.41-.89.61-1.39.61H8c-.5 0-1-.2-1.39-.61C6.2 20 6 19.5 6 19zm13-3v2H5V4h3.5l1-1h5l1 1z"></svg:path>`,
})
export class MdiDeleteRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteSweepIcon],svg[mdi-delete-sweep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8H3zM14 5h-3l-1-1H6L5 5H2v2h12z"></svg:path>`,
})
export class MdiDeleteSweepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteSweepOutlineIcon],svg[mdi-delete-sweep-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zm-4-2v8H5v-8zm2-2H3v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2zm1-3h-3l-1-1H6L5 5H2v2h12z"></svg:path>`,
})
export class MdiDeleteSweepOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteVariantIcon],svg[mdi-delete-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.03 3L18 20.31c-.17.96-1 1.69-2 1.69H8c-1 0-1.83-.73-2-1.69L2.97 3zM5.36 5L8 20h8l2.64-15zM9 18v-4h4v4zm4-4.82L9.82 10L13 6.82L16.18 10z"></svg:path>`,
})
export class MdiDeleteVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeltaIcon],svg[mdi-delta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.77L18.39 18H5.61zM12 4L2 20h20"></svg:path>`,
})
export class MdiDeltaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeskIcon],svg[mdi-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h18c.55 0 1 .45 1 1s-.45 1-1 1v11h-2v-2h-4v2h-2V8H5v11H3V8c-.55 0-1-.45-1-1s.45-1 1-1m13 4.5v.5h2v-.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5m0 4v.5h2v-.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5"></svg:path>`,
})
export class MdiDeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeskLampIcon],svg[mdi-desk-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.85 2L9.18 4.5l1.14.75L7.14 10H7a2 2 0 0 0-2 2a2 2 0 0 0 1.58 1.95L10.62 20H7v2h10v-2h-4l-4.47-6.72A2 2 0 0 0 9 12c0-.3-.07-.6-.2-.87L12 6.37c-.22 1.68.75 3.52 2.45 4.63l4.44-6.63c-1.69-1.13-3.77-1.33-5.24-.5zm7.48 5l-1.66 2.5c.68.45 1.62.27 2.08-.42S19 7.46 18.33 7"></svg:path>`,
})
export class MdiDeskLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeskLampOffIcon],svg[mdi-desk-lamp-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 10.87l-.2.26c.13.27.2.57.2.87a2 2 0 0 1-.47 1.28L13 20h4v2H7v-2h3.62l-4.04-6.05A2 2 0 0 1 5 12c0-1.1.9-2 2-2h.14l.39-.58L1.11 3l1.28-1.27l19.72 19.73l-1.27 1.27zM18.33 7l-1.66 2.5c.68.45 1.62.27 2.08-.42S19 7.46 18.33 7m-8.76-.63L11 7.82l1-1.45c-.22 1.68.75 3.52 2.45 4.63l4.44-6.63c-1.69-1.13-3.77-1.33-5.24-.5L10.85 2L9.18 4.5l1.14.75z"></svg:path>`,
})
export class MdiDeskLampOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeskLampOnIcon],svg[mdi-desk-lamp-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.85 2L9.18 4.5l1.14.75L7.14 10H7c-1.1 0-2 .9-2 2a2 2 0 0 0 1.58 1.95L10.62 20H7v2h10v-2h-4l-4.47-6.72A2 2 0 0 0 9 12c0-.3-.07-.6-.2-.87L12 6.37c-.22 1.68.75 3.52 2.45 4.63l4.44-6.63c-1.69-1.13-3.77-1.33-5.24-.5zm7.48 5l-1.66 2.5c.68.45 1.62.27 2.08-.42S19 7.46 18.33 7m3.37 5.58l-2.12-2.13l.7-.7l2.12 2.12zM23 7h-3V6h3zm-7 7v-3h1v3z"></svg:path>`,
})
export class MdiDeskLampOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeskphoneIcon],svg[mdi-deskphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m10 2v14h4V5zM5 5v4h8V5zm0 6v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm-6 3v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm0 3v2h2v-2zm-3 0v2h2v-2zm-3 0v2h2v-2z"></svg:path>`,
})
export class MdiDeskphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDesktopClassicIcon],svg[mdi-desktop-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c-1.11 0-2 .89-2 2v8c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 2h12v8H6zM4 15c-1.11 0-2 .89-2 2v3c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2v-3c0-1.11-.89-2-2-2zm4 2h12v3H8zm1 .75v1.5h4v-1.5zm6 0v1.5h4v-1.5z"></svg:path>`,
})
export class MdiDesktopClassicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDesktopMacIcon],svg[mdi-desktop-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 14H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7l-2 3v1h8v-1l-2-3h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class MdiDesktopMacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDesktopMacDashboardIcon],svg[mdi-desktop-mac-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 14V4H3v10h18m0-12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7l2 3v1H8v-1l2-3H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h18M4 5h11v5H4V5m12 0h4v2h-4V5m4 3v5h-4V8h4M4 11h5v2H4v-2m6 0h5v2h-5v-2Z"></svg:path>`,
})
export class MdiDesktopMacDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDesktopTowerIcon],svg[mdi-desktop-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v2h8V4zm8 4H8v2h8zm0 10h-2v2h2z"></svg:path>`,
})
export class MdiDesktopTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDesktopTowerMonitorIcon],svg[mdi-desktop-tower-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18h-5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1m0-10h-5v1h5zm0 2h-5v1h5zM9 15v2h1v1H5v-1h1v-2H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zm3-7H3v5h9z"></svg:path>`,
})
export class MdiDesktopTowerMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDetailsIcon],svg[mdi-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.38 6h11.25L12 16zM3 4l9 16l9-16z"></svg:path>`,
})
export class MdiDetailsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDevToIcon],svg[mdi-dev-to-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.73 11.93c0 1.72-.02 1.83-.23 2.07c-.19.17-.38.23-.76.23l-.51.01l-.03-2.27l-.02-2.27h.52c.35 0 .6.07.77.21c.24.21.26.25.26 2.02M22 7.5v9c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2v-9c0-1.11.89-2 2-2h16c1.11 0 2 .89 2 2M8.93 11.73c-.03-1.84-.05-1.99-.29-2.39c-.4-.68-.85-.84-2.36-.84H5v7h1.21c1.33 0 1.89-.17 2.29-.71c.41-.53.5-.98.43-3.06m4.19-3.23h-1.48c-1.49 0-1.5 0-1.71.28S9.7 9.21 9.7 12v2.96l.27.27c.25.27.31.27 1.71.27h1.44v-1.19l-1.09-.04l-1.1-.03V12.6l.68-.03l.66-.04v-1.19h-1.39V9.7h2.24zm5.88.06c0-.06-.3-.06-.66-.06l-.68.06l-.59 2.35c-.38 1.48-.62 2.27-.67 2.13c-.08-.27-1.14-4.44-1.14-4.49s-.31-.05-.68-.05h-.69l.41 1.55c.2.87.59 2.28.81 3.15c.34 1.35.46 1.65.75 1.94c.2.22.45.36.61.36c.33 0 .76-.34.9-.73C17.5 14.5 19 8.69 19 8.56"></svg:path>`,
})
export class MdiDevToIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeveloperBoardIcon],svg[mdi-developer-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2h2v-2h-2v-2h2v-2h-2V9zm-4 10H4V5h14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"></svg:path>`,
})
export class MdiDeveloperBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDeviantartIcon],svg[mdi-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h6l2-4h4v4l-3.5 7H18v5h-6l-2 4H6v-4l3.5-7H6z"></svg:path>`,
})
export class MdiDeviantartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDevicesIcon],svg[mdi-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1m-1 10h-4v-8h4z"></svg:path>`,
})
export class MdiDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDharmachakraIcon],svg[mdi-dharmachakra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v1c-1.73.2-3.31.9-4.6 1.94l-.76-.76L4.22 5.6l.78.75A9.04 9.04 0 0 0 3 11H2v2h1c.21 1.68.9 3.26 2 4.56l-.78.76l1.42 1.42l.75-.74A9.3 9.3 0 0 0 11 21v1h2v-1a9.27 9.27 0 0 0 4.6-2l.76.74l1.42-1.42l-.78-.75c1.1-1.3 1.79-2.89 2-4.57h1v-2h-1a9 9 0 0 0-2-4.64l.78-.76l-1.42-1.42l-.75.76A9 9 0 0 0 13 3V2zm0 3v3l-1 .5l-2.19-2.15c.91-.68 2-1.18 3.19-1.35m2 0c1.16.18 2.26.64 3.2 1.35L14 8.5L13 8zM6.4 7.76L8.5 10L8 11H5c.16-1.16.7-2.3 1.39-3.25zm11.2 0c.73.95 1.21 2.06 1.4 3.24h-3l-.5-1l2.11-2.24zM12 10c1.12 0 2 .88 2 2s-.88 2-2 2s-2-.88-2-2s.88-2 2-2m-7 3h3l.57 1l-2.18 2.15C5.67 15.24 5.19 14.16 5 13m11 0h3a7 7 0 0 1-1.39 3.16L15.5 14zm-6 2.5l1 .5v3a7.04 7.04 0 0 1-3.2-1.43zm4 0l2.19 2.07c-.91.68-2 1.26-3.19 1.43v-3z"></svg:path>`,
})
export class MdiDharmachakraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiabetesIcon],svg[mdi-diabetes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.73 2.29a1 1 0 0 1 1.41 1.41L13 6.79l.76.95l1.94 5a1.46 1.46 0 0 1-.34 1.55l-3.09 3.09a1.55 1.55 0 0 1-2.12 0l-4.6-4.6a1.37 1.37 0 0 1-.4-1l-.5-6.44h1.07a1 1 0 0 1 .75.3l.14.17l1.05 3.48m0 12.71L2 16.36l2.12-2.12l5.66 5.66M19.5 4.5S17 7.26 17 9a2.5 2.5 0 1 0 5 0c0-1.74-2.5-4.5-2.5-4.5"></svg:path>`,
})
export class MdiDiabetesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDialpadIcon],svg[mdi-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M6 1a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 6a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 6a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m12-8a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m-6 8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m6 0a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0-6a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-6 0a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0-6a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiDialpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiameterIcon],svg[mdi-diameter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m5 13v-2H7v2l-3-3l3-3v2h10V9l3 3z"></svg:path>`,
})
export class MdiDiameterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiameterOutlineIcon],svg[mdi-diameter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m4-5v-2H8v2l-3-3l3-3v2h8V9l3 3z"></svg:path>`,
})
export class MdiDiameterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiameterVariantIcon],svg[mdi-diameter-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.15 21.46l1.32-1.88A10.01 10.01 0 0 1 2 12A10 10 0 0 1 12 2c1.78 0 3.44.46 4.89 1.27l1.32-1.88l1.64 1.15l-1.32 1.88C20.65 6.26 22 8.97 22 12a10 10 0 0 1-10 10c-1.78 0-3.44-.46-4.89-1.27l-1.32 1.88zM12 4a8 8 0 0 0-8 8c0 2.35 1 4.46 2.63 5.93l9.1-13.01A7.9 7.9 0 0 0 12 4m0 16a8 8 0 0 0 8-8c0-2.35-1-4.46-2.63-5.93l-9.1 13.01c1.11.59 2.38.92 3.73.92"></svg:path>`,
})
export class MdiDiameterVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiamondIcon],svg[mdi-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2L2 8l10 14L22 8l-4-6z"></svg:path>`,
})
export class MdiDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiamondOutlineIcon],svg[mdi-diamond-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6L2 8l10 14L22 8zM4.43 8l2.64-4h9.86l2.64 4L12 18.56z"></svg:path>`,
})
export class MdiDiamondOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiamondStoneIcon],svg[mdi-diamond-stone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6z"></svg:path>`,
})
export class MdiDiamondStoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiaperOutlineIcon],svg[mdi-diaper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3c-.55 0-1 .45-1 1v5c0 5.5 4.5 10 10 10s10-4.5 10-10V5c0-.55-.45-1-1-1M4 6h16v2h-5v2h5c0 .34 0 .67-.06 1A6.996 6.996 0 0 0 13 17.94c-.33.06-.66.06-1 .06s-.67 0-1-.06A6.996 6.996 0 0 0 4.06 11C4 10.67 4 10.34 4 10h5V8H4zm11.04 11.4a4.99 4.99 0 0 1 4.37-4.36a8.18 8.18 0 0 1-4.38 4.37M4.6 13.04c2.28.27 4.1 2.08 4.37 4.37a8.12 8.12 0 0 1-4.37-4.38Z"></svg:path>`,
})
export class MdiDiaperOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceIcon],svg[mdi-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 16.5a1 1 0 0 1-.527.881l-7.907 4.443a.996.996 0 0 1-1.132 0l-7.907-4.443A1 1 0 0 1 3 16.5v-9a1 1 0 0 1 .527-.881l7.907-4.443a.995.995 0 0 1 1.132 0l7.907 4.443A1 1 0 0 1 21 7.5v9zM5.5 14.316c-.552-.313-1-.118-1 .434s.448 1.253 1 1.566c.552.313 1 .118 1-.434s-.448-1.253-1-1.566zm0-4c-.552-.313-1-.118-1 .434s.448 1.253 1 1.566c.552.313 1 .118 1-.434s-.448-1.253-1-1.566zm4 6.264c-.552-.313-1-.118-1 .434s.448 1.253 1 1.566c.552.312 1 .118 1-.434c0-.553-.448-1.254-1-1.566zm-2-3.132c-.552-.313-1-.118-1 .434s.448 1.253 1 1.566c.552.312 1 .118 1-.434c0-.553-.448-1.254-1-1.566zm2-.868c-.552-.313-1-.119-1 .434c0 .552.448 1.253 1 1.566c.552.312 1 .118 1-.434c0-.553-.448-1.254-1-1.566zm9 1.736c-.552.313-1 1.014-1 1.566s.448.746 1 .434c.552-.313 1-1.014 1-1.566s-.448-.747-1-.434zm0-4c-.552.313-1 1.014-1 1.566s.448.747 1 .434s1-1.014 1-1.566s-.448-.747-1-.434zm-4 6.264c-.552.312-1 1.014-1 1.566s.448.746 1 .434c.552-.313 1-1.014 1-1.566s-.448-.747-1-.434zm0-4c-.552.312-1 1.014-1 1.566s.448.746 1 .434c.552-.313 1-1.014 1-1.566s-.448-.747-1-.434zm1.992-4.81c.547-.321.602-.806.124-1.082s-1.31-.24-1.856.083c-.547.322-.602.807-.124 1.083c.478.276 1.31.239 1.856-.083zm-7.425.333c.547-.322.603-.807.124-1.083c-.478-.276-1.309-.239-1.856.083c-.547.322-.602.807-.124 1.083c.478.276 1.31.24 1.856-.083zm3.713-.166c.546-.322.602-.807.124-1.083c-.479-.276-1.31-.239-1.857.083c-.546.322-.602.807-.124 1.083c.479.276 1.31.239 1.857-.083z" fill="currentColor"></svg:path>`,
})
export class MdiDiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDice1Icon],svg[mdi-dice-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m7 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiDice1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDice1OutlineIcon],svg[mdi-dice-1-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-7 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5"></svg:path>`,
})
export class MdiDice1OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDice2Icon],svg[mdi-dice-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m10 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiDice2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDice2OutlineIcon],svg[mdi-dice-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2M7.5 6C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9S9 8.33 9 7.5S8.33 6 7.5 6m9 9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5"></svg:path>`,
})
export class MdiDice2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDice3Icon],svg[mdi-dice-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m7 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M7 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m10 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiDice3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDice3OutlineIcon],svg[mdi-dice-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 7.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5M7.5 6C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9S9 8.3 9 7.5S8.3 6 7.5 6m9 9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5"></svg:path>`,
})
export class MdiDice3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDice4Icon],svg[mdi-dice-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m10 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M7 15a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiDice4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDice4OutlineIcon],svg[mdi-dice-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2M7.5 6C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9S9 8.33 9 7.5S8.33 6 7.5 6m9 9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0-9c-.83 0-1.5.67-1.5 1.5S15.67 9 16.5 9S18 8.33 18 7.5S17.33 6 16.5 6m-9 9c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18S9 17.33 9 16.5S8.33 15 7.5 15"></svg:path>`,
})
export class MdiDice4OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDice5Icon],svg[mdi-dice-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m10 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-5 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-5 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiDice5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDice5OutlineIcon],svg[mdi-dice-5-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 6C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9S9 8.3 9 7.5S8.3 6 7.5 6m9 9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5m0-9c-.8 0-1.5.7-1.5 1.5S15.7 9 16.5 9S18 8.3 18 7.5S17.3 6 16.5 6M12 10.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5M7.5 15c-.8 0-1.5.7-1.5 1.5S6.7 18 7.5 18S9 17.3 9 16.5S8.3 15 7.5 15"></svg:path>`,
})
export class MdiDice5OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDice6Icon],svg[mdi-dice-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m10 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0-5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0-5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M7 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiDice6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDice6OutlineIcon],svg[mdi-dice-6-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 6C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9S9 8.3 9 7.5S8.3 6 7.5 6m9 9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5m0-4.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S18 12.8 18 12s-.7-1.5-1.5-1.5m0-4.5c-.8 0-1.5.7-1.5 1.5S15.7 9 16.5 9S18 8.3 18 7.5S17.3 6 16.5 6m-9 4.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S9 12.8 9 12s-.7-1.5-1.5-1.5m0 4.5c-.8 0-1.5.7-1.5 1.5S6.7 18 7.5 18S9 17.3 9 16.5S8.3 15 7.5 15"></svg:path>`,
})
export class MdiDice6OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD10Icon],svg[mdi-dice-d10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2m2.07 6.21c1.43 0 2.57 1.15 2.57 2.57v2.64c0 1.42-1.14 2.58-2.57 2.58s-2.57-1.16-2.57-2.58v-2.64a2.57 2.57 0 0 1 2.57-2.57m-3.71.2h.14V16H9v-5.79l-1.78.55V9.53zm3.7 1.24c-.59 0-1.06.48-1.06 1.06v2.79c0 .57.47 1.04 1.06 1.04c.58 0 1.08-.48 1.08-1.04v-2.79c0-.59-.5-1.06-1.08-1.06"></svg:path>`,
})
export class MdiDiceD10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD10OutlineIcon],svg[mdi-dice-d10-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 16H9v-5.79l-1.78.55V9.53l3.14-1.12h.14zm3.57-7.79c1.43 0 2.57 1.15 2.57 2.57v2.64c0 1.42-1.14 2.58-2.57 2.58s-2.57-1.16-2.57-2.58v-2.64a2.57 2.57 0 0 1 2.57-2.57m-.01 1.44c-.59 0-1.06.48-1.06 1.06v2.79c0 .57.47 1.04 1.06 1.04c.58 0 1.08-.48 1.08-1.04v-2.79c0-.59-.5-1.06-1.08-1.06M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2m0 2l8 8l-8 8l-8-8Z"></svg:path>`,
})
export class MdiDiceD10OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD12Icon],svg[mdi-dice-d12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L1.5 9.64L5.5 22h13l4-12.36zm-1.5 15H8.89v-6.11L7 11.47v-1.28L10.31 9h.19zm6.5 0h-5.34v-1.09s3.57-3.46 3.57-4.51c0-1.28-1.05-1.15-1.05-1.15c-.68.05-1.18.62-1.18 1.3h-1.56c.06-1.46 1.28-2.61 2.83-2.55c2.47 0 2.5 1.85 2.5 2.3c0 1.77-3.19 4.47-3.19 4.47l3.42-.02z"></svg:path>`,
})
export class MdiDiceD12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD12OutlineIcon],svg[mdi-dice-d12-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L1.5 9.64L5.5 22h13l4-12.36zm5 18H7l-3.15-9.6L12 4.47l8.15 5.93zm0-4.25V17h-5.34v-1.09s3.57-3.46 3.57-4.51c0-1.28-1.05-1.15-1.05-1.15c-.68.05-1.18.62-1.18 1.3h-1.56c.06-1.46 1.28-2.61 2.83-2.55c2.47 0 2.5 1.85 2.5 2.3c0 1.77-3.19 4.47-3.19 4.47zM10.5 17H8.89v-6.11L7 11.47v-1.28L10.31 9h.19z"></svg:path>`,
})
export class MdiDiceD12OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD20Icon],svg[mdi-dice-d20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.47 6.62l-7.9-4.44C12.41 2.06 12.21 2 12 2s-.41.06-.57.18l-7.9 4.44c-.32.17-.53.5-.53.88v9c0 .38.21.71.53.88l7.9 4.44c.16.12.36.18.57.18s.41-.06.57-.18l7.9-4.44c.32-.17.53-.5.53-.88v-9c0-.38-.21-.71-.53-.88m-9.02 9.34l-5.14-.03v-1.02s3.43-3.33 3.44-4.34c0-1.24-1.02-1.11-1.02-1.11s-.98.04-1.09 1.25l-1.5.05s.04-2.5 2.69-2.5c2.37 0 2.4 1.78 2.4 2.24c0 1.68-3.08 4.27-3.08 4.27l3.3-.01zm6.05-2.46c0 1.4-1.15 2.55-2.57 2.55c-1.43 0-2.57-1.15-2.57-2.55v-2.66c0-1.42 1.14-2.57 2.57-2.57s2.57 1.15 2.57 2.57zM16 10.77v2.76c0 .59-.5 1.07-1.08 1.07s-1.06-.48-1.06-1.07v-2.76c0-.59.48-1.06 1.06-1.06s1.08.47 1.08 1.06"></svg:path>`,
})
export class MdiDiceD20Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD20OutlineIcon],svg[mdi-dice-d20-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L5 8.09v7.82l7 3.94l7-3.94V8.09zm2.93 4.12a2.57 2.57 0 0 1 2.57 2.57v2.66c0 1.4-1.15 2.55-2.57 2.55c-1.43 0-2.57-1.15-2.57-2.55v-2.66a2.57 2.57 0 0 1 2.57-2.57m-.01 1.44c-.58 0-1.06.47-1.06 1.06v2.76c0 .59.48 1.07 1.06 1.07S16 14.12 16 13.53v-2.76c0-.59-.5-1.06-1.08-1.06m-3.47 5.05v1.2l-5.14-.03v-1.02s3.43-3.33 3.44-4.34c0-1.24-1.02-1.11-1.02-1.11s-.98.04-1.09 1.25l-1.5.05s.04-2.5 2.69-2.5c2.37 0 2.4 1.78 2.4 2.24c0 1.68-3.08 4.27-3.08 4.27z"></svg:path>`,
})
export class MdiDiceD20OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD4Icon],svg[mdi-dice-d4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.25 15.15l1.67-2.68v2.68zM21.92 21H2.08c-.84 0-1.36-.92-.92-1.64l9.92-16.23c.42-.69 1.42-.69 1.84 0l9.92 16.23c.44.72-.08 1.64-.92 1.64m-7.63-5.85h-.86v-4.73h-1.52l-3.16 4.99l.07.95h3.1V18h1.51v-1.64h.86z"></svg:path>`,
})
export class MdiDiceD4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD4OutlineIcon],svg[mdi-dice-d4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.43 15.15h.86v1.21h-.86V18h-1.51v-1.64h-3.1l-.07-.95l3.16-4.99h1.52zm-3.18 0h1.67v-2.68zM22 21H2c-.36 0-.69-.19-.87-.5a.97.97 0 0 1 .02-1l10-16.5c.35-.62 1.35-.62 1.71 0l10 16.5A.993.993 0 0 1 22 21M3.78 19h16.45L12 5.43z"></svg:path>`,
})
export class MdiDiceD4OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD6Icon],svg[mdi-dice-d6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.05 13.5c0 .77-.44 1.33-1.05 1.33s-1.15-.56-1.15-1.33l-.02-.72s.38-.78 1.12-.68c.61 0 1.1.63 1.1 1.4M21 5v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2m-6.45 8.41c-.05-1.96-1.36-2.54-2.02-2.54c-1.12 0-1.67.66-1.67.66s.03-2.03 2.53-2v-1.2s-4.06-.39-4.09 4.33c-.03 4.2 3.47 3.34 3.47 3.34s1.84-.53 1.78-2.59"></svg:path>`,
})
export class MdiDiceD6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD6OutlineIcon],svg[mdi-dice-d6-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5zm8.39 4.53c-2.5-.03-2.53 2-2.53 2s.55-.66 1.67-.66c.66 0 1.97.58 2.02 2.54c.06 2.06-1.78 2.59-1.78 2.59s-3.5.86-3.47-3.34c.03-4.72 4.09-4.33 4.09-4.33zm-1.44 2.57c-.74-.1-1.12.68-1.12.68l.02.72c0 .77.54 1.33 1.15 1.33s1.05-.56 1.05-1.33s-.49-1.4-1.1-1.4"></svg:path>`,
})
export class MdiDiceD6OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD8Icon],svg[mdi-dice-d8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2m0 6.25c1.31 0 2.38.95 2.38 2.13c0 .69-.38 1.3-.94 1.69c.7.39 1.16 1.06 1.16 1.83c0 1.22-1.16 2.2-2.6 2.2s-2.6-.98-2.6-2.2c0-.77.46-1.44 1.16-1.83c-.56-.39-.93-1-.93-1.69c0-1.18 1.06-2.13 2.37-2.13m0 1.25c-.5 0-.9.45-.9 1s.4 1 .9 1s.9-.45.9-1s-.4-1-.9-1m0 3.15c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1s1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1"></svg:path>`,
})
export class MdiDiceD8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD8OutlineIcon],svg[mdi-dice-d8-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2m0 2l8 8l-8 8l-8-8m8-3.75c1.31 0 2.38.95 2.38 2.13c0 .69-.38 1.3-.94 1.69c.7.39 1.16 1.06 1.16 1.83c0 1.22-1.16 2.2-2.6 2.2s-2.6-.98-2.6-2.2c0-.77.46-1.44 1.16-1.83c-.56-.39-.93-1-.93-1.69c0-1.18 1.06-2.13 2.37-2.13m0 4.4c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1s1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1m0-3.15c-.5 0-.9.45-.9 1s.4 1 .9 1s.9-.45.9-1s-.4-1-.9-1"></svg:path>`,
})
export class MdiDiceD8OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceMultipleIcon],svg[mdi-dice-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.78 3h-8.56C10.55 3 10 3.55 10 4.22V8h6v6h3.78c.67 0 1.22-.55 1.22-1.22V4.22C21 3.55 20.45 3 19.78 3m-7.34 3.67a1.23 1.23 0 1 1 0-2.46a1.23 1.23 0 0 1 1.23 1.23c0 .68-.55 1.23-1.23 1.23m6.12 6.11a1.23 1.23 0 1 1-.02-2.46c.68-.01 1.23.54 1.24 1.24c-.01.67-.55 1.21-1.22 1.22m0-6.11a1.23 1.23 0 1 1-.02-2.46a1.231 1.231 0 0 1 .02 2.46M4.22 10h8.56A1.22 1.22 0 0 1 14 11.22v8.56c0 .67-.55 1.22-1.22 1.22H4.22C3.55 21 3 20.45 3 19.78v-8.56c0-.67.55-1.22 1.22-1.22m4.28 4.28c-.67 0-1.22.55-1.22 1.22s.55 1.22 1.22 1.22s1.22-.55 1.22-1.22a1.22 1.22 0 0 0-1.22-1.22m-3.06-3.06c-.67 0-1.22.55-1.22 1.22a1.22 1.22 0 0 0 1.22 1.22c.67 0 1.22-.55 1.22-1.22s-.55-1.22-1.22-1.22m6.11 6.11c-.67 0-1.22.55-1.22 1.22s.55 1.22 1.22 1.22a1.22 1.22 0 0 0 1.22-1.22c0-.67-.54-1.21-1.21-1.22z"></svg:path>`,
})
export class MdiDiceMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiceMultipleOutlineIcon],svg[mdi-dice-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-2 4v7H5v-7zm.78-2H4.22C3.55 10 3 10.55 3 11.22v8.56c0 .67.55 1.22 1.22 1.22h8.56c.67 0 1.22-.55 1.22-1.22v-8.56c0-.67-.55-1.22-1.22-1.22m7-7h-8.56C10.55 3 10 3.55 10 4.22V8h2V5h7v7h-3v2h3.78c.67 0 1.22-.55 1.22-1.22V4.22C21 3.55 20.45 3 19.78 3M17 8c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M7 15c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiDiceMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDigitalOceanIcon],svg[mdi-digital-ocean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H2C2 6.5 6.5 2 12 2s10 4.5 10 10s-4.5 10-10 10v-4H8v-4h4v4c3.32 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6m2 6v3H5v-3zm-5-2h2v2H3z"></svg:path>`,
})
export class MdiDigitalOceanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDipSwitchIcon],svg[mdi-dip-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m7 0h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m7 0h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1M4 18h2v-5H4zm7-7h2V6h-2zm7 7h2v-5h-2z"></svg:path>`,
})
export class MdiDipSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDirectionsIcon],svg[mdi-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.5V12h-4v3H8v-4a1 1 0 0 1 1-1h5V7.5l3.5 3.5m4.21.29l-9-9h-.01a.996.996 0 0 0-1.41 0l-9 9c-.39.39-.39 1.03 0 1.42l9 9c.39.38 1.02.39 1.42 0l9-9c.39-.39.39-1.03 0-1.42"></svg:path>`,
})
export class MdiDirectionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDirectionsForkIcon],svg[mdi-directions-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v8.5l3-3L9 13c1 1 1 2 1 2v6h4v-7s0-1-.53-2S12 10 12 10L9 6.58L11.5 4M18 4l-4.46 4.47L14 9s.93 1 1.47 2c.21.4.33.79.4 1.13L21 7"></svg:path>`,
})
export class MdiDirectionsForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiscIcon],svg[mdi-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14a2 2 0 0 1-2-2c0-1.11.89-2 2-2s2 .89 2 2a2 2 0 0 1-2 2m0-10a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiDiscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiscAlertIcon],svg[mdi-disc-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m0-10c-4.4 0-8 3.6-8 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m10 9h2V7h-2m0 10h2v-2h-2z"></svg:path>`,
})
export class MdiDiscAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiscPlayerIcon],svg[mdi-disc-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 10.37a1.87 1.87 0 1 0 0-3.74c-1.04 0-1.87.83-1.87 1.87a1.87 1.87 0 0 0 1.87 1.87m0-9.37A7.5 7.5 0 0 1 22 8.5c0 2.17-.92 4.13-2.4 5.5H9.4A7.5 7.5 0 0 1 7 8.5C7 4.35 10.36 1 14.5 1M6 21v1H4v-1H2v-6h20v6h-2v1h-2v-1zm-2-3v1h9v-1zm11-1v2h2v-2zm4 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiDiscPlayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiscordIcon],svg[mdi-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 24l-5.25-5l.63 2H4.5A2.5 2.5 0 0 1 2 18.5v-15A2.5 2.5 0 0 1 4.5 1h15A2.5 2.5 0 0 1 22 3.5V24M12 6.8c-2.68 0-4.56 1.15-4.56 1.15c1.03-.92 2.83-1.45 2.83-1.45l-.17-.17c-1.69.03-3.22 1.2-3.22 1.2c-1.72 3.59-1.61 6.69-1.61 6.69c1.4 1.81 3.48 1.68 3.48 1.68l.71-.9c-1.25-.27-2.04-1.38-2.04-1.38S9.3 14.9 12 14.9s4.58-1.28 4.58-1.28s-.79 1.11-2.04 1.38l.71.9s2.08.13 3.48-1.68c0 0 .11-3.1-1.61-6.69c0 0-1.53-1.17-3.22-1.2l-.17.17s1.8.53 2.83 1.45c0 0-1.88-1.15-4.56-1.15m-2.07 3.79c.65 0 1.18.57 1.17 1.27c0 .69-.52 1.27-1.17 1.27c-.64 0-1.16-.58-1.16-1.27c0-.7.51-1.27 1.16-1.27m4.17 0c.65 0 1.17.57 1.17 1.27c0 .69-.52 1.27-1.17 1.27c-.64 0-1.16-.58-1.16-1.27c0-.7.51-1.27 1.16-1.27Z"></svg:path>`,
})
export class MdiDiscordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDishwasherIcon],svg[mdi-dishwasher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 4a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m11 16H6V8h12zm-3.33-4.67c.02.7-.26 1.38-.76 1.88a2.7 2.7 0 0 1-3.82 0c-.5-.5-.78-1.18-.76-1.88c.07-.71.3-1.39.67-2c.37-.83.81-1.6 1.33-2.33l.67-1c1.79 2.59 2.67 4.36 2.67 5.33"></svg:path>`,
})
export class MdiDishwasherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDishwasherAlertIcon],svg[mdi-dishwasher-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H4c-1.1 0-2 .9-2 2v16a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M8 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M5 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m11 16H4V8h12zm-3.33-4.67c.02.7-.26 1.38-.76 1.88a2.7 2.7 0 0 1-3.82 0c-.5-.5-.78-1.18-.76-1.88c.07-.71.3-1.39.67-2c.37-.83.81-1.6 1.33-2.33l.67-1c1.79 2.59 2.67 4.36 2.67 5.33M20 15h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiDishwasherAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDishwasherOffIcon],svg[mdi-dishwasher-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L4 5.89V20c0 1.11.89 2 2 2h12c.58 0 1.1-.25 1.46-.65l1.38 1.38zM18 20H6V8h.11l4.39 4.37c-.19.32-.35.63-.5.96c-.37.61-.6 1.29-.67 2c-.02.7.26 1.38.76 1.88a2.7 2.7 0 0 0 3.82 0c.25-.24.44-.53.59-.85l3.5 3.53zM11.2 8H18v6.8l2 2V4a2 2 0 0 0-2-2H6c-.24 0-.46.05-.67.13zM10 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class MdiDishwasherOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiskIcon],svg[mdi-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11.998 13.999A2 2 0 0 1 10 11.997c0-1.103.894-1.997 1.998-1.997c1.107 0 2 .894 2 1.998a2.001 2.001 0 0 1-2 2zm0-10a7.999 7.999 0 0 0-8 7.998c0 4.42 3.584 8.003 8 8.003A8.004 8.004 0 0 0 20 11.998a8 8 0 0 0-8.002-8z" fill="currentColor"></svg:path>`,
})
export class MdiDiskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiskAlertIcon],svg[mdi-disk-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 13.998a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm0-10a8 8 0 1 0 0 16a8 8 0 0 0 0-16zm10 8h2v-5h-2m0 9h2v-2h-2v2z" fill="currentColor"></svg:path>`,
})
export class MdiDiskAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiDiskPlayerIcon],svg[mdi-disk-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14.499 10.374a1.876 1.876 0 0 0 1.876-1.876A1.873 1.873 0 0 0 14.5 6.626a1.872 1.872 0 0 0-1.873 1.872c0 1.034.838 1.876 1.873 1.876zm0-9.374a7.5 7.5 0 0 1 5.1 13H9.401A7.499 7.499 0 0 1 14.5 1zM6 21v1H4v-1H2v-6h20v6h-2v1h-2v-1H6zm-2-3v1h9v-1H4zm11-1v2h2v-2h-2zm4 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2z" fill="currentColor"></svg:path>`,
})
export class MdiDiskPlayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

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
