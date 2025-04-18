import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTriangleExclamationIcon],svg[meteor-icons-triangle-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.8 4a2 2 0 0 0-3.6 0Zm10-9v4m0 4"></svg:path>`,
})
export class MeteorIconsTriangleExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
