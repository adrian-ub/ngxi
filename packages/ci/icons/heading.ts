import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHeadingIcon],svg[ci-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 5v7m0 0v7m0-7h10m0-7v7m0 0v7"></svg:path>`,
})
export class CiHeadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
