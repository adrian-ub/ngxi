import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenTvkIcon],svg[token-tvk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.633 20.25c-.204.342-.408.75-.882.75c-.408 0-.744-.408-.948-.75L3.78 5.52c-.198-.408-.402-.816-.474-1.29C3.24 3.48 3.649 3 4.393 3H9.9c.744 0 1.29.342 1.698 1.092c.882 1.77 1.494 3.27 2.646 4.908c2.718 3.066 5.37 0 6.456-1.23z"></svg:path>`,
})
export class TokenTvkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
