import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillJumpAltIcon],svg[quill-jump-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m24.95 19l-6 6l-6-6M19 24.5V9a2 2 0 0 0-2-2H9m0-2v4"></svg:path>`,
})
export class QuillJumpAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
