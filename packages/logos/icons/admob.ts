import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAdmobIcon],svg[logos-admob-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient x1="50%" y1="0%" x2="50%" y2="99.302%" id="ssvg-id-admoba"><svg:stop stop-color="#404040" stop-opacity=".3" offset="0%"></svg:stop><svg:stop stop-color="#404040" stop-opacity="0" offset="100%"></svg:stop></svg:lineargradient></svg:defs><svg:path d="M127.983 174.982c-25.785 0-46.688-20.903-46.688-46.688c0-25.786 20.903-46.688 46.688-46.688H256L175.138 0h-47.155C57.3 0 0 57.3 0 127.982c0 70.684 57.3 127.984 127.983 127.984v-80.984z" fill="#DE564A"></svg:path><svg:path fill="#465B65" d="M174.671 255.966H256V81.606h-81.329z"></svg:path><svg:path fill="url(#ssvg-id-admoba)" d="M256 81.606v80.447l-81.329-80.447z"></svg:path>`,
})
export class LogosAdmobIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
