import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCompassNorthwest16FilledIcon],svg[fluent-compass-northwest-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m2.438-5.236a.5.5 0 0 1-.674.674l-1.922-1a3 3 0 0 1-1.279-1.281l-.989-1.909a.5.5 0 0 1 .674-.674l1.91.99a3 3 0 0 1 1.28 1.278z"></svg:path>`,
})
export class FluentCompassNorthwest16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
