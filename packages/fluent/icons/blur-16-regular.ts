import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBlur16RegularIcon],svg[fluent-blur-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a6 6 0 1 0 4.472 10H8v1A5 5 0 0 1 8 3h3.318A5.97 5.97 0 0 0 8 2m0 2h4.472q.414.462.725 1H8zm5.659 2H8v1h5.917a6 6 0 0 0-.258-1M8 8h6q0 .511-.083 1H8zm5.659 2H8v1h5.197q.275-.475.462-1"></svg:path>`,
})
export class FluentBlur16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
