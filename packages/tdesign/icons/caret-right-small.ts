import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCaretRightSmallIcon],svg[tdesign-caret-right-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12L9.5 6.5v11z"></svg:path>`,
})
export class TdesignCaretRightSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
