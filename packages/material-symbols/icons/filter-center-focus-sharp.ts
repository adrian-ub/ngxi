import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterCenterFocusSharpIcon],svg[material-symbols-filter-center-focus-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-6h2v4h4v2zm12 0v-2h4v-4h2v6zM3 9V3h6v2H5v4zm16 0V5h-4V3h6v6zm-7 6q-1.25 0-2.125-.875T9 12t.875-2.125T12 9t2.125.875T15 12t-.875 2.125T12 15"></svg:path>`,
})
export class MaterialSymbolsFilterCenterFocusSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
