import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCloseSmallRoundedIcon],svg[material-symbols-light-close-small-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12.727l-3.244 3.252q-.161.16-.358.15t-.358-.17t-.16-.363t.16-.363L11.274 12L8.04 8.782q-.16-.161-.16-.367t.16-.368t.364-.16q.204 0 .363.16L12 11.298l3.219-3.252q.161-.16.358-.16t.358.16q.165.166.165.367t-.165.36L12.702 12l3.252 3.244q.16.161.16.358t-.16.358q-.166.165-.367.165t-.36-.165z"></svg:path>`,
})
export class MaterialSymbolsLightCloseSmallRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
