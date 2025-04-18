import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMappingsOpenIcon],svg[material-icon-theme-folder-mappings-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#afb42b" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#f0f4c3" d="M18 16h2v2h-2zm4 0h6v2h-6zm-4 4h2v2h-2zm4 0h6v2h-6zm-4 4h2v2h-2zm4 0h6v2h-6z"></svg:path><svg:path fill="#f0f4c3" d="M14 12.5v17a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5h-17a.5.5 0 0 0-.5.5M30 28H16V14h14Z"></svg:path>`,
})
export class MaterialIconThemeFolderMappingsOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
