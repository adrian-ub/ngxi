import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCaretRightIcon],svg[mage-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.628 11.223L8.86 5.129a.517.517 0 0 0-.86.383v12.976a.519.519 0 0 0 .86.383l6.81-6.094a1.037 1.037 0 0 0-.042-1.554"></svg:path>`,
})
export class MageCaretRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
