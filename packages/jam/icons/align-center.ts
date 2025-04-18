import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamAlignCenterIcon],svg[jam-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2m0 8h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamAlignCenterIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
