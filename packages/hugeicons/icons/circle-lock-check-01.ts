import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleLockCheck01Icon],svg[hugeicons-circle-lock-check-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 18s1 0 2 2c0 0 3.177-5 6-6m-5-2c-1.096-2.365-3.447-4-6.171-4C6.057 8 3 11.134 3 15s3.057 7 6.829 7q.496 0 .975-.07"></svg:path><svg:path d="M14.5 9.5v-3a4.5 4.5 0 1 0-9 0v3"></svg:path></svg:g>`,
})
export class HugeiconsCircleLockCheck01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
