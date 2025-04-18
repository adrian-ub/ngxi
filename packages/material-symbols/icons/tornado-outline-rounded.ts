import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTornadoOutlineRoundedIcon],svg[material-symbols-tornado-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.475 3h15.05q1.175 0 1.738 1t-.013 2l-7.525 13Q13.15 20 12 20t-1.725-1L2.75 6q-.575-1-.012-2t1.737-1m0 2L6.2 8h11.6l1.725-3zm2.9 5L9.1 13h5.8l1.725-3zm2.9 5L12 18l1.725-3z"></svg:path>`,
})
export class MaterialSymbolsTornadoOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
