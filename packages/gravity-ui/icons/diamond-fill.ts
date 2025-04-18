import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiDiamondFillIcon],svg[gravity-ui-diamond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiDiamondFill0)"><svg:path fill="currentColor" d="M5.879.929a3 3 0 0 1 4.242 0l4.95 4.95a3 3 0 0 1 0 4.242l-4.95 4.95a3 3 0 0 1-4.242 0l-4.95-4.95a3 3 0 0 1 0-4.242z"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiDiamondFill0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiDiamondFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
