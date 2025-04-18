import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLuauIcon],svg[material-icon-theme-folder-luau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#42A5F5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#B3E5FC" fill-rule="evenodd" d="M18.381 12L31 15.381L27.619 28L15 24.619zm8.095 3.86l2.524.676l-.676 2.524l-2.524-.677z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderLuauIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
