import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTimeSleepLightIcon],svg[lets-icons-time-sleep-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path stroke-linecap="round" d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 9h5.638c.133 0 .2.162.106.256l-5.488 5.488a.15.15 0 0 0 .106.256H15"></svg:path></svg:g>`,
})
export class LetsIconsTimeSleepLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
