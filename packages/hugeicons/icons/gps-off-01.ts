import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGpsOff01Icon],svg[hugeicons-gps-off-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.017 18.017a8.5 8.5 0 0 1-12.02-12.02M22.5 12h-2m-17 0h-2M12 1.5v2m0 17v2M2 2l20 20M8.336 4.323a8.6 8.6 0 0 1 3.678-.823c4.695 0 8.5 3.75 8.5 8.375a8.24 8.24 0 0 1-.834 3.625" color="currentColor"></svg:path>`,
})
export class HugeiconsGpsOff01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
