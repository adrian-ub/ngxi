import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLocationFavourite01Icon],svg[hugeicons-location-favourite-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.618 21.367A2.37 2.37 0 0 1 12 22a2.37 2.37 0 0 1-1.617-.633C6.412 17.626 1.09 13.447 3.685 7.38C5.09 4.1 8.458 2 12.001 2s6.912 2.1 8.315 5.38c2.592 6.06-2.717 10.259-6.698 13.987"></svg:path><svg:path d="M9.388 7.831c.939-.548 1.758-.327 2.25.025c.202.144.303.216.362.216c.06 0 .16-.072.362-.216c.492-.352 1.311-.573 2.25-.025c1.232.72 1.51 3.094-1.33 5.097c-.542.381-.813.572-1.282.572s-.74-.19-1.281-.572C7.878 10.925 8.156 8.55 9.389 7.83"></svg:path></svg:g>`,
})
export class HugeiconsLocationFavourite01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
