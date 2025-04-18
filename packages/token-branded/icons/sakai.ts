import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSakaiIcon],svg[token-branded-sakai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#348AA7" d="M8 9.75v-4.5L4 7.5z"></svg:path><svg:path fill="#55CF98" d="M12 7.5L8 9.75v4.5l4 2.25z"></svg:path><svg:path fill="#1A6882" d="m4 7.5l4 2.25v4.5L4 16.5z"></svg:path><svg:path fill="#76E8B5" d="m8 5.25l4 2.25l-4 2.25z"></svg:path><svg:path fill="#12556B" d="m4 16.5l4-2.25l4 2.25V21z"></svg:path><svg:path fill="#BCE784" d="M16 5.25L12 7.5L8 5.25L12 3z"></svg:path><svg:path fill="#48B081" d="m12 7.5l4 2.25v4.5l-4 2.25z"></svg:path><svg:path fill="#1A6882" d="m20 7.5l-4 2.25v4.5l4 2.25z"></svg:path><svg:path fill="#57C795" d="M16 5.25L12 7.5l4 2.25z"></svg:path><svg:path fill="#0D3E4F" d="m20 16.5l-4-2.25l-4 2.25V21z"></svg:path><svg:path fill="#348AA7" d="M16 9.75v-4.5l4 2.25z"></svg:path></svg:g>`,
})
export class TokenBrandedSakaiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
