import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLocationOffline02Icon],svg[hugeicons-location-offline-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 17.646c-1.232 1.317-2.624 2.542-3.882 3.721A2.37 2.37 0 0 1 12 22a2.37 2.37 0 0 1-1.617-.633C6.412 17.626 1.09 13.447 3.685 7.38C4.021 6.598 4.466 5.635 5 5m2-1.514A9.23 9.23 0 0 1 12.001 2c3.543 0 6.912 2.1 8.315 5.38c1.344 3.142.564 5.784-1.055 8.12M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsLocationOffline02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
