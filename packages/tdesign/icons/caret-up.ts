import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCaretUpIcon],svg[tdesign-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6.086l9.414 9.414H2.586zM7.414 13.5h9.172L12 8.914z"></svg:path>`,
})
export class TdesignCaretUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
