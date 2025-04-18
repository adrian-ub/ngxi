import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBlastIcon],svg[token-blast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.183 11.894l2.838-1.415L21 7.476l-1.957-1.424H6.013L3 8.29h15.316l-.813 2.518H11.36l-.591 1.841h6.142l-1.725 5.3l2.878-1.425l1.026-3.177l-1.927-1.415z"></svg:path><svg:path fill="currentColor" d="m7.33 15.67l1.774-5.521l-1.967-1.473l-2.955 9.271h11.005l.737-2.276z"></svg:path>`,
})
export class TokenBlastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
