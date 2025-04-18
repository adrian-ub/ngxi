import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaptopPhoneSyncIcon],svg[hugeicons-laptop-phone-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 15V7c0-1.886 0-2.828.586-3.414S6.114 3 8 3h3m9 12v-.5M18 2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v2c0 1.886 0 2.828-.586 3.414S19.886 12 18 12s-2.828 0-3.414-.586S14 9.886 14 8V6c0-1.886 0-2.828.586-3.414S16.114 2 18 2m0 7h.009M3.498 16.015L4.02 15h15.932l.55 1.015c1.443 2.662 1.803 3.993 1.254 4.989s-2.002.996-4.91.996H7.154c-2.909 0-4.363 0-4.911-.996c-.549-.996-.19-2.327 1.254-4.989" color="currentColor"></svg:path>`,
})
export class HugeiconsLaptopPhoneSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
