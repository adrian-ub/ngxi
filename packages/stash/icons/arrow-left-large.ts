import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowLeftLargeIcon],svg[stash-arrow-left-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.184 4.457c.3.286.311.76.026 1.06L3.75 11.25H22a.75.75 0 0 1 0 1.5H3.75l5.46 5.733a.75.75 0 1 1-1.086 1.034l-6.667-7a.75.75 0 0 1 0-1.034l6.667-7a.75.75 0 0 1 1.06-.026"></svg:path>`,
})
export class StashArrowLeftLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
