import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWifikeyshareIcon],svg[arcticons-wifikeyshare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.8 5.5a30 30 0 0 1 29.41 24.19M12.8 13.16a22.32 22.32 0 0 1 21.54 16.53M12.8 20.81a14.67 14.67 0 0 1 13.48 8.88"></svg:path><svg:circle cx="13.34" cy="35.48" r="6.43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.09 41.91v-6.43h0h-15.32m11.1 3.71v-3.71"></svg:path>`,
})
export class ArcticonsWifikeyshareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
