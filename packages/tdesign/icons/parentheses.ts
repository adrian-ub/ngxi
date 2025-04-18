import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignParenthesesIcon],svg[tdesign-parentheses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.445 4.539l-.438.899A14.9 14.9 0 0 0 3.5 12c0 2.355.542 4.581 1.507 6.562l.438.899l-1.798.876l-.438-.899A16.9 16.9 0 0 1 1.5 12c0-2.665.614-5.19 1.71-7.438l.437-.899zm14.907-.876l.439.899A16.9 16.9 0 0 1 22.5 12c0 2.665-.614 5.19-1.71 7.438l-.437.899l-1.798-.876l.438-.9A14.9 14.9 0 0 0 20.5 12c0-2.355-.542-4.581-1.507-6.562l-.438-.899z"></svg:path>`,
})
export class TdesignParenthesesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
