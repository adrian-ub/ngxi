import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillSnoozeWeekendIcon],svg[quill-snooze-weekend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 14v-4a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v4m-21 0A2.5 2.5 0 0 0 3 16.5V25h5M5.5 14A2.5 2.5 0 0 1 8 16.5V20h16v-3.5a2.5 2.5 0 0 1 2.5-2.5m0 0a2.5 2.5 0 0 1 2.5 2.5V25h-5m0 0H8m16 0v2M8 25v2"></svg:path>`,
})
export class QuillSnoozeWeekendIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
