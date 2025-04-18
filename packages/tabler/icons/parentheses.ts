import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerParenthesesIcon],svg[tabler-parentheses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4a12.25 12.25 0 0 0 0 16M17 4a12.25 12.25 0 0 1 0 16"></svg:path>`,
})
export class TablerParenthesesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
