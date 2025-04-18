import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy4SolidIcon],svg[streamline-hierarchy-4-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 1.5A1.5 1.5 0 0 1 3.25 0h1.5a1.5 1.5 0 0 1 1.5 1.5V3a1.5 1.5 0 0 1-1.5 1.5A2.25 2.25 0 0 0 7 6.75h1a1.5 1.5 0 0 1 1.5-1.5H11a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5H9.5A1.5 1.5 0 0 1 8 8.25H7a3.75 3.75 0 0 1-2.25-.75v2a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5V11a1.5 1.5 0 0 1 1.5-1.5v-5A1.5 1.5 0 0 1 1.75 3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHierarchy4SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
