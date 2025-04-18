import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laAngleDoubleRightIcon],svg[la-angle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.094 4.781L7.688 6.22l9.78 9.78l-9.78 9.781l1.406 1.438L20.313 16zm7 0L14.687 6.22L24.47 16l-9.782 9.781l1.407 1.438L27.312 16z"></svg:path>`,
})
export class LaAngleDoubleRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
