import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siMoveLineIcon],svg[si-move-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m19 15l3-3m0 0l-3-3m3 3H2m0 0l3 3m-3-3l3-3m10-4l-3-3m0 0L9 5m3-3v20m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class SiMoveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
