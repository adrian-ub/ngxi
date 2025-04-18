import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGuestHouseIcon],svg[hugeicons-guest-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 5v14h16V3"></svg:path><svg:path d="M14 19v-5.463c0-2.143-4-1.953-4 0V19m4 3h-4M3 5l7.735-2.74c1.254-.347 1.276-.347 2.53 0L21 5m-8.988 3H12"></svg:path></svg:g>`,
})
export class HugeiconsGuestHouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
