import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPinOffIcon],svg[ic-round-pin-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 9l7 7h-3v4l-1 3l-1-3v-4H7a1 1 0 0 1-1-1v-1.586a1 1 0 0 1 .293-.707L9 10zm7-7a1 1 0 0 1 1 1v.382a1 1 0 0 1-.553.894L15 5v5l2.707 2.707a1 1 0 0 1 .293.707V15a1 1 0 0 1-.076.383L12.27 9.73L9 6.46V5l-1.447-.724A1 1 0 0 1 7 3.382V3a1 1 0 0 1 1-1z"></svg:path><svg:path fill="currentColor" d="M1.635 2.905a.9.9 0 0 0 0 1.27l18.19 18.19a.898.898 0 0 0 1.27-1.27L11 11L2.905 2.905a.9.9 0 0 0-1.27 0"></svg:path>`,
})
export class IcRoundPinOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
