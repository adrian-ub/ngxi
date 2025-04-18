import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleRightIcon],svg[octicon-triangle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 14l6-6l-6-6v12z" fill="currentColor"></svg:path>`,
})
export class OcticonTriangleRightIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}
