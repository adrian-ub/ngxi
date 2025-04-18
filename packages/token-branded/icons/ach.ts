import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAchIcon],svg[token-branded-ach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#020041" d="M14.647 8.728L12 4.058l-2.647 4.67v6.258a4.72 4.72 0 0 1 3.335-1.398c.694 0 1.36.159 1.959.44zm1.588 2.806v8.407H21zm-1.588 8.407h-5.03a3.441 3.441 0 0 1 5.03-4.225zm-6.882 0H3l4.765-8.407z"></svg:path>`,
})
export class TokenBrandedAchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
