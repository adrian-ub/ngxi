import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarHalf16FilledIcon],svg[fluent-star-half-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.6a.89.89 0 0 0-.806.501L5.673 5.183l-3.401.495a.9.9 0 0 0-.5 1.535l2.462 2.399l-.581 3.387a.9.9 0 0 0 1.306.949L8 12.349z"></svg:path>`,
})
export class FluentStarHalf16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
