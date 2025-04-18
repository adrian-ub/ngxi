import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailBlock02Icon],svg[hugeicons-mail-block-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.998 11.5c.005-.658 0-.816-.014-1.476c-.065-3.065-.098-4.598-1.229-5.733c-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254c-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952c.066 3.065.099 4.598 1.23 5.733c1.131 1.136 2.705 1.175 5.854 1.254c1.305.033 2.101.044 3.401.033"></svg:path><svg:path d="m7 8l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 8m-.95 7A3.5 3.5 0 1 0 21 19.95M16.05 15A3.5 3.5 0 0 1 21 19.95M16.05 15L21 19.95"></svg:path></svg:g>`,
})
export class HugeiconsMailBlock02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
