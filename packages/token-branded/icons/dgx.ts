import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDgxIcon],svg[token-branded-dgx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C2A059" d="m12 10.875l5.063 5.063L12 21z"></svg:path><svg:path fill="#E3C88E" d="M12 10.875V21l-5.062-5.062z"></svg:path><svg:path fill="#243961" d="M12 3v6.598l-5.726 5.777L3 12.073z"></svg:path><svg:path fill="#131F35" d="m12 3l9 9.073l-3.274 3.302L12 9.598z"></svg:path></svg:g>`,
})
export class TokenBrandedDgxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
