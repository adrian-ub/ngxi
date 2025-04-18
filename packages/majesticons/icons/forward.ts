import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsForwardIcon],svg[majesticons-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12 5a1 1 0 0 1 1.707-.707l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 12 19v-3H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h8V5z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
