import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCovariateIcon],svg[hugeicons-covariate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3m15 8h.009M14 15h.009M12 6h.009M8 10h.009M4.5 19.5L21 3" color="currentColor"></svg:path>`,
})
export class HugeiconsCovariateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
