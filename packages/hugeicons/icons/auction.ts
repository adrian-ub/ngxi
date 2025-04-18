import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAuctionIcon],svg[hugeicons-auction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 14.006l-6.156 7.227a2.182 2.182 0 1 1-3.077-3.077L9.994 12M22 11.905L15.905 18m-3.81-16L6 8.095m5.333-5.333L6.762 7.333s2.286 3.048 4.571 5.334c2.286 2.285 5.334 4.571 5.334 4.571l4.571-4.571s-2.286-3.048-4.571-5.334c-2.286-2.285-5.334-4.571-5.334-4.571" color="currentColor"></svg:path>`,
})
export class HugeiconsAuctionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
