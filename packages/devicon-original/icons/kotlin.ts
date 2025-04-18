import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalKotlinIcon],svg[devicon-original-kotlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconOriginalKotlin0" x1="500.003" x2="-.097" y1="579.106" y2="1079.206" gradientTransform="translate(15.534 -96.774) scale(.1939)" gradientUnits="userSpaceOnUse"><svg:stop offset=".003" stop-color="#e44857"></svg:stop><svg:stop offset=".469" stop-color="#c711e1"></svg:stop><svg:stop offset="1" stop-color="#7f52ff"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconOriginalKotlin0)" d="M112.484 112.484H15.516V15.516h96.968L64 64Zm0 0"></svg:path>`,
})
export class DeviconOriginalKotlinIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
