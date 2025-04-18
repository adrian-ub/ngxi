import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRemoteController2LinearIcon],svg[solar-remote-controller-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path fill="currentColor" d="M11 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:circle cx="14" cy="6" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteController2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
