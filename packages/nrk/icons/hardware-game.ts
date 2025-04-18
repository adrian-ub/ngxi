import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwareGameIcon],svg[nrk-hardware-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23 21h-6l-1-4H8l-1 4H1V3h22zM6.438 15l-1 4H3V5h18v14h-2.438l-1-4zM9 9V7H7v2H5v2h2v2h2v-2h2V9zm6 1a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-2 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path>`,
})
export class NrkHardwareGameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
