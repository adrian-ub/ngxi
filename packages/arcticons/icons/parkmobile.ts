import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsParkmobileIcon],svg[arcticons-parkmobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.11 37.305C-.236 27.98 1.37 14.461 10.698 7.112c9.328-7.348 22.845-5.744 30.192 3.583c7.346 9.327 5.74 22.845-3.588 30.193a21.5 21.5 0 0 1-18.201 4.047V15.683h8.002c10.321-.18 10.576 14.788.255 14.968H19.1"></svg:path>`,
})
export class ArcticonsParkmobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
