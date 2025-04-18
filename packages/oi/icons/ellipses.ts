import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiEllipsesIcon],svg[oi-ellipses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3v2h2V3zm3 0v2h2V3zm3 0v2h2V3z"></svg:path>`,
})
export class OiEllipsesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
