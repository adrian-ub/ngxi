import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTimelineViewIcon],svg[ri-timeline-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm1 16V5h16v14zM14 7H6v2h8zm4 8v2h-8v-2zm-2-4H8v2h8z"></svg:path>`,
})
export class RiTimelineViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
