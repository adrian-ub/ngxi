import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillSendCancelledIcon],svg[quill-send-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 19l4 4m0 0l4 4m-4-4l-4 4m4-4l4-4m1-16L3 15l12 2.5M29 3L15 17.5M29 3l-4.375 11.375M15 17.5l.625 2.875"></svg:path>`,
})
export class QuillSendCancelledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
