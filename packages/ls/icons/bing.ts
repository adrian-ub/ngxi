import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBingIcon],svg[ls-bing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340 180c188 0 340 101 340 226S528 633 340 633C153 633 1 532 0 407V75h98v172c62-42 147-67 242-67m0 397c131 0 238-76 238-171c0-94-107-171-238-171s-238 77-238 171c0 95 107 171 238 171"></svg:path>`,
})
export class LsBingIcon {
  readonly viewBox = input("0 0 680 633")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
