import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderTerraformIcon],svg[material-icon-theme-folder-terraform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c6bc0" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#c5cae9" d="M27.03 22.993L32 19.84v-6.316l-4.97 3.16m-5.516-3.16l4.97 3.16v6.31l-4.969-3.157M16 16.313l4.97 3.156v-6.313L16 10m5.516 16.844L26.486 30v-6.313l-4.97-3.156"></svg:path>`,
})
export class MaterialIconThemeFolderTerraformIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
