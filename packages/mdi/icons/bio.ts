import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBioIcon],svg[mdi-bio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 2v3h3v-3zM2 7h5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2zm2 2v3h3V9zm0 8h3v-3H4zm7-4h2v6h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class MdiBioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
