import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneRingRoundDuotoneIcon],svg[lets-icons-done-ring-round-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-width="1.2" d="m8.5 11l2.894 2.894a.15.15 0 0 0 .212 0L19.5 6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M19.358 10.547a7.5 7.5 0 1 1-3.608-5.042"></svg:path></svg:g>`,
})
export class LetsIconsDoneRingRoundDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
