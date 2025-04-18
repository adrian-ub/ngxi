import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathPiIcon],svg[tabler-math-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20V4m10 0v16m3-16H4"></svg:path>`,
})
export class TablerMathPiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
