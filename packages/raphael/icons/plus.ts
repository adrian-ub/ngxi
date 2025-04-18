import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelPlusIcon],svg[raphael-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.98 12.896h-6.67V6.23h-6.665v6.666H5.98v6.666h6.667v6.667h6.665V19.56h6.667z"></svg:path>`,
})
export class RaphaelPlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
