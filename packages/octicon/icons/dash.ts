import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconDashIcon],svg[octicon-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 7v2h8V7H0z" fill="currentColor"></svg:path>`,
})
export class OcticonDashIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
