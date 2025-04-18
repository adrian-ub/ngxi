import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCheckboxSquareIcon],svg[ci-checkbox-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2ZM7 7v10h10V7H7Zm8 8H9V9h6v6Z"></svg:path>`,
})
export class CiCheckboxSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
