import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miFogIcon],svg[mi-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1m-9 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m3 3a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm12 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM7 18a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-4-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM5 5a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"></svg:path>`,
})
export class MiFogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
