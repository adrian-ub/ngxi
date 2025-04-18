import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLooks3SharpIcon],svg[material-symbols-light-looks-3-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 16.5h5v-9h-5v1h4v3h-2.384v1H13.5v3h-4zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightLooks3SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
