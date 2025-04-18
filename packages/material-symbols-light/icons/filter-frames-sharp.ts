import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilterFramesSharpIcon],svg[material-symbols-light-filter-frames-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V5h5.616L12 1.615L15.385 5H21v16zm1-1h16V6H4zm2.385-2.384V8.385h11.23v9.23z"></svg:path>`,
})
export class MaterialSymbolsLightFilterFramesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
