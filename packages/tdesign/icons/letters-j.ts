import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersJIcon],svg[tdesign-letters-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.667 4H15v14.5a1.5 1.5 0 0 1-1.5 1.5H8v-2h5V6H9.667z"></svg:path>`,
})
export class TdesignLettersJIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
