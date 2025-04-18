import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPlexIcon],svg[mdi-plex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm4.56 4h3.5l3.44 6l-3.44 6h-3.5L12 12z"></svg:path>`,
})
export class MdiPlexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
