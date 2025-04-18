import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillInlineDownIcon],svg[quill-inline-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 13l8 8l8-8"></svg:path>`,
})
export class QuillInlineDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
