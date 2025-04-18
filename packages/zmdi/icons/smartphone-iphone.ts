import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneIphoneIcon],svg[zmdi-smartphone-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 5q22 0 37.5 16T277 59v362q0 22-15.5 38T224 475H53q-22 0-37.5-16T0 421V59q0-22 15.5-38T53 5zm-85.5 448q13.5 0 23-9t9.5-22.5t-9.5-23t-23-9.5t-22.5 9.5t-9 23t9 22.5t22.5 9m96.5-85V69H43v299z"></svg:path>`,
})
export class ZmdiSmartphoneIphoneIcon {
  readonly viewBox = input("0 0 280 480")
  readonly width = input("0.59em")
  readonly height = input("1em")
}
