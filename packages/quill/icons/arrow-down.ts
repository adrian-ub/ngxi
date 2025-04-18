import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillArrowDownIcon],svg[quill-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 26V5M8 19l8 8l8-8"></svg:path>`,
})
export class QuillArrowDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
