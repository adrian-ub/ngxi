import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSendbackwardIcon],svg[whh-sendbackward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 1024h-512q-26 0-45-18.5t-19-45.5V640h-320q-27 0-45.5-18.5T.193 576V64q0-26 18.5-45t45.5-19h512q26 0 45 19t19 45v320h320q26 0 45 19t19 45v512q0 27-19 45.5t-45 18.5m0-576h-512v512h512z"></svg:path>`,
})
export class WhhSendbackwardIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
