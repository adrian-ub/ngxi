import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsStarFullIcon],svg[zondicons-star-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"></svg:path>`,
})
export class ZondiconsStarFullIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
