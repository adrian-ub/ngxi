import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsLockOpenLineIcon],svg[majesticons-lock-open-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.612 5.084C9.16 5.711 9 6.494 9 7v3h9a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h1V7c0-.827.24-2.044.988-3.084C8.774 2.825 10.074 2 12 2c1.926 0 3.226.825 4.012 1.916C16.76 4.956 17 6.173 17 7a1 1 0 1 1-2 0c0-.507-.16-1.289-.611-1.916C13.974 4.508 13.274 4 12 4c-1.274 0-1.974.508-2.388 1.084zM6 12a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H6zm6 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MajesticonsLockOpenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
