import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenVictionIcon],svg[token-viction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v7.788a36.4 36.4 0 0 1-9 1.123c-3.108 0-6.124-.39-9-1.123V3a36.4 36.4 0 0 0 9 1.123c3.108 0 6.124-.39 9-1.123M3 21v-7.788a36.4 36.4 0 0 1 9-1.123c3.108 0 6.124.39 9 1.123V21a36.4 36.4 0 0 0-9-1.123c-3.108 0-6.124.39-9 1.123"></svg:path>`,
})
export class TokenVictionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
