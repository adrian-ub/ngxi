import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleDownIcon],svg[octicon-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 5l6 6l6-6H0z" fill="currentColor"></svg:path>`,
})
export class OcticonTriangleDownIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
