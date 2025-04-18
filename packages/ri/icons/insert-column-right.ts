import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInsertColumnRightIcon],svg[ri-insert-column-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 5H5v14h4zm9 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m1 2h-2v1.999L15 11v2l2-.001V15h2v-2.001L21 13v-2l-2-.001z"></svg:path>`,
})
export class RiInsertColumnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
