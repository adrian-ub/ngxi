import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLayerBringForwardIcon],svg[hugeicons-layer-bring-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m15.89 11.5l3.397 1.56C21.096 13.892 22 14.308 22 15s-.904 1.109-2.713 1.94l-4.893 2.247c-1.18.542-1.77.813-2.394.813s-1.214-.271-2.394-.813l-4.893-2.248C2.904 16.11 2 15.693 2 15s.904-1.109 2.713-1.94L8.11 11.5m3.89-7V15m3-8c-.59-.607-2.16-3-3-3S9.59 6.393 9 7" color="currentColor"></svg:path>`,
})
export class HugeiconsLayerBringForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
