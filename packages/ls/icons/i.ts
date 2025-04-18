import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsIIcon],svg[ls-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82 82H0V0h82zm-5 608H5V164h72z"></svg:path>`,
})
export class LsIIcon {
  readonly viewBox = input("0 0 82 690")
  readonly width = input("0.12em")
  readonly height = input("1em")
}
