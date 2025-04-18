import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAreaIcon],svg[token-branded-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#B8A874" d="M12 3L7.735 9.632h2.131L12 6.06l2.132 3.572h2.131z"></svg:path><svg:path fill="#A0857C" d="m12 21l-4.264-6.632h2.131L12 17.94l2.132-3.572h2.131z"></svg:path><svg:path fill="#A4A4A4" d="m7.026 11.053l-1.658 1.895h13.264l-1.658-1.895z"></svg:path></svg:g>`,
})
export class TokenBrandedAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
