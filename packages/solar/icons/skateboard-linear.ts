import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardLinearIcon],svg[solar-skateboard-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m2 7l.813 1.219A4 4 0 0 0 6.14 10h11.718a4 4 0 0 0 3.328-1.781L22 7"></svg:path><svg:circle cx="7" cy="15" r="2"></svg:circle><svg:circle cx="17" cy="15" r="2"></svg:circle></svg:g>`,
})
export class SolarSkateboardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
