import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibGgIcon],svg[cib-gg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.2 14.4l6.4 6.4l-6.4 6.4L0 16L11.2 4.8L14 7.6l-1.6 1.6L11.2 8l-8 8l8 8l3.219-3.219L9.6 16zm9.6-9.6l-6.4 6.4l6.4 6.4l1.6-1.6l-4.819-4.781L20.8 8l8 8l-8 8l-1.2-1.2l-1.6 1.6l2.8 2.8L32 16z"></svg:path>`,
})
export class CibGgIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
