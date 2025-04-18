import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHotel02Icon],svg[hugeicons-hotel-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 7v11c0 1.886 0 2.828.586 3.414S5.114 22 7 22h10c1.886 0 2.828 0 3.414-.586S21 19.886 21 18V7m-4 0A5 5 0 0 0 7 7"></svg:path><svg:path d="M14 22v-4a2 2 0 1 0-4 0v4M9 3H4.472c-.31 0-.625.082-.874.329C2.856 4.064 2.428 5.288 2 7h5m8-4h4.528c.31 0 .625.082.874.329c.742.735 1.17 1.959 1.598 3.671h-5M6 11h.5M6 14.5h.5m11-3.5h.5m-.5 3.5h.5M10.5 8v1.5m0 1.5V9.5m3-1.5v1.5m0 1.5V9.5m-3 0h3"></svg:path></svg:g>`,
})
export class HugeiconsHotel02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
