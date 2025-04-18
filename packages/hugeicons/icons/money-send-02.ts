import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneySend02Icon],svg[hugeicons-money-send-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 6.67c-1.066 0-2.08-.12-3-.334c-.96-.225-2 .466-2 1.473v11.009c0 .808 0 1.212.194 1.629c.11.238.363.561.565.724c.354.287.65.356 1.241.494c.92.216 1.934.335 3 .335c1.917 0 3.668-.386 5-1.022s3.083-1.022 5-1.022c1.066 0 2.08.12 3 .335c.96.224 2-.467 2-1.474V7.81c0-.809 0-1.213-.194-1.63a2.4 2.4 0 0 0-.565-.724C20 4.439 18 5.442 18 5.442"></svg:path><svg:path d="M14.5 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 1v.009m13-2.017v.01M9.5 4.5C9.992 3.994 11.3 2 12 2m2.5 2.5C14.008 3.994 12.7 2 12 2m0 0v6"></svg:path></svg:g>`,
})
export class HugeiconsMoneySend02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
