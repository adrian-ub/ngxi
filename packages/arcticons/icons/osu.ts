import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOsuIcon],svg[arcticons-osu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="6.34" height="8.4" x="9.22" y="19.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.17"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.57 20v5.23a3.16 3.16 0 0 0 3.17 3.17h0a3.16 3.16 0 0 0 3.16-3.17V20m0 5.19v3.17m-15.04-.71a3.56 3.56 0 0 0 2.61.71h.71a2.1 2.1 0 0 0 2.1-2.1h0a2.1 2.1 0 0 0-2.1-2.1h-1.42a2.1 2.1 0 0 1-2.1-2.1h0a2.1 2.1 0 0 1 2.1-2.1h.71a3.56 3.56 0 0 1 2.61.71"></svg:path><svg:circle cx="38.03" cy="28.17" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.03 15.49v9.43"></svg:path>`,
})
export class ArcticonsOsuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
