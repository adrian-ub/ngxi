import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenOptopiaIcon],svg[token-optopia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.318 15.614a4.5 4.5 0 1 1 4.932.284v-.893l-4.032 2.373v1.953l-.9.9zm.9.72l4.032-2.373V9.534l-4.032 2.378zM21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path>`,
})
export class TokenOptopiaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
