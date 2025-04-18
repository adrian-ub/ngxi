import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHourglassEndIcon],svg[ix-hourglass-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 42.667H128V169.5l96.11 86.5L128 342.499v126.834h256V342.499L287.89 256L384 169.501zm-42.667 107.832L256 227.299l-85.333-76.8V85.333h170.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxHourglassEndIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
