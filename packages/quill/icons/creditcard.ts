import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillCreditcardIcon],svg[quill-creditcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 20h8M3 13h26m-6 7h2M5 7C4 7 3 8 3 9v14c0 1 1 2 2 2h22c1 0 2-1 2-2V9c0-1-1-2-2-2z"></svg:path>`,
})
export class QuillCreditcardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
