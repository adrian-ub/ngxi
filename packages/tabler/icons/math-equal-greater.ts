import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathEqualGreaterIcon],svg[tabler-math-equal-greater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 18l14-4M5 14l14-4L5 6"></svg:path>`,
})
export class TablerMathEqualGreaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
