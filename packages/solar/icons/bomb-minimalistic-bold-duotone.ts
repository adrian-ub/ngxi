import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBombMinimalisticBoldDuotoneIcon],svg[solar-bomb-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.671 3.165a.75.75 0 0 0-1.342.67l.5 1a.75.75 0 0 0 1.342-.67zm3.165 3.665a.75.75 0 0 0-.671 1.341l1 .5a.75.75 0 0 0 .67-1.342zm.694-2.3a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06zm-5.223 5.224L17.53 7.53a.75.75 0 1 0-1.06-1.06l-2.223 2.223a7.6 7.6 0 0 1 1.06 1.06"></svg:path>`,
})
export class SolarBombMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
