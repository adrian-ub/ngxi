import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHtmlFile02Icon],svg[hugeicons-html-file-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 11c0-.818 0-1.57-.152-1.937s-.441-.657-1.02-1.235l-4.736-4.736c-.499-.499-.748-.748-1.058-.896a2 2 0 0 0-.197-.082C10.514 2 10.161 2 9.456 2c-3.245 0-4.868 0-5.967.886a4 4 0 0 0-.603.603C2 4.59 2 6.211 2 9.456V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h8M11 2.5V3c0 2.828 0 4.243.879 5.121C12.757 9 14.172 9 17 9h.5"></svg:path><svg:path d="M5 14v2.5M5 19v-2.5M8 14v2.5M8 19v-2.5m-3 0h3m2-2.5h1.25m1.25 0h-1.25m0 0v5m3.25 0v-5l1.75 2.5L18 14v5m2-5v5h2"></svg:path></svg:g>`,
})
export class HugeiconsHtmlFile02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
