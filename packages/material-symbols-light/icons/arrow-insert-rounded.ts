import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowInsertRoundedIcon],svg[material-symbols-light-arrow-insert-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.712 7.208V16q0 .213-.144.356q-.144.144-.357.144t-.356-.144T6.71 16V6.308q0-.343.233-.576t.575-.232h9.693q.212 0 .356.144t.143.357t-.143.356t-.357.143H8.42l9.747 9.766q.14.14.13.344t-.15.344t-.334.14t-.335-.14z"></svg:path>`,
})
export class MaterialSymbolsLightArrowInsertRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
