import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPoundLineIcon],svg[clarity-pound-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.9 30H13.4a8.45 8.45 0 0 0 1.6-5.35V21h4.31a1 1 0 0 0 0-2H15v-7.69A5.24 5.24 0 0 1 20.21 6A5.2 5.2 0 0 1 24 7.73a1 1 0 0 0 1.48-1.35A7.19 7.19 0 0 0 13 11.31V19H8.72a1 1 0 1 0 0 2H13v3.65c0 4.73-2.88 5.35-3 5.35a1 1 0 0 0 .17 2H27.9a1 1 0 1 0 0-2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPoundLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
