import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight30fpsSelectSharpIcon],svg[material-symbols-light-30fps-select-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.154 13v-1h4.462V9.5H5.154v-1h4.462V6H5.154V5h5.462v8zm8.23 0V5h5.462v8zm1-1h3.462V6h-3.461zM3.847 21.5v-4h1v4zm3.385 0v-4h1v4zm3.384 0v-4h1v4zm3.385 0v-4h6.154v4z"></svg:path>`,
})
export class MaterialSymbolsLight30fpsSelectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
