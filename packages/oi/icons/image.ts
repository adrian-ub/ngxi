import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiImageIcon],svg[oi-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v8h8V0zm1 1h6v3L6 3L5 4l2 2v1H6L2 3L1 4z"></svg:path>`,
})
export class OiImageIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
