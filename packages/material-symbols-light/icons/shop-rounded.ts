import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShopRoundedIcon],svg[material-symbols-light-shop-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.242 16.27l3.285-2.093q.373-.242.373-.677t-.373-.677l-3.285-2.092q-.403-.267-.823-.04q-.419.226-.419.711v4.196q0 .485.42.712q.419.227.822-.04M4.615 20q-.69 0-1.153-.462T3 18.384V7.808q0-.348.23-.578T3.808 7H9V5.615q0-.69.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h5.192q.349 0 .578.23t.23.578v10.577q0 .69-.462 1.153T19.385 20zM10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615z"></svg:path>`,
})
export class MaterialSymbolsLightShopRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
