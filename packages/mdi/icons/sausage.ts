import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSausageIcon],svg[mdi-sausage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5.3c1.2.5 2 1.8 2 3.2C21 15.4 15.4 21 8.5 21c-1.4 0-2.6-.8-3.2-2L3 20.5v-6L5.3 16c.6-1.2 1.8-2 3.2-2c3 0 5.5-2.5 5.5-5.5c0-1.4.8-2.6 2-3.2L14.5 3h6z"></svg:path>`,
})
export class MdiSausageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
