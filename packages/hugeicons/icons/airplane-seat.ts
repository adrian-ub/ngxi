import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAirplaneSeatIcon],svg[hugeicons-airplane-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.482 18h9.49c1.12 0 2.028-.892 2.028-1.993c0-1.507-2.028-1.993-2.028-1.993S14.284 12.596 10 14c0 0-.139-5.127-2.29-10.83c-.425-1.124-1.809-1.508-2.825-.843a1.94 1.94 0 0 0-.846 2.01l2.454 12.06A2.02 2.02 0 0 0 8.482 18m4.018-7.5H18M16 18l-3 4m0 0H8m5 0h5" color="currentColor"></svg:path>`,
})
export class HugeiconsAirplaneSeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
