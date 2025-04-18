import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathSecIcon],svg[tabler-math-sec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15c.345.6 1.258 1 2 1a2 2 0 1 0 0-4a2 2 0 1 1 0-4c.746 0 1.656.394 2 1m14 1a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0m-7-6h-4v8h4m-4-4h2.5"></svg:path>`,
})
export class TablerMathSecIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
