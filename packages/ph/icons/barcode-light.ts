import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBarcodeLightIcon],svg[ph-barcode-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 48v40a6 6 0 0 1-12 0V54h-34a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M72 202H38v-34a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12m152-40a6 6 0 0 0-6 6v34h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6M32 94a6 6 0 0 0 6-6V54h34a6 6 0 0 0 0-12H32a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6m48-12a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6m102 86V88a6 6 0 0 0-12 0v80a6 6 0 0 0 12 0m-38-86a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6m-32 0a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhBarcodeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
