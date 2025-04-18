import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenUbtIcon],svg[token-ubt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5.25L18.75 3h-9v14.625H6.375V5.25H3v13.5L5.25 21h5.625l2.25-2.25h5.625L21 16.5V12l-1.125-1.125L21 9.75zm-7.875 1.125h4.5V9.75h-4.5zm4.5 9h-4.5V12h4.5z"></svg:path>`,
})
export class TokenUbtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
