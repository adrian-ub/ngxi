import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNumber9Icon],svg[ri-number-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.5a6.5 6.5 0 0 1 5.619 9.77l-6.196 10.729H9.114l4.439-7.686A6.5 6.5 0 1 1 12 1.5m0 2a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9"></svg:path>`,
})
export class RiNumber9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
