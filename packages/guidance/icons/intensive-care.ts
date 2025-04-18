import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceIntensiveCareIcon],svg[guidance-intensive-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 20.5V6m0 14.5s0 3-1.5 3m1.5-3h21m0 0s0 3 1.5 3m-1.5-3V15a3.5 3.5 0 0 0-3.5-3.5h-8.5v4m-9 2h21M10.5 4h1.573a1.5 1.5 0 0 0 1.342-.83L14.75.5H15l3.5 7h.25l1.335-2.67A1.5 1.5 0 0 1 21.427 4H23M8.5 13.4S7.5 15 6.25 15a1.75 1.75 0 0 1-1.75-1.75c0-.966.784-1.746 1.75-1.746c1.25 0 2.25 1.596 2.25 1.596z"></svg:path>`,
})
export class GuidanceIntensiveCareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
