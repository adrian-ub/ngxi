import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewSidebarSharpIcon],svg[material-symbols-view-sidebar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8V4h4v4zm0 6v-4h4v4zM2 20V4h14v16zm16 0v-4h4v4z"></svg:path>`,
})
export class MaterialSymbolsViewSidebarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
