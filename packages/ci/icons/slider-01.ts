import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciSlider01Icon],svg[ci-slider-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 15h7M3 15h2m0 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0m15-6h1M3 9h7m6.5 2.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class CiSlider01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
