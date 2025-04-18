import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiAlignRightIcon],svg[oi-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1h8V0zm2 2v1h6V2zM0 4v1h8V4zm2 2v1h6V6z"></svg:path>`,
})
export class OiAlignRightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
