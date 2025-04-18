import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleLockCheck02Icon],svg[hugeicons-circle-lock-check-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.964 21.982q-.247.018-.498.018C6.619 22 3.5 18.866 3.5 15s3.119-7 6.966-7C12.833 8 15 9 16 11"></svg:path><svg:path d="M15 9.5v-3a4.5 4.5 0 1 0-9 0v3"></svg:path><svg:circle cx="16.5" cy="18" r="4"></svg:circle><svg:path d="M15.168 18.444c.3.144.672.516.852.816c.06.42.36-1.2 1.824-2.16"></svg:path></svg:g>`,
})
export class HugeiconsCircleLockCheck02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
