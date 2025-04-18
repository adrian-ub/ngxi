import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScooter04Icon],svg[hugeicons-scooter-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="4" cy="18" r="2"></svg:circle><svg:circle cx="20" cy="18" r="2"></svg:circle><svg:path d="M6.514 18h6.775c.732 0 1.099 0 1.344-.155c.245-.156.452-.596.867-1.476c.235-.498.536-.958.892-1.369m0 0L4 16m12.392-1a6 6 0 0 1 2.521-1.724c.537-.191.806-.287.896-.462c.09-.174.024-.415-.11-.896l-1.53-5.51c-.25-.902-.376-1.353-.646-1.68a2 2 0 0 0-.73-.555C16.405 4 15.937 4 15 4"></svg:path></svg:g>`,
})
export class HugeiconsScooter04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
