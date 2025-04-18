import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMouseClickFilledIcon],svg[ix-mouse-click-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.304 128h42.654V42.667h-42.654zM42.688 256h85.308v-42.666H42.688zm101.466-81.674L83.84 113.974l30.156-30.166l60.313 60.352zm-30.159 211.187l-30.156-30.165l60.312-60.352l30.157 30.165zM325.12 174.326l-30.157-30.166l60.313-60.352l30.157 30.166zM270.933 464l-80.707-273.873L464 270.934l-62.72 62.72l59.733 59.52l-67.84 67.84l-59.52-59.734z"></svg:path>`,
})
export class IxMouseClickFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
