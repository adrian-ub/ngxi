import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsStopwatchIcon],svg[lineicons-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.749 2.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m1.5 10.5a.75.75 0 0 0 1.5 0V8.496a.75.75 0 1 0-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.999 4.502a8.749 8.749 0 1 0 6.694 3.115l1.339-1.339a.75.75 0 0 0-1.061-1.06l-1.339 1.338A8.7 8.7 0 0 0 12 4.502M4.75 13.25a7.249 7.249 0 1 1 14.498 0a7.249 7.249 0 0 1-14.498 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
