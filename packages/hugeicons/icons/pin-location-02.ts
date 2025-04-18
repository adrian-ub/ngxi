import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPinLocation02Icon],svg[hugeicons-pin-location-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="7" r="4"></svg:circle><svg:path d="M12 11v7m5 1c0 1.105-2.239 2-5 2s-5-.895-5-2"></svg:path></svg:g>`,
})
export class HugeiconsPinLocation02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
