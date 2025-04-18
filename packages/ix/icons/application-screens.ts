import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixApplicationScreensIcon],svg[ix-application-screens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 85.336H42.667v277.333h42.666V128.003h320zm64 341.333V149.336H106.667v277.333zm-320-170.666h277.334v128H149.333zm0-64h277.334v21.333H149.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxApplicationScreensIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
