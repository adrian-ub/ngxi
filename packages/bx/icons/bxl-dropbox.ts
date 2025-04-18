import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxlDropboxIcon],svg[bx-bxl-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7.004 3.5L2 6.689l5.004 3.186l5.002-3.186zm10.005 0l-5.003 3.189l5.003 3.186l5.003-3.186zM2 13.062l5.004 3.187l5.002-3.187l-5.002-3.187zm15.009-3.187l-5.003 3.187l5.003 3.187l5.003-3.187zM7.004 17.311l5.002 3.189l5.003-3.189l-5.003-3.186z" fill="currentColor"></svg:path>`,
})
export class BxBxlDropboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
