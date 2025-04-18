import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathXMinusXIcon],svg[tabler-math-x-minus-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 9l6 6m-6 0l6-6m8 0l6 6m-6 0l6-6m-12 3h4"></svg:path>`,
})
export class TablerMathXMinusXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
