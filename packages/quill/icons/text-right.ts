import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillTextRightIcon],svg[quill-text-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h22m-14 6h14M5 19h22m-14 6h14"></svg:path>`,
})
export class QuillTextRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
