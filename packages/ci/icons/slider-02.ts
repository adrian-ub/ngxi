import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciSlider02Icon],svg[ci-slider-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 18h7M3 18h2m0 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0m15-6h1M3 12h7m3-6h8m-8 0a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0M3 6h1m12.5 8.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class CiSlider02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
