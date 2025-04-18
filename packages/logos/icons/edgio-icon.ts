import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosEdgioIconIcon],svg[logos-edgio-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:radialgradient id="logosEdgioIcon0" cx="104.362%" cy="13.088%" r="94.575%" fx="104.362%" fy="13.088%"><svg:stop offset="0%" stop-color="#01B07D"></svg:stop><svg:stop offset="100%" stop-color="#01B07D" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="logosEdgioIcon1" cx="68.749%" cy="120.916%" r="68.487%" fx="68.749%" fy="120.916%"><svg:stop offset="0%" stop-color="#00AAE5"></svg:stop><svg:stop offset="100%" stop-color="#00AAE5" stop-opacity="0"></svg:stop></svg:radialgradient><svg:lineargradient id="logosEdgioIcon2" x1="3.185%" x2="57.325%" y1="2.866%" y2="58.917%"><svg:stop offset="0%" stop-color="#793092"></svg:stop><svg:stop offset="100%" stop-color="#6144A1"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosEdgioIcon2)" d="M0 0h256v256H0z"></svg:path><svg:path fill="url(#logosEdgioIcon0)" d="M0 0h256v256H0z"></svg:path><svg:path fill="url(#logosEdgioIcon1)" d="M0 0h256v256H0z"></svg:path><svg:path fill="#FFF" d="m170.908 77.201l16.225-29.253H68.867v160.103h118.266l-16.144-29.293h-70.24v-36.819h55.755l8.983-29.294h-64.738V77.201z"></svg:path>`,
})
export class LogosEdgioIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
