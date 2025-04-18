import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsServerIcon],svg[majesticons-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3H2zm0 5v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3zm4-6a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2zm-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m4-9a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2zm-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsServerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
