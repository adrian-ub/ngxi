import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouse07Icon],svg[hugeicons-mouse-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 2a1.5 1.5 0 0 0 1.5 1.5H9c1.886 0 2.828 0 3.414.586c.404.404.53.978.569 1.914M7.192 18.071c.152 1.913 1.667 3.538 3.62 3.778c.718.089 1.448.151 2.188.151s1.47-.062 2.188-.15c1.953-.241 3.467-1.866 3.62-3.779c.105-1.326.192-2.685.192-4.071s-.087-2.745-.193-4.071c-.151-1.913-1.666-3.538-3.62-3.778A18 18 0 0 0 13 6c-.74 0-1.47.062-2.188.15c-1.953.241-3.468 1.866-3.62 3.779C7.087 11.255 7 12.614 7 14s.087 2.745.192 4.071M13 9v2" color="currentColor"></svg:path>`,
})
export class HugeiconsMouse07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
