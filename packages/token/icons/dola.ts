import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDolaIcon],svg[token-dola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.563 4.125h-3.05L4.126 18.75h8.438a7.314 7.314 0 0 0 0-14.625m0 1.688h-1.688l-4.219 11.25h5.907a5.625 5.625 0 1 0 0-11.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.406 3h2.312L9.25 21H6.937zm3.375 0h2.312l-6.469 18h-2.312z"></svg:path>`,
})
export class TokenDolaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
