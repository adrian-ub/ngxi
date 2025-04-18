import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillQueueIcon],svg[quill-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M23 5v8m-4-4h8M7 9.731V24.27c0 1.508 1.753 2.293 2.83 1.266l7.632-7.269a1.76 1.76 0 0 0 0-2.532L9.83 8.465C8.753 7.44 7 8.223 7 9.731Z"></svg:path>`,
})
export class QuillQueueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
