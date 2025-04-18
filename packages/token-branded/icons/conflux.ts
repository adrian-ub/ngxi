import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedConfluxIcon],svg[token-branded-conflux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="m15.803 13.727l-3.807 3.84l-2.118-2.138l3.807-3.84l-1.694-1.709l-5.517 5.568L11.976 21l5.519-5.567z"></svg:path><svg:path fill="#37A1DB" d="M19.2 10.255L12.01 3L4.8 10.275l.023 3.4l7.156-7.22l7.209 7.273z"></svg:path></svg:g>`,
})
export class TokenBrandedConfluxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
