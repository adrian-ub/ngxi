import { Component, input } from '@angular/core'

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
