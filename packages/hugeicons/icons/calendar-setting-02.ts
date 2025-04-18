import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCalendarSetting02Icon],svg[hugeicons-calendar-setting-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 2v2M6 2v2M3 8h18M2.5 12.243c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354C21.5 5.707 21.5 7.886 21.5 12.244v.513c0 4.357 0 6.536-1.252 7.89C18.996 22 16.98 22 12.95 22h-1.9c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756z"></svg:path><svg:path d="M12 17.5v1m0-1a2.5 2.5 0 0 1-2.08-1.113M12 17.5c.868 0 1.632-.442 2.08-1.113M12 12.5c.868 0 1.632.442 2.08 1.113M12 12.5c-.868 0-1.632.442-2.08 1.113M12 12.5v-1m3 1.5l-.92.613M9 17l.92-.613M9 13l.92.613M15 17l-.92-.613m0-2.774c.265.397.42.874.42 1.387s-.155.99-.42 1.387m-4.16-2.774c-.265.397-.42.874-.42 1.387s.155.99.42 1.387"></svg:path></svg:g>`,
})
export class HugeiconsCalendarSetting02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
