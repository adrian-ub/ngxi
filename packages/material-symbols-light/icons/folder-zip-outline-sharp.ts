import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderZipOutlineSharpIcon],svg[material-symbols-light-folder-zip-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12v-2h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm-4.806-8l-2-2H4v12h10v-2h2v2h4V8h-4v2h-2V8zM3 19V5h6.596l2 2H21v12zm1-1V6z"></svg:path>`,
})
export class MaterialSymbolsLightFolderZipOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
