import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailLock01Icon],svg[hugeicons-mail-lock-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m2 5l6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 5"></svg:path><svg:path d="M11.994 19.495q-1.446 0-2.9-.036c-3.146-.08-4.72-.119-5.85-1.254s-1.163-2.667-1.228-5.732a69 69 0 0 1 0-2.95c.065-3.065.098-4.598 1.228-5.733s2.704-1.174 5.85-1.253a115 115 0 0 1 5.8 0c3.146.079 4.72.118 5.85 1.253s1.163 2.668 1.229 5.733c.01.492.015.484.015.975"></svg:path><svg:path d="M16.74 15.677v-1.39c0-.206.008-.414.082-.605c.195-.51.715-1.18 1.66-1.18c.944 0 1.484.67 1.68 1.18c.073.191.082.4.082.605v1.39M16.809 21.5h3.386c.997 0 1.805-.807 1.805-1.802v-2c0-.996-.808-1.803-1.805-1.803h-3.386c-.997 0-1.805.807-1.805 1.802v2.001c0 .995.808 1.802 1.805 1.802"></svg:path></svg:g>`,
})
export class HugeiconsMailLock01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
