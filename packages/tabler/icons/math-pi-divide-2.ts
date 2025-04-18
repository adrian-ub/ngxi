import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathPiDivide2Icon],svg[tabler-math-pi-divide-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3m-9-9h14m-9-3V3m4 0v6m1-6H9"></svg:path>`,
})
export class TablerMathPiDivide2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
