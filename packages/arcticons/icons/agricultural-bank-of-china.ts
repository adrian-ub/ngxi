import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAgriculturalBankOfChinaIcon],svg[arcticons-agricultural-bank-of-china-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsAgriculturalBankOfChina0" fill="none" stroke="currentColor" d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24"></svg:path></svg:defs><svg:use href="#arcticonsAgriculturalBankOfChina0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.866 8.938v20.953c0 .627.504 1.131 1.13 1.131h3.671v9.493C13.438 39.355 7.32 32.31 7.32 24a16.68 16.68 0 0 1 9.538-15.074m14.277 20.965c0 .627-.505 1.131-1.132 1.131h-3.67v9.493C34.562 39.355 40.681 32.31 40.681 24h0a16.68 16.68 0 0 0-9.546-15.077z"></svg:path><svg:use href="#arcticonsAgriculturalBankOfChina0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.475 2.782v13.089a.564.564 0 0 1-.566.565h-1.63c-.851 0-1.279.505-1.279.505s-.428-.505-1.278-.505H21.09a.564.564 0 0 1-.566-.565V2.782M24 16.83v14.042m-7.135-7.063c.175.132.379.22.61.22l5.127.004c.928 0 1.398 1.409 1.398 1.409s.47-1.409 1.398-1.41l5.127-.003c.231 0 .435-.088.61-.22"></svg:path>`,
})
export class ArcticonsAgriculturalBankOfChinaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
