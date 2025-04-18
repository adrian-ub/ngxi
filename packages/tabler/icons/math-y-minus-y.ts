import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathYMinusYIcon],svg[tabler-math-y-minus-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 9l3 5.063M8 9l-4.8 9M16 9l3 5.063M22 9l-4.8 9M10 12h4"></svg:path>`,
})
export class TablerMathYMinusYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
