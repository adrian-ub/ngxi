import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoorTag20FilledIcon],svg[fluent-door-tag-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.293 6.293A1 1 0 1 1 10 8H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7.048a5 5 0 0 0-8.535-3.583a2 2 0 1 0 2.828 2.828M8 14h4a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentDoorTag20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
