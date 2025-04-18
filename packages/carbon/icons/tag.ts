import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTagIcon],svg[carbon-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 1.998 2.004A2 2 0 0 0 10 8"></svg:path><svg:path fill="currentColor" d="M16.644 29.415L2.586 15.355A2 2 0 0 1 2 13.942V4a2 2 0 0 1 2-2h9.941a2 2 0 0 1 1.414.586l14.06 14.058a2 2 0 0 1 0 2.828l-9.943 9.943a2 2 0 0 1-2.828 0M4 4v9.942L18.058 28L28 18.058L13.942 4Z"></svg:path>`,
})
export class CarbonTagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
