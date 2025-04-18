import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWwyIcon],svg[token-branded-wwy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M3.121 10.623a.485.485 0 0 1 0-.642a.387.387 0 0 1 .587 0l3.09 3.396a.5.5 0 0 1 0 .642a.387.387 0 0 1-.586 0zm8.372-.642a.5.5 0 0 1 0 .642l-3.09 3.396a.387.387 0 0 1-.587 0a.485.485 0 0 1 0-.642l3.09-3.396a.387.387 0 0 1 .587 0m1.018.642a.485.485 0 0 1 0-.642a.385.385 0 0 1 .454-.1q.077.037.132.1l3.091 3.396a.5.5 0 0 1 0 .642a.387.387 0 0 1-.587 0zm8.372 0a.5.5 0 0 0 0-.642a.387.387 0 0 0-.587 0l-3.09 3.396a.485.485 0 0 0 0 .642a.388.388 0 0 0 .586 0z"></svg:path>`,
})
export class TokenBrandedWwyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
