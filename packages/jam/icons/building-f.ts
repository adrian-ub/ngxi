import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBuildingFIcon],svg[jam-building-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v-3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3H0V3a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v17zM4 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm4-9a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamBuildingFIcon {
  readonly viewBox = input("-5.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
