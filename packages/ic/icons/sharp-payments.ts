import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPaymentsIcon],svg[ic-sharp-payments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 7v13H4v-2h17V7zm-4 9H1V4h18zm-6-6c0-1.66-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3"></svg:path>`,
})
export class IcSharpPaymentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
