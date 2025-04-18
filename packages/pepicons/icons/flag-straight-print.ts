import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsFlagStraightPrintIcon],svg[pepicons-flag-straight-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".8"><svg:path d="M4 4.5a1 1 0 0 1 1-1h13.08a1 1 0 0 1 .819 1.573L16.6 8.357a.25.25 0 0 0 0 .286l2.299 3.284a1 1 0 0 1-.82 1.573H5a1 1 0 0 1-1-1v-8Z"></svg:path><svg:path fill-rule="evenodd" d="M5 4.5a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0v-13a1 1 0 0 1 1-1Z" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M16.58 3H3.5v8h13.08l-2.3-3.283a1.25 1.25 0 0 1 0-1.434L16.58 3ZM3.5 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.08a1 1 0 0 0 .819-1.573L15.1 7.143a.25.25 0 0 1 0-.286l2.3-3.284A1 1 0 0 0 16.579 2H3.5Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 3a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0v-14A.5.5 0 0 1 3 3Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsFlagStraightPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
