import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers2Icon],svg[tdesign-numbers-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9v5h8v2H7v-7a2 2 0 0 1 2-2h6V6H7z"></svg:path>`,
})
export class TdesignNumbers2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
