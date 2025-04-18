import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBidLandscapeDisabledOutlineSharpIcon],svg[material-symbols-light-bid-landscape-disabled-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.19 2.871L21.13 21.81l-.714.713L17.893 20H4V6.108L1.477 3.585zm7.04 9.118L5 16.218V19h11.892l-3.33-3.33l-.3.33zM5 7.108v7.684l3.842-3.842zM6.17 4H20v13.83l-1-1V9.597l-3.423 3.812l-.713-.714L19 8.096V5H7.17zm6.865 6.866"></svg:path>`,
})
export class MaterialSymbolsLightBidLandscapeDisabledOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
