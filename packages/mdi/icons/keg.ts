import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKegIcon],svg[mdi-keg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22v-2h1v-4H5v-2h1v-3H5V7h6V3h-1V2h4v1h-1v4h6v4h-1v3h1v2h-1v4h1v2zM17 9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1"></svg:path>`,
})
export class MdiKegIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
