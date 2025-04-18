import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHistory3BrokenIcon],svg[solar-history-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-dasharray=".5 3.5" d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4"></svg:path><svg:path d="M22 12c0-1.821-.487-3.53-1.338-5M12 2c1.821 0 3.53.487 5 1.338"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4"></svg:path></svg:g>`,
})
export class SolarHistory3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
