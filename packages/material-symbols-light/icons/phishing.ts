import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhishingIcon],svg[material-symbols-light-phishing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.077 20q-2.135 0-3.606-1.529T6 14.788v-4.576l3.558 3.634l-.689.695L7 12.594v2.195q0 1.727 1.185 2.969Q9.369 19 11.077 19t2.892-1.242q1.185-1.242 1.185-2.97V11.46q-.804-.177-1.315-.825q-.512-.646-.512-1.481t.502-1.491t1.325-.834V3h1v3.829q.823.177 1.335.834T18 9.153q0 .836-.512 1.486t-1.334.82v3.33q0 2.153-1.471 3.682T11.077 20"></svg:path>`,
})
export class MaterialSymbolsLightPhishingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
