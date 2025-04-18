import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackupTableSharpIcon],svg[material-symbols-light-backup-table-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 16H13v-5.5H7.5zm0-6.5h12V4h-12zM14 16h5.5v-5.5H14zm-7.5 1V3h14v14zm-3 3V6.616h1V19h12.385v1z"></svg:path>`,
})
export class MaterialSymbolsLightBackupTableSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
