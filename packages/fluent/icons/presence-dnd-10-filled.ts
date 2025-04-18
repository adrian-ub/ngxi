import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceDnd10FilledIcon],svg[fluent-presence-dnd-10-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10M3.5 4.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentPresenceDnd10FilledIcon {
  readonly viewBox = input("0 0 10 10")
  readonly width = input("1em")
  readonly height = input("1em")
}
