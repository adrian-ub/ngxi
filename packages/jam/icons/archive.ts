import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArchiveIcon],svg[jam-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h16V2H2zm16 2v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zM4 18h12V7H4zm4-4h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamArchiveIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
