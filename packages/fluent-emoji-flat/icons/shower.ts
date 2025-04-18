import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatShowerIcon],svg[fluent-emoji-flat-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#636363" d="m20.232 8.232l2-2L24.5 7.5l1.268 2.268l-2 2z"></svg:path><svg:path fill="#9B9B9B" d="M23.345 21.344A9 9 0 0 0 10.656 8.655L15.5 16.5z"></svg:path><svg:path fill="#BEBEBE" d="M29.268 2.732a2.5 2.5 0 0 1 0 3.536l-3.5 3.5l-3.536-3.536l3.5-3.5a2.5 2.5 0 0 1 3.536 0m-18.22 6.22a3.25 3.25 0 0 0-4.596 4.596l12.5 12.5a3.25 3.25 0 0 0 4.596-4.596z"></svg:path><svg:path fill="#3F5FFF" d="M8.06 16.94a1.5 1.5 0 0 1 0 2.12l-3.5 3.5a1.5 1.5 0 0 1-2.12-2.12l3.5-3.5a1.5 1.5 0 0 1 2.12 0m3.5 3.5a1.5 1.5 0 0 1 0 2.12l-3.5 3.5a1.5 1.5 0 0 1-2.12-2.12l3.5-3.5a1.5 1.5 0 0 1 2.12 0m3.5 5.62a1.5 1.5 0 0 0-2.12-2.12l-3.5 3.5a1.5 1.5 0 0 0 2.12 2.12z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatShowerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
