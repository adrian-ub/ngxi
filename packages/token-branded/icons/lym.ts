import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLymIcon],svg[token-branded-lym-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FDC5CA" d="M9.315 17.72L3.062 6.769c.012 0-.456-1.265 1.008-1.265h4.033a1.33 1.33 0 0 1 1.224.633C9.77 6.866 16 17.83 16 17.83l-5.353.669a1.43 1.43 0 0 1-1.332-.778"></svg:path><svg:path fill="#fff" d="m10.522 16.127l3.876-6.505S14.707 9 15.682 9h4.111s1.704.036 1.062 1.137c-.642 1.114-4.543 7.68-4.543 7.68s-.259.682-1.309.682H9.992s-.926-.036-.235-1.15s.766-1.222.766-1.222"></svg:path></svg:g>`,
})
export class TokenBrandedLymIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
