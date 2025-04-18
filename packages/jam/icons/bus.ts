import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBusIcon],svg[jam-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17H5v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2.535A4 4 0 0 1 0 13V4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9c0 1.48-.804 2.773-2 3.465V19a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm3-8V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5zm0 2H2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM4 3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1m0 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2m8 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamBusIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
