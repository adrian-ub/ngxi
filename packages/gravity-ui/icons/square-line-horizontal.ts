import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareLineHorizontalIcon],svg[gravity-ui-square-line-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiSquareLineHorizontal0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M.75 7.25a.75.75 0 0 0 0 1.5h.75v2.75a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V8.75h.75a.75.75 0 0 0 0-1.5h-.75V4.5a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3v2.75zM3 8.75v2.75A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V8.75zm10-1.5H3V4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiSquareLineHorizontal0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiSquareLineHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
