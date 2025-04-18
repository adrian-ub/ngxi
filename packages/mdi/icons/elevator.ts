import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiElevatorIcon],svg[mdi-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l4 4H8v4H6V6H3zm10 8l-4-4h3V2h2v4h3zM7 12h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m0 2v6h10v-6z"></svg:path>`,
})
export class MdiElevatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
