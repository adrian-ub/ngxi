import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathXDivideYIcon],svg[tabler-math-x-divide-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 3l6 6M9 9l6-6M9 15l3 4.5m3-4.5l-4.5 7M5 12h14"></svg:path>`,
})
export class TablerMathXDivideYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
