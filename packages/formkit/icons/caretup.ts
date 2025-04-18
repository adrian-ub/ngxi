import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitCaretupIcon],svg[formkit-caretup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.18 1.38L3.03 6.21c-.6.7-.1 1.79.82 1.79h8.29c.93 0 1.42-1.09.82-1.79L8.82 1.38c-.43-.5-1.21-.5-1.64 0"></svg:path>`,
})
export class FormkitCaretupIcon {
  readonly viewBox = input("0 0 16 9")
  readonly width = input("1.78em")
  readonly height = input("1em")
}
