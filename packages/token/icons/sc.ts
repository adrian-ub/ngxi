import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenScIcon],svg[token-sc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.813 14.813V12A2.813 2.813 0 1 0 12 14.813zM12 6.937a5.063 5.063 0 1 0 0 10.125h4.5a.56.56 0 0 0 .563-.562V12A5.06 5.06 0 0 0 12 6.938" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 3.563a8.438 8.438 0 1 0 0 16.875a8.438 8.438 0 0 0 0-16.875M3 12a9 9 0 0 1 9-9a9 9 0 0 1 9 9a9 9 0 0 1-9 9a9 9 0 0 1-9-9"></svg:path><svg:path fill="currentColor" d="M6.094 7.5a1.406 1.406 0 1 0 0-2.813a1.406 1.406 0 0 0 0 2.813"></svg:path>`,
})
export class TokenScIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
