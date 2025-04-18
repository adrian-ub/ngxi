import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGh1x1Icon],svg[flag-gh-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#006b3f" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fcd116" d="M0 0h512v341.3H0z"></svg:path><svg:path fill="#ce1126" d="M0 0h512v170.7H0z"></svg:path><svg:path fill="#000001" d="m256 170.7l55.5 170.6L166.3 236h179.4L200.6 341.3z"></svg:path>`,
})
export class FlagGh1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
