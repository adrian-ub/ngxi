import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMasksTheaterIcon],svg[tabler-masks-theater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.192 9h6.616a2 2 0 0 1 1.992 2.183l-.567 6.182A4 4 0 0 1 17.25 21h-1.5a4 4 0 0 1-3.983-3.635l-.567-6.182A2 2 0 0 1 13.192 9M15 13h.01M18 13h.01"></svg:path><svg:path d="M15 16.5q1.5 1 3 0m-9.368-.518A4 4 0 0 1 8.25 16h-1.5a4 4 0 0 1-3.983-3.635L2.2 6.183A2 2 0 0 1 4.192 4h6.616a2 2 0 0 1 2 2M6 8h.01M9 8h.01"></svg:path><svg:path d="M6 12q1.146-.765 2.291-.36"></svg:path></svg:g>`,
})
export class TablerMasksTheaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
