import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feTimelineIcon],svg[fe-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.17 17a3.001 3.001 0 0 1 5.66 0H20l1 1l-1 1h-5.17a3.001 3.001 0 0 1-5.66 0H3l1-1l-1-1zM12 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2-7l-2 2l-2-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2zM7 5v5h4l1 1l1-1h4V5z"></svg:path>`,
})
export class FeTimelineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
