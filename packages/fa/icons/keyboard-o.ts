import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faKeyboardOIcon],svg[fa-keyboard-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 912v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16m128-256v96q0 16-16 16H272q-16 0-16-16v-96q0-16 16-16h224q16 0 16 16M384 400v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16m1024 512v96q0 16-16 16H528q-16 0-16-16v-96q0-16 16-16h864q16 0 16 16M768 656v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16M640 400v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16m384 256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16M896 400v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16m384 256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16m384 256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16m-512-512v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16m256 0v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16m256 0v352q0 16-16 16h-224q-16 0-16-16v-96q0-16 16-16h112V400q0-16 16-16h96q16 0 16 16m128 752V256H128v896zm128-896v896q0 53-37.5 90.5T1792 1280H128q-53 0-90.5-37.5T0 1152V256q0-53 37.5-90.5T128 128h1664q53 0 90.5 37.5T1920 256"></svg:path>`,
})
export class FaKeyboardOIcon {
  readonly viewBox = input("0 0 1920 1280")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
