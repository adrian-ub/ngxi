import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewGridLineIcon],svg[majesticons-view-grid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5zM2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8z"></svg:path><svg:path d="M9 5a1 1 0 0 1 1 1v3h4V6a1 1 0 1 1 2 0v3h5a1 1 0 1 1 0 2h-5v2h5a1 1 0 1 1 0 2h-5v3a1 1 0 1 1-2 0v-3h-4v3a1 1 0 1 1-2 0v-3H3a1 1 0 1 1 0-2h5v-2H3a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1zm1 6v2h4v-2h-4z"></svg:path></svg:g>`,
})
export class MajesticonsViewGridLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
