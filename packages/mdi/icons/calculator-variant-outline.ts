import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalculatorVariantOutlineIcon],svg[mdi-calculator-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM6.2 7.7h5v1.5h-5zm6.8 8.1h5v1.5h-5zm0-2.6h5v1.5h-5zM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2zm6.1-7.1l1.4-1.4l1.4 1.4l1.1-1l-1.4-1.4L18 7.1L16.9 6l-1.4 1.4L14.1 6L13 7.1l1.4 1.4L13 9.9z"></svg:path>`,
})
export class MdiCalculatorVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
