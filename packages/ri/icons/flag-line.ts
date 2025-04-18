import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFlagLineIcon],svg[ri-flag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.382 3a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3V3zm-.618 2H5v9h8.236l1 2H19V7h-6.236z"></svg:path>`,
})
export class RiFlagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
