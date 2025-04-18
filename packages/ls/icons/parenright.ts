import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsParenrightIcon],svg[ls-parenright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 981h81c33-76 59-158 76-247s25-180 25-273c0-87-7-170-21-251S126 59 101 0H25c26 62 46 134 61 216c14 81 22 166 22 254c0 95-10 187-29 276S33 914 0 981"></svg:path>`,
})
export class LsParenrightIcon {
  readonly viewBox = input("0 0 182 981")
  readonly width = input("0.19em")
  readonly height = input("1em")
}
