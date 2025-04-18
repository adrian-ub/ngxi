import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsForumNegativeIcon],svg[healthicons-forum-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsForumNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm4 18.07C4 12.507 8.508 8 14.07 8h7.86C27.493 8 32 12.508 32 18.07c0 5.56-4.508 10.069-10.07 10.069H16V33S4 30.57 4 18.07m26.056 14.04a8.03 8.03 0 0 1-5.579-2.244C29.921 28.692 34 23.85 34 18.056c0-.71-.092-1.4-.265-2.056h2.21A8.056 8.056 0 0 1 44 24.056C44 34.056 33 36 33 36v-3.889z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsForumNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsForumNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
