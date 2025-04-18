import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoadmapSolidIcon],svg[streamline-arrow-roadmap-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.233 3a2 2 0 0 1-3.465 0H1a1 1 0 0 1 0-2h1.768a2 2 0 0 1 3.465 0h4.517a3.25 3.25 0 0 1 0 6.5h-.517a2 2 0 0 1-3.466 0H3.5a1.5 1.5 0 1 0 0 3h.268a2 2 0 0 1 3.464 0H11v-1a.5.5 0 0 1 .854-.354l2 2a.5.5 0 0 1 0 .707l-2 2A.5.5 0 0 1 11 13.5v-1H7.233a2 2 0 0 1-3.466 0H3.5a3.5 3.5 0 1 1 0-7h3.268a2 2 0 0 1 3.464 0h.518a1.25 1.25 0 1 0 0-2.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowRoadmapSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
