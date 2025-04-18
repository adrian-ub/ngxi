import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArenaOfValorIcon],svg[arcticons-arena-of-valor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 44.5C21.806 37.75 13.833 24.278 9.778 24C13.833 23.722 21.806 10.25 24 3.5c2.194 6.75 10.167 20.222 14.222 20.5c-4.055.278-12.028 13.75-14.222 20.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.79 24L24 17.247L21.21 24L24 30.753zm2.446 0H26.79M24 17.247l-3.165-6.6M18.764 24h2.446M24 30.753l3.165 6.6"></svg:path>`,
})
export class ArcticonsArenaOfValorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
