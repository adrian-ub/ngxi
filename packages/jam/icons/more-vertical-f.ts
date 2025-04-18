import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMoreVerticalFIcon],svg[jam-more-vertical-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 14a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-7a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class JamMoreVerticalFIcon {
  readonly viewBox = input("-9 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
