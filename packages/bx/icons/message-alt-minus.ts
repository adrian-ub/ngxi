import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMessageAltMinusIcon],svg[bx-message-alt-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.586 18L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2zM5 4h14v12h-4.414L12 18.586L9.414 16H5z"></svg:path><svg:path fill="currentColor" d="M8 9h8v2H8z"></svg:path>`,
})
export class BxMessageAltMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
