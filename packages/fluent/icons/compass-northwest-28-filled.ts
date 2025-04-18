import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCompassNorthwest28FilledIcon],svg[fluent-compass-northwest-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2S2 7.373 2 14s5.373 12 12 12m-.424-8.702a5 5 0 0 1-2.874-2.874L8.783 9.43a.5.5 0 0 1 .646-.647l4.995 1.92a5 5 0 0 1 2.874 2.873l1.919 4.995a.5.5 0 0 1-.646.646z"></svg:path>`,
})
export class FluentCompassNorthwest28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
