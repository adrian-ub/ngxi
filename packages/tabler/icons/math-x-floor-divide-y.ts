import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathXFloorDivideYIcon],svg[tabler-math-x-floor-divide-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1.5 19l18-18m-15 21l18-18M18 15l3 4m2-4l-4.5 8M1 1l6 6M1 7l6-6"></svg:path>`,
})
export class TablerMathXFloorDivideYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
