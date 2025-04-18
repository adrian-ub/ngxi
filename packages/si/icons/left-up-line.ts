import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siLeftUpLineIcon],svg[si-left-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5v9.6a4.4 4.4 0 0 0 4.4 4.4H19M9 5L5 9m4-4l4 4"></svg:path>`,
})
export class SiLeftUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
