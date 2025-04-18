import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomDownOutlineIcon],svg[solar-circle-bottom-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 12A9.25 9.25 0 1 1 12 21.25a.75.75 0 0 0 0 1.5c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25S1.25 6.063 1.25 12a.75.75 0 0 0 1.5 0"></svg:path><svg:path fill="currentColor" d="M8 22.75a.75.75 0 0 0 0-1.5H3.81l6.72-6.72a.75.75 0 1 0-1.06-1.06l-6.72 6.72V16a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75z"></svg:path>`,
})
export class SolarCircleBottomDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
