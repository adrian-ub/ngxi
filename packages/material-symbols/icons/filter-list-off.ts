import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterListOffIcon],svg[material-symbols-filter-list-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.775 22.625l-18.4-18.4L2.8 2.8l18.4 18.4zM15.825 13l-2-2H18v2zm-5-5l-2-2H21v2zM10 18v-2h4v2zm-4-5v-2h4.15v2zM3 8V6h2.15v2z"></svg:path>`,
})
export class MaterialSymbolsFilterListOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
