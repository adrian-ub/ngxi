import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLoginOutlineIcon],svg[solar-login-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.25a.75.75 0 0 0 0 1.5a7.25 7.25 0 1 1 0 14.5a.75.75 0 0 0 0 1.5a8.75 8.75 0 1 0 0-17.5"></svg:path><svg:path fill="currentColor" d="M10.47 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H4a.75.75 0 0 1 0-1.5h8.19z"></svg:path>`,
})
export class SolarLoginOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
