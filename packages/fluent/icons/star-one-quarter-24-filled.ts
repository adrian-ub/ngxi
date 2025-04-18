import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarOneQuarter24FilledIcon],svg[fluent-star-one-quarter-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6.725L8.43 7.88l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719l-.9 5.25c-.15.871.54 1.579 1.325 1.582c.21.001.426-.048.635-.158L9 20.44z"></svg:path>`,
})
export class FluentStarOneQuarter24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
