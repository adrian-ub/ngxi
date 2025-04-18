import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilCartIcon],svg[il-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M278 557q29 0 49 20t20 50t-20 49t-49 20t-49-20t-21-49t21-50t49-20m324 0q29 0 50 20t20 50t-20 49t-50 20t-49-20t-20-49t20-50t49-20M255 418v24h452q11 0 11 11v46q0 12-11 12H174q-12 0-12-12q0-81-21-159L72 79q-3-8-11-8H5q-5 0-5-5V6q0-5 5-5h129q5 0 5 5v35q0 7 7 7h561q11 0 11 11v186q0 15-9 27t-24 17z"></svg:path>`,
})
export class IlCartIcon {
  readonly viewBox = input("0 0 720 820")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
