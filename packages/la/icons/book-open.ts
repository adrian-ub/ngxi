import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBookOpenIcon],svg[la-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v19h10c1.102 0 2 .898 2 2h2c0-1.102.898-2 2-2h10V6H19a4 4 0 0 0-3 1.36A4 4 0 0 0 13 6zm2 2h8c1.102 0 2 .898 2 2h2c0-1.102.898-2 2-2h8v15h-8a4 4 0 0 0-3 1.36A4 4 0 0 0 13 23H5zm10 4v2h2v-2zm0 4v2h2v-2zm0 4v2h2v-2z"></svg:path>`,
})
export class LaBookOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
