import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardOutlineIcon],svg[solar-skateboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.624 6.584l.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219l1.248.832l-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219zM7 13.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M4.25 15a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0M17 13.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M14.25 15a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSkateboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
