import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenIdiaIcon],svg[token-idia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.97 3.562v16.03c0 .529.422.838.843.838c.31 0 .62-.169.771-.529l6.282-15.76A.836.836 0 0 0 12.09 3H5.532a.56.56 0 0 0-.557.562zm4.252 16.683l5.72-14.646a.55.55 0 0 1 .478-.35a.5.5 0 0 1 .36.113c6.418 5.124 2.779 16.07-6.091 15.625a.535.535 0 0 1-.467-.742"></svg:path>`,
})
export class TokenIdiaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
