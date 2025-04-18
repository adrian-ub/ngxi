import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalculatorVariantIcon],svg[mdi-calculator-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 4.1L14.1 6l1.4 1.4L16.9 6L18 7.1l-1.4 1.4L18 9.9L16.9 11l-1.4-1.4l-1.4 1.4L13 9.9l1.4-1.4zm-6.8.6h5v1.5h-5zm5.3 8.3h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2zm6.5 1.2h-5v-1.5h5zm0-2.4h-5v-1.5h5z"></svg:path>`,
})
export class MdiCalculatorVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
