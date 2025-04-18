import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBeltIcon],svg[hugeicons-belt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.975 17.966C12.462 17.522 16 16.331 16 12s-3.538-5.523-7.025-5.965C6.621 5.735 6 7.42 6 9.412v5.176c0 1.992.62 3.676 2.975 3.377M2 7.5h4m-4 9h4m8-9h8m-8 9h8M5 12h5m10 0h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsBeltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
