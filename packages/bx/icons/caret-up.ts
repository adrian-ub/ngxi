import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCaretUpIcon],svg[bx-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15h14l-7-8z"></svg:path>`,
})
export class BxCaretUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
