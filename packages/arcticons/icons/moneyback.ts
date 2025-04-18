import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneybackIcon],svg[arcticons-moneyback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M32.655 32.065c-.032.146-10.78.584-10.78-8.172m-5.647 6.663s10.716-1.436 11.906 7.827"></svg:path><svg:path d="M21.875 23.893a6.77 6.77 0 0 1-6.768 6.768h0a6.768 6.768 0 1 1 6.768-6.768m17.689-13.61a5.783 5.783 0 1 1-11.566 0a5.783 5.783 0 0 1 11.566 0m.096 27.434a5.783 5.783 0 0 1-5.782 5.783h0a5.783 5.783 0 1 1 5.783-5.783"></svg:path><svg:path d="M16.348 17.24c.032.146 10.577 1.657 11.723-7.875m5.709 6.701s-11.905-.498-11.905 7.827"></svg:path></svg:g>`,
})
export class ArcticonsMoneybackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
