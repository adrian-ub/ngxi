import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIcecreamRoundedIcon],svg[material-symbols-icecream-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10q0-1.275.738-2.3T5.6 6.25q.45-2.275 2.238-3.763T12 1t4.163 1.488T18.4 6.25q1.125.425 1.863 1.45T21 10q0 1.875-1.325 2.975T16.7 14l-3.775 7.3q-.125.275-.363.4t-.512.125t-.525-.125t-.375-.4L7.35 14q-1.775.075-3.062-1.025T3 10m9.05 8.65l2.7-5.25q-.6.3-1.3.45T12 14q-.675 0-1.362-.15T9.3 13.4z"></svg:path>`,
})
export class MaterialSymbolsIcecreamRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
