import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLockSync02Icon],svg[hugeicons-lock-sync-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 11h2c-.503-5.053-4.777-9-9.975-9C6.488 2 2 6.477 2 12s4.488 10 10.025 10c4.11 0 7.643-2.468 9.19-6"></svg:path><svg:path d="M14.25 10.982V9.191C14.25 7.98 13.243 7 12 7s-2.25.98-2.25 2.19v1.792M12 17c-1.933 0-3.5-1.526-3.5-3.407s1.567-3.408 3.5-3.408s3.5 1.526 3.5 3.408S13.933 17 12 17"></svg:path></svg:g>`,
})
export class HugeiconsLockSync02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
