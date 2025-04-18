import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBuildingIcon],svg[jam-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h7a3 3 0 0 1 3 3v17H0V3a3 3 0 0 1 3-3M2 18h9V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zM4 4h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2m0 3h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2m0 3h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m0 3h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m4-9h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2m0 3h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2m0 3h1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m0 3h1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m-3 3h3a1 1 0 0 1 1 1v1H4v-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamBuildingIcon {
  readonly viewBox = input("-5.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
