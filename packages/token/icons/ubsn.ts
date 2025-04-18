import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenUbsnIcon],svg[token-ubsn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.875 14.625l-6-3.75v-1.5l6 3.75z"></svg:path><svg:path fill="currentColor" d="M7.875 9.375H21v1.5H7.875zm6 5.25H3v-1.5h10.875z"></svg:path>`,
})
export class TokenUbsnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
