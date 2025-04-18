import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibPlexIcon],svg[cib-plex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.527 0H6.24l10.239 16L6.24 32h9.287L25.76 16z"></svg:path>`,
})
export class CibPlexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
