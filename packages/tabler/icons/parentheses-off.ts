import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerParenthesesOffIcon],svg[tabler-parentheses-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.743 5.745A12.25 12.25 0 0 0 7 20M17 4a12.25 12.25 0 0 1 2.474 11.467m-1.22 2.794A12.3 12.3 0 0 1 17 20M3 3l18 18"></svg:path>`,
})
export class TablerParenthesesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
