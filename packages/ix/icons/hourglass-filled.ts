import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHourglassFilledIcon],svg[ix-hourglass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 42.667H128V169.5l96.11 86.5L128 342.499v126.834h256V342.499L287.89 256L384 169.501z" clip-rule="evenodd"></svg:path>`,
})
export class IxHourglassFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
