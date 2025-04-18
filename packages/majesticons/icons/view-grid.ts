import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewGridIcon],svg[majesticons-view-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 7a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm2 3a2 2 0 1 0 0 4h2a2 2 0 1 0 0-4H4zm5-8a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2zm2 3a2 2 0 1 0 0 4h2a2 2 0 1 0 0-4h-2zm-2 7a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2zm9-12a2 2 0 1 0 0 4h2a2 2 0 1 0 0-4h-2zm-2 7a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2zm2 3a2 2 0 1 0 0 4h2a2 2 0 1 0 0-4h-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsViewGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
