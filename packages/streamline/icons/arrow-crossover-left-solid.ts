import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverLeftSolidIcon],svg[streamline-arrow-crossover-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.707 1.707L3.561 11.854l1.293 1.292A.5.5 0 0 1 4.5 14h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .854-.354l1.292 1.293L12.293.293a1 1 0 1 1 1.414 1.414M8.793 8.793a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414M0 1v3.5a.5.5 0 0 0 .854.354L2.146 3.56l1.647 1.646a1 1 0 0 0 1.414-1.414L3.561 2.146L4.854.854A.5.5 0 0 0 4.5 0h-4a.5.5 0 0 0-.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCrossoverLeftSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
