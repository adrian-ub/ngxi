import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamIdCardIcon],svg[jam-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 2v10h16V2zm9 2h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2m0 3h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2M4 4h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamIdCardIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
