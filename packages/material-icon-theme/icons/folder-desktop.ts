import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDesktopIcon],svg[material-icon-theme-folder-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M30 12H14a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6v2h-2v2h8v-2h-2v-2h6a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2m0 12H14V14h16Z"></svg:path>`,
})
export class MaterialIconThemeFolderDesktopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
