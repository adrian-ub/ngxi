import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoThermometerIcon],svg[entypo-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10.123V1a1 1 0 0 0-1-1H7.799C7.247 0 7 .447 7 1v9.123A5.38 5.38 0 0 0 4.6 14.6a5.4 5.4 0 0 0 10.8 0a5.38 5.38 0 0 0-2.4-4.477M10 17.9a3.3 3.3 0 0 1-3.3-3.3A3.29 3.29 0 0 1 9 11.471V4h2v7.471a3.29 3.29 0 0 1 2.3 3.129a3.3 3.3 0 0 1-3.3 3.3"></svg:path>`,
})
export class EntypoThermometerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
