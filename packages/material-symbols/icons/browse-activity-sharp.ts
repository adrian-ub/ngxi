import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrowseActivitySharpIcon],svg[material-symbols-browse-activity-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21v-2h22v2zm1-3v-7h5.375l2 4h1.2l3.375-5.875l.925 1.875H22v7zm8.075-6.125L8.6 9H2V3h20v6h-5.875l-1.5-3h-1.2z"></svg:path>`,
})
export class MaterialSymbolsBrowseActivitySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
