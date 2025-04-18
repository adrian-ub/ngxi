import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPlexAltIcon],svg[cbi-plex-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a1.993 1.993 0 0 0-2 2v16a1.993 1.993 0 0 0 2 2h16a1.993 1.993 0 0 0 2-2V4a1.993 1.993 0 0 0-2-2zm4.56 4h3.5l3.44 6l-3.44 6h-3.5L12 12Z"></svg:path>`,
})
export class CbiPlexAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
