import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookCompass20RegularIcon],svg[fluent-book-compass-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2M15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10zm-5 .5a.5.5 0 0 1 .5.5v1.063a2 2 0 0 1 .743 3.504l1.214 2.73a.5.5 0 0 1-.914.406l-1.213-2.73a2 2 0 0 1-.66 0l-1.213 2.73a.5.5 0 1 1-.914-.406l1.213-2.73A2 2 0 0 1 9.5 6.063V5a.5.5 0 0 1 .5-.5m-.5 2.634a1 1 0 1 0 1 1.731a1 1 0 0 0-1-1.731"></svg:path>`,
})
export class FluentBookCompass20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
