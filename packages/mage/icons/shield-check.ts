import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageShieldCheckIcon],svg[mage-shield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.67 10.909l1.875 1.874a.71.71 0 0 0 1.008 0l3.777-3.777"></svg:path><svg:path d="M20.672 11.89V6.61a1.93 1.93 0 0 0-1.32-1.831L14.438 3.14a7.8 7.8 0 0 0-4.876 0L4.648 4.778a1.93 1.93 0 0 0-1.32 1.83v5.28a7.71 7.71 0 0 0 3.603 6.524l4.048 2.544a1.93 1.93 0 0 0 2.042 0l4.047-2.544a7.71 7.71 0 0 0 3.604-6.523"></svg:path></svg:g>`,
})
export class MageShieldCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
