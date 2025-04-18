import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathSinIcon],svg[tabler-math-sin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15c.345.6 1.258 1 2 1a2 2 0 1 0 0-4a2 2 0 1 1 0-4c.746 0 1.656.394 2 1m4-1v8m4 0V8l4 8V8"></svg:path>`,
})
export class TablerMathSinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
