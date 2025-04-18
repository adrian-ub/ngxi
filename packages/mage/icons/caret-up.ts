import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCaretUpIcon],svg[mage-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.223 8.372L5.129 15.14a.517.517 0 0 0 .383.859h12.976a.519.519 0 0 0 .383-.86l-6.094-6.81a1.036 1.036 0 0 0-1.554.042"></svg:path>`,
})
export class MageCaretUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
