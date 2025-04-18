import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiDiamondIcon],svg[gravity-ui-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiDiamond0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M14.01 6.94L9.06 1.99a1.5 1.5 0 0 0-2.12 0L1.99 6.94a1.5 1.5 0 0 0 0 2.12l4.95 4.95a1.5 1.5 0 0 0 2.12 0l4.95-4.95a1.5 1.5 0 0 0 0-2.12M10.121.928a3 3 0 0 0-4.242 0l-4.95 4.95a3 3 0 0 0 0 4.242l4.95 4.95a3 3 0 0 0 4.242 0l4.95-4.95a3 3 0 0 0 0-4.242z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiDiamond0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiDiamondIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
