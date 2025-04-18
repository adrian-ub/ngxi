import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBmexIcon],svg[token-bmex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.937 4.688L3 19.313h3.375l2.25-9h3.64l1.422-5.625zM17.44 19.313L21 4.688h-3.375l-2.25 9H12l-1.687 5.624z"></svg:path>`,
})
export class TokenBmexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
