import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCreateNewFolderSharpIcon],svg[material-symbols-light-create-new-folder-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h6.596l2 2H21v12zm11.5-3.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2z"></svg:path>`,
})
export class MaterialSymbolsLightCreateNewFolderSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
