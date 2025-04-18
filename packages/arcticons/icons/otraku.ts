import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOtrakuIcon],svg[arcticons-otraku-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.753 40.676c.62-10.293 1.17-16.607.851-28.441M24 8.48A140 140 0 0 1 4.5 7.323"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.73 7.716l-.038 3.792A112 112 0 0 0 24 12.526a112 112 0 0 0 16.308-1.018l.012-3.797"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.526v3.778H10.058m24.19 24.372c-.62-10.293-1.17-16.607-.852-28.441M24 8.48a140 140 0 0 0 19.5-1.156M24 16.304h13.942"></svg:path>`,
})
export class ArcticonsOtrakuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
