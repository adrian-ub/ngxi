import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnTwoSplitLeft16FilledIcon],svg[fluent-layout-column-two-split-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 14h-3V2h3A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5m-7-12h3v5.5H2v-3A2.5 2.5 0 0 1 4.5 2M2 8.5v3A2.5 2.5 0 0 0 4.5 14h3V8.5z"></svg:path>`,
})
export class FluentLayoutColumnTwoSplitLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
