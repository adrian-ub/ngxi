import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamIceCreamIcon],svg[jam-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a3 3 0 0 0-3-3m1 12v5a1 1 0 0 1-2 0v-5H3a3 3 0 0 1-3-3V5a5 5 0 1 1 10 0v6a3 3 0 0 1-3 3z"></svg:path>`,
})
export class JamIceCreamIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
