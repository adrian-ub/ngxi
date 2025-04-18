import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMath1Divide3Icon],svg[tabler-math-1-divide-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15.5a.5.5 0 0 1 .5-.5h2a1.5 1.5 0 0 1 0 3h-1.167H12.5a1.5 1.5 0 0 1 0 3h-2a.5.5 0 0 1-.5-.5M5 12h14m-9-7l2-2v6"></svg:path>`,
})
export class TablerMath1Divide3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
