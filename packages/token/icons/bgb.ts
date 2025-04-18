import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBgbIcon],svg[token-bgb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.364 8.188a1.296 1.296 0 0 0 0 1.8l5.49 5.648h3.607l-5.297-5.454h6.14L9.878 7.758H6.394l5.297-5.455H8.085zm15.557 7.448l-5.618 6.06h3.612l5.721-6.169a1.403 1.403 0 0 0 0-1.885l-5.454-5.884H12.57l5.06 5.454h-5.933l2.424 2.424z"></svg:path>`,
})
export class TokenBgbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
