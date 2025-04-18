import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNftartIcon],svg[token-nftart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.812 4.125v6.188H3v3.374h1.547c.731 0 1.102-.933 1.265-1.783v7.97h3.375v-9.432l6.47 9.433h2.53v-6.188H21v-3.374h-1.547c-.731 0-1.102.933-1.266 1.783V4.125h-3.375v9.54l-6.525-9.54z"></svg:path>`,
})
export class TokenNftartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
