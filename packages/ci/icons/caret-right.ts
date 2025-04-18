import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCaretRightIcon],svg[ci-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 12l-5-5v10l5-5Z"></svg:path>`,
})
export class CiCaretRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
