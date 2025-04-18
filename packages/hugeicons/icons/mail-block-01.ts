import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailBlock01Icon],svg[hugeicons-mail-block-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.993 11.5c.012-.826.009-.649-.009-1.476c-.065-3.065-.098-4.598-1.229-5.733c-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254c-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952c.066 3.065.099 4.598 1.23 5.733c1.131 1.136 2.705 1.175 5.854 1.254Q10.553 20 12 20"></svg:path><svg:path d="m2 5.5l6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 5.5M16.05 15A3.5 3.5 0 1 0 21 19.95M16.05 15A3.5 3.5 0 0 1 21 19.95M16.05 15L21 19.95"></svg:path></svg:g>`,
})
export class HugeiconsMailBlock01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
