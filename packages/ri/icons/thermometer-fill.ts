import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riThermometerFillIcon],svg[ri-thermometer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.557 3.444a4 4 0 0 1 0 5.657l-8.2 8.2a4 4 0 0 1-2.387 1.147l-3.38.374l-2.297 2.3a1 1 0 1 1-1.414-1.415l2.298-2.299l.375-3.377A4 4 0 0 1 6.7 11.644l8.2-8.2a4 4 0 0 1 5.658 0m-9.193 9.192L9.95 14.05l2.121 2.122l1.414-1.415zm2.829-2.828l-1.415 1.414l2.122 2.121l1.414-1.414zm2.828-2.829l-1.414 1.414l2.121 2.122L19.142 9.1z"></svg:path>`,
})
export class RiThermometerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
