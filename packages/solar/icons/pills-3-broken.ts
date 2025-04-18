import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPills3BrokenIcon],svg[solar-pills-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 9.472A4.5 4.5 0 0 0 9.682 6.29A4.48 4.48 0 0 0 7 5m4 4.472a4.5 4.5 0 0 1-9 0m9 0H2m0 0A4.5 4.5 0 0 1 3.318 6.29m11.439.831A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Zm2.624 13.784l3.524-3.524a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524A3.738 3.738 0 0 0 14 21.927"></svg:path><svg:path d="M14 14s.281 1.46 1.911 3.09S19 19 19 19"></svg:path></svg:g>`,
})
export class SolarPills3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
