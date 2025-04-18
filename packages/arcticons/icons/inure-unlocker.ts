import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInureUnlockerIcon],svg[arcticons-inure-unlocker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.5 32.126l8.277-14.238m-7.933 25.206l10.978-18.885M24 43.5c10.819 0 14.91-7.14 14.91-14.901V24.86c0-5.606-2.426-6.973-8.823-6.973H17.913c-6.397 0-8.822 1.367-8.822 6.973v3.737C9.09 36.362 13.18 43.5 24 43.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.95 17.942V12.55a8.05 8.05 0 0 1 15.585-2.84m.515 8.232v-3.123"></svg:path>`,
})
export class ArcticonsInureUnlockerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
