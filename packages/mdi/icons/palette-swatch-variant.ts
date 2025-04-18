import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPaletteSwatchVariantIcon],svg[mdi-palette-swatch-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14H6c-2.2 0-4 1.8-4 4s1.8 4 4 4h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M6 20c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m.3-8L13 5.3c.8-.8 2-.8 2.8 0l2.8 2.8c.8.8.8 2 0 2.8l-.9 1.1zM2 13.5V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1.5z"></svg:path>`,
})
export class MdiPaletteSwatchVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
