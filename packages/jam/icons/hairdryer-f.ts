import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamHairdryerFIcon],svg[jam-hairdryer-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10.286V1.714h3.2a6 6 0 0 1 8.686 8.27l1.925 5.286a3 3 0 1 1-5.638 2.052l-1.982-5.444a6 6 0 0 1-2.99-1.592zm-2 0H2a2 2 0 0 1-2-2V3.714a2 2 0 0 1 2-2h2zM12 5a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamHairdryerFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
