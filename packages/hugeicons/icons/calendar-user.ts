import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCalendarUserIcon],svg[hugeicons-calendar-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 2v4M8 2v4m13 7v-1c0-3.771 0-5.657-1.172-6.828S16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12v2c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22M3 10h18"></svg:path><svg:path d="M17.5 18.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 0A3.5 3.5 0 0 1 21 22m-3.5-3.5A3.5 3.5 0 0 0 14 22"></svg:path></svg:g>`,
})
export class HugeiconsCalendarUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
