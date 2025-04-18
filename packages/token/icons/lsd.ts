import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLsdIcon],svg[token-lsd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.924 21c-3.234-3.611-5.31-5.063-7.2-5.063c-1.67 0-3.206 1.16-5.27 2.813l-.979-1.125C8.462 12.73 6.808 10.442 3.844 6.43l.973-1.181C9.58 8.231 13.018 9.671 17.867 3l1.204.832c-1.199 2.655-1.66 4.85-1.632 6.92c.04 3.037 1.215 5.804 2.717 9.365z"></svg:path>`,
})
export class TokenLsdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
