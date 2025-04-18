import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserCircleIcon],svg[majesticons-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5.2 19.332A9.973 9.973 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.973 9.973 0 0 1-3.2 7.332a7.014 7.014 0 0 0-3.55-4.533a5 5 0 1 0-6.502 0A7.014 7.014 0 0 0 5.2 19.332zm1.81 1.336A9.954 9.954 0 0 0 12 22c1.817 0 3.52-.485 4.99-1.332a5 5 0 0 0-9.98 0zM12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
