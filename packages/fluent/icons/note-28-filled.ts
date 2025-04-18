import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNote28FilledIcon],svg[fluent-note-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75V15h-6.25A3.75 3.75 0 0 0 15 18.75V25H6.75A3.75 3.75 0 0 1 3 21.25zM16.5 25h.06L25 16.56v-.06h-6.25a2.25 2.25 0 0 0-2.25 2.25z"></svg:path>`,
})
export class FluentNote28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
