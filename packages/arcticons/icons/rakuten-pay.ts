import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRakutenPayIcon],svg[arcticons-rakuten-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.31 30.552V4h8.873c5.119 0 9.214 3.983 9.214 8.961s-4.095 8.961-9.214 8.961H12.31m9.206-.007l8.54 8.305m-.141 7.69L9.45 41l-5.272-4.687h25.716"></svg:path><svg:path d="M43.823 37.001a6.999 6.999 0 1 1-13.997 0a6.999 6.999 0 0 1 13.997 0"></svg:path><svg:path d="M34.81 41v-7.998h2.6c1.5 0 2.699 1.2 2.699 2.7s-1.2 2.699-2.7 2.699h-2.6"></svg:path></svg:g>`,
})
export class ArcticonsRakutenPayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
