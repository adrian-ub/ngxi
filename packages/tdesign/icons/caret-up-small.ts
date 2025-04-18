import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCaretUpSmallIcon],svg[tdesign-caret-up-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 9l5.5 5.5h-11z"></svg:path>`,
})
export class TdesignCaretUpSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
