import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDsethIcon],svg[token-dseth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.632 16.557l-5.21-3.135L9.632 21zm4.736 0l5.21-3.135L14.368 21zm-2.367-7.163V3l-5.21 8.526z"></svg:path><svg:path fill="currentColor" d="M12.001 9.157v5.684l-5.21-3.315zm0 .237V3l5.21 8.526z"></svg:path><svg:path fill="currentColor" d="M11.999 9.158v5.684l5.21-3.316z"></svg:path>`,
})
export class TokenDsethIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
