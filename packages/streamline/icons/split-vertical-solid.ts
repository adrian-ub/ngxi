import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSplitVerticalSolidIcon],svg[streamline-split-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 .5v4a.5.5 0 0 0 .854.354L2.146 3.56L6 7.414v5.581a1 1 0 1 0 2 0v-5.58l3.854-3.854l1.292 1.293A.5.5 0 0 0 14 4.5v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.354.854l1.293 1.292L7 5.586l-3.44-3.44L4.855.854A.5.5 0 0 0 4.5 0h-4a.5.5 0 0 0-.5.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSplitVerticalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
