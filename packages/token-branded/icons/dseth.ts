import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDsethIcon],svg[token-branded-dseth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FDFEFF" d="m9.632 16.557l-5.21-3.135L9.632 21z"></svg:path><svg:path fill="#B6C5C2" d="m14.368 16.557l5.21-3.135L14.368 21z"></svg:path><svg:path fill="#FDFEFF" d="M12.001 9.394V3l-5.21 8.526z"></svg:path><svg:path fill="#B6C5C2" d="M12.001 9.157v5.684l-5.21-3.315zm0 .237V3l5.21 8.526z"></svg:path><svg:path fill="#869193" d="M12 9.158v5.684l5.21-3.316z"></svg:path></svg:g>`,
})
export class TokenBrandedDsethIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
