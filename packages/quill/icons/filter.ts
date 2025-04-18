import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillFilterIcon],svg[quill-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h22M7 13h18M9 19h14m-12 6h10"></svg:path>`,
})
export class QuillFilterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
