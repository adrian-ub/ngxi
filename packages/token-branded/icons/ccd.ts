import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCcdIcon],svg[token-branded-ccd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 15.712a3.704 3.704 0 1 0-.001-7.409a3.704 3.704 0 0 0 0 7.409"></svg:path><svg:path d="M14.644 6.218a6.366 6.366 0 0 0-8.996 5.763c0 3.519 2.895 6.376 6.403 6.376c.926 0 1.8-.206 2.593-.56v2.825a9.056 9.056 0 0 1-11.642-8.641a9.012 9.012 0 0 1 11.642-8.589zm5.557 9.478h-3.043a6.35 6.35 0 0 0 0-7.43h3.037a9 9 0 0 1 0 7.43z"></svg:path>`,
})
export class TokenBrandedCcdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
