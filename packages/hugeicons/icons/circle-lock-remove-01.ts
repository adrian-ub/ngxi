import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleLockRemove01Icon],svg[hugeicons-circle-lock-remove-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.5 22c-3.948 0-7-3.134-7-7s3.2-7 7.148-7c2.765 0 5.163 1.537 6.352 3.787"></svg:path><svg:path d="M15 9V6.5a4.5 4.5 0 1 0-9 0v3M13.5 22l3.5-3.5m0 0l3.5-3.5M17 18.5L13.5 15m3.5 3.5l3.5 3.5"></svg:path></svg:g>`,
})
export class HugeiconsCircleLockRemove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
