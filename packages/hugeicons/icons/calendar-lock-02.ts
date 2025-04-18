import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCalendarLock02Icon],svg[hugeicons-calendar-lock-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 2v2M6 2v2M3 8h18M2.5 12.243c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354C21.5 5.707 21.5 7.886 21.5 12.244v.513c0 4.357 0 6.536-1.252 7.89C18.996 22 16.98 22 12.95 22h-1.9c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756z"></svg:path><svg:path d="M10.484 14.186V13.03c0-.17.007-.344.07-.503c.17-.425.616-.982 1.428-.982c.813 0 1.277.557 1.446.982c.063.16.07.332.07.503v1.157m-2.954 4.846h2.912c.858 0 1.553-.671 1.553-1.499v-1.666c0-.828-.695-1.499-1.553-1.499h-2.912c-.858 0-1.553.671-1.553 1.5v1.665c0 .828.695 1.5 1.553 1.5"></svg:path></svg:g>`,
})
export class HugeiconsCalendarLock02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
