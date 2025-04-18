import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaScissorsFillIcon],svg[eva-scissors-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.21 5.71a1 1 0 1 0-1.42-1.42l-6.28 6.31l-3.3-3.31A3 3 0 0 0 9.5 6a3 3 0 1 0-3 3a3 3 0 0 0 1.29-.3L11.1 12l-3.29 3.3A3 3 0 0 0 6.5 15a3 3 0 1 0 3 3a3 3 0 0 0-.29-1.26ZM6.5 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1m0 12a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M15.21 13.29a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class EvaScissorsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
