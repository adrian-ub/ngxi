import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal332FilledIcon],svg[fluent-line-horizontal-3-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.25C2 5.56 2.56 5 3.25 5h25.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 7.5 2 6.94 2 6.25m0 10c0-.69.56-1.25 1.25-1.25h25.5a1.25 1.25 0 1 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25M3.25 25a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentLineHorizontal332FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
