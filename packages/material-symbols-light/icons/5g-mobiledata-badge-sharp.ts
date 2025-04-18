import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight5gMobiledataBadgeSharpIcon],svg[material-symbols-light-5g-mobiledata-badge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm16.5-8.5H16v1h1.5v3h-4v-7h5v-1h-6v9h6zm-13 5h5v-5h-4v-3h4v-1h-5v5h4v3h-4z"></svg:path>`,
})
export class MaterialSymbolsLight5gMobiledataBadgeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
