import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillSnoozeTomorrowIcon],svg[quill-snooze-tomorrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 21h22M7 26h18M10 16a6 6 0 0 1 12 0M6.5 16h-2M9 9L7.5 7.5M16 6V4m7 5l1.485-1.485M28 16h-2.5"></svg:path>`,
})
export class QuillSnoozeTomorrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
