import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddRowAboveIcon],svg[material-symbols-add-row-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22v-8h18v8zm0-10V4h4.1q-.05.25-.075.488T7 5q0 2.075 1.45 3.538T12 10t3.55-1.463T17 5q0-.275-.025-.513T16.9 4H21v8zm8-4V6H9V4h2V2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsAddRowAboveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
