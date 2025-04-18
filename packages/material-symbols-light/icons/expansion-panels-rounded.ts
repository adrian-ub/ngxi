import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExpansionPanelsRoundedIcon],svg[material-symbols-light-expansion-panels-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.88l-2.24-2.24q-.147-.146-.345-.155t-.363.156t-.165.356t.165.357l2.383 2.388q.242.243.565.243t.566-.243l2.388-2.388q.146-.146.155-.347t-.155-.366t-.357-.166t-.357.166zm0-7.76l2.24 2.24q.147.146.345.156q.198.009.363-.156q.166-.166.166-.357t-.166-.357l-2.382-2.388q-.243-.243-.566-.243t-.565.243L9.046 9.646q-.146.146-.153.344q-.007.199.159.364q.165.165.357.165t.356-.165zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightExpansionPanelsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
