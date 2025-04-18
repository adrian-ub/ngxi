import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlert48RegularIcon],svg[fluent-alert-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19v8.75c0 .174-.036.346-.107.505L8.639 34.5h30.724l-2.756-6.245a1.25 1.25 0 0 1-.106-.505V19c0-6.904-5.596-12.5-12.5-12.5S11.5 12.096 11.5 19M18 37H8.254a2.25 2.25 0 0 1-2.058-3.158L9 27.487V19c0-8.284 6.716-15 15-15s15 6.716 15 15v8.487l2.804 6.355A2.25 2.25 0 0 1 39.746 37H30v1a6 6 0 0 1-12 0zm9.5 0h-7v1a3.5 3.5 0 1 0 7 0z"></svg:path>`,
})
export class FluentAlert48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
