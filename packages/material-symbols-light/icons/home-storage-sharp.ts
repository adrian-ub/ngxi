import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeStorageSharpIcon],svg[material-symbols-light-home-storage-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.846 19.385l-1.673-10h15.654l-1.673 10zm3.654-5.5h5v-1h-5zM5.5 8V7h13v1zm2-2.384v-1h9v1z"></svg:path>`,
})
export class MaterialSymbolsLightHomeStorageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
