import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillChevronUpIcon],svg[quill-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26 20L16 10L6 20"></svg:path>`,
})
export class QuillChevronUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
