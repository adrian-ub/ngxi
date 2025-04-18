import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeDesktopIcon],svg[bytesize-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 29s0-5 6-5s6 5 6 5zM2 6v17h28V6z"></svg:path>`,
})
export class BytesizeDesktopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
