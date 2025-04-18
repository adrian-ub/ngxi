import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFrame16FilledIcon],svg[fluent-frame-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1a.5.5 0 0 1 .5.5V3h8V1.5a.5.5 0 0 1 1 0V3h1.5a.5.5 0 0 1 0 1H13v8h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V13H4v1.5a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H3V4H1.5a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentFrame16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
