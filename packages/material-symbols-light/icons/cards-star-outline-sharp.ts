import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCardsStarOutlineSharpIcon],svg[material-symbols-light-cards-star-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.34 12.192l1.93-1.163l1.928 1.163l-.523-2.196l1.712-1.475l-2.24-.186l-.878-2.066l-.877 2.066l-2.24.186l1.712 1.475zm4.543 6.27h1.444l.098.825l-13.84 1.742L2.927 8.065l2.612-.254v1L4.1 8.956L5.45 19.9zm-9.344-2V3H21v13.462zm1-1H20V4H8.539zm5.73-5.731"></svg:path>`,
})
export class MaterialSymbolsLightCardsStarOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
