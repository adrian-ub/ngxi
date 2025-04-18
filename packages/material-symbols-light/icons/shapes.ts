import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShapesIcon],svg[material-symbols-light-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.235 15.23q-2.506 0-4.255-1.745t-1.75-4.25T4.977 4.98t4.251-1.75t4.255 1.746t1.749 4.251t-1.745 4.255Q11.74 15.23 9.235 15.23m-.466 3.923v-1.165l.231.008q.116.003.23.003q3.655 0 6.212-2.558T18 9.231q0-.115-.003-.231l-.008-.23h1.165q.666 0 1.14.474t.475 1.14v8.77q0 .666-.474 1.14t-1.141.475h-8.77q-.666 0-1.14-.474t-.475-1.141"></svg:path>`,
})
export class MaterialSymbolsLightShapesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
