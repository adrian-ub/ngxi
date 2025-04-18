import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarOneQuarter28FilledIcon],svg[fluent-star-one-quarter-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 7.355l-.99 2.006l-6.017.874A1.45 1.45 0 0 0 2.75 11.68c0 .365.138.735.44 1.03l4.354 4.244l-1.028 5.993c-.108.63.193 1.18.66 1.474c.41.257.946.316 1.444.054L11 23.223z"></svg:path>`,
})
export class FluentStarOneQuarter28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
