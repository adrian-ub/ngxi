import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPills3LinearIcon],svg[solar-pills-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 9.5a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 0 1-9 0m9 0H2m12.757-2.379A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Z"></svg:path><svg:path d="M20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286z"></svg:path><svg:path d="M14 14s.281 1.46 1.911 3.09S19 19 19 19"></svg:path></svg:g>`,
})
export class SolarPills3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
