import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLinejoinRoundOutlineIcon],svg[lsicon-linejoin-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 13.5h5.5V8A5.5 5.5 0 0 0 8 2.5H2.5V8H8z"></svg:path>`,
})
export class LsiconLinejoinRoundOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
