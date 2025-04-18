import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillCollapseIcon],svg[quill-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m23 26l-7-7l-7 7M9 6l7 7l7-7"></svg:path>`,
})
export class QuillCollapseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
