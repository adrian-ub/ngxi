import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthCare2SolidIcon],svg[streamline-health-care-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.685 2.422a2.315 2.315 0 1 1 4.63 0a2.315 2.315 0 0 1-4.63 0M2.446 6.214a2.536 2.536 0 0 1 3.492 0l.01.01L7 7.276l1.053-1.052l.01-.01a2.536 2.536 0 0 1 3.49 0a2.38 2.38 0 0 1 .003 3.448l-4.208 4.09a.5.5 0 0 1-.697 0l-4.207-4.09a2.38 2.38 0 0 1 .002-3.447Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHealthCare2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
