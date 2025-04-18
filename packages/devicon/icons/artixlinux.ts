import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconArtixlinuxIcon],svg[devicon-artixlinux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconArtixlinux0" x1="75.543" x2="81.2" y1="145.986" y2="143.227" gradientTransform="translate(-109.09 -291.172)scale(2.73936)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fff" stop-opacity=".365"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconArtixlinux1" x1="105.834" x2="80.209" y1="15.354" y2="30.531" gradientTransform="translate(-218.147 44.362)scale(2.73936)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-opacity=".102"></svg:stop><svg:stop offset="1" stop-opacity=".306"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconArtixlinux2" x1="70.725" x2="87.092" y1="12.292" y2="26.895" gradientTransform="translate(-136.013 5.393)scale(2.73936)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-opacity=".102"></svg:stop><svg:stop offset="1" stop-opacity=".306"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconArtixlinux3" x1="70.725" x2="81.158" y1="12.292" y2="19.324" gradientTransform="translate(-95.891 75.061)scale(2.73936)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-opacity=".102"></svg:stop><svg:stop offset="1" stop-opacity=".306"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconArtixlinux4" x1="70.513" x2="55.281" y1="62.847" y2="56.394" gradientTransform="translate(-121.388 -85.738)scale(2.73936)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fff" stop-opacity=".365"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconArtixlinux5" x1="70.513" x2="63.044" y1="62.847" y2="59.204" gradientTransform="matrix(-2.73936 0 0 2.73936 250.886 -133.095)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fff" stop-opacity=".365"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#10a0cc" d="m64.002 0l-22.01 45.13l60.572 33.936ZM35.341 58.764L1.573 127.999l100.2-41.397Zm73.842 33.876l-31.602 18.142l48.846 17.217Zm0 0"></svg:path><svg:path fill="url(#deviconArtixlinux0)" d="m97.849 108.735l11.334-16.098L126.427 128Zm0 0"></svg:path><svg:path fill="url(#deviconArtixlinux1)" d="m1.573 127.999l70.2-41.578l30 .18zm0 0"></svg:path><svg:path fill="url(#deviconArtixlinux2)" d="M102.564 79.067L41.99 45.125l15.737-6.059Zm0 0"></svg:path><svg:path fill="url(#deviconArtixlinux3)" d="m126.427 127.999l-48.846-17.217l20.268-2.048Zm0 0"></svg:path><svg:path fill="url(#deviconArtixlinux4)" d="m1.573 127.999l70.2-41.578L35.34 58.764Zm0 0"></svg:path><svg:path fill="url(#deviconArtixlinux5)" d="m102.564 79.067l-44.836-40L64.002 0Zm0 0"></svg:path>`,
})
export class DeviconArtixlinuxIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
