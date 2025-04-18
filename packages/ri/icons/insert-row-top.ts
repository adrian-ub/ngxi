import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInsertRowTopIcon],svg[ri-insert-row-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm-1 2H5v4h14zM12 1a5 5 0 1 1 0 10a5 5 0 0 1 0-10m1 2h-2v1.999L9 5v2l2-.001V9h2V6.999L15 7V5l-2-.001z"></svg:path>`,
})
export class RiInsertRowTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
