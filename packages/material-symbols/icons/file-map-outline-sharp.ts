import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileMapOutlineSharpIcon],svg[material-symbols-file-map-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm2-2h14V5H5zm7-1q2.425-2.05 3.613-3.812t1.187-3.263q0-2.275-1.45-3.6T12 6T8.65 7.325t-1.45 3.6q0 1.5 1.188 3.263T12 18m0-5.75q-.525 0-.888-.363T10.75 11t.363-.888T12 9.75t.888.363t.362.887t-.363.888t-.887.362M5 19V5z"></svg:path>`,
})
export class MaterialSymbolsFileMapOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
