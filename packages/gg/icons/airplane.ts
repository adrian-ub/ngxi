import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAirplaneIcon],svg[gg-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.01 5.128h2c1.104 0 2.458.769 3.024 1.718L16.509 11h4.5a1 1 0 1 1 0 2h-4.595l-2.476 4.154c-.565.95-1.919 1.718-3.024 1.718h-2l3.5-5.872h-6.99L3.99 15.453h-2L4.01 12v-.033l-2-3.42h2L5.444 11h7.065z"></svg:path>`,
})
export class GgAirplaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
