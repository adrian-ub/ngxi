import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiExclamationShapeFillIcon],svg[gravity-ui-exclamation-shape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiExclamationShapeFill0)"><svg:path fill="currentColor" fill-rule="evenodd" d="m10.921 1.575l-.35 7A1.5 1.5 0 0 1 9.073 10H6.927a1.5 1.5 0 0 1-1.498-1.425l-.35-7A1.5 1.5 0 0 1 6.577 0h2.846a1.5 1.5 0 0 1 1.498 1.575M8 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiExclamationShapeFill0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiExclamationShapeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
