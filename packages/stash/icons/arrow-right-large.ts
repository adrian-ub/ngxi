import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowRightLargeIcon],svg[stash-arrow-right-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.816 4.457a.75.75 0 0 1 1.06.026l6.667 7a.75.75 0 0 1 0 1.034l-6.667 7a.75.75 0 1 1-1.086-1.034l5.46-5.733H2a.75.75 0 0 1 0-1.5h18.25l-5.46-5.733a.75.75 0 0 1 .026-1.06"></svg:path>`,
})
export class StashArrowRightLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
