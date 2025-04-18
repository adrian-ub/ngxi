import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCalendarLock01Icon],svg[hugeicons-calendar-lock-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 2v2M6 2v2m15.5 7.5c-.004-3.866-.073-5.872-1.252-7.146C18.996 3 16.98 3 12.95 3h-1.9C7.02 3 5.004 3 3.752 4.354C2.5 5.707 2.5 7.886 2.5 12.244v.513c0 4.357 0 6.536 1.252 7.89c1.2 1.296 3.053 1.35 6.748 1.353H12M3 8h18"></svg:path><svg:path d="M16.237 16.177v-1.39c0-.206.009-.414.083-.605c.195-.51.715-1.18 1.66-1.18c.944 0 1.484.67 1.68 1.18c.073.191.082.4.082.605v1.39M16.307 22h3.386c.997 0 1.805-.807 1.805-1.802v-2c0-.996-.808-1.803-1.805-1.803h-3.386c-.997 0-1.805.807-1.805 1.802v2.001c0 .995.808 1.802 1.805 1.802"></svg:path></svg:g>`,
})
export class HugeiconsCalendarLock01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
