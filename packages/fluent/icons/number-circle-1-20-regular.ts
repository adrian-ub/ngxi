import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle120RegularIcon],svg[fluent-number-circle-1-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6.5a.5.5 0 0 0-.985-.121c-.103.41-.373.911-.727 1.383c-.354.471-.752.863-1.065 1.072a.5.5 0 0 0 .554.832c.405-.27.845-.705 1.223-1.19V13.5a.5.5 0 1 0 1 0zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0"></svg:path>`,
})
export class FluentNumberCircle120RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
