import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsStarIcon],svg[humbleicons-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m12 2l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545L12 17l-5.878 3.09l1.123-6.545L2.489 8.91l6.572-.955z"></svg:path>`,
})
export class HumbleiconsStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
