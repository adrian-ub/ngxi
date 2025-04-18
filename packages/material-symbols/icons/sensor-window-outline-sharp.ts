import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSensorWindowOutlineSharpIcon],svg[material-symbols-sensor-window-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V2h16v20zm2-11h4v-1h4v1h4V4H6zm0 2v7h12v-7zm0 7h12z"></svg:path>`,
})
export class MaterialSymbolsSensorWindowOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
