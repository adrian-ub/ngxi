import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsThermometerIcon],svg[zondicons-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11.17V7h2v4.17a3 3 0 1 1-2 0m-1-.63a4 4 0 1 0 4 0V4a2 2 0 1 0-4 0v6.53zM6 9.53V4a4 4 0 0 1 8 0v5.53A5.99 5.99 0 0 1 10 20A6 6 0 0 1 6 9.53"></svg:path>`,
})
export class ZondiconsThermometerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
