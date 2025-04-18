import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNosIcon],svg[token-branded-nos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0DE90B" d="M3 19.875h1.687V6.802c0-.663 1.047-1.333 1.755-.517l6.12 11.903h-2.25L7.22 12H5.25l3.937 7.875h6.2L8.09 5.576s-.72-1.44-2.43-1.44S3 5.88 3 6.403zm18-15.75h-1.688v13.09c0 .657-1.035 1.327-1.743.511L11.437 5.812h2.25L16.781 12h1.969l-3.926-7.875H8.625l7.296 14.31s.72 1.44 2.435 1.44S21 18.131 21 17.608z"></svg:path>`,
})
export class TokenBrandedNosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
