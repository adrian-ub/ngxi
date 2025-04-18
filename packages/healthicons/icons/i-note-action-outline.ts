import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsINoteActionOutlineIcon],svg[healthicons-i-note-action-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M26 6a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1h-6V8h6V7a1 1 0 0 1 1-1"></svg:path><svg:path d="M16 6a1 1 0 0 0-1 1v1h-2a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h17a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3h-1v2h1a1 1 0 0 1 1 1v24a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h2v1a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1"></svg:path><svg:path d="M14 19a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1"></svg:path><svg:path d="M13 40a5 5 0 0 1-5-5V10H6v25a7 7 0 0 0 7 7h17v-2z"></svg:path><svg:path fill-rule="evenodd" d="M36 13a3 3 0 1 1 6 0v20.303l-3 4.5l-3-4.5zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m0 22.197l1-1.5V17h-2v15.697z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsINoteActionOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
