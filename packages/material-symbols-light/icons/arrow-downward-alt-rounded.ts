import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowDownwardAltRoundedIcon],svg[material-symbols-light-arrow-downward-alt-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 15.392V6q0-.213.143-.357T12 5.5t.357.143T12.5 6v9.392l3.746-3.746q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354l-4.389 4.388q-.242.243-.565.243t-.565-.243l-4.389-4.388q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16z"></svg:path>`,
})
export class MaterialSymbolsLightArrowDownwardAltRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
