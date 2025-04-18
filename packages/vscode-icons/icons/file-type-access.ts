import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeAccessIcon],svg[vscode-icons-file-type-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeAccess0" x1="4.416" x2="13.909" y1="-1909.341" y2="-1892.9" gradientTransform="translate(0 1917.121)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#b72c3f"></svg:stop><svg:stop offset=".5" stop-color="#b12334"></svg:stop><svg:stop offset="1" stop-color="#9d1623"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#881421" d="M8.512 20v6.667c0 1.84 4.81 3.333 10.744 3.333S30 28.507 30 26.667V20Z"></svg:path><svg:path fill="#af2031" d="M8.512 12.667V20c0 1.841 4.81 3.333 10.744 3.333S30 21.841 30 20v-7.333Z"></svg:path><svg:path fill="#c94f60" d="M8.512 5.333v7.334c0 1.84 4.81 3.333 10.744 3.333S30 14.507 30 12.667V5.333Z"></svg:path><svg:ellipse cx="19.256" cy="5.333" fill="#e08095" rx="10.744" ry="3.333"></svg:ellipse><svg:path d="M16.434 8H8.512v16.667h7.922a1.21 1.21 0 0 0 1.194-1.222V9.222A1.21 1.21 0 0 0 16.434 8" opacity=".1"></svg:path><svg:path d="M15.783 8.667H8.512v16.666h7.271a1.21 1.21 0 0 0 1.194-1.222V9.889a1.21 1.21 0 0 0-1.194-1.222" opacity=".2"></svg:path><svg:path d="M15.783 8.667H8.512V24h7.271a1.21 1.21 0 0 0 1.194-1.222V9.889a1.21 1.21 0 0 0-1.194-1.222" opacity=".2"></svg:path><svg:path d="M15.132 8.667h-6.62V24h6.62a1.213 1.213 0 0 0 1.194-1.222V9.889a1.213 1.213 0 0 0-1.194-1.222" opacity=".2"></svg:path><svg:path fill="url(#vscodeIconsFileTypeAccess0)" d="M3.194 8.667h11.938a1.21 1.21 0 0 1 1.194 1.222v12.222a1.21 1.21 0 0 1-1.194 1.222H3.194A1.21 1.21 0 0 1 2 22.111V9.889a1.21 1.21 0 0 1 1.194-1.222"></svg:path><svg:path fill="#fff" d="M8.305 12.027h1.758l2.825 7.945h-1.66l-.623-1.895H7.7l-.611 1.895H5.437Zm1.926 4.826l-.9-2.875a4 4 0 0 1-.165-.649H9.13a3.7 3.7 0 0 1-.162.671l-.912 2.859Z"></svg:path>`,
})
export class VscodeIconsFileTypeAccessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
