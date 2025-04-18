import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewSidebarSharpIcon],svg[material-symbols-light-view-sidebar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9V5h4v4zm0 5v-4h4v4zM3 19V5h13v14zm14 0v-4h4v4z"></svg:path>`,
})
export class MaterialSymbolsLightViewSidebarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
