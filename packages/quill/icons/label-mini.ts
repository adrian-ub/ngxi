import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillLabelMiniIcon],svg[quill-label-mini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M24 14.172V10a2 2 0 0 0-2-2h-4.172a2 2 0 0 0-1.414.586l-8 8a2 2 0 0 0 0 2.828l4.172 4.172a2 2 0 0 0 2.828 0l8-8A2 2 0 0 0 24 14.172"></svg:path>`,
})
export class QuillLabelMiniIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
