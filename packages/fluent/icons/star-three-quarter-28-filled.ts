import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarThreeQuarter28FilledIcon],svg[fluent-star-three-quarter-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 7.349l-1.698-3.441c-.532-1.078-2.069-1.078-2.6 0L10.01 9.36l-6.017.875c-1.19.173-1.664 1.634-.804 2.473l4.355 4.244l-1.028 5.993c-.203 1.185 1.04 2.088 2.104 1.529l5.382-2.83L17 23.221z"></svg:path>`,
})
export class FluentStarThreeQuarter28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
