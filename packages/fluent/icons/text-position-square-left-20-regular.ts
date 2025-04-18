import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionSquareLeft20RegularIcon],svg[fluent-text-position-square-left-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM12 6a.5.5 0 0 0 0 1h4.5a.5.5 0 0 0 0-1zm-.5 3.5A.5.5 0 0 1 12 9h4.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5M12 12a.5.5 0 0 0 0 1h4.5a.5.5 0 0 0 0-1zm-9 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m1-7a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentTextPositionSquareLeft20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
