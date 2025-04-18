import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDoubanIcon],svg[arcticons-douban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.45 42.86h37m-37-35.8h37"></svg:path><svg:rect width="31.53" height="17.1" x="8.18" y="12.93" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.06"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.37 30.03l-3.98 12.83m-13.4-7.97l2.47 7.97"></svg:path>`,
})
export class ArcticonsDoubanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
