import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBottomAppBarOutlineSharpIcon],svg[material-symbols-bottom-app-bar-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm2-5v3h14v-3h-4.8q-.425.45-.987.725T12 17t-1.213-.275T9.8 16zm7-1q.425 0 .713-.288T13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15m-7-1h4q0-1.25.875-2.125T12 11t2.125.875T15 14h4V5H5zm0 5h14z"></svg:path>`,
})
export class MaterialSymbolsBottomAppBarOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
