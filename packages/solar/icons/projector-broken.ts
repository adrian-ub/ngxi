import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarProjectorBrokenIcon],svg[solar-projector-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 6.017c1.553.047 2.48.22 3.121.862c.49.49.707 1.146.803 2.121M10 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121C3.757 18 5.172 18 8 18h2m4 0h2c2.828 0 4.243 0 5.121-.879c.769-.768.865-1.946.877-4.121"></svg:path><svg:path fill="currentColor" d="M18.33 20.335a.75.75 0 1 0 1.34-.67zm-1-2l1 2l1.34-.67l-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2l-1 2l-1.34-.67l1-2z"></svg:path><svg:circle cx="14" cy="9" r="5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 9a2 2 0 1 0 2-2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 9.5V11"></svg:path></svg:g>`,
})
export class SolarProjectorBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
