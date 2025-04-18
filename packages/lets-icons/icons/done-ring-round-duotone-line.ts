import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneRingRoundDuotoneLineIcon],svg[lets-icons-done-ring-round-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="m9 10l3.258 2.444a1 1 0 0 0 1.353-.142L20 5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M21 12a9 9 0 1 1-6.67-8.693"></svg:path></svg:g>`,
})
export class LetsIconsDoneRingRoundDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
