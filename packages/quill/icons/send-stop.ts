import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillSendStopIcon],svg[quill-send-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 26l6-6m2-17L3 15l12 2.5M29 3L15 17.5M29 3l-4.375 11.375M15 17.5l.625 2.875M29 23a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path>`,
})
export class QuillSendStopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
