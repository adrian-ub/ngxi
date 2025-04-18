import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCaretLeftIcon],svg[mage-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.372 12.777l6.769 6.094a.518.518 0 0 0 .859-.383V5.512a.518.518 0 0 0-.86-.383l-6.81 6.094a1.036 1.036 0 0 0 .042 1.554"></svg:path>`,
})
export class MageCaretLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
