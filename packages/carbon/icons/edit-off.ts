import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonEditOffIcon],svg[carbon-edit-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 28.6L3.4 2L2 3.4l10.1 10.1L4 21.6V28h6.4l8.1-8.1L28.6 30zM9.6 26H6v-3.6l7.5-7.5l3.6 3.6zM29.4 6.2l-3.6-3.6c-.8-.8-2-.8-2.8 0l-8 8l1.4 1.4L20 8.4l3.6 3.6l-3.6 3.6l1.4 1.4l8-8c.8-.8.8-2 0-2.8M25 10.6L21.4 7l3-3L28 7.6z"></svg:path>`,
})
export class CarbonEditOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
