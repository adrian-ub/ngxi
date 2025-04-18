import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimer220FilledIcon],svg[fluent-timer-2-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm7.656 1.929a.5.5 0 1 0-.707.707l1.414 1.414a.5.5 0 1 0 .707-.707zm1.29 6.2A3.5 3.5 0 0 0 12 13.5a1.5 1.5 0 0 0 1.105 1.448A3.5 3.5 0 0 0 12 17.5v.04a7 7 0 1 1 4.446-7.41M9 11.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0zm6.5-.5a2.5 2.5 0 0 0-2.5 2.5a.5.5 0 0 0 1 0a1.5 1.5 0 1 1 1.5 1.5a2.5 2.5 0 0 0-2.5 2.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14v-.5a1.5 1.5 0 0 1 1.5-1.5a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class FluentTimer220FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
