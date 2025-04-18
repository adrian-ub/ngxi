import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDoubanLineIcon],svg[ri-douban-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.274 15H5V7h14v8h-1.624l-1.3 4H21v2H3v-2h4.612L6.8 16.5l1.902-.618L9.715 19h4.259zM3.5 3h17v2h-17zM7 9v4h10V9z"></svg:path>`,
})
export class RiDoubanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
