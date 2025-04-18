import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsUnderscoreIcon],svg[ls-underscore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 737h524v60H0z"></svg:path>`,
})
export class LsUnderscoreIcon {
  readonly viewBox = input("0 0 524 797")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
