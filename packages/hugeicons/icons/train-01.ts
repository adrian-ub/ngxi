import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrain01Icon],svg[hugeicons-train-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 11v-1c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v1c0 3.771 0 5.657-1.172 6.828S15.771 19 12 19s-5.657 0-6.828-1.172S4 14.771 4 11"></svg:path><svg:path d="M4 12s3.733 1 8 1s8-1 8-1M7 19l-2 3m12-3l2 3M4.5 16h2m11 0h2M5 5h14"></svg:path></svg:g>`,
})
export class HugeiconsTrain01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
