import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFramesIcon],svg[ix-frames-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 127.999H106.667v64h298.666zm-298.666 256V234.665H192v149.334zm128 0h170.666V234.665H234.667zm-128-298.667H64v341.333h384V85.332z" clip-rule="evenodd"></svg:path>`,
})
export class IxFramesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
