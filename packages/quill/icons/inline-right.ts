import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillInlineRightIcon],svg[quill-inline-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 24l8-8l-8-8"></svg:path>`,
})
export class QuillInlineRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
