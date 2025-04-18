import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleLeft32RegularIcon],svg[fluent-triangle-left-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.68 18.843c-2.24-1.236-2.24-4.457.002-5.693L24.18 2.408C26.346 1.215 29 2.782 29 5.255v21.492c0 2.473-2.654 4.04-4.82 2.846zm.967-3.94a1.25 1.25 0 0 0 0 2.189l19.498 10.75a1.25 1.25 0 0 0 1.854-1.095V5.255a1.25 1.25 0 0 0-1.854-1.095z"></svg:path>`,
})
export class FluentTriangleLeft32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
