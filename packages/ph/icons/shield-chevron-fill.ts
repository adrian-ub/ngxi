import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShieldChevronFillIcon],svg[ph-shield-chevron-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.26 47 25.53a8 8 0 0 0 4.2 0c1-.27 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72q0 26.31-9.14 47.84l-66.27-46.39a8 8 0 0 0-9.18 0l-66.28 46.39C51.06 145.52 48 129.54 48 112V56h160Z"></svg:path>`,
})
export class PhShieldChevronFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
