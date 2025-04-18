import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSensorWindowSharpIcon],svg[material-symbols-sensor-window-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V2h16v20zm3-11h3v-1h4v1h3V5H7zm0 2v6h10v-6zM6 4v16h12V4z"></svg:path>`,
})
export class MaterialSymbolsSensorWindowSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
