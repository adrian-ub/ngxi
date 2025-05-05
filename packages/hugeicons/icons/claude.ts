import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsClaudeIcon],svg[hugeicons-claude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m13 12l5.5-7M7.64 3l4.86 9l1.187-9M4.484 6.717L11.987 12M3 12l8.987.473m.237.704L7 20m-2.158-3.132l6.44-3.892M11.5 21l1.165-7.823M21 14l-7.815-1.332M21 10.578l-8 1.744m3.779 7.324l-3.891-6.269m6.469 4.83l-6.044-5.218" color="currentColor"></svg:path>`,
})
export class HugeiconsClaudeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
