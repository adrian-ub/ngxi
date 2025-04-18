import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArmchairLineIcon],svg[ri-armchair-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a4 4 0 0 0-4 4v2.126a4.002 4.002 0 0 0-1 7.339V21h2v-1h14v1h2v-4.535a4.002 4.002 0 0 0-1-7.339V7a4 4 0 0 0-4-4zm10 6.126c-1.725.444-3 2.01-3 3.874H9a4 4 0 0 0-3-3.874V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zM9 15h6v1h2v-3a2 2 0 1 1 2.667 1.886a1 1 0 0 0-.667.943V18H5v-2.17a1 1 0 0 0-.667-.944A2.001 2.001 0 0 1 5 11a2 2 0 0 1 2 2v3h2z"></svg:path>`,
})
export class RiArmchairLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
