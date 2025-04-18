import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosJelasticIconIcon],svg[logos-jelastic-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="svgIDa" x1="50.008%" x2="50.008%" y1="87.683%" y2=".077%"><svg:stop offset="0%" stop-color="#0056B3"></svg:stop><svg:stop offset="25%" stop-color="#0056B3"></svg:stop><svg:stop offset="70%" stop-color="#0088FB"></svg:stop><svg:stop offset="100%" stop-color="#00ACFF"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#0064C8" d="m64.011 181.15l63.925-36.915v-73.83L64.011 107.32v73.83Zm63.925-36.915v-73.83l63.926 36.915v73.83l-63.926-36.915Z"></svg:path><svg:path fill="url(#svgIDa)" d="M252.572 72.25c-4.802-7.975-12.863-11.02-20.58-15.564l-80.389-46.433c-22.98-13.376-22.98-13.977-47.419.043L63.968 33.491l127.894 73.7v73.959l-63.926 36.914l-63.968-36.914v-73.958L0 144.235v46.39c0 28.04.514 27.697 23.71 40.902l80.474 46.647c23.195 13.377 23.195 14.02 47.419 0l80.518-46.647c23.195-13.377 23.666-13.12 23.666-41.074V97.717c0-9.09 1.458-17.45-3.215-25.468Z"></svg:path><svg:path fill="#0056B3" d="M0 144.235v46.39c0 28.04.514 27.697 23.71 40.902l80.474 46.647c23.195 13.377 23.195 14.02 47.419 0l-23.71-60.024l-63.925-37v-73.958L0 144.235Z"></svg:path><svg:path fill="#0088FB" d="M252.529 72.292c-4.802-7.974-12.863-11.018-20.58-15.563L151.56 10.296c-23.152-13.377-23.195-13.977-47.419 0L63.925 33.534l127.894 73.658v74l-63.968 36.915l-63.926-36.914v-74.001L0 144.278v46.433c0 27.954.472 27.696 23.667 41.073l80.474 46.433c23.195 13.376 23.195 14.02 47.42 0l80.474-46.433c23.195-13.377 23.666-13.12 23.666-41.073V97.759c.043-9.089 1.544-17.406-3.172-25.467Z" opacity=".3"></svg:path><svg:path fill="#0064C8" d="m63.968 181.15l63.926-36.915v-73.83L63.968 107.32v73.83Zm63.926-36.915v-73.83l63.968 36.915v73.83l-63.968-36.915Z"></svg:path>`,
})
export class LogosJelasticIconIcon {
  readonly viewBox = input("0 0 256 289")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
