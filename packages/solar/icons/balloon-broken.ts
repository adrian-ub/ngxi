import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBalloonBrokenIcon],svg[solar-balloon-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 16.607c1.15.86 2.518 1.38 4 1.393c4.142.034 7.594-3.92 7.56-8.196C19.527 5.53 16.142 2.034 12 2S4.527 5.404 4.56 9.68A8.9 8.9 0 0 0 5.244 13"></svg:path><svg:path d="M15.5 9a3.035 3.035 0 0 0-3-3M12 20.35c.321 0 .482 0 .593-.022c.654-.128 1.051-.772.858-1.39c-.033-.105-.109-.242-.261-.515M12 20.35c-.321 0-.482 0-.593-.022c-.654-.128-1.051-.772-.858-1.39c.033-.105.109-.242.261-.515M12 20.35v2.15"></svg:path></svg:g>`,
})
export class SolarBalloonBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
