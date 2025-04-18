import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillInlineLeftIcon],svg[quill-inline-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 8l-8 8l8 8"></svg:path>`,
})
export class QuillInlineLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
