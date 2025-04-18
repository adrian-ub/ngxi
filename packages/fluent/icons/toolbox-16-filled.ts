import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToolbox16FilledIcon],svg[fluent-toolbox-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.007 4.5v1H4A1.5 1.5 0 0 0 2.5 7v1H5v-.5a.5.5 0 0 1 1 0V8h4v-.5a.5.5 0 0 1 1 0V8h2.5V7A1.5 1.5 0 0 0 12 5.5h-.993v-1a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5m1.5-.5h3a.5.5 0 0 1 .5.5v1h-4v-1a.5.5 0 0 1 .5-.5M13.5 9H11v.5a.5.5 0 0 1-1 0V9H6v.503a.5.5 0 0 1-1 0V9H2.5v2A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5z"></svg:path>`,
})
export class FluentToolbox16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
