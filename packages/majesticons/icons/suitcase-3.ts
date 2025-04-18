import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSuitcase3Icon],svg[majesticons-suitcase-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3a1 1 0 1 1-2 0H8a1 1 0 1 1-2 0a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm2 0h4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m0 5a1 1 0 0 0-2 0v6a1 1 0 1 0 2 0zm6 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsSuitcase3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
