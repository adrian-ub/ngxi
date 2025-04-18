import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riScissorsFillIcon],svg[ri-scissors-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.683 7.559L12 9.875l6.374-6.374a2 2 0 0 1 2.829 0l.707.707L9.683 16.435a4 4 0 1 1-2.121-2.121l2.317-2.317L7.562 9.68a4 4 0 1 1 2.121-2.12M6 7.997a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9.535-6.587l6.375 6.375l-.707.707a2 2 0 0 1-2.829 0l-4.96-4.96z"></svg:path>`,
})
export class RiScissorsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
