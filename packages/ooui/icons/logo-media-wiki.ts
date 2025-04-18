import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLogoMediaWikiIcon],svg[ooui-logo-media-wiki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="translate(10 10)"><svg:g id="oouiLogoMediaWiki0"><svg:path id="oouiLogoMediaWiki1" fill="currentColor" d="M0 10c-2.9-3.3-.8-5.9 0-5.9S2.9 6.7 0 10"></svg:path><svg:use href="#oouiLogoMediaWiki1" transform="rotate(15)"></svg:use><svg:use href="#oouiLogoMediaWiki1" transform="rotate(30)"></svg:use><svg:use href="#oouiLogoMediaWiki1" transform="rotate(45)"></svg:use><svg:use href="#oouiLogoMediaWiki1" transform="rotate(60)"></svg:use><svg:use href="#oouiLogoMediaWiki1" transform="rotate(75)"></svg:use></svg:g><svg:use href="#oouiLogoMediaWiki0" transform="rotate(90)"></svg:use><svg:use href="#oouiLogoMediaWiki0" transform="rotate(180)"></svg:use><svg:use href="#oouiLogoMediaWiki0" transform="rotate(270)"></svg:use></svg:g>`,
})
export class OouiLogoMediaWikiIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
