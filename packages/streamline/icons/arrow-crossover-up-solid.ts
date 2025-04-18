import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverUpSolidIcon],svg[streamline-arrow-crossover-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 0h-4a.5.5 0 0 0-.354.854l1.293 1.292l-1.646 1.647a1 1 0 0 0 1.414 1.414l1.647-1.646l1.292 1.293A.5.5 0 0 0 14 4.5v-4a.5.5 0 0 0-.5-.5M0 1V.5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 .354.854L3.56 2.146l10.146 10.147a1 1 0 0 1-1.414 1.414L2.146 3.561L.854 4.854A.5.5 0 0 1 0 4.5zm5.207 9.207a1 1 0 0 0-1.414-1.414l-3.5 3.5a1 1 0 1 0 1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCrossoverUpSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
