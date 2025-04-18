import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentZoomOut20RegularIcon],svg[fluent-zoom-out-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1zm3 .5a5.5 5.5 0 1 0-1.98 4.227l4.126 4.127l.07.057a.5.5 0 0 0 .638-.765l-4.127-4.126A5.48 5.48 0 0 0 14 8.5m-10 0a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"></svg:path>`,
})
export class FluentZoomOut20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
