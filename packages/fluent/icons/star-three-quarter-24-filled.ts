import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarThreeQuarter24FilledIcon],svg[fluent-star-three-quarter-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 6.727l-1.789-3.625a1.33 1.33 0 0 0-1.212-.752c-.481 0-.963.25-1.211.752L8.43 7.88l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719l-.9 5.25c-.15.874.544 1.583 1.331 1.582c.208 0 .422-.05.63-.158l4.714-2.479L15 20.441z"></svg:path>`,
})
export class FluentStarThreeQuarter24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
