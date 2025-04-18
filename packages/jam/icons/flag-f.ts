import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFlagFIcon],svg[jam-flag-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2v7a1 1 0 0 1-2 0V1a1 1 0 1 1 2 0"></svg:path>`,
})
export class JamFlagFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
