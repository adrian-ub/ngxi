import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWindowColumnOneFourthLeft20FilledIcon],svg[fluent-window-column-one-fourth-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3zM17 7H7v10h7.5a2.5 2.5 0 0 0 2.5-2.5zM6 17V7H3v7.5A2.5 2.5 0 0 0 5.5 17z"></svg:path>`,
})
export class FluentWindowColumnOneFourthLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
