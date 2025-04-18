import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMinusTenCircleLineIcon],svg[majesticons-minus-ten-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 12h3m2-3h2v6m6-1.5v-3A1.5 1.5 0 0 0 16.5 9v0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5v0a1.5 1.5 0 0 0 1.5-1.5"></svg:path><svg:circle r="10" transform="matrix(-1 0 0 1 12 12)"></svg:circle></svg:g>`,
})
export class MajesticonsMinusTenCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
