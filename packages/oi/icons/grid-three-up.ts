import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiGridThreeUpIcon],svg[oi-grid-three-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v2h2V0zm3 0v2h2V0zm3 0v2h2V0zM0 3v2h2V3zm3 0v2h2V3zm3 0v2h2V3zM0 6v2h2V6zm3 0v2h2V6zm3 0v2h2V6z"></svg:path>`,
})
export class OiGridThreeUpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
