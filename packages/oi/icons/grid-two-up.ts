import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiGridTwoUpIcon],svg[oi-grid-two-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v3h3V0zm5 0v3h3V0zM0 5v3h3V5zm5 0v3h3V5z"></svg:path>`,
})
export class OiGridTwoUpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
