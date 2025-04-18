import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignLeft28FilledIcon],svg[fluent-align-left-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.75a.75.75 0 0 1 1.5 0v22.5a.75.75 0 0 1-1.5 0zM8.75 5A2.75 2.75 0 0 0 6 7.75v2.5A2.75 2.75 0 0 0 8.75 13h13.5A2.75 2.75 0 0 0 25 10.25v-2.5A2.75 2.75 0 0 0 22.25 5zm0 10A2.75 2.75 0 0 0 6 17.75v2.5A2.75 2.75 0 0 0 8.75 23h8a2.75 2.75 0 0 0 2.75-2.75v-2.5A2.75 2.75 0 0 0 16.75 15z"></svg:path>`,
})
export class FluentAlignLeft28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
