import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riScissors2FillIcon],svg[ri-scissors-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.118l-2.317 2.316a4 4 0 1 1-2.121-2.121l2.317-2.316L4.21 6.329a2 2 0 0 1 0-2.828l.708-.707L12 9.875l7.081-7.081l.708.707a2 2 0 0 1 0 2.828l-5.668 5.668l2.317 2.316a4 4 0 1 1-2.121 2.121zm-6 5.879a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiScissors2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
