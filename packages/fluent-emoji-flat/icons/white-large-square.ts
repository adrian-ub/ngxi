import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatWhiteLargeSquareIcon],svg[fluent-emoji-flat-white-large-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9B9B9B" d="M4.028 1.5a2.5 2.5 0 0 0-2.5 2.5v24a2.5 2.5 0 0 0 2.5 2.5h24a2.5 2.5 0 0 0 2.5-2.5V4a2.5 2.5 0 0 0-2.5-2.5z"></svg:path><svg:path fill="#fff" d="M2.528 4a1.5 1.5 0 0 1 1.5-1.5h24a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1-1.5 1.5h-24a1.5 1.5 0 0 1-1.5-1.5z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatWhiteLargeSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
