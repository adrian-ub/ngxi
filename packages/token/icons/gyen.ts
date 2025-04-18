import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenGyenIcon],svg[token-gyen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12c0 2.984-4.027 5.4-9 5.4S3 14.984 3 12c0-2.983 4.027-5.4 9-5.4c3.33 0 6.241 1.085 7.794 2.7h-3.677c-.99-.828-2.466-1.35-4.117-1.35c-2.984 0-5.4 1.71-5.4 3.825S9.016 15.6 12 15.6c2.43 0 4.486-1.138 5.162-2.7h-5.175a.894.894 0 0 1-.887-.9c0-.495.396-.9.891-.9h8.883q.127.44.126.9"></svg:path>`,
})
export class TokenGyenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
