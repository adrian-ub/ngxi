import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRoomscomputerIcon],svg[cbi-roomscomputer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 5c.55 0 1 .45 1 1v11H2V6c0-.55.45-1 1-1zM2 20v-1h28v1c0 .55-.45 1-1 1H17v4h2a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2h2v-4H3c-.55 0-1-.45-1-1"></svg:path>`,
})
export class CbiRoomscomputerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
