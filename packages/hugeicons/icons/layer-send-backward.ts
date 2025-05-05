import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLayerSendBackwardIcon],svg[hugeicons-layer-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m15.89 12.5l3.397-1.56C21.096 10.108 22 9.692 22 9s-.904-1.109-2.713-1.94l-4.893-2.247C13.214 4.271 12.624 4 12 4s-1.214.271-2.394.813L4.713 7.061C2.904 7.89 2 8.307 2 9s.904 1.109 2.713 1.94L8.11 12.5m3.89 7V9m3 8c-.59.607-2.16 3-3 3s-2.41-2.393-3-3" color="currentColor"></svg:path>`,
})
export class HugeiconsLayerSendBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
