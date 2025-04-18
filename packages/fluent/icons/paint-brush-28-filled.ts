import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrush28FilledIcon],svg[fluent-paint-brush-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6.25a.75.75 0 0 1-1.5 0V2H6.75a.75.75 0 0 0-.75.75V13h16V2.75a.75.75 0 0 0-.75-.75H20v6.25a.75.75 0 0 1-1.5 0V2H17zM6 14.5v1.75A2.75 2.75 0 0 0 8.75 19h2.75v4.5a2.5 2.5 0 0 0 5 0V19h2.75A2.75 2.75 0 0 0 22 16.25V14.5z"></svg:path>`,
})
export class FluentPaintBrush28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
