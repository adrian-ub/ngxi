import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsDotsCircleLineIcon],svg[majesticons-dots-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm0 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm3 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm-8-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4z"></svg:path></svg:g>`,
})
export class MajesticonsDotsCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
