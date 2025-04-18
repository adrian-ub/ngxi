import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamNewspaperFIcon],svg[jam-newspaper-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m8 2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM3 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm8-10a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></svg:path>`,
})
export class JamNewspaperFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
