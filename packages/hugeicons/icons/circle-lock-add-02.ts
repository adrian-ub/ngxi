import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleLockAdd02Icon],svg[hugeicons-circle-lock-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 9V6.5a4.5 4.5 0 1 0-9 0v3m10.5 7.167V18m0 0v1.333m0-1.333h1.333M16.5 18h-1.333m5.333 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path d="M10.964 21.982q-.247.018-.498.018C6.619 22 3.5 18.866 3.5 15s3.119-7 6.966-7C12.833 8 15 9 16 11"></svg:path></svg:g>`,
})
export class HugeiconsCircleLockAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
