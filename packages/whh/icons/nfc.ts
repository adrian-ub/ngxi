import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNfcIcon],svg[whh-nfc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-416q-45 0-83.5-33.5t-57.5-77.5t-19-81V302l320 274V448l-448-384v768q0 37 19 81t57.5 77.5t83.5 33.5h-224q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h416q45 0 83.5 33.5t57.5 77.5t19 81v530l-320-274v128l448 384V192q0-37-19-81t-57.5-77.5t-83.5-33.5h224q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhNfcIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
