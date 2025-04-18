import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDriveFolderUploadSharpIcon],svg[material-symbols-light-drive-folder-upload-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h6.596l2 2H21v12zm8.5-2.77h1v-4.7l2.12 2.12l.707-.708L12 9.616l-3.289 3.288l.708.708L11.5 11.53z"></svg:path>`,
})
export class MaterialSymbolsLightDriveFolderUploadSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
