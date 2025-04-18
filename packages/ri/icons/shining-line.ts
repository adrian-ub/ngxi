import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShiningLineIcon],svg[ri-shining-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11c5.523 0 10-4.477 10-10h2c0 5.523 4.477 10 10 10v2c-5.523 0-10 4.477-10 10h-2c0-5.523-4.477-10-10-10zm4.803 1A12.04 12.04 0 0 1 12 18.197A12.04 12.04 0 0 1 18.197 12A12.04 12.04 0 0 1 12 5.803A12.04 12.04 0 0 1 5.803 12"></svg:path>`,
})
export class RiShiningLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
