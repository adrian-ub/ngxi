import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight4gMobiledataBadgeSharpIcon],svg[material-symbols-light-4g-mobiledata-badge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.923 16.5h6v-5h-2.115v1h1.115v3h-4v-7h5v-1h-6zm-4.423 0h1v-3h2v-1h-2v-5h-1v5h-3v-5h-1v6h4zM2 20V4h20v16z"></svg:path>`,
})
export class MaterialSymbolsLight4gMobiledataBadgeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
