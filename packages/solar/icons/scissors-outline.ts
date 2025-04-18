import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarScissorsOutlineIcon],svg[solar-scissors-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.346 1.633a.75.75 0 0 1 1.308.735L12.86 12.672l2.708 4.815a3.751 3.751 0 1 1 .136 3.303L12 14.202L8.296 20.79a3.75 3.75 0 1 1 .136-3.303l2.708-4.815L5.346 2.368a.75.75 0 0 1 1.308-.735L12 11.142zM5 21.25a2.25 2.25 0 0 0 1.953-1.131l.02-.036A2.25 2.25 0 1 0 5 21.25m14 0a2.25 2.25 0 0 1-1.953-1.131l-.02-.036A2.25 2.25 0 1 1 19 21.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarScissorsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
