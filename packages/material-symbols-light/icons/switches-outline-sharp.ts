import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchesOutlineSharpIcon],svg[material-symbols-light-switches-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.385 16q-1.671 0-2.836-1.164Q3.384 13.67 3.384 12T4.55 9.165T7.384 8q1.126 0 2.037.55T10.846 10h9.77v4h-9.77q-.513.9-1.425 1.45T7.385 16m3.861-3h8.37v-2h-8.37q.07.225.104.5t.035.5t-.035.5t-.104.5m-3.861 2q1.25 0 2.125-.875T10.385 12T9.51 9.875T7.385 9t-2.125.875T4.385 12t.875 2.125T7.385 15"></svg:path>`,
})
export class MaterialSymbolsLightSwitchesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
