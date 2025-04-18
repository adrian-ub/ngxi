import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTagOffLineIcon],svg[majesticons-tag-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 5l-1.414-1.414A2 2 0 0 0 11.172 3H5a2 2 0 0 0-2 2v6.172a2 2 0 0 0 .586 1.414L5 14m14-4l1.586 1.586a2 2 0 0 1 0 2.828l-6.172 6.172a2 2 0 0 1-2.828 0L10 19M7 7h.001M21 3L3 21"></svg:path>`,
})
export class MajesticonsTagOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
