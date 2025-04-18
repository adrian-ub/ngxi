import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphArrowDecreaseSolidIcon],svg[streamline-graph-arrow-decrease-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.898 3.222A1 1 0 1 0 .483 4.637l3.333 3.332l.007.007a1.457 1.457 0 0 0 2.039 0l.007-.007L7.57 6.268L9.917 8.75l-1.04 1.04a.75.75 0 0 0 .53 1.28h3.652a.75.75 0 0 0 .75-.75V6.67a.75.75 0 0 0-1.28-.53l-1.197 1.197l-2.704-2.86a1.457 1.457 0 0 0-2.066-.027v-.001l-.007.007l-1.713 1.712z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGraphArrowDecreaseSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
