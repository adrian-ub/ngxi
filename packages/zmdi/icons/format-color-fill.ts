import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatColorFillIcon],svg[zmdi-format-color-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M353 191q10 9 10 22.5T353 236L236 353q-9 10-22.5 10T191 353L73 236q-9-9-9-22.5t9-22.5L183 81l-51-51l31-30zm-242 22h205L213 111zm294 32q43 47 43 75q0 18-12.5 30.5t-30 12.5t-30-12.5T363 320q0-13 10.5-31.5T395 258zM0 427h512v85H0z"></svg:path>`,
})
export class ZmdiFormatColorFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
