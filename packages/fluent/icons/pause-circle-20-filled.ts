import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPauseCircle20FilledIcon],svg[fluent-pause-circle-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m7-2.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm3 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentPauseCircle20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
