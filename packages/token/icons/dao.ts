import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDaoIcon],svg[token-dao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19.03L9.349 7.378l5.604-2.432l-6.358 11.641zm6.33-2.656l4.816-8.85l2.758 2.667l-4.767 8.863zm8.104-5.926L21 11.737l-1.785 3.225l-4.325.146z"></svg:path>`,
})
export class TokenDaoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
