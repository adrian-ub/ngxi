import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInfinity01Icon],svg[hugeicons-infinity-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12s-2.739 5-5.5 5S2 14.761 2 12s1.739-5 4.5-5s5.5 5 5.5 5m0 0s2.739 5 5.5 5s4.5-2.239 4.5-5s-1.739-5-4.5-5s-5.5 5-5.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsInfinity01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
