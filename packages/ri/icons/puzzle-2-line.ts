import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPuzzle2LineIcon],svg[ri-puzzle-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a4 4 0 1 1 8 0h5a1 1 0 0 1 1 1v4.17a1 1 0 0 1-1.333.944a2 2 0 1 0 0 3.773a1 1 0 0 1 1.333.942V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4-2a2 2 0 0 0-1.886 2.667A1 1 0 0 1 8.17 7H5v12h14v-2a4 4 0 0 1 0-8V7h-5.17a1 1 0 0 1-.944-1.333Q13 5.355 13 5a2 2 0 0 0-2-2"></svg:path>`,
})
export class RiPuzzle2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
