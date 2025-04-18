import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHardDrive2SharpIcon],svg[material-symbols-light-hard-drive-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.923 18.616q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.229t-.54.23t-.23.54q0 .309.23.539t.54.23m2.923 0q.31 0 .54-.23t.23-.54t-.23-.54q-.23-.229-.54-.229t-.54.23t-.229.54t.23.539t.54.23M4 13.5V3h16v10.5zM4 21v-6.5h16V21z"></svg:path>`,
})
export class MaterialSymbolsLightHardDrive2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
