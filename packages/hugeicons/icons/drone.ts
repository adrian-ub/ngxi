import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDroneIcon],svg[hugeicons-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7C6.477 7 2 7.895 2 9c0 .806 2.382 1.5 5.815 1.817c.618.057 1.042.655 1.108 1.272C9.094 13.694 10.384 15 12 15s2.906-1.306 3.077-2.91c.066-.618.49-1.216 1.108-1.273C19.618 10.5 22 9.806 22 9c0-1.105-4.477-2-10-2m0 5h.009M4 3h2m2 0H6m0 0v4m10-4h2m2 0h-2m0 0v4M5 21v-1.5a5 5 0 0 1 5-5m9 6.5v-1.5a5 5 0 0 0-5-5" color="currentColor"></svg:path>`,
})
export class HugeiconsDroneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
