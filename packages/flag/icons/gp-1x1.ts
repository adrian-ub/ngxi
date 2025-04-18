import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGp1x1Icon],svg[flag-gp-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h512v512H0z"></svg:path><svg:path fill="#000091" d="M0 0h170.7v512H0z"></svg:path><svg:path fill="#e1000f" d="M341.3 0H512v512H341.3z"></svg:path>`,
})
export class FlagGp1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
