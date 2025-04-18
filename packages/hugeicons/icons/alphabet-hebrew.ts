import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlphabetHebrewIcon],svg[hugeicons-alphabet-hebrew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 3c3.5 7.714 9.917 10.286 14 18"></svg:path><svg:path d="M15 15c3.759-2.25 4-6.212 4-8c0-2.667-.667-4-.667-4M5.727 21S5 19.643 5 16.93c0-1.76.246-5.584 3.962-7.906"></svg:path></svg:g>`,
})
export class HugeiconsAlphabetHebrewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
