import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVariableMinusIcon],svg[tabler-variable-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9"></svg:path><svg:path d="M5 4C2.5 9 2.5 14 5 20M19 4c1.775 3.55 2.29 7.102 1.544 11.01M9 9h1c1 0 1 1 2.016 3.527c.782 1.966.943 3 1.478 3.343"></svg:path><svg:path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9m0 10h6"></svg:path></svg:g>`,
})
export class TablerVariableMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
