import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionSquareLeft16RegularIcon],svg[fluent-text-position-square-left-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM10 4.5a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1zm-.5 3A.5.5 0 0 1 10 7h3.5a.5.5 0 0 1 0 1H10a.5.5 0 0 1-.5-.5m.5 2a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1zm-8 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5M3 7a2 2 0 1 1 4 0v3.5a.5.5 0 0 0 1 0V7a3 3 0 0 0-6 0v3.5a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentTextPositionSquareLeft16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
