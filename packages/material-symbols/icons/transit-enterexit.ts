import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTransitEnterexitIcon],svg[material-symbols-transit-enterexit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18V8h3v4.75l6.8-6.8l2.2 2.2L11.15 15H16v3z"></svg:path>`,
})
export class MaterialSymbolsTransitEnterexitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
