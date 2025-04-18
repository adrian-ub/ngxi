import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathOffIcon],svg[tabler-math-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 19l2.5-2.5m2-2L20 13M3 3l18 18M19 5h-7l-.646 2.262m-.906 3.169L8 19l-3-6H3"></svg:path>`,
})
export class TablerMathOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
