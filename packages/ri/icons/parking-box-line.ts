import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riParkingBoxLineIcon],svg[ri-parking-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm4 2h3.5a3.5 3.5 0 1 1 0 7H11v3H9zm2 2v3h1.5a1.5 1.5 0 0 0 0-3z"></svg:path>`,
})
export class RiParkingBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
