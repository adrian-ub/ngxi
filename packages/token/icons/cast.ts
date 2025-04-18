import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCastIcon],svg[token-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.969 12a3.375 3.375 0 1 0 6.75 0a3.375 3.375 0 0 0-6.75 0"></svg:path><svg:path fill="currentColor" d="M19.481 6.443A9.3 9.3 0 0 0 12.35 3a9.04 9.04 0 0 0-9.068 9c0 4.973 4.067 9 9.068 9c2.807 0 5.332-1.322 7.132-3.442l-2.087-2.07a6.18 6.18 0 0 1-10.099.195A6.2 6.2 0 0 1 6.094 12a6.188 6.188 0 0 1 11.3-3.487z"></svg:path>`,
})
export class TokenCastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
