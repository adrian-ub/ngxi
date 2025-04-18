import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUploadSharpIcon],svg[material-symbols-upload-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-7 4v-5h2v3h12v-3h2v5z"></svg:path>`,
})
export class MaterialSymbolsUploadSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
