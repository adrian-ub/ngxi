import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCn1x1Icon],svg[flag-cn-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="flagCn1x10" fill="#ff0" d="M1-.3L-.7.8L0-1L.6.8L-1-.3z"></svg:path></svg:defs><svg:path fill="#ee1c25" d="M0 0h512v512H0z"></svg:path><svg:use width="30" height="20" href="#flagCn1x10" transform="translate(128 128)scale(76.8)"></svg:use><svg:use width="30" height="20" href="#flagCn1x10" transform="rotate(-121 142.6 -47)scale(25.5827)"></svg:use><svg:use width="30" height="20" href="#flagCn1x10" transform="rotate(-98.1 198 -82)scale(25.6)"></svg:use><svg:use width="30" height="20" href="#flagCn1x10" transform="rotate(-74 272.4 -114)scale(25.6137)"></svg:use><svg:use width="30" height="20" href="#flagCn1x10" transform="matrix(16 -19.968 19.968 16 256 230.4)"></svg:use>`,
})
export class FlagCn1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
