import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMoonPlusOutlineIcon],svg[flowbite-moon-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 5v3m0 0v3m0-3h-3m3 0h3m-3.356 7.091c-1.638 0-2.58-.248-3.708-.957a6.77 6.77 0 0 1-2.563-2.909a6.5 6.5 0 0 1-.501-3.788A6.6 6.6 0 0 1 11.596 4a7.96 7.96 0 0 0-3.668 1.565a7.57 7.57 0 0 0-2.38 3.115a7.3 7.3 0 0 0-.469 3.845a7.4 7.4 0 0 0 1.569 3.563a7.8 7.8 0 0 0 3.192 2.343c1.256.5 2.627.675 3.975.507a8 8 0 0 0 3.712-1.463A7.6 7.6 0 0 0 20 14.427c-1.006.52-1.932.664-3.356.664"></svg:path>`,
})
export class FlowbiteMoonPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
