import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ri4kLineIcon],svg[ri-4k-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8.5 10.5h-1V15H9v-1.5H6V9h1.5v3H9V9h1.5v3h1zM18 15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z"></svg:path>`,
})
export class Ri4kLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
