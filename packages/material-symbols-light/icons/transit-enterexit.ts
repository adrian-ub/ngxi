import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTransitEnterexitIcon],svg[material-symbols-light-transit-enterexit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.73 17.385v-8.77H8.5v5.712l7.492-7.492l1.277 1.277l-7.503 7.504H15.5v1.769z"></svg:path>`,
})
export class MaterialSymbolsLightTransitEnterexitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
