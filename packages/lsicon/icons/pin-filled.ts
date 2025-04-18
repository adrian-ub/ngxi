import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPinFilledIcon],svg[lsicon-pin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 12V4h1v1.05l6.326.659l.847-.733a.5.5 0 0 1 .827.378v5a.5.5 0 0 1-.828.377l-.834-.724L7 10.932V12zM1 7.5h5v1H1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPinFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
