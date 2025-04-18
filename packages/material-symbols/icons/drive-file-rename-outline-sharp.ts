import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDriveFileRenameOutlineSharpIcon],svg[material-symbols-drive-file-rename-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 21l4-4h8v4Zm8.3-12.075l-4.25-4.2L16.875 1.9L21.1 6.125ZM2 21v-4.25l10.6-10.6l4.25 4.25L6.25 21Z"></svg:path>`,
})
export class MaterialSymbolsDriveFileRenameOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
