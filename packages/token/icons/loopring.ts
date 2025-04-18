import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLoopringIcon],svg[token-loopring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.993 5.117V18.88L3 13.99zm0 13.766l5.654-4.889l-1.645-2.582H21z"></svg:path>`,
})
export class TokenLoopringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
