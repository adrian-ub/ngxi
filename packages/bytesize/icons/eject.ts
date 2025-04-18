import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeEjectIcon],svg[bytesize-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M30 18L16 5L2 18ZM2 25h28"></svg:path>`,
})
export class BytesizeEjectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
