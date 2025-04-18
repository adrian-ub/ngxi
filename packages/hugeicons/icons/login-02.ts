import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLogin02Icon],svg[hugeicons-login-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 3l-.663.234c-2.578.91-3.868 1.365-4.602 2.403S4 8.043 4 10.777v2.445c0 2.735 0 4.102.735 5.14c.734 1.039 2.024 1.494 4.602 2.404L10 21m0-9h10m-10 0c0-.7 1.994-2.008 2.5-2.5M10 12c0 .7 1.994 2.008 2.5 2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsLogin02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
