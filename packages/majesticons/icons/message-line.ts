import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMessageLineIcon],svg[majesticons-message-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4.82a1 1 0 0 0-.61.207l-4.35 3.347C7.903 22.566 6 21.63 6 19.97V19a1 1 0 0 0-1-1a3 3 0 0 1-3-3V6zm3-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1a3 3 0 0 1 3 3v.97l4.351-3.348a3 3 0 0 1 1.83-.622H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5z"></svg:path></svg:g>`,
})
export class MajesticonsMessageLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
