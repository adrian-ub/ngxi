import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToolbox12FilledIcon],svg[fluent-toolbox-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.5A1.5 1.5 0 0 1 4.5 2h3A1.5 1.5 0 0 1 9 3.5V4h.5A1.5 1.5 0 0 1 11 5.5V7H8v-.5a.5.5 0 0 0-1 0V7H5v-.5a.5.5 0 0 0-1 0V7H1V5.5A1.5 1.5 0 0 1 2.5 4H3zM4.5 3a.5.5 0 0 0-.5.5V4h4v-.5a.5.5 0 0 0-.5-.5zM11 8H8v.5a.5.5 0 0 1-1 0V8H5v.5a.5.5 0 0 1-1 0V8H1v1.5A1.5 1.5 0 0 0 2.5 11h7A1.5 1.5 0 0 0 11 9.5z"></svg:path>`,
})
export class FluentToolbox12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
