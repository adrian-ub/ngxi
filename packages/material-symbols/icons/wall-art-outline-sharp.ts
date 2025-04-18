import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWallArtOutlineSharpIcon],svg[material-symbols-wall-art-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V6h6l4-4l4 4h6v16zm2-2h16V8H4zm2-2h12l-3.75-5l-3 4L9 14zm11.5-5q.625 0 1.063-.437T19 11.5t-.437-1.062T17.5 10t-1.062.438T16 11.5t.438 1.063T17.5 13m-7.4-7h3.8L12 4.1zM4 20V8z"></svg:path>`,
})
export class MaterialSymbolsWallArtOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
