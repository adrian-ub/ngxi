import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRgtIcon],svg[token-rgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 17.294a5.294 5.294 0 1 0 0-10.588a5.294 5.294 0 0 0 0 10.588m0-.53a4.765 4.765 0 1 0 0-9.53a4.765 4.765 0 0 0 0 9.53"></svg:path><svg:path d="M8.56 17.96a6.882 6.882 0 1 0 6.882-11.92A6.882 6.882 0 0 0 8.56 17.96m3.44.392a6.353 6.353 0 1 0 0-12.706a6.353 6.353 0 0 0 0 12.706"></svg:path><svg:path d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0-.53A8.47 8.47 0 0 0 20.47 12A8.47 8.47 0 0 0 12 3.53A8.47 8.47 0 0 0 3.53 12A8.47 8.47 0 0 0 12 20.47"></svg:path></svg:g>`,
})
export class TokenRgtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
