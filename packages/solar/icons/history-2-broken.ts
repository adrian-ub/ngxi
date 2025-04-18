import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHistory2BrokenIcon],svg[solar-history-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0 5.523 4.477 10 10 10c1.821 0 3.53-.487 5-1.338M12 2c5.523 0 10 4.477 10 10c0 1.821-.487 3.53-1.338 5"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4"></svg:path><svg:path stroke-dasharray=".5 3.5" d="M17 20.662A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.821-.487 3.53-1.338 5"></svg:path></svg:g>`,
})
export class SolarHistory2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
