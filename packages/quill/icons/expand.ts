import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillExpandIcon],svg[quill-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 20l7 7l7-7m0-8l-7-7l-7 7"></svg:path>`,
})
export class QuillExpandIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
