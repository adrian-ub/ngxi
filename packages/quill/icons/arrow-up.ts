import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillArrowUpIcon],svg[quill-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 27V6m8 7l-8-8l-8 8"></svg:path>`,
})
export class QuillArrowUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
