import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsReloadCircleLineIcon],svg[majesticons-reload-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m13 8l2 2l-2 2m0-2h-1c-1 0-3 .6-3 3s2 3 3 3c.534 0 1.353-.171 2-.695"></svg:path></svg:g>`,
})
export class MajesticonsReloadCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
