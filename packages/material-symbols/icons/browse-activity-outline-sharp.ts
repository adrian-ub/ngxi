import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrowseActivityOutlineSharpIcon],svg[material-symbols-browse-activity-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9V3h20v6h-2V5H4v4zm0 9v-7h2v5h16v-5h2v7zm0-7V9h6.6l1.475 2.875L13.425 6h1.2l1.5 3H22v2h-7.125l-.925-1.875L10.575 15h-1.2l-2-4zM1 21v-2h22v2zm11-10.5"></svg:path>`,
})
export class MaterialSymbolsBrowseActivityOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
