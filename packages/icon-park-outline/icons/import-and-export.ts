import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineImportAndExportIcon],svg[icon-park-outline-import-and-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.99" d="m14 26l-9 9l9 9m-9-8.992h17.5M34 18l9 9l-9 9m9-8.992H25.5M4.5 24V7.5h39V15"></svg:path>`,
})
export class IconParkOutlineImportAndExportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
