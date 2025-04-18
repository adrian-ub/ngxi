import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbon16FilledIcon],svg[fluent-ribbon-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a5 5 0 1 0 0 10A5 5 0 0 0 8 1M5 14.5v-3.303c.883.51 1.907.803 3 .803a6 6 0 0 0 3-.803V14.5a.5.5 0 0 1-.757.429L8 13.583L5.757 14.93A.5.5 0 0 1 5 14.5"></svg:path>`,
})
export class FluentRibbon16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
