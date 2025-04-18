import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPills2LinearIcon],svg[solar-pills-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464M22 17a5 5 0 1 0-10 0m10 0a5 5 0 0 1-10 0m10 0H12"></svg:path>`,
})
export class SolarPills2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
