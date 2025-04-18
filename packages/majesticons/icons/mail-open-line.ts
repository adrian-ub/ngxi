import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMailOpenLineIcon],svg[majesticons-mail-open-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 9a3 3 0 0 1 3-3h1a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v.51l7.386 5.746a1 1 0 0 0 1.228 0L20 9.51V9a1 1 0 0 0-1-1h-1a1 1 0 1 1 0-2h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9zm18 3.045l-6.158 4.79a3 3 0 0 1-3.684 0L4 12.044V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6.955z"></svg:path><svg:path d="M8 4a1 1 0 0 0-1 1v7a1 1 0 1 1-2 0V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v7a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1H8z"></svg:path><svg:path d="M9 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1zm0 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsMailOpenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
