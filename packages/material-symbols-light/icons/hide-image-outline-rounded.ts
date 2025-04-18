import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHideImageOutlineRoundedIcon],svg[material-symbols-light-hide-image-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5.616v10.576q0 .25-.159.375q-.158.125-.341.125t-.341-.127t-.159-.378V5.616q0-.231-.192-.424T18.384 5H7.79q-.25 0-.375-.159q-.125-.158-.125-.341t.125-.341T7.789 4h10.596q.69 0 1.153.462T20 5.615M5.616 20q-.691 0-1.153-.462T4 18.384V5.416L2.446 3.862q-.14-.14-.15-.345q-.01-.203.15-.363t.354-.16t.354.16l17.692 17.692q.14.14.15.345q.01.203-.15.363t-.354.16t-.353-.16L18.585 20zm9.463-3.5H8.308q-.242 0-.354-.217q-.112-.218.05-.43l1.154-1.52q.13-.162.313-.162t.313.142l1.427 1.725l1.518-1.888L5 6.421v11.964q0 .23.192.423t.423.192H17.58zm-3.787-3.792"></svg:path>`,
})
export class MaterialSymbolsLightHideImageOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
