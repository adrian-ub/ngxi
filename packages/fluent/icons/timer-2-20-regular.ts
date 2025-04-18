import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimer220RegularIcon],svg[fluent-timer-2-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m7.45 1.429a.5.5 0 0 1 .706 0l1.414 1.414a.5.5 0 1 1-.707.707L14.45 4.636a.5.5 0 0 1 0-.707M9 6.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0zm3 11.04a7 7 0 1 1 4.446-7.41a3.5 3.5 0 0 0-1.029-.13A6.002 6.002 0 0 0 3.5 11a6 6 0 0 0 8.688 5.366A3.5 3.5 0 0 0 12 17.5zM15.5 11a2.5 2.5 0 0 0-2.5 2.5a.5.5 0 0 0 1 0a1.5 1.5 0 1 1 1.5 1.5a2.5 2.5 0 0 0-2.5 2.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14v-.5a1.5 1.5 0 0 1 1.5-1.5a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class FluentTimer220RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
