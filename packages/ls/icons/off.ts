import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsOffIcon],svg[ls-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M459 83c118 50 201 167 201 304c0 181-148 330-330 330C149 717 0 568 0 387C0 250 83 133 202 83v111C140 236 98 306 98 387c0 128 104 232 232 232s232-104 232-232c0-81-41-151-103-193zm-74 302V0H275v385z"></svg:path>`,
})
export class LsOffIcon {
  readonly viewBox = input("0 0 660 717")
  readonly width = input("0.93em")
  readonly height = input("1em")
}
