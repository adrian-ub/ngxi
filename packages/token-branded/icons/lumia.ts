import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLumiaIcon],svg[token-branded-lumia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.647 11.686H3l5.941-2.76L11.691 3l.006 5.63a3.054 3.054 0 0 1-3.052 3.058zm6.706 0H21l-5.941-2.76L12.309 3l-.006 5.63a3.054 3.054 0 0 0 3.052 3.058zm0 .628H21l-5.941 2.76L12.309 21l-.006-5.63a3.054 3.054 0 0 1 3.052-3.058zm-6.706 0H3l5.941 2.76L11.691 21l.006-5.63a3.054 3.054 0 0 0-3.052-3.058z"></svg:path>`,
})
export class TokenBrandedLumiaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
