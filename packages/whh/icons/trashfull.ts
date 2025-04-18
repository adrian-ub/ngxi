import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTrashfullIcon],svg[whh-trashfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.743 192h-896q-26 0-45-18.5t-19-45t19-45.5t45-19h320q0-26 18.5-45t45.5-19h128q27 0 45.5 19t18.5 45h320q26 0 45 19t19 45.5t-19 45t-45 18.5m-832 64h768q26 0 45 19t19 45v576q0 53-37.5 90.5t-90.5 37.5h-640q-53 0-90.5-37.5t-37.5-90.5V320q0-26 19-45t45-19"></svg:path>`,
})
export class WhhTrashfullIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
