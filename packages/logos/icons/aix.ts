import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAixIcon],svg[logos-aix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosAix0" x1="5.807%" x2="274.587%" y1="101.291%" y2="-4.88%"><svg:stop offset="0%" stop-color="#6FDC8C"></svg:stop><svg:stop offset="30.49%" stop-color="#6FDC8C"></svg:stop><svg:stop offset="92.79%" stop-color="#009D9A"></svg:stop><svg:stop offset="100%" stop-color="#009D9A"></svg:stop></svg:lineargradient><svg:lineargradient id="logosAix1" x1="-9.904%" x2="128.371%" y1="101.291%" y2="-4.857%"><svg:stop offset="0%" stop-color="#6FDC8C"></svg:stop><svg:stop offset="30.49%" stop-color="#6FDC8C"></svg:stop><svg:stop offset="92.79%" stop-color="#009D9A"></svg:stop><svg:stop offset="100%" stop-color="#009D9A"></svg:stop></svg:lineargradient><svg:lineargradient id="logosAix2" x1="-136.658%" x2="130.35%" y1="101.291%" y2="-4.857%"><svg:stop offset="0%" stop-color="#6FDC8C"></svg:stop><svg:stop offset="30.49%" stop-color="#6FDC8C"></svg:stop><svg:stop offset="92.79%" stop-color="#009D9A"></svg:stop><svg:stop offset="100%" stop-color="#009D9A"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosAix0)" d="m142.163 206.178l-14.595-49.03H59.544l-14.596 49.03H0L67.147.045h54.874l66.27 206.133zM93.991 40.79h-1.46l-22.48 78.274h46.7z"></svg:path><svg:path fill="url(#logosAix1)" d="M208.731 206.178v-35.739h26.27v-134.7h-26.27V0h96.909v35.739h-26.27v134.7h26.27v35.739z"></svg:path><svg:path fill="url(#logosAix2)" d="M512 206.178h-51.382l-44.086-75.913h-.876l-42.912 75.913h-47.875l65.393-106.63L328.078 0h51.664l39.703 69.703h.876L460.603 0h47.875l-62.763 100.435z"></svg:path>`,
})
export class LogosAixIcon {
  readonly viewBox = input("0 0 512 207")
  readonly width = input("2.48em")
  readonly height = input("1em")
}
