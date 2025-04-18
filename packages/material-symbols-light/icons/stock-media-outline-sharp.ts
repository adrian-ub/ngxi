import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStockMediaOutlineSharpIcon],svg[material-symbols-light-stock-media-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14V3h11v11zm1-1h9V4H4zm4-1.25L6.8 10.1L5.385 12h6.23L9.7 9.5zM16.502 21q-1.04 0-1.771-.728T14 18.502t.73-1.771T16.5 16q.448 0 .82.146t.68.413V11h3v1h-2v6.5q0 1.042-.728 1.77q-.729.73-1.77.73M4 13V4z"></svg:path>`,
})
export class MaterialSymbolsLightStockMediaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
