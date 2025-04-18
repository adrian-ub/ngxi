import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsParkingpayIcon],svg[arcticons-parkingpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.095 37.612h7.741l1.516-8.895l5.787.03c7.845 0 11.784-5.94 11.74-11.664C33.837 11.186 29.6 5.5 23.305 5.5H12.181z"></svg:path><svg:path d="m14.835 37.612l-.783 4.888h7.694l1.5-8.896l6.828-.006c4.248 0 8.85-3.355 10.302-8.067c1.71-5.55-.631-12.737-8.375-14.995M18.893 36.5l-.567 3.443m-1.45-1.756h3.512"></svg:path></svg:g>`,
})
export class ArcticonsParkingpayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
