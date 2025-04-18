import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCarousellIcon],svg[arcticons-carousell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M28.88 37.614a13.116 13.116 0 1 1-.104-24.39"></svg:path><svg:path d="M27.112 32.66a7.862 7.862 0 1 1-.065-14.467m.207 14.493l1.621 4.898m-.062-24.307l-1.559 4.903m2.249 1.051l2.983-3.258m-.843 6.175l3.964-1.948m-6.104 11.507l2.983 3.257m-.843-6.174l3.964 1.948m-3.357-5.253h4.415"></svg:path><svg:path d="M37.73 4.732c0-.128-.161-.232-.363-.232h-6.013c-.202 0-.366.104-.366.232V7.49H9.993a4 4 0 0 0-4 4V39.5a4 4 0 0 0 4 4h28.014a4 4 0 0 0 4-4V11.49a4 4 0 0 0-4.006-4h-.27z"></svg:path></svg:g>`,
})
export class ArcticonsCarousellIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
