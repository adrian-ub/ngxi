import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsRightIcon],svg[ls-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 361L2 115L121 0l354 355l-363 362L0 606z"></svg:path>`,
})
export class LsRightIcon {
  readonly viewBox = input("0 0 475 717")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
