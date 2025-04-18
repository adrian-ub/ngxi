import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGumtreeIcon],svg[arcticons-gumtree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.128 43.5c-.624-8.112 1.248-9.984 3.12-10.608c14.976-3.744 12.518-13.441 5.616-18.096c2.496-13.728-19.344-13.728-17.472 0c-6.864 4.368-9.36 14.352 3.12 18.096"></svg:path>`,
})
export class ArcticonsGumtreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
