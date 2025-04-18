import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPriorityRoundedIcon],svg[material-symbols-light-priority-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20q-2.077 0-3.538-1.461T4 15V9q0-2.077 1.462-3.538T9 4h6q2.077 0 3.539 1.462T20 9v6q0 2.077-1.461 3.539T15 20zm2-6.108l-1.846-1.846q-.14-.14-.344-.15t-.364.15t-.16.354t.16.354l1.988 1.988q.243.242.566.242t.566-.242l4.388-4.388q.14-.14.15-.344t-.15-.364t-.354-.16t-.354.16z"></svg:path>`,
})
export class MaterialSymbolsLightPriorityRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
