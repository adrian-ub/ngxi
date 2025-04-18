import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPokerChipIcon],svg[tabler-poker-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m5-9v4m0 10v4m-9-9h4m10 0h4m-2.636-6.364l-2.828 2.828m-7.072 7.072l-2.828 2.828m0-12.728l2.828 2.828m7.072 7.072l2.828 2.828"></svg:path></svg:g>`,
})
export class TablerPokerChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
