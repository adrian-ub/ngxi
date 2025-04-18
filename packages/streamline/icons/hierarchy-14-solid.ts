import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy14SolidIcon],svg[streamline-hierarchy-14-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 1v3.5a1 1 0 0 0 1 1h1v1.25H3A1.75 1.75 0 0 0 1.25 8.5V10H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.25V8.5A.25.25 0 0 1 3 8.25h3.25V10H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.25V8.25H11a.25.25 0 0 1 .25.25V10H11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.25V8.5A1.75 1.75 0 0 0 11 6.75H7.75V5.5h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-1 1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHierarchy14SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
