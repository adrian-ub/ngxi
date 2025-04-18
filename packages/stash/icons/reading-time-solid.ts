import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashReadingTimeSolidIcon],svg[stash-reading-time-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.75 4.25a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75H8A.75.75 0 0 1 8 10H2.5a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75H8A.75.75 0 0 1 8 15H2.5a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75H8A.75.75 0 0 1 8 20H2.5a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.75 14.25a6.25 6.25 0 1 1 12.5 0a6.25 6.25 0 0 1-12.5 0M16 11a3.249 3.249 0 1 0 2.298 5.548L16 14.25z" clip-rule="evenodd"></svg:path>`,
})
export class StashReadingTimeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
