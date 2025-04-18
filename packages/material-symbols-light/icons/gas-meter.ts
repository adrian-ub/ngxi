import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGasMeterIcon],svg[material-symbols-light-gas-meter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21q-1.237 0-2.119-.881T5 18V8q0-1.237.881-2.119T8 5h1.5V3h1v2h3V3h1v2H16q1.238 0 2.119.881T19 8v10q0 1.238-.881 2.119T16 21zm.5-11.5h7v-1h-7zm3.497 7.827q.822 0 1.394-.568q.57-.569.57-1.36q0-.635-.372-1.098q-.373-.462-1.589-1.878q-1.229 1.416-1.595 1.882q-.366.467-.366 1.089q0 .796.567 1.365q.568.568 1.39.568"></svg:path>`,
})
export class MaterialSymbolsLightGasMeterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
