import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUsagedirectIcon],svg[arcticons-usagedirect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 36.5v-25m6 25V16.937M24 36.5V13.928M30 36.5V22.267M36 36.5V16.73M3.199 18.545s12.285-1.676 18.408 6.135c6.721 8.575 11.802 3.652 17.17 4.154c4.212.394 5.765 1.532 5.765 1.532"></svg:path>`,
})
export class ArcticonsUsagedirectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
