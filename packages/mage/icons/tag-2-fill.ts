import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageTag2FillIcon],svg[mage-tag-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.48 11.695a3.4 3.4 0 0 0-.72-1.08l-7-7a4.56 4.56 0 0 0-3.25-1.35H5.59a3.31 3.31 0 0 0-3.32 3.31v4.92a4.58 4.58 0 0 0 1.35 3.26l7 7a3.33 3.33 0 0 0 2.35.98a3.3 3.3 0 0 0 1.27-.26c.4-.169.763-.413 1.07-.72l2.73-2.72l2.72-2.72c.307-.31.551-.677.72-1.08a3.35 3.35 0 0 0 0-2.54m-12.37.46a3.05 3.05 0 1 1 3-3.05a3.06 3.06 0 0 1-3 3.08zm7.66 1l-3.63 3.64a1 1 0 1 1-1.41-1.42l3.63-3.63a1 1 0 1 1 1.41 1.42z"></svg:path>`,
})
export class MageTag2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
