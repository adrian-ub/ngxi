import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowTwoSplitBottom16FilledIcon],svg[fluent-layout-row-two-split-bottom-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3h12v-3A2.5 2.5 0 0 0 11.5 2zM14 8.5H8.5V14h3a2.5 2.5 0 0 0 2.5-2.5zm-6.5 0H2v3A2.5 2.5 0 0 0 4.5 14h3z"></svg:path>`,
})
export class FluentLayoutRowTwoSplitBottom16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
