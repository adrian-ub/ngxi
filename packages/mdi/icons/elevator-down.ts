import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiElevatorDownIcon],svg[mdi-elevator-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 10l4-4H8V2H6v4H3zm10 0l-4-4h3V2h2v4h3zM7 12h10a2 2 0 0 1 2 2v6c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2m0 2v6h10v-6z"></svg:path>`,
})
export class MdiElevatorDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
