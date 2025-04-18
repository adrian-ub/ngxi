import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPulseLightIcon],svg[ph-pulse-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 128a6 6 0 0 1-6 6h-28.29l-38.34 76.68A6 6 0 0 1 160 214h-.3a6 6 0 0 1-5.31-3.85L95.51 55.57l-34.05 74.91A6 6 0 0 1 56 134H24a6 6 0 0 1 0-12h28.14l38.4-84.48a6 6 0 0 1 11.07.34l59.13 155.24l33.89-67.78A6 6 0 0 1 200 122h32a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhPulseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
