import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStockpotIcon],svg[material-symbols-light-stockpot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.423 19q-1.01 0-1.716-.707T4 16.577V7.981h16v8.596q0 1.01-.707 1.716T17.577 19zM4 6.596v-1h5.5v-.769q0-.351.23-.59T10.317 4h3.366q.358 0 .587.238t.23.589v.77H20v1z"></svg:path>`,
})
export class MaterialSymbolsLightStockpotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
