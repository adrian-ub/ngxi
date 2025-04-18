import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonalPrismOffIcon],svg[tabler-hexagonal-prism-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m20.792 6.996l-3.775 2.643A2 2 0 0 1 15.87 10H14m-4 0H8.13c-.41 0-.81-.126-1.146-.362L3.21 6.997M8 10v11m8-11v2m0 4v5"></svg:path><svg:path d="M20.972 16.968a2 2 0 0 0 .028-.337V7.369c0-.655-.318-1.268-.853-1.643L16.78 3.363A2 2 0 0 0 15.633 3H8.367a2 2 0 0 0-1.066.309M4.956 4.952l-1.103.774A2 2 0 0 0 3 7.37v9.261c0 .655.318 1.269.853 1.644l3.367 2.363A2 2 0 0 0 8.367 21h7.265c.41 0 .811-.126 1.147-.363l2.26-1.587M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHexagonalPrismOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
