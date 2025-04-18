import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVlxIcon],svg[token-branded-vlx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15.706 9.882L12 16.5L8.294 9.882zm3.176-2.118H5.118L12 19.941zM3 4.06l1.324 2.117h15.353L21 4.06z"></svg:path>`,
})
export class TokenBrandedVlxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
