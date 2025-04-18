import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrowseActivityOutlineSharpIcon],svg[material-symbols-light-browse-activity-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9.962v-5.5h18v5.5h-1v-4.5H4v4.5zm0 7.5v-6.5h1v5.5h16v-5.5h1v6.5zm0-6.5v-1h5.312l1.763 3.51L13.675 7h.662l1.48 2.962H21v1h-5.798L13.95 8.49l-3.644 6.47h-.623l-2-4zm-1.23 8.5v-1h20.46v1zm10.23-8.5"></svg:path>`,
})
export class MaterialSymbolsLightBrowseActivityOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
