import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsWarningBoxIcon],svg[pixelarticons-warning-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h16v2H5v14h14v2H3zm18 0h-2v18h2zM11 15h2v2h-2zm2-8h-2v6h2z"></svg:path>`,
})
export class PixelarticonsWarningBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
