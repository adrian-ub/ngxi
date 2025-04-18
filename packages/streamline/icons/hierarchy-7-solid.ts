import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy7SolidIcon],svg[streamline-hierarchy-7-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.691.038A.5.5 0 0 1 9 .5v1.25h.75A2.75 2.75 0 0 1 12.5 4.5v5A1.5 1.5 0 0 1 14 11v1.5a1.5 1.5 0 0 1-1.5 1.5H11a1.5 1.5 0 0 1-1.5-1.5V11A1.5 1.5 0 0 1 11 9.5v-5c0-.69-.56-1.25-1.25-1.25H9V4.5a.5.5 0 0 1-.854.354l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .545-.108M1.5 9.5v-5A1.5 1.5 0 0 1 0 3V1.5A1.5 1.5 0 0 1 1.5 0H3a1.5 1.5 0 0 1 1.5 1.5V3A1.5 1.5 0 0 1 3 4.5v5A1.5 1.5 0 0 1 4.5 11v1.5A1.5 1.5 0 0 1 3 14H1.5A1.5 1.5 0 0 1 0 12.5V11a1.5 1.5 0 0 1 1.5-1.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHierarchy7SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
