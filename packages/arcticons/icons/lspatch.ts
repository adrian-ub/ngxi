import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLspatchIcon],svg[arcticons-lspatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="20.247" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.753" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.247" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="27.753" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.962 41.927l-7.89-7.89a1.955 1.955 0 0 1 0-2.764l25.2-25.2a1.955 1.955 0 0 1 2.766 0l7.89 7.89a1.955 1.955 0 0 1 0 2.764l-25.2 25.2a1.955 1.955 0 0 1-2.766 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.65 23.995l7.274 7.274a1.955 1.955 0 0 1 0 2.765l-7.892 7.891a1.955 1.955 0 0 1-2.765 0l-7.274-7.274M13.347 24.005L6.074 16.73a1.955 1.955 0 0 1 0-2.765l7.891-7.891a1.955 1.955 0 0 1 2.765 0l7.274 7.273"></svg:path>`,
})
export class ArcticonsLspatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
