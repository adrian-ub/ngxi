import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQliroIcon],svg[arcticons-qliro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.495 31.248H35.5a9 9 0 0 0 9-9h0a9 9 0 0 0-9-9h-23a9 9 0 0 0-9 9h0a9 9 0 0 0 9 9h8.176c.848 0 1.66.337 2.26.936l2.569 2.568"></svg:path>`,
})
export class ArcticonsQliroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
