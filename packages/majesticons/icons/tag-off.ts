import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTagOffIcon],svg[majesticons-tag-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3L3 21"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m13.293 2.879l1.5 1.5L4.379 14.793l-1.5-1.5A3 3 0 0 1 2 11.172V5a3 3 0 0 1 3-3h6.172a3 3 0 0 1 2.12.879zm4.328 4.328L7.207 17.621l3.672 3.672a3 3 0 0 0 4.242 0l6.172-6.172a3 3 0 0 0 0-4.242zM7 6a1 1 0 0 0 0 2h.001a1 1 0 0 0 0-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsTagOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
