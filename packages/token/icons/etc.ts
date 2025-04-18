import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenEtcIcon],svg[token-etc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.577 11.063l5.476-2.235l5.294 2.295L12.037 3zm.015 2.482l5.46 3.075l5.573-3.075L12.105 21zm5.476-3.623l5.542 2.393l-5.542 3l-5.693-3.067l5.7-2.326z"></svg:path>`,
})
export class TokenEtcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
