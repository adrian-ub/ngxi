import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimplIcon],svg[arcticons-simpl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.924 14.324c6.674 6.675 6.674 17.496 0 24.17s-17.496 6.675-24.17 0m2.323-4.818c-6.675-6.675-6.675-17.496 0-24.17s17.495-6.675 24.17 0"></svg:path>`,
})
export class ArcticonsSimplIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
