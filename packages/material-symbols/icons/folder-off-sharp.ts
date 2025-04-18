import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderOffSharpIcon],svg[material-symbols-folder-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19.175L6.85 4H9.7l2 2H22zM20.475 23.3l-3.3-3.3H2V4h2l2 2H3.2L.7 3.5l1.4-1.4l19.8 19.8z"></svg:path>`,
})
export class MaterialSymbolsFolderOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
