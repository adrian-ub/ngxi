import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoDigitOneIcon],svg[noto-digit-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:lineargradient id="ssvg-id-digit-onea" gradientUnits="userSpaceOnUse" x1="59.335" y1="100.333" x2="59.335" y2="25.95" gradientTransform="matrix(1 0 0 -1 0 128)"><svg:stop offset="0" stop-color="#757575"></svg:stop><svg:stop offset=".515" stop-color="#504f4f"></svg:stop></svg:lineargradient><svg:path d="M73.57 102.07H63.7c-.76 0-1.37-.61-1.37-1.37V43.03c0-.94-.92-1.6-1.81-1.3l-14.98 5.11c-.89.3-1.81-.36-1.81-1.3v-7.76c0-.57.36-1.09.9-1.29L73.1 26.02c.15-.06.31-.08.47-.08c.76 0 1.37.61 1.37 1.37v73.39c0 .75-.61 1.37-1.37 1.37z" fill="url(#ssvg-id-digit-onea)"></svg:path>`,
})
export class NotoDigitOneIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
