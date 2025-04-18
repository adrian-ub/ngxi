import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons3dropIcon],svg[arcticons-3drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5s11.482 21.864 11.914 23.474A12.333 12.333 0 0 1 16.925 41.27a12.33 12.33 0 0 1-4.839-13.295C12.605 26.04 24 4.5 24 4.5m0 0l12.022 29.424"></svg:path>`,
})
export class Arcticons3dropIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
