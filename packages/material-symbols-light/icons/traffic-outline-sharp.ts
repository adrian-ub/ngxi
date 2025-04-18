import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrafficOutlineSharpIcon],svg[material-symbols-light-traffic-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.938 17.616q.481 0 .8-.315t.32-.796t-.315-.801t-.796-.32t-.8.315t-.32.796t.315.801t.796.32m0-4.5q.481 0 .8-.315t.32-.796t-.315-.801t-.796-.32t-.8.315t-.32.796t.315.801t.796.32m0-4.5q.481 0 .8-.315t.32-.796t-.315-.801t-.796-.32t-.8.315t-.32.797t.315.8t.796.32M7.942 20v-2.496q-.967-.235-1.445-.871q-.478-.637-.478-1.402h1.923v-2.342q-.967-.235-1.445-.872q-.478-.636-.478-1.401h1.923V8.273q-.967-.235-1.445-.871Q6.019 6.765 6.019 6h1.923V4h8v2h2.039q0 .765-.536 1.402q-.535.636-1.503.871v2.343h2.039q0 .765-.536 1.401q-.535.637-1.503.872v2.342h2.039q0 .765-.536 1.402q-.535.636-1.503.87V20zm1-1h6V5h-6zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightTrafficOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
