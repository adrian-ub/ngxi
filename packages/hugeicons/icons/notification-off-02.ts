import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotificationOff02Icon],svg[hugeicons-notification-off-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 18.167c-4.27 1.272-9.607 1.087-13.568-.554c-1.164-.482-2.115-1.45-1.902-2.843c.13-.857.777-1.57 1.256-2.267c.627-.924.689-1.931.69-3.003c0-1.379.373-2.89 1.024-4m2-2.012A7.5 7.5 0 0 1 11.996 2c4.153 0 7.519 3.358 7.519 7.5c0 1.072.062 2.08.689 3.003c.478.697 1.124 1.41 1.254 2.267c.12.79-.016 1.225-.47 1.73M22 22L2 2"></svg:path><svg:path d="M8 19c.458 1.725 2.076 3 4 3c1.925 0 3.541-1.275 4-3"></svg:path></svg:g>`,
})
export class HugeiconsNotificationOff02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
