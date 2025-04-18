import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailMinus02Icon],svg[hugeicons-mail-minus-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.5 20.499q-1.198-.005-2.401-.036c-3.149-.079-4.723-.118-5.854-1.254c-1.131-1.135-1.164-2.668-1.23-5.733a69 69 0 0 1 0-2.952c.066-3.065.099-4.598 1.23-5.733C4.376 3.655 5.95 3.616 9.099 3.537a115 115 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254c1.131 1.135 1.164 2.668 1.23 5.733q.026 1.239.008 2.476"></svg:path><svg:path d="m7 8.5l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 8.5m-3 9h8"></svg:path></svg:g>`,
})
export class HugeiconsMailMinus02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
