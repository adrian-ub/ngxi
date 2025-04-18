import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPixelfedLineIcon],svg[ri-pixelfed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m1.031 4.099c1.713 0 3.101 1.345 3.101 3.005s-1.388 3.005-3.1 3.005h-1.819L8.62 16.58V9.832c0-.957.801-1.733 1.79-1.733z"></svg:path>`,
})
export class RiPixelfedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
