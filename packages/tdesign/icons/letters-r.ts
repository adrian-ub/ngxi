import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersRIcon],svg[tdesign-letters-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h8.5A1.5 1.5 0 0 1 17 5.5v6a1.5 1.5 0 0 1-1.5 1.5h-2.77l4.239 3.587a1.5 1.5 0 0 1 .531 1.145V20h-2v-2.036L9.634 13H9v7H7zm2 7h6V6H9z"></svg:path>`,
})
export class TdesignLettersRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
