import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMicroscope20FilledIcon],svg[fluent-microscope-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V3h.5a.5.5 0 0 1 .5.5v1.53a.5.5 0 0 1 .11-.001A6.5 6.5 0 0 1 13.965 17H16.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h7A5.5 5.5 0 0 0 11 6.022V11.5a.5.5 0 0 1-.5.5H10v.5a1.5 1.5 0 0 1-3 0V12h-.5a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5H7zM8 12v.5a.5.5 0 0 0 1 0V12zm-2.5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentMicroscope20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
