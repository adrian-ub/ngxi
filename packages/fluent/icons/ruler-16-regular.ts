import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRuler16RegularIcon],svg[fluent-ruler-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.5A1.5 1.5 0 0 0 9.5 2h-3A1.5 1.5 0 0 0 5 3.5v9A1.5 1.5 0 0 0 6.5 14h3a1.5 1.5 0 0 0 1.5-1.5zM9.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V11h1.5a.5.5 0 0 0 0-1H6V8.5h2a.5.5 0 1 0 0-1H6V6h1.5a.5.5 0 1 0 0-1H6V3.5a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class FluentRuler16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
