import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddBoxRoundedIcon],svg[material-symbols-light-add-box-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 12.5V16q0 .213.144.356t.357.144t.356-.144T12.5 16v-3.5H16q.213 0 .356-.144t.144-.357t-.144-.356T16 11.5h-3.5V8q0-.213-.144-.356t-.357-.144t-.356.144T11.5 8v3.5H8q-.213 0-.356.144t-.144.357t.144.356T8 12.5zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightAddBoxRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
