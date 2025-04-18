import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMoreHorizontalFIcon],svg[jam-more-horizontal-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 1 1 0-6a3 3 0 0 1 0 6m14 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-7 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class JamMoreHorizontalFIcon {
  readonly viewBox = input("-2 -9 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
