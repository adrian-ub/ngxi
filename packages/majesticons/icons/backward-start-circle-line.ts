import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBackwardStartCircleLineIcon],svg[majesticons-backward-start-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle r="10" transform="matrix(-1 0 0 1 12 12)"></svg:circle><svg:path d="M17 15V9l-5 3zM7 12l5 3V9zm0 0V9m0 3v3"></svg:path></svg:g>`,
})
export class MajesticonsBackwardStartCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
