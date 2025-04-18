import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBombMinimalisticOutlineIcon],svg[solar-bomb-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.665 2.83a.75.75 0 0 1 1.006.335l.5 1a.75.75 0 1 1-1.342.67l-.5-1a.75.75 0 0 1 .336-1.006"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 14.5a8.25 8.25 0 0 1 13.53-6.34l1.69-1.69a.75.75 0 1 1 1.06 1.06l-1.69 1.69A8.25 8.25 0 1 1 1.25 14.5M9.5 7.75a6.75 6.75 0 1 0 0 13.5a6.75 6.75 0 0 0 0-13.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.835 6.83a.75.75 0 1 0-.67 1.341l1 .5a.75.75 0 1 0 .67-1.342zm.695-2.3a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"></svg:path>`,
})
export class SolarBombMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
