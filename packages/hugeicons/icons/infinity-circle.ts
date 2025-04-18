import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInfinityCircleIcon],svg[hugeicons-infinity-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 12s-1.643 2.5-3.3 2.5S6 13.38 6 12s1.043-2.5 2.7-2.5S12 12 12 12m0 0s1.643 2.5 3.3 2.5S18 13.38 18 12s-1.043-2.5-2.7-2.5S12 12 12 12"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class HugeiconsInfinityCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
