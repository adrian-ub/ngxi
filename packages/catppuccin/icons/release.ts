import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinReleaseIcon],svg[catppuccin-release-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round" d="M6.047 5.892C2.637 5.334 1.5 8.682 1.5 8.682l2.842.557m5.928.798c.568 3.347-2.842 4.463-2.842 4.463l-.568-2.79"></svg:path><svg:path fill="none" stroke="#7dc4e4" stroke-linecap="round" stroke-linejoin="round" d="M8.888 7.008a1.607 1.578 0 1 1 2.274-2.231a1.607 1.578 0 0 1-2.274 2.23"></svg:path><svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M2.637 10.913c-1.137 1.115-.569 2.789-.569 2.789s1.705.558 2.842-.558"></svg:path><svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="m11.535 8.94l-4.92 2.53l-2.273-2.23l2.577-4.83a4.82 4.82 0 0 1 3.684-2.502l3.356-.405a.478.478 0 0 1 .538.528l-.413 3.294a4.74 4.74 0 0 1-2.549 3.616"></svg:path>`,
})
export class CatppuccinReleaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
