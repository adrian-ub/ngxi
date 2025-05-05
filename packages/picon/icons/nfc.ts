import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNfcIcon],svg[picon-nfc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8q2-4 0-8q4 4 0 8M4 7q2-3 0-6q4 3 0 6M1 6q-2-2 0-4l2 2V2q2 2 0 4L1 4"></svg:path>`,
})
export class PiconNfcIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
