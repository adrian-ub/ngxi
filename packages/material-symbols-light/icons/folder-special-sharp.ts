import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderSpecialSharpIcon],svg[material-symbols-light-folder-special-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.023 16.104l1.877-1.442l1.877 1.442l-.696-2.331l1.896-1.542h-2.33L14.9 9.95l-.746 2.28h-2.331l1.896 1.543zM3 19V5h6.596l2 2H21v12z"></svg:path>`,
})
export class MaterialSymbolsLightFolderSpecialSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
