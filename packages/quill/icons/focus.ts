import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillFocusIcon],svg[quill-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" d="M9.5 16a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path></svg:g>`,
})
export class QuillFocusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
