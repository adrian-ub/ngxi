import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderDeleteOutlineSharpIcon],svg[material-symbols-light-folder-delete-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h6.596l2 2H21v12zm1-1h16V8h-8.81L9.195 6H4zm0 0V6zm9.039-1.384h4.769v-5.731h.807V10h-2.307v-.615h-1.77V10h-2.307v.885h.807zm.884-.885v-4.846h3v4.846z"></svg:path>`,
})
export class MaterialSymbolsLightFolderDeleteOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
