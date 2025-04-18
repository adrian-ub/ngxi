import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiElevatorUpIcon],svg[mdi-elevator-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l4 4H8v4H6V6H3zm10 0l-4 4h3v4h2V6h3zM7 12h10a2 2 0 0 1 2 2v6c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2m0 2v6h10v-6z"></svg:path>`,
})
export class MdiElevatorUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
