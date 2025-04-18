import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileTextLineIcon],svg[majesticons-file-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 21 8.828V19a3 3 0 0 1-3 3H6zm-1-3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h-3a3 3 0 0 1-3-3V4H6a1 1 0 0 0-1 1v14zM16 8h2.586L15 4.414V7a1 1 0 0 0 1 1zm-8 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8z"></svg:path></svg:g>`,
})
export class MajesticonsFileTextLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
