import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTent28FilledIcon],svg[fluent-tent-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.601 3.211a.75.75 0 0 0-1.152 0c-1.795 2.154-5.337 4.71-7.374 5.848a.75.75 0 0 0-.377.552L4.06 21.5H2.75a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5h-1.26L22.352 9.61a.75.75 0 0 0-.378-.552c-2.036-1.138-5.578-3.694-7.373-5.848M10.272 21.5c1.259-1.83 2.557-4.18 3.728-7.892c1.059 3.35 2.24 5.665 3.728 7.892z"></svg:path>`,
})
export class FluentTent28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
