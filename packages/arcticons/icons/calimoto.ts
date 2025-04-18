import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalimotoIcon],svg[arcticons-calimoto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.022 4.035c5.121 1.835 2.628 8.017-1.213 12.347c-6.543 7.377-4 15.505 2.736 17.369c5.26 1.456 14.21-4.83 10.62-14.738c-1.256-3.467-.896-6.639 1.503-7.395c2.288-.72 4.072 1.564 5.216 4.955c2.018 5.977 6.013 5.051 10.088 2.693"></svg:path>`,
})
export class ArcticonsCalimotoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
