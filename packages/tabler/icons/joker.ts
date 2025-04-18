import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerJokerIcon],svg[tabler-joker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 17.5A1.5 1.5 0 0 1 6.5 16h11a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5m7-1.5Q9.5 8 6 8q-2.5 0-3 2c2.953.31 3.308 3.33 4 6m5 0q2.5-8 6-8q2.5 0 3 2c-2.953.31-3.308 3.33-4 6"></svg:path><svg:path d="M9 9.5Q11 6 12 6t3 3.5"></svg:path></svg:g>`,
})
export class TablerJokerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
