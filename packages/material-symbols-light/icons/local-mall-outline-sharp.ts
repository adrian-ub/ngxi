import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalMallOutlineSharpIcon],svg[material-symbols-light-local-mall-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V7h4q0-1.671 1.165-2.835Q10.329 3 12 3t2.836 1.165T16 7h4v14zm1-1h14V8H5zm7-7q1.671 0 2.836-1.164Q16 10.67 16 9h-1q0 1.25-.875 2.125T12 12t-2.125-.875T9 9H8q0 1.671 1.165 2.836Q10.329 13 12 13M9 7h6q0-1.25-.875-2.125T12 4t-2.125.875T9 7M5 20V8z"></svg:path>`,
})
export class MaterialSymbolsLightLocalMallOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
