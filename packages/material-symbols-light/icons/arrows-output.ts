import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowsOutputIcon],svg[material-symbols-light-arrows-output-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-5h1v3.292l3.6-3.6l.708.708l-3.6 3.6H9v1zm11 0v-1h3.292l-3.6-3.6l.708-.708l3.6 3.6V15h1v5zM8.6 9.308L5 5.708V9H4V4h5v1H5.708l3.6 3.6zm6.8 0l-.708-.708l3.6-3.6H15V4h5v5h-1V5.708zM12 13.327q-.547 0-.937-.39t-.39-.937t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39"></svg:path>`,
})
export class MaterialSymbolsLightArrowsOutputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
