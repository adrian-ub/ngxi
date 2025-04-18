import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenWeltIcon],svg[token-welt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.187 3.493a1.09 1.09 0 0 1-.322 1.516L6.321 13.19a1.092 1.092 0 0 1-1.189-1.832l12.544-8.181a1.09 1.09 0 0 1 1.511.321zm-5.28 16.144a1.364 1.364 0 1 1-2.727 0a1.364 1.364 0 0 1 2.728 0m4.964-9.447a1.093 1.093 0 1 0-1.2-1.827L5.127 16.544a1.092 1.092 0 1 0 1.2 1.827z"></svg:path>`,
})
export class TokenWeltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
