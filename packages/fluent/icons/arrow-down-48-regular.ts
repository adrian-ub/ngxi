import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDown48RegularIcon],svg[fluent-arrow-down-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.25 5.25a1.25 1.25 0 1 0-2.5 0v32.446L10.141 24.874a1.25 1.25 0 1 0-1.782 1.752l14.75 15a1.25 1.25 0 0 0 1.782 0l14.75-15a1.25 1.25 0 1 0-1.782-1.752L25.25 37.696z"></svg:path>`,
})
export class FluentArrowDown48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
