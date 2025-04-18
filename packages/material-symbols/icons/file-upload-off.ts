import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileUploadOffIcon],svg[material-symbols-file-upload-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4l5 5l-1.4 1.45l-2.6-2.6v2.3l-2-2l-1.575-1.575zm-1 12v-5l2 2v3zm8.775 6.625L17.15 20H6q-.825 0-1.412-.587T4 18v-3h2v3h9.15L1.375 4.225L2.8 2.8l18.4 18.4zM20 17.15l-2-2V15h2z"></svg:path>`,
})
export class MaterialSymbolsFileUploadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
