import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerRightUpIcon],svg[pixelarticons-corner-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18V8h2V6h-2V4h-2v2h-2v2h2v10H4v2h12zM12 8h-2v2h2zm6 0h2v2h-2z"></svg:path>`,
})
export class PixelarticonsCornerRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
