import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationOff24FilledIcon],svg[fluent-location-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.566 2.567a8.71 8.71 0 0 0 1.057 11.035q.444.444 1.102 1.09l3.491 3.396a2.25 2.25 0 0 0 3.128 0a657 657 0 0 0 3.406-3.312l.013-.012l3.736 3.736a.75.75 0 0 0 1.061-1.06zm9.126 11.247a2.5 2.5 0 0 1-2.874-2.874zM14.5 11q0 .153-.018.3l4.555 4.555A8.71 8.71 0 0 0 6.87 3.688l4.83 4.83q.147-.018.3-.018a2.5 2.5 0 0 1 2.5 2.5"></svg:path>`,
})
export class FluentLocationOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
