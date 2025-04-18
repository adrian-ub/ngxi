import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowsInputIcon],svg[material-symbols-light-arrows-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.4 20.308l-.708-.708l3.6-3.6H4v-1h5v5H8v-3.292zm15.2 0l-3.6-3.6V20h-1v-5h5v1h-3.292l3.6 3.6zM4 9V8h3.292l-3.6-3.6l.708-.708l3.6 3.6V4h1v5zm11 0V4h1v3.292l3.6-3.6l.708.708l-3.6 3.6H20v1zm-3 4.327q-.547 0-.937-.39t-.39-.937t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39"></svg:path>`,
})
export class MaterialSymbolsLightArrowsInputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
