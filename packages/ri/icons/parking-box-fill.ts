import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riParkingBoxFillIcon],svg[ri-parking-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14h1.5a3.5 3.5 0 1 0 0-7H9v10h2zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7 6h1.5a1.5 1.5 0 0 1 0 3H11z"></svg:path>`,
})
export class RiParkingBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
