import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamond48FilledIcon],svg[fluent-diamond-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.834 19.58a6.25 6.25 0 0 0 0 8.84l13.749 13.748a6.25 6.25 0 0 0 8.839 0L42.17 28.419a6.25 6.25 0 0 0 0-8.838L28.422 5.832a6.25 6.25 0 0 0-8.84 0z"></svg:path>`,
})
export class FluentDiamond48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
