import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDocutainIcon],svg[arcticons-docutain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.57 4.5h2.286A17.06 17.06 0 0 1 40.92 21.563v4.875A17.06 17.06 0 0 1 23.856 43.5H11.081V14.989"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.57 4.5v10.489H11.081z"></svg:path>`,
})
export class ArcticonsDocutainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
