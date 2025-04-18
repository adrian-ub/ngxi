import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailSecure02Icon],svg[hugeicons-mail-secure-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m7 7.5l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 7.5"></svg:path><svg:path d="M11.5 19.5s-1.43-.012-2.401-.037c-3.149-.079-4.723-.118-5.854-1.254c-1.131-1.135-1.164-2.668-1.23-5.733a69 69 0 0 1 0-2.952c.066-3.065.099-4.598 1.23-5.733C4.376 2.655 5.95 2.616 9.099 2.537a115 115 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254c1.131 1.135 1.164 2.668 1.23 5.733c.01.493.015 1.485.015 1.976"></svg:path><svg:path d="M18 13.5c-1.267 0-2.088.808-3.06 1.102c-.394.12-.592.18-.672.264s-.103.207-.15.454c-.5 2.638.594 5.078 3.204 6.027c.28.102.42.153.679.153c.257 0 .398-.051.678-.153c2.61-.95 3.704-3.389 3.203-6.027c-.047-.247-.07-.37-.15-.454s-.278-.144-.673-.264c-.971-.294-1.793-1.102-3.06-1.102"></svg:path></svg:g>`,
})
export class HugeiconsMailSecure02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
