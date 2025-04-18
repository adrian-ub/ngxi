import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderRustOpenIcon],svg[material-icon-theme-folder-rust-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF7043" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffccbc" d="M30 24v1a1 1 0 0 1-2 0v-1a2 2 0 0 0-2-2a3 3 0 0 0 2.996-3.16A3.115 3.114 0 0 0 25.83 16H14v2h2v8h-2v2h8v-2h-2v-2h4c.82.819.297 2.308 1.179 3.37a1.89 1.89 0 0 0 1.46.63H32v-4zm-6-4h-4v-2h4a1 1 0 0 1 0 2"></svg:path>`,
})
export class MaterialIconThemeFolderRustOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
