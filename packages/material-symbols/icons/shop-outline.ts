import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShopOutlineIcon],svg[material-symbols-shop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.5 18l7-4.5l-7-4.5zM4 21q-.825 0-1.412-.587T2 19V6h6V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h6v13q0 .825-.587 1.413T20 21zm0-2h16V8H4zm6-13h4V4h-4zM4 19V8z"></svg:path>`,
})
export class MaterialSymbolsShopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
