import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTodaySharpIcon],svg[material-symbols-today-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16.5q-1.05 0-1.775-.725T6.5 14t.725-1.775T9 11.5t1.775.725T11.5 14t-.725 1.775T9 16.5M3 22V4h3V2h2v2h8V2h2v2h3v18zm2-2h14V10H5z"></svg:path>`,
})
export class MaterialSymbolsTodaySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
