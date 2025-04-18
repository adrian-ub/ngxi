import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWeCareIcon],svg[arcticons-we-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.499 24.199c-.1 10.638-7.965 19.603-18.499 21.087V2.714a21.5 21.5 0 0 1 17.714 15.528L3.287 29.76A21.5 21.5 0 0 0 21 45.286V2.716C10.466 4.2 2.601 13.166 2.501 23.803"></svg:path>`,
})
export class ArcticonsWeCareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
