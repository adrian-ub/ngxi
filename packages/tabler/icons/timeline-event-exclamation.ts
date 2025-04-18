import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTimelineEventExclamationIcon],svg[tabler-timeline-event-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 0H4m10 0h6m-8-5l-2-2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3zm0-9v2m0 3v.01"></svg:path>`,
})
export class TablerTimelineEventExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
