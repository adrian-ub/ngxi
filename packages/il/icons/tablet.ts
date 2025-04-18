import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilTabletIcon],svg[il-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M510 8q19 0 33 13t13 34v648q0 20-13 33t-33 14H46q-19 0-32-14T0 703V55q0-20 14-34T46 8zM278 703q20 0 33-14t13-33t-13-32t-33-13t-33 13t-13 32.5t13 32.5t33 14M486 89q0-11-11-11H81q-5 0-8 3t-4 8v464q0 5 4 8t8 3h394q11 0 11-11z"></svg:path>`,
})
export class IlTabletIcon {
  readonly viewBox = input("0 0 560 850")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
