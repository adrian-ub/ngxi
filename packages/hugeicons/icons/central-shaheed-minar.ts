import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCentralShaheedMinarIcon],svg[hugeicons-central-shaheed-minar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 22V10.201a.2.2 0 0 1 .26-.192l3.1.98c.083.027.14.105.14.193V22M21 22V10.201a.2.2 0 0 0-.26-.192l-3.1.98a.2.2 0 0 0-.14.193V22M9 22V8h6v14M2 22h20M9 8L7.172 3.316C6.798 2.254 6.992 2 8.177 2h7.647c1.185 0 1.378.254 1.004 1.316L15 8" color="currentColor"></svg:path>`,
})
export class HugeiconsCentralShaheedMinarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
