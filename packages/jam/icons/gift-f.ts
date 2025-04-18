import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGiftFIcon],svg[jam-gift-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v-8h6v6a2 2 0 0 1-2 2zM7 6v4H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h.535A4 4 0 0 1 8 1.354A4 4 0 0 1 14.465 6H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9V6zm0 14H3a2 2 0 0 1-2-2v-6h6zM7 6V4a2 2 0 1 0-2 2zm2 0h2a2 2 0 1 0-2-2z"></svg:path>`,
})
export class JamGiftFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
