import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsUpRightIcon],svg[flat-color-icons-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="flatColorIconsUpRight0" fill="#3F51B5" d="M44 19L30 30.7V7.3z"></svg:path><svg:path id="flatColorIconsUpRight1" fill="#3F51B5" d="M6 27v13h8V27c0-2.2 1.8-4 4-4h17v-8H18c-6.6 0-12 5.4-12 12"></svg:path></svg:defs><svg:use href="#flatColorIconsUpRight0"></svg:use><svg:use href="#flatColorIconsUpRight1"></svg:use><svg:use href="#flatColorIconsUpRight0"></svg:use><svg:use href="#flatColorIconsUpRight1"></svg:use>`,
})
export class FlatColorIconsUpRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
