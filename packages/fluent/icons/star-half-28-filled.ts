import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarHalf28FilledIcon],svg[fluent-star-half-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.1c-.517 0-1.033.27-1.299.808l-2.69 5.452l-6.018.875c-1.19.173-1.664 1.634-.804 2.473l4.355 4.244l-1.028 5.993c-.203 1.185 1.04 2.088 2.104 1.529L14 21.645z"></svg:path>`,
})
export class FluentStarHalf28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
