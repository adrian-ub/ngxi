import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVthoIcon],svg[token-branded-vtho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C1CDDC" d="M17.684 3H15.22l-5.646 7.796h1.772L6.828 21l10.42-11.842h-4.414z"></svg:path><svg:path fill="#2A5285" d="M6.316 12.947L10.166 3h5.152l-4.4 7.105h3.936L6.808 21l3.358-8.053z"></svg:path></svg:g>`,
})
export class TokenBrandedVthoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
