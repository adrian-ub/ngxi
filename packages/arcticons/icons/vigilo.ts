import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVigiloIcon],svg[arcticons-vigilo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.327 36.693L6.213 19.58a5.85 5.85 0 0 1 8.272-8.272l12.978 12.978l6.052-6.052a5.85 5.85 0 0 1 8.272 8.272L31.599 36.693a5.85 5.85 0 0 1-8.272 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.463 24.285l-3.653 3.653c2.747 2.747 5.786-1.506 8.468 1.176c1.771 1.772 1.947 4.954.328 6.572m-1.99-14.554l8.272 8.272m-14.577-8.272l-8.273 8.273"></svg:path>`,
})
export class ArcticonsVigiloIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
