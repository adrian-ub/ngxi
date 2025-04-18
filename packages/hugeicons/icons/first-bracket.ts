import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFirstBracketIcon],svg[hugeicons-first-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 3c-2.411 1.935-4 5.243-4 9s1.589 7.065 4 9M18 3c2.411 1.935 4 5.243 4 9s-1.589 7.065-4 9" color="currentColor"></svg:path>`,
})
export class HugeiconsFirstBracketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
