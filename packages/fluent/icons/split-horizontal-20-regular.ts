import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitHorizontal20RegularIcon],svg[fluent-split-horizontal-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 10a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1zM16 4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4h1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4h1zm0 7h-1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4H4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"></svg:path>`,
})
export class FluentSplitHorizontal20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
