import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsArchiveLineIcon],svg[majesticons-archive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 5a1 1 0 0 0-1 1v1h16V6a1 1 0 0 0-1-1H5zM2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1a2 2 0 0 1-1 1.732V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8.732A2 2 0 0 1 2 7V6zm3 3v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9H5zm4 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsArchiveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
