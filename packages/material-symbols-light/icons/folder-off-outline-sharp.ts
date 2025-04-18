import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderOffOutlineSharpIcon],svg[material-symbols-light-folder-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18.175l-1-1V8h-9.15l-2-2l-1-1h1.427l2 2H21zm-.198 4.048L17.579 19H3V5h2l1 1H4v12h12.579L2.546 3.962l.708-.708l18.262 18.262zm-6.377-10.648"></svg:path>`,
})
export class MaterialSymbolsLightFolderOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
