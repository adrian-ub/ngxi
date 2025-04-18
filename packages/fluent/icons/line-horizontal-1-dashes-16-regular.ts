import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal1Dashes16RegularIcon],svg[fluent-line-horizontal-1-dashes-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4.5 0A.5.5 0 0 1 7 7h2a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5m4.5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentLineHorizontal1Dashes16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
