import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsShareIcon],svg[ls-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m623 474l75-74v265H0V133h281l-84 72H76v388h547zm-73-121v110l238-222L550 28v109c-460 0-427 427-427 427c90-298 427-211 427-211"></svg:path>`,
})
export class LsShareIcon {
  readonly viewBox = input("0 0 788 665")
  readonly width = input("1.19em")
  readonly height = input("1em")
}
