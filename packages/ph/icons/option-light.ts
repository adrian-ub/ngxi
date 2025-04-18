import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOptionLightIcon],svg[ph-option-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 192a6 6 0 0 1-6 6h-63.06a13.92 13.92 0 0 1-12.52-7.74L96.84 87.11A2 2 0 0 0 95.06 86H32a6 6 0 0 1 0-12h63.06a13.92 13.92 0 0 1 12.52 7.74l51.58 103.15a2 2 0 0 0 1.78 1.11H224a6 6 0 0 1 6 6M152 86h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhOptionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
