import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderOffSharpIcon],svg[material-symbols-light-folder-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18.175L7.85 5h1.427l2 2H21zm-.198 4.048L17.579 19H3V5h2l1.616 1.616H5.2L2.546 3.962l.708-.708l18.262 18.262z"></svg:path>`,
})
export class MaterialSymbolsLightFolderOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
