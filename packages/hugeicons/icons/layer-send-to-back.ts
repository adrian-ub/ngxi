import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLayerSendToBackIcon],svg[hugeicons-layer-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M12 21.5V7m3 12c-.59.607-2.16 3-3 3s-2.41-2.393-3-3m11.233-7.5C21.41 12.062 22 12.44 22 13c0 .693-.904 1.109-2.713 1.94L15.89 16.5m-12.123-5C2.59 12.062 2 12.44 2 13c0 .693.904 1.109 2.713 1.94L8.11 16.5m0-6L4.713 8.94C2.904 8.108 2 7.692 2 7s.904-1.109 2.713-1.94l4.893-2.247C10.786 2.271 11.376 2 12 2s1.214.271 2.394.813l4.893 2.248C21.096 5.89 22 6.307 22 7s-.904 1.109-2.713 1.94L15.89 10.5" color="currentColor"></svg:path>`,
})
export class HugeiconsLayerSendToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
