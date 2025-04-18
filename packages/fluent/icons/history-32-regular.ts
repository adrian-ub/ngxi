import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHistory32RegularIcon],svg[fluent-history-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c6.075 0 11 4.925 11 11s-4.925 11-11 11S5 22.075 5 16q0-.464.038-.918a1 1 0 1 0-1.994-.164Q3 15.454 3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3a12.96 12.96 0 0 0-9 3.62V4a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2H8.45c1.97-1.86 4.627-3 7.55-3m1 4a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-4z"></svg:path>`,
})
export class FluentHistory32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
