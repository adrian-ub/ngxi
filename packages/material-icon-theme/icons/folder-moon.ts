import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMoonIcon],svg[material-icon-theme-folder-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#d1c4e9" d="M32 14a3.995 3.995 0 0 0-7.64-1.64A7.7 7.7 0 0 0 22 12a8 8 0 1 0 8 8a7.7 7.7 0 0 0-.36-2.36A3.99 3.99 0 0 0 32 14m-8 8a4 4 0 0 1 0-8a4 4 0 0 0 4 4a4 4 0 0 1-4 4"></svg:path>`,
})
export class MaterialIconThemeFolderMoonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
