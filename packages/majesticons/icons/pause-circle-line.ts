import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPauseCircleLineIcon],svg[majesticons-pause-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 9h3v6H7zm7 0h3v6h-3z"></svg:path><svg:circle r="10" transform="matrix(-1 0 0 1 12 12)"></svg:circle></svg:g>`,
})
export class MajesticonsPauseCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
