import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathEqualLowerIcon],svg[tabler-math-equal-lower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 18L5 14m14 0L5 10l14-4"></svg:path>`,
})
export class TablerMathEqualLowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
