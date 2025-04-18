import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsGroupDiscussionMeetingNegativeIcon],svg[healthicons-group-discussion-meeting-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsGroupDiscussionMeetingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm14.5 32c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2C11.663 34 6 35.43 6 38.267V42h17v-3.733C23 35.429 17.337 34 14.5 34m19-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.837 0-8.5 1.43-8.5 4.267V42h17v-3.733C42 35.429 36.337 34 33.5 34M24 12.042A6.04 6.04 0 0 0 17.958 6h-5.916a6.042 6.042 0 1 0 0 12.083H13.2V21S24 19.542 24 12.042M32.042 7A6.04 6.04 0 0 0 26 13.042c0 7.5 9.6 8.958 9.6 8.958v-2.917h.358a6.042 6.042 0 1 0 0-12.083z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsGroupDiscussionMeetingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsGroupDiscussionMeetingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
