import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBeerFIcon],svg[jam-beer-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6h13a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3zM.035 4a3.5 3.5 0 0 1 3.632-2.996A4.5 4.5 0 0 1 10.973 4zM4 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4 0v5h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"></svg:path>`,
})
export class JamBeerFIcon {
  readonly viewBox = input("-4 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
