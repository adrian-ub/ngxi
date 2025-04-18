import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFiltersBoldIcon],svg[solar-filters-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"></svg:path><svg:path fill="currentColor" d="M5.033 10.783a6 6 0 1 0 8.92 4.46a7.503 7.503 0 0 1-8.92-4.46m10.354 3.911q.112.636.113 1.306c0 2.09-.855 3.982-2.235 5.342a6 6 0 0 0 5.702-10.558a7.53 7.53 0 0 1-3.58 3.91"></svg:path>`,
})
export class SolarFiltersBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
