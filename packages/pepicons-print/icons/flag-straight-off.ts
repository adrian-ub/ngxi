import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintFlagStraightOffIcon],svg[pepicons-print-flag-straight-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".2"><svg:path d="M4 4.5a1 1 0 0 1 1-1h13.08a1 1 0 0 1 .819 1.573L16.6 8.357a.25.25 0 0 0 0 .286l2.299 3.284a1 1 0 0 1-.82 1.573H5a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M5 4.5a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0v-13a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M16.58 3H3.5v8h13.08l-2.3-3.283a1.25 1.25 0 0 1 0-1.434zM3.5 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.08a1 1 0 0 0 .819-1.573L15.1 7.143a.25.25 0 0 1 0-.286l2.3-3.284A1 1 0 0 0 16.579 2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 3a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0v-14A.5.5 0 0 1 3 3" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintFlagStraightOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
