import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhOpennewwindowIcon],svg[whh-opennewwindow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768H384q-53 0-90.5-37.5T256 640V128q0-53 37.5-90.5T384 0h512q53 0 90.5 37.5T1024 128v512q0 53-37.5 90.5T896 768m0-576q0-27-18.5-45.5T832 128H448q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h232L401 535q-18 18-18 43.5t18 43.5t43.5 18t43.5-18l280-280v234q0 27 19 45.5t45.5 18.5t45-18.5T896 576zm-64 768.5q0 26.5-18.5 45T768 1024H128q-53 0-90.5-37.5T0 896V256q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v576q0 27 18.5 45.5T192 896h576q26 0 45 19t19 45.5"></svg:path>`,
})
export class WhhOpennewwindowIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
