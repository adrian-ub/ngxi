import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeStorageOutlineSharpIcon],svg[material-symbols-light-home-storage-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.846 19.385l-1.673-10h15.654l-1.673 10zm.829-1h10.65l1.275-8H5.4zm2.825-4.5h5v-1h-5zM5.5 8V7h13v1zm2-2.384v-1h9v1zm-.825 12.769h10.65z"></svg:path>`,
})
export class MaterialSymbolsLightHomeStorageOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
