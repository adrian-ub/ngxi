import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarGoogle3Icon],svg[arcticons-calendar-google-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.731 24a2.257 2.257 0 0 1 2.25 2.25h0a2.257 2.257 0 0 1-2.25 2.25h-.9c-1.575 0-2.137-.225-2.812-.787m0-7.425c.675-.563 1.35-.788 2.812-.788h.9a2.257 2.257 0 0 1 2.25 2.25h0a2.257 2.257 0 0 1-2.25 2.25h-2.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h24l9-9v-24a4 4 0 0 0-4-4m-5 0v37m-19-28v28m28-9h-37m37-19h-28"></svg:path>`,
})
export class ArcticonsCalendarGoogle3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
