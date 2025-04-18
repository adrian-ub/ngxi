import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenOxenIcon],svg[token-oxen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 12L3 4.2h18zm0 0l-9 7.8h18z" clip-rule="evenodd"></svg:path>`,
})
export class TokenOxenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
