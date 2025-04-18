import { Component, input } from '@angular/core'

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
