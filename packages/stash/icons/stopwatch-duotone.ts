import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashStopwatchDuotoneIcon],svg[stash-stopwatch-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.75 2.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-.75v1.532a8.7 8.7 0 0 1 4.884 2.023l.836-.835a.75.75 0 1 1 1.06 1.06l-.835.836a8.75 8.75 0 1 1-7.445-3.084V3.25h-.75a.75.75 0 0 1-.75-.75M12 6.25a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 7.75a5.75 5.75 0 1 0 4.98 8.625L12 13.5z" opacity=".5"></svg:path>`,
})
export class StashStopwatchDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
