import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUp20FilledIcon],svg[fluent-arrow-up-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.201 8.735a.75.75 0 1 0 1.09 1.03l4.955-5.239V17.25a.75.75 0 0 0 1.5 0V4.524l4.957 5.241a.75.75 0 1 0 1.09-1.03l-6.07-6.418a1 1 0 0 0-.566-.3a.75.75 0 0 0-.328.002a1 1 0 0 0-.558.298z"></svg:path>`,
})
export class FluentArrowUp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
