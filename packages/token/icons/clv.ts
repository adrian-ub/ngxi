import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenClvIcon],svg[token-clv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"></svg:path><svg:path fill="currentColor" d="M12 16.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0m9-9a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"></svg:path><svg:path fill="currentColor" d="M21 16.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"></svg:path>`,
})
export class TokenClvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
