import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderSharedOpenIcon],svg[material-icon-theme-folder-shared-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ab47bc" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#e1bee7" d="M28 26a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h-4v2h18v-2Zm-5-6v-2l4 2.798L23 24v-2a4.12 4.12 0 0 0-4 2c.448-2.003.888-3.595 4-4"></svg:path>`,
})
export class MaterialIconThemeFolderSharedOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
