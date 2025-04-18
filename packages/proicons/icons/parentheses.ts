import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsParenthesesIcon],svg[proicons-parentheses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 20.25a11.7 11.7 0 0 1-2.59-3.785c-.6-1.416-.91-2.933-.91-4.465s.31-3.05.91-4.465S7.14 4.833 8.25 3.75m7.5 16.5a11.7 11.7 0 0 0 2.59-3.785c.6-1.416.91-2.933.91-4.465s-.31-3.05-.91-4.465a11.7 11.7 0 0 0-2.59-3.785"></svg:path>`,
})
export class ProiconsParenthesesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
