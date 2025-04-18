import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biBrillianceIcon],svg[bi-brilliance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7a3.5 3.5 0 1 0 0-7a3.5 3.5 0 1 1 0-7a7 7 0 0 0-7 7"></svg:path>`,
})
export class BiBrillianceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
