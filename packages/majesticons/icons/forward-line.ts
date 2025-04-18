import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsForwardLineIcon],svg[majesticons-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.617 4.076A1 1 0 0 0 12 5v3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8v3a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.09-.217zM18.586 12L14 16.586V15a1 1 0 0 0-1-1H5v-4h8a1 1 0 0 0 1-1V7.414L18.586 12z"></svg:path></svg:g>`,
})
export class MajesticonsForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
